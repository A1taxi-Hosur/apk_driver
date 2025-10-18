import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const BACKGROUND_LOCATION_TASK = 'background-location-task';
const BACKGROUND_FETCH_TASK = 'background-fetch-task';
const DRIVER_SESSION_KEY = 'driver_session';
const WEB_LOCATION_INTERVAL_KEY = 'web_location_interval';

// Background location task for native platforms
TaskManager.defineTask(BACKGROUND_LOCATION_TASK, async ({ data, error }) => {
  if (error) {
    console.error('Background location task error:', error);
    return;
  }

  if (data) {
    const { locations } = data as any;
    console.log('📍 Background location update:', locations);
    
    // Check if driver is still online
    const isDriverOnline = await checkDriverOnlineStatus();
    if (!isDriverOnline) {
      console.log('❌ Driver is offline, stopping background location');
      await stopBackgroundLocationTracking();
      return;
    }

    // Send location to database
    if (locations && locations.length > 0) {
      const location = locations[0];
      await sendLocationToDatabase(location);
    }
  }
});

// Background fetch task for periodic location updates
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  console.log('📍 Background fetch triggered for location update');
  
  try {
    // Check if driver is online
    const isDriverOnline = await checkDriverOnlineStatus();
    if (!isDriverOnline) {
      console.log('❌ Driver is offline, skipping background location update');
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }

    // Get current location
    const { status } = await Location.getForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('❌ Location permission not granted');
      return BackgroundFetch.BackgroundFetchResult.Failed;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
      timeout: 15000,
    });

    if (location) {
      await sendLocationToDatabase(location);
      console.log('✅ Background location update successful');
      return BackgroundFetch.BackgroundFetchResult.NewData;
    }

    return BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    console.error('❌ Background fetch error:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

async function checkDriverOnlineStatus(): Promise<boolean> {
  try {
    const storedSession = await AsyncStorage.getItem(DRIVER_SESSION_KEY);
    if (!storedSession) {
      return false;
    }

    const sessionData = JSON.parse(storedSession);
    const driver = sessionData.driver;

    // Check if session is not too old (24 hours)
    const sessionAge = Date.now() - sessionData.timestamp;
    if (sessionAge > 24 * 60 * 60 * 1000) {
      return false;
    }

    // Driver should continue updating location if online OR busy
    return driver && (driver.status === 'online' || driver.status === 'busy');
  } catch (error) {
    console.error('Error checking driver status:', error);
    return false;
  }
}

async function sendLocationToDatabase(location: any) {
  try {
    const storedSession = await AsyncStorage.getItem(DRIVER_SESSION_KEY);
    if (!storedSession) {
      console.log('❌ No driver session for background location update');
      return;
    }

    const sessionData = JSON.parse(storedSession);
    const driver = sessionData.driver;

    if (!driver?.id || !driver?.user_id) {
      console.log('❌ No driver id/user_id for background location update');
      return;
    }

    console.log('📤 Background location update via RPC...');

    // Get environment variables
    const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

    // Validate environment variables
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('❌ Supabase credentials not configured');
      return;
    }

    // Use RPC function to update location (bypasses RLS)
    try {
      const rpcResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/update_driver_location_rpc`, {
        method: 'POST',
        headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          p_driver_id: driver.id,
          p_latitude: location.coords.latitude,
          p_longitude: location.coords.longitude,
          p_heading: location.coords.heading || null,
          p_speed: location.coords.speed || null,
          p_accuracy: location.coords.accuracy || null
        }),
        signal: AbortSignal.timeout(8000)
      });

      if (rpcResponse.ok) {
        const result = await rpcResponse.json();
        if (result && result.success) {
          console.log('✅ Background location updated via RPC:', result.action);
        } else {
          console.error('❌ RPC returned error:', result?.error);
        }
      } else {
        const errorText = await rpcResponse.text();
        console.error('❌ RPC request failed:', rpcResponse.status, errorText);
      }
    } catch (rpcError) {
      console.error('❌ RPC exception:', rpcError.message);
    }

  } catch (error) {
    console.error('❌ Exception in background location update:', error.message);
    console.log('⚠️ Background location service will continue running');
  }
}

// Web-specific background location tracking using intervals
let webLocationInterval: NodeJS.Timeout | null = null;

async function startWebBackgroundTracking(driverUserId: string): Promise<boolean> {
  try {
    console.log('🌐 Starting web background location tracking');
    
    // Clear any existing interval
    if (webLocationInterval) {
      clearInterval(webLocationInterval);
    }
    
    // Start interval to update location every 5 seconds
    webLocationInterval = setInterval(async () => {
      try {
        console.log('🌐 Web background location update...');
        
        // Check if driver is still online
        const isDriverOnline = await checkDriverOnlineStatus();
        if (!isDriverOnline) {
          console.log('❌ Driver is offline, stopping web background location');
          await stopWebBackgroundTracking();
          return;
        }
        
        // Get current location using web geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              await sendLocationToDatabase({
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  accuracy: position.coords.accuracy,
                  heading: position.coords.heading,
                  speed: position.coords.speed
                }
              });
            },
            (error) => {
              console.error('Web geolocation error:', error);
            },
            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 30000
            }
          );
        }
      } catch (error) {
        console.error('Web background location error:', error);
      }
    }, 5000); // Every 5 seconds
    
    // Store interval reference
    await AsyncStorage.setItem(WEB_LOCATION_INTERVAL_KEY, 'active');
    
    console.log('✅ Web background location tracking started');
    return true;
  } catch (error) {
    console.error('❌ Error starting web background tracking:', error);
    return false;
  }
}

async function stopWebBackgroundTracking(): Promise<void> {
  try {
    console.log('🌐 Stopping web background location tracking');
    
    if (webLocationInterval) {
      clearInterval(webLocationInterval);
      webLocationInterval = null;
    }
    
    await AsyncStorage.removeItem(WEB_LOCATION_INTERVAL_KEY);
    console.log('✅ Web background location tracking stopped');
  } catch (error) {
    console.error('❌ Error stopping web background tracking:', error);
  }
}

export class BackgroundLocationService {
  static async startBackgroundLocationTracking(driverUserId: string): Promise<boolean> {
    try {
      console.log('=== STARTING BACKGROUND LOCATION TRACKING ===');
      console.log('Driver User ID:', driverUserId);
      console.log('Platform:', Platform.OS);

      if (Platform.OS === 'web') {
        console.log('🌐 Web platform: Starting web-based background tracking');
        return await startWebBackgroundTracking(driverUserId);
      }

      // Request background location permission
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus !== 'granted') {
        console.log('❌ Background location permission not granted');
        return false;
      }

      console.log('✅ Background location permission granted');

      // Start background location tracking
      await Location.startLocationUpdatesAsync(BACKGROUND_LOCATION_TASK, {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 5000, // Every 5 seconds
        distanceInterval: 5, // Every 5 meters
        deferredUpdatesInterval: 5000,
        foregroundService: {
          notificationTitle: 'A1 Taxi - Driver Online',
          notificationBody: 'Sharing location with customers for ride requests',
          notificationColor: '#2563EB',
        },
      });

      // Also register background fetch as fallback
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 5, // 5 seconds
        stopOnTerminate: false,
        startOnBoot: true,
      });

      console.log('✅ Background location tracking started');
      console.log('✅ Foreground service notification will be shown');
      console.log('✅ Location will update every 5 seconds even when app is closed');
      
      return true;
    } catch (error) {
      console.error('❌ Error starting background location tracking:', error);
      return false;
    }
  }

  static async stopBackgroundLocationTracking(): Promise<void> {
    try {
      console.log('=== STOPPING BACKGROUND LOCATION TRACKING ===');

      if (Platform.OS === 'web') {
        return await stopWebBackgroundTracking();
      }

      // Check if task is registered
      const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_LOCATION_TASK);
      if (isRegistered) {
        await Location.stopLocationUpdatesAsync(BACKGROUND_LOCATION_TASK);
        console.log('✅ Background location tracking stopped');
      }

      // Stop background fetch
      const isFetchRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
      if (isFetchRegistered) {
        await BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
        console.log('✅ Background fetch stopped');
      }

      console.log('✅ All background location services stopped');
    } catch (error) {
      console.error('❌ Error stopping background location tracking:', error);
    }
  }

  static async isBackgroundLocationActive(): Promise<boolean> {
    try {
      if (Platform.OS === 'web') {
        try {
          const webActive = await AsyncStorage.getItem(WEB_LOCATION_INTERVAL_KEY);
          return webActive === 'active' && webLocationInterval !== null;
        } catch {
          return false;
        }
      }

      const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_LOCATION_TASK);
      return isRegistered;
    } catch (error) {
      console.error('Error checking background location status:', error);
      return false;
    }
  }
}