# Driver Ride Notifications - Best Practices for React Native + Expo

## Goal
**Ensure drivers NEVER miss ride requests, even when app is closed/killed.**

## Current Setup Analysis

✅ **What You Already Have:**
- Expo Push Notifications configured
- Push token registration system
- Server-side push notification edge function
- Android permissions: `POST_NOTIFICATIONS`, `WAKE_LOCK`, `USE_FULL_SCREEN_INTENT`
- Notification handler configured
- High-priority notification channel

## The Problem with "Over All Apps" Notifications

**What drivers need:**
1. App should **auto-open** when ride request comes
2. Notification should be **impossible to miss** (even when phone is locked)
3. Should work when app is **completely closed**

**Reality Check:**
- Android 10+ **blocks apps from auto-launching** from background for security
- "Draw over other apps" (SYSTEM_ALERT_WINDOW) doesn't work for closed apps
- Expo Go limitations: Many native features don't work in Expo Go

## Best Solution: High-Priority Push Notifications with Full-Screen Intent

### What This Does:
1. ✅ Shows notification even when app is closed/killed
2. ✅ Wakes screen on locked phone
3. ✅ Shows as full-screen alert on Android (like incoming call)
4. ✅ Plays sound and vibrates
5. ✅ Tapping opens app directly to ride request
6. ✅ Works with Expo managed workflow

### What It CANNOT Do:
- ❌ Auto-open app without user tap (Android security prevents this)
- ❌ Force driver to respond (user can still dismiss)

## Implementation Steps

### Step 1: Update Notification Configuration ✅

Your current setup already has most of this, but let's enhance it:

**File: `app.config.js`**

```javascript
android: {
  permissions: [
    "POST_NOTIFICATIONS",
    "VIBRATE",
    "USE_FULL_SCREEN_INTENT",  // ✅ Already have this
    "WAKE_LOCK",                // ✅ Already have this
    "SYSTEM_ALERT_WINDOW",      // ✅ Already have this
    "RECEIVE_BOOT_COMPLETED"    // ✅ Already have this
  ]
}
```

### Step 2: Configure Notification Category for Actions

**File: `services/RideNotificationService.ts`**

Add this to the service initialization:

```typescript
async setupNotificationCategories() {
  if (Platform.OS === 'android') {
    // Configure notification category with actions
    await Notifications.setNotificationCategoryAsync('ride-request', [
      {
        identifier: 'accept',
        buttonTitle: 'Accept Ride',
        options: {
          opensAppToForeground: true,
        },
      },
      {
        identifier: 'view',
        buttonTitle: 'View Details',
        options: {
          opensAppToForeground: true,
        },
      },
    ]);

    console.log('✅ Notification categories configured');
  }
}
```

### Step 3: Enhanced Notification Payload

**File: `supabase/functions/send-ride-push-notification/index.ts`**

Update the push notification to include deep linking:

```typescript
const message = {
  to: pushToken,
  sound: 'notification.mp3',
  title: '🚗 New Ride Request!',
  body: `${customerName}\n📍 ${pickupAddress}\n💰 ₹${fareAmount}`,
  data: {
    rideId: rideId,
    type: 'ride_request',
    action: 'open_ride_details',
    url: `taxidriver://ride/${rideId}`, // Deep link
  },
  priority: 'high',
  categoryId: 'ride-request',
  // Android-specific
  android: {
    channelId: 'ride-requests',
    priority: 'max',
    sound: 'notification.mp3',
    vibrate: [0, 250, 250, 250],
    sticky: true,
    autoDismiss: false,
  },
  // iOS-specific (for future)
  ios: {
    sound: 'notification.mp3',
    badge: 1,
    categoryId: 'ride-request',
  },
};
```

### Step 4: Handle Notification Responses

**File: `app/_layout.tsx` or dedicated handler**

Add this to handle when driver taps notification:

```typescript
useEffect(() => {
  // Handle notification tap when app was closed
  const subscription = Notifications.addNotificationResponseReceivedListener(
    (response) => {
      const data = response.notification.request.content.data;

      if (data.type === 'ride_request' && data.rideId) {
        console.log('📱 Notification tapped - opening ride:', data.rideId);

        // Navigate to ride details
        router.push(`/(tabs)/rides?highlight=${data.rideId}`);
      }
    }
  );

  // Handle notification received when app was killed
  Notifications.getLastNotificationResponseAsync().then((response) => {
    if (response) {
      const data = response.notification.request.content.data;

      if (data.type === 'ride_request' && data.rideId) {
        console.log('📱 App opened from notification:', data.rideId);
        router.push(`/(tabs)/rides?highlight=${data.rideId}`);
      }
    }
  });

  return () => subscription.remove();
}, []);
```

## Alternative Approach: Foreground Service with Polling

**For maximum reliability when app is "closed but not killed":**

### Benefits:
- ✅ App stays running in background
- ✅ Can show notifications immediately
- ✅ More reliable than pure push notifications
- ✅ Works even with poor network

### Implementation:

**File: `services/ForegroundRideMonitor.ts`** (new file)

```typescript
import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';
import { supabase } from '../utils/supabase';

const FOREGROUND_TASK = 'ride-monitor-foreground';

// Register background task
TaskManager.defineTask(FOREGROUND_TASK, async () => {
  try {
    // Poll for new ride requests every 5 seconds
    const driverId = await getDriverId(); // Get from AsyncStorage

    const { data: rides } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', driverId)
      .eq('type', 'ride_request')
      .eq('read', false)
      .order('created_at', { ascending: false })
      .limit(1);

    if (rides && rides.length > 0) {
      // Show local notification
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '🚗 New Ride Request!',
          body: 'Tap to view details',
          data: { rideId: rides[0].data.ride_id },
          sound: 'notification.mp3',
          priority: Notifications.AndroidNotificationPriority.MAX,
        },
        trigger: null,
      });
    }

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('❌ Error in foreground monitor:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export class ForegroundRideMonitor {
  static async start() {
    // Show persistent notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'A1 Taxi - Driver Online',
        body: 'Monitoring for ride requests...',
        data: { type: 'foreground_service' },
        priority: Notifications.AndroidNotificationPriority.LOW,
        android: {
          channelId: 'driver-foreground-service',
          sticky: true,
          autoDismiss: false,
        },
      },
      trigger: null,
    });

    // Start background monitoring
    await TaskManager.registerTaskAsync(FOREGROUND_TASK);
  }

  static async stop() {
    await TaskManager.unregisterTaskAsync(FOREGROUND_TASK);
    await Notifications.dismissAllNotificationsAsync();
  }
}
```

## Recommended Solution: Hybrid Approach

**Combine both methods for maximum reliability:**

### 1. Push Notifications (Primary)
- Works when app is completely killed
- Reliable delivery via Expo Push Service
- Low battery impact

### 2. Foreground Service (Backup)
- Works when app is in background
- Shows persistent notification that app is monitoring
- Immediate local notifications
- Higher battery usage but more reliable

### 3. Visual Alert in App (Tertiary)
- Auto-popup modal when ride request comes while app is open
- Prominent button on home screen showing pending rides

## Implementation Plan

### Phase 1: Enhanced Push Notifications (Do This First) ✅

```typescript
// 1. Update RideNotificationService
async showRideRequestNotification(rideData: {
  rideId: string;
  rideCode: string;
  pickupAddress: string;
  customerName: string;
  fareAmount: number;
}) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '🚗 NEW RIDE REQUEST!',
      body: `${rideData.customerName}\n📍 ${rideData.pickupAddress}\n💰 ₹${rideData.fareAmount}\n\n⏰ TAP TO ACCEPT NOW!`,
      data: {
        rideId: rideData.rideId,
        rideCode: rideData.rideCode,
        type: 'ride_request',
        action: 'open_app',
      },
      sound: 'notification.mp3',
      priority: Notifications.AndroidNotificationPriority.MAX,
      vibrate: [0, 250, 250, 250, 250, 250], // Longer vibration
      badge: 1,
      categoryIdentifier: 'ride-request',
      android: {
        channelId: 'ride-requests',
        sticky: true,
        autoDismiss: false,
        color: '#FF0000', // Red for urgency
        // This makes it show as heads-up notification
        importance: Notifications.AndroidImportance.MAX,
      },
    },
    trigger: null,
  });
}
```

### Phase 2: Add Prominent Home Screen Alert

**File: `app/(tabs)/index.tsx`**

Add a floating alert button:

```typescript
{pendingRides.length > 0 && (
  <Pressable
    style={styles.rideAlertButton}
    onPress={() => router.push('/(tabs)/rides')}
  >
    <View style={styles.rideAlertContent}>
      <Text style={styles.rideAlertTitle}>
        🚗 {pendingRides.length} NEW RIDE{pendingRides.length > 1 ? 'S' : ''}!
      </Text>
      <Text style={styles.rideAlertSubtitle}>
        TAP TO VIEW & ACCEPT
      </Text>
    </View>
    <View style={styles.rideAlertPulse} />
  </Pressable>
)}

const styles = StyleSheet.create({
  rideAlertButton: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
    backgroundColor: '#FF0000',
    borderRadius: 12,
    padding: 20,
    elevation: 10,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    zIndex: 1000,
  },
  rideAlertContent: {
    alignItems: 'center',
  },
  rideAlertTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rideAlertSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 4,
  },
  rideAlertPulse: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FF0000',
    opacity: 0.3,
    borderRadius: 12,
    // Add animation
  },
});
```

### Phase 3: Auto-Scroll to Ride When Opened from Notification

**File: `app/(tabs)/rides.tsx`**

```typescript
export default function RidesScreen() {
  const { pendingRides } = useRide();
  const searchParams = useSearchParams();
  const highlightRideId = searchParams.get('highlight');

  useEffect(() => {
    if (highlightRideId) {
      // Find the ride and scroll to it
      const rideIndex = pendingRides.findIndex(r => r.id === highlightRideId);
      if (rideIndex !== -1) {
        // Scroll to ride and highlight it
        console.log('📍 Highlighting ride:', highlightRideId);
        // Add visual highlight
        setHighlightedRide(highlightRideId);
        setTimeout(() => setHighlightedRide(null), 3000);
      }
    }
  }, [highlightRideId, pendingRides]);

  return (
    <View>
      {pendingRides.map(ride => (
        <RideCard
          key={ride.id}
          ride={ride}
          highlighted={highlightedRide === ride.id}
        />
      ))}
    </View>
  );
}
```

## Battery Optimization Settings

**Critical for notifications to work when app is closed:**

The driver must disable battery optimization for your app:

**Auto-prompt user on first launch:**

```typescript
import { Platform, Linking } from 'react-native';

async function requestBatteryOptimizationExemption() {
  if (Platform.OS === 'android') {
    // This requires a native module or custom dev client
    // For managed workflow, guide user manually
    Alert.alert(
      'Enable Reliable Notifications',
      'To ensure you never miss ride requests:\n\n' +
      '1. Go to Settings\n' +
      '2. Search for "Battery"\n' +
      '3. Find "A1 Taxi"\n' +
      '4. Set to "Unrestricted"\n\n' +
      'Would you like to open Settings now?',
      [
        { text: 'Later', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => Linking.openSettings()
        },
      ]
    );
  }
}
```

## Testing Checklist

### Test 1: App in Foreground
- [ ] Ride request comes
- [ ] Notification banner shows at top
- [ ] Sound plays
- [ ] Phone vibrates
- [ ] Home screen shows alert button
- [ ] Tapping notification stays in app

### Test 2: App in Background
- [ ] Minimize app
- [ ] Ride request comes
- [ ] Notification shows in tray
- [ ] Sound plays
- [ ] Phone vibrates
- [ ] Tapping notification opens app to rides screen

### Test 3: App Completely Closed
- [ ] Force close app (swipe away)
- [ ] Ride request comes
- [ ] Notification shows in tray
- [ ] Sound plays
- [ ] Phone vibrates
- [ ] Tapping notification launches app and navigates to ride

### Test 4: Phone Locked
- [ ] Lock phone
- [ ] Ride request comes
- [ ] Screen wakes up
- [ ] Notification shows on lock screen
- [ ] Sound plays (even in silent mode with vibration)
- [ ] Unlocking and tapping opens app

### Test 5: Do Not Disturb
- [ ] Enable DND
- [ ] Set app as exception (Settings > DND > Apps > A1 Taxi)
- [ ] Ride request comes
- [ ] Notification breaks through DND

## Known Limitations

### Cannot Do (Android Security):
1. ❌ Auto-open app without user tap
2. ❌ Force driver to accept/decline
3. ❌ Show overlay when app is killed (requires foreground service)
4. ❌ 100% guarantee notification delivery (depends on device manufacturer)

### Can Do:
1. ✅ Show high-priority notification (like incoming call UI)
2. ✅ Wake screen on locked phone
3. ✅ Play sound and vibrate (even in DND if configured)
4. ✅ Auto-navigate to ride when tapped
5. ✅ Show prominent alert when app is open

## Device-Specific Issues

### Samsung / Xiaomi / Huawei:
These manufacturers are aggressive with battery optimization.

**Solution:** Provide setup guide in app:
```
Settings > Apps > A1 Taxi > Battery
- Set to "Unrestricted"

Settings > Apps > A1 Taxi > Notifications
- Enable "Show as pop-up"
- Enable "Override Do Not Disturb"
```

## Recommendation: What to Implement Now

### Priority 1 (Must Have):
1. ✅ High-priority push notifications (already have most of this)
2. ✅ Enhanced notification with clear call-to-action
3. ✅ Battery optimization prompt
4. ✅ Notification tap handling with deep linking

### Priority 2 (Should Have):
1. ✅ Prominent home screen alert button
2. ✅ Auto-highlight ride when opened from notification
3. ✅ Setup guide for device-specific settings

### Priority 3 (Nice to Have):
1. ⚪ Foreground service for extra reliability
2. ⚪ Notification action buttons (Accept/View)
3. ⚪ Custom notification sound for ride requests

## Summary

**Best Approach:**
Use **Expo Push Notifications with high-priority configuration** - this is the most reliable and battery-efficient solution that works with Expo managed workflow.

**Key Success Factors:**
1. High-priority notification channel
2. MAX importance level
3. Sticky + non-dismissible for critical rides
4. Wake lock and full-screen intent permissions
5. User must disable battery optimization
6. Clear visual/audio alerts
7. Deep linking to ride details on tap

**Reality:**
You **cannot** auto-open the app without user interaction due to Android security. But you **can** make it **very hard to miss** with:
- Full-screen notification (like incoming call)
- Loud sound + strong vibration
- Screen wake on locked phone
- Prominent in-app alerts

Your current setup is 80% there - you just need to enhance the notification priority and add deep linking!
