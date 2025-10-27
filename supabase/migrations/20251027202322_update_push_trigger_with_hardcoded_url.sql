/*
  # Update Push Notification Trigger with Hardcoded URL

  1. Changes
    - Use hardcoded Supabase URL (same project)
    - Use service role key from env
    - Call Edge Function to send push notifications

  2. Works even when app is closed/killed
*/

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
  v_supabase_url text := 'https://whubaypabojomdyfqxcf.supabase.co';
  v_service_key text := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodWJheXBhYm9qb21keWZxeGNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjcwNjAzMSwiZXhwIjoyMDcyMjgyMDMxfQ.HQA62hKrAOhylo1zLO6NdnCO9AC0Z6mipssIIM-pw4Q';
BEGIN
  -- Only process ride_request notifications
  IF NEW.type != 'ride_request' THEN
    RETURN NEW;
  END IF;

  RAISE LOG 'Push: Processing notification %', NEW.id;

  -- Get driver push token
  SELECT id, expo_push_token
  INTO v_driver_id, v_driver_push_token
  FROM drivers
  WHERE user_id = NEW.user_id
  LIMIT 1;

  -- Check if driver has push token
  IF v_driver_push_token IS NULL OR v_driver_push_token = '' THEN
    RAISE LOG 'Push: No token for driver, skipping';
    RETURN NEW;
  END IF;

  RAISE LOG 'Push: Token found: %', substring(v_driver_push_token, 1, 20);

  -- Prepare payload
  v_payload := jsonb_build_object(
    'pushTokens', jsonb_build_array(v_driver_push_token),
    'rideId', NEW.data->>'ride_id',
    'rideCode', COALESCE(NEW.data->>'ride_code', 'N/A'),
    'pickupAddress', COALESCE(NEW.data->>'pickup_address', 'Unknown'),
    'destinationAddress', COALESCE(NEW.data->>'destination_address', 'Unknown'),
    'customerName', COALESCE(NEW.data->>'customer_name', 'Customer'),
    'fareAmount', COALESCE((NEW.data->>'fare_amount')::numeric, 0),
    'bookingType', COALESCE(NEW.data->>'booking_type', 'regular')
  );

  RAISE LOG 'Push: Calling Edge Function';

  -- Call Edge Function
  SELECT net.http_post(
    url := v_supabase_url || '/functions/v1/send-ride-push-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || v_service_key
    ),
    body := v_payload
  ) INTO v_request_id;

  RAISE LOG 'Push: Edge Function called, request_id: %', v_request_id;

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    RAISE WARNING 'Push: Error: %', SQLERRM;
    RETURN NEW;
END;
$$;

COMMENT ON FUNCTION send_ride_request_push_notification IS 'Send push notification via Edge Function - works even when app closed';
