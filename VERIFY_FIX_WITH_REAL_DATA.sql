-- ============================================================================
-- Check table structure and test with real data
-- ============================================================================

-- 1. Check if scheduled_booking_id column exists
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'outstation_trip_completions'
ORDER BY ordinal_position;

-- 2. Test with minimal required data (no scheduled_booking_id)
SELECT insert_outstation_trip_completion(
  p_ride_id := gen_random_uuid(),
  p_driver_id := gen_random_uuid(),
  p_customer_id := gen_random_uuid(),
  p_booking_type := 'outstation',
  p_vehicle_type := 'sedan',
  p_trip_type := 'one_way',
  p_pickup_address := 'Test Pickup',
  p_destination_address := 'Test Destination',
  p_actual_distance_km := 100,
  p_actual_duration_minutes := 120,
  p_actual_days := 1,
  p_base_fare := 1000,
  p_total_fare := 1200,
  p_fare_details := '{"test": "value"}'::jsonb
) as result;
