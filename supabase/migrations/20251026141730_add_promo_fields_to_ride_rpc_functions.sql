/*
  # Add promo code fields to ride RPC functions
  
  1. Changes
    - Drop and recreate `get_driver_current_ride` to include promo_code, promo_discount, original_fare
    - Drop and recreate `get_ride_by_id` to include promo fields
    
  2. Purpose
    - Allow drivers to see when customers have used promo codes
    - Display original fare, discount, and final fare transparently
    - fare_amount is always the final fare driver should collect
*/

-- Drop existing functions first
DROP FUNCTION IF EXISTS get_driver_current_ride(UUID);
DROP FUNCTION IF EXISTS get_ride_by_id(UUID);

-- Recreate get_driver_current_ride with promo fields
CREATE OR REPLACE FUNCTION get_driver_current_ride(p_driver_id UUID)
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
  distance_km NUMERIC,
  duration_minutes INT,
  payment_status TEXT,
  payment_method TEXT,
  rating NUMERIC,
  feedback TEXT,
  cancelled_by UUID,
  cancellation_reason TEXT,
  booking_type TEXT,
  vehicle_type TEXT,
  rental_hours INT,
  pickup_otp TEXT,
  drop_otp TEXT,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
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
    r.distance_km,
    r.duration_minutes,
    r.payment_status,
    r.payment_method,
    r.rating,
    r.feedback,
    r.cancelled_by,
    r.cancellation_reason,
    r.booking_type,
    r.vehicle_type,
    r.rental_hours,
    r.pickup_otp,
    r.drop_otp,
    r.promo_code,
    r.promo_discount,
    r.original_fare,
    r.created_at,
    r.updated_at,
    r.scheduled_time,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.driver_id = p_driver_id
    AND r.status IN ('accepted', 'driver_arrived', 'in_progress')
  ORDER BY r.created_at DESC
  LIMIT 1;
END;
$$;

-- Recreate get_ride_by_id with promo fields
CREATE OR REPLACE FUNCTION get_ride_by_id(p_ride_id UUID)
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
  distance_km NUMERIC,
  duration_minutes INT,
  payment_status TEXT,
  payment_method TEXT,
  rating NUMERIC,
  feedback TEXT,
  cancelled_by UUID,
  cancellation_reason TEXT,
  booking_type TEXT,
  vehicle_type TEXT,
  rental_hours INT,
  pickup_otp TEXT,
  drop_otp TEXT,
  special_instructions TEXT,
  trip_type TEXT,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
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
    r.distance_km,
    r.duration_minutes,
    r.payment_status,
    r.payment_method,
    r.rating,
    r.feedback,
    r.cancelled_by,
    r.cancellation_reason,
    r.booking_type,
    r.vehicle_type,
    r.rental_hours,
    r.pickup_otp,
    r.drop_otp,
    r.special_instructions,
    r.trip_type,
    r.promo_code,
    r.promo_discount,
    r.original_fare,
    r.created_at,
    r.updated_at,
    r.scheduled_time,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.id = p_ride_id;
END;
$$;