import * as Notifications from 'expo-notifications';
import { Platform, AppState, Linking } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    priority: Notifications.AndroidNotificationPriority.MAX,
  }),
});

// Add notification response listener to auto-open app
Notifications.addNotificationResponseReceivedListener((response) => {
  console.log('📱 Notification tapped, opening app...');
  const data = response.notification.request.content.data;
  if (data.type === 'ride_request') {
    console.log('🚗 Ride request notification tapped, ride ID:', data.rideId);
    // App will already open, just log for debugging
  }
});

class RideNotificationService {
  private isInitialized = false;
  private notificationChannelId = 'ride-requests';

  async initialize() {
    if (this.isInitialized) {
      return;
    }

    try {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        console.warn('⚠️ Notification permissions not granted');
        return;
      }

      if (Platform.OS === 'android') {
        await this.setupAndroidNotificationChannel();
      }

      this.isInitialized = true;
      console.log('✅ Ride notification service initialized');
    } catch (error) {
      console.error('❌ Error initializing ride notification service:', error);
    }
  }

  private async setupAndroidNotificationChannel() {
    // Create high-priority channel for ride requests
    await Notifications.setNotificationChannelAsync(this.notificationChannelId, {
      name: 'Ride Requests',
      description: 'Critical notifications for incoming ride requests',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF6B6B',
      sound: 'notification.mp3',
      enableVibrate: true,
      enableLights: true,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      bypassDnd: true,
      showBadge: true,
    });

    // Also create a foreground service channel for persistent notification
    await Notifications.setNotificationChannelAsync('driver-foreground-service', {
      name: 'Driver Service',
      description: 'Keeps driver app active to receive ride requests',
      importance: Notifications.AndroidImportance.LOW,
      enableVibrate: false,
      enableLights: false,
      showBadge: false,
    });

    console.log('✅ Android notification channels configured');
  }

  async showRideRequestNotification(rideData: {
    rideId: string;
    rideCode: string;
    pickupAddress: string;
    destinationAddress: string;
    customerName: string;
    fareAmount: number;
    distance?: number;
    bookingType: string;
  }) {
    await this.initialize();

    try {
      console.log('🔔 Showing ride request notification...');
      console.log('📱 App State:', AppState.currentState);

      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: '🚗 New Ride Request!',
          body: `${rideData.customerName}\n📍 ${rideData.pickupAddress}\n💰 ₹${rideData.fareAmount}`,
          data: {
            rideId: rideData.rideId,
            rideCode: rideData.rideCode,
            type: 'ride_request',
            action: 'open_app',
          },
          sound: 'notification.mp3',
          priority: Notifications.AndroidNotificationPriority.MAX,
          vibrate: [0, 250, 250, 250],
          badge: 1,
          categoryIdentifier: 'ride-request',
          ...(Platform.OS === 'android' && {
            channelId: this.notificationChannelId,
            sticky: true,
            autoDismiss: false,
          }),
        },
        trigger: null,
      });

      console.log('🔔 Ride request notification displayed:', notificationId);

      // On Android, try to bring app to foreground if it's in background
      if (Platform.OS === 'android' && AppState.currentState !== 'active') {
        console.log('📱 App is in background, notification should wake it');
      }

      return notificationId;
    } catch (error) {
      console.error('❌ Error showing ride request notification:', error);
      return null;
    }
  }

  async startForegroundService() {
    if (Platform.OS !== 'android') {
      return;
    }

    await this.initialize();

    try {
      console.log('🚀 Starting foreground service notification...');

      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: 'A1 Taxi - Driver Online',
          body: 'Listening for ride requests...',
          data: {
            type: 'foreground_service',
          },
          priority: Notifications.AndroidNotificationPriority.LOW,
          ...(Platform.OS === 'android' && {
            channelId: 'driver-foreground-service',
            sticky: true,
            autoDismiss: false,
          }),
        },
        trigger: null,
      });

      console.log('✅ Foreground service notification started:', notificationId);
      return notificationId;
    } catch (error) {
      console.error('❌ Error starting foreground service:', error);
      return null;
    }
  }

  async stopForegroundService(notificationId: string) {
    if (Platform.OS !== 'android') {
      return;
    }

    try {
      await Notifications.dismissNotificationAsync(notificationId);
      console.log('✅ Foreground service notification stopped');
    } catch (error) {
      console.error('❌ Error stopping foreground service:', error);
    }
  }

  async dismissNotification(notificationId: string) {
    try {
      await Notifications.dismissNotificationAsync(notificationId);
      console.log('✅ Notification dismissed:', notificationId);
    } catch (error) {
      console.error('❌ Error dismissing notification:', error);
    }
  }

  async dismissAllNotifications() {
    try {
      await Notifications.dismissAllNotificationsAsync();
      console.log('✅ All notifications dismissed');
    } catch (error) {
      console.error('❌ Error dismissing all notifications:', error);
    }
  }

  async getBadgeCount(): Promise<number> {
    try {
      return await Notifications.getBadgeCountAsync();
    } catch (error) {
      console.error('❌ Error getting badge count:', error);
      return 0;
    }
  }

  async setBadgeCount(count: number) {
    try {
      await Notifications.setBadgeCountAsync(count);
    } catch (error) {
      console.error('❌ Error setting badge count:', error);
    }
  }

  async clearBadge() {
    await this.setBadgeCount(0);
  }
}

export const rideNotificationService = new RideNotificationService();
