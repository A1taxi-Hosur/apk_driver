import { supabase } from '../utils/supabase';
import { calculateDistance } from '../utils/maps';

export interface FareBreakdown {
  booking_type: string;
  vehicle_type: string;
  base_fare: number;
  distance_fare: number;
  time_fare: number;
  surge_charges: number;
  deadhead_charges: number;
  platform_fee: number;
  gst_on_charges: number;
  gst_on_platform_fee: number;
  extra_km_charges: number;
  driver_allowance: number;
  total_fare: number;
  details: {
    actual_distance_km: number;
    actual_duration_minutes: number;
    base_km_included?: number;
    extra_km?: number;
    per_km_rate: number;
    per_minute_rate?: number;
    surge_multiplier?: number;
    platform_fee_flat?: number;
    gst_rate_charges?: number;
    gst_rate_platform?: number;
    zone_detected?: string;
    is_inner_zone?: boolean;
    days_calculated?: number;
    daily_km_limit?: number;
    within_allowance?: boolean;
    package_name?: string;
    total_km_travelled?: number;
    km_allowance?: number;
    direction?: string;
  };
}

export class FareCalculationService {
  /**
   * Helper method to round fare to nearest whole number
   */
  private static roundFare(amount: number): number {
    return Math.round(amount);
  }

  /**
   * Store pre-calculated fare breakdown for regular ride
   * Use this when the client has already calculated the fare correctly
   */
  static async storeRegularRideFareBreakdown(
    rideId: string,
    fareBreakdown: FareBreakdown,
    actualDistanceKm: number,
    actualDurationMinutes: number,
    driverDetails: {
      driver_id: string;
      customer_id: string;
      driver_name: string;
      driver_phone?: string;
      driver_rating?: number;
      vehicle_id?: string;
      vehicle_make?: string;
      vehicle_model?: string;
      vehicle_color?: string;
      vehicle_license_plate?: string;
    }
  ): Promise<{ success: boolean; error?: string }> {
    try {
      console.log('=== STORING PRE-CALCULATED REGULAR RIDE FARE ===');
      console.log('Ride ID:', rideId);
      console.log('Fare breakdown received:', JSON.stringify(fareBreakdown, null, 2));

      // Get ride details using RPC to bypass RLS
      const { data: rideData, error: rideError } = await supabase
        .rpc('get_ride_by_id', {
          p_ride_id: rideId
        });

      if (rideError || !rideData || rideData.length === 0) {
        console.error('Error fetching ride:', rideError);
        return { success: false, error: 'Ride not found' };
      }

      const ride = rideData[0];

      // Round the total fare
      const roundedFareBreakdown = {
        ...fareBreakdown,
        total_fare: this.roundFare(fareBreakdown.total_fare)
      };

      // Store in trip_completions table
      const { error: completionError } = await supabase
        .from('trip_completions')
        .insert({
          ride_id: rideId,
          driver_id: driverDetails.driver_id,
          customer_id: driverDetails.customer_id,
          booking_type: ride.booking_type,
          vehicle_type: ride.vehicle_type,
          trip_type: ride.trip_type,
          pickup_address: ride.pickup_address,
          destination_address: ride.destination_address,
          actual_distance_km: actualDistanceKm,
          actual_duration_minutes: actualDurationMinutes,
          base_fare: roundedFareBreakdown.base_fare,
          distance_fare: roundedFareBreakdown.distance_fare,
          time_fare: roundedFareBreakdown.time_fare,
          surge_charges: roundedFareBreakdown.surge_charges,
          deadhead_charges: roundedFareBreakdown.deadhead_charges,
          platform_fee: roundedFareBreakdown.platform_fee,
          gst_on_charges: roundedFareBreakdown.gst_on_charges,
          gst_on_platform_fee: roundedFareBreakdown.gst_on_platform_fee,
          extra_km_charges: roundedFareBreakdown.extra_km_charges,
          driver_allowance: roundedFareBreakdown.driver_allowance,
          total_fare: roundedFareBreakdown.total_fare,
          fare_details: roundedFareBreakdown,
          rental_hours: ride.rental_hours,
          scheduled_time: ride.scheduled_time,
          completed_at: new Date().toISOString(),
          driver_name: driverDetails.driver_name,
          driver_phone: driverDetails.driver_phone || '',
          driver_rating: driverDetails.driver_rating,
          vehicle_id: driverDetails.vehicle_id,
          vehicle_make: driverDetails.vehicle_make || '',
          vehicle_model: driverDetails.vehicle_model || '',
          vehicle_color: driverDetails.vehicle_color || '',
          vehicle_license_plate: driverDetails.vehicle_license_plate || ''
        })
        .select()
        .single();

      if (completionError) {
        console.error('❌ Error storing trip completion:', completionError);
        return { success: false, error: completionError.message };
      }

      console.log('✅ Pre-calculated fare breakdown stored successfully');
      console.log('✅ Rounded total fare:', roundedFareBreakdown.total_fare);
      return { success: true };

    } catch (error: any) {
      console.error('Exception storing fare breakdown:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Calculate fare for completed trip and store in trip_completions table
   */
  static async calculateAndStoreTripFare(
    rideId: string,
    actualDistanceKm: number,
    actualDurationMinutes: number,
    pickupLat: number,
    pickupLng: number,
    dropLat: number,
    dropLng: number,
    driverDetails?: {
      driver_id: string;
      customer_id: string;
      driver_name: string;
      driver_phone?: string;
      driver_rating?: number;
      vehicle_id?: string;
      vehicle_make?: string;
      vehicle_model?: string;
      vehicle_color?: string;
      vehicle_license_plate?: string;
    }
  ): Promise<{ success: boolean; fareBreakdown?: FareBreakdown; error?: string }> {
    try {
      console.log('=== CALCULATING TRIP FARE ===');
      console.log('Ride ID:', rideId);
      console.log('Actual Distance:', actualDistanceKm, 'km');
      console.log('Actual Duration:', actualDurationMinutes, 'minutes');

      // Get ride details using RPC to bypass RLS
      const { data: rideData, error: rideError } = await supabase
        .rpc('get_ride_by_id', {
          p_ride_id: rideId
        });

      if (rideError || !rideData || rideData.length === 0) {
        console.error('Error fetching ride:', rideError);
        return { success: false, error: 'Ride not found' };
      }

      const ride = rideData[0];

      console.log('Ride details:', {
        booking_type: ride.booking_type,
        vehicle_type: ride.vehicle_type,
        scheduled_time: ride.scheduled_time,
        trip_type: ride.trip_type
      });

      // Get zones from database
      console.log('🔍 Fetching zones from database...');
      const { data: zones, error: zonesError } = await supabase
        .from('zones')
        .select('*')
        .eq('is_active', true);

      if (zonesError) {
        console.error('Error fetching zones:', zonesError);
        throw new Error('Failed to fetch zone configuration');
      }

      console.log('✅ Zones fetched:', zones?.length || 0);
      zones?.forEach(zone => {
        console.log(`Zone: ${zone.name} - Center: ${zone.center_latitude}, ${zone.center_longitude} - Radius: ${zone.radius_km}km`);
      });
      let fareBreakdown: FareBreakdown;

      // Calculate fare based on booking type
      switch (ride.booking_type) {
        case 'regular':
          fareBreakdown = await this.calculateRegularFare(
            ride.vehicle_type,
            actualDistanceKm,
            actualDurationMinutes,
            pickupLat,
            pickupLng,
            dropLat,
            dropLng,
            zones
          );
          break;

        case 'rental':
          fareBreakdown = await this.calculateRentalFare(
            ride.vehicle_type,
            actualDistanceKm,
            actualDurationMinutes,
            ride.rental_hours || 4,
            dropLat,
            dropLng
          );
          break;

        case 'outstation':
          fareBreakdown = await this.calculateOutstationFare(
            ride.vehicle_type,
            actualDistanceKm,
            actualDurationMinutes,
            ride.scheduled_time,
            ride.trip_type || 'round_trip'
          );
          break;

        case 'airport':
          fareBreakdown = await this.calculateAirportFare(
            ride.vehicle_type,
            pickupLat,
            pickupLng,
            dropLat,
            dropLng,
            actualDistanceKm,
            actualDurationMinutes
          );
          break;

        default:
          return { success: false, error: 'Invalid booking type' };
      }

      // Apply promo discount to actual calculated fare (not estimated fare)
      let actualPromoDiscount = 0;
      let finalTotalFare = fareBreakdown.total_fare;

      if (ride.promo_code && ride.promo_discount && ride.original_fare) {
        // Calculate promo percentage from original booking
        const promoPercentage = (parseFloat(ride.promo_discount.toString()) / parseFloat(ride.original_fare.toString())) * 100;

        // Apply the same percentage to the ACTUAL calculated fare
        actualPromoDiscount = (fareBreakdown.total_fare * promoPercentage) / 100;
        actualPromoDiscount = this.roundFare(actualPromoDiscount);

        // Calculate final fare after promo
        finalTotalFare = fareBreakdown.total_fare - actualPromoDiscount;
        finalTotalFare = this.roundFare(finalTotalFare);

        console.log('📊 PROMO CALCULATION:');
        console.log('  Original estimated fare:', ride.original_fare);
        console.log('  Original promo discount:', ride.promo_discount);
        console.log('  Promo percentage:', promoPercentage.toFixed(2) + '%');
        console.log('  Actual calculated fare:', fareBreakdown.total_fare);
        console.log('  Actual promo discount:', actualPromoDiscount);
        console.log('  Final fare after promo:', finalTotalFare);
      }

      // Store trip completion record in the appropriate table based on booking type
      let completionError = null;
      let tripCompletion = null;

      switch (ride.booking_type) {
        case 'regular':
          const regularResult = await supabase
            .rpc('insert_trip_completion', {
              p_ride_id: rideId,
              p_driver_id: driverDetails?.driver_id,
              p_customer_id: driverDetails?.customer_id,
              p_booking_type: ride.booking_type,
              p_vehicle_type: ride.vehicle_type,
              p_trip_type: ride.trip_type,
              p_pickup_address: ride.pickup_address,
              p_destination_address: ride.destination_address,
              p_actual_distance_km: actualDistanceKm,
              p_actual_duration_minutes: actualDurationMinutes,
              p_base_fare: fareBreakdown.base_fare,
              p_distance_fare: fareBreakdown.distance_fare,
              p_time_fare: fareBreakdown.time_fare,
              p_surge_charges: fareBreakdown.surge_charges,
              p_deadhead_charges: fareBreakdown.deadhead_charges,
              p_platform_fee: fareBreakdown.platform_fee,
              p_gst_on_charges: fareBreakdown.gst_on_charges,
              p_gst_on_platform_fee: fareBreakdown.gst_on_platform_fee,
              p_extra_km_charges: fareBreakdown.extra_km_charges,
              p_driver_allowance: fareBreakdown.driver_allowance,
              p_total_fare: finalTotalFare,
              p_fare_details: fareBreakdown,
              p_rental_hours: ride.rental_hours,
              p_scheduled_time: ride.scheduled_time,
              p_completed_at: new Date().toISOString(),
              p_driver_name: driverDetails?.driver_name || 'Driver',
              p_driver_phone: driverDetails?.driver_phone || '',
              p_driver_rating: driverDetails?.driver_rating,
              p_vehicle_id: driverDetails?.vehicle_id,
              p_vehicle_make: driverDetails?.vehicle_make || '',
              p_vehicle_model: driverDetails?.vehicle_model || '',
              p_vehicle_color: driverDetails?.vehicle_color || '',
              p_vehicle_license_plate: driverDetails?.vehicle_license_plate || '',
              p_promo_code: ride.promo_code || null,
              p_promo_discount: actualPromoDiscount || null,
              p_original_fare: fareBreakdown.total_fare
            });

          if (regularResult.error || !regularResult.data?.success) {
            completionError = regularResult.error || { message: regularResult.data?.error };
          } else {
            tripCompletion = { id: regularResult.data.trip_completion_id };
          }
          break;

        case 'rental':
          const rentalResult = await supabase
            .rpc('insert_rental_trip_completion', {
              p_ride_id: rideId,
              p_scheduled_booking_id: null,
              p_driver_id: driverDetails?.driver_id,
              p_customer_id: driverDetails?.customer_id,
              p_booking_type: 'rental',
              p_vehicle_type: ride.vehicle_type,
              p_trip_type: null,
              p_pickup_address: ride.pickup_address,
              p_destination_address: ride.destination_address || '',
              p_rental_hours: ride.rental_hours || 0,
              p_actual_hours_used: Math.ceil(actualDurationMinutes / 60),
              p_actual_distance_km: actualDistanceKm,
              p_actual_duration_minutes: actualDurationMinutes,
              p_base_fare: fareBreakdown.base_fare,
              p_hourly_charges: fareBreakdown.time_fare,
              p_distance_fare: fareBreakdown.distance_fare,
              p_extra_km_charges: fareBreakdown.extra_km_charges,
              p_extra_hour_charges: fareBreakdown.surge_charges,
              p_deadhead_charges: fareBreakdown.deadhead_charges,
              p_platform_fee: fareBreakdown.platform_fee,
              p_gst_on_charges: fareBreakdown.gst_on_charges,
              p_gst_on_platform_fee: fareBreakdown.gst_on_platform_fee,
              p_total_fare: finalTotalFare,
              p_fare_details: fareBreakdown,
              p_completed_at: new Date().toISOString(),
              p_driver_name: driverDetails?.driver_name || 'Driver',
              p_driver_phone: driverDetails?.driver_phone || '',
              p_driver_rating: driverDetails?.driver_rating,
              p_vehicle_id: driverDetails?.vehicle_id,
              p_vehicle_make: driverDetails?.vehicle_make || '',
              p_vehicle_model: driverDetails?.vehicle_model || '',
              p_vehicle_color: driverDetails?.vehicle_color || '',
              p_vehicle_license_plate: driverDetails?.vehicle_license_plate || '',
              p_promo_code: ride.promo_code || null,
              p_promo_discount: actualPromoDiscount || null,
              p_original_fare: fareBreakdown.total_fare
            });

          if (rentalResult.error || !rentalResult.data?.success) {
            completionError = rentalResult.error || { message: rentalResult.data?.error };
          } else {
            tripCompletion = { id: rentalResult.data.completion_id };
          }
          break;

        case 'outstation':
          console.log('=== STORING OUTSTATION TRIP COMPLETION ===');
          console.log('fareBreakdown object:', JSON.stringify(fareBreakdown, null, 2));
          console.log('Individual fare components to be stored:');
          console.log('  - base_fare:', fareBreakdown.base_fare);
          console.log('  - distance_fare:', fareBreakdown.distance_fare);
          console.log('  - driver_allowance:', fareBreakdown.driver_allowance);
          console.log('  - extra_km_charges:', fareBreakdown.extra_km_charges);
          console.log('  - platform_fee:', fareBreakdown.platform_fee);
          console.log('  - gst_on_charges:', fareBreakdown.gst_on_charges);
          console.log('  - gst_on_platform_fee:', fareBreakdown.gst_on_platform_fee);
          console.log('  - total_fare:', fareBreakdown.total_fare);
          console.log('  - actual_distance_km:', fareBreakdown.details.actual_distance_km);
          console.log('  - actual_duration_minutes:', fareBreakdown.details.actual_duration_minutes);

          const outstationResult = await supabase
            .rpc('insert_outstation_trip_completion', {
              p_ride_id: rideId,
              p_scheduled_booking_id: null,
              p_driver_id: driverDetails?.driver_id,
              p_customer_id: driverDetails?.customer_id,
              p_booking_type: 'outstation',
              p_vehicle_type: ride.vehicle_type,
              p_trip_type: ride.trip_type || 'one_way',
              p_pickup_address: ride.pickup_address,
              p_destination_address: ride.destination_address,
              p_actual_distance_km: fareBreakdown.details.actual_distance_km,
              p_actual_duration_minutes: fareBreakdown.details.actual_duration_minutes,
              p_actual_days: fareBreakdown.details.days_calculated || Math.ceil(actualDurationMinutes / (60 * 24)),
              p_base_fare: fareBreakdown.base_fare,
              p_distance_fare: fareBreakdown.distance_fare,
              p_per_day_charges: 0,
              p_driver_allowance: fareBreakdown.driver_allowance,
              p_extra_km_charges: fareBreakdown.extra_km_charges,
              p_deadhead_charges: fareBreakdown.deadhead_charges,
              p_toll_charges: 0,
              p_platform_fee: fareBreakdown.platform_fee,
              p_gst_on_charges: fareBreakdown.gst_on_charges,
              p_gst_on_platform_fee: fareBreakdown.gst_on_platform_fee,
              p_total_fare: finalTotalFare,
              p_fare_details: fareBreakdown,
              p_scheduled_time: ride.scheduled_time,
              p_completed_at: new Date().toISOString(),
              p_driver_name: driverDetails?.driver_name || 'Driver',
              p_driver_phone: driverDetails?.driver_phone || '',
              p_driver_rating: driverDetails?.driver_rating,
              p_vehicle_id: driverDetails?.vehicle_id,
              p_vehicle_make: driverDetails?.vehicle_make || '',
              p_vehicle_model: driverDetails?.vehicle_model || '',
              p_vehicle_color: driverDetails?.vehicle_color || '',
              p_vehicle_license_plate: driverDetails?.vehicle_license_plate || '',
              p_promo_code: ride.promo_code || null,
              p_promo_discount: actualPromoDiscount || null,
              p_original_fare: fareBreakdown.total_fare
            });

          if (outstationResult.error || !outstationResult.data?.success) {
            console.error('❌ Error inserting outstation trip completion:', outstationResult.error || outstationResult.data?.error);
            completionError = outstationResult.error || { message: outstationResult.data?.error };
          } else {
            console.log('✅ Outstation trip completion stored successfully');
            console.log('Completion ID:', outstationResult.data.completion_id);
            tripCompletion = { id: outstationResult.data.completion_id };
          }
          break;

        case 'airport':
          const airportResult = await supabase
            .rpc('insert_airport_trip_completion', {
              p_ride_id: rideId,
              p_scheduled_booking_id: null,
              p_driver_id: driverDetails?.driver_id,
              p_customer_id: driverDetails?.customer_id,
              p_booking_type: 'airport',
              p_vehicle_type: ride.vehicle_type,
              p_trip_type: null,
              p_pickup_address: ride.pickup_address,
              p_destination_address: ride.destination_address,
              p_actual_distance_km: actualDistanceKm,
              p_actual_duration_minutes: actualDurationMinutes,
              p_base_fare: fareBreakdown.base_fare,
              p_distance_fare: fareBreakdown.distance_fare,
              p_airport_surcharge: fareBreakdown.surge_charges,
              p_time_fare: fareBreakdown.time_fare,
              p_deadhead_charges: fareBreakdown.deadhead_charges,
              p_platform_fee: fareBreakdown.platform_fee,
              p_gst_on_charges: fareBreakdown.gst_on_charges,
              p_gst_on_platform_fee: fareBreakdown.gst_on_platform_fee,
              p_total_fare: finalTotalFare,
              p_fare_details: fareBreakdown,
              p_scheduled_time: ride.scheduled_time,
              p_completed_at: new Date().toISOString(),
              p_driver_name: driverDetails?.driver_name || 'Driver',
              p_driver_phone: driverDetails?.driver_phone || '',
              p_driver_rating: driverDetails?.driver_rating,
              p_vehicle_id: driverDetails?.vehicle_id,
              p_vehicle_make: driverDetails?.vehicle_make || '',
              p_vehicle_model: driverDetails?.vehicle_model || '',
              p_vehicle_color: driverDetails?.vehicle_color || '',
              p_vehicle_license_plate: driverDetails?.vehicle_license_plate || '',
              p_promo_code: ride.promo_code || null,
              p_promo_discount: actualPromoDiscount || null,
              p_original_fare: fareBreakdown.total_fare
            });

          if (airportResult.error || !airportResult.data?.success) {
            completionError = airportResult.error || { message: airportResult.data?.error };
          } else {
            tripCompletion = { id: airportResult.data.completion_id };
          }
          break;

        default:
          return { success: false, error: 'Invalid booking type for completion storage' };
      }

      if (completionError) {
        console.error('❌ Error storing trip completion:', completionError);
        console.error('❌ Error details:', JSON.stringify(completionError, null, 2));
        console.error('❌ Error message:', completionError.message);
        console.error('❌ Error code:', completionError.code);
        console.error('❌ Error hint:', completionError.hint);
        console.error('❌ Booking type:', ride.booking_type);
        console.error('❌ Driver details provided:', !!driverDetails);
        return { success: false, error: 'Failed to store trip completion: ' + completionError.message };
      }

      // Update ride with final fare
      await supabase
        .from('rides')
        .update({
          fare_amount: fareBreakdown.total_fare,
          distance_km: actualDistanceKm,
          duration_minutes: actualDurationMinutes
        })
        .eq('id', rideId);

      console.log('✅ Trip fare calculated and stored successfully');

      // Return updated fareBreakdown with promo-adjusted total_fare
      const completionFareBreakdown = {
        ...fareBreakdown,
        total_fare: finalTotalFare
      };

      return {
        success: true,
        fareBreakdown: completionFareBreakdown,
        promo_code: ride.promo_code || null,
        promo_discount: actualPromoDiscount || null,
        original_fare: fareBreakdown.total_fare
      };

    } catch (error) {
      console.error('Exception calculating trip fare:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Calculate fare for completed scheduled booking and store in appropriate completion table
   */
  static async calculateAndStoreScheduledBookingFare(
    bookingId: string,
    actualDistanceKm: number,
    actualDurationMinutes: number,
    driverDetails: {
      driver_id: string;
      customer_id: string;
      driver_name: string;
      driver_phone?: string;
      driver_rating?: number;
      vehicle_id?: string;
      vehicle_make?: string;
      vehicle_model?: string;
      vehicle_color?: string;
      vehicle_license_plate?: string;
    }
  ): Promise<{ success: boolean; fareBreakdown?: FareBreakdown; error?: string }> {
    try {
      console.log('=== CALCULATING SCHEDULED BOOKING FARE ===');
      console.log('Booking ID:', bookingId);
      console.log('Actual Distance:', actualDistanceKm, 'km');
      console.log('Actual Duration:', actualDurationMinutes, 'minutes');

      // Get booking details
      const { data: booking, error: bookingError } = await supabase
        .from('scheduled_bookings')
        .select('*')
        .eq('id', bookingId)
        .single();

      if (bookingError || !booking) {
        console.error('Error fetching booking:', bookingError);
        return { success: false, error: 'Booking not found' };
      }

      console.log('Booking details:', {
        booking_type: booking.booking_type,
        vehicle_type: booking.vehicle_type,
        scheduled_time: booking.scheduled_time,
        trip_type: booking.trip_type
      });

      // Get zones from database
      const { data: zones, error: zonesError } = await supabase
        .from('zones')
        .select('*')
        .eq('is_active', true);

      if (zonesError) {
        console.error('Error fetching zones:', zonesError);
        throw new Error('Failed to fetch zone configuration');
      }

      let fareBreakdown: FareBreakdown;
      const pickupLat = booking.pickup_latitude;
      const pickupLng = booking.pickup_longitude;
      const dropLat = booking.destination_latitude;
      const dropLng = booking.destination_longitude;

      // Calculate fare based on booking type
      switch (booking.booking_type) {
        case 'rental':
          fareBreakdown = await this.calculateRentalFare(
            booking.vehicle_type,
            actualDistanceKm,
            actualDurationMinutes,
            booking.rental_hours || 4,
            dropLat,
            dropLng
          );
          break;

        case 'outstation':
          fareBreakdown = await this.calculateOutstationFare(
            booking.vehicle_type,
            actualDistanceKm,
            actualDurationMinutes,
            booking.scheduled_time,
            booking.trip_type || 'round_trip'
          );
          break;

        case 'airport':
          fareBreakdown = await this.calculateAirportFare(
            booking.vehicle_type,
            pickupLat,
            pickupLng,
            dropLat,
            dropLng,
            actualDistanceKm,
            actualDurationMinutes
          );
          break;

        default:
          return { success: false, error: 'Invalid booking type for scheduled booking' };
      }

      console.log('✅ Fare breakdown calculated:', fareBreakdown);

      // Apply promo discount to actual calculated fare (not estimated fare)
      let actualPromoDiscount = 0;
      let finalTotalFare = fareBreakdown.total_fare;

      if (booking.promo_code && booking.promo_discount && booking.fare_amount) {
        // Calculate promo percentage from original booking
        const promoPercentage = (parseFloat(booking.promo_discount.toString()) / parseFloat(booking.fare_amount.toString())) * 100;

        // Apply the same percentage to the ACTUAL calculated fare
        actualPromoDiscount = (fareBreakdown.total_fare * promoPercentage) / 100;
        actualPromoDiscount = this.roundFare(actualPromoDiscount);

        // Calculate final fare after promo
        finalTotalFare = fareBreakdown.total_fare - actualPromoDiscount;
        finalTotalFare = this.roundFare(finalTotalFare);

        console.log('📊 SCHEDULED BOOKING PROMO CALCULATION:');
        console.log('  Original estimated fare:', booking.fare_amount);
        console.log('  Original promo discount:', booking.promo_discount);
        console.log('  Promo percentage:', promoPercentage.toFixed(2) + '%');
        console.log('  Actual calculated fare:', fareBreakdown.total_fare);
        console.log('  Actual promo discount:', actualPromoDiscount);
        console.log('  Final fare after promo:', finalTotalFare);
      }

      // Store in appropriate completion table
      let completionError: any = null;
      let tripCompletion: any = null;

      switch (booking.booking_type) {
        case 'rental':
          const rentalResult = await supabase
            .from('rental_trip_completions')
            .insert({
              scheduled_booking_id: bookingId,
              driver_id: driverDetails.driver_id,
              customer_id: driverDetails.customer_id,
              booking_type: booking.booking_type,
              vehicle_type: booking.vehicle_type,
              trip_type: booking.trip_type,
              pickup_address: booking.pickup_address,
              destination_address: booking.destination_address,
              rental_hours: booking.rental_hours || 4,
              actual_hours_used: actualDurationMinutes / 60,
              actual_distance_km: actualDistanceKm,
              actual_duration_minutes: actualDurationMinutes,
              base_fare: fareBreakdown.base_fare,
              hourly_charges: fareBreakdown.hourly_charges || 0,
              distance_fare: fareBreakdown.distance_fare,
              extra_km_charges: fareBreakdown.extra_km_charges || 0,
              extra_hour_charges: fareBreakdown.extra_hour_charges || 0,
              deadhead_charges: fareBreakdown.deadhead_charges || 0,
              platform_fee: fareBreakdown.platform_fee,
              gst_on_charges: fareBreakdown.gst_on_charges,
              gst_on_platform_fee: fareBreakdown.gst_on_platform_fee,
              total_fare: finalTotalFare,
              fare_details: fareBreakdown,
              promo_code: booking.promo_code || null,
              promo_discount: actualPromoDiscount || null,
              original_fare: fareBreakdown.total_fare,
              driver_name: driverDetails.driver_name,
              driver_phone: driverDetails.driver_phone || '',
              driver_rating: driverDetails.driver_rating,
              vehicle_id: driverDetails.vehicle_id,
              vehicle_make: driverDetails.vehicle_make || '',
              vehicle_model: driverDetails.vehicle_model || '',
              vehicle_color: driverDetails.vehicle_color || '',
              vehicle_license_plate: driverDetails.vehicle_license_plate || '',
              completed_at: new Date().toISOString()
            })
            .select()
            .single();
          completionError = rentalResult.error;
          tripCompletion = rentalResult.data;
          break;

        case 'outstation':
          console.log('=== STORING SCHEDULED OUTSTATION TRIP COMPLETION ===');
          console.log('fareBreakdown to store:', JSON.stringify(fareBreakdown, null, 2));
          console.log('Total fare from fareBreakdown:', fareBreakdown.total_fare);

          const outstationResult = await supabase
            .from('outstation_trip_completions')
            .insert({
              scheduled_booking_id: bookingId,
              driver_id: driverDetails.driver_id,
              customer_id: driverDetails.customer_id,
              booking_type: booking.booking_type,
              vehicle_type: booking.vehicle_type,
              trip_type: booking.trip_type,
              pickup_address: booking.pickup_address,
              destination_address: booking.destination_address,
              scheduled_time: booking.scheduled_time,
              actual_distance_km: fareBreakdown.details.actual_distance_km,
              actual_duration_minutes: fareBreakdown.details.actual_duration_minutes,
              actual_days: fareBreakdown.details.days_calculated || Math.ceil(actualDurationMinutes / (24 * 60)),
              base_fare: fareBreakdown.base_fare,
              distance_fare: fareBreakdown.distance_fare,
              per_day_charges: 0,
              driver_allowance: fareBreakdown.driver_allowance,
              extra_km_charges: fareBreakdown.extra_km_charges,
              deadhead_charges: fareBreakdown.deadhead_charges || 0,
              toll_charges: 0,
              platform_fee: fareBreakdown.platform_fee,
              gst_on_charges: fareBreakdown.gst_on_charges,
              gst_on_platform_fee: fareBreakdown.gst_on_platform_fee,
              total_fare: finalTotalFare,
              fare_details: fareBreakdown,
              promo_code: booking.promo_code || null,
              promo_discount: actualPromoDiscount || null,
              original_fare: fareBreakdown.total_fare,
              driver_name: driverDetails.driver_name,
              driver_phone: driverDetails.driver_phone || '',
              driver_rating: driverDetails.driver_rating,
              vehicle_id: driverDetails.vehicle_id,
              vehicle_make: driverDetails.vehicle_make || '',
              vehicle_model: driverDetails.vehicle_model || '',
              vehicle_color: driverDetails.vehicle_color || '',
              vehicle_license_plate: driverDetails.vehicle_license_plate || '',
              completed_at: new Date().toISOString()
            })
            .select()
            .single();

          console.log('✅ Scheduled outstation trip completion stored:', outstationResult.data);
          console.log('Total fare stored:', outstationResult.data?.total_fare);
          completionError = outstationResult.error;
          tripCompletion = outstationResult.data;
          break;

        case 'airport':
          const airportResult = await supabase
            .from('airport_trip_completions')
            .insert({
              scheduled_booking_id: bookingId,
              driver_id: driverDetails.driver_id,
              customer_id: driverDetails.customer_id,
              booking_type: booking.booking_type,
              vehicle_type: booking.vehicle_type,
              trip_type: booking.trip_type,
              pickup_address: booking.pickup_address,
              destination_address: booking.destination_address,
              scheduled_time: booking.scheduled_time,
              actual_distance_km: actualDistanceKm,
              actual_duration_minutes: actualDurationMinutes,
              base_fare: fareBreakdown.base_fare,
              distance_fare: fareBreakdown.distance_fare,
              airport_surcharge: fareBreakdown.airport_surcharge || 0,
              time_fare: fareBreakdown.time_fare || 0,
              deadhead_charges: fareBreakdown.deadhead_charges || 0,
              platform_fee: fareBreakdown.platform_fee,
              gst_on_charges: fareBreakdown.gst_on_charges,
              gst_on_platform_fee: fareBreakdown.gst_on_platform_fee,
              total_fare: finalTotalFare,
              fare_details: fareBreakdown,
              promo_code: booking.promo_code || null,
              promo_discount: actualPromoDiscount || null,
              original_fare: fareBreakdown.total_fare,
              driver_name: driverDetails.driver_name,
              driver_phone: driverDetails.driver_phone || '',
              driver_rating: driverDetails.driver_rating,
              vehicle_id: driverDetails.vehicle_id,
              vehicle_make: driverDetails.vehicle_make || '',
              vehicle_model: driverDetails.vehicle_model || '',
              vehicle_color: driverDetails.vehicle_color || '',
              vehicle_license_plate: driverDetails.vehicle_license_plate || '',
              completed_at: new Date().toISOString()
            })
            .select()
            .single();
          completionError = airportResult.error;
          tripCompletion = airportResult.data;
          break;

        default:
          return { success: false, error: 'Invalid booking type for completion storage' };
      }

      if (completionError) {
        console.error('❌ Error storing trip completion:', completionError);
        console.error('❌ Error details:', JSON.stringify(completionError, null, 2));
        console.error('❌ Error message:', completionError.message);
        console.error('❌ Error code:', completionError.code);
        console.error('❌ Error hint:', completionError.hint);
        console.error('❌ Booking type:', booking.booking_type);
        return { success: false, error: 'Failed to store trip completion: ' + completionError.message };
      }

      console.log('✅ Trip completion stored successfully:', tripCompletion);

      // Return updated fareBreakdown with promo-adjusted total_fare
      const completionFareBreakdown = {
        ...fareBreakdown,
        total_fare: finalTotalFare
      };

      return {
        success: true,
        fareBreakdown: completionFareBreakdown,
        promo_code: booking.promo_code || null,
        promo_discount: actualPromoDiscount || null,
        original_fare: fareBreakdown.total_fare
      };
    } catch (error: any) {
      console.error('Exception calculating scheduled booking fare:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Store pre-calculated fare breakdown for scheduled booking
   * Use this when the client has already calculated the fare correctly
   */
  static async storeScheduledBookingFareBreakdown(
    bookingId: string,
    fareBreakdown: FareBreakdown,
    actualDistanceKm: number,
    actualDurationMinutes: number,
    driverDetails: {
      driver_id: string;
      customer_id: string;
      driver_name: string;
      driver_phone?: string;
      driver_rating?: number;
      vehicle_id?: string;
      vehicle_make?: string;
      vehicle_model?: string;
      vehicle_color?: string;
      vehicle_license_plate?: string;
    },
    bookingDetails?: {
      booking_type: string;
      vehicle_type: string;
      trip_type: string | null;
      pickup_address: string;
      destination_address: string;
      rental_hours?: number;
      scheduled_time: string | null;
    }
  ): Promise<{ success: boolean; error?: string; fareBreakdown?: any }> {
    try {
      console.log('=== STORING PRE-CALCULATED FARE BREAKDOWN ===');
      console.log('Booking ID:', bookingId);
      console.log('Fare breakdown received:', JSON.stringify(fareBreakdown, null, 2));

      // Use booking details passed from caller (which already has access via RPC)
      // This avoids RLS issues when trying to fetch booking after completion
      if (!bookingDetails) {
        console.error('❌ Booking details not provided - cannot store completion');
        return { success: false, error: 'Booking details required' };
      }

      const booking = {
        id: bookingId,
        booking_type: bookingDetails.booking_type,
        vehicle_type: bookingDetails.vehicle_type,
        trip_type: bookingDetails.trip_type,
        pickup_address: bookingDetails.pickup_address,
        destination_address: bookingDetails.destination_address,
        rental_hours: bookingDetails.rental_hours,
        scheduled_time: bookingDetails.scheduled_time
      };

      console.log('📝 Using booking details from caller:', JSON.stringify(booking, null, 2));

      // Round the total fare and sanitize for JSON storage
      const roundedFareBreakdown = {
        ...fareBreakdown,
        total_fare: this.roundFare(fareBreakdown.total_fare)
      };

      // Sanitize fare_details to ensure all values are JSON-safe
      const sanitizedFareDetails = JSON.parse(JSON.stringify(roundedFareBreakdown));

      let completionError: any = null;

      // Store in appropriate completion table based on booking type
      switch (booking.booking_type) {
        case 'rental':
          console.log('📝 Storing rental trip completion...');
          console.log('📝 Rental booking details:', {
            bookingId,
            rental_hours: booking.rental_hours,
            actual_hours_used: actualDurationMinutes / 60
          });

          const rentalResult = await supabase
            .rpc('insert_rental_trip_completion', {
              p_scheduled_booking_id: bookingId,
              p_driver_id: driverDetails.driver_id,
              p_customer_id: driverDetails.customer_id,
              p_booking_type: booking.booking_type,
              p_vehicle_type: booking.vehicle_type,
              p_trip_type: booking.trip_type || 'one_way',
              p_pickup_address: booking.pickup_address,
              p_destination_address: booking.destination_address,
              p_rental_hours: booking.rental_hours || 4,
              p_actual_hours_used: actualDurationMinutes / 60,
              p_actual_distance_km: actualDistanceKm,
              p_actual_duration_minutes: actualDurationMinutes,
              p_base_fare: roundedFareBreakdown.base_fare || 0,
              p_hourly_charges: 0,
              p_distance_fare: roundedFareBreakdown.distance_fare || 0,
              p_extra_km_charges: roundedFareBreakdown.extra_km_charges || 0,
              p_extra_hour_charges: 0,
              p_platform_fee: roundedFareBreakdown.platform_fee || 0,
              p_gst_on_charges: roundedFareBreakdown.gst_on_charges || 0,
              p_gst_on_platform_fee: roundedFareBreakdown.gst_on_platform_fee || 0,
              p_total_fare: roundedFareBreakdown.total_fare,
              p_fare_details: sanitizedFareDetails,
              p_completed_at: new Date().toISOString(),
              p_driver_name: driverDetails.driver_name,
              p_driver_phone: driverDetails.driver_phone || '',
              p_driver_rating: driverDetails.driver_rating,
              p_vehicle_id: driverDetails.vehicle_id,
              p_vehicle_make: driverDetails.vehicle_make || '',
              p_vehicle_model: driverDetails.vehicle_model || '',
              p_vehicle_color: driverDetails.vehicle_color || '',
              p_vehicle_license_plate: driverDetails.vehicle_license_plate || ''
            });

          console.log('📝 Rental RPC result:', JSON.stringify(rentalResult, null, 2));

          if (rentalResult.error || !rentalResult.data?.success) {
            completionError = rentalResult.error || { message: rentalResult.data?.error };
            console.error('❌ Rental completion error:', completionError);
            console.error('❌ Error details:', JSON.stringify(completionError, null, 2));
          } else {
            console.log('✅ Rental completion stored, ID:', rentalResult.data.completion_id);
            console.log('✅ Rounded total fare:', roundedFareBreakdown.total_fare);
          }
          break;

        case 'outstation':
          console.log('📝 Storing outstation trip completion...');
          console.log('📝 Booking details:', {
            bookingId,
            booking_type: booking.booking_type,
            vehicle_type: booking.vehicle_type,
            trip_type: booking.trip_type,
            scheduled_time: booking.scheduled_time
          });
          console.log('📝 Fare breakdown:', JSON.stringify(roundedFareBreakdown, null, 2));

          // Ensure trip_type has a valid value (fallback to 'one_way' if null)
          const tripType = booking.trip_type || 'one_way';
          console.log('📝 Using trip_type:', tripType);

          const outstationResult = await supabase
            .rpc('insert_outstation_trip_completion', {
              p_scheduled_booking_id: bookingId,
              p_driver_id: driverDetails.driver_id,
              p_customer_id: driverDetails.customer_id,
              p_booking_type: booking.booking_type,
              p_vehicle_type: booking.vehicle_type,
              p_trip_type: tripType,
              p_pickup_address: booking.pickup_address,
              p_destination_address: booking.destination_address,
              p_actual_distance_km: actualDistanceKm,
              p_actual_duration_minutes: actualDurationMinutes,
              p_actual_days: roundedFareBreakdown.details?.days_calculated || 1,
              p_base_fare: roundedFareBreakdown.base_fare || 0,
              p_distance_fare: roundedFareBreakdown.distance_fare || 0,
              p_per_day_charges: 0,
              p_driver_allowance: roundedFareBreakdown.driver_allowance || 0,
              p_extra_km_charges: roundedFareBreakdown.extra_km_charges || 0,
              p_toll_charges: 0,
              p_platform_fee: roundedFareBreakdown.platform_fee || 0,
              p_gst_on_charges: roundedFareBreakdown.gst_on_charges || 0,
              p_gst_on_platform_fee: roundedFareBreakdown.gst_on_platform_fee || 0,
              p_total_fare: roundedFareBreakdown.total_fare,
              p_fare_details: sanitizedFareDetails,
              p_scheduled_time: booking.scheduled_time,
              p_completed_at: new Date().toISOString(),
              p_driver_name: driverDetails.driver_name,
              p_driver_phone: driverDetails.driver_phone || '',
              p_driver_rating: driverDetails.driver_rating,
              p_vehicle_id: driverDetails.vehicle_id,
              p_vehicle_make: driverDetails.vehicle_make || '',
              p_vehicle_model: driverDetails.vehicle_model || '',
              p_vehicle_color: driverDetails.vehicle_color || '',
              p_vehicle_license_plate: driverDetails.vehicle_license_plate || ''
            });

          console.log('📝 RPC result:', JSON.stringify(outstationResult, null, 2));

          if (outstationResult.error || !outstationResult.data?.success) {
            completionError = outstationResult.error || { message: outstationResult.data?.error };
            console.error('❌ Outstation completion error:', completionError);
            console.error('❌ Error details:', JSON.stringify(completionError, null, 2));
          } else {
            console.log('✅ Outstation completion stored, ID:', outstationResult.data.completion_id);
            console.log('✅ Rounded total fare:', roundedFareBreakdown.total_fare);
          }
          break;

        case 'airport':
          console.log('📝 Storing airport trip completion...');
          const airportResult = await supabase
            .rpc('insert_airport_trip_completion', {
              p_scheduled_booking_id: bookingId,
              p_driver_id: driverDetails.driver_id,
              p_customer_id: driverDetails.customer_id,
              p_booking_type: booking.booking_type,
              p_vehicle_type: booking.vehicle_type,
              p_trip_type: booking.trip_type,
              p_pickup_address: booking.pickup_address,
              p_destination_address: booking.destination_address,
              p_actual_distance_km: actualDistanceKm,
              p_actual_duration_minutes: actualDurationMinutes,
              p_base_fare: roundedFareBreakdown.base_fare,
              p_distance_fare: roundedFareBreakdown.distance_fare,
              p_airport_surcharge: 0,
              p_time_fare: roundedFareBreakdown.time_fare || 0,
              p_platform_fee: roundedFareBreakdown.platform_fee,
              p_gst_on_charges: roundedFareBreakdown.gst_on_charges,
              p_gst_on_platform_fee: roundedFareBreakdown.gst_on_platform_fee,
              p_total_fare: roundedFareBreakdown.total_fare,
              p_fare_details: sanitizedFareDetails,
              p_scheduled_time: booking.scheduled_time,
              p_completed_at: new Date().toISOString(),
              p_driver_name: driverDetails.driver_name,
              p_driver_phone: driverDetails.driver_phone || '',
              p_driver_rating: driverDetails.driver_rating,
              p_vehicle_id: driverDetails.vehicle_id,
              p_vehicle_make: driverDetails.vehicle_make || '',
              p_vehicle_model: driverDetails.vehicle_model || '',
              p_vehicle_color: driverDetails.vehicle_color || '',
              p_vehicle_license_plate: driverDetails.vehicle_license_plate || ''
            });

          if (airportResult.error || !airportResult.data?.success) {
            completionError = airportResult.error || { message: airportResult.data?.error };
            console.error('❌ Airport completion error:', completionError);
          } else {
            console.log('✅ Airport completion stored, ID:', airportResult.data.completion_id);
            console.log('✅ Rounded total fare:', roundedFareBreakdown.total_fare);
          }
          break;

        default:
          console.error('❌ Invalid booking type:', booking.booking_type);
          return { success: false, error: 'Invalid booking type' };
      }

      if (completionError) {
        console.error('❌ Error storing completion:', completionError);
        return { success: false, error: completionError.message };
      }

      console.log('✅ Fare breakdown stored successfully');
      return {
        success: true,
        fareBreakdown: roundedFareBreakdown
      };

    } catch (error: any) {
      console.error('Exception storing fare breakdown:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Regular ride fare calculation
   */
  private static async calculateRegularFare(
    vehicleType: string,
    actualDistanceKm: number,
    actualDurationMinutes: number,
    pickupLat: number,
    pickupLng: number,
    dropLat: number,
    dropLng: number,
    zones: any[]
  ): Promise<FareBreakdown> {
    console.log('=== CALCULATING REGULAR FARE ===');
    console.log('Vehicle Type:', vehicleType);
    console.log('Actual Distance:', actualDistanceKm, 'km');
    console.log('Actual Duration:', actualDurationMinutes, 'minutes');
    console.log('Zones parameter received:', {
      isArray: Array.isArray(zones),
      length: zones?.length || 0,
      zones: zones
    });

    // Debug: Check what we're searching for
    console.log('=== FARE MATRIX QUERY DEBUG ===');
    console.log('Searching for fare matrix with:');
    console.log('- booking_type:', 'regular');
    console.log('- vehicle_type:', vehicleType);
    console.log('- is_active:', true);

    // Get fare matrix for regular rides using RPC
    console.log('🔍 Fetching fare matrix for regular rides using RPC...');

    const { data: fareMatrixData, error } = await supabase
      .rpc('get_fare_matrix_for_calculation', {
        p_booking_type: 'regular',
        p_vehicle_type: vehicleType
      });

    console.log('=== RPC QUERY RESULT ===');
    console.log('Query error:', error);
    console.log('Query result:', fareMatrixData);
    console.log('Number of records found:', fareMatrixData?.length || 0);

    if (error) {
      console.error('Error fetching fare matrix:', error);
      throw new Error('Fare configuration not found');
    }

    if (!fareMatrixData || fareMatrixData.length === 0) {
      console.error('❌ No fare matrix found for:', { booking_type: 'regular', vehicle_type: vehicleType });
      throw new Error('Fare configuration not found for this vehicle type');
    }

    const fareMatrix = fareMatrixData[0];

    console.log('=== FOUND FARE MATRIX RECORD ===');
    console.log('Raw fareMatrix object:', JSON.stringify(fareMatrix, null, 2));
    
    console.log('✅ Fare matrix loaded:', {
      base_fare: fareMatrix.base_fare,
      per_km_rate: fareMatrix.per_km_rate,
      surge_multiplier: fareMatrix.surge_multiplier,
      platform_fee: fareMatrix.platform_fee
    });

    // CRITICAL DEBUG: Inspect the exact platform_fee value from database
    console.log('=== PLATFORM FEE ROOT CAUSE DEBUG ===');
    console.log('Raw fareMatrix.platform_fee from database:', fareMatrix.platform_fee);
    console.log('Type of fareMatrix.platform_fee:', typeof fareMatrix.platform_fee);
    console.log('String representation:', String(fareMatrix.platform_fee));
    console.log('JSON.stringify representation:', JSON.stringify(fareMatrix.platform_fee));
    console.log('Is null?', fareMatrix.platform_fee === null);
    console.log('Is undefined?', fareMatrix.platform_fee === undefined);
    console.log('Is empty string?', fareMatrix.platform_fee === '');
    console.log('Number() conversion:', Number(fareMatrix.platform_fee));
    console.log('parseFloat() conversion:', parseFloat(fareMatrix.platform_fee));
    console.log('parseInt() conversion:', parseInt(fareMatrix.platform_fee));
    console.log('Is Number() result NaN?', isNaN(Number(fareMatrix.platform_fee)));
    console.log('Is parseFloat() result NaN?', isNaN(parseFloat(fareMatrix.platform_fee)));

    // Add comprehensive debugging for platform fee
    console.log('=== RAW FARE MATRIX OBJECT ===');
    console.log('Raw fareMatrix object:', JSON.stringify(fareMatrix, null, 2));
    console.log('typeof fareMatrix.platform_fee:', typeof fareMatrix.platform_fee);
    console.log('fareMatrix.platform_fee value:', fareMatrix.platform_fee);
    
    // Get platform fee with proper NaN handling
    const rawPlatformFee = fareMatrix.platform_fee;
    console.log('Raw platform fee from database:', rawPlatformFee);
    console.log('Type of raw platform fee:', typeof rawPlatformFee);
    console.log('Is raw platform fee NaN?', isNaN(Number(rawPlatformFee)));
    
    // Try multiple conversion methods to see which one works
    const numberConversion = Number(rawPlatformFee);
    const parseFloatConversion = parseFloat(rawPlatformFee);
    const directAssignment = rawPlatformFee;
    
    console.log('=== CONVERSION ATTEMPTS ===');
    console.log('Number() result:', numberConversion, 'isNaN:', isNaN(numberConversion));
    console.log('parseFloat() result:', parseFloatConversion, 'isNaN:', isNaN(parseFloatConversion));
    console.log('Direct assignment:', directAssignment, 'type:', typeof directAssignment);
    
    // Use the most reliable conversion method
    let platformFee;
    if (!isNaN(parseFloatConversion)) {
      platformFee = parseFloatConversion;
      console.log('✅ Using parseFloat conversion:', platformFee);
    } else if (!isNaN(numberConversion)) {
      platformFee = numberConversion;
      console.log('✅ Using Number conversion:', platformFee);
    } else if (typeof directAssignment === 'number' && !isNaN(directAssignment)) {
      platformFee = directAssignment;
      console.log('✅ Using direct assignment:', platformFee);
    } else {
      platformFee = 10; // Fallback
      console.log('⚠️ Using fallback value:', platformFee);
    }
    
    console.log('Platform fee after NaN check:', platformFee);
    console.log('Type of final platform fee:', typeof platformFee);
    console.log('Is final platform fee NaN?', isNaN(platformFee));

    const baseFare = Number(fareMatrix.base_fare) || 0;
    const baseKmIncluded = 3; // Base fare includes 3km
    const perKmRate = Number(fareMatrix.per_km_rate) || 0;
    const surgeMultiplier = Number(fareMatrix.surge_multiplier) || 1;
    
    console.log('=== FARE COMPONENTS DEBUG ===');
    console.log('baseFare:', baseFare, 'type:', typeof baseFare, 'isNaN:', isNaN(baseFare));
    console.log('perKmRate:', perKmRate, 'type:', typeof perKmRate, 'isNaN:', isNaN(perKmRate));
    console.log('surgeMultiplier:', surgeMultiplier, 'type:', typeof surgeMultiplier, 'isNaN:', isNaN(surgeMultiplier));
    console.log('platformFee:', platformFee, 'type:', typeof platformFee, 'isNaN:', isNaN(platformFee));

    // Calculate distance fare (only for km beyond 4km base inclusion)
    const extraKm = Math.max(0, actualDistanceKm - baseKmIncluded);
    const distanceFare = extraKm * perKmRate;
    
    console.log('📏 Distance calculation:', {
      actualDistanceKm,
      baseKmIncluded,
      extraKm,
      perKmRate,
      distanceFare
    });

    // Calculate deadhead charges using proper zone detection
    // Only apply if driver actually traveled (distance > 0.5 km)
    console.log('🎯 About to calculate deadhead charges with params:', {
      actualDistanceKm,
      dropLat,
      dropLng,
      perKmRate,
      zonesCount: zones?.length || 0
    });

    const deadheadResult = this.calculateDeadheadCharges(dropLat, dropLng, perKmRate, zones, actualDistanceKm);
    const deadheadCharges = Number(deadheadResult.deadheadCharges) || 0;

    console.log('🎯 Deadhead charges result:', {
      deadheadCharges,
      rawDeadheadCharges: deadheadResult.deadheadCharges,
      type: typeof deadheadCharges,
      isNaN: isNaN(deadheadCharges),
      zoneDetected: deadheadResult.zoneDetected,
      isInnerZone: deadheadResult.isInnerZone
    });
    
    // Calculate surge charges
    const subtotalBeforeSurge = baseFare + distanceFare + deadheadCharges;
    const surgeCharges = subtotalBeforeSurge * (surgeMultiplier - 1);

    console.log('💰 Surge calculation:', {
      subtotalBeforeSurge,
      type: typeof subtotalBeforeSurge,
      isNaN: isNaN(subtotalBeforeSurge),
      surgeMultiplier,
      surgeCharges,
      surgeChargesType: typeof surgeCharges,
      surgeChargesIsNaN: isNaN(surgeCharges)
    });

    // Ensure all components are valid numbers before further calculations
    const validBaseFare = isNaN(baseFare) ? 0 : baseFare;
    const validDistanceFare = isNaN(distanceFare) ? 0 : distanceFare;
    const validDeadheadCharges = isNaN(deadheadCharges) ? 0 : deadheadCharges;
    const validSurgeCharges = isNaN(surgeCharges) ? 0 : surgeCharges;
    const validPlatformFee = isNaN(platformFee) ? 10 : platformFee;

    console.log('=== VALIDATED COMPONENTS (BEFORE GST) ===');
    console.log('- validBaseFare:', validBaseFare);
    console.log('- validDistanceFare:', validDistanceFare);
    console.log('- validDeadheadCharges:', validDeadheadCharges);
    console.log('- validSurgeCharges:', validSurgeCharges);
    console.log('- validPlatformFee:', validPlatformFee);

    // Calculate GST on charges (excluding platform fee) - 5% GST
    const chargesSubtotal = validBaseFare + validDistanceFare + validDeadheadCharges + validSurgeCharges;
    const gstOnCharges = chargesSubtotal * 0.05; // 5% GST on ride charges

    console.log('💰 GST on charges calculation:', {
      chargesSubtotal,
      gstOnCharges,
      gstRate: '5%'
    });

    // Calculate GST on platform fee - 18% GST
    const gstOnPlatformFee = validPlatformFee * 0.18;
    console.log('GST on platform fee calculation:');
    console.log('- validPlatformFee for GST:', validPlatformFee, 'type:', typeof validPlatformFee, 'isNaN:', isNaN(validPlatformFee));
    console.log('- gstOnPlatformFee result:', gstOnPlatformFee, 'type:', typeof gstOnPlatformFee, 'isNaN:', isNaN(gstOnPlatformFee));

    const validGstOnCharges = isNaN(gstOnCharges) ? 0 : gstOnCharges;
    const validGstOnPlatformFee = isNaN(gstOnPlatformFee) ? 0 : gstOnPlatformFee;

    console.log('=== VALIDATED GST COMPONENTS ===');
    console.log('- validGstOnCharges:', validGstOnCharges);
    console.log('- validGstOnPlatformFee:', validGstOnPlatformFee);

    // Calculate total fare and round to 2 decimal places
    const totalFareRaw = validBaseFare + validDistanceFare + validDeadheadCharges + validSurgeCharges + validPlatformFee + validGstOnCharges + validGstOnPlatformFee;
    const totalFare = this.roundFare(totalFareRaw);

    console.log('=== FINAL TOTAL FARE ===');
    console.log('totalFare raw:', totalFareRaw, 'rounded:', totalFare, 'type:', typeof totalFare, 'isNaN:', isNaN(totalFare));
    
    console.log('💰 Regular fare breakdown:', {
      baseFare: validBaseFare,
      distanceFare: validDistanceFare,
      deadheadCharges: validDeadheadCharges,
      surgeCharges: validSurgeCharges,
      platformFee: validPlatformFee,
      gstOnCharges: validGstOnCharges,
      gstOnPlatformFee: validGstOnPlatformFee,
      totalFare,
    });

    return {
      booking_type: 'regular',
      vehicle_type: vehicleType,
      base_fare: validBaseFare,
      distance_fare: validDistanceFare,
      time_fare: 0,
      surge_charges: validSurgeCharges,
      deadhead_charges: validDeadheadCharges,
      platform_fee: validPlatformFee,
      gst_on_charges: validGstOnCharges,
      gst_on_platform_fee: validGstOnPlatformFee,
      extra_km_charges: 0,
      driver_allowance: 0,
      total_fare: totalFare,
      details: {
        actual_distance_km: actualDistanceKm,
        actual_duration_minutes: actualDurationMinutes,
        base_km_included: baseKmIncluded,
        extra_km: extraKm,
        per_km_rate: isNaN(perKmRate) ? 0 : perKmRate,
        surge_multiplier: isNaN(surgeMultiplier) ? 1 : surgeMultiplier,
        platform_fee_flat: validPlatformFee,
        zone_detected: deadheadResult.zoneDetected,
        is_inner_zone: deadheadResult.isInnerZone,
        minimum_fare: isNaN(Number(fareMatrix.minimum_fare)) ? 0 : Number(fareMatrix.minimum_fare)
      }
    };
  }

  /**
   * Rental ride fare calculation - using actual distance and duration
   * Includes logic to add distance from drop-off to Hosur bus stand
   */
  private static async calculateRentalFare(
    vehicleType: string,
    actualDistanceKm: number,
    actualDurationMinutes: number,
    selectedHours: number,
    dropLat: number,
    dropLng: number
  ): Promise<FareBreakdown> {
    console.log('=== CALCULATING RENTAL FARE (AUTO-SELECT PACKAGE BASED ON GPS) ===');
    console.log('Vehicle Type:', vehicleType);
    console.log('Selected Hours (from booking):', selectedHours);
    console.log('Actual GPS Distance:', actualDistanceKm, 'km');
    console.log('Actual GPS Duration:', actualDurationMinutes, 'minutes (', (actualDurationMinutes / 60).toFixed(2), 'hours)');

    // Hosur bus stand coordinates
    const hosurBusStand = { lat: 12.7401984, lng: 77.824 };

    // Calculate distance from drop-off point to Hosur bus stand
    const distanceToHosur = calculateDistance(
      { latitude: dropLat, longitude: dropLng },
      { latitude: hosurBusStand.lat, longitude: hosurBusStand.lng }
    );

    // Total distance including return to Hosur bus stand
    const totalDistanceWithReturn = actualDistanceKm + distanceToHosur;
    const actualDurationHours = actualDurationMinutes / 60;

    console.log('📍 Distance calculation:', {
      actual_distance: actualDistanceKm,
      distance_to_hosur: distanceToHosur,
      total_with_return: totalDistanceWithReturn,
      actual_duration_hours: actualDurationHours.toFixed(2)
    });

    // Get ALL rental packages for this vehicle type
    const { data: allRentalFares, error } = await supabase
      .from('rental_fares')
      .select('*')
      .eq('vehicle_type', vehicleType)
      .eq('is_active', true)
      .order('duration_hours', { ascending: true });

    if (error || !allRentalFares || allRentalFares.length === 0) {
      console.error('Error fetching rental fares:', error);
      throw new Error(`No rental packages found for ${vehicleType}`);
    }

    console.log('📦 Available rental packages:', allRentalFares.map(f => ({
      package: f.package_name,
      hours: f.duration_hours,
      km: f.km_included,
      base_fare: f.base_fare
    })));

    // Find the best matching package based on actual usage
    // Package must cover both distance AND time
    let bestPackage = null;
    let minimumCost = Infinity;

    for (const pkg of allRentalFares) {
      const packageHours = pkg.duration_hours;
      const packageKm = pkg.km_included;
      const baseFare = pkg.base_fare;
      const extraKmRate = pkg.extra_km_rate;
      const extraMinuteRate = pkg.extra_minute_rate || 0;

      // Calculate extra charges for this package
      let extraKmCharges = 0;
      if (totalDistanceWithReturn > packageKm) {
        extraKmCharges = (totalDistanceWithReturn - packageKm) * extraKmRate;
      }

      let extraTimeCharges = 0;
      const packageMinutes = packageHours * 60;
      if (actualDurationMinutes > packageMinutes) {
        extraTimeCharges = (actualDurationMinutes - packageMinutes) * extraMinuteRate;
      }

      const totalCost = baseFare + extraKmCharges + extraTimeCharges;

      console.log(`📊 Package ${pkg.package_name}:`, {
        hours: packageHours,
        km: packageKm,
        base_fare: baseFare,
        extra_km: totalDistanceWithReturn > packageKm ? totalDistanceWithReturn - packageKm : 0,
        extra_km_charges: extraKmCharges,
        extra_time: actualDurationMinutes > packageMinutes ? actualDurationMinutes - packageMinutes : 0,
        extra_time_charges: extraTimeCharges,
        total_cost: totalCost
      });

      // Select package with minimum total cost
      if (totalCost < minimumCost) {
        minimumCost = totalCost;
        bestPackage = pkg;
      }
    }

    if (!bestPackage) {
      console.error('❌ Could not find suitable package');
      throw new Error('No suitable rental package found');
    }

    console.log('✅ BEST PACKAGE SELECTED:', {
      package_name: bestPackage.package_name,
      duration_hours: bestPackage.duration_hours,
      km_included: bestPackage.km_included,
      base_fare: bestPackage.base_fare,
      total_cost: minimumCost,
      reason: 'Minimum total cost including base + extra km + extra time'
    });

    const rentalFare = bestPackage;
    const baseFare = rentalFare.base_fare;
    const kmIncluded = rentalFare.km_included;
    const extraKmRate = rentalFare.extra_km_rate;
    const extraMinuteRate = rentalFare.extra_minute_rate || 0;
    const packageHours = rentalFare.duration_hours;

    // Calculate extra KM charges based on total distance (actual + return to Hosur)
    let extraKmCharges = 0;
    let extraKm = 0;
    if (totalDistanceWithReturn > kmIncluded) {
      extraKm = totalDistanceWithReturn - kmIncluded;
      extraKmCharges = extraKm * extraKmRate;
      console.log('⚠️ Extra distance charges (including return to Hosur):', {
        total_distance_with_return: totalDistanceWithReturn,
        km_included: kmIncluded,
        extra_km: extraKm,
        extra_km_rate: extraKmRate,
        extra_km_charges: extraKmCharges
      });
    } else {
      console.log('✅ Total distance (including return to Hosur) within package allowance');
    }

    // Calculate extra time charges based on ACTUAL duration
    let extraTimeCharges = 0;
    let extraMinutes = 0;
    const packageMinutes = packageHours * 60;
    if (actualDurationMinutes > packageMinutes) {
      extraMinutes = actualDurationMinutes - packageMinutes;
      extraTimeCharges = extraMinutes * extraMinuteRate;
      console.log('⚠️ Extra time charges:', {
        actual_duration_minutes: actualDurationMinutes,
        package_minutes: packageMinutes,
        extra_minutes: extraMinutes,
        extra_minute_rate: extraMinuteRate,
        extra_time_charges: extraTimeCharges
      });
    } else {
      console.log('✅ Duration within package allowance');
    }

    // Get platform fee from fare matrix
    const { data: fareMatrix } = await supabase
      .from('fare_matrix')
      .select('platform_fee')
      .eq('booking_type', 'rental')
      .eq('vehicle_type', vehicleType)
      .eq('is_active', true)
      .maybeSingle();

    const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '20');

    // Calculate GST on charges (base fare + extra charges)
    const chargesSubtotal = baseFare + extraKmCharges + extraTimeCharges;
    const gstOnCharges = chargesSubtotal * 0.05; // 5% GST

    // Calculate GST on platform fee
    const gstOnPlatformFee = platformFee * 0.18; // 18% GST

    const withinAllowance = extraKmCharges === 0 && extraTimeCharges === 0;
    const totalFareRaw = baseFare + extraKmCharges + extraTimeCharges + platformFee + gstOnCharges + gstOnPlatformFee;
    const totalFare = this.roundFare(totalFareRaw);

    console.log('💰 Rental fare breakdown (actual usage):', {
      baseFare,
      extraKmCharges,
      extraTimeCharges,
      platformFee,
      gstOnCharges,
      gstOnPlatformFee,
      totalFareRaw,
      totalFare,
      withinAllowance
    });

    return {
      booking_type: 'rental',
      vehicle_type: vehicleType,
      base_fare: baseFare,
      distance_fare: extraKmCharges,
      time_fare: extraTimeCharges,
      surge_charges: 0,
      deadhead_charges: 0,
      platform_fee: platformFee,
      gst_on_charges: gstOnCharges,
      gst_on_platform_fee: gstOnPlatformFee,
      extra_km_charges: extraKmCharges,
      driver_allowance: 0,
      total_fare: totalFare,
      details: {
        actual_distance_km: actualDistanceKm,
        actual_duration_minutes: actualDurationMinutes,
        base_km_included: kmIncluded,
        extra_km: extraKm,
        per_km_rate: extraKmRate,
        per_minute_rate: extraMinuteRate,
        within_allowance: withinAllowance,
        package_name: rentalFare.package_name,
        distance_to_hosur_bus_stand: distanceToHosur,
        total_distance_with_return: totalDistanceWithReturn
      }
    };
  }

  /**
   * Outstation ride fare calculation
   */
  private static async calculateOutstationFare(
    vehicleType: string,
    actualDistanceKm: number,
    actualDurationMinutes: number,
    scheduledTime: string | null,
    tripType: 'one_way' | 'round_trip'
  ): Promise<FareBreakdown> {
    console.log('=== CALCULATING OUTSTATION FARE ===');
    console.log('Vehicle Type:', vehicleType);
    console.log('Trip Type:', tripType);
    console.log('Actual GPS-tracked Distance:', actualDistanceKm, 'km');
    console.log('Actual Duration:', actualDurationMinutes, 'minutes');

    // Calculate number of days from actual trip duration
    const durationHours = actualDurationMinutes / 60;
    const numberOfDays = Math.max(1, Math.ceil(durationHours / 24));

    console.log('📅 Trip duration calculation:', {
      actualDurationMinutes,
      durationHours: durationHours.toFixed(2),
      numberOfDays,
      tripType,
      calculation: `${actualDurationMinutes} min / 60 = ${durationHours.toFixed(2)} hours, ceil(${durationHours.toFixed(2)} / 24) = ${numberOfDays} days`
    });

    // ONE-WAY TRIP LOGIC
    if (tripType === 'one_way') {
      console.log('🛣️ ONE-WAY TRIP CALCULATION');

      // For one-way trips, double the GPS distance for billing
      // E.g., 50km GPS distance = 100km billing distance
      const billingDistance = actualDistanceKm * 2;

      console.log('📏 One-way distance calculation:', {
        actualGpsDistance: actualDistanceKm,
        billingDistance,
        calculation: `${actualDistanceKm} km (GPS) × 2 = ${billingDistance} km (billing)`
      });

      // Try to use slab system for one-way trips (same as round trip logic)
      const { data: slabPackages, error: slabError } = await supabase
        .from('outstation_packages')
        .select('*')
        .eq('vehicle_type', vehicleType)
        .eq('is_active', true)
        .eq('use_slab_system', true)
        .order('created_at', { ascending: false })
        .limit(1);

      if (slabError || !slabPackages || slabPackages.length === 0) {
        console.error('⚠️ Slab package not found for one-way trip, using fallback');

        // Fallback: use per-km rate from outstation_fares
        const { data: outstationFares, error } = await supabase
          .from('outstation_fares')
          .select('*')
          .eq('vehicle_type', vehicleType)
          .eq('is_active', true)
          .order('created_at', { ascending: false })
          .limit(1);

        if (error || !outstationFares || outstationFares.length === 0) {
          throw new Error(`Outstation fare configuration not found for ${vehicleType} vehicle`);
        }

        const outstationConfig = outstationFares[0];
        const baseFare = outstationConfig.base_fare;
        const perKmRate = outstationConfig.per_km_rate;

        const kmFare = billingDistance * perKmRate;

        const { data: fareMatrix } = await supabase
          .from('fare_matrix')
          .select('platform_fee')
          .eq('booking_type', 'outstation')
          .eq('vehicle_type', vehicleType)
          .eq('is_active', true)
          .single();

        const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '10');
        const chargesSubtotal = baseFare + kmFare;
        const gstOnCharges = chargesSubtotal * 0.05;
        const gstOnPlatformFee = platformFee * 0.18;
        const totalFareRaw = baseFare + kmFare + platformFee + gstOnCharges + gstOnPlatformFee;
        const totalFare = this.roundFare(totalFareRaw);

        console.log('💰 ONE-WAY FALLBACK CALCULATION (no slabs):', {
          baseFare,
          billingDistance,
          perKmRate,
          kmFare,
          platformFee,
          totalFare
        });

        return {
          booking_type: 'outstation',
          vehicle_type: vehicleType,
          base_fare: baseFare,
          distance_fare: kmFare,
          time_fare: 0,
          surge_charges: 0,
          deadhead_charges: 0,
          platform_fee: platformFee,
          gst_on_charges: gstOnCharges,
          gst_on_platform_fee: gstOnPlatformFee,
          extra_km_charges: 0,
          driver_allowance: 0,
          total_fare: totalFare,
          details: {
            actual_distance_km: actualDistanceKm,
            actual_duration_minutes: actualDurationMinutes,
            per_km_rate: perKmRate,
            days_calculated: numberOfDays,
            within_allowance: true,
            total_km_travelled: actualDistanceKm,
            billing_distance: billingDistance,
            direction: 'one_way',
            pricing_method: 'PER_KM'
          }
        };
      }

      // Use slab system for one-way trip
      const slabPackage = slabPackages[0];
      const slabs = [
        { distance: 10, maxRoundTripKm: 20, fare: slabPackage.slab_10km },
        { distance: 20, maxRoundTripKm: 40, fare: slabPackage.slab_20km },
        { distance: 30, maxRoundTripKm: 60, fare: slabPackage.slab_30km },
        { distance: 40, maxRoundTripKm: 80, fare: slabPackage.slab_40km },
        { distance: 50, maxRoundTripKm: 100, fare: slabPackage.slab_50km },
        { distance: 60, maxRoundTripKm: 120, fare: slabPackage.slab_60km },
        { distance: 70, maxRoundTripKm: 140, fare: slabPackage.slab_70km },
        { distance: 80, maxRoundTripKm: 160, fare: slabPackage.slab_80km },
        { distance: 90, maxRoundTripKm: 180, fare: slabPackage.slab_90km },
        { distance: 100, maxRoundTripKm: 200, fare: slabPackage.slab_100km },
        { distance: 110, maxRoundTripKm: 220, fare: slabPackage.slab_110km },
        { distance: 120, maxRoundTripKm: 240, fare: slabPackage.slab_120km },
        { distance: 130, maxRoundTripKm: 260, fare: slabPackage.slab_130km },
        { distance: 140, maxRoundTripKm: 280, fare: slabPackage.slab_140km },
        { distance: 150, maxRoundTripKm: 300, fare: slabPackage.slab_150km }
      ];

      console.log('🔍 Slab selection for one-way billing distance:', billingDistance, 'km');

      // Find slab based on billing distance (actual GPS × 2)
      const selectedSlab = slabs.find(s => billingDistance <= s.maxRoundTripKm) || slabs[slabs.length - 1];

      console.log('✅ Selected slab:', {
        slabName: `${selectedSlab.distance}km slab`,
        coversUpTo: `${selectedSlab.maxRoundTripKm}km`,
        actualGpsDistance: actualDistanceKm,
        billingDistance,
        slabFare: selectedSlab.fare
      });

      const slabFare = parseFloat(selectedSlab.fare?.toString() || '0');
      const extraKm = Math.max(0, billingDistance - selectedSlab.maxRoundTripKm);
      const extraKmCharges = extraKm > 0 ? extraKm * parseFloat(slabPackage.extra_km_rate?.toString() || '0') : 0;

      const { data: fareMatrix } = await supabase
        .from('fare_matrix')
        .select('platform_fee')
        .eq('booking_type', 'outstation')
        .eq('vehicle_type', vehicleType)
        .eq('is_active', true)
        .single();

      const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '10');
      const chargesSubtotal = slabFare + extraKmCharges;
      const gstOnCharges = chargesSubtotal * 0.05;
      const gstOnPlatformFee = platformFee * 0.18;
      const totalFareRaw = slabFare + extraKmCharges + platformFee + gstOnCharges + gstOnPlatformFee;
      const totalFare = this.roundFare(totalFareRaw);

      console.log('💰 ONE-WAY SLAB CALCULATION:', {
        selectedSlab: `${selectedSlab.distance}km slab (covers up to ${selectedSlab.maxRoundTripKm}km)`,
        actualGpsDistance: actualDistanceKm,
        billingDistance,
        slabFare,
        extraKm,
        extraKmRate: slabPackage.extra_km_rate,
        extraKmCharges,
        platformFee,
        gstOnCharges,
        gstOnPlatformFee,
        totalFareRaw,
        totalFare,
        note: 'One-way trip: GPS distance × 2 for billing, then apply slab'
      });

      return {
        booking_type: 'outstation',
        vehicle_type: vehicleType,
        base_fare: slabFare,
        distance_fare: 0,
        time_fare: 0,
        surge_charges: 0,
        deadhead_charges: 0,
        platform_fee: platformFee,
        gst_on_charges: gstOnCharges,
        gst_on_platform_fee: gstOnPlatformFee,
        extra_km_charges: extraKmCharges,
        driver_allowance: 0,
        total_fare: totalFare,
        details: {
          actual_distance_km: actualDistanceKm,
          actual_duration_minutes: actualDurationMinutes,
          per_km_rate: parseFloat(slabPackage.extra_km_rate?.toString() || '0'),
          days_calculated: numberOfDays,
          within_allowance: extraKm === 0,
          package_name: `${selectedSlab.distance}km Slab (covers up to ${selectedSlab.maxRoundTripKm}km)`,
          extra_km: extraKm,
          base_km_included: selectedSlab.maxRoundTripKm,
          slab_fare: slabFare,
          billing_distance: billingDistance,
          total_km_travelled: actualDistanceKm,
          direction: 'one_way',
          pricing_method: 'SLAB'
        }
      };
    }

    // ROUND TRIP LOGIC
    console.log('🔄 ROUND TRIP CALCULATION');
    const isSameDayTrip = numberOfDays === 1;
    // For round trip: actualDistanceKm is the total GPS-tracked distance (both ways)
    // Slabs apply when round trip distance ≤ 300km (i.e., one-way ≤ 150km)
    const useSlab = isSameDayTrip && actualDistanceKm <= 300;

    console.log('🔍 Fare calculation method decision:', {
      isSameDayTrip,
      actualDistanceKm,
      roundTripThreshold: 300,
      useSlab,
      method: useSlab ? 'SLAB SYSTEM' : 'PER-KM SYSTEM'
    });

    if (useSlab) {
      const { data: slabPackages, error: slabError } = await supabase
        .from('outstation_packages')
        .select('*')
        .eq('vehicle_type', vehicleType)
        .eq('is_active', true)
        .eq('use_slab_system', true)
        .order('created_at', { ascending: false })
        .limit(1);

      if (slabError || !slabPackages || slabPackages.length === 0) {
        console.error('⚠️ Slab package not found, falling back to per-km');
      } else {
        const slabPackage = slabPackages[0];

        // Slabs are defined for one-way distance but cover round trip
        // E.g., "10km Slab" = up to 20km round trip, "50km Slab" = up to 100km round trip
        // The slab name represents the one-way distance, and maxRoundTripKm is the total coverage
        const slabs = [
          { distance: 10, maxRoundTripKm: 20, fare: slabPackage.slab_10km },
          { distance: 20, maxRoundTripKm: 40, fare: slabPackage.slab_20km },
          { distance: 30, maxRoundTripKm: 60, fare: slabPackage.slab_30km },
          { distance: 40, maxRoundTripKm: 80, fare: slabPackage.slab_40km },
          { distance: 50, maxRoundTripKm: 100, fare: slabPackage.slab_50km },
          { distance: 60, maxRoundTripKm: 120, fare: slabPackage.slab_60km },
          { distance: 70, maxRoundTripKm: 140, fare: slabPackage.slab_70km },
          { distance: 80, maxRoundTripKm: 160, fare: slabPackage.slab_80km },
          { distance: 90, maxRoundTripKm: 180, fare: slabPackage.slab_90km },
          { distance: 100, maxRoundTripKm: 200, fare: slabPackage.slab_100km },
          { distance: 110, maxRoundTripKm: 220, fare: slabPackage.slab_110km },
          { distance: 120, maxRoundTripKm: 240, fare: slabPackage.slab_120km },
          { distance: 130, maxRoundTripKm: 260, fare: slabPackage.slab_130km },
          { distance: 140, maxRoundTripKm: 280, fare: slabPackage.slab_140km },
          { distance: 150, maxRoundTripKm: 300, fare: slabPackage.slab_150km }
        ];

        console.log('🔍 Slab selection for round trip distance:', actualDistanceKm, 'km');

        // Find the appropriate slab where the total round trip distance fits
        // For 87km round trip: should select 50km slab (covers up to 100km)
        // Logic: Find first slab where actualDistanceKm <= maxRoundTripKm
        const totalKmTravelled = actualDistanceKm;
        const selectedSlab = slabs.find(s => totalKmTravelled <= s.maxRoundTripKm) || slabs[slabs.length - 1];

        console.log('✅ Selected slab:', {
          slabName: `${selectedSlab.distance}km slab`,
          coversUpTo: `${selectedSlab.maxRoundTripKm}km round trip`,
          actualDistance: totalKmTravelled,
          slabFare: selectedSlab.fare
        });

        const slabFare = parseFloat(selectedSlab.fare?.toString() || '0');
        // No extra km charges within slab range - slab fare covers the full round trip
        const extraKm = Math.max(0, actualDistanceKm - selectedSlab.maxRoundTripKm);
        const extraKmCharges = extraKm > 0 ? extraKm * parseFloat(slabPackage.extra_km_rate?.toString() || '0') : 0;

        // Get platform fee from fare matrix
        const { data: fareMatrix } = await supabase
          .from('fare_matrix')
          .select('platform_fee')
          .eq('booking_type', 'outstation')
          .eq('vehicle_type', vehicleType)
          .eq('is_active', true)
          .single();

        const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '10');

        // Calculate GST
        const chargesSubtotal = slabFare + extraKmCharges;
        const gstOnCharges = chargesSubtotal * 0.05; // 5% GST
        const gstOnPlatformFee = platformFee * 0.18; // 18% GST

        const totalFareRaw = slabFare + extraKmCharges + platformFee + gstOnCharges + gstOnPlatformFee;
        const totalFare = this.roundFare(totalFareRaw);

        console.log('💰 SLAB CALCULATION:', {
          selectedSlab: `${selectedSlab.distance}km one-way (${selectedSlab.maxRoundTripKm}km round trip)`,
          actualRoundTripDistance: actualDistanceKm,
          slabFare,
          extraKm,
          extraKmRate: slabPackage.extra_km_rate,
          extraKmCharges,
          platformFee,
          gstOnCharges,
          gstOnPlatformFee,
          totalFareRaw,
          totalFare,
          note: 'Slab fare covers full round trip within limit. No per-km charges.'
        });

        return {
          booking_type: 'outstation',
          vehicle_type: vehicleType,
          base_fare: slabFare,
          distance_fare: 0,
          time_fare: 0,
          surge_charges: 0,
          deadhead_charges: 0,
          platform_fee: platformFee,
          gst_on_charges: gstOnCharges,
          gst_on_platform_fee: gstOnPlatformFee,
          extra_km_charges: extraKmCharges,
          driver_allowance: 0,
          total_fare: totalFare,
          details: {
            actual_distance_km: actualDistanceKm,
            actual_duration_minutes: actualDurationMinutes,
            per_km_rate: parseFloat(slabPackage.extra_km_rate?.toString() || '0'),
            days_calculated: 1,
            within_allowance: extraKm === 0,
            package_name: `${selectedSlab.distance}km Slab (covers up to ${selectedSlab.maxRoundTripKm}km round trip)`,
            extra_km: extraKm,
            base_km_included: selectedSlab.maxRoundTripKm,
            slab_fare: slabFare,
            pricing_method: 'SLAB',
            total_km_travelled: actualDistanceKm
          }
        };
      }
    }

    const { data: outstationFares, error } = await supabase
      .from('outstation_fares')
      .select('*')
      .eq('vehicle_type', vehicleType)
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1);

    if (error || !outstationFares || outstationFares.length === 0) {
      console.error('Error fetching outstation fare:', error);
      throw new Error('Outstation fare configuration not found');
    }

    const outstationConfig = outstationFares[0];
    const baseFare = outstationConfig.base_fare;
    const perKmRate = outstationConfig.per_km_rate;
    const driverAllowancePerDay = outstationConfig.driver_allowance_per_day;
    const dailyKmLimit = outstationConfig.daily_km_limit;

    console.log('✅ Per-KM config loaded:', {
      base_fare: baseFare,
      per_km_rate: perKmRate,
      driver_allowance_per_day: driverAllowancePerDay,
      daily_km_limit: dailyKmLimit
    });

    // ROUND TRIP: Total KM travelled is the actual distance
    const totalKmTravelled = actualDistanceKm;
    const totalKmAllowance = dailyKmLimit * numberOfDays;
    const driverAllowance = numberOfDays * driverAllowancePerDay;

    console.log('🚗 Round Trip distance calculation:', {
      actualGPSDistance: actualDistanceKm,
      totalKmTravelled,
      dailyKmLimit,
      numberOfDays,
      totalKmAllowance,
      driverAllowance
    });

    let kmFare = 0;
    let withinAllowance = true;

    if (totalKmTravelled <= totalKmAllowance) {
      // Within allowance: dailyKmLimit × numberOfDays × perKmRate + driverAllowance × numberOfDays
      kmFare = dailyKmLimit * numberOfDays * perKmRate;
      withinAllowance = true;
      console.log('✅ Within daily allowance:', {
        kmFare,
        calculation: `${dailyKmLimit} × ${numberOfDays} × ${perKmRate} = ${kmFare}`,
        driverAllowance,
        allowanceCalculation: `${driverAllowancePerDay} × ${numberOfDays} = ${driverAllowance}`
      });
    } else {
      // Exceeds allowance: totalKmTravelled × perKmRate + driverAllowance × numberOfDays
      kmFare = totalKmTravelled * perKmRate;
      withinAllowance = false;
      console.log('⚠️ Exceeds daily allowance:', {
        kmFare,
        calculation: `${totalKmTravelled} × ${perKmRate} = ${kmFare}`,
        driverAllowance,
        allowanceCalculation: `${driverAllowancePerDay} × ${numberOfDays} = ${driverAllowance}`,
        extraKm: totalKmTravelled - totalKmAllowance
      });
    }

    // Get platform fee from fare matrix
    const { data: fareMatrix } = await supabase
      .from('fare_matrix')
      .select('platform_fee')
      .eq('booking_type', 'outstation')
      .eq('vehicle_type', vehicleType)
      .eq('is_active', true)
      .single();

    const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '10');

    // Calculate GST
    const chargesSubtotal = baseFare + kmFare + driverAllowance;
    const gstOnCharges = chargesSubtotal * 0.05; // 5% GST
    const gstOnPlatformFee = platformFee * 0.18; // 18% GST

    const totalFareRaw = baseFare + kmFare + driverAllowance + platformFee + gstOnCharges + gstOnPlatformFee;
    const totalFare = this.roundFare(totalFareRaw);

    console.log('💰 ROUND TRIP fare breakdown:', {
      baseFare,
      kmFare,
      driverAllowance,
      platformFee,
      gstOnCharges,
      gstOnPlatformFee,
      totalFareRaw,
      totalFare,
      withinAllowance,
      calculation: `${baseFare} + ${kmFare} + ${driverAllowance} + ${platformFee} + ${gstOnCharges} + ${gstOnPlatformFee} = ${totalFare}`
    });

    return {
      booking_type: 'outstation',
      vehicle_type: vehicleType,
      base_fare: baseFare,
      distance_fare: kmFare,
      time_fare: 0,
      surge_charges: 0,
      deadhead_charges: 0,
      platform_fee: platformFee,
      gst_on_charges: gstOnCharges,
      gst_on_platform_fee: gstOnPlatformFee,
      extra_km_charges: 0,
      driver_allowance: driverAllowance,
      total_fare: totalFare,
      details: {
        actual_distance_km: actualDistanceKm,
        actual_duration_minutes: actualDurationMinutes,
        per_km_rate: perKmRate,
        days_calculated: numberOfDays,
        daily_km_limit: dailyKmLimit,
        within_allowance: withinAllowance,
        total_km_travelled: totalKmTravelled,
        km_allowance: totalKmAllowance
      }
    };
  }

  /**
   * Airport ride fare calculation
   */
  private static async calculateAirportFare(
    vehicleType: string,
    pickupLat: number,
    pickupLng: number,
    dropLat: number,
    dropLng: number,
    actualDistanceKm?: number,
    actualDurationMinutes?: number
  ): Promise<FareBreakdown> {
    console.log('=== CALCULATING AIRPORT FARE ===');
    console.log('Vehicle Type:', vehicleType);
    console.log('Pickup coordinates:', pickupLat, pickupLng);
    console.log('Drop coordinates:', dropLat, dropLng);
    console.log('GPS Distance:', actualDistanceKm, 'km');
    console.log('GPS Duration:', actualDurationMinutes, 'minutes');

    // Get airport fare configuration
    const { data: airportFares, error } = await supabase
      .from('airport_fares')
      .select('*')
      .eq('vehicle_type', vehicleType)
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      console.error('Error fetching airport fare:', error);
      throw new Error(`Airport fare configuration error: ${error.message}`);
    }

    if (!airportFares || airportFares.length === 0) {
      console.error('❌ No airport fare found for:', {
        vehicle_type: vehicleType,
        is_active: true
      });
      throw new Error(`Airport fare configuration not found for ${vehicleType} vehicle`);
    }

    const airportConfig = airportFares[0];
    console.log('✅ Airport config loaded:', {
      hosur_to_airport_fare: airportConfig.hosur_to_airport_fare,
      airport_to_hosur_fare: airportConfig.airport_to_hosur_fare
    });
    
    // Determine direction based on coordinates
    // Define Hosur city center coordinates
    const cityCenter = { lat: 12.7401984, lng: 77.824 }; // Hosur center
    
    const pickupToCenter = calculateDistance(
      { latitude: pickupLat, longitude: pickupLng },
      { latitude: cityCenter.lat, longitude: cityCenter.lng }
    );
    const dropToCenter = calculateDistance(
      { latitude: dropLat, longitude: dropLng },
      { latitude: cityCenter.lat, longitude: cityCenter.lng }
    );
    
    const isHosurToAirport = pickupToCenter < dropToCenter;
    const fare = isHosurToAirport ? airportConfig.hosur_to_airport_fare : airportConfig.airport_to_hosur_fare;
    const direction = isHosurToAirport ? 'Hosur to Airport' : 'Airport to Hosur';
    
    console.log('🛫 Direction determination:', {
      pickupToCenter: pickupToCenter.toFixed(1) + 'km',
      dropToCenter: dropToCenter.toFixed(1) + 'km',
      direction,
      fare
    });

    // Get platform fee from fare matrix
    const { data: fareMatrix } = await supabase
      .from('fare_matrix')
      .select('platform_fee')
      .eq('booking_type', 'airport')
      .eq('vehicle_type', vehicleType)
      .eq('is_active', true)
      .maybeSingle();

    const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '20');

    // Determine which distance to use for fare calculation
    let distanceForFare: number;
    let distanceFare = 0;
    let perKmRate = 0;

    if (actualDistanceKm && actualDistanceKm > 0) {
      // Use GPS-tracked distance if available
      distanceForFare = actualDistanceKm;
      console.log('✅ Using GPS-tracked distance for fare calculation:', actualDistanceKm.toFixed(2), 'km');

      // Calculate per-km fare based on GPS distance
      // Use the fixed fare as a reference for 40km, calculate per-km rate
      const referenceDistance = 40; // km (typical airport distance)
      perKmRate = fare / referenceDistance;
      distanceFare = actualDistanceKm * perKmRate;

      console.log('💰 Dynamic airport fare calculation:', {
        referenceFare: fare,
        referenceDistance,
        perKmRate: perKmRate.toFixed(2),
        actualDistanceKm: actualDistanceKm.toFixed(2),
        calculatedDistanceFare: distanceFare.toFixed(2),
        calculation: `${actualDistanceKm.toFixed(2)} km × ₹${perKmRate.toFixed(2)}/km = ₹${distanceFare.toFixed(2)}`
      });
    } else {
      // Fallback to fixed package fare if GPS not available
      distanceForFare = calculateDistance(
        { latitude: pickupLat, longitude: pickupLng },
        { latitude: dropLat, longitude: dropLng }
      );
      distanceFare = fare;
      console.log('⚠️ GPS distance not available, using package fare:', fare);
    }

    // Calculate GST
    const gstOnCharges = distanceFare * 0.05; // 5% GST on distance fare
    const gstOnPlatformFee = platformFee * 0.18; // 18% GST on platform fee

    const totalFareRaw = distanceFare + platformFee + gstOnCharges + gstOnPlatformFee;
    const totalFare = this.roundFare(totalFareRaw);

    console.log('💰 Airport fare breakdown:', {
      direction,
      distanceForFare: distanceForFare.toFixed(2) + 'km',
      distanceFare: distanceFare.toFixed(2),
      perKmRate: perKmRate > 0 ? perKmRate.toFixed(2) : 'N/A',
      platformFee,
      gstOnCharges,
      gstOnPlatformFee,
      totalFareRaw,
      totalFare
    });

    return {
      booking_type: 'airport',
      vehicle_type: vehicleType,
      base_fare: 0,
      distance_fare: distanceFare,
      time_fare: 0,
      surge_charges: 0,
      deadhead_charges: 0,
      platform_fee: platformFee,
      gst_on_charges: gstOnCharges,
      gst_on_platform_fee: gstOnPlatformFee,
      extra_km_charges: 0,
      driver_allowance: 0,
      total_fare: totalFare,
      details: {
        actual_distance_km: actualDistanceKm || distanceForFare,
        actual_duration_minutes: actualDurationMinutes || 0,
        per_km_rate: perKmRate,
        direction: direction
      }
    };
  }

  /**
   * Calculate deadhead charges based on zone detection
   * Applies only for regular rides when drop-off is between inner and outer ring zones
   * AND when driver actually traveled (distance > 0.5 km)
   */
  private static calculateDeadheadCharges(
    dropLat: number,
    dropLng: number,
    perKmRate: number,
    zones: any[],
    actualDistanceKm: number
  ): { deadheadCharges: number; zoneDetected: string; isInnerZone: boolean } {
    console.log('=== CALCULATING DEADHEAD CHARGES ===');
    console.log('Actual Distance Traveled:', actualDistanceKm, 'km');
    console.log('Drop-off coordinates:', dropLat, dropLng);
    console.log('Per km rate:', perKmRate);
    console.log('Zones received:', zones?.length || 0);

    // Do NOT apply deadhead charges if driver barely moved (< 0.5 km)
    if (actualDistanceKm < 0.5) {
      console.log('⚠️ Driver did not travel significantly (< 0.5 km)');
      console.log('⚠️ NO DEADHEAD CHARGES will be applied');
      return {
        deadheadCharges: 0,
        zoneDetected: 'N/A - Stationary',
        isInnerZone: false
      };
    }

    if (zones && zones.length > 0) {
      console.log('Zone data received:');
      zones.forEach((zone, i) => {
        console.log(`  Zone ${i + 1}:`, {
          name: zone.name,
          center_latitude: zone.center_latitude,
          center_longitude: zone.center_longitude,
          radius_km: zone.radius_km,
          types: {
            center_lat_type: typeof zone.center_latitude,
            center_lng_type: typeof zone.center_longitude,
            radius_type: typeof zone.radius_km
          }
        });
      });
    } else {
      console.log('⚠️ NO ZONES DATA RECEIVED!');
    }

    // Hosur Bus Stand coordinates (hardcoded)
    const HOSUR_BUS_STAND = {
      lat: 12.7401984,
      lng: 77.824
    };

    // Find inner and outer zones
    const innerZone = zones?.find(zone =>
      zone.name.toLowerCase().includes('inner ring')
    );

    const outerZone = zones?.find(zone =>
      zone.name.toLowerCase().includes('outer ring')
    );

    console.log('Zone search results:', {
      innerZone: innerZone ? `Found: ${innerZone.name}` : 'NOT FOUND',
      outerZone: outerZone ? `Found: ${outerZone.name}` : 'NOT FOUND'
    });

    if (!innerZone || !outerZone) {
      console.log('⚠️ Inner or Outer ring zone not found in database, no deadhead charges applied');
      return { deadheadCharges: 0, zoneDetected: 'Unknown', isInnerZone: false };
    }

    // Parse zone data to ensure numeric values
    const innerRadiusKm = parseFloat(innerZone.radius_km?.toString() || '0');
    const outerRadiusKm = parseFloat(outerZone.radius_km?.toString() || '0');
    const innerCenterLat = parseFloat(innerZone.center_latitude?.toString() || '0');
    const innerCenterLng = parseFloat(innerZone.center_longitude?.toString() || '0');
    const outerCenterLat = parseFloat(outerZone.center_latitude?.toString() || '0');
    const outerCenterLng = parseFloat(outerZone.center_longitude?.toString() || '0');

    console.log('✅ Zones found:', {
      innerZone: {
        name: innerZone.name,
        center: [innerCenterLat, innerCenterLng],
        radius: innerRadiusKm + 'km'
      },
      outerZone: {
        name: outerZone.name,
        center: [outerCenterLat, outerCenterLng],
        radius: outerRadiusKm + 'km'
      }
    });

    // Calculate distance from drop-off to inner zone center
    const distanceToInnerCenter = calculateDistance(
      { latitude: dropLat, longitude: dropLng },
      { latitude: innerCenterLat, longitude: innerCenterLng }
    );

    // Calculate distance from drop-off to outer zone center (same center as inner)
    const distanceToOuterCenter = calculateDistance(
      { latitude: dropLat, longitude: dropLng },
      { latitude: outerCenterLat, longitude: outerCenterLng }
    );

    console.log('📏 Distance calculations:', {
      distanceToInnerCenter: distanceToInnerCenter.toFixed(2) + 'km',
      innerRadiusKm: innerRadiusKm + 'km',
      withinInner: distanceToInnerCenter <= innerRadiusKm,
      distanceToOuterCenter: distanceToOuterCenter.toFixed(2) + 'km',
      outerRadiusKm: outerRadiusKm + 'km',
      beyondOuter: distanceToOuterCenter > outerRadiusKm,
      inDeadheadZone: (distanceToInnerCenter > innerRadiusKm && distanceToOuterCenter <= outerRadiusKm)
    });

    // Check if drop-off is within inner zone (no deadhead charges)
    if (distanceToInnerCenter <= innerRadiusKm) {
      console.log('✅ Drop-off is WITHIN inner ring zone - NO deadhead charges');
      return {
        deadheadCharges: 0,
        zoneDetected: innerZone.name,
        isInnerZone: true
      };
    }

    // Check if drop-off is beyond outer zone (no deadhead charges)
    if (distanceToOuterCenter > outerRadiusKm) {
      console.log('✅ Drop-off is BEYOND outer ring zone - NO deadhead charges');
      return {
        deadheadCharges: 0,
        zoneDetected: 'Beyond Outer Zone',
        isInnerZone: false
      };
    }

    // Drop-off is BETWEEN inner and outer zones - apply deadhead charges
    // Calculate distance from drop-off to Hosur Bus Stand
    console.log('🎯 DEADHEAD ZONE DETECTED - Calculating charges...');
    console.log('Input parameters:', {
      dropLat,
      dropLng,
      hosurLat: HOSUR_BUS_STAND.lat,
      hosurLng: HOSUR_BUS_STAND.lng,
      perKmRate,
      perKmRateType: typeof perKmRate,
      perKmRateIsNaN: isNaN(perKmRate)
    });

    const distanceToHosurBusStand = calculateDistance(
      { latitude: dropLat, longitude: dropLng },
      { latitude: HOSUR_BUS_STAND.lat, longitude: HOSUR_BUS_STAND.lng }
    );

    console.log('Distance to Hosur Bus Stand calculated:', {
      distance: distanceToHosurBusStand,
      distanceType: typeof distanceToHosurBusStand,
      distanceIsNaN: isNaN(distanceToHosurBusStand)
    });

    // Deadhead charges = (distance from drop-off to Hosur Bus Stand / 2) * per km rate
    const halfDistance = distanceToHosurBusStand / 2;
    const deadheadCharges = halfDistance * perKmRate;

    console.log('📍 Drop-off is BETWEEN inner and outer ring zones - applying deadhead charges:', {
      distanceToInnerCenter: distanceToInnerCenter.toFixed(2) + 'km',
      innerRadius: innerRadiusKm + 'km',
      distanceToOuterCenter: distanceToOuterCenter.toFixed(2) + 'km',
      outerRadius: outerRadiusKm + 'km',
      distanceToHosurBusStand: distanceToHosurBusStand.toFixed(2) + 'km',
      halfDistance: halfDistance.toFixed(2) + 'km',
      perKmRate: perKmRate,
      deadheadCharges: deadheadCharges,
      deadheadChargesType: typeof deadheadCharges,
      deadheadChargesIsNaN: isNaN(deadheadCharges),
      deadheadChargesFixed: deadheadCharges.toFixed(2),
      calculation: `(${distanceToHosurBusStand.toFixed(2)} / 2) × ${perKmRate} = ${deadheadCharges.toFixed(2)}`
    });

    return {
      deadheadCharges,
      zoneDetected: 'Between Inner and Outer Ring',
      isInnerZone: false
    };
  }

  /**
   * Get trip completion details by ride ID
   */
  static async getTripCompletion(rideId: string) {
    try {
      const { data, error } = await supabase
        .from('trip_completions')
        .select('*')
        .eq('ride_id', rideId)
        .single();

      if (error) {
        console.error('Error fetching trip completion:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Exception fetching trip completion:', error);
      return null;
    }
  }
}