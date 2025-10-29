# Quick Test Guide: Location Tracking After App Restart

## Test Steps

### 1. Initial Setup
```bash
# Rebuild the app with the fix
npm run android:build
# or
eas build --profile development --platform android
```

### 2. Test: Close and Reopen App

**Steps:**
1. Open the driver app
2. Login with driver credentials
3. Go online (toggle status to "Online")
4. Wait for these logs:
   ```
   ✅ Background location tracking started successfully
   ✅ Driver location will be sent every 3 seconds
   ```
5. **Close the app completely** (swipe away from recent apps)
6. **Wait 5 seconds**
7. **Reopen the app**
8. Check console logs for:
   ```
   === APP RESTARTED / REOPENED - Checking location tracking state ===
   📍 Background tracking status check: false
   ⚠️ Driver is online but background tracking is inactive
   🔄 Attempting to restart background tracking...
   ✅ Background tracking successfully restarted after app reopened
   ```

**Expected Result:** ✅ Location tracking automatically restarts

### 3. Test: App Background and Foreground

**Steps:**
1. Driver is online with tracking active
2. Press home button (minimize app)
3. Wait 10 seconds
4. Return to app
5. Check logs for:
   ```
   📱 App state changed to: active
   === APP CAME TO FOREGROUND ===
   🔍 Checking if location tracking needs to be restarted...
   ✅ Background tracking is active and working correctly
   ```

**Expected Result:** ✅ Tracking verified and continues working

### 4. Verify in Database

**Query to check live location updates:**
```sql
-- Check if driver's location is being updated
SELECT
  user_id,
  latitude,
  longitude,
  updated_at,
  NOW() - updated_at as seconds_since_update
FROM live_locations
WHERE user_id = 'YOUR-DRIVER-USER-ID';
```

**Expected Result:**
- `seconds_since_update` should be less than 10 seconds
- `updated_at` timestamp should be recent
- Location coordinates should be valid

### 5. ADB Logcat Monitoring

**Run this in terminal while testing:**
```bash
# Filter for app logs
adb logcat | grep -i "com.a1taxi.driverpro\|location.*tracking\|background.*location"
```

**Look for:**
- ✅ "Background tracking successfully restarted"
- ✅ "Location updated via RPC"
- ❌ Any error messages about permissions or RPC failures

## Success Criteria

- [ ] Location tracking restarts automatically when app reopens
- [ ] No manual "go offline/online" needed
- [ ] Database shows recent location updates
- [ ] Console logs confirm successful restart
- [ ] AppState transitions logged correctly
- [ ] No permission errors

## If Test Fails

### Check 1: Location Permission
```bash
adb shell dumpsys package com.a1taxi.driverpro | grep -A 10 "permission"
```
Look for `ACCESS_BACKGROUND_LOCATION: granted=true`

### Check 2: AsyncStorage Data
Add temporary debug code in LocationContext:
```javascript
const driverId = await AsyncStorage.getItem('background_driver_id');
console.log('🔍 Driver ID in storage:', driverId);
```

### Check 3: Task Registration
Check if background task is registered:
```javascript
const isRegistered = await TaskManager.isTaskRegisteredAsync('background-location-task');
console.log('📋 Background task registered:', isRegistered);
```

### Check 4: Driver Status in Database
```sql
SELECT id, user_id, status, is_verified
FROM drivers
WHERE user_id = 'YOUR-DRIVER-USER-ID';
```
Verify status is 'online' or 'busy'

## Common Issues

**Issue**: "⚠️ Waiting for location permission"
- **Fix**: Grant "Allow all the time" permission in Settings

**Issue**: "❌ Failed to restart background tracking"
- **Fix**: Check if driver session exists in AsyncStorage
- **Fix**: Verify driver status is 'online' or 'busy'

**Issue**: Logs show restart but database not updating
- **Fix**: Check RPC function `update_driver_location_rpc` exists
- **Fix**: Verify Supabase URL and keys in .env

**Issue**: No logs showing up at all
- **Fix**: Rebuild app with latest code
- **Fix**: Check if console logging is enabled

## Additional Debugging

### Enable Verbose Logging
Add this to see all location updates:
```javascript
// In BackgroundLocationService.ts
console.log('[VERBOSE] Location update:', {
  latitude,
  longitude,
  timestamp: new Date().toISOString()
});
```

### Monitor Network Requests
```bash
# Watch database connections
adb logcat | grep -i "supabase\|rpc"
```

## Success Indicators

When everything works correctly, you should see:
1. ✅ App reopens → Tracking status checked → Auto-restart initiated
2. ✅ Location updates in database every 3-5 seconds
3. ✅ AppState transitions logged
4. ✅ No permission errors
5. ✅ Driver visible on customer app map

## Timeline
- **Initial restart**: ~1-2 seconds after app opens
- **Location updates**: Every 3 seconds
- **Status check**: Every 10 seconds + on app state change
