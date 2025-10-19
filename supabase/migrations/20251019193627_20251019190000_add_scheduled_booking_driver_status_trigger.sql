/*
  # Auto-correct driver status when scheduled booking completes

  1. New Function
    - `auto_correct_driver_status_scheduled` - Sets driver to 'online' when scheduled booking completes

  2. Trigger
    - Runs after scheduled_bookings status updates (completed, cancelled)
    - Sets driver status back to 'online' if no other active bookings/rides exist

  3. Purpose
    - Prevents drivers from getting stuck in 'busy' status after scheduled trips
    - Ensures drivers are available for new rides after completing scheduled bookings
    - Works alongside existing trigger for regular rides
*/

-- Function to auto-correct driver status for scheduled bookings
CREATE OR REPLACE FUNCTION auto_correct_driver_status_scheduled()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_has_active_rides BOOLEAN;
  v_has_active_bookings BOOLEAN;
  v_driver_current_status TEXT;
BEGIN
  -- Only process when scheduled booking is completed or cancelled
  IF NEW.status IN ('completed', 'cancelled') AND OLD.status NOT IN ('completed', 'cancelled') THEN

    -- Check if driver exists and get current status
    SELECT status INTO v_driver_current_status
    FROM drivers
    WHERE id = NEW.assigned_driver_id;

    -- Only correct if driver is currently 'busy'
    IF v_driver_current_status = 'busy' THEN

      -- Check if driver has any active regular rides
      SELECT EXISTS(
        SELECT 1
        FROM rides
        WHERE driver_id = NEW.assigned_driver_id
          AND status IN ('accepted', 'driver_arrived', 'in_progress')
      ) INTO v_has_active_rides;

      -- Check if driver has any other active scheduled bookings
      SELECT EXISTS(
        SELECT 1
        FROM scheduled_bookings
        WHERE assigned_driver_id = NEW.assigned_driver_id
          AND status IN ('assigned', 'confirmed', 'driver_arrived', 'in_progress')
          AND id != NEW.id
      ) INTO v_has_active_bookings;

      -- If no active rides or bookings, set driver back to 'online'
      IF NOT v_has_active_rides AND NOT v_has_active_bookings THEN
        UPDATE drivers
        SET status = 'online', updated_at = NOW()
        WHERE id = NEW.assigned_driver_id;

        RAISE NOTICE 'Driver % status auto-corrected from busy to online (scheduled booking completed)', NEW.assigned_driver_id;
      END IF;

    END IF;
  END IF;

  RETURN NEW;
END;
$$;

-- Create trigger on scheduled_bookings table
DROP TRIGGER IF EXISTS auto_correct_driver_status_scheduled_trigger ON scheduled_bookings;
CREATE TRIGGER auto_correct_driver_status_scheduled_trigger
  AFTER UPDATE ON scheduled_bookings
  FOR EACH ROW
  EXECUTE FUNCTION auto_correct_driver_status_scheduled();

-- Immediate fix: Correct all drivers who are 'busy' but have no active rides or scheduled bookings
UPDATE drivers d
SET status = 'online', updated_at = NOW()
WHERE status = 'busy'
  AND NOT EXISTS (
    SELECT 1
    FROM rides r
    WHERE r.driver_id = d.id
      AND r.status IN ('accepted', 'driver_arrived', 'in_progress')
  )
  AND NOT EXISTS (
    SELECT 1
    FROM scheduled_bookings sb
    WHERE sb.assigned_driver_id = d.id
      AND sb.status IN ('assigned', 'confirmed', 'driver_arrived', 'in_progress')
  );
