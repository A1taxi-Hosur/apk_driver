# 🔍 How to Check Debug Logs After Completing a Ride

After completing a ride on your phone, you can check the debug logs from your computer using the Supabase SQL Editor.

## **Option 1: View All Logs (Latest First)**

Go to your Supabase SQL Editor and run:

```sql
SELECT
  created_at,
  log_type,
  message,
  data
FROM debug_logs
ORDER BY created_at DESC
LIMIT 20;
```

## **Option 2: View Logs for Specific Ride**

Replace `YOUR_RIDE_ID` with the actual ride ID:

```sql
SELECT
  created_at,
  log_type,
  message,
  data
FROM debug_logs
WHERE ride_id = 'YOUR_RIDE_ID'
ORDER BY created_at ASC;
```

## **Option 3: View Only Distance-Related Logs**

```sql
SELECT
  created_at,
  log_type,
  message,
  data->>'actualDistanceKm' as distance_km,
  data->>'gpsPointsUsed' as gps_points,
  data->>'decision' as decision
FROM debug_logs
WHERE log_type IN ('gps_calculation', 'distance_decision', 'before_fare_calculation')
ORDER BY created_at DESC
LIMIT 10;
```

## **What You'll See:**

### 1. **gps_calculation** - GPS Distance Calculated
```json
{
  "actualDistanceKm": 0.456,
  "actualDurationMinutes": 2,
  "gpsPointsUsed": 37,
  "condition_check": true
}
```
✅ This shows what GPS calculated.

### 2. **distance_decision** - GPS Success or Fallback
```json
{
  "actualDistanceKm": 0.456,
  "gpsPointsUsed": 37,
  "decision": "GPS_SUCCESS"
}
```
OR
```json
{
  "actualDistanceKm": 16.16,
  "gpsPointsUsed": 2,
  "decision": "FALLBACK_TO_GOOGLE_MAPS"
}
```
✅ This shows which method was chosen.

### 3. **before_fare_calculation** - Values Sent to Fare Service
```json
{
  "actualDistanceKm": 0.456,
  "actualDurationMinutes": 2,
  "gpsPointsUsed": 37
}
```
✅ This shows what was sent to fare calculation.

### 4. **completion_data** - Final Modal Data
```json
{
  "distance": 0.456,
  "duration": 2,
  "fareBreakdown_details": {
    "actual_distance_km": 0.456,
    "actual_duration_minutes": 2
  },
  "total_fare": 145
}
```
✅ This shows what the modal should display.

---

## **🎯 How to Use:**

1. **Complete a ride** on your phone
2. **Open Supabase Dashboard** → SQL Editor
3. **Run Option 1** query to see all recent logs
4. **Check the values** in each log entry
5. **Share the results** if you see mismatched values

---

## **Expected Flow (Normal):**

1. `gps_calculation`: `actualDistanceKm: 0.456`, `gpsPointsUsed: 37`
2. `distance_decision`: `decision: "GPS_SUCCESS"`, `actualDistanceKm: 0.456`
3. `before_fare_calculation`: `actualDistanceKm: 0.456`
4. `completion_data`: `distance: 0.456`, `fareBreakdown_details.actual_distance_km: 0.456`

---

## **Bug Scenario (If Broken):**

1. `gps_calculation`: `actualDistanceKm: 0.456` ✅
2. `distance_decision`: `decision: "GPS_SUCCESS"`, `actualDistanceKm: 0.456` ✅
3. `before_fare_calculation`: `actualDistanceKm: 16.16` ❌ **CHANGED!**
4. `completion_data`: `distance: 16.16` ❌ **WRONG VALUE!**

This would show exactly where the value changes!
