/*
  # Add deadhead_charges to specialized completion tables
  
  1. Changes
    - Add deadhead_charges column to rental_trip_completions
    - Add deadhead_charges column to outstation_trip_completions
    - Add deadhead_charges column to airport_trip_completions
  
  2. Notes
    - Deadhead charges apply when driver ends trip outside their zone
    - This should be tracked for all trip types, not just regular rides
    - Default value is 0 for existing records
*/

-- Add deadhead_charges to rental_trip_completions
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'rental_trip_completions' AND column_name = 'deadhead_charges'
  ) THEN
    ALTER TABLE rental_trip_completions 
    ADD COLUMN deadhead_charges NUMERIC NOT NULL DEFAULT 0;
  END IF;
END $$;

-- Add deadhead_charges to outstation_trip_completions
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'outstation_trip_completions' AND column_name = 'deadhead_charges'
  ) THEN
    ALTER TABLE outstation_trip_completions 
    ADD COLUMN deadhead_charges NUMERIC NOT NULL DEFAULT 0;
  END IF;
END $$;

-- Add deadhead_charges to airport_trip_completions
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'airport_trip_completions' AND column_name = 'deadhead_charges'
  ) THEN
    ALTER TABLE airport_trip_completions 
    ADD COLUMN deadhead_charges NUMERIC NOT NULL DEFAULT 0;
  END IF;
END $$;