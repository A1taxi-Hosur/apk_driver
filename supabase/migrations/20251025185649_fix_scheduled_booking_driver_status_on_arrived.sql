/*
  # Fix driver status for scheduled bookings - set busy only on driver_arrived
  
  1. Changes
    - Modify the RPC function to set driver status to 'busy' when status changes to 'driver_arrived'
    - Driver remains 'online' when booking is 'assigned'
    - Driver becomes 'busy' when marking 'driver_arrived'
    - Driver returns to 'online' when trip completes
    
  2. Behavior
    - Assigned scheduled booking: Driver stays 'online' (can accept regular rides)
    - Driver arrived at pickup: Driver becomes 'busy' (unavailable for new rides)
    - Trip in progress: Driver remains 'busy'
    - Trip completed/cancelled: Driver returns to 'online' (existing trigger handles this)
*/

-- Update the RPC function to handle driver status changes
CREATE OR REPLACE FUNCTION update_scheduled_booking_status(
  p_booking_id UUID,
  p_driver_id UUID,
  p_status TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_count INT;
  v_old_status TEXT;
BEGIN
  -- Get the current status before updating
  SELECT status INTO v_old_status
  FROM scheduled_bookings
  WHERE id = p_booking_id
    AND assigned_driver_id = p_driver_id;

  -- Update the scheduled booking status
  UPDATE scheduled_bookings
  SET 
    status = p_status,
    updated_at = NOW()
  WHERE id = p_booking_id
    AND assigned_driver_id = p_driver_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    -- Set driver to 'busy' when they mark as 'driver_arrived'
    -- This prevents them from receiving new ride requests while at pickup location
    IF p_status = 'driver_arrived' AND v_old_status != 'driver_arrived' THEN
      UPDATE drivers
      SET status = 'busy', updated_at = NOW()
      WHERE id = p_driver_id;
      
      RAISE NOTICE 'Driver % set to busy (marked arrived at scheduled booking)', p_driver_id;
    END IF;
    
    -- Set driver to 'busy' when trip starts (in_progress)
    -- Keep this for backward compatibility
    IF p_status = 'in_progress' AND v_old_status NOT IN ('in_progress', 'driver_arrived') THEN
      UPDATE drivers
      SET status = 'busy', updated_at = NOW()
      WHERE id = p_driver_id;
      
      RAISE NOTICE 'Driver % set to busy (scheduled trip started)', p_driver_id;
    END IF;
    
    RETURN json_build_object(
      'success', true,
      'booking_id', p_booking_id,
      'status', p_status
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Scheduled booking not found or access denied'
    );
  END IF;
END;
$$;