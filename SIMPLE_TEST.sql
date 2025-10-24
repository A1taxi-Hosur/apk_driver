-- ============================================================================
-- SIMPLE TEST: Check if trip completions are being saved
-- Run this in Supabase SQL Editor (Role: postgres)
-- ============================================================================

-- 1. Count total rows (should show 1 or more if insert worked)
SELECT COUNT(*) as total_rows FROM outstation_trip_completions;

-- 2. If count > 0, show the most recent completion with fare_details
SELECT 
  id,
  ride_id,
  booking_type,
  trip_type,
  actual_distance_km,
  base_fare,
  total_fare,
  fare_details,  -- This is the fare breakdown
  created_at
FROM outstation_trip_completions
ORDER BY created_at DESC
LIMIT 1;

-- 3. Extract and verify the fare breakdown JSON
SELECT 
  fare_details,
  fare_details->>'test' as extracted_test_value,
  pg_typeof(fare_details) as column_type
FROM outstation_trip_completions
ORDER BY created_at DESC
LIMIT 1;
