import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '../utils/supabase'
import { useAuth } from './AuthContext'
import { FareCalculationService } from '../services/FareCalculationService'
import { TripLocationTracker } from '../services/TripLocationTracker'
import { notificationSoundService } from '../services/NotificationSoundService'
import { rideNotificationService } from '../services/RideNotificationService'
import { DebugLogger } from '../utils/debugLogger'
import { calculateDistance } from '../utils/maps'

type Ride = {
  id: string
  ride_code: string
  customer_id: string
  driver_id: string | null
  pickup_latitude: number
  pickup_longitude: number
  pickup_address: string
  pickup_landmark: string | null
  destination_latitude: number
  destination_longitude: number
  destination_address: string
  destination_landmark: string | null
  status: 'requested' | 'accepted' | 'driver_arrived' | 'in_progress' | 'completed' | 'cancelled'
  fare_amount: number | null
  distance_km: number | null
  duration_minutes: number | null
  payment_status: 'pending' | 'completed' | 'failed'
  payment_method: 'cash' | 'card' | 'wallet'
  rating: number | null
  feedback: string | null
  cancelled_by: string | null
  cancellation_reason: string | null
  booking_type: 'regular' | 'rental' | 'outstation' | 'airport'
  vehicle_type: string
  trip_type: 'one_way' | 'round_trip' | null
  rental_hours: number | null
  pickup_otp: string | null
  drop_otp: string | null
  promo_code: string | null
  promo_discount: number | null
  original_fare: number | null
  created_at: string
  updated_at: string
  scheduled_time: string | null
  customer?: {
    id: string
    full_name: string
    phone_number: string
    email: string
  }
}

interface RideContextType {
  currentRide: Ride | null
  pendingRides: Ride[]
  loading: boolean
  error: string | null
  acceptRide: (rideId: string) => Promise<boolean>
  declineRide: (rideId: string) => Promise<void>
  markDriverArrived: (rideId: string) => Promise<void>
  generatePickupOTP: (rideId: string) => Promise<string | null>
  verifyPickupOTP: (rideId: string, otp: string) => Promise<boolean>
  startRide: (rideId: string) => Promise<void>
  generateDropOTP: (rideId: string) => Promise<string | null>
  completeRide: (rideId: string) => Promise<{ success: boolean; completionData?: any }>
  cancelRide: (rideId: string, reason: string) => Promise<void>
  refreshRides: () => Promise<void>
  clearCurrentRide: () => Promise<void>
  clearError: () => void
}

const RideContext = createContext<RideContextType>({} as RideContextType)

export const useRide = () => {
  const context = useContext(RideContext)
  if (!context) {
    throw new Error('useRide must be used within a RideProvider')
  }
  return context
}

interface RideProviderProps {
  children: ReactNode
}

export function RideProvider({ children }: RideProviderProps) {
  const [currentRide, setCurrentRide] = useState<Ride | null>(null)
  const [pendingRides, setPendingRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [previousPendingCount, setPreviousPendingCount] = useState(0)
  const [isLoadingRides, setIsLoadingRides] = useState(false)
  const isMountedRef = React.useRef(true)
  const lastLoadRidesTime = React.useRef<number>(0)
  const processedNotifications = React.useRef<Set<string>>(new Set())
  const { driver, updateDriverStatus } = useAuth()

  useEffect(() => {
    isMountedRef.current = true

    if (driver) {
      console.log('=== RIDE CONTEXT INITIALIZED ===')
      console.log('Driver:', driver.user?.full_name)
      console.log('Driver ID:', driver.id)
      console.log('Driver Status:', driver.status)

      // Initialize notification services
      notificationSoundService.initialize()
      rideNotificationService.initialize()

      // Load initial rides
      loadRides()

      // Set up real-time subscriptions with cleanup
      const unsubscribe = setupRealTimeSubscriptions()

      // Set up auto-refresh every 2 seconds
      const refreshInterval = setInterval(() => {
        if (isMountedRef.current) {
          console.log('🔄 Auto-refreshing rides (2-second interval)...')
          loadRides()
        }
      }, 2000)

      return () => {
        console.log('🛑 Cleaning up RideContext...')
        isMountedRef.current = false
        clearInterval(refreshInterval)
        if (unsubscribe) unsubscribe()
        notificationSoundService.cleanup()
      }
    }

    return () => {
      isMountedRef.current = false
    }
  }, [driver])

  const setupRealTimeSubscriptions = () => {
    if (!driver) return

    console.log('=== SETTING UP REAL-TIME SUBSCRIPTIONS ===')
    console.log('Driver User ID:', driver.user_id)
    console.log('Driver ID:', driver.id)

    // Subscribe to ride changes for this driver
    const rideSubscription = supabase
      .channel('driver-rides')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rides',
          filter: `driver_id=eq.${driver.id}`
        },
        (payload) => {
          console.log('🔔 Real-time ride update for driver:', payload)
          handleRideUpdate(payload)
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${driver.user_id}`
        },
        (payload) => {
          console.log('🔔 Real-time notification for driver:', payload)
          handleNotificationUpdate(payload)
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'drivers',
          filter: `id=eq.${driver.id}`
        },
        (payload) => {
          console.log('🔔 Real-time driver status update:', payload)
          handleDriverStatusUpdate(payload)
        }
      )
      .subscribe()

    console.log('✅ Real-time subscriptions established (rides, notifications, driver status)')

    return () => {
      console.log('🔌 Cleaning up real-time subscriptions')
      rideSubscription.unsubscribe()
    }
  }

  const handleDriverStatusUpdate = async (payload: any) => {
    console.log('=== HANDLING DRIVER STATUS UPDATE ===')
    console.log('Event type:', payload.eventType)
    console.log('New driver data:', payload.new)

    if (payload.eventType === 'UPDATE' && payload.new) {
      const updatedDriver = payload.new

      if (updatedDriver.status && driver && updatedDriver.status !== driver.status) {
        console.log(`✅ Driver status changed: ${driver.status} → ${updatedDriver.status}`)
        console.log('🔄 Syncing driver status in AuthContext')

        // Update driver status via AuthContext (this updates local state)
        await updateDriverStatus(updatedDriver.status)

        console.log('✅ Driver status synced successfully via real-time update')

        // If driver went back to online, refresh rides to show available requests
        if (updatedDriver.status === 'online') {
          console.log('🔄 Driver is now online - refreshing available rides')
          await loadRides()
        }
      }
    }
  }

  const handleRideUpdate = async (payload: any) => {
    console.log('=== HANDLING RIDE UPDATE ===')
    console.log('Event type:', payload.eventType)
    console.log('Ride data:', payload.new || payload.old)

    if (payload.eventType === 'UPDATE' && payload.new) {
      const updatedRide = payload.new

      // Update current ride if it matches
      setCurrentRide(prev => {
        if (prev && prev.id === updatedRide.id) {
          console.log('✅ Updating current ride via real-time')
          return { ...prev, ...updatedRide }
        }
        return prev
      })

      // CRITICAL: Sync driver status when ride is cancelled or completed
      if (updatedRide.status === 'cancelled' || updatedRide.status === 'completed') {
        console.log(`🔄 Ride ${updatedRide.status} - syncing driver status from database`)

        if (!driver) return

        try {
          // Fetch updated driver status from database
          const { data: driverData, error } = await supabase
            .from('drivers')
            .select('status')
            .eq('id', driver.id)
            .single()

          if (error) {
            console.error('❌ Error fetching driver status:', error)
            return
          }

          if (driverData && driverData.status !== driver.status) {
            console.log(`✅ Driver status changed: ${driver.status} → ${driverData.status}`)
            console.log('🔄 Updating local driver status to match database')

            // Update driver status via AuthContext (this updates local state)
            await updateDriverStatus(driverData.status)

            console.log('✅ Driver status synced successfully')

            // Clear current ride if cancelled or completed
            if (updatedRide.id === currentRide?.id) {
              console.log('🗑️ Clearing current ride from state')
              setCurrentRide(null)
              await loadRides()
            }
          } else {
            console.log('✅ Driver status already up-to-date:', driverData?.status)
          }
        } catch (error) {
          console.error('❌ Exception syncing driver status:', error)
        }
      }
    }
  }

  const handleNotificationUpdate = async (payload: any) => {
    console.log('=== HANDLING NOTIFICATION UPDATE ===')
    console.log('Notification payload:', payload)

    if (payload.eventType === 'INSERT' && payload.new) {
      const notification = payload.new

      if (notification.type === 'ride_request' && notification.data?.ride_id) {
        const rideId = notification.data.ride_id

        // CRITICAL: Deduplicate notification processing
        if (processedNotifications.current.has(rideId)) {
          console.log('⏭️ Notification already processed for ride:', rideId)
          return
        }

        // Mark as processed
        processedNotifications.current.add(rideId)

        // Clean up old processed notifications after 5 minutes
        setTimeout(() => {
          processedNotifications.current.delete(rideId)
        }, 5 * 60 * 1000)

        console.log('🚗 New ride request notification received')
        console.log('Ride ID from notification:', rideId)

        // Play notification sound and vibration
        console.log('🔊 Playing notification sound and vibration')
        await notificationSoundService.playRideRequestNotification()

        // Show visual notification over other apps
        const rideData = notification.data
        await rideNotificationService.showRideRequestNotification({
          rideId: rideData.ride_id,
          rideCode: rideData.ride_code || 'N/A',
          pickupAddress: rideData.pickup_address || 'Unknown pickup',
          destinationAddress: rideData.destination_address || 'Unknown destination',
          customerName: rideData.customer_name || 'Customer',
          fareAmount: rideData.fare_amount || 0,
          distance: rideData.distance,
          bookingType: rideData.booking_type || 'regular',
        })

        // Refresh rides to get the new request (debounced by loadRides)
        await loadRides()
      }
    }
  }

  const loadRides = async () => {
    if (!driver || !isMountedRef.current) return

    // Debounce: Don't load rides if called within last 500ms
    const now = Date.now()
    if (now - lastLoadRidesTime.current < 500) {
      console.log('⏸️ loadRides called too soon, debouncing...')
      return
    }
    lastLoadRidesTime.current = now

    // Prevent concurrent loadRides calls
    if (isLoadingRides) {
      console.log('⏸️ loadRides already in progress, skipping...')
      return
    }

    try {
      setIsLoadingRides(true)
      console.log('=== LOADING RIDES ===')
      console.log('Driver ID:', driver.id)
      console.log('Driver User ID:', driver.user_id)

      if (!isMountedRef.current) return
      setLoading(true)

      // Load current ride (accepted, in_progress, driver_arrived)
      console.log('🔍 Loading current ride...')
      const { data: currentRideData, error: currentRideError } = await supabase
        .rpc('get_driver_current_ride', {
          p_driver_id: driver.id
        })

      if (currentRideError) {
        console.error('Error loading current ride:', currentRideError)
      } else {
        const ride = currentRideData && currentRideData.length > 0 ? {
          ...currentRideData[0],
          customer: {
            id: currentRideData[0].customer_id,
            full_name: currentRideData[0].customer_full_name,
            phone_number: currentRideData[0].customer_phone,
            email: currentRideData[0].customer_email
          }
        } : null
        if (isMountedRef.current) {
          setCurrentRide(ride)
        }
        console.log('✅ Current ride loaded:', ride ? {
          id: ride.id,
          status: ride.status,
          pickup: ride.pickup_address,
          destination: ride.destination_address,
          customer: ride.customer
        } : 'none')
      }

      // Load pending rides (notifications for this driver)
      // Only show pending rides if driver doesn't have a current ride
      const hasCurrentRide = currentRideData && currentRideData.length > 0;

      if (hasCurrentRide) {
        console.log('⚠️ Driver has current ride - not loading pending ride requests');
        setPendingRides([]);
      } else {
        console.log('🔍 Loading pending ride notifications...')
        const { data: notifications, error: notificationsError } = await supabase
          .rpc('get_user_notifications', {
            p_user_id: driver.user_id,
            p_type: 'ride_request',
            p_status: 'unread',
            p_limit: 50
          })

        if (notificationsError) {
          console.error('Error loading notifications:', notificationsError)
          setPendingRides([])
        } else {
          console.log(`📋 Found ${notifications?.length || 0} unread ride notifications`)

        if (notifications && notifications.length > 0) {
          // Get all ride IDs from notifications
          const rideIds = notifications
            .filter(n => n.data?.ride_id)
            .map(n => n.data.ride_id)

          // Fetch actual rides from database to validate they still exist
          const { data: actualRides, error: ridesError } = await supabase
            .rpc('get_available_rides', {
              p_ride_ids: rideIds
            })

          if (ridesError) {
            console.error('Error validating rides:', ridesError)
          }

          // Create a Set of valid ride IDs
          const validRideIds = new Set(actualRides?.map(r => r.id) || [])
          console.log(`✅ ${validRideIds.size} rides are still valid and available`)

          // Only show notifications for rides that still exist and are available
          const validNotifications = notifications.filter(n => validRideIds.has(n.data?.ride_id))

          // Auto-cleanup invalid notifications
          const invalidNotifications = notifications.filter(n => !validRideIds.has(n.data?.ride_id))
          if (invalidNotifications.length > 0) {
            console.log(`🧹 Cleaning up ${invalidNotifications.length} invalid notifications`)
            const invalidNotifIds = invalidNotifications.map(n => n.id)
            await supabase.rpc('update_notification_status', {
              p_notification_ids: invalidNotifIds,
              p_user_id: driver.user_id,
              p_status: 'read'
            })
          }

          // Convert valid notifications to ride objects
          // Only show regular rides in pendingRides - rental/outstation/airport are admin-assigned
          const rideRequests = validNotifications
            .filter(n => n.data?.ride_id && n.data?.booking_type === 'regular')
            .map(n => ({
              id: n.data.ride_id,
              ride_code: n.data.ride_code || 'N/A',
              customer_id: n.data.customer_id,
              driver_id: null,
              pickup_latitude: n.data.pickup_latitude,
              pickup_longitude: n.data.pickup_longitude,
              pickup_address: n.data.pickup_address,
              pickup_landmark: n.data.pickup_landmark,
              destination_latitude: n.data.destination_latitude,
              destination_longitude: n.data.destination_longitude,
              destination_address: n.data.destination_address,
              destination_landmark: n.data.destination_landmark,
              status: 'requested' as const,
              fare_amount: n.data.fare_amount,
              distance_km: null,
              duration_minutes: null,
              payment_status: 'pending' as const,
              payment_method: 'cash' as const,
              rating: null,
              feedback: null,
              cancelled_by: null,
              cancellation_reason: null,
              booking_type: n.data.booking_type || 'regular' as const,
              vehicle_type: n.data.vehicle_type || 'sedan',
              rental_hours: n.data.rental_hours,
              pickup_otp: null,
              drop_otp: null,
              created_at: n.created_at,
              updated_at: n.updated_at || n.created_at,
              scheduled_time: null,
              customer: {
                id: n.data.customer_id,
                full_name: n.data.customer_name || 'Customer',
                phone_number: n.data.customer_phone || '',
                email: ''
              }
            }))

          // Play notification sound and show visual notification if we have new pending rides
          if (rideRequests.length > previousPendingCount && rideRequests.length > 0) {
            console.log('🔊 New ride request detected! Playing notification sound')
            await notificationSoundService.playRideRequestNotification()

            // Show visual notification for the newest ride
            const newestRide = rideRequests[0]
            await rideNotificationService.showRideRequestNotification({
              rideId: newestRide.id,
              rideCode: newestRide.ride_code,
              pickupAddress: newestRide.pickup_address,
              destinationAddress: newestRide.destination_address,
              customerName: newestRide.customer?.full_name || 'Customer',
              fareAmount: newestRide.fare_amount || 0,
              bookingType: newestRide.booking_type,
            })
          }

          if (isMountedRef.current) {
            setPreviousPendingCount(rideRequests.length)
            setPendingRides(rideRequests)
          }
          console.log('✅ Pending rides loaded:', rideRequests.length)
        } else {
          if (isMountedRef.current) {
            setPendingRides([])
          }
          console.log('✅ No pending ride notifications')
        }
        }
      }

    } catch (error) {
      console.error('Exception loading rides:', error)
      if (isMountedRef.current) {
        setError('Failed to load rides')
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false)
      }
      setIsLoadingRides(false)
    }
  }

  const acceptRide = async (rideId: string): Promise<boolean> => {
    if (!driver) return false

    try {
      console.log('=== ACCEPTING RIDE ===')
      console.log('Ride ID:', rideId)
      console.log('Driver ID:', driver.id)

      // Stop notification sound and clear notifications immediately when accepting
      console.log('🛑 Stopping notification sound and clearing notifications (ride accepted)')
      await notificationSoundService.stopNotificationSound()
      await rideNotificationService.dismissAllNotifications()
      await rideNotificationService.clearBadge()

      // Use RPC function to accept ride (more reliable than edge function)
      const { data: result, error } = await supabase.rpc('accept_ride_rpc', {
        p_ride_id: rideId,
        p_driver_id: driver.id
      })

      if (error) {
        console.error('❌ RPC error accepting ride:', error)
        setError('Failed to accept ride')
        return false
      }

      if (result?.success) {
        console.log('✅ Ride accepted successfully via RPC')
        console.log('Ride code:', result.ride_code)
        console.log('RPC returned ride status:', result.status)
        console.log('RPC returned driver_id:', result.driver_id)

        // Mark notification as read (accepted)
        console.log('📝 Marking notification as read for ride:', rideId)
        const { data: markResult, error: markError } = await supabase.rpc('mark_ride_notification_as_read', {
          p_user_id: driver.user_id,
          p_ride_id: rideId
        })

        if (markError) {
          console.error('❌ Error marking notification as read:', markError)
        } else {
          console.log('✅ Notification marked as read:', markResult)
        }

        // Immediately remove from pending rides
        setPendingRides(prev => {
          const filtered = prev.filter(ride => ride.id !== rideId)
          console.log(`✅ Removed accepted ride from pending list. ${prev.length} → ${filtered.length} rides`)
          return filtered
        })

        // Update local driver status
        await updateDriverStatus('busy')

        // Prevent loadRides for 2 seconds to avoid race conditions
        setIsLoadingRides(true)

        // Small delay to ensure database update propagates
        await new Promise(resolve => setTimeout(resolve, 500))

        // Refresh rides to get updated data
        console.log('🔄 Refreshing rides after acceptance...')
        await loadRides()
        console.log('✅ Rides refreshed')

        // Re-enable loadRides after cooldown
        setTimeout(() => {
          setIsLoadingRides(false)
          console.log('✅ Ready to load new rides after accept cooldown')
        }, 2000)

        return true
      } else {
        console.error('❌ Failed to accept ride:', result?.error)
        setError(result?.error || 'Failed to accept ride')
        return false
      }
    } catch (error) {
      console.error('Exception accepting ride:', error)
      setError('Failed to accept ride')
      return false
    }
  }

  const declineRide = async (rideId: string): Promise<void> => {
    if (!driver) return

    try {
      console.log('=== DECLINING RIDE ===')
      console.log('Ride ID:', rideId)

      // Stop notification sound and clear notifications when declining
      console.log('🛑 Stopping notification sound and clearing notifications (ride declined)')
      await notificationSoundService.stopNotificationSound()
      await rideNotificationService.dismissAllNotifications()
      await rideNotificationService.clearBadge()

      // Mark notification as read (declined) using RPC
      console.log('📝 Marking notification as read for ride:', rideId)
      const { data: markResult, error: markError } = await supabase.rpc('mark_ride_notification_as_read', {
        p_user_id: driver.user_id,
        p_ride_id: rideId
      })

      if (markError) {
        console.error('❌ Error marking notification as read:', markError)
      } else {
        console.log('✅ Notification marked as read:', markResult)
      }

      // Immediately remove from pending rides (don't wait for auto-refresh)
      setPendingRides(prev => {
        const filtered = prev.filter(ride => ride.id !== rideId)
        console.log(`✅ Removed ride from pending list. ${prev.length} → ${filtered.length} rides`)
        return filtered
      })

      // Also ensure no loadRides happens for 3 seconds after decline
      setIsLoadingRides(true)
      setTimeout(() => {
        setIsLoadingRides(false)
        console.log('✅ Ready to load new rides after decline cooldown')
      }, 3000)

      console.log('✅ Ride declined successfully')
    } catch (error) {
      console.error('Exception declining ride:', error)
      setError('Failed to decline ride')
    }
  }

  const markDriverArrived = async (rideId: string): Promise<void> => {
    if (!driver) return

    try {
      console.log('=== MARKING DRIVER ARRIVED ===')
      console.log('Ride ID:', rideId)

      const { data: result, error } = await supabase
        .rpc('update_ride_status_for_driver', {
          p_ride_id: rideId,
          p_driver_id: driver.id,
          p_status: 'driver_arrived'
        })

      if (error || !result?.success) {
        console.error('Error marking driver arrived:', error || result?.error)
        setError('Failed to mark as arrived')
        return
      }

      // Reload rides to get updated data
      await loadRides()
      console.log('✅ Driver marked as arrived')
    } catch (error) {
      console.error('Exception marking driver arrived:', error)
      setError('Failed to mark as arrived')
    }
  }

  const generatePickupOTP = async (rideId: string): Promise<string | null> => {
    try {
      console.log('=== GENERATING PICKUP OTP ===')
      console.log('Ride ID:', rideId)

      const otp = Math.floor(1000 + Math.random() * 9000).toString()

      const { data: result, error } = await supabase
        .rpc('update_ride_pickup_otp', {
          p_ride_id: rideId,
          p_driver_id: driver?.id,
          p_otp: otp
        })

      if (error || !result?.success) {
        console.error('Error generating pickup OTP:', error || result?.error)
        setError('Failed to generate OTP')
        return null
      }

      console.log('✅ Pickup OTP generated:', otp)
      return otp
    } catch (error) {
      console.error('Exception generating pickup OTP:', error)
      setError('Failed to generate OTP')
      return null
    }
  }

  const verifyPickupOTP = async (rideId: string, otp: string): Promise<boolean> => {
    if (!driver) return false

    try {
      console.log('=== VERIFYING PICKUP OTP ===')
      console.log('Ride ID:', rideId)
      console.log('OTP:', otp)

      const { data: result, error } = await supabase
        .rpc('verify_and_start_ride', {
          p_ride_id: rideId,
          p_driver_id: driver.id,
          p_otp: otp
        })

      if (error || !result?.success) {
        console.error('Error verifying OTP:', error || result?.error)
        setError(result?.error || 'Failed to verify OTP')
        return false
      }

      // Reload rides to get updated status
      await loadRides()

      // Start trip location tracking
      await TripLocationTracker.startTripTracking(rideId, 'regular', driver.id)

      console.log('✅ Pickup OTP verified and ride started')
      return true
    } catch (error) {
      console.error('Exception verifying pickup OTP:', error)
      setError('Failed to verify OTP')
      return false
    }
  }

  const startRide = async (rideId: string): Promise<void> => {
    if (!driver) return

    try {
      console.log('=== STARTING RIDE ===')
      console.log('Ride ID:', rideId)

      const { data: updatedRide, error } = await supabase
        .from('rides')
        .update({
          status: 'in_progress',
          updated_at: new Date().toISOString()
        })
        .eq('id', rideId)
        .eq('driver_id', driver.id)
        .select(`
          *,
          customer:users!rides_customer_id_fkey(
            id,
            full_name,
            phone_number,
            email
          )
        `)
        .single()

      if (error) {
        console.error('Error starting ride:', error)
        setError('Failed to start ride')
        return
      }

      setCurrentRide(updatedRide)
      console.log('✅ Ride started successfully')

      // Note: GPS tracking already started in verifyPickupOTP
      // No need to start again here
    } catch (error) {
      console.error('Exception starting ride:', error)
      setError('Failed to start ride')
    }
  }

  const generateDropOTP = async (rideId: string): Promise<string | null> => {
    if (!driver) return null

    try {
      console.log('=== GENERATING DROP OTP ===')
      console.log('Ride ID:', rideId)

      const otp = Math.floor(1000 + Math.random() * 9000).toString()

      const { data: result, error } = await supabase
        .rpc('update_ride_drop_otp', {
          p_ride_id: rideId,
          p_driver_id: driver.id,
          p_otp: otp
        })

      if (error || !result?.success) {
        console.error('Error generating drop OTP:', error || result?.error)
        setError('Failed to generate OTP')
        return null
      }

      console.log('✅ Drop OTP generated:', otp)
      return otp
    } catch (error) {
      console.error('Exception generating drop OTP:', error)
      setError('Failed to generate OTP')
      return null
    }
  }

  const completeRide = async (rideId: string): Promise<{ success: boolean; completionData?: any }> => {
    if (!driver) {
      console.error('❌ No driver available for ride completion')
      return { success: false }
    }

    try {
      console.log('🚨 === COMPLETE RIDE FUNCTION CALLED ===')
      console.log('🚨 Ride ID:', rideId)
      console.log('🚨 Driver ID:', driver.id)
      console.log('🚨 Driver User ID:', driver.user_id)

      // Get current ride details using RPC
      const { data: rideData, error: rideError } = await supabase
        .rpc('get_ride_details_for_completion', {
          p_ride_id: rideId,
          p_driver_id: driver.id
        })

      if (rideError || !rideData || rideData.length === 0) {
        console.error('❌ Error fetching ride for completion:', rideError)
        setError('Failed to fetch ride details')
        return { success: false }
      }

      const ride = {
        ...rideData[0],
        customer: {
          id: rideData[0].customer_id,
          full_name: rideData[0].customer_full_name,
          phone_number: rideData[0].customer_phone,
          email: rideData[0].customer_email
        }
      }

      // Fetch driver and vehicle details using RPC
      const { data: driverData, error: driverError } = await supabase
        .rpc('get_driver_details_with_vehicle', {
          p_driver_id: driver.id
        })

      if (driverError || !driverData || driverData.length === 0) {
        console.error('❌ Error fetching driver details:', driverError)
        setError('Failed to fetch driver details')
        return { success: false }
      }

      const driverDetails = driverData[0]
      const userData = { full_name: driverDetails.full_name }
      const vehicleData = driverDetails.vehicle_id ? {
        id: driverDetails.vehicle_id,
        make: driverDetails.vehicle_make,
        model: driverDetails.vehicle_model,
        color: driverDetails.vehicle_color,
        registration_number: driverDetails.vehicle_registration
      } : null

      console.log('✅ Driver and vehicle details fetched:', {
        driverName: userData?.full_name,
        driverRating: driverDetails.rating,
        vehicle: vehicleData
      })

      console.log('✅ Ride details fetched for completion:', {
        id: ride.id,
        status: ride.status,
        booking_type: ride.booking_type,
        vehicle_type: ride.vehicle_type,
        pickup: ride.pickup_address,
        destination: ride.destination_address
      })

      // Calculate actual road distance using Google Maps Distance Matrix API
      const pickupLat = parseFloat(ride.pickup_latitude.toString())
      const pickupLng = parseFloat(ride.pickup_longitude.toString())
      const destLat = parseFloat(ride.destination_latitude.toString())
      const destLng = parseFloat(ride.destination_longitude.toString())

      console.log('📍 Stopping GPS tracking and calculating actual distance...')

      // Stop GPS tracking
      await TripLocationTracker.stopTripTracking(rideId)

      let actualDistanceKm = 0
      let actualDurationMinutes = 0
      let gpsPointsUsed = 0

      try {
        // Calculate distance from GPS breadcrumbs
        console.log('🔍 [STEP 1] Calling TripLocationTracker.calculateTripDistance...')
        const gpsDistance = await TripLocationTracker.calculateTripDistance(rideId, 'regular')
        const gpsDistanceRaw = gpsDistance.distanceKm
        gpsPointsUsed = gpsDistance.pointsUsed

        console.log('📍 [STEP 2] GPS distance result (raw):', {
          distanceKm: gpsDistanceRaw,
          pointsUsed: gpsPointsUsed,
          valueType: typeof gpsDistanceRaw,
          isZero: gpsDistanceRaw === 0,
          isGreaterThanZero: gpsDistanceRaw > 0
        })

        // GPS tracks the ACTUAL distance traveled by the driver
        // For ONE-WAY outstation trips, we need to double the distance because:
        // - Customer only books pickup → destination
        // - Driver must return empty (destination → Hosur)
        // - GPS only tracks the one-way journey with customer
        // For ROUND-TRIP or other bookings, GPS tracks the full journey already
        if (ride.booking_type === 'outstation' && ride.trip_type === 'one_way') {
          actualDistanceKm = gpsDistanceRaw * 2
          console.log('📍 [STEP 3] GPS distance DOUBLED for ONE-WAY outstation trip:', {
            oneWayGpsDistance: gpsDistanceRaw.toFixed(2),
            totalDistanceCharged: actualDistanceKm.toFixed(2),
            note: 'GPS distance × 2 because driver returns empty'
          })
        } else {
          actualDistanceKm = gpsDistanceRaw
          console.log('📍 [STEP 3] actualDistanceKm assigned:', {
            distance: actualDistanceKm,
            bookingType: ride.booking_type,
            tripType: ride.trip_type || 'N/A'
          })
        }

        // Calculate duration from GPS timestamps (actual travel time)
        const gpsDuration = await TripLocationTracker.calculateTripDuration(rideId, 'regular')
        actualDurationMinutes = gpsDuration.durationMinutes || 1 // Minimum 1 minute

        console.log('✅ [STEP 4] GPS-tracked distance and duration:', {
          distanceKm: actualDistanceKm.toFixed(2),
          durationMinutes: actualDurationMinutes,
          durationHours: (actualDurationMinutes / 60).toFixed(2),
          gpsPointsUsed,
          bookingType: ride.booking_type,
          method: 'Real GPS tracking with timestamps'
        })

        // Calculate straight-line distance for comparison
        const R = 6371 // Earth radius in km
        const dLat = (destLat - pickupLat) * Math.PI / 180
        const dLon = (destLng - pickupLng) * Math.PI / 180
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(pickupLat * Math.PI / 180) * Math.cos(destLat * Math.PI / 180) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        const straightLineDistanceKm = R * c

        console.log('📏 [STEP 5] Distance comparison:', {
          gpsDistance: actualDistanceKm.toFixed(2) + ' km',
          straightLineDistance: straightLineDistanceKm.toFixed(2) + ' km',
          ratio: (actualDistanceKm / straightLineDistanceKm).toFixed(2),
          percentOfStraightLine: ((actualDistanceKm / straightLineDistanceKm) * 100).toFixed(1) + '%'
        })

        // Validate GPS distance against straight-line distance
        if (actualDistanceKm < straightLineDistanceKm * 0.5) {
          console.warn('⚠️ [VALIDATION WARNING] GPS distance is suspiciously low!');
          console.warn('⚠️ GPS distance (' + actualDistanceKm.toFixed(2) + ' km) is less than 50% of straight-line distance (' + straightLineDistanceKm.toFixed(2) + ' km)');
          console.warn('⚠️ This suggests GPS tracking may have stopped mid-trip or filtering is too aggressive');

          await DebugLogger.log(rideId, 'distance_validation_warning', 'GPS distance unusually low', {
            gpsDistanceKm: actualDistanceKm,
            straightLineDistanceKm: straightLineDistanceKm,
            ratio: actualDistanceKm / straightLineDistanceKm,
            gpsPointsUsed
          });
        } else if (actualDistanceKm > straightLineDistanceKm * 3) {
          console.warn('⚠️ [VALIDATION WARNING] GPS distance seems too high!');
          console.warn('⚠️ GPS distance (' + actualDistanceKm.toFixed(2) + ' km) is more than 3x straight-line distance (' + straightLineDistanceKm.toFixed(2) + ' km)');
          console.warn('⚠️ This suggests GPS jumps or erratic tracking');

          await DebugLogger.log(rideId, 'distance_validation_warning', 'GPS distance unusually high', {
            gpsDistanceKm: actualDistanceKm,
            straightLineDistanceKm: straightLineDistanceKm,
            ratio: actualDistanceKm / straightLineDistanceKm,
            gpsPointsUsed
          });
        }

        // Save to database for later review
        await DebugLogger.log(rideId, 'gps_calculation', 'GPS distance calculated', {
          actualDistanceKm,
          actualDurationMinutes,
          gpsPointsUsed,
          straightLineDistanceKm,
          condition_check: actualDistanceKm > 0 && gpsPointsUsed >= 2
        });

        console.log('🚨 [STEP 6] CRITICAL: actualDistanceKm BEFORE condition check:', actualDistanceKm);
        console.log('🚨 CRITICAL: gpsPointsUsed:', gpsPointsUsed);
        console.log('🚨 CRITICAL: Condition check will be:', actualDistanceKm > 0 && gpsPointsUsed >= 2);

        // Check if GPS tracking was successful
        if (actualDistanceKm <= 0 || gpsPointsUsed < 2) {
          console.warn('⚠️ [STEP 7] GPS returned zero or insufficient data')
          console.warn('⚠️ actualDistanceKm:', actualDistanceKm)
          console.warn('⚠️ gpsPointsUsed:', gpsPointsUsed)

          // Special case: If driver didn't move (straight-line distance < 100m), use minimal distance
          if (straightLineDistanceKm < 0.1) {
            console.warn('⚠️ Driver appears stationary (< 100m displacement)')
            actualDistanceKm = 0.1 // 100 meters minimum
            actualDurationMinutes = 1 // 1 minute minimum

            await DebugLogger.log(rideId, 'distance_decision', 'Using minimal distance for stationary driver', {
              straightLineDistanceKm,
              actualDistanceKm,
              gpsPointsUsed,
              decision: 'MINIMAL_DISTANCE'
            });

            console.log('✅ Using minimal distance for stationary driver:', actualDistanceKm, 'km')
          } else {
            // Driver moved significantly but GPS failed - this is an error
            console.error('❌ GPS tracking failed but driver moved', straightLineDistanceKm.toFixed(2), 'km')

            await DebugLogger.log(rideId, 'distance_error', 'GPS tracking failed', {
              actualDistanceKm,
              gpsPointsUsed,
              straightLineDistanceKm,
              error: 'GPS failed despite significant movement'
            });

            setError('GPS tracking failed. Cannot calculate fare without GPS data. Please ensure location services are enabled.')
            return { success: false }
          }
        } else {
          console.log('✅ [STEP 7] GPS tracking successful! Using GPS distance:', actualDistanceKm, 'km')
          console.log('✅ Will use this value for fare calculation')

          await DebugLogger.log(rideId, 'distance_decision', 'Using GPS distance', {
            actualDistanceKm,
            gpsPointsUsed,
            decision: 'GPS_SUCCESS'
          });
        }
      } catch (error) {
        console.error('❌ GPS distance calculation failed:', error)

        await DebugLogger.log(rideId, 'gps_calculation_error', 'GPS calculation threw error', {
          error: error instanceof Error ? error.message : String(error),
          gpsPointsUsed
        });

        setError('GPS tracking failed. Cannot complete trip without GPS data.')
        return { success: false }
      }

      // Get final GPS drop-off location (last recorded point) using RPC to bypass RLS
      let finalDropLat = destLat
      let finalDropLng = destLng

      try {
        const { data: lastGPSPoint, error: gpsError } = await supabase
          .rpc('get_last_gps_location', { p_ride_id: rideId })

        if (gpsError) {
          console.error('⚠️ Error fetching GPS location:', gpsError)
          console.log('⚠️ Falling back to booking destination')
        } else if (lastGPSPoint && lastGPSPoint.latitude && lastGPSPoint.longitude) {
          finalDropLat = lastGPSPoint.latitude
          finalDropLng = lastGPSPoint.longitude
          console.log('✅ Using final GPS drop-off location:', {
            finalDropLat,
            finalDropLng,
            recorded_at: lastGPSPoint.recorded_at
          })

          // Log distance difference for debugging
          try {
            const distanceDiff = calculateDistance(
              { latitude: finalDropLat, longitude: finalDropLng },
              { latitude: destLat, longitude: destLng }
            )
            console.log('📍 GPS drop-off vs Booking destination:', {
              gps_location: { lat: finalDropLat, lng: finalDropLng },
              booking_destination: { lat: destLat, lng: destLng },
              difference_km: distanceDiff.toFixed(2)
            })
          } catch (err) {
            console.log('⚠️ Could not calculate distance difference:', err)
          }
        } else {
          console.log('⚠️ No GPS points found, using booking destination')
        }
      } catch (error) {
        console.warn('⚠️ Could not fetch final GPS location, using booking destination:', error)
      }

      console.log('�� Trip metrics (Real GPS-tracked distance):', {
        actualDistanceKm: actualDistanceKm.toFixed(2),
        actualDurationMinutes,
        gpsPointsUsed,
        pickupLat,
        pickupLng,
        dropLat: finalDropLat,
        dropLng: finalDropLng,
        method: 'GPS Breadcrumb Tracking'
      })

      // Calculate fare using FareCalculationService with GPS drop-off location
      console.log('[STEP 9] FINAL VALUES BEFORE FARE CALCULATION')
      console.log('[STEP 9] actualDistanceKm:', actualDistanceKm, 'km (TYPE:', typeof actualDistanceKm + ')')
      console.log('[STEP 9] actualDurationMinutes:', actualDurationMinutes, 'minutes')
      console.log('[STEP 9] gpsPointsUsed:', gpsPointsUsed, 'points')
      console.log('[STEP 9] About to call FareCalculationService.calculateAndStoreTripFare...')

      await DebugLogger.log(rideId, 'before_fare_calculation', 'Final values before fare calculation', {
        actualDistanceKm,
        actualDurationMinutes,
        gpsPointsUsed,
        pickupLat,
        pickupLng,
        finalDropLat,
        finalDropLng
      });

      const fareResult = await FareCalculationService.calculateAndStoreTripFare(
        rideId,
        actualDistanceKm,
        actualDurationMinutes,
        parseFloat(ride.pickup_latitude.toString()),
        parseFloat(ride.pickup_longitude.toString()),
        finalDropLat,
        finalDropLng,
        {
          driver_id: driver.id,
          customer_id: ride.customer_id,
          driver_name: userData?.full_name || 'Driver',
          driver_phone: '',
          driver_rating: driverDetails.rating || null,
          vehicle_id: vehicleData?.id || null,
          vehicle_make: vehicleData?.make || '',
          vehicle_model: vehicleData?.model || '',
          vehicle_color: vehicleData?.color || '',
          vehicle_license_plate: vehicleData?.registration_number || ''
        }
      )

      console.log('[STEP 10] FareCalculationService result:', fareResult)

      if (!fareResult.success) {
        console.error('[STEP 10] Fare calculation failed:', fareResult.error)
        setError('Failed to calculate fare: ' + fareResult.error)
        return { success: false }
      }

      if (!fareResult.fareBreakdown) {
        console.error('[STEP 10] No fare breakdown returned')
        setError('No fare breakdown available')
        return { success: false }
      }

      console.log('[STEP 10] Fare calculated successfully!')
      console.log('[STEP 10] Fare breakdown distance used:', fareResult.fareBreakdown.details.actual_distance_km, 'km')
      console.log('[STEP 10] Fare breakdown duration used:', fareResult.fareBreakdown.details.actual_duration_minutes, 'minutes')
      console.log('[STEP 10] Total fare:', fareResult.fareBreakdown.total_fare)

      await DebugLogger.log(rideId, 'fare_calculated', 'Fare calculation completed', {
        distanceUsedInFare: fareResult.fareBreakdown.details.actual_distance_km,
        durationUsedInFare: fareResult.fareBreakdown.details.actual_duration_minutes,
        totalFare: fareResult.fareBreakdown.total_fare,
        distanceMatchesInput: fareResult.fareBreakdown.details.actual_distance_km === actualDistanceKm
      });

      // Update ride status to completed using RPC
      const { data: completionResult, error: updateError } = await supabase
        .rpc('update_ride_to_completed', {
          p_ride_id: rideId,
          p_driver_id: driver.id,
          p_fare_amount: fareResult.fareBreakdown.total_fare,
          p_distance_km: actualDistanceKm,
          p_duration_minutes: actualDurationMinutes
        })

      if (updateError || !completionResult?.success) {
        console.error('❌ Error updating ride to completed:', updateError || completionResult?.error)
        setError('Failed to complete ride')
        return { success: false }
      }

      console.log('✅ Ride marked as completed in database')
      console.log('✅ Trip completion data already stored by FareCalculationService')

      // Update driver status back to online
      await updateDriverStatus('online')
      console.log('✅ Driver status updated to online')

      // Small delay to ensure database updates propagate
      await new Promise(resolve => setTimeout(resolve, 500))

      // Prepare completion data for modal BEFORE clearing current ride
      console.log('=== PREPARING COMPLETION DATA ===')
      console.log('Raw fareBreakdown from service:', JSON.stringify(fareResult.fareBreakdown, null, 2))

      console.log('🚨🚨🚨 CRITICAL CHECK - fareResult.fareBreakdown.details:');
      console.log('  fareResult.fareBreakdown.details:', fareResult.fareBreakdown.details);
      console.log('  fareResult.fareBreakdown.details.actual_distance_km:', fareResult.fareBreakdown.details?.actual_distance_km);
      console.log('  Expected value (actualDistanceKm):', actualDistanceKm);

      const completionData = {
        distance: actualDistanceKm,
        duration: actualDurationMinutes,
        fareBreakdown: {
          booking_type: fareResult.fareBreakdown.booking_type,
          vehicle_type: fareResult.fareBreakdown.vehicle_type,
          base_fare: fareResult.fareBreakdown.base_fare,
          distance_fare: fareResult.fareBreakdown.distance_fare,
          time_fare: fareResult.fareBreakdown.time_fare,
          surge_charges: fareResult.fareBreakdown.surge_charges,
          deadhead_charges: fareResult.fareBreakdown.deadhead_charges,
          platform_fee: fareResult.fareBreakdown.platform_fee,
          gst_on_charges: fareResult.fareBreakdown.gst_on_charges,
          gst_on_platform_fee: fareResult.fareBreakdown.gst_on_platform_fee,
          extra_km_charges: fareResult.fareBreakdown.extra_km_charges,
          driver_allowance: fareResult.fareBreakdown.driver_allowance,
          total_fare: fareResult.fareBreakdown.total_fare,
          details: fareResult.fareBreakdown.details,
          zone_detected: fareResult.fareBreakdown.zone_detected,
          is_inner_zone: fareResult.fareBreakdown.is_inner_zone
        },
        pickup_address: ride.pickup_address,
        destination_address: ride.destination_address,
        booking_type: ride.booking_type,
        rental_hours: ride.rental_hours,
        promo_code: fareResult.promo_code || null,
        promo_discount: fareResult.promo_discount || null,
        original_fare: fareResult.original_fare || null
      }

      console.log('=== COMPLETION DATA PREPARED ===')
      console.log('Completion data object:', JSON.stringify(completionData, null, 2))
      console.log('Platform fee in completion data:', completionData.fareBreakdown.platform_fee)
      console.log('Total fare in completion data:', completionData.fareBreakdown.total_fare)
      console.log('🚨🚨🚨 DISTANCE VALUES IN COMPLETION DATA:');
      console.log('  completionData.distance:', completionData.distance);
      console.log('  completionData.fareBreakdown.details:', completionData.fareBreakdown.details);
      console.log('  completionData.fareBreakdown.details.actual_distance_km:', completionData.fareBreakdown.details?.actual_distance_km);
      console.log('=== ABOUT TO RETURN COMPLETION DATA ===')

      await DebugLogger.log(rideId, 'completion_data', 'Trip completion data prepared', {
        distance: completionData.distance,
        duration: completionData.duration,
        fareBreakdown_details: completionData.fareBreakdown.details,
        total_fare: completionData.fareBreakdown.total_fare
      });

      return { success: true, completionData }

    } catch (error) {
      console.error('❌ Exception completing ride:', error)
      setError('Failed to complete ride: ' + error.message)
      return { success: false }
    }
  }

  const cancelRide = async (rideId: string, reason: string): Promise<void> => {
    if (!driver) return

    try {
      console.log('=== CANCELLING RIDE ===')
      console.log('Ride ID:', rideId)
      console.log('Reason:', reason)

      const { data: result, error } = await supabase
        .rpc('cancel_ride_by_driver', {
          p_ride_id: rideId,
          p_driver_id: driver.id,
          p_user_id: driver.user_id,
          p_reason: reason
        })

      if (error || !result?.success) {
        console.error('Error cancelling ride:', error || result?.error)
        setError('Failed to cancel ride')
        return
      }

      // Update driver status back to online
      await updateDriverStatus('online')
      
      // Clear current ride
      setCurrentRide(null)
      
      console.log('✅ Ride cancelled successfully')
    } catch (error) {
      console.error('Exception cancelling ride:', error)
      setError('Failed to cancel ride')
    }
  }

  const refreshRides = async (): Promise<void> => {
    console.log('🔄 Manual refresh rides called')
    await loadRides()
  }

  const clearError = () => {
    setError(null)
  }

  const clearCurrentRide = async () => {
    console.log('🧹 Clearing current ride after modal dismissal...')
    setCurrentRide(null)
    console.log('✅ Current ride cleared from state')

    // Refresh rides to fetch new available rides
    console.log('🔄 Refreshing rides after completion modal closed...')
    await loadRides()
    console.log('✅ Rides refreshed - driver can now receive new ride requests')
  }

  const value = {
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
    cancelRide,
    refreshRides,
    clearCurrentRide,
    clearError,
  }

  return (
    <RideContext.Provider value={value}>
      {children}
    </RideContext.Provider>
  )
}