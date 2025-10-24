-- ============================================
-- VERIFICATION SCRIPT FOR TEST BOOKING COMPLETION
-- ============================================
-- Test Booking ID: bf8f4d39-5393-4896-9849-13d123d257fc
-- Run these queries BEFORE and AFTER completing the test booking
-- ============================================

-- ============================================
-- STEP 1: VERIFY TEST BOOKING IS READY
-- ============================================
-- This should show: booking_status = 'in_progress', gps_points = 5
SELECT
  '✅ Test Booking Ready' as status,
  sb.id as booking_id,
  sb.booking_type,
  sb.trip_type,
  sb.status as booking_status,
  sb.estimated_fare,
  COUNT(tlh.id) as gps_points_count,
  u.full_name as driver_name,
  u.email as driver_email
FROM scheduled_bookings sb
LEFT JOIN trip_location_history tlh ON tlh.scheduled_booking_id = sb.id
LEFT JOIN drivers d ON d.id = sb.assigned_driver_id
LEFT JOIN users u ON u.id = d.user_id
WHERE sb.id = 'bf8f4d39-5393-4896-9849-13d123d257fc'
GROUP BY sb.id, sb.booking_type, sb.trip_type, sb.status, sb.estimated_fare, u.full_name, u.email;

-- ============================================
-- STEP 2: CHECK GPS TRACKING DATA
-- ============================================
-- This should show 5 GPS points from Hosur to Bangalore
SELECT
  id,
  ROUND(latitude::numeric, 4) as lat,
  ROUND(longitude::numeric, 4) as lng,
  ROUND(speed::numeric, 1) as speed_kmh,
  ROUND(heading::numeric, 1) as heading_deg,
  recorded_at,
  EXTRACT(EPOCH FROM (recorded_at - LAG(recorded_at) OVER (ORDER BY recorded_at))) / 60 as minutes_since_last
FROM trip_location_history
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc'
ORDER BY recorded_at ASC;

-- ============================================
-- STEP 3: CALCULATE EXPECTED GPS DISTANCE
-- ============================================
-- This calculates what the GPS distance should be
-- Expected: ~47 km (straight-line ~43 km, actual road distance ~47 km)
WITH points AS (
  SELECT
    latitude,
    longitude,
    recorded_at,
    LAG(latitude) OVER (ORDER BY recorded_at) as prev_lat,
    LAG(longitude) OVER (ORDER BY recorded_at) as prev_lng
  FROM trip_location_history
  WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc'
  ORDER BY recorded_at
)
SELECT
  COUNT(*) as total_points,
  ROUND(
    SUM(
      6371 * acos(
        cos(radians(prev_lat)) * cos(radians(latitude)) *
        cos(radians(longitude) - radians(prev_lng)) +
        sin(radians(prev_lat)) * sin(radians(latitude))
      )
    )::numeric,
    2
  ) as gps_distance_km,
  ROUND(
    SUM(
      6371 * acos(
        cos(radians(prev_lat)) * cos(radians(latitude)) *
        cos(radians(longitude) - radians(prev_lng)) +
        sin(radians(prev_lat)) * sin(radians(latitude))
      )
    )::numeric * 2,
    2
  ) as doubled_for_oneway_km
FROM points
WHERE prev_lat IS NOT NULL;

-- ============================================
-- STEP 4: CHECK COMPLETION STATUS (BEFORE)
-- ============================================
-- This should return 0 rows BEFORE completing the trip
SELECT
  'BEFORE COMPLETION - Should be empty' as status,
  COUNT(*) as completion_records
FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- ============================================
-- NOW COMPLETE THE TRIP IN THE DRIVER APP
-- ============================================
-- 1. Open driver app (logged in as kiran@gmail.com)
-- 2. Go to Scheduled tab
-- 3. You should see the test booking
-- 4. Tap "Complete Trip" button
-- 5. Wait for completion (should take 2-5 seconds)
-- 6. Check if any error alert appears
-- 7. Verify trip disappears from list
-- 8. Return here and run queries below
-- ============================================

-- ============================================
-- STEP 5: VERIFY BOOKING STATUS CHANGED
-- ============================================
-- This should show status = 'completed' AFTER completing
SELECT
  id,
  booking_type,
  trip_type,
  status,
  estimated_fare,
  updated_at
FROM scheduled_bookings
WHERE id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- ============================================
-- STEP 6: VERIFY COMPLETION RECORD EXISTS
-- ============================================
-- This should return 1 row with all fare details AFTER completing
SELECT
  id,
  scheduled_booking_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  trip_type,
  ROUND(actual_distance_km::numeric, 2) as distance_km,
  actual_duration_minutes as duration_min,
  actual_days,
  ROUND(base_fare::numeric, 2) as base_fare,
  ROUND(distance_fare::numeric, 2) as distance_fare,
  ROUND(driver_allowance::numeric, 2) as driver_allowance,
  ROUND(platform_fee::numeric, 2) as platform_fee,
  ROUND(gst_on_charges::numeric, 2) as gst_charges,
  ROUND(gst_on_platform_fee::numeric, 2) as gst_platform,
  ROUND(total_fare::numeric, 2) as total_fare,
  completed_at,
  created_at
FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- ============================================
-- STEP 7: CHECK DRIVER DETAILS STORED
-- ============================================
-- This should show driver name, phone, rating, vehicle details
SELECT
  driver_name,
  driver_phone,
  ROUND(driver_rating::numeric, 2) as driver_rating,
  vehicle_make,
  vehicle_model,
  vehicle_color,
  vehicle_license_plate
FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- ============================================
-- STEP 8: CHECK FARE BREAKDOWN JSON
-- ============================================
-- This should show the complete fare breakdown in JSON format
SELECT
  total_fare,
  fare_details
FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- ============================================
-- STEP 9: VERIFY ALL FIELDS ARE NOT NULL
-- ============================================
-- This should return 0 rows (meaning no NULL values in critical fields)
SELECT
  'CRITICAL NULL FIELDS FOUND!' as warning,
  CASE WHEN scheduled_booking_id IS NULL THEN 'scheduled_booking_id' END as null_field_1,
  CASE WHEN driver_id IS NULL THEN 'driver_id' END as null_field_2,
  CASE WHEN customer_id IS NULL THEN 'customer_id' END as null_field_3,
  CASE WHEN trip_type IS NULL THEN 'trip_type' END as null_field_4,
  CASE WHEN total_fare IS NULL THEN 'total_fare' END as null_field_5,
  CASE WHEN fare_details IS NULL THEN 'fare_details' END as null_field_6
FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc'
  AND (
    scheduled_booking_id IS NULL OR
    driver_id IS NULL OR
    customer_id IS NULL OR
    trip_type IS NULL OR
    total_fare IS NULL OR
    fare_details IS NULL
  );

-- ============================================
-- STEP 10: COMPARE WITH ORIGINAL BOOKING
-- ============================================
-- This shows side-by-side comparison of booking vs completion
SELECT
  'Booking' as source,
  sb.id,
  sb.booking_type,
  sb.trip_type,
  sb.vehicle_type,
  sb.estimated_fare as fare,
  sb.status,
  NULL::timestamptz as completed_at
FROM scheduled_bookings sb
WHERE sb.id = 'bf8f4d39-5393-4896-9849-13d123d257fc'

UNION ALL

SELECT
  'Completion' as source,
  otc.scheduled_booking_id as id,
  otc.booking_type,
  otc.trip_type,
  otc.vehicle_type,
  otc.total_fare as fare,
  'completed' as status,
  otc.completed_at
FROM outstation_trip_completions otc
WHERE otc.scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- ============================================
-- EXPECTED RESULTS
-- ============================================
-- After completing the trip successfully:
--
-- ✅ Step 1: Shows booking is ready with 5 GPS points
-- ✅ Step 2: Shows 5 GPS points from Hosur to Bangalore
-- ✅ Step 3: Shows GPS distance ~47 km, doubled ~94 km
-- ✅ Step 4: Shows 0 completion records (before)
-- ✅ Step 5: Shows status changed to 'completed'
-- ✅ Step 6: Shows 1 completion record with all details
-- ✅ Step 7: Shows driver details (name, phone, rating, vehicle)
-- ✅ Step 8: Shows complete fare breakdown JSON
-- ✅ Step 9: Returns 0 rows (no NULL fields)
-- ✅ Step 10: Shows matching data between booking and completion
--
-- If any step fails, check the error logs and alert messages!
-- ============================================

-- ============================================
-- CLEANUP (Run after successful testing)
-- ============================================
-- Uncomment and run these to clean up test data:

-- DELETE FROM outstation_trip_completions
-- WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- DELETE FROM trip_location_history
-- WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- DELETE FROM scheduled_bookings
-- WHERE id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- ============================================
-- QUICK VERIFICATION COMMAND
-- ============================================
-- Run this single query to check overall status:

SELECT
  CASE
    WHEN sb.status = 'completed' AND otc.id IS NOT NULL THEN '✅ SUCCESS - Completion stored correctly'
    WHEN sb.status = 'completed' AND otc.id IS NULL THEN '❌ FAILED - Booking completed but no completion record'
    WHEN sb.status = 'in_progress' THEN '⏳ PENDING - Booking not yet completed'
    ELSE '⚠️ UNKNOWN STATUS'
  END as test_result,
  sb.id as booking_id,
  sb.status as booking_status,
  otc.id as completion_id,
  ROUND(otc.total_fare::numeric, 2) as total_fare_stored
FROM scheduled_bookings sb
LEFT JOIN outstation_trip_completions otc ON otc.scheduled_booking_id = sb.id
WHERE sb.id = 'bf8f4d39-5393-4896-9849-13d123d257fc';
