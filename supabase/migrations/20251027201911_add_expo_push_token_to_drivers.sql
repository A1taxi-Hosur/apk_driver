/*
  # Add Expo Push Token to Drivers

  1. Changes
    - Add `expo_push_token` column to `drivers` table
    - Add `push_token_updated_at` timestamp
    - Add RPC function to update push token

  2. Purpose
    - Store driver's Expo push notification token
    - Enable server-side push notifications
    - Allows notifications even when app is closed/killed

  3. Security
    - Only authenticated drivers can update their own token
*/

-- Add expo push token column to drivers table
ALTER TABLE drivers
ADD COLUMN IF NOT EXISTS expo_push_token text,
ADD COLUMN IF NOT EXISTS push_token_updated_at timestamptz DEFAULT now();

-- Create index for faster push token lookups
CREATE INDEX IF NOT EXISTS idx_drivers_expo_push_token ON drivers(expo_push_token) WHERE expo_push_token IS NOT NULL;

-- Create RPC function to update driver's push token
CREATE OR REPLACE FUNCTION update_driver_push_token(
  p_driver_id uuid,
  p_push_token text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE drivers
  SET
    expo_push_token = p_push_token,
    push_token_updated_at = now()
  WHERE id = p_driver_id;

  RETURN FOUND;
END;
$$;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION update_driver_push_token TO authenticated, service_role;

COMMENT ON COLUMN drivers.expo_push_token IS 'Expo push notification token for sending push notifications';
COMMENT ON COLUMN drivers.push_token_updated_at IS 'Timestamp when push token was last updated';
COMMENT ON FUNCTION update_driver_push_token IS 'Update driver push notification token';
