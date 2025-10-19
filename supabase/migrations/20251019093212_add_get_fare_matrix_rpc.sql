/*
  # Add RPC functions for fare matrix access
  
  1. New Functions
    - `get_fare_matrix_for_calculation` - Get fare matrix bypassing RLS for calculations
    - `get_all_active_fare_matrices` - Get all active fare matrices for debugging
  
  2. Security
    - Uses SECURITY DEFINER to bypass RLS
    - Only returns active fare matrices
    - Safe for driver app to use for fare calculations
*/

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
  per_minute_rate NUMERIC,
  surge_multiplier NUMERIC,
  platform_fee NUMERIC,
  gst_rate_charges NUMERIC,
  gst_rate_platform NUMERIC,
  deadhead_km_threshold NUMERIC,
  deadhead_per_km_rate NUMERIC,
  waiting_time_free_minutes INT,
  waiting_time_per_minute_rate NUMERIC,
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
    fm.per_minute_rate,
    fm.surge_multiplier,
    fm.platform_fee,
    fm.gst_rate_charges,
    fm.gst_rate_platform,
    fm.deadhead_km_threshold,
    fm.deadhead_per_km_rate,
    fm.waiting_time_free_minutes,
    fm.waiting_time_per_minute_rate,
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
  per_minute_rate NUMERIC,
  surge_multiplier NUMERIC,
  platform_fee NUMERIC,
  gst_rate_charges NUMERIC,
  gst_rate_platform NUMERIC,
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
    fm.per_minute_rate,
    fm.surge_multiplier,
    fm.platform_fee,
    fm.gst_rate_charges,
    fm.gst_rate_platform,
    fm.is_active,
    fm.created_at
  FROM fare_matrix fm
  WHERE fm.is_active = true
  ORDER BY fm.booking_type, fm.vehicle_type;
END;
$$;
