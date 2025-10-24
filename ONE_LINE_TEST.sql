-- ============================================================================
-- STEP 1: CREATE THE FUNCTION (FIXED VERSION)
-- ============================================================================
-- Run this first to create the function

CREATE OR REPLACE FUNCTION insert_outstation_trip_completion(
  -- Required parameters first
  p_driver_id UUID,
  p_customer_id UUID,
  p_booking_type TEXT,
  p_vehicle_type TEXT,
  p_trip_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_actual_days INT,
  p_base_fare NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
  -- Optional parameters last
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,
  p_distance_fare NUMERIC DEFAULT 0,
  p_per_day_charges NUMERIC DEFAULT 0,
  p_driver_allowance NUMERIC DEFAULT 0,
  p_extra_km_charges NUMERIC DEFAULT 0,
  p_toll_charges NUMERIC DEFAULT 0,
  p_platform_fee NUMERIC DEFAULT 0,
  p_gst_on_charges NUMERIC DEFAULT 0,
  p_gst_on_platform_fee NUMERIC DEFAULT 0,
  p_scheduled_time TIMESTAMPTZ DEFAULT NULL,
  p_completed_at TIMESTAMPTZ DEFAULT NOW(),
  p_driver_name TEXT DEFAULT 'Driver',
  p_driver_phone TEXT DEFAULT '',
  p_driver_rating NUMERIC DEFAULT NULL,
  p_vehicle_id UUID DEFAULT NULL,
  p_vehicle_make TEXT DEFAULT '',
  p_vehicle_model TEXT DEFAULT '',
  p_vehicle_color TEXT DEFAULT '',
  p_vehicle_license_plate TEXT DEFAULT ''
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_completion_id UUID;
BEGIN
  INSERT INTO outstation_trip_completions (
    ride_id,
    scheduled_booking_id,
    driver_id,
    customer_id,
    booking_type,
    vehicle_type,
    trip_type,
    pickup_address,
    destination_address,
    actual_distance_km,
    actual_duration_minutes,
    actual_days,
    base_fare,
    distance_fare,
    per_day_charges,
    driver_allowance,
    extra_km_charges,
    toll_charges,
    platform_fee,
    gst_on_charges,
    gst_on_platform_fee,
    total_fare,
    fare_details,
    scheduled_time,
    completed_at,
    driver_name,
    driver_phone,
    driver_rating,
    vehicle_id,
    vehicle_make,
    vehicle_model,
    vehicle_color,
    vehicle_license_plate
  ) VALUES (
    p_ride_id,
    p_scheduled_booking_id,
    p_driver_id,
    p_customer_id,
    p_booking_type,
    p_vehicle_type,
    p_trip_type,
    p_pickup_address,
    p_destination_address,
    p_actual_distance_km,
    p_actual_duration_minutes,
    p_actual_days,
    p_base_fare,
    p_distance_fare,
    p_per_day_charges,
    p_driver_allowance,
    p_extra_km_charges,
    p_toll_charges,
    p_platform_fee,
    p_gst_on_charges,
    p_gst_on_platform_fee,
    p_total_fare,
    p_fare_details,
    p_scheduled_time,
    p_completed_at,
    p_driver_name,
    p_driver_phone,
    p_driver_rating,
    p_vehicle_id,
    p_vehicle_make,
    p_vehicle_model,
    p_vehicle_color,
    p_vehicle_license_plate
  )
  RETURNING id INTO v_completion_id;

  RETURN json_build_object(
    'success', true,
    'completion_id', v_completion_id
  );

EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object(
    'success', false,
    'error', SQLERRM
  );
END;
$$;


-- ============================================================================
-- STEP 2: TEST THE FUNCTION
-- ============================================================================

SELECT insert_outstation_trip_completion(
  gen_random_uuid(),           -- p_driver_id
  gen_random_uuid(),           -- p_customer_id
  'outstation',                -- p_booking_type
  'sedan',                     -- p_vehicle_type
  'one_way',                   -- p_trip_type
  'Test Pickup',               -- p_pickup_address
  'Test Destination',          -- p_destination_address
  50.0,                        -- p_actual_distance_km
  120,                         -- p_actual_duration_minutes
  1,                           -- p_actual_days
  3500.0,                      -- p_base_fare
  4213.0,                      -- p_total_fare
  '{"test": true}'::jsonb,     -- p_fare_details
  NULL,                        -- p_ride_id
  NULL,                        -- p_scheduled_booking_id
  0.0,                         -- p_distance_fare
  0.0,                         -- p_per_day_charges
  400.0,                       -- p_driver_allowance
  0.0,                         -- p_extra_km_charges
  0.0,                         -- p_toll_charges
  100.0,                       -- p_platform_fee
  195.0,                       -- p_gst_on_charges
  18.0,                        -- p_gst_on_platform_fee
  NULL,                        -- p_scheduled_time
  NOW(),                       -- p_completed_at
  'Test Driver',               -- p_driver_name
  '+919876543210',             -- p_driver_phone
  NULL,                        -- p_driver_rating
  NULL,                        -- p_vehicle_id
  'Toyota',                    -- p_vehicle_make
  'Innova',                    -- p_vehicle_model
  'White',                     -- p_vehicle_color
  'TEST1234'                   -- p_vehicle_license_plate
);

-- Expected: {"success": true, "completion_id": "..."}


-- ============================================================================
-- STEP 3: VERIFY THE DATA
-- ============================================================================

SELECT id, booking_type, vehicle_type, trip_type, total_fare, driver_name, created_at
FROM outstation_trip_completions
WHERE driver_name = 'Test Driver'
ORDER BY created_at DESC
LIMIT 1;

-- Expected: 1 row with total_fare = 4213


-- ============================================================================
-- CLEANUP TEST DATA (Optional)
-- ============================================================================

-- DELETE FROM outstation_trip_completions WHERE driver_name = 'Test Driver';
