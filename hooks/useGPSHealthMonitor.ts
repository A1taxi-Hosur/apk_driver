import { useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TripLocationTracker } from '../services/TripLocationTracker';

interface GPSHealthMonitorProps {
  tripId: string | null;
  tripType: 'regular' | 'scheduled';
  isActive: boolean; // Whether trip is in progress
}

const GPS_HEALTH_CHECK_INTERVAL = 2 * 60 * 1000; // Check every 2 minutes
const GPS_POINT_TIMEOUT = 5 * 60 * 1000; // Alert if no points for 5 minutes
const GPS_HEALTH_ALERT_KEY = 'gps_health_alert_shown_';

/**
 * GPS Health Monitor Hook
 *
 * Monitors GPS tracking during active trips and alerts driver if GPS stops working
 *
 * Usage:
 * ```tsx
 * useGPSHealthMonitor({
 *   tripId: currentRide?.id || null,
 *   tripType: 'regular',
 *   isActive: currentRide?.status === 'in_progress'
 * });
 * ```
 */
export function useGPSHealthMonitor({ tripId, tripType, isActive }: GPSHealthMonitorProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const alertShownRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isActive || !tripId) {
      // Clear any existing monitoring
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      alertShownRef.current = false;
      return;
    }

    console.log('🔍 Starting GPS health monitoring for trip:', tripId);

    // Check GPS health immediately, then every 2 minutes
    const checkGPSHealth = async () => {
      try {
        console.log('🏥 Checking GPS health...');

        // Get GPS point count for this trip
        const cacheKey = `gps_points_cache_${tripId}`;
        const cacheJson = await AsyncStorage.getItem(cacheKey);

        if (!cacheJson) {
          console.warn('⚠️ No GPS cache found for trip:', tripId);
          await showGPSWarning('No GPS data found');
          return;
        }

        const cache = JSON.parse(cacheJson);
        const pointCount = cache.length || 0;

        console.log(`📊 GPS Health Check: ${pointCount} points collected`);

        if (pointCount === 0) {
          console.error('❌ GPS Health: ZERO points collected!');
          await showGPSWarning('GPS tracking has not collected any location data');
          return;
        }

        // Check if last GPS point is recent
        const lastPoint = cache[cache.length - 1];
        if (lastPoint && lastPoint.recorded_at) {
          const lastPointTime = new Date(lastPoint.recorded_at).getTime();
          const timeSinceLastPoint = Date.now() - lastPointTime;

          console.log('🕐 Time since last GPS point:', Math.round(timeSinceLastPoint / 1000), 'seconds');

          if (timeSinceLastPoint > GPS_POINT_TIMEOUT) {
            console.error('❌ GPS Health: No new points in', Math.round(timeSinceLastPoint / 60000), 'minutes');
            await showGPSWarning(`GPS stopped updating ${Math.round(timeSinceLastPoint / 60000)} minutes ago`);
            return;
          }
        }

        console.log('✅ GPS Health: OK');
        alertShownRef.current = false; // Reset alert flag when GPS is working

      } catch (error) {
        console.error('❌ GPS Health Check failed:', error);
      }
    };

    // Show warning alert to driver
    const showGPSWarning = async (reason: string) => {
      // Only show alert once per trip
      const alertKey = GPS_HEALTH_ALERT_KEY + tripId;
      const alertShown = await AsyncStorage.getItem(alertKey);

      if (alertShown === 'true' || alertShownRef.current) {
        console.log('⚠️ GPS warning already shown for this trip');
        return;
      }

      console.log('�� Showing GPS warning to driver:', reason);
      alertShownRef.current = true;
      await AsyncStorage.setItem(alertKey, 'true');

      Alert.alert(
        '⚠️ GPS Tracking Issue',
        `GPS tracking may not be working properly.\n\nReason: ${reason}\n\nPlease check:\n• Location services are enabled\n• GPS is turned on\n• App has location permissions\n\nYour trip will continue, but distance tracking may be inaccurate.`,
        [
          {
            text: 'Check Settings',
            onPress: () => {
              console.log('Driver: Opening location settings');
              // Could open settings here if needed
            }
          },
          {
            text: 'OK',
            style: 'cancel'
          }
        ]
      );
    };

    // Run initial check after 2 minutes (give GPS time to start)
    const initialTimeout = setTimeout(() => {
      checkGPSHealth();
    }, 2 * 60 * 1000);

    // Then check every 2 minutes
    intervalRef.current = setInterval(() => {
      checkGPSHealth();
    }, GPS_HEALTH_CHECK_INTERVAL);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      clearTimeout(initialTimeout);
    };
  }, [tripId, tripType, isActive]);
}
