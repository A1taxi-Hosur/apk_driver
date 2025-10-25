# Rental and Airport Trip Completion Fix

## Problem

Rental and airport trip completions were **NOT being saved** to the database after trip completion, while outstation completions were working fine.

### What Was Happening:

- ✅ **Outstation trips** → Saved to `outstation_trip_completions` ✅
- ❌ **Rental trips** → NOT saved to `rental_trip_completions` ❌
- ❌ **Airport trips** → NOT saved to `airport_trip_completions` ❌

---

## Root Cause

### The Issue:

Migration `20251024122833_add_specialized_completion_insert_functions.sql` **overwrote** the RPC functions with incorrect parameter names.

**Before (Correct - from migration 20251022151500):**
```sql
CREATE OR REPLACE FUNCTION insert_rental_trip_completion(
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,  -- ✅ Supported
  p_driver_id UUID,
  ...
)
```

**After (Broken - from migration 20251024122833):**
```sql
CREATE OR REPLACE FUNCTION insert_rental_trip_completion(
  p_ride_id UUID,  -- ❌ Only this one
  p_driver_id UUID,
  ...
  -- p_scheduled_booking_id MISSING!
)
```

### Why It Failed:

The client code in `FareCalculationService.ts` calls the RPC with:

```typescript
await supabase.rpc('insert_rental_trip_completion', {
  p_scheduled_booking_id: bookingId,  // ← This parameter doesn't exist!
  p_driver_id: driverDetails.driver_id,
  ...
});
```

**Result:** PostgreSQL rejected the call because `p_scheduled_booking_id` parameter doesn't exist in the function.

---

## The Fix

Created migration: `fix_rental_airport_completion_functions.sql`

### Changes:

1. ✅ **Restored `p_scheduled_booking_id` parameter** to `insert_rental_trip_completion()`
2. ✅ **Restored `p_scheduled_booking_id` parameter** to `insert_airport_trip_completion()`
3. ✅ **Kept `p_ride_id` parameter** for backward compatibility
4. ✅ **Added validation** - at least one ID must be provided

### Updated Function Signatures:

**Rental:**
```sql
CREATE OR REPLACE FUNCTION insert_rental_trip_completion(
  -- Required parameters first
  p_driver_id UUID,
  p_customer_id UUID,
  p_booking_type TEXT,
  p_vehicle_type TEXT,
  p_pickup_address TEXT,
  p_rental_hours INT,
  p_actual_hours_used NUMERIC,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,

  -- Optional parameters with defaults
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,  -- ✅ RESTORED
  p_trip_type TEXT DEFAULT NULL,
  ...
)
```

**Airport:**
```sql
CREATE OR REPLACE FUNCTION insert_airport_trip_completion(
  -- Required parameters first
  p_driver_id UUID,
  p_customer_id UUID,
  p_booking_type TEXT,
  p_vehicle_type TEXT,
  p_pickup_address TEXT,
  p_destination_address TEXT,
  p_actual_distance_km NUMERIC,
  p_actual_duration_minutes INT,
  p_base_fare NUMERIC,
  p_distance_fare NUMERIC,
  p_platform_fee NUMERIC,
  p_gst_on_charges NUMERIC,
  p_gst_on_platform_fee NUMERIC,
  p_total_fare NUMERIC,
  p_fare_details JSONB,

  -- Optional parameters with defaults
  p_ride_id UUID DEFAULT NULL,
  p_scheduled_booking_id UUID DEFAULT NULL,  -- ✅ RESTORED
  p_trip_type TEXT DEFAULT NULL,
  ...
)
```

---

## How It Works Now

### Trip Completion Flow:

```
1. Driver completes rental/airport trip
   ↓
2. App calculates fare breakdown
   ↓
3. App calls FareCalculationService.storeScheduledBookingFareBreakdown()
   ↓
4. Service calls insert_rental_trip_completion() or insert_airport_trip_completion()
   ↓
5. RPC function accepts p_scheduled_booking_id ✅
   ↓
6. Data inserted into rental_trip_completions or airport_trip_completions ✅
   ↓
7. Returns success with completion_id ✅
```

### Example Call (Rental):

```typescript
const rentalResult = await supabase.rpc('insert_rental_trip_completion', {
  p_scheduled_booking_id: 'abc-123',  // ✅ Now accepted
  p_driver_id: 'driver-uuid',
  p_customer_id: 'customer-uuid',
  p_booking_type: 'rental',
  p_vehicle_type: 'sedan',
  p_pickup_address: '123 Main St',
  p_rental_hours: 4,
  p_actual_hours_used: 4.5,
  p_actual_distance_km: 50,
  p_actual_duration_minutes: 270,
  p_base_fare: 500,
  p_total_fare: 650,
  p_fare_details: { /* breakdown */ },
  // ... other parameters
});

// Returns: { success: true, completion_id: 'xyz-789' }
```

---

## Verification

### Check Rental Completions:

```sql
SELECT
  id,
  scheduled_booking_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  rental_hours,
  actual_hours_used,
  actual_distance_km,
  total_fare,
  completed_at
FROM rental_trip_completions
ORDER BY completed_at DESC
LIMIT 10;
```

### Check Airport Completions:

```sql
SELECT
  id,
  scheduled_booking_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  actual_distance_km,
  airport_surcharge,
  total_fare,
  completed_at
FROM airport_trip_completions
ORDER BY completed_at DESC
LIMIT 10;
```

### Check All Completion Types:

```sql
-- Rental completions
SELECT 'rental' as type, COUNT(*) as count FROM rental_trip_completions
UNION ALL
-- Outstation completions
SELECT 'outstation', COUNT(*) FROM outstation_trip_completions
UNION ALL
-- Airport completions
SELECT 'airport', COUNT(*) FROM airport_trip_completions;
```

---

## Testing

### Test Rental Completion:

1. Open driver app
2. Accept a rental booking
3. Start trip (verify OTP)
4. Drive for rental duration
5. Complete trip
6. **Expected:**
   - ✅ Trip marked as completed
   - ✅ Fare breakdown displayed
   - ✅ Data saved to `rental_trip_completions` table
   - ✅ Can download PDF bill

### Test Airport Completion:

1. Open driver app
2. Accept an airport booking
3. Start trip (verify OTP)
4. Drive to airport/destination
5. Complete trip
6. **Expected:**
   - ✅ Trip marked as completed
   - ✅ Fare breakdown displayed (including airport surcharge)
   - ✅ Data saved to `airport_trip_completions` table
   - ✅ Can download PDF bill

---

## Migration Details

**File:** `supabase/migrations/fix_rental_airport_completion_functions.sql`

**Applied:** ✅ Successfully applied

**Changes:**
- Updated `insert_rental_trip_completion()` function
- Updated `insert_airport_trip_completion()` function
- Both functions now accept `p_scheduled_booking_id` parameter
- Validation ensures at least one ID (ride_id or scheduled_booking_id) is provided

---

## Why This Happened

### Timeline:

1. **Oct 22** - Created functions with correct parameters (including `p_scheduled_booking_id`)
2. **Oct 24** - Overwrote functions with simplified parameters (removed `p_scheduled_booking_id`)
3. **Now** - Restored correct parameters

### Lesson Learned:

When updating RPC functions, always check:
- ✅ What parameters are client code using?
- ✅ Are we maintaining backward compatibility?
- ✅ Test with actual function calls, not just migration syntax

---

## Impact

### Before Fix:

- ❌ Rental trip completions: **0 records**
- ❌ Airport trip completions: **0 records**
- ✅ Outstation trip completions: Working (had correct parameters)

### After Fix:

- ✅ Rental trip completions: **Will save correctly**
- ✅ Airport trip completions: **Will save correctly**
- ✅ Outstation trip completions: **Still working**

### Driver Benefits:

- ✅ Complete trip history across all booking types
- ✅ Accurate earnings calculation
- ✅ PDF bill generation for all trip types
- ✅ Proper fare breakdown storage

### Customer Benefits:

- ✅ Can view rental trip history
- ✅ Can view airport trip history
- ✅ Download PDF bills for all trips
- ✅ Rate and review all completed trips

---

## Status

**Problem:** Rental and airport completions not saving to database

**Root Cause:** RPC functions missing `p_scheduled_booking_id` parameter

**Solution:** Restored parameter in both functions

**Status:** ✅ **FIXED**

**Testing:** Ready for testing with real trips

---

## Summary

The issue was a simple parameter mismatch:
- Client code was calling with `p_scheduled_booking_id`
- Database functions only accepted `p_ride_id`
- PostgreSQL rejected the calls silently

**Fix:** Restored the missing parameter to both functions.

**Result:** Rental and airport trip completions will now save correctly! 🎉
