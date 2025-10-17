/*
  # Add RPC functions for scheduled bookings management
  
  1. New Functions
    - `get_driver_assigned_scheduled_bookings` - Get bookings assigned to driver by admin
    - `get_driver_current_scheduled_booking` - Get driver's active scheduled booking
    - `update_scheduled_booking_status` - Update booking status
    
  2. Details
    - Functions use SECURITY DEFINER to bypass RLS
    - Used for custom authentication without Supabase Auth
    - Validates driver ownership before allowing access
    
  3. Security
    - Functions run with elevated privileges but include validation
    - Only allow drivers to access bookings assigned to them
*/

-- Get scheduled bookings assigned to driver by admin (pending status, waiting for driver confirmation)
CREATE OR REPLACE FUNCTION get_driver_assigned_scheduled_bookings(p_driver_id UUID)
RETURNS TABLE (
  id UUID,
  customer_id UUID,
  booking_type TEXT,
  vehicle_type TEXT,
  pickup_address TEXT,
  destination_address TEXT,
  pickup_landmark TEXT,
  destination_landmark TEXT,
  pickup_latitude DOUBLE PRECISION,
  pickup_longitude DOUBLE PRECISION,
  destination_latitude DOUBLE PRECISION,
  destination_longitude DOUBLE PRECISION,
  scheduled_time TIMESTAMPTZ,
  rental_hours INT,
  special_instructions TEXT,
  estimated_fare NUMERIC,
  status TEXT,
  assigned_driver_id UUID,
  pickup_otp TEXT,
  drop_otp TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  customer_full_name TEXT,
  customer_phone TEXT,
  customer_email TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    sb.id,
    sb.customer_id,
    sb.booking_type,
    sb.vehicle_type,
    sb.pickup_address,
    sb.destination_address,
    sb.pickup_landmark,
    sb.destination_landmark,
    sb.pickup_latitude,
    sb.pickup_longitude,
    sb.destination_latitude,
    sb.destination_longitude,
    sb.scheduled_time,
    sb.rental_hours,
    sb.special_instructions,
    sb.estimated_fare,
    sb.status,
    sb.assigned_driver_id,
    sb.pickup_otp,
    sb.drop_otp,
    sb.created_at,
    sb.updated_at,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM scheduled_bookings sb
  LEFT JOIN users u ON u.id = sb.customer_id
  WHERE sb.assigned_driver_id = p_driver_id
    AND sb.status = 'pending'
  ORDER BY sb.scheduled_time ASC
  LIMIT 10;
END;
$$;

-- Get driver's current active scheduled booking
CREATE OR REPLACE FUNCTION get_driver_current_scheduled_booking(p_driver_id UUID)
RETURNS TABLE (
  id UUID,
  customer_id UUID,
  booking_type TEXT,
  vehicle_type TEXT,
  pickup_address TEXT,
  destination_address TEXT,
  pickup_landmark TEXT,
  destination_landmark TEXT,
  pickup_latitude DOUBLE PRECISION,
  pickup_longitude DOUBLE PRECISION,
  destination_latitude DOUBLE PRECISION,
  destination_longitude DOUBLE PRECISION,
  scheduled_time TIMESTAMPTZ,
  rental_hours INT,
  special_instructions TEXT,
  estimated_fare NUMERIC,
  status TEXT,
  assigned_driver_id UUID,
  pickup_otp TEXT,
  drop_otp TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  customer_full_name TEXT,
  customer_phone TEXT,
  customer_email TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    sb.id,
    sb.customer_id,
    sb.booking_type,
    sb.vehicle_type,
    sb.pickup_address,
    sb.destination_address,
    sb.pickup_landmark,
    sb.destination_landmark,
    sb.pickup_latitude,
    sb.pickup_longitude,
    sb.destination_latitude,
    sb.destination_longitude,
    sb.scheduled_time,
    sb.rental_hours,
    sb.special_instructions,
    sb.estimated_fare,
    sb.status,
    sb.assigned_driver_id,
    sb.pickup_otp,
    sb.drop_otp,
    sb.created_at,
    sb.updated_at,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone,
    u.email as customer_email
  FROM scheduled_bookings sb
  LEFT JOIN users u ON u.id = sb.customer_id
  WHERE sb.assigned_driver_id = p_driver_id
    AND sb.status IN ('assigned', 'confirmed', 'driver_arrived', 'in_progress')
  ORDER BY sb.created_at DESC
  LIMIT 1;
END;
$$;

-- Update scheduled booking status
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
BEGIN
  UPDATE scheduled_bookings
  SET 
    status = p_status,
    updated_at = NOW()
  WHERE id = p_booking_id
    AND assigned_driver_id = p_driver_id;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
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

-- Update scheduled booking OTP
CREATE OR REPLACE FUNCTION update_scheduled_booking_otp(
  p_booking_id UUID,
  p_driver_id UUID,
  p_otp_type TEXT,
  p_otp TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_updated_count INT;
BEGIN
  IF p_otp_type = 'pickup' THEN
    UPDATE scheduled_bookings
    SET 
      pickup_otp = p_otp,
      updated_at = NOW()
    WHERE id = p_booking_id
      AND assigned_driver_id = p_driver_id;
  ELSIF p_otp_type = 'drop' THEN
    UPDATE scheduled_bookings
    SET 
      drop_otp = p_otp,
      updated_at = NOW()
    WHERE id = p_booking_id
      AND assigned_driver_id = p_driver_id;
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Invalid OTP type. Must be pickup or drop'
    );
  END IF;
  
  GET DIAGNOSTICS v_updated_count = ROW_COUNT;
  
  IF v_updated_count > 0 THEN
    RETURN json_build_object(
      'success', true,
      'booking_id', p_booking_id,
      'otp_type', p_otp_type
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Scheduled booking not found or access denied'
    );
  END IF;
END;
$$;

-- Get scheduled booking OTP for verification
CREATE OR REPLACE FUNCTION get_scheduled_booking_otp(
  p_booking_id UUID,
  p_driver_id UUID,
  p_otp_type TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_otp TEXT;
BEGIN
  IF p_otp_type = 'pickup' THEN
    SELECT pickup_otp INTO v_otp
    FROM scheduled_bookings
    WHERE id = p_booking_id
      AND assigned_driver_id = p_driver_id;
  ELSIF p_otp_type = 'drop' THEN
    SELECT drop_otp INTO v_otp
    FROM scheduled_bookings
    WHERE id = p_booking_id
      AND assigned_driver_id = p_driver_id;
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'Invalid OTP type. Must be pickup or drop'
    );
  END IF;
  
  IF v_otp IS NOT NULL THEN
    RETURN json_build_object(
      'success', true,
      'otp', v_otp
    );
  ELSE
    RETURN json_build_object(
      'success', false,
      'error', 'OTP not found or access denied'
    );
  END IF;
END;
$$;
