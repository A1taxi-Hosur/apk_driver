# Push Notification Troubleshooting Guide

## Current Setup Status

✅ **Notification handler configured** (`RideNotificationService.ts` lines 4-11)
✅ **Handler imported in root layout** (`app/_layout.tsx` line 15)
✅ **EAS Project ID configured** (`app.config.js` line 93)
✅ **Android permissions configured** (includes `POST_NOTIFICATIONS`, `VIBRATE`, etc.)
✅ **Notification channels configured** (High-priority channel for ride requests)
✅ **expo-device package installed** (v6.0.2 - SDK 51 compatible)

## Why Notifications Might Not Show

### 1. Expo Push Token Not Registered

**Check:**
- Look for log message: "✅ Expo push token obtained"
- Look for log message: "✅ Push token stored successfully"

**Fix:**
The `PushNotificationService` should register the token automatically when driver logs in. Check `AuthContext.tsx` lines 139 and 425.

### 2. Physical Device Required

**Check:**
- Notifications only work on physical devices, not emulators
- Look for warning: "⚠️ Push notifications only work on physical devices"

**Fix:**
Test on a real Android device, not an emulator.

### 3. Notification Permissions Not Granted

**Check:**
- Android 13+ requires explicit notification permission
- Look for warning: "⚠️ Notification permissions not granted"

**Fix:**
The app should request permissions automatically. If not granted:
```
Settings > Apps > A1 Taxi > Notifications > Enable
```

### 4. Battery Optimization Blocking Notifications

**Check:**
Android might be killing the app in the background.

**Fix:**
```
Settings > Apps > A1 Taxi > Battery > Unrestricted
Settings > Battery > Battery Optimization > A1 Taxi > Don't optimize
```

### 5. Do Not Disturb Mode Enabled

**Check:**
DND mode might block notifications.

**Fix:**
- Disable DND, or
- Configure DND to allow notifications from A1 Taxi

### 6. Testing with Edge Function (Server-Side Push)

The app uses Expo Push Notifications sent from a Supabase Edge Function.

**Check Database Trigger:**
```sql
-- Verify the trigger exists
SELECT tgname, tgenabled
FROM pg_trigger
WHERE tgname = 'send_push_notification_on_ride';

-- Check if push tokens are stored
SELECT id, name, expo_push_token
FROM drivers
WHERE expo_push_token IS NOT NULL;
```

**Test Edge Function:**
```bash
# Check if edge function exists
supabase functions list

# View edge function logs
supabase functions logs send-ride-push-notification
```

**Manual Test:**
You can manually test the edge function by calling it:
```typescript
await supabase.functions.invoke('send-ride-push-notification', {
  body: {
    pushToken: 'ExponentPushToken[xxx]',
    title: 'Test Notification',
    body: 'Testing push notifications',
    data: { test: true }
  }
});
```

## Verification Steps

### Step 1: Check Notification Handler

Run the app and look for this log message:
```
✅ Ride notification service initialized
✅ Android notification channels configured
```

### Step 2: Check Push Token Registration

When driver logs in, look for:
```
📱 Registering for push notifications...
🔑 Getting Expo push token...
✅ Expo push token obtained: ExponentPushToken[xxx]
💾 Storing push token in database...
✅ Push token stored successfully
```

### Step 3: Test Local Notification

Add this test code to verify notifications work on device:

```typescript
import * as Notifications from 'expo-notifications';

// Test local notification
await Notifications.scheduleNotificationAsync({
  content: {
    title: "Test Notification",
    body: "If you see this, notifications are working!",
  },
  trigger: null,
});
```

If this works, the issue is with push notifications from server, not local notifications.

### Step 4: Check App State Handling

Notifications should show in all app states:
- **Foreground** (app is open): Shows banner at top
- **Background** (app is minimized): Shows in notification tray
- **Killed** (app is closed): Shows in notification tray

The notification handler is configured to show in all states (lines 4-11 in `RideNotificationService.ts`).

## Common Issues & Solutions

### Issue: "Notification appears but no sound"

**Cause:** Notification channel has sound disabled or file not found.

**Fix:**
1. Check `notification.mp3` exists in `assets/sounds/`
2. Verify channel configuration (line 65 in `RideNotificationService.ts`)
3. Rebuild app after adding sound file

### Issue: "Notification shows but doesn't bring app to foreground"

**Cause:** Android requires explicit app launch for full-screen intent.

**Fix:**
1. Add `USE_FULL_SCREEN_INTENT` permission (already added line 42 in `app.config.js`)
2. Use high-priority notification (already configured)
3. User must tap notification to open app

### Issue: "Notification not showing on Android 13+"

**Cause:** Android 13+ requires runtime permission for notifications.

**Fix:**
Already implemented in `RideNotificationService.ts` lines 33-44. Make sure user grants permission when prompted.

### Issue: "Push token not being stored in database"

**Cause:** RPC function might not exist or have permission issues.

**Check:**
```sql
-- Verify RPC function exists
SELECT proname FROM pg_proc WHERE proname = 'update_driver_push_token';

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'drivers';
```

**Fix:**
Create the RPC function if missing:
```sql
CREATE OR REPLACE FUNCTION update_driver_push_token(
  p_driver_id UUID,
  p_push_token TEXT
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE drivers
  SET expo_push_token = p_push_token,
      updated_at = NOW()
  WHERE id = p_driver_id;
END;
$$;
```

## Testing Checklist

Use this checklist to verify notifications work:

- [ ] Build app on physical device (not emulator)
- [ ] Grant notification permissions when prompted
- [ ] Check logs for "✅ Expo push token obtained"
- [ ] Check database for `expo_push_token` in drivers table
- [ ] Test local notification (code above) - should show
- [ ] Disable battery optimization for app
- [ ] Test with app in foreground - should show banner
- [ ] Test with app in background - should show in tray
- [ ] Test with app killed - should show in tray
- [ ] Tap notification - should open app
- [ ] Check notification sound plays
- [ ] Check notification vibration works

## Debugging Tools

### Enable Verbose Logging

All notification-related code already has console logs. Look for these prefixes:
- 📱 - General notification logs
- 🔔 - Notification shown
- ✅ - Success
- ⚠️ - Warning
- ❌ - Error

### Use React Native Debugger

```bash
# For Android
adb logcat *:S ReactNative:V ReactNativeJS:V
```

### Check Notification Permissions

```typescript
const { status } = await Notifications.getPermissionsAsync();
console.log('Notification permission:', status);
// Should be: "granted"
```

### Check Notification Channels (Android Only)

```typescript
const channels = await Notifications.getNotificationChannelsAsync();
console.log('Notification channels:', channels);
// Should include: "ride-requests" channel
```

## Best Practices

1. **Always test on physical device** - Emulators don't support push notifications properly
2. **Request permissions early** - Do it on app launch or login
3. **Store push token reliably** - Verify it's in database
4. **Handle all app states** - Foreground, background, and killed
5. **Use high-priority channels** - For critical ride request notifications
6. **Test notification tapping** - Ensure app opens correctly
7. **Monitor battery optimization** - Android kills apps aggressively
8. **Check Do Not Disturb** - Can block all notifications

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      Push Notification Flow                  │
└─────────────────────────────────────────────────────────────┘

1. Driver logs in
   └─> PushNotificationService.registerForPushNotifications()
       └─> Gets Expo Push Token
       └─> Stores in database (drivers.expo_push_token)

2. New ride created (by customer/admin)
   └─> Database trigger fires: send_push_notification_on_ride
       └─> Calls Edge Function: send-ride-push-notification
           └─> Gets driver's expo_push_token from database
           └─> Sends push via Expo Push API
               └─> Expo delivers to device

3. Device receives push
   └─> RideNotificationService.setNotificationHandler()
       └─> Shows notification (foreground/background/killed)
       └─> User taps notification
           └─> App opens
           └─> RideContext handles ride request
```

## Related Files

- `services/PushNotificationService.ts` - Push token registration
- `services/RideNotificationService.ts` - Notification handler & display
- `contexts/AuthContext.tsx` - Registers push token on login
- `contexts/RideContext.tsx` - Handles incoming ride notifications
- `app/_layout.tsx` - Imports notification handler before app loads
- `app.config.js` - Notification permissions & EAS project ID
- `supabase/functions/send-ride-push-notification/index.ts` - Server-side push
- `supabase/migrations/*_add_expo_push_token_to_drivers.sql` - Database schema
- `supabase/migrations/*_update_push_trigger_with_hardcoded_url.sql` - Database trigger

## Summary

The notification system is **fully configured** and should work on physical devices. If notifications still don't show:

1. ✅ Verify on physical device (not emulator)
2. ✅ Check notification permissions granted
3. ✅ Verify push token stored in database
4. ✅ Disable battery optimization
5. ✅ Check Do Not Disturb is off
6. ✅ Test local notification first
7. ✅ Check server-side edge function logs
8. ✅ Verify database trigger is enabled

**Most common issue:** Testing on emulator instead of physical device.

**Second most common:** Battery optimization killing the app in background.
