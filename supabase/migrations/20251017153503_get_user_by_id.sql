/*
  # Add RPC function to get user by ID

  1. New Functions
    - `get_user_by_id(p_user_id)` - Gets user data by ID, bypassing RLS
    
  2. Security
    - Function runs with SECURITY DEFINER to bypass RLS
    - Used for driver authentication flow
    - Only returns user data, no sensitive credentials
*/

CREATE OR REPLACE FUNCTION get_user_by_id(p_user_id UUID)
RETURNS TABLE (
  id UUID,
  email TEXT,
  role TEXT,
  full_name TEXT,
  phone_number TEXT,
  avatar_url TEXT,
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
    u.id,
    u.email,
    u.role,
    u.full_name,
    u.phone_number,
    u.avatar_url,
    u.is_active,
    u.created_at,
    u.updated_at
  FROM users u
  WHERE u.id = p_user_id;
END;
$$;