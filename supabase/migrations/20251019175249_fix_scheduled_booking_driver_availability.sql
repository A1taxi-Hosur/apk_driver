/*
  # Fix Scheduled Booking Driver Availability

  1. Problem
    - Drivers become unavailable after being assigned scheduled bookings
    - Drivers should remain 'online' and available for regular rides
    - Driver status should only change to 'busy' when trip starts

  2. Solution
    - Create RPC function to assign scheduled bookings without changing driver status
    - Drivers stay 'online' when scheduled booking is assigned
    - Driver status changes to 'busy' only when they start the scheduled trip

  3. Usage
    - Admin panel should use this RPC to assign scheduled bookings
    - Function: assign_scheduled_booking_to_driver(booking_id, driver_id)
*/

-- Function to assign scheduled booking without changing driver status
CREATE OR REPLACE FUNCTION assign_scheduled_booking_to_driver(
  p_booking_id UUID,
  p_driver_id UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_booking RECORD;
  v_driver RECORD;
BEGIN
  -- Validate driver exists and is active
  SELECT * INTO v_driver
  FROM drivers
  WHERE id = p_driver_id
    AND status IN ('online', 'busy');
  
  IF v_driver IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Driver not found or inactive'
    );
  END IF;

  -- Validate booking exists and is pending
  SELECT * INTO v_booking
  FROM scheduled_bookings
  WHERE id = p_booking_id
    AND status = 'pending'
    AND assigned_driver_id IS NULL;
  
  IF v_booking IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Booking not found, already assigned, or not in pending status'
    );
  END IF;

  -- Assign driver to booking (DO NOT change driver status)
  UPDATE scheduled_bookings
  SET 
    assigned_driver_id = p_driver_id,
    status = 'assigned',
    updated_at = NOW()
  WHERE id = p_booking_id;

  -- NOTE: Driver status remains unchanged (stays 'online' or 'busy')
  -- Driver status will change to 'busy' only when they start the trip

  RETURN json_build_object(
    'success', true,
    'booking_id', p_booking_id,
    'driver_id', p_driver_id,
    'message', 'Driver assigned successfully. Driver remains available for regular rides.'
  );
END;
$$;
