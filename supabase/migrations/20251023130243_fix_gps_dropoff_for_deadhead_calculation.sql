/*
  # Fix GPS Drop-off Location for Deadhead Calculation

  ## Problem
  The deadhead charge calculation is using the booking destination coordinates instead of 
  the actual GPS drop-off location. This causes incorrect deadhead charges to be applied.
  
  For example:
  - Ride 17a802a3-ded7-46ff-9b6d-3f97376d9ed1
  - Booking destination: Bagalur (12.8304, 77.8662) - 11.81 km from center
  - Actual GPS drop-off: Near A1 office (12.7418, 77.8312) - 1.40 km from center
  - Result: Charged ₹137.83 deadhead when it should be ₹0

  ## Solution
  Create an RPC function to fetch the last GPS location for a ride, which can be called
  from the client and will bypass RLS restrictions.

  ## Changes
  1. Create `get_last_gps_location` RPC function
     - Takes ride_id as parameter
     - Returns the last GPS coordinates (latitude, longitude)
     - Uses SECURITY DEFINER to bypass RLS
*/

-- Create function to get last GPS location for a ride
CREATE OR REPLACE FUNCTION get_last_gps_location(p_ride_id uuid)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_result json;
BEGIN
  -- Get the last GPS location for this ride
  SELECT json_build_object(
    'latitude', latitude,
    'longitude', longitude,
    'recorded_at', recorded_at
  )
  INTO v_result
  FROM trip_location_history
  WHERE ride_id = p_ride_id
  ORDER BY recorded_at DESC
  LIMIT 1;

  RETURN v_result;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_last_gps_location(uuid) TO authenticated;

COMMENT ON FUNCTION get_last_gps_location IS 'Get the last GPS location recorded for a ride. Used for accurate deadhead charge calculation.';
