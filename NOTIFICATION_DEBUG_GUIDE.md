# Notification Debugging Guide

## CRITICAL: Did You Rebuild the APK?

**⚠️ IMPORTANT: Changes only work AFTER rebuilding the APK!**

The fixes added:
1. Background notification handler
2. Permission changes
3. Comprehensive logging

**ALL of these require a NEW BUILD to take effect!**

```bash
# Rebuild NOW
eas build --platform android --profile production
```

**If you're testing with old APK, notifications will STILL only work when app is open!**

---

## Debug Logging Added

### What Logs to Check

All notification events are now logged to:
1. **Console (adb logcat)**
2. **Database (debug_logs table)**

### Logging Categories Added

1. **BackgroundNotificationHandler**
   - Module loaded
   - Task defined
   - Registration started
   - Registration result

2. **BackgroundNotificationTask**
   - Task triggered (when notification arrives with app closed)
   - Notification received
   - Ride request details
   - Task completed

3. **RootLayout**
   - Notification handler setup
   - Channel creation
   - Listener registration

4. **NotificationHandler**
   - Notifications received in foreground

5. **NotificationReceived**
   - When notification arrives (app open)

6. **NotificationTap**
   - When user taps notification

7. **PushNotificationService**
   - Registration process
   - Permission checks
   - Token obtained
   - Token stored

---

## Step-by-Step Debugging

### Step 1: Check if New APK is Installed

```bash
# Check app version and build
adb shell dumpsys package com.a1taxi.driver | grep versionName

# Check when app was installed
adb shell dumpsys package com.a1taxi.driver | grep firstInstallTime
```

**If build date is OLD, you're using old APK!**

### Step 2: Check Permissions

```bash
# Check if POST_NOTIFICATIONS permission is granted
adb shell dumpsys package com.a1taxi.driver | grep POST_NOTIFICATIONS
```

**Expected:**
```
android.permission.POST_NOTIFICATIONS: granted=true
```

**If NOT granted:**
- Old APK doesn't have permission
- Or user didn't approve

### Step 3: Check Background Task Registration

**Open app and check logs:**

```bash
adb logcat | grep "Background"
```

**Expected logs (with NEW APK):**
```
📱 Importing BackgroundNotificationHandler
📱 Calling registerBackgroundNotificationTask
📱 Background notification task registered successfully
✅ Background notification task registration: SUCCESS
```

**If you DON'T see these logs:**
- You're using old APK
- Or registration failed

### Step 4: Check Push Token

**In app, go online as driver, then check:**

```bash
adb logcat | grep "push token"
```

**Expected:**
```
✅ Expo push token obtained: ExponentPushToken[xxxxx]
💾 Storing push token in database...
```

**Also check database:**
```sql
SELECT full_name, expo_push_token 
FROM drivers 
WHERE id = '<your-driver-id>';
```

**Expected:** Token should be like `ExponentPushToken[xxxxxxxxxx]`

### Step 5: Test Notification Delivery

#### Test A: App OPEN (Should already work)

1. Open app, driver online
2. Create ride from admin
3. **Check logs immediately:**

```bash
adb logcat | grep -E "Notification|notification"
```

**Expected logs:**
```
📱 Notification received in foreground
📱 Notification received while app is open
🚗 New ride request notification received
Ride ID: <ride-id>
Customer: <customer-name>
```

#### Test B: App CLOSED (THE KEY TEST)

1. Open app, go online
2. **CLOSE app completely** (swipe away from recent apps)
3. Wait 5 seconds
4. Create ride from admin
5. **Check if notification appears** on device
6. **Check logs:**

```bash
adb logcat | grep -E "Background|BACKGROUND"
```

**Expected logs (with NEW APK):**
```
📱 Background notification task triggered
📨 Received background notification: { title: "🚗 New Ride Request!", ... }
🚗 Ride request notification in background
Ride ID: <ride-id>
Customer: <customer-name>
✅ Background notification task completed
```

**If you DON'T see "Background notification task triggered":**
- Background task is NOT registered
- This means you're using OLD APK!

### Step 6: Check Database Logs

```sql
-- Run the debug script
\i DEBUG_NOTIFICATIONS.sql

-- Or check specific categories
SELECT category, action, details, created_at
FROM debug_logs
WHERE category LIKE '%Notification%'
ORDER BY created_at DESC
LIMIT 50;
```

**Look for:**
1. `BackgroundNotificationHandler` logs
2. `BackgroundNotificationTask` logs
3. `PushNotificationService` logs

**If you DON'T see these categories:**
- Logging not working
- Or OLD APK without new code

---

## Common Issues and Solutions

### Issue 1: No "Background notification task" logs

**Symptom:** 
- Notifications work when app is open
- No notifications when app is closed
- No "Background notification task triggered" in logs

**Cause:** OLD APK - background task not registered

**Solution:** REBUILD APK!

```bash
eas build --platform android --profile production
```

### Issue 2: "Background notification task" logs appear but no notification

**Symptom:**
- Logs show "Background notification task triggered"
- But no notification appears on device

**Possible causes:**
1. Do Not Disturb mode enabled
2. Battery optimization blocking app
3. Notification channel disabled

**Solutions:**

```bash
# Check notification channel
adb shell dumpsys notification | grep a1taxi

# Check battery optimization
adb shell dumpsys deviceidle whitelist | grep a1taxi
```

**Settings to check:**
- Settings → Apps → A1 Taxi → Notifications → Ride Requests (Urgent) → Enabled
- Settings → Apps → A1 Taxi → Battery → Unrestricted
- Settings → Do Not Disturb → OFF (or add A1 Taxi to exceptions)

### Issue 3: Background task registration fails

**Symptom:**
```
❌ Failed to register background notification task
```

**Check logs for error:**
```bash
adb logcat | grep "register.*notification"
```

**Possible causes:**
1. expo-notifications not properly installed
2. expo-task-manager not properly installed
3. Native modules not linked (need rebuild)

**Solution:**
```bash
# Clean and rebuild
rm -rf node_modules android
npm install
eas build --platform android --profile production
```

### Issue 4: Push token not stored

**Symptom:**
- App works
- No errors
- But notifications never arrive (even when open)

**Check:**
```sql
SELECT id, full_name, expo_push_token FROM drivers;
```

**If expo_push_token is NULL:**
- Token registration failed
- Check RPC function exists:

```sql
SELECT routine_name 
FROM information_schema.routines 
WHERE routine_name = 'update_driver_push_token';
```

**If function doesn't exist, create it:**
(It should already exist from migrations)

---

## Testing Checklist

Use this checklist to systematically test:

### Before Testing

- [ ] Rebuilt APK with `eas build`
- [ ] Installed new APK (uninstall old first)
- [ ] Enabled adb logging: `adb logcat | grep -E "Notification|Background|notification"`

### Basic Tests

- [ ] Open app → See "Background notification task registered successfully"
- [ ] Go online → See "Expo push token obtained"
- [ ] Check database → Driver has valid ExponentPushToken

### Notification Tests

**App Open:**
- [ ] Create ride → Notification appears
- [ ] Check logs → "Notification received while app is open"
- [ ] Tap notification → Opens rides tab

**App Background (Minimized):**
- [ ] Minimize app (don't close)
- [ ] Create ride → Notification appears in tray
- [ ] Check logs → Should see notification logs
- [ ] Tap notification → App opens to rides tab

**App Closed (Killed):**
- [ ] Close app completely (swipe away)
- [ ] Wait 5 seconds
- [ ] Create ride → **Notification should appear!**
- [ ] Check logs → **"Background notification task triggered"**
- [ ] Tap notification → App opens to rides tab

### Database Verification

- [ ] Run `DEBUG_NOTIFICATIONS.sql`
- [ ] Check debug_logs table for BackgroundNotificationHandler entries
- [ ] Check ride_notifications table for sent notifications
- [ ] Verify push tokens are stored

---

## What Each Log Means

### Startup Logs (When app opens)

```
RootLayout: Setting up notification handlers
RootLayout: Importing BackgroundNotificationHandler
RootLayout: Calling registerBackgroundNotificationTask
BackgroundNotificationHandler: Starting registration
BackgroundNotificationHandler: Task already registered check: false
BackgroundNotificationHandler: Task registered successfully
RootLayout: Background task registration result: true
```

**Meaning:** Background notification system initialized successfully

### Foreground Notification (App open)

```
NotificationReceived: Notification arrived (app in foreground)
  title: "🚗 New Ride Request!"
  type: "ride_request"
  rideId: "xxx"
```

**Meaning:** Notification received while app is active

### Background Notification (App closed) ⭐ KEY

```
BackgroundNotificationTask: Task triggered
BackgroundNotificationTask: Notification received
  title: "🚗 New Ride Request!"
BackgroundNotificationTask: Ride request notification
  rideId: "xxx"
  customerName: "John"
BackgroundNotificationTask: Task completed
```

**Meaning:** Notification handled even though app was closed! ✅

### Notification Tap

```
NotificationTap: User tapped notification
  type: "ride_request"
  rideId: "xxx"
NotificationTap: Navigating to rides tab
```

**Meaning:** User interacted with notification

---

## Next Steps

1. **REBUILD APK** (if not done yet)
2. **Install new APK**
3. **Follow testing checklist**
4. **Check logs at each step**
5. **Run DEBUG_NOTIFICATIONS.sql**
6. **Report findings**

---

## Reporting Issues

If still not working, provide:

1. **APK build date/time**
2. **Permission status** (POST_NOTIFICATIONS)
3. **Background task registration logs**
4. **Push token from database**
5. **Logs when creating ride with app closed**
6. **Database debug_logs entries**

Without this information, we can't diagnose the issue!

---

## Critical Reminder

**⚠️ THE FIXES ONLY WORK WITH NEW APK!**

**Old APK:**
- ❌ No background task handler
- ❌ No logging
- ❌ Wrong permissions

**New APK:**
- ✅ Background task registered
- ✅ Comprehensive logging
- ✅ Correct permissions

**If notifications only work when app is open, you're using OLD APK!**

**REBUILD NOW:**
```bash
eas build --platform android --profile production
```
