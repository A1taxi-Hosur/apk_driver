/*
  # Create debug logs table for tracking GPS distance issues
  
  1. New Tables
    - `debug_logs`
      - `id` (uuid, primary key)
      - `ride_id` (uuid, nullable)
      - `log_type` (text) - e.g., 'gps_distance', 'fare_calculation'
      - `message` (text)
      - `data` (jsonb) - store structured data
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `debug_logs` table
    - Allow authenticated users to insert logs
*/

CREATE TABLE IF NOT EXISTS debug_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id uuid,
  log_type text NOT NULL,
  message text NOT NULL,
  data jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE debug_logs ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert debug logs
CREATE POLICY "Authenticated users can insert debug logs"
  ON debug_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to read their own logs
CREATE POLICY "Authenticated users can read debug logs"
  ON debug_logs
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_debug_logs_ride_id ON debug_logs(ride_id);
CREATE INDEX IF NOT EXISTS idx_debug_logs_created_at ON debug_logs(created_at DESC);