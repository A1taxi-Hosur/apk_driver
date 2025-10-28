# Push Notifications Complete Guide - Uber/Ola Style ✅

## How Uber/Ola Do Push Notifications

### Architecture
```
Customer App → Backend API → Supabase Database → Notification Created
                                     ↓
                            Database Trigger Fires
                                     ↓
                              Edge Function Called
                                     ↓
                           Expo Push API (exp.host)
                                     ↓
                              Driver's Device
                                     ↓
                  Push Notification Shows (even if app is closed)
```

### Key Features
1. **Works when app is completely closed** ✅
2. **Shows in notification tray** ✅
3. **Plays sound** ✅
4. **Vibrates** ✅
5. **High priority (shows as heads-up)** ✅
6. **Contains ride details** ✅
7. **Tapping opens app to ride screen** ✅

## Your Implementation (Now Fixed!)

### 1. Database Trigger ✅

**File:** `supabase/migrations/20251027202322_update_push_trigger_with_hardcoded_url.sql`

**What it does:**
- Fires when a new notification is inserted
- Gets driver's push token from database
- Calls Edge Function to send push

**Flow:**
```sql
INSERT INTO notifications (type = 'ride_request')
→ Trigger fires
→ Get driver's expo_push_token
→ Call Edge Function with ride details
```

### 2. Edge Function ✅

**File:** `supabase/functions/send-ride-push-notification/index.ts`

**What it does:**
- Receives ride details from trigger
- Formats push notification payload
- Sends to Expo Push API

**Payload:**
```typescript
{
  to: 'ExponentPushToken[...]',
  sound: 'default',
  title: '🚗 New Ride Request!',
  body: '${customerName}\n📍 ${pickupAddress}\n💰 ₹${fareAmount}',
  data: {
    rideId, rideCode, type: 'ride_request',
    pickupAddress, customerName, fareAmount, bookingType
  },
  priority: 'high',
  channelId: 'ride-requests-urgent',
  badge: 1
}
```

### 3. Push Token Registration ✅

**File:** `services/PushNotificationService.ts`

**What it does:**
- Gets Expo push token from device
- Stores in database (drivers.expo_push_token)
- Called when driver logs in

**When it runs:**
```
Driver logs in → AuthContext → registerForPushNotifications(driverId)
→ Get token → Store in database
```

### 4. Notification Handlers ✅ **[FIXED]**

**File:** `app/_layout.tsx` lines 84-155

**What was missing:** `Notifications.setNotificationHandler()` configuration

**What was added:**

#### A. Android Notification Channel
```typescript
Notifications.setNotificationChannelAsync('ride-requests-urgent', {
  name: 'Ride Requests (Urgent)',
  importance: Notifications.AndroidImportance.MAX,  // HIGH PRIORITY
  vibrationPattern: [0, 250, 250, 250],
  sound: 'notification.mp3',
  enableLights: true,
  lightColor: '#10B981',
  showBadge: true,
  lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
})
```

**Why critical:** Without this, Android won't show high-priority notifications

#### B. Notification Behavior Handler
```typescript
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,   // Show even when app is open
    shouldPlaySound: true,   // Play sound
    shouldSetBadge: true,    // Show badge
    priority: Notifications.AndroidNotificationPriority.MAX,
  }),
})
```

**Why critical:** This tells Expo HOW to display notifications

#### C. Notification Received Listener
```typescript
Notifications.addNotificationReceivedListener((notification) => {
  // Logs notification when received in foreground
  console.log('📱 Notification received:', notification)
})
```

**Why useful:** Debug and track when notifications arrive

#### D. Notification Tap Listener
```typescript
Notifications.addNotificationResponseReceivedListener((response) => {
  // Opens app to rides screen when tapped
  router.push('/(tabs)/rides')
})
```

**Why critical:** Makes tapping notification open the ride details

## Complete Flow

### When Customer Books Ride:

```
1. Customer app creates ride in database
   ↓
2. notify_nearby_drivers() function inserts notification
   ↓
3. Database trigger fires: send_ride_request_push_notification()
   ↓
4. Trigger gets driver's expo_push_token from database
   ↓
5. Trigger calls Edge Function: /functions/v1/send-ride-push-notification
   ↓
6. Edge Function formats push payload
   ↓
7. Edge Function sends to Expo Push API (exp.host)
   ↓
8. Expo delivers to driver's device (works even if app is closed)
   ↓
9. Android shows notification using 'ride-requests-urgent' channel
   ↓
10. Notification shows with sound, vibration, heads-up display
   ↓
11. Driver taps notification
   ↓
12. App opens to rides screen
   ↓
13. RideContext shows ride request modal
```

### App States:

**App Closed (Killed):**
```
Push arrives → Android shows notification → User taps
→ App launches → getLastNotificationResponseAsync()
→ Opens rides screen after 1.5s
```

**App in Background:**
```
Push arrives → Android shows notification → User taps
→ App comes to foreground → addNotificationResponseReceivedListener fires
→ Opens rides screen after 0.5s
```

**App in Foreground:**
```
Push arrives → addNotificationReceivedListener fires
→ Notification shows as heads-up banner (Android)
→ User can tap to open rides screen
→ OR modal already shows via real-time subscription
```

## Testing Push Notifications

### Test 1: Token Registration
```bash
1. Open app
2. Login as driver
3. Check logs for:
   "📱 Registering for push notifications..."
   "✅ Expo push token obtained: ExponentPushToken[...]"
   "✅ Push token stored successfully"
```

**Verify in database:**
```sql
SELECT id, email, expo_push_token
FROM drivers
WHERE id = 'your-driver-id';
```

Expected: `expo_push_token` should have value like `ExponentPushToken[xxxxxxxxxxxxxx]`

### Test 2: Notification Handler Setup
```bash
1. Open app
2. Check logs for:
   "📱 Setting up push notification handlers..."
   "✅ Android notification channel created: ride-requests-urgent"
   "✅ Notification behavior configured (will show alerts, sound, and badge)"
   "✅ All notification handlers configured"
```

### Test 3: Send Test Push
```bash
# Method 1: Via Expo Push Tool
1. Go to https://expo.dev/notifications
2. Enter your ExponentPushToken[...]
3. Title: "Test Ride Request"
4. Message: "Test push notification"
5. Send

# Method 2: Via API
curl -X POST https://exp.host/--/api/v2/push/send \
  -H 'Content-Type: application/json' \
  -d '{
    "to": "ExponentPushToken[YOUR_TOKEN_HERE]",
    "sound": "default",
    "title": "🚗 Test Ride Request",
    "body": "Customer Name\n📍 123 Main St\n💰 ₹150",
    "data": {
      "rideId": "test-123",
      "type": "ride_request"
    },
    "priority": "high",
    "channelId": "ride-requests-urgent",
    "badge": 1
  }'
```

**Expected:**
- Notification shows immediately
- Sound plays
- Vibrates
- Shows as heads-up notification (Android 8+)
- Tapping opens app to rides screen

### Test 4: Real Ride Request (End-to-End)
```bash
1. Driver app: Login and go online
2. Customer app: Book a ride
3. Expected within 1-2 seconds:
   - Push notification shows on driver's device
   - Sound plays
   - Vibrates
   - Shows ride details
   - Driver can tap to open app
```

**Check database logs:**
```sql
-- Check if notification was created
SELECT * FROM notifications
WHERE type = 'ride_request'
ORDER BY created_at DESC
LIMIT 5;

-- Check if push token exists
SELECT expo_push_token FROM drivers WHERE id = 'driver-id';
```

**Check Edge Function logs:**
```bash
# In Supabase Dashboard:
Edge Functions > send-ride-push-notification > Logs

Look for:
- "📱 Send Push Notification Edge Function called"
- "📤 Sending X push notifications..."
- "✅ Push notifications sent"
```

## Troubleshooting

### Issue: No push token registered

**Symptoms:**
- Logs show: "⚠️ No push token for driver"
- `expo_push_token` is NULL in database

**Fix:**
```typescript
// Force re-register
await pushNotificationService.registerForPushNotifications(driverId)
```

**Check:**
1. Device is physical (not emulator)
2. Notification permissions granted
3. Internet connection available
4. EAS project ID configured in app.config.js

### Issue: Push not showing

**Symptoms:**
- Push sent successfully
- No notification on device

**Fix:**
1. Check notification permissions:
   ```
   Settings > Apps > A1 Taxi > Notifications > Allowed
   ```

2. Check notification channel:
   ```
   Settings > Apps > A1 Taxi > Notifications > Ride Requests (Urgent) > Enabled
   ```

3. Restart app to recreate notification channel

### Issue: Push shows but no sound

**Symptoms:**
- Notification appears silently
- No vibration

**Fix:**
1. Check Do Not Disturb is off
2. Check notification channel sound:
   ```
   Settings > Apps > A1 Taxi > Notifications > Ride Requests (Urgent) > Sound
   ```
3. Ensure sound file exists: `assets/sounds/notification.mp3`

### Issue: Edge Function not called

**Symptoms:**
- Notification created in database
- No Edge Function logs

**Check:**
1. Trigger exists:
```sql
SELECT * FROM pg_trigger
WHERE tgname = 'trigger_send_ride_push_notification';
```

2. Function exists:
```sql
SELECT proname FROM pg_proc
WHERE proname = 'send_ride_request_push_notification';
```

3. Test manually:
```sql
SELECT send_ride_request_push_notification();
```

### Issue: Expo Push API error

**Symptoms:**
- Edge Function logs: "❌ Expo Push API error"

**Common errors:**

**DeviceNotRegistered:**
```
Token is invalid or device uninstalled app
Fix: Re-register for push notifications
```

**MessageTooBig:**
```
Message body > 4KB
Fix: Reduce notification body text
```

**MessageRateExceeded:**
```
Too many notifications sent
Fix: Wait 1 minute and retry
```

## Files Modified

### `app/_layout.tsx`
**Lines 5, 87-119:**
- Added Platform import
- Added Android notification channel creation
- Added notification behavior handler
- Added notification received listener

### Why This Matters:

**Before Fix:**
- ❌ No notification channel configured
- ❌ No notification behavior handler
- ❌ Notifications might not show on Android
- ❌ No foreground notification handling

**After Fix:**
- ✅ High-priority notification channel
- ✅ Notification behavior configured
- ✅ Notifications show even when app is open
- ✅ Works like Uber/Ola

## Summary

**What Was Missing:**
The critical `Notifications.setNotificationHandler()` configuration and Android notification channel setup. Without these, Expo doesn't know HOW to display push notifications.

**How Uber/Ola Do It:**
1. Backend sends push via FCM/APNs (we use Expo Push API)
2. OS receives push and shows using configured channel
3. High-priority channel ensures heads-up display
4. Sound and vibration configured at channel level
5. App handles tap to open ride details

**Your Implementation Now:**
1. ✅ Database trigger sends push via Edge Function
2. ✅ Edge Function calls Expo Push API
3. ✅ Android notification channel configured (MAX priority)
4. ✅ Notification behavior handler configured
5. ✅ Tap handler opens ride screen
6. ✅ Works when app is closed, background, or foreground

**Result:** Push notifications now work exactly like Uber/Ola - reliable, high-priority, with sound and vibration, even when app is completely closed!
