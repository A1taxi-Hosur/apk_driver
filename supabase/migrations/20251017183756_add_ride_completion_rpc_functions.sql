/*
  # Add RPC functions for ride completion flow

  1. New Functions
    - `get_ride_details_for_completion` - Get full ride details with customer info
    - `get_driver_details_with_vehicle` - Get driver details including vehicle info
    - `update_ride_to_completed` - Mark ride as completed with fare and metrics
    
  2. Security
    - Functions run with SECURITY DEFINER to bypass RLS
    - Validates driver ownership before allowing operations
*/

-- Function to get ride details for completion
CREATE OR REPLACE FUNCTION get_ride_details_for_completion(
  p_ride_id UUID,
  p_driver_id UUID
)
RETURNS TABLE (
  id UUID,
  ride_code TEXT,
  customer_id UUID,
  driver_id UUID,
  pickup_latitude NUMERIC,
  pickup_longitude NUMERIC,
  pickup_address TEXT,
  pickup_landmark TEXT,
  destination_latitude NUMERIC,
  destination_longitude NUMERIC,
  destination_address TEXT,
  destination_landmark TEXT,
  status TEXT,
  fare_amount NUMERIC,
  booking_type TEXT,
  vehicle_type TEXT,
  rental_hours INT,
  created_at TIMESTAMPTZ,
  scheduled_time TIMESTAMPTZ,
  customer_full_name TEXT,
  customer_phone TEXT,
  customer_email TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    r.id,
    r.ride_code,
    r.customer_id,
    r.driver_id,
    r.pickup_latitude,
    r.pickup_longitude,
    r.pickup_address,
    r.pickup_landmark,
    r.destination_latitude,
    r.destination_longitude,
    r.destination_address,
    r.destination_landmark,
    r.status,
    r.fare_amount,
    r.booking_type,
    r.vehicle_type,
    r.rental_hours,
    r.created_at,
    r.scheduled_time,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.id = p_ride_id
    AND r.driver_id = p_driver_id;
END;
$$;

-- Function to get driver details with vehicle
CREATE OR REPLACE FUNCTION get_driver_details_with_vehicle(p_driver_id UUID)
RETURNS TABLE (
  driver_id UUID,
  user_id UUID,
  rating NUMERIC,
  vehicle_id UUID,
  full_name TEXT,
  vehicle_make TEXT,
  vehicle_model TEXT,
  vehicle_color TEXT,
  vehicle_registration TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    d.id as driver_id,
    d.user_id,
    d.rating,
    d.vehicle_id,
    u.full_name,
    v.make as vehicle_make,
    v.model as vehicle_model,
    v.color as vehicle_color,
    v.registration_number as vehicle_registration
  FROM drivers d
  LEFT JOIN users u ON u.id = d.user_id
  LEFT JOIN vehicles v ON v.id = d.vehicle_id
  WHERE d.id = p_driver_id;
END;
$$;

-- Function to update ride to completed with fare
CREATE OR REPLACE FUNCTION update_ride_to_completed(
  p_ride_id UUID,
  p_driver_id UUID,
  p_fare_amount NUMERIC,
  p_distance_km NUMERIC,
  p_duration_minutes INT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_count INT;
BEGIN
  UPDATE rides
  SET 
    status = 'completed',
    fare_amount = p_fare_amount,
    distance_km = p_distance_km,
    duration_minutes = p_duration_minutes,
    payment_status = 'completed',
    updated_at = NOW()
  WHERE id = p_ride_id
    AND driver_id = p_driver_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    RETURN json_build_object(
      'success', true,
      'ride_id', p_ride_id
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Ride not found or access denied'
    );
  END IF;
END;
$$;