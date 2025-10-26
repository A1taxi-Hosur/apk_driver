/*
  # Add promo parameters to all completion insert functions
  
  1. Changes
    - Update insert_trip_completion to accept promo_code, promo_discount, original_fare
    - Update insert_rental_trip_completion to accept promo fields
    - Update insert_outstation_trip_completion to accept promo fields
    - Update insert_airport_trip_completion to accept promo fields
    
  2. Purpose
    - Save promo code usage in completion records
    - Maintain historical record of discounts applied
    - Enable accurate reporting of original vs discounted fares
*/

-- Update insert_trip_completion with promo fields
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
  p_vehicle_license_plate TEXT DEFAULT NULL,
  p_promo_code TEXT DEFAULT NULL,
  p_promo_discount NUMERIC DEFAULT NULL,
  p_original_fare NUMERIC DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_trip_completion_id UUID;
BEGIN
  INSERT INTO trip_completions (
    ride_id, driver_id, customer_id, booking_type, vehicle_type, trip_type,
    pickup_address, destination_address, actual_distance_km, actual_duration_minutes,
    base_fare, distance_fare, time_fare, surge_charges, deadhead_charges,
    platform_fee, gst_on_charges, gst_on_platform_fee, extra_km_charges,
    driver_allowance, total_fare, fare_details, rental_hours, scheduled_time,
    completed_at, driver_name, driver_phone, driver_rating, vehicle_id,
    vehicle_make, vehicle_model, vehicle_color, vehicle_license_plate,
    promo_code, promo_discount, original_fare
  ) VALUES (
    p_ride_id, p_driver_id, p_customer_id, p_booking_type, p_vehicle_type, p_trip_type,
    p_pickup_address, p_destination_address, p_actual_distance_km, p_actual_duration_minutes,
    p_base_fare, p_distance_fare, p_time_fare, p_surge_charges, p_deadhead_charges,
    p_platform_fee, p_gst_on_charges, p_gst_on_platform_fee, p_extra_km_charges,
    p_driver_allowance, p_total_fare, p_fare_details, p_rental_hours, p_scheduled_time,
    p_completed_at, p_driver_name, p_driver_phone, p_driver_rating, p_vehicle_id,
    p_vehicle_make, p_vehicle_model, p_vehicle_color, p_vehicle_license_plate,
    p_promo_code, p_promo_discount, p_original_fare
  )
  RETURNING id INTO v_trip_completion_id;
  
  RETURN json_build_object('success', true, 'completion_id', v_trip_completion_id);
  
EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object('success', false, 'error', SQLERRM);
END;
$$;

-- Update insert_rental_trip_completion with promo fields
CREATE OR REPLACE FUNCTION insert_rental_trip_completion(
  p_ride_id UUID,
  p_driver_id UUID,
  p_customer_id UUID,
  p_vehicle_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT,
  p_rental_hours INT,
  p_actual_hours_used NUMERIC,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_hourly_charges NUMERIC,
  p_distance_fare NUMERIC,
  p_extra_km_charges NUMERIC,
  p_extra_hour_charges NUMERIC,
  p_platform_fee NUMERIC,
  p_gst_on_charges NUMERIC,
  p_gst_on_platform_fee NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
  p_driver_name TEXT,
  p_driver_phone TEXT DEFAULT NULL,
  p_driver_rating NUMERIC DEFAULT NULL,
  p_vehicle_id UUID DEFAULT NULL,
  p_vehicle_make TEXT DEFAULT NULL,
  p_vehicle_model TEXT DEFAULT NULL,
  p_vehicle_color TEXT DEFAULT NULL,
  p_vehicle_license_plate TEXT DEFAULT NULL,
  p_completed_at TIMESTAMPTZ DEFAULT NOW(),
  p_promo_code TEXT DEFAULT NULL,
  p_promo_discount NUMERIC DEFAULT NULL,
  p_original_fare NUMERIC DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_completion_id UUID;
BEGIN
  INSERT INTO rental_trip_completions (
    ride_id, driver_id, customer_id, booking_type, vehicle_type,
    pickup_address, destination_address, rental_hours, actual_hours_used,
    actual_distance_km, actual_duration_minutes, base_fare, hourly_charges,
    distance_fare, extra_km_charges, extra_hour_charges, platform_fee,
    gst_on_charges, gst_on_platform_fee, total_fare, fare_details,
    driver_name, driver_phone, driver_rating, vehicle_id, vehicle_make,
    vehicle_model, vehicle_color, vehicle_license_plate, completed_at,
    promo_code, promo_discount, original_fare
  ) VALUES (
    p_ride_id, p_driver_id, p_customer_id, 'rental', p_vehicle_type,
    p_pickup_address, p_destination_address, p_rental_hours, p_actual_hours_used,
    p_actual_distance_km, p_actual_duration_minutes, p_base_fare, p_hourly_charges,
    p_distance_fare, p_extra_km_charges, p_extra_hour_charges, p_platform_fee,
    p_gst_on_charges, p_gst_on_platform_fee, p_total_fare, p_fare_details,
    p_driver_name, p_driver_phone, p_driver_rating, p_vehicle_id, p_vehicle_make,
    p_vehicle_model, p_vehicle_color, p_vehicle_license_plate, p_completed_at,
    p_promo_code, p_promo_discount, p_original_fare
  )
  RETURNING id INTO v_completion_id;
  
  RETURN json_build_object('success', true, 'completion_id', v_completion_id);
  
EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object('success', false, 'error', SQLERRM);
END;
$$;

-- Update insert_outstation_trip_completion with promo fields
CREATE OR REPLACE FUNCTION insert_outstation_trip_completion(
  p_ride_id UUID,
  p_driver_id UUID,
  p_customer_id UUID,
  p_vehicle_type TEXT,
  p_trip_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT,
  p_scheduled_time TIMESTAMPTZ,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_actual_days INT,
  p_base_fare NUMERIC,
  p_distance_fare NUMERIC,
  p_per_day_charges NUMERIC,
  p_driver_allowance NUMERIC,
  p_extra_km_charges NUMERIC,
  p_toll_charges NUMERIC,
  p_platform_fee NUMERIC,
  p_gst_on_charges NUMERIC,
  p_gst_on_platform_fee NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
  p_driver_name TEXT,
  p_driver_phone TEXT DEFAULT NULL,
  p_driver_rating NUMERIC DEFAULT NULL,
  p_vehicle_id UUID DEFAULT NULL,
  p_vehicle_make TEXT DEFAULT NULL,
  p_vehicle_model TEXT DEFAULT NULL,
  p_vehicle_color TEXT DEFAULT NULL,
  p_vehicle_license_plate TEXT DEFAULT NULL,
  p_completed_at TIMESTAMPTZ DEFAULT NOW(),
  p_promo_code TEXT DEFAULT NULL,
  p_promo_discount NUMERIC DEFAULT NULL,
  p_original_fare NUMERIC DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_completion_id UUID;
BEGIN
  INSERT INTO outstation_trip_completions (
    ride_id, driver_id, customer_id, booking_type, vehicle_type, trip_type,
    pickup_address, destination_address, scheduled_time, actual_distance_km,
    actual_duration_minutes, actual_days, base_fare, distance_fare,
    per_day_charges, driver_allowance, extra_km_charges, toll_charges,
    platform_fee, gst_on_charges, gst_on_platform_fee, total_fare,
    fare_details, driver_name, driver_phone, driver_rating, vehicle_id,
    vehicle_make, vehicle_model, vehicle_color, vehicle_license_plate, completed_at,
    promo_code, promo_discount, original_fare
  ) VALUES (
    p_ride_id, p_driver_id, p_customer_id, 'outstation', p_vehicle_type, p_trip_type,
    p_pickup_address, p_destination_address, p_scheduled_time, p_actual_distance_km,
    p_actual_duration_minutes, p_actual_days, p_base_fare, p_distance_fare,
    p_per_day_charges, p_driver_allowance, p_extra_km_charges, p_toll_charges,
    p_platform_fee, p_gst_on_charges, p_gst_on_platform_fee, p_total_fare,
    p_fare_details, p_driver_name, p_driver_phone, p_driver_rating, p_vehicle_id,
    p_vehicle_make, p_vehicle_model, p_vehicle_color, p_vehicle_license_plate, p_completed_at,
    p_promo_code, p_promo_discount, p_original_fare
  )
  RETURNING id INTO v_completion_id;
  
  RETURN json_build_object('success', true, 'completion_id', v_completion_id);
  
EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object('success', false, 'error', SQLERRM);
END;
$$;

-- Update insert_airport_trip_completion with promo fields
CREATE OR REPLACE FUNCTION insert_airport_trip_completion(
  p_ride_id UUID,
  p_driver_id UUID,
  p_customer_id UUID,
  p_vehicle_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT,
  p_scheduled_time TIMESTAMPTZ,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_distance_fare NUMERIC,
  p_airport_surcharge NUMERIC,
  p_time_fare NUMERIC,
  p_platform_fee NUMERIC,
  p_gst_on_charges NUMERIC,
  p_gst_on_platform_fee NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,
  p_driver_name TEXT,
  p_driver_phone TEXT DEFAULT NULL,
  p_driver_rating NUMERIC DEFAULT NULL,
  p_vehicle_id UUID DEFAULT NULL,
  p_vehicle_make TEXT DEFAULT NULL,
  p_vehicle_model TEXT DEFAULT NULL,
  p_vehicle_color TEXT DEFAULT NULL,
  p_vehicle_license_plate TEXT DEFAULT NULL,
  p_completed_at TIMESTAMPTZ DEFAULT NOW(),
  p_promo_code TEXT DEFAULT NULL,
  p_promo_discount NUMERIC DEFAULT NULL,
  p_original_fare NUMERIC DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_completion_id UUID;
BEGIN
  INSERT INTO airport_trip_completions (
    ride_id, driver_id, customer_id, booking_type, vehicle_type,
    pickup_address, destination_address, scheduled_time, actual_distance_km,
    actual_duration_minutes, base_fare, distance_fare, airport_surcharge,
    time_fare, platform_fee, gst_on_charges, gst_on_platform_fee, total_fare,
    fare_details, driver_name, driver_phone, driver_rating, vehicle_id,
    vehicle_make, vehicle_model, vehicle_color, vehicle_license_plate, completed_at,
    promo_code, promo_discount, original_fare
  ) VALUES (
    p_ride_id, p_driver_id, p_customer_id, 'airport', p_vehicle_type,
    p_pickup_address, p_destination_address, p_scheduled_time, p_actual_distance_km,
    p_actual_duration_minutes, p_base_fare, p_distance_fare, p_airport_surcharge,
    p_time_fare, p_platform_fee, p_gst_on_charges, p_gst_on_platform_fee, p_total_fare,
    p_fare_details, p_driver_name, p_driver_phone, p_driver_rating, p_vehicle_id,
    p_vehicle_make, p_vehicle_model, p_vehicle_color, p_vehicle_license_plate, p_completed_at,
    p_promo_code, p_promo_discount, p_original_fare
  )
  RETURNING id INTO v_completion_id;
  
  RETURN json_build_object('success', true, 'completion_id', v_completion_id);
  
EXCEPTION WHEN OTHERS THEN
  RETURN json_build_object('success', false, 'error', SQLERRM);
END;
$$;