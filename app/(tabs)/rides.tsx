import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Switch,
  Alert,
  Linking,
  Platform,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { MapPin, Clock, IndianRupee, User, Navigation, Phone, CircleCheck as CheckCircle, Circle as XCircle, CircleAlert as AlertCircle, Car, Power, Bell } from 'lucide-react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useRide } from '../../contexts/RideContext';
import { useLocation } from '../../contexts/LocationContext';
import { calculateDistance, openGoogleMapsNavigation } from '../../utils/maps';
import RideRequestModal from '../../components/RideRequestModal';
import OTPModal from '../../components/OTPModal';
import MapView from '../../components/MapView';
import { notificationSoundService } from '../../services/NotificationSoundService';
import TripCompletionModal from '../../components/TripCompletionModal';
import { BackgroundLocationService } from '../../services/BackgroundLocationService';

// Pending Ride Alert Component
function PendingRideAlert({ count, onPress }: { count: number; onPress: () => void }) {
  // Pulse animation for the background
  const pulseStyle = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withSequence(
          withTiming(1, { duration: 800 }),
          withTiming(0.3, { duration: 800 })
        ),
        -1,
        true
      ),
    };
  });

  return (
    <Pressable style={styles.rideAlertButton} onPress={onPress}>
      <Animated.View style={[styles.rideAlertPulse, pulseStyle]} />
      <View style={styles.rideAlertContent}>
        <Bell size={28} color="#FFFFFF" />
        <View style={styles.rideAlertTextContainer}>
          <Text style={styles.rideAlertTitle}>
            {count} NEW RIDE{count > 1 ? 'S' : ''}!
          </Text>
          <Text style={styles.rideAlertSubtitle}>
            TAP TO VIEW & ACCEPT
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function RidesScreen() {
  const { driver, updateDriverStatus } = useAuth();
  const {
    currentRide,
    pendingRides,
    loading,
    error,
    acceptRide,
    declineRide,
    markDriverArrived,
    generatePickupOTP,
    verifyPickupOTP,
    startRide,
    generateDropOTP,
    completeRide,
    refreshRides,
    clearCurrentRide,
    clearError
  } = useRide();
  const { currentLocation, currentAddress, isTracking, isBackgroundTrackingActive } = useLocation();

  const [refreshing, setRefreshing] = useState(false);
  const [selectedRideRequest, setSelectedRideRequest] = useState(null);
  const [showRideRequestModal, setShowRideRequestModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otpModalType, setOTPModalType] = useState<'pickup' | 'drop' | 'verify-pickup'>('pickup');
  const [currentOTP, setCurrentOTP] = useState('');
  const [completionModalState, setCompletionModalState] = useState<{
    visible: boolean;
    data: any;
  }>({
    visible: false,
    data: null
  });
  const [forceRenderKey, setForceRenderKey] = useState(0);

  // Debug: Track component state changes
  useEffect(() => {
    console.log('=== RIDES SCREEN STATE DEBUG ===')
    console.log('🔄 Component state updated:')
    console.log('  - Current ride:', currentRide ? {
      id: currentRide.id,
      status: currentRide.status,
      pickup: currentRide.pickup_address,
      destination: currentRide.destination_address
    } : 'null')
    console.log('  - Pending rides count:', pendingRides?.length || 0)
    console.log('  - Driver status:', driver?.status)
    console.log('  - Loading:', loading)
    console.log('  - Error:', error)
    console.log('  - Show modal:', showRideRequestModal)
    console.log('  - Timestamp:', new Date().toISOString())
    
    if (currentRide) {
      console.log('✅ CURRENT RIDE EXISTS - should be visible in UI')
    } else {
      console.log('❌ NO CURRENT RIDE - showing empty state')
    }
  }, [currentRide, pendingRides, driver?.status, loading, error, showRideRequestModal])

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
      clearError();
    }
  }, [error]);

  // Debug: Track completion modal state
  useEffect(() => {
    console.log('=== COMPLETION MODAL STATE DEBUG ===');
    console.log('📊 visible:', completionModalState.visible);
    console.log('📊 data exists:', !!completionModalState.data);
    console.log('📊 data:', completionModalState.data ? JSON.stringify(completionModalState.data, null, 2) : 'null');
  }, [completionModalState]);

  useEffect(() => {
    console.log('=== RIDE REQUEST MODAL LOGIC DEBUG ===')
    console.log('🔄 Checking if should show ride request modal:')
    console.log('  - Pending rides:', Array.isArray(pendingRides) ? pendingRides.length : 'not array')
    console.log('  - Modal already showing:', showRideRequestModal)
    console.log('  - Driver status:', driver?.status)
    console.log('  - Has current ride:', !!currentRide)
    
    // CRITICAL: Show ride request modal when new pending rides arrive
    if (Array.isArray(pendingRides) && pendingRides.length > 0 && !showRideRequestModal && (driver?.status === 'online' || driver?.status === 'busy')) {
      console.log('✅ SHOWING RIDE REQUEST MODAL')
      console.log('🚗 Showing ride request modal for:', pendingRides[0].id)
      console.log('🚗 Ride details:', {
        pickup: pendingRides[0].pickup_address,
        destination: pendingRides[0].destination_address,
        customer: pendingRides[0].customer?.full_name
      })
      setSelectedRideRequest(pendingRides[0])
      setShowRideRequestModal(true)
    } else {
      console.log('❌ NOT SHOWING MODAL - reasons:')
      console.log('🚗 Analysis:', {
        pendingRidesCount: pendingRides ? pendingRides.length : 0,
        modalAlreadyShowing: showRideRequestModal,
        driverStatus: driver?.status,
        hasCurrentRide: !!currentRide
      })
    }
  }, [pendingRides, showRideRequestModal, driver?.status, currentRide]);


  const handleRefresh = async () => {
    console.log('=== MANUAL REFRESH TRIGGERED ===')
    console.log('🔄 User pulled to refresh rides screen')
    console.log('🔄 Timestamp:', new Date().toISOString())
    setRefreshing(true);
    await refreshRides();
    console.log('✅ Manual refresh completed')
    setRefreshing(false);
  };

  const handleStatusToggle = async (newStatus: 'online' | 'offline') => {
    try {
      await updateDriverStatus(newStatus);
    } catch (error) {
      Alert.alert('Error', 'Failed to update status');
    }
  };

  const handleAcceptRide = async () => {
    if (!selectedRideRequest) return;
    
    console.log('=== HANDLE ACCEPT RIDE BUTTON CLICKED ===')
    console.log('🚗 User clicked accept for ride:', selectedRideRequest.id)
    console.log('🚗 Selected ride details:', {
      id: selectedRideRequest.id,
      status: selectedRideRequest.status,
      pickup: selectedRideRequest.pickup_address,
      destination: selectedRideRequest.destination_address
    })
    
    const success = await acceptRide(selectedRideRequest.id);
    console.log('🚗 Accept ride function result:', success)
    
    if (success) {
      console.log('✅ RIDE ACCEPTED SUCCESSFULLY')
      console.log('✅ Closing modal and clearing selected ride...')
      setShowRideRequestModal(false)
      setSelectedRideRequest(null)
      
      // Show success message
      Alert.alert('Success', 'Ride accepted successfully!')
      console.log('✅ Success alert shown')
      console.log('✅ Ride should now appear in current ride section')
    } else {
      console.error('❌ FAILED TO ACCEPT RIDE')
      Alert.alert('Error', 'Failed to accept ride. Please try again.')
    }
  };

  const handleDeclineRide = async () => {
    if (!selectedRideRequest) return;
    
    await declineRide(selectedRideRequest.id);
    setShowRideRequestModal(false);
    setSelectedRideRequest(null);
  };


  const handleDriverArrived = async () => {
    if (!currentRide) return;
    await markDriverArrived(currentRide.id);
  };

  const handleGeneratePickupOTP = async () => {
    if (!currentRide) return;
    
    const otp = await generatePickupOTP(currentRide.id);
    if (otp) {
      setCurrentOTP(otp);
      setOTPModalType('pickup');
      setShowOTPModal(true);
    }
  };

  const handleVerifyPickupOTP = () => {
    setOTPModalType('verify-pickup');
    setShowOTPModal(true);
  };

  const handleOTPVerification = async (otp: string) => {
    if (!currentRide) return;
    
    const success = await verifyPickupOTP(currentRide.id, otp);
    if (success) {
      setShowOTPModal(false);
    }
  };

  const handleStartRide = async () => {
    if (!currentRide) return;
    await startRide(currentRide.id);
  };

  const handleGenerateDropOTP = async () => {
    if (!currentRide) return;
    
    const otp = await generateDropOTP(currentRide.id);
    if (otp) {
      setCurrentOTP(otp);
      setOTPModalType('drop');
      setShowOTPModal(true);
    }
  };

  const handleCallCustomer = () => {
    console.log('=== CALL CUSTOMER BUTTON CLICKED ===');
    console.log('Current ride:', currentRide);
    console.log('Customer data:', currentRide?.customer);

    const customerName = currentRide?.customer?.full_name || 'Customer';
    let phoneNumber = currentRide?.customer?.phone_number;
    const email = currentRide?.customer?.email;

    // Extract phone number from email if it's in the format: +phone@phone.a1taxi.local or phone@a1taxi.app
    if (!phoneNumber && email) {
      const phoneFromEmail = email.match(/^(\+?\d+)@(phone\.)?a1taxi\.(local|app)$/);
      if (phoneFromEmail) {
        phoneNumber = phoneFromEmail[1];
        console.log('✅ Extracted phone number from email:', phoneNumber);
      }
    }

    console.log('Phone number field:', currentRide?.customer?.phone_number);
    console.log('Email field:', email);
    console.log('Final phone number:', phoneNumber);

    if (!phoneNumber) {
      console.log('❌ Phone number not available');

      // Show customer info even if phone is not available
      const message = email
        ? `Phone number not available for ${customerName}.\n\nCustomer Email: ${email}`
        : `Phone number not available for ${customerName}.`;

      if (Platform.OS === 'web') {
        window.alert(message);
      } else {
        Alert.alert('Customer Contact', message);
      }
      return;
    }

    console.log('✅ Initiating call to:', customerName, phoneNumber);

    if (Platform.OS === 'web') {
      const shouldCall = window.confirm(`Call ${customerName}?\n\nPhone: ${phoneNumber}`);
      if (shouldCall) {
        window.open(`tel:${phoneNumber}`);
      }
    } else {
      Alert.alert(
        'Call Customer',
        `${customerName}\n${phoneNumber}`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Call',
            onPress: () => {
              Linking.openURL(`tel:${phoneNumber}`).catch(err => {
                console.error('Error opening phone dialer:', err);
                Alert.alert('Error', 'Unable to open phone dialer');
              });
            }
          }
        ]
      );
    }
  };

  const handleCompleteRide = async () => {
    console.log('🚨 COMPLETE RIDE BUTTON CLICKED!');
    console.log('🚨 Current ride exists:', !!currentRide);
    console.log('🚨 Current ride ID:', currentRide?.id);

    if (!currentRide) return;

    console.log('🚨 About to call completeRide function...');
    try {
      console.log('🚨 Calling completeRide with ID:', currentRide.id);
      const result = await completeRide(currentRide.id);
      console.log('🚨 CompleteRide function completed, result:', result);
      console.log('�� Result has completionData?:', !!result.completionData);
      console.log('🚨 CompletionData object:', JSON.stringify(result.completionData, null, 2));

      if (result.success) {
        console.log('✅ Ride completed successfully');
        if (result.completionData) {
          console.log('🚨 ABOUT TO SET COMPLETION MODAL STATE (SINGLE UPDATE)');
          setCompletionModalState({
            visible: true,
            data: result.completionData
          });
          console.log('🚨 STATE UPDATE COMPLETE - MODAL SHOULD SHOW NOW');
        } else {
          console.error('❌ No completionData in result!');
        }
      } else {
        console.error('❌ Failed to complete ride');
        Alert.alert('Error', 'Failed to complete ride. Please try again.');
      }
    } catch (error) {
      console.error('❌ EXCEPTION in handleCompleteRide:', error);
      console.error('❌ Error type:', typeof error);
      console.error('❌ Error details:', error?.message || String(error));
      console.error('❌ Error stack:', error?.stack);

      const errorMessage = error?.message || error?.toString() || 'Unknown error';
      Alert.alert('Error', `Failed to complete trip: ${errorMessage}`);
    }
  };

  const handleDirectionsToPickup = async () => {
    if (!currentRide) return;
    
    try {
      await openGoogleMapsNavigation(
        parseFloat(currentRide.pickup_latitude.toString()),
        parseFloat(currentRide.pickup_longitude.toString()),
        currentRide.pickup_address
      );
    } catch (error) {
      console.error('Error opening directions to pickup:', error);
      Alert.alert('Error', 'Could not open directions');
    }
  };

  const handleDirectionsToDestination = async () => {
    if (!currentRide) return;
    
    try {
      await openGoogleMapsNavigation(
        parseFloat(currentRide.destination_latitude.toString()),
        parseFloat(currentRide.destination_longitude.toString()),
        currentRide.destination_address
      );
    } catch (error) {
      console.error('Error opening directions to destination:', error);
      Alert.alert('Error', 'Could not open directions');
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return '#10B981';
      case 'busy': return '#F59E0B';
      case 'offline': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getRideStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return '#2563EB';
      case 'driver_arrived': return '#F59E0B';
      case 'in_progress': return '#10B981';
      default: return '#6B7280';
    }
  };

  const formatDistance = (distance: number | null) => {
    if (!distance) return 'N/A';
    if (distance < 1) {
      return `${(distance * 1000).toFixed(0)}m`;
    }
    return `${distance.toFixed(1)}km`;
  };

  return (
    <>
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Rides</Text>
          <View style={styles.headerRight}>
            <View style={[styles.statusDot, { backgroundColor: getStatusColor(driver?.status) }]} />
            <Text style={styles.statusText}>{driver?.status?.toUpperCase() || 'OFFLINE'}</Text>
          </View>
        </View>

        {/* NEW RIDE ALERT BUTTON */}
        {pendingRides.length > 0 && !currentRide && (
          <PendingRideAlert
            count={pendingRides.length}
            onPress={() => {
              console.log('🚗 Alert button tapped - showing first pending ride');
              setSelectedRideRequest(pendingRides[0]);
              setShowRideRequestModal(true);
            }}
          />
        )}

        {/* Driver Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <View style={styles.statusInfo}>
              <Power size={24} color={driver?.status === 'online' ? '#10B981' : '#6B7280'} />
              <View style={styles.statusDetails}>
                <Text style={styles.statusTitle}>Driver Status</Text>
                <Text style={styles.statusSubtitle}>
                  {driver?.status === 'online' ? 'Available for rides' : 
                   driver?.status === 'busy' ? 'On a ride' : 'Not accepting rides'}
                </Text>
              </View>
            </View>
            
            {driver?.status !== 'busy' && (
              <Switch
                value={driver?.status === 'online'}
                onValueChange={(value) => handleStatusToggle(value ? 'online' : 'offline')}
                trackColor={{ false: '#E5E7EB', true: '#10B981' }}
                thumbColor={driver?.status === 'online' ? '#FFFFFF' : '#9CA3AF'}
              />
            )}
          </View>

          {/* Location Info */}
          {currentLocation && (
            <View style={styles.locationInfo}>
              <MapPin size={16} color="#64748B" />
              <Text style={styles.locationText}>
                {currentAddress || `${currentLocation.coords.latitude.toFixed(4)}, ${currentLocation.coords.longitude.toFixed(4)}`}
              </Text>
            </View>
          )}

          {/* Tracking Status */}
          <View style={styles.trackingStatus}>
            <View style={[styles.trackingDot, { backgroundColor: isTracking ? '#10B981' : '#EF4444' }]} />
            <Text style={styles.trackingText}>
              Location tracking: {isTracking ? 'Active' : 'Inactive'}
            </Text>
          </View>

          {/* Background Tracking Status */}
          <View style={styles.trackingStatus}>
            <View style={[styles.trackingDot, { backgroundColor: isBackgroundTrackingActive ? '#10B981' : '#EF4444' }]} />
            <Text style={styles.trackingText}>
              Background tracking: {isBackgroundTrackingActive ? 'Active' : 'Inactive'}
            </Text>
          </View>
        </View>

        {/* Current Ride */}
        {currentRide && (
          <View style={styles.currentRideCard}>
            <View style={styles.rideHeader}>
              <Text style={styles.rideTitle}>Current Ride</Text>
              <View style={[styles.rideStatusBadge, { backgroundColor: getRideStatusColor(currentRide.status) }]}>
                <Text style={styles.rideStatusText}>{currentRide.status.replace('_', ' ').toUpperCase()}</Text>
              </View>
            </View>

            {/* Map */}
            <View style={styles.mapContainer}>
              <MapView height={200} showCurrentRide={true} showRoute={true} />
            </View>

            {/* Ride Details */}
            <View style={styles.rideDetails}>
              <View style={styles.addressContainer}>
                <View style={styles.addressItem}>
                  <View style={[styles.addressDot, { backgroundColor: '#10B981' }]} />
                  <View style={styles.addressWithButton}>
                    <Text style={styles.addressText}>{currentRide.pickup_address}</Text>
                    {(currentRide.status === 'accepted' || currentRide.status === 'driver_arrived') && (
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
                    <Text style={styles.addressText}>{currentRide.destination_address}</Text>
                    {currentRide.status === 'in_progress' && (
                      <TouchableOpacity style={styles.inlineDirectionButton} onPress={handleDirectionsToDestination}>
                        <Navigation size={16} color="#2563EB" />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>

              {/* Customer Info */}
              <View style={styles.customerInfo}>
                <User size={20} color="#64748B" />
                <Text style={styles.customerName}>
                  {currentRide.customer?.full_name || 'Customer'}
                </Text>
                <TouchableOpacity style={styles.phoneButton} onPress={handleCallCustomer}>
                  <Phone size={16} color="#2563EB" />
                </TouchableOpacity>
              </View>

              {/* Promo Code Info */}
              {currentRide.promo_code && currentRide.promo_discount && currentRide.original_fare && (
                <View style={styles.promoInfoCard}>
                  <View style={styles.promoHeader}>
                    <Text style={styles.promoIcon}>🎟️</Text>
                    <Text style={styles.promoLabel}>Customer used promo code</Text>
                  </View>
                  <View style={styles.promoBreakdown}>
                    <View style={styles.promoRow}>
                      <Text style={styles.promoText}>Original Fare:</Text>
                      <Text style={styles.promoValue}>₹{Number(currentRide.original_fare).toFixed(2)}</Text>
                    </View>
                    <View style={styles.promoRow}>
                      <Text style={styles.promoDiscount}>Promo ({currentRide.promo_code}):</Text>
                      <Text style={styles.promoDiscountValue}>-₹{Number(currentRide.promo_discount).toFixed(2)}</Text>
                    </View>
                    <View style={[styles.promoRow, styles.promoFinalRow]}>
                      <Text style={styles.promoFinal}>Final Fare (to collect):</Text>
                      <Text style={styles.promoFinalValue}>₹{Number(currentRide.fare_amount).toFixed(2)}</Text>
                    </View>
                  </View>
                </View>
              )}

              {/* Ride Stats */}
              <View style={styles.rideStats}>
                <View style={styles.statItem}>
                  <IndianRupee size={16} color="#10B981" />
                  <Text style={styles.statText}>₹{currentRide.fare_amount || 'TBD'}</Text>
                </View>
                <View style={styles.statItem}>
                  <MapPin size={16} color="#64748B" />
                  <Text style={styles.statText}>
                    {currentRide.status === 'in_progress' 
                      ? `${formatDistance(currentRide.distance_km)} (Live)` 
                      : formatDistance(currentRide.distance_km)
                    }
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Clock size={16} color="#64748B" />
                  <Text style={styles.statText}>
                    {currentRide.status === 'in_progress' 
                      ? 'Live' 
                      : `${currentRide.duration_minutes || 'TBD'}min`
                    }
                  </Text>
                </View>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              {currentRide.status === 'accepted' && (
                <TouchableOpacity style={styles.arrivedButton} onPress={handleDriverArrived}>
                  <Navigation size={20} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Mark as Arrived</Text>
                </TouchableOpacity>
              )}

              {currentRide.status === 'driver_arrived' && (
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

              {currentRide.status === 'in_progress' && (
                <TouchableOpacity 
                  style={styles.completeButton}
                  onPress={handleCompleteRide}
                >
                  <CheckCircle size={20} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Complete Ride</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        {/* No Current Ride */}
        {!currentRide && driver?.status === 'online' && (
          <View style={styles.noRideCard}>
            <Car size={48} color="#CBD5E1" />
            <Text style={styles.noRideTitle}>Ready for Rides</Text>
            <Text style={styles.noRideText}>
              You're online and ready to receive ride requests
            </Text>
          </View>
        )}

        {!currentRide && driver?.status === 'offline' && (
          <View style={styles.noRideCard}>
            <Power size={48} color="#CBD5E1" />
            <Text style={styles.noRideTitle}>You're Offline</Text>
            <Text style={styles.noRideText}>
              Turn on your status to start receiving ride requests
            </Text>
          </View>
        )}

        {/* Pending Requests Count */}
        {pendingRides.length > 0 && (
          <View style={styles.pendingCard}>
            <AlertCircle size={20} color="#F59E0B" />
            <Text style={styles.pendingText}>
              {pendingRides.length} pending ride request{pendingRides.length > 1 ? 's' : ''}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Ride Request Modal */}
      <RideRequestModal
        visible={showRideRequestModal}
        ride={selectedRideRequest}
        onAccept={handleAcceptRide}
        onDecline={handleDeclineRide}
        onClose={() => {
          // Stop notification sound when modal is closed without action
          notificationSoundService.stopNotificationSound();
          setShowRideRequestModal(false);
          setSelectedRideRequest(null);
        }}
      />

      {/* OTP Modal */}
      <OTPModal
        visible={showOTPModal}
        type={otpModalType}
        currentOTP={currentOTP}
        onVerify={handleOTPVerification}
        onClose={() => setShowOTPModal(false)}
      />
    </SafeAreaView>

    {/* Trip Completion Modal - Rendered outside SafeAreaView for proper z-index */}
    <TripCompletionModal
      visible={completionModalState.visible && !!completionModalState.data}
      tripData={completionModalState.data || {
        distance: 0,
        duration: 0,
        fareBreakdown: {
          booking_type: 'regular',
          vehicle_type: 'sedan',
          base_fare: 0,
          distance_fare: 0,
          time_fare: 0,
          surge_charges: 0,
          deadhead_charges: 0,
          platform_fee: 0,
          gst_on_charges: 0,
          gst_on_platform_fee: 0,
          extra_km_charges: 0,
          driver_allowance: 0,
          total_fare: 0,
          details: {
            actual_distance_km: 0,
            actual_duration_minutes: 0,
            per_km_rate: 0,
          },
          zone_detected: undefined,
          is_inner_zone: undefined
        },
        pickup_address: '',
        destination_address: '',
        booking_type: 'regular',
        rental_hours: null
      }}
      onClose={async () => {
        console.log('🚨 TRIP COMPLETION MODAL CLOSED');
        setCompletionModalState({ visible: false, data: null });
        await clearCurrentRide();

        // AGGRESSIVE: Force immediate UI refresh after modal closes
        console.log('🔄 Forcing immediate UI refresh after completion modal close');
        await refreshRides();

        // AGGRESSIVE: Force component re-render to reflect status change
        setForceRenderKey(prev => prev + 1);
        console.log('✅ Forced component re-render for instant status update');
      }}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statusDetails: {
    marginLeft: 12,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 8,
    flex: 1,
  },
  trackingStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  trackingText: {
    fontSize: 12,
    color: '#64748B',
  },
  currentRideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  rideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rideTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },
  rideStatusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  rideStatusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  mapContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  rideDetails: {
    marginBottom: 20,
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
  promoInfoCard: {
    backgroundColor: '#F0F9FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  promoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  promoIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  promoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  promoBreakdown: {
    gap: 8,
  },
  promoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoText: {
    fontSize: 14,
    color: '#64748B',
  },
  promoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
  },
  promoDiscount: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  promoDiscountValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
  },
  promoFinalRow: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#BFDBFE',
    marginTop: 4,
  },
  promoFinal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  promoFinalValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E40AF',
  },
  rideStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
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
  noRideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    marginBottom: 16,
  },
  noRideTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 16,
    marginBottom: 8,
  },
  noRideText: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 20,
  },
  pendingCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pendingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400E',
    marginLeft: 8,
  },
  progressContainer: {
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  progressSteps: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressStepText: {
    fontSize: 14,
    fontWeight: '600',
  },
  progressLine: {
    flex: 1,
    height: 2,
    marginHorizontal: 8,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  progressLabel: {
    fontSize: 10,
    color: '#64748B',
    textAlign: 'center',
    width: 60,
  },
  directionButton: {
    backgroundColor: '#EBF4FF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  directionButtonText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  // Ride Alert Button Styles
  rideAlertButton: {
    backgroundColor: '#DC2626',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 12,
    shadowColor: '#DC2626',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  rideAlertPulse: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  rideAlertContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rideAlertTextContainer: {
    marginLeft: 12,
    alignItems: 'center',
  },
  rideAlertTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  rideAlertSubtitle: {
    color: '#FFFFFF',
    fontSize: 13,
    marginTop: 2,
    fontWeight: '600',
    opacity: 0.95,
  },
});