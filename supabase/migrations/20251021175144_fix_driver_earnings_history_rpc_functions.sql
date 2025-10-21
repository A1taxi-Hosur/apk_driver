/*
  # Fix Driver Earnings and History RPC Functions

  This migration fixes data type mismatches in the RPC functions that are causing
  the earnings page and history tab to fail.

  ## Changes

  1. **get_driver_completed_rides** - Fix return type for `rating` column
     - Changed from `numeric` to `integer` to match actual database column type
     - This function is used by the earnings page to fetch completed rides

  2. **get_driver_ride_history** - Fix return type for `rating` column
     - Changed from `numeric` to `integer` to match actual database column type
     - This function is used by the history tab to fetch ride history

  ## Issue

  The RPC functions were defined with `rating numeric` but the actual `rides.rating`
  column is `integer`, causing a type mismatch error:
  
  "Returned type integer does not match expected type numeric in column 11"

  ## Impact

  This fix allows drivers to:
  - View their earnings data on the earnings page
  - View their ride history on the history tab
  - See proper rating values for completed rides
*/

-- Drop existing functions first (required to change return types)
DROP FUNCTION IF EXISTS get_driver_completed_rides(uuid);
DROP FUNCTION IF EXISTS get_driver_ride_history(uuid, integer);

-- Recreate get_driver_completed_rides function with correct types
CREATE OR REPLACE FUNCTION get_driver_completed_rides(p_driver_id uuid)
RETURNS TABLE(
  id uuid,
  ride_code text,
  fare_amount numeric,
  payment_method text,
  payment_status text,
  distance_km numeric,
  duration_minutes integer,
  created_at timestamp with time zone,
  pickup_address text,
  destination_address text,
  rating integer,  -- Changed from numeric to integer
  customer_full_name text
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
    u.full_name as customer_full_name
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.driver_id = p_driver_id
    AND r.status = 'completed'
    AND r.fare_amount IS NOT NULL
  ORDER BY r.created_at DESC;
END;
$$;

-- Recreate get_driver_ride_history function with correct types
CREATE OR REPLACE FUNCTION get_driver_ride_history(
  p_driver_id uuid,
  p_limit integer DEFAULT 100
)
RETURNS TABLE(
  id uuid,
  ride_code text,
  pickup_address text,
  destination_address text,
  pickup_landmark text,
  destination_landmark text,
  fare_amount numeric,
  distance_km numeric,
  duration_minutes integer,
  status text,
  payment_method text,
  payment_status text,
  rating integer,  -- Changed from numeric to integer
  feedback text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  booking_type text,
  vehicle_type text,
  customer_full_name text,
  customer_phone text
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
