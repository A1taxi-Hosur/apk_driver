/*
  # Add promo fields to all completion tables
  
  1. Changes
    - Add promo_code, promo_discount, original_fare to trip_completions
    - Add promo_code, promo_discount, original_fare to rental_trip_completions
    - Add promo_code, promo_discount, original_fare to outstation_trip_completions
    - Add promo_code, promo_discount, original_fare to airport_trip_completions
    
  2. Purpose
    - Store promo information in completion records
    - Allow historical tracking of promo code usage
    - Enable proper fare breakdown in trip history
*/

-- Add promo fields to trip_completions (regular rides)
ALTER TABLE trip_completions 
ADD COLUMN IF NOT EXISTS promo_code TEXT,
ADD COLUMN IF NOT EXISTS promo_discount NUMERIC(10,2),
ADD COLUMN IF NOT EXISTS original_fare NUMERIC(10,2);

-- Add promo fields to rental_trip_completions
ALTER TABLE rental_trip_completions 
ADD COLUMN IF NOT EXISTS promo_code TEXT,
ADD COLUMN IF NOT EXISTS promo_discount NUMERIC(10,2),
ADD COLUMN IF NOT EXISTS original_fare NUMERIC(10,2);

-- Add promo fields to outstation_trip_completions
ALTER TABLE outstation_trip_completions 
ADD COLUMN IF NOT EXISTS promo_code TEXT,
ADD COLUMN IF NOT EXISTS promo_discount NUMERIC(10,2),
ADD COLUMN IF NOT EXISTS original_fare NUMERIC(10,2);

-- Add promo fields to airport_trip_completions
ALTER TABLE airport_trip_completions 
ADD COLUMN IF NOT EXISTS promo_code TEXT,
ADD COLUMN IF NOT EXISTS promo_discount NUMERIC(10,2),
ADD COLUMN IF NOT EXISTS original_fare NUMERIC(10,2);