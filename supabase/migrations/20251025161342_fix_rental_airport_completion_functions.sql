/*
  # Fix Rental and Airport Trip Completion RPC Functions

  ## Problem
  The functions `insert_rental_trip_completion` and `insert_airport_trip_completion` were 
  overwritten with incorrect parameter names in migration 20251024122833. They now only accept 
  `p_ride_id` but the client code passes `p_scheduled_booking_id`.

  ## Solution
  Restore the correct function signatures that accept BOTH `p_ride_id` and `p_scheduled_booking_id`
  to support both regular rides and scheduled bookings.

  ## Changes
  1. Update insert_rental_trip_completion() - Add p_scheduled_booking_id parameter
  2. Update insert_airport_trip_completion() - Add p_scheduled_booking_id parameter
  3. Keep backward compatibility with both parameter types
*/

-- Function to insert rental trip completion (FIXED)
CREATE OR REPLACE FUNCTION insert_rental_trip_completion(
  p_driver_id UUID,
  p_customer_id UUID,
  p_booking_type TEXT,
  p_vehicle_type TEXT,
  p_pickup_address TEXT,
  p_rental_hours INT,
  p_actual_hours_used NUMERIC,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,
  p_trip_type TEXT DEFAULT NULL,
  p_destination_address TEXT DEFAULT NULL,
  p_hourly_charges NUMERIC DEFAULT 0,
  p_distance_fare NUMERIC DEFAULT 0,
  p_extra_km_charges NUMERIC DEFAULT 0,
  p_extra_hour_charges NUMERIC DEFAULT 0,
  p_platform_fee NUMERIC DEFAULT 0,
  p_gst_on_charges NUMERIC DEFAULT 0,
  p_gst_on_platform_fee NUMERIC DEFAULT 0,
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
  -- Validate that at least one ID is provided
  IF p_ride_id IS NULL AND p_scheduled_booking_id IS NULL THEN
    RETURN json_build_object(
      'success', false, 
      'error', 'Either ride_id or scheduled_booking_id must be provided'
    );
  END IF;

  INSERT INTO rental_trip_completions (
    ride_id,
    scheduled_booking_id,
    driver_id,
    customer_id,
    booking_type,
    vehicle_type,
    trip_type,
    pickup_address,
    destination_address,
    rental_hours,
    actual_hours_used,
    actual_distance_km,
    actual_duration_minutes,
    base_fare,
    hourly_charges,
    distance_fare,
    extra_km_charges,
    extra_hour_charges,
    platform_fee,
    gst_on_charges,
    gst_on_platform_fee,
    total_fare,
    fare_details,
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
    COALESCE(p_trip_type, 'one_way'),
    p_pickup_address,
    p_destination_address,
    p_rental_hours,
    p_actual_hours_used,
    p_actual_distance_km,
    p_actual_duration_minutes,
    p_base_fare,
    p_hourly_charges,
    p_distance_fare,
    p_extra_km_charges,
    p_extra_hour_charges,
    p_platform_fee,
    p_gst_on_charges,
    p_gst_on_platform_fee,
    p_total_fare,
    p_fare_details,
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
  
  RETURN json_build_object('success', true, 'completion_id', v_completion_id);
  
EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object('success', false, 'error', SQLERRM);
END;
$$;

-- Function to insert airport trip completion (FIXED)
CREATE OR REPLACE FUNCTION insert_airport_trip_completion(
  p_driver_id UUID,
  p_customer_id UUID,
  p_booking_type TEXT,
  p_vehicle_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_distance_fare NUMERIC,
  p_platform_fee NUMERIC,
  p_gst_on_charges NUMERIC,
  p_gst_on_platform_fee NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,
  p_trip_type TEXT DEFAULT NULL,
  p_scheduled_time TIMESTAMPTZ DEFAULT NULL,
  p_airport_surcharge NUMERIC DEFAULT 0,
  p_time_fare NUMERIC DEFAULT 0,
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
  -- Validate that at least one ID is provided
  IF p_ride_id IS NULL AND p_scheduled_booking_id IS NULL THEN
    RETURN json_build_object(
      'success', false, 
      'error', 'Either ride_id or scheduled_booking_id must be provided'
    );
  END IF;

  INSERT INTO airport_trip_completions (
    ride_id,
    scheduled_booking_id,
    driver_id,
    customer_id,
    booking_type,
    vehicle_type,
    trip_type,
    pickup_address,
    destination_address,
    scheduled_time,
    actual_distance_km,
    actual_duration_minutes,
    base_fare,
    distance_fare,
    airport_surcharge,
    time_fare,
    platform_fee,
    gst_on_charges,
    gst_on_platform_fee,
    total_fare,
    fare_details,
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
    p_scheduled_time,
    p_actual_distance_km,
    p_actual_duration_minutes,
    p_base_fare,
    p_distance_fare,
    p_airport_surcharge,
    p_time_fare,
    p_platform_fee,
    p_gst_on_charges,
    p_gst_on_platform_fee,
    p_total_fare,
    p_fare_details,
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
  
  RETURN json_build_object('success', true, 'completion_id', v_completion_id);
  
EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object('success', false, 'error', SQLERRM);
END;
$$;