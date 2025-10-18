-- Real-time Location Monitoring Query
-- Run this query repeatedly to verify driver location is updating every 5 seconds

SELECT
  u.full_name as driver_name,
  u.phone_number,
  d.status,
  ll.latitude,
  ll.longitude,
  ll.updated_at,
  NOW() as current_time,
  EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) as seconds_since_update,
  CASE
    WHEN EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) <= 10 THEN '🟢 UPDATING (0-10s)'
    WHEN EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) <= 30 THEN '🟡 RECENT (10-30s)'
    WHEN EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) <= 300 THEN '🟠 STALE (30s-5min)'
    ELSE '🔴 VERY OLD (>5min)'
  END as status_indicator,
  CASE
    WHEN EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) <= 300 THEN 'YES ✅'
    ELSE 'NO ❌'
  END as will_get_ride_notifications
FROM drivers d
JOIN users u ON u.id = d.user_id
LEFT JOIN live_locations ll ON ll.user_id = d.user_id
WHERE d.status IN ('online', 'busy')
  AND d.is_verified = true
ORDER BY ll.updated_at DESC NULLS LAST
LIMIT 5;

-- Expected Result for Working Driver:
-- seconds_since_update should be between 0-10 seconds
-- status_indicator should show 🟢 UPDATING (0-10s)
-- will_get_ride_notifications should show YES ✅
