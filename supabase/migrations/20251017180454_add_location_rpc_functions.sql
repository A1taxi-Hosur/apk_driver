/*
  # Add RPC functions for location management

  1. New Functions
    - `upsert_driver_location` - Insert or update driver location, bypassing RLS
    - `get_driver_location` - Get driver location by user_id, bypassing RLS
    
  2. Security
    - Functions run with SECURITY DEFINER to bypass RLS
    - Used for custom authentication flow without Supabase Auth
    - Only allows location management, no access to other sensitive data
*/

-- Function to insert or update driver location
CREATE OR REPLACE FUNCTION upsert_driver_location(
  p_user_id UUID,
  p_latitude NUMERIC,
  p_longitude NUMERIC,
  p_heading NUMERIC DEFAULT NULL,
  p_speed NUMERIC DEFAULT NULL,
  p_accuracy NUMERIC DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_action TEXT;
BEGIN
  -- Try to update first
  UPDATE live_locations
  SET 
    latitude = p_latitude,
    longitude = p_longitude,
    heading = p_heading,
    speed = p_speed,
    accuracy = p_accuracy,
    updated_at = NOW()
  WHERE user_id = p_user_id;
  
  -- If no rows updated, insert new record
  IF NOT FOUND THEN
    INSERT INTO live_locations (
      user_id,
      latitude,
      longitude,
      heading,
      speed,
      accuracy,
      updated_at
    ) VALUES (
      p_user_id,
      p_latitude,
      p_longitude,
      p_heading,
      p_speed,
      p_accuracy,
      NOW()
    );
    v_action := 'inserted';
  ELSE
    v_action := 'updated';
  END IF;
  
  RETURN json_build_object(
    'success', true,
    'action', v_action,
    'user_id', p_user_id
  );
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object(
      'success', false,
      'error', SQLERRM
    );
END;
$$;

-- Function to get driver location
CREATE OR REPLACE FUNCTION get_driver_location(p_user_id UUID)
RETURNS TABLE (
  user_id UUID,
  latitude NUMERIC,
  longitude NUMERIC,
  heading NUMERIC,
  speed NUMERIC,
  accuracy NUMERIC,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ll.user_id,
    ll.latitude,
    ll.longitude,
    ll.heading,
    ll.speed,
    ll.accuracy,
    ll.updated_at
  FROM live_locations ll
  WHERE ll.user_id = p_user_id;
END;
$$;