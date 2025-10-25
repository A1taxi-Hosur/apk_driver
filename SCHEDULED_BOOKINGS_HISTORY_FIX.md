# Scheduled Bookings History & Earnings Fix

## ✅ Issue Fixed

**Problem:** Scheduled booking completions (rental, outstation, airport) were not showing in the History tab or Earnings tab.

**Root Cause:** The RPC functions only queried the `rides` table, but scheduled booking completions are stored in separate tables:
- `rental_trip_completions`
- `outstation_trip_completions`
- `airport_trip_completions`

**Solution:** Updated 3 RPC functions to UNION data from all completion sources.

---

## 🔧 Changes Made

### Migration Files Created:
1. `fix_history_earnings_include_scheduled_bookings.sql`
2. `fix_earnings_function_platform_fees_join.sql`

### Functions Updated:

#### 1. `get_driver_ride_history(uuid, integer)`
**Before:** Only queried `rides` table
**After:** UNION of:
- Regular rides (rides table)
- Rental completions
- Outstation completions
- Airport completions

**Used by:** History tab (`app/(tabs)/history.tsx`)

#### 2. `get_driver_completed_rides(uuid)`
**Before:** Only queried `rides` table
**After:** UNION of all completion sources

**Used by:** Earnings page internally

#### 3. `get_driver_earnings_with_commission(uuid)`
**Before:** Only queried `rides` table
**After:** UNION of all completion sources with commission breakdown

**Used by:** Earnings tab (`app/(tabs)/earnings.tsx`)

---

## 📊 What's Now Included

### History Tab Will Show:
- ✅ Regular rides (local bookings)
- ✅ Rental trip completions
- ✅ Outstation trip completions (one-way & round-trip)
- ✅ Airport trip completions

### Earnings Tab Will Show:
- ✅ All completed rides from all sources
- ✅ Total earnings including scheduled bookings
- ✅ Platform fees and commission breakdown
- ✅ "You Owe" totals including scheduled bookings
- ✅ Distance and duration statistics
- ✅ Today/Week/Month aggregations

### Data Fields Included:
```
- Ride Code: "OUTSTATION-abc123", "RENTAL-xyz789", "AIRPORT-def456"
- Fare Amount: Total fare from completion
- Distance: Actual GPS-tracked distance
- Duration: Actual trip duration
- Platform Fee: From completion record
- GST: Calculated from completion
- Commission: 11% of (fare - platform fee)
- Payment Method: Defaults to "cash" for scheduled bookings
- Payment Status: Defaults to "pending" for scheduled bookings
- Customer Name: From users table
```

---

## 🧪 Verification

### Test Query - History Tab:
```sql
SELECT
  ride_code,
  booking_type,
  vehicle_type,
  ROUND(fare_amount::numeric, 2) as fare,
  ROUND(distance_km::numeric, 2) as distance,
  status,
  customer_full_name,
  created_at
FROM get_driver_ride_history('YOUR_DRIVER_ID'::uuid, 20)
ORDER BY created_at DESC;
```

**Expected:** Shows both regular rides AND scheduled completions

### Test Query - Earnings Tab:
```sql
SELECT
  ride_code,
  ROUND(fare_amount::numeric, 2) as fare,
  ROUND(distance_km::numeric, 2) as distance,
  ROUND(platform_fee::numeric, 2) as platform_fee,
  ROUND(you_owe_total::numeric, 2) as you_owe,
  customer_full_name,
  created_at
FROM get_driver_earnings_with_commission('YOUR_DRIVER_ID'::uuid)
ORDER BY created_at DESC
LIMIT 10;
```

**Expected:** Shows earnings from all sources with commission breakdown

---

## 📱 How to Test in App

### Test History Tab:

1. Login as driver (kiran@gmail.com)
2. Navigate to **History** tab
3. You should now see:
   - Regular local rides
   - Completed scheduled bookings with codes like:
     - "OUTSTATION-10128c57"
     - "RENTAL-abc12345"
     - "AIRPORT-xyz98765"
   - Each with pickup/destination addresses
   - Fare amounts
   - Distance traveled
   - Customer names

### Test Earnings Tab:

1. Login as driver (kiran@gmail.com)
2. Navigate to **Earnings** tab
3. Check the following:

   **Today's Stats:**
   - Total Rides count (should include scheduled completions)
   - Total Earnings (should include scheduled fares)
   - You Owe (platform fees + GST + commission)
   - Distance (total from all sources)

   **Week/Month Stats:**
   - Should aggregate both regular and scheduled bookings

   **Recent Transactions:**
   - Should show mix of regular and scheduled rides
   - Each with ride code, fare, distance
   - Commission breakdown visible

### Filter Test:
1. In History tab, try different filters:
   - All: Shows everything
   - Completed: Shows completed rides + all scheduled completions
   - Cancelled: Shows only cancelled regular rides

---

## 🔍 Existing Test Data

### Driver: Kiran (kiran@gmail.com)
**Driver ID:** `6f55e87b-6558-48df-af8c-d69190918b32`

**Has one outstation completion:**
- **ID:** `10128c57-...`
- **Type:** Outstation One-Way
- **Route:** Hosur Bus Stand → Bangalore Airport
- **Distance:** 53.15 km
- **Fare:** ₹1,167
- **Platform Fee:** ₹10
- **You Owe:** ₹194.07
- **Date:** 2025-10-24

This should now appear in:
- ✅ History tab
- ✅ Earnings tab
- ✅ Today's statistics
- ✅ Week statistics
- ✅ Month statistics

---

## 💡 Important Notes

### Ride Codes:
Scheduled bookings have prefixed ride codes:
- `RENTAL-abc12345` - Rental completions
- `OUTSTATION-xyz98765` - Outstation completions
- `AIRPORT-def45678` - Airport completions

Regular rides keep their original `ride_code` from the rides table.

### Payment Defaults:
Scheduled bookings default to:
- **Payment Method:** `cash`
- **Payment Status:** `pending`

This can be updated in the future to track actual payment methods.

### Ratings:
- Regular rides: Show customer ratings if provided
- Scheduled bookings: Show NULL (no rating system yet)

### Customer Names:
- Pulled from `users` table via `customer_id`
- Empty if user data not found
- Can be enhanced to show customer contact info

---

## 🚀 No App Changes Needed

**The fix is entirely backend-based!**

The app already calls these RPC functions:
- `get_driver_ride_history()` in History tab
- `get_driver_earnings_with_commission()` in Earnings tab

Since we updated the functions to return more data (from all sources), the app will automatically show the scheduled bookings **without any code changes**.

Just rebuild the app if you want, but even the current APK will start showing scheduled bookings because the backend is now returning them.

---

## 📈 Expected Results

### Before Fix:
```
History Tab:
- 0 regular rides (if no local rides completed)
- 0 scheduled bookings (not included)
Total: 0 rides

Earnings Tab:
- ₹0 total earnings
- 0 rides today
- No transactions
```

### After Fix:
```
History Tab:
- All regular rides
- All scheduled booking completions
- Total: All rides combined

Earnings Tab:
- Total earnings from all sources
- Ride counts include scheduled bookings
- Transactions show all completion types
- Statistics aggregate everything
```

---

## ✅ Verification Checklist

After deploying this fix:

- [ ] Login as kiran@gmail.com
- [ ] Go to History tab
- [ ] See outstation completion "OUTSTATION-10128c57"
- [ ] Shows ₹1,167 fare, 53.15 km
- [ ] Go to Earnings tab
- [ ] Today's stats show 1 ride, ₹1,167 earned
- [ ] You Owe shows ₹194.07
- [ ] Recent transactions show the outstation ride
- [ ] Week and month stats are correct

---

## 🐛 If Still Not Showing

If scheduled bookings still don't appear:

### 1. Check Database:
```sql
-- Verify completions exist
SELECT
  'rental' as type, COUNT(*) as count
FROM rental_trip_completions
WHERE driver_id = '6f55e87b-6558-48df-af8c-d69190918b32'
UNION ALL
SELECT
  'outstation', COUNT(*)
FROM outstation_trip_completions
WHERE driver_id = '6f55e87b-6558-48df-af8c-d69190918b32'
UNION ALL
SELECT
  'airport', COUNT(*)
FROM airport_trip_completions
WHERE driver_id = '6f55e87b-6558-48df-af8c-d69190918b32';
```

Should show at least 1 outstation completion.

### 2. Check RPC Permissions:
```sql
-- Verify function is SECURITY DEFINER
SELECT
  proname,
  prosecdef
FROM pg_proc
WHERE proname IN (
  'get_driver_ride_history',
  'get_driver_completed_rides',
  'get_driver_earnings_with_commission'
);
```

All should have `prosecdef = true` (SECURITY DEFINER enabled).

### 3. Test Directly:
```sql
-- Call function directly
SELECT * FROM get_driver_ride_history(
  '6f55e87b-6558-48df-af8c-d69190918b32'::uuid,
  10
);
```

Should return at least the outstation completion.

---

## 📝 Summary

**Fixed:** 3 RPC functions to include scheduled booking completions
**Impact:** History and Earnings tabs now show complete driver data
**Deployable:** Database migrations applied, ready to use
**App Changes:** None required (backend fix only)
**Status:** ✅ COMPLETE - Ready for testing

Test with driver **kiran@gmail.com** who has one outstation completion.
