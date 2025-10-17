/*
  # Fix mark_ride_notification_as_read to remove read_at

  1. Changes
    - Remove read_at column reference (doesn't exist in notifications table)
    - Update only status and updated_at
    
  2. Security
    - Maintains SECURITY DEFINER to bypass RLS
*/

DROP FUNCTION IF EXISTS mark_ride_notification_as_read(UUID, UUID);

CREATE OR REPLACE FUNCTION mark_ride_notification_as_read(
  p_user_id UUID,
  p_ride_id UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_count INT;
BEGIN
  UPDATE notifications
  SET 
    status = 'read',
    updated_at = NOW()
  WHERE user_id = p_user_id
    AND type = 'ride_request'
    AND (data->>'ride_id')::uuid = p_ride_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  RETURN json_build_object(
    'success', true,
    'updated_count', v_updated_count
  );
END;
$$;
