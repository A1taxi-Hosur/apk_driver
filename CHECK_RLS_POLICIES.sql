-- ============================================================================
-- Check RLS policies on specialized completion tables
-- ============================================================================

-- 1. Check if RLS is enabled
SELECT 
  schemaname,
  tablename,
  rowsecurity as rls_enabled
FROM pg_tables
WHERE tablename IN (
  'outstation_trip_completions',
  'rental_trip_completions',
  'airport_trip_completions'
);

-- 2. Check existing policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename IN (
  'outstation_trip_completions',
  'rental_trip_completions',
  'airport_trip_completions'
);

-- 3. Try to query with service role bypass (if using Supabase dashboard, this should work)
SELECT COUNT(*) as total_completions
FROM outstation_trip_completions;

-- 4. Check the actual table structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'outstation_trip_completions'
ORDER BY ordinal_position;
