# Background Notification Testing Guide

## The Issue

Notifications only show when app is open, not when closed.

**This is NOT a notification library problem** - it's a background task execution issue.

## Why react-native-draw-overlay Won't Help

❌ **DON'T USE:**
- `react-native-draw-overlay`
- `react-native-android-overlay-permission`
- Any other system overlay libraries

**Reasons:**
1. Not compatible with Expo managed workflow
2. Wrong tool - they're for system overlays (chat heads), not notifications
3. Recent compatibility issues with React Native 0.76+
4. Uber/Lyft don't use these - they use notification system

## What You Have is CORRECT

✅ **You're using the right approach:**
- `expo-notifications` for notification display
- `expo-background-fetch` for background polling
- `expo-task-manager` for background tasks

This is the **industry standard** for ride-hailing apps.

## Debugging Steps

### Step 1: Verify Background Task Registration

Add logging to check if background task is registered:

```typescript
// Add to app startup (e.g., in AuthContext after driver loads)
import { backgroundRideMonitor } from '../services/BackgroundRideMonitor';

// Check status
const isMonitoring = await backgroundRideMonitor.isMonitoring();
const status = await backgroundRideMonitor.getStatus();

console.log('📊 Background monitoring active:', isMonitoring);
console.log('📊 Background fetch status:', status);
```

**Expected logs when driver is online:**
```
✅ Background ride monitoring started
📊 Background monitoring active: true
📊 Background fetch status: Available
```

### Step 2: Test Background Task Execution

The background task should log every 15 seconds. Check if you see these logs:

```
🔍 Background: Checking for new ride requests...
🔍 Background: Last check: 2024-10-27T12:34:56.789Z
✅ Background: Active session found, checking notifications...
```

**If you DON'T see these logs:**
- Background task is not executing
- Issue is with background task, not notifications

**If you DO see these logs:**
- Background task is running
- Issue might be notification display or query logic

### Step 3: Verify Notification Query

Add more detailed logging to BackgroundRideMonitor:

```typescript
// In BackgroundRideMonitor.ts, in the task definition
console.log('🔍 Query params:');
console.log('  - user_id:', session.user.id);
console.log('  - type: ride_request');
console.log('  - created_at >', twoMinutesAgo);

const { data: notifications, error } = await supabase...

console.log('📋 Query result:');
console.log('  - Error:', error);
console.log('  - Notifications found:', notifications?.length || 0);
console.log('  - Notifications:', JSON.stringify(notifications, null, 2));
```

### Step 4: Manual Background Task Trigger (Android)

Test the background task manually using ADB:

```bash
# Get your app's package name
adb shell pm list packages | grep taxi

# Trigger background fetch (Android 8+)
adb shell cmd jobscheduler run -f com.a1taxi.driver <job-id>

# Monitor logs
adb logcat | grep "Background:"
```

### Step 5: Test Notification Display Directly

Create a test button in your app to manually trigger notification:

```typescript
// Add to Profile or Settings screen
import { rideNotificationService } from '../services/RideNotificationService';

const testNotification = async () => {
  console.log('🧪 Testing notification display...');

  await rideNotificationService.showRideRequestNotification({
    rideId: 'test-123',
    rideCode: 'TEST-001',
    pickupAddress: 'Test Pickup Location, City',
    destinationAddress: 'Test Destination, City',
    customerName: 'Test Customer',
    fareAmount: 250,
    distance: 5.5,
    bookingType: 'regular',
  });

  console.log('✅ Test notification triggered');
};

// In your UI
<Button title="Test Notification" onPress={testNotification} />
```

**Test sequence:**
1. App open → Tap button → Should see notification ✅
2. App background → Tap button → Should see notification ✅
3. If both work → Notification display is fine, issue is background task

### Step 6: Check Android Battery Optimization

Some manufacturers kill background tasks aggressively:

```typescript
// Add to your app
import { Platform, Linking } from 'react-native';

const requestBatteryOptimizationExemption = () => {
  if (Platform.OS === 'android') {
    Linking.openSettings();
    // User needs to:
    // 1. Find "Battery" or "Battery Optimization"
    // 2. Select "All apps"
    // 3. Find "A1 Taxi Driver"
    // 4. Select "Don't optimize"
  }
};
```

**Manufacturers with aggressive battery optimization:**
- Xiaomi (MIUI) - Very aggressive ⚠️
- Huawei (EMUI) - Very aggressive ⚠️
- OnePlus (OxygenOS) - Moderate ⚠️
- Samsung (OneUI) - Minimal ✅
- Google Pixel (Stock Android) - Minimal ✅

### Step 7: Physical Device Testing

**CRITICAL:** Background tasks behave differently on emulator vs device.

**Test on physical device:**
1. Build APK: `eas build --platform android --profile preview`
2. Install on physical Android phone
3. Go online as driver
4. Close app completely
5. Wait 30 seconds
6. Create ride request from another device
7. Check if notification appears

**Expected behavior:**
- Notification should appear within 15-30 seconds ✅
- May not play sound (app too deep in background) ⚠️
- Full-screen notification should wake screen ✅

## Common Issues & Solutions

### Issue 1: Background Task Not Executing

**Symptoms:**
- No logs every 15 seconds
- No "Background: Checking for new ride requests..."

**Solutions:**
1. Rebuild APK (background tasks need native code)
2. Check battery optimization settings
3. Test on physical device (emulator unreliable)
4. Verify background fetch permission granted

### Issue 2: Notifications Not Showing

**Symptoms:**
- Background task runs (logs present)
- Finds new notifications
- But no visual notification appears

**Solutions:**
1. Check notification channel configuration
2. Verify notification permissions granted
3. Check "Do Not Disturb" mode on device
4. Test notification display directly (Step 5)

### Issue 3: Session Not Found in Background

**Symptoms:**
- Background task logs: "No active session, skipping check"

**Solutions:**
```typescript
// Verify session persists across app restarts
const { data: { session } } = await supabase.auth.getSession();
console.log('Session:', session ? 'Active' : 'None');
```

If session is lost, check Supabase auth token refresh settings.

### Issue 4: Notifications Dismissed Too Quickly

**Symptoms:**
- Notification appears briefly then disappears

**Solutions:**
```typescript
// Ensure sticky notification
{
  sticky: true,
  autoDismiss: false,
}
```

## Testing Checklist

Use this checklist to verify everything works:

### App Open Tests
- [ ] Go online as driver
- [ ] See foreground service notification
- [ ] Create ride request
- [ ] Notification appears instantly
- [ ] Sound plays
- [ ] Ride appears in pending list

### App Background Tests
- [ ] Go online as driver
- [ ] Press home button (don't kill app)
- [ ] Wait 10 seconds
- [ ] Create ride request
- [ ] Notification appears within 15-30 seconds
- [ ] Tap notification
- [ ] App comes to foreground
- [ ] Ride is visible

### App Closed Tests
- [ ] Go online as driver
- [ ] Swipe app away from recents
- [ ] Wait 20 seconds
- [ ] Create ride request
- [ ] Notification appears within 15-30 seconds
- [ ] Tap notification
- [ ] App restarts
- [ ] Ride is visible

### Phone Locked Tests
- [ ] Go online as driver
- [ ] Lock phone (screen off)
- [ ] Wait 10 seconds
- [ ] Create ride request
- [ ] Screen wakes up within 15-30 seconds
- [ ] Notification visible on lock screen
- [ ] Phone vibrates
- [ ] Unlock and tap → App opens

### Offline Tests
- [ ] Go offline as driver
- [ ] Foreground notification dismissed
- [ ] Create ride request
- [ ] No notification (driver is offline) ✅

## Expected Background Task Logs

When working correctly, you should see these logs every 15 seconds:

```
🔍 Background: Checking for new ride requests...
🔍 Background: Last check: 2024-10-27T12:34:56.789Z
🔍 Background: Time since last check: 15234 ms
✅ Background: Active session found, checking notifications...
📭 Background: No new ride requests
```

When new ride arrives:

```
🔍 Background: Checking for new ride requests...
✅ Background: Active session found, checking notifications...
🔔 Background: Found notification: abc-123-def
🆕 Background: NEW RIDE REQUEST DETECTED!
🆕 Background: Notification ID: abc-123-def
🆕 Background: Ride ID: ride-456
✅ Background: Notification displayed
✅ Background: Sound played
```

## Build & Deploy

After making any changes to background tasks:

```bash
# Must rebuild for native task changes
eas build --platform android --profile preview

# Or for local testing
expo run:android
```

## Alternative: Increase Polling Frequency

If 15 seconds is too slow, you can increase frequency:

```typescript
// In BackgroundRideMonitor.ts
const CHECK_INTERVAL = 10; // Change from 15 to 10 seconds

await BackgroundFetch.registerTaskAsync(BACKGROUND_RIDE_MONITOR_TASK, {
  minimumInterval: 10, // Android minimum is ~15s
  // ...
});
```

**Note:** Android enforces minimum ~15 seconds. Setting lower values may be ignored.

## Final Recommendation

**DO NOT add react-native-draw-overlay or any system overlay libraries.**

Your current implementation is correct. If notifications aren't working when app is closed:

1. ✅ Test on physical device (not emulator)
2. ✅ Check background task logs
3. ✅ Verify battery optimization settings
4. ✅ Ensure APK is rebuilt after background task changes
5. ✅ Follow testing checklist above

**The solution is debugging the existing system, not adding new libraries.**

## Success Criteria

✅ **Working correctly when:**
- Driver goes online → Foreground service appears
- Background task logs appear every 15 seconds
- New ride request → Notification within 15-30 seconds
- Works when app is closed/killed/locked
- Tap notification → App opens with ride visible

This is the **same architecture Uber and Lyft use** - no system overlays needed!
