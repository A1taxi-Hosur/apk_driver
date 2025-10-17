/*
  # Fix notify_nearby_drivers trigger - Add vehicle type filtering
  
  1. Changes
    - Add JOIN with vehicles table to get driver's vehicle type
    - Filter drivers by matching vehicle type
    - Only process regular rides (not rental/outstation/airport)
    - Keep SECURITY DEFINER for RLS bypass
    - Maintain all required notification fields
    
  2. Security
    - Function runs with elevated privileges to insert notifications
    - Validates vehicle matching before notifying drivers
*/

DROP FUNCTION IF EXISTS notify_nearby_drivers() CASCADE;

CREATE OR REPLACE FUNCTION notify_nearby_drivers() 
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  nearby_driver RECORD;
  distance_km NUMERIC;
  max_distance NUMERIC := 15.0;
  customer_name TEXT;
  customer_phone TEXT;
BEGIN
  -- Only process new ride requests
  IF NEW.status = 'requested' AND OLD IS NULL THEN
    
    -- Only notify drivers for regular rides (rental/outstation/airport are admin-assigned)
    IF NEW.booking_type != 'regular' THEN
      RETURN NEW;
    END IF;
    
    -- Get customer info
    SELECT full_name, phone_number INTO customer_name, customer_phone
    FROM users
    WHERE id = NEW.customer_id;
    
    -- Find online drivers within proximity with matching vehicle type
    FOR nearby_driver IN
      SELECT 
        d.id as driver_id,
        d.user_id,
        ll.latitude as driver_lat,
        ll.longitude as driver_lng,
        v.vehicle_type,
        u.full_name as driver_name
      FROM drivers d
      JOIN live_locations ll ON ll.user_id = d.user_id
      JOIN vehicles v ON d.vehicle_id = v.id
      JOIN users u ON d.user_id = u.id
      WHERE d.status = 'online' 
        AND d.is_verified = true
        AND ll.updated_at > NOW() - INTERVAL '30 minutes'
        AND (
          -- Exact match: driver has exact vehicle type requested
          v.vehicle_type = NEW.vehicle_type
          OR
          -- AC variant match: driver with AC vehicle can take non-AC requests
          v.vehicle_type = NEW.vehicle_type || '_ac'
        )
    LOOP
      -- Calculate distance between driver and pickup
      distance_km := calculate_distance(
        nearby_driver.driver_lat, 
        nearby_driver.driver_lng,
        NEW.pickup_latitude, 
        NEW.pickup_longitude
      );
      
      -- If driver is within range, send notification
      IF distance_km <= max_distance THEN
        INSERT INTO notifications (
          user_id,
          type,
          title,
          message,
          data,
          status,
          expires_at
        ) VALUES (
          nearby_driver.user_id,
          'ride_request',
          'New Ride Request Nearby!',
          'Pickup: ' || NEW.pickup_address || ' (' || ROUND(distance_km, 1) || 'km away)',
          jsonb_build_object(
            'ride_id', NEW.id,
            'ride_code', NEW.ride_code,
            'distance_km', ROUND(distance_km, 1),
            'pickup_address', NEW.pickup_address,
            'pickup_latitude', NEW.pickup_latitude,
            'pickup_longitude', NEW.pickup_longitude,
            'pickup_landmark', NEW.pickup_landmark,
            'destination_address', NEW.destination_address,
            'destination_latitude', NEW.destination_latitude,
            'destination_longitude', NEW.destination_longitude,
            'destination_landmark', NEW.destination_landmark,
            'fare_amount', NEW.fare_amount,
            'booking_type', NEW.booking_type,
            'vehicle_type', NEW.vehicle_type,
            'rental_hours', NEW.rental_hours,
            'customer_id', NEW.customer_id,
            'customer_name', customer_name,
            'customer_phone', customer_phone,
            'driver_vehicle_type', nearby_driver.vehicle_type
          ),
          'unread',
          NOW() + INTERVAL '5 minutes'
        );
        
        -- Log for debugging
        RAISE NOTICE 'Notified driver % (%) for ride % - Vehicle: % matches %, Distance: %km',
          nearby_driver.driver_name,
          nearby_driver.user_id,
          NEW.id,
          nearby_driver.vehicle_type,
          NEW.vehicle_type,
          ROUND(distance_km, 1);
      END IF;
    END LOOP;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Recreate the trigger
DROP TRIGGER IF EXISTS proximity_notification_trigger ON rides;
CREATE TRIGGER proximity_notification_trigger
  AFTER INSERT ON rides
  FOR EACH ROW
  EXECUTE FUNCTION notify_nearby_drivers();
