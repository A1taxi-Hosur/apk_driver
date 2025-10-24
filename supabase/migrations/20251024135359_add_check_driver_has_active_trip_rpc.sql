/*
  # Add RPC function to check if driver has active trip
  
  This function helps the background location service determine if tracking
  should continue even if session data is unavailable.
  
  1. New RPC Function
    - `check_driver_has_active_trip` - Returns true if driver has active ride
  
  2. Purpose
    - Allow background tasks to check active trip status from database
    - Prevent location tracking from stopping during active trips
    - Works even when AsyncStorage session is unavailable
*/

-- Function to check if driver has active trip
CREATE OR REPLACE FUNCTION check_driver_has_active_trip(p_driver_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if driver has any active rides
  RETURN EXISTS (
    SELECT 1
    FROM rides
    WHERE driver_id = p_driver_id
      AND status IN ('accepted', 'in_progress')
    LIMIT 1
  );
END;
$$;

-- Function to check if driver should be tracking location
-- Returns TRUE if driver is online/busy OR has active trip
CREATE OR REPLACE FUNCTION should_driver_track_location(p_driver_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_driver_status text;
  v_has_active_trip boolean;
  v_should_track boolean;
BEGIN
  -- Get driver status
  SELECT status INTO v_driver_status
  FROM drivers
  WHERE id = p_driver_id;
  
  -- If driver not found, return false
  IF v_driver_status IS NULL THEN
    RETURN jsonb_build_object(
      'should_track', false,
      'reason', 'driver_not_found'
    );
  END IF;
  
  -- Check if driver has active trip
  v_has_active_trip := check_driver_has_active_trip(p_driver_id);
  
  -- Driver should track if:
  -- 1. Status is online or busy, OR
  -- 2. Has active trip (even if status changed)
  v_should_track := (v_driver_status IN ('online', 'busy')) OR v_has_active_trip;
  
  RETURN jsonb_build_object(
    'should_track', v_should_track,
    'driver_status', v_driver_status,
    'has_active_trip', v_has_active_trip,
    'reason', CASE
      WHEN v_has_active_trip THEN 'active_trip'
      WHEN v_driver_status IN ('online', 'busy') THEN 'driver_available'
      ELSE 'driver_offline'
    END
  );
END;
$$;
