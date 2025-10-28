/*
  # Fix accept_ride_rpc to enforce one ride at a time
  
  1. Changes
    - Update `accept_ride_rpc` to check if driver already has an active ride
    - Prevent accepting new ride if driver has ride with status: accepted, driver_arrived, or in_progress
    - Return clear error message if driver already has active ride
    
  2. Logic
    - Check if driver has any active rides BEFORE attempting to accept
    - Active ride = status IN ('accepted', 'driver_arrived', 'in_progress')
    - If active ride exists, return error immediately
    - If no active ride, proceed with normal acceptance flow
    
  3. Security
    - Maintains SECURITY DEFINER for RLS bypass
    - Atomic operation prevents race conditions
    - Driver can only have ONE active ride at any time
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
  v_active_ride_count INTEGER;
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

  -- CRITICAL: Check if driver already has an active ride
  -- Driver can only accept ONE ride at a time
  SELECT COUNT(*) INTO v_active_ride_count
  FROM rides
  WHERE driver_id = p_driver_id
    AND status IN ('accepted', 'driver_arrived', 'in_progress');
  
  IF v_active_ride_count > 0 THEN
    RETURN json_build_object(
      'success', false,
      'error', 'You already have an active ride. Please complete it before accepting another.'
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
