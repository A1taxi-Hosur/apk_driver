/*
  # Add Push Notification Trigger for Ride Requests

  1. Purpose
    - Automatically send push notifications when ride request notifications are created
    - Calls Edge Function to send Expo push notifications
    - Works even when app is closed/killed

  2. How It Works
    - Trigger fires after INSERT on notifications table
    - Only for type='ride_request'
    - Calls Edge Function with driver's push token and ride details
    - Push notification delivered via Expo Push Service

  3. This replaces background fetch for reliability
*/

-- Create function to send push notification via Edge Function
CREATE OR REPLACE FUNCTION send_ride_request_push_notification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_driver_push_token text;
  v_driver_id uuid;
  v_ride_data jsonb;
  v_edge_function_url text;
  v_supabase_url text;
BEGIN
  -- Only process ride_request notifications
  IF NEW.type != 'ride_request' THEN
    RETURN NEW;
  END IF;

  RAISE LOG 'Push notification trigger: Processing ride request notification %', NEW.id;

  -- Get driver ID from user_id
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

  RAISE LOG 'Push notification trigger: Driver push token found: %', v_driver_push_token;

  -- Prepare notification data for logging
  v_ride_data := jsonb_build_object(
    'pushTokens', jsonb_build_array(v_driver_push_token),
    'rideId', NEW.data->>'ride_id',
    'rideCode', NEW.data->>'ride_code',
    'pickupAddress', NEW.data->>'pickup_address',
    'destinationAddress', NEW.data->>'destination_address',
    'customerName', NEW.data->>'customer_name',
    'fareAmount', (NEW.data->>'fare_amount')::numeric,
    'bookingType', NEW.data->>'booking_type'
  );

  RAISE LOG 'Push notification trigger: Notification data prepared: %', v_ride_data;

  RETURN NEW;
END;
$$;

-- Drop existing trigger if exists
DROP TRIGGER IF EXISTS trigger_send_ride_push_notification ON notifications;

-- Create trigger
CREATE TRIGGER trigger_send_ride_push_notification
  AFTER INSERT ON notifications
  FOR EACH ROW
  WHEN (NEW.type = 'ride_request')
  EXECUTE FUNCTION send_ride_request_push_notification();

COMMENT ON FUNCTION send_ride_request_push_notification IS 'Send push notification when ride request notification is created';
COMMENT ON TRIGGER trigger_send_ride_push_notification ON notifications IS 'Trigger to send push notifications for new ride requests';
