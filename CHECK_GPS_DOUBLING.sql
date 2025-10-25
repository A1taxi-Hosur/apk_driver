-- ============================================
-- SQL Query to Check if GPS Distance is Being Doubled
-- ============================================

-- Query 1: Check recent outstation one-way completions
-- This shows the raw GPS points distance vs stored distance
SELECT
  otc.id as completion_id,
  otc.scheduled_booking_id,
  sb.trip_type as booking_trip_type,
  otc.trip_type as completion_trip_type,

  -- Calculate actual GPS distance from trip_location_history
  (
    SELECT ROUND(
      SUM(
        ST_Distance(
          ST_MakePoint(t1.longitude, t1.latitude)::geography,
          ST_MakePoint(t2.longitude, t2.latitude)::geography
        )
      ) / 1000, 2)
    FROM (
      SELECT
        latitude,
        longitude,
        ROW_NUMBER() OVER (ORDER BY created_at) as rn
      FROM trip_location_history
      WHERE scheduled_booking_id = otc.scheduled_booking_id
    ) t1
    JOIN (
      SELECT
        latitude,
        longitude,
        ROW_NUMBER() OVER (ORDER BY created_at) as rn
      FROM trip_location_history
      WHERE scheduled_booking_id = otc.scheduled_booking_id
    ) t2 ON t2.rn = t1.rn + 1
  ) as actual_gps_tracked_km,

  ROUND(otc.actual_distance_km::numeric, 2) as stored_distance_km,

  -- Check if stored is roughly double of GPS
  CASE
    WHEN (
      SELECT ROUND(
        SUM(
          ST_Distance(
            ST_MakePoint(t1.longitude, t1.latitude)::geography,
            ST_MakePoint(t2.longitude, t2.latitude)::geography
          )
        ) / 1000, 2)
      FROM (
        SELECT
          latitude,
          longitude,
          ROW_NUMBER() OVER (ORDER BY created_at) as rn
        FROM trip_location_history
        WHERE scheduled_booking_id = otc.scheduled_booking_id
      ) t1
      JOIN (
        SELECT
          latitude,
          longitude,
          ROW_NUMBER() OVER (ORDER BY created_at) as rn
        FROM trip_location_history
        WHERE scheduled_booking_id = otc.scheduled_booking_id
      ) t2 ON t2.rn = t1.rn + 1
    ) * 2 BETWEEN otc.actual_distance_km * 0.95 AND otc.actual_distance_km * 1.05
    THEN '✅ DOUBLED (stored ≈ GPS × 2)'
    WHEN (
      SELECT ROUND(
        SUM(
          ST_Distance(
            ST_MakePoint(t1.longitude, t1.latitude)::geography,
            ST_MakePoint(t2.longitude, t2.latitude)::geography
          )
        ) / 1000, 2)
      FROM (
        SELECT
          latitude,
          longitude,
          ROW_NUMBER() OVER (ORDER BY created_at) as rn
        FROM trip_location_history
        WHERE scheduled_booking_id = otc.scheduled_booking_id
      ) t1
      JOIN (
        SELECT
          latitude,
          longitude,
          ROW_NUMBER() OVER (ORDER BY created_at) as rn
        FROM trip_location_history
        WHERE scheduled_booking_id = otc.scheduled_booking_id
      ) t2 ON t2.rn = t1.rn + 1
    ) BETWEEN otc.actual_distance_km * 0.95 AND otc.actual_distance_km * 1.05
    THEN '❌ NOT DOUBLED (stored ≈ GPS × 1)'
    ELSE '⚠️ UNCLEAR'
  END as doubling_status,

  otc.fare_details->'slab_details'->>'slab_range' as slab_used,
  LEFT(otc.pickup_address, 30) as pickup,
  LEFT(otc.destination_address, 30) as destination,
  otc.created_at as completed_at

FROM outstation_trip_completions otc
JOIN scheduled_bookings sb ON sb.id = otc.scheduled_booking_id
WHERE otc.trip_type = 'one_way'
  AND otc.created_at > NOW() - INTERVAL '7 days'
ORDER BY otc.created_at DESC
LIMIT 10;


-- ============================================
-- Query 2: SIMPLER VERSION - Just check stored vs GPS from fare_details
-- This is faster and uses the data already in the completion record
-- ============================================

SELECT
  otc.id as completion_id,
  sb.trip_type as booking_trip_type,
  otc.trip_type as completion_trip_type,

  -- Get GPS distance from logs (if available in fare_details)
  ROUND((otc.fare_details->'details'->>'actual_distance_km')::numeric, 2) as stored_distance,

  -- Slab used
  otc.fare_details->'slab_details'->>'slab_range' as slab_used,

  -- Check the slab pattern
  CASE
    WHEN otc.fare_details->'slab_details'->>'slab_range' LIKE '%20km (40km%'
      AND ROUND((otc.fare_details->'details'->>'actual_distance_km')::numeric, 2) > 20
    THEN '✅ LIKELY DOUBLED (uses 20km+ slab)'
    WHEN otc.fare_details->'slab_details'->>'slab_range' LIKE '%10km (20km%'
      AND ROUND((otc.fare_details->'details'->>'actual_distance_km')::numeric, 2) < 15
    THEN '❌ LIKELY NOT DOUBLED (uses 10km slab, distance < 15km)'
    WHEN otc.fare_details->'slab_details'->>'slab_range' LIKE '%10km (20km%'
      AND ROUND((otc.fare_details->'details'->>'actual_distance_km')::numeric, 2) > 15
    THEN '✅ DOUBLED (uses 10km slab but distance > 15km)'
    ELSE '⚠️ UNCLEAR'
  END as doubling_check,

  LEFT(otc.pickup_address, 30) as pickup,
  LEFT(otc.destination_address, 30) as destination,
  otc.created_at as completed_at

FROM outstation_trip_completions otc
JOIN scheduled_bookings sb ON sb.id = otc.scheduled_booking_id
WHERE otc.trip_type = 'one_way'
  AND otc.created_at > NOW() - INTERVAL '7 days'
ORDER BY otc.created_at DESC
LIMIT 20;


-- ============================================
-- Query 3: SPECIFIC BOOKING CHECK
-- Use this to check a specific booking by ID
-- ============================================

-- Replace 'YOUR_BOOKING_ID' with actual scheduled_booking_id
SELECT
  'Booking Info' as section,
  sb.id as booking_id,
  sb.trip_type as booking_trip_type,
  sb.booking_type,
  sb.created_at as booking_created_at
FROM scheduled_bookings sb
WHERE sb.id = 'YOUR_BOOKING_ID'

UNION ALL

SELECT
  'GPS Points' as section,
  COUNT(*)::text as info,
  MIN(created_at)::text as start_time,
  MAX(created_at)::text as end_time
FROM trip_location_history
WHERE scheduled_booking_id = 'YOUR_BOOKING_ID'

UNION ALL

SELECT
  'Completion Info' as section,
  otc.trip_type as completion_trip_type,
  ROUND(otc.actual_distance_km::numeric, 2)::text as stored_distance,
  otc.fare_details->'slab_details'->>'slab_range' as slab_used
FROM outstation_trip_completions otc
WHERE otc.scheduled_booking_id = 'YOUR_BOOKING_ID';


-- ============================================
-- Query 4: COUNT CHECK - How many are doubled vs not
-- ============================================

SELECT
  CASE
    WHEN otc.fare_details->'slab_details'->>'slab_range' LIKE '%10km%'
      AND ROUND((otc.fare_details->'details'->>'actual_distance_km')::numeric, 2) < 15
    THEN 'NOT DOUBLED (10km slab, <15km distance)'
    WHEN ROUND((otc.fare_details->'details'->>'actual_distance_km')::numeric, 2) > 20
    THEN 'LIKELY DOUBLED (20km+ distance)'
    ELSE 'UNCLEAR'
  END as status,
  COUNT(*) as count,
  ROUND(AVG((otc.fare_details->'details'->>'actual_distance_km')::numeric), 2) as avg_distance
FROM outstation_trip_completions otc
WHERE otc.trip_type = 'one_way'
  AND otc.created_at > NOW() - INTERVAL '7 days'
GROUP BY 1
ORDER BY 2 DESC;
