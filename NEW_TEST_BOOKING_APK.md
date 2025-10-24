# New Test Booking for APK Testing - Round Trip Outstation

## ✅ Test Booking Created Successfully

This is a fresh test booking to verify the completion storage fix works in your new APK build.

---

## 📋 Test Booking Details

### Booking Information
**Booking ID:** `6381523c-fe59-4e15-bb2f-1cd8d51fbf2d`

- **Type:** Outstation
- **Trip Type:** **Round Trip** (different from previous test)
- **Vehicle:** Sedan
- **Status:** In Progress (ready to complete)
- **Estimated Fare:** ₹3,500
- **Driver:** Kiran (kiran@gmail.com)
- **Customer ID:** `6e103630-e11b-4295-a942-49b629cbdeae`

### Route Details
- **Pickup:** Hosur Railway Station (12.7366, 77.8308)
- **Destination:** Electronic City, Bangalore (12.8456, 77.6603)
- **Trip Pattern:** Round Trip (Hosur → Electronic City → Hosur)
- **GPS Distance Tracked:** 44.63 km (full round trip)

### OTP Codes
- **Pickup OTP:** 1111
- **Drop OTP:** 2222

### GPS Tracking
✅ **8 GPS points** already inserted covering:
1. Start at Hosur Railway Station
2. Journey to Electronic City (2 waypoints)
3. Arrival at Electronic City
4. Waiting period (stationary)
5. Return journey to Hosur (2 waypoints)
6. Back at Hosur Railway Station

**Total GPS Distance:** ~44.63 km (round trip already completed)

---

## 🧪 Testing Instructions

### Step 1: Open the New APK
1. Install and open your newly built APK
2. Login as **kiran@gmail.com** (Kiran - driver)
3. Make sure you're logged in successfully

### Step 2: Navigate to Scheduled Tab
1. Go to the **Scheduled Bookings** tab
2. You should see the test booking:
   ```
   Booking Type: Outstation (Round Trip)
   Route: Hosur Railway Station → Electronic City
   Status: In Progress
   Estimated: ₹3,500
   ```

### Step 3: Complete the Trip
1. Tap **"Complete Trip"** button
2. The app will:
   - Calculate distance from 8 GPS points (44.63 km)
   - For round trip, it should NOT double the distance
   - Calculate fare based on actual GPS distance
   - Store completion in `outstation_trip_completions` table

### Step 4: Watch for Logs (If you have debug enabled)
Look for these console logs:
```
🚨 COMPLETING SCHEDULED TRIP
📍 Stopping GPS tracking and calculating actual distance...
📍 GPS distance result (raw): { distanceKm: 44.63, pointsUsed: 7 }
✅ GPS-tracked distance for scheduled trip: 44.63 km
📊 Final trip metrics
💾 Storing pre-calculated fare breakdown...
📝 Storing outstation trip completion...
📝 Using trip_type: round_trip
📝 RPC result: { success: true, completion_id: "..." }
✅ Outstation completion stored
✅ Pre-calculated fare breakdown stored successfully
✅ Scheduled booking completed successfully
```

### Step 5: Verify Success
**✅ EXPECTED - Should See:**
- "Trip completed successfully" message
- NO error alerts
- Booking disappears from list
- Driver status returns to "online"

**❌ FAILURE - Should NOT See:**
- "Warning: Data Not Saved" alert
- Any error messages
- Trip still showing in list

---

## 🔍 Verification Queries

### Quick Status Check
```sql
-- Check current status
SELECT
  CASE
    WHEN sb.status = 'completed' AND otc.id IS NOT NULL
      THEN '✅ SUCCESS - Completion stored correctly'
    WHEN sb.status = 'completed' AND otc.id IS NULL
      THEN '❌ FAILED - Booking completed but no completion record'
    WHEN sb.status = 'in_progress'
      THEN '⏳ PENDING - Booking not yet completed'
  END as test_result,
  sb.id as booking_id,
  sb.booking_type,
  sb.trip_type,
  sb.status as booking_status,
  otc.id as completion_id,
  ROUND(otc.total_fare::numeric, 2) as total_fare_stored,
  ROUND(otc.actual_distance_km::numeric, 2) as distance_km_stored
FROM scheduled_bookings sb
LEFT JOIN outstation_trip_completions otc
  ON otc.scheduled_booking_id = sb.id
WHERE sb.id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

### Before Completion
**Expected Result:**
```
test_result: ⏳ PENDING - Booking not yet completed
booking_status: in_progress
completion_id: null
```

### After Completion
**Expected Result:**
```
test_result: ✅ SUCCESS - Completion stored correctly
booking_status: completed
completion_id: [some UUID]
total_fare_stored: [calculated amount]
distance_km_stored: 44.63
```

---

## 📊 Detailed Verification

### 1. Check GPS Points
```sql
SELECT
  COUNT(*) as gps_points,
  MIN(recorded_at) as trip_start,
  MAX(recorded_at) as trip_end,
  EXTRACT(EPOCH FROM (MAX(recorded_at) - MIN(recorded_at))) / 60 as duration_minutes
FROM trip_location_history
WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

Expected: 8 GPS points, ~88 minutes duration

---

### 2. Check Completion Record
```sql
SELECT
  id,
  booking_type,
  trip_type,
  vehicle_type,
  ROUND(actual_distance_km::numeric, 2) as distance_km,
  actual_duration_minutes,
  ROUND(base_fare::numeric, 2) as base_fare,
  ROUND(distance_fare::numeric, 2) as distance_fare,
  ROUND(driver_allowance::numeric, 2) as driver_allowance,
  ROUND(total_fare::numeric, 2) as total_fare,
  driver_name,
  vehicle_make,
  vehicle_model,
  completed_at
FROM outstation_trip_completions
WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

Expected: 1 row with all details populated

---

### 3. Check Fare Breakdown JSON
```sql
SELECT
  fare_details->'total_fare' as total_fare,
  fare_details->'base_fare' as base_fare,
  fare_details->'distance_fare' as distance_fare,
  fare_details->'driver_allowance' as driver_allowance,
  fare_details->'platform_fee' as platform_fee,
  fare_details->'gst_on_charges' as gst_charges,
  fare_details->'details' as calculation_details
FROM outstation_trip_completions
WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

Expected: Complete JSON with all fare components

---

### 4. Verify No NULL Fields
```sql
SELECT
  CASE
    WHEN COUNT(*) = 0 THEN '✅ All fields populated correctly'
    ELSE '❌ Found NULL in critical fields'
  END as validation_result
FROM outstation_trip_completions
WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d'
  AND (
    trip_type IS NULL OR
    total_fare IS NULL OR
    fare_details IS NULL OR
    driver_name IS NULL
  );
```

Expected: "✅ All fields populated correctly"

---

## 🎯 What Makes This Test Different

### Differences from Previous Test:
1. ✅ **Round Trip** instead of One Way
2. ✅ **8 GPS points** instead of 5
3. ✅ **Full round trip** tracked (out and back)
4. ✅ **Testing the NEW APK** with fixes
5. ✅ **Fresh booking** (not previously completed)

### What the Fix Should Do:
1. ✅ **Fallback trip_type:** If NULL, defaults to 'one_way'
2. ✅ **Fallback fare values:** All fields have `|| 0` defaults
3. ✅ **Enhanced logging:** Detailed logs of booking details and RPC results
4. ✅ **User alerts:** Shows alert if storage fails
5. ✅ **Proper error handling:** Returns error details in result

---

## 🔄 Round Trip vs One Way Logic

### Round Trip (This Test):
- GPS distance: 44.63 km
- **Should NOT double** (already includes return journey)
- Distance charged: 44.63 km

### One Way (Previous Test):
- GPS distance: 47 km (one direction only)
- **Should double** (driver returns empty)
- Distance charged: 94 km

The code handles this automatically based on `trip_type`.

---

## ⚠️ Troubleshooting

### If "Warning: Data Not Saved" Alert Appears:

1. **Check the error message** - it will tell you what failed
2. **Note the booking ID** - you'll need it for debugging
3. **Take a screenshot** of the error
4. **Run verification queries** to check what was saved

### If App Crashes:
1. Check device logs
2. Look for JavaScript errors
3. Verify GPS permissions are granted
4. Check network connectivity

### If Completion Hangs:
1. GPS calculation might be taking long
2. Check if GPS points exist in database
3. Verify RPC function is accessible

---

## 📈 Success Criteria

After completing the trip, ALL of these should be TRUE:

✅ Booking status changed to 'completed'
✅ Completion record exists in `outstation_trip_completions`
✅ `trip_type` = 'round_trip'
✅ `actual_distance_km` ≈ 44.63 km
✅ All fare breakdown fields populated
✅ Driver details stored (name, phone, rating, vehicle)
✅ `fare_details` JSON is complete
✅ No NULL values in critical fields
✅ No error alerts shown to driver
✅ Driver status returned to 'online'

---

## 🧹 Cleanup (After Testing)

Once you've verified the fix works, clean up:

```sql
-- Delete completion record
DELETE FROM outstation_trip_completions
WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';

-- Delete GPS data
DELETE FROM trip_location_history
WHERE scheduled_booking_id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';

-- Delete test booking
DELETE FROM scheduled_bookings
WHERE id = '6381523c-fe59-4e15-bb2f-1cd8d51fbf2d';
```

---

## 📝 Test Report Template

After testing, report results using this format:

```
Test Booking ID: 6381523c-fe59-4e15-bb2f-1cd8d51fbf2d
APK Version: [your version]
Test Date: [date/time]

Results:
[ ] Booking appeared in app
[ ] GPS points were tracked
[ ] Completion button worked
[ ] No error alerts shown
[ ] Completion record stored in database
[ ] All fare fields populated
[ ] trip_type = 'round_trip'
[ ] Distance = ~44.63 km
[ ] Driver details stored
[ ] fare_details JSON complete

Status: PASS / FAIL
Notes: [any observations]
```

---

## 🎉 Expected Outcome

With the fixes in place:
- ✅ Trip completes successfully
- ✅ All data stored in database
- ✅ No silent failures
- ✅ Error handling works
- ✅ User is alerted if anything goes wrong

**This proves the fix is working correctly!**

---

## Quick Reference

**Booking ID:** `6381523c-fe59-4e15-bb2f-1cd8d51fbf2d`
**Driver:** Kiran (kiran@gmail.com)
**Type:** Outstation Round Trip
**Status:** In Progress (Ready to Complete)
**GPS Points:** 8 (already tracked)
**Distance:** 44.63 km
**Expected Fare:** ₹3,000-3,500

**Go ahead and complete this booking in your new APK!** 🚀
