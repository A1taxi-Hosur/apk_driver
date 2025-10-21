import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';

const TRIP_LOCATION_TASK = 'trip-location-tracking';
const TRIP_CONTEXT_KEY = 'active_trip_context';

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

      // Start background tracking with aggressive settings to prevent Android from killing it
      await Location.startLocationUpdatesAsync(TRIP_LOCATION_TASK, {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 2000, // Every 2 seconds (more frequent = less likely to be killed)
        distanceInterval: 3, // Or every 3 meters
        showsBackgroundLocationIndicator: true,
        deferredUpdatesInterval: 2000, // Force frequent updates
        foregroundService: {
          notificationTitle: '🚗 A1 Taxi - Trip in Progress',
          notificationBody: 'GPS tracking active - DO NOT close this notification',
          notificationColor: '#FF6B35',
        },
        activityType: Location.ActivityType.AutomotiveNavigation,
        pausesUpdatesAutomatically: false, // NEVER pause
        mayShowUserSettingsDialog: false, // Don't interrupt
      });

      console.log('✅ Location updates started successfully');

      // Verify task is now registered
      const nowRegistered = await TaskManager.isTaskRegisteredAsync(TRIP_LOCATION_TASK);
      console.log('📋 Task now registered:', nowRegistered);

      this.isTracking.set(tripId, true);

      console.log('✅ Background GPS tracking started');
      console.log('📱 Foreground service active');
      console.log('🌍 Will track even when app is closed');
      console.log('⏱️  GPS updates every 2 seconds or 3 meters');
      console.log('⚠️  IMPORTANT: Keep the notification visible - closing it may stop GPS');

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

      return true;
    } catch (error) {
      console.error('❌ Start tracking error:', error);
      return false;
    }
  }

  /**
   * Stop background GPS tracking
   */
  async stopTripTracking(tripId: string): Promise<void> {
    try {
      console.log('=== STOPPING BACKGROUND GPS ===');

      const isRegistered = await TaskManager.isTaskRegisteredAsync(TRIP_LOCATION_TASK);
      if (isRegistered) {
        await Location.stopLocationUpdatesAsync(TRIP_LOCATION_TASK);
        console.log('✅ Background task stopped');
      }

      // Clear trip context from storage
      await AsyncStorage.removeItem(TRIP_CONTEXT_KEY);
      console.log('🗑️ Trip context cleared from storage');

      this.isTracking.set(tripId, false);

      // Query GPS points count
      try {
        const { count } = await supabase
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

      const { data: points, error } = await supabase
        .from('trip_location_history')
        .select('latitude, longitude, recorded_at, accuracy')
        .eq(tripType === 'regular' ? 'ride_id' : 'scheduled_booking_id', tripId)
        .order('recorded_at', { ascending: true });

      if (error) {
        console.error('❌ Fetch error:', error);
        return { distanceKm: 0, pointsUsed: 0 };
      }

      if (!points || points.length < 2) {
        console.warn(`⚠️ Only ${points?.length || 0} points`);
        return { distanceKm: 0, pointsUsed: points?.length || 0 };
      }

      console.log(`📍 ${points.length} GPS points`);
      console.log(`🕐 ${points[0].recorded_at} → ${points[points.length - 1].recorded_at}`);

      // Calculate distance
      let totalDistance = 0;
      let validSegments = 0;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        const segDist = this.haversine(
          prev.latitude,
          prev.longitude,
          curr.latitude,
          curr.longitude
        );

        // Filter GPS jumps (max 200m per segment)
        if (segDist < 0.2) {
          totalDistance += segDist;
          validSegments++;
        }
      }

      console.log('✅ Distance:', {
        totalKm: totalDistance.toFixed(3),
        points: points.length,
        segments: validSegments,
        avgPerSegment: (totalDistance / validSegments).toFixed(3) + ' km'
      });

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
      const { data: points, error } = await supabase
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
