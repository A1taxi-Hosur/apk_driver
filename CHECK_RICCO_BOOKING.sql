-- Quick Check for Your "Ricco" Outstation Booking
-- =================================================

-- Find your current in-progress booking
SELECT
  id as booking_id,
  booking_type,
  trip_type as current_trip_type,

  -- This simulates what the app will do
  CASE
    WHEN booking_type = 'outstation' AND trip_type IS NULL
    THEN 'one_way'
    ELSE trip_type
  END as effective_trip_type,

  status,
  pickup_address,
  destination_address,
  special_instructions,
  scheduled_time,
  created_at
FROM scheduled_bookings
WHERE status = 'in_progress'
  AND booking_type = 'outstation'
ORDER BY created_at DESC
LIMIT 1;

-- Expected Result:
-- ================
-- If trip_type is NULL, effective_trip_type should show 'one_way'
-- This proves the logic will work when you complete the trip

-- If you see:
-- booking_type: outstation
-- current_trip_type: NULL
-- effective_trip_type: one_way  ✅ FIX WILL WORK!

-- Then the JavaScript fix will work perfectly!
