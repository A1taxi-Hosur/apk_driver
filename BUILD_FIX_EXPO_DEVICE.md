# Build Fix: Missing expo-device Package + Version Compatibility

## Error 1: Module Not Found

```
Error: Unable to resolve module expo-device from /home/expo/workingdir/build/services/PushNotificationService.ts
```

**Root Cause:** The `PushNotificationService.ts` file imports `expo-device` package, but it wasn't installed.

## Error 2: Gradle Plugin Not Found (After Initial Fix Attempt)

```
Plugin [id: 'expo-module-gradle-plugin'] was not found
Could not get unknown property 'release' for SoftwareComponent container
```

**Root Cause:** Initially installed wrong version of `expo-device` (8.0.9) which is incompatible with Expo SDK 51.

## Correct Fix Applied

Used Expo's package manager to install SDK-compatible version:

```bash
# Wrong way (installs incompatible version):
npm install expo-device  ❌

# Correct way (installs SDK 51 compatible version):
npx expo install expo-device  ✅
```

## Updated package.json

Correct version for Expo SDK 51:
```json
"expo-device": "~6.0.2"
```

**Important:** Always use `npx expo install <package>` instead of `npm install` for Expo packages!

## Why This Package Is Needed

`expo-device` is used in `PushNotificationService.ts` to check if the app is running on a physical device:

```typescript
// Check if physical device
if (!Device.isDevice) {
  console.warn('⚠️ Push notifications only work on physical devices');
  return null;
}
```

**Why this check is important:**
- Push notifications only work on physical devices
- Emulators don't have proper FCM (Firebase Cloud Messaging) setup
- Prevents errors when trying to get push tokens on emulators

## Build Status

✅ Correct version installed (`expo-device: ~6.0.2`)
✅ package.json updated with SDK-compatible version
✅ Gradle compatibility issues resolved
✅ Ready to rebuild APK

## Next Steps

Rebuild the APK:

```bash
eas build --platform android --profile preview
```

Or for local development:

```bash
expo run:android
```

## Key Lesson: Expo Package Version Compatibility

**Always use `npx expo install` for Expo packages!**

This ensures:
- Correct version for your Expo SDK
- No Gradle/native module conflicts
- Proper dependency resolution

Example:
```bash
# For any Expo package:
npx expo install expo-device
npx expo install expo-notifications
npx expo install expo-location
# etc.
```

## Related Files

- `services/PushNotificationService.ts` - Uses expo-device
- `package.json` - Now includes correct expo-device dependency (`~6.0.2`)

## Summary

**Problem 1:** Build failed due to missing `expo-device` package

**Problem 2:** Build failed due to wrong `expo-device` version (8.0.9 incompatible with SDK 51)

**Solution:** Used `npx expo install expo-device` to install SDK-compatible version (`6.0.2`)

**Result:** Build should now succeed ✅

## Version Compatibility Reference

| Expo SDK | expo-device Version |
|----------|-------------------|
| SDK 51   | ~6.0.2 ✅        |
| SDK 52+  | ~8.0.9           |

Always check Expo documentation or use `npx expo install` for automatic version selection.
