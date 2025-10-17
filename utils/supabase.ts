import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'
import { Database } from '../types/database'

// Get configuration from app.config.js extra field (works in both dev and production)
const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl || process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://whubaypabojomdyfqxcf.supabase.co';
const supabaseAnonKey = Constants.expoConfig?.extra?.supabaseAnonKey || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodWJheXBhYm9qb21keWZxeGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MDYwMzEsImV4cCI6MjA3MjI4MjAzMX0.0LUHKqX1wdFnmk3KRdyv1lceMxurg_OksZKQ1apn0og';
const supabaseServiceRoleKey = process.env.EXPO_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || '';

console.log('Supabase Config:', {
  hasUrl: !!supabaseUrl,
  hasAnonKey: !!supabaseAnonKey,
  url: supabaseUrl
});

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

export const supabaseAdmin = supabaseServiceRoleKey
  ? createClient<Database>(
      supabaseUrl,
      supabaseServiceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  : supabase