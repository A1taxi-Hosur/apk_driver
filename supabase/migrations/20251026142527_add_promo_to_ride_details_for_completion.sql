/*
  # Add promo fields to get_ride_details_for_completion
  
  1. Changes
    - Update `get_ride_details_for_completion` to include promo_code, promo_discount, original_fare
    
  2. Purpose
    - Allow ride completion flow to access promo information
    - Pass promo data to completion modal
*/

-- Drop and recreate with promo fields
DROP FUNCTION IF EXISTS get_ride_details_for_completion(UUID, UUID);

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
  trip_type TEXT,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC,
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
    r.trip_type,
    r.promo_code,
    r.promo_discount,
    r.original_fare,
    r.created_at,
    r.scheduled_time,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.id = p_ride_id
    AND r.driver_id = p_driver_id
    AND r.status = 'in_progress';
END;
$$;