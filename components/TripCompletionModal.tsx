import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { CircleCheck as CheckCircle, MapPin, Clock } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface TripCompletionModalProps {
  visible: boolean;
  tripData: {
    distance: number;
    duration: number;
    fareBreakdown: {
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
      extra_km_charges?: number;
      driver_allowance?: number;
      total_fare: number;
      details?: {
        actual_distance_km: number;
        actual_duration_minutes: number;
        per_km_rate: number;
      };
    };
    pickup_address: string;
    destination_address: string;
    booking_type: string;
    rental_hours?: number | null;
  };
  onClose: () => void;
}

export default function TripCompletionModal({
  visible,
  tripData,
  onClose,
}: TripCompletionModalProps) {
  const formatCurrency = (amount: number | string): string => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numericAmount)) {
      return '₹0.00';
    }
    return `₹${numericAmount.toFixed(2)}`;
  };

  console.log('🎯🎯🎯 TripCompletionModal RENDER - visible:', visible);
  console.log('🎯🎯🎯 tripData:', JSON.stringify(tripData, null, 2));

  if (!visible) {
    console.log('❌ Not visible - returning null');
    return null;
  }

  console.log('✅✅✅ RENDERING TRIP COMPLETION SCREEN - THIS SHOULD DEFINITELY SHOW!');

  const isRentalOrOutstationOrAirport = ['rental', 'outstation', 'airport'].includes(tripData.booking_type);

  return (
    <View style={styles.fullScreenOverlay}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <CheckCircle size={48} color="#10B981" />
            <Text style={styles.headerTitle}>Trip Completed!</Text>
            <Text style={styles.headerSubtitle}>Well done! Here's your earnings</Text>
          </View>

          {/* Trip Summary */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Trip Summary</Text>

            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <MapPin size={20} color="#64748B" />
                <Text style={styles.summaryLabel}>Distance</Text>
              </View>
              <Text style={styles.summaryValue}>
                {(tripData.fareBreakdown?.details?.actual_distance_km || tripData.distance).toFixed(2)} km
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <Clock size={20} color="#64748B" />
                <Text style={styles.summaryLabel}>Duration</Text>
              </View>
              <Text style={styles.summaryValue}>
                {tripData.fareBreakdown?.details?.actual_duration_minutes || tripData.duration} mins
              </Text>
            </View>

            {isRentalOrOutstationOrAirport && tripData.rental_hours && (
              <View style={styles.summaryRow}>
                <View style={styles.summaryItem}>
                  <Clock size={20} color="#64748B" />
                  <Text style={styles.summaryLabel}>Package</Text>
                </View>
                <Text style={styles.summaryValue}>{tripData.rental_hours} hours</Text>
              </View>
            )}
          </View>

          {/* Route */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Route</Text>

            <View style={styles.addressContainer}>
              <View style={styles.addressItem}>
                <View style={[styles.addressDot, { backgroundColor: '#10B981' }]} />
                <Text style={styles.addressText}>{tripData.pickup_address}</Text>
              </View>
              <View style={styles.routeLine} />
              <View style={styles.addressItem}>
                <View style={[styles.addressDot, { backgroundColor: '#EF4444' }]} />
                <Text style={styles.addressText}>{tripData.destination_address}</Text>
              </View>
            </View>
          </View>

          {/* Fare Breakdown */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Fare Breakdown</Text>

            {tripData.booking_type === 'regular' && (
              <>
                <View style={styles.fareRow}>
                  <Text style={styles.fareLabel}>Base Fare</Text>
                  <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.base_fare)}</Text>
                </View>

                <View style={styles.fareRow}>
                  <Text style={styles.fareLabel}>Distance Fare</Text>
                  <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.distance_fare)}</Text>
                </View>

                {tripData.fareBreakdown.time_fare > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Time Fare</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.time_fare)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.surge_charges > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Surge Charges</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.surge_charges)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.deadhead_charges > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Deadhead Charges</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.deadhead_charges)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.platform_fee > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Platform Fee</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.platform_fee)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.gst_on_charges > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>GST on Charges</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.gst_on_charges)}</Text>
                  </View>
                )}

                <View style={styles.separator} />

                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Your Earnings</Text>
                  <Text style={styles.totalValue}>{formatCurrency(tripData.fareBreakdown.total_fare)}</Text>
                </View>
              </>
            )}

            {isRentalOrOutstationOrAirport && (
              <>
                <View style={styles.fareRow}>
                  <Text style={styles.fareLabel}>Base Fare</Text>
                  <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.base_fare)}</Text>
                </View>

                {tripData.fareBreakdown.extra_km_charges && tripData.fareBreakdown.extra_km_charges > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Extra KM Charges</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.extra_km_charges)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.driver_allowance && tripData.fareBreakdown.driver_allowance > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Driver Allowance</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.driver_allowance)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.deadhead_charges > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Deadhead Charges</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.deadhead_charges)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.surge_charges > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Surge Charges</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.surge_charges)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.platform_fee > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>Platform Fee</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.platform_fee)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.gst_on_charges > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>GST on Charges</Text>
                    <Text style={styles.fareValue}>{formatCurrency(tripData.fareBreakdown.gst_on_charges)}</Text>
                  </View>
                )}

                {tripData.fareBreakdown.gst_on_platform_fee > 0 && (
                  <View style={styles.fareRow}>
                    <Text style={styles.fareLabel}>GST on Platform Fee</Text>
                    <Text style={styles.fareValue}>
                      {formatCurrency(tripData.fareBreakdown.gst_on_platform_fee)}
                    </Text>
                  </View>
                )}

                <View style={styles.separator} />

                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Your Earnings</Text>
                  <Text style={styles.totalValue}>{formatCurrency(tripData.fareBreakdown.total_fare)}</Text>
                </View>
              </>
            )}
          </View>

          {/* Action Button */}
          <TouchableOpacity style={styles.doneButton} onPress={onClose}>
            <Text style={styles.doneButtonText}>Close & Continue</Text>
          </TouchableOpacity>

          <View style={{ height: 40 }} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 999999,
    elevation: 999999,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scrollView: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 12,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#64748B',
    fontWeight: '500',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  addressContainer: {
    gap: 0,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  addressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  addressText: {
    flex: 1,
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  routeLine: {
    width: 2,
    height: 16,
    backgroundColor: '#CBD5E1',
    marginLeft: 5,
    marginVertical: 4,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  fareLabel: {
    fontSize: 15,
    color: '#64748B',
  },
  fareValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1E293B',
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 12,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10B981',
  },
  doneButton: {
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
