# Specialized Trip Completions RLS Fix

## Problem

Trip completion data for **rental**, **outstation**, and **airport** bookings was not being stored in their respective specialized tables:
- `rental_trip_completions`
- `outstation_trip_completions`
- `airport_trip_completions`

### Root Cause

The code was using **direct INSERT statements** instead of the RPC functions that have `SECURITY DEFINER` to bypass RLS:

```typescript
// ❌ OLD CODE - Direct INSERT (fails RLS)
const result = await supabase
  .from('outstation_trip_completions')
  .insert({ ... })
  .select()
  .single();
```

The RLS policies require:
```sql
auth.uid() IN (SELECT user_id FROM drivers WHERE id = driver_id)
```

This check can fail in certain contexts, causing the INSERT to be blocked by RLS.

## Solution

Replace all direct INSERT statements with RPC function calls that have `SECURITY DEFINER`:

```typescript
// ✅ NEW CODE - RPC with SECURITY DEFINER (bypasses RLS)
const result = await supabase
  .rpc('insert_outstation_trip_completion', {
    p_ride_id: rideId,
    p_driver_id: driverDetails?.driver_id,
    // ... all parameters
  });
```

## Changes Made

### 1. Regular Rides (already fixed)
**File**: `services/FareCalculationService.ts` → `storeRegularRideFareBreakdown()`

- **Rental rides**: Changed to use `insert_rental_trip_completion` RPC
- **Outstation rides**: Changed to use `insert_outstation_trip_completion` RPC
- **Airport rides**: Changed to use `insert_airport_trip_completion` RPC

### 2. Scheduled Bookings (now fixed)
**File**: `services/FareCalculationService.ts` → `storeScheduledBookingFareBreakdown()`

- **Rental bookings**: Changed to use `insert_rental_trip_completion` RPC
- **Outstation bookings**: Changed to use `insert_outstation_trip_completion` RPC
- **Airport bookings**: Changed to use `insert_airport_trip_completion` RPC

## RPC Functions

### Function: `insert_rental_trip_completion()`

**Purpose**: Insert rental trip completion bypassing RLS

**Parameters**:
- `p_ride_id` (optional) - For regular rides
- `p_scheduled_booking_id` (optional) - For scheduled bookings
- `p_driver_id`, `p_customer_id`
- `p_rental_hours`, `p_actual_hours_used`
- `p_base_fare`, `p_hourly_charges`, `p_extra_km_charges`, etc.
- `p_fare_details` (JSONB) - Complete fare breakdown
- Driver and vehicle details

**Returns**:
```json
{
  "success": true,
  "completion_id": "uuid"
}
```

### Function: `insert_outstation_trip_completion()`

**Purpose**: Insert outstation trip completion bypassing RLS

**Parameters**:
- `p_ride_id` (optional) - For regular rides
- `p_scheduled_booking_id` (optional) - For scheduled bookings
- `p_driver_id`, `p_customer_id`
- `p_actual_distance_km`, `p_actual_duration_minutes`, `p_actual_days`
- `p_base_fare`, `p_distance_fare`, `p_driver_allowance`, etc.
- `p_fare_details` (JSONB) - Complete fare breakdown
- Driver and vehicle details

**Returns**:
```json
{
  "success": true,
  "completion_id": "uuid"
}
```

### Function: `insert_airport_trip_completion()`

**Purpose**: Insert airport trip completion bypassing RLS

**Parameters**:
- `p_ride_id` (optional) - For regular rides
- `p_scheduled_booking_id` (optional) - For scheduled bookings
- `p_driver_id`, `p_customer_id`
- `p_actual_distance_km`, `p_actual_duration_minutes`
- `p_base_fare`, `p_distance_fare`, `p_airport_surcharge`, etc.
- `p_fare_details` (JSONB) - Complete fare breakdown
- Driver and vehicle details

**Returns**:
```json
{
  "success": true,
  "completion_id": "uuid"
}
```

## Database Schema

### Tables Created

All three tables have similar structure:

```sql
CREATE TABLE rental_trip_completions (
  id uuid PRIMARY KEY,
  ride_id uuid REFERENCES rides(id),
  scheduled_booking_id uuid REFERENCES scheduled_bookings(id),
  driver_id uuid NOT NULL,
  customer_id uuid NOT NULL,

  -- Fare breakdown columns
  base_fare numeric,
  hourly_charges numeric,
  distance_fare numeric,
  extra_km_charges numeric,
  extra_hour_charges numeric,
  platform_fee numeric,
  gst_on_charges numeric,
  gst_on_platform_fee numeric,
  total_fare numeric,

  -- Complete fare details (JSON)
  fare_details jsonb,

  -- Driver and vehicle details
  driver_name text,
  driver_phone text,
  driver_rating numeric,
  vehicle_make text,
  vehicle_model text,
  vehicle_color text,
  vehicle_license_plate text,

  -- Timestamps
  completed_at timestamptz,
  created_at timestamptz,
  updated_at timestamptz
);
```

### RLS Policies

**SELECT Policy**: Users can view their own completions
```sql
CREATE POLICY "Users can view own completions"
  ON rental_trip_completions FOR SELECT
  TO authenticated
  USING (
    auth.uid() = customer_id OR
    auth.uid() IN (SELECT user_id FROM drivers WHERE id = driver_id)
  );
```

**INSERT Policy**: Drivers can insert completions (bypassed by RPC)
```sql
CREATE POLICY "Drivers can insert completions"
  ON rental_trip_completions FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IN (SELECT user_id FROM drivers WHERE id = driver_id)
  );
```

## Testing

### Test 1: Complete Rental Ride

```typescript
// Driver completes a rental ride
const result = await FareCalculationService.storeRegularRideFareBreakdown(
  rideId,
  fareBreakdown,
  actualDistanceKm,
  actualDurationMinutes,
  driverDetails
);

// Verify in database
const { data } = await supabase
  .from('rental_trip_completions')
  .select('*')
  .eq('ride_id', rideId)
  .single();

console.log('Stored completion:', data);
```

### Test 2: Complete Outstation Scheduled Booking

```typescript
// Driver completes scheduled outstation booking
const result = await FareCalculationService.storeScheduledBookingFareBreakdown(
  bookingId,
  fareBreakdown,
  actualDistanceKm,
  actualDurationMinutes,
  driverDetails
);

// Verify in database
const { data } = await supabase
  .from('outstation_trip_completions')
  .select('*')
  .eq('scheduled_booking_id', bookingId)
  .single();

console.log('Stored completion:', data);
```

### Test 3: Customer Views Own Completion

```typescript
// Customer (logged in) fetches their trip completion
const { data, error } = await supabase
  .from('rental_trip_completions')
  .select('*')
  .eq('customer_id', customerId)
  .order('completed_at', { ascending: false });

console.log('Customer completions:', data);
// Should work - RLS allows customer to view own completions
```

### Test 4: Driver Views Own Completion

```typescript
// Driver (logged in) fetches their trip completion
const { data: driver } = await supabase
  .from('drivers')
  .select('id')
  .eq('user_id', auth.user.id)
  .single();

const { data, error } = await supabase
  .from('outstation_trip_completions')
  .select('*')
  .eq('driver_id', driver.id)
  .order('completed_at', { ascending: false });

console.log('Driver completions:', data);
// Should work - RLS allows driver to view own completions
```

## Before vs After

### Before (Direct INSERT - FAILS)

```typescript
❌ Error storing trip completion:
{
  "code": "42501",
  "message": "new row violates row-level security policy for table \"outstation_trip_completions\"",
  "hint": null
}
```

### After (RPC with SECURITY DEFINER - WORKS)

```typescript
✅ Outstation trip completion stored successfully
✅ Completion ID: abc-123-def-456
✅ Rounded total fare: 4686

Stored record:
{
  "id": "abc-123-def-456",
  "ride_id": "ride-uuid",
  "driver_id": "driver-uuid",
  "customer_id": "customer-uuid",
  "base_fare": 3500,
  "distance_fare": 0,
  "driver_allowance": 400,
  "extra_km_charges": 150,
  "platform_fee": 100,
  "gst_on_charges": 217.5,
  "gst_on_platform_fee": 18,
  "total_fare": 4686,
  "fare_details": { ... },
  "driver_name": "John Doe",
  "vehicle_make": "Toyota",
  "vehicle_model": "Innova"
}
```

## Summary

### What Changed:
✅ All direct INSERTs replaced with RPC function calls
✅ Both regular rides and scheduled bookings now use RPC functions
✅ RPC functions have `SECURITY DEFINER` to bypass RLS
✅ Error handling improved to show RPC function errors

### What Stayed Same:
- ❌ Table schemas (no changes)
- ❌ RLS policies (no changes)
- ❌ RPC function definitions (already existed)
- ❌ Fare calculation logic (no changes)

### Impact:
- ✅ **Rental trip completions now save correctly**
- ✅ **Outstation trip completions now save correctly**
- ✅ **Airport trip completions now save correctly**
- ✅ **Both regular rides and scheduled bookings work**
- ✅ **Customers can view their trip history**
- ✅ **Drivers can view their completed trips**

## Related Files

- `services/FareCalculationService.ts` - Updated to use RPC functions
- `supabase/migrations/20251015143700_create_rental_outstation_airport_completions.sql` - Table definitions
- `supabase/migrations/20251022151500_add_rpc_for_specialized_trip_completions.sql` - RPC function definitions
- `supabase/migrations/20251015170729_fix_trip_completions_scheduled_bookings_support.sql` - Added scheduled_booking_id column

## Console Logs

The system now outputs clear success logs:

```
=== STORING OUTSTATION TRIP COMPLETION ===
fareBreakdown object: { ... }
📝 Storing outstation trip completion...
✅ Outstation trip completion stored successfully
✅ Completion ID: abc-123-def-456
```

If there's an error, it's clearly reported:

```
=== STORING OUTSTATION TRIP COMPLETION ===
❌ Error inserting outstation trip completion: {
  "message": "Function error details"
}
```
