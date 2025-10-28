import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useSegments } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
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
    console.log('📱 Setting up notification response handlers...');

    // Handle notification tap when app is running or in background
    const subscription = Notifications.addNotificationResponseReceivedListener(
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

    console.log('✅ Notification response handlers configured');

    return () => {
      console.log('🔌 Cleaning up notification subscription');
      subscription.remove();
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