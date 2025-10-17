/*
  # Add RPC functions for notification management

  1. New Functions
    - `get_user_notifications` - Get notifications for a user, bypassing RLS
    - `mark_notification_as_read` - Mark notification as read, bypassing RLS
    - `delete_notifications_by_ids` - Delete notifications by IDs, bypassing RLS
    
  2. Security
    - Functions run with SECURITY DEFINER to bypass RLS
    - Used for custom authentication flow without Supabase Auth
    - Only allows notification management for the specified user
*/

-- Function to get notifications for a user
CREATE OR REPLACE FUNCTION get_user_notifications(
  p_user_id UUID,
  p_type TEXT DEFAULT NULL,
  p_status TEXT DEFAULT NULL,
  p_limit INT DEFAULT 50
)
RETURNS TABLE (
  id UUID,
  user_id UUID,
  type TEXT,
  title TEXT,
  message TEXT,
  data JSONB,
  status TEXT,
  created_at TIMESTAMPTZ,
  read_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    n.id,
    n.user_id,
    n.type,
    n.title,
    n.message,
    n.data,
    n.status,
    n.created_at,
    n.read_at,
    n.expires_at
  FROM notifications n
  WHERE n.user_id = p_user_id
    AND (p_type IS NULL OR n.type = p_type)
    AND (p_status IS NULL OR n.status = p_status)
  ORDER BY n.created_at DESC
  LIMIT p_limit;
END;
$$;

-- Function to mark notification as read
CREATE OR REPLACE FUNCTION mark_notification_as_read(
  p_notification_id UUID,
  p_user_id UUID
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
  WHERE id = p_notification_id
    AND user_id = p_user_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    RETURN json_build_object(
      'success', true,
      'notification_id', p_notification_id
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Notification not found or access denied'
    );
  END IF;
END;
$$;

-- Function to delete notifications by IDs
CREATE OR REPLACE FUNCTION delete_notifications_by_ids(
  p_notification_ids UUID[],
  p_user_id UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_deleted_count INT;
BEGIN
  DELETE FROM notifications
  WHERE id = ANY(p_notification_ids)
    AND user_id = p_user_id;
  
  GET DIAGNOSTICS v_deleted_count = ROW_COUNT;
  
  RETURN json_build_object(
    'success', true,
    'deleted_count', v_deleted_count
  );
END;
$$;

-- Function to update notification status
CREATE OR REPLACE FUNCTION update_notification_status(
  p_notification_ids UUID[],
  p_user_id UUID,
  p_status TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_count INT;
BEGIN
  UPDATE notifications
  SET status = p_status
  WHERE id = ANY(p_notification_ids)
    AND user_id = p_user_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  RETURN json_build_object(
    'success', true,
    'updated_count', v_updated_count
  );
END;
$$;