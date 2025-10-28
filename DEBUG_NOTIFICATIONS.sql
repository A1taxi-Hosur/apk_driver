-- Debug script to check notification setup and delivery

-- 1. Check if drivers have push tokens
SELECT 
  id,
  full_name,
  expo_push_token,
  CASE 
    WHEN expo_push_token IS NULL THEN '❌ NO TOKEN'
    WHEN expo_push_token LIKE 'ExponentPushToken[%' THEN '✅ VALID TOKEN'
    ELSE '⚠️ INVALID TOKEN FORMAT'
  END as token_status,
  status,
  created_at
FROM drivers
ORDER BY created_at DESC
LIMIT 10;

-- 2. Check recent ride notifications sent
SELECT 
  rn.id,
  rn.driver_id,
  d.full_name as driver_name,
  d.expo_push_token,
  rn.ride_id,
  r.pickup_address,
  rn.notification_type,
  rn.is_read,
  rn.expires_at,
  rn.created_at,
  CASE 
    WHEN rn.expires_at < NOW() THEN '⚠️ EXPIRED'
    WHEN rn.is_read THEN '✅ READ'
    ELSE '📱 UNREAD'
  END as status
FROM ride_notifications rn
JOIN drivers d ON d.id = rn.driver_id
JOIN rides r ON r.id = rn.ride_id
ORDER BY rn.created_at DESC
LIMIT 20;

-- 3. Check recent rides and their status
SELECT 
  r.id,
  r.code,
  r.customer_name,
  r.pickup_address,
  r.status,
  r.driver_id,
  d.full_name as assigned_driver,
  d.expo_push_token as driver_token,
  r.created_at,
  -- Count notifications sent
  (SELECT COUNT(*) FROM ride_notifications WHERE ride_id = r.id) as notifications_sent
FROM rides r
LEFT JOIN drivers d ON d.id = r.driver_id
ORDER BY r.created_at DESC
LIMIT 10;

-- 4. Check debug logs related to notifications
SELECT 
  id,
  category,
  action,
  details,
  created_at
FROM debug_logs
WHERE 
  category LIKE '%otification%' 
  OR category LIKE '%ush%'
  OR action LIKE '%otification%'
ORDER BY created_at DESC
LIMIT 50;

-- 5. Check if background notification task is being triggered
-- (These would be in debug_logs if properly logged)
SELECT 
  category,
  action,
  COUNT(*) as count,
  MAX(created_at) as last_occurrence
FROM debug_logs
WHERE 
  category IN ('BackgroundNotificationTask', 'BackgroundNotificationHandler')
GROUP BY category, action
ORDER BY last_occurrence DESC;
