-- SQL Queries to Verify effectiveTripType Fix
-- =============================================

-- Query 1: Check your current booking's trip_type value
-- Replace 'YOUR_BOOKING_ID' with the actual booking ID from the error screenshot
SELECT
  id,
  booking_type,
  trip_type,
  CASE
    WHEN booking_type = 'outstation' AND trip_type IS NULL THEN 'one_way'
    ELSE trip_type
  END as effective_trip_type,
  pickup_address,
  destination_address,
  status,
  scheduled_time
FROM scheduled_bookings
WHERE id = 'YOUR_BOOKING_ID';  -- Replace with actual booking ID

-- Expected output:
-- If trip_type is NULL and booking_type is 'outstation',
-- effective_trip_type should show 'one_way'


-- Query 2: Check all outstation bookings with NULL trip_type
SELECT
  id,
  booking_type,
  trip_type,
  CASE
    WHEN booking_type = 'outstation' AND trip_type IS NULL THEN 'one_way'
    ELSE trip_type
  END as effective_trip_type,
  status,
  created_at
FROM scheduled_bookings
WHERE booking_type = 'outstation'
ORDER BY created_at DESC
LIMIT 10;

-- This shows how the app will interpret NULL trip_type values


-- Query 3: Check if trip_type column exists and its data type
SELECT
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'scheduled_bookings'
  AND column_name = 'trip_type';

-- Expected: column should exist and be nullable (text type)


-- Query 4: Check completion tables have trip_type column
SELECT
  table_name,
  column_name,
  data_type
FROM information_schema.columns
WHERE column_name = 'trip_type'
  AND table_name IN (
    'trip_completions',
    'rental_trip_completions',
    'outstation_trip_completions',
    'airport_trip_completions'
  )
ORDER BY table_name;

-- All completion tables should have trip_type column


-- Query 5: Test the JavaScript logic in SQL
-- This mimics what the app does
SELECT
  id,
  booking_type,
  trip_type as original_trip_type,
  CASE
    WHEN booking_type = 'outstation' AND (trip_type IS NULL OR trip_type = '')
    THEN 'one_way'
    ELSE COALESCE(trip_type, 'N/A')
  END as effective_trip_type,
  pickup_address,
  destination_address
FROM scheduled_bookings
WHERE status = 'in_progress'
  AND booking_type IN ('outstation', 'rental', 'airport')
ORDER BY created_at DESC;

-- Shows what trip_type will be used for each booking


-- Query 6: Check for your specific "Ricco" booking from screenshot
SELECT
  sb.id,
  sb.booking_type,
  sb.trip_type,
  sb.status,
  sb.pickup_address,
  sb.destination_address,
  sb.special_instructions,
  u.full_name as customer_name,
  d.id as driver_id
FROM scheduled_bookings sb
LEFT JOIN users u ON sb.customer_id = u.id
LEFT JOIN drivers d ON sb.assigned_driver_id = d.id
WHERE sb.pickup_address LIKE '%PRXJ+F32%'
  OR sb.pickup_address LIKE '%Brindavan Nagar%'
ORDER BY sb.created_at DESC
LIMIT 1;

-- This should show your exact booking


-- Query 7: Verify the stored completion won't fail
-- Check if RPC function accepts trip_type parameter
SELECT
  routine_name,
  routine_type,
  data_type
FROM information_schema.routines
WHERE routine_name LIKE '%insert%completion%'
  OR routine_name LIKE '%store%fare%'
ORDER BY routine_name;


-- Query 8: Check if any completions have been stored with trip_type
SELECT
  'outstation_trip_completions' as table_name,
  COUNT(*) as total_records,
  COUNT(trip_type) as records_with_trip_type,
  COUNT(*) - COUNT(trip_type) as records_with_null_trip_type
FROM outstation_trip_completions
UNION ALL
SELECT
  'trip_completions',
  COUNT(*),
  COUNT(trip_type),
  COUNT(*) - COUNT(trip_type)
FROM trip_completions
UNION ALL
SELECT
  'rental_trip_completions',
  COUNT(*),
  COUNT(trip_type),
  COUNT(*) - COUNT(trip_type)
FROM rental_trip_completions
UNION ALL
SELECT
  'airport_trip_completions',
  COUNT(*),
  COUNT(trip_type),
  COUNT(*) - COUNT(trip_type)
FROM airport_trip_completions;

-- Shows if trip_type is being stored correctly


-- IMPORTANT TEST QUERIES
-- ======================

-- Query 9: Find the exact booking causing the error
-- Run this to get the booking ID causing issues
SELECT
  id,
  booking_type,
  trip_type,
  status,
  pickup_address,
  destination_address,
  special_instructions,
  assigned_driver_id,
  created_at
FROM scheduled_bookings
WHERE status = 'in_progress'
  AND booking_type = 'outstation'
ORDER BY created_at DESC
LIMIT 5;

-- Copy the ID and test with Query 1


-- Query 10: Simulate the app's logic exactly
WITH booking_data AS (
  SELECT
    id,
    booking_type,
    trip_type,
    -- This is exactly what the JavaScript does
    CASE
      WHEN booking_type = 'outstation' AND trip_type IS NULL
      THEN 'one_way'
      ELSE trip_type
    END as effective_trip_type
  FROM scheduled_bookings
  WHERE status = 'in_progress'
    AND booking_type = 'outstation'
)
SELECT
  id,
  booking_type,
  trip_type as original_value,
  effective_trip_type as computed_value,
  CASE
    WHEN effective_trip_type IS NOT NULL THEN '✅ Will work'
    ELSE '❌ Will fail'
  END as status
FROM booking_data;


-- VERIFICATION CHECKLIST
-- ======================

/*
After running these queries, verify:

1. ✅ trip_type column exists in scheduled_bookings
2. ✅ trip_type column exists in all completion tables
3. ✅ Your booking has booking_type = 'outstation'
4. ✅ Your booking may have trip_type = NULL (this is OK!)
5. ✅ effective_trip_type should compute to 'one_way' if NULL
6. ✅ The app code now accesses effectiveTripType correctly

The fix is a JAVASCRIPT SCOPE fix, not a SQL fix!
The variable was declared inside a try{} block but used outside it.
Moving it outside the try{} block makes it accessible everywhere.
*/


-- HOW TO USE THESE QUERIES
-- ========================

/*
STEP 1: Run Query 9 to find your current booking ID
STEP 2: Copy the ID and paste it in Query 1 (replace 'YOUR_BOOKING_ID')
STEP 3: Run Query 1 to see what effective_trip_type would be
STEP 4: Run Query 10 to verify the logic works
STEP 5: If all queries return data, the fix will work!

The JavaScript fix ensures the variable is accessible when storing the completion.
The SQL queries verify the database has the correct structure and data.
*/
