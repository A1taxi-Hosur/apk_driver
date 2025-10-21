# GPS Tracking Across All Booking Types

## Summary

**YES**, GPS tracking is implemented for **ALL FOUR** booking types:
1. ✅ Regular rides
2. ✅ Airport transfers
3. ✅ Rental packages
4. ✅ Outstation trips

## Implementation Details

### 1. Regular Rides ✅

**Location:** `/contexts/RideContext.tsx`

**Start Tracking:**
```typescript
// Line 518 - When pickup OTP is verified
await TripLocationTracker.startTripTracking(rideId, 'regular', driver.id)
```

**Stop Tracking & Calculate:**
```typescript
// Line 684 - On trip completion
await TripLocationTracker.stopTripTracking(rideId)

// Line 693 - Calculate GPS distance
const gpsDistance = await TripLocationTracker.calculateTripDistance(rideId, 'regular')
actualDistanceKm = gpsDistance.distanceKm

// Line 710 - Calculate GPS duration
const gpsDuration = await TripLocationTracker.calculateTripDuration(rideId, 'regular')
actualDurationMinutes = gpsDuration.durationMinutes
```

**Fare Calculation:**
```typescript
// Line 886 - Uses GPS-tracked distance
const fareResult = await FareCalculationService.calculateAndStoreTripFare(
  rideId,
  actualDistanceKm,        // GPS distance
  actualDurationMinutes,   // GPS duration
  ...
)
```

---

### 2. Scheduled Bookings (Airport, Rental, Outstation) ✅

**Location:** `/app/(tabs)/scheduled.tsx`

**Start Tracking:**
```typescript
// Line 293-299 - When trip starts (OTP verified)
console.log('🚀 Starting GPS tracking for scheduled trip...');
const trackingStarted = await TripLocationTracker.startTripTracking(
  currentBooking.id,
  'scheduled',    // Trip type for scheduled bookings
  driver.id
);
```

**Stop Tracking & Calculate:**
```typescript
// Line 323 - On trip completion
await TripLocationTracker.stopTripTracking(currentBooking.id)

// Line 331-336 - Calculate GPS distance
const gpsDistance = await TripLocationTracker.calculateTripDistance(
  currentBooking.id,
  'scheduled'
);
const gpsDistanceRaw = gpsDistance.distanceKm;
gpsPointsUsed = gpsDistance.pointsUsed;

// Line 360-365 - Calculate GPS duration
const gpsDuration = await TripLocationTracker.calculateTripDuration(
  currentBooking.id,
  'scheduled'
);
actualDurationMinutes = gpsDuration.durationMinutes || 1;
```

**Special Handling for Outstation:**
```typescript
// Line 344-357 - Outstation trips double the GPS distance (round trip)
if (currentBooking.booking_type === 'outstation') {
  actualDistanceKm = gpsDistanceRaw * 2;  // GPS tracks one-way, multiply by 2
  console.log('✅ GPS-tracked distance for outstation (doubled):', {
    oneWayDistance: gpsDistanceRaw.toFixed(2),
    roundTripDistance: actualDistanceKm.toFixed(2),
    note: 'GPS distance × 2 for round trip'
  });
} else {
  actualDistanceKm = gpsDistanceRaw;  // Rental/Airport use actual GPS distance
  console.log('✅ GPS-tracked distance for rental/airport:', {
    distanceKm: actualDistanceKm.toFixed(2),
    note: 'GPS distance (not doubled)'
  });
}
```

**Fare Calculation by Type:**
```typescript
// Line 571-599 - Calculate fare using GPS distance
if (currentBooking.booking_type === 'rental') {
  fareBreakdown = await calculateRentalFare(
    currentBooking.vehicle_type,
    actualDistanceKm,        // GPS distance
    actualDurationMinutes,   // GPS duration
    ...
  );
} else if (currentBooking.booking_type === 'outstation') {
  fareBreakdown = await calculateOutstationFare(
    currentBooking.vehicle_type,
    actualDistanceKm,        // GPS distance (doubled for round trip)
    actualDurationMinutes,   // GPS duration
    ...
  );
} else if (currentBooking.booking_type === 'airport') {
  fareBreakdown = await calculateAirportFare(
    currentBooking.vehicle_type,
    pickupLat,
    pickupLng,
    dropLat,
    dropLng,
    actualDistanceKm,        // GPS distance
    actualDurationMinutes    // GPS duration
  );
}
```

---

## GPS Data Storage

All GPS data is stored in the same table regardless of booking type:

```sql
trip_location_history
├─ ride_id (for regular rides)
├─ scheduled_booking_id (for airport/rental/outstation)
├─ driver_id
├─ latitude
├─ longitude
├─ accuracy
├─ speed
├─ heading
├─ altitude
├─ recorded_at
└─ created_at
```

**Note:** The table has a constraint ensuring either `ride_id` OR `scheduled_booking_id` is set (not both):
```sql
CONSTRAINT trip_location_check CHECK (
  (ride_id IS NOT NULL AND scheduled_booking_id IS NULL) OR
  (ride_id IS NULL AND scheduled_booking_id IS NOT NULL)
)
```

---

## GPS Tracking Service

**File:** `/services/TripLocationTracker.ts`

### Core Functions

1. **`startTripTracking(tripId, tripType, driverId)`**
   - Starts background GPS tracking
   - Records GPS points every 3 seconds
   - Works for both 'regular' and 'scheduled' trip types

2. **`stopTripTracking(tripId)`**
   - Stops background GPS tracking
   - Logs total GPS points collected

3. **`calculateTripDistance(tripId, tripType)`**
   - Calculates distance by summing distances between GPS breadcrumbs
   - Uses Haversine formula for accuracy
   - Filters out low-accuracy points (> 100m accuracy)
   - Returns: `{ distanceKm, pointsUsed }`

4. **`calculateTripDuration(tripId, tripType)`**
   - Calculates duration from first to last GPS timestamp
   - Returns: `{ durationMinutes, pointsUsed }`

---

## How Each Booking Type Uses GPS

### Regular Rides
- **Start:** When pickup OTP verified
- **Stop:** When driver clicks "Complete Trip"
- **Distance:** Direct GPS-tracked distance
- **Fare:** Base fare + GPS distance × rate + deadhead (if applicable)

### Rental
- **Start:** When pickup OTP verified
- **Stop:** When driver clicks "Complete Trip"
- **Distance:** Direct GPS-tracked distance
- **Fare:** Package fare + extra km (if GPS distance exceeds package km)
- **Note:** Return distance to Hosur Bus Stand is added to GPS distance

### Outstation
- **Start:** When pickup OTP verified
- **Stop:** When driver clicks "Complete Trip"
- **Distance:** GPS-tracked distance **× 2** (for round trip)
- **Fare:**
  - If < 300km: Slab pricing based on GPS distance
  - If ≥ 300km: Per-km pricing + driver allowance
- **Note:** GPS tracks one-way, system doubles it for round trip calculation

### Airport
- **Start:** When pickup OTP verified
- **Stop:** When driver clicks "Complete Trip"
- **Distance:** Direct GPS-tracked distance
- **Fare:** Fixed package fare (Hosur→Airport or Airport→Hosur)
- **Note:** GPS distance is stored but fare is based on package, not distance

---

## Fallback Mechanisms

If GPS tracking fails (< 2 points or 0 distance), the system falls back to:

1. **Google Maps Directions API** (preferred fallback)
   - Gets actual route distance
   - More accurate than straight-line

2. **Straight-line distance × 1.3** (last resort)
   - Haversine formula for straight-line distance
   - Multiply by 1.3 to account for roads

3. **Minimal distance: 0.1 km** (extreme edge case)
   - Only if everything fails
   - Prevents zero-distance errors

---

## Key Differences

| Booking Type | GPS Start | GPS Tracking | Distance Calculation | Fare Logic |
|-------------|-----------|--------------|---------------------|------------|
| **Regular** | OTP verified | Real-time | Direct GPS distance | Base + Distance + Deadhead |
| **Rental** | OTP verified | Real-time | GPS + Return distance | Package + Extra KM |
| **Outstation** | OTP verified | Real-time | GPS × 2 (round trip) | Slab or Per-KM + Allowance |
| **Airport** | OTP verified | Real-time | Direct GPS distance | Fixed Package Fare |

---

## Testing GPS Tracking

### Check GPS Points in Database:
```sql
-- For regular rides
SELECT COUNT(*), MIN(recorded_at), MAX(recorded_at)
FROM trip_location_history
WHERE ride_id = 'YOUR_RIDE_ID';

-- For scheduled bookings (airport, rental, outstation)
SELECT COUNT(*), MIN(recorded_at), MAX(recorded_at)
FROM trip_location_history
WHERE scheduled_booking_id = 'YOUR_BOOKING_ID';
```

### Check Calculated Distance:
```sql
-- View trip completion with GPS distance
SELECT
  booking_type,
  actual_distance_km,
  actual_duration_minutes,
  total_fare,
  fare_details
FROM trip_completions
WHERE ride_id = 'YOUR_RIDE_ID'
   OR scheduled_booking_id = 'YOUR_BOOKING_ID';
```

---

## Summary

✅ **GPS tracking works for ALL booking types**
✅ **GPS distance is used for fare calculation in ALL cases**
✅ **Special logic for outstation (doubles GPS distance)**
✅ **Airport uses GPS for records but fare is package-based**
✅ **Fallback mechanisms ensure trip completion even if GPS fails**

The system is fully GPS-enabled across all ride types!
