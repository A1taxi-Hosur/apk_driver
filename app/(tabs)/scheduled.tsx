import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Calendar,
  MapPin,
  Clock,
  IndianRupee,
  User,
  Navigation,
  Phone,
  CheckCircle,
  XCircle,
  AlertCircle,
  Car
} from 'lucide-react-native';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../utils/supabase';
import { openGoogleMapsNavigation } from '../../utils/maps';
import OTPModal from '../../components/OTPModal';
import CustomerTripCompletionModal from '../../components/CustomerTripCompletionModal';
import { FareCalculationService } from '../../services/FareCalculationService';
import { TripLocationTracker } from '../../services/TripLocationTracker';

type ScheduledBooking = {
  id: string;
  customer_id: string;
  booking_type: 'outstation' | 'rental' | 'airport';
  vehicle_type: string;
  pickup_address: string;
  destination_address: string;
  pickup_landmark?: string;
  destination_landmark?: string;
  pickup_latitude: number;
  pickup_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  scheduled_time: string | null;
  rental_hours?: number;
  special_instructions?: string;
  estimated_fare?: number;
  status: 'pending' | 'assigned' | 'confirmed' | 'driver_arrived' | 'in_progress' | 'cancelled' | 'completed';
  assigned_driver_id?: string;
  pickup_otp?: string;
  drop_otp?: string;
  created_at: string;
  updated_at: string;
  customer?: {
    full_name: string;
    phone_number: string;
    email: string;
  };
};

export default function ScheduledScreen() {
  const { driver, updateDriverStatus } = useAuth();
  const [scheduledBookings, setScheduledBookings] = useState<ScheduledBooking[]>([]);
  const [currentBooking, setCurrentBooking] = useState<ScheduledBooking | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otpModalType, setOTPModalType] = useState<'pickup' | 'drop' | 'verify-pickup'>('pickup');
  const [currentOTP, setCurrentOTP] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [completionData, setCompletionData] = useState<any>(null);

  useEffect(() => {
    if (driver) {
      loadScheduledBookings();
    }
  }, [driver]);

  const loadScheduledBookings = async () => {
    if (!driver?.id) return;

    try {
      console.log('=== LOADING SCHEDULED BOOKINGS ===');
      console.log('Driver ID:', driver.id);

      // Get current active scheduled booking using RPC
      const { data: currentBookingData, error: currentError } = await supabase
        .rpc('get_driver_current_scheduled_booking', {
          p_driver_id: driver.id
        });

      if (currentError) {
        console.error('Error loading current booking:', currentError);
        setCurrentBooking(null);
      } else {
        const activeBooking = currentBookingData && currentBookingData.length > 0 ? {
          ...currentBookingData[0],
          customer: {
            full_name: currentBookingData[0].customer_full_name,
            phone_number: currentBookingData[0].customer_phone,
            email: currentBookingData[0].customer_email
          }
        } : null;
        setCurrentBooking(activeBooking);
        console.log('Current booking:', activeBooking?.id);
      }

      // Get available scheduled bookings (pending, assigned by admin) using RPC
      const { data: availableBookingsData, error: availableError } = await supabase
        .rpc('get_driver_assigned_scheduled_bookings', {
          p_driver_id: driver.id
        });

      if (availableError) {
        console.error('Error loading available bookings:', availableError);
        setScheduledBookings([]);
      } else {
        const formattedBookings = (availableBookingsData || []).map(booking => ({
          ...booking,
          customer: {
            full_name: booking.customer_full_name,
            phone_number: booking.customer_phone,
            email: booking.customer_email
          }
        }));
        setScheduledBookings(formattedBookings);
        console.log('Available bookings:', formattedBookings.length);
      }

    } catch (error) {
      console.error('Exception loading scheduled bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadScheduledBookings();
    setRefreshing(false);
  };

  const handleAcceptBooking = async (bookingId: string) => {
    if (!driver?.id) return;

    try {
      const { data: result, error } = await supabase
        .rpc('update_scheduled_booking_status', {
          p_booking_id: bookingId,
          p_driver_id: driver.id,
          p_status: 'assigned'
        });

      if (error || !result?.success) {
        Alert.alert('Error', 'Failed to accept booking');
        return;
      }

      // Reload to get the updated booking
      await loadScheduledBookings();
      // NOTE: Do NOT change driver status to 'busy' yet
      // Driver remains 'online' and available for regular rides
      console.log('✅ Scheduled booking accepted');
      console.log('✅ Driver status remains: online (available for regular rides)');

      // Verify driver status in database
      const { data: driverCheck } = await supabase
        .from('drivers')
        .select('status')
        .eq('id', driver.id)
        .single();
      console.log('✅ Confirmed driver status in DB:', driverCheck?.status);
      // Status changes to 'busy' only when trip starts (in_progress)
      Alert.alert('Success', 'Booking accepted successfully!');

    } catch (error) {
      console.error('Error accepting booking:', error);
      Alert.alert('Error', 'Failed to accept booking');
    }
  };

  const handleDriverArrived = async () => {
    if (!currentBooking || !driver?.id) return;

    try {
      const { data: result, error } = await supabase
        .rpc('update_scheduled_booking_status', {
          p_booking_id: currentBooking.id,
          p_driver_id: driver.id,
          p_status: 'driver_arrived'
        });

      if (error || !result?.success) {
        Alert.alert('Error', 'Failed to mark as arrived');
        return;
      }

      await loadScheduledBookings();
    } catch (error) {
      console.error('Error marking driver arrived:', error);
      Alert.alert('Error', 'Failed to mark as arrived');
    }
  };

  const handleGeneratePickupOTP = async () => {
    if (!currentBooking || !driver?.id) return;

    try {
      const otp = Math.floor(1000 + Math.random() * 9000).toString();

      const { data: result, error } = await supabase
        .rpc('update_scheduled_booking_otp', {
          p_booking_id: currentBooking.id,
          p_driver_id: driver.id,
          p_otp_type: 'pickup',
          p_otp: otp
        });

      if (error || !result?.success) {
        Alert.alert('Error', 'Failed to generate OTP');
        return;
      }

      setCurrentOTP(otp);
      setOTPModalType('pickup');
      setShowOTPModal(true);
    } catch (error) {
      console.error('Error generating pickup OTP:', error);
      Alert.alert('Error', 'Failed to generate OTP');
    }
  };

  const handleVerifyPickupOTP = () => {
    setOTPModalType('verify-pickup');
    setShowOTPModal(true);
  };

  const handleOTPVerification = async (otp: string) => {
    if (!currentBooking || !driver?.id) return;

    try {
      const { data: result, error } = await supabase
        .rpc('get_scheduled_booking_otp', {
          p_booking_id: currentBooking.id,
          p_driver_id: driver.id,
          p_otp_type: 'pickup'
        });

      if (error || !result?.success) {
        Alert.alert('Error', 'Failed to verify OTP');
        return;
      }

      if (result.otp !== otp) {
        Alert.alert('Error', 'Incorrect OTP. Please try again.');
        return;
      }

      // Start the trip
      await handleStartTrip();
      setShowOTPModal(false);
    } catch (error) {
      console.error('Error verifying pickup OTP:', error);
      Alert.alert('Error', 'Failed to verify OTP');
    }
  };

  const handleStartTrip = async () => {
    if (!currentBooking || !driver) return;

    try {
      const { data: result, error } = await supabase
        .rpc('update_scheduled_booking_status', {
          p_booking_id: currentBooking.id,
          p_driver_id: driver.id,
          p_status: 'in_progress'
        });

      if (error || !result?.success) {
        Alert.alert('Error', 'Failed to start trip');
        return;
      }

      // Update driver status to 'busy' when trip starts
      await updateDriverStatus('busy');
      console.log('✅ Driver status set to busy');

      await loadScheduledBookings();

      // Start GPS tracking for scheduled trip
      console.log('🚀 Starting GPS tracking for scheduled trip...');
      const trackingStarted = await TripLocationTracker.startTripTracking(
        currentBooking.id,
        'scheduled',
        driver.id
      );

      if (trackingStarted) {
        console.log('✅ GPS tracking started for scheduled trip');
      } else {
        console.warn('⚠️ Failed to start GPS tracking, but trip will continue');
      }
    } catch (error) {
      console.error('Error starting trip:', error);
      Alert.alert('Error', 'Failed to start trip');
    }
  };

  const handleCompleteTrip = async () => {
    if (!currentBooking) return;

    try {
      console.log('🚨 COMPLETING SCHEDULED TRIP');
      console.log('Booking ID:', currentBooking.id);
      console.log('Booking type:', currentBooking.booking_type);

      console.log('📍 Stopping GPS tracking and calculating actual distance...');

      // Stop GPS tracking
      await TripLocationTracker.stopTripTracking(currentBooking.id);

      let actualDistanceKm = 0;
      let actualDurationMinutes = 0;
      let gpsPointsUsed = 0;

      try {
        // Calculate distance from GPS breadcrumbs
        const gpsDistance = await TripLocationTracker.calculateTripDistance(
          currentBooking.id,
          'scheduled'
        );
        const gpsDistanceRaw = gpsDistance.distanceKm;
        gpsPointsUsed = gpsDistance.pointsUsed;

        console.log('📍 GPS distance result (raw):', {
          distanceKm: gpsDistanceRaw,
          pointsUsed: gpsPointsUsed
        });

        // For outstation trips, GPS tracks one-way, so multiply by 2 for round trip
        if (currentBooking.booking_type === 'outstation') {
          actualDistanceKm = gpsDistanceRaw * 2;
          console.log('✅ GPS-tracked distance for outstation (doubled):', {
            oneWayDistance: gpsDistanceRaw.toFixed(2),
            roundTripDistance: actualDistanceKm.toFixed(2),
            note: 'GPS distance × 2 for round trip'
          });
        } else {
          actualDistanceKm = gpsDistanceRaw;
          console.log('✅ GPS-tracked distance for rental/airport:', {
            distanceKm: actualDistanceKm.toFixed(2),
            note: 'GPS distance (not doubled)'
          });
        }

        // Calculate duration from GPS tracking data
        const gpsDuration = await TripLocationTracker.calculateTripDuration(
          currentBooking.id,
          'scheduled'
        );

        actualDurationMinutes = gpsDuration.durationMinutes || 1; // Minimum 1 minute

        console.log('✅ GPS-tracked distance and duration for scheduled trip:', {
          distanceKm: actualDistanceKm.toFixed(2),
          durationMinutes: actualDurationMinutes,
          gpsPointsUsed,
          bookingType: currentBooking.booking_type,
          method: 'Real GPS tracking with timestamps'
        });

        // Check if GPS tracking was successful
        if (actualDistanceKm > 0 && gpsPointsUsed >= 2) {
          console.log('🎯 GPS tracking successful! Using GPS distance (handles multiple stops, loops, etc.)');
          // GPS worked perfectly - use it
        } else {
          console.error('❌ GPS tracking failed for scheduled trip');
          console.error('❌ GPS returned:', {
            distanceKm: actualDistanceKm,
            pointsUsed: gpsPointsUsed
          });

          Alert.alert(
            'GPS Tracking Error',
            'GPS tracking failed. Cannot complete trip without accurate GPS data. Please ensure location services are enabled and try again.',
            [{ text: 'OK' }]
          );
          return;
        }
      } catch (error) {
        console.error('❌ GPS distance calculation exception:', error);

        // Check if error is due to driver not moving (stationary)
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (errorMessage.includes('Driver did not move') || errorMessage.includes('displacement')) {
          console.warn('⚠️ Driver appears stationary - using minimal distance');

          // Driver hasn't moved significantly - use minimal distance
          actualDistanceKm = 0.1; // 100 meters minimum
          actualDurationMinutes = 1; // 1 minute minimum

          console.log('✅ Stationary driver handled:', {
            distanceKm: actualDistanceKm,
            durationMinutes: actualDurationMinutes,
            reason: 'Driver did not move significantly'
          });
        } else {
          // Real GPS error - cannot complete trip
          console.error('❌ GPS tracking failed:', error);

          Alert.alert(
            'GPS Tracking Error',
            'GPS tracking failed. Cannot complete trip without accurate GPS data. Please ensure location services are enabled and try again.',
            [{ text: 'OK' }]
          );
          return;
        }
      }

      console.log('📊 Final trip metrics:', {
        actualDistanceKm: actualDistanceKm.toFixed(2),
        actualDurationMinutes,
        gpsPointsUsed,
        bookingType: currentBooking.booking_type,
        pickupLat: currentBooking.pickup_latitude,
        pickupLng: currentBooking.pickup_longitude,
        dropLat: currentBooking.destination_latitude,
        dropLng: currentBooking.destination_longitude
      });

      // Calculate fare based on booking type
      let fareBreakdown;
      
      if (currentBooking.booking_type === 'rental') {
        fareBreakdown = await calculateRentalFare(
          currentBooking.vehicle_type,
          actualDistanceKm,
          actualDurationMinutes,
          currentBooking.rental_hours || 4,
          currentBooking.destination_latitude,
          currentBooking.destination_longitude
        );
      } else if (currentBooking.booking_type === 'outstation') {
        fareBreakdown = await calculateOutstationFare(
          currentBooking.vehicle_type,
          actualDistanceKm,
          actualDurationMinutes,
          currentBooking.scheduled_time
        );
      } else if (currentBooking.booking_type === 'airport') {
        fareBreakdown = await calculateAirportFare(
          currentBooking.vehicle_type,
          currentBooking.pickup_latitude,
          currentBooking.pickup_longitude,
          currentBooking.destination_latitude,
          currentBooking.destination_longitude,
          actualDistanceKm,
          actualDurationMinutes
        );
      } else {
        throw new Error('Invalid booking type');
      }

      console.log('✅ Fare calculated:', fareBreakdown.total_fare);
      console.log('📊 Complete fare breakdown:', JSON.stringify(fareBreakdown, null, 2));

      // Get driver details for completion record
      const { data: driverData } = await supabase
        .from('drivers')
        .select(`
          *,
          users!drivers_user_id_fkey(
            full_name,
            phone_number
          ),
          vehicles!drivers_vehicle_id_fkey(
            id,
            make,
            model,
            color,
            registration_number
          )
        `)
        .eq('id', currentBooking.assigned_driver_id!)
        .single();

      // Store the PRE-CALCULATED fare breakdown (don't recalculate on backend)
      console.log('💾 Storing pre-calculated fare breakdown...');
      const completionResult = await FareCalculationService.storeScheduledBookingFareBreakdown(
        currentBooking.id,
        fareBreakdown,
        actualDistanceKm,
        actualDurationMinutes,
        {
          driver_id: currentBooking.assigned_driver_id!,
          customer_id: currentBooking.customer_id,
          driver_name: driverData?.users?.full_name || 'Driver',
          driver_phone: driverData?.users?.phone_number,
          driver_rating: driverData?.rating,
          vehicle_id: driverData?.vehicles?.id,
          vehicle_make: driverData?.vehicles?.make,
          vehicle_model: driverData?.vehicles?.model,
          vehicle_color: driverData?.vehicles?.color,
          vehicle_license_plate: driverData?.vehicles?.registration_number
        }
      );

      if (!completionResult.success) {
        console.error('❌ Failed to store trip completion:', completionResult.error);
        // Continue anyway - don't block user, but log the error
      } else {
        console.log('✅ Pre-calculated fare breakdown stored successfully');
        console.log('✅ Stored total fare:', fareBreakdown.total_fare);
      }

      // Update booking status to completed
      const { data: result, error: updateError } = await supabase
        .rpc('update_scheduled_booking_status', {
          p_booking_id: currentBooking.id,
          p_driver_id: driver!.id,
          p_status: 'completed'
        });

      if (updateError || !result?.success) {
        console.error('❌ Error completing booking:', updateError);
        Alert.alert('Error', 'Failed to complete trip');
        return;
      }

      console.log('✅ Scheduled booking completed successfully');

      // Update driver status back to online
      console.log('✅ Setting driver status to online...');
      await updateDriverStatus('online');
      console.log('✅ Driver status updated to online');

      // Verify driver status was actually updated
      const { data: driverCheck } = await supabase
        .from('drivers')
        .select('status')
        .eq('id', driver!.id)
        .single();
      console.log('✅ Verified driver status in DB:', driverCheck?.status);

      // Small delay to ensure database updates propagate
      await new Promise(resolve => setTimeout(resolve, 500));

      // Clear current booking
      setCurrentBooking(null);
      console.log('✅ Current booking cleared');

      // Reload available bookings to show driver as available for new trips
      console.log('🔄 Reloading available scheduled bookings...');
      await loadScheduledBookings();
      console.log('✅ Scheduled bookings reloaded');

      // Prepare completion data for modal
      console.log('=== PREPARING SCHEDULED TRIP COMPLETION DATA ===');
      console.log('📦 actualDistanceKm:', actualDistanceKm);
      console.log('📦 actualDurationMinutes:', actualDurationMinutes);
      console.log('📦 fareBreakdown:', JSON.stringify(fareBreakdown, null, 2));
      console.log('📦 driverData:', JSON.stringify(driverData, null, 2));

      const tripCompletionData = {
        distance: actualDistanceKm,
        duration: actualDurationMinutes,
        fareBreakdown: fareBreakdown,
        pickup_address: currentBooking.pickup_address,
        destination_address: currentBooking.destination_address,
        booking_type: currentBooking.booking_type,
        rental_hours: currentBooking.rental_hours,
        driver_name: driverData?.users?.full_name || 'Driver',
        driver_phone: driverData?.users?.phone_number,
        driver_rating: driverData?.rating,
        vehicle_make: driverData?.vehicles?.make,
        vehicle_model: driverData?.vehicles?.model,
        vehicle_color: driverData?.vehicles?.color,
        vehicle_license_plate: driverData?.vehicles?.registration_number,
        ride_id: currentBooking.id
      };

      console.log('=== TRIP COMPLETION DATA PREPARED ===');
      console.log('📦 Complete tripCompletionData:', JSON.stringify(tripCompletionData, null, 2));

      // Show completion modal
      console.log('🎯 Setting completion modal state...');
      setCompletionData(tripCompletionData);
      setShowCompletionModal(true);
      console.log('✅ Modal state updated - should show now!');

    } catch (error) {
      console.error('❌ Exception completing scheduled trip:', error);
      Alert.alert('Error', 'Failed to complete trip: ' + error.message);
    }
  };

  const handleCancelBooking = () => {
    Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel this scheduled booking?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            if (currentBooking && driver?.id) {
              try {
                const { data: result, error } = await supabase
                  .rpc('update_scheduled_booking_status', {
                    p_booking_id: currentBooking.id,
                    p_driver_id: driver.id,
                    p_status: 'cancelled'
                  });

                if (error || !result?.success) {
                  Alert.alert('Error', 'Failed to cancel booking');
                  return;
                }

                await updateDriverStatus('online');
                setCurrentBooking(null);
                await loadScheduledBookings();
              } catch (error) {
                console.error('Error cancelling booking:', error);
                Alert.alert('Error', 'Failed to cancel booking');
              }
            }
          }
        }
      ]
    );
  };

  const handleDirectionsToPickup = async () => {
    if (!currentBooking) return;
    
    try {
      await openGoogleMapsNavigation(
        currentBooking.pickup_latitude,
        currentBooking.pickup_longitude,
        currentBooking.pickup_address
      );
    } catch (error) {
      console.error('Error opening directions to pickup:', error);
      Alert.alert('Error', 'Could not open directions');
    }
  };

  const handleDirectionsToDestination = async () => {
    if (!currentBooking) return;
    
    try {
      await openGoogleMapsNavigation(
        currentBooking.destination_latitude,
        currentBooking.destination_longitude,
        currentBooking.destination_address
      );
    } catch (error) {
      console.error('Error opening directions to destination:', error);
      Alert.alert('Error', 'Could not open directions');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'assigned': return '#2563EB';
      case 'confirmed': return '#8B5CF6';
      case 'driver_arrived': return '#F59E0B';
      case 'in_progress': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getBookingTypeColor = (type: string) => {
    switch (type) {
      case 'rental': return '#8B5CF6';
      case 'outstation': return '#F59E0B';
      case 'airport': return '#06B6D4';
      default: return '#10B981';
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not scheduled';
    
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      time: date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2563EB" />
          <Text style={styles.loadingText}>Loading scheduled bookings...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <Text style={styles.title}>Scheduled Rides</Text>

        {/* Current Booking */}
        {currentBooking && (
          <View style={styles.currentBookingCard}>
            <View style={styles.bookingHeader}>
              <Text style={styles.bookingTitle}>Current Booking</Text>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(currentBooking.status) }]}>
                <Text style={styles.statusText}>{currentBooking.status.replace('_', ' ').toUpperCase()}</Text>
              </View>
            </View>

            {/* Booking Type and Schedule */}
            <View style={styles.bookingInfo}>
              <View style={[styles.typeBadge, { backgroundColor: getBookingTypeColor(currentBooking.booking_type) }]}>
                <Text style={styles.typeText}>{currentBooking.booking_type.toUpperCase()}</Text>
              </View>
              
              {currentBooking.scheduled_time && (
                <View style={styles.scheduleInfo}>
                  <Clock size={16} color="#64748B" />
                  <Text style={styles.scheduleText}>
                    {formatDate(currentBooking.scheduled_time).date} at {formatDate(currentBooking.scheduled_time).time}
                  </Text>
                </View>
              )}
            </View>

            {/* Customer Info */}
            <View style={styles.customerInfo}>
              <User size={20} color="#64748B" />
              <Text style={styles.customerName}>
                {currentBooking.customer?.full_name || 'Customer'}
              </Text>
              <TouchableOpacity style={styles.phoneButton}>
                <Phone size={16} color="#2563EB" />
              </TouchableOpacity>
            </View>

            {/* Addresses */}
            <View style={styles.addressContainer}>
              <View style={styles.addressItem}>
                <View style={[styles.addressDot, { backgroundColor: '#10B981' }]} />
                <View style={styles.addressWithButton}>
                  <Text style={styles.addressText}>{currentBooking.pickup_address}</Text>
                  {(currentBooking.status === 'assigned' || currentBooking.status === 'confirmed' || currentBooking.status === 'driver_arrived') && (
                    <TouchableOpacity style={styles.inlineDirectionButton} onPress={handleDirectionsToPickup}>
                      <Navigation size={16} color="#2563EB" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View style={styles.routeLine} />
              <View style={styles.addressItem}>
                <View style={[styles.addressDot, { backgroundColor: '#EF4444' }]} />
                <View style={styles.addressWithButton}>
                  <Text style={styles.addressText}>{currentBooking.destination_address}</Text>
                  {currentBooking.status === 'in_progress' && (
                    <TouchableOpacity style={styles.inlineDirectionButton} onPress={handleDirectionsToDestination}>
                      <Navigation size={16} color="#2563EB" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>

            {/* Booking Details */}
            <View style={styles.bookingDetails}>
              <View style={styles.detailItem}>
                <IndianRupee size={16} color="#10B981" />
                <Text style={styles.detailText}>₹{currentBooking.estimated_fare || 'TBD'}</Text>
              </View>
              
              {currentBooking.rental_hours && (
                <View style={styles.detailItem}>
                  <Clock size={16} color="#F59E0B" />
                  <Text style={styles.detailText}>{currentBooking.rental_hours}hrs</Text>
                </View>
              )}
            </View>

            {/* Special Instructions */}
            {currentBooking.special_instructions && (
              <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsLabel}>Special Instructions:</Text>
                <Text style={styles.instructionsText}>{currentBooking.special_instructions}</Text>
              </View>
            )}

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              {currentBooking.status === 'assigned' && (
                <>
                  <TouchableOpacity style={styles.arrivedButton} onPress={handleDriverArrived}>
                    <Navigation size={20} color="#FFFFFF" />
                    <Text style={styles.buttonText}>Mark as Arrived</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancelBooking}>
                    <XCircle size={20} color="#FFFFFF" />
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </>
              )}

              {currentBooking.status === 'driver_arrived' && (
                <>
                  <TouchableOpacity style={styles.otpButton} onPress={handleGeneratePickupOTP}>
                    <AlertCircle size={20} color="#FFFFFF" />
                    <Text style={styles.buttonText}>Send OTP to Customer</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyPickupOTP}>
                    <CheckCircle size={20} color="#FFFFFF" />
                    <Text style={styles.buttonText}>Enter Customer OTP</Text>
                  </TouchableOpacity>
                </>
              )}

              {currentBooking.status === 'in_progress' && (
                <TouchableOpacity 
                  style={styles.completeButton}
                  onPress={handleCompleteTrip}
                >
                  <CheckCircle size={20} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Complete Trip</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        {/* Available Bookings */}
        {!currentBooking && scheduledBookings.length > 0 && (
          <View style={styles.availableBookingsSection}>
            <Text style={styles.sectionTitle}>Available Bookings</Text>
            
            {scheduledBookings.map((booking) => {
              const scheduleInfo = formatDate(booking.scheduled_time);
              return (
                <View key={booking.id} style={styles.bookingCard}>
                  <View style={styles.cardHeader}>
                    <View style={[styles.typeBadge, { backgroundColor: getBookingTypeColor(booking.booking_type) }]}>
                      <Text style={styles.typeText}>{booking.booking_type.toUpperCase()}</Text>
                    </View>
                    
                    <View style={styles.scheduleInfo}>
                      <Clock size={14} color="#64748B" />
                      <Text style={styles.scheduleText}>
                        {scheduleInfo.date} at {scheduleInfo.time}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.customerRow}>
                    <User size={16} color="#64748B" />
                    <Text style={styles.customerText}>
                      {booking.customer?.full_name || 'Anonymous'}
                    </Text>
                  </View>

                  <View style={styles.addressContainer}>
                    <View style={styles.addressItem}>
                      <View style={[styles.addressDot, { backgroundColor: '#10B981' }]} />
                      <Text style={styles.addressText}>{booking.pickup_address}</Text>
                    </View>
                    <View style={styles.routeLine} />
                    <View style={styles.addressItem}>
                      <View style={[styles.addressDot, { backgroundColor: '#EF4444' }]} />
                      <Text style={styles.addressText}>{booking.destination_address}</Text>
                    </View>
                  </View>

                  <View style={styles.bookingStats}>
                    <View style={styles.statItem}>
                      <IndianRupee size={16} color="#10B981" />
                      <Text style={styles.statText}>₹{booking.estimated_fare || 'TBD'}</Text>
                    </View>
                    
                    {booking.rental_hours && (
                      <View style={styles.statItem}>
                        <Clock size={16} color="#F59E0B" />
                        <Text style={styles.statText}>{booking.rental_hours}hrs</Text>
                      </View>
                    )}
                  </View>

                  <TouchableOpacity 
                    style={styles.acceptButton}
                    onPress={() => handleAcceptBooking(booking.id)}
                  >
                    <CheckCircle size={20} color="#FFFFFF" />
                    <Text style={styles.buttonText}>Accept Booking</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}

        {/* Empty State */}
        {!currentBooking && scheduledBookings.length === 0 && (
          <View style={styles.emptyState}>
            <Calendar size={64} color="#CBD5E1" />
            <Text style={styles.emptyStateTitle}>No Scheduled Bookings</Text>
            <Text style={styles.emptyStateText}>
              Scheduled bookings will appear here when customers book rides in advance
            </Text>
          </View>
        )}
      </ScrollView>

      {/* OTP Modal */}
      <OTPModal
        visible={showOTPModal}
        type={otpModalType}
        currentOTP={currentOTP}
        onVerify={handleOTPVerification}
        onClose={() => setShowOTPModal(false)}
      />

      {/* Trip Completion Modal */}
      {completionData && (
        <CustomerTripCompletionModal
          visible={showCompletionModal}
          tripData={completionData}
          onClose={() => {
            setShowCompletionModal(false);
            setCompletionData(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

// Helper functions for fare calculation
async function calculateRentalFare(
  vehicleType: string,
  actualDistanceKm: number,
  actualDurationMinutes: number,
  selectedHours: number,
  dropLat: number,
  dropLng: number
) {
  // Fetch rental fare package using RPC (bypasses RLS)
  const { data: rentalFares, error } = await supabase
    .rpc('get_rental_fare', {
      p_vehicle_type: vehicleType,
      p_duration_hours: selectedHours
    });

  if (error || !rentalFares || rentalFares.length === 0) {
    console.error('❌ No rental fare found for:', {
      vehicle_type: vehicleType,
      duration_hours: selectedHours,
      is_active: true
    });
    throw new Error(`Rental fare configuration not found for ${vehicleType} vehicle with ${selectedHours} hours package`);
  }

  const rentalFare = rentalFares[0];
  const baseFare = Number(rentalFare.base_fare);
  const kmIncluded = rentalFare.km_included;
  const extraKmRate = rentalFare.extra_km_rate;

  // Hosur bus stand coordinates
  const hosurBusStand = { lat: 12.7401984, lng: 77.824 };

  // Calculate distance from drop-off point to Hosur bus stand
  const distanceToHosur = calculateDistance(dropLat, dropLng, hosurBusStand.lat, hosurBusStand.lng);

  // Total distance including return to Hosur bus stand
  const totalDistanceWithReturn = actualDistanceKm + distanceToHosur;

  let extraKmCharges = 0;
  let withinAllowance = true;

  if (totalDistanceWithReturn > kmIncluded) {
    const extraKm = totalDistanceWithReturn - kmIncluded;
    extraKmCharges = extraKm * extraKmRate;
    withinAllowance = false;
  }

  // Fetch platform fee from fare_matrix for rental bookings
  const { data: fareMatrix } = await supabase
    .from('fare_matrix')
    .select('platform_fee')
    .eq('booking_type', 'rental')
    .eq('vehicle_type', vehicleType)
    .eq('is_active', true)
    .maybeSingle();

  const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '20');

  // Calculate total package charges (base fare + extra km charges)
  const packageCharges = baseFare + extraKmCharges;

  // Calculate GST
  const gstOnCharges = packageCharges * 0.05; // 5% GST on package charges
  const gstOnPlatformFee = platformFee * 0.18; // 18% GST on platform fee

  const totalFare = packageCharges + gstOnCharges + platformFee + gstOnPlatformFee;

  return {
    booking_type: 'rental',
    vehicle_type: vehicleType,
    base_fare: baseFare,
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
      base_km_included: kmIncluded,
      extra_km: Math.max(0, totalDistanceWithReturn - kmIncluded),
      per_km_rate: extraKmRate,
      within_allowance: withinAllowance,
      package_name: rentalFare.package_name,
      package_charges: packageCharges,
      gst_on_package: gstOnCharges,
      platform_fee: platformFee,
      gst_on_platform_fee: gstOnPlatformFee,
      distance_to_hosur_bus_stand: distanceToHosur,
      total_distance_with_return: totalDistanceWithReturn
    }
  };
}

async function calculateOutstationFare(
  vehicleType: string,
  actualDistanceKm: number,
  actualDurationMinutes: number,
  scheduledTime: string | null
) {
  console.log('💰 [OUTSTATION-COMPLETION] Starting outstation fare calculation with GPS distance');
  console.log('💰 [OUTSTATION-COMPLETION] Input:', {
    vehicleType,
    actualDistanceKm: actualDistanceKm.toFixed(2),
    actualDurationMinutes,
    scheduledTime
  });

  // Allow zero distance for stationary drivers (will be charged minimal fare)
  if (actualDistanceKm < 0) {
    console.error('❌ [OUTSTATION-COMPLETION] Negative distance detected:', actualDistanceKm);
    actualDistanceKm = 0.1; // Use minimal distance
  }

  if (actualDistanceKm === 0) {
    console.warn('⚠️ [OUTSTATION-COMPLETION] Zero distance - driver did not move');
    actualDistanceKm = 0.1; // 100 meters minimum for fare calculation
  }

  console.log('✅ [OUTSTATION-COMPLETION] Final distance for calculation:', actualDistanceKm);

  // Calculate number of days
  const startTime = scheduledTime ? new Date(scheduledTime) : new Date();
  const endTime = new Date();
  const durationHours = Math.abs(endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
  const numberOfDays = Math.max(1, Math.ceil(durationHours / 24));

  console.log('💰 [OUTSTATION-COMPLETION] Duration calculation:', {
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
    durationHours: durationHours.toFixed(2),
    numberOfDays
  });

  // Determine pricing model based on GPS distance
  const useSlabPricing = actualDistanceKm < 300;

  console.log('💰 [OUTSTATION-COMPLETION] Pricing decision:', {
    actualDistanceKm: actualDistanceKm.toFixed(2),
    threshold: 300,
    useSlabPricing,
    pricingModel: useSlabPricing ? 'SLAB PRICING' : 'PER-KM PRICING'
  });

  let baseFare = 0;
  let distanceFare = 0;
  let extraKmCharges = 0;
  let driverAllowance = 0;
  let perKmRate = 0;
  let slabDetails = null;

  if (useSlabPricing) {
    // Use slab pricing for trips < 300km
    console.log('💰 [OUTSTATION-COMPLETION] Fetching slab packages...');

    const { data: slabPackages, error: slabError } = await supabase
      .from('outstation_packages')
      .select('*')
      .eq('vehicle_type', vehicleType)
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1);

    if (slabError || !slabPackages || slabPackages.length === 0) {
      console.error('❌ [OUTSTATION-COMPLETION] Slab package not found:', slabError);
      throw new Error('Outstation slab package not found for vehicle: ' + vehicleType);
    }

    const slabPackage = slabPackages[0];
    console.log('💰 [OUTSTATION-COMPLETION] Found slab package:', slabPackage);

    // Determine which slab to use based on distance
    // Slab names represent ONE-WAY distance, but they cover ROUND-TRIP distance
    // E.g., "50km slab" covers up to 100km round trip (50km × 2)
    const slabDistances = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    let selectedSlab = null;
    let slabKm = 0;

    let selectedSlabName = 0; // Store the slab name (10km, 20km, 50km, etc)

    for (const km of slabDistances) {
      const slabKey = `slab_${km}km`;
      const maxRoundTripKm = km * 2; // Each slab covers double the distance for round trips
      if (slabPackage[slabKey] && actualDistanceKm <= maxRoundTripKm) {
        selectedSlab = parseFloat(slabPackage[slabKey].toString());
        slabKm = maxRoundTripKm; // Store the max coverage
        selectedSlabName = km; // Store the slab name
        break;
      }
    }

    // If distance exceeds all slabs, use the highest slab + extra km charges
    if (!selectedSlab) {
      const highestSlabKey = 'slab_150km';
      selectedSlab = parseFloat(slabPackage[highestSlabKey]?.toString() || '0');
      slabKm = 300; // 150km × 2
      selectedSlabName = 150;
    }

    console.log('💰 [OUTSTATION-COMPLETION] Selected slab:', {
      actualDistanceKm: actualDistanceKm.toFixed(2),
      slabName: `${selectedSlabName}km slab`,
      coversUpTo: `${slabKm}km round trip`,
      slabFare: selectedSlab
    });

    baseFare = selectedSlab;
    const extraKmRate = parseFloat(slabPackage.extra_km_rate?.toString() || '12');
    // NO driver allowance for trips < 300km (slab pricing already includes round trip)

    // Calculate extra km charges if distance exceeds slab
    if (actualDistanceKm > slabKm) {
      const extraKm = actualDistanceKm - slabKm;
      extraKmCharges = extraKm * extraKmRate;
      console.log('💰 [OUTSTATION-COMPLETION] Extra km calculation:', {
        slabKm,
        actualDistanceKm: actualDistanceKm.toFixed(2),
        extraKm: extraKm.toFixed(2),
        extraKmRate,
        extraKmCharges: extraKmCharges.toFixed(2)
      });
    }

    distanceFare = extraKmCharges;
    slabDetails = {
      slab_range: `Up to ${selectedSlabName}km (${slabKm}km round trip)`,
      package_fare: baseFare,
      km_included: slabKm,
      extra_km: Math.max(0, actualDistanceKm - slabKm),
      per_km_after_limit: extraKmRate
    };

  } else {
    // Use per-km pricing for trips >= 300km
    console.log('💰 [OUTSTATION-COMPLETION] Fetching per-km config...');

    const { data: perKmFares, error: perKmError } = await supabase
      .rpc('get_outstation_fare', {
        p_vehicle_type: vehicleType
      });

    if (perKmError || !perKmFares || perKmFares.length === 0) {
      console.error('❌ [OUTSTATION-COMPLETION] Per-km config not found:', perKmError);
      throw new Error('Outstation per-km configuration not found');
    }

    const perKmConfig = perKmFares[0];
    console.log('💰 [OUTSTATION-COMPLETION] Found per-km config:', {
      base_fare: perKmConfig.base_fare,
      per_km_rate: perKmConfig.per_km_rate,
      driver_allowance_per_day: perKmConfig.driver_allowance_per_day,
      daily_km_limit: perKmConfig.daily_km_limit
    });

    baseFare = parseFloat(perKmConfig.base_fare?.toString() || '0');
    perKmRate = parseFloat(perKmConfig.per_km_rate?.toString() || '14');
    const driverAllowancePerDay = parseFloat(perKmConfig.driver_allowance_per_day?.toString() || '300');
    const dailyKmLimit = parseFloat(perKmConfig.daily_km_limit?.toString() || '300');

    driverAllowance = numberOfDays * driverAllowancePerDay;
    const totalKmAllowance = numberOfDays * dailyKmLimit;

    // Calculate distance fare
    if (actualDistanceKm <= totalKmAllowance) {
      distanceFare = actualDistanceKm * perKmRate;
      extraKmCharges = 0;
      console.log('💰 [OUTSTATION-COMPLETION] Within allowance:', {
        actualDistanceKm: actualDistanceKm.toFixed(2),
        totalKmAllowance,
        distanceFare: distanceFare.toFixed(2)
      });
    } else {
      distanceFare = actualDistanceKm * perKmRate;
      extraKmCharges = (actualDistanceKm - totalKmAllowance) * perKmRate;
      console.log('💰 [OUTSTATION-COMPLETION] Exceeds allowance:', {
        actualDistanceKm: actualDistanceKm.toFixed(2),
        totalKmAllowance,
        extraKm: (actualDistanceKm - totalKmAllowance).toFixed(2),
        distanceFare: distanceFare.toFixed(2),
        extraKmCharges: extraKmCharges.toFixed(2)
      });
    }
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
  const chargesSubtotal = baseFare + distanceFare + driverAllowance;
  const gstOnCharges = chargesSubtotal * 0.05; // 5% GST on charges
  const gstOnPlatformFee = platformFee * 0.18; // 18% GST on platform fee

  const totalFare = Math.round(baseFare + distanceFare + driverAllowance + platformFee + gstOnCharges + gstOnPlatformFee);

  console.log('💰 [OUTSTATION-COMPLETION] Final fare breakdown:', {
    pricingModel: useSlabPricing ? 'SLAB' : 'PER-KM',
    baseFare,
    distanceFare: distanceFare.toFixed(2),
    driverAllowance,
    extraKmCharges: extraKmCharges.toFixed(2),
    platformFee,
    gstOnCharges: gstOnCharges.toFixed(2),
    gstOnPlatformFee: gstOnPlatformFee.toFixed(2),
    totalFare
  });

  return {
    booking_type: 'outstation',
    vehicle_type: vehicleType,
    base_fare: baseFare,
    distance_fare: distanceFare,
    time_fare: 0,
    surge_charges: 0,
    deadhead_charges: 0,
    platform_fee: platformFee,
    gst_on_charges: gstOnCharges,
    gst_on_platform_fee: gstOnPlatformFee,
    extra_km_charges: extraKmCharges,
    driver_allowance: driverAllowance,
    total_fare: totalFare,
    pricing_model: useSlabPricing ? 'slab' : 'per_km',
    slab_details: slabDetails,
    details: {
      actual_distance_km: actualDistanceKm,
      actual_duration_minutes: actualDurationMinutes,
      days_calculated: numberOfDays,
      total_km_travelled: actualDistanceKm
    }
  };
}

async function calculateAirportFare(
  vehicleType: string,
  pickupLat: number,
  pickupLng: number,
  dropLat: number,
  dropLng: number,
  actualDistanceKm?: number,
  actualDurationMinutes?: number
) {
  // Fetch airport fare package using RPC (bypasses RLS)
  const { data: airportFares, error } = await supabase
    .rpc('get_airport_fare', {
      p_vehicle_type: vehicleType
    });

  if (error || !airportFares || airportFares.length === 0) {
    console.error('❌ No airport fare found for:', {
      vehicle_type: vehicleType,
      is_active: true
    });
    throw new Error(`Airport fare configuration not found for ${vehicleType} vehicle`);
  }

  const airportConfig = airportFares[0];

  // Determine direction based on coordinates (Hosur center coordinates)
  const cityCenter = { lat: 12.7401984, lng: 77.824 };

  const pickupToCenter = calculateDistance(pickupLat, pickupLng, cityCenter.lat, cityCenter.lng);
  const dropToCenter = calculateDistance(dropLat, dropLng, cityCenter.lat, cityCenter.lng);

  const isHosurToAirport = pickupToCenter < dropToCenter;
  const packageFare = isHosurToAirport ? airportConfig.hosur_to_airport_fare : airportConfig.airport_to_hosur_fare;

  // Fetch platform fee from fare_matrix for airport bookings
  const { data: fareMatrix } = await supabase
    .from('fare_matrix')
    .select('platform_fee')
    .eq('booking_type', 'airport')
    .eq('vehicle_type', vehicleType)
    .eq('is_active', true)
    .maybeSingle();

  const platformFee = parseFloat(fareMatrix?.platform_fee?.toString() || '20');

  // Calculate charges
  const gstOnPackage = Number(packageFare) * 0.05; // 5% GST on package value
  const gstOnPlatformFee = platformFee * 0.18; // 18% GST on platform fee

  const totalFare = Number(packageFare) + gstOnPackage + platformFee + gstOnPlatformFee;

  return {
    booking_type: 'airport',
    vehicle_type: vehicleType,
    base_fare: Number(packageFare),
    distance_fare: 0,
    time_fare: 0,
    surge_charges: 0,
    deadhead_charges: 0,
    platform_fee: platformFee,
    gst_on_charges: gstOnPackage,
    gst_on_platform_fee: gstOnPlatformFee,
    extra_km_charges: 0,
    driver_allowance: 0,
    total_fare: totalFare,
    details: {
      actual_distance_km: actualDistanceKm || calculateDistance(pickupLat, pickupLng, dropLat, dropLng),
      actual_duration_minutes: actualDurationMinutes || 0,
      per_km_rate: 0,
      direction: isHosurToAirport ? 'Hosur to Airport' : 'Airport to Hosur',
      package_fare: Number(packageFare),
      gst_on_package: gstOnPackage,
      platform_fee: platformFee,
      gst_on_platform_fee: gstOnPlatformFee
    }
  };
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 64,
  },
  loadingText: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 24,
  },
  currentBookingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookingTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  bookingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  typeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  typeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  scheduleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleText: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 4,
  },
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginLeft: 8,
    flex: 1,
  },
  phoneButton: {
    width: 32,
    height: 32,
    backgroundColor: '#EBF4FF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressContainer: {
    marginBottom: 16,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  addressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
    marginTop: 6,
  },
  addressText: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
    lineHeight: 20,
  },
  addressWithButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inlineDirectionButton: {
    width: 32,
    height: 32,
    backgroundColor: '#EBF4FF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  routeLine: {
    width: 2,
    height: 16,
    backgroundColor: '#E2E8F0',
    marginLeft: 3,
    marginBottom: 8,
  },
  bookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
    marginLeft: 4,
  },
  instructionsContainer: {
    backgroundColor: '#F0F9FF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  instructionsLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E40AF',
    marginBottom: 4,
  },
  instructionsText: {
    fontSize: 14,
    color: '#1E40AF',
    lineHeight: 18,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  arrivedButton: {
    flex: 1,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpButton: {
    flex: 1,
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButton: {
    flex: 1,
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButton: {
    flex: 1,
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  availableBookingsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  bookingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  customerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  customerText: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 8,
  },
  bookingStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
    marginLeft: 4,
  },
  acceptButton: {
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 32,
  },
});