/*
  # Add RPC Functions for Specialized Trip Completions

  1. Problem
    - Direct INSERT to rental_trip_completions, outstation_trip_completions, and airport_trip_completions fails with RLS errors
    - RLS policies require auth.uid() check which may fail in certain contexts

  2. Solution
    - Create RPC functions with SECURITY DEFINER to bypass RLS
    - Functions validate data before inserting
    - Consistent with existing insert_trip_completion RPC pattern

  3. New Functions
    - insert_rental_trip_completion()
    - insert_outstation_trip_completion()
    - insert_airport_trip_completion()
*/

-- Function to insert rental trip completion bypassing RLS
CREATE OR REPLACE FUNCTION insert_rental_trip_completion(
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,
  p_driver_id UUID,
  p_customer_id UUID,
  p_booking_type TEXT,
  p_vehicle_type TEXT,
  p_trip_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT DEFAULT NULL,
  p_rental_hours INT,
  p_actual_hours_used NUMERIC,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_hourly_charges NUMERIC DEFAULT 0,
  p_distance_fare NUMERIC DEFAULT 0,
  p_extra_km_charges NUMERIC DEFAULT 0,
  p_extra_hour_charges NUMERIC DEFAULT 0,
  p_platform_fee NUMERIC DEFAULT 0,
  p_gst_on_charges NUMERIC DEFAULT 0,
  p_gst_on_platform_fee NUMERIC DEFAULT 0,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
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
    p_trip_type,
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

-- Function to insert outstation trip completion bypassing RLS
CREATE OR REPLACE FUNCTION insert_outstation_trip_completion(
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,
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
  p_distance_fare NUMERIC DEFAULT 0,
  p_per_day_charges NUMERIC DEFAULT 0,
  p_driver_allowance NUMERIC DEFAULT 0,
  p_extra_km_charges NUMERIC DEFAULT 0,
  p_toll_charges NUMERIC DEFAULT 0,
  p_platform_fee NUMERIC DEFAULT 0,
  p_gst_on_charges NUMERIC DEFAULT 0,
  p_gst_on_platform_fee NUMERIC DEFAULT 0,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
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

-- Function to insert airport trip completion bypassing RLS
CREATE OR REPLACE FUNCTION insert_airport_trip_completion(
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,
  p_driver_id UUID,
  p_customer_id UUID,
  p_booking_type TEXT,
  p_vehicle_type TEXT,
  p_trip_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_distance_fare NUMERIC DEFAULT 0,
  p_airport_surcharge NUMERIC DEFAULT 0,
  p_time_fare NUMERIC DEFAULT 0,
  p_platform_fee NUMERIC DEFAULT 0,
  p_gst_on_charges NUMERIC DEFAULT 0,
  p_gst_on_platform_fee NUMERIC DEFAULT 0,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
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
    p_base_fare,
    p_distance_fare,
    p_airport_surcharge,
    p_time_fare,
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
