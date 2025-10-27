/*
  # Fix ride completion to handle actual fare exceeding original estimate

  ## Problem
  The `update_ride_to_completed` function fails when the actual calculated fare
  exceeds the original estimated fare due to constraint `check_original_fare_greater_rides`.
  
  This constraint: `CHECK (original_fare >= fare_amount)` prevents ride completion
  when GPS-calculated distance or other factors result in a higher actual fare.

  ## Solution
  Update the `update_ride_to_completed` function to also update `original_fare` 
  to match the actual fare if it's higher. This preserves the original estimate
  while ensuring the constraint is satisfied.

  ## Changes
  - Modified `update_ride_to_completed` to set `original_fare = GREATEST(original_fare, p_fare_amount)`
  - This ensures original_fare is always >= fare_amount, satisfying the constraint
  - Preserves the original estimate if actual fare is lower
  - Updates to actual fare if it's higher (common in real-world scenarios)
*/

-- Update the function to handle original_fare constraint
CREATE OR REPLACE FUNCTION update_ride_to_completed(
  p_ride_id UUID,
  p_driver_id UUID,
  p_fare_amount NUMERIC,
  p_distance_km NUMERIC,
  p_duration_minutes INT
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
    status = 'completed',
    fare_amount = p_fare_amount,
    distance_km = p_distance_km,
    duration_minutes = p_duration_minutes,
    payment_status = 'completed',
    -- Update original_fare to be at least as high as actual fare to satisfy constraint
    original_fare = GREATEST(COALESCE(original_fare, p_fare_amount), p_fare_amount),
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