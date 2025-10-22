import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';

const TRIP_LOCATION_TASK = 'trip-location-tracking';
const TRIP_CONTEXT_KEY = 'active_trip_context';
const HEARTBEAT_KEY = 'gps_heartbeat_timestamp';

// Create Supabase client for background task with SERVICE ROLE KEY
// Background tasks run in separate JS context and can't maintain auth sessions
// Service role key bypasses RLS - needed for inserting GPS points from background
const SUPABASE_URL = 'https://whubaypabojomdyfqxcf.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodWJheXBhYm9qb21keWZxeGNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjcwNjAzMSwiZXhwIjoyMDcyMjgyMDMxfQ.HQA62hKrAOhylo1zLO6NdnCO9AC0Z6mipssIIM-pw4Q';

const supabaseBackground = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

// Background task definition - MUST be at module level
// Runs even when app is closed/backgrounded on Android
TaskManager.defineTask(TRIP_LOCATION_TASK, async ({ data, error }) => {
  console.log('🔔 Background task triggered!');

  if (error) {
    console.error('❌ Background GPS error:', error);
    return;
  }

  if (data) {
    const { locations } = data as any;
    console.log(`📡 Received ${locations?.length || 0} location(s)`);

    if (locations && locations.length > 0) {
      const location = locations[0];

      try {
        // Get trip context from AsyncStorage (persists across app restarts)
        console.log('🔍 Looking for trip context in AsyncStorage...');
        const contextJson = await AsyncStorage.getItem(TRIP_CONTEXT_KEY);

        if (!contextJson) {
          console.warn('⚠️ Background: No trip context in storage (key:', TRIP_CONTEXT_KEY, ')');
          return;
        }

        console.log('📦 Found trip context:', contextJson);
        const { tripId, tripType, driverId } = JSON.parse(contextJson);

        if (!tripId || !tripType || !driverId) {
          console.warn('⚠️ Background: Invalid trip context', { tripId, tripType, driverId });
          return;
        }

        console.log('📍 Background GPS:', {
          tripId,
          tripType,
          lat: location.coords.latitude.toFixed(6),
          lng: location.coords.longitude.toFixed(6),
          accuracy: location.coords.accuracy?.toFixed(1) + 'm',
          timestamp: new Date(location.timestamp).toISOString(),
        });

        // Save to database immediately
        const insertData = {
          [tripType === 'regular' ? 'ride_id' : 'scheduled_booking_id']: tripId,
          driver_id: driverId,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          accuracy: location.coords.accuracy || null,
          speed: location.coords.speed || null,
          heading: location.coords.heading || null,
          altitude: location.coords.altitude || null,
          recorded_at: new Date(location.timestamp).toISOString(),
        };

        console.log('💾 Inserting to trip_location_history:', insertData);

        const { error: insertError } = await supabaseBackground
          .from('trip_location_history')
          .insert(insertData);

        if (insertError) {
          console.error('❌ Background: Insert error:', insertError.message, insertError);
        } else {
          console.log('✅ Background: GPS point saved to database!');

          // Update heartbeat timestamp to show task is alive
          await AsyncStorage.setItem(HEARTBEAT_KEY, Date.now().toString());

          // Log every 10th point to track if GPS stops
          const randomCheck = Math.random() < 0.1; // 10% chance
          if (randomCheck) {
            try {
              await supabaseBackground.from('debug_logs').insert({
                ride_id: tripId,
                log_type: 'gps_heartbeat',
                message: 'GPS still running',
                data: { lat: location.coords.latitude, lng: location.coords.longitude, timestamp: new Date().toISOString() }
              });
            } catch (e) {
              // Silent fail
            }
          }
        }
      } catch (bgError) {
        console.error('❌ Background: Error:', bgError);
      }
    } else {
      console.warn('⚠️ No location data in update');
    }
  } else {
    console.warn('⚠️ No data in task');
  }
});

console.log('✅ TripLocationTracker: Background task registered');

class TripLocationTrackerService {
  private isTracking: Map<string, boolean> = new Map();

  /**
   * Start background GPS tracking with foreground service
   * Works even when app is closed/backgrounded
   */
  async startTripTracking(
    tripId: string,
    tripType: 'regular' | 'scheduled',
    driverId: string
  ): Promise<boolean> {
    try {
      console.log('=== STARTING BACKGROUND GPS TRACKING ===');
      console.log('Trip ID:', tripId);
      console.log('Trip Type:', tripType);
      console.log('Driver ID:', driverId);

      if (this.isTracking.get(tripId)) {
        console.log('⚠️ Already tracking');
        return true;
      }

      // Request permissions
      const { status: fgStatus } = await Location.requestForegroundPermissionsAsync();
      if (fgStatus !== 'granted') {
        console.error('❌ Foreground permission denied');
        return false;
      }

      const { status: bgStatus } = await Location.requestBackgroundPermissionsAsync();
      if (bgStatus !== 'granted') {
        console.error('❌ Background permission denied');
        return false;
      }

      console.log('✅ Permissions granted');

      // Store trip context in AsyncStorage for background task
      const contextData = { tripId, tripType, driverId };
      await AsyncStorage.setItem(TRIP_CONTEXT_KEY, JSON.stringify(contextData));
      console.log('💾 Trip context saved to storage:', contextData);

      // Verify it was saved
      const savedContext = await AsyncStorage.getItem(TRIP_CONTEXT_KEY);
      console.log('✅ Verified saved context:', savedContext);

      // Stop existing task if any
      const isRegistered = await TaskManager.isTaskRegisteredAsync(TRIP_LOCATION_TASK);
      console.log('📋 Task already registered:', isRegistered);

      if (isRegistered) {
        console.log('🔄 Stopping existing task...');
        await Location.stopLocationUpdatesAsync(TRIP_LOCATION_TASK);
        console.log('✅ Existing task stopped');
      }

      console.log('🚀 Starting location updates with task:', TRIP_LOCATION_TASK);

      // FORCEFUL GPS tracking - will aggressively track even when app is killed
      // Uses Android foreground service to prevent battery optimization from killing it
      await Location.startLocationUpdatesAsync(TRIP_LOCATION_TASK, {
        // GPS ACCURACY - Use highest precision available
        accuracy: Location.Accuracy.BestForNavigation,

        // ULTRA-AGGRESSIVE TRACKING INTERVALS
        timeInterval: 1000, // Every 1 second (MAXIMUM frequency)
        distanceInterval: 1, // Every 1 meter (MAXIMUM sensitivity)

        // PREVENT GPS FROM EVER PAUSING
        showsBackgroundLocationIndicator: true, // Show blue bar on iOS
        deferredUpdatesInterval: 1000, // Force updates every second
        pausesUpdatesAutomatically: false, // NEVER EVER pause

        // ANDROID FOREGROUND SERVICE - Critical for background tracking
        foregroundService: {
          notificationTitle: '🚗 A1 Taxi - Active Trip',
          notificationBody: 'GPS tracking - Keep this notification visible',
          notificationColor: '#FF0000', // RED to stand out
          killServiceOnDestroy: false, // Don't kill when notification is swiped
        },

        // ACTIVITY TYPE - Tell OS this is navigation (highest priority)
        activityType: Location.ActivityType.AutomotiveNavigation,

        // NEVER ASK USER - Don't show dialogs that could interrupt tracking
        mayShowUserSettingsDialog: false,
      });

      console.log('✅ Location updates started successfully');

      // Verify task is now registered
      const nowRegistered = await TaskManager.isTaskRegisteredAsync(TRIP_LOCATION_TASK);
      console.log('📋 Task now registered:', nowRegistered);

      this.isTracking.set(tripId, true);

      console.log('✅ ========================================');
      console.log('✅ ULTRA-AGGRESSIVE GPS TRACKING STARTED');
      console.log('✅ ========================================');
      console.log('📱 Android Foreground Service: ACTIVE');
      console.log('🌍 Works even when app is KILLED/CLOSED');
      console.log('⏱️  Update Interval: EVERY 1 SECOND OR 1 METER');
      console.log('🎯 Accuracy: BEST FOR NAVIGATION (Highest)');
      console.log('🔴 RED notification will be visible');
      console.log('⚠️  CRITICAL: Do NOT swipe away the notification');
      console.log('⚠️  CRITICAL: Do NOT enable battery optimization for this app');
      console.log('✅ ========================================');

      // Log to database for debugging
      try {
        const { createClient } = await import('@supabase/supabase-js');
        const supabaseUrl = 'https://hmxudhnztqpxyvmkcaqo.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhteHVkaG56dHFweHl2bWtjYXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNDUyMjUsImV4cCI6MjA0MDkyMTIyNX0.4rQsRsJy_0ypAqE9mVxUf8GbAWLdvx_4YVtcB1wxf50';
        const supabaseLog = createClient(supabaseUrl, supabaseKey);

        await supabaseLog.from('debug_logs').insert({
          ride_id: tripId,
          log_type: 'gps_tracking_started',
          message: 'Background GPS tracking started',
          data: { tripId, tripType, driverId, timestamp: new Date().toISOString() }
        });
      } catch (e) {
        console.warn('Could not log GPS start to database:', e);
      }

      // Start watchdog to monitor GPS health
      this.startWatchdog(tripId, tripType, driverId);

      return true;
    } catch (error) {
      console.error('❌ Start tracking error:', error);
      return false;
    }
  }

  /**
   * Watchdog timer to restart GPS if it stops
   */
  private watchdogInterval: NodeJS.Timeout | null = null;

  private startWatchdog(tripId: string, tripType: 'regular' | 'scheduled', driverId: string): void {
    console.log('🐕 Starting GPS watchdog (checks every 10 seconds)');

    // Check every 10 seconds (more frequent monitoring)
    this.watchdogInterval = setInterval(async () => {
      try {
        const heartbeatTimestamp = await AsyncStorage.getItem(HEARTBEAT_KEY);

        if (heartbeatTimestamp) {
          const lastHeartbeat = parseInt(heartbeatTimestamp, 10);
          const timeSinceLastUpdate = Date.now() - lastHeartbeat;
          const secondsSinceUpdate = Math.floor(timeSinceLastUpdate / 1000);

          console.log(`🐕 Watchdog: Last GPS update was ${secondsSinceUpdate}s ago`);

          // If no update for 10 seconds, GPS might be dead - try to restart
          // (We expect updates every 1 second, so 10 seconds is a serious gap)
          if (secondsSinceUpdate > 10) {
            console.warn('⚠️ GPS appears to have stopped! Attempting restart...');

            try {
              // Stop existing task
              const isRegistered = await TaskManager.isTaskRegisteredAsync(TRIP_LOCATION_TASK);
              if (isRegistered) {
                await Location.stopLocationUpdatesAsync(TRIP_LOCATION_TASK);
              }

              // Wait a moment
              await new Promise(resolve => setTimeout(resolve, 1000));

              // Restart with FORCEFUL settings
              await Location.startLocationUpdatesAsync(TRIP_LOCATION_TASK, {
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 1,
                showsBackgroundLocationIndicator: true,
                deferredUpdatesInterval: 1000,
                pausesUpdatesAutomatically: false,
                foregroundService: {
                  notificationTitle: '🚗 A1 Taxi - Active Trip',
                  notificationBody: 'GPS tracking - Keep this notification visible',
                  notificationColor: '#FF0000',
                  killServiceOnDestroy: false,
                },
                activityType: Location.ActivityType.AutomotiveNavigation,
                mayShowUserSettingsDialog: false,
              });

              console.log('✅ GPS tracking restarted by watchdog');

              // Log restart to database
              await supabaseBackground.from('debug_logs').insert({
                ride_id: tripId,
                log_type: 'gps_restarted',
                message: 'Watchdog restarted GPS tracking',
                data: { secondsSinceUpdate, timestamp: new Date().toISOString() }
              });
            } catch (restartError) {
              console.error('❌ Watchdog failed to restart GPS:', restartError);
            }
          }
        } else {
          console.warn('⚠️ Watchdog: No heartbeat found');
        }
      } catch (error) {
        console.error('❌ Watchdog error:', error);
      }
    }, 10000); // Check every 10 seconds (more aggressive monitoring)
  }

  /**
   * Stop background GPS tracking
   */
  async stopTripTracking(tripId: string): Promise<void> {
    try {
      console.log('=== STOPPING BACKGROUND GPS ===');

      // Stop watchdog
      if (this.watchdogInterval) {
        clearInterval(this.watchdogInterval);
        this.watchdogInterval = null;
        console.log('🐕 Watchdog stopped');
      }

      const isRegistered = await TaskManager.isTaskRegisteredAsync(TRIP_LOCATION_TASK);
      if (isRegistered) {
        await Location.stopLocationUpdatesAsync(TRIP_LOCATION_TASK);
        console.log('✅ Background task stopped');
      }

      // Clear trip context from storage
      await AsyncStorage.removeItem(TRIP_CONTEXT_KEY);
      console.log('🗑️ Trip context cleared from storage');

      this.isTracking.set(tripId, false);

      // Query GPS points count using service role for reliable access
      try {
        const { count } = await supabaseBackground
          .from('trip_location_history')
          .select('*', { count: 'exact', head: true })
          .or(`ride_id.eq.${tripId},scheduled_booking_id.eq.${tripId}`);

        console.log(`📊 GPS points: ${count || 0}`);
      } catch (e) {
        console.warn('⚠️ Could not count GPS points');
      }
    } catch (error) {
      console.error('❌ Stop tracking error:', error);
    }
  }

  /**
   * Calculate distance from GPS breadcrumbs
   */
  async calculateTripDistance(
    tripId: string,
    tripType: 'regular' | 'scheduled'
  ): Promise<{ distanceKm: number; pointsUsed: number }> {
    try {
      console.log('=== CALCULATING GPS DISTANCE ===');
      console.log('Trip ID:', tripId);
      console.log('Trip Type:', tripType);

      const columnName = tripType === 'regular' ? 'ride_id' : 'scheduled_booking_id';
      console.log('Querying column:', columnName, '=', tripId);

      // Use supabaseBackground (service role) to bypass RLS for reliable GPS data access
      // GPS data is already validated during insertion (driver_id check)
      // This ensures trip completion can always read historical GPS data
      const { data: points, error } = await supabaseBackground
        .from('trip_location_history')
        .select('latitude, longitude, recorded_at, accuracy')
        .eq(columnName, tripId)
        .order('recorded_at', { ascending: true });

      console.log('Query result - points:', points?.length, 'error:', error);

      if (error) {
        console.error('❌ Fetch error:', error);

        await supabase.from('debug_logs').insert({
          ride_id: tripType === 'regular' ? tripId : null,
          scheduled_booking_id: tripType === 'scheduled' ? tripId : null,
          log_type: 'gps_query_error',
          message: 'Failed to fetch GPS points',
          data: { error: error.message, tripType, columnName }
        });

        return { distanceKm: 0, pointsUsed: 0 };
      }

      if (!points || points.length < 2) {
        console.warn(`⚠️ Only ${points?.length || 0} points`);

        await supabase.from('debug_logs').insert({
          ride_id: tripType === 'regular' ? tripId : null,
          scheduled_booking_id: tripType === 'scheduled' ? tripId : null,
          log_type: 'gps_insufficient_points',
          message: 'Insufficient GPS points for calculation',
          data: { pointsFound: points?.length || 0, tripType, columnName }
        });

        return { distanceKm: 0, pointsUsed: points?.length || 0 };
      }

      console.log(`📍 ${points.length} GPS points`);
      console.log(`🕐 ${points[0].recorded_at} → ${points[points.length - 1].recorded_at}`);

      // Calculate distance
      let totalDistance = 0;
      let validSegments = 0;
      let filteredSegments = 0;
      let filteredDistanceKm = 0;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        const segDist = this.haversine(
          prev.latitude,
          prev.longitude,
          curr.latitude,
          curr.longitude
        );

        // Calculate time difference between points
        const timeDiffMs = new Date(curr.recorded_at).getTime() - new Date(prev.recorded_at).getTime();
        const timeDiffSeconds = timeDiffMs / 1000;

        // Calculate implied speed (km/h)
        const impliedSpeedKmh = (segDist / timeDiffSeconds) * 3600;

        // Smart filtering based on time and speed
        // Allow segments if:
        // 1. Distance < 200m (normal case)
        // 2. OR distance < 500m AND speed < 120 km/h (highway driving)
        // 3. OR distance < 1km AND time gap > 30s (GPS throttling, but reasonable speed)
        const isValidSegment =
          segDist < 0.2 ||
          (segDist < 0.5 && impliedSpeedKmh < 120) ||
          (segDist < 1.0 && timeDiffSeconds > 30 && impliedSpeedKmh < 150);

        if (isValidSegment) {
          totalDistance += segDist;
          validSegments++;
        } else {
          // Log filtered segments for debugging
          filteredSegments++;
          filteredDistanceKm += segDist;
          console.warn(`⚠️ Filtered GPS jump: ${segDist.toFixed(3)}km in ${timeDiffSeconds.toFixed(0)}s (${impliedSpeedKmh.toFixed(0)} km/h)`);
        }
      }

      console.log('✅ Distance:', {
        totalKm: totalDistance.toFixed(3),
        points: points.length,
        segments: validSegments,
        filteredSegments: filteredSegments,
        filteredDistanceKm: filteredDistanceKm.toFixed(3),
        avgPerSegment: (totalDistance / validSegments).toFixed(3) + ' km'
      });

      if (filteredSegments > 0) {
        console.warn(`⚠️ ${filteredSegments} segments filtered (${filteredDistanceKm.toFixed(3)} km lost)`);
        console.warn('⚠️ This may indicate GPS jumps or high-speed driving with throttled GPS');
      }

      return {
        distanceKm: totalDistance,
        pointsUsed: points.length
      };
    } catch (error) {
      console.error('❌ Calculate error:', error);
      return { distanceKm: 0, pointsUsed: 0 };
    }
  }

  /**
   * Calculate duration from GPS timestamps
   */
  async calculateTripDuration(
    tripId: string,
    tripType: 'regular' | 'scheduled'
  ): Promise<{ durationMinutes: number; pointsUsed: number }> {
    try {
      // Use supabaseBackground (service role) to bypass RLS for reliable GPS data access
      const { data: points, error } = await supabaseBackground
        .from('trip_location_history')
        .select('recorded_at')
        .eq(tripType === 'regular' ? 'ride_id' : 'scheduled_booking_id', tripId)
        .order('recorded_at', { ascending: true });

      if (error || !points || points.length < 2) {
        return { durationMinutes: 1, pointsUsed: points?.length || 0 };
      }

      const first = new Date(points[0].recorded_at).getTime();
      const last = new Date(points[points.length - 1].recorded_at).getTime();
      const minutes = Math.max(1, Math.round((last - first) / 60000));

      console.log('✅ Duration:', {
        minutes,
        hours: (minutes / 60).toFixed(2),
        points: points.length
      });

      return { durationMinutes: minutes, pointsUsed: points.length };
    } catch (error) {
      return { durationMinutes: 1, pointsUsed: 0 };
    }
  }

  /**
   * Haversine formula
   */
  private haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  private toRad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}

export const TripLocationTracker = new TripLocationTrackerService();
