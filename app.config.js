const IS_DEV = process.env.NODE_ENV === 'development';

export default {
  expo: {
    name: "A1 Taxi",
    slug: "taxi-driver-pro",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "taxidriver",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    
    // Disable telemetry and analytics to prevent network calls
    analytics: false,
    
    // Configure for offline development
    updates: {
      enabled: false,
      checkAutomatically: "ON_ERROR_RECOVERY",
      fallbackToCacheTimeout: 0
    },
    
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.a1taxi.driverpro",
      config: {
        googleMaps: {
          apiKey: "AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q"
        }
      }
    },
    web: {
      bundler: "metro",
      output: "single",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-font",
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "A1 Taxi needs location access to find nearby ride requests, share your location with customers, and provide accurate pickup and drop-off services.",
          locationWhenInUsePermission: "A1 Taxi needs location access to find nearby ride requests, share your location with customers, and provide accurate pickup and drop-off services.",
          isAndroidBackgroundLocationEnabled: true,
          isAndroidForegroundServiceEnabled: true
        }
      ],
      [
        "expo-task-manager"
      ],
      [
        "expo-background-fetch",
        {
          backgroundFetchInterval: 10
        }
      ]
    ],
    extra: {
      googleMapsApiKey: "AIzaSyBIHJUk4DuAG7tjp_gIdNhUJdpBKN1eM2Q",
      supabaseUrl: "https://whubaypabojomdyfqxcf.supabase.co",
      supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodWJheXBhYm9qb21keWZxeGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MDYwMzEsImV4cCI6MjA3MjI4MjAzMX0.0LUHKqX1wdFnmk3KRdyv1lceMxurg_OksZKQ1apn0og",
      eas: {
        projectId: "00bebe2b-9fec-4baf-9e90-8045d7a41861"
      }
    },
    experiments: {
      typedRoutes: true
    }
  }
};