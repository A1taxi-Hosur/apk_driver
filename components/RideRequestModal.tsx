import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import {
  MapPin,
  IndianRupee,
  User,
  Navigation,
  X,
  Check
} from 'lucide-react-native';
import { calculateDistance, getRouteInfo } from '../utils/maps';
import { useLocation } from '../contexts/LocationContext';

const { width, height } = Dimensions.get('window');

interface RideRequestModalProps {
  visible: boolean;
  ride: any;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

export default function RideRequestModal({
  visible,
  ride,
  onAccept,
  onDecline,
  onClose,
}: RideRequestModalProps) {
  const { currentLocation } = useLocation();
  const [tripDistance, setTripDistance] = useState<number | null>(null);
  const [loadingDistance, setLoadingDistance] = useState(false);

  useEffect(() => {
    if (!ride) return;

    const fetchTripDistance = async () => {
      console.log('🗺️ Fetching trip distance from Google Maps...');

      if (!ride.pickup_latitude || !ride.pickup_longitude || !ride.destination_latitude || !ride.destination_longitude) {
        console.warn('⚠️ Missing coordinates for trip distance calculation');
        setTripDistance(null);
        return;
      }

      try {
        const pickupLat = parseFloat(ride.pickup_latitude.toString());
        const pickupLng = parseFloat(ride.pickup_longitude.toString());
        const destLat = parseFloat(ride.destination_latitude.toString());
        const destLng = parseFloat(ride.destination_longitude.toString());

        if (isNaN(pickupLat) || isNaN(pickupLng) || isNaN(destLat) || isNaN(destLng)) {
          console.warn('⚠️ Invalid coordinate values (NaN)');
          setTripDistance(null);
          return;
        }

        setLoadingDistance(true);

        const routeInfo = await getRouteInfo(
          { latitude: pickupLat, longitude: pickupLng },
          { latitude: destLat, longitude: destLng }
        );

        if (routeInfo) {
          console.log('✅ Google Maps trip distance:', routeInfo.distanceValue, 'km');
          setTripDistance(routeInfo.distanceValue);
        } else {
          console.warn('⚠️ Google Maps failed, using Haversine fallback');
          const pickupCoords = { latitude: pickupLat, longitude: pickupLng };
          const destinationCoords = { latitude: destLat, longitude: destLng };
          const fallbackDistance = calculateDistance(pickupCoords, destinationCoords);
          setTripDistance(fallbackDistance);
        }
      } catch (error) {
        console.error('❌ Error fetching trip distance:', error);
        setTripDistance(null);
      } finally {
        setLoadingDistance(false);
      }
    };

    if (visible && ride) {
      fetchTripDistance();
    }
  }, [visible, ride?.id, ride?.pickup_latitude, ride?.pickup_longitude, ride?.destination_latitude, ride?.destination_longitude]);

  if (!ride) return null;

  console.log('🚗 RideRequestModal - Full ride object:', JSON.stringify(ride, null, 2));

  // Safety check: ONLY include the specific fields we need (prevent object spreading issues)
  const safeRide = {
    // Only include primitive fields we actually use in the UI
    id: ride.id,
    booking_type: String(ride.booking_type || 'regular'),
    fare_amount: (ride.fare_amount !== null && ride.fare_amount !== undefined && !isNaN(Number(ride.fare_amount))) ? Number(ride.fare_amount) : 0,
    pickup_address: String(ride.pickup_address || ''),
    destination_address: String(ride.destination_address || ''),
    pickup_landmark: (ride.pickup_landmark && typeof ride.pickup_landmark === 'string') ? String(ride.pickup_landmark) : null,
    destination_landmark: (ride.destination_landmark && typeof ride.destination_landmark === 'string') ? String(ride.destination_landmark) : null,
    distance_km: (ride.distance_km !== null && ride.distance_km !== undefined && !isNaN(Number(ride.distance_km))) ? Number(ride.distance_km) : null,
    customer: {
      full_name: String(ride.customer?.full_name || 'Anonymous Customer'),
      phone_number: String(ride.customer?.phone_number || ''),
      email: String(ride.customer?.email || '')
    }
  };

  const getDistanceToPickup = () => {
    if (!currentLocation || !ride.pickup_latitude || !ride.pickup_longitude) return null;

    const driverCoords = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    };

    const pickupCoords = {
      latitude: parseFloat(ride.pickup_latitude.toString()),
      longitude: parseFloat(ride.pickup_longitude.toString()),
    };

    return calculateDistance(driverCoords, pickupCoords);
  };

  const getRideTypeColor = (type: string) => {
    switch (type) {
      case 'rental': return '#8B5CF6';
      case 'outstation': return '#F59E0B';
      case 'airport': return '#06B6D4';
      default: return '#10B981';
    }
  };

  const distanceToPickup = getDistanceToPickup();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={[styles.rideTypeBadge, { backgroundColor: getRideTypeColor(safeRide.booking_type) }]}>
                <Text style={styles.rideTypeText}>
                  {safeRide.booking_type.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.newRequestText}>New Ride Request</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <X size={24} color="#64748B" />
            </TouchableOpacity>
          </View>

          {/* Customer Info */}
          <View style={styles.customerSection}>
            <View style={styles.customerAvatar}>
              <User size={24} color="#64748B" />
            </View>
            <View style={styles.customerDetails}>
              <Text style={styles.customerName}>
                {safeRide.customer.full_name}
              </Text>
            </View>
          </View>

          {/* Trip Details */}
          <View style={styles.tripSection}>
            <View style={styles.addressContainer}>
              <View style={styles.addressItem}>
                <View style={[styles.addressDot, { backgroundColor: '#10B981' }]} />
                <View style={styles.addressInfo}>
                  <Text style={styles.addressLabel}>Pickup</Text>
                  <Text style={styles.addressText}>{safeRide.pickup_address}</Text>
                  {safeRide.pickup_landmark && (
                    <Text style={styles.landmarkText}>Near {safeRide.pickup_landmark}</Text>
                  )}
                </View>
              </View>

              <View style={styles.routeLine} />

              <View style={styles.addressItem}>
                <View style={[styles.addressDot, { backgroundColor: '#EF4444' }]} />
                <View style={styles.addressInfo}>
                  <Text style={styles.addressLabel}>Destination</Text>
                  <Text style={styles.addressText}>{safeRide.destination_address}</Text>
                  {safeRide.destination_landmark && (
                    <Text style={styles.landmarkText}>Near {safeRide.destination_landmark}</Text>
                  )}
                </View>
              </View>
            </View>
          </View>

          {/* Trip Stats */}
          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <IndianRupee size={20} color="#10B981" />
              <View style={styles.statInfo}>
                <Text style={styles.statValue}>
                  {safeRide.fare_amount > 0 ? `₹${safeRide.fare_amount}` : 'TBD'}
                </Text>
                <Text style={styles.statLabel}>Estimated Fare</Text>
              </View>
            </View>

            {distanceToPickup && (
              <View style={styles.statItem}>
                <Navigation size={20} color="#2563EB" />
                <View style={styles.statInfo}>
                  <Text style={styles.statValue}>{distanceToPickup.toFixed(1)}km</Text>
                  <Text style={styles.statLabel}>Distance to Pickup</Text>
                </View>
              </View>
            )}

            <View style={styles.statItem}>
              <MapPin size={20} color="#F59E0B" />
              <View style={styles.statInfo}>
                <Text style={styles.statValue}>
                  {loadingDistance
                    ? 'Calculating...'
                    : tripDistance !== null && tripDistance !== undefined
                    ? `${tripDistance.toFixed(1)}km`
                    : (safeRide.distance_km ? `${safeRide.distance_km}km` : 'N/A')}
                </Text>
                <Text style={styles.statLabel}>Trip Distance (Road)</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.declineButton}
              onPress={onDecline}
            >
              <X size={24} color="#FFFFFF" />
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.acceptButton}
              onPress={onAccept}
            >
              <Check size={24} color="#FFFFFF" />
              <Text style={styles.acceptButtonText}>Accept Ride</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxHeight: height * 0.8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rideTypeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 12,
  },
  rideTypeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  newRequestText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  closeButton: {
    padding: 8,
  },
  subtitleContainer: {
    backgroundColor: '#F0F9FF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
    textAlign: 'center',
  },
  customerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  customerAvatar: {
    width: 48,
    height: 48,
    backgroundColor: '#E2E8F0',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  customerDetails: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  tripSection: {
    marginBottom: 20,
  },
  addressContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  addressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
    marginTop: 4,
  },
  addressInfo: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 2,
  },
  landmarkText: {
    fontSize: 12,
    color: '#64748B',
  },
  routeLine: {
    width: 2,
    height: 20,
    backgroundColor: '#CBD5E1',
    marginLeft: 5,
    marginVertical: 8,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statInfo: {
    alignItems: 'center',
    marginTop: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButton: {
    flex: 2,
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  timerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  timerText: {
    fontSize: 14,
    color: '#F59E0B',
    marginLeft: 8,
    fontWeight: '500',
  },
  instructionsSection: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  instructionsText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 16,
  },
});