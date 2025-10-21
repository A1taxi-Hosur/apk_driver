/*
  # Fix get_driver_ride_history RPC function
  
  ## Issue
  - Function signature declares `payment_status TEXT` as return column
  - But SELECT query doesn't include `r.payment_status`
  - This causes the history tab to fail or show incorrect data
  
  ## Fix
  - Drop and recreate function with correct SELECT including `r.payment_status`
*/

-- Drop existing function
DROP FUNCTION IF EXISTS get_driver_ride_history(UUID, INT);

-- Recreate with payment_status in SELECT
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
  payment_status TEXT,
  rating NUMERIC,
  feedback TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  booking_type TEXT,
  vehicle_type TEXT,
  customer_full_name TEXT,
  customer_phone TEXT
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
    r.payment_status,
    r.rating,
    r.feedback,
    r.created_at,
    r.updated_at,
    r.booking_type,
    r.vehicle_type,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.driver_id = p_driver_id
    AND r.status IN ('completed', 'cancelled')
  ORDER BY r.created_at DESC
  LIMIT p_limit;
END;
$$;