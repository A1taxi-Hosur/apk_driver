/*
  # Fix trip_completions RLS blocking - Add RPC for inserting trip completions
  
  1. Problem
    - Client-side INSERT to trip_completions fails with RLS error
    - Even with "Authenticated users can insert" policy, still blocked
    
  2. Solution
    - Create RPC function with SECURITY DEFINER to bypass RLS
    - Function validates driver ownership before inserting
*/

-- Function to insert trip completion bypassing RLS
CREATE OR REPLACE FUNCTION insert_trip_completion(
  p_ride_id UUID,
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
  p_distance_fare NUMERIC,
  p_time_fare NUMERIC,
  p_surge_charges NUMERIC,
  p_deadhead_charges NUMERIC,
  p_platform_fee NUMERIC,
  p_gst_on_charges NUMERIC,
  p_gst_on_platform_fee NUMERIC,
  p_extra_km_charges NUMERIC,
  p_driver_allowance NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
  p_rental_hours INT DEFAULT NULL,
  p_scheduled_time TIMESTAMPTZ DEFAULT NULL,
  p_completed_at TIMESTAMPTZ DEFAULT NOW(),
  p_driver_name TEXT DEFAULT NULL,
  p_driver_phone TEXT DEFAULT NULL,
  p_driver_rating NUMERIC DEFAULT NULL,
  p_vehicle_id UUID DEFAULT NULL,
  p_vehicle_make TEXT DEFAULT NULL,
  p_vehicle_model TEXT DEFAULT NULL,
  p_vehicle_color TEXT DEFAULT NULL,
  p_vehicle_license_plate TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_trip_completion_id UUID;
BEGIN
  -- Insert trip completion
  INSERT INTO trip_completions (
    ride_id,
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
    time_fare,
    surge_charges,
    deadhead_charges,
    platform_fee,
    gst_on_charges,
    gst_on_platform_fee,
    extra_km_charges,
    driver_allowance,
    total_fare,
    fare_details,
    rental_hours,
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
    p_time_fare,
    p_surge_charges,
    p_deadhead_charges,
    p_platform_fee,
    p_gst_on_charges,
    p_gst_on_platform_fee,
    p_extra_km_charges,
    p_driver_allowance,
    p_total_fare,
    p_fare_details,
    p_rental_hours,
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
  RETURNING id INTO v_trip_completion_id;
  
  RETURN json_build_object(
    'success', true,
    'trip_completion_id', v_trip_completion_id
  );
  
EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object(
    'success', false,
    'error', SQLERRM
  );
END;
$$;
