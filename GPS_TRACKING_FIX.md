# 🛠️ GPS Tracking Fix - Stops at 38 Points

## **Problem**
GPS tracking stops after ~38 points (~76 seconds) due to Android battery optimization killing the background task.

## **Changes Made (v2 - AGGRESSIVE FIX)**

### 1. **More Aggressive GPS Updates**
- Changed from 3 seconds to **2 seconds**
- Changed from 5 meters to **3 meters**
- Added `deferredUpdatesInterval: 2000` to force frequent updates

### 2. **Better Notification**
- Changed title to "🚗 A1 Taxi - Trip in Progress"
- Changed body to "GPS tracking active - DO NOT close this notification"
- This warns users not to swipe away the notification

### 3. **New Permissions Added**
- `WAKE_LOCK` - Prevents device from sleeping
- `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` - Allows app to request battery optimization exemption

### 4. **GPS Watchdog Timer (NEW!)**
- Monitors GPS health every 30 seconds
- Detects if GPS stops updating (no heartbeat for >20 seconds)
- **Automatically restarts GPS tracking** if it stops
- Logs `gps_restarted` events to debug_logs table

### 5. **Heartbeat Mechanism**
- Every GPS point updates a timestamp in AsyncStorage
- Watchdog checks this timestamp to detect if GPS is dead
- This creates a keep-alive mechanism

### 6. **Debug Logging Added**
- `gps_tracking_started` - Logs when GPS starts
- `gps_heartbeat` - Logs every ~10th GPS point to track if it's still running
- `gps_restarted` - Logs when watchdog restarts GPS tracking

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
WHERE log_type IN ('gps_tracking_started', 'gps_heartbeat', 'gps_restarted')
ORDER BY created_at DESC
LIMIT 20;
```

Look for:
- ✅ `gps_tracking_started` - GPS started
- ✅ `gps_heartbeat` - GPS still running
- 🔁 `gps_restarted` - **Watchdog restarted GPS!** (This means it detected GPS stopped and automatically restarted it)

### **Step 5: Check Watchdog Activity (ADB Logs)**
Look for these logs:
```
🐕 Watchdog: Last GPS update was 5s ago  ← GPS is healthy
⚠️ GPS appears to have stopped! Attempting restart...  ← GPS died, restarting!
✅ GPS tracking restarted by watchdog  ← Success!
```

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

## **🚀 Expected Behavior**

### **Before This Fix:**
- GPS stops at 38 points (~76 seconds)
- No recovery mechanism
- Trip tracking incomplete

### **After This Fix:**
- GPS may still be killed by Android after 1-2 minutes
- **BUT** watchdog detects this within 30 seconds
- Watchdog automatically restarts GPS
- Continuous tracking with occasional restarts
- Should see >200 points for a 5-minute ride

### **What You'll See in Logs:**
```
GPS started → 38 points → Android kills it → Watchdog detects → Restart → Continue...
```

---

## **Why 38 Points?**

38 points × 2 seconds = 76 seconds ≈ 1.3 minutes

This is when Android's Doze mode kicks in and kills background tasks. The watchdog will restart GPS every time Android kills it, providing **continuous tracking with automatic recovery**.
