/*
  # Add driver profile statistics RPC functions
  
  1. New Functions
    - `get_driver_completed_rides_count` - Returns real-time count of completed rides
    - `get_driver_average_rating` - Returns real-time average rating from customer ratings
    - `get_driver_profile_stats` - Combined stats for efficiency
  
  2. Purpose
    - Replace fake/stale data in drivers table with real-time calculations
    - Get accurate ride count from trip_completions tables
    - Get accurate rating from customer ratings on completed rides
*/

-- Drop existing functions if they exist
DROP FUNCTION IF EXISTS get_driver_completed_rides_count(UUID);
DROP FUNCTION IF EXISTS get_driver_average_rating(UUID);
DROP FUNCTION IF EXISTS get_driver_profile_stats(UUID);

-- Function to get real-time count of completed rides for a driver
CREATE OR REPLACE FUNCTION get_driver_completed_rides_count(p_driver_id UUID)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_count INTEGER;
BEGIN
  -- Count all completed trips from all completion tables
  SELECT 
    COALESCE(
      (SELECT COUNT(*) FROM trip_completions WHERE driver_id = p_driver_id),
      0
    ) +
    COALESCE(
      (SELECT COUNT(*) FROM rental_trip_completions WHERE driver_id = p_driver_id),
      0
    ) +
    COALESCE(
      (SELECT COUNT(*) FROM outstation_trip_completions WHERE driver_id = p_driver_id),
      0
    ) +
    COALESCE(
      (SELECT COUNT(*) FROM airport_trip_completions WHERE driver_id = p_driver_id),
      0
    )
  INTO v_count;
  
  RETURN v_count;
END;
$$;

-- Function to get real-time average rating for a driver
CREATE OR REPLACE FUNCTION get_driver_average_rating(p_driver_id UUID)
RETURNS NUMERIC
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_avg_rating NUMERIC;
  v_total_ratings INTEGER;
BEGIN
  -- Calculate average rating from all completed rides that have ratings
  -- Rating is stored in the rides table after completion
  SELECT 
    COALESCE(AVG(rating), 0),
    COUNT(rating)
  INTO v_avg_rating, v_total_ratings
  FROM rides
  WHERE driver_id = p_driver_id
    AND status = 'completed'
    AND rating IS NOT NULL;
  
  -- If no ratings yet, return 0 instead of showing fake 5.0
  IF v_total_ratings = 0 THEN
    RETURN 0;
  END IF;
  
  -- Round to 1 decimal place
  RETURN ROUND(v_avg_rating, 1);
END;
$$;

-- Combined stats function for efficiency
CREATE OR REPLACE FUNCTION get_driver_profile_stats(p_driver_id UUID)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_completed_rides INTEGER;
  v_avg_rating NUMERIC;
  v_total_ratings INTEGER;
BEGIN
  -- Get completed rides count
  SELECT get_driver_completed_rides_count(p_driver_id) INTO v_completed_rides;
  
  -- Get rating info
  SELECT 
    COALESCE(AVG(rating), 0),
    COUNT(rating)
  INTO v_avg_rating, v_total_ratings
  FROM rides
  WHERE driver_id = p_driver_id
    AND status = 'completed'
    AND rating IS NOT NULL;
  
  -- If no ratings, return 0
  IF v_total_ratings = 0 THEN
    v_avg_rating := 0;
  ELSE
    v_avg_rating := ROUND(v_avg_rating, 1);
  END IF;
  
  RETURN json_build_object(
    'completed_rides', v_completed_rides,
    'average_rating', v_avg_rating,
    'total_ratings', v_total_ratings
  );
END;
$$;
