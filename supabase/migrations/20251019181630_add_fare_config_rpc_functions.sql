/*
  # Add RPC functions to fetch fare configurations
  
  1. Problem
    - Driver app uses custom authentication (not Supabase Auth)
    - RLS policies block access to fare tables because auth.uid() is NULL
    - Airport, rental, and outstation fare lookups fail
    
  2. Solution
    - Create RPC functions that bypass RLS using SECURITY DEFINER
    - Functions validate is_active status
    - Allow drivers to fetch fare configurations needed for trip completion
    
  3. New Functions
    - get_airport_fare(vehicle_type)
    - get_rental_fare(vehicle_type, duration_hours)
    - get_outstation_fare(vehicle_type)
*/

-- Get airport fare for vehicle type
CREATE OR REPLACE FUNCTION get_airport_fare(p_vehicle_type TEXT)
RETURNS TABLE (
  id UUID,
  vehicle_type TEXT,
  hosur_to_airport_fare NUMERIC,
  airport_to_hosur_fare NUMERIC,
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
    af.id,
    af.vehicle_type,
    af.hosur_to_airport_fare,
    af.airport_to_hosur_fare,
    af.is_active,
    af.created_at,
    af.updated_at
  FROM airport_fares af
  WHERE af.vehicle_type = p_vehicle_type
    AND af.is_active = true
  ORDER BY af.created_at DESC
  LIMIT 1;
END;
$$;

-- Get rental fare for vehicle type and duration
CREATE OR REPLACE FUNCTION get_rental_fare(
  p_vehicle_type TEXT,
  p_duration_hours INT
)
RETURNS TABLE (
  id UUID,
  vehicle_type TEXT,
  package_name TEXT,
  duration_hours INT,
  km_included INT,
  base_fare NUMERIC,
  extra_km_rate NUMERIC,
  extra_minute_rate NUMERIC,
  is_active BOOLEAN,
  is_popular BOOLEAN,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    rf.id,
    rf.vehicle_type,
    rf.package_name,
    rf.duration_hours,
    rf.km_included,
    rf.base_fare,
    rf.extra_km_rate,
    rf.extra_minute_rate,
    rf.is_active,
    rf.is_popular,
    rf.created_at,
    rf.updated_at
  FROM rental_fares rf
  WHERE rf.vehicle_type = p_vehicle_type
    AND rf.duration_hours = p_duration_hours
    AND rf.is_active = true
  ORDER BY rf.is_popular DESC, rf.created_at DESC
  LIMIT 1;
END;
$$;

-- Get outstation fare for vehicle type
CREATE OR REPLACE FUNCTION get_outstation_fare(p_vehicle_type TEXT)
RETURNS TABLE (
  id UUID,
  vehicle_type TEXT,
  base_fare NUMERIC,
  per_km_rate NUMERIC,
  driver_allowance_per_day NUMERIC,
  daily_km_limit INT,
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
    of.id,
    of.vehicle_type,
    of.base_fare,
    of.per_km_rate,
    of.driver_allowance_per_day,
    of.daily_km_limit,
    of.is_active,
    of.created_at,
    of.updated_at
  FROM outstation_fares of
  WHERE of.vehicle_type = p_vehicle_type
    AND of.is_active = true
  ORDER BY of.created_at DESC
  LIMIT 1;
END;
$$;
