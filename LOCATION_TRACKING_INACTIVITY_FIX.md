# CRITICAL FIX: Location Tracking Becoming Inactive

## The Problem

Location tracking becomes "inactive" after a while because **Android kills the background service** to save battery. This is the #1 issue for taxi/delivery apps!

### Why This Happens

```
Driver goes online
  ↓
Background location service starts
  ↓  
Driver uses phone (WhatsApp, calls, etc.)
  ↓
Android sees app in background
  ↓
Battery optimization kicks in
  ↓
❌ BACKGROUND SERVICE KILLED
  ↓
Location tracking STOPS
```

**This is Android's battery optimization - it KILLS apps in background!**

---

## The Fixes Applied

### 1. More Aggressive Location Updates ✅

**Before:**
- timeInterval: 3000ms (every 3 seconds)
- distanceInterval: 0
- Notification color: Green

**After:**
- timeInterval: 2000ms (every 2 seconds) ← MORE FREQUENT
- distanceInterval: 0 (unchanged)
- Notification color: RED ← MORE VISIBLE
- killServiceOnDestroy: false ← CRITICAL!

**Why this helps:**
- More frequent updates prevent Android from thinking service is idle
- Red notification is harder to accidentally swipe away
- killServiceOnDestroy prevents service death if notification is swiped

### 2. Foreground Service Priority ✅

```typescript
foregroundService: {
  notificationTitle: '🚕 A1 Taxi - Driver Online',
  notificationBody: 'Location tracking active. DO NOT SWIPE AWAY.',
  notificationColor: '#FF0000', // RED
  killServiceOnDestroy: false, // ← CRITICAL!
}
```

**This makes the service a "foreground service":**
- Android gives it HIGH priority
- Much harder for battery optimization to kill
- Notification MUST stay visible

---

## CRITICAL: What Driver MUST Do

### Step 1: Disable Battery Optimization (MANDATORY!)

**This is THE most important step!**

**On Android:**

1. Open Settings
2. Go to Apps → A1 Taxi Driver
3. Battery → Battery optimization
4. Select "Don't optimize" or "Unrestricted"
5. Confirm

**Alternative path:**
1. Settings → Battery → Battery optimization
2. Find "A1 Taxi Driver"
3. Select "Don't optimize"

**WHY THIS IS CRITICAL:**
- Even with foreground service, Android can still kill app
- "Don't optimize" tells Android to NEVER kill this app
- This is used by all taxi apps (Uber, Lyft, etc.)

### Step 2: Keep RED Notification Visible (MANDATORY!)

When driver goes online, they'll see:

```
🚕 A1 Taxi - Driver Online
Location tracking active. DO NOT SWIPE AWAY.
```

**RULES:**
- ✅ Keep this notification visible AT ALL TIMES
- ❌ NEVER swipe it away
- ❌ NEVER dismiss it
- ✅ It MUST show while driver is online

**Why:**
- This notification = location tracking is active
- Swipe it away = location tracking STOPS
- No notification = driver is INVISIBLE to customers

### Step 3: Avoid Task Killers

**DO NOT:**
- Use "battery saver" mode while driving
- Use task killer apps
- Clear app from recent apps while online
- Use "power saving" mode

**These will kill background tracking!**

---

## How to Verify Tracking is Active

### Check 1: Notification

**Active:** Red notification shows "🚕 A1 Taxi - Driver Online"
**Inactive:** No notification visible

### Check 2: Database

Run this query every minute:

```sql
SELECT 
  user_id,
  latitude,
  longitude,
  updated_at,
  EXTRACT(EPOCH FROM (NOW() - updated_at)) as seconds_ago
FROM live_locations
WHERE user_id = 'YOUR_DRIVER_USER_ID'
ORDER BY updated_at DESC
LIMIT 1;
```

**Expected:**
- `seconds_ago` should be < 10 seconds
- Location updates every 2-5 seconds

**Problem indicators:**
- `seconds_ago` > 30 seconds = tracking stopped!
- No row = tracking never started!

### Check 3: ADB Logs (For Testing)

```bash
# Connect phone via USB
adb logcat | grep -E "Background location|live_locations|Location tracking"
```

**Expected output (every 2-3 seconds):**
```
📍 Background location task triggered with 1 locations
✅ Background location updated via RPC: updated
```

**Problem indicators:**
```
❌ Background location task error
⚠️ No driver session
❌ Location permission not granted
```

---

## Common Issues & Solutions

### Issue 1: "Tracking Active" but No Updates in Database

**Symptoms:**
- Red notification shows
- But `live_locations` table not updating
- `seconds_ago` keeps increasing

**Causes:**
1. Network connection lost
2. Database RLS blocking inserts
3. Battery optimization still active

**Solutions:**

**Check network:**
```bash
# On phone, test Supabase connection
curl https://YOUR_SUPABASE_URL.supabase.co/rest/v1/
```

**Check database RLS:**
```sql
-- Check if RPC function exists
SELECT * FROM pg_proc WHERE proname = 'update_driver_location_rpc';

-- Test RPC function manually
SELECT update_driver_location_rpc(
  'DRIVER_ID',
  12.7401984,  -- test latitude
  77.824,      -- test longitude
  NULL,        -- heading
  NULL,        -- speed  
  10           -- accuracy
);
```

**Force disable battery optimization:**
```bash
# Via ADB (for testing only)
adb shell dumpsys deviceidle whitelist +com.a1taxi.driverpro
```

### Issue 2: Tracking Stops After Phone Screen Turns Off

**Symptoms:**
- Works fine when phone is active
- Stops when screen turns off/phone locks

**Causes:**
- Battery optimization still enabled
- Doze mode kicking in
- Background restrictions enabled

**Solutions:**

1. **Disable battery optimization** (see Step 1 above)

2. **Check background restrictions:**
   ```
   Settings → Apps → A1 Taxi Driver → Battery
   - Background restriction: OFF
   - Battery optimization: Unrestricted
   ```

3. **Disable Doze for app:**
   ```bash
   # Via ADB
   adb shell dumpsys deviceidle whitelist +com.a1taxi.driverpro
   ```

### Issue 3: Tracking Stops After Few Hours

**Symptoms:**
- Works fine initially
- Stops after 2-4 hours
- Driver doesn't notice until customer complains

**Causes:**
- Android's aggressive battery optimization for "long-running" services
- App cache being cleared
- Memory pressure on device

**Solutions:**

1. **Add watchdog timer in app:**
   - Check tracking status every 60 seconds
   - Auto-restart if stopped
   - Show alert to driver

2. **Increase service priority:**
   - Already done with `activityType: AutomotiveNavigation`

3. **Tell drivers to restart tracking:**
   - Go offline → online every 4 hours
   - This refreshes the background service

### Issue 4: Notification Disappears

**Symptoms:**
- Red notification vanishes
- Tracking stops
- App still thinks it's online

**Causes:**
- Driver accidentally swiped notification
- Android killed service despite foreground status
- App crashed silently

**Solutions:**

1. **Check if service still registered:**
   ```typescript
   const isActive = await BackgroundLocationService.isBackgroundLocationActive();
   console.log('Is tracking active?', isActive);
   ```

2. **Auto-restart tracking:**
   - LocationContext checks every 10 seconds
   - If inactive but driver online → auto-restart

3. **Show alert to driver:**
   ```
   "⚠️ Location tracking stopped!
   Please go offline and back online."
   ```

---

## Testing Checklist

Before deploying to drivers, test these scenarios:

### Test 1: Basic Tracking

1. Driver goes online
2. Check red notification appears
3. Wait 1 minute
4. Check database - should have 30+ location updates
5. ✅ Pass: Updates every 2-3 seconds

### Test 2: Screen Off

1. Driver goes online
2. Turn screen off for 5 minutes
3. Turn screen back on
4. Check database
5. ✅ Pass: Updates continued while screen off

### Test 3: App Closed

1. Driver goes online
2. Close app completely (swipe from recent apps)
3. Wait 5 minutes
4. Check database
5. ✅ Pass: Updates continued while app closed

### Test 4: Incoming Call

1. Driver goes online
2. Receive phone call
3. Talk for 5 minutes
4. Hang up
5. Check database
6. ✅ Pass: Updates continued during call

### Test 5: Other Apps

1. Driver goes online
2. Use WhatsApp/Facebook for 10 minutes
3. Check database
4. ✅ Pass: Updates continued while using other apps

### Test 6: Long Duration

1. Driver goes online
2. Leave phone for 4 hours (with screen off)
3. Check database every hour
4. ✅ Pass: Updates continued for full 4 hours

### Test 7: Low Battery

1. Driver goes online
2. Let battery drop to 20%
3. Check if tracking continues
4. ✅ Pass: Updates continue at low battery

---

## How to Monitor All Drivers

### Real-Time Dashboard Query

```sql
-- Check all online drivers and their last update time
SELECT 
  d.id,
  d.user_id,
  u.full_name,
  d.status,
  ll.latitude,
  ll.longitude,
  ll.updated_at,
  EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) as seconds_since_update,
  CASE 
    WHEN EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) < 10 THEN '🟢 Active'
    WHEN EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) < 60 THEN '🟡 Slow'
    ELSE '🔴 Inactive'
  END as tracking_status
FROM drivers d
LEFT JOIN live_locations ll ON ll.user_id = d.user_id
LEFT JOIN users u ON u.id = d.user_id
WHERE d.status IN ('online', 'busy')
ORDER BY seconds_since_update DESC;
```

**Look for:**
- 🟢 Active: < 10 seconds = Good!
- 🟡 Slow: 10-60 seconds = Concerning
- 🔴 Inactive: > 60 seconds = PROBLEM!

**Alert drivers if:**
```sql
-- Drivers who are online but haven't updated location in 60+ seconds
SELECT 
  u.full_name,
  u.phone_number,
  d.status,
  EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) as seconds_inactive
FROM drivers d
LEFT JOIN live_locations ll ON ll.user_id = d.user_id
LEFT JOIN users u ON u.id = d.user_id
WHERE d.status IN ('online', 'busy')
  AND (ll.updated_at IS NULL OR EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) > 60);
```

**Send SMS/push notification:**
```
"⚠️ Your location tracking has stopped! 
Please go offline and back online to resume.
Settings → Apps → A1 Taxi → Battery → Don't optimize"
```

---

## Driver Instructions (Simple Version)

**Print this and give to all drivers:**

---

### 🚕 A1 Taxi Driver - Location Tracking Guide

**WHY THIS MATTERS:**
- Customers see your location on map
- Get ride requests based on your location
- No location = No customers = No money!

**IMPORTANT SETUP (Do this ONCE):**

1. **Turn OFF Battery Optimization:**
   - Settings → Apps → A1 Taxi Driver
   - Battery → "Don't optimize"
   - THIS IS MANDATORY!

2. **When You're Online:**
   - You MUST see RED notification
   - "🚕 A1 Taxi - Driver Online"
   - DO NOT swipe this away!
   - This means customers can see you

3. **If Notification Disappears:**
   - Go offline
   - Go back online
   - Check notification appears again

4. **DO NOT:**
   - Use battery saver mode
   - Use task killer apps
   - Swipe away the red notification
   - Clear app from recent apps

5. **If No Ride Requests for 30+ Minutes:**
   - You might be invisible!
   - Go offline → online to refresh
   - Check red notification is showing

**REMEMBER:** 
Red notification = Customers see you = Get rides! ✅
No notification = Customers can't see you = No rides! ❌

---

## Summary

### What Was Fixed

1. ✅ More aggressive location updates (every 2 seconds)
2. ✅ RED notification (harder to miss/swipe)
3. ✅ killServiceOnDestroy: false (prevents service death)
4. ✅ Periodic health check every 10 seconds
5. ✅ Auto-restart if tracking stops

### What Driver MUST Do

1. ✅ Disable battery optimization for app
2. ✅ Keep red notification visible
3. ✅ Don't use battery saver while driving
4. ✅ Restart tracking if no rides for 30+ min

### How to Monitor

1. ✅ Check `live_locations.updated_at` every minute
2. ✅ Alert if `seconds_since_update > 60`
3. ✅ Dashboard showing all drivers' tracking status
4. ✅ ADB logs for detailed debugging

**The #1 issue is battery optimization - MUST be disabled!**

**Rebuild the APK and test extensively before deploying!**
