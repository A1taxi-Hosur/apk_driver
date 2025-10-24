-- ============================================================================
-- VERIFY: Check if trip completions are being saved with fare breakdown
-- ============================================================================

-- 1. Show the most recent outstation trip completion
SELECT 
  id,
  ride_id,
  driver_id,
  booking_type,
  trip_type,
  actual_distance_km,
  actual_duration_minutes,
  base_fare,
  total_fare,
  fare_details,  -- THIS is the fare breakdown (should be stored as JSONB)
  created_at
FROM outstation_trip_completions
ORDER BY created_at DESC
LIMIT 1;

-- Expected: Should show the trip completion we just created
-- The fare_details column should contain: {"test": true}

-- 2. Verify the fare_details is proper JSONB
SELECT 
  id,
  ride_id,
  fare_details,
  fare_details->>'test' as test_value,  -- Extract the 'test' key
  pg_typeof(fare_details) as data_type   -- Should be 'jsonb'
FROM outstation_trip_completions
ORDER BY created_at DESC
LIMIT 1;

-- Expected:
-- - fare_details: {"test": true}
-- - test_value: "true"
-- - data_type: jsonb
