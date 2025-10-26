/*
  # Fix get_driver_current_ride rating type mismatch
  
  1. Issue
    - Previous migration changed rating from INT to NUMERIC
    - This caused type mismatch with the database column (which is INTEGER)
    - Function fails silently and returns no results
    
  2. Fix
    - Recreate function with correct rating type (INT)
    - Keep all promo fields intact
*/

-- Drop and recreate with correct types
DROP FUNCTION IF EXISTS get_driver_current_ride(UUID);

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
  rating INT,
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