# 🔍 Check GPS Tracking Status

## **Problem: GPS stops at 34 points**

This means Android is killing the background task for battery optimization.

## **Query 1: Check GPS Points During Active Ride**

Find your active ride ID, then run:

```sql
SELECT
  COUNT(*) as total_points,
  MIN(recorded_at) as first_point,
  MAX(recorded_at) as last_point,
  EXTRACT(EPOCH FROM (MAX(recorded_at) - MIN(recorded_at))) / 60 as duration_minutes,
  COUNT(*) / NULLIF(EXTRACT(EPOCH FROM (MAX(recorded_at) - MIN(recorded_at))) / 60, 0) as points_per_minute
FROM trip_location_history
WHERE ride_id = 'YOUR_RIDE_ID';
```

Expected:
- `points_per_minute` should be ~20 (one every 3 seconds)
- If it's much lower, GPS is stopping/pausing

## **Query 2: Check Time Gaps Between GPS Points**

```sql
WITH time_gaps AS (
  SELECT
    recorded_at,
    recorded_at - LAG(recorded_at) OVER (ORDER BY recorded_at) as gap
  FROM trip_location_history
  WHERE ride_id = 'YOUR_RIDE_ID'
  ORDER BY recorded_at
)
SELECT
  recorded_at,
  EXTRACT(EPOCH FROM gap) as gap_seconds
FROM time_gaps
WHERE gap IS NOT NULL
ORDER BY gap_seconds DESC
LIMIT 10;
```

This shows the largest gaps. If you see gaps > 30 seconds, GPS tracking stopped.

## **Query 3: Check if GPS Stopped at 34 Points**

```sql
SELECT
  ROW_NUMBER() OVER (ORDER BY recorded_at) as point_number,
  recorded_at,
  recorded_at - LAG(recorded_at) OVER (ORDER BY recorded_at) as time_since_last
FROM trip_location_history
WHERE ride_id = 'YOUR_RIDE_ID'
ORDER BY recorded_at;
```

Check if there's a huge gap after point 34.

---

## **🔧 SOLUTION: Keep GPS Running**

Android kills background tasks aggressively. We need to:

1. **Use a foreground service** (already enabled ✅)
2. **Wake lock** to prevent deep sleep
3. **Disable battery optimization** for the app
4. **Keep updating location even if minimal movement**

The issue is likely that after ~2 minutes (34 points × 3 seconds = 102 seconds), Android decides to throttle or kill the background task.

---

## **Immediate Fix Options:**

### **Option A: Increase Update Frequency (Prevents Sleep)**
Change from 3 seconds to 5 seconds but keep the task more active

### **Option B: Add Wakelock (Prevents Deep Sleep)**
Keep device partially awake during tracking

### **Option C: Request Battery Optimization Exemption**
Ask user to disable battery optimization for the app

---

Let me know the query results and I'll implement the fix!
