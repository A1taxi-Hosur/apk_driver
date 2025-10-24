# RLS Issue Fixed - Build New APK

## 🐛 Issue Identified

When you tried to complete the test booking (`6381523c-fe59-4e15-bb2f-1cd8d51fbf2d`), you got this error:

```
Warning: Data Not Saved

Trip was marked as completed, but fare details could not be saved to the database.
Error: Booking not found.
Please contact support with booking ID: 6381523c-fe59-4e15-bb2f-1cd8d51fbf2d
```

### Root Cause

The error occurred in `FareCalculationService.ts` at line 794-802:

```typescript
// Get booking details
const { data: booking, error: bookingError } = await supabase
  .from('scheduled_bookings')
  .select('*')
  .eq('id', bookingId)
  .single();

if (bookingError || !booking) {
  console.error('Error fetching booking:', bookingError);
  return { success: false, error: 'Booking not found' };  // ❌ THIS ERROR
}
```

**The Problem:**
- After the booking was marked as `completed`, the app tried to fetch it again from the database
- RLS (Row Level Security) policies check if the booking is still "assigned" to the driver
- Since it's already `completed`, RLS blocked the query
- Result: "Booking not found" error

---

## ✅ Fix Applied

### Changed Files:

#### 1. `services/FareCalculationService.ts`

**Before:**
```typescript
static async storeScheduledBookingFareBreakdown(
  bookingId: string,
  fareBreakdown: FareBreakdown,
  actualDistanceKm: number,
  actualDurationMinutes: number,
  driverDetails: { ... }
): Promise<{ success: boolean; error?: string }> {
  // Tried to fetch booking from database ❌
  const { data: booking } = await supabase
    .from('scheduled_bookings')
    .select('*')
    .eq('id', bookingId)
    .single();
```

**After:**
```typescript
static async storeScheduledBookingFareBreakdown(
  bookingId: string,
  fareBreakdown: FareBreakdown,
  actualDistanceKm: number,
  actualDurationMinutes: number,
  driverDetails: { ... },
  bookingDetails?: {  // ✅ NEW PARAMETER
    booking_type: string;
    vehicle_type: string;
    trip_type: string | null;
    pickup_address: string;
    destination_address: string;
    rental_hours?: number;
    scheduled_time: string | null;
  }
): Promise<{ success: boolean; error?: string; fareBreakdown?: any }> {
  // Use booking details passed from caller ✅
  if (!bookingDetails) {
    return { success: false, error: 'Booking details required' };
  }

  const booking = {
    id: bookingId,
    ...bookingDetails
  };
  // No database fetch needed! ✅
```

**Key Changes:**
1. ✅ Added optional `bookingDetails` parameter
2. ✅ Use booking details from caller (which has RLS access)
3. ✅ Avoid fetching booking after completion (RLS issue)
4. ✅ Return `fareBreakdown` in success response

---

#### 2. `app/(tabs)/scheduled.tsx`

**Added booking details to function call:**

```typescript
const completionResult = await FareCalculationService.storeScheduledBookingFareBreakdown(
  currentBooking.id,
  fareBreakdown,
  actualDistanceKm,
  actualDurationMinutes,
  {
    driver_id: currentBooking.assigned_driver_id!,
    customer_id: currentBooking.customer_id,
    // ... driver details
  },
  {  // ✅ NEW: Pass booking details
    booking_type: currentBooking.booking_type,
    vehicle_type: currentBooking.vehicle_type,
    trip_type: currentBooking.trip_type || null,
    pickup_address: currentBooking.pickup_address,
    destination_address: currentBooking.destination_address,
    rental_hours: currentBooking.rental_hours,
    scheduled_time: currentBooking.scheduled_time
  }
);
```

**Also added `trip_type` to TypeScript type:**

```typescript
type ScheduledBooking = {
  id: string;
  customer_id: string;
  booking_type: 'outstation' | 'rental' | 'airport';
  trip_type?: 'one_way' | 'round_trip' | null;  // ✅ ADDED
  vehicle_type: string;
  // ... rest of fields
};
```

---

## 🔍 Why This Fix Works

### Before (Broken Flow):
```
1. User taps "Complete Trip" button
2. App marks booking as completed in database ✅
3. App calls storeScheduledBookingFareBreakdown()
4. Service tries to fetch booking from database
5. RLS blocks query (booking is completed) ❌
6. Error: "Booking not found"
7. User sees error alert ❌
```

### After (Fixed Flow):
```
1. User taps "Complete Trip" button
2. App already has booking details in memory ✅
3. App calls storeScheduledBookingFareBreakdown() WITH booking details
4. Service uses booking details from parameter (no fetch needed) ✅
5. Service stores completion record successfully ✅
6. No error, completion stored ✅
```

---

## 🚀 Next Steps

### Step 1: Build New APK
```bash
eas build --platform android --profile preview
```

Or use your existing build process.

### Step 2: Test with Existing Booking

The test booking still exists and is ready:

**Booking ID:** `6381523c-fe59-4e15-bb2f-1cd8d51fbf2d`
- **Type:** Outstation Round Trip
- **Status:** Completed (but no completion record yet)
- **GPS Points:** 8 tracked
- **Distance:** 44.63 km

You can either:
- **Option A:** Reset the booking status to `in_progress` and complete it again
- **Option B:** Create a new test booking

### Step 3: Reset the Test Booking (Optional)

If you want to reuse the same booking:

```sql
-- Reset booking status
UPDATE scheduled_bookings
SET status = 'in_progress',
    updated_at = NOW()
WHERE id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';

-- Verify reset
SELECT id, status, booking_type, trip_type
FROM scheduled_bookings
WHERE id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

---

## ✅ Expected Result After Fix

When you complete the trip with the new APK:

### You Should See:
- ✅ "Trip completed successfully" message
- ✅ NO "Warning: Data Not Saved" alert
- ✅ Booking disappears from list
- ✅ Driver status returns to "online"

### Database Should Have:
```sql
-- Check completion was stored
SELECT
  '✅ SUCCESS - Completion stored correctly' as result,
  booking_type,
  trip_type,
  ROUND(actual_distance_km::numeric, 2) as distance_km,
  ROUND(total_fare::numeric, 2) as fare,
  driver_name,
  vehicle_make,
  vehicle_model
FROM outstation_trip_completions
WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

Expected: 1 row with all details

---

## 🧪 Testing Checklist

After building the new APK:

- [ ] Install new APK on device
- [ ] Login as driver (kiran@gmail.com)
- [ ] Go to Scheduled tab
- [ ] See the test booking (or create new one)
- [ ] Complete the trip
- [ ] **NO error alert should appear**
- [ ] Check database for completion record
- [ ] Verify all fare details are stored
- [ ] Verify trip_type is 'round_trip'
- [ ] Verify distance is ~44.63 km

---

## 📊 Verification Query

After completion, run this to verify success:

```sql
SELECT
  CASE
    WHEN sb.status = 'completed' AND otc.id IS NOT NULL
      THEN '✅ SUCCESS - Fix is working!'
    WHEN sb.status = 'completed' AND otc.id IS NULL
      THEN '❌ STILL FAILING - Completion not stored'
    ELSE '⏳ PENDING - Booking not yet completed'
  END as test_result,
  sb.status as booking_status,
  otc.id as completion_id,
  otc.trip_type,
  ROUND(otc.actual_distance_km::numeric, 2) as distance_km,
  ROUND(otc.total_fare::numeric, 2) as total_fare,
  otc.driver_name,
  otc.vehicle_make || ' ' || otc.vehicle_model as vehicle,
  otc.created_at as completion_time
FROM scheduled_bookings sb
LEFT JOIN outstation_trip_completions otc ON otc.scheduled_booking_id = sb.id
WHERE sb.id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

---

## 🎯 Summary

**Issue:** RLS blocked booking fetch after completion
**Fix:** Pass booking details as parameter instead of fetching
**Status:** Code fixed, needs new APK build
**Test:** Complete booking in new APK, should work without errors

The fix is simple and elegant - we already have the booking details in memory, so we just pass them along instead of trying to fetch them again and hitting RLS restrictions.

Build the new APK and test! 🚀
