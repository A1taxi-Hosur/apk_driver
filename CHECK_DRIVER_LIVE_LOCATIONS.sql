-- Check if drivers are continuously updating their live locations

-- 1. Count total live location records
SELECT 
  'Total Drivers with Live Location' as info,
  COUNT(*) as total_drivers
FROM live_locations;

-- 2. Show all active drivers with their latest location updates
SELECT 
  'll.user_id',
  'd.full_name as driver_name',
  'd.phone as driver_phone',
  'd.status as driver_status',
  'll.latitude',
  'll.longitude',
  'll.updated_at as last_location_update,
  NOW() - ll.updated_at as time_since_update,
  CASE 
    WHEN ll.updated_at > NOW() - INTERVAL '5 minutes' THEN 'FRESH (< 5 min)'
    WHEN ll.updated_at > NOW() - INTERVAL '30 minutes' THEN 'STALE (5-30 min)'
    ELSE 'EXPIRED (> 30 min)'
  END as location_freshness
FROM live_locations ll
LEFT JOIN drivers d ON d.user_id = ll.user_id
ORDER BY ll.updated_at DESC;

-- 3. Show drivers by location freshness status
SELECT 
  CASE 
    WHEN updated_at > NOW() - INTERVAL '5 minutes' THEN 'FRESH (< 5 min)'
    WHEN updated_at > NOW() - INTERVAL '30 minutes' THEN 'STALE (5-30 min)'
    ELSE 'EXPIRED (> 30 min)'
  END as freshness_status,
  COUNT(*) as driver_count
FROM live_locations
GROUP BY 
  CASE 
    WHEN updated_at > NOW() - INTERVAL '5 minutes' THEN 'FRESH (< 5 min)'
    WHEN updated_at > NOW() - INTERVAL '30 minutes' THEN 'STALE (5-30 min)'
    ELSE 'EXPIRED (> 30 min)'
  END
ORDER BY driver_count DESC;

-- 4. Show online drivers with fresh location data (ready for ride assignments)
SELECT 
  d.id as driver_id,
  d.full_name as driver_name,
  d.vehicle_type,
  d.status,
  ll.latitude,
  ll.longitude,
  ll.updated_at as last_update,
  EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) as seconds_since_update
FROM drivers d
JOIN live_locations ll ON ll.user_id = d.user_id
WHERE d.status IN ('online', 'busy')
  AND ll.updated_at > NOW() - INTERVAL '5 minutes'
ORDER BY ll.updated_at DESC;

-- 5. Check if any driver is currently updating (within last 30 seconds)
SELECT 
  COUNT(*) as drivers_updating_now,
  MAX(updated_at) as most_recent_update
FROM live_locations
WHERE updated_at > NOW() - INTERVAL '30 seconds';
