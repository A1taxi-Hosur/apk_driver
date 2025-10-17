/*
  # Add RPC function to get driver by user_id

  1. New Functions
    - `get_driver_by_user_id` - Get driver data by user_id, bypassing RLS
    
  2. Security
    - Function runs with SECURITY DEFINER to bypass RLS
    - Used for custom authentication flow without Supabase Auth
    - Returns driver data with vehicle information
*/

CREATE OR REPLACE FUNCTION get_driver_by_user_id(
  p_user_id UUID
)
RETURNS TABLE (
  id UUID,
  user_id UUID,
  license_number TEXT,
  license_expiry DATE,
  status TEXT,
  rating NUMERIC,
  total_rides INTEGER,
  total_earnings NUMERIC,
  is_verified BOOLEAN,
  vehicle_id UUID,
  vendor_id UUID,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  vehicle_registration_number TEXT,
  vehicle_make TEXT,
  vehicle_model TEXT,
  vehicle_year INTEGER,
  vehicle_color TEXT,
  vehicle_type TEXT,
  vehicle_capacity INTEGER
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    d.id,
    d.user_id,
    d.license_number,
    d.license_expiry,
    d.status,
    d.rating,
    d.total_rides,
    d.total_earnings,
    d.is_verified,
    d.vehicle_id,
    d.vendor_id,
    d.created_at,
    d.updated_at,
    v.registration_number AS vehicle_registration_number,
    v.make AS vehicle_make,
    v.model AS vehicle_model,
    v.year AS vehicle_year,
    v.color AS vehicle_color,
    v.vehicle_type AS vehicle_type,
    v.capacity AS vehicle_capacity
  FROM drivers d
  LEFT JOIN vehicles v ON v.id = d.vehicle_id
  WHERE d.user_id = p_user_id
  LIMIT 1;
END;
$$;
