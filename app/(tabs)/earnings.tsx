import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  IndianRupee,
  TrendingUp,
  Calendar,
  CreditCard,
  Clock,
  Car
} from 'lucide-react-native';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../utils/supabase';

const { width } = Dimensions.get('window');

type RideEarning = {
  id: string;
  ride_code: string;
  fare_amount: number;
  payment_method: string;
  payment_status: string;
  distance_km: number | null;
  duration_minutes: number | null;
  created_at: string;
  pickup_address: string;
  destination_address: string;
  rating: number | null;
  customer?: {
    full_name: string;
  };
  platform_fee?: number;
  gst_on_platform_fee?: number;
  gst_on_charges?: number;
  ride_charges?: number;
  commission_11_percent?: number;
  you_owe_total?: number;
};

type PeriodStats = {
  rides: number;
  earnings: number;
  youOwe: number;
  distance: number;
  duration: number;
  cashEarnings: number;
  digitalEarnings: number;
  ratings: number;
  ratedRides: number;
};

type EarningsData = {
  today: PeriodStats;
  week: PeriodStats;
  month: PeriodStats;
};

export default function EarningsScreen() {
  const { driver } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month' | 'date'>('today');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedDateStats, setSelectedDateStats] = useState<PeriodStats | null>(null);
  const emptyPeriodStats: PeriodStats = {
    rides: 0,
    earnings: 0,
    youOwe: 0,
    distance: 0,
    duration: 0,
    cashEarnings: 0,
    digitalEarnings: 0,
    ratings: 0,
    ratedRides: 0,
  };

  const [earnings, setEarnings] = useState<EarningsData>({
    today: { ...emptyPeriodStats },
    week: { ...emptyPeriodStats },
    month: { ...emptyPeriodStats },
  });
  const [allRides, setAllRides] = useState<RideEarning[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<RideEarning[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (driver) {
      loadEarningsData();
    }
  }, [driver]);

  const loadEarningsData = async () => {
    if (!driver?.id) return;

    try {
      console.log('=== LOADING EARNINGS DATA ===');
      console.log('Driver ID:', driver.id);
      
      // Fetch all completed rides for this driver with commission breakdown using RPC
      const { data: rides, error } = await supabase
        .rpc('get_driver_earnings_with_commission', {
          p_driver_id: driver.id
        });

      if (error) {
        console.error('Error loading earnings:', error);
        return;
      }

      const completedRides = (rides || []).map(ride => ({
        ...ride,
        customer: {
          full_name: ride.customer_full_name
        }
      }));
      console.log(`✅ Loaded ${completedRides.length} completed rides`);

      // Calculate date ranges
      const now = new Date();
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

      // Initialize period stats
      const todayStats: PeriodStats = { ...emptyPeriodStats };
      const weekStats: PeriodStats = { ...emptyPeriodStats };
      const monthStats: PeriodStats = { ...emptyPeriodStats };

      completedRides.forEach(ride => {
        const rideDate = new Date(ride.created_at);
        const fareAmount = ride.fare_amount || 0;
        const youOweAmount = ride.you_owe_total || 0;
        const distance = ride.distance_km || 0;
        const duration = ride.duration_minutes || 0;
        const rating = ride.rating || 0;

        // Update month stats
        if (rideDate >= monthStart) {
          monthStats.rides++;
          monthStats.earnings += fareAmount;
          monthStats.youOwe += youOweAmount;
          monthStats.distance += distance;
          monthStats.duration += duration;
          if (ride.payment_method === 'cash') {
            monthStats.cashEarnings += fareAmount;
          } else {
            monthStats.digitalEarnings += fareAmount;
          }
          if (rating > 0) {
            monthStats.ratings += rating;
            monthStats.ratedRides++;
          }
        }

        // Update week stats
        if (rideDate >= weekStart) {
          weekStats.rides++;
          weekStats.earnings += fareAmount;
          weekStats.youOwe += youOweAmount;
          weekStats.distance += distance;
          weekStats.duration += duration;
          if (ride.payment_method === 'cash') {
            weekStats.cashEarnings += fareAmount;
          } else {
            weekStats.digitalEarnings += fareAmount;
          }
          if (rating > 0) {
            weekStats.ratings += rating;
            weekStats.ratedRides++;
          }
        }

        // Update today stats
        if (rideDate >= todayStart) {
          todayStats.rides++;
          todayStats.earnings += fareAmount;
          todayStats.youOwe += youOweAmount;
          todayStats.distance += distance;
          todayStats.duration += duration;
          if (ride.payment_method === 'cash') {
            todayStats.cashEarnings += fareAmount;
          } else {
            todayStats.digitalEarnings += fareAmount;
          }
          if (rating > 0) {
            todayStats.ratings += rating;
            todayStats.ratedRides++;
          }
        }
      });

      const earningsData: EarningsData = {
        today: todayStats,
        week: weekStats,
        month: monthStats,
      };

      console.log('📊 Calculated earnings:', earningsData);
      setEarnings(earningsData);

      // Store all rides for date selection
      setAllRides(completedRides);

      // Set recent transactions (last 10 rides)
      setRecentTransactions(completedRides.slice(0, 10));

    } catch (error) {
      console.error('Exception loading earnings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadEarningsData();
    setRefreshing(false);
  };

  const calculateDateStats = (date: Date, rides: RideEarning[]): PeriodStats => {
    const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);

    const dateStats: PeriodStats = { ...emptyPeriodStats };

    rides.forEach(ride => {
      const rideDate = new Date(ride.created_at);
      if (rideDate >= dayStart && rideDate < dayEnd) {
        const fareAmount = ride.fare_amount || 0;
        const youOweAmount = ride.you_owe_total || 0;
        const distance = ride.distance_km || 0;
        const duration = ride.duration_minutes || 0;
        const rating = ride.rating || 0;

        dateStats.rides++;
        dateStats.earnings += fareAmount;
        dateStats.youOwe += youOweAmount;
        dateStats.distance += distance;
        dateStats.duration += duration;
        if (ride.payment_method === 'cash') {
          dateStats.cashEarnings += fareAmount;
        } else {
          dateStats.digitalEarnings += fareAmount;
        }
        if (rating > 0) {
          dateStats.ratings += rating;
          dateStats.ratedRides++;
        }
      }
    });

    return dateStats;
  };

  const getCurrentPeriodStats = (): PeriodStats => {
    switch (selectedPeriod) {
      case 'today': return earnings.today;
      case 'week': return earnings.week;
      case 'month': return earnings.month;
      case 'date': return selectedDateStats || emptyPeriodStats;
      default: return earnings.today;
    }
  };

  const getPeriodLabel = () => {
    switch (selectedPeriod) {
      case 'today': return 'Today';
      case 'week': return 'This Week';
      case 'month': return 'This Month';
      case 'date': return selectedDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      default: return 'Today';
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedPeriod('date');
    const stats = calculateDateStats(date, allRides);
    setSelectedDateStats(stats);
  };

  const generateCalendarDays = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    const days: Date[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentYear, currentMonth, i));
    }
    return days;
  };

  const formatCurrency = (amount: number) => {
    return `₹${amount.toFixed(0)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2563EB" />
          <Text style={styles.loadingText}>Loading earnings data...</Text>
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
        <Text style={styles.title}>Earnings</Text>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {(['today', 'week', 'month'] as const).map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.periodButtonActive
              ]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text
                style={[
                  styles.periodButtonText,
                  selectedPeriod === period && styles.periodButtonTextActive
                ]}
              >
                {period === 'today' ? 'Today' : period === 'week' ? 'Week' : 'Month'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Mini Calendar */}
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <Calendar size={18} color="#2563EB" />
            <Text style={styles.calendarTitle}>
              {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendarScroll}>
            {generateCalendarDays().map((day, index) => {
              const isSelected = selectedPeriod === 'date' &&
                selectedDate.getDate() === day.getDate() &&
                selectedDate.getMonth() === day.getMonth();
              const isToday = day.toDateString() === new Date().toDateString();
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.calendarDay,
                    isSelected && styles.calendarDaySelected,
                    isToday && !isSelected && styles.calendarDayToday
                  ]}
                  onPress={() => handleDateSelect(day)}
                >
                  <Text style={[
                    styles.calendarDayText,
                    isSelected && styles.calendarDayTextSelected,
                    isToday && !isSelected && styles.calendarDayTextToday
                  ]}>
                    {day.getDate()}
                  </Text>
                  <Text style={[
                    styles.calendarDayName,
                    isSelected && styles.calendarDayNameSelected
                  ]}>
                    {day.toLocaleDateString('en-IN', { weekday: 'short' })}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Main Earnings Card */}
        <View style={styles.mainEarningsCard}>
          <View style={styles.earningsHeader}>
            <Text style={styles.earningsLabel}>{getPeriodLabel()} Earnings</Text>
            <View style={styles.trendingContainer}>
              <TrendingUp size={20} color="#10B981" />
              <Text style={styles.trendingText}>
                {getCurrentPeriodStats().rides > 0 ? `${getCurrentPeriodStats().rides} rides` : 'No rides'}
              </Text>
            </View>
          </View>
          <Text style={styles.mainEarningsAmount}>
            {formatCurrency(getCurrentPeriodStats().earnings)}
          </Text>
          <Text style={styles.earningsSubtext}>
            From {selectedPeriod === 'today' ? 'today\'s' : 
                  selectedPeriod === 'week' ? 'this week\'s' : 'this month\'s'} rides
          </Text>
        </View>

        {/* You Owe Card */}
        <View style={styles.youOweCard}>
          <View style={styles.youOweHeader}>
            <Text style={styles.youOweLabel}>You Owe (Commission to Owner)</Text>
          </View>
          <Text style={styles.youOweAmount}>
            {formatCurrency(getCurrentPeriodStats().youOwe)}
          </Text>
          <Text style={styles.youOweSubtext}>
            Platform fee + GST + 11% commission
          </Text>
          <View style={styles.youOweBreakdown}>
            <Text style={styles.youOweBreakdownText}>
              Includes: Platform Fee, GST on Platform Fee, GST on Charges, and 11% of ride charges
            </Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Car size={24} color="#2563EB" />
            <Text style={styles.statValue}>{getCurrentPeriodStats().rides}</Text>
            <Text style={styles.statLabel}>Total Rides</Text>
          </View>
          
          <View style={styles.statCard}>
            <IndianRupee size={24} color="#10B981" />
            <Text style={styles.statValue}>{formatCurrency(getCurrentPeriodStats().rides > 0 ? getCurrentPeriodStats().earnings / getCurrentPeriodStats().rides : 0)}</Text>
            <Text style={styles.statLabel}>Avg per Ride</Text>
          </View>
          
          <View style={styles.statCard}>
            <Clock size={24} color="#F59E0B" />
            <Text style={styles.statValue}>{Math.round(getCurrentPeriodStats().duration / 60 * 10) / 10}hrs</Text>
            <Text style={styles.statLabel}>Online Time</Text>
          </View>
          
          <View style={styles.statCard}>
            <TrendingUp size={24} color="#8B5CF6" />
            <Text style={styles.statValue}>{getCurrentPeriodStats().ratedRides > 0 ? Math.round(getCurrentPeriodStats().ratings / getCurrentPeriodStats().ratedRides * 10) / 10 : 'N/A'}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentMethodsCard}>
          <Text style={styles.cardTitle}>Payment Breakdown</Text>
          <View style={styles.paymentMethods}>
            <View style={styles.paymentMethod}>
              <CreditCard size={20} color="#2563EB" />
              <View style={styles.paymentMethodInfo}>
                <Text style={styles.paymentMethodLabel}>Digital Payments</Text>
                <Text style={styles.paymentMethodAmount}>
                  {formatCurrency(getCurrentPeriodStats().digitalEarnings)}
                </Text>
              </View>
            </View>
            
            <View style={styles.paymentMethod}>
              <IndianRupee size={20} color="#10B981" />
              <View style={styles.paymentMethodInfo}>
                <Text style={styles.paymentMethodLabel}>Cash Payments</Text>
                <Text style={styles.paymentMethodAmount}>
                  {formatCurrency(getCurrentPeriodStats().cashEarnings)}
                </Text>
              </View>
            </View>
          </View>
          
          {/* Additional Stats */}
          <View style={styles.additionalStats}>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatLabel}>Total Distance</Text>
              <Text style={styles.additionalStatValue}>{Math.round(getCurrentPeriodStats().distance * 10) / 10} km</Text>
            </View>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatLabel}>Total Hours</Text>
              <Text style={styles.additionalStatValue}>{Math.round(getCurrentPeriodStats().duration / 60 * 10) / 10} hrs</Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.recentTransactionsCard}>
          <Text style={styles.cardTitle}>Recent Transactions</Text>
          {recentTransactions.length > 0 ? (
            recentTransactions.map((ride) => (
              <View key={ride.id} style={styles.transactionItem}>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionDate}>
                    {formatDate(ride.created_at)} • {formatTime(ride.created_at)}
                  </Text>
                  <Text style={styles.transactionRoute}>
                    {ride.pickup_address}
                  </Text>
                  <Text style={styles.transactionCustomer}>
                    Customer: {ride.customer?.full_name || 'Anonymous'}
                  </Text>
                  <View style={styles.transactionDetails}>
                    <Text style={styles.transactionType}>
                      {ride.payment_method.toUpperCase()}
                    </Text>
                    <Text style={[
                      styles.transactionStatus,
                      { color: ride.payment_status === 'completed' ? '#10B981' : '#F59E0B' }
                    ]}>
                      {ride.payment_status.toUpperCase()}
                    </Text>
                    {ride.rating && (
                      <Text style={styles.transactionRating}>
                        ⭐ {ride.rating}
                      </Text>
                    )}
                  </View>
                </View>
                <Text style={styles.transactionAmount}>
                  {formatCurrency(ride.fare_amount)}
                </Text>
              </View>
            ))
          ) : (
            <View style={styles.emptyTransactions}>
              <Text style={styles.emptyTransactionsText}>No completed rides yet</Text>
            </View>
          )}
        </View>

        {/* Performance Summary */}
        <View style={styles.performanceCard}>
          <Text style={styles.cardTitle}>Performance Summary</Text>
          <View style={styles.performanceGrid}>
            <View style={styles.performanceItem}>
              <Text style={styles.performanceValue}>{getCurrentPeriodStats().rides}</Text>
              <Text style={styles.performanceLabel}>Completed Rides</Text>
            </View>
            <View style={styles.performanceItem}>
              <Text style={styles.performanceValue}>{Math.round(getCurrentPeriodStats().distance * 10) / 10} km</Text>
              <Text style={styles.performanceLabel}>Distance Covered</Text>
            </View>
            <View style={styles.performanceItem}>
              <Text style={styles.performanceValue}>{getCurrentPeriodStats().ratedRides > 0 ? Math.round(getCurrentPeriodStats().ratings / getCurrentPeriodStats().ratedRides * 10) / 10 : 'N/A'}</Text>
              <Text style={styles.performanceLabel}>Average Rating</Text>
            </View>
            <View style={styles.performanceItem}>
              <Text style={styles.performanceValue}>{formatCurrency(getCurrentPeriodStats().rides > 0 ? getCurrentPeriodStats().earnings / getCurrentPeriodStats().rides : 0)}</Text>
              <Text style={styles.performanceLabel}>Avg Fare/Ride</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#2563EB',
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  periodButtonTextActive: {
    color: '#FFFFFF',
  },
  mainEarningsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  earningsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  earningsLabel: {
    fontSize: 16,
    color: '#64748B',
    marginRight: 12,
  },
  trendingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
    marginLeft: 4,
  },
  mainEarningsAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  earningsSubtext: {
    fontSize: 14,
    color: '#64748B',
  },
  youOweCard: {
    backgroundColor: '#FEF2F2',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FCA5A5',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  youOweHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  youOweLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
  },
  youOweAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 8,
  },
  youOweSubtext: {
    fontSize: 13,
    color: '#991B1B',
    marginBottom: 12,
    fontWeight: '500',
  },
  youOweBreakdown: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  youOweBreakdownText: {
    fontSize: 11,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: (width - 44) / 2,
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  paymentMethodsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  paymentMethods: {
    gap: 16,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodInfo: {
    marginLeft: 12,
    flex: 1,
  },
  paymentMethodLabel: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  paymentMethodAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  additionalStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  additionalStatItem: {
    alignItems: 'center',
  },
  additionalStatLabel: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
  },
  additionalStatValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },
  recentTransactionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionDate: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
  },
  transactionRoute: {
    fontSize: 14,
    color: '#1E293B',
    marginBottom: 2,
  },
  transactionCustomer: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
  },
  transactionDetails: {
    flexDirection: 'row',
    gap: 12,
  },
  transactionType: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563EB',
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  transactionRating: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F59E0B',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#10B981',
    marginLeft: 16,
  },
  emptyTransactions: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  emptyTransactionsText: {
    fontSize: 14,
    color: '#94A3B8',
  },
  performanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  performanceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  performanceItem: {
    width: (width - 64) / 2,
    alignItems: 'center',
    marginBottom: 16,
  },
  performanceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  performanceLabel: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  calendarCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  calendarTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginLeft: 8,
  },
  calendarScroll: {
    flexDirection: 'row',
  },
  calendarDay: {
    width: 60,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginRight: 8,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    alignItems: 'center',
  },
  calendarDaySelected: {
    backgroundColor: '#2563EB',
  },
  calendarDayToday: {
    backgroundColor: '#DBEAFE',
    borderWidth: 1,
    borderColor: '#2563EB',
  },
  calendarDayText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  calendarDayTextSelected: {
    color: '#FFFFFF',
  },
  calendarDayTextToday: {
    color: '#2563EB',
  },
  calendarDayName: {
    fontSize: 11,
    color: '#64748B',
    textTransform: 'uppercase',
  },
  calendarDayNameSelected: {
    color: '#FFFFFF',
  },
});