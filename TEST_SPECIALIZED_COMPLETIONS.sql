/*
  # Test Queries for Specialized Trip Completions RLS Fix

  This file contains SQL queries to verify that the RPC functions work correctly
  and that trip completions can be stored and retrieved.

  ## Prerequisites
  - Run these queries in Supabase SQL Editor
  - Replace UUIDs with actual values from your database
  - Test both as authenticated user and service role
*/

-- ============================================================================
-- STEP 1: Check if RPC functions exist
-- ============================================================================

SELECT
  routine_name,
  routine_type,
  security_type,
  data_type
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name IN (
    'insert_rental_trip_completion',
    'insert_outstation_trip_completion',
    'insert_airport_trip_completion'
  )
ORDER BY routine_name;

-- Expected result: 3 rows showing all functions with security_type = 'DEFINER'


-- ============================================================================
-- STEP 2: Check if specialized completion tables exist
-- ============================================================================

SELECT
  table_name,
  (SELECT COUNT(*) FROM information_schema.columns
   WHERE table_schema = 'public'
   AND table_name = t.table_name) as column_count
FROM information_schema.tables t
WHERE table_schema = 'public'
  AND table_name IN (
    'rental_trip_completions',
    'outstation_trip_completions',
    'airport_trip_completions'
  )
ORDER BY table_name;

-- Expected result: 3 rows showing all tables with their column counts


-- ============================================================================
-- STEP 3: Check RLS policies on specialized completion tables
-- ============================================================================

SELECT
  schemaname,
  tablename,
  policyname,
  cmd,
  qual
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN (
    'rental_trip_completions',
    'outstation_trip_completions',
    'airport_trip_completions'
  )
ORDER BY tablename, cmd;

-- Expected result: Policies for SELECT (view own) and INSERT (drivers can insert)


-- ============================================================================
-- STEP 4: Get sample driver and customer IDs for testing
-- ============================================================================

-- Get a sample driver
SELECT
  d.id as driver_id,
  d.user_id as driver_user_id,
  d.name as driver_name,
  d.phone as driver_phone
FROM drivers d
LIMIT 1;

-- Get a sample customer
SELECT
  id as customer_id,
  email as customer_email
FROM users
WHERE id NOT IN (SELECT user_id FROM drivers)
LIMIT 1;

-- Get a sample ride (outstation)
SELECT
  id as ride_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  pickup_address,
  destination_address,
  status
FROM rides
WHERE booking_type = 'outstation'
  AND status = 'completed'
LIMIT 1;


-- ============================================================================
-- STEP 5: Test insert_outstation_trip_completion RPC function
-- ============================================================================

-- Replace these UUIDs with actual values from STEP 4
SELECT insert_outstation_trip_completion(
  p_ride_id := 'REPLACE-WITH-RIDE-ID'::uuid,
  p_driver_id := 'REPLACE-WITH-DRIVER-ID'::uuid,
  p_customer_id := 'REPLACE-WITH-CUSTOMER-ID'::uuid,
  p_booking_type := 'outstation',
  p_vehicle_type := 'sedan',
  p_trip_type := 'one_way',
  p_pickup_address := 'Test Pickup Address',
  p_destination_address := 'Test Destination Address',
  p_actual_distance_km := 65.5,
  p_actual_duration_minutes := 180,
  p_actual_days := 1,
  p_base_fare := 3500,
  p_distance_fare := 0,
  p_per_day_charges := 0,
  p_driver_allowance := 400,
  p_extra_km_charges := 150,
  p_toll_charges := 0,
  p_platform_fee := 100,
  p_gst_on_charges := 202.5,
  p_gst_on_platform_fee := 18,
  p_total_fare := 4370.5,
  p_fare_details := '{"booking_type":"outstation","vehicle_type":"sedan","base_fare":3500,"distance_fare":0,"driver_allowance":400,"extra_km_charges":150,"platform_fee":100,"gst_on_charges":202.5,"gst_on_platform_fee":18,"total_fare":4370.5}'::jsonb,
  p_scheduled_time := NULL,
  p_completed_at := NOW(),
  p_driver_name := 'Test Driver',
  p_driver_phone := '+919876543210',
  p_driver_rating := 4.5,
  p_vehicle_id := NULL,
  p_vehicle_make := 'Toyota',
  p_vehicle_model := 'Innova',
  p_vehicle_color := 'White',
  p_vehicle_license_plate := 'KA01AB1234'
);

-- Expected result: {"success": true, "completion_id": "some-uuid"}
-- If error: {"success": false, "error": "error message"}


-- ============================================================================
-- STEP 6: Test insert_rental_trip_completion RPC function
-- ============================================================================

-- Replace UUIDs with actual values
SELECT insert_rental_trip_completion(
  p_ride_id := 'REPLACE-WITH-RIDE-ID'::uuid,
  p_driver_id := 'REPLACE-WITH-DRIVER-ID'::uuid,
  p_customer_id := 'REPLACE-WITH-CUSTOMER-ID'::uuid,
  p_booking_type := 'rental',
  p_vehicle_type := 'suv',
  p_trip_type := NULL,
  p_pickup_address := 'Test Pickup Address',
  p_destination_address := 'Test Destination Address',
  p_rental_hours := 8,
  p_actual_hours_used := 7.5,
  p_actual_distance_km := 120,
  p_actual_duration_minutes := 450,
  p_base_fare := 2500,
  p_hourly_charges := 1500,
  p_distance_fare := 800,
  p_extra_km_charges := 200,
  p_extra_hour_charges := 0,
  p_platform_fee := 100,
  p_gst_on_charges := 250,
  p_gst_on_platform_fee := 18,
  p_total_fare := 5368,
  p_fare_details := '{"booking_type":"rental","vehicle_type":"suv","base_fare":2500,"hourly_charges":1500,"distance_fare":800,"extra_km_charges":200,"platform_fee":100,"gst_on_charges":250,"gst_on_platform_fee":18,"total_fare":5368}'::jsonb,
  p_completed_at := NOW(),
  p_driver_name := 'Test Driver',
  p_driver_phone := '+919876543210',
  p_driver_rating := 4.8,
  p_vehicle_id := NULL,
  p_vehicle_make := 'Mahindra',
  p_vehicle_model := 'Scorpio',
  p_vehicle_color := 'Black',
  p_vehicle_license_plate := 'KA02CD5678'
);

-- Expected result: {"success": true, "completion_id": "some-uuid"}


-- ============================================================================
-- STEP 7: Test insert_airport_trip_completion RPC function
-- ============================================================================

-- Replace UUIDs with actual values
SELECT insert_airport_trip_completion(
  p_ride_id := 'REPLACE-WITH-RIDE-ID'::uuid,
  p_driver_id := 'REPLACE-WITH-DRIVER-ID'::uuid,
  p_customer_id := 'REPLACE-WITH-CUSTOMER-ID'::uuid,
  p_booking_type := 'airport',
  p_vehicle_type := 'sedan',
  p_trip_type := NULL,
  p_pickup_address := 'Bangalore City',
  p_destination_address := 'Kempegowda International Airport',
  p_actual_distance_km := 35,
  p_actual_duration_minutes := 60,
  p_base_fare := 800,
  p_distance_fare := 350,
  p_airport_surcharge := 100,
  p_time_fare := 50,
  p_platform_fee := 50,
  p_gst_on_charges := 65,
  p_gst_on_platform_fee := 9,
  p_total_fare := 1424,
  p_fare_details := '{"booking_type":"airport","vehicle_type":"sedan","base_fare":800,"distance_fare":350,"airport_surcharge":100,"time_fare":50,"platform_fee":50,"gst_on_charges":65,"gst_on_platform_fee":9,"total_fare":1424}'::jsonb,
  p_scheduled_time := NULL,
  p_completed_at := NOW(),
  p_driver_name := 'Test Driver',
  p_driver_phone := '+919876543210',
  p_driver_rating := 4.7,
  p_vehicle_id := NULL,
  p_vehicle_make := 'Honda',
  p_vehicle_model := 'City',
  p_vehicle_color := 'Silver',
  p_vehicle_license_plate := 'KA03EF9012'
);

-- Expected result: {"success": true, "completion_id": "some-uuid"}


-- ============================================================================
-- STEP 8: Verify data was inserted successfully
-- ============================================================================

-- Check outstation completions
SELECT
  id,
  ride_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  trip_type,
  actual_distance_km,
  actual_duration_minutes,
  base_fare,
  driver_allowance,
  extra_km_charges,
  platform_fee,
  gst_on_charges,
  total_fare,
  driver_name,
  vehicle_make,
  vehicle_model,
  completed_at
FROM outstation_trip_completions
ORDER BY completed_at DESC
LIMIT 5;

-- Check rental completions
SELECT
  id,
  ride_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  rental_hours,
  actual_hours_used,
  actual_distance_km,
  base_fare,
  hourly_charges,
  extra_km_charges,
  total_fare,
  driver_name,
  vehicle_make,
  completed_at
FROM rental_trip_completions
ORDER BY completed_at DESC
LIMIT 5;

-- Check airport completions
SELECT
  id,
  ride_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  actual_distance_km,
  base_fare,
  distance_fare,
  airport_surcharge,
  platform_fee,
  total_fare,
  driver_name,
  vehicle_make,
  completed_at
FROM airport_trip_completions
ORDER BY completed_at DESC
LIMIT 5;


-- ============================================================================
-- STEP 9: Test RLS - Customer viewing their own completions
-- ============================================================================

-- This should work when run as the authenticated customer
-- Replace CUSTOMER-USER-ID with actual customer user_id
SELECT
  id,
  ride_id,
  booking_type,
  total_fare,
  driver_name,
  vehicle_make,
  completed_at
FROM outstation_trip_completions
WHERE customer_id = 'REPLACE-WITH-CUSTOMER-USER-ID'::uuid
ORDER BY completed_at DESC;

-- If no results but data exists: RLS is working (user can only see their own)
-- If results show: RLS is allowing correct access


-- ============================================================================
-- STEP 10: Test RLS - Driver viewing their own completions
-- ============================================================================

-- This should work when run as the authenticated driver
-- First get driver_id from drivers table using auth.uid()
-- Then query completions

SELECT
  id,
  ride_id,
  booking_type,
  total_fare,
  driver_name,
  vehicle_make,
  completed_at
FROM outstation_trip_completions
WHERE driver_id IN (
  SELECT id FROM drivers WHERE user_id = 'REPLACE-WITH-DRIVER-USER-ID'::uuid
)
ORDER BY completed_at DESC;


-- ============================================================================
-- STEP 11: Test scheduled booking completion
-- ============================================================================

-- Get a sample scheduled booking
SELECT
  id as booking_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  trip_type,
  pickup_address,
  destination_address,
  status
FROM scheduled_bookings
WHERE booking_type = 'outstation'
  AND status = 'completed'
LIMIT 1;

-- Test inserting completion for scheduled booking
SELECT insert_outstation_trip_completion(
  p_scheduled_booking_id := 'REPLACE-WITH-BOOKING-ID'::uuid,
  p_driver_id := 'REPLACE-WITH-DRIVER-ID'::uuid,
  p_customer_id := 'REPLACE-WITH-CUSTOMER-ID'::uuid,
  p_booking_type := 'outstation',
  p_vehicle_type := 'sedan',
  p_trip_type := 'one_way',
  p_pickup_address := 'Test Pickup',
  p_destination_address := 'Test Destination',
  p_actual_distance_km := 50,
  p_actual_duration_minutes := 120,
  p_actual_days := 1,
  p_base_fare := 3000,
  p_distance_fare := 0,
  p_per_day_charges := 0,
  p_driver_allowance := 400,
  p_extra_km_charges := 0,
  p_toll_charges := 0,
  p_platform_fee := 100,
  p_gst_on_charges := 170,
  p_gst_on_platform_fee := 18,
  p_total_fare := 3688,
  p_fare_details := '{}'::jsonb,
  p_scheduled_time := NOW(),
  p_completed_at := NOW(),
  p_driver_name := 'Test Driver',
  p_driver_phone := '+919876543210',
  p_driver_rating := 4.5,
  p_vehicle_make := 'Toyota',
  p_vehicle_model := 'Innova',
  p_vehicle_color := 'White',
  p_vehicle_license_plate := 'KA01AB1234'
);

-- Verify scheduled booking completion
SELECT
  id,
  scheduled_booking_id,
  ride_id,
  booking_type,
  total_fare,
  completed_at
FROM outstation_trip_completions
WHERE scheduled_booking_id IS NOT NULL
ORDER BY completed_at DESC
LIMIT 5;


-- ============================================================================
-- STEP 12: Clean up test data (optional)
-- ============================================================================

-- Delete test completions created during testing
-- UNCOMMENT ONLY IF YOU WANT TO CLEAN UP TEST DATA

/*
DELETE FROM outstation_trip_completions
WHERE driver_name = 'Test Driver'
  AND completed_at > NOW() - INTERVAL '1 hour';

DELETE FROM rental_trip_completions
WHERE driver_name = 'Test Driver'
  AND completed_at > NOW() - INTERVAL '1 hour';

DELETE FROM airport_trip_completions
WHERE driver_name = 'Test Driver'
  AND completed_at > NOW() - INTERVAL '1 hour';
*/


-- ============================================================================
-- STEP 13: Verify function security and ownership
-- ============================================================================

SELECT
  p.proname as function_name,
  pg_get_function_identity_arguments(p.oid) as arguments,
  CASE p.prosecdef
    WHEN true THEN 'SECURITY DEFINER'
    ELSE 'SECURITY INVOKER'
  END as security_type,
  pg_get_userbyid(p.proowner) as owner,
  l.lanname as language
FROM pg_proc p
LEFT JOIN pg_language l ON p.prolang = l.oid
WHERE p.proname IN (
  'insert_rental_trip_completion',
  'insert_outstation_trip_completion',
  'insert_airport_trip_completion'
)
ORDER BY p.proname;

-- Expected: All functions should show 'SECURITY DEFINER'


-- ============================================================================
-- SUCCESS CRITERIA
-- ============================================================================

/*
✅ STEP 1: All 3 RPC functions exist with SECURITY DEFINER
✅ STEP 2: All 3 specialized tables exist
✅ STEP 3: RLS policies exist for SELECT and INSERT
✅ STEP 4-7: Sample data retrieval and RPC calls work
✅ STEP 8: Data inserted successfully into all 3 tables
✅ STEP 9: Customers can view only their own completions
✅ STEP 10: Drivers can view only their own completions
✅ STEP 11: Scheduled booking completions work
✅ STEP 13: Functions have SECURITY DEFINER

If all steps pass: ✅ FIX IS WORKING CORRECTLY
If any step fails: ❌ Review error messages and check migration status
*/
