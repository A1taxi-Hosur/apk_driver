import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { supabase } from '../utils/supabase';
import Constants from 'expo-constants';

class PushNotificationService {
  private pushToken: string | null = null;
  private isRegistered = false;

  /**
   * Register for push notifications and store token in database
   */
  async registerForPushNotifications(driverId: string): Promise<string | null> {
    try {
      console.log('📱 Registering for push notifications...');

      // Check if physical device
      if (!Device.isDevice) {
        console.warn('⚠️ Push notifications only work on physical devices');
        return null;
      }

      // Check existing permissions
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      // Request permissions if not granted
      if (existingStatus !== 'granted') {
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
            '📱 STEP 1: Enable Notifications\n' +
            '• Settings → Apps → A1 Taxi → Notifications → ON\n\n' +
            '📱 STEP 2: Enable "Display over other apps"\n' +
            '• Settings → Apps → A1 Taxi → Display over other apps\n' +
            '• Tap "Allow restricted settings" at bottom\n' +
            '• Turn ON the permission\n\n' +
            '⚠️ Both permissions are required for ride alerts!',
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

      // CRITICAL: Guide user to enable "Display over other apps" separately
      if (Platform.OS === 'android') {
        console.log('📱 Checking if user needs to enable "Display over other apps"...');

        // Show one-time guide for Display over other apps
        const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
        const displayOverAppsGuideShown = await AsyncStorage.getItem('@display_over_apps_guide_shown');

        if (!displayOverAppsGuideShown) {
          const { Alert, Linking } = await import('react-native');

          setTimeout(() => {
            Alert.alert(
              'Important: Enable "Display over other apps"',
              '🚨 CRITICAL PERMISSION for ride alerts:\n\n' +
              '1. Go to Settings → Apps → A1 Taxi\n' +
              '2. Tap "Display over other apps"\n' +
              '3. Tap "Allow restricted settings" (at bottom)\n' +
              '4. Turn ON the permission\n\n' +
              'Without this, you will NOT see ride request alerts!',
              [
                {
                  text: 'Remind Later',
                  style: 'cancel'
                },
                {
                  text: 'Open Settings Now',
                  onPress: async () => {
                    await AsyncStorage.setItem('@display_over_apps_guide_shown', 'true');
                    Linking.openSettings();
                  }
                }
              ]
            );
          }, 1000);
        }
      }

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

      console.log('✅ Push token stored successfully');
      this.isRegistered = true;

      return this.pushToken;
    } catch (error) {
      console.error('❌ Error registering for push notifications:', error);
      return null;
    }
  }

  /**
   * Get current push token
   */
  getPushToken(): string | null {
    return this.pushToken;
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
