# Test Scheduled Booking Completion

## Test Booking Created

I've created a complete test scheduled booking with GPS tracking data that you can use to test the completion storage fix.

---

## Test Booking Details

**Booking ID:** `bf8f4d39-5393-4896-9849-13d123d257fc`

### Booking Information:
- **Type:** Outstation
- **Trip Type:** One Way
- **Vehicle:** Sedan
- **Status:** In Progress
- **Estimated Fare:** ₹2,500
- **Driver:** Kiran (driver_id: `6f55e87b-6558-48df-af8c-d69190918b32`)
- **Customer ID:** `6e103630-e11b-4295-a942-49b629cbdeae`

### Route:
- **Pickup:** Hosur Bus Stand, Hosur (12.7385, 77.8253)
- **Destination:** Bangalore City Railway Station (12.9716, 77.5946)
- **Straight-line Distance:** ~43 km
- **GPS-tracked Distance:** ~47 km (with 5 GPS points)

### GPS Tracking Data:
✅ 5 GPS points already inserted covering the entire journey from Hosur to Bangalore

### OTP Codes:
- **Pickup OTP:** 1234
- **Drop OTP:** 5678

---

## How to Test

### Method 1: Using Driver App (Recommended)

1. **Open the driver app** (logged in as Kiran)

2. **Navigate to Scheduled tab**

3. **You should see the test booking:**
   - Status: In Progress
   - Route: Hosur → Bangalore
   - Estimated: ₹2,500

4. **Complete the trip:**
   - Tap "Complete Trip" button
   - The app will:
     - Calculate distance from GPS points (~47 km)
     - Double it for one-way outstation (94 km total charged)
     - Calculate fare based on actual distance
     - Store completion in `outstation_trip_completions`

5. **Check for Success:**
   - ✅ Should NOT show any error alert
   - ✅ Should show "Trip completed successfully"
   - ✅ Should clear the current booking
   - ✅ Driver status should return to "online"

6. **Verify in Database** (see SQL queries below)

---

### Method 2: Direct SQL Testing (For Debugging)

If you want to test the RPC function directly without using the app:

```sql
-- Complete the trip manually using RPC
SELECT insert_outstation_trip_completion(
  p_scheduled_booking_id => 'bf8f4d39-5393-4896-9849-13d123d257fc'::uuid,
  p_driver_id => '6f55e87b-6558-48df-af8c-d69190918b32'::uuid,
  p_customer_id => '6e103630-e11b-4295-a942-49b629cbdeae'::uuid,
  p_booking_type => 'outstation',
  p_vehicle_type => 'sedan',
  p_trip_type => 'one_way',
  p_pickup_address => 'Hosur Bus Stand, Hosur',
  p_destination_address => 'Bangalore City Railway Station',
  p_actual_distance_km => 94.0,  -- GPS distance doubled for one-way
  p_actual_duration_minutes => 65,
  p_actual_days => 1,
  p_base_fare => 1500,
  p_distance_fare => 800,
  p_per_day_charges => 0,
  p_driver_allowance => 300,
  p_extra_km_charges => 0,
  p_toll_charges => 0,
  p_platform_fee => 100,
  p_gst_on_charges => 150,
  p_gst_on_platform_fee => 18,
  p_total_fare => 2868,
  p_fare_details => '{"base_fare":1500,"distance_fare":800,"driver_allowance":300,"platform_fee":100,"gst_on_charges":150,"gst_on_platform_fee":18,"total_fare":2868}'::jsonb,
  p_scheduled_time => NOW() - INTERVAL '1 hour',
  p_completed_at => NOW(),
  p_driver_name => 'Kiran',
  p_driver_phone => '1234567890',
  p_driver_rating => 4.5,
  p_vehicle_make => 'Honda',
  p_vehicle_model => 'City',
  p_vehicle_color => 'White',
  p_vehicle_license_plate => 'KA01AB1234'
);
```

Expected Result:
```json
{"success": true, "completion_id": "[some-uuid]"}
```

---

## Verification Queries

### 1. Check if Booking is Still In Progress
```sql
SELECT
  id,
  booking_type,
  trip_type,
  status,
  estimated_fare,
  assigned_driver_id
FROM scheduled_bookings
WHERE id = 'bf8f4d39-5393-4896-9849-13d123d257fc';
```

Expected: `status = 'in_progress'` (before completion)

---

### 2. Check GPS Tracking Data
```sql
SELECT
  id,
  latitude,
  longitude,
  speed,
  heading,
  recorded_at
FROM trip_location_history
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc'
ORDER BY recorded_at ASC;
```

Expected: 5 GPS points from Hosur to Bangalore

---

### 3. Check if Completion Was Stored
```sql
SELECT
  id,
  scheduled_booking_id,
  driver_id,
  customer_id,
  booking_type,
  vehicle_type,
  trip_type,
  actual_distance_km,
  actual_duration_minutes,
  base_fare,
  distance_fare,
  driver_allowance,
  total_fare,
  completed_at,
  created_at
FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';
```

**Before Completion:** Should return 0 rows
**After Completion:** Should return 1 row with all fare details

---

### 4. Check Fare Breakdown Details
```sql
SELECT
  id,
  total_fare,
  fare_details
FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';
```

Expected: `fare_details` should contain complete JSON with all breakdown

---

### 5. Verify Booking Status Changed
```sql
SELECT
  status,
  updated_at
FROM scheduled_bookings
WHERE id = 'bf8f4d39-5393-4896-9849-13d123d257fc';
```

Expected: `status = 'completed'` (after completion)

---

## Expected Results

### What Should Happen:

1. ✅ Driver can complete the trip in the app
2. ✅ Fare is calculated based on GPS distance (47 km × 2 = 94 km)
3. ✅ Completion record is stored in `outstation_trip_completions`
4. ✅ All fare breakdown fields are populated
5. ✅ `fare_details` JSON contains complete breakdown
6. ✅ Driver details (name, phone, rating, vehicle) are stored
7. ✅ Booking status changes to 'completed'
8. ✅ No error alerts shown to driver

### What Should NOT Happen:

❌ No "Warning: Data Not Saved" alert
❌ No completion record missing from database
❌ No NULL values in required fields
❌ No silent failures

---

## Testing the Fix

### Scenario 1: Normal Completion (Should Work)
1. Complete the test booking using the driver app
2. Check the verification queries
3. Confirm completion record exists with all data

### Scenario 2: With NULL trip_type (Edge Case)
```sql
-- Update the booking to have NULL trip_type
UPDATE scheduled_bookings
SET trip_type = NULL
WHERE id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- Now try to complete it
-- Should still work because of the fallback: `booking.trip_type || 'one_way'`
```

### Scenario 3: With Missing Fare Fields (Edge Case)
The code now has `|| 0` fallbacks for all fare fields, so even if the fare calculation returns incomplete data, it should still save.

---

## Cleanup (After Testing)

Once you've verified everything works, clean up the test data:

```sql
-- Delete the completion record (if created)
DELETE FROM outstation_trip_completions
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- Delete GPS tracking data
DELETE FROM trip_location_history
WHERE scheduled_booking_id = 'bf8f4d39-5393-4896-9849-13d123d257fc';

-- Delete the test booking
DELETE FROM scheduled_bookings
WHERE id = 'bf8f4d39-5393-4896-9849-13d123d257fc';
```

---

## Troubleshooting

### If Completion Fails:

1. **Check App Logs:**
   - Look for "📝 Storing outstation trip completion..."
   - Check for error messages
   - Verify RPC result

2. **Check Database Logs:**
   - Look in `debug_logs` table for any errors
   - Check if GPS distance calculation succeeded

3. **Verify RPC Function:**
   ```sql
   -- Test the RPC directly
   SELECT insert_outstation_trip_completion(...);
   ```

4. **Check Driver Status:**
   ```sql
   SELECT id, status
   FROM drivers
   WHERE id = '6f55e87b-6558-48df-af8c-d69190918b32';
   ```

### Common Issues:

- **"GPS tracking failed"**: Check if GPS points exist in `trip_location_history`
- **"Driver not found"**: Verify driver_id is correct
- **"Booking not found"**: Check if booking still exists and status is correct
- **Alert shown**: The fix is working! Check the error message for details

---

## Success Criteria

✅ Test booking completes without errors
✅ Completion record exists in `outstation_trip_completions`
✅ All fare fields are populated (not NULL)
✅ `fare_details` JSON is complete
✅ Driver details are stored correctly
✅ Booking status is 'completed'
✅ No error alerts shown to driver

If all criteria pass, the fix is working correctly! 🎉

---

## Quick Reference

**Test Booking ID:** `bf8f4d39-5393-4896-9849-13d123d257fc`
**Driver:** Kiran (login with kiran@gmail.com)
**Status:** In Progress → Ready to Complete
**GPS Points:** 5 points already tracked
**Expected Fare:** ~₹2,500-2,900 (depending on calculation)

Now go ahead and complete this test booking in the driver app!
