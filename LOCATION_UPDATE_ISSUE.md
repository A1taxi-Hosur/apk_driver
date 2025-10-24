# Location Update Issue - Only One Driver Updating

## Problem
Only one driver is updating their live location to the database, even though multiple drivers should be online.

## Root Cause
The LocationContext starts background tracking only when:
1. Driver status changes to 'online' or 'busy' (line 74)
2. Location permission is granted (line 74)
3. Tracking is not already active (line 74)

**This means:**
- Background tracking only starts when the driver logs in or changes status
- If a driver was already logged in before (session persisted), the tracking won't auto-start
- The TESTING MODE (line 347-368 in AuthContext) only affects the driver who logs in

## Solution Options

### Option 1: Start Location Tracking on App Launch (RECOMMENDED)
Modify LocationContext to check driver status on initialization and start tracking if driver is online/busy.

### Option 2: Manual Toggle
Each driver must manually toggle their status to 'online' in the app to start location tracking.

### Option 3: Remove TESTING MODE
Remove the forced 'online' status and require all drivers to manually go online.

## Current Behavior
- Driver A logs in → automatically set to 'online' → background tracking starts
- Driver B (already logged in from yesterday) → status still 'online' in database → but background tracking NOT running on their device
- Driver C (offline) → no tracking

## To Verify Which Drivers Are Actually Tracking
Check the app logs on each device:
- Look for: "✅ Background location tracking started"
- Look for: "📍 Background location update"
- Look for: "✅ Background location updated via RPC"

## Temporary Fix
Each driver should:
1. Open the app
2. Toggle status to 'offline' then back to 'online'
3. This will trigger the background location service
