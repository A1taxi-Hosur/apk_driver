/*
  # Fix history functions rating column type mismatch

  ## Problem
  The `get_driver_ride_history` and `get_driver_completed_rides` functions
  define rating as NUMERIC, but the actual rides.rating column is INTEGER.
  This causes a type mismatch error preventing history from loading.

  ## Solution
  Update both functions to use INT for rating column to match the actual data type.

  ## Changes
  - Update `get_driver_completed_rides` rating return type: NUMERIC → INT
  - Update `get_driver_ride_history` rating return type: NUMERIC → INT
*/

-- Fix get_driver_completed_rides
DROP FUNCTION IF EXISTS get_driver_completed_rides(UUID);

CREATE OR REPLACE FUNCTION get_driver_completed_rides(p_driver_id UUID)
RETURNS TABLE (
  id UUID,
  ride_code TEXT,
  fare_amount NUMERIC,
  payment_method TEXT,
  payment_status TEXT,
  distance_km NUMERIC,
  duration_minutes INT,
  created_at TIMESTAMPTZ,
  pickup_address TEXT,
  destination_address TEXT,
  rating INT,  -- Changed from NUMERIC to INT
  customer_full_name TEXT,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    r.id,
    r.ride_code,
    r.fare_amount,
    r.payment_method,
    r.payment_status,
    r.distance_km,
    r.duration_minutes,
    r.created_at,
    r.pickup_address,
    r.destination_address,
    r.rating,
    u.full_name as customer_full_name,
    r.promo_code,
    r.promo_discount,
    r.original_fare
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.driver_id = p_driver_id
    AND r.status = 'completed'
    AND r.fare_amount IS NOT NULL
  ORDER BY r.created_at DESC;
END;
$$;

-- Fix get_driver_ride_history
DROP FUNCTION IF EXISTS get_driver_ride_history(UUID, INT);

CREATE OR REPLACE FUNCTION get_driver_ride_history(
  p_driver_id UUID,
  p_limit INT DEFAULT 100
)
RETURNS TABLE (
  id UUID,
  ride_code TEXT,
  pickup_address TEXT,
  destination_address TEXT,
  pickup_landmark TEXT,
  destination_landmark TEXT,
  fare_amount NUMERIC,
  distance_km NUMERIC,
  duration_minutes INT,
  status TEXT,
  payment_method TEXT,
  rating INT,  -- Changed from NUMERIC to INT
  feedback TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  booking_type TEXT,
  vehicle_type TEXT,
  customer_full_name TEXT,
  customer_phone TEXT,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    r.id,
    r.ride_code,
    r.pickup_address,
    r.destination_address,
    r.pickup_landmark,
    r.destination_landmark,
    r.fare_amount,
    r.distance_km,
    r.duration_minutes,
    r.status,
    r.payment_method,
    r.rating,
    r.feedback,
    r.created_at,
    r.updated_at,
    r.booking_type,
    r.vehicle_type,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    r.promo_code,
    r.promo_discount,
    r.original_fare
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.driver_id = p_driver_id
    AND r.status IN ('completed', 'cancelled')
  ORDER BY r.created_at DESC
  LIMIT p_limit;
END;
$$;