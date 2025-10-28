/**
 * Background Notification Handler
 *
 * CRITICAL: This handles push notifications when the app is CLOSED or in BACKGROUND
 *
 * Without this, notifications only work when app is OPEN!
 */

import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';

const BACKGROUND_NOTIFICATION_TASK = 'BACKGROUND_NOTIFICATION_TASK';

/**
 * Define the background task that handles notifications when app is closed
 *
 * This task is called by the system when a push notification arrives
 * even if the app is not running!
 */
TaskManager.defineTask(
  BACKGROUND_NOTIFICATION_TASK,
  async ({ data, error, executionInfo }: any) => {
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] 📱 Background notification task triggered`);
    console.log('Execution info:', executionInfo);

    if (error) {
      console.error(`[${timestamp}] ❌ Background notification error:`, error);
      return;
    }

    if (data) {
      const notification = data.notification;
      console.log(`[${timestamp}] 📨 Received background notification:`, {
        title: notification?.request?.content?.title,
        body: notification?.request?.content?.body,
        data: notification?.request?.content?.data,
      });

      // The notification will be displayed automatically by the system
      // We just log here for debugging

      const notificationData = notification?.request?.content?.data;
      if (notificationData?.type === 'ride_request') {
        console.log(`[${timestamp}] 🚗 Ride request notification in background`);
        console.log('Ride ID:', notificationData.rideId);
        console.log('Customer:', notificationData.customerName);
      }
    } else {
      console.log(`[${timestamp}] ⚠️ No notification data in background task`);
    }

    console.log(`[${timestamp}] ✅ Background notification task completed`);
  }
);

/**
 * Register the background notification task
 *
 * MUST be called at app startup (in _layout.tsx or index.ts)
 */
export async function registerBackgroundNotificationTask(): Promise<boolean> {
  try {
    console.log('📱 Registering background notification task...');

    // Check if task is already registered
    const isRegistered = await TaskManager.isTaskRegisteredAsync(
      BACKGROUND_NOTIFICATION_TASK
    );

    if (isRegistered) {
      console.log('✅ Background notification task already registered');
      return true;
    }

    // Register the task with Expo Notifications
    await Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);

    console.log('✅ Background notification task registered successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to register background notification task:', error);
    return false;
  }
}

/**
 * Unregister the background notification task
 *
 * Call this when logging out or when notifications are no longer needed
 */
export async function unregisterBackgroundNotificationTask(): Promise<boolean> {
  try {
    console.log('📱 Unregistering background notification task...');

    const isRegistered = await TaskManager.isTaskRegisteredAsync(
      BACKGROUND_NOTIFICATION_TASK
    );

    if (!isRegistered) {
      console.log('ℹ️ Background notification task was not registered');
      return true;
    }

    await Notifications.unregisterTaskAsync(BACKGROUND_NOTIFICATION_TASK);

    console.log('✅ Background notification task unregistered');
    return true;
  } catch (error) {
    console.error('❌ Failed to unregister background notification task:', error);
    return false;
  }
}

/**
 * Check if background notification task is registered
 */
export async function isBackgroundNotificationTaskRegistered(): Promise<boolean> {
  try {
    return await TaskManager.isTaskRegisteredAsync(BACKGROUND_NOTIFICATION_TASK);
  } catch (error) {
    console.error('❌ Error checking background notification task:', error);
    return false;
  }
}

// Export task name for reference
export { BACKGROUND_NOTIFICATION_TASK };
