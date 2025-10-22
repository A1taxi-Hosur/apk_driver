/*
  # Fix trip_type to only apply to outstation bookings

  1. Schema Changes
    - Remove DEFAULT 'round_trip' from trip_type column
    - Allow NULL values for trip_type
    - Update constraint to allow NULL
    - Set trip_type to NULL for rental and airport bookings
    - Keep trip_type as 'round_trip' only for existing outstation bookings

  2. Logic
    - trip_type should ONLY be set for outstation bookings
    - Rental and Airport bookings should have trip_type = NULL
    - One-way vs Round-trip concept only applies to outstation trips
*/

-- Drop existing constraint
ALTER TABLE scheduled_bookings DROP CONSTRAINT IF EXISTS scheduled_bookings_trip_type_check;

-- Modify column to allow NULL and remove default
ALTER TABLE scheduled_bookings ALTER COLUMN trip_type DROP DEFAULT;

-- Add new constraint allowing NULL
ALTER TABLE scheduled_bookings 
ADD CONSTRAINT scheduled_bookings_trip_type_check 
CHECK (trip_type IS NULL OR trip_type IN ('one_way', 'round_trip'));

-- Set trip_type to NULL for non-outstation bookings
UPDATE scheduled_bookings 
SET trip_type = NULL 
WHERE booking_type IN ('rental', 'airport');

-- Ensure outstation bookings have a trip_type (default to round_trip if NULL)
UPDATE scheduled_bookings 
SET trip_type = 'round_trip' 
WHERE booking_type = 'outstation' AND trip_type IS NULL;

-- Update comment to be more explicit
COMMENT ON COLUMN scheduled_bookings.trip_type IS 'Type of outstation trip: one_way (driver returns empty) or round_trip (driver brings customer back). MUST be NULL for rental and airport bookings. ONLY applicable for outstation bookings.';
