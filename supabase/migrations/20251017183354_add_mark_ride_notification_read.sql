/*
  # Add RPC function to mark ride notification as read

  1. New Function
    - `mark_ride_notification_as_read` - Mark notifications for a specific ride as read
    
  2. Security
    - Functions run with SECURITY DEFINER to bypass RLS
    - Only marks notifications for the specified user and ride
*/

-- Function to mark ride notification as read
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
    read_at = NOW()
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