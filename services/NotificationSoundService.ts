import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

class NotificationSoundService {
  private sound: Audio.Sound | null = null;
  private isInitialized: boolean = false;

  async initialize() {
    if (this.isInitialized) {
      return;
    }

    try {
      if (Platform.OS !== 'web') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
        });
      }
      this.isInitialized = true;
      console.log('✅ Notification sound service initialized');
    } catch (error) {
      console.error('❌ Error initializing notification sound service:', error);
    }
  }

  async playNotificationSound() {
    try {
      console.log('🔊 playNotificationSound called - Platform:', Platform.OS);
      await this.initialize();

      if (Platform.OS === 'web') {
        console.log('🌐 Web platform detected, using web notification sound');
        this.playWebNotificationSound();
        return;
      }

      console.log('📱 Native platform detected');

      if (this.sound) {
        console.log('🔄 Stopping and unloading previous sound');
        try {
          await this.sound.stopAsync();
          await this.sound.unloadAsync();
        } catch (cleanupError) {
          console.log('⚠️ Error during sound cleanup:', cleanupError);
        }
        this.sound = null;
      }

      try {
        console.log('📂 Loading notification.mp3 file...');
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/sounds/notification.mp3'),
          { shouldPlay: false, volume: 1.0 },
          this.onPlaybackStatusUpdate
        );

        this.sound = sound;
        console.log('✅ Sound loaded successfully, playing now...');
        await sound.playAsync();

        console.log('🔊 Notification sound is playing');
      } catch (soundError) {
        console.error('⚠️ Could not load notification.mp3:', soundError);
        console.log('⚠️ Using fallback sound');
        this.playFallbackSound();
      }
    } catch (error) {
      console.error('❌ Error playing notification sound:', error);
      this.playFallbackSound();
    }
  }

  private playWebNotificationSound() {
    try {
      const audio = new window.Audio('/assets/sounds/notification.mp3');
      audio.volume = 1.0;
      audio.play().catch((error) => {
        console.error('❌ Error playing web notification sound:', error);
      });
      console.log('🔊 Playing web notification sound');
    } catch (error) {
      console.error('❌ Error creating web audio:', error);
    }
  }

  private playFallbackSound() {
    if (Platform.OS === 'web') {
      try {
        const context = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Create a pleasant notification sound with two tones
        const playTone = (frequency: number, startTime: number, duration: number) => {
          const oscillator = context.createOscillator();
          const gainNode = context.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(context.destination);

          oscillator.frequency.value = frequency;
          oscillator.type = 'sine';

          gainNode.gain.setValueAtTime(0.3, startTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

          oscillator.start(startTime);
          oscillator.stop(startTime + duration);
        };

        // Play two tones for a pleasant notification
        playTone(800, context.currentTime, 0.15);
        playTone(1000, context.currentTime + 0.2, 0.15);

        console.log('🔊 Playing fallback notification sound');
      } catch (error) {
        console.error('❌ Error playing fallback sound:', error);
      }
    } else {
      // For native platforms, just log - vibration will provide feedback
      console.log('⚠️ Fallback sound not available on native platform - using vibration only');
    }
  }

  async triggerVibration() {
    if (Platform.OS === 'web') {
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
        console.log('📳 Triggering web vibration');
      }
      return;
    }

    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      setTimeout(async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }, 200);

      setTimeout(async () => {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }, 400);

      console.log('📳 Triggering vibration pattern');
    } catch (error) {
      console.error('❌ Error triggering vibration:', error);
    }
  }

  async playRideRequestNotification() {
    console.log('🚨 Playing ride request notification');

    await Promise.all([
      this.playNotificationSound(),
      this.triggerVibration(),
    ]);
  }

  async stopNotificationSound() {
    try {
      console.log('🛑 Stopping notification sound');

      if (this.sound) {
        console.log('🔇 Sound is playing, stopping now...');
        try {
          await this.sound.stopAsync();
          await this.sound.unloadAsync();
          this.sound = null;
          console.log('✅ Notification sound stopped successfully');
        } catch (stopError) {
          console.error('❌ Error stopping sound:', stopError);
        }
      } else {
        console.log('ℹ️ No sound currently playing');
      }
    } catch (error) {
      console.error('❌ Error in stopNotificationSound:', error);
    }
  }

  private onPlaybackStatusUpdate = async (status: any) => {
    if (status.didJustFinish) {
      console.log('✅ Notification sound finished playing');
      if (this.sound) {
        try {
          await this.sound.unloadAsync();
          this.sound = null;
          console.log('✅ Sound unloaded after playback');
        } catch (error) {
          console.error('❌ Error unloading sound after playback:', error);
        }
      }
    }
    if (status.error) {
      console.error('❌ Playback error:', status.error);
    }
  };

  async cleanup() {
    try {
      if (this.sound) {
        try {
          await this.sound.stopAsync();
        } catch (stopError) {
          console.log('⚠️ Error stopping sound during cleanup:', stopError);
        }
        await this.sound.unloadAsync();
        this.sound = null;
      }
      console.log('✅ Notification sound service cleaned up');
    } catch (error) {
      console.error('❌ Error cleaning up notification sound service:', error);
    }
  }
}

export const notificationSoundService = new NotificationSoundService();
