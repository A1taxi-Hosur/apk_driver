-- ============================================================================
-- SIMPLE TEST - Copy and paste this EXACT query
-- ============================================================================

SELECT insert_outstation_trip_completion(
  p_ride_id := NULL,
  p_scheduled_booking_id := NULL,
  p_driver_id := gen_random_uuid(),
  p_customer_id := gen_random_uuid(),
  p_booking_type := 'outstation',
  p_vehicle_type := 'sedan',
  p_trip_type := 'one_way',
  p_pickup_address := 'Test Pickup',
  p_destination_address := 'Test Destination',
  p_actual_distance_km := 50.0,
  p_actual_duration_minutes := 120,
  p_actual_days := 1,
  p_base_fare := 3500.0,
  p_distance_fare := 0.0,
  p_per_day_charges := 0.0,
  p_driver_allowance := 400.0,
  p_extra_km_charges := 0.0,
  p_toll_charges := 0.0,
  p_platform_fee := 100.0,
  p_gst_on_charges := 195.0,
  p_gst_on_platform_fee := 18.0,
  p_total_fare := 4213.0,
  p_fare_details := '{"booking_type": "outstation", "test": true}'::jsonb,
  p_scheduled_time := NULL,
  p_completed_at := CURRENT_TIMESTAMP,
  p_driver_name := 'Test Driver',
  p_driver_phone := '+919876543210',
  p_driver_rating := NULL,
  p_vehicle_id := NULL,
  p_vehicle_make := 'Toyota',
  p_vehicle_model := 'Innova',
  p_vehicle_color := 'White',
  p_vehicle_license_plate := 'TEST1234'
);

-- Expected: {"success": true, "completion_id": "..."}
-- If you see this result, THE FIX IS WORKING!


-- Verify the data:
SELECT id, booking_type, total_fare, driver_name
FROM outstation_trip_completions
WHERE driver_name = 'Test Driver'
ORDER BY created_at DESC
LIMIT 1;
