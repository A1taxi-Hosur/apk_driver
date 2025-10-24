/*
  # Quick Test for Specialized Trip Completions Fix

  Run these queries in order in Supabase SQL Editor to quickly verify the fix works.
  Each section is independent and clearly marked.
*/

-- ============================================================================
-- TEST 1: Verify RPC Functions Exist (Should return 3 rows)
-- ============================================================================

SELECT
  routine_name as function_name,
  security_type
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name LIKE 'insert_%_trip_completion'
ORDER BY routine_name;

-- Expected: 3 functions, all with security_type = 'DEFINER'
-- ✅ insert_airport_trip_completion    | DEFINER
-- ✅ insert_outstation_trip_completion | DEFINER
-- ✅ insert_rental_trip_completion     | DEFINER


-- ============================================================================
-- TEST 2: Verify Tables Exist (Should return 3 rows)
-- ============================================================================

SELECT
  tablename,
  rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename LIKE '%_trip_completions'
  AND tablename != 'trip_completions'
ORDER BY tablename;

-- Expected: 3 tables, all with rls_enabled = true
-- ✅ airport_trip_completions     | true
-- ✅ outstation_trip_completions  | true
-- ✅ rental_trip_completions      | true


-- ============================================================================
-- TEST 3: Quick Functional Test - Outstation Completion
-- ============================================================================

-- This will test if the RPC function works at all (no auth needed for testing)
-- NOTE: Use => instead of := and cast numeric values explicitly
SELECT insert_outstation_trip_completion(
  p_ride_id => NULL,
  p_scheduled_booking_id => NULL,
  p_driver_id => gen_random_uuid(),
  p_customer_id => gen_random_uuid(),
  p_booking_type => 'outstation',
  p_vehicle_type => 'sedan',
  p_trip_type => 'one_way',
  p_pickup_address => 'Quick Test Pickup',
  p_destination_address => 'Quick Test Destination',
  p_actual_distance_km => 50::numeric,
  p_actual_duration_minutes => 120,
  p_actual_days => 1,
  p_base_fare => 3500::numeric,
  p_distance_fare => 0::numeric,
  p_per_day_charges => 0::numeric,
  p_driver_allowance => 400::numeric,
  p_extra_km_charges => 0::numeric,
  p_toll_charges => 0::numeric,
  p_platform_fee => 100::numeric,
  p_gst_on_charges => 195::numeric,
  p_gst_on_platform_fee => 18::numeric,
  p_total_fare => 4213::numeric,
  p_fare_details => '{"test":true,"booking_type":"outstation"}'::jsonb,
  p_scheduled_time => NULL,
  p_completed_at => NOW(),
  p_driver_name => 'Quick Test Driver',
  p_driver_phone => '+919876543210',
  p_driver_rating => NULL,
  p_vehicle_id => NULL,
  p_vehicle_make => 'Toyota',
  p_vehicle_model => 'Innova',
  p_vehicle_color => 'White',
  p_vehicle_license_plate => 'TEST1234'
) as result;

-- Expected: {"success": true, "completion_id": "some-uuid"}
-- ✅ If you see success = true, the RPC function is working!
-- ❌ If you see success = false, check the error message


-- ============================================================================
-- TEST 4: Verify Data Was Inserted
-- ============================================================================

SELECT
  id,
  booking_type,
  vehicle_type,
  trip_type,
  actual_distance_km,
  base_fare,
  total_fare,
  driver_name,
  created_at
FROM outstation_trip_completions
WHERE driver_name = 'Quick Test Driver'
ORDER BY created_at DESC
LIMIT 1;

-- Expected: 1 row showing the test data just inserted
-- ✅ base_fare: 3500
-- ✅ total_fare: 4213
-- ✅ trip_type: one_way


-- ============================================================================
-- TEST 5: Quick Functional Test - Rental Completion
-- ============================================================================

SELECT insert_rental_trip_completion(
  p_ride_id => NULL,
  p_scheduled_booking_id => NULL,
  p_driver_id => gen_random_uuid(),
  p_customer_id => gen_random_uuid(),
  p_booking_type => 'rental',
  p_vehicle_type => 'suv',
  p_trip_type => NULL,
  p_pickup_address => 'Quick Test Pickup',
  p_destination_address => 'Quick Test Destination',
  p_rental_hours => 8,
  p_actual_hours_used => 7.5::numeric,
  p_actual_distance_km => 120::numeric,
  p_actual_duration_minutes => 450,
  p_base_fare => 2500::numeric,
  p_hourly_charges => 1500::numeric,
  p_distance_fare => 800::numeric,
  p_extra_km_charges => 200::numeric,
  p_extra_hour_charges => 0::numeric,
  p_platform_fee => 100::numeric,
  p_gst_on_charges => 250::numeric,
  p_gst_on_platform_fee => 18::numeric,
  p_total_fare => 5368::numeric,
  p_fare_details => '{"test":true}'::jsonb,
  p_completed_at => NOW(),
  p_driver_name => 'Quick Test Driver',
  p_driver_phone => '+919876543210',
  p_driver_rating => NULL,
  p_vehicle_id => NULL,
  p_vehicle_make => 'Mahindra',
  p_vehicle_model => 'Scorpio',
  p_vehicle_color => 'Black',
  p_vehicle_license_plate => 'TEST5678'
) as result;

-- Expected: {"success": true, "completion_id": "some-uuid"}


-- ============================================================================
-- TEST 6: Quick Functional Test - Airport Completion
-- ============================================================================

SELECT insert_airport_trip_completion(
  p_ride_id => NULL,
  p_scheduled_booking_id => NULL,
  p_driver_id => gen_random_uuid(),
  p_customer_id => gen_random_uuid(),
  p_booking_type => 'airport',
  p_vehicle_type => 'sedan',
  p_trip_type => NULL,
  p_pickup_address => 'Quick Test Pickup',
  p_destination_address => 'Airport',
  p_actual_distance_km => 35::numeric,
  p_actual_duration_minutes => 60,
  p_base_fare => 800::numeric,
  p_distance_fare => 350::numeric,
  p_airport_surcharge => 100::numeric,
  p_time_fare => 50::numeric,
  p_platform_fee => 50::numeric,
  p_gst_on_charges => 65::numeric,
  p_gst_on_platform_fee => 9::numeric,
  p_total_fare => 1424::numeric,
  p_fare_details => '{"test":true}'::jsonb,
  p_scheduled_time => NULL,
  p_completed_at => NOW(),
  p_driver_name => 'Quick Test Driver',
  p_driver_phone => '+919876543210',
  p_driver_rating => NULL,
  p_vehicle_id => NULL,
  p_vehicle_make => 'Honda',
  p_vehicle_model => 'City',
  p_vehicle_color => 'Silver',
  p_vehicle_license_plate => 'TEST9012'
) as result;

-- Expected: {"success": true, "completion_id": "some-uuid"}


-- ============================================================================
-- TEST 7: Verify All Test Data
-- ============================================================================

-- Count test records
SELECT
  'outstation' as table_name,
  COUNT(*) as test_records
FROM outstation_trip_completions
WHERE driver_name = 'Quick Test Driver'

UNION ALL

SELECT
  'rental' as table_name,
  COUNT(*) as test_records
FROM rental_trip_completions
WHERE driver_name = 'Quick Test Driver'

UNION ALL

SELECT
  'airport' as table_name,
  COUNT(*) as test_records
FROM airport_trip_completions
WHERE driver_name = 'Quick Test Driver';

-- Expected: Each table should show 1 test record
-- ✅ outstation | 1
-- ✅ rental     | 1
-- ✅ airport    | 1


-- ============================================================================
-- TEST 8: Verify RLS Policies Exist
-- ============================================================================

SELECT
  tablename,
  policyname,
  cmd as operation
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename LIKE '%_trip_completions'
  AND tablename != 'trip_completions'
ORDER BY tablename, cmd;

-- Expected: Each table should have at least 2 policies (SELECT, INSERT)


-- ============================================================================
-- CLEANUP: Remove Test Data (Run this after testing)
-- ============================================================================

/*
DELETE FROM outstation_trip_completions
WHERE driver_name = 'Quick Test Driver';

DELETE FROM rental_trip_completions
WHERE driver_name = 'Quick Test Driver';

DELETE FROM airport_trip_completions
WHERE driver_name = 'Quick Test Driver';

-- Verify cleanup
SELECT 'Cleanup complete - test records removed' as status;
*/


-- ============================================================================
-- SUMMARY OF EXPECTED RESULTS
-- ============================================================================

/*
✅ TEST 1: Shows 3 RPC functions with SECURITY DEFINER
✅ TEST 2: Shows 3 tables with RLS enabled
✅ TEST 3: Returns {"success": true, "completion_id": "uuid"}
✅ TEST 4: Shows 1 row with test data
✅ TEST 5: Returns {"success": true, "completion_id": "uuid"}
✅ TEST 6: Returns {"success": true, "completion_id": "uuid"}
✅ TEST 7: Shows 1 record in each table
✅ TEST 8: Shows RLS policies for each table

If all tests pass: ✅ THE FIX IS WORKING!
If any test fails: ❌ Check error messages and review migration status
*/
