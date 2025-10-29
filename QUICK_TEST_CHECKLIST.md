# Quick Test Checklist: Location Tracking Fix

## Before Testing
- [ ] Rebuild the app with the new code
- [ ] Verify `.env` has `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Install APK on device

## Test Procedure

### 1. Fresh Login
- [ ] Open app
- [ ] Login with driver credentials
- [ ] Go online (toggle status)

### 2. Check Startup Logs
Look for these SUCCESS indicators:
```
✅ Stored driver IDs for background access
✅ Stored Supabase credentials for background access
✅ Background location tracking started successfully
```

Should NOT see:
```
❌ Supabase credentials not found in process.env
```

### 3. Wait for Location Updates (30 seconds)
Look for these logs every 3 seconds:
```
📍 Background location task triggered with 1 locations
📤 Background location update via RPC...
✅ Background location updated via RPC: updated
✅ Background location task completed
```

Should NOT see:
```
❌ Supabase credentials not configured
⚠️ Location not sent (driver might be offline or network issue)
```

### 4. Verify Database Updates
Run this query:
```sql
SELECT
  user_id,
  latitude,
  longitude,
  updated_at,
  NOW() - updated_at as seconds_ago
FROM live_locations
WHERE user_id = 'YOUR_DRIVER_USER_ID';
```

Expected result:
- [ ] `seconds_ago` is less than 10 seconds
- [ ] Location coordinates are being updated

### 5. Close App and Reopen
- [ ] Swipe app away from recent apps
- [ ] Wait 10 seconds
- [ ] Tap app icon to reopen
- [ ] Check logs continue showing location updates
- [ ] Verify database still shows recent updates

### 6. Force Kill Test (Optional)
- [ ] Go to Settings → Apps → A1 Taxi Driver
- [ ] Tap "Force Stop"
- [ ] Reopen app
- [ ] Go online again
- [ ] Verify tracking starts successfully

## Success Criteria

All of these must be true:
- [x] No "Supabase credentials not configured" errors
- [x] Location updates show "✅ Background location updated via RPC"
- [x] Database shows `seconds_ago` < 10 seconds
- [x] Updates continue after closing and reopening app
- [x] Driver appears online on customer map

## If Test Fails

### Check 1: Environment Variables
```bash
# On your development machine
cat .env | grep SUPABASE
```
Should show:
```
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...your-key
```

### Check 2: AsyncStorage Content
Add this temporary code to check storage:
```javascript
// In BackgroundLocationService.ts, after storing credentials
const testUrl = await AsyncStorage.getItem('supabase_url');
const testKey = await AsyncStorage.getItem('supabase_anon_key');
console.log('🔍 Stored URL:', testUrl);
console.log('🔍 Stored Key:', testKey ? 'exists (length: ' + testKey.length + ')' : 'MISSING');
```

### Check 3: RPC Function Exists
Run this in Supabase SQL Editor:
```sql
SELECT routine_name
FROM information_schema.routines
WHERE routine_schema = 'public'
AND routine_name = 'update_driver_location_rpc';
```
Should return one row.

### Check 4: Network Connectivity
The background task needs internet access. Check:
- [ ] Device has WiFi/data connection
- [ ] Supabase project is accessible
- [ ] No firewall blocking requests

### Check 5: Permissions
```bash
adb shell dumpsys package com.a1taxi.driverpro | grep -A 5 "ACCESS_BACKGROUND_LOCATION"
```
Should show: `granted=true`

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Still seeing "credentials not configured" | Rebuild app, credentials need to be compiled in |
| Credentials stored but RPC fails | Check RPC function exists in database |
| Works in foreground, not background | Check background location permission is "Allow all the time" |
| Stops after device sleep | Check battery optimization is disabled for app |

## Debug Commands

```bash
# Watch live logs
adb logcat | grep -i "a1taxi\|supabase\|location"

# Clear app data and restart fresh
adb shell pm clear com.a1taxi.driverpro

# Check running services
adb shell dumpsys activity services | grep -A 10 "a1taxi"
```

## Expected Timeline
- Build: 5-10 minutes
- Install: 30 seconds
- Login and go online: 1 minute
- First location update: 3 seconds
- Verification: 30 seconds
- **Total: ~10-15 minutes**

---

**Quick Win Indicators:**
1. See `✅ Stored Supabase credentials` in logs
2. See `✅ Background location updated via RPC` every 3 seconds
3. Database query shows `seconds_ago` < 10
4. No error messages in console

If you see all 4 above → **SUCCESS!** 🎉
