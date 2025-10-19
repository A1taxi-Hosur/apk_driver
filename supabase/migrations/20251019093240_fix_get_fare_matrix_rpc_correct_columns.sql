/*
  # Fix RPC functions for fare matrix access
  
  1. Changes
    - Drop incorrect functions
    - Recreate with correct column names that exist in fare_matrix table
    - Only include: id, booking_type, vehicle_type, base_fare, per_km_rate, 
      minimum_fare, surge_multiplier, cancellation_fee, platform_fee, is_active, 
      created_at, updated_at
*/

DROP FUNCTION IF EXISTS get_fare_matrix_for_calculation(TEXT, TEXT);
DROP FUNCTION IF EXISTS get_all_active_fare_matrices();

-- Function to get specific fare matrix for fare calculation
CREATE OR REPLACE FUNCTION get_fare_matrix_for_calculation(
  p_booking_type TEXT,
  p_vehicle_type TEXT
)
RETURNS TABLE (
  id UUID,
  booking_type TEXT,
  vehicle_type TEXT,
  base_fare NUMERIC,
  per_km_rate NUMERIC,
  minimum_fare NUMERIC,
  surge_multiplier NUMERIC,
  platform_fee NUMERIC,
  cancellation_fee NUMERIC,
  is_active BOOLEAN,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    fm.id,
    fm.booking_type,
    fm.vehicle_type,
    fm.base_fare,
    fm.per_km_rate,
    fm.minimum_fare,
    fm.surge_multiplier,
    fm.platform_fee,
    fm.cancellation_fee,
    fm.is_active,
    fm.created_at,
    fm.updated_at
  FROM fare_matrix fm
  WHERE fm.booking_type = p_booking_type
    AND fm.vehicle_type = p_vehicle_type
    AND fm.is_active = true
  ORDER BY fm.created_at DESC
  LIMIT 1;
END;
$$;

-- Function to get all active fare matrices (for debugging)
CREATE OR REPLACE FUNCTION get_all_active_fare_matrices()
RETURNS TABLE (
  id UUID,
  booking_type TEXT,
  vehicle_type TEXT,
  base_fare NUMERIC,
  per_km_rate NUMERIC,
  minimum_fare NUMERIC,
  surge_multiplier NUMERIC,
  platform_fee NUMERIC,
  is_active BOOLEAN,
  created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    fm.id,
    fm.booking_type,
    fm.vehicle_type,
    fm.base_fare,
    fm.per_km_rate,
    fm.minimum_fare,
    fm.surge_multiplier,
    fm.platform_fee,
    fm.is_active,
    fm.created_at
  FROM fare_matrix fm
  WHERE fm.is_active = true
  ORDER BY fm.booking_type, fm.vehicle_type;
END;
$$;
