# Build Fix: Missing expo-device Package

## Error Encountered

```
Error: Unable to resolve module expo-device from /home/expo/workingdir/build/services/PushNotificationService.ts
```

## Root Cause

The `PushNotificationService.ts` file imports `expo-device` package, but it wasn't installed in `package.json`.

```typescript
import * as Device from 'expo-device';
```

## Fix Applied

Installed the missing package:

```bash
npm install expo-device
```

## Updated package.json

Added to dependencies:
```json
"expo-device": "^8.0.9"
```

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

✅ Package installed
✅ package.json updated
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

## Related Files

- `services/PushNotificationService.ts` - Uses expo-device
- `package.json` - Now includes expo-device dependency

## Summary

**Problem:** Build failed due to missing `expo-device` package

**Solution:** Installed `expo-device` via npm

**Result:** Build should now succeed ✅
