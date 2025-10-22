/*
  # Add trip_type to scheduled_bookings table

  1. Schema Changes
    - Add `trip_type` column to scheduled_bookings table
    - Values: 'one_way' or 'round_trip'
    - Defaults to 'round_trip' for backward compatibility
    - Only applicable for outstation bookings

  2. Notes
    - One-way trips: Customer books only pickup-to-destination (driver returns empty)
    - Round-trip trips: Customer books pickup-to-destination and return journey
    - GPS distance calculation logic:
      * One-way: GPS distance × 2 (driver must return empty)
      * Round-trip: GPS distance as-is (tracks full journey)
*/

-- Add trip_type column to scheduled_bookings table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'scheduled_bookings' AND column_name = 'trip_type'
  ) THEN
    ALTER TABLE scheduled_bookings 
    ADD COLUMN trip_type TEXT DEFAULT 'round_trip' 
    CHECK (trip_type IN ('one_way', 'round_trip'));
  END IF;
END $$;

-- Add comment explaining the column
COMMENT ON COLUMN scheduled_bookings.trip_type IS 'Type of outstation trip: one_way (driver returns empty) or round_trip (driver brings customer back). Only applicable for outstation bookings.';
