/*
  # Add get_ride_by_id RPC function
  
  1. New Function
    - `get_ride_by_id` - Get ride details by ID bypassing RLS for fare calculation
  
  2. Security
    - Uses SECURITY DEFINER to bypass RLS
    - Returns all ride fields needed for fare calculation
*/

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
  booking_type TEXT,
  vehicle_type TEXT,
  rental_hours INT,
  selected_hours INT,
  scheduled_time TIMESTAMPTZ,
  trip_type TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
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
    r.selected_hours,
    r.scheduled_time,
    r.trip_type,
    r.created_at,
    r.updated_at
  FROM rides r
  WHERE r.id = p_ride_id;
END;
$$;
