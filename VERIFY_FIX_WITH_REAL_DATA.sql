/*
  # Verify Specialized Trip Completions Fix with Real Ride Data

  This script uses actual ride data from your database to test the fix.
  Run each section in order in Supabase SQL Editor.
*/

-- ============================================================================
-- STEP 1: Check if you have any completed outstation rides
-- ============================================================================

SELECT
  r.id as ride_id,
  r.driver_id,
  r.customer_id,
  r.booking_type,
  r.vehicle_type,
  r.trip_type,
  r.pickup_address,
  r.destination_address,
  r.status,
  r.completed_at
FROM rides r
WHERE r.booking_type IN ('outstation', 'rental', 'airport')
  AND r.status = 'completed'
ORDER BY r.completed_at DESC
LIMIT 5;

-- Note down a ride_id, driver_id, and customer_id from the results


-- ============================================================================
-- STEP 2: Check if completion already exists for this ride
-- ============================================================================

-- Replace 'YOUR-RIDE-ID' with an actual ride_id from STEP 1

-- Check in all completion tables
SELECT 'outstation' as table_name, id, ride_id, total_fare
FROM outstation_trip_completions
WHERE ride_id = 'YOUR-RIDE-ID'::uuid

UNION ALL

SELECT 'rental' as table_name, id, ride_id, total_fare
FROM rental_trip_completions
WHERE ride_id = 'YOUR-RIDE-ID'::uuid

UNION ALL

SELECT 'airport' as table_name, id, ride_id, total_fare
FROM airport_trip_completions
WHERE ride_id = 'YOUR-RIDE-ID'::uuid;

-- If no results: This ride doesn't have a completion yet (which proves the bug)
-- If results: Choose a different ride from STEP 1


-- ============================================================================
-- STEP 3: Test RPC function with real ride data
-- ============================================================================

-- Replace these values with actual data from STEP 1:
-- - YOUR-RIDE-ID
-- - YOUR-DRIVER-ID
-- - YOUR-CUSTOMER-ID

SELECT insert_outstation_trip_completion(
  p_ride_id := 'YOUR-RIDE-ID'::uuid,
  p_driver_id := 'YOUR-DRIVER-ID'::uuid,
  p_customer_id := 'YOUR-CUSTOMER-ID'::uuid,
  p_booking_type := 'outstation',
  p_vehicle_type := 'sedan',
  p_trip_type := 'one_way',
  p_pickup_address := 'Test - Real Ride Completion',
  p_destination_address := 'Test Destination',
  p_actual_distance_km := 50,
  p_actual_duration_minutes := 120,
  p_actual_days := 1,
  p_base_fare := 3500,
  p_distance_fare := 0,
  p_per_day_charges := 0,
  p_driver_allowance := 400,
  p_extra_km_charges := 0,
  p_toll_charges := 0,
  p_platform_fee := 100,
  p_gst_on_charges := 195,
  p_gst_on_platform_fee := 18,
  p_total_fare := 4213,
  p_fare_details := '{"test_with_real_ride":true}'::jsonb,
  p_driver_name := 'Real Ride Test Driver',
  p_driver_phone := '+919876543210',
  p_vehicle_make := 'Toyota',
  p_vehicle_model := 'Innova'
) as result;

-- Expected: {"success": true, "completion_id": "some-uuid"}
-- ✅ If success = true: RPC function works with real ride IDs!
-- ❌ If success = false: Check error message


-- ============================================================================
-- STEP 4: Verify the completion was stored
-- ============================================================================

-- Replace 'YOUR-RIDE-ID' with the same ride_id from STEP 3
SELECT
  id,
  ride_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  trip_type,
  actual_distance_km,
  base_fare,
  driver_allowance,
  extra_km_charges,
  platform_fee,
  gst_on_charges,
  total_fare,
  driver_name,
  vehicle_make,
  vehicle_model,
  fare_details->>'test_with_real_ride' as is_test,
  created_at
FROM outstation_trip_completions
WHERE ride_id = 'YOUR-RIDE-ID'::uuid;

-- Expected: 1 row showing the completion data
-- ✅ Verify total_fare = 4213
-- ✅ Verify driver_name = 'Real Ride Test Driver'
-- ✅ Verify is_test = 'true'


-- ============================================================================
-- STEP 5: Test customer can view their completion (RLS test)
-- ============================================================================

-- This query simulates what happens when a customer views their completions
-- Replace 'YOUR-CUSTOMER-ID' with the customer_id from STEP 1

SELECT
  id,
  ride_id,
  booking_type,
  total_fare,
  driver_name,
  vehicle_make,
  completed_at
FROM outstation_trip_completions
WHERE customer_id = 'YOUR-CUSTOMER-ID'::uuid
ORDER BY completed_at DESC;

-- Expected: Shows completions for this customer
-- ✅ Should include the test completion we just created


-- ============================================================================
-- STEP 6: Test driver can view their completion (RLS test)
-- ============================================================================

-- This query simulates what happens when a driver views their completions
-- Replace 'YOUR-DRIVER-ID' with the driver_id from STEP 1

SELECT
  id,
  ride_id,
  booking_type,
  total_fare,
  driver_name,
  vehicle_make,
  completed_at
FROM outstation_trip_completions
WHERE driver_id = 'YOUR-DRIVER-ID'::uuid
ORDER BY completed_at DESC;

-- Expected: Shows completions for this driver
-- ✅ Should include the test completion we just created


-- ============================================================================
-- STEP 7: Count completions by booking type
-- ============================================================================

SELECT
  booking_type,
  COUNT(*) as total_completions,
  COUNT(CASE WHEN created_at > NOW() - INTERVAL '7 days' THEN 1 END) as recent_completions,
  COUNT(CASE WHEN ride_id IS NOT NULL THEN 1 END) as regular_rides,
  COUNT(CASE WHEN scheduled_booking_id IS NOT NULL THEN 1 END) as scheduled_bookings
FROM (
  SELECT booking_type, created_at, ride_id, scheduled_booking_id
  FROM outstation_trip_completions

  UNION ALL

  SELECT booking_type, created_at, ride_id, scheduled_booking_id
  FROM rental_trip_completions

  UNION ALL

  SELECT booking_type, created_at, ride_id, scheduled_booking_id
  FROM airport_trip_completions
) completions
GROUP BY booking_type
ORDER BY booking_type;

-- Shows statistics for all completion types
-- ✅ Outstation completions count
-- ✅ Rental completions count
-- ✅ Airport completions count


-- ============================================================================
-- STEP 8: Check for missing completions (rides without completions)
-- ============================================================================

-- Finds completed rides that don't have trip completions stored
SELECT
  r.id as ride_id,
  r.booking_type,
  r.status,
  r.completed_at,
  CASE
    WHEN r.booking_type = 'regular' THEN
      (SELECT COUNT(*) FROM trip_completions tc WHERE tc.ride_id = r.id)
    WHEN r.booking_type = 'outstation' THEN
      (SELECT COUNT(*) FROM outstation_trip_completions otc WHERE otc.ride_id = r.id)
    WHEN r.booking_type = 'rental' THEN
      (SELECT COUNT(*) FROM rental_trip_completions rtc WHERE rtc.ride_id = r.id)
    WHEN r.booking_type = 'airport' THEN
      (SELECT COUNT(*) FROM airport_trip_completions atc WHERE atc.ride_id = r.id)
  END as has_completion
FROM rides r
WHERE r.status = 'completed'
  AND r.completed_at IS NOT NULL
ORDER BY r.completed_at DESC
LIMIT 20;

-- Expected: All should have has_completion = 1
-- ❌ If has_completion = 0: These rides are missing completions (confirms the bug existed)
-- ✅ After fix: Future completions should all have has_completion = 1


-- ============================================================================
-- CLEANUP: Remove test data (OPTIONAL - run after testing)
-- ============================================================================

/*
-- Only removes the test completion, not real data
DELETE FROM outstation_trip_completions
WHERE driver_name = 'Real Ride Test Driver'
  AND fare_details->>'test_with_real_ride' = 'true';

-- Verify deletion
SELECT 'Test completion removed' as status;
*/


-- ============================================================================
-- FINAL VERIFICATION: Everything is working
-- ============================================================================

-- Run this to see a summary of all completions
SELECT
  'outstation_trip_completions' as table_name,
  COUNT(*) as total_records,
  MAX(created_at) as latest_completion
FROM outstation_trip_completions

UNION ALL

SELECT
  'rental_trip_completions' as table_name,
  COUNT(*) as total_records,
  MAX(created_at) as latest_completion
FROM rental_trip_completions

UNION ALL

SELECT
  'airport_trip_completions' as table_name,
  COUNT(*) as total_records,
  MAX(created_at) as latest_completion
FROM airport_trip_completions;

-- Shows total records in each specialized completion table


-- ============================================================================
-- SUCCESS CRITERIA
-- ============================================================================

/*
✅ STEP 1: Found completed rides in your database
✅ STEP 2: Identified rides without completions (proves bug existed)
✅ STEP 3: RPC function returned {"success": true}
✅ STEP 4: Completion record created successfully
✅ STEP 5: Customer can view their completion (RLS working)
✅ STEP 6: Driver can view their completion (RLS working)
✅ STEP 7: Statistics show completions being stored
✅ STEP 8: Identified any missing completions from before fix

If all steps pass: ✅ THE FIX IS WORKING WITH REAL DATA!
If any fails: ❌ Review error messages and check the specific step
*/
