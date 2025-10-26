import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

class NotificationSoundService {
  private sound: Audio.Sound | null = null;
  private isInitialized: boolean = false;
  private isPlaying: boolean = false;
  private lastPlayTime: number = 0;
  private readonly DEBOUNCE_MS = 3000; // Prevent playing sound within 3 seconds

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
          interruptionModeIOS: 1, // Mix with other audio
          interruptionModeAndroid: 1, // Duck other audio
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

      // Debounce: Prevent playing sound too frequently
      const now = Date.now();
      const timeSinceLastPlay = now - this.lastPlayTime;
      if (timeSinceLastPlay < this.DEBOUNCE_MS) {
        console.log(`⏸️ Skipping sound - debounce active (${timeSinceLastPlay}ms since last play)`);
        return;
      }

      // Check if already playing
      if (this.isPlaying) {
        console.log('⏸️ Sound already playing, skipping');
        return;
      }

      await this.initialize();
      this.lastPlayTime = now;
      this.isPlaying = true;

      if (Platform.OS === 'web') {
        console.log('🌐 Web platform detected, using web notification sound');
        this.playWebNotificationSound();
        return;
      }

      console.log('📱 Native platform detected');

      // Force cleanup any existing sound
      await this.forceCleanup();

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

        // Auto cleanup after 5 seconds if sound doesn't finish
        setTimeout(() => {
          if (this.isPlaying) {
            console.log('⏰ Auto-cleanup timeout reached');
            this.forceCleanup();
          }
        }, 5000);
      } catch (soundError) {
        console.error('⚠️ Could not load notification.mp3:', soundError);
        console.log('⚠️ Using fallback sound');
        this.isPlaying = false;
        this.playFallbackSound();
      }
    } catch (error) {
      console.error('❌ Error playing notification sound:', error);
      this.isPlaying = false;
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
    console.log('🚨 ============================================');
    console.log('🚨 RIDE REQUEST NOTIFICATION TRIGGERED');
    console.log('🚨 Timestamp:', new Date().toISOString());
    console.log('🚨 Last play time:', this.lastPlayTime ? new Date(this.lastPlayTime).toISOString() : 'never');
    console.log('🚨 Is playing:', this.isPlaying);
    console.log('🚨 ============================================');

    await Promise.all([
      this.playNotificationSound(),
      this.triggerVibration(),
    ]);
  }

  private async forceCleanup() {
    if (this.sound) {
      console.log('🔄 Force cleaning up previous sound');
      try {
        await this.sound.stopAsync();
        await this.sound.unloadAsync();
      } catch (cleanupError) {
        console.log('⚠️ Error during sound cleanup:', cleanupError);
      }
      this.sound = null;
    }
    this.isPlaying = false;
  }

  async stopNotificationSound() {
    try {
      console.log('🛑 Stopping notification sound');
      await this.forceCleanup();
      console.log('✅ Notification sound stopped successfully');
    } catch (error) {
      console.error('❌ Error in stopNotificationSound:', error);
    }
  }

  private onPlaybackStatusUpdate = async (status: any) => {
    if (status.didJustFinish) {
      console.log('✅ Notification sound finished playing');
      this.isPlaying = false;
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
      this.isPlaying = false;
    }
  };

  async cleanup() {
    try {
      await this.forceCleanup();
      console.log('✅ Notification sound service cleaned up');
    } catch (error) {
      console.error('❌ Error cleaning up notification sound service:', error);
    }
  }
}

export const notificationSoundService = new NotificationSoundService();
