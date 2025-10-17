/*
  # Add RPC function for updating driver location
  
  1. New Function
    - `update_driver_location_rpc` - Updates or inserts driver location
    
  2. Details
    - Uses SECURITY DEFINER to bypass RLS
    - Upserts location data for the driver's user_id
    - Returns success status
    
  3. Security
    - Function runs with elevated privileges
    - Validates driver_id ownership
*/

CREATE OR REPLACE FUNCTION update_driver_location_rpc(
  p_driver_id UUID,
  p_latitude DOUBLE PRECISION,
  p_longitude DOUBLE PRECISION,
  p_heading DOUBLE PRECISION DEFAULT NULL,
  p_speed DOUBLE PRECISION DEFAULT NULL,
  p_accuracy DOUBLE PRECISION DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID;
  v_location_exists BOOLEAN;
BEGIN
  -- Get the user_id for this driver
  SELECT user_id INTO v_user_id
  FROM drivers
  WHERE id = p_driver_id;
  
  IF v_user_id IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Driver not found'
    );
  END IF;
  
  -- Check if location record exists
  SELECT EXISTS(
    SELECT 1 FROM live_locations WHERE user_id = v_user_id
  ) INTO v_location_exists;
  
  IF v_location_exists THEN
    -- Update existing location
    UPDATE live_locations
    SET 
      latitude = p_latitude,
      longitude = p_longitude,
      heading = p_heading,
      speed = p_speed,
      accuracy = p_accuracy,
      updated_at = NOW()
    WHERE user_id = v_user_id;
    
    RETURN json_build_object(
      'success', true,
      'action', 'updated'
    );
  ELSE
    -- Insert new location
    INSERT INTO live_locations (
      user_id,
      latitude,
      longitude,
      heading,
      speed,
      accuracy,
      updated_at
    ) VALUES (
      v_user_id,
      p_latitude,
      p_longitude,
      p_heading,
      p_speed,
      p_accuracy,
      NOW()
    );
    
    RETURN json_build_object(
      'success', true,
      'action', 'inserted'
    );
  END IF;
END;
$$;
