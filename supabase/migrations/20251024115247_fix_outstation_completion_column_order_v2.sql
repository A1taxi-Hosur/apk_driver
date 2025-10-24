/*
  # Fix Outstation Trip Completion RPC Function Column Order

  1. Problem
    - The insert_outstation_trip_completion RPC function has columns in wrong order
    - scheduled_booking_id is inserted at position 2, but in the table it's the last column
    - This causes INSERT to fail with column mismatch error

  2. Solution
    - Reorder the INSERT statement to match the actual table structure
    - Move scheduled_booking_id to the end of the column list
    - Fix parameter order (required params first, then optional params with defaults)
*/

-- Drop and recreate the function with correct column order
DROP FUNCTION IF EXISTS insert_outstation_trip_completion;

CREATE OR REPLACE FUNCTION insert_outstation_trip_completion(
  -- Required parameters
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
  -- Optional parameters with defaults
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
  -- Insert with columns in correct order matching table structure
  INSERT INTO outstation_trip_completions (
    ride_id,
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
    driver_name,
    driver_phone,
    driver_rating,
    vehicle_id,
    vehicle_make,
    vehicle_model,
    vehicle_color,
    vehicle_license_plate,
    completed_at,
    scheduled_booking_id
  ) VALUES (
    p_ride_id,
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
    p_driver_name,
    p_driver_phone,
    p_driver_rating,
    p_vehicle_id,
    p_vehicle_make,
    p_vehicle_model,
    p_vehicle_color,
    p_vehicle_license_plate,
    p_completed_at,
    p_scheduled_booking_id
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
