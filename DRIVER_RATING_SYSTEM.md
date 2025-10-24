# Driver Rating System

## Overview

The driver rating system allows customers to rate drivers after completing a ride. The system automatically calculates and updates the driver's average rating.

## Database Structure

### Tables Involved

1. **`drivers` table**
   - `rating` (numeric): Driver's average rating (1.0 - 5.0)
   - `total_rides` (integer): Total number of rated rides

2. **`rides` table**
   - `rating` (integer): Customer's rating for this specific ride (1-5)
   - `customer_feedback` (text): Optional feedback from customer

3. **`trip_completions` table**
   - `driver_rating` (numeric): Snapshot of driver's rating at completion time

## How It Works

### Flow:

1. **Trip Completes**: Driver marks ride as completed
2. **Customer Rates**: Customer submits rating (1-5 stars) with optional feedback
3. **Rating Saved**: Rating is saved to `rides.rating` column
4. **Auto-Update**: Database trigger automatically:
   - Recalculates driver's average rating from all rated rides
   - Updates `drivers.rating` column
   - Updates `drivers.total_rides` count

### Customer App - Submit Rating

```typescript
// Customer submits rating after trip completion
const submitRating = async (rideId: string, rating: number, feedback?: string) => {
  const { data, error } = await supabase.rpc('submit_ride_rating', {
    p_ride_id: rideId,
    p_rating: rating,
    p_feedback: feedback || null
  });

  if (error) {
    console.error('Error submitting rating:', error);
    return;
  }

  if (!data.success) {
    console.error('Rating submission failed:', data.error);
    return;
  }

  console.log('Rating submitted successfully:', data);
};

// Example usage:
await submitRating('ride-uuid-here', 5, 'Excellent service!');
```

### Driver App - View Rating

```typescript
// Get driver's current average rating and breakdown
const getDriverRating = async (driverId: string) => {
  const { data, error } = await supabase.rpc('get_driver_average_rating', {
    p_driver_id: driverId
  });

  if (error) {
    console.error('Error fetching rating:', error);
    return;
  }

  console.log('Average Rating:', data.average_rating);
  console.log('Total Rated Rides:', data.total_rides);
  console.log('Rating Breakdown:', data.breakdown);
  // breakdown = { 5_star: 45, 4_star: 12, 3_star: 3, 2_star: 0, 1_star: 0 }
};
```

### Direct Query (Alternative)

```typescript
// Get driver's rating directly from drivers table
const { data: driver } = await supabase
  .from('drivers')
  .select('rating, total_rides')
  .eq('id', driverId)
  .single();

console.log('Rating:', driver.rating); // e.g., 4.8
console.log('Total Rides:', driver.total_rides); // e.g., 60
```

## API Functions

### 1. `submit_ride_rating()`

**Purpose**: Customer submits rating for a completed ride

**Parameters**:
- `p_ride_id` (UUID): The ride ID to rate
- `p_rating` (INTEGER): Rating value (1-5)
- `p_feedback` (TEXT, optional): Customer feedback

**Returns**: JSON
```json
{
  "success": true,
  "message": "Rating submitted successfully",
  "rating": 5
}
```

**Validations**:
- Rating must be between 1 and 5
- Ride must belong to the customer (authenticated user)
- Ride must be in 'completed' status
- Ride can only be rated once
- Customer must be authenticated

### 2. `get_driver_average_rating()`

**Purpose**: Get driver's current rating statistics

**Parameters**:
- `p_driver_id` (UUID): The driver ID

**Returns**: JSON
```json
{
  "success": true,
  "average_rating": 4.7,
  "total_rides": 60,
  "breakdown": {
    "5_star": 45,
    "4_star": 12,
    "3_star": 3,
    "2_star": 0,
    "1_star": 0
  }
}
```

### 3. `update_driver_rating_from_ride()`

**Purpose**: Automatic trigger function (internal use only)

**Trigger**: Executes automatically when a ride's rating is updated from NULL to a value

**Action**:
- Calculates average rating from all rated, completed rides
- Updates driver's `rating` column (rounded to 1 decimal)
- Updates driver's `total_rides` count
- Updates driver's `updated_at` timestamp

## Rating Calculation

**Formula**:
```sql
AVG(rating) FROM rides
WHERE driver_id = ?
  AND rating IS NOT NULL
  AND status = 'completed'
```

**Example**:
- Ride 1: 5 stars
- Ride 2: 4 stars
- Ride 3: 5 stars
- Ride 4: 3 stars

**Average**: (5 + 4 + 5 + 3) / 4 = **4.2 stars**

## Customer App Implementation Example

```typescript
// In CustomerTripCompletionModal.tsx or similar component

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { supabase } from '../utils/supabase';

const RatingModal = ({ rideId, onClose }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmitRating = async () => {
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }

    setSubmitting(true);

    const { data, error } = await supabase.rpc('submit_ride_rating', {
      p_ride_id: rideId,
      p_rating: rating,
      p_feedback: feedback || null
    });

    if (error || !data.success) {
      alert('Error submitting rating: ' + (data?.error || error.message));
      setSubmitting(false);
      return;
    }

    alert('Thank you for your rating!');
    onClose();
  };

  return (
    <View>
      <Text>Rate Your Driver</Text>

      {/* Star Rating Selector */}
      <View style={{ flexDirection: 'row' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
          >
            <Text style={{ fontSize: 32 }}>
              {star <= rating ? '⭐' : '☆'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Optional Feedback */}
      <TextInput
        placeholder="Add feedback (optional)"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmitRating}
        disabled={submitting}
      >
        <Text>Submit Rating</Text>
      </TouchableOpacity>
    </View>
  );
};
```

## Driver App Implementation Example

```typescript
// Display driver's rating in profile or earnings screen

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { supabase } from '../utils/supabase';

const DriverRatingDisplay = ({ driverId }) => {
  const [ratingData, setRatingData] = useState(null);

  useEffect(() => {
    loadRating();
  }, [driverId]);

  const loadRating = async () => {
    const { data } = await supabase.rpc('get_driver_average_rating', {
      p_driver_id: driverId
    });

    if (data?.success) {
      setRatingData(data);
    }
  };

  if (!ratingData) return null;

  return (
    <View>
      <Text style={{ fontSize: 32 }}>
        ⭐ {ratingData.average_rating}
      </Text>
      <Text>
        Based on {ratingData.total_rides} rides
      </Text>

      {/* Rating Breakdown */}
      <View>
        <Text>5⭐: {ratingData.breakdown['5_star']}</Text>
        <Text>4⭐: {ratingData.breakdown['4_star']}</Text>
        <Text>3⭐: {ratingData.breakdown['3_star']}</Text>
        <Text>2⭐: {ratingData.breakdown['2_star']}</Text>
        <Text>1⭐: {ratingData.breakdown['1_star']}</Text>
      </View>
    </View>
  );
};
```

## Security & Validation

### Security Rules:
- ✅ Only authenticated customers can submit ratings
- ✅ Customers can only rate their own rides
- ✅ Rides must be in 'completed' status to be rated
- ✅ Each ride can only be rated once
- ✅ Rating must be between 1 and 5

### Data Integrity:
- Driver's rating is automatically recalculated on every new rating
- Trigger ensures data consistency
- Index on `(driver_id, rating)` for fast queries
- Rating is rounded to 1 decimal place for display

## Testing

```sql
-- Test: Submit a rating
SELECT submit_ride_rating(
  'ride-uuid-here'::uuid,
  5,
  'Great driver!'
);

-- Test: Get driver rating
SELECT get_driver_average_rating('driver-uuid-here'::uuid);

-- Test: View all ratings for a driver
SELECT
  r.id,
  r.rating,
  r.customer_feedback,
  r.created_at
FROM rides r
WHERE r.driver_id = 'driver-uuid-here'
  AND r.rating IS NOT NULL
ORDER BY r.created_at DESC;
```

## Common Queries

### Get rides that need rating (Customer)
```typescript
const { data: unratedRides } = await supabase
  .from('rides')
  .select('*')
  .eq('customer_id', customerId)
  .eq('status', 'completed')
  .is('rating', null);
```

### Get recent ratings received (Driver)
```typescript
const { data: recentRatings } = await supabase
  .from('rides')
  .select('rating, customer_feedback, created_at')
  .eq('driver_id', driverId)
  .not('rating', 'is', null)
  .order('created_at', { ascending: false })
  .limit(10);
```

## Notes

- Default rating for new drivers: **5.0**
- Ratings are displayed with 1 decimal place (e.g., 4.7)
- Only completed rides with ratings count toward the average
- Customer feedback is optional and stored in `rides.customer_feedback`
- Driver's rating updates immediately after customer submits rating
