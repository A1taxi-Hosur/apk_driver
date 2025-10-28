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

// CRITICAL: Import TripLocationTracker to register background task BEFORE app loads
import '@/services/TripLocationTracker';

// CRITICAL: Import RideNotificationService to configure notification handler BEFORE app loads
import '@/services/RideNotificationService';

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
    console.log('📱 Setting up push notification handlers...');

    // CRITICAL: Configure Android notification channel for high-priority notifications
    // This is ESSENTIAL for ride request notifications to work like Uber/Ola
    if (Platform.OS === 'android') {
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
        console.log('✅ Android notification channel created: ride-requests-urgent');
      }).catch((error) => {
        console.error('❌ Error creating notification channel:', error);
      });
    }

    // CRITICAL: Configure how notifications behave when received
    // This is what makes them work like Uber/Ola
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,      // Show alert even when app is in foreground
        shouldPlaySound: true,       // Play sound
        shouldSetBadge: true,        // Show badge
        priority: Notifications.AndroidNotificationPriority.MAX,  // Maximum priority
      }),
    });

    console.log('✅ Notification behavior configured (will show alerts, sound, and badge)');

    // Handle notification tap when app is running or in background
    const tapSubscription = Notifications.addNotificationResponseReceivedListener(
      async (response) => {
        const data = response.notification.request.content.data;

        console.log('📱 Notification tapped:', data);

        if (data.type === 'ride_request' && data.rideId) {
          console.log('🚗 Navigating to ride:', data.rideId);

          // Wait a moment for app to initialize if it was in background
          setTimeout(() => {
            router.push('/(tabs)/rides');
          }, 500);
        }
      }
    );

    // Handle notification received while app is in foreground
    const receivedSubscription = Notifications.addNotificationReceivedListener((notification) => {
      const data = notification.request.content.data;
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
    });

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