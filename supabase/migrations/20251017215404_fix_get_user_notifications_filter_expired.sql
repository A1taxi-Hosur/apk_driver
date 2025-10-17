/*
  # Fix get_user_notifications to filter expired notifications

  1. Changes
    - Add filter to exclude expired notifications
    - Only return notifications where expires_at IS NULL or expires_at > NOW()
    
  2. Security
    - Maintains SECURITY DEFINER to bypass RLS
*/

DROP FUNCTION IF EXISTS get_user_notifications(UUID, TEXT, TEXT, INTEGER);

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
  updated_at TIMESTAMPTZ,
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
    n.updated_at,
    n.expires_at
  FROM notifications n
  WHERE n.user_id = p_user_id
    AND (p_type IS NULL OR n.type = p_type)
    AND (p_status IS NULL OR n.status = p_status)
    AND (n.expires_at IS NULL OR n.expires_at > NOW())
  ORDER BY n.created_at DESC
  LIMIT p_limit;
END;
$$;
