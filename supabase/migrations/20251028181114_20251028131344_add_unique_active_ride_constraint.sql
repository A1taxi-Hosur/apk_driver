/*
  # Add unique constraint for active rides per driver
  
  1. Purpose
    - Enforce one active ride per driver at database table level
    - Prevents any code path from creating multiple active rides
    - Adds fail-safe protection beyond RPC validation
    
  2. Constraint
    - Unique partial index on (driver_id) where status is active
    - Active statuses: 'accepted', 'driver_arrived', 'in_progress'
    - Allows multiple completed/cancelled rides per driver
    - Only ONE active ride allowed
    
  3. Impact
    - Any attempt to assign second active ride will fail at database level
    - Works for RPC, direct inserts, updates, and all code paths
    - PostgreSQL enforces this automatically
    - Cannot be bypassed by application code
*/

-- Create unique partial index to enforce one active ride per driver
-- This is a partial index that only applies to active ride statuses
CREATE UNIQUE INDEX IF NOT EXISTS idx_one_active_ride_per_driver
ON rides (driver_id)
WHERE status IN ('accepted', 'driver_arrived', 'in_progress')
  AND driver_id IS NOT NULL;

-- Add comment explaining the constraint
COMMENT ON INDEX idx_one_active_ride_per_driver IS 
  'Enforces that a driver can only have ONE active ride at a time. Active statuses: accepted, driver_arrived, in_progress';
