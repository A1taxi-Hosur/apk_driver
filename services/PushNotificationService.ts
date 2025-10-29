import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { supabase } from '../utils/supabase';
import Constants from 'expo-constants';
import { debugLog } from '../utils/debugLogger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PUSH_TOKEN_KEY = 'expo_push_token';

class PushNotificationService {
  private pushToken: string | null = null;
  private isRegistered = false;

  /**
   * Register for push notifications and store token in database
   */
  async registerForPushNotifications(driverId: string): Promise<string | null> {
    try {
      debugLog('PushNotificationService', 'Starting registration', { driverId });
      console.log('📱 ===== REGISTERING FOR PUSH NOTIFICATIONS =====');
      console.log('📱 Driver ID:', driverId);
      console.log('📱 Platform:', Platform.OS);
      console.log('📱 Device:', Device.deviceName);

      // Check if physical device
      if (!Device.isDevice) {
        debugLog('PushNotificationService', 'Not a physical device - skipping', {});
        console.warn('⚠️ Push notifications only work on physical devices');
        return null;
      }

      debugLog('PushNotificationService', 'Is physical device', { deviceName: Device.deviceName });

      // Check existing permissions
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      debugLog('PushNotificationService', 'Existing permission status', { status: existingStatus });
      let finalStatus = existingStatus;

      // Request permissions if not granted
      if (existingStatus !== 'granted') {
        debugLog('PushNotificationService', 'Requesting permissions', {});
        console.log('📋 Requesting notification permissions...');
        const { status } = await Notifications.requestPermissionsAsync({
          android: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
            allowDisplayInCarPlay: false,
          },
        });
        finalStatus = status;
        debugLog('PushNotificationService', 'Permission request result', { status: finalStatus });
      }

      if (finalStatus !== 'granted') {
        console.warn('⚠️ Notification permissions not granted:', finalStatus);
        console.warn('⚠️ User needs to enable notifications in Settings');

        // Show alert with instructions
        if (Platform.OS === 'android') {
          const { Alert, Linking } = await import('react-native');
          Alert.alert(
            'Notification Permissions Required',
            'A1 Taxi needs notification permissions to alert you of ride requests.\n\n' +
            '📱 Please enable notifications:\n' +
            '• Settings → Apps → A1 Taxi → Notifications → ON\n\n' +
            '⚠️ Notifications are required to receive ride alerts!',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Open Settings',
                onPress: () => Linking.openSettings()
              }
            ]
          );
        }

        return null;
      }

      console.log('✅ Notification permissions granted');

      // Get Expo push token
      console.log('🔑 Getting Expo push token...');
      const projectId = Constants.expoConfig?.extra?.eas?.projectId;

      const tokenData = await Notifications.getExpoPushTokenAsync({
        projectId: projectId,
      });

      this.pushToken = tokenData.data;
      console.log('✅ Expo push token obtained:', this.pushToken);

      // Store token in database
      console.log('💾 Storing push token in database...');
      const { error } = await supabase.rpc('update_driver_push_token', {
        p_driver_id: driverId,
        p_push_token: this.pushToken,
      });

      if (error) {
        console.error('❌ Error storing push token:', error);
        throw error;
      }

      console.log('✅ Push token stored successfully in database');

      // Also store locally for persistence
      await AsyncStorage.setItem(PUSH_TOKEN_KEY, this.pushToken);
      console.log('✅ Push token stored locally');

      this.isRegistered = true;
      console.log('✅ ===== PUSH NOTIFICATIONS FULLY REGISTERED =====');
      console.log('✅ Token:', this.pushToken);
      console.log('✅ You will now receive notifications even when app is CLOSED');

      return this.pushToken;
    } catch (error) {
      console.error('❌ Error registering for push notifications:', error);
      return null;
    }
  }

  /**
   * Get current push token (from memory or storage)
   */
  async getPushToken(): Promise<string | null> {
    if (this.pushToken) {
      return this.pushToken;
    }

    // Try to get from storage
    try {
      const storedToken = await AsyncStorage.getItem(PUSH_TOKEN_KEY);
      if (storedToken) {
        this.pushToken = storedToken;
        console.log('✅ Retrieved push token from storage');
      }
      return storedToken;
    } catch (error) {
      console.error('❌ Error getting push token from storage:', error);
      return null;
    }
  }

  /**
   * Check if push notifications are registered
   */
  isRegisteredForPush(): boolean {
    return this.isRegistered;
  }

  /**
   * Unregister push notifications (when driver logs out)
   */
  async unregisterPushNotifications(driverId: string): Promise<void> {
    try {
      console.log('🔕 Unregistering push notifications...');

      // Remove token from database
      const { error } = await supabase.rpc('update_driver_push_token', {
        p_driver_id: driverId,
        p_push_token: null,
      });

      if (error) {
        console.error('❌ Error removing push token:', error);
        throw error;
      }

      // Remove from local storage
      await AsyncStorage.removeItem(PUSH_TOKEN_KEY);

      this.pushToken = null;
      this.isRegistered = false;
      console.log('✅ Push notifications unregistered');
    } catch (error) {
      console.error('❌ Error unregistering push notifications:', error);
    }
  }

  /**
   * Set up notification handlers
   */
  setupNotificationHandlers(
    onNotificationReceived?: (notification: Notifications.Notification) => void,
    onNotificationTapped?: (response: Notifications.NotificationResponse) => void
  ) {
    // Handle notifications received while app is in foreground
    if (onNotificationReceived) {
      Notifications.addNotificationReceivedListener(onNotificationReceived);
    }

    // Handle notifications tapped by user
    if (onNotificationTapped) {
      Notifications.addNotificationResponseReceivedListener(onNotificationTapped);
    }

    console.log('✅ Notification handlers set up');
  }
}

export const pushNotificationService = new PushNotificationService();
