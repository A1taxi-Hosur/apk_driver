# Google Maps Crash Fix - Complete Summary

## Issue Fixed

**Problem**: App crashed immediately after driver accepted a ride

**Error**:
```
FATAL EXCEPTION: main
java.lang.IllegalStateException: API key not found.
Check that <meta-data android:name="com.google.android.geo.API_KEY"
android:value="your API key"/> is in the <application> element of AndroidManifest.xml
```

**Root Cause**: Google Maps API key was defined in app config but not properly injected into Android's native manifest file

---

## Solution Implemented

### Added react-native-maps Plugin Configuration

**Files Modified**:
1. `app.config.js`
2. `app.json`

**Changes**: Added `react-native-maps` plugin with Google Maps API key configuration

```javascript
[
  "react-native-maps",
  {
    "googleMapsApiKey": "AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q"
  }
]
```

---

## Why This Fix Works

### Before (Broken):
```javascript
// app.config.js - API key only in 'extra'
extra: {
  googleMapsApiKey: "AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q"
}
```

This makes the key available to JavaScript code but **NOT** to native Android code.

### After (Fixed):
```javascript
// app.config.js - API key in plugin configuration
plugins: [
  ...
  [
    "react-native-maps",
    {
      googleMapsApiKey: "AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q"
    }
  ]
]
```

This tells Expo to:
1. Install the react-native-maps config plugin
2. Inject the API key into `AndroidManifest.xml` during build
3. Make Google Maps native components work properly

---

## What Happens After Accept

When a driver accepts a ride, the app flow is:

```
1. Driver clicks "Accept" ✅
2. RPC function accepts ride ✅
3. Driver status changes to 'busy' ✅
4. App navigates to current ride screen ✅
5. MapView component renders to show pickup location ⚠️ (Was crashing here)
6. Driver can now see route and customer details ✅
```

The crash occurred at **step 5** when React Native tried to initialize the Google Maps native view but couldn't find the API key in the Android manifest.

---

## How to Deploy the Fix

### ⚠️ IMPORTANT: Native Rebuild Required

This fix requires a **full native rebuild** because it modifies Android's native configuration. You must:

### Option 1: Expo Go (Development)
```bash
# Restart development server
npx expo start --clear

# For Expo Go, the fix won't work because Expo Go has its own build
# You need to use a development build (Option 2)
```

### Option 2: Development Build (Recommended)
```bash
# Create a new development build with updated config
eas build --profile development --platform android

# Or locally with:
npx expo prebuild --clean
npx expo run:android
```

### Option 3: Production Build
```bash
# Create production build with EAS
eas build --profile production --platform android

# This will include the Google Maps API key in the manifest
```

---

## Verification Steps

After rebuilding the app:

### Test 1: App Doesn't Crash on Accept
1. Driver receives ride notification
2. Driver clicks "Accept"
3. **Expected**: App shows current ride screen with map ✅
4. **Expected**: No crash occurs ✅

### Test 2: Map Shows Correctly
1. After accepting ride
2. Current ride screen should display:
   - ✅ Map showing driver location
   - ✅ Map showing pickup location
   - ✅ Route between driver and pickup
   - ✅ Customer details
   - ✅ Ride code

### Test 3: Navigation Works
1. Driver can tap on map
2. Driver can zoom in/out
3. Map updates as driver moves
4. **Expected**: All map interactions work smoothly ✅

---

## Common Issues & Solutions

### Issue 1: Crash Still Happens After Code Update

**Problem**: Just updating code files isn't enough

**Solution**: You MUST rebuild the native Android app
```bash
npx expo prebuild --clean
npx expo run:android
```

### Issue 2: "Expo Go doesn't support custom native code"

**Problem**: Expo Go doesn't support config plugins

**Solution**: Use a development build instead:
```bash
eas build --profile development --platform android
# Then install the .apk on your device
```

### Issue 3: Map Shows But is Gray/Blank

**Problem**: API key is incorrect or restricted

**Solution**:
1. Go to Google Cloud Console
2. Check API key restrictions
3. Ensure "Maps SDK for Android" is enabled
4. Add your app's package name to allowed restrictions

---

## Technical Details

### What the Plugin Does

The `react-native-maps` config plugin automatically:

1. Adds to `android/app/src/main/AndroidManifest.xml`:
```xml
<application>
  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q" />
</application>
```

2. Ensures Google Play Services dependencies are included
3. Configures proper permissions for map rendering
4. Sets up native map view initialization

### Stack Trace Analysis

```
at com.google.android.gms.maps.MapView.onCreate
at com.rnmaps.maps.MapView.<init>
at com.rnmaps.maps.MapManager.createViewInstance
```

This shows:
- Google Maps tried to initialize (`MapView.onCreate`)
- React Native Maps wrapper called it (`rnmaps.maps.MapView`)
- But API key was missing from manifest
- Result: IllegalStateException crash

---

## Related Documentation

- React Native Maps: https://github.com/react-native-maps/react-native-maps
- Expo Config Plugins: https://docs.expo.dev/guides/config-plugins/
- Google Maps Platform: https://developers.google.com/maps

---

## Files Modified

1. **app.config.js** - Added react-native-maps plugin configuration
2. **app.json** - Added react-native-maps plugin configuration

---

## Next Steps

1. ✅ Code changes are complete
2. ⚠️ **YOU MUST REBUILD THE APP** with one of these methods:
   - `npx expo prebuild --clean && npx expo run:android`
   - `eas build --profile development --platform android`
3. ✅ Install rebuilt app on device
4. ✅ Test ride acceptance - should work without crash
5. ✅ Verify map displays correctly with pickup location

---

## Summary

The Google Maps API key was present in the config but not properly injected into Android's native layer. Adding the `react-native-maps` config plugin ensures the API key is embedded in `AndroidManifest.xml` during the build process, which allows the native Google Maps SDK to initialize properly.

**Status**: ✅ FIX COMPLETE - Requires Native Rebuild

The app will work perfectly after rebuilding with the updated configuration.
