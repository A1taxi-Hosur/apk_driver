-- ============================================================================
-- DIAGNOSTIC: See the actual error message
-- ============================================================================

-- First, let's verify the function exists
SELECT
  p.proname as function_name,
  pg_get_function_arguments(p.oid) as arguments
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
WHERE n.nspname = 'public'
  AND p.proname = 'insert_outstation_trip_completion';

-- Expected: Should show the function with its arguments


-- ============================================================================
-- Test with error message visible
-- ============================================================================

SELECT
  result->>'success' as success,
  result->>'error' as error_message,
  result->>'completion_id' as completion_id
FROM (
  SELECT insert_outstation_trip_completion(
    gen_random_uuid(),           -- p_driver_id
    gen_random_uuid(),           -- p_customer_id
    'outstation',                -- p_booking_type
    'sedan',                     -- p_vehicle_type
    'one_way',                   -- p_trip_type
    'Test Pickup',               -- p_pickup_address
    'Test Destination',          -- p_destination_address
    50.0,                        -- p_actual_distance_km
    120,                         -- p_actual_duration_minutes
    1,                           -- p_actual_days
    3500.0,                      -- p_base_fare
    4213.0,                      -- p_total_fare
    '{"test": true}'::jsonb      -- p_fare_details
  ) as result
) subquery;

-- This will show you the actual error message!


-- ============================================================================
-- Alternative: Check if the table exists and has correct structure
-- ============================================================================

SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'outstation_trip_completions'
ORDER BY ordinal_position;
