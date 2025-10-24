-- ============================================================================
-- WORKING TEST QUERY - Copy and paste this exactly as-is
-- ============================================================================

SELECT insert_outstation_trip_completion(
  NULL::uuid,                                    -- p_ride_id
  NULL::uuid,                                    -- p_scheduled_booking_id
  gen_random_uuid(),                             -- p_driver_id
  gen_random_uuid(),                             -- p_customer_id
  'outstation'::text,                            -- p_booking_type
  'sedan'::text,                                 -- p_vehicle_type
  'one_way'::text,                               -- p_trip_type
  'Quick Test Pickup'::text,                     -- p_pickup_address
  'Quick Test Destination'::text,                -- p_destination_address
  50::numeric,                                   -- p_actual_distance_km
  120::int,                                      -- p_actual_duration_minutes
  1::int,                                        -- p_actual_days
  3500::numeric,                                 -- p_base_fare
  0::numeric,                                    -- p_distance_fare
  0::numeric,                                    -- p_per_day_charges
  400::numeric,                                  -- p_driver_allowance
  0::numeric,                                    -- p_extra_km_charges
  0::numeric,                                    -- p_toll_charges
  100::numeric,                                  -- p_platform_fee
  195::numeric,                                  -- p_gst_on_charges
  18::numeric,                                   -- p_gst_on_platform_fee
  4213::numeric,                                 -- p_total_fare
  '{"test":true}'::jsonb,                        -- p_fare_details
  NULL::timestamptz,                             -- p_scheduled_time
  NOW()::timestamptz,                            -- p_completed_at
  'Quick Test Driver'::text,                     -- p_driver_name
  '+919876543210'::text,                         -- p_driver_phone
  NULL::numeric,                                 -- p_driver_rating
  NULL::uuid,                                    -- p_vehicle_id
  'Toyota'::text,                                -- p_vehicle_make
  'Innova'::text,                                -- p_vehicle_model
  'White'::text,                                 -- p_vehicle_color
  'TEST1234'::text                               -- p_vehicle_license_plate
) as result;

-- Expected Result:
-- {"success": true, "completion_id": "some-uuid-here"}
-- ✅ If you see this, THE FIX IS WORKING!


-- ============================================================================
-- VERIFY THE DATA WAS STORED
-- ============================================================================

SELECT
  id,
  booking_type,
  vehicle_type,
  trip_type,
  total_fare,
  driver_name,
  vehicle_make,
  created_at
FROM outstation_trip_completions
WHERE driver_name = 'Quick Test Driver'
ORDER BY created_at DESC
LIMIT 1;

-- Expected: 1 row with total_fare = 4213


-- ============================================================================
-- TEST RENTAL COMPLETION
-- ============================================================================

SELECT insert_rental_trip_completion(
  NULL::uuid,                                    -- p_ride_id
  NULL::uuid,                                    -- p_scheduled_booking_id
  gen_random_uuid(),                             -- p_driver_id
  gen_random_uuid(),                             -- p_customer_id
  'rental'::text,                                -- p_booking_type
  'suv'::text,                                   -- p_vehicle_type
  NULL::text,                                    -- p_trip_type
  'Rental Test Pickup'::text,                    -- p_pickup_address
  'Rental Test Destination'::text,               -- p_destination_address
  8::int,                                        -- p_rental_hours
  7.5::numeric,                                  -- p_actual_hours_used
  120::numeric,                                  -- p_actual_distance_km
  450::int,                                      -- p_actual_duration_minutes
  2500::numeric,                                 -- p_base_fare
  1500::numeric,                                 -- p_hourly_charges
  800::numeric,                                  -- p_distance_fare
  200::numeric,                                  -- p_extra_km_charges
  0::numeric,                                    -- p_extra_hour_charges
  100::numeric,                                  -- p_platform_fee
  250::numeric,                                  -- p_gst_on_charges
  18::numeric,                                   -- p_gst_on_platform_fee
  5368::numeric,                                 -- p_total_fare
  '{"test":true}'::jsonb,                        -- p_fare_details
  NOW()::timestamptz,                            -- p_completed_at
  'Rental Test Driver'::text,                    -- p_driver_name
  '+919876543210'::text,                         -- p_driver_phone
  NULL::numeric,                                 -- p_driver_rating
  NULL::uuid,                                    -- p_vehicle_id
  'Mahindra'::text,                              -- p_vehicle_make
  'Scorpio'::text,                               -- p_vehicle_model
  'Black'::text,                                 -- p_vehicle_color
  'TEST5678'::text                               -- p_vehicle_license_plate
) as result;

-- Expected: {"success": true, "completion_id": "..."}


-- ============================================================================
-- TEST AIRPORT COMPLETION
-- ============================================================================

SELECT insert_airport_trip_completion(
  NULL::uuid,                                    -- p_ride_id
  NULL::uuid,                                    -- p_scheduled_booking_id
  gen_random_uuid(),                             -- p_driver_id
  gen_random_uuid(),                             -- p_customer_id
  'airport'::text,                               -- p_booking_type
  'sedan'::text,                                 -- p_vehicle_type
  NULL::text,                                    -- p_trip_type
  'Airport Test Pickup'::text,                   -- p_pickup_address
  'Airport'::text,                               -- p_destination_address
  35::numeric,                                   -- p_actual_distance_km
  60::int,                                       -- p_actual_duration_minutes
  800::numeric,                                  -- p_base_fare
  350::numeric,                                  -- p_distance_fare
  100::numeric,                                  -- p_airport_surcharge
  50::numeric,                                   -- p_time_fare
  50::numeric,                                   -- p_platform_fee
  65::numeric,                                   -- p_gst_on_charges
  9::numeric,                                    -- p_gst_on_platform_fee
  1424::numeric,                                 -- p_total_fare
  '{"test":true}'::jsonb,                        -- p_fare_details
  NULL::timestamptz,                             -- p_scheduled_time
  NOW()::timestamptz,                            -- p_completed_at
  'Airport Test Driver'::text,                   -- p_driver_name
  '+919876543210'::text,                         -- p_driver_phone
  NULL::numeric,                                 -- p_driver_rating
  NULL::uuid,                                    -- p_vehicle_id
  'Honda'::text,                                 -- p_vehicle_make
  'City'::text,                                  -- p_vehicle_model
  'Silver'::text,                                -- p_vehicle_color
  'TEST9012'::text                               -- p_vehicle_license_plate
) as result;

-- Expected: {"success": true, "completion_id": "..."}


-- ============================================================================
-- VERIFY ALL TEST DATA
-- ============================================================================

SELECT 'outstation' as table_name, COUNT(*) as count
FROM outstation_trip_completions
WHERE driver_name LIKE '%Test%'

UNION ALL

SELECT 'rental' as table_name, COUNT(*) as count
FROM rental_trip_completions
WHERE driver_name LIKE '%Test%'

UNION ALL

SELECT 'airport' as table_name, COUNT(*) as count
FROM airport_trip_completions
WHERE driver_name LIKE '%Test%';

-- Expected: Each should show count = 1


-- ============================================================================
-- CLEANUP TEST DATA (Optional - run after testing)
-- ============================================================================

/*
DELETE FROM outstation_trip_completions WHERE driver_name LIKE '%Test%';
DELETE FROM rental_trip_completions WHERE driver_name LIKE '%Test%';
DELETE FROM airport_trip_completions WHERE driver_name LIKE '%Test%';

SELECT 'Test data cleaned up' as status;
*/
