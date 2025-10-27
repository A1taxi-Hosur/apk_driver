import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    priority: Notifications.AndroidNotificationPriority.MAX,
  }),
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
    await Notifications.setNotificationChannelAsync(this.notificationChannelId, {
      name: 'Ride Requests',
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

    console.log('✅ Android notification channel configured for heads-up display');
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
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: '🚗 New Ride Request!',
          body: `${rideData.customerName}\n📍 ${rideData.pickupAddress}\n💰 ₹${rideData.fareAmount}`,
          data: {
            rideId: rideData.rideId,
            rideCode: rideData.rideCode,
            type: 'ride_request',
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
      return notificationId;
    } catch (error) {
      console.error('❌ Error showing ride request notification:', error);
      return null;
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
