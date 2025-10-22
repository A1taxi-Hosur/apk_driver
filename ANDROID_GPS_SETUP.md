# Android GPS Background Tracking Setup

## Critical Configuration Required for Accurate GPS Tracking

The app is configured for **ultra-aggressive GPS tracking** to ensure accurate distance measurement even when the app is closed or the screen is locked.

---

## 1. Android Battery Optimization (CRITICAL!)

Android's battery optimization will kill background GPS tracking. **You MUST disable battery optimization** for the A1 Taxi Driver app.

### On the Device:

1. Open **Settings** → **Apps** → **A1 Taxi**
2. Tap **Battery** or **Battery usage**
3. Select **Unrestricted** or **Don't optimize**
4. Confirm the change

**Alternative path:**
- Settings → Battery → Battery optimization → All apps → A1 Taxi → Don't optimize

---

## 2. GPS Configuration

### GPS Settings (MUST be enabled):
1. **Location**: ON (High accuracy mode)
2. **Google Location Accuracy**: ON
3. **Wi-Fi scanning**: ON (improves accuracy)
4. **Bluetooth scanning**: ON (improves accuracy)

---

## 3. During a Trip

### What You'll See:
- ✅ **RED notification** saying "🚗 A1 Taxi - Active Trip"
- ✅ **GPS icon** in status bar (always visible)
- ✅ Message: "GPS tracking - Keep this notification visible"

### CRITICAL RULES:
- ❌ **DO NOT** swipe away the notification
- ❌ **DO NOT** force-close the app from recent apps
- ❌ **DO NOT** enable battery saver mode during trips
- ✅ **KEEP** the notification visible at all times
- ✅ **ALLOW** app to run in background

---

## 4. GPS Tracking Configuration

### Current Settings (Ultra-Aggressive):
```
⏱️  Update Frequency: Every 1 SECOND or 1 METER (whichever comes first)
🎯 GPS Accuracy: BestForNavigation (Highest precision)
🔄 Auto-Restart: Watchdog checks every 10 seconds and restarts if GPS stops
📱 Foreground Service: ACTIVE (prevents Android from killing the process)
🚫 Pause: NEVER (pausesUpdatesAutomatically: false)
```

### What This Means:
- GPS updates **every second** as you drive
- If you move even **1 meter**, GPS records it
- If GPS stops for **10+ seconds**, watchdog automatically restarts it
- **Android foreground service** keeps GPS running even when app is backgrounded
- GPS will track **3km as 3km**, not 0.13km

---

## 5. Verifying GPS is Working

### During a Trip:
1. **Check the notification** - It should say "🚗 A1 Taxi - Active Trip"
2. **Check logs** - You should see "📍 Background GPS" messages every 1-2 seconds
3. **Check database** - `trip_location_history` table should fill with GPS points rapidly

### After a Trip:
- **Expected**: 1-2 GPS points per second
- **For 10-minute trip**: ~600-1200 GPS points
- **For 3km trip**: Many points showing the actual path taken

---

## 6. Troubleshooting Low GPS Points

If you're still getting very few GPS points (0.13km for 3km trip):

### Check:
1. ✅ Battery optimization is OFF for A1 Taxi app
2. ✅ Location permission is set to "Allow all the time"
3. ✅ Location mode is "High accuracy"
4. ✅ The RED notification is visible during the trip
5. ✅ GPS icon is shown in the status bar
6. ✅ You're not force-closing the app during trips

### Android Manufacturer-Specific Settings:

**Xiaomi/MIUI:**
- Settings → Apps → A1 Taxi → Battery saver → No restrictions
- Settings → Apps → A1 Taxi → Autostart → Enable
- Settings → Apps → A1 Taxi → Other permissions → Location → Allow

**Samsung/One UI:**
- Settings → Apps → A1 Taxi → Battery → Unrestricted
- Settings → Apps → A1 Taxi → Permissions → Location → Allow all the time

**Huawei/EMUI:**
- Settings → Apps → A1 Taxi → Battery → App launch → Manage manually
  - Enable: Auto-launch, Secondary launch, Run in background

**OnePlus/OxygenOS:**
- Settings → Apps → A1 Taxi → Battery optimization → Don't optimize
- Settings → Apps → A1 Taxi → Advanced → Background activity → Enable

---

## 7. Testing GPS Tracking

### Test Procedure:
1. Start a test ride
2. Verify RED notification appears
3. Drive around for 2-3 minutes
4. Complete the trip
5. Check logs: You should see 100+ GPS points
6. Check fare breakdown: Distance should match actual distance traveled

### Expected Console Output:
```
✅ ========================================
✅ ULTRA-AGGRESSIVE GPS TRACKING STARTED
✅ ========================================
📱 Android Foreground Service: ACTIVE
🌍 Works even when app is KILLED/CLOSED
⏱️  Update Interval: EVERY 1 SECOND OR 1 METER
🎯 Accuracy: BEST FOR NAVIGATION (Highest)
🔴 RED notification will be visible
⚠️  CRITICAL: Do NOT swipe away the notification
```

---

## 8. Known Issues

### Issue: GPS stops after screen locks
**Solution**: Disable battery optimization for the app

### Issue: GPS stops after 5 minutes
**Solution**: Check manufacturer-specific battery settings (Xiaomi, Samsung, etc.)

### Issue: Notification disappears
**Solution**: Don't swipe away the notification; if it disappears, GPS will stop

### Issue: Very few GPS points recorded
**Solution**:
1. Ensure battery optimization is OFF
2. Ensure location is set to "High accuracy"
3. Ensure app has "Allow all the time" location permission
4. Check manufacturer-specific battery/background restrictions

---

## Summary

The app is now configured for **maximum GPS tracking aggressiveness**:
- ✅ Updates every 1 second or 1 meter
- ✅ Foreground service prevents Android from killing it
- ✅ Watchdog auto-restarts GPS if it stops
- ✅ Works even when app is closed/backgrounded

**The only thing that can stop it is:**
- ❌ Battery optimization (MUST be disabled)
- ❌ Swiping away the notification
- ❌ Force-closing the app
- ❌ Manufacturer-specific battery restrictions
