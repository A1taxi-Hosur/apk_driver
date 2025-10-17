/*
  # Fix get_available_rides to filter expired rides

  1. Changes
    - Add filter to exclude expired rides
    - Only return rides where expires_at IS NULL or expires_at > NOW()
    
  2. Security
    - Maintains SECURITY DEFINER to bypass RLS
*/

DROP FUNCTION IF EXISTS get_available_rides(UUID[]);

CREATE OR REPLACE FUNCTION get_available_rides(
  p_ride_ids UUID[]
)
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
    AND r.driver_id IS NULL
    AND (r.expires_at IS NULL OR r.expires_at > NOW());
END;
$$;
