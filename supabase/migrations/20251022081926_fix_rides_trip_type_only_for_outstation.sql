/*
  # Fix trip_type in rides table to only apply to outstation bookings

  1. Schema Changes
    - Remove DEFAULT 'round_trip' from trip_type column in rides table
    - Allow NULL values for trip_type
    - Update constraint to allow NULL
    - Set trip_type to NULL for regular, rental, and airport bookings
    - Keep trip_type as 'round_trip' only for existing outstation bookings

  2. Logic
    - trip_type should ONLY be set for outstation bookings
    - Regular, Rental, and Airport bookings should have trip_type = NULL
    - One-way vs Round-trip concept only applies to outstation trips
*/

-- Drop existing constraint
ALTER TABLE rides DROP CONSTRAINT IF EXISTS rides_trip_type_check;

-- Modify column to allow NULL and remove default
ALTER TABLE rides ALTER COLUMN trip_type DROP DEFAULT;

-- Add new constraint allowing NULL
ALTER TABLE rides 
ADD CONSTRAINT rides_trip_type_check 
CHECK (trip_type IS NULL OR trip_type IN ('one_way', 'round_trip'));

-- Set trip_type to NULL for non-outstation bookings
UPDATE rides 
SET trip_type = NULL 
WHERE booking_type IN ('regular', 'rental', 'airport');

-- Ensure outstation bookings have a trip_type (default to round_trip if NULL)
UPDATE rides 
SET trip_type = 'round_trip' 
WHERE booking_type = 'outstation' AND trip_type IS NULL;

-- Update comment to be more explicit
COMMENT ON COLUMN rides.trip_type IS 'Type of outstation trip: one_way (driver returns empty) or round_trip (driver brings customer back). MUST be NULL for regular, rental, and airport bookings. ONLY applicable for outstation bookings.';
