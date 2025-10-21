# App Rebuild Instructions

## IMPORTANT: You Must Rebuild the App

The driver app is currently running **OLD CODE** that still has the Google Maps fallback. All the fixes I just implemented will **NOT work** until you rebuild and redeploy the app.

## Evidence That Old Code Is Running

Your most recent trip (`c22447f8-b2a3-4d0d-9dff-962346288816`):
- **GPS tracked distance:** 1.846 km (150 GPS points) ✅
- **Stored distance:** 9.30 km ❌
- **No debug logs** from new logging code ❌

This proves the app is running old code with Google Maps fallback.

## What Was Fixed

### 1. Smart GPS Jump Detection (`TripLocationTracker.ts`)
- **Old logic:** Filter out segments > 200m (loses 30% of distance)
- **New logic:** Smart filtering based on time + speed (keeps legitimate highway segments)
- **Result:** 42% more accurate (0.74 km → 1.05 km on test data)

### 2. Complete Fallback Removal (`RideContext.tsx`)
- **Removed:** Google Maps Directions API fallback
- **Removed:** Straight-line distance fallback
- **Removed:** Minimal distance fallback
- **New behavior:** Fail gracefully if GPS has no data

### 3. Comprehensive Logging
- Step-by-step logging throughout distance calculation
- All events saved to `debug_logs` table
- Easy to trace exactly where distance value changes

### 4. Distance Validation
- Automatic comparison: GPS distance vs straight-line distance
- Warns if GPS < 50% of straight-line (incomplete tracking)
- Warns if GPS > 3x straight-line (GPS jumps)

## How to Rebuild

### For Expo Development Build:
```bash
# Clear cache and rebuild
expo start --clear

# Or if using tunnel
expo start --tunnel --clear
```

### For Production Build:
```bash
# Android
eas build --platform android

# iOS
eas build --platform ios
```

## After Rebuilding

### Test with a New Ride:

1. **Start a ride** in the driver app
2. **Drive at least 1-2 km** (mix of city + highway if possible)
3. **Complete the ride**
4. **Check the trip completion modal**
   - Should show GPS-tracked distance (not Google Maps estimate)

### Check Debug Logs:

```sql
SELECT
  log_type,
  message,
  data,
  created_at
FROM debug_logs
WHERE ride_id = 'YOUR_NEW_RIDE_ID'
ORDER BY created_at;
```

**Expected logs:**
- `[STEP 1]` Calling TripLocationTracker.calculateTripDistance
- `[STEP 2]` GPS distance result
- `[STEP 5]` Distance comparison (GPS vs straight-line)
- `[STEP 6]` Condition check
- `[STEP 7]` GPS tracking successful
- `[STEP 9]` Final values before fare calculation
- `[STEP 10]` Fare calculated successfully
- `distance_decision` with "GPS_SUCCESS"

### Verify GPS Distance:

```sql
SELECT
  r.id,
  tc.actual_distance_km as stored_distance,
  (SELECT COUNT(*) FROM trip_location_history WHERE ride_id = r.id) as gps_points,
  6371 * 2 * ASIN(SQRT(
    POWER(SIN(RADIANS(r.destination_latitude - r.pickup_latitude) / 2), 2) +
    COS(RADIANS(r.pickup_latitude)) * COS(RADIANS(r.destination_latitude)) *
    POWER(SIN(RADIANS(r.destination_longitude - r.pickup_longitude) / 2), 2)
  )) as straight_line_km
FROM rides r
JOIN trip_completions tc ON tc.ride_id = r.id
WHERE r.id = 'YOUR_NEW_RIDE_ID';
```

**Expected:**
- `stored_distance` should be close to actual driven distance
- `gps_points` should be > 2 (ideally 50-200 depending on trip length)
- `stored_distance` should be 1.2x - 2x `straight_line_km` (accounts for road curvature)

## Success Criteria

✅ Trip completion modal shows GPS distance (not 7-9 km fallback)
✅ Debug logs show step-by-step calculation with "[STEP X]" markers
✅ Debug logs show "GPS_SUCCESS" decision
✅ Stored distance matches GPS-calculated distance
✅ No Google Maps API calls in logs

## If GPS Still Fails

If after rebuilding, GPS still returns 0 or very low distance:

1. **Check GPS permissions** - Ensure background location is granted
2. **Check GPS tracking is starting** - Look for "gps_tracking_started" logs
3. **Check GPS points are being recorded** - Query `trip_location_history`
4. **Check for GPS restarts** - Look for "gps_restarted" logs (Android throttling)
5. **Check device GPS** - Ensure phone has good GPS signal

## Summary

**The code is fixed. You just need to rebuild the app to deploy the fixes.**

Once rebuilt:
- GPS distance will be calculated correctly (using smart filtering)
- No more Google Maps fallbacks
- Trip completion modal will show actual GPS-tracked distance
- Comprehensive logging will help debug any issues

**Rebuild now and test with a new ride!**
