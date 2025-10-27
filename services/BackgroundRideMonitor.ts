import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { supabase } from '../utils/supabase';
import { notificationSoundService } from './NotificationSoundService';
import { rideNotificationService } from './RideNotificationService';

const BACKGROUND_RIDE_MONITOR_TASK = 'background-ride-monitor';
const CHECK_INTERVAL = 15; // Check every 15 seconds

// Store last checked notification ID to avoid duplicates
let lastCheckedNotificationId: string | null = null;
let lastCheckTime: number = Date.now();

/**
 * Background task that monitors for new ride requests
 * This runs even when app is closed/background
 */
TaskManager.defineTask(BACKGROUND_RIDE_MONITOR_TASK, async () => {
  try {
    console.log('🔍 Background: Checking for new ride requests...');
    console.log('🔍 Background: Last check:', new Date(lastCheckTime).toISOString());

    const now = Date.now();
    const timeSinceLastCheck = now - lastCheckTime;
    console.log('🔍 Background: Time since last check:', timeSinceLastCheck, 'ms');

    lastCheckTime = now;

    // Get current user/driver info from Supabase session
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user?.id) {
      console.log('⚠️ Background: No active session, skipping check');
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }

    console.log('✅ Background: Active session found, checking notifications...');

    // Check for new ride request notifications
    // Get notifications created in last 2 minutes that haven't been checked
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000).toISOString();

    const { data: notifications, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', session.user.id)
      .eq('type', 'ride_request')
      .gt('created_at', twoMinutesAgo)
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      console.error('❌ Background: Error fetching notifications:', error);
      return BackgroundFetch.BackgroundFetchResult.Failed;
    }

    if (!notifications || notifications.length === 0) {
      console.log('📭 Background: No new ride requests');
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }

    const latestNotification = notifications[0];
    console.log('🔔 Background: Found notification:', latestNotification.id);

    // Check if we've already processed this notification
    if (latestNotification.id === lastCheckedNotificationId) {
      console.log('⏭️ Background: Already processed this notification, skipping');
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }

    console.log('🆕 Background: NEW RIDE REQUEST DETECTED!');
    console.log('🆕 Background: Notification ID:', latestNotification.id);
    console.log('🆕 Background: Ride ID:', latestNotification.data?.ride_id);

    lastCheckedNotificationId = latestNotification.id;

    // Show notification overlay
    const rideData = latestNotification.data;
    await rideNotificationService.showRideRequestNotification({
      rideId: rideData.ride_id,
      rideCode: rideData.ride_code || 'N/A',
      pickupAddress: rideData.pickup_address || 'Unknown pickup',
      destinationAddress: rideData.destination_address || 'Unknown destination',
      customerName: rideData.customer_name || 'Customer',
      fareAmount: rideData.fare_amount || 0,
      distance: rideData.distance,
      bookingType: rideData.booking_type || 'regular',
    });

    console.log('✅ Background: Notification displayed');

    // Play sound (if app is in foreground/background but not killed)
    try {
      await notificationSoundService.playRideRequestNotification();
      console.log('✅ Background: Sound played');
    } catch (soundError) {
      console.log('⚠️ Background: Could not play sound (app may be killed):', soundError);
    }

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('❌ Background: Error in ride monitor task:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

class BackgroundRideMonitorService {
  private isRegistered = false;

  /**
   * Start background ride monitoring
   * This will check for new rides even when app is closed
   */
  async startMonitoring() {
    if (Platform.OS === 'web') {
      console.log('⚠️ Background monitoring not supported on web');
      return;
    }

    try {
      // Check if already registered
      const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_RIDE_MONITOR_TASK);

      if (isRegistered) {
        console.log('✅ Background ride monitor already registered');
        this.isRegistered = true;
        return;
      }

      console.log('🚀 Registering background ride monitor...');

      // Register background fetch task
      await BackgroundFetch.registerTaskAsync(BACKGROUND_RIDE_MONITOR_TASK, {
        minimumInterval: CHECK_INTERVAL, // Check every 15 seconds
        stopOnTerminate: false, // Continue after app is killed
        startOnBoot: true, // Start when device boots
      });

      this.isRegistered = true;
      console.log('✅ Background ride monitor registered successfully');
      console.log('📋 Will check for new rides every', CHECK_INTERVAL, 'seconds');
      console.log('📋 Works even when app is closed');
    } catch (error) {
      console.error('❌ Error registering background ride monitor:', error);
      throw error;
    }
  }

  /**
   * Stop background ride monitoring
   */
  async stopMonitoring() {
    if (Platform.OS === 'web') {
      return;
    }

    try {
      const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_RIDE_MONITOR_TASK);

      if (!isRegistered) {
        console.log('⚠️ Background ride monitor not registered');
        return;
      }

      console.log('🛑 Unregistering background ride monitor...');
      await BackgroundFetch.unregisterTaskAsync(BACKGROUND_RIDE_MONITOR_TASK);

      this.isRegistered = false;
      console.log('✅ Background ride monitor stopped');
    } catch (error) {
      console.error('❌ Error unregistering background ride monitor:', error);
      throw error;
    }
  }

  /**
   * Check if monitoring is active
   */
  async isMonitoring(): Promise<boolean> {
    if (Platform.OS === 'web') {
      return false;
    }

    try {
      return await TaskManager.isTaskRegisteredAsync(BACKGROUND_RIDE_MONITOR_TASK);
    } catch (error) {
      console.error('❌ Error checking monitor status:', error);
      return false;
    }
  }

  /**
   * Get background fetch status
   */
  async getStatus() {
    if (Platform.OS === 'web') {
      return null;
    }

    try {
      const status = await BackgroundFetch.getStatusAsync();

      const statusText = {
        [BackgroundFetch.BackgroundFetchStatus.Restricted]: 'Restricted',
        [BackgroundFetch.BackgroundFetchStatus.Denied]: 'Denied',
        [BackgroundFetch.BackgroundFetchStatus.Available]: 'Available',
      };

      console.log('📊 Background fetch status:', statusText[status] || 'Unknown');
      return status;
    } catch (error) {
      console.error('❌ Error getting background fetch status:', error);
      return null;
    }
  }
}

export const backgroundRideMonitor = new BackgroundRideMonitorService();
