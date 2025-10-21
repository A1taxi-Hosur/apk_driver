/*
  # Fix Location Freshness Interval to 30 Minutes

  This migration fixes a discrepancy in the notify_nearby_drivers function
  where the location freshness check was set to 5 minutes, which is too strict.

  ## Issue

  The current function uses a 5-minute location freshness check:
  `AND ll.updated_at > NOW() - INTERVAL '5 minutes'`

  This means only drivers whose location was updated in the last 5 minutes
  receive notifications. In practice:
  - 21 online/busy drivers with vehicles
  - Only 1 has location updated within 5 minutes
  - 20 drivers are excluded due to stale location data

  ## Solution

  Change the interval to 30 minutes to match the original design:
  `AND ll.updated_at > NOW() - INTERVAL '30 minutes'`

  This allows drivers who are actively online but may not have moved recently
  to still receive ride notifications.

  ## Reasoning

  - Drivers often wait at fixed locations (home, stand, parking)
  - Location doesn't need updating if driver hasn't moved
  - 5 minutes is too strict for real-world usage
  - 30 minutes is reasonable for active drivers
  - Maintains the original design intent from Oct 17 migration
*/

CREATE OR REPLACE FUNCTION notify_nearby_drivers() 
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  nearby_driver RECORD;
  distance_km NUMERIC;
  max_distance NUMERIC := 5.0;
  customer_name TEXT;
  customer_phone TEXT;
BEGIN
  IF NEW.status = 'requested' AND OLD IS NULL THEN
    
    -- Only notify drivers for regular rides (rental/outstation/airport are admin-assigned)
    IF NEW.booking_type != 'regular' THEN
      RETURN NEW;
    END IF;
    
    -- Get customer info
    SELECT full_name, phone_number INTO customer_name, customer_phone
    FROM users
    WHERE id = NEW.customer_id;
    
    -- Find online/busy drivers within proximity with matching vehicle type
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
      WHERE d.status IN ('online', 'busy')
        AND d.is_verified = true
        AND ll.updated_at > NOW() - INTERVAL '30 minutes'  -- Changed from 5 to 30 minutes
        AND (
          -- Exact match: driver has exact vehicle type requested
          v.vehicle_type = NEW.vehicle_type
          OR
          -- AC variant match: driver with AC vehicle can take non-AC requests
          -- Example: sedan_ac driver can accept sedan requests
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
          NEW.expires_at
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
