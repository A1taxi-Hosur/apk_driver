# Outstation One-Way Trip Fare Calculation Fix

## Issue

Previously, outstation one-way trips were calculated using:
- **Old formula**: `GPS distance × per_km_rate × 2`
- **Problem**: Did not use slab system, only multiplied rate

## Requirement

Outstation one-way trips should:
1. Take GPS-tracked distance and **multiply by 2** for billing distance
2. Find the appropriate **slab** based on that doubled distance
3. Apply slab fare + extra km charges (if any)
4. **Round trips remain unchanged** (no doubling)

## Solution Implemented

Updated `FareCalculationService.ts` → `calculateOutstationFare()` function.

### New One-Way Logic

```typescript
// For one-way trips, double the GPS distance for billing
const billingDistance = actualDistanceKm * 2;

// Example: 50km GPS distance = 100km billing distance
// Then find slab that covers 100km (50km slab covers up to 100km)
```

### Fare Calculation Flow

**Example: 50km GPS-tracked one-way trip**

1. **GPS Distance**: 50km (actual travel)
2. **Billing Distance**: 50km × 2 = **100km**
3. **Slab Selection**: Find slab that covers 100km → **50km slab** (covers up to 100km)
4. **Slab Fare**: Use the fare from 50km slab
5. **Extra KM**: If billing distance > slab max, charge extra km rate
6. **Total Fare**: Slab fare + extra km charges + platform fee + GST

### Code Changes

**Location**: `services/FareCalculationService.ts` (lines 1514-1710)

**Key Changes**:
1. Added `billingDistance = actualDistanceKm * 2` for one-way trips
2. Query `outstation_packages` table for slab system (same as round trip)
3. Find appropriate slab based on `billingDistance` instead of `actualDistanceKm`
4. Calculate fare using slab system
5. Include fallback to per-km rate if no slab package exists

### Slab System

Slabs are defined as:
```typescript
{ distance: 10, maxRoundTripKm: 20, fare: slab_10km }
{ distance: 20, maxRoundTripKm: 40, fare: slab_20km }
{ distance: 30, maxRoundTripKm: 60, fare: slab_30km }
{ distance: 40, maxRoundTripKm: 80, fare: slab_40km }
{ distance: 50, maxRoundTripKm: 100, fare: slab_50km }
// ... up to 150km slab
```

**For one-way trips**:
- The `maxRoundTripKm` value is compared against `billingDistance` (GPS × 2)
- Example: 45km GPS → 90km billing → selects 50km slab (covers up to 100km)

**For round trips**:
- The `maxRoundTripKm` value is compared against actual GPS distance
- Example: 90km GPS round trip → selects 50km slab (covers up to 100km)

## Examples

### Example 1: 45km One-Way Trip

**Input**:
- GPS Distance: 45km
- Trip Type: one_way
- Vehicle Type: sedan

**Calculation**:
```
Billing Distance = 45km × 2 = 90km
Selected Slab = 50km slab (covers up to 100km)
Slab Fare = ₹3,500 (example)
Extra KM = max(0, 90 - 100) = 0km
Extra KM Charges = 0

Charges Subtotal = ₹3,500
Platform Fee = ₹100
GST on Charges (5%) = ₹175
GST on Platform Fee (18%) = ₹18
Total Fare = ₹3,793
```

### Example 2: 55km One-Way Trip

**Input**:
- GPS Distance: 55km
- Trip Type: one_way
- Vehicle Type: sedan

**Calculation**:
```
Billing Distance = 55km × 2 = 110km
Selected Slab = 60km slab (covers up to 120km)
Slab Fare = ₹4,200 (example)
Extra KM = max(0, 110 - 120) = 0km
Extra KM Charges = 0

Charges Subtotal = ₹4,200
Platform Fee = ₹100
GST on Charges (5%) = ₹210
GST on Platform Fee (18%) = ₹18
Total Fare = ₹4,528
```

### Example 3: 65km One-Way Trip (Exceeds Slab)

**Input**:
- GPS Distance: 65km
- Trip Type: one_way
- Vehicle Type: sedan

**Calculation**:
```
Billing Distance = 65km × 2 = 130km
Selected Slab = 60km slab (covers up to 120km)
Slab Fare = ₹4,200 (example)
Extra KM = max(0, 130 - 120) = 10km
Extra KM Rate = ₹15/km (example)
Extra KM Charges = 10km × ₹15 = ₹150

Charges Subtotal = ₹4,200 + ₹150 = ₹4,350
Platform Fee = ₹100
GST on Charges (5%) = ₹217.50
GST on Platform Fee (18%) = ₹18
Total Fare = ₹4,685.50 → ₹4,686 (rounded)
```

### Example 4: 90km Round Trip (NO CHANGE)

**Input**:
- GPS Distance: 90km (total round trip)
- Trip Type: round_trip
- Vehicle Type: sedan

**Calculation**:
```
NO DOUBLING for round trips!
Billing Distance = 90km (same as GPS)
Selected Slab = 50km slab (covers up to 100km round trip)
Slab Fare = ₹3,500 (example)
Extra KM = max(0, 90 - 100) = 0km

Total calculation same as before (no changes to round trip logic)
```

## Fare Breakdown Display

The trip completion modal will show:

**One-Way Trip**:
```
Package: 50km Slab (covers up to 100km)
Slab Fare: ₹3,500
Extra KM Charges: ₹150 (10km × ₹15/km)
Platform Fee: ₹100
GST on Charges (5%): ₹217.50
GST on Platform Fee (18%): ₹18
─────────────────────────────
Total Fare: ₹4,686

Trip Details:
- GPS Distance: 65km (one-way)
- Billing Distance: 130km
- Pricing Method: SLAB
```

## Fallback Mechanism

If slab packages are not configured, the system falls back to per-km pricing:

```typescript
// Fallback calculation
const billingDistance = actualDistanceKm * 2;
const kmFare = billingDistance * perKmRate;
const totalFare = baseFare + kmFare + platformFee + GST;
```

This ensures the system continues working even without slab configuration.

## Database Tables Used

1. **`outstation_packages`** - Contains slab definitions (primary method)
   - `slab_10km`, `slab_20km`, ..., `slab_150km`
   - `extra_km_rate` for charges beyond slab limit
   - `use_slab_system` flag

2. **`outstation_fares`** - Contains per-km rates (fallback method)
   - `base_fare`
   - `per_km_rate`

3. **`fare_matrix`** - Contains platform fee configuration
   - `platform_fee` for outstation bookings

## Testing

### Test Case 1: One-Way with Slab
```
1. Create outstation one-way ride (45km)
2. Complete ride
3. Verify billing distance = 90km
4. Verify 50km slab selected
5. Verify fare matches slab fare
```

### Test Case 2: One-Way Exceeding Slab
```
1. Create outstation one-way ride (65km)
2. Complete ride
3. Verify billing distance = 130km
4. Verify 60km slab selected (covers 120km)
5. Verify extra 10km charged
6. Verify total = slab fare + extra km charges + fees
```

### Test Case 3: Round Trip (No Change)
```
1. Create outstation round trip (90km total)
2. Complete ride
3. Verify NO doubling (billing distance = 90km)
4. Verify 50km slab selected
5. Verify fare calculation unchanged from before
```

### Test Case 4: One-Way Fallback (No Slabs)
```
1. Disable slab packages in database
2. Create outstation one-way ride (50km)
3. Complete ride
4. Verify fallback to per-km calculation
5. Verify billing distance = 100km
6. Verify fare = base + (100km × rate) + fees
```

## Console Logs

The system outputs detailed logs for debugging:

```
🛣️ ONE-WAY TRIP CALCULATION
📏 One-way distance calculation: {
  actualGpsDistance: 45,
  billingDistance: 90,
  calculation: "45 km (GPS) × 2 = 90 km (billing)"
}
🔍 Slab selection for one-way billing distance: 90 km
✅ Selected slab: {
  slabName: "50km slab",
  coversUpTo: "100km",
  actualGpsDistance: 45,
  billingDistance: 90,
  slabFare: 3500
}
💰 ONE-WAY SLAB CALCULATION: {
  selectedSlab: "50km slab (covers up to 100km)",
  actualGpsDistance: 45,
  billingDistance: 90,
  slabFare: 3500,
  extraKm: 0,
  extraKmCharges: 0,
  platformFee: 100,
  totalFare: 3793,
  note: "One-way trip: GPS distance × 2 for billing, then apply slab"
}
```

## Summary of Changes

### ✅ What Changed:
- One-way trips now double GPS distance for billing
- One-way trips now use slab system (same slabs as round trips)
- Extra km charges calculated if billing distance exceeds slab limit
- Fallback mechanism for systems without slab configuration

### ❌ What Didn't Change:
- Round trip calculation (completely unchanged)
- Slab structure and definitions
- GST calculation logic
- Platform fee calculation
- Database schema

### 📊 Impact:
- **Consistent pricing**: One-way and round trips now use same slab system
- **Fair charging**: Accounts for return journey in one-way trips
- **Transparent**: Billing distance clearly shown in fare breakdown
- **Backward compatible**: Falls back to per-km if slabs not configured

## Related Files

- `services/FareCalculationService.ts` - Updated fare calculation logic
- `components/TripCompletionModal.tsx` - Displays fare breakdown
- `components/CustomerTripCompletionModal.tsx` - Customer view of fare
