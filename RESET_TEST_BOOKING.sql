-- Reset Test Booking for Retesting
-- Run this if you want to reuse the same test booking after building new APK

-- Reset booking status to in_progress
UPDATE scheduled_bookings
SET
  status = 'in_progress',
  updated_at = NOW()
WHERE id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';

-- Verify the reset worked
SELECT
  '✅ Booking Reset - Ready to Test Again' as status,
  id,
  booking_type,
  trip_type,
  vehicle_type,
  status,
  estimated_fare,
  assigned_driver_id,
  pickup_address,
  destination_address,
  (SELECT COUNT(*) FROM trip_location_history WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d') as gps_points_ready,
  (SELECT COUNT(*) FROM outstation_trip_completions WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d') as completion_records
FROM scheduled_bookings
WHERE id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
