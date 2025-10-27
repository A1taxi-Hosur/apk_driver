/*
  # Update Push Notification Trigger to Call Edge Function

  1. Changes
    - Update trigger to actually call Edge Function using pg_net
    - Send push notification asynchronously when ride notification created
    - Works even when app is closed/killed

  2. How It Works
    - Trigger fires after INSERT on notifications table
    - Gets driver's push token from database
    - Makes HTTP POST to Edge Function
    - Edge Function sends push via Expo Push Service
    - Driver receives notification even if app closed
*/

-- Update function to call Edge Function
CREATE OR REPLACE FUNCTION send_ride_request_push_notification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_driver_push_token text;
  v_driver_id uuid;
  v_payload jsonb;
  v_request_id bigint;
BEGIN
  -- Only process ride_request notifications
  IF NEW.type != 'ride_request' THEN
    RETURN NEW;
  END IF;

  RAISE LOG 'Push notification trigger: Processing ride request notification %', NEW.id;

  -- Get driver push token
  SELECT id, expo_push_token
  INTO v_driver_id, v_driver_push_token
  FROM drivers
  WHERE user_id = NEW.user_id
  LIMIT 1;

  -- Check if driver has push token
  IF v_driver_push_token IS NULL OR v_driver_push_token = '' THEN
    RAISE LOG 'Push notification trigger: Driver has no push token, skipping';
    RETURN NEW;
  END IF;

  RAISE LOG 'Push notification trigger: Found push token for driver %', v_driver_id;

  -- Prepare payload for Edge Function
  v_payload := jsonb_build_object(
    'pushTokens', jsonb_build_array(v_driver_push_token),
    'rideId', NEW.data->>'ride_id',
    'rideCode', COALESCE(NEW.data->>'ride_code', 'N/A'),
    'pickupAddress', COALESCE(NEW.data->>'pickup_address', 'Unknown pickup'),
    'destinationAddress', COALESCE(NEW.data->>'destination_address', 'Unknown destination'),
    'customerName', COALESCE(NEW.data->>'customer_name', 'Customer'),
    'fareAmount', COALESCE((NEW.data->>'fare_amount')::numeric, 0),
    'bookingType', COALESCE(NEW.data->>'booking_type', 'regular')
  );

  RAISE LOG 'Push notification trigger: Calling Edge Function with payload: %', v_payload;

  -- Call Edge Function using pg_net
  SELECT net.http_post(
    url := current_setting('app.settings.supabase_url', true) || '/functions/v1/send-ride-push-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := v_payload
  ) INTO v_request_id;

  RAISE LOG 'Push notification trigger: Edge Function called, request_id: %', v_request_id;

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't fail the notification insert
    RAISE WARNING 'Push notification trigger: Error sending push notification: %', SQLERRM;
    RETURN NEW;
END;
$$;

COMMENT ON FUNCTION send_ride_request_push_notification IS 'Send push notification via Edge Function when ride request notification is created';
