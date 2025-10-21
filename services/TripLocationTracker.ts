import * as Location from 'expo-location';
import { supabase } from '../utils/supabase';

interface LocationPoint {
  latitude: number;
  longitude: number;
  accuracy?: number;
  speed?: number;
  heading?: number;
  altitude?: number;
  recorded_at: string;
}

class TripLocationTrackerService {
  private trackingIntervals: Map<string, NodeJS.Timeout> = new Map();
  private locationPoints: Map<string, LocationPoint[]> = new Map();
  private isTracking: Map<string, boolean> = new Map();

  /**
   * Start tracking GPS locations for an active trip
   * Uses simple foreground interval tracking that works on ALL platforms
   */
  async startTripTracking(
    tripId: string,
    tripType: 'regular' | 'scheduled',
    driverId: string
  ): Promise<boolean> {
    try {
      console.log('=== STARTING TRIP GPS TRACKING ===');
      console.log('Trip ID:', tripId);
      console.log('Trip Type:', tripType);
      console.log('Driver ID:', driverId);

      // Check if already tracking this trip
      if (this.isTracking.get(tripId)) {
        console.log('⚠️ Already tracking this trip');
        return true;
      }

      // Request foreground location permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('❌ Location permission not granted');
        return false;
      }

      console.log('✅ Location permission granted');

      // Initialize location points array for this trip
      this.locationPoints.set(tripId, []);
      this.isTracking.set(tripId, true);

      // Record initial location immediately
      await this.recordLocationPoint(tripId, tripType, driverId);

      // Start interval-based tracking (every 3 seconds)
      console.log('🚀 Starting GPS tracking interval (every 3 seconds)');
      const interval = setInterval(async () => {
        if (!this.isTracking.get(tripId)) {
          clearInterval(interval);
          this.trackingIntervals.delete(tripId);
          return;
        }
        await this.recordLocationPoint(tripId, tripType, driverId);
      }, 3000); // Every 3 seconds for accurate tracking

      this.trackingIntervals.set(tripId, interval);

      console.log('✅ Trip GPS tracking started successfully');
      return true;
    } catch (error) {
      console.error('❌ Error starting trip tracking:', error);
      return false;
    }
  }

  /**
   * Record a single GPS location point
   */
  private async recordLocationPoint(
    tripId: string,
    tripType: 'regular' | 'scheduled',
    driverId: string
  ): Promise<void> {
    try {
      // Get current location with high accuracy
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        timeout: 10000,
      });

      const locationPoint: LocationPoint = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy,
        speed: location.coords.speed || undefined,
        heading: location.coords.heading || undefined,
        altitude: location.coords.altitude || undefined,
        recorded_at: new Date().toISOString(),
      };

      // Store in memory
      const points = this.locationPoints.get(tripId) || [];
      points.push(locationPoint);
      this.locationPoints.set(tripId, points);

      // Store in database immediately
      const { error } = await supabase
        .from('trip_location_history')
        .insert({
          [tripType === 'regular' ? 'ride_id' : 'scheduled_booking_id']: tripId,
          driver_id: driverId,
          latitude: locationPoint.latitude,
          longitude: locationPoint.longitude,
          accuracy: locationPoint.accuracy,
          speed: locationPoint.speed,
          heading: locationPoint.heading,
          altitude: locationPoint.altitude,
          recorded_at: locationPoint.recorded_at,
        });

      if (error) {
        console.error('❌ Error saving GPS point to database:', error);
      } else {
        console.log('✅ GPS point saved:', {
          lat: locationPoint.latitude.toFixed(6),
          lng: locationPoint.longitude.toFixed(6),
          totalPoints: points.length,
          tripId: tripId.substring(0, 8) + '...'
        });
      }
    } catch (error) {
      console.error('❌ Error recording location point:', error);
    }
  }

  /**
   * Stop tracking GPS locations for a trip
   */
  async stopTripTracking(tripId: string): Promise<void> {
    try {
      console.log('=== STOPPING TRIP GPS TRACKING ===');
      console.log('Trip ID:', tripId);

      // Stop the interval
      const interval = this.trackingIntervals.get(tripId);
      if (interval) {
        clearInterval(interval);
        this.trackingIntervals.delete(tripId);
        console.log('✅ Tracking interval stopped');
      }

      // Mark as not tracking
      this.isTracking.set(tripId, false);

      const pointsCount = this.locationPoints.get(tripId)?.length || 0;
      console.log(`✅ Trip GPS tracking stopped. Points recorded in memory: ${pointsCount}`);

      // Query database for actual count
      try {
        const { count } = await supabase
          .from('trip_location_history')
          .select('*', { count: 'exact', head: true })
          .or(`ride_id.eq.${tripId},scheduled_booking_id.eq.${tripId}`);

        console.log(`📊 GPS points in database: ${count || 0}`);
      } catch (queryError) {
        console.warn('⚠️ Could not query GPS points count:', queryError);
      }
    } catch (error) {
      console.error('❌ Error stopping trip tracking:', error);
    }
  }

  /**
   * Calculate total distance traveled using GPS breadcrumbs
   * Uses Haversine formula to calculate distance between consecutive GPS points
   */
  async calculateTripDistance(
    tripId: string,
    tripType: 'regular' | 'scheduled'
  ): Promise<{ distanceKm: number; pointsUsed: number }> {
    try {
      console.log('=== CALCULATING TRIP DISTANCE FROM GPS ===');
      console.log('Trip ID:', tripId);
      console.log('Trip Type:', tripType);

      // Fetch GPS points from database
      const { data: gpsPoints, error } = await supabase
        .from('trip_location_history')
        .select('latitude, longitude, recorded_at')
        .eq(tripType === 'regular' ? 'ride_id' : 'scheduled_booking_id', tripId)
        .order('recorded_at', { ascending: true });

      if (error) {
        console.error('❌ Error fetching GPS points:', error);
        return { distanceKm: 0, pointsUsed: 0 };
      }

      if (!gpsPoints || gpsPoints.length < 2) {
        console.warn('⚠️ Insufficient GPS points for distance calculation');
        console.warn(`Found ${gpsPoints?.length || 0} points, need at least 2`);
        return { distanceKm: 0, pointsUsed: gpsPoints?.length || 0 };
      }

      console.log(`📍 Found ${gpsPoints.length} GPS points`);

      // Calculate distance using Haversine formula
      let totalDistance = 0;
      for (let i = 1; i < gpsPoints.length; i++) {
        const prev = gpsPoints[i - 1];
        const curr = gpsPoints[i];

        const distance = this.calculateHaversineDistance(
          prev.latitude,
          prev.longitude,
          curr.latitude,
          curr.longitude
        );

        totalDistance += distance;
      }

      console.log('✅ Distance calculation complete:', {
        totalDistanceKm: totalDistance.toFixed(3),
        pointsUsed: gpsPoints.length,
        avgDistancePerSegment: (totalDistance / (gpsPoints.length - 1)).toFixed(3) + ' km'
      });

      return {
        distanceKm: totalDistance,
        pointsUsed: gpsPoints.length
      };
    } catch (error) {
      console.error('❌ Error calculating trip distance:', error);
      return { distanceKm: 0, pointsUsed: 0 };
    }
  }

  /**
   * Calculate trip duration from GPS timestamps
   */
  async calculateTripDuration(
    tripId: string,
    tripType: 'regular' | 'scheduled'
  ): Promise<{ durationMinutes: number; pointsUsed: number }> {
    try {
      console.log('=== CALCULATING TRIP DURATION FROM GPS ===');
      console.log('Trip ID:', tripId);

      // Fetch GPS points from database
      const { data: gpsPoints, error } = await supabase
        .from('trip_location_history')
        .select('recorded_at')
        .eq(tripType === 'regular' ? 'ride_id' : 'scheduled_booking_id', tripId)
        .order('recorded_at', { ascending: true });

      if (error || !gpsPoints || gpsPoints.length < 2) {
        console.warn('⚠️ Insufficient GPS points for duration calculation');
        return { durationMinutes: 1, pointsUsed: gpsPoints?.length || 0 };
      }

      // Calculate duration between first and last GPS point
      const firstPoint = new Date(gpsPoints[0].recorded_at).getTime();
      const lastPoint = new Date(gpsPoints[gpsPoints.length - 1].recorded_at).getTime();
      const durationMs = lastPoint - firstPoint;
      const durationMinutes = Math.max(1, Math.round(durationMs / (1000 * 60)));

      console.log('✅ Duration calculation complete:', {
        durationMinutes,
        pointsUsed: gpsPoints.length,
        firstTimestamp: gpsPoints[0].recorded_at,
        lastTimestamp: gpsPoints[gpsPoints.length - 1].recorded_at
      });

      return {
        durationMinutes,
        pointsUsed: gpsPoints.length
      };
    } catch (error) {
      console.error('❌ Error calculating trip duration:', error);
      return { durationMinutes: 1, pointsUsed: 0 };
    }
  }

  /**
   * Calculate distance between two coordinates using Haversine formula
   */
  private calculateHaversineDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) *
        Math.cos(this.toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  /**
   * Get in-memory GPS points for a trip
   */
  getLocationPoints(tripId: string): LocationPoint[] {
    return this.locationPoints.get(tripId) || [];
  }

  /**
   * Clear all tracking data for a trip
   */
  clearTripData(tripId: string): void {
    this.locationPoints.delete(tripId);
    this.isTracking.delete(tripId);
    this.trackingIntervals.delete(tripId);
  }
}

// Export singleton instance
export const TripLocationTracker = new TripLocationTrackerService();
