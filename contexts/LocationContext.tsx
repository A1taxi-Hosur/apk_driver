import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import * as Location from 'expo-location'
import { supabase } from '../utils/supabase'
import { useAuth } from './AuthContext'
import { calculateDistance, getCurrentLocationWithGoogleMaps, reverseGeocode } from '../utils/maps'
import { Platform, AppState, AppStateStatus } from 'react-native'
import { BackgroundLocationService } from '../services/BackgroundLocationService'

interface LocationContextType {
  currentLocation: Location.LocationObject | null
  currentAddress: string | null
  locationPermission: boolean
  requestLocationPermission: () => Promise<boolean>
  startLocationTracking: () => Promise<void>
  stopLocationTracking: () => void
  isTracking: boolean
  updateLocationWithGoogleMaps: () => Promise<void>
  forceCreateLocationRecord: () => Promise<boolean>
  isBackgroundTrackingActive: boolean
  startBackgroundTracking: () => Promise<boolean>
  stopBackgroundTracking: () => Promise<void>
}

const LocationContext = createContext<LocationContextType>({} as LocationContextType)

export const useLocation = () => {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}

interface LocationProviderProps {
  children: ReactNode
}

export function LocationProvider({ children }: LocationProviderProps) {
  const [currentLocation, setCurrentLocation] = useState<Location.LocationObject | null>(null)
  const [currentAddress, setCurrentAddress] = useState<string | null>(null)
  const [locationPermission, setLocationPermission] = useState(false)
  const [isTracking, setIsTracking] = useState(false)
  const [locationSubscription, setLocationSubscription] = useState<Location.LocationSubscription | null>(null)
  const [isBackgroundTrackingActive, setIsBackgroundTrackingActive] = useState(false)
  const isMountedRef = React.useRef(true)

  const { driver } = useAuth()
  const [hasInitialized, setHasInitialized] = useState(false)
  const [backgroundTrackingStarted, setBackgroundTrackingStarted] = useState(false)
  const [isHandlingActiveDriver, setIsHandlingActiveDriver] = useState(false)

  // Safe state setters that check if component is mounted
  const safeSetCurrentLocation = (location: Location.LocationObject | null) => {
    if (isMountedRef.current) setCurrentLocation(location)
  }

  const safeSetCurrentAddress = (address: string | null) => {
    if (isMountedRef.current) setCurrentAddress(address)
  }

  const safeSetLocationPermission = (permission: boolean) => {
    if (isMountedRef.current) setLocationPermission(permission)
  }

  const safeSetIsTracking = (tracking: boolean) => {
    if (isMountedRef.current) setIsTracking(tracking)
  }

  useEffect(() => {
    isMountedRef.current = true
    console.log('=== LOCATION PROVIDER INITIALIZATION ===')
    console.log('=== APP RESTARTED / REOPENED - Checking location tracking state ===')

    // CRITICAL: Immediately check and restore background tracking on app restart
    // This ensures location tracking continues working after app is closed and reopened
    const initializeLocationTracking = async () => {
      // Check actual background tracking status on mount
      await checkBackgroundTrackingStatus()

      // Request location permission immediately when component mounts
      if (!hasInitialized) {
        await requestLocationPermissionOnStartup()
        setHasInitialized(true)
      }
    }

    initializeLocationTracking()

    return () => {
      isMountedRef.current = false
      // Clean up location tracking on unmount
      if (locationSubscription) {
        locationSubscription.remove()
      }
    }
  }, [])

  const checkBackgroundTrackingStatus = async () => {
    try {
      const isActive = await BackgroundLocationService.isBackgroundLocationActive()
      console.log('📍 Background tracking status check:', isActive)
      setIsBackgroundTrackingActive(isActive)
      setBackgroundTrackingStarted(isActive)

      // If driver is online but background tracking is not active, try to start it
      // This is CRITICAL for app restart scenario
      if (!isActive && driver && (driver.status === 'online' || driver.status === 'busy')) {
        console.log('⚠️ Driver is online but background tracking is inactive')
        console.log('📊 Driver details:', {
          id: driver.id,
          user_id: driver.user_id,
          status: driver.status,
          locationPermission
        })

        // Wait for location permission if not yet granted
        if (!locationPermission) {
          console.log('⚠️ Waiting for location permission before restarting tracking...')
          return
        }

        console.log('🔄 Attempting to restart background tracking...')
        const restarted = await startBackgroundTracking()

        if (restarted) {
          console.log('✅ Background tracking successfully restarted after app reopened')
          setIsBackgroundTrackingActive(true)
          setBackgroundTrackingStarted(true)
        } else {
          console.error('❌ Failed to restart background tracking')
          console.error('⚠️ Driver may appear offline to customers until tracking is restarted')
        }
      } else if (isActive) {
        console.log('✅ Background tracking is active and working correctly')
      } else if (!driver) {
        console.log('ℹ️ No driver session found')
      } else if (driver.status === 'offline') {
        console.log('ℹ️ Driver is offline, background tracking not needed')
      }
    } catch (error) {
      console.error('❌ Error checking background tracking status:', error)
      console.error('Error details:', error)
    }
  }

  // Periodically check background tracking status every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkBackgroundTrackingStatus()
    }, 10000) // Check every 10 seconds

    return () => clearInterval(intervalId)
  }, [driver?.status, locationPermission])

  // CRITICAL: Detect when app comes back to foreground and restart tracking if needed
  // This handles the case where user closes app and reopens it
  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState: AppStateStatus) => {
      console.log('📱 App state changed to:', nextAppState)

      if (nextAppState === 'active') {
        console.log('=== APP CAME TO FOREGROUND ===')
        console.log('🔍 Checking if location tracking needs to be restarted...')

        // Wait a moment for app to fully initialize
        setTimeout(async () => {
          await checkBackgroundTrackingStatus()
        }, 1000)
      } else if (nextAppState === 'background') {
        console.log('=== APP WENT TO BACKGROUND ===')
        console.log('ℹ️ Background location tracking should continue via BackgroundLocationService')
      }
    })

    return () => {
      subscription.remove()
    }
  }, [driver?.status, locationPermission])

  useEffect(() => {
    console.log('=== DRIVER STATUS CHANGE DETECTED ===')
    console.log('Driver:', driver?.user?.full_name)
    console.log('Driver Status:', driver?.status)
    console.log('Driver User ID:', driver?.user_id)
    console.log('Driver Verified:', driver?.is_verified)
    console.log('🔍 Checking conditions:')
    console.log('  - driver exists:', !!driver)
    console.log('  - status is online/busy:', driver?.status === 'online' || driver?.status === 'busy')
    console.log('  - locationPermission:', locationPermission)
    console.log('  - NOT isTracking:', !isTracking)
    console.log('  - NOT isBackgroundTrackingActive:', !isBackgroundTrackingActive)
    console.log('  - NOT isHandlingActiveDriver:', !isHandlingActiveDriver)

    if (driver && (driver.status === 'online' || driver.status === 'busy') && locationPermission && !isTracking && !isBackgroundTrackingActive && !isHandlingActiveDriver) {
      console.log('✅✅✅ ALL CONDITIONS MET - Starting location services...')
      handleActiveDriver()
    } else {
      console.log('❌ Conditions not met for starting location tracking')

      if (driver && driver.status === 'offline' && isTracking) {
        console.log('⚠️ Driver is offline, stopping location tracking')
        stopLocationTracking()
        stopBackgroundTracking()
      } else if (!driver && isTracking) {
        console.log('❌ No driver available, stopping location tracking')
        stopLocationTracking()
        stopBackgroundTracking()
      }
    }
  }, [driver?.status, driver?.user_id, locationPermission, isTracking, isBackgroundTrackingActive, isHandlingActiveDriver])

  const requestLocationPermissionOnStartup = async () => {
    try {
      console.log('=== REQUESTING LOCATION PERMISSION ON STARTUP ===')
      
      if (Platform.OS === 'web') {
        console.log('✅ Web platform - permission assumed granted')
        setLocationPermission(true)
        // For web, immediately try to get location and start tracking if driver is online
        if (driver && (driver.status === 'online' || driver.status === 'busy')) {
          console.log('🌐 Web: Driver is online, starting location services immediately')
          await handleActiveDriver()
        }
        return
      }

      // Check current permission status
      const { status: currentStatus } = await Location.getForegroundPermissionsAsync()
      console.log('Current location permission status:', currentStatus)
      
      if (currentStatus === 'granted') {
        console.log('✅ Location permission already granted')
        setLocationPermission(true)
        await initializeLocationServices()
        // If driver is online, start tracking immediately
        if (driver && (driver.status === 'online' || driver.status === 'busy')) {
          console.log('📱 Native: Driver is online, starting location services immediately')
          await handleActiveDriver()
        }
        return
      }

      // Request permission immediately
      console.log('📱 Requesting location permission from user...')
      const { status: newStatus } = await Location.requestForegroundPermissionsAsync()
      console.log('New permission status after request:', newStatus)
      
      if (newStatus === 'granted') {
        console.log('✅ Location permission granted by user')
        setLocationPermission(true)
        await initializeLocationServices()
        // If driver is online, start tracking immediately
        if (driver && (driver.status === 'online' || driver.status === 'busy')) {
          console.log('📱 Native: Permission granted and driver online, starting location services')
          await handleActiveDriver()
        }
      } else {
        console.log('❌ Location permission denied by user')
        setLocationPermission(false)
        
        // Show alert explaining why location is needed
        if (Platform.OS !== 'web') {
          const { Alert } = require('react-native')
          Alert.alert(
            'Location Permission Required',
            'A1 Taxi needs location access to:\n\n• Find nearby ride requests\n• Share your location with customers\n• Provide accurate pickup and drop-off services\n\nPlease enable location permission in your device settings.',
            [
              { text: 'Cancel', style: 'cancel' },
              { 
                text: 'Open Settings', 
                onPress: () => {
                  // Open app settings
                  const { Linking } = require('react-native')
                  Linking.openSettings()
                }
              }
            ]
          )
        }
      }
    } catch (error) {
      console.error('❌ Error requesting location permission on startup:', error)
      setLocationPermission(false)
    }
  }

  const initializeLocationServices = async () => {
    try {
      console.log('🔧 Initializing location services...')
      // Permission should already be granted at this point
      console.log('✅ Location services initialized')
    } catch (error) {
      console.error('❌ Error initializing location services:', error)
    }
  }

  const handleActiveDriver = async () => {
    try {
      setIsHandlingActiveDriver(true)
      console.log('=== HANDLING ACTIVE DRIVER ===')
      console.log('Driver status:', driver?.status)
      console.log('Driver verified:', driver?.is_verified)
      
      // Step 1: Ensure location record exists
      const recordCreated = await forceCreateLocationRecord()
      
      if (recordCreated) {
        console.log('✅ Location record confirmed, starting tracking...')
        console.log('✅ Driver is now available for customer bookings')
        
        // Step 2: Start location tracking (only if not already tracking)
        if (!isTracking) {
          await startLocationTracking()
        }

        // Step 3: Start background tracking for when app is closed
        await startBackgroundTracking()
      } else {
        console.error('❌ Failed to create location record, cannot start tracking')
      }
    } catch (error) {
      console.error('❌ Error handling active driver:', error)
    } finally {
      setIsHandlingActiveDriver(false)
    }
  }

  const startBackgroundTracking = async (): Promise<boolean> => {
    if (!driver?.user_id) {
      console.log('❌ No driver available for background tracking')
      return false
    }

    // Check if already active
    const isAlreadyActive = await BackgroundLocationService.isBackgroundLocationActive()
    if (isAlreadyActive) {
      console.log('✅ Background tracking already active')
      setIsBackgroundTrackingActive(true)
      setBackgroundTrackingStarted(true)
      return true
    }

    try {
      console.log('=== STARTING BACKGROUND LOCATION TRACKING ===')
      console.log('Driver:', driver.user?.full_name)
      console.log('Status:', driver.status)

      const success = await BackgroundLocationService.startBackgroundLocationTracking(driver.user_id, driver.id)
      setBackgroundTrackingStarted(success)
      setIsBackgroundTrackingActive(success)

      if (success) {
        console.log('✅ Background location tracking started successfully')
        console.log('✅ Driver location will be sent every 3 seconds even when app is closed')
      } else {
        console.log('❌ Failed to start background location tracking')
      }

      return success
    } catch (error) {
      console.error('❌ Error starting background tracking:', error)
      setIsBackgroundTrackingActive(false)
      setBackgroundTrackingStarted(false)
      return false
    }
  }

  const stopBackgroundTracking = async (): Promise<void> => {
    try {
      console.log('=== STOPPING BACKGROUND LOCATION TRACKING ===')
      await BackgroundLocationService.stopBackgroundLocationTracking()
      setBackgroundTrackingStarted(false)
      setIsBackgroundTrackingActive(false)
      console.log('✅ Background location tracking stopped')
    } catch (error) {
      console.error('❌ Error stopping background tracking:', error)
    }
  }

  const forceCreateLocationRecord = async (): Promise<boolean> => {
    if (!driver?.user_id) {
      console.error('❌ No driver user_id available')
      return false
    }

    try {
      console.log('=== FORCE CREATING LOCATION RECORD ===')
      console.log('Driver User ID:', driver.user_id)
      console.log('Driver Name:', driver.user?.full_name)

      // Validate environment variables first
      const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
      const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
      
      if (!supabaseUrl || supabaseUrl === 'your_supabase_url_here' || supabaseUrl === 'undefined' || supabaseUrl.includes('your-project-ref')) {
        console.error('❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly')
        console.error('Current value:', supabaseUrl)
        console.log('⚠️ Falling back to direct database insert without edge function')
        return await fallbackCreateLocationRecord()
      }
      
      if (!supabaseAnonKey || supabaseAnonKey === 'your_supabase_anon_key_here' || supabaseAnonKey === 'undefined') {
        console.error('❌ EXPO_PUBLIC_SUPABASE_ANON_KEY is not configured properly')
        console.error('Current value:', supabaseAnonKey)
        console.log('⚠️ Falling back to direct database insert without edge function')
        return await fallbackCreateLocationRecord()
      }

      // Get current location (with fallback to default)
      let latitude = 12.7401984; // Default Hosur coordinates
      let longitude = 77.824;
      let accuracy = 10;
      let heading = null;
      let speed = null;

      console.log('📍 Attempting to get current GPS location...')
      try {
        if (Platform.OS === 'web') {
          const webLocation = await getCurrentLocationWithGoogleMaps()
          if (webLocation) {
            latitude = webLocation.latitude
            longitude = webLocation.longitude
            accuracy = webLocation.accuracy || 10
            console.log('✅ Got web location:', webLocation)
          }
        } else {
          const nativeLocation = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
            timeout: 10000
          })
          if (nativeLocation) {
            latitude = nativeLocation.coords.latitude
            longitude = nativeLocation.coords.longitude
            accuracy = nativeLocation.coords.accuracy || 10
            heading = nativeLocation.coords.heading
            speed = nativeLocation.coords.speed
            console.log('✅ Got native location:', nativeLocation.coords)
          }
        }
      } catch (locationError) {
        console.log('⚠️ Could not get current location, using default Hosur coordinates')
        console.log('Location error:', locationError.message)
      }

      // Use RPC function to create/update initial location record
      console.log('📤 Creating initial location record via RPC...')
      console.log('📍 Using GPS coordinates:', latitude, longitude)

      try {
        const { data: result, error: rpcError } = await supabase
          .rpc('update_driver_location_rpc', {
            p_driver_id: driver.id,
            p_latitude: latitude,
            p_longitude: longitude,
            p_heading: heading,
            p_speed: speed,
            p_accuracy: accuracy
          })

        if (rpcError) {
          console.error('❌ RPC error:', rpcError)
          throw new Error(rpcError.message)
        }

        if (result && result.success) {
          console.log('✅ Initial location record', result.action, 'successfully via RPC')
          return true
        } else {
          console.error('❌ RPC returned error:', result?.error)
          throw new Error(result?.error || 'Unknown error')
        }
      } catch (rpcError) {
        console.error('❌ RPC failed:', rpcError.message)
        console.log('❌ This could be due to:')
        console.log('  1. Database connectivity issues')
        console.log('  2. Driver record not found')
        console.log('  3. Permission issues')
        console.log('  4. CORS issues')
        console.log('⚠️ Falling back to direct database insert')
        return await fallbackCreateLocationRecord()
      }
      
    } catch (error) {
      console.error('❌ Exception in forceCreateLocationRecord:', error)
      console.log('⚠️ Attempting fallback to direct database insert')
      return await fallbackCreateLocationRecord()
    }
  }

  // Fallback function to create location record using RPC
  const fallbackCreateLocationRecord = async (): Promise<boolean> => {
    if (!driver?.user_id) {
      console.error('❌ No driver user_id available for fallback')
      return false
    }

    try {
      console.log('=== FALLBACK: CREATING LOCATION RECORD VIA RPC ===')

      // Get current location if possible
      let latitude = 12.7401984 // Default Bangalore coordinates
      let longitude = 77.824
      let accuracy = 10

      console.log('📍 Attempting to get current GPS location...')
      try {
        if (Platform.OS === 'web') {
          const webLocation = await getCurrentLocationWithGoogleMaps()
          if (webLocation) {
            latitude = webLocation.latitude
            longitude = webLocation.longitude
            accuracy = webLocation.accuracy || 10
            console.log('✅ Got web location:', webLocation)
          }
        } else {
          const nativeLocation = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
            timeout: 10000
          })
          if (nativeLocation) {
            latitude = nativeLocation.coords.latitude
            longitude = nativeLocation.coords.longitude
            accuracy = nativeLocation.coords.accuracy || 10
            console.log('✅ Got native location:', nativeLocation.coords)
          }
        }
      } catch (locationError) {
        console.log('⚠️ Could not get current location, using default Bangalore coordinates')
        console.log('Location error:', locationError.message)
      }

      // Use RPC function to upsert location
      const { data: result, error: rpcError } = await supabase
        .rpc('upsert_driver_location', {
          p_user_id: driver.user_id,
          p_latitude: latitude,
          p_longitude: longitude,
          p_heading: null,
          p_speed: null,
          p_accuracy: accuracy
        })

      if (rpcError) {
        console.error('❌ RPC error:', rpcError)
        return false
      }

      if (result && result.success) {
        console.log('✅ Location record', result.action, 'successfully via RPC')
        return true
      } else {
        console.error('❌ RPC returned error:', result?.error)
        return false
      }

    } catch (error) {
      console.error('❌ Exception in fallback location creation:', error)
      return false
    }
  }

  const checkLocationPermission = async () => {
    try {
      console.log('=== CHECKING LOCATION PERMISSION ===')
      
      if (Platform.OS === 'web') {
        console.log('✅ Web platform - permission assumed granted')
        setLocationPermission(true)
        return
      }

      const { status } = await Location.getForegroundPermissionsAsync()
      console.log('Current permission status:', status)
      
      if (status === 'granted') {
        setLocationPermission(true)
        console.log('✅ Location permission already granted')
      } else {
        console.log('❌ Permission not granted, requesting...')
        const { status: newStatus } = await Location.requestForegroundPermissionsAsync()
        console.log('New permission status:', newStatus)
        setLocationPermission(newStatus === 'granted')
      }
    } catch (error) {
      console.error('Error checking location permission:', error)
      setLocationPermission(false)
    }
  }

  const updateLocationWithGoogleMaps = async () => {
    if (!driver?.user_id) {
      console.log('❌ No driver available for location update')
      return
    }

    try {
      console.log('=== UPDATING LOCATION WITH GOOGLE MAPS ===')
      
      let locationObject: Location.LocationObject | null = null

      if (Platform.OS === 'web') {
        console.log('🌐 Using web geolocation...')
        const googleLocation = await getCurrentLocationWithGoogleMaps()
        if (googleLocation) {
          locationObject = {
            coords: {
              latitude: googleLocation.latitude,
              longitude: googleLocation.longitude,
              altitude: null,
              accuracy: googleLocation.accuracy || 10,
              altitudeAccuracy: null,
              heading: null,
              speed: null,
            },
            timestamp: Date.now(),
          }
          setCurrentAddress(googleLocation.address || null)
        }
      } else {
        console.log('📱 Using native location...')
        locationObject = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
          timeout: 15000
        })
        
        if (locationObject) {
          const address = await reverseGeocode(
            locationObject.coords.latitude,
            locationObject.coords.longitude
          )
          setCurrentAddress(address || null)
        }
      }

      if (locationObject) {
        console.log('✅ Location obtained:', locationObject.coords)
        setCurrentLocation(locationObject)
        await sendLocationToEdgeFunction(locationObject)
      } else {
        console.log('❌ Failed to get location')
      }
    } catch (error) {
      console.error('❌ Error updating location:', error)
    }
  }

  const sendLocationToEdgeFunction = async (location: Location.LocationObject) => {
    if (!driver?.user_id) {
      console.log('❌ No driver user_id for location update')
      return
    }

    try {
      console.log('=== SENDING LOCATION TO EDGE FUNCTION ===')
      console.log('Driver User ID:', driver.user_id)
      console.log('Location:', {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy
      })

      const locationPayload = {
        user_id: driver.user_id,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        heading: location.coords.heading,
        speed: location.coords.speed,
        accuracy: location.coords.accuracy
      }

      console.log('📤 Updating location via RPC...')

      // Use RPC function to update location (bypasses RLS)
      const { data: result, error: rpcError } = await supabase
        .rpc('update_driver_location_rpc', {
          p_driver_id: driver.id,
          p_latitude: location.coords.latitude,
          p_longitude: location.coords.longitude,
          p_heading: location.coords.heading || null,
          p_speed: location.coords.speed || null,
          p_accuracy: location.coords.accuracy || null
        })

      if (rpcError) {
        console.error('❌ RPC error:', rpcError)
        throw new Error(rpcError.message)
      }

      if (result && result.success) {
        console.log('✅ Location', result.action, 'successfully via RPC')
      } else {
        console.error('❌ RPC returned error:', result?.error)
        throw new Error(result?.error || 'Unknown error')
      }

    } catch (error) {
      console.error('❌ Exception updating location:', error.message)
    }
  }

  const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'web') {
      setLocationPermission(true)
      return true
    }

    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      const granted = status === 'granted'
      setLocationPermission(granted)
      
      if (granted) {
        console.log('✅ Location permission granted')
        await updateLocationWithGoogleMaps()
      }
      
      return granted
    } catch (error) {
      console.error('Error requesting location permission:', error)
      return false
    }
  }

  const startLocationTracking = async (): Promise<void> => {
    if (!driver) {
      console.log('❌ Cannot start tracking: no driver available')
      return
    }

    if (isTracking) {
      console.log('⚠️ Location tracking already active')
      return
    }

    if (!locationPermission) {
      console.log('❌ Cannot start tracking: no location permission')
      return
    }

    try {
      console.log('=== STARTING LOCATION TRACKING ===')
      console.log('Driver:', driver.user?.full_name)
      console.log('Status:', driver.status)
      console.log('Permission:', locationPermission)

      // CRITICAL: Set tracking to true BEFORE starting to prevent re-entry
      setIsTracking(true)
      console.log('✅ isTracking state set to TRUE at start')

      // Get initial location
      await updateLocationWithGoogleMaps()

      if (Platform.OS === 'web') {
        // Web: Use interval-based updates every 5 seconds
        console.log('🌐 Starting web-based location tracking with 5s intervals')
        const intervalId = setInterval(async () => {
          console.log('🔄 5-second interval location update...')
          await updateLocationWithGoogleMaps()
        }, 5000) // Update every 5 seconds

        setLocationSubscription({ remove: () => clearInterval(intervalId) } as any)
      } else {
        // Native: Use location watching every 5 seconds
        console.log('📱 Starting native location watching with 5s intervals')
        const subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 5000, // Every 5 seconds
            distanceInterval: 5, // Every 5 meters
          },
          async (location) => {
            console.log('📍 5-second location watch update:', location.coords)
            setCurrentLocation(location)

            const address = await reverseGeocode(
              location.coords.latitude,
              location.coords.longitude
            )
            setCurrentAddress(address || null)

            await sendLocationToEdgeFunction(location)
          }
        )
        setLocationSubscription(subscription)
      }

      console.log('✅ Location tracking started successfully')
    } catch (error) {
      console.error('❌ Error starting location tracking:', error)
      setIsTracking(false)
    }
  }

  const stopLocationTracking = () => {
    console.log('=== STOPPING LOCATION TRACKING ===')
    
    if (locationSubscription) {
      locationSubscription.remove()
      setLocationSubscription(null)
      setIsTracking(false)
      console.log('✅ Location tracking stopped')
    } else {
      console.log('⚠️ No active location subscription to stop')
    }
  }

  const value = {
    currentLocation,
    currentAddress,
    locationPermission,
    requestLocationPermission,
    startLocationTracking,
    stopLocationTracking,
    isTracking,
    updateLocationWithGoogleMaps,
    forceCreateLocationRecord,
    isBackgroundTrackingActive,
    startBackgroundTracking,
    stopBackgroundTracking,
  }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}