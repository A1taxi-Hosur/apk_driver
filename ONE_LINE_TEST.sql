-- Simple one-line test with ride_id provided
SELECT insert_outstation_trip_completion(
  gen_random_uuid(),
  gen_random_uuid(),
  'outstation',
  'sedan',
  'one_way',
  'Test Pickup',
  'Test Destination',
  50.0,
  120,
  1,
  3500.0,
  4213.0,
  '{"test": true}'::jsonb,
  gen_random_uuid()
);
