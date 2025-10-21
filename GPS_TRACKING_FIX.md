# 🛠️ GPS Tracking Fix - Stops at 34 Points

## **Problem**
GPS tracking stops after ~34 points (~68 seconds) due to Android battery optimization killing the background task.

## **Changes Made**

### 1. **More Aggressive GPS Updates**
- Changed from 3 seconds to **2 seconds**
- Changed from 5 meters to **3 meters**
- Added `deferredUpdatesInterval: 2000` to force frequent updates

### 2. **Better Notification**
- Changed title to "🚗 A1 Taxi - Trip in Progress"
- Changed body to "GPS tracking active - DO NOT close this notification"
- This warns users not to swipe away the notification

### 3. **Debug Logging Added**
- `gps_tracking_started` - Logs when GPS starts
- `gps_heartbeat` - Logs every ~10th GPS point to track if it's still running

---

## **📱 Testing Steps**

### **Step 1: Rebuild APK**
```bash
npm run build:apk
```

### **Step 2: Install and Start a Ride**
1. Install the new APK
2. Accept a ride
3. Verify pickup OTP
4. **Keep the app open** for the first test
5. Look for the notification: "🚗 A1 Taxi - Trip in Progress"
6. Drive for 5-10 minutes

### **Step 3: Check GPS Points**
After the ride, run this query in Supabase:

```sql
SELECT
  COUNT(*) as total_points,
  MIN(recorded_at) as first_point,
  MAX(recorded_at) as last_point,
  EXTRACT(EPOCH FROM (MAX(recorded_at) - MIN(recorded_at))) / 60 as duration_minutes
FROM trip_location_history
WHERE ride_id = 'YOUR_RIDE_ID';
```

**Expected:**
- `total_points` should be ~150 for 5 minutes (30 per minute at 2-second intervals)
- If you get more than 50 points, GPS is working better!

### **Step 4: Check Debug Logs**
```sql
SELECT *
FROM debug_logs
WHERE log_type IN ('gps_tracking_started', 'gps_heartbeat')
ORDER BY created_at DESC
LIMIT 10;
```

If you see `gps_heartbeat` entries throughout the ride, GPS is running continuously!

---

## **🔋 User Instructions (Important!)**

### **CRITICAL: Battery Optimization**

The driver app MUST be exempted from battery optimization. Otherwise, Android will kill GPS after 1-2 minutes.

**Tell drivers to do this:**

1. Go to **Settings** → **Apps** → **A1 Taxi Driver**
2. Tap **Battery** → **Battery Optimization**
3. Select **"All apps"** from dropdown
4. Find **A1 Taxi Driver**
5. Select **"Don't optimize"**
6. Tap **Done**

**Alternative path:**
1. **Settings** → **Battery** → **Battery Optimization**
2. Select **"All apps"**
3. Find **A1 Taxi Driver** → **Don't optimize**

---

## **📊 If GPS Still Stops:**

### **Check 1: Was notification visible?**
If the driver swiped away the notification, GPS will stop.

### **Check 2: Was phone in power saving mode?**
Power saving mode can kill background tasks.

### **Check 3: Is battery optimization disabled?**
If not disabled, GPS will be killed after 1-2 minutes.

### **Check 4: Query time gaps**
```sql
WITH time_gaps AS (
  SELECT
    recorded_at,
    recorded_at - LAG(recorded_at) OVER (ORDER BY recorded_at) as gap
  FROM trip_location_history
  WHERE ride_id = 'YOUR_RIDE_ID'
  ORDER BY recorded_at
)
SELECT
  recorded_at,
  EXTRACT(EPOCH FROM gap) as gap_seconds
FROM time_gaps
WHERE EXTRACT(EPOCH FROM gap) > 10
ORDER BY recorded_at;
```

This shows all gaps > 10 seconds. If you see large gaps, GPS is being throttled.

---

## **🚀 Next Steps**

1. **Rebuild the APK**
2. **Test with new aggressive settings**
3. **Check GPS points query** - expect >50 points instead of 34
4. **If still stops**, we'll need to add a wakelock or use a different tracking library

---

## **Why 34 Points?**

34 points × 3 seconds = 102 seconds ≈ 1.7 minutes

This is exactly when Android's Doze mode kicks in and starts throttling background tasks. The new 2-second interval and more frequent updates should delay or prevent this.
