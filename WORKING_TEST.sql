-- ============================================================================
-- Test with REAL data from the database
-- ============================================================================

-- Step 1: Find a real completed ride with all necessary data
WITH real_ride AS (
  SELECT 
    r.id as ride_id,
    r.driver_id,
    r.customer_id,
    r.booking_type,
    v.vehicle_type,
    r.pickup_address,
    r.destination_address
  FROM rides r
  JOIN drivers d ON r.driver_id = d.id
  JOIN vehicles v ON d.vehicle_id = v.id
  WHERE r.status = 'completed'
    AND r.booking_type = 'outstation'
  LIMIT 1
)
-- Step 2: Use this real ride data to test the function
SELECT 
  result->>'success' as success,
  result->>'error' as error_message,
  result->>'completion_id' as completion_id
FROM real_ride,
LATERAL (
  SELECT insert_outstation_trip_completion(
    real_ride.driver_id,
    real_ride.customer_id,
    real_ride.booking_type,
    real_ride.vehicle_type,
    'one_way',                      -- trip_type
    real_ride.pickup_address,
    real_ride.destination_address,
    50.0,                           -- actual_distance_km
    120,                            -- actual_duration_minutes
    1,                              -- actual_days
    3500.0,                         -- base_fare
    4213.0,                         -- total_fare
    '{"test": true}'::jsonb,        -- fare_details
    real_ride.ride_id               -- Use the REAL ride_id
  ) as result
) subq;

-- Expected: success = true, completion_id should have a UUID
