-- ============================================================================
-- ONE-LINE TEST FOR SPECIALIZED TRIP COMPLETIONS FIX
-- ============================================================================
-- Copy and paste this entire query into Supabase SQL Editor and run it

SELECT insert_outstation_trip_completion(p_ride_id => NULL, p_scheduled_booking_id => NULL, p_driver_id => gen_random_uuid(), p_customer_id => gen_random_uuid(), p_booking_type => 'outstation', p_vehicle_type => 'sedan', p_trip_type => 'one_way', p_pickup_address => 'Quick Test', p_destination_address => 'Quick Test', p_actual_distance_km => 50::numeric, p_actual_duration_minutes => 120, p_actual_days => 1, p_base_fare => 3500::numeric, p_distance_fare => 0::numeric, p_per_day_charges => 0::numeric, p_driver_allowance => 400::numeric, p_extra_km_charges => 0::numeric, p_toll_charges => 0::numeric, p_platform_fee => 100::numeric, p_gst_on_charges => 195::numeric, p_gst_on_platform_fee => 18::numeric, p_total_fare => 4213::numeric, p_fare_details => '{}'::jsonb, p_scheduled_time => NULL, p_completed_at => NOW(), p_driver_name => 'Quick Test', p_driver_phone => '+919876543210', p_driver_rating => NULL, p_vehicle_id => NULL, p_vehicle_make => 'Toyota', p_vehicle_model => 'Innova', p_vehicle_color => 'White', p_vehicle_license_plate => 'TEST1234') as result;

-- Expected Result:
-- {"success": true, "completion_id": "some-uuid-here"}

-- If you see success = true: ✅ THE FIX IS WORKING!
-- If you see success = false: ❌ Check the error message in the result


-- ============================================================================
-- VERIFY THE DATA WAS STORED
-- ============================================================================
-- Run this to verify the completion was saved:

SELECT id, booking_type, vehicle_type, trip_type, total_fare, driver_name, created_at
FROM outstation_trip_completions
WHERE driver_name = 'Quick Test'
ORDER BY created_at DESC
LIMIT 1;

-- Expected: 1 row with total_fare = 4213


-- ============================================================================
-- CLEANUP TEST DATA (Optional - run after testing)
-- ============================================================================

-- DELETE FROM outstation_trip_completions WHERE driver_name = 'Quick Test';
