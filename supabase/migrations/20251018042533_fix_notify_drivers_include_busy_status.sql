/*
  # Fix notify_nearby_drivers to include busy drivers
  
  1. Changes
    - Update trigger to notify drivers with status 'online' OR 'busy'
    - This allows drivers who just completed/cancelled a ride to still receive new requests
    
  2. Reasoning
    - Drivers may briefly remain in 'busy' status between rides
    - RideRequestModal shows for both 'online' and 'busy' drivers
    - Ensures drivers don't miss ride requests due to status timing issues
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
    
    SELECT full_name, phone_number INTO customer_name, customer_phone
    FROM users
    WHERE id = NEW.customer_id;
    
    FOR nearby_driver IN
      SELECT 
        d.id as driver_id,
        d.user_id,
        ll.latitude as driver_lat,
        ll.longitude as driver_lng
      FROM drivers d
      JOIN live_locations ll ON ll.user_id = d.user_id
      WHERE d.status IN ('online', 'busy')
        AND d.is_verified = true
        AND ll.updated_at > NOW() - INTERVAL '5 minutes'
    LOOP
      distance_km := calculate_distance(
        nearby_driver.driver_lat, 
        nearby_driver.driver_lng,
        NEW.pickup_latitude, 
        NEW.pickup_longitude
      );
      
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
            'customer_phone', customer_phone
          ),
          'unread',
          NEW.expires_at
        );
      END IF;
    END LOOP;
  END IF;
  
  RETURN NEW;
END;
$$;
