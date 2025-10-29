# Location Tracking App Restart Fix

## Problem
Location tracking becomes inactive after the app is closed and reopened. The driver appears offline to customers even though they went online before closing the app.

## Root Cause
The background location tracking service (`BackgroundLocationService`) was not automatically restarting when the app reopened. While the background task definition was registered, the actual location updates subscription needed to be explicitly restarted.

## Solution Implemented

### 1. Immediate Restart on App Mount
Added aggressive restart logic in `LocationContext` initialization:
- Immediately checks background tracking status when app mounts
- If driver is online but tracking is inactive, automatically restarts it
- Logs detailed status information for debugging

### 2. App State Listener
Added `AppState` listener to detect when app comes to foreground:
- Triggers tracking status check when app state becomes 'active'
- Provides 1-second delay for app to fully initialize
- Logs app state transitions for debugging

### 3. Enhanced Status Checking
Improved `checkBackgroundTrackingStatus` function:
- More detailed logging to identify issues
- Checks location permission before attempting restart
- Provides clear feedback about why tracking isn't starting

## Technical Details

### Files Modified
1. **contexts/LocationContext.tsx**
   - Added `AppState` import
   - Made initialization async with immediate status check
   - Added AppState listener to detect foreground transitions
   - Enhanced error logging in status check function

### How It Works

#### On App Launch (Cold Start):
1. `LocationProvider` mounts
2. `initializeLocationTracking()` runs immediately
3. Checks if background tracking is active
4. If driver is online but tracking inactive → auto-restart

#### When App Returns to Foreground:
1. AppState listener detects 'active' state
2. Waits 1 second for full initialization
3. Checks background tracking status
4. Auto-restarts if needed

#### Periodic Monitoring:
- Existing 10-second interval continues checking
- Provides redundancy if other checks fail

## Expected Behavior After Fix

### Scenario 1: Driver Goes Online, Closes App, Reopens
1. Driver logs in and goes online
2. Background tracking starts
3. Driver closes app completely
4. **NEW**: When app reopens, tracking automatically restarts
5. Driver remains visible to customers

### Scenario 2: Driver Switches to Background and Returns
1. Driver is online and tracking is active
2. Driver minimizes app (goes to home screen)
3. Background service continues working
4. **NEW**: When driver returns, system verifies tracking is still active
5. If tracking stopped for any reason, it automatically restarts

## Testing Checklist

1. **Basic Flow**
   - [ ] Login as driver
   - [ ] Go online
   - [ ] Verify "Background tracking started" log
   - [ ] Close app completely
   - [ ] Reopen app
   - [ ] Check logs for "APP RESTARTED" message
   - [ ] Verify "Background tracking successfully restarted" log

2. **App State Transitions**
   - [ ] Go online
   - [ ] Minimize app (home button)
   - [ ] Verify "APP WENT TO BACKGROUND" log
   - [ ] Return to app
   - [ ] Verify "APP CAME TO FOREGROUND" log
   - [ ] Check tracking status is verified

3. **Database Verification**
   - [ ] Go online and close/reopen app
   - [ ] Query `live_locations` table
   - [ ] Verify `updated_at` timestamp is recent
   - [ ] Verify location updates continue every 3 seconds

## Debugging

### Check Console Logs
Look for these key messages:

**On App Launch:**
```
=== LOCATION PROVIDER INITIALIZATION ===
=== APP RESTARTED / REOPENED - Checking location tracking state ===
📍 Background tracking status check: false/true
```

**If Restart Needed:**
```
⚠️ Driver is online but background tracking is inactive
🔄 Attempting to restart background tracking...
✅ Background tracking successfully restarted after app reopened
```

**On App State Change:**
```
📱 App state changed to: active
=== APP CAME TO FOREGROUND ===
🔍 Checking if location tracking needs to be restarted...
```

### Common Issues

**Issue**: Tracking doesn't restart
- Check: Location permission granted?
- Check: Driver status is 'online' or 'busy'?
- Check: `DRIVER_ID_KEY` exists in AsyncStorage?

**Issue**: Still not appearing online
- Query database: `SELECT * FROM live_locations WHERE user_id = 'your-driver-user-id'`
- Check: Does record exist?
- Check: Is `updated_at` timestamp recent?
- Check: Is `latitude` and `longitude` valid?

## Benefits
1. **Seamless Experience**: Drivers don't need to manually go offline/online
2. **Reliable**: Multiple layers of checking ensure tracking stays active
3. **Transparent**: Detailed logging makes debugging easy
4. **Automatic**: No user intervention required
5. **Robust**: Handles multiple restart scenarios

## Notes
- Background tracking continues even when app is closed (via foreground service)
- This fix ensures the tracking service restarts if it was somehow stopped
- Location permission must remain "Allow all the time" for this to work
- The fix adds minimal overhead (only checks when app state changes)
