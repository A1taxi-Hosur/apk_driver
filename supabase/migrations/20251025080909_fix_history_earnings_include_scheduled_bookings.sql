/*
  # Fix History and Earnings to Include Scheduled Booking Completions

  ## Problem
  The history and earnings tabs only show data from the `rides` table.
  Scheduled booking completions (rental, outstation, airport) are stored in separate tables
  and are not being included in the driver's history or earnings.

  ## Solution
  Update the RPC functions to UNION data from:
  1. Regular rides (rides table)
  2. Rental trip completions
  3. Outstation trip completions  
  4. Airport trip completions

  ## Changes
  1. Drop and recreate `get_driver_ride_history` - Include all completion sources
  2. Drop and recreate `get_driver_completed_rides` - Include all completion sources
  3. Drop and recreate `get_driver_earnings_with_commission` - Include all completion sources

  ## Impact
  Drivers will now see their scheduled booking completions in:
  - History tab
  - Earnings tab
  - Statistics and totals
*/

-- =====================================================
-- 1. Fix get_driver_ride_history to include scheduled bookings
-- =====================================================

DROP FUNCTION IF EXISTS get_driver_ride_history(uuid, integer);

CREATE OR REPLACE FUNCTION get_driver_ride_history(
  p_driver_id uuid,
  p_limit integer DEFAULT 100
)
RETURNS TABLE(
  id uuid,
  ride_code text,
  pickup_address text,
  destination_address text,
  pickup_landmark text,
  destination_landmark text,
  fare_amount numeric,
  distance_km numeric,
  duration_minutes integer,
  status text,
  payment_method text,
  payment_status text,
  rating integer,
  feedback text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  booking_type text,
  vehicle_type text,
  customer_full_name text,
  customer_phone text
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  
  -- Regular rides
  SELECT 
    r.id,
    r.ride_code,
    r.pickup_address,
    r.destination_address,
    r.pickup_landmark,
    r.destination_landmark,
    r.fare_amount,
    r.distance_km,
    r.duration_minutes,
    r.status,
    r.payment_method,
    r.payment_status,
    r.rating,
    r.feedback,
    r.created_at,
    r.updated_at,
    r.booking_type,
    r.vehicle_type,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.driver_id = p_driver_id
    AND r.status IN ('completed', 'cancelled')
  
  UNION ALL
  
  -- Rental trip completions
  SELECT 
    rtc.id,
    'RENTAL-' || SUBSTRING(rtc.id::text, 1, 8) as ride_code,
    rtc.pickup_address,
    rtc.destination_address,
    NULL::text as pickup_landmark,
    NULL::text as destination_landmark,
    rtc.total_fare as fare_amount,
    rtc.actual_distance_km as distance_km,
    rtc.actual_duration_minutes as duration_minutes,
    'completed' as status,
    'cash' as payment_method,
    'pending' as payment_status,
    NULL::integer as rating,
    NULL::text as feedback,
    rtc.created_at,
    rtc.created_at as updated_at,
    rtc.booking_type,
    rtc.vehicle_type,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone
  FROM rental_trip_completions rtc
  LEFT JOIN users u ON u.id = rtc.customer_id
  WHERE rtc.driver_id = p_driver_id
  
  UNION ALL
  
  -- Outstation trip completions
  SELECT 
    otc.id,
    'OUTSTATION-' || SUBSTRING(otc.id::text, 1, 8) as ride_code,
    otc.pickup_address,
    otc.destination_address,
    NULL::text as pickup_landmark,
    NULL::text as destination_landmark,
    otc.total_fare as fare_amount,
    otc.actual_distance_km as distance_km,
    otc.actual_duration_minutes as duration_minutes,
    'completed' as status,
    'cash' as payment_method,
    'pending' as payment_status,
    NULL::integer as rating,
    NULL::text as feedback,
    otc.created_at,
    otc.created_at as updated_at,
    otc.booking_type,
    otc.vehicle_type,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone
  FROM outstation_trip_completions otc
  LEFT JOIN users u ON u.id = otc.customer_id
  WHERE otc.driver_id = p_driver_id
  
  UNION ALL
  
  -- Airport trip completions
  SELECT 
    atc.id,
    'AIRPORT-' || SUBSTRING(atc.id::text, 1, 8) as ride_code,
    atc.pickup_address,
    atc.destination_address,
    NULL::text as pickup_landmark,
    NULL::text as destination_landmark,
    atc.total_fare as fare_amount,
    atc.actual_distance_km as distance_km,
    atc.actual_duration_minutes as duration_minutes,
    'completed' as status,
    'cash' as payment_method,
    'pending' as payment_status,
    NULL::integer as rating,
    NULL::text as feedback,
    atc.created_at,
    atc.created_at as updated_at,
    atc.booking_type,
    atc.vehicle_type,
    u.full_name as customer_full_name,
    u.phone_number as customer_phone
  FROM airport_trip_completions atc
  LEFT JOIN users u ON u.id = atc.customer_id
  WHERE atc.driver_id = p_driver_id
  
  ORDER BY created_at DESC
  LIMIT p_limit;
END;
$$;

-- =====================================================
-- 2. Fix get_driver_completed_rides (for earnings page)
-- =====================================================

DROP FUNCTION IF EXISTS get_driver_completed_rides(uuid);

CREATE OR REPLACE FUNCTION get_driver_completed_rides(p_driver_id uuid)
RETURNS TABLE(
  id uuid,
  ride_code text,
  fare_amount numeric,
  payment_method text,
  payment_status text,
  distance_km numeric,
  duration_minutes integer,
  created_at timestamp with time zone,
  pickup_address text,
  destination_address text,
  rating integer,
  customer_full_name text
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  
  -- Regular rides
  SELECT 
    r.id,
    r.ride_code,
    r.fare_amount,
    r.payment_method,
    r.payment_status,
    r.distance_km,
    r.duration_minutes,
    r.created_at,
    r.pickup_address,
    r.destination_address,
    r.rating,
    u.full_name as customer_full_name
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  WHERE r.driver_id = p_driver_id
    AND r.status = 'completed'
    AND r.fare_amount IS NOT NULL
  
  UNION ALL
  
  -- Rental trip completions
  SELECT 
    rtc.id,
    'RENTAL-' || SUBSTRING(rtc.id::text, 1, 8) as ride_code,
    rtc.total_fare as fare_amount,
    'cash' as payment_method,
    'pending' as payment_status,
    rtc.actual_distance_km as distance_km,
    rtc.actual_duration_minutes as duration_minutes,
    rtc.created_at,
    rtc.pickup_address,
    rtc.destination_address,
    NULL::integer as rating,
    u.full_name as customer_full_name
  FROM rental_trip_completions rtc
  LEFT JOIN users u ON u.id = rtc.customer_id
  WHERE rtc.driver_id = p_driver_id
  
  UNION ALL
  
  -- Outstation trip completions
  SELECT 
    otc.id,
    'OUTSTATION-' || SUBSTRING(otc.id::text, 1, 8) as ride_code,
    otc.total_fare as fare_amount,
    'cash' as payment_method,
    'pending' as payment_status,
    otc.actual_distance_km as distance_km,
    otc.actual_duration_minutes as duration_minutes,
    otc.created_at,
    otc.pickup_address,
    otc.destination_address,
    NULL::integer as rating,
    u.full_name as customer_full_name
  FROM outstation_trip_completions otc
  LEFT JOIN users u ON u.id = otc.customer_id
  WHERE otc.driver_id = p_driver_id
  
  UNION ALL
  
  -- Airport trip completions
  SELECT 
    atc.id,
    'AIRPORT-' || SUBSTRING(atc.id::text, 1, 8) as ride_code,
    atc.total_fare as fare_amount,
    'cash' as payment_method,
    'pending' as payment_status,
    atc.actual_distance_km as distance_km,
    atc.actual_duration_minutes as duration_minutes,
    atc.created_at,
    atc.pickup_address,
    atc.destination_address,
    NULL::integer as rating,
    u.full_name as customer_full_name
  FROM airport_trip_completions atc
  LEFT JOIN users u ON u.id = atc.customer_id
  WHERE atc.driver_id = p_driver_id
  
  ORDER BY created_at DESC;
END;
$$;

-- =====================================================
-- 3. Fix get_driver_earnings_with_commission
-- =====================================================

DROP FUNCTION IF EXISTS get_driver_earnings_with_commission(uuid);

CREATE OR REPLACE FUNCTION get_driver_earnings_with_commission(p_driver_id uuid)
RETURNS TABLE(
  id uuid,
  ride_code text,
  fare_amount numeric,
  payment_method text,
  payment_status text,
  distance_km numeric,
  duration_minutes integer,
  created_at timestamp with time zone,
  pickup_address text,
  destination_address text,
  rating integer,
  customer_full_name text,
  platform_fee numeric,
  gst_on_platform_fee numeric,
  gst_on_charges numeric,
  ride_charges numeric,
  commission_11_percent numeric,
  you_owe_total numeric
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  
  -- Regular rides
  SELECT 
    r.id,
    r.ride_code,
    r.fare_amount,
    r.payment_method,
    r.payment_status,
    r.distance_km,
    r.duration_minutes,
    r.created_at,
    r.pickup_address,
    r.destination_address,
    r.rating,
    u.full_name as customer_full_name,
    COALESCE(pf.platform_fee_flat, 0) as platform_fee,
    ROUND(COALESCE(pf.platform_fee_flat, 0) * 0.18, 2) as gst_on_platform_fee,
    ROUND((r.fare_amount - COALESCE(pf.platform_fee_flat, 0)) * 0.05, 2) as gst_on_charges,
    (r.fare_amount - COALESCE(pf.platform_fee_flat, 0)) as ride_charges,
    ROUND((r.fare_amount - COALESCE(pf.platform_fee_flat, 0)) * 0.11, 2) as commission_11_percent,
    ROUND(
      COALESCE(pf.platform_fee_flat, 0) + 
      (COALESCE(pf.platform_fee_flat, 0) * 0.18) + 
      ((r.fare_amount - COALESCE(pf.platform_fee_flat, 0)) * 0.05) +
      ((r.fare_amount - COALESCE(pf.platform_fee_flat, 0)) * 0.11),
      2
    ) as you_owe_total
  FROM rides r
  LEFT JOIN users u ON u.id = r.customer_id
  LEFT JOIN platform_fees pf ON pf.booking_type = r.booking_type AND pf.vehicle_type = r.vehicle_type
  WHERE r.driver_id = p_driver_id
    AND r.status = 'completed'
    AND r.fare_amount IS NOT NULL
  
  UNION ALL
  
  -- Rental trip completions
  SELECT 
    rtc.id,
    'RENTAL-' || SUBSTRING(rtc.id::text, 1, 8) as ride_code,
    rtc.total_fare as fare_amount,
    'cash' as payment_method,
    'pending' as payment_status,
    rtc.actual_distance_km as distance_km,
    rtc.actual_duration_minutes as duration_minutes,
    rtc.created_at,
    rtc.pickup_address,
    rtc.destination_address,
    NULL::integer as rating,
    u.full_name as customer_full_name,
    rtc.platform_fee,
    rtc.gst_on_platform_fee,
    rtc.gst_on_charges,
    (rtc.total_fare - rtc.platform_fee) as ride_charges,
    ROUND((rtc.total_fare - rtc.platform_fee) * 0.11, 2) as commission_11_percent,
    ROUND(
      rtc.platform_fee + 
      rtc.gst_on_platform_fee + 
      rtc.gst_on_charges +
      ((rtc.total_fare - rtc.platform_fee) * 0.11),
      2
    ) as you_owe_total
  FROM rental_trip_completions rtc
  LEFT JOIN users u ON u.id = rtc.customer_id
  WHERE rtc.driver_id = p_driver_id
  
  UNION ALL
  
  -- Outstation trip completions
  SELECT 
    otc.id,
    'OUTSTATION-' || SUBSTRING(otc.id::text, 1, 8) as ride_code,
    otc.total_fare as fare_amount,
    'cash' as payment_method,
    'pending' as payment_status,
    otc.actual_distance_km as distance_km,
    otc.actual_duration_minutes as duration_minutes,
    otc.created_at,
    otc.pickup_address,
    otc.destination_address,
    NULL::integer as rating,
    u.full_name as customer_full_name,
    otc.platform_fee,
    otc.gst_on_platform_fee,
    otc.gst_on_charges,
    (otc.total_fare - otc.platform_fee) as ride_charges,
    ROUND((otc.total_fare - otc.platform_fee) * 0.11, 2) as commission_11_percent,
    ROUND(
      otc.platform_fee + 
      otc.gst_on_platform_fee + 
      otc.gst_on_charges +
      ((otc.total_fare - otc.platform_fee) * 0.11),
      2
    ) as you_owe_total
  FROM outstation_trip_completions otc
  LEFT JOIN users u ON u.id = otc.customer_id
  WHERE otc.driver_id = p_driver_id
  
  UNION ALL
  
  -- Airport trip completions
  SELECT 
    atc.id,
    'AIRPORT-' || SUBSTRING(atc.id::text, 1, 8) as ride_code,
    atc.total_fare as fare_amount,
    'cash' as payment_method,
    'pending' as payment_status,
    atc.actual_distance_km as distance_km,
    atc.actual_duration_minutes as duration_minutes,
    atc.created_at,
    atc.pickup_address,
    atc.destination_address,
    NULL::integer as rating,
    u.full_name as customer_full_name,
    atc.platform_fee,
    atc.gst_on_platform_fee,
    atc.gst_on_charges,
    (atc.total_fare - atc.platform_fee) as ride_charges,
    ROUND((atc.total_fare - atc.platform_fee) * 0.11, 2) as commission_11_percent,
    ROUND(
      atc.platform_fee + 
      atc.gst_on_platform_fee + 
      atc.gst_on_charges +
      ((atc.total_fare - atc.platform_fee) * 0.11),
      2
    ) as you_owe_total
  FROM airport_trip_completions atc
  LEFT JOIN users u ON u.id = atc.customer_id
  WHERE atc.driver_id = p_driver_id
  
  ORDER BY created_at DESC;
END;
$$;
