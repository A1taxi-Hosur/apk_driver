/*
  # Add comprehensive RPC functions for ride updates

  1. New Functions
    - `update_ride_pickup_otp` - Generate and set pickup OTP
    - `verify_ride_pickup_otp` - Verify pickup OTP and start ride
    - `update_ride_drop_otp` - Generate and set drop OTP
    
  2. Security
    - Functions run with SECURITY DEFINER to bypass RLS
    - Validates driver ownership before allowing updates
*/

-- Function to update pickup OTP
CREATE OR REPLACE FUNCTION update_ride_pickup_otp(
  p_ride_id UUID,
  p_driver_id UUID,
  p_otp TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_count INT;
BEGIN
  UPDATE rides
  SET 
    pickup_otp = p_otp,
    updated_at = NOW()
  WHERE id = p_ride_id
    AND driver_id = p_driver_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    RETURN json_build_object(
      'success', true,
      'ride_id', p_ride_id,
      'otp', p_otp
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Ride not found or access denied'
    );
  END IF;
END;
$$;

-- Function to verify pickup OTP and start ride
CREATE OR REPLACE FUNCTION verify_and_start_ride(
  p_ride_id UUID,
  p_driver_id UUID,
  p_otp TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_stored_otp TEXT;
  v_updated_count INT;
BEGIN
  -- Get stored OTP
  SELECT pickup_otp INTO v_stored_otp
  FROM rides
  WHERE id = p_ride_id
    AND driver_id = p_driver_id;
  
  IF NOT FOUND THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Ride not found or access denied'
    );
  END IF;
  
  -- Verify OTP
  IF v_stored_otp != p_otp THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Invalid OTP'
    );
  END IF;
  
  -- Update ride status to in_progress
  UPDATE rides
  SET 
    status = 'in_progress',
    updated_at = NOW()
  WHERE id = p_ride_id
    AND driver_id = p_driver_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    RETURN json_build_object(
      'success', true,
      'ride_id', p_ride_id
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Failed to update ride status'
    );
  END IF;
END;
$$;

-- Function to update drop OTP
CREATE OR REPLACE FUNCTION update_ride_drop_otp(
  p_ride_id UUID,
  p_driver_id UUID,
  p_otp TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_count INT;
BEGIN
  UPDATE rides
  SET 
    drop_otp = p_otp,
    updated_at = NOW()
  WHERE id = p_ride_id
    AND driver_id = p_driver_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    RETURN json_build_object(
      'success', true,
      'ride_id', p_ride_id,
      'otp', p_otp
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Ride not found or access denied'
    );
  END IF;
END;
$$;