import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const BACKGROUND_LOCATION_TASK = 'background-location-task';
const BACKGROUND_FETCH_TASK = 'background-fetch-task';
const DRIVER_SESSION_KEY = 'driver_session';
const WEB_LOCATION_INTERVAL_KEY = 'web_location_interval';
const DRIVER_ID_KEY = 'background_driver_id';
const DRIVER_USER_ID_KEY = 'background_driver_user_id';

// Background location task for native platforms
TaskManager.defineTask(BACKGROUND_LOCATION_TASK, async ({ data, error }) => {
  const timestamp = new Date().toISOString();

  if (error) {
    console.error(`[${timestamp}] ❌ Background location task error:`, error);
    return;
  }

  if (data) {
    const { locations } = data as any;
    console.log(`[${timestamp}] 📍 Background location task triggered with ${locations?.length || 0} locations`);

    // CRITICAL: Always try to send location first, then check status
    // This ensures we don't lose location data during active trips
    if (locations && locations.length > 0) {
      // Process all locations (sometimes batch arrives)
      for (const location of locations) {
        console.log(`[${timestamp}] 📍 Processing location: ${location.coords.latitude}, ${location.coords.longitude}`);
        const locationSent = await sendLocationToDatabase(location);

        if (locationSent) {
          console.log(`[${timestamp}] ✅ Location sent successfully`);
        } else {
          console.log(`[${timestamp}] ⚠️ Location not sent, checking driver status...`);

          // Only check driver status if location was NOT sent
          const isDriverOnline = await checkDriverOnlineStatus();
          if (!isDriverOnline) {
            console.log(`[${timestamp}] ❌ Driver is offline and no active trip`);
            // Note: Cannot call stopBackgroundLocationTracking from here
            // Service will continue until manually stopped
            return;
          } else {
            console.log(`[${timestamp}] ✅ Driver is online, will retry location send`);
          }
        }
      }
    } else {
      console.log(`[${timestamp}] ⚠️ No locations in background task data`);
    }
  } else {
    console.log(`[${timestamp}] ⚠️ No data in background task`);
  }

  console.log(`[${timestamp}] ✅ Background location task completed`);
});

// Background fetch task for periodic location updates (fallback for when main task pauses)
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] 📍 Background fetch triggered (fallback mechanism)`);

  try {
    // Check if driver should be tracking
    const isDriverOnline = await checkDriverOnlineStatus();
    if (!isDriverOnline) {
      console.log(`[${timestamp}] ❌ Driver is offline, skipping background fetch`);
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }

    // Get current location first
    const { status } = await Location.getForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log(`[${timestamp}] ❌ Location permission not granted`);
      return BackgroundFetch.BackgroundFetchResult.Failed;
    }

    console.log(`[${timestamp}] 📍 Fetching current location via background fetch...`);

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced, // Use balanced to save battery during fallback
      timeout: 10000,
    });

    if (location) {
      console.log(`[${timestamp}] 📍 Got location: ${location.coords.latitude}, ${location.coords.longitude}`);
      const locationSent = await sendLocationToDatabase(location);

      if (locationSent) {
        console.log(`[${timestamp}] ✅ Background fetch location update successful`);
        return BackgroundFetch.BackgroundFetchResult.NewData;
      } else {
        console.log(`[${timestamp}] ⚠️ Background fetch could not send location`);
        return BackgroundFetch.BackgroundFetchResult.NoData;
      }
    }

    console.log(`[${timestamp}] ⚠️ Background fetch got no location`);
    return BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    console.error(`[${timestamp}] ❌ Background fetch error:`, error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

async function checkDriverOnlineStatus(): Promise<boolean> {
  try {
    // First try to get driver ID from dedicated storage
    const driverId = await AsyncStorage.getItem(DRIVER_ID_KEY);

    if (driverId) {
      // Check database to see if driver should track location
      // This works even if local session is stale
      const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseAnonKey) {
        try {
          const response = await fetch(`${supabaseUrl}/rest/v1/rpc/should_driver_track_location`, {
            method: 'POST',
            headers: {
              'apikey': supabaseAnonKey,
              'Authorization': `Bearer ${supabaseAnonKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ p_driver_id: driverId }),
            signal: AbortSignal.timeout(5000)
          });

          if (response.ok) {
            const result = await response.json();
            console.log('📊 Driver tracking status from DB:', result);
            return result.should_track || false;
          }
        } catch (dbError) {
          console.error('⚠️ Could not check driver status from DB:', dbError.message);
          // Continue to fallback method
        }
      }
    }

    // Fallback to session-based check
    const storedSession = await AsyncStorage.getItem(DRIVER_SESSION_KEY);
    if (!storedSession) {
      console.log('❌ No driver session and no driver ID available');
      return false;
    }

    const sessionData = JSON.parse(storedSession);
    const driver = sessionData.driver;

    // Check if session is not too old (24 hours)
    const sessionAge = Date.now() - sessionData.timestamp;
    if (sessionAge > 24 * 60 * 60 * 1000) {
      console.log('⚠️ Session is older than 24 hours');
      return false;
    }

    // Driver should continue updating location if online OR busy
    const shouldTrack = driver && (driver.status === 'online' || driver.status === 'busy');
    console.log('📊 Driver tracking status from session:', shouldTrack, driver?.status);
    return shouldTrack;
  } catch (error) {
    console.error('Error checking driver status:', error);
    return false;
  }
}

async function sendLocationToDatabase(location: any): Promise<boolean> {
  try {
    // Try to get driver ID from dedicated storage (more reliable than session)
    let driverId = await AsyncStorage.getItem(DRIVER_ID_KEY);
    let driverUserId = await AsyncStorage.getItem(DRIVER_USER_ID_KEY);

    // Fallback to session if dedicated storage not available
    if (!driverId || !driverUserId) {
      const storedSession = await AsyncStorage.getItem(DRIVER_SESSION_KEY);
      if (!storedSession) {
        console.log('❌ No driver session for background location update');
        return false;
      }

      const sessionData = JSON.parse(storedSession);
      const driver = sessionData.driver;

      if (!driver?.id || !driver?.user_id) {
        console.log('❌ No driver id/user_id for background location update');
        return false;
      }

      driverId = driver.id;
      driverUserId = driver.user_id;
    }

    console.log('📤 Background location update via RPC...', { driverId, lat: location.coords.latitude, lng: location.coords.longitude });

    // Get environment variables
    const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

    // Validate environment variables
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('❌ Supabase credentials not configured');
      return false;
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
          p_driver_id: driverId,
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
          return true;
        } else {
          console.error('❌ RPC returned error:', result?.error);
          return false;
        }
      } else {
        const errorText = await rpcResponse.text();
        console.error('❌ RPC request failed:', rpcResponse.status, errorText);
        return false;
      }
    } catch (rpcError) {
      console.error('❌ RPC exception:', rpcError.message);
      return false;
    }

  } catch (error) {
    console.error('❌ Exception in background location update:', error.message);
    console.log('⚠️ Background location service will continue running');
    return false;
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
  static async startBackgroundLocationTracking(driverUserId: string, driverId?: string): Promise<boolean> {
    try {
      console.log('=== STARTING BACKGROUND LOCATION TRACKING ===');
      console.log('Driver User ID:', driverUserId);
      console.log('Driver ID:', driverId);
      console.log('Platform:', Platform.OS);

      // Store driver IDs in dedicated storage for background task access
      if (driverId) {
        await AsyncStorage.setItem(DRIVER_ID_KEY, driverId);
        await AsyncStorage.setItem(DRIVER_USER_ID_KEY, driverUserId);
        console.log('✅ Stored driver IDs for background access');
      }

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

      // Start background location tracking with aggressive settings optimized for Android
      await Location.startLocationUpdatesAsync(BACKGROUND_LOCATION_TASK, {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 3000, // Every 3 seconds (more frequent to prevent system from pausing)
        distanceInterval: 0, // Report every location change regardless of distance
        deferredUpdatesInterval: 3000, // Match timeInterval
        showsBackgroundLocationIndicator: true,
        foregroundService: {
          notificationTitle: 'A1 Taxi - Driver Online',
          notificationBody: 'Tracking your location. Tap to open app.',
          notificationColor: '#10B981',
        },
        pausesUpdatesAutomatically: false, // CRITICAL: Never pause updates
        activityType: Location.ActivityType.AutomotiveNavigation, // Highest priority for constant tracking

        // Android-specific optimizations
        ...(Platform.OS === 'android' && {
          // These settings prevent Android from pausing the service
          mayShowUserSettingsDialog: true, // Allow prompting user for better settings
        }),
      });

      // Also register background fetch as fallback (Android will run this every ~15 minutes minimum)
      try {
        await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
          minimumInterval: 60, // 60 seconds (Android will still enforce 15-minute minimum)
          stopOnTerminate: false,
          startOnBoot: true,
        });
        console.log('✅ Background fetch registered as fallback');
      } catch (fetchError) {
        console.warn('⚠️ Could not register background fetch (non-critical):', fetchError);
      }

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

      // Clear stored driver IDs
      await AsyncStorage.removeItem(DRIVER_ID_KEY);
      await AsyncStorage.removeItem(DRIVER_USER_ID_KEY);

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