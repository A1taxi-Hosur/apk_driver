-- Quick Verification for History & Earnings Fix
-- Run these queries to verify scheduled bookings appear in history and earnings

-- =======================================================
-- 1. CHECK SCHEDULED BOOKING COMPLETIONS EXIST
-- =======================================================

SELECT
  '1. SCHEDULED COMPLETIONS CHECK' as test,
  'rental' as type,
  COUNT(*) as count
FROM rental_trip_completions
WHERE driver_id = '6f55e87b-6558-48df-af8c-d69190918b32'

UNION ALL

SELECT
  '1. SCHEDULED COMPLETIONS CHECK',
  'outstation',
  COUNT(*)
FROM outstation_trip_completions
WHERE driver_id = '6f55e87b-6558-48df-af8c-d69190918b32'

UNION ALL

SELECT
  '1. SCHEDULED COMPLETIONS CHECK',
  'airport',
  COUNT(*)
FROM airport_trip_completions
WHERE driver_id = '6f55e87b-6558-48df-af8c-d69190918b32';

-- Expected: Should show at least 1 outstation completion

-- =======================================================
-- 2. TEST get_driver_ride_history (HISTORY TAB)
-- =======================================================

SELECT
  '2. HISTORY TAB TEST' as test,
  ride_code,
  booking_type,
  ROUND(fare_amount::numeric, 2) as fare,
  ROUND(distance_km::numeric, 2) as distance,
  status,
  LEFT(pickup_address, 30) as pickup,
  LEFT(destination_address, 30) as destination,
  TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI') as completed
FROM get_driver_ride_history('6f55e87b-6558-48df-af8c-d69190918b32'::uuid, 10)
ORDER BY created_at DESC;

-- Expected: Should show rides with codes like "OUTSTATION-10128c57"

-- =======================================================
-- 3. TEST get_driver_earnings_with_commission (EARNINGS TAB)
-- =======================================================

SELECT
  '3. EARNINGS TAB TEST' as test,
  ride_code,
  ROUND(fare_amount::numeric, 2) as total_fare,
  ROUND(platform_fee::numeric, 2) as platform_fee,
  ROUND(gst_on_charges::numeric, 2) as gst_charges,
  ROUND(gst_on_platform_fee::numeric, 2) as gst_platform,
  ROUND(commission_11_percent::numeric, 2) as commission,
  ROUND(you_owe_total::numeric, 2) as you_owe,
  TO_CHAR(created_at, 'YYYY-MM-DD') as date
FROM get_driver_earnings_with_commission('6f55e87b-6558-48df-af8c-d69190918b32'::uuid)
ORDER BY created_at DESC
LIMIT 10;

-- Expected: Shows all rides with commission breakdown

-- =======================================================
-- 4. CALCULATE TODAY'S TOTALS (WHAT APP SHOWS)
-- =======================================================

WITH todays_rides AS (
  SELECT *
  FROM get_driver_earnings_with_commission('6f55e87b-6558-48df-af8c-d69190918b32'::uuid)
  WHERE DATE(created_at) = CURRENT_DATE
)
SELECT
  '4. TODAY TOTALS' as test,
  COUNT(*) as total_rides,
  ROUND(SUM(fare_amount)::numeric, 2) as total_earnings,
  ROUND(SUM(you_owe_total)::numeric, 2) as total_you_owe,
  ROUND(SUM(distance_km)::numeric, 2) as total_distance,
  SUM(duration_minutes) as total_minutes
FROM todays_rides;

-- Expected: Shows today's aggregated statistics

-- =======================================================
-- 5. CALCULATE WEEK'S TOTALS (WHAT APP SHOWS)
-- =======================================================

WITH weeks_rides AS (
  SELECT *
  FROM get_driver_earnings_with_commission('6f55e87b-6558-48df-af8c-d69190918b32'::uuid)
  WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'
)
SELECT
  '5. WEEK TOTALS' as test,
  COUNT(*) as total_rides,
  ROUND(SUM(fare_amount)::numeric, 2) as total_earnings,
  ROUND(SUM(you_owe_total)::numeric, 2) as total_you_owe,
  ROUND(SUM(distance_km)::numeric, 2) as total_distance,
  SUM(duration_minutes) as total_minutes
FROM weeks_rides;

-- Expected: Shows this week's aggregated statistics

-- =======================================================
-- 6. CHECK RPC FUNCTION SECURITY
-- =======================================================

SELECT
  '6. FUNCTION SECURITY CHECK' as test,
  proname as function_name,
  CASE WHEN prosecdef THEN 'SECURITY DEFINER' ELSE 'NO SECURITY' END as security,
  CASE WHEN prosecdef THEN '✅ OK' ELSE '❌ MISSING' END as status
FROM pg_proc
WHERE proname IN (
  'get_driver_ride_history',
  'get_driver_completed_rides',
  'get_driver_earnings_with_commission'
)
ORDER BY proname;

-- Expected: All should have SECURITY DEFINER

-- =======================================================
-- 7. DETAILED OUTSTATION COMPLETION CHECK
-- =======================================================

SELECT
  '7. OUTSTATION DETAIL' as test,
  id,
  booking_type,
  trip_type,
  vehicle_type,
  ROUND(actual_distance_km::numeric, 2) as distance,
  ROUND(total_fare::numeric, 2) as fare,
  ROUND(platform_fee::numeric, 2) as platform_fee,
  driver_name,
  vehicle_make || ' ' || vehicle_model as vehicle,
  LEFT(pickup_address, 30) as pickup,
  LEFT(destination_address, 30) as destination,
  TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') as completed
FROM outstation_trip_completions
WHERE driver_id = '6f55e87b-6558-48df-af8c-d69190918b32'
ORDER BY created_at DESC
LIMIT 5;

-- Expected: Shows the outstation completion details

-- =======================================================
-- ✅ SUCCESS CRITERIA
-- =======================================================

/*
ALL TESTS PASS IF:

1. ✅ Test 1 shows at least 1 outstation completion
2. ✅ Test 2 shows ride with code "OUTSTATION-..."
3. ✅ Test 3 shows commission breakdown with you_owe > 0
4. ✅ Test 4 shows today's stats (may be 0 if not today)
5. ✅ Test 5 shows week's stats including the outstation ride
6. ✅ Test 6 shows all functions have SECURITY DEFINER
7. ✅ Test 7 shows complete outstation completion data

IF ANY FAIL:
- Check if migrations were applied
- Check if completions exist in database
- Check if driver_id is correct
- Re-run migrations if needed
*/
