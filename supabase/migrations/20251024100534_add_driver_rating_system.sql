/*
  # Driver Rating System

  1. Functions
    - `update_driver_rating_from_ride` - Recalculates driver's average rating after a ride is rated
    - `submit_ride_rating` - Customer submits rating for completed ride
    - `get_driver_average_rating` - Gets driver's current average rating

  2. Triggers
    - Automatically update driver's average rating when a ride is rated
    - Update total_rides count

  3. Security
    - Only customers can rate their own completed rides
    - Ratings can only be submitted once per ride
    - Rating must be between 1-5

  ## How It Works:
  
  1. Customer completes a ride
  2. Customer submits rating (1-5 stars) via `submit_ride_rating` RPC
  3. Rating is saved to `rides.rating` column
  4. Trigger automatically recalculates driver's average rating
  5. Driver's `rating` and `total_rides` in `drivers` table are updated
*/

-- Function to recalculate driver's average rating
CREATE OR REPLACE FUNCTION update_driver_rating_from_ride()
RETURNS TRIGGER AS $$
DECLARE
  v_driver_id UUID;
  v_avg_rating NUMERIC;
  v_total_rated_rides INTEGER;
BEGIN
  -- Get driver_id from the ride
  SELECT driver_id INTO v_driver_id
  FROM rides
  WHERE id = NEW.id;

  -- Calculate average rating from all rated rides for this driver
  SELECT 
    COALESCE(AVG(rating), 5.0),
    COUNT(*)
  INTO v_avg_rating, v_total_rated_rides
  FROM rides
  WHERE driver_id = v_driver_id
    AND rating IS NOT NULL
    AND status = 'completed';

  -- Update driver's rating and total_rides
  UPDATE drivers
  SET 
    rating = ROUND(v_avg_rating, 1),
    total_rides = v_total_rated_rides,
    updated_at = NOW()
  WHERE id = v_driver_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to update driver rating when ride is rated
DROP TRIGGER IF EXISTS on_ride_rated ON rides;
CREATE TRIGGER on_ride_rated
  AFTER UPDATE OF rating ON rides
  FOR EACH ROW
  WHEN (NEW.rating IS NOT NULL AND OLD.rating IS NULL)
  EXECUTE FUNCTION update_driver_rating_from_ride();

-- RPC function for customer to submit ride rating
CREATE OR REPLACE FUNCTION submit_ride_rating(
  p_ride_id UUID,
  p_rating INTEGER,
  p_feedback TEXT DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
  v_ride RECORD;
  v_customer_id UUID;
BEGIN
  -- Get current user id (customer)
  v_customer_id := auth.uid();

  -- Validate rating
  IF p_rating < 1 OR p_rating > 5 THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Rating must be between 1 and 5'
    );
  END IF;

  -- Get ride details and verify ownership
  SELECT * INTO v_ride
  FROM rides
  WHERE id = p_ride_id
    AND customer_id = v_customer_id
    AND status = 'completed';

  IF NOT FOUND THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Ride not found or not authorized'
    );
  END IF;

  -- Check if already rated
  IF v_ride.rating IS NOT NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Ride has already been rated'
    );
  END IF;

  -- Update ride with rating and feedback
  UPDATE rides
  SET 
    rating = p_rating,
    customer_feedback = p_feedback,
    updated_at = NOW()
  WHERE id = p_ride_id;

  -- The trigger will automatically update the driver's average rating

  RETURN json_build_object(
    'success', true,
    'message', 'Rating submitted successfully',
    'rating', p_rating
  );

EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object(
      'success', false,
      'error', SQLERRM
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RPC function to get driver's current average rating and total rides
CREATE OR REPLACE FUNCTION get_driver_average_rating(p_driver_id UUID)
RETURNS JSON AS $$
DECLARE
  v_driver RECORD;
  v_rating_breakdown JSON;
BEGIN
  -- Get driver's current rating and total rides
  SELECT 
    rating,
    total_rides
  INTO v_driver
  FROM drivers
  WHERE id = p_driver_id;

  IF NOT FOUND THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Driver not found'
    );
  END IF;

  -- Get rating breakdown (how many 1-star, 2-star, etc.)
  SELECT json_build_object(
    '5_star', COUNT(*) FILTER (WHERE rating = 5),
    '4_star', COUNT(*) FILTER (WHERE rating = 4),
    '3_star', COUNT(*) FILTER (WHERE rating = 3),
    '2_star', COUNT(*) FILTER (WHERE rating = 2),
    '1_star', COUNT(*) FILTER (WHERE rating = 1)
  ) INTO v_rating_breakdown
  FROM rides
  WHERE driver_id = p_driver_id
    AND rating IS NOT NULL
    AND status = 'completed';

  RETURN json_build_object(
    'success', true,
    'average_rating', v_driver.rating,
    'total_rides', v_driver.total_rides,
    'breakdown', v_rating_breakdown
  );

EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object(
      'success', false,
      'error', SQLERRM
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add customer_feedback column to rides table if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'rides' AND column_name = 'customer_feedback'
  ) THEN
    ALTER TABLE rides ADD COLUMN customer_feedback TEXT;
  END IF;
END $$;

-- Add index for faster rating queries
CREATE INDEX IF NOT EXISTS idx_rides_driver_rating 
  ON rides(driver_id, rating) 
  WHERE rating IS NOT NULL AND status = 'completed';
