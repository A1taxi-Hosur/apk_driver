/*
  # Add Customer Trip Completion RPC Function
  
  1. New Functions
    - `get_trip_completion_for_customer(ride_id)` - Retrieves trip completion details including promo information
  
  2. Changes
    - Returns comprehensive trip completion data from all completion tables
    - Includes promo_code, promo_discount, and original_fare for customer app display
    - Unions all completion tables (trip_completions, rental_trip_completions, outstation_trip_completions, airport_trip_completions)
    - Returns formatted vehicle details
  
  3. Security
    - SECURITY DEFINER to bypass RLS
    - Granted to authenticated users only
*/

CREATE OR REPLACE FUNCTION get_trip_completion_for_customer(
  p_ride_id UUID
)
RETURNS TABLE (
  id UUID,
  ride_id UUID,
  booking_type TEXT,
  pickup_address TEXT,
  destination_address TEXT,
  actual_distance_km NUMERIC,
  actual_duration_minutes INTEGER,
  fare_breakdown JSONB,
  promo_code TEXT,
  promo_discount NUMERIC,
  original_fare NUMERIC,
  total_fare NUMERIC,
  driver_name TEXT,
  driver_rating NUMERIC,
  vehicle_details TEXT,
  completed_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    tc.id,
    tc.ride_id,
    tc.booking_type,
    tc.pickup_address,
    tc.destination_address,
    tc.actual_distance_km,
    tc.actual_duration_minutes,
    tc.fare_details as fare_breakdown,
    tc.promo_code,
    tc.promo_discount,
    tc.original_fare,
    tc.total_fare,
    tc.driver_name,
    tc.driver_rating,
    (tc.vehicle_make || ' ' || tc.vehicle_model || ' (' || tc.vehicle_color || ')') as vehicle_details,
    tc.completed_at
  FROM trip_completions tc
  WHERE tc.ride_id = p_ride_id
  
  UNION ALL
  
  SELECT 
    rtc.id,
    rtc.ride_id,
    rtc.booking_type,
    rtc.pickup_address,
    rtc.destination_address,
    rtc.actual_distance_km,
    rtc.actual_duration_minutes,
    rtc.fare_details as fare_breakdown,
    rtc.promo_code,
    rtc.promo_discount,
    rtc.original_fare,
    rtc.total_fare,
    rtc.driver_name,
    rtc.driver_rating,
    (rtc.vehicle_make || ' ' || rtc.vehicle_model || ' (' || rtc.vehicle_color || ')') as vehicle_details,
    rtc.completed_at
  FROM rental_trip_completions rtc
  WHERE rtc.ride_id = p_ride_id
  
  UNION ALL
  
  SELECT 
    otc.id,
    otc.ride_id,
    otc.booking_type,
    otc.pickup_address,
    otc.destination_address,
    otc.actual_distance_km,
    otc.actual_duration_minutes,
    otc.fare_details as fare_breakdown,
    otc.promo_code,
    otc.promo_discount,
    otc.original_fare,
    otc.total_fare,
    otc.driver_name,
    otc.driver_rating,
    (otc.vehicle_make || ' ' || otc.vehicle_model || ' (' || otc.vehicle_color || ')') as vehicle_details,
    otc.completed_at
  FROM outstation_trip_completions otc
  WHERE otc.ride_id = p_ride_id
  
  UNION ALL
  
  SELECT 
    atc.id,
    atc.ride_id,
    atc.booking_type,
    atc.pickup_address,
    atc.destination_address,
    atc.actual_distance_km,
    atc.actual_duration_minutes,
    atc.fare_details as fare_breakdown,
    atc.promo_code,
    atc.promo_discount,
    atc.original_fare,
    atc.total_fare,
    atc.driver_name,
    atc.driver_rating,
    (atc.vehicle_make || ' ' || atc.vehicle_model || ' (' || atc.vehicle_color || ')') as vehicle_details,
    atc.completed_at
  FROM airport_trip_completions atc
  WHERE atc.ride_id = p_ride_id;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_trip_completion_for_customer TO authenticated;