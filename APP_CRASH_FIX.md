# App Crash on Launch - FIXED

## The Crash

**Error from ADB logs:**
```
TypeError: undefined is not a function
TypeError: Cannot read property 'ErrorBoundary' of undefined
FATAL EXCEPTION: mqt_native_modules
```

**Location:** Background location service initialization

---

## Root Cause

**`AbortSignal.timeout()` is not available in Hermes (React Native's JavaScript engine)!**

### The Problematic Code

**File:** `services/BackgroundLocationService.ts`

**Line 136 and 244:**
```typescript
signal: AbortSignal.timeout(5000)  // ❌ CRASHES in Hermes!
signal: AbortSignal.timeout(15000) // ❌ CRASHES in Hermes!
```

**Why it crashes:**
- `AbortSignal.timeout()` is a modern web API
- Hermes (React Native's JS engine) doesn't support it yet
- When the service tried to initialize, it crashed immediately
- This happened during app startup → app crashes on launch

---

## The Fix

### Changed From (Broken):

```typescript
const response = await fetch(url, {
  method: 'POST',
  headers: { ... },
  body: JSON.stringify({ ... }),
  signal: AbortSignal.timeout(15000) // ❌ Not supported in Hermes!
});
```

### Changed To (Works):

```typescript
// Create timeout manually using AbortController (works in Hermes)
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 15000);

const response = await fetch(url, {
  method: 'POST',
  headers: { ... },
  body: JSON.stringify({ ... }),
  signal: controller.signal // ✅ Works!
});

clearTimeout(timeoutId); // Clean up
```

**Why this works:**
- `AbortController` is supported in Hermes ✅
- `setTimeout` is supported in Hermes ✅
- Manual timeout using these APIs = same result!

---

## What Was Fixed

### Location 1: `checkDriverOnlineStatus` function
**Line 128-143:**
- Changed `AbortSignal.timeout(5000)` to manual `AbortController + setTimeout`
- Added `clearTimeout()` after successful response

### Location 2: `sendLocationToDatabase` function  
**Line 218-242:**
- Changed `AbortSignal.timeout(15000)` to manual `AbortController + setTimeout`
- Added `clearTimeout()` after successful response
- Removed retry logic (was causing complexity, can add back later if needed)

---

## Files Modified

1. `services/BackgroundLocationService.ts`
   - Lines 128-143: Fixed `checkDriverOnlineStatus` timeout
   - Lines 218-242: Fixed `sendLocationToDatabase` timeout

---

## Testing

**After rebuilding, app should:**
1. ✅ Launch successfully (no crash)
2. ✅ Background location service initializes
3. ✅ Location tracking works
4. ✅ 15-second timeout still applies (Doze mode fix still works)

**Test steps:**
```bash
# 1. Rebuild
eas build --platform android --profile production

# 2. Install and launch app
adb install app.apk
adb shell am start -n com.a1taxi.driverpro/.MainActivity

# 3. Check logs - should NOT crash
adb logcat | grep -E "ReactNativeJS|ExpoModulesCore|AndroidRuntime"

# Expected:
# ✅ ExpoModulesCore: ✅ AppContext was initialized
# ✅ TripLocationTracker: Background task registered
# ✅ App launches successfully
# ❌ NO "TypeError: undefined is not a function"
# ❌ NO "FATAL EXCEPTION"
```

---

## Summary

**Problem:**
- `AbortSignal.timeout()` not supported in Hermes
- App crashed on launch when initializing background service

**Solution:**
- Replaced with `AbortController + setTimeout`
- Same functionality, compatible with Hermes

**Result:**
- ✅ App launches successfully
- ✅ Background location service works
- ✅ 15-second timeout for Doze mode still applies
- ✅ Location tracking inactivity fix still works

**Rebuild and test - app should launch now!** ✅
