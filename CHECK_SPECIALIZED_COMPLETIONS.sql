-- Check if trip completions are being saved to specialized tables

-- 1. Check rental completions
SELECT 
  'RENTAL' as table_name,
  COUNT(*) as total_records,
  MAX(created_at) as latest_completion
FROM rental_trip_completions;

-- 2. Check outstation completions  
SELECT 
  'OUTSTATION' as table_name,
  COUNT(*) as total_records,
  MAX(created_at) as latest_completion
FROM outstation_trip_completions;

-- 3. Check airport completions
SELECT 
  'AIRPORT' as table_name,
  COUNT(*) as total_records,
  MAX(created_at) as latest_completion
FROM airport_trip_completions;

-- 4. Check regular completions (for comparison)
SELECT 
  'REGULAR' as table_name,
  COUNT(*) as total_records,
  MAX(created_at) as latest_completion
FROM trip_completions;

-- 5. Show latest rental completion details (if any)
SELECT 
  'Latest Rental Completion' as info,
  ride_id,
  rental_hours,
  actual_hours_used,
  actual_distance_km,
  base_fare,
  hourly_charges,
  extra_km_charges,
  total_fare,
  created_at
FROM rental_trip_completions
ORDER BY created_at DESC
LIMIT 1;

-- 6. Show latest outstation completion details (if any)
SELECT 
  'Latest Outstation Completion' as info,
  ride_id,
  trip_type,
  actual_distance_km,
  actual_days,
  base_fare,
  distance_fare,
  driver_allowance,
  extra_km_charges,
  total_fare,
  created_at
FROM outstation_trip_completions
ORDER BY created_at DESC
LIMIT 1;

-- 7. Show latest airport completion details (if any)
SELECT 
  'Latest Airport Completion' as info,
  ride_id,
  actual_distance_km,
  base_fare,
  distance_fare,
  airport_surcharge,
  total_fare,
  created_at
FROM airport_trip_completions
ORDER BY created_at DESC
LIMIT 1;
