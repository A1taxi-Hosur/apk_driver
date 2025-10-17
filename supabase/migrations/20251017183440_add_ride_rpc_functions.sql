/*
  # Add RPC functions for ride management

  1. New Functions
    - `get_driver_current_ride` - Get driver's current active ride
    - `get_available_rides_for_driver` - Get available ride requests
    - `update_ride_status` - Update ride status
    
  2. Security
    - Functions run with SECURITY DEFINER to bypass RLS
    - Used for custom authentication flow without Supabase Auth
    - Validates driver ownership before allowing updates
*/

-- Function to get driver's current ride
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

-- Function to get available rides (for validation)
CREATE OR REPLACE FUNCTION get_available_rides(p_ride_ids UUID[])
RETURNS TABLE (
  id UUID,
  status TEXT,
  driver_id UUID
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    r.id,
    r.status,
    r.driver_id
  FROM rides r
  WHERE r.id = ANY(p_ride_ids)
    AND r.status = 'requested'
    AND r.driver_id IS NULL;
END;
$$;

-- Function to update ride status (with driver validation)
CREATE OR REPLACE FUNCTION update_ride_status_for_driver(
  p_ride_id UUID,
  p_driver_id UUID,
  p_status TEXT
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
    status = p_status,
    updated_at = NOW()
  WHERE id = p_ride_id
    AND driver_id = p_driver_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    RETURN json_build_object(
      'success', true,
      'ride_id', p_ride_id,
      'status', p_status
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Ride not found or access denied'
    );
  END IF;
END;
$$;