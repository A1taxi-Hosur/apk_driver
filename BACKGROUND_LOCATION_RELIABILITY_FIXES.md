# Background Location Tracking Reliability Fixes

## Problem
Drivers' background location tracking stops after 10-15 minutes, even though:
- Driver status is 'online' in database
- Background service is supposedly running
- No error messages appear

This is CRITICAL during active trips where location must update continuously.

## Root Causes Identified

### 1. AsyncStorage Dependency in Background Tasks
- Background tasks on Android have limited/unreliable access to AsyncStorage
- Session data becomes unavailable when app is minimized
- Background task reads `null` and stops tracking

### 2. No Active Trip Check
- Background service only checked driver status from local session
- Didn't verify if driver had active ride in database
- Could stop tracking mid-trip if session was stale

### 3. Session Expiry Issues
- 24-hour session timeout could kill tracking during long shifts
- No automatic session refresh mechanism

### 4. Android Battery Optimization
- Doze mode kills background tasks after 10-15 minutes
- Foreground service settings weren't aggressive enough

## Solutions Implemented

### 1. Dedicated Driver ID Storage
**Location:** `services/BackgroundLocationService.ts`

```typescript
// Store driver IDs separately from session for reliable background access
const DRIVER_ID_KEY = 'background_driver_id';
const DRIVER_USER_ID_KEY = 'background_driver_user_id';

// On background service start:
await AsyncStorage.setItem(DRIVER_ID_KEY, driverId);
await AsyncStorage.setItem(DRIVER_USER_ID_KEY, driverUserId);
```

**Why:** Simpler data structure, less likely to fail in background tasks

### 2. Database-First Status Check
**Location:** `services/BackgroundLocationService.ts` - `checkDriverOnlineStatus()`

```typescript
// NEW: Check database first via RPC
const response = await fetch(`${supabaseUrl}/rest/v1/rpc/should_driver_track_location`, {
  method: 'POST',
  body: JSON.stringify({ p_driver_id: driverId })
});

const result = await response.json();
// Returns: { should_track: true, has_active_trip: true, reason: 'active_trip' }
```

**Why:**
- Works even if AsyncStorage fails
- Detects active trips from database
- Driver with active trip ALWAYS tracks, regardless of status

### 3. New RPC Functions
**Location:** `supabase/migrations/add_check_driver_has_active_trip_rpc.sql`

#### `check_driver_has_active_trip(driver_id)`
Returns true if driver has rides with status 'accepted' or 'in_progress'

#### `should_driver_track_location(driver_id)`
Returns JSON with tracking decision:
```json
{
  "should_track": true,
  "driver_status": "online",
  "has_active_trip": true,
  "reason": "active_trip"
}
```

**Logic:**
- Driver tracks if status is 'online' OR 'busy'
- Driver tracks if has active trip (EVEN if status changed)
- This prevents location from stopping during active rides

### 4. Priority-Based Location Updates
**Location:** `services/BackgroundLocationService.ts`

```typescript
// BEFORE: Check status first, then send location
// AFTER: Send location first, then check status
if (locations && locations.length > 0) {
  const locationSent = await sendLocationToDatabase(location);

  // Only check status if location failed to send
  if (!locationSent) {
    // Then check if we should stop tracking
  }
}
```

**Why:** Location data is sent even if status check fails

### 5. Enhanced Foreground Service Settings
**Location:** `services/BackgroundLocationService.ts`

```typescript
await Location.startLocationUpdatesAsync(BACKGROUND_LOCATION_TASK, {
  accuracy: Location.Accuracy.BestForNavigation,
  timeInterval: 5000, // Every 5 seconds
  distanceInterval: 5, // Every 5 meters
  showsBackgroundLocationIndicator: true,
  pausesUpdatesAutomatically: false, // NEVER pause
  activityType: Location.ActivityType.AutomotiveNavigation, // Highest priority
  foregroundService: {
    notificationTitle: 'A1 Taxi - Driver Active',
    notificationBody: 'Location tracking active. Do not close this notification.',
    notificationColor: '#2563EB',
  },
});
```

**Key Changes:**
- `pausesUpdatesAutomatically: false` - Never pause, even if stationary
- `activityType: AutomotiveNavigation` - Tells OS this is driving navigation
- Clearer notification warning users not to dismiss it

## Testing the Fixes

### Test 1: Background Reliability Test
1. Driver goes online
2. Minimize app for 20 minutes
3. Check database: `SELECT * FROM live_locations WHERE user_id = '...' ORDER BY updated_at DESC`
4. **Expected:** Updates every 5 seconds continuously

### Test 2: Active Trip Protection Test
1. Driver accepts ride
2. Trip status becomes 'in_progress'
3. Kill the app completely
4. Reopen app
5. **Expected:** Location continues updating (background service auto-restarts)

### Test 3: Session Expiry Test
1. Driver goes online
2. Wait 25 hours (or manually expire session in AsyncStorage)
3. **Expected:** If driver has active trip, tracking continues via database check

### Test 4: AsyncStorage Failure Simulation
1. Clear AsyncStorage while background service is running
2. **Expected:** Service continues using dedicated driver ID storage + database checks

## SQL Query for Monitoring

```sql
-- Check which drivers are updating and at what frequency
WITH location_updates AS (
  SELECT
    d.id as driver_id,
    u.full_name,
    u.email,
    d.status,
    ll.updated_at as last_update,
    EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) as seconds_since_update,
    CASE
      WHEN ll.updated_at > NOW() - INTERVAL '10 seconds' THEN 'LIVE'
      WHEN ll.updated_at > NOW() - INTERVAL '30 seconds' THEN 'ACTIVE'
      WHEN ll.updated_at > NOW() - INTERVAL '2 minutes' THEN 'RECENT'
      WHEN ll.updated_at > NOW() - INTERVAL '5 minutes' THEN 'FRESH'
      ELSE 'STALE'
    END as update_status
  FROM drivers d
  JOIN users u ON u.id = d.user_id
  LEFT JOIN live_locations ll ON ll.user_id = d.user_id
  WHERE d.status IN ('online', 'busy')
)
SELECT
  full_name,
  email,
  status,
  update_status,
  ROUND(seconds_since_update::numeric, 1) as seconds_ago
FROM location_updates
ORDER BY last_update DESC NULLS LAST;
```

## Driver Instructions for Maximum Reliability

### For Android Drivers:

1. **Battery Optimization:**
   - Settings → Apps → A1 Taxi Driver → Battery
   - Select "Unrestricted" or "Don't optimize"

2. **Location Permission:**
   - Settings → Apps → A1 Taxi Driver → Permissions → Location
   - Select "Allow all the time"

3. **Background Running:**
   - Don't force close the app
   - Leave "A1 Taxi - Driver Active" notification visible
   - If dismissed, reopen app to restart service

4. **During Active Trips:**
   - Keep phone screen unlocked when possible
   - Don't switch to battery saver mode mid-trip
   - If location stops updating, reopen app

### For iOS Drivers:

1. **Location Permission:**
   - Settings → A1 Taxi Driver → Location
   - Select "Always"

2. **Background App Refresh:**
   - Settings → General → Background App Refresh → On
   - Settings → A1 Taxi Driver → Background App Refresh → On

3. **Low Power Mode:**
   - Avoid enabling during active trips
   - May reduce location update frequency

## What Changed for Drivers

### Before Fix:
- Background tracking stops after 10-15 minutes
- Must reopen app to restart location updates
- Location stops even during active trips

### After Fix:
- Background tracking runs indefinitely
- Database checks ensure active trips always track
- Multiple fallback mechanisms prevent tracking loss
- Aggressive foreground service fights battery optimization

## Monitoring Dashboard Recommendations

Add these indicators to admin panel:

1. **Real-time Driver Tracker:**
   - Show last update timestamp for each online driver
   - Alert if no update for > 30 seconds
   - Flag drivers with stale locations

2. **Active Trip Protection:**
   - Always show drivers in 'accepted' or 'in_progress' trips
   - Alert if driver in active trip hasn't updated in 15 seconds

3. **Health Check:**
   - Run `should_driver_track_location()` RPC every minute
   - Auto-restart background service if stopped unexpectedly

## Next Steps

1. Deploy this update to all driver apps
2. Instruct drivers to update app and check settings
3. Monitor location update frequency for 48 hours
4. If issues persist, add device-specific logging to identify patterns

## Important Notes

- These fixes prioritize **active trip location reliability** above all else
- Background tracking now checks database, not just local session
- Drivers with active trips will ALWAYS track, even if session expires
- Multiple fallback mechanisms ensure location data reaches database
