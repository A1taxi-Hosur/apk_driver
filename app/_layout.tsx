import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useSegments } from 'expo-router';
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { AuthProvider } from '@/contexts/AuthContext';
import { LocationProvider } from '@/contexts/LocationContext';
import { RideProvider } from '@/contexts/RideContext';
import { useAuth } from '@/contexts/AuthContext';
import { debugLog } from '@/utils/debugLogger';

// CRITICAL: Import TripLocationTracker to register background task BEFORE app loads
import '@/services/TripLocationTracker';

// CRITICAL: Import BackgroundNotificationHandler to handle notifications when app is CLOSED
import '@/services/BackgroundNotificationHandler';

function RootLayoutNav() {
  const { session, loading } = useAuth();
  const { driver } = useAuth();
  const segments = useSegments();
  const routerInstance = useRouter();

  useEffect(() => {
    if (loading) {
      console.log('Auth still loading...')
      return
    }

    const inAuthGroup = segments[0] === '(auth)';
    console.log('=== NAVIGATION CHECK ===')
    console.log('In auth group:', inAuthGroup)
    console.log('Has session:', !!session)
    console.log('Has driver:', !!driver)
    console.log('Current segments:', segments)
    console.log('Loading state:', loading)

    // Check for either Supabase session OR driver session
    const isAuthenticated = session || driver;
    console.log('Is authenticated:', isAuthenticated)

    if (!isAuthenticated && !inAuthGroup) {
      // Redirect to login if not authenticated
      console.log('Redirecting to login - not authenticated')
      routerInstance.replace('/(auth)/login');
    } else if (isAuthenticated && inAuthGroup) {
      // Redirect to main app if authenticated
      console.log('Redirecting to main app - authenticated')
      routerInstance.replace('/(tabs)');
    } else {
      console.log('No navigation needed - staying in current route')
    }
  }, [session, driver, loading, segments]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#10B981" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    debugLog('RootLayout', 'Setting up notification handlers', { platform: Platform.OS });
    console.log('📱 Setting up push notification handlers...');

    // CRITICAL: Register background notification task for when app is CLOSED
    (async () => {
      try {
        debugLog('RootLayout', 'Importing BackgroundNotificationHandler', {});
        const { registerBackgroundNotificationTask } = await import('@/services/BackgroundNotificationHandler');
        debugLog('RootLayout', 'Calling registerBackgroundNotificationTask', {});
        const success = await registerBackgroundNotificationTask();
        debugLog('RootLayout', 'Background task registration result', { success });
        console.log('✅ Background notification task registration:', success ? 'SUCCESS' : 'FAILED');
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        debugLog('RootLayout', 'Background task registration ERROR', { error: errorMsg });
        console.error('❌ Error registering background task:', error);
      }
    })();

    // CRITICAL: Configure Android notification channel for high-priority notifications
    // This is ESSENTIAL for ride request notifications to work like Uber/Ola
    if (Platform.OS === 'android') {
      debugLog('RootLayout', 'Creating Android notification channel', { channelId: 'ride-requests-urgent' });
      Notifications.setNotificationChannelAsync('ride-requests-urgent', {
        name: 'Ride Requests (Urgent)',
        description: 'High-priority notifications for new ride requests',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        sound: 'notification.mp3',
        enableLights: true,
        lightColor: '#10B981',
        enableVibrate: true,
        showBadge: true,
        lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      }).then(() => {
        debugLog('RootLayout', 'Android channel created successfully', {});
        console.log('✅ Android notification channel created: ride-requests-urgent');
      }).catch((error) => {
        debugLog('RootLayout', 'Android channel creation ERROR', { error: error.message || String(error) });
        console.error('❌ Error creating notification channel:', error);
      });
    }

    // CRITICAL: Configure how notifications behave when received
    // This is what makes them work like Uber/Ola
    debugLog('RootLayout', 'Setting notification handler', {});
    Notifications.setNotificationHandler({
      handleNotification: async (notification) => {
        debugLog('NotificationHandler', 'Notification received in foreground', {
          title: notification.request.content.title,
          body: notification.request.content.body,
          data: notification.request.content.data,
        });
        return {
          shouldShowAlert: true,      // Show alert even when app is in foreground
          shouldPlaySound: true,       // Play sound
          shouldSetBadge: true,        // Show badge
          priority: Notifications.AndroidNotificationPriority.MAX,  // Maximum priority
        };
      },
    });

    debugLog('RootLayout', 'Notification handler configured', {});
    console.log('✅ Notification behavior configured (will show alerts, sound, and badge)');

    // Handle notification tap when app is running or in background
    debugLog('RootLayout', 'Setting up notification tap listener', {});
    const tapSubscription = Notifications.addNotificationResponseReceivedListener(
      async (response) => {
        const data = response.notification.request.content.data;

        debugLog('NotificationTap', 'User tapped notification', {
          type: data.type,
          rideId: data.rideId,
          actionIdentifier: response.actionIdentifier,
        });
        console.log('📱 Notification tapped:', data);

        if (data.type === 'ride_request' && data.rideId) {
          debugLog('NotificationTap', 'Navigating to rides tab', { rideId: data.rideId });
          console.log('🚗 Navigating to ride:', data.rideId);

          // Wait a moment for app to initialize if it was in background
          setTimeout(() => {
            router.push('/(tabs)/rides');
          }, 500);
        }
      }
    );

    // Handle notification received while app is in foreground
    debugLog('RootLayout', 'Setting up notification received listener', {});
    const receivedSubscription = Notifications.addNotificationReceivedListener((notification) => {
      const data = notification.request.content.data;

      debugLog('NotificationReceived', 'Notification arrived (app in foreground)', {
        title: notification.request.content.title,
        type: data.type,
        rideId: data.rideId,
        customerName: data.customerName,
      });
      console.log('📱 Notification received while app is open:', data);

      // Log to help debugging
      if (data.type === 'ride_request') {
        console.log('🚗 New ride request notification received');
        console.log('Ride ID:', data.rideId);
        console.log('Customer:', data.customerName);
        console.log('Pickup:', data.pickupAddress);
      }
    });

    // Handle when app was opened from notification (app was killed)
    // Only available on native platforms (iOS/Android)
    if (Platform.OS !== 'web') {
      Notifications.getLastNotificationResponseAsync().then((response) => {
        if (response) {
          const data = response.notification.request.content.data;

          if (data.type === 'ride_request' && data.rideId) {
            console.log('📱 App opened from notification (was killed):', data.rideId);

            // Wait longer for app to fully initialize from killed state
            setTimeout(() => {
              router.push('/(tabs)/rides');
            }, 1500);
          }
        }
      }).catch((error) => {
        console.error('❌ Error getting last notification response:', error);
      });
    }

    console.log('✅ All notification handlers configured');

    return () => {
      console.log('🔌 Cleaning up notification subscriptions');
      tapSubscription.remove();
      receivedSubscription.remove();
    };
  }, []);

  return (
    <AuthProvider>
      <LocationProvider>
        <RideProvider>
          <RootLayoutNav />
          <StatusBar style="auto" />
        </RideProvider>
      </LocationProvider>
    </AuthProvider>
  );
}