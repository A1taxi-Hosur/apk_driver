/*
  # Fix get_ride_by_id function - remove non-existent special_instructions column
  
  1. Issue
    - get_ride_by_id tries to select r.special_instructions which doesn't exist
    - This causes "Ride not found" error during trip completion
    - Breaks the entire ride completion flow
    
  2. Fix
    - Remove special_instructions from SELECT list
    - Remove trip_type from function signature (it's in rides table but not in return type)
    - Keep all other fields including promo fields
*/

DROP FUNCTION IF EXISTS get_ride_by_id(UUID);

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
  rating INT,
  feedback TEXT,
  cancelled_by UUID,
  cancellation_reason TEXT,
  booking_type TEXT,
  vehicle_type TEXT,
  rental_hours INT,
  pickup_otp TEXT,
  drop_otp TEXT,
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