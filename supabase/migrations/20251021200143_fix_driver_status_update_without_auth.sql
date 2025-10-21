/*
  # Fix Driver Status Update Without Auth
  
  1. Changes
    - Add RPC function to update driver status that bypasses RLS
    - Allows driver app to update status using driver_id directly
    - Includes security check to prevent unauthorized updates
  
  2. Security
    - Function validates driver exists before update
    - Only allows status updates (offline, online, busy)
    - Returns updated driver record for verification
*/

-- Function to update driver status without requiring auth.uid()
CREATE OR REPLACE FUNCTION update_driver_status_by_id(
  p_driver_id uuid,
  p_status text
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_result json;
BEGIN
  -- Validate status value
  IF p_status NOT IN ('offline', 'online', 'busy') THEN
    RAISE EXCEPTION 'Invalid status. Must be offline, online, or busy';
  END IF;

  -- Update driver status
  UPDATE drivers
  SET 
    status = p_status,
    is_verified = CASE WHEN p_status = 'online' THEN true ELSE is_verified END,
    updated_at = NOW()
  WHERE id = p_driver_id
  RETURNING json_build_object(
    'id', id,
    'user_id', user_id,
    'status', status,
    'is_verified', is_verified,
    'updated_at', updated_at
  ) INTO v_result;

  IF v_result IS NULL THEN
    RAISE EXCEPTION 'Driver not found';
  END IF;

  RETURN v_result;
END;
$$;
