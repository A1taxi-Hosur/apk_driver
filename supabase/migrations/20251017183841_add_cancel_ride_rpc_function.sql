/*
  # Add RPC function for cancelling rides

  1. New Function
    - `cancel_ride_by_driver` - Cancel a ride with reason
    
  2. Security
    - Functions run with SECURITY DEFINER to bypass RLS
    - Validates driver ownership before allowing cancellation
*/

-- Function to cancel ride
CREATE OR REPLACE FUNCTION cancel_ride_by_driver(
  p_ride_id UUID,
  p_driver_id UUID,
  p_user_id UUID,
  p_reason TEXT
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
    status = 'cancelled',
    cancelled_by = p_user_id,
    cancellation_reason = p_reason,
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
      'error', 'Ride not found or access denied'
    );
  END IF;
END;
$$;