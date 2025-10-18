/*
  # Auto-correct driver status when no active rides
  
  1. New Function
    - `auto_correct_driver_status` - Automatically sets driver to 'online' when they have no active rides
    
  2. Trigger
    - Runs after ride status updates (completed, cancelled)
    - Sets driver status back to 'online' if no other active rides exist
    
  3. Purpose
    - Prevents drivers from getting stuck in 'busy' status
    - Ensures drivers are available for new rides after completing/cancelling
*/

-- Function to auto-correct driver status
CREATE OR REPLACE FUNCTION auto_correct_driver_status()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_has_active_rides BOOLEAN;
  v_driver_current_status TEXT;
BEGIN
  -- Only process when ride is completed or cancelled
  IF NEW.status IN ('completed', 'cancelled') AND OLD.status NOT IN ('completed', 'cancelled') THEN
    
    -- Check if driver exists and get current status
    SELECT status INTO v_driver_current_status
    FROM drivers
    WHERE id = NEW.driver_id;
    
    -- Only correct if driver is currently 'busy'
    IF v_driver_current_status = 'busy' THEN
      
      -- Check if driver has any other active rides
      SELECT EXISTS(
        SELECT 1
        FROM rides
        WHERE driver_id = NEW.driver_id
          AND status IN ('accepted', 'driver_arrived', 'in_progress')
          AND id != NEW.id
      ) INTO v_has_active_rides;
      
      -- If no active rides, set driver back to 'online'
      IF NOT v_has_active_rides THEN
        UPDATE drivers
        SET status = 'online', updated_at = NOW()
        WHERE id = NEW.driver_id;
        
        RAISE NOTICE 'Driver % status auto-corrected from busy to online', NEW.driver_id;
      END IF;
      
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger
DROP TRIGGER IF EXISTS auto_correct_driver_status_trigger ON rides;
CREATE TRIGGER auto_correct_driver_status_trigger
  AFTER UPDATE ON rides
  FOR EACH ROW
  EXECUTE FUNCTION auto_correct_driver_status();

-- Immediate fix: Correct all drivers who are 'busy' but have no active rides
UPDATE drivers d
SET status = 'online', updated_at = NOW()
WHERE status = 'busy'
  AND NOT EXISTS (
    SELECT 1
    FROM rides r
    WHERE r.driver_id = d.id
      AND r.status IN ('accepted', 'driver_arrived', 'in_progress')
  );
