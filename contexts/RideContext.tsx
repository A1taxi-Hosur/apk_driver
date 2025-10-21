import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '../utils/supabase'
import { useAuth } from './AuthContext'
import { FareCalculationService } from '../services/FareCalculationService'
import { TripLocationTracker } from '../services/TripLocationTracker'
import { notificationSoundService } from '../services/NotificationSoundService'
import { DebugLogger } from '../utils/debugLogger'

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
  rental_hours: number | null
  pickup_otp: string | null
  drop_otp: string | null
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
  const { driver, updateDriverStatus } = useAuth()

  useEffect(() => {
    if (driver) {
      console.log('=== RIDE CONTEXT INITIALIZED ===')
      console.log('Driver:', driver.user?.full_name)
      console.log('Driver ID:', driver.id)
      console.log('Driver Status:', driver.status)

      // Initialize notification sound service
      notificationSoundService.initialize()

      // Load initial rides
      loadRides()

      // Set up real-time subscriptions
      setupRealTimeSubscriptions()

      // Set up auto-refresh every 2 seconds
      const refreshInterval = setInterval(() => {
        console.log('🔄 Auto-refreshing rides (2-second interval)...')
        loadRides()
      }, 2000)

      return () => {
        console.log('🛑 Cleaning up auto-refresh interval')
        clearInterval(refreshInterval)
        notificationSoundService.cleanup()
      }
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
      .subscribe()

    console.log('✅ Real-time subscriptions established')

    return () => {
      console.log('🔌 Cleaning up real-time subscriptions')
      rideSubscription.unsubscribe()
    }
  }

  const handleRideUpdate = (payload: any) => {
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
    }
  }

  const handleNotificationUpdate = async (payload: any) => {
    console.log('=== HANDLING NOTIFICATION UPDATE ===')
    console.log('Notification payload:', payload)

    if (payload.eventType === 'INSERT' && payload.new) {
      const notification = payload.new

      if (notification.type === 'ride_request' && notification.data?.ride_id) {
        console.log('🚗 New ride request notification received')
        console.log('Ride ID from notification:', notification.data.ride_id)

        // Play notification sound and vibration
        console.log('🔊 Playing notification sound and vibration')
        await notificationSoundService.playRideRequestNotification()

        // Refresh rides to get the new request
        await loadRides()
      }
    }
  }

  const loadRides = async () => {
    if (!driver) return

    try {
      console.log('=== LOADING RIDES ===')
      console.log('Driver ID:', driver.id)
      console.log('Driver User ID:', driver.user_id)
      
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
        setCurrentRide(ride)
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

          // Play notification sound if we have new pending rides
          if (rideRequests.length > previousPendingCount && rideRequests.length > 0) {
            console.log('🔊 New ride request detected! Playing notification sound')
            notificationSoundService.playRideRequestNotification()
          }

          setPreviousPendingCount(rideRequests.length)
          setPendingRides(rideRequests)
          console.log('✅ Pending rides loaded:', rideRequests.length)
        } else {
          setPendingRides([])
          console.log('✅ No pending ride notifications')
        }
        }
      }

    } catch (error) {
      console.error('Exception loading rides:', error)
      setError('Failed to load rides')
    } finally {
      setLoading(false)
    }
  }

  const acceptRide = async (rideId: string): Promise<boolean> => {
    if (!driver) return false

    try {
      console.log('=== ACCEPTING RIDE ===')
      console.log('Ride ID:', rideId)
      console.log('Driver ID:', driver.id)

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

        // Update local driver status
        await updateDriverStatus('busy')

        // Refresh rides to get updated data
        await loadRides()

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

      // Mark notification as read (declined) using RPC
      await supabase.rpc('mark_ride_notification_as_read', {
        p_user_id: driver.user_id,
        p_ride_id: rideId
      })

      // Remove from pending rides
      setPendingRides(prev => prev.filter(ride => ride.id !== rideId))
      
      console.log('✅ Ride declined')
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
        const gpsDistance = await TripLocationTracker.calculateTripDistance(rideId, 'regular')
        const gpsDistanceRaw = gpsDistance.distanceKm
        gpsPointsUsed = gpsDistance.pointsUsed

        console.log('📍 GPS distance result (raw):', {
          distanceKm: gpsDistanceRaw,
          pointsUsed: gpsPointsUsed
        })

        actualDistanceKm = gpsDistanceRaw

        // Calculate duration from GPS timestamps (actual travel time)
        const gpsDuration = await TripLocationTracker.calculateTripDuration(rideId, 'regular')
        actualDurationMinutes = gpsDuration.durationMinutes || 1 // Minimum 1 minute

        console.log('✅ GPS-tracked distance and duration:', {
          distanceKm: actualDistanceKm.toFixed(2),
          durationMinutes: actualDurationMinutes,
          durationHours: (actualDurationMinutes / 60).toFixed(2),
          gpsPointsUsed,
          bookingType: ride.booking_type,
          method: 'Real GPS tracking with timestamps'
        })

        // Save to database for later review
        await DebugLogger.log(rideId, 'gps_calculation', 'GPS distance calculated', {
          actualDistanceKm,
          actualDurationMinutes,
          gpsPointsUsed,
          condition_check: actualDistanceKm > 0 && gpsPointsUsed >= 2
        });

        console.log('🚨🚨🚨 CRITICAL: actualDistanceKm BEFORE condition check:', actualDistanceKm);
        console.log('🚨🚨🚨 CRITICAL: gpsPointsUsed:', gpsPointsUsed);
        console.log('🚨🚨🚨 CRITICAL: Condition check will be:', actualDistanceKm > 0 && gpsPointsUsed >= 2);

        // Check if GPS tracking was successful
        if (actualDistanceKm > 0 && gpsPointsUsed >= 2) {
          console.log('🎯🎯🎯 GPS tracking successful! Using GPS distance:', actualDistanceKm, 'km')
          console.log('🎯 Will use this value for fare calculation')

          await DebugLogger.log(rideId, 'distance_decision', 'Using GPS distance', {
            actualDistanceKm,
            gpsPointsUsed,
            decision: 'GPS_SUCCESS'
          });

          // GPS worked perfectly - no fallback needed
        } else if (actualDistanceKm === 0 || gpsPointsUsed < 2) {
          console.warn('⚠️ GPS returned zero distance or insufficient points')
          console.warn('⚠️ GPS tracking failed - falling back to Google Maps (straight route only)')

          await DebugLogger.log(rideId, 'distance_decision', 'GPS failed - using fallback', {
            actualDistanceKm,
            gpsPointsUsed,
            decision: 'FALLBACK_TO_GOOGLE_MAPS'
          });

          // Fallback to Google Maps Directions API
          try {
            const { googleMapsService } = await import('../services/googleMapsService')

            const routeData = await googleMapsService.getDirections(
              {
                latitude: pickupLat,
                longitude: pickupLng
              },
              {
                latitude: destLat,
                longitude: destLng
              }
            )

            if (routeData && routeData.distance > 0) {
              actualDistanceKm = routeData.distance
              actualDurationMinutes = Math.round(routeData.duration / 60) || 1 // Minimum 1 minute

              console.log('✅ Google Maps fallback distance:', {
                distanceKm: actualDistanceKm.toFixed(2),
                durationMinutes: actualDurationMinutes,
                method: 'Google Maps Directions API (GPS failed)'
              })
            } else {
              throw new Error('Google Maps API returned no route')
            }
          } catch (googleError) {
            console.warn('⚠️ Google Maps also failed, using minimal distance:', googleError)

            // Only use minimal distance if Google Maps also fails
            actualDistanceKm = 0.1 // 100 meters minimum
            actualDurationMinutes = 1 // 1 minute minimum

            console.log('✅ Using minimal distance as last resort:', {
              distanceKm: actualDistanceKm,
              durationMinutes: actualDurationMinutes,
              reason: 'Both GPS and Google Maps failed'
            })
          }
        }
      } catch (error) {
        console.warn('⚠️ GPS distance calculation failed:', error)

        // Check if error is due to driver not moving
        const errorMessage = error instanceof Error ? error.message : String(error)
        if (errorMessage.includes('Driver did not move') || errorMessage.includes('displacement')) {
          console.warn('⚠️ DRIVER DID NOT MOVE - Using minimal distance')

          // Driver hasn't moved - use minimal distance
          actualDistanceKm = 0.1 // 100 meters minimum
          actualDurationMinutes = 1 // 1 minute minimum

          console.log('✅ Stationary driver detected:', {
            distanceKm: actualDistanceKm,
            durationMinutes: actualDurationMinutes,
            reason: 'Driver did not move significantly'
          })

          // DO NOT throw - continue with minimal distance
        } else {
          console.warn('⚠️ GPS tracking error, attempting Google Maps fallback:', error)

          // Fallback to Google Maps Directions API
        try {
          const { googleMapsService } = await import('../services/googleMapsService')

          const routeData = await googleMapsService.getDirections(
            {
              latitude: pickupLat,
              longitude: pickupLng
            },
            {
              latitude: destLat,
              longitude: destLng
            }
          )

          if (routeData && routeData.distance > 0) {
            actualDistanceKm = routeData.distance
            actualDurationMinutes = Math.round(routeData.duration / 60)

            console.log('✅ Google Maps fallback distance:', {
              distanceKm: actualDistanceKm.toFixed(2),
              durationMinutes: actualDurationMinutes,
              method: 'Google Maps Directions API'
            })
          } else {
            throw new Error('Google Maps API returned no route')
          }
        } catch (googleError) {
          console.warn('⚠️ Google Maps fallback also failed, using straight-line distance:', googleError)

          // For outstation/scheduled trips, use scheduled_time; otherwise use created_at
          const startTimeString = ride.booking_type === 'outstation' && ride.scheduled_time
            ? ride.scheduled_time
            : ride.created_at
          const rideStartTime = startTimeString ? new Date(startTimeString).getTime() : Date.now()
          const currentTime = Date.now()
          actualDurationMinutes = Math.round((currentTime - rideStartTime) / (1000 * 60))

          const R = 6371
          const dLat = (destLat - pickupLat) * Math.PI / 180
          const dLon = (destLng - pickupLng) * Math.PI / 180
          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(pickupLat * Math.PI / 180) * Math.cos(destLat * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
          actualDistanceKm = R * c

          console.log('⚠️ Using fallback straight-line calculation:', {
            actualDistanceKm: actualDistanceKm.toFixed(2),
            actualDurationMinutes
          })
          }
        }
      }

      // Get final GPS drop-off location (last recorded point)
      let finalDropLat = destLat
      let finalDropLng = destLng

      try {
        const { data: lastGPSPoint } = await supabase
          .from('trip_location_history')
          .select('latitude, longitude')
          .eq('ride_id', rideId)
          .order('recorded_at', { ascending: false })
          .limit(1)
          .single()

        if (lastGPSPoint) {
          finalDropLat = lastGPSPoint.latitude
          finalDropLng = lastGPSPoint.longitude
          console.log('✅ Using final GPS drop-off location:', { finalDropLat, finalDropLng })
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
      console.log('🚨🚨🚨 FINAL VALUES BEFORE FARE CALCULATION 🚨🚨🚨')
      console.log('🚨 actualDistanceKm:', actualDistanceKm)
      console.log('🚨 actualDurationMinutes:', actualDurationMinutes)
      console.log('🚨 gpsPointsUsed:', gpsPointsUsed)
      console.log('🚨 About to call FareCalculationService.calculateAndStoreTripFare...')

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

      console.log('🚨 FareCalculationService result:', fareResult)

      if (!fareResult.success) {
        console.error('❌ Fare calculation failed:', fareResult.error)
        setError('Failed to calculate fare: ' + fareResult.error)
        return { success: false }
      }

      if (!fareResult.fareBreakdown) {
        console.error('❌ No fare breakdown returned')
        setError('No fare breakdown available')
        return { success: false }
      }

      console.log('✅ Fare calculated successfully:', fareResult.fareBreakdown)

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
          platform_fee: fareResult.fareBreakdown.platform_fee, // Direct assignment
          gst_on_charges: fareResult.fareBreakdown.gst_on_charges,
          gst_on_platform_fee: fareResult.fareBreakdown.gst_on_platform_fee,
          extra_km_charges: fareResult.fareBreakdown.extra_km_charges,
          driver_allowance: fareResult.fareBreakdown.driver_allowance,
          total_fare: fareResult.fareBreakdown.total_fare, // Direct assignment
          details: fareResult.fareBreakdown.details
        },
        pickup_address: ride.pickup_address,
        destination_address: ride.destination_address,
        booking_type: ride.booking_type,
        rental_hours: ride.rental_hours
      }

      console.log('=== COMPLETION DATA PREPARED ===')
      console.log('Completion data object:', JSON.stringify(completionData, null, 2))
      console.log('Platform fee in completion data:', completionData.fareBreakdown.platform_fee)
      console.log('Total fare in completion data:', completionData.fareBreakdown.total_fare)
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