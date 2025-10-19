# Build Instructions - Google Maps Crash Fix

## The Issue

The app crashes after accepting a ride because the Google Maps API key isn't injected into the Android manifest. This requires a **native rebuild**.

---

## Configuration Changes Applied ✅

**Files Updated**:
- `app.config.js` - Added `android.config.googleMaps`
- `app.json` - Added `android.config.googleMaps`

**Configuration**:
```javascript
android: {
  package: "com.a1taxi.driverpro",
  config: {
    googleMaps: {
      apiKey: "AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q"
    }
  }
}
```

---

## Build Options

You have **3 options** to rebuild the app with the Google Maps fix:

---

## Option 1: Local Development Build (Recommended for Testing)

This builds the app directly on your machine. Best for quick testing.

### Prerequisites
- Android Studio installed
- Android SDK configured
- Java JDK 17 installed
- Physical device or emulator ready

### Steps

```bash
# 1. Install EAS CLI globally (if not already installed)
npm install -g eas-cli

# 2. Clean any existing native folders
rm -rf android ios

# 3. Generate native Android project with the new config
npx expo prebuild --platform android --clean

# 4. Build and run on connected device/emulator
npx expo run:android
```

**What This Does**:
- ✅ Generates native Android project with Google Maps API key
- ✅ Compiles and installs APK on your device
- ✅ Opens the app automatically
- ✅ Fast iteration for testing

**Time**: ~5-10 minutes

---

## Option 2: EAS Development Build (Recommended for Team)

Builds in the cloud, no need for Android Studio on your machine.

### Prerequisites
- EAS CLI installed: `npm install -g eas-cli`
- Expo account (free): `eas login`
- Internet connection

### Steps

```bash
# 1. Install EAS CLI
npm install -g eas-cli

# 2. Login to Expo
eas login

# 3. Configure project (first time only)
eas build:configure

# 4. Build for Android
eas build --platform android --profile development --clear-cache

# 5. Wait for build to complete (~10-15 minutes)
# Download and install the .apk on your device
```

**What This Does**:
- ✅ Builds in Expo's cloud infrastructure
- ✅ No Android Studio required
- ✅ Shareable APK link for team
- ✅ Includes dev tools for debugging

**Time**: ~10-20 minutes (cloud build)

---

## Option 3: EAS Preview/Production Build

For production-ready builds without dev tools.

### Steps

```bash
# 1. Install EAS CLI
npm install -g eas-cli

# 2. Login
eas login

# 3. Build preview (internal testing)
eas build --platform android --profile preview

# OR build production
eas build --platform android --profile production

# 4. Download and install APK
```

**What This Does**:
- ✅ Production-optimized build
- ✅ Smaller APK size
- ✅ No dev tools included
- ✅ Ready for testing/distribution

**Time**: ~10-20 minutes

---

## Troubleshooting

### Issue: "npm error could not determine executable to run"

**Cause**: EAS CLI is not installed globally

**Solution**:
```bash
npm install -g eas-cli
# Then retry the build command
```

### Issue: "expo prebuild" generates android folder but build fails

**Cause**: Missing Android SDK or Java

**Solution**:
1. Install Android Studio
2. Set `ANDROID_HOME` environment variable
3. Install Java JDK 17

### Issue: Build succeeds but app still crashes

**Cause**: Old build still installed on device

**Solution**:
```bash
# Completely uninstall the old app from device
adb uninstall com.a1taxi.driverpro

# Then install the new build
adb install path/to/new-build.apk
```

### Issue: "Google Maps shows gray tiles"

**Cause**: API key restrictions in Google Cloud Console

**Solution**:
1. Go to Google Cloud Console
2. Navigate to "Credentials"
3. Click on your API key
4. Under "Application restrictions":
   - Select "Android apps"
   - Add package name: `com.a1taxi.driverpro`
   - Add SHA-1 certificate fingerprint (get from build logs)
5. Under "API restrictions":
   - Ensure "Maps SDK for Android" is enabled
6. Save changes

---

## Verification After Build

### Test 1: App Doesn't Crash
1. Install the newly built APK
2. Login as driver
3. Go online
4. Accept a ride notification
5. **Expected**: App shows map without crash ✅

### Test 2: Map Renders Correctly
1. After accepting ride
2. Current ride screen shows:
   - ✅ Map with driver location (blue dot)
   - ✅ Pickup marker
   - ✅ Route line to pickup
   - ✅ Customer details
   - ✅ Ride information

### Test 3: Map Interactions Work
1. Pinch to zoom in/out ✅
2. Pan around the map ✅
3. Tap markers to see info ✅
4. Map follows driver location ✅

---

## Quick Reference

| Build Type | Time | Requires | Best For |
|------------|------|----------|----------|
| Local (`expo run:android`) | 5-10 min | Android Studio | Fast iteration, debugging |
| EAS Development | 10-20 min | Internet, EAS CLI | Team testing, no local setup |
| EAS Production | 10-20 min | Internet, EAS CLI | Distribution, app stores |

---

## Recommended Approach for Your Situation

Since you're getting the EAS error, I recommend **Option 1 (Local Build)**:

```bash
# Quick commands (run in order):
npm install -g eas-cli
npx expo prebuild --platform android --clean
npx expo run:android
```

This will:
1. ✅ Generate Android project with Google Maps API key
2. ✅ Build and install on your connected device
3. ✅ Let you test immediately

The app will work without crashes after this rebuild! 🎉

---

## Alternative: If You Don't Have Android Studio

If you can't run local builds and EAS isn't working, you can:

1. **Install EAS CLI properly**:
```bash
npm install -g eas-cli@latest
eas --version  # Verify it works
eas login      # Login to Expo
```

2. **Then build**:
```bash
eas build --platform android --profile development
```

3. **Download the APK** from the build link and install manually

---

## Summary

The configuration is **already fixed** in the code. You just need to rebuild the native Android app using one of the methods above. After rebuilding, the Google Maps crash will be completely resolved.

**Files Modified** ✅:
- `app.config.js`
- `app.json`
- `GOOGLE_MAPS_CRASH_FIX.md`

**Next Step**: Choose a build option and rebuild the app!
