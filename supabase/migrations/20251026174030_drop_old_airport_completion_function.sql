/*
  # Drop old insert_airport_trip_completion function version
  
  1. Issue
    - Two versions of insert_airport_trip_completion exist
    - Old version (OID 40400) doesn't have promo fields
    - New version (OID 40498) has promo fields at the end
    
  2. Fix
    - Drop the old version by its exact signature
    - Keep only the version with promo fields
*/

-- Drop the old version without promo fields
DROP FUNCTION IF EXISTS insert_airport_trip_completion(
  UUID, UUID, TEXT, TEXT, TEXT, TEXT, NUMERIC, INT, 
  NUMERIC, NUMERIC, NUMERIC, NUMERIC, NUMERIC, NUMERIC, 
  JSONB, UUID, UUID, TEXT, TIMESTAMPTZ, NUMERIC, 
  NUMERIC, TIMESTAMPTZ, TEXT, TEXT, NUMERIC, UUID, 
  TEXT, TEXT, TEXT, TEXT
);