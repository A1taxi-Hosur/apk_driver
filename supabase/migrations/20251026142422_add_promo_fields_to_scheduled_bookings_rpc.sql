/*
  # Add promo fields to scheduled bookings RPC functions
  
  1. Changes
    - Update `get_driver_assigned_scheduled_bookings` to include promo fields
    - Update `get_driver_current_scheduled_booking` to include promo fields
    
  2. Purpose
    - Allow drivers to see promo information in scheduled bookings
    - Display promo details when viewing scheduled booking details
*/

-- Drop and recreate get_driver_assigned_scheduled_bookings with promo fields
DROP FUNCTION IF EXISTS get_driver_assigned_scheduled_bookings(UUID);

CREATE OR REPLACE FUNCTION get_driver_assigned_scheduled_bookings(p_driver_id UUID)
RETURNS TABLE (
  id UUID,
  customer_id UUID,
  booking_type TEXT,
  vehicle_type TEXT,
  pickup_address TEXT,
  destination_address TEXT,
  pickup_landmark TEXT,
  destination_landmark TEXT,
  pickup_latitude DOUBLE PRECISION,
  pickup_longitude DOUBLE PRECISION,
  destination_latitude DOUBLE PRECISION,
  destination_longitude DOUBLE PRECISION,
  scheduled_time TIMESTAMPTZ,
  rental_hours INT,
  special_instructions TEXT,
  estimated_fare NUMERIC,
  status TEXT,
  assigned_driver_id UUID,
  pickup_otp TEXT,
  drop_otp TEXT,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
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
    sb.id,
    sb.customer_id,
    sb.booking_type,
    sb.vehicle_type,
    sb.pickup_address,
    sb.destination_address,
    sb.pickup_landmark,
    sb.destination_landmark,
    sb.pickup_latitude,
    sb.pickup_longitude,
    sb.destination_latitude,
    sb.destination_longitude,
    sb.scheduled_time,
    sb.rental_hours,
    sb.special_instructions,
    sb.estimated_fare,
    sb.status,
    sb.assigned_driver_id,
    sb.pickup_otp,
    sb.drop_otp,
    sb.promo_code,
    sb.promo_discount,
    sb.original_fare,
    sb.created_at,
    sb.updated_at,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM scheduled_bookings sb
  LEFT JOIN users u ON u.id = sb.customer_id
  WHERE sb.assigned_driver_id = p_driver_id
    AND sb.status = 'pending'
  ORDER BY sb.scheduled_time ASC
  LIMIT 10;
END;
$$;

-- Drop and recreate get_driver_current_scheduled_booking with promo fields
DROP FUNCTION IF EXISTS get_driver_current_scheduled_booking(UUID);

CREATE OR REPLACE FUNCTION get_driver_current_scheduled_booking(p_driver_id UUID)
RETURNS TABLE (
  id UUID,
  customer_id UUID,
  booking_type TEXT,
  vehicle_type TEXT,
  pickup_address TEXT,
  destination_address TEXT,
  pickup_landmark TEXT,
  destination_landmark TEXT,
  pickup_latitude DOUBLE PRECISION,
  pickup_longitude DOUBLE PRECISION,
  destination_latitude DOUBLE PRECISION,
  destination_longitude DOUBLE PRECISION,
  scheduled_time TIMESTAMPTZ,
  rental_hours INT,
  special_instructions TEXT,
  estimated_fare NUMERIC,
  status TEXT,
  assigned_driver_id UUID,
  pickup_otp TEXT,
  drop_otp TEXT,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
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
    sb.id,
    sb.customer_id,
    sb.booking_type,
    sb.vehicle_type,
    sb.pickup_address,
    sb.destination_address,
    sb.pickup_landmark,
    sb.destination_landmark,
    sb.pickup_latitude,
    sb.pickup_longitude,
    sb.destination_latitude,
    sb.destination_longitude,
    sb.scheduled_time,
    sb.rental_hours,
    sb.special_instructions,
    sb.estimated_fare,
    sb.status,
    sb.assigned_driver_id,
    sb.pickup_otp,
    sb.drop_otp,
    sb.promo_code,
    sb.promo_discount,
    sb.original_fare,
    sb.created_at,
    sb.updated_at,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM scheduled_bookings sb
  LEFT JOIN users u ON u.id = sb.customer_id
  WHERE sb.assigned_driver_id = p_driver_id
    AND sb.status IN ('assigned', 'confirmed', 'driver_arrived', 'in_progress')
  ORDER BY sb.created_at DESC
  LIMIT 1;
END;
$$;