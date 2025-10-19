# Fare Configuration and GPS Tracking Fixes

## Issues Fixed

### 1. ✅ Airport Fare Configuration Error for Sedan Vehicle

**Problem:**
- Airport bookings failed with "Airport fare configuration not found for sedan vehicle"
- The configuration existed in the database but wasn't accessible
- Root cause: **Row Level Security (RLS) was blocking access**
  - Driver app uses custom authentication (not Supabase Auth)
  - `auth.uid()` returns NULL for custom auth
  - RLS policies require authenticated Supabase users
  - Direct table queries were blocked by RLS

**Solution:**
Created RPC functions that bypass RLS using `SECURITY DEFINER`:

1. **New RPC Functions** (in migration `add_fare_config_rpc_functions.sql`):
   - `get_airport_fare(p_vehicle_type)` - Fetch airport fares
   - `get_rental_fare(p_vehicle_type, p_duration_hours)` - Fetch rental fares
   - `get_outstation_fare(p_vehicle_type)` - Fetch outstation fares

2. **Updated scheduled.tsx** to use RPC functions instead of direct table queries:
   - Line ~966: Rental fare now uses `supabase.rpc('get_rental_fare', {...})`
   - Line ~1305: Airport fare now uses `supabase.rpc('get_airport_fare', {...})`
   - Line ~1192: Outstation fare now uses `supabase.rpc('get_outstation_fare', {...})`

**Why This Works:**
- RPC functions run with `SECURITY DEFINER` privilege
- They bypass RLS policies
- Still maintain security by validating `is_active = true`
- Allow custom authentication to access fare configurations

### 2. ✅ Real-Time Distance and Duration Tracking

**Problem:**
- Duration was calculated from `scheduled_time` to completion
- This didn't reflect actual driving time
- Needed to use GPS-tracked duration from when trip started to when it ended

**Already Working:**
- ✅ Distance calculation already uses real-time GPS tracking
- ✅ Falls back to Google Maps Directions API if GPS insufficient
- ✅ Falls back to straight-line × 1.3 if both fail

**Fix Applied:**
Updated duration calculation to use GPS-tracked duration:

1. **Primary Method:** GPS-tracked duration from `TripLocationTracker.calculateTripDuration()`
   - Uses actual trip start time (when status='in_progress')
   - Uses actual trip end time (when completed)
   - Returns real driving duration in minutes

2. **Fallback Method:** Time-based calculation
   - Only used if GPS tracking failed
   - Calculates from scheduled_time to completion
   - Logged as fallback with warning

**Code Changes in scheduled.tsx:**
- Line ~356-378: Primary GPS distance calculation now includes GPS duration
- Line ~463-483: Fallback methods (Google Maps, straight-line) now use GPS duration

**How It Works:**
```
Primary Flow:
1. Get GPS distance → calculateTripDistance()
2. Get GPS duration → calculateTripDuration()
3. Use real GPS-tracked metrics ✅

Fallback Flow (if GPS insufficient):
1. Get Google Maps distance
2. Get GPS duration (still try GPS duration)
3. If GPS duration fails, calculate from scheduled_time
```

## Files Modified

### 1. Database Migration
**File:** `supabase/migrations/add_fare_config_rpc_functions.sql` (NEW)
- Added `get_airport_fare()` RPC function
- Added `get_rental_fare()` RPC function
- Added `get_outstation_fare()` RPC function
- All use `SECURITY DEFINER` to bypass RLS

### 2. Scheduled Bookings Screen
**File:** `app/(tabs)/scheduled.tsx`
- Updated `calculateRentalFare()` to use RPC instead of direct query
- Updated `calculateAirportFare()` to use RPC instead of direct query
- Updated `calculateOutstationFare()` to use RPC instead of direct query
- Added GPS duration calculation in trip completion
- Added fallback duration calculation if GPS unavailable

## Testing Checklist

### Airport Fare Configuration:
- [ ] Complete an airport booking with sedan vehicle
- [ ] Complete an airport booking with other vehicle types
- [ ] Verify fare is calculated correctly
- [ ] Check console logs show "✅ Airport config loaded"

### Rental Fare Configuration:
- [ ] Complete a rental booking with various hour packages (2hr, 4hr, 8hr, etc.)
- [ ] Verify fare is calculated correctly
- [ ] Check console logs show "✅ Rental package details"

### GPS Distance Tracking:
- [ ] Start a scheduled trip and drive
- [ ] Complete the trip
- [ ] Check logs show: "✅ GPS-tracked distance for scheduled trip"
- [ ] Verify distance matches actual driving distance (not straight-line)

### GPS Duration Tracking:
- [ ] Start a scheduled trip (note the start time)
- [ ] Drive for a known duration (e.g., 30 minutes)
- [ ] Complete the trip
- [ ] Check logs show: "✅ Using GPS-tracked duration"
- [ ] Verify duration matches actual driving time (not scheduled_time to completion)

### Fallback Scenarios:
- [ ] If GPS fails, verify logs show: "⚠️ GPS distance calculation failed, using Google Maps API fallback"
- [ ] If Google Maps fails, verify logs show: "⚠️ Using straight-line distance"
- [ ] If GPS duration fails, verify logs show: "⚠️ Using time-based duration (fallback)"

## Technical Details

### RPC Function Security
All RPC functions use `SECURITY DEFINER` which means:
- They run with the privileges of the function owner (postgres/service role)
- They bypass Row Level Security (RLS)
- They still validate `is_active = true` for security
- They only return read-only data (no modifications)

### GPS Tracking Flow
```
Trip Start (in_progress):
  → TripLocationTracker.startTripTracking()
  → Records GPS breadcrumbs to trip_location_history table

During Trip:
  → Background location tracking continues
  → GPS points saved every few seconds

Trip Complete:
  → TripLocationTracker.stopTripTracking()
  → TripLocationTracker.calculateTripDistance() → Real distance
  → TripLocationTracker.calculateTripDuration() → Real duration
  → Use for fare calculation
```

### Distance Calculation Priority
1. **GPS-tracked distance** (most accurate) ✅
2. **Google Maps Directions API** (if GPS < 1km or < 3 points)
3. **Straight-line × 1.3** (last resort fallback)

### Duration Calculation Priority
1. **GPS-tracked duration** (first to last GPS point) ✅
2. **Time-based** (scheduled_time to completion) - fallback

### Outstation Special Handling
- GPS tracks one-way journey
- Distance is **automatically doubled** for round trip
- Applies to both GPS and fallback methods
- Duration is NOT doubled (actual driving time)

## Notes

- **GPS tracking must be started** when trip status changes to 'in_progress'
- **Background location permissions** must be granted by driver
- **TripLocationTracker service** handles all GPS logic
- **Fare calculations** now use accurate real-time metrics
- **RLS bypass** only applies to read-only fare configuration queries
