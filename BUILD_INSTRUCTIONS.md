# Build Instructions for A1 Taxi Driver App

## Prerequisites

1. **Node.js** installed (v18 or later)
2. **Android Studio** installed (for local builds)
3. **Android device** or emulator set up
4. **EAS Account** (for cloud builds) - optional

## Option 1: Local Android Build (Recommended)

This is the fastest and most reliable method for development and testing.

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Connect Android Device

```bash
# Enable USB debugging on your Android device
# Connect via USB and verify:
adb devices
```

### Step 3: Build and Install

#### For Development/Testing (Debug Build)
```bash
npm run build:android:dev
```
or
```bash
npx expo run:android --variant debug
```

#### For Production (Release Build)
```bash
npm run build:android
```
or
```bash
npx expo run:android --variant release
```

The app will automatically install on your connected device.

### Troubleshooting Local Builds

If you get "ANDROID_HOME not set":
```bash
# Add to ~/.bashrc or ~/.zshrc
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

If you get "SDK not found":
```bash
# Install Android SDK via Android Studio
# Tools > SDK Manager > Install required SDK versions
```

## Option 2: EAS Cloud Build

EAS Build runs in the cloud, so you don't need Android Studio installed.

### Step 1: Install Dependencies and Update EAS CLI

```bash
# Install all dependencies including latest EAS CLI
npm install

# Verify EAS CLI version (should be 16.23.1 or higher)
npx eas --version
```

### Step 2: Login to EAS

```bash
npx eas login
```

### Step 3: Configure Project (First Time Only)

```bash
npx eas build:configure
```

### Step 4: Build

#### Preview Build (Faster)
```bash
npm run build:eas:preview
```
or
```bash
npx eas build --platform android --profile preview
```

#### Production Build
```bash
npm run build:eas:production
```
or
```bash
npx eas build --platform android --profile production
```

### If EAS Build Times Out

If you get the Gradle timeout error:

1. **Retry with cache clear:**
```bash
npx eas build --platform android --profile preview --clear-cache
```

2. **Try again later** (Gradle servers might be slow)

3. **Switch to local build** (Option 1 above)

## Option 3: Development Build with Expo Go

For quick testing without building a full APK:

### Step 1: Start Development Server

```bash
npm run dev
```

### Step 2: Scan QR Code

- Install **Expo Go** from Play Store
- Open Expo Go and scan the QR code

**Note:** Some features may not work in Expo Go (like background location, notifications). Use a development build for full functionality.

## Build Profiles Explained

### Development Profile
- Fast build time
- Includes dev tools
- Allows hot reloading
- Best for: Active development

### Preview Profile
- Medium build time
- Production-like but not optimized
- Best for: Testing before release

### Production Profile
- Longest build time
- Fully optimized
- Smallest APK size
- Best for: Final release to Play Store

## Available NPM Scripts

```bash
# Development server
npm run dev              # Start dev server
npm run dev:tunnel       # Start with tunnel (for remote testing)
npm run dev:web          # Start web version

# Local builds
npm run build:android:dev       # Build debug APK
npm run build:android           # Build release APK

# Cloud builds
npm run build:eas:preview       # EAS preview build
npm run build:eas:production    # EAS production build

# Other
npm run build:web        # Build for web
npm run lint            # Run linter
```

## Installing Built APK

### From Local Build
The APK will be in:
```
android/app/build/outputs/apk/release/app-release.apk
```

Install manually:
```bash
adb install path/to/app-release.apk
```

### From EAS Build
1. Build completes in the cloud
2. Download APK from the link provided
3. Install:
```bash
adb install path/to/downloaded.apk
```

Or share the download link directly with testers.

## Testing the Build

After installing:

```bash
# Check if app is installed
adb shell pm list packages | grep com.a1taxi

# View logs
adb logcat | grep -i "ReactNativeJS"

# Clear app data (for fresh start)
adb shell pm clear com.a1taxi
```

## Recommended Workflow

### For Daily Development
```bash
npm run dev
# Use Expo Dev Client or local build
```

### For Testing New Features
```bash
npm run build:android:dev
# Quick debug build on device
```

### For QA/Beta Testing
```bash
npm run build:eas:preview
# Cloud build, share link with testers
```

### For Production Release
```bash
npm run build:eas:production
# Optimized build for Play Store
```

## Common Issues

### Issue: "Metro bundler not responding"
**Solution:**
```bash
# Clear Metro cache
npx expo start --clear
```

### Issue: "Could not connect to development server"
**Solution:**
- Ensure device and computer are on same network
- Use tunnel mode: `npm run dev:tunnel`

### Issue: "Build failed on EAS"
**Solution:**
- Use local build instead: `npm run build:android`
- Or retry with: `npx eas build --platform android --profile preview --clear-cache`

### Issue: "App crashes on startup"
**Solution:**
```bash
# Check logs
adb logcat | grep -i "ReactNativeJS"

# Check .env file has correct values
cat .env
```

## Environment Variables

Before building, ensure `.env` file exists with:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
```

These are automatically included in all builds.

## Need Help?

1. Check `GRADLE_BUILD_FIX.md` for Gradle-specific issues
2. Check `RIDE_NOTIFICATION_FIX.md` for app functionality
3. Run with logs: `adb logcat` to see detailed errors

---

**Quick Start for Most Users:**
```bash
npm install
npm run build:android:dev
# App will build and install on connected device
```
