# Driver Location Tracking - How It Works

## Important: Background Tracking is Device-Based

**Background location tracking runs on each driver's phone, NOT on the server.**

This means:
- Each driver must open the app on their phone
- The app must have location permissions granted
- The driver's status must be set to 'online' or 'busy'
- Only then will their phone start sending location updates every 5 seconds

## Why Only One Driver Is Updating

If you see only one driver updating their location, it means:
- ✅ **Driver A**: Has the app open (or recently opened), is online, and has permissions → **Tracking Active**
- ❌ **Driver B**: App not opened today, even though status is 'online' in database → **No Tracking**
- ❌ **Driver C**: App closed, status offline → **No Tracking**

## How to Get All Drivers Updating Location

### For Each Driver:
1. **Open the driver app** on their phone
2. **Grant location permissions** when prompted (including "Allow all the time" for background tracking)
3. **Toggle status to 'Online'** in the app (or login if not logged in)
4. **Keep the app installed** (background service will continue even when app is closed)

### Technical Flow:

```
Driver Opens App
    ↓
Login / Load Session
    ↓
LocationContext Initializes
    ↓
Checks: Is driver online/busy? ✓
    ↓
Checks: Location permission granted? ✓
    ↓
Starts Background Location Service
    ↓
Phone sends GPS to database every 5 seconds
    (Even when app is closed or phone is locked)
```

## Verification Steps

### Check if a Driver's Phone is Tracking:

On each driver's phone, check the app logs:
- Look for: `✅ Background location tracking started`
- Look for: `📍 Background location update`
- Look for: `✅ Background location updated via RPC`

### Check in Database:

```sql
-- See which drivers are actively updating (last 1 minute)
SELECT
  d.full_name,
  d.phone,
  d.status,
  ll.updated_at,
  EXTRACT(EPOCH FROM (NOW() - ll.updated_at)) as seconds_ago
FROM drivers d
LEFT JOIN live_locations ll ON ll.user_id = d.user_id
WHERE d.status IN ('online', 'busy')
ORDER BY ll.updated_at DESC NULLS LAST;
```

**Expected Result:**
- Drivers actively tracking: `seconds_ago` < 10
- Drivers NOT tracking: `seconds_ago` > 60 or NULL

## Common Issues

### Issue: Driver shows 'online' in database but not updating location
**Reason:** The driver hasn't opened the app on their phone today
**Fix:** Driver must open the app to start background tracking

### Issue: Location updates stopped
**Reason:** Driver's phone killed the background service (battery optimization)
**Fix:**
- Disable battery optimization for the app
- Ensure "Allow all the time" is selected for location permission

### Issue: Location not updating on iOS
**Reason:** iOS requires explicit "Always Allow" permission for background tracking
**Fix:** Go to Settings → Privacy → Location → A1 Taxi → Always Allow

## System Architecture

```
Driver Phone (Background Service)
    ↓ Every 5 seconds
    ↓
Live_Locations Table (Database)
    ↓ Whenever new ride is created
    ↓
Notify_Nearby_Drivers Function
    ↓ Checks distance < 5km
    ↓
Sends Notification to Nearby Drivers
```

## Testing Checklist

- [ ] Driver app installed on phone
- [ ] Location permission granted ("Always Allow" / "Allow all the time")
- [ ] Driver logged in successfully
- [ ] Driver status set to 'online' or 'busy'
- [ ] Check logs for "Background location tracking started"
- [ ] Wait 10 seconds and check database for location update
- [ ] Lock phone and wait 30 seconds - location should still update
- [ ] Close app completely - location should still update

## Summary

**You cannot force a driver's phone to update location from the server side.** Each driver must:
1. Have the app installed
2. Open it at least once
3. Grant permissions
4. Set their status to online

Only then will their phone automatically send location updates every 5 seconds, even when the app is closed.
