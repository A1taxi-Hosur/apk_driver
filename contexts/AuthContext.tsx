import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { Database } from '../types/database'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { supabase } from '../utils/supabase'
import { rideNotificationService } from '../services/RideNotificationService'
import { backgroundRideMonitor } from '../services/BackgroundRideMonitor'

type Driver = Database['public']['Tables']['drivers']['Row'] & {
  user: Database['public']['Tables']['users']['Row']
  vehicle?: Database['public']['Tables']['vehicles']['Row']
}

interface AuthContextType {
  session: Session | null
  user: User | null
  driver: Driver | null
  loading: boolean
  signIn: (username: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  updateDriverStatus: (status: 'offline' | 'online' | 'busy') => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

const DRIVER_SESSION_KEY = 'driver_session'

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [driver, setDriver] = useState<Driver | null>(null)
  const [loading, setLoading] = useState(true)

  // Helper function to convert base64 to base64url format
  const base64ToBase64Url = (base64: string): string => {
    return base64
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '')
  }

  useEffect(() => {
    // Safety timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      console.warn('⚠️ Auth initialization timeout - forcing loading to false')
      setLoading(false)
    }, 10000) // 10 second timeout

    initializeAuth().finally(() => {
      clearTimeout(timeout)
    })

    return () => clearTimeout(timeout)
  }, [])

  const initializeAuth = async () => {
    try {
      console.log('=== INITIALIZING AUTHENTICATION ===')
      
      // First, check if Supabase client has an existing session
      console.log('🔍 Checking Supabase client session...')
      const { data: existingSession } = await supabase.auth.getSession()
      
      if (existingSession.session) {
        console.log('✅ Found existing Supabase session')
        console.log('Session user ID:', existingSession.session.user.id)
        
        // Try to load driver data for this session using RPC (bypasses RLS)
        try {
          const { data: sessionDriverData, error: sessionDriverError } = await supabase
            .rpc('get_driver_by_user_id', {
              p_user_id: existingSession.session.user.id
            })

          if (!sessionDriverError && sessionDriverData && sessionDriverData.length > 0) {
            const driverRecord = sessionDriverData[0]
            console.log('✅ Found driver data for existing session')

            const sessionUser = {
              id: existingSession.session.user.id,
              email: existingSession.session.user.email || 'driver@example.com',
              role: 'driver',
              full_name: existingSession.session.user.user_metadata?.full_name || 'Driver',
              phone_number: existingSession.session.user.user_metadata?.phone_number || null,
              avatar_url: null,
              is_active: true,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }

            const completeDriver = {
              id: driverRecord.id,
              user_id: driverRecord.user_id,
              license_number: driverRecord.license_number,
              license_expiry: driverRecord.license_expiry,
              status: driverRecord.status,
              rating: driverRecord.rating,
              total_rides: driverRecord.total_rides,
              is_verified: driverRecord.is_verified,
              vehicle_id: driverRecord.vehicle_id,
              vendor_id: driverRecord.vendor_id,
              phone_number: driverRecord.phone_number,
              name: driverRecord.name,
              created_at: driverRecord.created_at,
              updated_at: driverRecord.updated_at,
              user: sessionUser,
              vehicle: driverRecord.vehicle_id ? {
                id: driverRecord.vehicle_id,
                registration_number: driverRecord.vehicle_registration_number,
                make: driverRecord.vehicle_make,
                model: driverRecord.vehicle_model,
                year: driverRecord.vehicle_year,
                color: driverRecord.vehicle_color,
                vehicle_type: driverRecord.vehicle_type,
                capacity: driverRecord.vehicle_capacity
              } : null
            }

            setUser(sessionUser as any)
            setDriver(completeDriver)
            setLoading(false)
            console.log('✅ Session restored from Supabase client')

            // If driver is online, start background monitoring
            if (completeDriver.status === 'online' || completeDriver.status === 'busy') {
              console.log('🟢 Driver is online, starting background services...');
              try {
                await backgroundRideMonitor.startMonitoring();
                console.log('✅ Background monitoring started on app launch');
              } catch (bgError) {
                console.error('⚠️ Error starting background monitoring on launch:', bgError);
              }
            }

            return
          } else {
            console.log('⚠️ No driver record found for existing session or query error:', sessionDriverError)
            // Clear the session and let user login again
            await supabase.auth.signOut()
          }
        } catch (sessionError) {
          console.log('⚠️ Could not load driver data for session:', sessionError)
          // Clear the session on error
          await supabase.auth.signOut()
        }
      }
      
      // Check for stored driver session
      const storedSession = await AsyncStorage.getItem(DRIVER_SESSION_KEY)
      
      if (storedSession) {
        console.log('Found stored driver session')
        const sessionData = JSON.parse(storedSession)
        
        // Check if session is not too old (24 hours)
        const sessionAge = Date.now() - sessionData.timestamp
        if (sessionAge < 24 * 60 * 60 * 1000) {
          console.log('✅ Found valid stored session, but fetching CURRENT status from database...')
          
          // CRITICAL: Always fetch current status from database using RPC (bypasses RLS)
          try {
            const { data: currentDriverData, error: driverError } = await supabase
              .rpc('get_driver_by_user_id', {
                p_user_id: sessionData.user.id
              })
            
            if (driverError || !currentDriverData || currentDriverData.length === 0) {
              console.error('❌ Could not fetch current driver data:', driverError)
              // Fallback to stored session if database fails
              setUser(sessionData.user)
              setDriver(sessionData.driver)
            } else {
              console.log('=== CURRENT STATUS FROM DATABASE ===')
              const driverRecord = currentDriverData[0]
              console.log('📊 Database status:', driverRecord.status)
              console.log('📊 Stored session status:', sessionData.driver.status)
              console.log('📊 Using DATABASE status (authoritative source)')

              // Convert RPC result to driver object with vehicle
              const freshDriverData = {
                id: driverRecord.id,
                user_id: driverRecord.user_id,
                license_number: driverRecord.license_number,
                license_expiry: driverRecord.license_expiry,
                status: driverRecord.status,
                rating: driverRecord.rating,
                total_rides: driverRecord.total_rides,
                is_verified: driverRecord.is_verified,
                vehicle_id: driverRecord.vehicle_id,
                vendor_id: driverRecord.vendor_id,
                phone_number: driverRecord.phone_number,
                name: driverRecord.name,
                created_at: driverRecord.created_at,
                updated_at: driverRecord.updated_at,
                user: sessionData.user,
                vehicle: driverRecord.vehicle_id ? {
                  id: driverRecord.vehicle_id,
                  registration_number: driverRecord.vehicle_registration_number,
                  make: driverRecord.vehicle_make,
                  model: driverRecord.vehicle_model,
                  year: driverRecord.vehicle_year,
                  color: driverRecord.vehicle_color,
                  vehicle_type: driverRecord.vehicle_type,
                  capacity: driverRecord.vehicle_capacity
                } : null
              }

              setUser(sessionData.user)
              setDriver(freshDriverData)

              console.log('✅ Session restored with CURRENT database status:', freshDriverData.status)

              // If driver is online, start background monitoring
              if (freshDriverData.status === 'online' || freshDriverData.status === 'busy') {
                console.log('🟢 Driver is online, starting background services...');
                try {
                  await backgroundRideMonitor.startMonitoring();
                  console.log('✅ Background monitoring started on session restore');
                } catch (bgError) {
                  console.error('⚠️ Error starting background monitoring on restore:', bgError);
                }
              }
            }
          } catch (fetchError) {
            console.error('Error fetching current driver status:', fetchError)
            // Fallback to stored session
            setUser(sessionData.user)
            setDriver(sessionData.driver)
          }
          
          setLoading(false)
          return
        } else {
          console.log('Session expired, clearing...')
          await AsyncStorage.removeItem(DRIVER_SESSION_KEY)
        }
      }
      
      console.log('No existing session found')
      setLoading(false)
    } catch (error) {
      console.error('Error initializing auth:', error)
      setLoading(false)
    }
  }

  const signIn = async (username: string, password: string) => {
    try {
      console.log('=== DRIVER AUTHENTICATION ===')
      console.log('Username:', username)
      console.log('Password length:', password.length)

      setLoading(true)

      // Step 1: Authenticate using RPC function (bypasses RLS)
      console.log('🔍 Authenticating driver credentials via RPC...')

      const { data: authResult, error: authError } = await supabase
        .rpc('authenticate_driver', {
          p_username: username,
          p_password: password
        })

      console.log('Authentication result:', authResult)

      if (authError) {
        console.error('❌ Authentication RPC error:', authError)
        throw new Error('Database connection failed')
      }

      if (!authResult || !authResult.success) {
        console.error('❌ Authentication failed:', authResult?.message)
        throw new Error('Invalid username or password')
      }

      console.log('✅ Authentication successful')
      console.log('User ID:', authResult.user_id)

      // Step 2: Get user data using RPC function (bypasses RLS)
      console.log('📋 Loading user profile...')
      const { data: userDataArray, error: userError } = await supabase
        .rpc('get_user_by_id', {
          p_user_id: authResult.user_id
        })

      if (userError || !userDataArray || userDataArray.length === 0) {
        console.error('❌ User not found:', userError)
        throw new Error('User profile not found')
      }

      const userData = userDataArray[0]
      
      // Verify user is a driver
      if (userData.role !== 'driver') {
        console.error('❌ User is not a driver, role:', userData.role)
        throw new Error('Access denied. This app is for drivers only.')
      }
      
      console.log('✅ User verified as driver')

      // Step 3: Get CURRENT driver data with vehicle from database using RPC (bypasses RLS)
      console.log('🚗 Loading driver profile via RPC...')
      const { data: driverData, error: driverError } = await supabase
        .rpc('get_driver_by_user_id', {
          p_user_id: authResult.user_id
        })

      if (driverError) {
        console.error('❌ Driver profile RPC error:', driverError)
        throw new Error('Driver profile not found')
      }

      if (!driverData || driverData.length === 0) {
        console.error('❌ No driver record found for user:', authResult.user_id)
        throw new Error('Driver profile not found')
      }

      // Convert RPC result to driver object with vehicle
      const driverRecord = driverData[0]
      let driver = {
        id: driverRecord.id,
        user_id: driverRecord.user_id,
        license_number: driverRecord.license_number,
        license_expiry: driverRecord.license_expiry,
        status: driverRecord.status,
        rating: driverRecord.rating,
        total_rides: driverRecord.total_rides,
        is_verified: driverRecord.is_verified,
        vehicle_id: driverRecord.vehicle_id,
        vendor_id: driverRecord.vendor_id,
        phone_number: driverRecord.phone_number,
        name: driverRecord.name,
        created_at: driverRecord.created_at,
        updated_at: driverRecord.updated_at,
        vehicles: driverRecord.vehicle_id ? {
          id: driverRecord.vehicle_id,
          registration_number: driverRecord.vehicle_registration_number,
          make: driverRecord.vehicle_make,
          model: driverRecord.vehicle_model,
          year: driverRecord.vehicle_year,
          color: driverRecord.vehicle_color,
          vehicle_type: driverRecord.vehicle_type,
          capacity: driverRecord.vehicle_capacity
        } : null
      }
      
      // Check if driver is verified
      if (!driver.is_verified) {
        console.error('❌ Driver not verified')
        throw new Error('Your driver account is pending verification. Please contact your administrator.')
      }
      
      // CRITICAL: Get the ACTUAL current status from database
      console.log('=== RETRIEVING CURRENT DRIVER STATUS ===')
      console.log('✅ Driver profile loaded successfully')
      console.log('📊 CURRENT status from database:', driver.status)
      console.log('📊 Status retrieved at:', new Date().toISOString())
      console.log('📊 TESTING MODE: Setting status to ONLINE by default')
      
      // FOR TESTING: Force status to online
      console.log('🧪 TESTING MODE ACTIVE - Ensuring driver is ONLINE and AVAILABLE')
      try {
        const { data: statusResult, error: statusUpdateError } = await supabase
          .rpc('update_driver_status_by_id', {
            p_driver_id: driver.id,
            p_status: 'online'
          })

        if (statusUpdateError) {
          console.error('❌ Error setting default online status:', statusUpdateError)
        } else {
          console.log('✅ Driver status set to ONLINE and VERIFIED for testing')
          console.log('✅ Status update result:', statusResult)
          // Create new driver object with updated status (immutable update)
          const updatedDriver = {
            ...driver,
            status: 'online',
            is_verified: true
          }
          driver = updatedDriver // Use updated driver object
        }
      } catch (error) {
        console.error('❌ Exception setting default status:', error)
      }
      
      // Step 5: Combine data
      const completeDriver = {
        ...driver,
        user: userData,
        vehicle: driver.vehicles
      }
      
      console.log('=== FINAL STATUS CONFIRMATION ===')
      console.log('📊 Driver logged in with TESTING status:', completeDriver.status)
      console.log('🧪 TESTING MODE: Driver defaulted to ONLINE')
      console.log('📊 Status will remain ONLINE until manually changed')
      
      // Step 6: Set state
      setUser(userData as any)
      setDriver(completeDriver)
      
      // Step 7: Store session
      await AsyncStorage.setItem(DRIVER_SESSION_KEY, JSON.stringify({
        user: userData,
        driver: completeDriver,
        timestamp: Date.now()
      }))
      
      console.log('✅ Authentication completed - LocationContext will handle location setup')
      
      // Note: Location permission will be requested by LocationContext on startup
      console.log('📍 Location permission will be requested by LocationContext')
      
      setLoading(false)
      return { error: null }
      
    } catch (error) {
      console.error('❌ Sign in failed:', error)
      setLoading(false)
      return { error }
    }
  }

  const signOut = async () => {
    try {
      console.log('=== SIGNING OUT ===')
      console.log('📊 Current driver status before logout:', driver?.status)
      console.log('🔒 Status will be preserved in database - NOT changing to offline')
      
      // Clear session data
      await AsyncStorage.multiRemove([
        DRIVER_SESSION_KEY,
        '@supabase.auth.token',
        'supabase.auth.token'
      ])
      
      // Clear state
      setSession(null)
      setUser(null)
      setDriver(null)
      
      console.log('✅ Sign out completed - driver status preserved in database')
      
    } catch (error) {
      console.error('❌ Error during sign out:', error)
      throw error
    }
  }

  const updateDriverStatus = async (status: 'offline' | 'online' | 'busy') => {
    if (!driver) {
      console.log('No driver available for status update')
      return
    }

    // Check if this is actually a change or just a sync
    const isActualChange = driver.status !== status;
    const changeType = isActualChange ? 'MANUAL CHANGE' : 'SYNC UPDATE';

    try {
      console.log(`=== ${changeType} ===`)
      console.log('🔄 Updating driver status from:', driver.status, 'to:', status)
      console.log('📊 Change type:', changeType)
      console.log('📊 Database will be updated with new status')
      console.log('📊 Timestamp:', new Date().toISOString())
      console.log('📊 This change is PERMANENT and will persist across app sessions')
      console.log('📊 Status will remain', status, 'until explicitly changed again by user or ride lifecycle')
      
      // Only update database if this is an actual change
      if (isActualChange) {
        console.log('📊 WRITING TO DATABASE - This is the authoritative source of truth')

        if (status === 'online') {
          console.log('🟢 Driver going ONLINE - ensuring availability for customers');

          // Start foreground service notification
          try {
            await rideNotificationService.showForegroundServiceNotification();
            console.log('✅ Foreground service notification started');
          } catch (fgError) {
            console.error('⚠️ Error starting foreground service:', fgError);
          }

          // Start background ride monitoring
          try {
            await backgroundRideMonitor.startMonitoring();
            console.log('✅ Background ride monitoring started');
          } catch (bgError) {
            console.error('⚠️ Error starting background monitoring:', bgError);
          }
        } else if (status === 'offline') {
          console.log('🔴 Driver going OFFLINE - cleaning up services');

          // Stop foreground service notification
          try {
            await rideNotificationService.dismissAllRideNotifications();
            console.log('✅ Foreground service notification dismissed');
          } catch (fgError) {
            console.error('⚠️ Error dismissing foreground service:', fgError);
          }

          // Stop background ride monitoring
          try {
            await backgroundRideMonitor.stopMonitoring();
            console.log('✅ Background ride monitoring stopped');
          } catch (bgError) {
            console.error('⚠️ Error stopping background monitoring:', bgError);
          }
        }

        const { data: updatedData, error } = await supabase
          .rpc('update_driver_status_by_id', {
            p_driver_id: driver.id,
            p_status: status
          })

        if (error) {
          console.error('Error updating driver status:', error)
          throw error
        }

        console.log('✅ Database updated successfully')
        console.log('✅ Updated driver data:', updatedData)
        console.log('✅ Status is now PERMANENTLY set to:', status)
        console.log('✅ No automatic processes will change this status')

        if (status === 'online') {
          console.log('✅ Driver is now VERIFIED and AVAILABLE for customer bookings')
        }
      } else {
        console.log('✅ No database update needed - syncing UI only')
      }

      console.log('✅ Driver status changed from', driver.status, 'to', status)
      if (isActualChange) {
        console.log('✅ This change will persist across app sessions')
        console.log('✅ Status will remain', status, 'indefinitely until next manual change')
      }
      console.log('✅ Status will remain', status, 'until manually changed again')
      
      // Update local state
      setDriver(prev => prev ? { 
        ...prev, 
        status,
        is_verified: status === 'online' ? true : prev.is_verified
      } : null)
      
      console.log('✅ Local state updated - UI will reflect new status')
      
      // Force refresh of ride notifications when status changes
      if (isActualChange && status === 'online') {
        console.log('🔄 Driver went online - forcing notification refresh')
        setTimeout(() => {
          // Trigger a manual check for pending rides
          console.log('🔄 Triggering manual ride check after status change')
        }, 2000)
      }
      
      // Update stored session to reflect new status
      if (isActualChange) {
        try {
          const sessionData = await AsyncStorage.getItem(DRIVER_SESSION_KEY)
          if (sessionData) {
            const parsed = JSON.parse(sessionData)
            parsed.driver.status = status
            if (status === 'online') {
              parsed.driver.is_verified = true
            }
            parsed.timestamp = Date.now()
            await AsyncStorage.setItem(DRIVER_SESSION_KEY, JSON.stringify(parsed))
            console.log('✅ Stored session updated with new status')
            console.log('✅ Status will persist even after app restart')
          }
        } catch (storageError) {
          console.error('⚠️ Failed to update stored session:', storageError)
        }
      } else {
        console.log('✅ Stored session unchanged - sync operation')
      }
    } catch (error) {
      console.error('Failed to update driver status:', error)
      throw error
    }
  }

  // New function to update driver status from ride context
  const updateDriverStatusFromRide = (status: 'offline' | 'online' | 'busy') => {
    console.log('🔄 Updating driver status from ride context:', status)
    setDriver(prev => prev ? { 
      ...prev, 
      status
    } : null)
  }
  const value = {
    session,
    user,
    driver,
    loading,
    signIn,
    signOut,
    updateDriverStatus,
    updateDriverStatusFromRide
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}