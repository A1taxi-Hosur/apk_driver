/*
  # Add accept_ride RPC function
  
  1. New Function
    - `accept_ride_rpc` - Accepts a ride request and assigns driver atomically
    
  2. Logic
    - Validates ride is in 'requested' status with no driver assigned
    - Atomically assigns driver and updates status to 'accepted'
    - Updates driver status to 'busy'
    - Marks notifications as read for the accepting driver
    - Returns success/error response
    
  3. Security
    - Uses SECURITY DEFINER to bypass RLS
    - Ensures atomic updates to prevent race conditions
    - Only allows accepting rides that are available
*/

CREATE OR REPLACE FUNCTION accept_ride_rpc(
  p_ride_id UUID,
  p_driver_id UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_ride RECORD;
  v_driver_user_id UUID;
BEGIN
  -- Get driver's user_id for notification updates
  SELECT user_id INTO v_driver_user_id
  FROM drivers
  WHERE id = p_driver_id;
  
  IF v_driver_user_id IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Driver not found'
    );
  END IF;

  -- Atomically accept the ride (prevents race conditions)
  UPDATE rides
  SET 
    driver_id = p_driver_id,
    status = 'accepted',
    updated_at = NOW()
  WHERE id = p_ride_id
    AND status = 'requested'
    AND driver_id IS NULL
  RETURNING * INTO v_updated_ride;
  
  -- Check if update was successful
  IF v_updated_ride IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Ride already assigned to another driver or no longer available'
    );
  END IF;
  
  -- Update driver status to busy
  UPDATE drivers
  SET 
    status = 'busy',
    updated_at = NOW()
  WHERE id = p_driver_id;
  
  -- Mark notification as read for this driver
  UPDATE notifications
  SET 
    status = 'read',
    updated_at = NOW()
  WHERE user_id = v_driver_user_id
    AND type = 'ride_request'
    AND (data->>'ride_id')::UUID = p_ride_id
    AND status = 'unread';
  
  -- Return success with ride details
  RETURN json_build_object(
    'success', true,
    'ride_id', v_updated_ride.id,
    'ride_code', v_updated_ride.ride_code,
    'status', v_updated_ride.status,
    'driver_id', v_updated_ride.driver_id
  );
END;
$$;
