--------- beginning of main
10-18 09:47:59.773  8424  8450 I native  : I0000 00:00:1760761079.770794    8450 soda_async_impl.cc:1377] Current audio timestamp: 1760761079641841
10-18 09:47:59.788  8424  8459 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:00.367 26036 26620 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:00.368 26036 26620 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:00.368 26106 26139 E IPCThreadState: Binder transaction failure. id: 428265173, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:00.369 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:00.370 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:00.370 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:00.370 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:00.370 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:00.799 26036 26620 I WifiScanner: onFullResults
10-18 09:48:00.800 26036 26519 I WifiScanner: onFullResults
10-18 09:48:00.801 26036 26052 I WifiScanner: onFullResults
10-18 09:48:00.814 26036 30448 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:00.992 26036 26104 I ActivityScheduler: nextTriggerTime: 1205256155, in 5800ms, detectorType: 39, FULL_TYPE alarmWindowMillis: 625
10-18 09:48:00.998 26106 26156 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:01.020 26106 26156 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:02.086 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/base.apk' with 1 weak references
10-18 09:48:02.087 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.arm64_v8a.apk' with 1 weak references
10-18 09:48:02.088 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.bn.apk' with 1 weak references
10-18 09:48:02.089 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.en.apk' with 1 weak references
10-18 09:48:02.090 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.gu.apk' with 1 weak references
10-18 09:48:02.091 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.hi.apk' with 1 weak references
10-18 09:48:02.091 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.kn.apk' with 1 weak references
10-18 09:48:02.091 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.ml.apk' with 1 weak references
10-18 09:48:02.091 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.mr.apk' with 1 weak references
10-18 09:48:02.092 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.pa.apk' with 1 weak references
10-18 09:48:02.092 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.ta.apk' with 1 weak references
10-18 09:48:02.093 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.te.apk' with 1 weak references
10-18 09:48:02.094 31723 31737 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.xxhdpi.apk' with 1 weak references
10-18 09:48:05.417 26036 26513 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:05.417 26036 26513 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:05.417 26106 26139 E IPCThreadState: Binder transaction failure. id: 428266886, BR_*: 29201, error: -28 (No space left on device)
--------- beginning of system
10-18 09:48:05.417 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:05.417 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:05.419 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:05.419 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:05.419 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:05.419 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:05.800 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:05.800 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:05.803 26036 30417 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:05.867 26036 26104 I ActivityScheduler: nextTriggerTime: 1205260230, in 4999ms, detectorType: 39, FULL_TYPE alarmWindowMillis: 625
10-18 09:48:09.014 26036 26620 I WifiScanner: onFullResults
10-18 09:48:09.014 26036 26513 I WifiScanner: onFullResults
10-18 09:48:09.015 26036 26519 I WifiScanner: onFullResults
10-18 09:48:09.030 26036 31675 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:09.040 15708 19060 W printstats: process:usap64 tag:ReactNativeJS print:1462 lines
10-18 09:48:09.040 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for e5863667-c95a-40ff-9572-d05a921bea53:', 'CHANNEL_ERROR'
10-18 09:48:09.041 26036 26104 I ActivityScheduler: nextTriggerTime: 1205260230, in 1826ms, detectorType: 39, FULL_TYPE alarmWindowMillis: 625
10-18 09:48:09.043 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 97334bab-4520-4c46-8c5e-568c16476c7e:', 'CHANNEL_ERROR'
10-18 09:48:09.043 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for ab10282a-8c94-44dc-a563-7cbdaa1f2152:', 'CHANNEL_ERROR'
10-18 09:48:09.043 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for a7bde9c8-d6fb-412e-a29f-8c04d59a5526:', 'CHANNEL_ERROR'
10-18 09:48:09.044 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 62a975b5-e38c-4d14-bdb9-2804cd5efd62:', 'CHANNEL_ERROR'
10-18 09:48:09.044 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 25c9b86c-1bcc-4c83-a52a-2bf9112a1805:', 'CHANNEL_ERROR'
10-18 09:48:09.045 15708 19060 I ReactNativeJS: '📡 [GPS-TRACKING] Subscription status:', 'CHANNEL_ERROR'
10-18 09:48:09.045 15708 19060 E ReactNativeJS: ❌ [GPS-TRACKING] Channel error occurred
10-18 09:48:09.064 15708 15708 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:09.065 15708 15708 D BufferQueueConsumer: [](id:3d5c00000030,api:0,p:-1,c:15708) connect: controlledByApp=false
10-18 09:48:09.065 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#27](f:0,a:0) constructor()
10-18 09:48:09.065 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#27](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: console.error: ❌ [GPS-TRACKING] Channel error occurred, js engine: hermes, stack:
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:2555767
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:2202823
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:2207898
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:2207323
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: _trigger@1:2206596
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:2192484
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: _triggerChanError@1:2192448
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: _onConnError@1:2192404
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:2191506
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: dispatchEvent@1:490839
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:508661
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: emit@1:211630
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:210019
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: emit@1:210313
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:09.066 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:09.082 30791 30791 I bnew    : onPause
10-18 09:48:09.127 15708 19060 I ReactNativeJS: '🚗 [RIDES] Driver location received:', { latitude: 12.746752,
10-18 09:48:09.127 15708 19060 I ReactNativeJS:   longitude: 77.8272768,
10-18 09:48:09.127 15708 19060 I ReactNativeJS:   heading: 0,
10-18 09:48:09.127 15708 19060 I ReactNativeJS:   timestamp: '2025-10-12T17:43:41.64814+00:00' }
10-18 09:48:09.155 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for e5863667-c95a-40ff-9572-d05a921bea53:', 'CHANNEL_ERROR'
10-18 09:48:09.156 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 97334bab-4520-4c46-8c5e-568c16476c7e:', 'CHANNEL_ERROR'
10-18 09:48:09.157 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for ab10282a-8c94-44dc-a563-7cbdaa1f2152:', 'CHANNEL_ERROR'
10-18 09:48:09.158 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for a7bde9c8-d6fb-412e-a29f-8c04d59a5526:', 'CHANNEL_ERROR'
10-18 09:48:09.163 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 62a975b5-e38c-4d14-bdb9-2804cd5efd62:', 'CHANNEL_ERROR'
10-18 09:48:09.163 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 25c9b86c-1bcc-4c83-a52a-2bf9112a1805:', 'CHANNEL_ERROR'
10-18 09:48:09.164 15708 19060 I ReactNativeJS: '📡 [GPS-TRACKING] Subscription status:', 'CHANNEL_ERROR'
10-18 09:48:09.164 15708 19060 E ReactNativeJS: ❌ [GPS-TRACKING] Channel error occurred
10-18 09:48:09.173 15708 19060 I ReactNativeJS: '🚗 [RIDES] Driver location received:', { latitude: 12.746752,
10-18 09:48:09.173 15708 19060 I ReactNativeJS:   longitude: 77.8272768,
10-18 09:48:09.173 15708 19060 I ReactNativeJS:   heading: 0,
10-18 09:48:09.173 15708 19060 I ReactNativeJS:   timestamp: '2025-10-12T17:43:41.64814+00:00' }
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: console.error: ❌ [GPS-TRACKING] Channel error occurred, js engine: hermes, stack:
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:2555767
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:2202823
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:2207898
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:2207323
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: _trigger@1:2206596
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:2192484
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: _triggerChanError@1:2192448
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: _onConnClose@1:2192268
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:2191552
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: dispatchEvent@1:490839
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:508726
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: emit@1:211630
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:210019
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: emit@1:210313
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:09.177 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:09.203 15708 19060 I ReactNativeJS: 🔄 [DRIVER-SERVICE] Polling interval triggered
10-18 09:48:09.207 15708 19060 I ReactNativeJS: '🗺️ [DRIVER-SERVICE] Fetching available drivers via edge function:', { location: { lat: 12.7486583, lng: 77.8299917 },
10-18 09:48:09.207 15708 19060 I ReactNativeJS:   radius: '10km',
10-18 09:48:09.207 15708 19060 I ReactNativeJS:   vehicleType: 'all',
10-18 09:48:09.207 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:09.203Z' }
10-18 09:48:09.208 15708 19060 I ReactNativeJS: '🌐 [DRIVER-SERVICE] Constructed Edge Function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/get-drivers-with-locations?lat=12.7486583&lng=77.8299917&radius=10'
10-18 09:48:09.210 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:09.213 15708 19060 I ReactNativeJS: '🔍 [RIDES] Starting comprehensive active rides fetch for user:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:09.213 15708 19060 I ReactNativeJS: 🔍 [RIDES] Step 1: Fetching active regular rides via edge function...
10-18 09:48:09.252 15708 19060 E ReactNativeJS: [TypeError: Network request failed]
10-18 09:48:09.256 15708 19060 E ReactNativeJS: '🔍 [RIDES] ❌ Exception in fetchActiveRides:', [TypeError: Network request failed]
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: anonymous@1:497763
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: anonymous@1:444776
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: callTimers@1:445831
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:09.257 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:09.258 15708 19060 W ReactNativeJS: '⚠️ [DRIVER-SERVICE] Edge function failed, using direct database access:', 'Network error: Network request failed'
10-18 09:48:09.258 15708 19060 I ReactNativeJS: 🔍 [DRIVER-SERVICE] ===== USING DIRECT DATABASE ACCESS =====
10-18 09:48:09.259 15708 19060 I ReactNativeJS: '🔍 [DRIVER-SERVICE] Parameters:', { customerLocation: { lat: 12.7486583, lng: 77.8299917 },
10-18 09:48:09.259 15708 19060 I ReactNativeJS:   radius: '10km',
10-18 09:48:09.259 15708 19060 I ReactNativeJS:   vehicleType: 'all' }
10-18 09:48:09.259 15708 19040 D BLASTBufferQueue: [VRI[MainActivity]#27](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585479966217511(auto) mPendingTransactions.size=0 graphicBufferId=67465346285838 transform=0
10-18 09:48:09.260 15708 19060 I ReactNativeJS: 📊 [DRIVER-SERVICE] Step 1: Fetching online verified drivers...
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: console.error: 🔍 [RIDES] ❌ Exception in fetchActiveRides: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: ?anon_0_@1:2544823
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446186
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:09.261 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:09.287 15708 15708 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{59ad08d V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-18 09:48:09.291  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:09.292  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:09.293  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:09.294  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:09.463 15708 19060 E ReactNativeJS: [TypeError: Network request failed]
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: anonymous@1:497763
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: anonymous@1:444776
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: callTimers@1:445831
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:09.464 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:09.528 30791 30791 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-18 09:48:09.562 30791 30791 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:09.563 30791 30791 D BLASTBufferQueue: [VRI[Launcher]#5](f:0,a:1) destructor()
10-18 09:48:09.563 30791 30791 D BufferQueueConsumer: [VRI[Launcher]#5(BLAST Consumer)5](id:784700000005,api:0,p:-1,c:30791) disconnect
10-18 09:48:09.565 30791 30791 I bnew    : onStop
10-18 09:48:09.888 15708 19060 E ReactNativeJS: [TypeError: Network request failed]
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: anonymous@1:497763
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: anonymous@1:444776
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: callTimers@1:445831
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:09.891 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:10.259 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for e5863667-c95a-40ff-9572-d05a921bea53:', 'CHANNEL_ERROR'
10-18 09:48:10.260 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 97334bab-4520-4c46-8c5e-568c16476c7e:', 'CHANNEL_ERROR'
10-18 09:48:10.260 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for ab10282a-8c94-44dc-a563-7cbdaa1f2152:', 'CHANNEL_ERROR'
10-18 09:48:10.261 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for a7bde9c8-d6fb-412e-a29f-8c04d59a5526:', 'CHANNEL_ERROR'
10-18 09:48:10.261 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 62a975b5-e38c-4d14-bdb9-2804cd5efd62:', 'CHANNEL_ERROR'
10-18 09:48:10.264 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 25c9b86c-1bcc-4c83-a52a-2bf9112a1805:', 'CHANNEL_ERROR'
10-18 09:48:10.265 15708 19060 I ReactNativeJS: '📡 [GPS-TRACKING] Subscription status:', 'CHANNEL_ERROR'
10-18 09:48:10.265 15708 19060 E ReactNativeJS: ❌ [GPS-TRACKING] Channel error occurred
10-18 09:48:10.271 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for e5863667-c95a-40ff-9572-d05a921bea53:', 'CHANNEL_ERROR'
10-18 09:48:10.272 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 97334bab-4520-4c46-8c5e-568c16476c7e:', 'CHANNEL_ERROR'
10-18 09:48:10.273 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for ab10282a-8c94-44dc-a563-7cbdaa1f2152:', 'CHANNEL_ERROR'
10-18 09:48:10.273 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for a7bde9c8-d6fb-412e-a29f-8c04d59a5526:', 'CHANNEL_ERROR'
10-18 09:48:10.274 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 62a975b5-e38c-4d14-bdb9-2804cd5efd62:', 'CHANNEL_ERROR'
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: console.error: ❌ [GPS-TRACKING] Channel error occurred, js engine: hermes, stack:
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:2555767
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:2202823
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:2207898
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:2207323
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: _trigger@1:2206596
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:2192484
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: _triggerChanError@1:2192448
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: _onConnError@1:2192404
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:2191506
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: dispatchEvent@1:490839
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:508661
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: emit@1:211630
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:210019
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: emit@1:210313
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:10.275 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:10.275 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 25c9b86c-1bcc-4c83-a52a-2bf9112a1805:', 'CHANNEL_ERROR'
10-18 09:48:10.276 15708 19060 I ReactNativeJS: '📡 [GPS-TRACKING] Subscription status:', 'CHANNEL_ERROR'
10-18 09:48:10.276 15708 19060 E ReactNativeJS: ❌ [GPS-TRACKING] Channel error occurred
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: console.error: ❌ [GPS-TRACKING] Channel error occurred, js engine: hermes, stack:
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:2555767
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:2202823
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:2207898
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:2207323
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: _trigger@1:2206596
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:2192484
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: _triggerChanError@1:2192448
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: _onConnClose@1:2192268
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:2191552
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: dispatchEvent@1:490839
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:508726
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: emit@1:211630
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:210019
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: emit@1:210313
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:10.284 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:10.453 26036 26082 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:10.454 26036 26082 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:10.455 26106 26139 E IPCThreadState: Binder transaction failure. id: 428271770, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:10.456 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:10.458 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:10.458 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:10.458 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:10.458 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:10.701 15708 19060 E ReactNativeJS: [TypeError: Network request failed]
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: anonymous@1:497763
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: anonymous@1:444776
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: callTimers@1:445831
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:10.703 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:10.758 15708 19060 I ReactNativeJS: '🔍 AuthNavigator - checking auth state:', { user: true,
10-18 09:48:10.758 15708 19060 I ReactNativeJS:   loading: false,
10-18 09:48:10.758 15708 19060 I ReactNativeJS:   segments: '(tabs)',
10-18 09:48:10.758 15708 19060 I ReactNativeJS:   userEmail: '918608374935@a1taxi.app',
10-18 09:48:10.758 15708 19060 I ReactNativeJS:   userRole: 'customer' }
10-18 09:48:10.758 15708 19060 I ReactNativeJS: ✅ User authenticated and on correct screen
10-18 09:48:10.866 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.904 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.918 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.919 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.922 15708  1058 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.928 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.931 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.931 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.933 15708  1057 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.951 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.952 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.952 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.952 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.953 15708  1060 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.953 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.954 15708  1060 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.954 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:10.954 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:11.010 15708 15708 D BufferQueueConsumer: [](id:3d5c00000031,api:0,p:-1,c:15708) connect: controlledByApp=true
10-18 09:48:11.030 15708 19023 W .a1taxicustomer: Reducing the number of considered missed Gc histogram windows from 554 to 100
10-18 09:48:11.081  1870  3605 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2056, arg3: 15708, arg4: 4862, name: com.a1taxi.a1taxicustomer
10-18 09:48:11.085 15708  1073 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:11.563 26036 26104 I ActivityScheduler: nextTriggerTime: 1205265926, in 5000ms, detectorType: 39, FULL_TYPE alarmWindowMillis: 625
10-18 09:48:12.011 15708 19060 I ReactNativeJS: '📚 Loaded', 1, 'recent searches'
10-18 09:48:12.022 15708 19061 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-18 09:48:12.023 15708 19061 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-18 09:48:12.024 15708 19061 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-18 09:48:12.131 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:12.131 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:12.131 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:12.155 15708 15708 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:12.155 15708 15708 D BufferQueueConsumer: [](id:3d5c00000032,api:0,p:-1,c:15708) connect: controlledByApp=false
10-18 09:48:12.156 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#28](f:0,a:0) constructor()
10-18 09:48:12.157 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#28](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-18 09:48:12.182 15708 19040 D BLASTBufferQueue: [VRI[MainActivity]#28](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585482889433204(auto) mPendingTransactions.size=0 graphicBufferId=67465346285845 transform=0
10-18 09:48:12.234 15708 15708 V ImeFocusController: onWindowFocus: com.facebook.react.views.textinput.ReactEditText{9f9db48 VFED..CL. .F...... 135,36-923,169 #2f49 aid=1073742952} softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-18 09:48:12.241  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:12.243  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:12.249  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=4001, inputTypeString=Normal[CapSentences], enableLearning=true, autoCorrection=true, autoComplete=true, imeOptions=3, privateImeOptions=null, actionName=SEARCH, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=2000, label=null, fieldId=12105, fieldName=null, extras=Bundle[mParcelledData.dataSize=404], hintText=non-empty, hintLocales=[]}}, false)
10-18 09:48:12.254  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:12.330 15708 19060 E ReactNativeJS: [TypeError: Network request failed]
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: anonymous@1:497763
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: anonymous@1:444776
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: callTimers@1:445831
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:12.332 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:12.669 30108 30158 W DGW     : W[onPingFailure:574] ConnectivityManager ping failure Error Domain=MNSDNSResolver Code=0 UserInfo=0xb40000762009fff0 {MCFErrorDirectLocalizedFailureReasonKey=getaddrinfo(): No address associated with hostname}
10-18 09:48:12.945 15708 19060 I ReactNativeJS: '📍 Location selected:', { description: 'Bagalur, Tamil Nadu, India',
10-18 09:48:12.945 15708 19060 I ReactNativeJS:   coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:12.945 15708 19060 I ReactNativeJS:   type: 'recent' }
10-18 09:48:12.945 15708 19060 I ReactNativeJS: ✅ Calling onLocationSelect with valid coordinates
10-18 09:48:12.945 15708 19060 I ReactNativeJS: 🔍 Destination location selected, validating zone...
10-18 09:48:12.945 15708 19060 I ReactNativeJS: '🔍 Selected destination:', { location: 'Bagalur, Tamil Nadu, India',
10-18 09:48:12.945 15708 19060 I ReactNativeJS:   coords: { latitude: 12.8303987, longitude: 77.86623689999999 } }
10-18 09:48:12.945 15708 19060 I ReactNativeJS: '🔍 Active zones for validation:', 2
10-18 09:48:12.945 15708 19060 I ReactNativeJS: 🔍 [ZONE-VALIDATION] Starting destination zone validation
10-18 09:48:12.946 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Location:', 'Bagalur, Tamil Nadu, India'
10-18 09:48:12.946 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Coordinates:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:12.946 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Active zones available:', 2
10-18 09:48:12.946 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Zone names:', [ 'Inner Ring', 'Outer Ring' ]
10-18 09:48:12.946 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Full zone data:', '[\n  {\n    "id": "227fb7d8-2e9a-439b-b315-a28619795daa",\n    "name": "Inner Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.739137771576607,\n        "lng": 77.82861131744386\n      },\n      "radius": 7740.280633057722\n    },\n    "center_latitude": 12.73913777,\n    "center_longitude": 77.82861132,\n    "radius_km": 7.74,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-14T06:53:07.902747+00:00",\n    "updated_at": "2025-10-14T06:53:07.902747+00:00"\n  },\n  {\n    "id": "743ead3b-5e3c-4812-9bd7-d056934e7ad5",\n    "name": "Outer Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.738133154875067,\n        "lng": 77.82916921691896\n      },\n      "radius": 13156.583388351022\n    },\n    "center_latitude": 12.73813315,\n    "center_longitude": 77.82916922,\n    "radius_km": 13.16,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-14T06:53:40.388587+00:00",\n    "updated_at": "2025-10-14T06:53:40.388587+00:00"\n  }\n]'
10-18 09:48:12.947 15708 19060 I ReactNativeJS: '🔍 Checking if point is in service area:', { coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:12.947 15708 19060 I ReactNativeJS:   zonesCount: 2,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:   zones: 
10-18 09:48:12.947 15708 19060 I ReactNativeJS:    [ { name: 'Inner Ring',
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        radius_km: 7.74,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        center_lat: 12.73913777,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        center_lng: 77.82861132 },
10-18 09:48:12.947 15708 19060 I ReactNativeJS:      { name: 'Outer Ring',
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        radius_km: 13.16,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        center_lat: 12.73813315,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:        center_lng: 77.82916922 } ] }
10-18 09:48:12.947 15708 19060 I ReactNativeJS: 🔍 Using circle-based zone validation
10-18 09:48:12.947 15708 19060 I ReactNativeJS: '🔍 Raw Outer Ring data:', { center_latitude: 12.73813315,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:   center_latitude_type: 'number',
10-18 09:48:12.947 15708 19060 I ReactNativeJS:   center_longitude: 77.82916922,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:   center_longitude_type: 'number',
10-18 09:48:12.947 15708 19060 I ReactNativeJS:   radius_km: 13.16,
10-18 09:48:12.947 15708 19060 I ReactNativeJS:   radius_km_type: 'number' }
10-18 09:48:12.948 15708 19060 I ReactNativeJS: '🔍 Parsed values:', { centerLat: 12.73813315,
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   centerLng: 77.82916922,
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   radiusKm: 13.16,
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   allValid: true }
10-18 09:48:12.948 15708 19060 I ReactNativeJS: '🔍 Circle zone check:', { point: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   center: { latitude: 12.73813315, longitude: 77.82916922 },
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   radiusKm: '13.16km',
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   calculatedDistance: '11.02km',
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   difference: '-2.14km',
10-18 09:48:12.948 15708 19060 I ReactNativeJS:   isInside: '✅ INSIDE' }
10-18 09:48:12.948 15708 19060 I ReactNativeJS: 🔍 Point is INSIDE Outer Ring (13.16km radius)
10-18 09:48:12.948 15708 19060 I ReactNativeJS: ✅ [ZONE-VALIDATION] Destination location is within active zones
10-18 09:48:12.950 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 0,
10-18 09:48:12.950 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.950 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.950 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.958 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-18 09:48:12.958 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.958 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.958 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.961 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 0,
10-18 09:48:12.961 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:12.961 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.961 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.963 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 0,
10-18 09:48:12.963 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.963 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.963 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.965 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 90,
10-18 09:48:12.965 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.965 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:12.965 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:12.966 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 0,
10-18 09:48:12.966 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.966 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.966 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.986 15708 19060 I ReactNativeJS: '🗺️ [MAP] Props updated:', { showRoute: true,
10-18 09:48:12.986 15708 19060 I ReactNativeJS:   showDriverToPickupRoute: false,
10-18 09:48:12.986 15708 19060 I ReactNativeJS:   hasDriverLocation: false,
10-18 09:48:12.986 15708 19060 I ReactNativeJS:   hasPickupCoords: true,
10-18 09:48:12.986 15708 19060 I ReactNativeJS:   hasDestinationCoords: true,
10-18 09:48:12.986 15708 19060 I ReactNativeJS:   driverLocation: null,
10-18 09:48:12.986 15708 19060 I ReactNativeJS:   pickupCoords: { lat: 12.7486583, lng: 77.8299917 },
10-18 09:48:12.986 15708 19060 I ReactNativeJS:   destinationCoords: { lat: 12.8303987, lng: 77.86623689999999 } }
10-18 09:48:12.986 15708 19060 I ReactNativeJS: '🗺️ Calculating route between:', { latitude: 12.7486583, longitude: 77.8299917 }, 'and', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:12.987 15708 19060 I ReactNativeJS: '🗺️ [GOOGLE-MAPS] Getting directions from', { lat: 12.7486583, lng: 77.8299917 }, 'to', { lat: 12.8303987, lng: 77.86623689999999 }
10-18 09:48:12.987 15708 19060 I ReactNativeJS: '🌐 Making proxy request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/places-proxy/directions?origin=12.7486583%2C77.8299917&destination=12.8303987%2C77.86623689999999&mode=driving'
10-18 09:48:12.987 15708 19060 I ReactNativeJS: 🗺️ [HOME] ===== HIDING DRIVERS FOR ROUTE DISPLAY =====
10-18 09:48:12.987 15708 19060 I ReactNativeJS: 🗺️ [HOME] Both pickup and destination selected, hiding drivers to show route
10-18 09:48:12.987 15708 19060 I ReactNativeJS: 🛑 [HOME] Stopping driver location polling
10-18 09:48:12.987 15708 19060 I ReactNativeJS: 🛑 [DRIVER-SERVICE] Stopped driver location polling
10-18 09:48:12.987 15708 19060 I ReactNativeJS: 🔄 [HOME] Triggering fare calculation due to location/vehicle change
10-18 09:48:12.987 15708 19060 I ReactNativeJS: 💰 [HOME] ===== STARTING FARE CALCULATION WITH DEADHEAD =====
10-18 09:48:12.988 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fare for Bagalur trip:', { pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   pickupCoords: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   destinationCoords: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   selectedVehicle: 'sedan',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:12.987Z',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   shouldHaveDeadhead: true }
10-18 09:48:12.988 15708 19060 I ReactNativeJS: 💰 [HOME] Calling fareCalculator.calculateFare...
10-18 09:48:12.988 15708 19060 I ReactNativeJS: '💰 [FARE-CALC] Input parameters:', { vehicleType: 'sedan',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   pickup: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:12.988Z',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   supabaseUrl: 'SET',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   supabaseKey: 'SET' }
10-18 09:48:12.988 15708 19060 I ReactNativeJS: 🎯 [FARE-CALC] Using edge function for deadhead calculation...
10-18 09:48:12.988 15708 19060 I ReactNativeJS: '🔍 [FARE-CALC] Environment validation:', { supabaseUrl: 'SET',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   supabaseKey: 'SET',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   urlValid: true,
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   keyValid: true }
10-18 09:48:12.988 15708 19060 I ReactNativeJS: '🎯 [FARE-CALC] Edge function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/fare-calculation'
10-18 09:48:12.988 15708 19060 I ReactNativeJS: 📡 [FARE-CALC] Making request to edge function...
10-18 09:48:12.988 15708 19060 I ReactNativeJS: '📡 [FARE-CALC] Request body:', { pickup_latitude: 12.7486583,
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   pickup_longitude: 77.8299917,
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   destination_latitude: 12.8303987,
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   destination_longitude: 77.86623689999999,
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   vehicle_type: 'sedan',
10-18 09:48:12.988 15708 19060 I ReactNativeJS:   booking_type: 'regular' }
10-18 09:48:12.989 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 0,
10-18 09:48:12.989 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.989 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.989 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.990 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-18 09:48:12.990 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.990 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.990 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.991 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 0,
10-18 09:48:12.991 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:12.991 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.991 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.991 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 0,
10-18 09:48:12.991 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.991 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.991 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:12.992 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 90,
10-18 09:48:12.992 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.992 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:12.992 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:12.993 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 0,
10-18 09:48:12.993 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:12.993 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:12.993 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:13.010 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:13.011 15708 15708 I ImeTracker: com.a1taxi.a1taxicustomer:bf5f89f8: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT fromUser false
10-18 09:48:13.028 15708 15708 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@10b11cb
10-18 09:48:13.029 15708 19060 E ReactNativeJS: '❌ [FARE-CALC] Edge function failed completely for', 'sedan', ':', 'Network request failed'
10-18 09:48:13.029 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:13.030 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:13.030 15708 19060 E ReactNativeJS: ❌ [FARE-CALC] This means deadhead charges will NOT be applied
10-18 09:48:13.030 15708 19060 W ReactNativeJS: ⚠️ [FARE-CALC] Using fallback calculation without deadhead charges
10-18 09:48:13.030 15708 19060 I ReactNativeJS: 🔄 Using fallback fare calculation with deadhead charges
10-18 09:48:13.030 15708 19060 I ReactNativeJS: 🗺️ [ROUTE-INFO] ===== FETCHING FRESH ROUTE INFORMATION =====
10-18 09:48:13.030 15708 19060 I ReactNativeJS: 🗺️ [ROUTE-INFO] Cache miss - will fetch from Google Maps
10-18 09:48:13.031 15708 19060 I ReactNativeJS: '🗺️ [ROUTE-INFO] Pickup:', { latitude: 12.7486583, longitude: 77.8299917 }
10-18 09:48:13.031 15708 19060 I ReactNativeJS: '🗺️ [ROUTE-INFO] Destination:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:13.031 15708 19060 I ReactNativeJS: 🗺️ [ROUTE-INFO] Attempting Google Maps Directions API...
10-18 09:48:13.031 15708 19060 I ReactNativeJS: '🗺️ [GOOGLE-MAPS] Getting directions from', { lat: 12.7486583, lng: 77.8299917 }, 'to', { lat: 12.8303987, lng: 77.86623689999999 }
10-18 09:48:13.031 15708 19060 I ReactNativeJS: '🌐 Making proxy request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/places-proxy/directions?origin=12.7486583%2C77.8299917&destination=12.8303987%2C77.86623689999999&mode=driving'
10-18 09:48:13.035 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#28](f:0,a:4) destructor()
10-18 09:48:13.035 15708 15708 D BufferQueueConsumer: [VRI[MainActivity]#28(BLAST Consumer)28](id:3d5c00000032,api:0,p:-1,c:15708) disconnect
10-18 09:48:13.056 15708 19060 E ReactNativeJS: '❌ Proxy request error:', [TypeError: Network request failed]
10-18 09:48:13.056 15708 19060 E ReactNativeJS: '❌ [GOOGLE-MAPS] Error getting directions:', [TypeError: Network request failed]
10-18 09:48:13.057 15708 19060 I ReactNativeJS: ⚠️ Google Directions failed, using fallback calculation
10-18 09:48:13.058 15708 19060 I ReactNativeJS: 💰 [HOME] ===== STARTING FARE CALCULATION WITH DEADHEAD =====
10-18 09:48:13.058 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fare for Bagalur trip:', { pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:13.058 15708 19060 I ReactNativeJS:   destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:13.058 15708 19060 I ReactNativeJS:   pickupCoords: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:13.058 15708 19060 I ReactNativeJS:   destinationCoords: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:13.058 15708 19060 I ReactNativeJS:   selectedVehicle: 'sedan',
10-18 09:48:13.058 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:13.058Z',
10-18 09:48:13.058 15708 19060 I ReactNativeJS:   shouldHaveDeadhead: true }
10-18 09:48:13.058 15708 19060 I ReactNativeJS: 💰 [HOME] Calling fareCalculator.calculateFare...
10-18 09:48:13.059 15708 19060 I ReactNativeJS: '💰 [FARE-CALC] Input parameters:', { vehicleType: 'sedan',
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   pickup: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:13.058Z',
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   supabaseUrl: 'SET',
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   supabaseKey: 'SET' }
10-18 09:48:13.059 15708 19060 I ReactNativeJS: 🎯 [FARE-CALC] Using edge function for deadhead calculation...
10-18 09:48:13.059 15708 19060 I ReactNativeJS: '🔍 [FARE-CALC] Environment validation:', { supabaseUrl: 'SET',
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   supabaseKey: 'SET',
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   urlValid: true,
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   keyValid: true }
10-18 09:48:13.059 15708 19060 I ReactNativeJS: '🎯 [FARE-CALC] Edge function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/fare-calculation'
10-18 09:48:13.059 15708 19060 I ReactNativeJS: 📡 [FARE-CALC] Making request to edge function...
10-18 09:48:13.059 15708 19060 I ReactNativeJS: '📡 [FARE-CALC] Request body:', { pickup_latitude: 12.7486583,
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   pickup_longitude: 77.8299917,
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   destination_latitude: 12.8303987,
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   destination_longitude: 77.86623689999999,
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   vehicle_type: 'sedan',
10-18 09:48:13.059 15708 19060 I ReactNativeJS:   booking_type: 'regular' }
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: console.error: ❌ [FARE-CALC] Edge function failed completely for sedan : Network request failed, js engine: hermes, stack:
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: ?anon_0_@1:2496506
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446186
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.060 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: console.error: ❌ [FARE-CALC] This means deadhead charges will NOT be applied, js engine: hermes, stack:
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: ?anon_0_@1:2496525
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446186
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.061 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: console.error: ❌ Proxy request error: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: ?anon_0_@1:2470709
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446186
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.063 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: console.error: ❌ [GOOGLE-MAPS] Error getting directions: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: ?anon_0_@1:2472156
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446197
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.065 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.067 15708 19060 E ReactNativeJS: '❌ Proxy request error:', [TypeError: Network request failed]
10-18 09:48:13.068 15708 19060 E ReactNativeJS: '❌ [GOOGLE-MAPS] Error getting directions:', [TypeError: Network request failed]
10-18 09:48:13.069 15708 19060 W ReactNativeJS: ⚠️ [ROUTE-INFO] ===== GOOGLE DIRECTIONS API FAILED =====
10-18 09:48:13.069 15708 19060 W ReactNativeJS: ⚠️ [ROUTE-INFO] Falling back to straight-line (Haversine) distance
10-18 09:48:13.069 15708 19060 W ReactNativeJS: ⚠️ [ROUTE-INFO] This will be LESS ACCURATE than road distance
10-18 09:48:13.069 15708 19060 I ReactNativeJS: '📏 [ROUTE-INFO] Haversine (straight-line) distance:', '9.90km'
10-18 09:48:13.069 15708 19060 I ReactNativeJS: 📏 [ROUTE-INFO] Note: This is NOT the road distance!
10-18 09:48:13.069 15708 19060 I ReactNativeJS: 🗺️ [ROUTE-INFO] ===== FINAL ROUTE INFO =====
10-18 09:48:13.069 15708 19060 I ReactNativeJS: '🗺️ [ROUTE-INFO] Distance used for fare:', '9.90km'
10-18 09:48:13.069 15708 19060 I ReactNativeJS: '🗺️ [ROUTE-INFO] Duration used for fare:', '19.8 min'
10-18 09:48:13.069 15708 19060 I ReactNativeJS: '🔄 Fetching FRESH fare config from database for vehicle_type:', 'sedan'
10-18 09:48:13.069 15708 19060 I ReactNativeJS: '🔍 Query parameters:', { vehicle_type: 'sedan',
10-18 09:48:13.069 15708 19060 I ReactNativeJS:   booking_type: 'regular',
10-18 09:48:13.069 15708 19060 I ReactNativeJS:   is_active: true }
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: console.error: ❌ Proxy request error: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: ?anon_0_@1:2470709
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446186
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.073 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: console.error: ❌ [GOOGLE-MAPS] Error getting directions: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: ?anon_0_@1:2472156
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446197
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.074 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.076 15708 19060 E ReactNativeJS: '❌ [FARE-CALC] Edge function failed completely for', 'sedan', ':', 'Network request failed'
10-18 09:48:13.077 15708 19060 E ReactNativeJS: ❌ [FARE-CALC] This means deadhead charges will NOT be applied
10-18 09:48:13.077 15708 19060 W ReactNativeJS: ⚠️ [FARE-CALC] Using fallback calculation without deadhead charges
10-18 09:48:13.077 15708 19060 I ReactNativeJS: 🔄 Using fallback fare calculation with deadhead charges
10-18 09:48:13.078 15708 19060 I ReactNativeJS: '🗺️ [ROUTE-CACHE] ⚠️ Using CACHED route info:', { cacheKey: '12.748658,77.829992-12.830399,77.866237...',
10-18 09:48:13.078 15708 19060 I ReactNativeJS:   distance: '9.902486622747142km',
10-18 09:48:13.078 15708 19060 I ReactNativeJS:   duration: '19.804973245494285min',
10-18 09:48:13.078 15708 19060 I ReactNativeJS:   cacheAge: '0s',
10-18 09:48:13.078 15708 19060 I ReactNativeJS:   maxCacheAge: '120s',
10-18 09:48:13.078 15708 19060 I ReactNativeJS:   WARNING: 'If distance looks wrong, cache may be returning stale data!' }
10-18 09:48:13.078 15708 19060 I ReactNativeJS: '🔄 Fetching FRESH fare config from database for vehicle_type:', 'sedan'
10-18 09:48:13.078 15708 19060 I ReactNativeJS: '🔍 Query parameters:', { vehicle_type: 'sedan',
10-18 09:48:13.078 15708 19060 I ReactNativeJS:   booking_type: 'regular',
10-18 09:48:13.078 15708 19060 I ReactNativeJS:   is_active: true }
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: console.error: ❌ [FARE-CALC] Edge function failed completely for sedan : Network request failed, js engine: hermes, stack:
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: ?anon_0_@1:2496506
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446186
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.081 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: console.error: ❌ [FARE-CALC] This means deadhead charges will NOT be applied, js engine: hermes, stack:
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: ?anon_0_@1:2496525
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446186
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:13.082 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165539
10-18 09:48:13.095 15708 15708 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{59ad08d V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-18 09:48:13.099  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:13.100  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:13.101  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:13.102  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:14.004 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:14.005 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:14.010 26036 30448 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:14.045 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:15.486 26036 26669 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:15.486 26036 26669 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:15.487 26106 26139 E IPCThreadState: Binder transaction failure. id: 428274849, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:15.487 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:15.487 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:15.488 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:15.488 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:15.488 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:15.488 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:15.555 15708 19060 E ReactNativeJS: [TypeError: Network request failed]
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: anonymous@1:497763
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: anonymous@1:444776
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: callTimers@1:445831
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:15.556 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:15.711 15708 15708 I ScrollIdentify: on fling
10-18 09:48:17.199 26036 26669 I WifiScanner: onFullResults
10-18 09:48:17.200 26036 26082 I WifiScanner: onFullResults
10-18 09:48:17.202 26036 26669 I WifiScanner: onFullResults
10-18 09:48:17.211 26036 30417 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:18.361  1870  2859 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:18.361  1870  2859 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:18.369  1870  1928 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:18.370  1870  2859 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:18.405  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:18.454  1870  2859 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:18.455  1870  2859 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:19.048 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:19.650 26036 31695 I NearbySharing: Broadcasting NearbySharing state change.
10-18 09:48:19.655 26036 31273 W NearbyMediums: [WIFI_RADIO] State was changed outside of our control. Updating the snapshot to match current radio state.
10-18 09:48:19.697 26106 26106 I NearbySharing: SharingTileService created.
10-18 09:48:19.724 26106 26106 D BluetoothAdapter: 45290631: getState(). Returning OFF
10-18 09:48:19.741 26036 26052 I NearbySharing: A new client has bound to the NearbySharingService ClientBridge for calling package com.google.android.gms and PID 26106
10-18 09:48:19.744 26036 26036 D MediaRouter: updateWifiDisplayStatus status: WifiDisplayStatus{featureState=2, scanState=0, activeDisplayState=0, activeDisplay=null, displays=[], sessionInfo=WifiDisplaySessionInfo:
10-18 09:48:19.744 26036 26036 D MediaRouter:     Client/Owner: Client
10-18 09:48:19.744 26036 26036 D MediaRouter:     GroupId: 
10-18 09:48:19.744 26036 26036 D MediaRouter:     Passphrase: 
10-18 09:48:19.744 26036 26036 D MediaRouter:     SessionId: 0
10-18 09:48:19.744 26036 26036 D MediaRouter:     IP Address: }
10-18 09:48:19.758 26106 26106 D BluetoothAdapter: 45290631: getState(). Returning OFF
10-18 09:48:19.764 26106 26106 D BluetoothAdapter: 45290631: getState(). Returning OFF
10-18 09:48:19.784 15708 19023 I .a1taxicustomer: Background concurrent copying GC freed 13MB AllocSpace bytes, 169(18MB) LOS objects, 29% free, 57MB/81MB, paused 80us,76us total 140.083ms
10-18 09:48:19.794 15708 19025 E .a1taxicustomer: [SurfaceTexture-0-15708-20] setSurfaceTextureListener: listener is nullptr
10-18 09:48:20.500 26036 28451 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:20.500 26036 28451 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:20.500 26106 26139 E IPCThreadState: Binder transaction failure. id: 428280392, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:20.500 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:20.500 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:20.501 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:20.501 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:20.501 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:20.501 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:21.190  1870  1997 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:21.196  1870  2894 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:21.196  1870  1997 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:21.214  1870  3603 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:21.215  1870  3603 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:21.228 15708 15708 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{59ad08d V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-18 09:48:21.233  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:21.234  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:21.234  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:21.239  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:21.964 15708 19060 E ReactNativeJS: [TypeError: Network request failed]
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: TypeError: Network request failed, js engine: hermes, stack:
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: anonymous@1:497763
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: anonymous@1:444776
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: callTimers@1:445831
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: __callFunction@1:167128
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: anonymous@1:165570
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:21.965 15708 19061 E unknown:ReactNative: callFunctionReturnFlushedQueue@1:165528
10-18 09:48:22.195 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:22.199 26036 30417 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:22.843 26036 26228 I WifiScanner: onFullResults
10-18 09:48:22.844 26036 28451 I WifiScanner: onFullResults
10-18 09:48:22.844 26036 26513 I WifiScanner: onFullResults
10-18 09:48:22.853 26036 30448 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:23.039 26036 23159 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-18 09:48:23.121 26036 23159 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-18 09:48:23.137 26036 23159 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-18 09:48:23.152 26036 23159 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-18 09:48:23.261 26036 23159 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-18 09:48:23.335 26036 23159 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-18 09:48:23.373  5751 14952 W ratelimit: Single process limit 250/s drop 14 lines.
10-18 09:48:23.373  5751 14952 I albu    : #onAvailable()
10-18 09:48:23.391 27276 27473 D WM-NetworkStateTracker: Network capabilities changed: [ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /192.168.31.172, Security type: 2, Supplicant state: COMPLETED, Wi-Fi standard: 11ax, RSSI: -41, Link speed: -1Mbps, Tx Link speed: -1Mbps, Max Supported Tx Link speed: 600Mbps, Rx Link speed: -1Mbps, Max Supported Rx Link speed: 600Mbps, Frequency: 5785MHz, Net ID: -1, Metered hint: false, score: 0, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: -1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -41 UnderlyingNetworks: Null]
10-18 09:48:23.424 26036 26092 I GeoTZService: Network becomes available
10-18 09:48:23.435 26036 26092 I NearbyMediums: WifiNetwork defaultNetworkCallback onAvailable netId:309
10-18 09:48:23.439 26036 26092 I NearbyPresence: (REDACTED) NetworkMonitorImpl onAvailable %s
10-18 09:48:23.439 26036 26092 I NearbyPresence: (REDACTED) NetworkMonitorImpl onLinkPropertiesChanged %s
10-18 09:48:23.445 26036 31388 I NearbyMediums: [WifiNetworkV2] networkCallback doAvailable netId:309 wifiStatusChangedCallbacks.size:0 freq:5785
10-18 09:48:23.451  5589  6178 W chromium: [1018/094823.449874:WARNING:net/dns/dns_config_service_android.cc:69] Failed to read DnsConfig.
10-18 09:48:23.465 26036 30448 W DatabaseProcessor: processLocalDevices: failed to get the network info with non-null networkId.
10-18 09:48:23.473 26036 26036 I CastMediaRouteProvider: Published 0 routes
10-18 09:48:23.473  5589 31468 I DeviceStatusMonitor: DeviceStatusMonitor.handleBroadcast():123 onReceive() : Action = android.net.conn.CONNECTIVITY_CHANGE
10-18 09:48:23.476  5589 31468 I DeviceStatusMonitor: DeviceStatusMonitor.getNetworkState():262 Network has no NET_CAPABILITY_INTERNET capability.
10-18 09:48:23.476 26036 31273 I GmsCoreXrpcWrapper: (REDACTED) Creating a custom channel provider with trafficStatsTag=%d trafficStatsUid=%d
10-18 09:48:23.477  5589 31468 I DeviceStatusMonitor: DeviceStatusMonitor.getNetworkState():262 Network has no NET_CAPABILITY_INTERNET capability.
10-18 09:48:23.479  5589 31468 I DeviceStatusMonitor: DeviceStatusMonitor.notifyIfNetworkChanged():180 notifyIfNetworkChanged: newState = NON_METERED, airplaneModeOn = false, notifyAnyway = false
10-18 09:48:23.479  5589 31468 I NetworkInfoNotification: NetworkInfoNotification$Listener.onReceive():107 onNetworkAvailable: networkState = NON_METERED, isAirplaneModeOn = false
10-18 09:48:23.480  5589  5589 I NetworkInfoNotification: NetworkInfoNotification$Listener.onReceive():107 onNetworkAvailable: networkState = NON_METERED, isAirplaneModeOn = false
10-18 09:48:23.481  5589 31576 I NetworkInfoNotification: NetworkInfoNotification$Listener.onReceive():107 onNetworkAvailable: networkState = NON_METERED, isAirplaneModeOn = false
10-18 09:48:23.482  5589  5589 I HandwritingOnlineSuperpacks: HandwritingOnlineSuperpacks$1.onNetworkAvailable():70 onNetworkAvailable
10-18 09:48:23.485 26036 23159 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-18 09:48:23.487  5589  5589 I NetworkInfoNotification: NetworkInfoNotification$Listener.onReceive():107 onNetworkAvailable: networkState = NON_METERED, isAirplaneModeOn = false
10-18 09:48:23.487 26036 31582 I CastDatabase: Saving the database
10-18 09:48:23.493 26036 26620 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:23.493 26036 26620 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:23.497 26106 26156 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:23.519 26036 26620 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:23.519 26036 26620 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:23.535 30108 30108 W fbservices-stub:InitStatus: Not blocking Service (67681868)
10-18 09:48:23.535 30108 30108 W fbservices-stub:InitStatus: Not blocking Service (67681868)
10-18 09:48:23.547 26036 26620 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:23.547 26036 26620 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:23.557 26036 31582 I SQLiteCastStore: [CastNetworkInfo] saved: 0, skipped: 0, [CastDeviceInfo]: saved 0, skipped 0, [Paired Guest Mode DeviceInfo] saved: 0, skipped: 0. [ProbedNetworks]: saved 0, skipped: 0, [ProbedSocketAddress]: saved 0, skipped: 0, [Network-Device pairs]: saved: 0
10-18 09:48:23.562 26106 26156 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:23.588 26036 30448 I TrafficStats: tagSocketFd(-1, 1031, -1) failed with errno-9
10-18 09:48:23.657 26036  1251 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-18 09:48:23.692 26036 26036 D WearableService: Creating wearable service asynchronously.
10-18 09:48:23.703 26036 26070 D WearableService: onGetService: waiting for onCreate to be completed.
10-18 09:48:23.712 26036 26075 I Wear_Controller: Wearable module requires a companion app to be installed.
10-18 09:48:23.712 26036 26075 I WearableService: onCreate: Wearable Services not starting. Wear is not available on this device.
10-18 09:48:23.714 26036 26070 W WearableService: onGetService: Wear is not available on this device.
10-18 09:48:23.724 26036 26070 W EAlert  : [WearCoord] failed to add listener for ealert_safety_info_support due to 17: API: Wearable.API is not available on this device. Connection failed with: ConnectionResult{statusCode=API_UNAVAILABLE, resolution=null, message=null, clientMethodKey=null} [CONTEXT service_id=6 ]
10-18 09:48:23.725 26036 26070 W EAlert  : [WearCoord] failed to add listener for ealert_support due to 17: API: Wearable.API is not available on this device. Connection failed with: ConnectionResult{statusCode=API_UNAVAILABLE, resolution=null, message=null, clientMethodKey=null} [CONTEXT service_id=6 ]
10-18 09:48:23.733 26036 26036 W EAlert  : [WearCoord] failed to get capability ealert_safety_info_support due to 17: API: Wearable.API is not available on this device. Connection failed with: ConnectionResult{statusCode=API_UNAVAILABLE, resolution=null, message=null, clientMethodKey=null} [CONTEXT service_id=6 ]
10-18 09:48:23.734 26036 26036 W EAlert  : [WearCoord] failed to get capability ealert_support due to 17: API: Wearable.API is not available on this device. Connection failed with: ConnectionResult{statusCode=API_UNAVAILABLE, resolution=null, message=null, clientMethodKey=null} [CONTEXT service_id=6 ]
10-18 09:48:23.736 26036 31273 I LocationReportUplIntOp: Uploading owner sightings. [CONTEXT service_id=284 ratelimit_period="5 MINUTES" ]
10-18 09:48:23.736 26036 31273 I GmsCoreXrpcWrapper: (REDACTED) Returning a channel provider with trafficStatsTag=%d trafficStatsUid=%d
10-18 09:48:23.755 26036  1250 I EAlert  : added ealert gateway capability [CONTEXT service_id=6 ]
10-18 09:48:23.757 26036 26070 W WearableService: onGetService: Wear is not available on this device.
10-18 09:48:23.783 31948  1235 W cmjk    : Failed to create JWT helper. This is unexpected
10-18 09:48:23.783 31948  1235 W cmjk    : java.lang.NoSuchMethodException: btyh.getScopes []
10-18 09:48:23.783 31948  1235 W cmjk    : 	at java.lang.Class.getMethod(Class.java:2940)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at java.lang.Class.getMethod(Class.java:2440)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at chjl.<init>(PG:5)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at cmjk.<clinit>(PG:27)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at cgxf.a(PG:3)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at axjz.a(PG:35)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at axju.a(PG:160)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at axix.a(PG:540)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at btrv.a(PG:13)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at bwmw.e(PG:3)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at bwmy.run(PG:38)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:524)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at awzq.run(PG:14)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at afiq.run(PG:738)
10-18 09:48:23.783 31948  1235 W cmjk    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:23.805 26036 30348 I NearbyMediums: [DeviceCapabilities] Refresh cache wifi mode WFD_GC channels [2412..2472, 5180..5240, 5745..5825]
10-18 09:48:23.819 26036 30348 I NearbyMediums: [DeviceCapabilities] Refresh cache wifi mode WFD_GO channels [2412..2472, 5180..5240, 5745..5825]
10-18 09:48:23.841 26036 30348 I NearbyMediums: [DeviceCapabilities] Refresh cache wifi mode AWARE channels [2412..2472, 5180..5240, 5745..5825]
10-18 09:48:23.891 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.891 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.891 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.891 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.891 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.891 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.892 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.892 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.892 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.892 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.892 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.893 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.894 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.894 15708  1066 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.898 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.898 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.898 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.898 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.899 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.900 15708  1075 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:23.911 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:23.939 26036 30348 I NearbySharing: Network state changed: NetworkState(isRestricted=false, isOnline=false, isCongested=false, isMetered=false, isWifiConnected=true)
10-18 09:48:23.974 26036  1217 W DatabaseProcessor: processLocalDevices: failed to get the network info with non-null networkId.
10-18 09:48:23.974 26036 26092 I NearbyPresence: (REDACTED) NetworkMonitorImpl onLinkPropertiesChanged %s
10-18 09:48:23.974 26036 26036 I CastMediaRouteProvider: Published 0 routes
10-18 09:48:23.981 26036  1217 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205753344]
10-18 09:48:24.061 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:24.154 26036 26519 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:24.154 26036 26519 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:24.159 31924   740 E fb4a.FbnsAIDLClientManager: Max Try reached for binding to FbnsAIDLService, threadId 42571
10-18 09:48:24.162 31924   740 E fb4a.FbnsAIDLClientManager: Fbns AIDL request got RemoteException
10-18 09:48:24.162 31924   740 E fb4a.FbnsAIDLClientManager: android.os.RemoteException: AIDLService is not bound
10-18 09:48:24.162 31924   740 E fb4a.FbnsAIDLClientManager: 	at X.0OK.call(:356)
10-18 09:48:24.162 31924   740 E fb4a.FbnsAIDLClientManager: 	at java.util.concurrent.FutureTask.run(FutureTask.java:317)
10-18 09:48:24.162 31924   740 E fb4a.FbnsAIDLClientManager: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:24.162 31924   740 E fb4a.FbnsAIDLClientManager: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:24.162 31924   740 E fb4a.FbnsAIDLClientManager: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:24.174 27276 27473 D WM-NetworkStateTracker: Network capabilities changed: [ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /192.168.31.172, Security type: 2, Supplicant state: COMPLETED, Wi-Fi standard: 11ax, RSSI: -41, Link speed: -1Mbps, Tx Link speed: -1Mbps, Max Supported Tx Link speed: 600Mbps, Rx Link speed: -1Mbps, Max Supported Rx Link speed: 600Mbps, Frequency: 5785MHz, Net ID: -1, Metered hint: false, score: 0, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: -1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -41 UnderlyingNetworks: Null]
10-18 09:48:24.175 31924 32034 W CrashLoopRemedyLog: unable to delete remedy log, instaCrash: true
10-18 09:48:24.193 27276 27321 D WM-GreedyScheduler: Constraints met: Scheduling work ID WorkGenerationalId(workSpecId=64f9ffc3-ea24-4216-80d5-303342214168, generation=52)
10-18 09:48:24.204 31924 31924 W fb4a.AppComponentFactory: Instantiating Service
10-18 09:48:24.233 31924 31924 W fb4a.AppComponentFactory: Instantiating Service
10-18 09:48:24.255 30108 30108 W fbservices-stub:InitStatus: Not blocking Service (67681868)
10-18 09:48:24.301 26036 26519 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:24.301 26036 26519 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:24.301 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.constellation.service.START pkg=com.google.android.gms }
10-18 09:48:24.301 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.constellation.service.START pkg=com.google.android.gms }
10-18 09:48:24.306 31924 32121 W JobInfo : Job 'com.facebook.katana/com.facebook.conditionalworker.ConditionalWorkerService#-1199678986' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:24.309 26036 26519 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:24.309 26036 26519 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:24.359 31924 31924 E fb4a.SlowAppComponent: 0ms: FBPapayaJobService instantiating…
10-18 09:48:24.360 31924 31924 E fb4a.SlowAppComponent: 28ms: SystemJobService instantiating…
10-18 09:48:24.360 31924 31924 E fb4a.SlowAppComponent: Main thread was blocked for 155ms in the background starting with FBPapayaJobService
10-18 09:48:24.399 26522 26522 W JobService: onNetworkChanged() not implemented in androidx.work.impl.background.systemjob.SystemJobService. Must override in a subclass.
10-18 09:48:24.418 27276 27473 D WM-NetworkStateTracker: Network capabilities changed: [ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /192.168.31.172, Security type: 2, Supplicant state: COMPLETED, Wi-Fi standard: 11ax, RSSI: -41, Link speed: -1Mbps, Tx Link speed: -1Mbps, Max Supported Tx Link speed: 600Mbps, Rx Link speed: -1Mbps, Max Supported Rx Link speed: 600Mbps, Frequency: 5785MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: -1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -41 UnderlyingNetworks: Null]
10-18 09:48:24.452 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205753815]
10-18 09:48:24.454 26036 26519 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:24.454 26036 26519 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:24.457 26036  1209 W WakeLock: GCM_CONN_ALARM release without a matched acquire!
10-18 09:48:24.463 26036 26519 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:24.463 26036 26519 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:24.479 26036 26519 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:24.479 26036 26519 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:24.486 31924 31924 W JobService: onNetworkChanged() not implemented in androidx.work.impl.background.systemjob.SystemJobService. Must override in a subclass.
10-18 09:48:24.486 31924 31924 W JobService: onNetworkChanged() not implemented in com.facebook.papaya.fb.client.services.FBPapayaJobService. Must override in a subclass.
10-18 09:48:24.497 26522 26726 E TY_Work : [3341:304][26726] No worker found for key null
10-18 09:48:24.499 26522 26726 E TY_Work : [3341:310][26726] akak: MEDIUM
10-18 09:48:24.372 28626 28748 W WM-Processor: Didn't find WorkSpec for id WorkGenerationalId(workSpecId=71ac9966-0d3a-4173-94c5-b491125e3cfc, generation=0)
10-18 09:48:24.583 26522 26726 E TY_Work : [3341:395][26726] akak: MEDIUM
10-18 09:48:24.583 26522 26726 E TY_Work : 	at nnj.a(PG:52)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at fwx.a(PG:19)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at fyd.b(PG:7)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at gai.b(PG:367)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at fhp.b(PG:762)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at fhp.a(PG:239)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at atpg.m(PG:14)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at atpg.l(PG:2)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at atph.E(PG:52)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at fhp.b(PG:683)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at fhp.a(PG:222)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at fxf.b(PG:226)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at atnd.iH(PG:12)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at attu.run(PG:107)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at ged.run(PG:88)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:524)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at akpt.a(PG:3)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at akox.run(PG:19)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at akpu.run(PG:5)
10-18 09:48:24.583 26522 26726 E TY_Work : 	at akhv.run(PG:44)
10-18 09:48:24.598 26106 26483 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:24.638 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:24.657 27276 27321 D WM-Processor: mkt: processing WorkGenerationalId(workSpecId=64f9ffc3-ea24-4216-80d5-303342214168, generation=52)
10-18 09:48:24.675 27276 27276 D WM-WorkerWrapper: Starting work for androidx.work.multiprocess.RemoteListenableDelegatingWorker
10-18 09:48:24.676 27276 27276 D WM-ListenableWorkerImpl: Binding to com.google.android.googlequicksearchbox, com.google.android.libraries.search.integrations.tiktok.RemoteWorkerService_googleapp
10-18 09:48:24.702 30791 30791 I WM-RemoteWorkerService: Binding to RemoteWorkerService
10-18 09:48:24.705 27276 27276 D WM-ListenableWorkerImpl: Service connected
10-18 09:48:24.729 26036 26460 I cn_CronetUrlRequestContext: destroyNativeStreamLocked org.chromium.net.impl.CronetBidirectionalStream@9c7595e
10-18 09:48:24.779 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.auth.api.phone.service.SmsRetrieverApiService.START pkg=com.google.android.gms }
10-18 09:48:24.779 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.auth.api.phone.service.SmsRetrieverApiService.START pkg=com.google.android.gms }
10-18 09:48:24.781 26522 26733 W WM-Processor: Didn't find WorkSpec for id WorkGenerationalId(workSpecId=03fcac21-adef-4347-a2fe-91784b781191, generation=0)
10-18 09:48:24.787 26522 26726 W WM-Processor: Didn't find WorkSpec for id WorkGenerationalId(workSpecId=43ec035e-5d7c-4cd1-9583-5ca8b1538eb9, generation=0)
10-18 09:48:24.799 26522 26726 W WM-Processor: Didn't find WorkSpec for id WorkGenerationalId(workSpecId=09e466b5-3775-4b5e-ad0a-f7ff426c11a3, generation=0)
10-18 09:48:24.816 26036  1215 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:24.821 31924  1907 D SQLiteQueryBuilder: SELECT feed_type, fetched_at, cursor, dedup_key, sort_key, ranking_weight, features_meta, feed_edge_meta, disallow_first, story_type, cache_tree_file_path, cache_id, seen_state, story_ranking_time, unit_position_in_flatbuffer FROM home_stories WHERE (((feed_type=?) AND fetched_at>=? AND row_type=?)) ORDER BY sort_key DESC LIMIT 200
10-18 09:48:24.844 26036 26036 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.common.telemetry.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-18 09:48:24.879  2098  2098 I id.gms.unstable: Using CollectorTypeCC GC.
10-18 09:48:24.903  2098  2098 E id.gms.unstable: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:24.908  2098  2098 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:24.908 30791 30837 D WM-ListenableWorkerImpl: Executing work request (64f9ffc3-ea24-4216-80d5-303342214168, com.google.apps.tiktok.contrib.work.TikTokListenableWorker)
10-18 09:48:24.929  2098  2098 E id.gms.unstable: BBinder_init Processname  <pre-initialized>  
10-18 09:48:24.929  2098  2098 E id.gms.unstable: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:24.929 26036 31388 I NearbySharing: Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, isWifiConnected=true)
10-18 09:48:24.936  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 0
10-18 09:48:24.958  2098  2098 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:24.961  2098  2098 D nativeloader: Configuring clns-7 for other apk /system/framework/com.android.media.remotedisplay.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:24.961  2098  2098 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:24.964  2098  2098 D nativeloader: Configuring clns-8 for other apk /system/framework/com.android.location.provider.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:24.964  2098  2098 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:24.965  2098  2098 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:24.965  2098  2098 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:25.014  2098  2098 D nativeloader: Configuring clns-9 for other apk /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:25.022 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205754385]
10-18 09:48:25.041 15708 19060 I ReactNativeJS: 🛑 [HOME] Stopping driver location polling
10-18 09:48:25.042 15708 19060 I ReactNativeJS: 🔴 [GPS-TRACKING] Cleaning up subscription
10-18 09:48:25.042 15708 19060 I ReactNativeJS: '📡 [GPS-TRACKING] Subscription status:', 'CLOSED'
10-18 09:48:25.042 15708 19060 I ReactNativeJS: 🧹 [RIDES] Cleaning up subscriptions
10-18 09:48:25.071 15708 15708 D Google Android Maps SDK: For capability in capabilities, log:
10-18 09:48:25.071 15708 15708 D Google Android Maps SDK: "AdvancedMarkers: false: Capabilities unavailable without a Map ID."Data-driven styling: false
10-18 09:48:25.072 15708  1072 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.072 15708  1072 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.081 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.081 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.081 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.081 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.081 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.081 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.082 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.082 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.082 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.082 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.103 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.103 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.104 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.104 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.105 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.105 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.105 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.106 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.106 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.108 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205754471]
10-18 09:48:25.117 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.117 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.117 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.118 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.118 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.118 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.118 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.118 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.119 30791 30791 I boxt    : (REDACTED) #device eligible for sharesheet: %s
10-18 09:48:25.119 30791 30791 I boxt    : (REDACTED) #sharesheet enabled: %s #sharesheet with image type enabled: %s
10-18 09:48:25.122 30791 30791 I boxx    : (REDACTED) AvailabilityUtils.updateAvailability() component:%s enabled:%s
10-18 09:48:25.129 30791 30791 I boxx    : (REDACTED) Update complete. %s enabled: %s
10-18 09:48:25.129 30791 30791 I boxx    : (REDACTED) AvailabilityUtils.updateAvailability() component:%s enabled:%s
10-18 09:48:25.130 30791 30791 I boxx    : (REDACTED) Update complete. %s enabled: %s
10-18 09:48:25.130 30791 30791 I boxt    : #synclet interval set for every : 12 hours
10-18 09:48:25.132 30791 30791 I eesg    : #sync(). Running Synclets and scheduling next sync.
10-18 09:48:25.139 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.139 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.143 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.143 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.159 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.159 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.162 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.162 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.162 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.163 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.163 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.164 15708 15708 D BufferQueueConsumer: [](id:3d5c00000033,api:0,p:-1,c:15708) connect: controlledByApp=true
10-18 09:48:25.168 31948 32429 I cn_CronetUrlRequestContext: destroyNativeStreamLocked android.net.connectivity.org.chromium.net.impl.CronetBidirectionalStream@d5cdffb
10-18 09:48:25.177 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.178 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.194 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.194 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.198  2098  2098 V GraphicsEnvironment: Currently set values for:
10-18 09:48:25.198  2098  2098 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:25.198  2098  2098 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:25.198  2098  2098 V GraphicsEnvironment: com.google.android.gms is not listed in per-application setting
10-18 09:48:25.202  1870  2671 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2056, arg3: 15708, arg4: 5021, name: com.a1taxi.a1taxicustomer
10-18 09:48:25.210 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.210 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.211 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.211 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.211 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.211 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.215 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.215 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.218 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.218 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.219 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.219 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.219 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.219 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.219 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.219 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.222 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.222 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.223 30791 30836 I blqa    : (REDACTED) #provideSyncletBinding isEmberNativeEnabled:%s enableAutofetch:%s
10-18 09:48:25.228 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.228 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.249 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.249 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.252 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.252 15708  2170 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.257 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.257 15708  2169 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.269 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.269 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.307 26036 31582 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205394660]
10-18 09:48:25.311 15708  2181 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.330  2098  2098 I GmsApplication: Using GservicesReaderQueryDelegate
10-18 09:48:25.338 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.338 15708  2171 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.356 31948 32429 I cn_CronetUrlRequestContext: destroyNativeStreamLocked android.net.connectivity.org.chromium.net.impl.CronetBidirectionalStream@c3a6f44
10-18 09:48:25.356 32509 32509 I lacabs.customer: Using CollectorTypeCC GC.
10-18 09:48:25.359 32509 32509 E lacabs.customer: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:25.362 32509 32509 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:25.376 32509 32509 E lacabs.customer: BBinder_init Processname  <pre-initialized>  
10-18 09:48:25.376 32509 32509 E lacabs.customer: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:25.380  2098  2098 W SQLiteCompatibilityWalFlags: Cannot read global setting sqlite_compatibility_wal_flags - Application state not available
10-18 09:48:25.412 32509 32509 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:25.413 32509 32509 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:25.413 32509 32509 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:25.475  2098  2098 W ProviderHelper: Unknown dynamite feature providerinstaller.dynamite
10-18 09:48:25.475  2098  2098 I DynamiteModule: Considering local module com.google.android.gms.providerinstaller.dynamite:1 and remote module com.google.android.gms.providerinstaller.dynamite:0
10-18 09:48:25.475  2098  2098 I DynamiteModule: Selected local version of com.google.android.gms.providerinstaller.dynamite
10-18 09:48:25.490 32509 32509 W lacabs.customer: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:25.490  2098  2098 D nativeloader: Load /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a/libconscrypt_gmscore_jni.so using class loader ns clns-9 (caller=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk): ok
10-18 09:48:25.490  2098  2098 V NativeCrypto: Registering com/google/android/gms/org/conscrypt/NativeCrypto's 319 native methods...
10-18 09:48:25.492 32509 32509 W lacabs.customer: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:25.494 32509 32509 W lacabs.customer: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:25.496 32509 32509 D nativeloader: Configuring clns-7 for other apk /data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/base.apk:/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/split_config.arm64_v8a.apk:/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/split_config.en.apk:/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/split_config.xxhdpi.apk. target_sdk_version=35, uses_libraries=, library_path=/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/lib/arm64:/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/base.apk!/lib/arm64-v8a:/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/split_config.arm64_v8a.apk!/lib/arm64-v8a:/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/split_config.en.apk!/lib/arm64-v8a:/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg=
10-18 09:48:25.499  2098  2098 I ProviderInstaller: Installed default security provider GmsCore_OpenSSL
10-18 09:48:25.502 32509 32509 D CompatChangeReporter: Compat change id reported: 202956589; UID 10296; state: ENABLED
10-18 09:48:25.509 30791 30836 I blqa    : (REDACTED) #provideSyncletBinding isEmberNativeEnabled:%s enableAutofetch:%s
10-18 09:48:25.512 26036 26082 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:25.512 26036 26082 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:25.515 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.516 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.516 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.516 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.516 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.516 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.516 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.516 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.517 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.518 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.518 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.518 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.518 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.518 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.518 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.518 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.519 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.519 15708  2174 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.520 26106 26139 E IPCThreadState: Binder transaction failure. id: 428293736, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:25.520 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:25.521 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:25.521 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:25.521 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:25.521 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:25.537 15708 15708 D BufferQueueConsumer: [SurfaceTexture-0-15708-21](id:3d5c00000031,api:0,p:-1,c:15708) disconnect
10-18 09:48:25.537  1870  2894 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 15708, arg4: 4862, name: com.a1taxi.a1taxicustomer
10-18 09:48:25.546  2098  2262 I Watchcat: Started
10-18 09:48:25.553  2098  2262 I GMS_MM_Logger: (REDACTED) Start time: %s
10-18 09:48:25.553  2098  2262 I GMS_MM_Logger: Started.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.554 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.555 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.556 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.556 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.556 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.556 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.556 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.556 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.556 15708  2186 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:25.558 26036 31582 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:25.559  2098  2129 I DynamiteModule: Considering local module com.google.android.gms.googlecertificates:7 and remote module com.google.android.gms.googlecertificates:0
10-18 09:48:25.559  2098  2129 I DynamiteModule: Selected local version of com.google.android.gms.googlecertificates
10-18 09:48:25.565 32509 32509 V GraphicsEnvironment: Currently set values for:
10-18 09:48:25.565 32509 32509 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:25.565 32509 32509 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:25.565 32509 32509 V GraphicsEnvironment: com.olacabs.customer is not listed in per-application setting
10-18 09:48:25.565 32509 32509 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:25.567  2098  2129 W GoogleCertificates: GoogleCertificates has been initialized already
10-18 09:48:25.620 32509 32509 I MultiDex: VM with version 2.1.0 has multidex support
10-18 09:48:25.620 32509 32509 I MultiDex: Installing application
10-18 09:48:25.620 32509 32509 I MultiDex: VM has multidex support, MultiDex support library is disabled.
10-18 09:48:25.625 26036 26104 I ActivityScheduler: nextTriggerTime: 1205274988, in 0ms, detectorType: 39, FULL_TYPE alarmWindowMillis: 0
10-18 09:48:25.638  2098  2130 W TracingHelper: No RequestContext found in the trace or trace not available. [CONTEXT service_id=259 ratelimit_count=100000 ]
10-18 09:48:25.640  2098  2130 W TracingHelper: Mismatched RequestContext found for module DROIDGUARD. Module id from RequestContext is MODULEID_UNKNOWN [CONTEXT service_id=259 ratelimit_count=100000 ]
10-18 09:48:25.663  2098  2130 D nativeloader: Configuring clns-10 for other apk . target_sdk_version=36, uses_libraries=ALL, library_path=, permitted_path=/data:/mnt/expand
10-18 09:48:25.663  2098  2130 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:25.665  2098  2130 D nativeloader: Load /data/user/0/com.google.android.gms/app_dg_cache/56149ABFA6A10C537A8BCA5FBEF5BF740193F470/the.apk!/libd06286D4E7AE3.so using isolated ns clns-10 (caller=/data/user/0/com.google.android.gms/app_dg_cache/56149ABFA6A10C537A8BCA5FBEF5BF740193F470/the.apk): ok
10-18 09:48:25.668 32509 32509 D SessionsDependencies: Dependency to CRASHLYTICS added.
10-18 09:48:25.670 32509 32509 I FirebaseApp: Device unlocked: initializing all Firebase APIs for app [DEFAULT]
10-18 09:48:25.690 27276 27276 D WM-SystemJobService: onStartJob for WorkGenerationalId(workSpecId=64f9ffc3-ea24-4216-80d5-303342214168, generation=52)
10-18 09:48:25.706 27276 27314 D WM-Processor: Work WorkGenerationalId(workSpecId=64f9ffc3-ea24-4216-80d5-303342214168, generation=52) is already enqueued for processing
10-18 09:48:25.709 32509  2370 W lacabs.customer: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:25.713 32509  2370 I DynamiteModule: Considering local module com.google.android.gms.measurement.dynamite:107 and remote module com.google.android.gms.measurement.dynamite:162
10-18 09:48:25.713 32509  2370 I DynamiteModule: Selected remote version of com.google.android.gms.measurement.dynamite, version >= 162
10-18 09:48:25.713 32509  2370 V DynamiteModule: Dynamite loader version >= 2, using loadModule2NoCrashUtils
10-18 09:48:25.725 32509  2370 W System  : ClassLoader referenced unknown path: 
10-18 09:48:25.726 32509  2370 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:25.744 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.locationsharingreporter.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:25.744 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.locationsharingreporter.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:25.747 32509  2370 W lacabs.customer: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=2075468411 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/base.apk*2075468411]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:25.754 32509 32509 D FirebaseSessions: Initializing Firebase Sessions SDK.
10-18 09:48:25.774 32509 32509 I FirebaseCrashlytics: Initializing Firebase Crashlytics 18.6.4 for com.olacabs.customer
10-18 09:48:25.780 32509 32509 W FA      : Failed to register event listener on calling thread. Trying again on the dynamite thread.
10-18 09:48:25.780 32509 32509 D SessionsDependencies: Subscriber CRASHLYTICS registered.
10-18 09:48:25.784 26651 27925 W Safetyhub.TikTokListenableWorker: TikTokListenableWorker was cancelled while running client worker: com.google.android.apps.safetyhub.emergencysharing.receiver.SyncUIToMatchIncidentWorker
10-18 09:48:25.786 31948  2248 W droid.apps.maps: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=1112230046 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/base.apk*1112230046]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:25.797 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.checkin.START pkg=com.google.android.gms }
10-18 09:48:25.797 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.checkin.START pkg=com.google.android.gms }
10-18 09:48:25.798 31924  1812 E fb4a.ActionQueryTaskListener: 0 onTaskStart FOREGROUND modules: [papaya,s_papaya_torchedlooper(*)]
10-18 09:48:25.799 26106 26483 I Checkin : [CheckinApiChimeraService] onGetService
10-18 09:48:25.800 32509  2381 D SessionConfigFetcher: Fetching settings from server.
10-18 09:48:25.800 31924 32140 E fb4a.ActionQueryTaskListener: 0 onLoadBatchStart FOREGROUND modules: [papaya,s_papaya_torchedlooper(*)]
10-18 09:48:25.817 32509 32509 I FirebaseInitProvider: FirebaseApp initialization successful
10-18 09:48:25.817  2098  2130 W libc    : Access denied finding property "persist.adb.tls_server.enable"
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: Work [ id=ca2e22f8-56bf-460a-94cb-01503f0b0a90, tags={ com.google.apps.tiktok.contrib.work.TikTokListenableWorker,TikTokWorker#com.google.android.apps.safetyhub.emergencysharing.receiver.SyncUIToMatchIncidentWorker } ] was cancelled
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: java.util.concurrent.CancellationException: Continuation CancellableContinuation(DispatchedContinuation[crq@1e86ccf, Continuation at to@ca3992e]){Active}@837965c was cancelled normally
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at ujj.<init>(PG:13)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at ujh.i(PG:23)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at ugh.l(PG:2)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at dvu.run(PG:186)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at dtw.execute(PG:4)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rei.f(PG:1)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rei.k(PG:93)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rei.q(PG:27)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rfp.c(PG:5)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rfr.e(PG:6)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rgu.run(PG:73)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at a.h(PG:1)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rft.execute(PG:1)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rfr.f(PG:3)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rfs.g(PG:5)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rex.f(PG:53)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rew.run(PG:5)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at a.h(PG:1)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rft.execute(PG:1)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rei.f(PG:1)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rei.k(PG:93)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at rei.q(PG:27)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at reu.run(PG:85)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at kyj.run(PG:7)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at raw.run(PG:44)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at cil.run(PG:208)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:25.819 26651 26860 I WM-WorkerWrapper: 	at kzs.run(PG:61)
10-18 09:48:25.824 31924 32140 E fb4a.ActionQueryTaskListener: 0 onLoadBatchComplete exception: null FOREGROUND modules: [papaya,s_papaya_torchedlooper(*)]
10-18 09:48:25.829 32509 32509 W com.facebook.M: You haven't set a value for AdvertiserIDCollectionEnabled. Set the flag to TRUE if you want to collect Advertiser ID for better advertising and analytics results. To request user consent before collecting data, set the flag value to FALSE, then change to TRUE once user consent is received. Learn more: https://developers.facebook.com/docs/app-events/getting-started-app-events-android#disable-auto-events.
10-18 09:48:25.837 31924 32201 E fb4a.ActionQueryTaskListener: 0 onTaskComplete [true,false,] FOREGROUND modules: [papaya,s_papaya_torchedlooper(*)]
10-18 09:48:25.847 31924 32140 W SoLoader[NativeDeps]: Couldn't find libpapayamerged_papaya.so in native deps file
10-18 09:48:25.848 30791  2163 I FirebaseApp: Device unlocked: initializing all Firebase APIs for app CHIME_ANDROID_SDK
10-18 09:48:25.848 31924 32140 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libpapayamerged_papaya.so, this can be slow
10-18 09:48:25.849 32509 32509 D CompatChangeReporter: Compat change id reported: 279646685; UID 10296; state: ENABLED
10-18 09:48:25.854 32509  2467 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:25.857 32509  2389 E FirebaseCrashlytics: Settings request failed.
10-18 09:48:25.858 32509 32509 W FirebaseRemoteConfig: An entry in the defaults XML has an invalid key and/or value tag.
10-18 09:48:25.865 31924 32140 D nativeloader: Load /data/app/~~rr75JSmdsCIRmmkRSeDe4Q==/com.facebook.katana-u8imdvzuJ9-Ko04FhaaH5w==/lib/arm64/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~rr75JSmdsCIRmmkRSeDe4Q==/com.facebook.katana-u8imdvzuJ9-Ko04FhaaH5w==/base.apk): ok
10-18 09:48:25.866 26036 30348 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.olacabs.customer
10-18 09:48:25.873 31924 32140 D nativeloader: Load /data/data/com.facebook.katana/modules/papaya_4f779d5ddad1ccfd19d4c38c2a6992b9a5e893ad10840648ad15161843ff8ecc/lib-compressed/arm64-v8a/asset-libs/libpapayamerged_papaya.so using class loader ns clns-7 (caller=/data/app/~~rr75JSmdsCIRmmkRSeDe4Q==/com.facebook.katana-u8imdvzuJ9-Ko04FhaaH5w==/base.apk): ok
10-18 09:48:25.866 32509  2467 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:25.878 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205755242]
10-18 09:48:25.880 32509  2399 E SessionConfigFetcher: Error failing to fetch the remote configs: Unable to resolve host "firebase-settings.crashlytics.com": No address associated with hostname
10-18 09:48:25.881 32509  2382 D LifecycleServiceBinder: Binding service to application.
10-18 09:48:25.904 32509  2425 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:25.905 31924 31939 W fb4a.InitStatus: Not blocking Provider (18105825)
10-18 09:48:25.905 31924 31939 W fb4a.InitStatus: Not blocking Provider (18105825)
10-18 09:48:25.909 32509  2425 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:25.913 31924 31939 W fb4a.InitStatus: Not blocking Provider (18105825)
10-18 09:48:25.913 31924 31939 W fb4a.InitStatus: Not blocking Provider (18105825)
10-18 09:48:25.917 31924 32140 E fb4a.ActionQueryTaskListener: 1 onTaskStart FOREGROUND modules: [papaya(*),papayatorch,s_papayaanalyticstorch_papayatorch_torchedlooper(*),pytorch(*),s_papayaanalyticstorch_papayatorch(*),s_papayatorch_torchedlooper(*)]
10-18 09:48:25.918 31924 32201 E fb4a.ActionQueryTaskListener: 1 onLoadBatchStart FOREGROUND modules: [papaya(*),papayatorch,s_papayaanalyticstorch_papayatorch_torchedlooper(*),pytorch(*),s_papayaanalyticstorch_papayatorch(*),s_papayatorch_torchedlooper(*)]
10-18 09:48:25.928 31924 32140 E fb4a.ActionQueryTaskListener: 2 onTaskStart FOREGROUND modules: [papaya(*),s_papayaanalyticstorch_papayatorch_torchedlooper(*),papayaanalyticstorch,pytorch(*),s_papayaanalyticstorch_papayatorch(*)]
10-18 09:48:25.934 32509  2425 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:25.943 32509  2538 D CompatChangeReporter: Compat change id reported: 312399441; UID 10296; state: ENABLED
10-18 09:48:25.946 32509  2469 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:25.949 31924 32168 E fb4a.ActionQueryTaskListener: 2 onLoadBatchStart FOREGROUND modules: [papaya(*),s_papayaanalyticstorch_papayatorch_torchedlooper(*),papayaanalyticstorch,pytorch(*),s_papayaanalyticstorch_papayatorch(*)]
10-18 09:48:25.963 32509  2388 I FirebaseCrashlytics: Saved version control info
10-18 09:48:25.973 26036  1210 W CCTFlatFileLogStore: Excessive logging: 16 events, 117974 bytes from log source GMM_COUNTERS last 52s
10-18 09:48:25.978 31924 32123 D SQLiteQueryBuilder: SELECT timestamp FROM logdb_data ORDER BY event_id ASC LIMIT 1
10-18 09:48:25.982 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205755345]
10-18 09:48:26.016  2098  2130 W libc    : Access denied finding property "persist.adb.tls_server.enable"
10-18 09:48:26.020 30791 30836 I eesg    : (REDACTED) Running synclets: %s
10-18 09:48:26.054 26036 30417 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205394660]
10-18 09:48:26.061 30791 30840 I eesg    : (REDACTED) Starting synclet: %s
10-18 09:48:26.062 30791 30842 I eesg    : (REDACTED) Starting synclet: %s
10-18 09:48:26.086 26036 26036 W GCM     : broadcast intent callback: result=CANCELLED forIntent { act=com.google.android.c2dm.intent.RECEIVE flg=0x10000000 pkg=com.whatsapp (has extras) }
10-18 09:48:26.098 30791 30791 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-18 09:48:26.110 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.appset.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:26.110 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.appset.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:26.113 32509 32509 V SoLoader: Init System Loader delegate
10-18 09:48:26.134 30791 30791 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:26.135 30791 30791 D BufferQueueConsumer: [](id:784700000006,api:0,p:-1,c:30791) connect: controlledByApp=false
10-18 09:48:26.135 30791 30791 D BLASTBufferQueue: [VRI[Launcher]#6](f:0,a:0) constructor()
10-18 09:48:26.135 30791 30791 D BLASTBufferQueue: [VRI[Launcher]#6](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-18 09:48:26.162 30791 31003 D BLASTBufferQueue: [VRI[Launcher]#6](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585496869059051(auto) mPendingTransactions.size=0 graphicBufferId=132246338011179 transform=0
10-18 09:48:26.164 30791 30791 I bnew    : onStart
10-18 09:48:26.167 30791 30791 I bkwn    : (REDACTED) [%s] onStart()
10-18 09:48:26.167 30791 30791 I bkys    : Reloading theme data
10-18 09:48:26.173 32509  2391 E lacabs.customer: No package ID 6a found for resource ID 0x6a0b000f.
10-18 09:48:26.191 30791 31002 I eesg    : Scheduling next wakeup
10-18 09:48:26.192 30791 31002 I eetg    : Scheduling next periodic WorkManager workers
10-18 09:48:26.208 30791 30791 I bnew    : onResume
10-18 09:48:26.213 32509  2391 I FA      : App measurement initialized, version: 140000
10-18 09:48:26.213 32509  2391 I FA      : To enable debug logging run: adb shell setprop log.tag.FA VERBOSE
10-18 09:48:26.215 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:26.215 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:26.223 32509  2391 I FA      : To enable faster debug mode event logging run:
10-18 09:48:26.223 32509  2391 I FA      :   adb shell setprop debug.firebase.analytics.app com.olacabs.customer
10-18 09:48:26.240 32509  2388 W FirebaseCrashlytics: Unable to read App Quality Sessions session id.
10-18 09:48:26.263 26036  1259 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205394660]
10-18 09:48:26.318  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:26.319  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:26.319  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:26.320  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:26.398 30791  2775 W chbox:googleapp: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:26.406 30791  2775 I DynamiteModule: Considering local module com.google.android.gms.measurement.dynamite:162 and remote module com.google.android.gms.measurement.dynamite:162
10-18 09:48:26.407 30791  2775 I DynamiteModule: Selected local version of com.google.android.gms.measurement.dynamite
10-18 09:48:26.407 31924 32201 E fb4a.ActionQueryTaskListener: 1 onLoadBatchComplete exception: null FOREGROUND modules: [papaya(*),papayatorch,s_papayaanalyticstorch_papayatorch_torchedlooper(*),pytorch(*),s_papayaanalyticstorch_papayatorch(*),s_papayatorch_torchedlooper(*)]
10-18 09:48:26.416 31924 32168 E fb4a.ActionQueryTaskListener: 2 onLoadBatchComplete exception: null FOREGROUND modules: [papaya(*),s_papayaanalyticstorch_papayatorch_torchedlooper(*),papayaanalyticstorch,pytorch(*),s_papayaanalyticstorch_papayatorch(*)]
10-18 09:48:26.419 31924  2665 E fb4a.ActionQueryTaskListener: 1 onTaskComplete [true,false,] FOREGROUND modules: [papaya(*),papayatorch,s_papayaanalyticstorch_papayatorch_torchedlooper(*),pytorch(*),s_papayaanalyticstorch_papayatorch(*),s_papayatorch_torchedlooper(*)]
10-18 09:48:26.428 31924  2665 E fb4a.ActionQueryTaskListener: 2 onTaskComplete [true,false,] FOREGROUND modules: [papaya(*),s_papayaanalyticstorch_papayatorch_torchedlooper(*),papayaanalyticstorch,pytorch(*),s_papayaanalyticstorch_papayatorch(*)]
10-18 09:48:26.456 32509 32509 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-18 09:48:26.457 32509 32509 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-18 09:48:26.458 32509 32509 I M-ProMotion: M-ProMotion is disabled
10-18 09:48:26.466   752   752 I ogle.android.gm: Using CollectorTypeCC GC.
10-18 09:48:26.470 32509 32509 I Choreographer: Skipped 36 frames!  The application may be doing too much work on its main thread.
10-18 09:48:26.518   752   752 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:26.549   752   752 E ogle.android.gm: BBinder_init Processname  <pre-initialized>  
10-18 09:48:26.550   752   752 E ogle.android.gm: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:26.565 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.565 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205755927]
10-18 09:48:26.572 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.578 31924 31924 W JobService: onNetworkChanged() not implemented in com.facebook.papaya.fb.client.services.FBPapayaJobService. Must override in a subclass.
10-18 09:48:26.578 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.582 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.588 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.589 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.599 32509 32509 D SessionLifecycleService: Service bound to new client on process 32509
10-18 09:48:26.599 30791 30791 W JobService: onNetworkChanged() not implemented in com.google.android.libraries.notifications.entrypoints.scheduled.ScheduledTaskService. Must override in a subclass.
10-18 09:48:26.599 27276 27276 W JobService: onNetworkChanged() not implemented in androidx.work.impl.background.systemjob.SystemJobService. Must override in a subclass.
10-18 09:48:26.600 32509  2852 D SessionLifecycleService: App has not yet foregrounded. Using previously stored session: null
10-18 09:48:26.600 32509  2852 D SessionLifecycleService: Client android.os.Messenger@3f92dc0 bound at 585497306. Clients: 1
10-18 09:48:26.602 32509  2647 D setmethod: 5d597e20-e328-4721-a231-8e53008c456b
10-18 09:48:26.606 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in non-main process
10-18 09:48:26.609 32509 32509 D SessionLifecycleClient: Connected to SessionLifecycleService. Queue size 0
10-18 09:48:26.610 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.624 30791  2849 I FA      : App measurement initialized, version: 140004
10-18 09:48:26.624 30791  2849 I FA      : To enable debug logging run: adb shell setprop log.tag.FA VERBOSE
10-18 09:48:26.624 30791  2849 I FA      : To enable faster debug mode event logging run:
10-18 09:48:26.624 30791  2849 I FA      :   adb shell setprop debug.firebase.analytics.app com.google.android.googlequicksearchbox
10-18 09:48:26.630 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.635 32509  2538 E com.facebook.z: GraphRequest can't be used when Facebook SDK isn't fully initialized
10-18 09:48:26.638 30791  2849 W FA      : Failed to retrieve Firebase Instance Id
10-18 09:48:26.641 26036  1259 I FusedLocation: (REDACTED) getLastLocation() noteOp denied for %s
10-18 09:48:26.643 30791 30826 D WM-SystemJobScheduler: Scheduling work ID 2bc4f53f-2db1-4530-a97f-845ea5171c3fJob ID 3135
10-18 09:48:26.646 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-18 09:48:26.654 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in non-main process
10-18 09:48:26.656 30791  2849 W FA      : Failed to retrieve Firebase Instance Id
10-18 09:48:26.657 30791  2849 I FA      : Tag Manager is not found and thus will not be used
10-18 09:48:26.659 27276 27276 D WM-SystemJobService: onStopJob for WorkGenerationalId(workSpecId=64f9ffc3-ea24-4216-80d5-303342214168, generation=52)
10-18 09:48:26.664 30791  2849 W FA      : Failed to retrieve Firebase Instance Id
10-18 09:48:26.664 30791  2849 W FA      : Failed to retrieve Firebase Instance Id
10-18 09:48:26.664 30791  2849 W FA      : Failed to retrieve Firebase Instance Id
10-18 09:48:26.675 32509  2391 I FA      : Tag Manager is not found and thus will not be used
10-18 09:48:26.683 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-18 09:48:26.692 27276 27473 D WM-NetworkStateTracker: Network capabilities changed: [ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /192.168.31.172, Security type: 2, Supplicant state: COMPLETED, Wi-Fi standard: 11ax, RSSI: -40, Link speed: 480Mbps, Tx Link speed: 480Mbps, Max Supported Tx Link speed: 600Mbps, Rx Link speed: 480Mbps, Max Supported Rx Link speed: 600Mbps, Frequency: 5785MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: -1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -40 UnderlyingNetworks: Null]
10-18 09:48:26.710 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in non-main process
10-18 09:48:26.755   752   752 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:26.755   752   752 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:26.755   752   752 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:26.783 32509 32509 D Event   : No subscribers registered for event class com.olacabs.customer.model.m
10-18 09:48:26.784 32509 32509 D Event   : No subscribers registered for event class de.greenrobot.event.e
10-18 09:48:26.790 30791 30826 D WM-SystemJobScheduler: Scheduling work ID 067bb3a5-7ce8-416f-9265-fde681f9d06dJob ID 3136
10-18 09:48:26.796 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-18 09:48:26.801 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in non-main process
10-18 09:48:26.830 26522 26522 W JobService: onNetworkChanged() not implemented in androidx.work.impl.background.systemjob.SystemJobService. Must override in a subclass.
10-18 09:48:26.839   752   752 W ogle.android.gm: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:26.840 30791 30826 D WM-SystemJobScheduler: Scheduling work ID 8c95facf-4807-4441-a336-db21139b8666Job ID 3137
10-18 09:48:26.842   752   752 W ogle.android.gm: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:26.843 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-18 09:48:26.845   752   752 W ogle.android.gm: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:26.847   752   752 D nativeloader: Configuring clns-7 for other apk /data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/base.apk:/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/split_config.arm64_v8a.apk:/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/split_config.en.apk:/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/split_config.xxhdpi.apk. target_sdk_version=35, uses_libraries=libOpenCL.so, library_path=/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/lib/arm64:/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/base.apk!/lib/arm64-v8a:/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/split_config.arm64_v8a.apk!/lib/arm64-v8a:/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/split_config.en.apk!/lib/arm64-v8a:/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ew
10-18 09:48:26.850   752   752 D CompatChangeReporter: Compat change id reported: 202956589; UID 10212; state: ENABLED
10-18 09:48:26.857 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in non-main process
10-18 09:48:26.860 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:26.860 26106  1222 D AdvertisingIdClient: AdvertisingIdClient is not bounded. Starting to bind it...
10-18 09:48:26.863 26106  1222 D AdvertisingIdClient: AdvertisingIdClient is bounded
10-18 09:48:26.873 14789 14801 I .adservices.api: Background young concurrent copying GC freed 2748KB AllocSpace bytes, 40(2080KB) LOS objects, 33% free, 8811KB/12MB, paused 17.100ms,28us total 150.897ms
10-18 09:48:26.873 14789 14801 W .adservices.api: Reducing the number of considered missed Gc histogram windows from 717 to 100
10-18 09:48:26.889 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:26.890 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 29ms
10-18 09:48:26.921 26036 26036 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.presencemanager.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-18 09:48:26.940 26036 26036 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.presencemanager.service.INTERNAL_IDENTITY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-18 09:48:26.941 15708 15708 D VRI[MainActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-18 09:48:26.948   752   752 V GraphicsEnvironment: Currently set values for:
10-18 09:48:26.948   752   752 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:26.948   752   752 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:26.948   752   752 V GraphicsEnvironment: com.google.android.gm is not listed in per-application setting
10-18 09:48:26.949   752   752 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:26.966 30791 30826 D WM-SystemJobScheduler: Scheduling work ID 487c4298-007d-464d-a2f8-6cc15646f93dJob ID 3138
10-18 09:48:26.985 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-18 09:48:27.001 15708 15708 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:27.002 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#27](f:0,a:4) destructor()
10-18 09:48:27.002 15708 15708 D BufferQueueConsumer: [VRI[MainActivity]#27(BLAST Consumer)27](id:3d5c00000030,api:0,p:-1,c:15708) disconnect
10-18 09:48:27.010 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in non-main process
10-18 09:48:27.035 32509  2377 D nativeloader: Load /data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/lib/arm64/libtoolChecker.so using class loader ns clns-7 (caller=/data/app/~~-_MUSlni3pNtH1xi3a-MDg==/com.olacabs.customer-5fqWroNxwRCHBjoJJ6ydxg==/base.apk!classes4.dex): ok
10-18 09:48:27.037 15708  2180 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /data/local/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /data/local/bin/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /data/local/xbin/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /sbin/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /su/bin/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /system/bin/su Absent :(
10-18 09:48:27.038 15708 19060 I ReactNativeJNI: Memory warning (pressure level: TRIM_MEMORY_UI_HIDDEN) received by JS VM, ignoring because it's non-severe
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /system/bin/.ext/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /system/bin/failsafe/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /system/sd/xbin/su Absent :(
10-18 09:48:27.038 32509  2377 I RootBeer: LOOKING FOR BINARY: /system/usr/we-need-root/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /system/xbin/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /cache/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /data/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /dev/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /product/bin/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /apex/com.android.runtime/bin/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /apex/com.android.art/bin/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /system_ext/bin/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /odm/bin/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /vendor/bin/su Absent :(
10-18 09:48:27.039 32509  2377 I RootBeer: LOOKING FOR BINARY: /vendor/xbin/su Absent :(
10-18 09:48:27.044 30791 30826 D WM-SystemJobScheduler: Scheduling work ID ec0a8b4f-f714-4c29-bf99-ab5ac543e65fJob ID 3139
10-18 09:48:27.050 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-18 09:48:27.129 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in non-main process
10-18 09:48:27.183 30791 30826 D WM-SystemJobScheduler: Scheduling work ID 487c4298-007d-464d-a2f8-6cc15646f93dJob ID 3140
10-18 09:48:27.184  1870  2891 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 15708, arg4: 5021, name: com.a1taxi.a1taxicustomer
10-18 09:48:27.188 30791 30826 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-18 09:48:27.191 26036 31388 I NearbySharing: Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, isWifiConnected=true)
10-18 09:48:27.228 30791 31002 I eetg    : Successfully scheduled next periodic workers
10-18 09:48:27.241 30791 30826 I eesg    : #sync() complete
10-18 09:48:27.244   752   752 W AndroidLoggerBackend: AndroidLoggerBackend configured with enableAndroidLogger:false; no logs will be emitted.
10-18 09:48:27.249 32509  3043 I DrmHalHidl: No hidl drm factories found
10-18 09:48:27.257 32509  3043 E DrmHalHidl: Failed to find passthrough drm factories
10-18 09:48:27.272 32509  2391 E FA      : Name must consist of letters, digits or _ (underscores). Type, name: event, fa_fused location with high accuracy requested
10-18 09:48:27.273 32509  2391 E FA      : Invalid public event name. Event will not be logged (FE): fa_fused location with high accuracy requested
10-18 09:48:27.273 32509  3043 I DrmUtils: found IDrmFactory. Instance name:[android.hardware.drm.IDrmFactory/clearkey]
10-18 09:48:27.276 32509  3043 I DrmUtils: found IDrmFactory. Instance name:[android.hardware.drm.IDrmFactory/widevine]
10-18 09:48:27.296 26036 26228 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:27.296 26036 26228 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:27.319 14789 14814 D SharedPreferencesImpl: Time required to fsync /data/user/0/com.google.android.adservices.api/shared_prefs/PPAPI_Background_Jobs.xml: [<1: 62, <2: 197, <4: 177, <8: 76, <16: 40, <32: 25, <64: 9, <128: 5, <256: 6, <512: 1, <1024: 0, <2048: 0, <4096: 0, <8192: 0, <16384: 0, >=16384: 0]
10-18 09:48:27.363   752   752 W ogle.android.gm: ClassLoaderContext parent mismatch.  (PCL[] | PCL[];PCL[/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/base.apk*3920126860]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:27.385 30791 30992 D WM-ListenableWorkerImpl: Interrupting work with id (64f9ffc3-ea24-4216-80d5-303342214168)
10-18 09:48:27.421 32509  3043 I DrmMetricsLogger: get deviceUniqueId app:com.olacabs.customer
10-18 09:48:27.423 32509  3043 D VCode/native: track_event send
10-18 09:48:27.493 26036  2645 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396853]
10-18 09:48:27.495 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205756858]
10-18 09:48:27.505  5751 10865 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:27.505  5751 10865 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:27.541 30764   326 D WM-SystemJobScheduler: Scheduling work ID 099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391eJob ID 2570
10-18 09:48:27.547 30764   326 D WM-GreedyScheduler: Starting tracking for 099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e
10-18 09:48:27.549 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205756912]
10-18 09:48:27.568 30764   359 D WM-ConstraintTracker: H7E: initial state = NetworkState(isConnected=true, isValidated=true, isMetered=false, isNotRoaming=true)
10-18 09:48:27.568 30764   359 D WM-NetworkStateTracker: Registering network callback
10-18 09:48:27.574 30764   359 D WM-GreedyScheduler: Constraints met: Scheduling work ID WorkGenerationalId(workSpecId=099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e, generation=0)
10-18 09:48:27.576 30764   359 D WM-Processor: H6e: processing WorkGenerationalId(workSpecId=099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e, generation=0)
10-18 09:48:27.581 30764  3147 D WM-NetworkStateTracker: Network capabilities changed: [ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /192.168.31.172, Security type: 2, Supplicant state: COMPLETED, Wi-Fi standard: 11ax, RSSI: -40, Link speed: 480Mbps, Tx Link speed: 480Mbps, Max Supported Tx Link speed: 600Mbps, Rx Link speed: 480Mbps, Max Supported Rx Link speed: 600Mbps, Frequency: 5785MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: -1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -40 UnderlyingNetworks: Null]
10-18 09:48:27.600 27276 27322 D WM-Processor: WorkerWrapper interrupted for 64f9ffc3-ea24-4216-80d5-303342214168
10-18 09:48:27.600 27276 27322 D WM-StopWorkRunnable: StopWorkRunnable for 64f9ffc3-ea24-4216-80d5-303342214168; Processor.stopWork = true
10-18 09:48:27.615 30764 30764 D WM-WorkerWrapper: Starting work for com.whatsapp.messaging.xmpp.XmppLifecycleWorker
10-18 09:48:27.629 30764 30764 D WM-SystemJobService: onStartJob for WorkGenerationalId(workSpecId=099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e, generation=0)
10-18 09:48:27.631 30764   332 D WM-Processor: Work WorkGenerationalId(workSpecId=099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e, generation=0) is already enqueued for processing
10-18 09:48:27.646 26036 31388 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396934]
10-18 09:48:27.657 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205757020]
10-18 09:48:27.676 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.mobstore.service.START pkg=com.google.android.gms }
10-18 09:48:27.676 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.mobstore.service.START pkg=com.google.android.gms }
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: Work [ id=64f9ffc3-ea24-4216-80d5-303342214168, tags={ com.google.apps.tiktok.contrib.work.TikTokListenableWorker,com.google.apps.tiktok.sync.impl.workmanager.SyncPeriodicWorker_proc<googleapp>,TikTokWorker#com.google.apps.tiktok.sync.impl.workmanager.SyncPeriodicWorker } ] was cancelled
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: mmd
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at mkt.e(PG:5)
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at mrt.run(PG:94)
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at mrp.run(PG:3)
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at ckmc.run(PG:5)
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at emln.run(PG:44)
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at cklo.run(PG:83)
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:27.678 27276 27322 I WM-WorkerWrapper: 	at ckng.run(PG:62)
10-18 09:48:27.697   752  3256 D nativeloader: Load /data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/split_config.arm64_v8a.apk!/lib/arm64-v8a/libnative_crash_handler_jni.so using class loader ns clns-7 (caller=/data/app/~~Fune0dJ1ovq-5fANWftqFg==/com.google.android.gm-ewu6r1G9sFW6ivWtKWGGqw==/base.apk!classes2.dex): ok
10-18 09:48:27.747 26036  2645 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396853]
10-18 09:48:27.759 27276 27322 D WM-WorkerWrapper: Status for 64f9ffc3-ea24-4216-80d5-303342214168 is RUNNING; not doing any work and rescheduling for later execution
10-18 09:48:27.761 26036  1221 I TapAndPay: Maintaining payment bundles [CONTEXT service_id=79 ]
10-18 09:48:27.763 32509  3319 I TRuntime.CctTransportBackend: Making request to: https://crashlyticsreports-pa.googleapis.com/v1/firelog/legacy/batchlog
10-18 09:48:27.778 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:27.827 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:27.836 26036 28353 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:27.836 26036 28353 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:27.846 26036 31675 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:27.850  3446  3446 I net.one97.paytm: Using CollectorTypeCC GC.
10-18 09:48:27.853  3446  3446 E net.one97.paytm: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:27.856  3446  3446 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:27.860 32509  2391 E FA      : Name must consist of letters, digits or _ (underscores). Type, name: event, fa_pickup cache location available
10-18 09:48:27.861 32509  2391 E FA      : Invalid public event name. Event will not be logged (FE): fa_pickup cache location available
10-18 09:48:27.861 32509  2391 E FA      : Name must consist of letters, digits or _ (underscores). Type, name: event, fa_publish location
10-18 09:48:27.862 32509  2391 E FA      : Invalid public event name. Event will not be logged (FE): fa_publish location
10-18 09:48:27.867  3446  3446 E net.one97.paytm: BBinder_init Processname  <pre-initialized>  
10-18 09:48:27.867  3446  3446 E net.one97.paytm: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:27.867 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:27.868 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:27.868 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 1ms
10-18 09:48:27.877 26036  3109 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:27.882 26036  2645 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396934]
10-18 09:48:27.894  3446  3446 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:27.894  3446  3446 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:27.894  3446  3446 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:27.922 26036  2645 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396934]
10-18 09:48:27.929 30791  3534 E FirebaseMessaging: Default FirebaseApp has not been initialized. Skip logging event to GA.
10-18 09:48:27.929 30791  3534 I FirebaseMessaging: FirebaseApp has not being initialized. Device might be in direct boot mode. Skip exporting delivery metrics to Big Query
10-18 09:48:27.936 26036  1250 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396934]
10-18 09:48:27.959 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.mobstore.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:27.959 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.mobstore.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:27.961 26036  1204 I FusedLocation: (REDACTED) getLastLocation() noteOp denied for %s
10-18 09:48:27.965 18428 18428 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:27.966 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.mdd.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:27.966 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.mdd.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:27.978  3446  3446 W net.one97.paytm: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:27.979  3446  3446 W net.one97.paytm: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:28.012 26036  1259 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-18 09:48:28.012 18428 18428 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:28.018 18428 18428 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:28.037  3446  3446 W net.one97.paytm: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:28.039  3446  3446 D nativeloader: Configuring clns-7 for other apk /data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/base.apk:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_config.arm64_v8a.apk:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_config.xxhdpi.apk:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_flight_dynamic.apk:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_flight_dynamic.config.xxhdpi.apk:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_movie.apk. target_sdk_version=35, uses_libraries=, library_path=/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/lib/arm64:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/base.apk!/lib/arm64-v8a:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_config.arm64_v8a.apk!/lib/arm64-v8a:/data/app/~~klM_g5
10-18 09:48:28.043  3446  3446 D CompatChangeReporter: Compat change id reported: 202956589; UID 10298; state: ENABLED
10-18 09:48:28.057 18428 19185 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 762.3,
10-18 09:48:28.057 18428 19185 I ReactNativeJS:   heading: 0,
10-18 09:48:28.057 18428 19185 I ReactNativeJS:   altitudeAccuracy: 33.20000076293945,
10-18 09:48:28.057 18428 19185 I ReactNativeJS:   latitude: 12.7487683,
10-18 09:48:28.057 18428 19185 I ReactNativeJS:   speed: 0.038604166358709335,
10-18 09:48:28.057 18428 19185 I ReactNativeJS:   longitude: 77.829965,
10-18 09:48:28.057 18428 19185 I ReactNativeJS:   accuracy: 11.800000190734863 }
10-18 09:48:28.065 26036  1250 W Geofencer: registration not active, registration not permitted for registration: 10202/com.google.android.gms[.geotimezone]/6a88a6c5 {na} (FINE) GeofenceRequest(-77.01038495147722,90.0+1.000126E7m, maxAdditionalTriggerDelay=900000ms, eventsFilter=[INSIDE], initialEventsFilter=[INSIDE] [CONTEXT service_id=6 ]
10-18 09:48:28.074 26036  1250 W Geofencer: registration not active, registration not permitted for registration: 10202/com.google.android.gms[.geotimezone]/6a88a6c5 {na} (FINE) GeofenceRequest(0.0,167.92817193377473+1.000126E7m, maxAdditionalTriggerDelay=900000ms, eventsFilter=[INSIDE], initialEventsFilter=[INSIDE] [CONTEXT service_id=6 ]
10-18 09:48:28.083 26036  1250 W Geofencer: registration not active, registration not permitted for registration: 10202/com.google.android.gms[.geotimezone]/6a88a6c5 {na} (FINE) GeofenceRequest(76.82596521434296,-90.0+1.000126E7m, maxAdditionalTriggerDelay=900000ms, eventsFilter=[INSIDE], initialEventsFilter=[INSIDE] [CONTEXT service_id=6 ]
10-18 09:48:28.085 26036  1250 W Geofencer: registration not active, registration not permitted for registration: 10202/com.google.android.gms[.geotimezone]/6a88a6c5 {na} (FINE) GeofenceRequest(0.0,-12.254791903843484+1.000126E7m, maxAdditionalTriggerDelay=900000ms, eventsFilter=[INSIDE], initialEventsFilter=[INSIDE] [CONTEXT service_id=6 ]
10-18 09:48:28.090 26036  1251 I Geofencer: (REDACTED) geofence trigger to %s blocked - initial event filter not matched
10-18 09:48:28.091 18428 18428 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:28.112 18428 19185 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760761107882,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:     mocked: false,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:     coords: 
10-18 09:48:28.112 18428 19185 I ReactNativeJS:      { altitude: 762.3,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:        heading: 0,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:        altitudeAccuracy: 33.20000076293945,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:        latitude: 12.7487683,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:        speed: 0.038604166358709335,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:        longitude: 77.829965,
10-18 09:48:28.112 18428 19185 I ReactNativeJS:        accuracy: 11.800000190734863 } } ]
10-18 09:48:28.113  3446  3446 V GraphicsEnvironment: Currently set values for:
10-18 09:48:28.113  3446  3446 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:28.114  3446  3446 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:28.115  3446  3446 V GraphicsEnvironment: net.one97.paytm is not listed in per-application setting
10-18 09:48:28.115  3446  3446 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:28.122  3446  3446 I LoadedApk: No resource references to update in package net.one97.paytm.flight_dynamic
10-18 09:48:28.122  3446  3446 I LoadedApk: No resource references to update in package net.one97.paytm.movie
10-18 09:48:28.128 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:28.137 26036 28353 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-18 09:48:28.137 26036 28353 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-18 09:48:28.140 26036  1221 I TapAndPay: Finished maintaining payment bundles [CONTEXT service_id=79 ]
10-18 09:48:28.179 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:28.247 18428 19185 I ReactNativeJS: 📤 Attempting to send background location...
10-18 09:48:28.247 18428 19185 E ReactNativeJS: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service
10-18 09:48:28.252 26036 31675 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:28.270 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:28.276 32509  3319 I TRuntime.CctTransportBackend: Status Code: 200
10-18 09:48:28.279 26036 26047 I .gms.persistent: Background young concurrent copying GC freed 17MB AllocSpace bytes, 15(1716KB) LOS objects, 43% free, 22MB/40MB, paused 25.612ms,46us total 201.772ms
10-18 09:48:28.313 26036 31675 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:28.348 30764   387 W JobInfo : Job 'com.whatsapp/.infra.push.RegistrationIntentService#4' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:28.358  3446  3446 D nativeloader: Load /data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_config.arm64_v8a.apk!/lib/arm64-v8a/libcrashlytics.so using class loader ns clns-7 (caller=/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/base.apk!classes2.dex): ok
10-18 09:48:28.361 30108 30108 W fbservices-stub:InitStatus: Not blocking Service (67681868)
10-18 09:48:28.361 30108 30108 W fbservices-stub:InitStatus: Not blocking Service (67681868)
10-18 09:48:28.367 18428 19185 I ReactNativeJS: ⚠️ Skipping background location update - edge function not available
10-18 09:48:28.367 26036  1250 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396934]
10-18 09:48:28.372 18428 19173 I TaskService: Finished task 'background-location-task' with eventId '8203eba4-e3f3-4bf1-b041-2ed20c2e3e53'.
10-18 09:48:28.376 26036 31675 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: console.error: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service, js engine: hermes, stack:
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: _construct@1:117842
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: Wrapper@1:117496
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: _callSuper@1:115478
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: SyntheticError@1:116983
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: ?anon_0_@1:1972321
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: _next@1:573529
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: anonymous@1:136226
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: _callTimer@1:135225
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: anonymous@1:100174
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: __guard@1:100912
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: flushedQueue@1:100085
10-18 09:48:28.386 18428 19186 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-18 09:48:28.443 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205757806]
10-18 09:48:28.454  3446  3679 W net.one97.paytm: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:28.474 30764 32731 I com.whatsapp: Background young concurrent copying GC freed 4194KB AllocSpace bytes, 38(960KB) LOS objects, 18% free, 9157KB/11MB, paused 1.421ms,418us total 275.738ms
10-18 09:48:28.475  3446  3679 W System  : ClassLoader referenced unknown path: 
10-18 09:48:28.476  3446  3679 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:28.493 27276 27276 D WM-Processor: mkt 64f9ffc3-ea24-4216-80d5-303342214168 executed; reschedule = true
10-18 09:48:28.494  3446  3679 W net.one97.paytm: ClassLoaderContext classpath size mismatch. expected=1, found=3 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/base.apk*781370227:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_flight_dynamic.apk*1917002914:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_movie.apk*2281900463]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:28.495 27276 27276 D WM-GreedyScheduler: Stopping tracking for WorkGenerationalId(workSpecId=64f9ffc3-ea24-4216-80d5-303342214168, generation=52)
10-18 09:48:28.513 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.semanticlocationhistory.zeroparty.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:28.513 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.semanticlocationhistory.zeroparty.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:28.529  3446  3446 D CompatChangeReporter: Compat change id reported: 279646685; UID 10298; state: ENABLED
10-18 09:48:28.554 30764 30764 D Remote Service: Service Connected
10-18 09:48:28.569  3446  3717 D CompatChangeReporter: Compat change id reported: 312399441; UID 10298; state: ENABLED
10-18 09:48:28.572  3446  3717 D libcrashlytics: Initializing libcrashlytics version 3.2.0
10-18 09:48:28.532 27276 27322 D WM-GreedyScheduler: Cancelling work ID 64f9ffc3-ea24-4216-80d5-303342214168
10-18 09:48:28.582  3446  3717 D libcrashlytics: Initializing native crash handling successful.
10-18 09:48:28.594  5720 30312 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:28.598  3446  3744 D CompatChangeReporter: Compat change id reported: 311402873; UID 10298; state: ENABLED
10-18 09:48:28.598  3446  3744 D CompatChangeReporter: Compat change id reported: 323349338; UID 10298; state: ENABLED
10-18 09:48:28.601  5720 30312 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:28.609  5720 30312 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014340))
10-18 09:48:28.634 26036  1250 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for net.one97.paytm
10-18 09:48:28.655  5720 30312 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:28.661  5720 30312 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:28.691  5720  5733 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.whatsapp' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_data=?))
10-18 09:48:28.715  5720  5733 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.whatsapp' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data=?))
10-18 09:48:28.718  5720  5733 I MediaProvider: Deleted 0 0 0 0 0 0 0 items on external due to com.whatsapp
10-18 09:48:28.727  3446  3758 E net.one97.paytm: No package ID 6a found for resource ID 0x6a0b000f.
10-18 09:48:28.728  3446  3758 I FA      : App measurement initialized, version: 140000
10-18 09:48:28.728  3446  3758 I FA      : To enable debug logging run: adb shell setprop log.tag.FA VERBOSE
10-18 09:48:28.728  3446  3758 I FA      : To enable faster debug mode event logging run:
10-18 09:48:28.728  3446  3758 I FA      :   adb shell setprop debug.firebase.analytics.app net.one97.paytm
10-18 09:48:28.781 31948 31961 W droid.apps.maps: Suspending all threads took: 28.623ms
10-18 09:48:28.808  2787  2787 I eartrip.android: Using CollectorTypeCC GC.
10-18 09:48:28.813  2787  2787 E eartrip.android: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:28.816  2787  2787 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:28.830  2787  2787 E eartrip.android: BBinder_init Processname  <pre-initialized>  
10-18 09:48:28.830  2787  2787 E eartrip.android: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:28.848  2787  2787 D CompatChangeReporter: Compat change id reported: 242716250; UID 10351; state: ENABLED
10-18 09:48:28.852  3446  3446 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-18 09:48:28.852  3446  3446 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-18 09:48:28.852  3446  3446 I M-ProMotion: M-ProMotion is disabled
10-18 09:48:28.855  3446  3446 I Choreographer: Skipped 40 frames!  The application may be doing too much work on its main thread.
10-18 09:48:28.863  2787  2787 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:28.885 30764 32731 I com.whatsapp: Background concurrent copying GC freed 3791KB AllocSpace bytes, 2(104KB) LOS objects, 49% free, 7279KB/14MB, paused 1.607ms,99us total 138.778ms
10-18 09:48:28.905  2787  2787 D nativeloader: Configuring clns-7 for other apk /data/app/~~OLNwR-GNpxdAZ-xkr0Y-2g==/com.cleartrip.android-1M70SPT8gUBH3pRk8e1vcw==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~OLNwR-GNpxdAZ-xkr0Y-2g==/com.cleartrip.android-1M70SPT8gUBH3pRk8e1vcw==/lib/arm64:/data/app/~~OLNwR-GNpxdAZ-xkr0Y-2g==/com.cleartrip.android-1M70SPT8gUBH3pRk8e1vcw==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.cleartrip.android
10-18 09:48:28.907  3919  3919 I on.gearhead:car: Using CollectorTypeCC GC.
10-18 09:48:28.919  3919  3919 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:28.928  2787  2787 V GraphicsEnvironment: Currently set values for:
10-18 09:48:28.928  2787  2787 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:28.928  2787  2787 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:28.928  2787  2787 V GraphicsEnvironment: com.cleartrip.android is not listed in per-application setting
10-18 09:48:28.928  2787  2787 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:28.942 18428 19185 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-18 09:48:28.942 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:28.942 18428 19185 I ReactNativeJS: 'Location:', { latitude: 12.7487683,
10-18 09:48:28.942 18428 19185 I ReactNativeJS:   longitude: 77.829965,
10-18 09:48:28.942 18428 19185 I ReactNativeJS:   accuracy: 11.800000190734863 }
10-18 09:48:28.942 18428 19185 I ReactNativeJS: 📤 Updating location via RPC...
10-18 09:48:28.944  3919  3919 E on.gearhead:car: BBinder_init Processname  <pre-initialized>  
10-18 09:48:28.944  3919  3919 E on.gearhead:car: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:28.944 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:28.946 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:28.946 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:28.946 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:28.948 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:28.948 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:28.948 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:28.975  3446  3758 I FA      : Tag Manager is not found and thus will not be used
10-18 09:48:28.977  3919  3919 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:28.977  3919  3919 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:28.977  3919  3919 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:29.013  3919  3919 W on.gearhead:car: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:29.015  3919  3919 W on.gearhead:car: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:29.017  3919  3919 W on.gearhead:car: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:29.019  3919  3919 D nativeloader: Configuring clns-7 for other apk /data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/base.apk:/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/split_config.arm64_v8a.apk:/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/split_config.en.apk:/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/split_config.xxhdpi.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/lib/arm64:/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/base.apk!/lib/arm64-v8a:/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/split_config.arm64_v8a.apk!/lib/arm64-v8a:/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhe
10-18 09:48:29.025  3446  3446 D nativeloader: Load /data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_config.arm64_v8a.apk!/lib/arm64-v8a/librive-android.so using class loader ns clns-7 (caller=/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/base.apk!classes4.dex): ok
10-18 09:48:29.055  2787  3970 W eartrip.android: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:29.061 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205758425]
10-18 09:48:29.074  2787  3970 W System  : ClassLoader referenced unknown path: 
10-18 09:48:29.074  2787  3970 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:29.075  3919  3919 V GraphicsEnvironment: Currently set values for:
10-18 09:48:29.075  3919  3919 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:29.075  3919  3919 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:29.075  3919  3919 V GraphicsEnvironment: com.google.android.projection.gearhead is not listed in per-application setting
10-18 09:48:29.087 27276 27322 D WM-SystemJobScheduler: Scheduling work ID 64f9ffc3-ea24-4216-80d5-303342214168Job ID 3141
10-18 09:48:29.088  2787  3970 W eartrip.android: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=552998151 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~OLNwR-GNpxdAZ-xkr0Y-2g==/com.cleartrip.android-1M70SPT8gUBH3pRk8e1vcw==/base.apk*552998151]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]})
10-18 09:48:29.148  3919  3919 I CAR.GH  : onCreate
10-18 09:48:29.156 26036 26669 W ProviderHelper: Unknown dynamite feature providerinstaller.dynamite
10-18 09:48:29.174 26036  1251 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.cleartrip.android
10-18 09:48:29.196  3446  3780 W Settings: Setting auto_time has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:29.221 31948  3946 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:29.227 31948  3946 D nativeloader: Configuring clns-9 for other apk /system/framework/com.android.media.remotedisplay.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:29.227 31948  3946 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:29.233 31948  3946 I droid.apps.maps: Waiting for a blocking GC AddRemoveAppImageSpace
10-18 09:48:29.239  3919  3919 I GH.PrimesMgr: transmitting to prod
10-18 09:48:29.243  2787  4063 E eartrip.android: No package ID 6a found for resource ID 0x6a0b000f.
10-18 09:48:29.245  2787  4063 I FA      : App measurement initialized, version: 140000
10-18 09:48:29.245  2787  4063 I FA      : To enable debug logging run: adb shell setprop log.tag.FA VERBOSE
10-18 09:48:29.245  2787  4063 I FA      : To enable faster debug mode event logging run:
10-18 09:48:29.245  2787  4063 I FA      :   adb shell setprop debug.firebase.analytics.app com.cleartrip.android
10-18 09:48:29.251  3919  3919 I CAR.GH  : Process: CAR
10-18 09:48:29.252  3919  3919 I CAR.GH  : Channel: PROD
10-18 09:48:29.275  2787  2787 E eartrip.android: Invalid resource ID 0x00000000.
10-18 09:48:29.287  3919  3919 I CAR.GH  : onCreate completed
10-18 09:48:29.294 27276 27322 D WM-GreedyScheduler: Ignoring {WorkSpec: 51165ae1-0db8-4aa5-9d1c-dc1b8db1842b}. Requires device idle.
10-18 09:48:29.294 27276 27322 D WM-GreedyScheduler: Ignoring {WorkSpec: 1fc0402d-5e4e-4381-9bf2-6dfde47ee438}. Requires device idle.
10-18 09:48:29.302  3919  3919 I GH.CAR  : onCreate
10-18 09:48:29.305 27276 27322 D WM-GreedyScheduler: Starting tracking for 7384ab06-43fd-4578-a869-a995a7cc759f,c72914ab-b008-457d-a825-2ec534fdea79,44844439-dd0e-4ac4-8a3f-e6c72dda6bb1,8f2b6a64-2108-4448-a0b8-962a09983415,3309134f-a75f-4d25-82fd-33b2e95ba2fe,f4c1809a-a113-40e4-a088-a419c560fdcb
10-18 09:48:29.316  2787  4132 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-18 09:48:29.336  2787  4127 D CompatChangeReporter: Compat change id reported: 247079863; UID 10351; state: ENABLED
10-18 09:48:29.355 26036  1250 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396934]
10-18 09:48:29.380 30764 32731 I com.whatsapp: Background young concurrent copying GC freed 5155KB AllocSpace bytes, 14(384KB) LOS objects, 33% free, 9655KB/14MB, paused 3.103ms,68us total 104.800ms
10-18 09:48:29.395 26036 26036 D WearableService: Creating wearable service asynchronously.
10-18 09:48:29.409 26036  1250 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205397995]
10-18 09:48:29.429 26036  2645 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205396934]
10-18 09:48:29.442 26036 26892 W GoogleCertificatesImpl: Source stamp verification failed, package: com.whatsapp status: NO_STAMP
10-18 09:48:29.442 26036 26892 D WearableService: onGetService: waiting for onCreate to be completed.
10-18 09:48:29.469 26036 26075 I Wear_Controller: Wearable module requires a companion app to be installed.
10-18 09:48:29.469 26036 26075 I WearableService: onCreate: Wearable Services not starting. Wear is not available on this device.
10-18 09:48:29.470 26036 26892 W WearableService: onGetService: Wear is not available on this device.
10-18 09:48:29.472 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:29.481 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:29.482 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 10ms
10-18 09:48:29.505 26036 26036 W GCM     : broadcast intent callback: result=CANCELLED forIntent { act=com.google.android.c2dm.intent.RECEIVE pkg=com.google.android.apps.nbu.paisa.user (has extras) }
10-18 09:48:29.579  3919  3919 I GH.CAR  : GearheadCarStartupService.onBind
10-18 09:48:29.595 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:29.609 15708 15708 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:29.609 15708 15708 D BufferQueueConsumer: [](id:3d5c00000034,api:0,p:-1,c:15708) connect: controlledByApp=false
10-18 09:48:29.609 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#29](f:0,a:0) constructor()
10-18 09:48:29.609 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#29](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-18 09:48:29.616  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2056, arg3: 15708, arg4: 5021, name: com.a1taxi.a1taxicustomer
10-18 09:48:29.622 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205758985]
10-18 09:48:29.625 15708 19040 D BLASTBufferQueue: [VRI[MainActivity]#29](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585500332534436(auto) mPendingTransactions.size=0 graphicBufferId=67465346285853 transform=0
10-18 09:48:29.678 30764  4075 D CompatChangeReporter: Compat change id reported: 279646685; UID 10310; state: ENABLED
10-18 09:48:29.683 31924 32201 E Sink.cc : [Papaya] MldwCore.cc: 24 Core Read Error: no such table: user_visitation_event
10-18 09:48:29.692 30791 30791 I bnew    : onPause
10-18 09:48:29.723 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:29.745 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:29.745 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 19ms
10-18 09:48:29.769  8424  8450 I native  : I0000 00:00:1760761109.767320    8450 soda_async_impl.cc:1377] Current audio timestamp: 1760761109641841
10-18 09:48:29.779 15708 15708 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{59ad08d V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-18 09:48:29.788  8424  8459 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:29.796  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:29.802  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:29.803  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:29.803  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:29.804 18428 19185 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-18 09:48:29.893  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:29.985 30791 30836 I bnlk    : Chime Filter is invoked.
10-18 09:48:29.987 30791 30836 I bnlk    : Dropping with reason: SILENT_NOTIFICATION
10-18 09:48:30.082  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:30.103 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205759466]
10-18 09:48:30.113  3919  4115 I GH.CAR  : gearheadCarServiceBinder in mainHandler: true
10-18 09:48:30.146  5720 26612 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:30.154  5720 26612 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:30.155  5720 26612 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/LgmVU+-MTV-poFEWl2o38w29sl6mh3CkZJYz7RT7vl0=.tmp' ))
10-18 09:48:30.237 30764  4075 D CompatChangeReporter: Compat change id reported: 270674727; UID 10310; state: ENABLED
10-18 09:48:30.241 30791 30791 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-18 09:48:30.268 30791 30791 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:30.269 30791 30791 D BLASTBufferQueue: [VRI[Launcher]#6](f:0,a:1) destructor()
10-18 09:48:30.269 30791 30791 D BufferQueueConsumer: [VRI[Launcher]#6(BLAST Consumer)6](id:784700000006,api:0,p:-1,c:30791) disconnect
10-18 09:48:30.310 30791 30791 I bnew    : onStop
10-18 09:48:30.323  5720 32661 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:30.331  5720 32661 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:30.333  5720 32661 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/+xPFeC77O0AO0xHjpCCfF0ez5mWdfYFqQxrrh7ZrdZg=.enc.tmp' ))
10-18 09:48:30.359 31924  2665 E Sink.cc : [Papaya] MldwCore.cc: 24 Core Read Error: no such table: cell_tower_federated_event
10-18 09:48:30.417 31924 32201 E Sink.cc : [Papaya] MldwCore.cc: 24 Core Read Error: no such table: cell_tower_federated_event
10-18 09:48:30.446  3919  4115 I GH.CAR  : Using GearheadCarServiceBinder in CarMessageService.
10-18 09:48:30.448  3919  4115 I GH.DelegateMngCarSvc: Retries remaining initialized to 20
10-18 09:48:30.448  3919  4115 I GH.CAR  : Using Gearhead for projection services. All aboard! 🚀
10-18 09:48:30.449  3919  4115 I GH.DelegateICarSupplier: Android is R+, so connecting to Gearhead car chimera service.
10-18 09:48:30.449  3919  4115 I GH.DelegateMngCarSvc: Skipping delegate acquisition on init().
10-18 09:48:30.450  3919  4115 I GH.CarService: Setting delegate: gla@c532017
10-18 09:48:30.464   752  3409 W DynamiteModule: Local module descriptor class for com.google.android.gms.providerinstaller.dynamite not found.
10-18 09:48:30.453  3919  4115 I CAR.SERVICE: Setting CSB delegate, previous value null updated to hly@fd015ed
10-18 09:48:30.510 30764 32731 I com.whatsapp: Background concurrent copying GC freed 4626KB AllocSpace bytes, 19(600KB) LOS objects, 49% free, 10MB/21MB, paused 121us,42us total 333.693ms
10-18 09:48:30.514  5720  6973 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:30.516  5720  6973 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:30.517  5720  6973 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/UWU53ckLgkK6704gk6fQdH36XxRPRumcNuxUlgiL8tI=.thumb.tmp' ))
10-18 09:48:30.525 26036 26228 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:30.525 26036 26228 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:30.525 26106 26139 E IPCThreadState: Binder transaction failure. id: 428314344, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:30.525 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:30.525 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:30.526 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:30.526 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:30.526 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:30.526 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:30.529  5720 32662 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:30.531  3919  4115 I GH.CAR  : Setting validator car info suppliers
10-18 09:48:30.531  3919  4115 I GH.CAR  : ICar delegate chain:
10-18 09:48:30.531  3919  4115 I GH.CAR  : 	hmt@495bc22
10-18 09:48:30.531  3919  4115 I GH.CAR  : 	-> gla@c532017
10-18 09:48:30.531  3919  4115 I GH.CAR  : 	-> hly@fd015ed
10-18 09:48:30.532  5720 32662 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:30.533  5720 32662 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/kOWAlLZnUpaOCDdJksWGrA49VJzeqcDMmJqkJsSueoA=.enc.tmp' ))
10-18 09:48:30.536 31924 32201 E Sink.cc : [Papaya] MldwCore.cc: 24 Core Read Error: no such table: cell_tower_federated_event
10-18 09:48:30.542 26036  3122 D SharedPreferencesImpl: Time required to fsync /data/user/0/com.google.android.gms/shared_prefs/CCTQosUploaderService.xml: [<1: 3, <2: 2, <4: 4, <8: 1, <16: 0, <32: 0, <64: 0, <128: 0, <256: 0, <512: 0, <1024: 1, <2048: 0, <4096: 0, <8192: 0, <16384: 0, >=16384: 0]
10-18 09:48:30.546  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:30.581 31924 32201 E Sink.cc : [Papaya] MldwCore.cc: 24 Core Read Error: no such table: cell_tower_federated_event
10-18 09:48:30.592  5720 23763 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:30.592  5720 23763 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:30.593  5720 23763 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014505))
10-18 09:48:30.595  5720 23763 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:30.595  5720 23763 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:30.596 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:30.597 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:30.598 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:30.599 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:30.659 31924 32201 E Sink.cc : [Papaya] MldwCore.cc: 24 Core Read Error: no such table: cell_tower_federated_event
10-18 09:48:30.698   752  3220 D CompatChangeReporter: Compat change id reported: 311402873; UID 10212; state: ENABLED
10-18 09:48:30.698   752  3220 D CompatChangeReporter: Compat change id reported: 323349338; UID 10212; state: ENABLED
10-18 09:48:30.703 30791  3534 I GnpSdk  : Message handled by GNP Firebase handler.
10-18 09:48:30.741 26036 26052 W ProviderHelper: Unknown dynamite feature providerinstaller.dynamite
10-18 09:48:30.743  3919  4115 W DynamiteModule: Local module descriptor class for com.google.android.gms.googlecertificates not found.
10-18 09:48:30.756 30791 31002 I doma    : Received an intent for GNP, won't process
10-18 09:48:30.777 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205760140]
10-18 09:48:30.781  3919  4115 W on.gearhead:car: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:30.788 27276 27325 I doma    : Received an intent for GNP, won't process
10-18 09:48:30.790 30791 30864 I doma    : (REDACTED) Calling GCM listener for %s
10-18 09:48:30.813   752  3409 W ProviderInstaller: Failed to load providerinstaller module: No acceptable module com.google.android.gms.providerinstaller.dynamite found. Local version is 0 and remote version is 0.
10-18 09:48:30.815 27276 27659 I doma    : (REDACTED) Calling GCM listener for %s
10-18 09:48:30.818 30791  2707 D HttpFlagsLoader: Found application exporting HTTP flags: com.google.android.gms
10-18 09:48:30.819 30791  2707 D HttpFlagsLoader: HTTP flags file path: /data/user_de/0/com.google.android.gms/app_httpflags/flags.binarypb
10-18 09:48:30.821  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.831 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.mdisync.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:30.831 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.mdisync.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:30.832  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.838  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.838  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.839  9685 16107 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.847  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.847  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.848  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.851 30791  2707 D HttpFlagsLoader: Successfully loaded HTTP flags: # ffjc@81a69c46
10-18 09:48:30.855  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.856 30791  2707 I HttpFlagsLoader: HTTP flags log line (API): Using live production flag values from Google
10-18 09:48:30.856  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.857  9685 16476 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.858  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.858  9685 16476 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.858  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.859  9685 15897 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.859  9685 16476 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.860  9685 16476 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.860 27276  4333 I cmzp    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:30.860  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.861  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.863  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.863  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.863  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.863  9685 16476 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.864  9685 15897 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.864  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.864  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.864  9685 15897 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.865  9685 16104 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.865  9685 15897 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.869  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.870  9685 16102 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.870  9685 16475 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.879  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.880  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.881  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.889   752  3961 E awiy    : Sync subscriptions not available
10-18 09:48:30.894 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205760257]
10-18 09:48:30.898   752  3409 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:30.903 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205760266]
10-18 09:48:30.912 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205760276]
10-18 09:48:30.915 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205760278]
10-18 09:48:30.921   752  3409 D nativeloader: Configuring clns-8 for other apk /system/framework/com.android.media.remotedisplay.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:30.921   752  3409 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:30.927 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205760291]
10-18 09:48:30.928 26106 26686 I MdiSyncModule: (REDACTED) Receiving API connection from package '%s'...
10-18 09:48:30.931 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205760295]
10-18 09:48:30.933 28626  2154 W System  : ClassLoader referenced unknown path: 
10-18 09:48:30.937 28626  2154 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:30.938  3919  4115 I DynamiteModule: Considering local module com.google.android.gms.googlecertificates:0 and remote module com.google.android.gms.googlecertificates:7
10-18 09:48:30.938  3919  4115 I DynamiteModule: Selected remote version of com.google.android.gms.googlecertificates, version >= 7
10-18 09:48:30.938  3919  4115 V DynamiteModule: Dynamite loader version >= 2, using loadModule2NoCrashUtils
10-18 09:48:30.945  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.946  9685 15899 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:30.967  9685 16334 V NativeCrypto: Read error: ssl=0xb4000077f008c358: I/O error during system call, Software caused connection abort
10-18 09:48:31.010 28626  2154 W .apps.nbu.files: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=3321614647 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~pPME58w7QHLoagg4bMCuwQ==/com.google.android.apps.nbu.files-MJq39CRihoJrlphB2H5BUA==/base.apk*3321614647]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:31.019  3919  4115 W System  : ClassLoader referenced unknown path: 
10-18 09:48:31.019  3919  4115 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:31.022  9685  9685 W InstallReferrerClient: Install Referrer service disconnected.
10-18 09:48:31.024  9685  9685 W PlayInstallReferrerHand: Service disconnected
10-18 09:48:31.048  3919  4115 W on.gearhead:car: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=2598278137 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~GLzc5rE0Qa67vhI5lb8Huw==/com.google.android.projection.gearhead-lkLLKhByEfbbKKoqIgfgbQ==/base.apk*2598278137]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:31.128 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:31.159   752  3409 W ogle.android.gm: Suspending all threads took: 230.783ms
10-18 09:48:31.161 26106 26686 I MdiSyncModule: API connection successful!
10-18 09:48:31.164 26036  3151 I TFLite-in-PlayServices: Created interpreter.
10-18 09:48:31.178   752  3409 D nativeloader: Configuring clns-9 for other apk /system/framework/com.android.location.provider.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:31.178   752  3409 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:31.182   752  3409 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:31.182   752  3409 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:31.182  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.186  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.189  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.190  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.197  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.229  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.242  9685  9685 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:31.248 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:31.261  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:31.277  9685 16333 V NativeCrypto: SSL shutdown failed: ssl=0xb4000077f008c358: I/O error during system call, Broken pipe
10-18 09:48:31.278 15708 19060 I ReactNativeJS: '📚 Loaded', 1, 'recent searches'
10-18 09:48:31.312 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:31.312 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:31.312 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:31.315 15708 19061 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-18 09:48:31.315 15708 19061 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-18 09:48:31.315 15708 19061 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-18 09:48:31.330 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:31.331 15708 15708 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:31.332 15708 15708 D BufferQueueConsumer: [](id:3d5c00000035,api:0,p:-1,c:15708) connect: controlledByApp=false
10-18 09:48:31.332 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#30](f:0,a:0) constructor()
10-18 09:48:31.332 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#30](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-18 09:48:31.333 30764   605 D NetworkSession: New data task received from Msys
10-18 09:48:31.337   752  3279 D CompatChangeReporter: Compat change id reported: 312399441; UID 10212; state: ENABLED
10-18 09:48:31.346 15708 19040 D BLASTBufferQueue: [VRI[MainActivity]#30](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585502053612590(auto) mPendingTransactions.size=0 graphicBufferId=67465346285861 transform=0
10-18 09:48:31.361 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:31.363 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:31.373  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:31.374 15708 15708 V ImeFocusController: onWindowFocus: com.facebook.react.views.textinput.ReactEditText{8be1e1f VFED..CL. .F...... 135,36-539,169 #3093 aid=1073743073} softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-18 09:48:31.379  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:31.380  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:31.380  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=4001, inputTypeString=Normal[CapSentences], enableLearning=true, autoCorrection=true, autoComplete=true, imeOptions=3, privateImeOptions=null, actionName=SEARCH, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=2000, label=null, fieldId=12435, fieldName=null, extras=Bundle[mParcelledData.dataSize=404], hintText=non-empty, hintLocales=[]}}, false)
10-18 09:48:31.381  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:31.445 30764  4350 E com.whatsapp: hiddenapi: Accessing hidden method Lcom/android/org/conscrypt/OpenSSLSocketImpl;->setUseSessionTickets(Z)V (runtime_flags=CorePlatformApi, domain=core-platform, api=max-target-q,core-platform-api) from LX/0Jx; (domain=app) using reflection: denied
10-18 09:48:31.445 30764  4350 E com.whatsapp: hiddenapi: Accessing hidden method Lcom/android/org/conscrypt/AbstractConscryptSocket;->setUseSessionTickets(Z)V (runtime_flags=0, domain=core-platform, api=max-target-q) from LX/0Jx; (domain=app) using reflection: denied
10-18 09:48:31.467  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.484  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.487  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.488  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.488  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.488  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.489  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.489  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.489  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.490  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.492  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.493  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.493  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.493  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.494  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.494  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.494  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.494  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.495  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.495  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.497  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.500  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.505  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.544  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.545  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.546  3458  3490 W id.ext.services: Reducing the number of considered missed Gc histogram windows from 555 to 100
10-18 09:48:31.549  9685  9685 W InstallReferrerClient: RemoteException getting install referrer information
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: Error fetching install referrer
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: android.os.DeadObjectException
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at dlq.b(PG:8)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at dmf.e(PG:9)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at nly.b(PG:31)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at eyl.onServiceConnected(PG:41)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher.doConnected(LoadedApk.java:2333)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher$RunConnection.run(LoadedApk.java:2372)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at java.lang.reflect.Method.invoke(Native Method)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-18 09:48:31.554  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-18 09:48:31.555  3458  3492 W System  : A resource failed to call release. 
10-18 09:48:31.556  3458  3492 W System  : A resource failed to call release. 
10-18 09:48:31.563  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.565  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.571 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:31.589  5720 26612 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:31.593  5720 26612 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:31.593  5720 26612 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/8Xs8FD3kYvm+urduaKM6t5J7CTGVC1-kUV+2v4HK9xo=.thumb.tmp' ))
10-18 09:48:31.608  2787  4428 D CompatChangeReporter: Compat change id reported: 253665015; UID 10351; state: ENABLED
10-18 09:48:31.609  5720 32663 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:31.611  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:31.612  5720 32663 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:31.612  5720 32663 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/8KfXNXcKgBtf6ZccvIiVIYtWasaO4oWbphOm5Ev4Ato=.enc.tmp' ))
10-18 09:48:31.635  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.642  5720  6973 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:31.642  5720  6973 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:31.643  5720  6973 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014507))
10-18 09:48:31.645  5720  6973 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:31.645  5720  6973 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:31.691 32509  4437 D ProfileInstaller: Installing profile for com.olacabs.customer
10-18 09:48:31.698 31924  2663 D SQLiteQueryBuilder: SELECT dedup_key FROM home_stories WHERE ((feed_type=? AND seen_state=?))
10-18 09:48:31.714  2787  4072 D CompatChangeReporter: Compat change id reported: 263076149; UID 10351; state: ENABLED
10-18 09:48:31.715  3446  4208 W net.one97.paytm: ClassLoaderContext classpath size mismatch. expected=1, found=3 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/base.apk*781370227:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_flight_dynamic.apk*1917002914:/data/app/~~klM_g5L3skIRh8cphbLFxg==/net.one97.paytm-F6qsYtuQfsduv47b8XzHyw==/split_movie.apk*2281900463]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:31.716  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.717  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.718  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.745  3446  4208 I net.one97.paytm: Waiting for a blocking GC ClassLinker
10-18 09:48:31.797  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.802  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.864 30764 32730 I com.whatsapp: JIT allocated 54KB for compiled code of void X.9PY.run()
10-18 09:48:31.864 30764 32730 I com.whatsapp: Compiler allocated 10MB to compile void X.9PY.run()
10-18 09:48:31.885 32509  2391 E FA      : Name must consist of letters, digits or _ (underscores). Type, name: event, fa_pickup cache location available
10-18 09:48:31.885 32509  2391 E FA      : Invalid public event name. Event will not be logged (FE): fa_pickup cache location available
10-18 09:48:31.886 32509  2391 E FA      : Name must consist of letters, digits or _ (underscores). Type, name: event, fa_publish location
10-18 09:48:31.887 32509  2391 E FA      : Invalid public event name. Event will not be logged (FE): fa_publish location
10-18 09:48:31.931 30791  2707 I HttpEngBuilderWrap: NetworkQualityEstimator is unsupported when HttpEngineNativeProvider is used
10-18 09:48:31.949  3446  4208 I net.one97.paytm: WaitForGcToComplete blocked ClassLinker on CollectorTransition for 203.647ms
10-18 09:48:31.950  9685  9685 W InstallReferrerClient: Install Referrer service disconnected.
10-18 09:48:31.951  9685  9685 W PlayInstallReferrerHand: Service disconnected
10-18 09:48:31.951  9685  9685 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:31.951  9685  9685 W InstallReferrerClient: RemoteException getting install referrer information
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: Error fetching install referrer
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: android.os.DeadObjectException
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at dlq.b(PG:8)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at dmf.e(PG:9)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at nly.b(PG:31)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at eyl.onServiceConnected(PG:41)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher.doConnected(LoadedApk.java:2333)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher$RunConnection.run(LoadedApk.java:2372)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at java.lang.reflect.Method.invoke(Native Method)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-18 09:48:31.952  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-18 09:48:31.956  9685  9685 W InstallReferrerClient: Install Referrer service disconnected.
10-18 09:48:31.968  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.969  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.969  9685  9685 W PlayInstallReferrerHand: Service disconnected
10-18 09:48:31.970  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.971  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.971  9685  9685 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:31.983 26036 30417 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205401330]
10-18 09:48:31.985  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.986  9685  9685 W InstallReferrerClient: RemoteException getting install referrer information
10-18 09:48:31.986  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: Error fetching install referrer
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: android.os.DeadObjectException
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at dlq.b(PG:8)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at dmf.e(PG:9)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at nly.b(PG:31)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at eyl.onServiceConnected(PG:41)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher.doConnected(LoadedApk.java:2333)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher$RunConnection.run(LoadedApk.java:2372)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at java.lang.reflect.Method.invoke(Native Method)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-18 09:48:31.987  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-18 09:48:31.988  9685  9685 W InstallReferrerClient: Install Referrer service disconnected.
10-18 09:48:31.988  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.988  9685  9685 W PlayInstallReferrerHand: Service disconnected
10-18 09:48:31.989  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:31.989  9685  9685 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:31.989  9685  9685 W InstallReferrerClient: RemoteException getting install referrer information
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: Error fetching install referrer
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: android.os.DeadObjectException
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at dlq.b(PG:8)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at dmf.e(PG:9)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at nly.b(PG:31)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at eyl.onServiceConnected(PG:41)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher.doConnected(LoadedApk.java:2333)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher$RunConnection.run(LoadedApk.java:2372)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at java.lang.reflect.Method.invoke(Native Method)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-18 09:48:31.989  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-18 09:48:31.990  9685  9685 W InstallReferrerClient: Install Referrer service disconnected.
10-18 09:48:31.990  9685  9685 W PlayInstallReferrerHand: Service disconnected
10-18 09:48:31.990  9685  9685 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:31.990  9685  9685 W InstallReferrerClient: RemoteException getting install referrer information
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: Error fetching install referrer
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: android.os.DeadObjectException
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at dlq.b(PG:8)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at dmf.e(PG:9)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at nly.b(PG:31)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at eyl.onServiceConnected(PG:41)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher.doConnected(LoadedApk.java:2333)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher$RunConnection.run(LoadedApk.java:2372)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at java.lang.reflect.Method.invoke(Native Method)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-18 09:48:31.991  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-18 09:48:31.991  9685  9685 W InstallReferrerClient: Install Referrer service disconnected.
10-18 09:48:32.014  9685  9685 W PlayInstallReferrerHand: Service disconnected
10-18 09:48:32.014  9685  9685 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:32.014  9685  9685 W InstallReferrerClient: RemoteException getting install referrer information
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: Error fetching install referrer
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: android.os.DeadObjectException
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at dlq.b(PG:8)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at dmf.e(PG:9)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at nly.b(PG:31)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at eyl.onServiceConnected(PG:41)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher.doConnected(LoadedApk.java:2333)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.app.LoadedApk$ServiceDispatcher$RunConnection.run(LoadedApk.java:2372)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at java.lang.reflect.Method.invoke(Native Method)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-18 09:48:32.015  9685  9685 W InstallReferrerClient: Install Referrer service disconnected.
10-18 09:48:32.015  9685  9685 W PlayInstallReferrerHand: Service disconnected
10-18 09:48:32.019  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.020  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.029  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.077 26036 30417 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205401330]
10-18 09:48:32.111  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.115  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.115  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.117  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.118  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.119  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.119  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.132  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.136 15708 19060 I ReactNativeJS: '📍 Location selected:', { description: 'Bagalur, Tamil Nadu, India',
10-18 09:48:32.136 15708 19060 I ReactNativeJS:   coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:32.136 15708 19060 I ReactNativeJS:   type: 'recent' }
10-18 09:48:32.136 15708 19060 I ReactNativeJS: ✅ Calling onLocationSelect with valid coordinates
10-18 09:48:32.136 15708 19060 I ReactNativeJS: 🔍 Destination location selected, validating zone...
10-18 09:48:32.137 15708 19060 I ReactNativeJS: '🔍 Selected destination:', { location: 'Bagalur, Tamil Nadu, India',
10-18 09:48:32.137 15708 19060 I ReactNativeJS:   coords: { latitude: 12.8303987, longitude: 77.86623689999999 } }
10-18 09:48:32.137 15708 19060 I ReactNativeJS: '🔍 Active zones for validation:', 2
10-18 09:48:32.137 15708 19060 I ReactNativeJS: 🔍 [ZONE-VALIDATION] Starting destination zone validation
10-18 09:48:32.137 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Location:', 'Bagalur, Tamil Nadu, India'
10-18 09:48:32.137 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Coordinates:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:32.137 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Active zones available:', 2
10-18 09:48:32.137 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Zone names:', [ 'Inner Ring', 'Outer Ring' ]
10-18 09:48:32.137 15708 19060 I ReactNativeJS: '🔍 [ZONE-VALIDATION] Full zone data:', '[\n  {\n    "id": "227fb7d8-2e9a-439b-b315-a28619795daa",\n    "name": "Inner Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.739137771576607,\n        "lng": 77.82861131744386\n      },\n      "radius": 7740.280633057722\n    },\n    "center_latitude": 12.73913777,\n    "center_longitude": 77.82861132,\n    "radius_km": 7.74,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-14T06:53:07.902747+00:00",\n    "updated_at": "2025-10-14T06:53:07.902747+00:00"\n  },\n  {\n    "id": "743ead3b-5e3c-4812-9bd7-d056934e7ad5",\n    "name": "Outer Ring",\n    "city": "Hosur",\n    "state": "Tamil Nadu",\n    "coordinates": {\n      "type": "circle",\n      "center": {\n        "lat": 12.738133154875067,\n        "lng": 77.82916921691896\n      },\n      "radius": 13156.583388351022\n    },\n    "center_latitude": 12.73813315,\n    "center_longitude": 77.82916922,\n    "radius_km": 13.16,\n    "base_fare": 50,\n    "per_km_rate": 12,\n    "surge_multiplier": 1,\n    "is_active": true,\n    "created_at": "2025-10-14T06:53:40.388587+00:00",\n    "updated_at": "2025-10-14T06:53:40.388587+00:00"\n  }\n]'
10-18 09:48:32.138 15708 19060 I ReactNativeJS: '🔍 Checking if point is in service area:', { coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   zonesCount: 2,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   zones: 
10-18 09:48:32.138 15708 19060 I ReactNativeJS:    [ { name: 'Inner Ring',
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        radius_km: 7.74,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        center_lat: 12.73913777,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        center_lng: 77.82861132 },
10-18 09:48:32.138 15708 19060 I ReactNativeJS:      { name: 'Outer Ring',
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        radius_km: 13.16,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        center_lat: 12.73813315,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:        center_lng: 77.82916922 } ] }
10-18 09:48:32.138 15708 19060 I ReactNativeJS: 🔍 Using circle-based zone validation
10-18 09:48:32.138 15708 19060 I ReactNativeJS: '🔍 Raw Outer Ring data:', { center_latitude: 12.73813315,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   center_latitude_type: 'number',
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   center_longitude: 77.82916922,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   center_longitude_type: 'number',
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   radius_km: 13.16,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   radius_km_type: 'number' }
10-18 09:48:32.138 15708 19060 I ReactNativeJS: '🔍 Parsed values:', { centerLat: 12.73813315,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   centerLng: 77.82916922,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   radiusKm: 13.16,
10-18 09:48:32.138 15708 19060 I ReactNativeJS:   allValid: true }
10-18 09:48:32.139 15708 19060 I ReactNativeJS: '🔍 Circle zone check:', { point: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   center: { latitude: 12.73813315, longitude: 77.82916922 },
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   radiusKm: '13.16km',
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   calculatedDistance: '11.02km',
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   difference: '-2.14km',
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   isInside: '✅ INSIDE' }
10-18 09:48:32.139 15708 19060 I ReactNativeJS: 🔍 Point is INSIDE Outer Ring (13.16km radius)
10-18 09:48:32.139 15708 19060 I ReactNativeJS: ✅ [ZONE-VALIDATION] Destination location is within active zones
10-18 09:48:32.139 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 0,
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.139 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.146 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-18 09:48:32.146 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.146 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.146 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.147 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 0,
10-18 09:48:32.147 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:32.147 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.147 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.149 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 0,
10-18 09:48:32.149 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.149 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.149 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.150 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 90,
10-18 09:48:32.150 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.150 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:32.150 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:32.151 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 0,
10-18 09:48:32.151 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.151 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.151 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.173 15708 19060 I ReactNativeJS: '🗺️ [MAP] Props updated:', { showRoute: true,
10-18 09:48:32.173 15708 19060 I ReactNativeJS:   showDriverToPickupRoute: false,
10-18 09:48:32.173 15708 19060 I ReactNativeJS:   hasDriverLocation: false,
10-18 09:48:32.173 15708 19060 I ReactNativeJS:   hasPickupCoords: true,
10-18 09:48:32.173 15708 19060 I ReactNativeJS:   hasDestinationCoords: true,
10-18 09:48:32.173 15708 19060 I ReactNativeJS:   driverLocation: null,
10-18 09:48:32.173 15708 19060 I ReactNativeJS:   pickupCoords: { lat: 12.7486583, lng: 77.8299917 },
10-18 09:48:32.173 15708 19060 I ReactNativeJS:   destinationCoords: { lat: 12.8303987, lng: 77.86623689999999 } }
10-18 09:48:32.173 15708 19060 I ReactNativeJS: '🗺️ Calculating route between:', { latitude: 12.7486583, longitude: 77.8299917 }, 'and', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:32.173 15708 19060 I ReactNativeJS: '🗺️ [GOOGLE-MAPS] Getting directions from', { lat: 12.7486583, lng: 77.8299917 }, 'to', { lat: 12.8303987, lng: 77.86623689999999 }
10-18 09:48:32.173 15708 19060 I ReactNativeJS: '🌐 Making proxy request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/places-proxy/directions?origin=12.7486583%2C77.8299917&destination=12.8303987%2C77.86623689999999&mode=driving'
10-18 09:48:32.174 15708 19060 I ReactNativeJS: 🗺️ [HOME] ===== HIDING DRIVERS FOR ROUTE DISPLAY =====
10-18 09:48:32.174 15708 19060 I ReactNativeJS: 🗺️ [HOME] Both pickup and destination selected, hiding drivers to show route
10-18 09:48:32.174 15708 19060 I ReactNativeJS: 🛑 [HOME] Stopping driver location polling
10-18 09:48:32.174 15708 19060 I ReactNativeJS: 🔄 [HOME] Triggering fare calculation due to location/vehicle change
10-18 09:48:32.174 15708 19060 I ReactNativeJS: 💰 [HOME] ===== STARTING FARE CALCULATION WITH DEADHEAD =====
10-18 09:48:32.174 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fare for Bagalur trip:', { pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   pickupCoords: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   destinationCoords: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   selectedVehicle: 'sedan',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:32.174Z',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   shouldHaveDeadhead: true }
10-18 09:48:32.174 15708 19060 I ReactNativeJS: 💰 [HOME] Calling fareCalculator.calculateFare...
10-18 09:48:32.174 15708 19060 I ReactNativeJS: '💰 [FARE-CALC] Input parameters:', { vehicleType: 'sedan',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   pickup: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:32.174Z',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   supabaseUrl: 'SET',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   supabaseKey: 'SET' }
10-18 09:48:32.174 15708 19060 I ReactNativeJS: 🎯 [FARE-CALC] Using edge function for deadhead calculation...
10-18 09:48:32.174 15708 19060 I ReactNativeJS: '🔍 [FARE-CALC] Environment validation:', { supabaseUrl: 'SET',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   supabaseKey: 'SET',
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   urlValid: true,
10-18 09:48:32.174 15708 19060 I ReactNativeJS:   keyValid: true }
10-18 09:48:32.174 15708 19060 I ReactNativeJS: '🎯 [FARE-CALC] Edge function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/fare-calculation'
10-18 09:48:32.175 15708 19060 I ReactNativeJS: 📡 [FARE-CALC] Making request to edge function...
10-18 09:48:32.175 15708 19060 I ReactNativeJS: '📡 [FARE-CALC] Request body:', { pickup_latitude: 12.7486583,
10-18 09:48:32.175 15708 19060 I ReactNativeJS:   pickup_longitude: 77.8299917,
10-18 09:48:32.175 15708 19060 I ReactNativeJS:   destination_latitude: 12.8303987,
10-18 09:48:32.175 15708 19060 I ReactNativeJS:   destination_longitude: 77.86623689999999,
10-18 09:48:32.175 15708 19060 I ReactNativeJS:   vehicle_type: 'sedan',
10-18 09:48:32.175 15708 19060 I ReactNativeJS:   booking_type: 'regular' }
10-18 09:48:32.176 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 0,
10-18 09:48:32.176 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.176 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.176 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.177 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 0,
10-18 09:48:32.177 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.177 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.177 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.179 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 0,
10-18 09:48:32.179 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:32.179 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.179 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.180 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 0,
10-18 09:48:32.180 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.180 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.180 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.181 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 90,
10-18 09:48:32.181 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.181 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:32.181 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:32.182 26036  3151 I TFLite-in-PlayServices: Created interpreter.
10-18 09:48:32.183 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 0,
10-18 09:48:32.183 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:32.183 15708 19060 I ReactNativeJS:   showingCalculated: false,
10-18 09:48:32.183 15708 19060 I ReactNativeJS:   source: 'minimum_fare' }
10-18 09:48:32.198 26036  1250 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205401330]
10-18 09:48:32.205 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:32.207 15708 15708 I ImeTracker: com.a1taxi.a1taxicustomer:3074f945: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT fromUser false
10-18 09:48:32.226  9685  9685 D ActivityThread: Package [com.phonepe.app] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.227 15708 15708 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@3937a5
10-18 09:48:32.228 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:32.228 15708 15708 D AutofillManager: view not autofillable - not passing ime action check
10-18 09:48:32.233 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#30](f:0,a:4) destructor()
10-18 09:48:32.233 15708 15708 D BufferQueueConsumer: [VRI[MainActivity]#30(BLAST Consumer)30](id:3d5c00000035,api:0,p:-1,c:15708) disconnect
10-18 09:48:32.260  9685  9685 D ActivityThread: Package [com.phonepe.app] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.265  9685  9685 D ActivityThread: Package [com.application.zomato] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.286 15708 15708 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{59ad08d V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-18 09:48:32.288  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:32.289  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.289  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:32.289  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.289  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:32.290  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:32.291  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.294  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.295  9685 15896 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.300  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.300  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.304  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.304  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.304  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.305  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.306  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.309  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.310  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.311  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.312  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.313 26036  1251 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.application.zomato
10-18 09:48:32.316  9685  9685 D ActivityThread: Package [com.application.zomato] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.317  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.317  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.321  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.323  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.324  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.327  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.328  9685  9685 D ActivityThread: Package [com.google.android.apps.walletnfcrel] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.330  9685  9685 D ActivityThread: Package [com.google.android.apps.walletnfcrel] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.332  9685 16103 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.333  9685 16103 W CameraManagerGlobal: ignore the torch status update of camera: 2
10-18 09:48:32.333  9685  9685 D ActivityThread: Package [com.booking] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.334  9685  9685 D ActivityThread: Package [com.booking] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.335  9685 16106 D VivoJavaJsonManager: failed to find appName:com.google.android.apps.nbu.paisa.user from config key:mProtakePackages
10-18 09:48:32.335  9685 16106 W CameraManagerGlobal: ignore the torch status update of camera: 3
10-18 09:48:32.335  9685  9685 D ActivityThread: Package [com.google.android.apps.nbu.files] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.337  9685 16103 E CameraManagerGlobal: Camera 3 is not present. Ignore physical camera status change
10-18 09:48:32.349  9685  9685 D ActivityThread: Package [com.google.android.apps.nbu.files] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.351  9685  9685 D ActivityThread: Package [com.google.android.gm] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.352  9685  9685 D ActivityThread: Package [com.google.android.gm] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.354  9685  9685 D ActivityThread: Package [com.google.android.apps.docs.editors.sheets] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.357  9685  9685 D ActivityThread: Package [com.google.android.apps.docs.editors.sheets] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.358  9685  9685 D ActivityThread: Package [com.google.android.apps.docs] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.363  9685  9685 D ActivityThread: Package [com.google.android.apps.docs] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.364  9685  9685 D ActivityThread: Package [com.google.android.apps.photos] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.372  9685  9685 D ActivityThread: Package [com.google.android.apps.photos] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.374 28626  4483 I HttpFlagsLoader: HTTP flags log line (Impl): Using live production flag values from Google
10-18 09:48:32.376  9685  9685 D ActivityThread: Package [com.a1taxi.driverpro] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.381  9685  9685 D ActivityThread: Package [com.a1taxi.driverpro] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.381  9685  9685 D ActivityThread: Package [com.a1taxi.driverpro] reported as REPLACED, but missing application info. Assuming REMOVED.
10-18 09:48:32.409 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.locationsharingreporter.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:32.423 28626  2154 D nativeloader: Configuring clns-9 for other apk . target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-18 09:48:32.425 28626  2154 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:32.514  3446  4208 D nativeloader: Configuring clns-9 for other apk . target_sdk_version=35, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-18 09:48:32.514  3446  4208 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:32.519  3446  4208 D nativeloader: Load /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk!/lib/arm64-v8a/libcronet.141.0.7340.3.so using isolated ns clns-9 (caller=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk): ok
10-18 09:48:32.542 30791  4486 D HttpFlagsLoader: Found application exporting HTTP flags: com.google.android.gms
10-18 09:48:32.542 30791  4486 D HttpFlagsLoader: HTTP flags file path: /data/user_de/0/com.google.android.gms/app_httpflags/flags.binarypb
10-18 09:48:32.564 30764   605 D NetworkSession: New data task received from Msys
10-18 09:48:32.574 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: Successfully loaded HTTP flags: # android.net.connectivity.org.chromium.net.httpflags.Flags@3b2909b7
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "Cronet_ForceHttpEngineInFallback"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "137.0.7141.0"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "Cronet_override_network_thread_priority"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       int_value: 0
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "126.0.6465.0"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideConnectionOptions"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "Cronet_InitializeBuildInfoOnStartup"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: false
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "135.0.7011.0"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideClientConnectionOptions_PARAM_ForceOff"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "Cronet_OverrideNativeCronetWithHttpEngine"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.googlequicksearchbox"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.apps.maps"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gm"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.calendar"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "Cronet_UpdateNetworkStateOnlyOnceOnStartup"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "134.0.6948.0"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "Cronet_log_me"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       string_value: "Using live production flag values from Google"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "Cronet_OverrideWithHttpEngine"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.googlequicksearchbox"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.apps.maps"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.gm"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     constrained_values {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       app_id: "com.google.android.calendar"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       bool_value: true
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:     }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideConnectionOptions_PARAM_ForceOff"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideClientConnectionOptions"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideClientConnectionOptions_PARAM_ForceOn"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: flags {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   key: "ChromiumBaseFeature_kQuicRegisterConnectionClosePayload"
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   value {
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader:   }
10-18 09:48:32.582 30791  4486 D HttpFlagsLoader: }
10-18 09:48:32.583 30791  4486 I HttpFlagsLoader: HTTP flags log line (Impl): Using live production flag values from Google
10-18 09:48:32.609 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:32.609 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.609 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.609 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:32.614 15708 19023 I .a1taxicustomer: Background concurrent copying GC freed 10MB AllocSpace bytes, 144(8572KB) LOS objects, 27% free, 61MB/85MB, paused 100us,71us total 131.649ms
10-18 09:48:32.619  3446  4208 I HttpFlagsLoader: HTTP flags log line (Impl): Using live production flag values from Google
10-18 09:48:32.623 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:32.623 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.631 15708 19025 E .a1taxicustomer: [SurfaceTexture-0-15708-21] setSurfaceTextureListener: listener is nullptr
10-18 09:48:32.635 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.638  3446  4208 I cn_CronetLibraryLoader: Cronet version: 141.0.7340.3, arch: aarch64
10-18 09:48:32.645 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:32.645 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:32.645 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:32.645 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:32.645 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:32.645 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:32.646 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: mediaPreload.prefetchInternal : source: Type: DASH_VOD
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	Id: 24971272639203834
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	Uri: https://scontent.fixm4-2.fna.fbcdn.net/o1/v/t2/f2/m412/AQPVaRT566NMOUuwcu2gOYktcXyqM3yCWmVfoWBdAuPa1KNooQ39MMkN7UlLd4iwQB6K3XXsukhfVlTP5VjlU1QwPFhUrSmxtuNSU4bhpw.mp4?_nc_cat=109&_nc_oc=AdkKCgTMMgUPgyylUjpqtDeDhMa1kQzs-ZC638sXSQYRi9QAyzZKec-E4SArzjSL-r7AohyqCJ_SBxRTPRdvb7QD&_nc_sid=8bf8fe&_nc_ht=scontent.fixm4-2.fna.fbcdn.net&_nc_ohc=257a8-S9wx4Q7kNvwGyDpyq&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6ODAwNjE4MjkyNjcwMzUxLCJ2aV91c2VjYXNlX2lkIjoxMDc5OSwiZHVyYXRpb25fcyI6NiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AffryT-iXd3geR7Sa5k3ZWvB33MecCAOah21LO6ScDB7fA&oe=68F8E451&bitrate=190295&tag=sve_sd
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	Origin: FEED
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	PrefetchOrigin: FEED
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	DashMPD: 24306
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	liveLatency: -1
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	liveLatencyTolerance: -1
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	isSpherical: false
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	isSponsored: true
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	isAdBreak: false
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	isLiveTraceEnabled: false
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	renderMode: AUDIO_VIDEO
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	isBroadcast: false
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	contentType: GENERAL
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	isAudioDataListenerEnabled: false
10-18 09:48:32.646 31924 32563 W fb4a.HeroManager: 	liveViewerCount: -1, type: DASH_VOD
10-18 09:48:32.647 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.653 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.653 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:32.653 28626  2154 D nativeloader: Load /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk!/lib/arm64-v8a/libcronet.141.0.7340.3.so using isolated ns clns-9 (caller=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk): ok
10-18 09:48:32.666 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.675 31924  2663 D SQLiteQueryBuilder: SELECT dedup_key FROM home_stories WHERE ((feed_type=? AND seen_state=?))
10-18 09:48:32.689 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:32.691 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.692 26036 31675 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:32.695 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.724 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:32.724 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.724 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.724 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:32.725 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:32.725 28626  2154 I cn_CronetLibraryLoader: Cronet version: 141.0.7340.3, arch: aarch64
10-18 09:48:32.733 31924  2663 D SQLiteQueryBuilder: SELECT dedup_key FROM home_stories WHERE ((feed_type=? AND seen_state=?))
10-18 09:48:32.737 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:32.741 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.742 26036  3151 I SemanticLocation: (REDACTED) [Inferrer] %s%s
10-18 09:48:32.755 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:32.755 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.761 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:32.761 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.775 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:32.775 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.775 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.775 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:32.789 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.789 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:32.815  4649  4649 I cebook.services: Using CollectorTypeCC GC.
10-18 09:48:32.818  4649  4649 E cebook.services: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:32.825 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.828  4649  4649 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:32.829 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.834 31924  2663 D SQLiteQueryBuilder: SELECT dedup_key FROM home_stories WHERE ((feed_type=? AND seen_state=?))
10-18 09:48:32.838 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.842 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:32.842  4649  4649 E cebook.services: BBinder_init Processname  <pre-initialized>  
10-18 09:48:32.843  4649  4649 E cebook.services: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:32.853 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:32.854 26036 31675 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:32.865 26036 31675 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:32.888 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:32.888 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.888 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.888 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:32.888 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-18 09:48:32.888 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-18 09:48:32.889 30791  2707 I cn_CronetLibraryLoader: Cronet version: 139.0.7205.3, arch: aarch64
10-18 09:48:32.929  4649  4649 D nativeloader: Configuring clns-7 for other apk /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk. target_sdk_version=35, uses_libraries=, library_path=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64:/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.facebook.services
10-18 09:48:32.930  4649  4649 D CompatChangeReporter: Compat change id reported: 202956589; UID 10094; state: ENABLED
10-18 09:48:32.948 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:32.951 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:32.951 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:32.958  4649  4649 V GraphicsEnvironment: Currently set values for:
10-18 09:48:32.958  4649  4649 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:32.958  4649  4649 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:32.958  4649  4649 V GraphicsEnvironment: com.facebook.services is not listed in per-application setting
10-18 09:48:32.971 31924  2663 D SQLiteQueryBuilder: SELECT dedup_key FROM home_stories WHERE ((feed_type=? AND seen_state=?))
10-18 09:48:32.987  4649  4649 D d       : ExceptionHandlerManager not explicitly initialized, using default mode
10-18 09:48:32.987  4649  4649 D d       : initializing exception handler manager, prioritized=true
10-18 09:48:32.990  4649  4649 E SoLoader: Initializing SoLoader: 0
10-18 09:48:32.990  4649  4649 E SoLoader: ApplicationInfo.flags is: 814235333 appType is: 3
10-18 09:48:32.990  4649  4649 E SoLoader: context.getApplicationContext returned null, holding reference to original context.ApplicationSoSource fallbacks to: /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64
10-18 09:48:32.990  4649  4649 W SoLoader: Recording new base apk path: /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk
10-18 09:48:32.990  4649  4649 W SoLoader: Previously recorded 0 base apk paths.
10-18 09:48:32.990  4649  4649 E SoLoader: adding system library source: /system/lib64
10-18 09:48:32.990  4649  4649 E SoLoader: adding system library source: /vendor/lib64
10-18 09:48:32.990  4649  4649 D CompatChangeReporter: Compat change id reported: 312399441; UID 10094; state: ENABLED
10-18 09:48:32.991  4649  4649 E SoLoader: Adding application source: ApplicationSoSource[DirectorySoSource[root = /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64 flags = 1]]
10-18 09:48:32.991  4649  4649 E SoLoader: Preparing SO source: DirectorySoSource[root = /vendor/lib64 flags = 2]
10-18 09:48:32.991  4649  4649 E SoLoader: Preparing SO source: DirectorySoSource[root = /system/lib64 flags = 2]
10-18 09:48:32.991  4649  4649 E SoLoader: Preparing SO source: ApplicationSoSource[DirectorySoSource[root = /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64 flags = 1]]
10-18 09:48:32.991  4649  4649 E SoLoader: Preparing SO source: BackupSoSource[root = /data/data/com.facebook.services/lib-main flags = 1 apks = [ExtractFromZipSoSource[/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk]]]
10-18 09:48:32.992  4649  4649 E SoLoader: init finish: 4 SO sources prepared
10-18 09:48:32.992  4649  4649 E SoLoader: Init SoLoader delegate
10-18 09:48:32.992  4649  4649 E SoLoader: SoLoader initialized: 0
10-18 09:48:32.994  4649  4649 W PreloadsBreakpadWrapper: Starting breakpad manager
10-18 09:48:32.994  4649  4649 E SoLoader: Loading breakpad on the main thread
10-18 09:48:32.994  4649  4649 E SoLoader: About to load: libbreakpad.so
10-18 09:48:32.995  4649  4649 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libbreakpad.so, this can be slow
10-18 09:48:32.996 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:32.998  4649  4649 E SoLoader: About to load: libc++_shared.so
10-18 09:48:32.998  4649  4649 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libc++_shared.so, this can be slow
10-18 09:48:33.008  4649  4649 D nativeloader: Load /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk): ok
10-18 09:48:33.009  4649  4649 E SoLoader: Loaded: libc++_shared.so
10-18 09:48:33.009  4649  4649 E SoLoader: About to load: libandroid_aware_dlopen.so
10-18 09:48:33.009  4649  4649 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libandroid_aware_dlopen.so, this can be slow
10-18 09:48:33.010  4649  4649 E SoLoader: About to load: libforce_dlopen.so
10-18 09:48:33.010  4649  4649 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libforce_dlopen.so, this can be slow
10-18 09:48:33.011  4649  4649 D nativeloader: Load /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64/libforce_dlopen.so using class loader ns clns-7 (caller=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk): ok
10-18 09:48:33.011  4649  4649 E SoLoader: Loaded: libforce_dlopen.so
10-18 09:48:33.012  4649  4649 D nativeloader: Load /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64/libandroid_aware_dlopen.so using class loader ns clns-7 (caller=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk): ok
10-18 09:48:33.012  4649  4649 E SoLoader: Loaded: libandroid_aware_dlopen.so
10-18 09:48:33.012  4649  4649 E SoLoader: About to load: libsigmux.so
10-18 09:48:33.012  4649  4649 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libsigmux.so, this can be slow
10-18 09:48:33.014  4649  4649 D nativeloader: Load /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64/libsigmux.so using class loader ns clns-7 (caller=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk): ok
10-18 09:48:33.014  4649  4649 E SoLoader: Loaded: libsigmux.so
10-18 09:48:33.017  4649  4649 D nativeloader: Load /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64/libbreakpad.so using class loader ns clns-7 (caller=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk): ok
10-18 09:48:33.017  4649  4649 E SoLoader: Loaded: libbreakpad.so
10-18 09:48:33.018  4649  4649 E SoLoader: Loading breakpad_cpp_helper on the main thread
10-18 09:48:33.018  4649  4649 E SoLoader: About to load: libbreakpad_cpp_helper.so
10-18 09:48:33.023  4649  4649 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libbreakpad_cpp_helper.so, this can be slow
10-18 09:48:33.026  4649  4649 D nativeloader: Load /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64/libbreakpad_cpp_helper.so using class loader ns clns-7 (caller=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk): ok
10-18 09:48:33.027  4649  4649 E SoLoader: Loaded: libbreakpad_cpp_helper.so
10-18 09:48:33.041  4649  4649 W PreloadsBreakpadWrapper: Enabling java stream
10-18 09:48:33.042  4649  4742 E SoLoader: About to load: libacra.so
10-18 09:48:33.044  4649  4742 E SoLoader: Running a recovery step for libacra.so due to com.facebook.soloader.SoLoaderDSONotFoundError: couldn't find DSO to load: libacra.so
10-18 09:48:33.044  4649  4742 E SoLoader: 	existing SO sources: 
10-18 09:48:33.044  4649  4742 E SoLoader: 		SoSource 0: BackupSoSource[root = /data/data/com.facebook.services/lib-main flags = 1 apks = [ExtractFromZipSoSource[/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk]]]
10-18 09:48:33.044  4649  4742 E SoLoader: 		SoSource 1: ApplicationSoSource[DirectorySoSource[root = /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64 flags = 1]]
10-18 09:48:33.044  4649  4742 E SoLoader: 		SoSource 2: DirectorySoSource[root = /system/lib64 flags = 2]
10-18 09:48:33.044  4649  4742 E SoLoader: 		SoSource 3: DirectorySoSource[root = /vendor/lib64 flags = 2]
10-18 09:48:33.044  4649  4742 E SoLoader: 	Native lib dir: /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64
10-18 09:48:33.045  4649  4742 W soloader.recovery.CheckBaseApkExists: Base apk exists: /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk
10-18 09:48:33.045  4649  4742 E SoLoader: Waiting on SoSource BackupSoSource
10-18 09:48:33.046  4649  4742 W SysUtil : error removing /data/data/com.facebook.services/lib-main write permission
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: Encountered exception during wait for unpacking trying to acquire file lock for com.facebook.soloader.d (/data/user/0/com.facebook.services/lib-main): 
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: java.io.FileNotFoundException: /data/user/0/com.facebook.services/lib-main/dso_lock: open failed: ENOENT (No such file or directory)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.IoBridge.open(IoBridge.java:574)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at java.io.FileOutputStream.<init>(FileOutputStream.java:259)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at java.io.FileOutputStream.<init>(FileOutputStream.java:208)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.n.<init>(FileLocker.java:36)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.n.a(FileLocker.java:32)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SysUtil.e(SysUtil.java:463)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SysUtil.a(SysUtil.java:448)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.ac.b(UnpackingSoSource.java:401)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.c.l.a(WaitForAsyncInit.java:31)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.c.e.a(CompositeRecoveryStrategy.java:34)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:1055)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:1025)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:1007)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.c(SoLoader.java:921)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.b(SoLoader.java:904)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:870)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.s.a(NativeLoaderToSoLoaderDelegate.java:29)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.a.a.a(NativeLoader.java:52)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.a.a.a(NativeLoader.java:30)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.acra.ACRA.lambda$loadAcraNativeLibrary$0(ACRA.java:646)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.acra.ACRA$$ExternalSyntheticLambda0.run(D8$$SyntheticClass:0)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.Linux.open(Native Method)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.ForwardingOs.open(ForwardingOs.java:568)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.BlockGuardOs.open(BlockGuardOs.java:274)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.ForwardingOs.open(ForwardingOs.java:568)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at android.app.ActivityThread$AndroidOs.open(ActivityThread.java:9782)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.IoBridge.open(IoBridge.java:560)
10-18 09:48:33.049  4649  4742 E fb-UnpackingSoSource: 	... 21 more
10-18 09:48:33.049  4649  4742 E SoLoader: About to load: libacra.so
10-18 09:48:33.049 26522 26645 I id.apps.tachyon: Background young concurrent copying GC freed 4416KB AllocSpace bytes, 7(204KB) LOS objects, 43% free, 5984KB/10MB, paused 244us,230us total 367.664ms
10-18 09:48:33.049 26522 26645 W id.apps.tachyon: Reducing the number of considered missed Gc histogram windows from 335 to 100
10-18 09:48:33.049  4649  4742 E SoLoader: Running a recovery step for libacra.so due to com.facebook.soloader.SoLoaderDSONotFoundError: couldn't find DSO to load: libacra.so
10-18 09:48:33.049  4649  4742 E SoLoader: 	existing SO sources: 
10-18 09:48:33.049  4649  4742 E SoLoader: 		SoSource 0: BackupSoSource[root = /data/data/com.facebook.services/lib-main flags = 1 apks = [ExtractFromZipSoSource[/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk]]]
10-18 09:48:33.049  4649  4742 E SoLoader: 		SoSource 1: ApplicationSoSource[DirectorySoSource[root = /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64 flags = 1]]
10-18 09:48:33.049  4649  4742 E SoLoader: 		SoSource 2: DirectorySoSource[root = /system/lib64 flags = 2]
10-18 09:48:33.049  4649  4742 E SoLoader: 		SoSource 3: DirectorySoSource[root = /vendor/lib64 flags = 2]
10-18 09:48:33.049  4649  4742 E SoLoader: 	Native lib dir: /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64
10-18 09:48:33.049  4649  4742 E SoLoader: Checking /data/app missing libraries.
10-18 09:48:33.052  4649  4742 E SoLoader: No libraries missing from /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64
10-18 09:48:33.052  4649  4742 E SoLoader: Checking /data/data missing libraries.
10-18 09:48:33.052  4649  4742 E SoLoader: No libraries missing from unpacking so paths while recovering /data/data failure
10-18 09:48:33.052  4649  4742 E SoLoader: Waiting on SoSource BackupSoSource
10-18 09:48:33.052  4649  4742 W SysUtil : error removing /data/data/com.facebook.services/lib-main write permission
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: Encountered exception during wait for unpacking trying to acquire file lock for com.facebook.soloader.d (/data/user/0/com.facebook.services/lib-main): 
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: java.io.FileNotFoundException: /data/user/0/com.facebook.services/lib-main/dso_lock: open failed: ENOENT (No such file or directory)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.IoBridge.open(IoBridge.java:574)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at java.io.FileOutputStream.<init>(FileOutputStream.java:259)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at java.io.FileOutputStream.<init>(FileOutputStream.java:208)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.n.<init>(FileLocker.java:36)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.n.a(FileLocker.java:32)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SysUtil.e(SysUtil.java:463)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SysUtil.a(SysUtil.java:448)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.ac.b(UnpackingSoSource.java:401)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.c.l.a(WaitForAsyncInit.java:31)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.c.e.a(CompositeRecoveryStrategy.java:34)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:1055)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:1025)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:1007)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.c(SoLoader.java:921)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.b(SoLoader.java:904)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.SoLoader.a(SoLoader.java:870)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.s.a(NativeLoaderToSoLoaderDelegate.java:29)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.a.a.a(NativeLoader.java:52)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.soloader.a.a.a(NativeLoader.java:30)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.acra.ACRA.lambda$loadAcraNativeLibrary$0(ACRA.java:646)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at com.facebook.acra.ACRA$$ExternalSyntheticLambda0.run(D8$$SyntheticClass:0)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.Linux.open(Native Method)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.ForwardingOs.open(ForwardingOs.java:568)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.BlockGuardOs.open(BlockGuardOs.java:274)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.ForwardingOs.open(ForwardingOs.java:568)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at android.app.ActivityThread$AndroidOs.open(ActivityThread.java:9782)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	at libcore.io.IoBridge.open(IoBridge.java:560)
10-18 09:48:33.052  4649  4742 E fb-UnpackingSoSource: 	... 21 more
10-18 09:48:33.052  4649  4742 E SoLoader: About to load: libacra.so
10-18 09:48:33.053  4649  4742 E SoLoader: Running a recovery step for libacra.so due to com.facebook.soloader.SoLoaderDSONotFoundError: couldn't find DSO to load: libacra.so
10-18 09:48:33.053  4649  4742 E SoLoader: 	existing SO sources: 
10-18 09:48:33.053  4649  4742 E SoLoader: 		SoSource 0: BackupSoSource[root = /data/data/com.facebook.services/lib-main flags = 1 apks = [ExtractFromZipSoSource[/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk]]]
10-18 09:48:33.053  4649  4742 E SoLoader: 		SoSource 1: ApplicationSoSource[DirectorySoSource[root = /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64 flags = 1]]
10-18 09:48:33.053  4649  4742 E SoLoader: 		SoSource 2: DirectorySoSource[root = /system/lib64 flags = 2]
10-18 09:48:33.053  4649  4742 E SoLoader: 		SoSource 3: DirectorySoSource[root = /vendor/lib64 flags = 2]
10-18 09:48:33.053  4649  4742 E SoLoader: 	Native lib dir: /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64
10-18 09:48:33.053  4649  4742 E SoLoader: Failed to recover
10-18 09:48:33.134  4758  4758 I com.makemytrip: Using CollectorTypeCC GC.
10-18 09:48:33.137 15708 19060 I ReactNativeJS: '✅ Proxy response received:', 'OK'
10-18 09:48:33.138 15708 19060 I ReactNativeJS: '✅ [GOOGLE-MAPS] Directions retrieved:', { distance: '10.6 km',
10-18 09:48:33.138 15708 19060 I ReactNativeJS:   duration: '16 mins',
10-18 09:48:33.138 15708 19060 I ReactNativeJS:   distance_km: '10.56',
10-18 09:48:33.138 15708 19060 I ReactNativeJS:   duration_min: '15.5',
10-18 09:48:33.138 15708 19060 I ReactNativeJS:   source: 'Google Directions API' }
10-18 09:48:33.138 15708 19060 I ReactNativeJS: '✅ Got directions from Google API:', { distance: { text: '10.6 km', value: 10556 },
10-18 09:48:33.138 15708 19060 I ReactNativeJS:   duration: { text: '16 mins', value: 930 },
10-18 09:48:33.138 15708 19060 I ReactNativeJS:   polyline: { points: '}}xlA}d`zMn@NZ{@\\cAoAa@^iBHWAQAS?K@MHM`@I`@sEP_DgHJkDJoA?o@CM@GB]A}ASeEmA{Cy@yIkBgB]wBk@sBc@yAa@SIWQy@y@q@s@a@Uq@Yq@S}@OeAS{A]o@Wy@e@s@c@gAo@cC{A_CuAiDiB]O_CeAcCiAiAi@cBeAk@_@aCuAUM_Bm@mC}@mDcAeCy@}As@oBiAMQeAm@u@e@kEkCiAo@mGsCmCqAuBgAqBkAcDsBeCwAiDsBeB_AUCsDyAw@]SOyJyDeAk@}AaAqB_AmCeAwD{AgDyAsAq@kHiDaCmAoE{B_C_AsCeAsA_@s@MwEw@aCg@_C]kC[e@IyCw@{A[a@KgBYiDg@qBOoF{@WG}A[kAO{AEqFQcACwCSwAQwDs@_BQa@Ca@CqCYsAA}APmCn@e@BgBCk@F[CcAByAJuABiAIUEgBk@}Bw@yDoAiC}@oB{@}L_FaG_CmBm@{C{@[?uAa@gIaCuA[eASi@EyCc@cD[eDUgGS]KSCk@OqB{@wBkAq@c@_CwAq@k@a@s@c@iAOSSOk@UwAo@iA_@[Ew@AaCA' } }
10-18 09:48:33.139 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:33.140 15708 19060 I ReactNativeJS: 💰 [HOME] ===== STARTING FARE CALCULATION WITH DEADHEAD =====
10-18 09:48:33.141 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fare for Bagalur trip:', { pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   pickupCoords: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   destinationCoords: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   selectedVehicle: 'sedan',
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:33.140Z',
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   shouldHaveDeadhead: true }
10-18 09:48:33.141 15708 19060 I ReactNativeJS: 💰 [HOME] Calling fareCalculator.calculateFare...
10-18 09:48:33.141 15708 19060 I ReactNativeJS: '💰 [FARE-CALC] Input parameters:', { vehicleType: 'sedan',
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   pickup: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:33.141Z',
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   supabaseUrl: 'SET',
10-18 09:48:33.141 15708 19060 I ReactNativeJS:   supabaseKey: 'SET' }
10-18 09:48:33.142 15708 19060 I ReactNativeJS: 🎯 [FARE-CALC] Using edge function for deadhead calculation...
10-18 09:48:33.142 15708 19060 I ReactNativeJS: '🔍 [FARE-CALC] Environment validation:', { supabaseUrl: 'SET',
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   supabaseKey: 'SET',
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   urlValid: true,
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   keyValid: true }
10-18 09:48:33.142 15708 19060 I ReactNativeJS: '🎯 [FARE-CALC] Edge function URL:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/fare-calculation'
10-18 09:48:33.142 15708 19060 I ReactNativeJS: 📡 [FARE-CALC] Making request to edge function...
10-18 09:48:33.142 15708 19060 I ReactNativeJS: '📡 [FARE-CALC] Request body:', { pickup_latitude: 12.7486583,
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   pickup_longitude: 77.8299917,
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   destination_latitude: 12.8303987,
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   destination_longitude: 77.86623689999999,
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   vehicle_type: 'sedan',
10-18 09:48:33.142 15708 19060 I ReactNativeJS:   booking_type: 'regular' }
10-18 09:48:33.142  4758  4758 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:33.155  4758  4758 E com.makemytrip: BBinder_init Processname  <pre-initialized>  
10-18 09:48:33.155  4758  4758 E com.makemytrip: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:33.175  4758  4758 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:33.175  4758  4758 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:33.175  4758  4758 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:33.186 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:33.186 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:33.196  4758  4758 W com.makemytrip: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:33.199  4758  4758 W com.makemytrip: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:33.203  4758  4758 D nativeloader: Configuring clns-7 for other apk /data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/base.apk:/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.arm64_v8a.apk:/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.xxhdpi.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/lib/arm64:/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/base.apk!/lib/arm64-v8a:/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.arm64_v8a.apk!/lib/arm64-v8a:/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.xxhdpi.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.makemytrip
10-18 09:48:33.205 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:33.205 31924  1912 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:33.226   752  3409 I ogle.android.gm: Waiting for a blocking GC AddRemoveAppImageSpace
10-18 09:48:33.249 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:33.249 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:33.254  4758  4758 V GraphicsEnvironment: Currently set values for:
10-18 09:48:33.254  4758  4758 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:33.254  4758  4758 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:33.255  4758  4758 V GraphicsEnvironment: com.makemytrip is not listed in per-application setting
10-18 09:48:33.255  4758  4758 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:33.343  4649  4649 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-18 09:48:33.344  4649  4649 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-18 09:48:33.344  4649  4649 I M-ProMotion: M-ProMotion is disabled
10-18 09:48:33.366  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:33.366  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:33.367  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:33.368   752  3409 I ogle.android.gm: WaitForGcToComplete blocked AddRemoveAppImageSpace on CollectorTransition for 142.783ms
10-18 09:48:33.410 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:33.413 26036  1250 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205401330]
10-18 09:48:33.414 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:33.414 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 4ms
10-18 09:48:33.445   752  3409 D nativeloader: Configuring clns-10 for other apk /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:33.508  4758  4758 I MultiDex: VM with version 2.1.0 has multidex support
10-18 09:48:33.508  4758  4758 I MultiDex: Installing application
10-18 09:48:33.508  4758  4758 I MultiDex: VM has multidex support, MultiDex support library is disabled.
10-18 09:48:33.527  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:33.527  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:33.552 26036 30348 D BluetoothAdapter: 132558518: getState(). Returning OFF
10-18 09:48:33.572  4758  4758 D SessionsDependencies: Dependency to CRASHLYTICS added.
10-18 09:48:33.576  4758  4758 I FirebaseApp: Device unlocked: initializing all Firebase APIs for app [DEFAULT]
10-18 09:48:33.595  4758  4758 D FirebaseSessions: Initializing Firebase Sessions SDK.
10-18 09:48:33.604  4758  4758 I FirebaseCrashlytics: Initializing Firebase Crashlytics 19.0.3 for com.makemytrip
10-18 09:48:33.604 26036  1209 I GmsCoreXrpcWrapper: (REDACTED) Returning a channel provider with trafficStatsTag=%d trafficStatsUid=%d
10-18 09:48:33.614 26036  1209 I GmsCoreVoilaTileGrpc: (REDACTED) xrpc compression enabled: %s
10-18 09:48:33.615  4758  4758 D SessionsDependencies: Subscriber CRASHLYTICS registered.
10-18 09:48:33.624  4758  4886 W com.makemytrip: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:33.627  4758  4886 I DynamiteModule: Considering local module com.google.android.gms.measurement.dynamite:117 and remote module com.google.android.gms.measurement.dynamite:162
10-18 09:48:33.627  4758  4886 I DynamiteModule: Selected remote version of com.google.android.gms.measurement.dynamite, version >= 162
10-18 09:48:33.627  4758  4886 V DynamiteModule: Dynamite loader version >= 2, using loadModule2NoCrashUtils
10-18 09:48:33.633  4758  4886 W System  : ClassLoader referenced unknown path: 
10-18 09:48:33.633  4758  4886 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:33.642   752  4893 E GoogleApiManager: Failed to get service from broker. 
10-18 09:48:33.642   752  4893 E GoogleApiManager: java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3256)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Parcel.createException(Parcel.java:3240)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3223)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3165)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):36)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):143)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:33.642   752  4893 E GoogleApiManager: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:33.642  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:33.642  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:33.644  4758  4886 W com.makemytrip: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=3151529543 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/base.apk*3151529543]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:33.652   752  4884 W FlagRegistrar: Failed to register com.google.android.gms.providerinstaller#com.google.android.gm
10-18 09:48:33.652   752  4884 W FlagRegistrar: frum: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at fruo.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at govh.d(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at govj.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):130)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at goxq.execute(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at govr.f(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at govr.m(:com.google.android.gms@253931035@25.39.31 (260400-813878953):99)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at govr.r(:com.google.android.gms@253931035@25.39.31 (260400-813878953):17)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at fjzu.hy(:com.google.android.gms@253931035@25.39.31 (260400-813878953):35)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at exqb.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at goxq.execute(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at exqc.b(:com.google.android.gms@253931035@25.39.31 (260400-813878953):18)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at exqr.b(:com.google.android.gms@253931035@25.39.31 (260400-813878953):36)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at exqt.d(:com.google.android.gms@253931035@25.39.31 (260400-813878953):25)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at bami.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):9)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at baox.q(:com.google.android.gms@253931035@25.39.31 (260400-813878953):48)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at baox.d(:com.google.android.gms@253931035@25.39.31 (260400-813878953):10)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at baox.g(:com.google.android.gms@253931035@25.39.31 (260400-813878953):192)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at baox.onConnectionFailed(:com.google.android.gms@253931035@25.39.31 (260400-813878953):2)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):70)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:33.652   752  4884 W FlagRegistrar: Caused by: bakp: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at bbhp.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):15)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at baml.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	at bami.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:33.652   752  4884 W FlagRegistrar: 	... 12 more
10-18 09:48:33.653 26036  1250 I FusedLocation: (REDACTED) getLastLocation() noteOp denied for %s
10-18 09:48:33.674  4758  4758 I FirebaseInitProvider: FirebaseApp initialization successful
10-18 09:48:33.683  4758  4758 W com.facebook.t: Please set a value for AutoLogAppEventsEnabled. Set the flag to TRUE if you want to collect app install, app launch and in-app purchase events automatically. To request user consent before collecting data, set the flag value to FALSE, then change to TRUE once user consent is received. Learn more: https://developers.facebook.com/docs/app-events/getting-started-app-events-android#disable-auto-events.
10-18 09:48:33.683  4758  4758 W com.facebook.t: You haven't set a value for AdvertiserIDCollectionEnabled. Set the flag to TRUE if you want to collect Advertiser ID for better advertising and analytics results. To request user consent before collecting data, set the flag value to FALSE, then change to TRUE once user consent is received. Learn more: https://developers.facebook.com/docs/app-events/getting-started-app-events-android#disable-auto-events.
10-18 09:48:33.693  4758  4982 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:33.698 26036 31675 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:33.699  4758  4982 D nativeloader: Configuring clns-9 for other apk /system/framework/com.android.media.remotedisplay.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:33.699  4758  4982 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:33.705  4758  4982 D nativeloader: Configuring clns-10 for other apk /system/framework/com.android.location.provider.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:33.706  4758  4982 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:33.706  4758  4982 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:33.706  4758  4982 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:33.713  4758  4758 D Sentry  : io.sentry.auto-init read: false
10-18 09:48:33.713  4758  4758 I Sentry  : Retrieving auto-init from AndroidManifest.xml
10-18 09:48:33.720 26036 30348 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.makemytrip
10-18 09:48:33.730  4758  4758 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-18 09:48:33.733 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.auth.service.START pkg=com.google.android.gms }
10-18 09:48:33.733 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.auth.service.START pkg=com.google.android.gms }
10-18 09:48:33.761  4758  4982 D nativeloader: Configuring clns-11 for other apk /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:33.784   752  4814 D CompatChangeReporter: Compat change id reported: 279646685; UID 10212; state: ENABLED
10-18 09:48:33.811  3919  3919 I GH.CAR  : onDestroy
10-18 09:48:33.813  3919  3919 I GH.CAR  : tearDown()
10-18 09:48:33.814  4758  4914 E com.makemytrip: No package ID 6a found for resource ID 0x6a0b000f.
10-18 09:48:33.814  3919  3919 I GH.CarService: tearDown()
10-18 09:48:33.814  3919  3919 I GH.DelegateMngCarSvc: tearDown()
10-18 09:48:33.816  4758  4914 I FA      : App measurement initialized, version: 140000
10-18 09:48:33.816  4758  4914 I FA      : To enable debug logging run: adb shell setprop log.tag.FA VERBOSE
10-18 09:48:33.816  4758  4914 I FA      : To enable faster debug mode event logging run:
10-18 09:48:33.816  4758  4914 I FA      :   adb shell setprop debug.firebase.analytics.app com.makemytrip
10-18 09:48:33.845  4649  4649 E SoLoader: Loading notifgateway-jni on the main thread
10-18 09:48:33.845  4649  4649 E SoLoader: About to load: libnotifgateway.so
10-18 09:48:33.846  4649  4649 W SoLoader[NativeDeps]: Falling back to custom ELF parsing when loading libnotifgateway.so, this can be slow
10-18 09:48:33.849  9685  4583 I .nbu.paisa.user: IncrementDisableThreadFlip blocked for 69.375ms
10-18 09:48:33.858   752  4814 D skia    : SkJpegCodec::onGetPixels + (564, 562)
10-18 09:48:33.865  4649  4649 D nativeloader: Load /data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/lib/arm64/libnotifgateway.so using class loader ns clns-7 (caller=/data/app/~~VHQjbIO35a6MUjqvibAUag==/com.facebook.services-_6E0mQC-IxNMBPMl3MiiBg==/base.apk): ok
10-18 09:48:33.865  4649  4649 E SoLoader: Loaded: libnotifgateway.so
10-18 09:48:33.865  4649  4649 E SoLoader: About to invoke JNI_OnLoad for merged library notifgateway-jni, which was merged into libnotifgateway.so
10-18 09:48:33.866  4649  4649 E SoLoader: Loading simplejni on the main thread
10-18 09:48:33.866  4649  4649 E SoLoader: About to invoke JNI_OnLoad for merged library simplejni, which was merged into libnotifgateway.so
10-18 09:48:33.866  4649  4649 E SoLoader: Loading simplejni on the main thread
10-18 09:48:33.882  4649  4649 I DGW     : I[startConnection:407] ConnectivityManager start connection.
10-18 09:48:33.890  4649  4857 I DGW     : I[sendRequest:85] StreamGroupConnectivityAwareNetworkLayer[notifgateway] buffering request with connection state: 0
10-18 09:48:33.927 18428 18428 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:33.958  9685 15905 I .nbu.paisa.user: IncrementDisableThreadFlip blocked for 180.005ms
10-18 09:48:33.994  4758  4898 D BaseEventValidation: registering Validation
10-18 09:48:33.995  4758  4898 D BaseEventValidation: registering Validation
10-18 09:48:33.995  4758  4898 D BaseEventValidation: registering Validation
10-18 09:48:34.029 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.fido.fido2.regular.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:34.029 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.fido.fido2.regular.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:34.042  4758  5085 I CYFMonitor: Initializing Akamai BMP SDK Version 3.3.5
10-18 09:48:34.048  4758  5097 D SQLiteQueryBuilder: SELECT cached_response_value, cached_response_code, cached_response_tag, cached_response_encoding, cached_response_expiry_time FROM cache_table WHERE (cached_request_key = ?)
10-18 09:48:34.049  4758  4992 D SQLiteQueryBuilder: SELECT cached_response_value, cached_response_code, cached_response_tag, cached_response_encoding, cached_response_expiry_time FROM cache_table WHERE (cached_request_key = ?)
10-18 09:48:34.060  4758  5085 D nativeloader: Load /data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.arm64_v8a.apk!/lib/arm64-v8a/libakamaibmp.so using class loader ns clns-7 (caller=/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/base.apk!classes4.dex): ok
10-18 09:48:34.062 26036  3109 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:34.076 26106  5105 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:34.081 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.ocr.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:34.081 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.ocr.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:34.096  4758  5085 E BMP:CYFManager: AkamaiBMP SDK is not initialized
10-18 09:48:34.100 26106  5105 I Camera-JNI: number_of_cameras:2
10-18 09:48:34.100 26106  5105 D VivoJavaJsonManager: failed to find appName:com.google.android.gms from config key:mProtakePackages
10-18 09:48:34.104 26106  5105 I Camera-JNI: number_of_cameras:2
10-18 09:48:34.104 26106  5105 D VivoJavaJsonManager: failed to find appName:com.google.android.gms from config key:mProtakePackages
10-18 09:48:34.109  5720 23763 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:34.113  5720 23763 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:34.114  4758  4898 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : requestUpdateInfo(com.makemytrip)
10-18 09:48:34.114  5720 23763 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/LgmVU+-MTV-poFEWl2o38w29sl6mh3CkZJYz7RT7vl0=.chk.tmp' ))
10-18 09:48:34.126 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.chimera.container.moduleinstall.ModuleInstallService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:34.127 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.chimera.container.moduleinstall.ModuleInstallService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:34.152 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.ocr.service.internal.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-18 09:48:34.152 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.ocr.service.internal.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-18 09:48:34.184  4758  4898 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : requestUpdateInfo(com.makemytrip)
10-18 09:48:34.184  4758  5113 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : Initiate binding to the service.
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: Could not get APN after (but including) LollipopMr1: 
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: java.lang.SecurityException: No permission to access APN settings
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3256)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.os.Parcel.createException(Parcel.java:3240)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.os.Parcel.readException(Parcel.java:3223)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:203)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:155)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.content.ContentProviderProxy.query(ContentProviderNative.java:498)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1250)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1182)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1138)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at gfrb.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):113)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at geec.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):338)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at gecm.jF(:com.google.android.gms@253931035@25.39.31 (260400-813878953):44)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at iexk.w(:com.google.android.gms@253931035@25.39.31 (260400-813878953):11)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at ifij.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):112)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:34.215 26106  5093 E RequestContextBuilder: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:34.229  4758  4758 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-18 09:48:34.229  4758  4758 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-18 09:48:34.230  4758  4758 I M-ProMotion: M-ProMotion is disabled
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: Could not get APN after (but including) LollipopMr1: 
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: java.lang.SecurityException: No permission to access APN settings
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3256)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.os.Parcel.createException(Parcel.java:3240)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.os.Parcel.readException(Parcel.java:3223)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:203)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:155)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.content.ContentProviderProxy.query(ContentProviderNative.java:498)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1250)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1182)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1138)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at gfrb.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):113)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at geec.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):338)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at gecm.jF(:com.google.android.gms@253931035@25.39.31 (260400-813878953):44)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at iexk.w(:com.google.android.gms@253931035@25.39.31 (260400-813878953):11)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at ifij.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):112)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:34.232 26106  5093 E RequestContextBuilder: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:34.234  4758  4758 I Choreographer: Skipped 30 frames!  The application may be doing too much work on its main thread.
10-18 09:48:34.257  4758  4758 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : ServiceConnectionImpl.onServiceConnected(ComponentInfo{com.android.vending/com.google.android.finsky.installservice.DevTriggeredUpdateService})
10-18 09:48:34.266 26106 27420 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:34.267 15708 19060 I ReactNativeJS: '📡 [FARE-CALC] Edge function response status:', 200
10-18 09:48:34.268 15708 19060 I ReactNativeJS: '📊 [FARE-CALC] Edge function raw result for Bagalur:', { success: true,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:   fareBreakdown: 
10-18 09:48:34.268 15708 19060 I ReactNativeJS:    { baseFare: 150,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      distanceFare: 131,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      timeFare: 0,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      surgeFare: 0,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      platformFee: 0,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      deadheadCharge: 110,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      totalFare: 391,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      distance: 10.56,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      duration: 16,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      deadheadDistance: 11.03 },
10-18 09:48:34.268 15708 19060 I ReactNativeJS:   config: 
10-18 09:48:34.268 15708 19060 I ReactNativeJS:    { vehicle_type: 'sedan',
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      base_fare: 150,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      per_km_rate: 20,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      per_minute_rate: 0,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      minimum_fare: 0,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      surge_multiplier: 1,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      platform_fee_percent: 0 },
10-18 09:48:34.268 15708 19060 I ReactNativeJS:   deadheadInfo: 
10-18 09:48:34.268 15708 19060 I ReactNativeJS:    { applied: true,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      reason: 'Between Inner and Outer Ring',
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      deadheadDistance: 11.025914915977474,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      deadheadCharge: 110.25914915977474,
10-18 09:48:34.268 15708 19060 I ReactNativeJS:      zoneStatus: 'Between Inner and Outer Ring' } }
10-18 09:48:34.268 15708 19060 I ReactNativeJS: ✅ [FARE-CALC] ===== EDGE FUNCTION SUCCESS WITH DEADHEAD FOR BAGALUR =====
10-18 09:48:34.273 15708 19060 I ReactNativeJS: '✅ [FARE-CALC] Complete fare breakdown:', { baseFare: '₹150',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   distanceFare: '₹131',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   timeFare: '₹0',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   surgeFare: '₹0',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   platformFee: '₹0',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   totalFare: '₹391',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   deadheadInfo: 
10-18 09:48:34.273 15708 19060 I ReactNativeJS:    { applied: true,
10-18 09:48:34.273 15708 19060 I ReactNativeJS:      reason: 'Between Inner and Outer Ring',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:      deadheadDistance: 11.025914915977474,
10-18 09:48:34.273 15708 19060 I ReactNativeJS:      deadheadCharge: 110.25914915977474,
10-18 09:48:34.273 15708 19060 I ReactNativeJS:      zoneStatus: 'Between Inner and Outer Ring' },
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   formula: '₹150 + ₹131 + ₹0 + ₹0 + ₹0 + ₹110 = ₹391',
10-18 09:48:34.273 15708 19060 I ReactNativeJS:   bagalurSpecific: 'This should show deadhead charges for Bagalur destination' }
10-18 09:48:34.274 15708 19060 I ReactNativeJS: '✅ [FARE-CALC] Deadhead analysis for Bagalur:', { destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   deadheadApplied: true,
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   deadheadReason: 'Between Inner and Outer Ring',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   zoneStatus: 'Between Inner and Outer Ring',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   expectedForBagalur: 'Should be between Inner and Outer Ring with deadhead charge' }
10-18 09:48:34.274 15708 19060 I ReactNativeJS: 💰 [HOME] ===== FARE CALCULATION RESULT =====
10-18 09:48:34.274 15708 19060 I ReactNativeJS: '✅ [HOME] Fare breakdown received:', { baseFare: '₹150',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   distanceFare: '₹131',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   timeFare: '₹0',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   surgeFare: '₹0',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   platformFee: '₹0',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   totalFare: '₹391',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   distance: '10.56km',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   duration: '16min',
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   hasDeadheadCharge: true,
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   isBagalurTrip: true,
10-18 09:48:34.274 15708 19060 I ReactNativeJS:   expectedDeadhead: 'YES' }
10-18 09:48:34.275 15708 19060 I ReactNativeJS: '🎯 [HOME] ✅ DEADHEAD CHARGE APPLIED:', { destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:34.275 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:34.275 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:34.275 15708 19060 I ReactNativeJS:   reason: 'Destination is between Inner Ring and Outer Ring' }
10-18 09:48:34.275 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fares for all vehicle types based on', 'sedan', 'calculation'
10-18 09:48:34.275 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback (estimated): ₹381 (ratio-based from sedan)
10-18 09:48:34.275 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback_ac (estimated): ₹451 (ratio-based from sedan)
10-18 09:48:34.275 15708 19060 I ReactNativeJS: 💰 [HOME] sedan (selected): ₹391 (exact calculation)
10-18 09:48:34.275 15708 19060 I ReactNativeJS: 💰 [HOME] sedan_ac (estimated): ₹461 (ratio-based from sedan)
10-18 09:48:34.275 15708 19060 I ReactNativeJS: 💰 [HOME] suv (estimated): ₹762 (ratio-based from sedan)
10-18 09:48:34.275 15708 19060 I ReactNativeJS: 💰 [HOME] suv_ac (estimated): ₹1922 (ratio-based from sedan)
10-18 09:48:34.275 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:34.275 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.275 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.275 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.279 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:34.279 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.279 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.279 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.280 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:34.280 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:34.280 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.280 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.280 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:34.280 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.280 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.280 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.281 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:34.281 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.281 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.281 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.282 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:34.282 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.282 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.282 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.294  4758  5113 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : Already connected to the service.
10-18 09:48:34.294  4758  5113 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : Waiting to bind to the service.
10-18 09:48:34.295  4758  5113 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : linkToDeath
10-18 09:48:34.303 15708 19060 I ReactNativeJS: '💰 [HOME] All vehicle fares calculated:', { hatchback: 381,
10-18 09:48:34.303 15708 19060 I ReactNativeJS:   hatchback_ac: 451,
10-18 09:48:34.303 15708 19060 I ReactNativeJS:   sedan: 391,
10-18 09:48:34.303 15708 19060 I ReactNativeJS:   sedan_ac: 461,
10-18 09:48:34.303 15708 19060 I ReactNativeJS:   suv: 762,
10-18 09:48:34.303 15708 19060 I ReactNativeJS:   suv_ac: 1922 }
10-18 09:48:34.304 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:34.304 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.304 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.304 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.305 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:34.305 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.305 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.305 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.306 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:34.306 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:34.306 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.306 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.307 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:34.307 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.307 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.307 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.308 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:34.308 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.308 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.308 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.310 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:34.310 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.310 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.310 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.330 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:34.330 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.330 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.330 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.332 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:34.332 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.332 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.332 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.333 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:34.333 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:34.333 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.333 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.334 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:34.334 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.334 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.334 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.336 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:34.336 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.336 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.336 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.337 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:34.337 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.337 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.337 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.338  5720 18797 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:34.342  5720 18797 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:34.342  5720 18797 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/LgmVU+-MTV-poFEWl2o38w29sl6mh3CkZJYz7RT7vl0=.tmp.chck' ))
10-18 09:48:34.368  5751 10865 I IPCThreadState: oneway function results for code 2 on binder at 0xb4000077d005ec60 will be dropped but finished with status UNKNOWN_TRANSACTION
10-18 09:48:34.387  4758  4992 I FirebaseApp: Device unlocked: initializing all Firebase APIs for app storage-db-firebase
10-18 09:48:34.425   752  4814 D skia    : SkJpegCodec::onGetPixels -
10-18 09:48:34.455 26036 26036 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.clearcut.sampler.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentDirectBootAwareApiService }
10-18 09:48:34.455 26036 26036 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.clearcut.sampler.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentDirectBootAwareApiService }
10-18 09:48:34.474 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:34.479 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:34.479 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:34.480 26036  1251 I Geofencer: (REDACTED) geofence trigger to %s blocked - initial event filter not matched
10-18 09:48:34.480 26036  1251 I Geofencer: (REDACTED) geofence trigger to %s blocked - initial event filter not matched
10-18 09:48:34.480 26036  1251 I Geofencer: (REDACTED) geofence trigger to %s blocked - initial event filter not matched
10-18 09:48:34.481 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:34.481 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:34.481 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:34.490 18428 18428 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:34.493 15708 19060 I ReactNativeJS: '📡 [FARE-CALC] Edge function response status:', 200
10-18 09:48:34.495 15708 19060 I ReactNativeJS: '📊 [FARE-CALC] Edge function raw result for Bagalur:', { success: true,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   fareBreakdown: 
10-18 09:48:34.495 15708 19060 I ReactNativeJS:    { baseFare: 150,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      distanceFare: 131,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      timeFare: 0,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      surgeFare: 0,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      platformFee: 0,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      deadheadCharge: 110,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      totalFare: 391,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      distance: 10.56,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      duration: 16,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      deadheadDistance: 11.03 },
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   config: 
10-18 09:48:34.495 15708 19060 I ReactNativeJS:    { vehicle_type: 'sedan',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      base_fare: 150,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      per_km_rate: 20,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      per_minute_rate: 0,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      minimum_fare: 0,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      surge_multiplier: 1,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      platform_fee_percent: 0 },
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadInfo: 
10-18 09:48:34.495 15708 19060 I ReactNativeJS:    { applied: true,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      reason: 'Between Inner and Outer Ring',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      deadheadDistance: 11.025914915977474,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      deadheadCharge: 110.25914915977474,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      zoneStatus: 'Between Inner and Outer Ring' } }
10-18 09:48:34.495 15708 19060 I ReactNativeJS: ✅ [FARE-CALC] ===== EDGE FUNCTION SUCCESS WITH DEADHEAD FOR BAGALUR =====
10-18 09:48:34.495 15708 19060 I ReactNativeJS: '✅ [FARE-CALC] Complete fare breakdown:', { baseFare: '₹150',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   distanceFare: '₹131',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   timeFare: '₹0',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   surgeFare: '₹0',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   platformFee: '₹0',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   totalFare: '₹391',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadInfo: 
10-18 09:48:34.495 15708 19060 I ReactNativeJS:    { applied: true,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      reason: 'Between Inner and Outer Ring',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      deadheadDistance: 11.025914915977474,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      deadheadCharge: 110.25914915977474,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:      zoneStatus: 'Between Inner and Outer Ring' },
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   formula: '₹150 + ₹131 + ₹0 + ₹0 + ₹0 + ₹110 = ₹391',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   bagalurSpecific: 'This should show deadhead charges for Bagalur destination' }
10-18 09:48:34.495 15708 19060 I ReactNativeJS: '✅ [FARE-CALC] Deadhead analysis for Bagalur:', { destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadApplied: true,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadReason: 'Between Inner and Outer Ring',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   zoneStatus: 'Between Inner and Outer Ring',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   expectedForBagalur: 'Should be between Inner and Outer Ring with deadhead charge' }
10-18 09:48:34.495 18428 18428 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:34.495 15708 19060 I ReactNativeJS: 💰 [HOME] ===== FARE CALCULATION RESULT =====
10-18 09:48:34.495 15708 19060 I ReactNativeJS: '✅ [HOME] Fare breakdown received:', { baseFare: '₹150',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   distanceFare: '₹131',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   timeFare: '₹0',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   surgeFare: '₹0',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   platformFee: '₹0',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   totalFare: '₹391',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   distance: '10.56km',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   duration: '16min',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   hasDeadheadCharge: true,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   isBagalurTrip: true,
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   expectedDeadhead: 'YES' }
10-18 09:48:34.495 15708 19060 I ReactNativeJS: '🎯 [HOME] ✅ DEADHEAD CHARGE APPLIED:', { destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:34.495 15708 19060 I ReactNativeJS:   reason: 'Destination is between Inner Ring and Outer Ring' }
10-18 09:48:34.496 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fares for all vehicle types based on', 'sedan', 'calculation'
10-18 09:48:34.496 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback (estimated): ₹381 (ratio-based from sedan)
10-18 09:48:34.496 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback_ac (estimated): ₹451 (ratio-based from sedan)
10-18 09:48:34.496 15708 19060 I ReactNativeJS: 💰 [HOME] sedan (selected): ₹391 (exact calculation)
10-18 09:48:34.496 15708 19060 I ReactNativeJS: 💰 [HOME] sedan_ac (estimated): ₹461 (ratio-based from sedan)
10-18 09:48:34.496 15708 19060 I ReactNativeJS: 💰 [HOME] suv (estimated): ₹762 (ratio-based from sedan)
10-18 09:48:34.496 15708 19060 I ReactNativeJS: 💰 [HOME] suv_ac (estimated): ₹1922 (ratio-based from sedan)
10-18 09:48:34.496 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:34.496 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.496 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.496 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.498 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:34.498 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.498 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.498 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.499 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:34.499 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:34.499 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.499 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.500 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:34.500 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.500 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.500 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.501 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:34.501 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.501 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.501 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.505 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:34.505 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.505 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.505 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.506 18428 18428 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:34.516 18428 19185 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760761108890,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:     mocked: false,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:     coords: 
10-18 09:48:34.516 18428 19185 I ReactNativeJS:      { altitude: 762.3,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        heading: 255,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        altitudeAccuracy: 33.20000076293945,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        latitude: 12.7486967,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        speed: 0.3608202636241913,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        longitude: 77.8298883,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        accuracy: 9.050000190734863 } },
10-18 09:48:34.516 18428 19185 I ReactNativeJS:   { timestamp: 1760761114428,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:     mocked: false,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:     coords: 
10-18 09:48:34.516 18428 19185 I ReactNativeJS:      { altitude: 777.5999999999999,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        heading: 355,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        altitudeAccuracy: 43.099998474121094,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        latitude: 12.7487417,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        speed: 0.2563316524028778,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        longitude: 77.8299567,
10-18 09:48:34.516 18428 19185 I ReactNativeJS:        accuracy: 4.599999904632568 } } ]
10-18 09:48:34.527 15708 19060 I ReactNativeJS: '💰 [HOME] All vehicle fares calculated:', { hatchback: 381,
10-18 09:48:34.527 15708 19060 I ReactNativeJS:   hatchback_ac: 451,
10-18 09:48:34.527 15708 19060 I ReactNativeJS:   sedan: 391,
10-18 09:48:34.527 15708 19060 I ReactNativeJS:   sedan_ac: 461,
10-18 09:48:34.527 15708 19060 I ReactNativeJS:   suv: 762,
10-18 09:48:34.527 15708 19060 I ReactNativeJS:   suv_ac: 1922 }
10-18 09:48:34.528 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:34.528 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.528 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.528 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.529 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:34.529 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.529 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.529 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.531 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:34.531 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:34.531 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.531 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.532 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:34.532 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.532 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.532 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.533 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:34.533 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.533 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.533 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.534 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:34.534 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.534 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.534 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.552 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:34.552 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.552 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.552 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.554 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:34.554 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.554 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.554 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.555 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:34.555 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:34.555 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.555 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.556 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:34.556 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.556 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.556 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.557 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:34.557 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.557 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.557 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.558 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:34.558 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:34.558 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:34.558 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:34.562 32656  5158 I Finsky  : [42556] Created new item store.
10-18 09:48:34.597  4758  4908 D SessionConfigFetcher: Fetching settings from server.
10-18 09:48:34.602 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:34.616 26036 26669 I WifiScanner: onFullResults
10-18 09:48:34.616 26036 26082 I WifiScanner: onFullResults
10-18 09:48:34.619 26036 26892 I WifiScanner: onFullResults
10-18 09:48:34.683  4758  5146 W Ads     : Failed to instantiate ClientApi class.
10-18 09:48:34.684  4758  5146 W DynamiteModule: Local module descriptor class for com.google.android.gms.ads.dynamite not found.
10-18 09:48:34.736 30791  4703 I cn_CronetUrlRequestContext: destroyNativeStreamLocked android.net.connectivity.org.chromium.net.impl.CronetBidirectionalStream@740d520
10-18 09:48:34.739 26036 31675 E ieha    : *~*~*~ Previous channel {0} was garbage collected without being shut down! ~*~*~*
10-18 09:48:34.739 26036 31675 E ieha    :     Make sure to call shutdown()/shutdownNow()
10-18 09:48:34.739 26036 31675 E ieha    : java.lang.RuntimeException: ManagedChannel allocation site
10-18 09:48:34.739 26036 31675 E ieha    : 	at iegz.<init>(:com.google.android.gms@253931035@25.39.31 (260400-813878953):21)
10-18 09:48:34.739 26036 31675 E ieha    : 	at ieha.<init>(:com.google.android.gms@253931035@25.39.31 (260400-813878953):10)
10-18 09:48:34.739 26036 31675 E ieha    : 	at iegy.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):250)
10-18 09:48:34.739 26036 31675 E ieha    : 	at idrg.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:34.739 26036 31675 E ieha    : 	at cnny.h(:com.google.android.gms@253931035@25.39.31 (260400-813878953):150)
10-18 09:48:34.739 26036 31675 E ieha    : 	at gshn.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):158)
10-18 09:48:34.739 26036 31675 E ieha    : 	at ggnb.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:34.739 26036 31675 E ieha    : 	at gpab.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:34.739 26036 31675 E ieha    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:34.739 26036 31675 E ieha    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:34.739 26036 31675 E ieha    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:34.739 26036 31675 E ieha    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:34.739 26036 31675 E ieha    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:34.739 26036 31675 E ieha    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:34.739 26036 31675 E ieha    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:34.739 26036 31675 E ieha    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:34.806 30791 30864 W bntd    : (REDACTED) Deprecated channel: "%s" with group "%s" and title "%s"
10-18 09:48:34.806 30791 30864 W bntd    : (REDACTED) Deprecated channel: "%s" with group "%s" and title "%s"
10-18 09:48:34.810 27276 27286 W earchbox:search: Reducing the number of considered missed Gc histogram windows from 124 to 100
10-18 09:48:34.825 26036 26047 I .gms.persistent: Background young concurrent copying GC freed 17MB AllocSpace bytes, 7(904KB) LOS objects, 34% free, 26MB/40MB, paused 20.055ms,3.052ms total 772.182ms
10-18 09:48:34.930  4758  5146 I DynamiteModule: Considering local module com.google.android.gms.ads.dynamite:0 and remote module com.google.android.gms.ads.dynamite:253405700
10-18 09:48:34.931  4758  5146 I DynamiteModule: Selected remote version of com.google.android.gms.ads.dynamite, version >= 253405700
10-18 09:48:34.950   752  3409 D nativeloader: Load /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a/libconscrypt_gmscore_jni.so using class loader ns clns-10 (caller=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk): ok
10-18 09:48:34.965  4758  4888 D SessionConfigFetcher: Fetched settings: {"settings_version":3,"cache_duration":189854,"features":{"collect_logged_exceptions":true,"collect_reports":true,"collect_analytics":false,"prompt_enabled":false,"push_enabled":false,"firebase_crashlytics_enabled":false,"collect_anrs":true,"collect_metric_kit":false,"collect_build_ids":true},"app":{"status":"activated","update_required":false,"report_upload_variant":2,"native_report_upload_variant":2},"fabric":{"org_id":"537af22bcb2e0506d50000dd","bundle_id":"com.makemytrip"},"on_demand_upload_rate_per_minute":10,"on_demand_backoff_base":1.2,"on_demand_backoff_step_duration_seconds":60,"app_quality":{"sessions_enabled":true,"sampling_rate":1,"session_timeout_seconds":1800},"on_demand_thread_recording_suspension_enabled":true}
10-18 09:48:34.995 26036  5154 D BluetoothAdapter: 132558518: getState(). Returning OFF
10-18 09:48:35.003  4758  5146 D DynamitePackage: Instantiated singleton DynamitePackage.
10-18 09:48:35.004  4758  5146 D DynamitePackage: Instantiating com.google.android.gms.ads.ChimeraMobileAdsSettingManagerCreatorImpl
10-18 09:48:35.018 18428 19185 I ReactNativeJS: 📤 Attempting to send background location...
10-18 09:48:35.018 18428 19185 E ReactNativeJS: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service
10-18 09:48:35.025 18428 19185 I ReactNativeJS: ⚠️ Skipping background location update - edge function not available
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: console.error: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service, js engine: hermes, stack:
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: _construct@1:117842
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: Wrapper@1:117496
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: _callSuper@1:115478
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: SyntheticError@1:116983
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: ?anon_0_@1:1972321
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: _next@1:573529
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: anonymous@1:136226
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: _callTimer@1:135225
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: anonymous@1:100174
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: __guard@1:100912
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: flushedQueue@1:100085
10-18 09:48:35.033 18428 19186 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-18 09:48:35.033 18428 19173 I TaskService: Finished task 'background-location-task' with eventId 'c8a54809-ca96-42fb-9b2f-42122d9712f3'.
10-18 09:48:35.117 28626 28780 W GnpSdk  : Job finished with permanent failure. Job ID: 'GNP_SDK_JOB::no_account::15', key: 'GNP_REGISTRATION'
10-18 09:48:35.117 28626 28780 W GnpSdk  : mvi: HTTP Error Code: 403
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at mvh.b(PG:23)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at naz.f(PG:391)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at naw.b(PG:19)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at uvu.s(PG:12)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at vbq.run(PG:107)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at pew.run(PG:204)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at pew.run(PG:185)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at lph.run(PG:5)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at lbp.run(PG:272)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:35.117 28626 28780 W GnpSdk  : 	at lpy.run(PG:61)
10-18 09:48:35.134 15708 15708 I ScrollIdentify: on fling
10-18 09:48:35.144   752  3409 V NativeCrypto: Registering com/google/android/gms/org/conscrypt/NativeCrypto's 319 native methods...
10-18 09:48:35.168  5283  5283 I ers.customerapp: Using CollectorTypeCC GC.
10-18 09:48:35.173  5283  5283 E ers.customerapp: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:35.177  5283  5283 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:35.187  5283  5283 E ers.customerapp: BBinder_init Processname  <pre-initialized>  
10-18 09:48:35.187  5283  5283 E ers.customerapp: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:35.214  5283  5283 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:35.237 26036 26460 I cn_CronetUrlRequestContext: destroyNativeStreamLocked org.chromium.net.impl.CronetBidirectionalStream@537e974
10-18 09:48:35.251  5283  5283 W ers.customerapp: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:35.258  5283  5283 W ers.customerapp: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:35.258  4758  4892 I FirebaseCrashlytics: Saved version control info
10-18 09:48:35.261  5283  5283 D nativeloader: Configuring clns-7 for other apk /data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/base.apk:/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/split_config.arm64_v8a.apk:/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/split_config.xxhdpi.apk. target_sdk_version=35, uses_libraries=, library_path=/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/lib/arm64:/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/base.apk!/lib/arm64-v8a:/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/split_config.arm64_v8a.apk!/lib/arm64-v8a:/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/split_config.xxhdpi.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.grofers.customerapp
10-18 09:48:35.270  5283  5283 D CompatChangeReporter: Compat change id reported: 202956589; UID 10304; state: ENABLED
10-18 09:48:35.272 26522 26645 I id.apps.tachyon: Background concurrent copying GC freed 5303KB AllocSpace bytes, 0(0B) LOS objects, 49% free, 6252KB/12MB, paused 7.496ms,148us total 1.122s
10-18 09:48:35.298  5283  5283 V GraphicsEnvironment: Currently set values for:
10-18 09:48:35.298  5283  5283 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:35.298  5283  5283 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:35.298  5283  5283 V GraphicsEnvironment: com.grofers.customerapp is not listed in per-application setting
10-18 09:48:35.298  5283  5283 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:35.315  4758  4891 D LifecycleServiceBinder: Binding service to application.
10-18 09:48:35.328  4758  4758 D SessionLifecycleService: Service bound to new client on process 4758
10-18 09:48:35.329  4758  4758 D SessionLifecycleClient: Connected to SessionLifecycleService. Queue size 0
10-18 09:48:35.332  4758  5310 D SessionLifecycleService: App has not yet foregrounded. Using previously stored session: null
10-18 09:48:35.332  4758  5310 D SessionLifecycleService: Client android.os.Messenger@cb91a21 bound at 585506035. Clients: 1
10-18 09:48:35.344 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Component mounted, notifications count:', 15
10-18 09:48:35.345 15708 19060 I ReactNativeJS: '🔍 [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-18 09:48:35.346 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:35.346 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.346 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.346 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.347 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:35.347 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.347 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.347 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.349 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:35.349 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:35.349 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.349 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.350 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:35.350 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.350 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.350 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.351 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:35.351 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.351 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.351 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.351  4758  5146 I Ads     : Updating ad debug logging enablement.
10-18 09:48:35.352 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:35.352 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.352 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.352 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.376 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Component mounted, notifications count:', 15
10-18 09:48:35.376 15708 19060 I ReactNativeJS: '🔍 [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-18 09:48:35.377 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:35.377 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.377 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.377 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.378 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:35.378 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.378 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.378 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.379 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:35.379 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:35.379 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.379 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.380 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:35.380 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.380 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.380 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.382 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:35.382 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.382 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.382 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.383 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:35.383 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:35.383 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:35.383 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:35.416  4758  5314 W Ads     : Update ad debug logging enablement as false
10-18 09:48:35.440 26036  1221 I FrewleTileCacheManagerV: (REDACTED) Downloaded %d tiles
10-18 09:48:35.464 15708 19060 I ReactNativeJS: '🎯 [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.464 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-18 09:48:35.464 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.464 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Timestamp:', '2025-10-18T04:18:35.464Z'
10-18 09:48:35.472  4758  5327 I AudioManager: In isSpeakerphoneOn(), calling application: com.makemytrip
10-18 09:48:35.477 15708 19060 I ReactNativeJS: '🎯 [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.477 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-18 09:48:35.477 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.477 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Timestamp:', '2025-10-18T04:18:35.477Z'
10-18 09:48:35.479 15708 19060 I ReactNativeJS: '🎯 [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.479 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-18 09:48:35.479 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.479 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Timestamp:', '2025-10-18T04:18:35.479Z'
10-18 09:48:35.481 15708 19060 I ReactNativeJS: '🎯 [useRideNotifications] useEffect triggered, user ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.481 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== FETCHING NOTIFICATIONS =====
10-18 09:48:35.481 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] User ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.481 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Timestamp:', '2025-10-18T04:18:35.481Z'
10-18 09:48:35.483 15708 19060 I ReactNativeJS: '🔍 [RIDES] Starting comprehensive active rides fetch for user:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:35.483 15708 19060 I ReactNativeJS: 🔍 [RIDES] Step 1: Fetching active regular rides via edge function...
10-18 09:48:35.484  5283  5349 W ers.customerapp: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:35.484 15708 19060 I ReactNativeJS: '🔍 AuthNavigator - checking auth state:', { user: true,
10-18 09:48:35.484 15708 19060 I ReactNativeJS:   loading: false,
10-18 09:48:35.484 15708 19060 I ReactNativeJS:   segments: '(tabs)',
10-18 09:48:35.484 15708 19060 I ReactNativeJS:   userEmail: '918608374935@a1taxi.app',
10-18 09:48:35.484 15708 19060 I ReactNativeJS:   userRole: 'customer' }
10-18 09:48:35.484 15708 19060 I ReactNativeJS: ✅ User authenticated and on correct screen
10-18 09:48:35.490 15708 19060 E ReactNativeJS: 'Error initializing notifications:', { [Error: Make sure to complete the guide at https://docs.expo.dev/push-notifications/fcm-credentials/ : Default FirebaseApp is not initialized in this process com.a1taxi.a1taxicustomer. Make sure to call FirebaseApp.initializeApp(Context) first.] code: 'E_REGISTRATION_FAILED' }
10-18 09:48:35.490 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: console.error: Error initializing notifications: Error: Make sure to complete the guide at https://docs.expo.dev/push-notifications/fcm-credentials/ : Default FirebaseApp is not initialized in this process com.a1taxi.a1taxicustomer. Make sure to call FirebaseApp.initializeApp(Context) first., js engine: hermes, stack:
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: _construct@1:175995
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: Wrapper@1:175649
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: _callSuper@1:173480
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: SyntheticError@1:175136
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: reactConsoleErrorHandler@1:174747
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: ?anon_0_@1:2336445
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: asyncGeneratorStep@1:605691
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: _throw@1:605996
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: anonymous@1:445123
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: _callTimer@1:444108
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:444252
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: callReactNativeMicrotasks@1:446197
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: __callReactNativeMicrotasks@1:166636
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: anonymous@1:165772
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: __guard@1:166510
10-18 09:48:35.492 15708 19061 E unknown:ReactNative: flushedQueue@1:165683
10-18 09:48:35.497  5720 10001 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:35.500  5720 10001 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:35.500  5720 10001 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/lVTmbZAK8SBx-GCT4c+u4j4d7vCGMp7K2wH8MVFZW14=.tmp' ))
10-18 09:48:35.500  5283  5349 W System  : ClassLoader referenced unknown path: 
10-18 09:48:35.500  5283  5349 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:35.504 30764 32731 I com.whatsapp: Background young concurrent copying GC freed 8002KB AllocSpace bytes, 486(11MB) LOS objects, 50% free, 10MB/21MB, paused 127.552ms,149us total 620.238ms
10-18 09:48:35.531  5283  5349 W ers.customerapp: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=4149961798 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/base.apk*4149961798]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]})
10-18 09:48:35.533 26036 26892 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:35.533 26036 26892 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:35.534 26106 26139 E IPCThreadState: Binder transaction failure. id: 428330430, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:35.534 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:35.534 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:35.534 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:35.534 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:35.534 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:35.534 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:35.566 26036  1251 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.grofers.customerapp
10-18 09:48:35.571 32656 32687 I Finsky  : [42487] Stats for Executor: LightweightExecutor ubw@e2904f[Running, pool size = 4, active threads = 0, queued tasks = 0, completed tasks = 217]
10-18 09:48:35.575 32656 32687 I Finsky  : [42487] Stats for Executor: BlockingExecutor ubw@489b3dc[Running, pool size = 5, active threads = 0, queued tasks = 0, completed tasks = 22]
10-18 09:48:35.583  5283  5283 D CompatChangeReporter: Compat change id reported: 279646685; UID 10304; state: ENABLED
10-18 09:48:35.583  5283  5381 E ers.customerapp: No package ID 6a found for resource ID 0x6a0b000f.
10-18 09:48:35.584  5283  5381 I FA      : App measurement initialized, version: 140000
10-18 09:48:35.584  5283  5381 I FA      : To enable debug logging run: adb shell setprop log.tag.FA VERBOSE
10-18 09:48:35.584  5283  5381 I FA      : To enable faster debug mode event logging run:
10-18 09:48:35.584  5283  5381 I FA      :   adb shell setprop debug.firebase.analytics.app com.grofers.customerapp
10-18 09:48:35.590 32656 32687 I Finsky  : [42487] Stats for Executor: bgExecutor ubw@e6c5261[Running, pool size = 4, active threads = 0, queued tasks = 0, completed tasks = 175]
10-18 09:48:35.629  5283  5368 D CompatChangeReporter: Compat change id reported: 311402873; UID 10304; state: ENABLED
10-18 09:48:35.629  5283  5368 D CompatChangeReporter: Compat change id reported: 323349338; UID 10304; state: ENABLED
10-18 09:48:35.678  4758  4758 I WebViewFactory: Loading com.google.android.webview version 141.0.7390.43 (code 739004333)
10-18 09:48:35.690 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:35.697 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:35.697 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 6ms
10-18 09:48:35.716  5283  5447 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-18 09:48:35.716  5283  5283 W ers.customerapp: ClassLoaderContext classpath element checksum mismatch. expected=2536329430, found=4149961798 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~FHzHO1ykTtTf2DCWYXY9QQ==/com.grofers.customerapp-RIOELgCmdu-kvRQJAuDnJw==/base.apk*4149961798]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]})
10-18 09:48:35.733 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.deviceperformance.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:35.733 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.deviceperformance.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:35.752  5283  5446 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-18 09:48:35.753  5283  5446 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-18 09:48:35.753  5283  5446 I M-ProMotion: M-ProMotion is disabled
10-18 09:48:35.771  5283  5283 D nativeloader: Configuring clns-9 for other apk . target_sdk_version=35, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-18 09:48:35.771  5283  5283 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:35.774  5283  5283 D nativeloader: Load /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk!/lib/arm64-v8a/libcronet.141.0.7340.3.so using isolated ns clns-9 (caller=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/split_CronetDynamite_installtime.apk): ok
10-18 09:48:35.791  4758  4758 W com.makemytrip: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:35.792  4758  4758 D nativeloader: Configuring clns-12 for other apk /data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-18 09:48:35.792  4758  4758 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:35.792  5283  5283 I HttpFlagsLoader: HTTP flags log line (Impl): Using live production flag values from Google
10-18 09:48:35.794  4758  4758 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:35.796  5283  5283 I cn_CronetLibraryLoader: Cronet version: 141.0.7340.3, arch: aarch64
10-18 09:48:35.806  4758  4758 W com.makemytrip: Suspending all threads took: 6.144ms
10-18 09:48:35.809  4758  4758 D nativeloader: Configuring clns-13 for other apk /data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-18 09:48:35.829  4649  5055 I DGW     : I[onStateChanged:170] StreamGroupConnectivityAwareNetworkLayer processing buffered requests
10-18 09:48:35.829  4649  5055 I DGW     : I[sendRequest:98] StreamGroupMNSNetworkLayer[notifgateway] DGW Connecting to https://z-m-gateway.facebook.com/notifgateway
10-18 09:48:35.831  4649  5055 E SoLoader: About to invoke JNI_OnLoad for merged library notifgateway-stream-jni, which was merged into libnotifgateway.so
10-18 09:48:35.889  4758  4797 I PlayCore: UID: [10307]  PID: [4758] OnRequestInstallCallback : onRequestInfo
10-18 09:48:35.889  4758  5173 I PlayCore: UID: [10307]  PID: [4758] OnRequestInstallCallback : onRequestInfo
10-18 09:48:35.890  4758  5113 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : Leaving the connection open for other ongoing calls.
10-18 09:48:35.891  4758  5113 I PlayCore: UID: [10307]  PID: [4758] AppUpdateService : Unbind from service.
10-18 09:48:35.974  4758  4758 I cr_WVCFactoryProvider: version=141.0.7390.43 (739004333) minSdkVersion=29 multiprocess=true packageId=2 splits=config.arm64_v8a,config.xxhdpi
10-18 09:48:35.987   752  3409 I ProviderInstaller: Installed default security provider GmsCore_OpenSSL
10-18 09:48:35.994  4758  4758 D nativeloader: Load /data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a/libmonochrome_64.so using class loader ns clns-13 (caller=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk): ok
10-18 09:48:36.000  4758  4758 D nativeloader: Load /system/lib64/libwebviewchromium_plat_support.so using class loader ns clns-13 (caller=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk): ok
10-18 09:48:36.015 15708 19060 I ReactNativeJS: '📊 Database query result:', { hasData: true,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   error: undefined,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   rawData: 
10-18 09:48:36.015 15708 19060 I ReactNativeJS:    { vehicle_type: 'sedan',
10-18 09:48:36.015 15708 19060 I ReactNativeJS:      base_fare: 150,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:      per_km_rate: 20,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:      minimum_fare: 0,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:      surge_multiplier: 1 } }
10-18 09:48:36.015 15708 19060 I ReactNativeJS: '✅ ACTUAL DATABASE VALUES for', 'sedan', ':', { vehicle_type: 'sedan',
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   base_fare: 150,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   per_km_rate: 20,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   minimum_fare: 0,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   surge_multiplier: 1 }
10-18 09:48:36.015 15708 19060 I ReactNativeJS: '🔢 Converted to numbers:', { base_fare: 150,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   per_km_rate: 20,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   minimum_fare: 0,
10-18 09:48:36.015 15708 19060 I ReactNativeJS:   surge_multiplier: 1 }
10-18 09:48:36.015 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== CALCULATING DEADHEAD CHARGES (FALLBACK) =====
10-18 09:48:36.015 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Destination coordinates:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:36.015 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Per KM rate:', 20
10-18 09:48:36.015 15708 19060 I ReactNativeJS: 🔍 [DEADHEAD-FALLBACK] Querying zones table for Inner Ring and Outer Ring...
10-18 09:48:36.018 15708 19060 I ReactNativeJS: '📊 Database query result:', { hasData: true,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   error: undefined,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   rawData: 
10-18 09:48:36.018 15708 19060 I ReactNativeJS:    { vehicle_type: 'sedan',
10-18 09:48:36.018 15708 19060 I ReactNativeJS:      base_fare: 150,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:      per_km_rate: 20,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:      minimum_fare: 0,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:      surge_multiplier: 1 } }
10-18 09:48:36.018 15708 19060 I ReactNativeJS: '✅ ACTUAL DATABASE VALUES for', 'sedan', ':', { vehicle_type: 'sedan',
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   base_fare: 150,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   per_km_rate: 20,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   minimum_fare: 0,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   surge_multiplier: 1 }
10-18 09:48:36.018 15708 19060 I ReactNativeJS: '🔢 Converted to numbers:', { base_fare: 150,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   per_km_rate: 20,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   minimum_fare: 0,
10-18 09:48:36.018 15708 19060 I ReactNativeJS:   surge_multiplier: 1 }
10-18 09:48:36.018 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== CALCULATING DEADHEAD CHARGES (FALLBACK) =====
10-18 09:48:36.018 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Destination coordinates:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:36.019 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Per KM rate:', 20
10-18 09:48:36.019 15708 19060 I ReactNativeJS: 🔍 [DEADHEAD-FALLBACK] Querying zones table for Inner Ring and Outer Ring...
10-18 09:48:36.029 15708 19060 I ReactNativeJS: '📊 [DRIVER-SERVICE] Found drivers:', { total: 18,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:   details: 
10-18 09:48:36.029 15708 19060 I ReactNativeJS:    [ { id: 'c568b21d-0975-4388-a9fb-cc00013b6d4f',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: 'e1c0754c-46a6-4171-a3b3-c98dad57629f',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '1945e7ff-e1fe-4e6b-b1ab-e301e66924a4',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'suv',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '6f55e87b-6558-48df-af8c-d69190918b32',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: 'e6145579-4f5a-439f-b929-fa478580c049',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'hatchback',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '7055c2f9-99fa-4d96-bc6c-079b5cda6f56',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: 'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'hatchback',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '22480cc3-665c-407e-ad8a-8eafde67706b',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '16011178-decf-4de3-beae-94ca46ce9258',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'hatchback',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '770e8400-e29b-41d4-a716-446655440001',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '550e8400-e29b-41d4-a716-446655440001',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'hatchback',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '770e8400-e29b-41d4-a716-446655440002',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '550e8400-e29b-41d4-a716-446655440002',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '770e8400-e29b-41d4-a716-446655440003',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '550e8400-e29b-41d4-a716-446655440003',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'suv',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '770e8400-e29b-41d4-a716-446655440004',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '550e8400-e29b-41d4-a716-446655440004',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '770e8400-e29b-41d4-a716-446655440005',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '550e8400-e29b-41d4-a716-446655440005',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'hatchback',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '0330d75a-67b0-4b12-b9b7-22a241af9c57',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: 'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '489b94a7-777b-4e11-ba5c-17e0a3173737',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'hatchback',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: 'bc4a3a31-4f18-4c90-9864-0f8f8a2ac90a',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '8c908364-b0ae-4a88-b1e1-20f4c41a079b',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '631f4ab4-c643-45a8-addd-541595b0fe86',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: 'b12c8a48-05b3-475a-b042-4810aee4e918',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'suv',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '707e2d38-7346-4a2e-bddb-e1157475f786',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: 'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '38ee94d8-ac2d-450e-8084-0bef654546d7',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: 'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: 'b4613ecf-44b5-49ba-8613-f8993b6db1d6',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true },
10-18 09:48:36.029 15708 19060 I ReactNativeJS:      { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        name: undefined,
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        vehicle_type: 'sedan_ac',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        status: 'online',
10-18 09:48:36.029 15708 19060 I ReactNativeJS:        verified: true } ] }
10-18 09:48:36.030 15708 19060 I ReactNativeJS: '📍 [DRIVER-SERVICE] Step 2: Getting locations for user IDs:', [ '6150ee57-77e5-45f7-b6c7-a586f22f2af8',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '1945e7ff-e1fe-4e6b-b1ab-e301e66924a4',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   'e6145579-4f5a-439f-b929-fa478580c049',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   'dc475d27-6167-4695-a014-dcb8d160b4c6',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '16011178-decf-4de3-beae-94ca46ce9258',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '550e8400-e29b-41d4-a716-446655440001',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '550e8400-e29b-41d4-a716-446655440002',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '550e8400-e29b-41d4-a716-446655440003',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '550e8400-e29b-41d4-a716-446655440004',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '550e8400-e29b-41d4-a716-446655440005',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   'f5e495f1-75a4-4ce1-bb60-4adfc348b8fc',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '892d8e0d-7ca5-4dd8-9979-539f394538f2',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '8c908364-b0ae-4a88-b1e1-20f4c41a079b',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   'b12c8a48-05b3-475a-b042-4810aee4e918',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   'ed59084b-f517-4da3-814c-a314cdd8b4c6',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   'fdd94862-18e4-49d4-b6c0-8b9f73c8ff8c',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '539b06c9-4e24-49a4-b307-3fb3f9dc39da',
10-18 09:48:36.030 15708 19060 I ReactNativeJS:   '6c03a657-c3e4-466e-b49c-324c2d051ce9' ]
10-18 09:48:36.035 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:36.037 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:36.037 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 2ms
10-18 09:48:36.043  5720 30312 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:36.046 12016 12016 I Choreographer: Skipped 6398 frames!  The application may be doing too much work on its main thread.
10-18 09:48:36.049  5720 30312 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:36.049  5720 30312 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/M94SUI3wC2O6CoHVLCyUAWXfwao3CyxCbCCSRBo13n8=.enc.tmp' ))
10-18 09:48:36.069 15708 19060 I ReactNativeJS: 🔍 Starting zone validation before ride creation...
10-18 09:48:36.069 15708 19060 I ReactNativeJS: '🔍 Active zones loaded:', 2
10-18 09:48:36.070 15708 19060 I ReactNativeJS: '🔍 Zone details:', [ { name: 'Inner Ring', active: true },
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   { name: 'Outer Ring', active: true } ]
10-18 09:48:36.070 15708 19060 I ReactNativeJS: 🔍 Validating pickup location against active zones...
10-18 09:48:36.070 15708 19060 I ReactNativeJS: '🔍 Active zones loaded:', 2, [ 'Inner Ring', 'Outer Ring' ]
10-18 09:48:36.070 15708 19060 I ReactNativeJS: '🔍 Checking if point is in service area:', { coordinates: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   zonesCount: 2,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   zones: 
10-18 09:48:36.070 15708 19060 I ReactNativeJS:    [ { name: 'Inner Ring',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        radius_km: 7.74,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        center_lat: 12.73913777,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        center_lng: 77.82861132 },
10-18 09:48:36.070 15708 19060 I ReactNativeJS:      { name: 'Outer Ring',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        radius_km: 13.16,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        center_lat: 12.73813315,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:        center_lng: 77.82916922 } ] }
10-18 09:48:36.070 15708 19060 I ReactNativeJS: 🔍 Using circle-based zone validation
10-18 09:48:36.070 15708 19060 I ReactNativeJS: '🔍 Raw Outer Ring data:', { center_latitude: 12.73813315,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   center_latitude_type: 'number',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   center_longitude: 77.82916922,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   center_longitude_type: 'number',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   radius_km: 13.16,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   radius_km_type: 'number' }
10-18 09:48:36.070 15708 19060 I ReactNativeJS: '🔍 Parsed values:', { centerLat: 12.73813315,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   centerLng: 77.82916922,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   radiusKm: 13.16,
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   allValid: true }
10-18 09:48:36.070 15708 19060 I ReactNativeJS: '🔍 Circle zone check:', { point: { latitude: 12.7486583, longitude: 77.8299917 },
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   center: { latitude: 12.73813315, longitude: 77.82916922 },
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   radiusKm: '13.16km',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   calculatedDistance: '1.17km',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   difference: '-11.99km',
10-18 09:48:36.070 15708 19060 I ReactNativeJS:   isInside: '✅ INSIDE' }
10-18 09:48:36.070 15708 19060 I ReactNativeJS: 🔍 Point is INSIDE Outer Ring (13.16km radius)
10-18 09:48:36.070 15708 19060 I ReactNativeJS: ✅ Pickup location is within active zones
10-18 09:48:36.070 15708 19060 I ReactNativeJS: 🔍 Validating destination location against active zones...
10-18 09:48:36.070 15708 19060 I ReactNativeJS: '🔍 Destination coords for validation:', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🔍 Active zones for destination check:', 2, [ 'Inner Ring', 'Outer Ring' ]
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🔍 Checking if point is in service area:', { coordinates: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   zonesCount: 2,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   zones: 
10-18 09:48:36.071 15708 19060 I ReactNativeJS:    [ { name: 'Inner Ring',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        radius_km: 7.74,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        center_lat: 12.73913777,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        center_lng: 77.82861132 },
10-18 09:48:36.071 15708 19060 I ReactNativeJS:      { name: 'Outer Ring',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        type: 'circle',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        radius_km: 13.16,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        center_lat: 12.73813315,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:        center_lng: 77.82916922 } ] }
10-18 09:48:36.071 15708 19060 I ReactNativeJS: 🔍 Using circle-based zone validation
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🔍 Raw Outer Ring data:', { center_latitude: 12.73813315,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   center_latitude_type: 'number',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   center_longitude: 77.82916922,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   center_longitude_type: 'number',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   radius_km: 13.16,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   radius_km_type: 'number' }
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🔍 Parsed values:', { centerLat: 12.73813315,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   centerLng: 77.82916922,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   radiusKm: 13.16,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   allValid: true }
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🔍 Circle zone check:', { point: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   center: { latitude: 12.73813315, longitude: 77.82916922 },
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   radiusKm: '13.16km',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   calculatedDistance: '11.02km',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   difference: '-2.14km',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   isInside: '✅ INSIDE' }
10-18 09:48:36.071 15708 19060 I ReactNativeJS: 🔍 Point is INSIDE Outer Ring (13.16km radius)
10-18 09:48:36.071 15708 19060 I ReactNativeJS: ✅ Destination location is within active zones
10-18 09:48:36.071 15708 19060 I ReactNativeJS: ✅ Both locations validated successfully, proceeding with ride creation...
10-18 09:48:36.071 15708 19060 I ReactNativeJS: 🚗 About to create ride with rideService...
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🚗 User object:', '{\n  "id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n  "email": "918608374935@a1taxi.app",\n  "full_name": "Ricco",\n  "customer_id": "e95a4f14-8958-49e9-8ede-d81b82a7ba12",\n  "phone_number": "+918608374935",\n  "role": "customer"\n}'
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🚗 User ID being passed as customerId:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🚗 User ID type:', 'string'
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🚗 Using customer ID:', 'e95a4f14-8958-49e9-8ede-d81b82a7ba12'
10-18 09:48:36.071 15708 19060 I ReactNativeJS: '🚗 Creating ride with params:', { customerId: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   pickupLocation: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   pickupLatitude: 12.7486583,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   pickupLongitude: 77.8299917,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   destinationLocation: 'Bagalur, Tamil Nadu, India',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   destinationLatitude: 12.8303987,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   destinationLongitude: 77.86623689999999,
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   vehicleType: 'sedan',
10-18 09:48:36.071 15708 19060 I ReactNativeJS:   fareAmount: 391 }
10-18 09:48:36.071 15708 19060 I ReactNativeJS: 📡 Creating ride via edge function to bypass RLS...
10-18 09:48:36.073 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:36.073 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.073 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.073 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.074 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:36.074 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.074 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.074 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.075 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:36.075 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:36.075 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.075 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.076 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:36.076 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.076 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.076 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.077 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:36.077 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.077 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.077 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.078 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultEmitStateChange(3041)=>[INFO] connection/new_state/connecting [connection_id=339893456, wcc_source=1, wcc_reason=2]
10-18 09:48:36.078 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:36.078 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.078 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.078 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.078  4758  4892 W FirebaseCrashlytics: Unable to read App Quality Sessions session id.
10-18 09:48:36.233  5578  5578 I webview_service: Using CollectorTypeCC GC.
10-18 09:48:36.236  5578  5578 E webview_service: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:36.239  5578  5578 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:36.249  5578  5578 E webview_service: BBinder_init Processname  <pre-initialized>  
10-18 09:48:36.249  5578  5578 E webview_service: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:36.259  4649  5056 W DGW     : W[onSuccessfulResponse:848] StreamGroupTransport[notifgateway] on successful response. DGW is now connected.
10-18 09:48:36.268 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:36.270 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:36.270 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:36.271  5578  5578 W webview_service: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:36.273  5578  5578 D nativeloader: Configuring clns-7 for other apk /data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.webview
10-18 09:48:36.273  5578  5578 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:36.274  5578  5578 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:36.276  5578  5578 D nativeloader: Configuring clns-8 for other apk /data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.webview
10-18 09:48:36.286  5578  5578 V GraphicsEnvironment: Currently set values for:
10-18 09:48:36.286  5578  5578 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:36.286  5578  5578 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:36.286  5578  5578 V GraphicsEnvironment: com.google.android.webview is not listed in per-application setting
10-18 09:48:36.286  5578  5578 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:36.288  5578  5578 I LoadedApk: No resource references to update in package com.google.android.trichromelibrary
10-18 09:48:36.290  5578  5578 I cr_WebViewApkApp: version=141.0.7390.43 (739004333) minSdkVersion=29 processName=com.google.android.webview:webview_service splits=<none>
10-18 09:48:36.311 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:36.311 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:36.311 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:36.311 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:36.311 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:36.313 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:36.318  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:36.319  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:36.323 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:36.327 12016 16859 E msys    : E[C mem.cat_network_fetching]MEMCryptoAuthTokenNetworkFetching_MEMCryptoAuthTokenNetworkFetchingFetchCAT(260)=>[INFO] prepare fetching CAT via http
10-18 09:48:36.353 12016 12287 E msys    : E[N mns]_OnDiskCacheGetData(632)=>Start post callback cache refresh DNS resolution
10-18 09:48:36.344  4758  4758 I cr_LibraryLoader: Successfully loaded native library
10-18 09:48:36.360 12016 12287 W LibevQuicAsyncUDPSocket.h: setTosOrTrafficClass not implemented in LibevQuicAsyncUDPSocket
10-18 09:48:36.362  4758  4758 I cr_CachingUmaRecorder: Flushed 16 samples from 16 histograms, 0 samples were dropped.
10-18 09:48:36.394 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-18 09:48:36.395 12016 12287 E msys    : E[N mns]_OnSystemDNSSuccessCallback(340)=>Cache refresh succeeded with system DNS resolver. IP count: 2
10-18 09:48:36.395 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Query result:', { hasError: false,
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   errorMessage: undefined,
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   errorCode: undefined,
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   errorDetails: undefined,
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   dataCount: 20,
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   tripCompletedCount: 0,
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   unreadTripCompletedCount: 0,
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   allTypes: [ 'booking_completed', 'ride_status_changed', 'ride_cancelled' ],
10-18 09:48:36.395 15708 19060 I ReactNativeJS:   recentNotifications: 
10-18 09:48:36.395 15708 19060 I ReactNativeJS:    [ { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        type: 'booking_completed',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        title: 'Trip Completed',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        age_seconds: 14833 },
10-18 09:48:36.395 15708 19060 I ReactNativeJS:      { id: '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        age_seconds: 14994 },
10-18 09:48:36.395 15708 19060 I ReactNativeJS:      { id: '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        age_seconds: 15029 },
10-18 09:48:36.395 15708 19060 I ReactNativeJS:      { id: '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        age_seconds: 15036 },
10-18 09:48:36.395 15708 19060 I ReactNativeJS:      { id: 'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.395 15708 19060 I ReactNativeJS:        age_seconds: 15068 } ] }
10-18 09:48:36.395 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-18 09:48:36.396 15708 19060 I ReactNativeJS: '✅ [NOTIFICATIONS] Notifications to set:', { total: 20,
10-18 09:48:36.396 15708 19060 I ReactNativeJS:   tripCompleted: 0,
10-18 09:48:36.396 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0,
10-18 09:48:36.396 15708 19060 I ReactNativeJS:   allNotificationIds: 
10-18 09:48:36.396 15708 19060 I ReactNativeJS:    [ 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '820df2fd-abe3-457c-82cf-24f154dfd19b',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'a7856ef3-761c-4b1c-9cf6-3c34df9833b7',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'b5795e46-c850-4bcb-a933-898c21727b1b',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '545c5e68-1353-4e95-b9e4-08f883b88a66',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '9c6911c2-87ea-4956-8c97-3e822ef63307',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '4e097013-42dd-4f82-b288-bf6aaf220fda',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '2e43addf-b9f4-4627-83ec-77c15684569b',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '4c443433-9f76-4ff7-8a7a-09b0c1a8250e',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'e424c186-10d1-4a49-93be-be7dfa9edb7e',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'c101ac4b-a09b-42b2-9ba8-aeecf8d1e085',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '3b7c6b23-a18d-4ba7-be7e-9eb312125937',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'ea6218b2-280d-457c-b056-7a321067ab73',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'b65bfbea-d7a8-4219-8131-e12d12f00fe0',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      'f5f74a9c-3334-4a54-b3a9-d6b0efc5f9f1',
10-18 09:48:36.396 15708 19060 I ReactNativeJS:      '95e45585-7c89-456b-a5c7-4d840ee0707e' ],
10-18 09:48:36.396 15708 19060 I ReactNativeJS:   tripCompletedNotificationIds: [],
10-18 09:48:36.396 15708 19060 I ReactNativeJS:   unreadTripCompletedNotificationIds: [] }
10-18 09:48:36.396 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Component mounted, notifications count:', 20
10-18 09:48:36.396 15708 19060 I ReactNativeJS: '🔍 [TRIP_NOTIFICATION] Component render - visible:', false, 'notification:', false
10-18 09:48:36.397 15708 19060 I ReactNativeJS: 🎯 [TRIP_NOTIFICATION] ===== useEffect TRIGGERED - CHECKING FOR COMPLETION NOTIFICATIONS =====
10-18 09:48:36.397 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Notifications array length:', 20
10-18 09:48:36.397  4758  4758 I cr_CombinedPProvider: #registerProvider() provider:WV.ak@f48cbb5 isPolicyCacheEnabled:false policyProvidersSize:0
10-18 09:48:36.400  4758  4758 I cr_PolicyProvider: #setManagerAndSource() 0
10-18 09:48:36.400 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Notifications array reference:', [ { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'booking_completed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Trip Completed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your scheduled trip has been completed successfully.',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { booking_id: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        booking_type: 'outstation' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '25c9b86c-1bcc-4c83-a52a-2bf9112a1805',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '25c9b86c-1bcc-4c83-a52a-2bf9112a1805',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '62a975b5-e38c-4d14-bdb9-2804cd5efd62',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: 'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '62a975b5-e38c-4d14-bdb9-2804cd5efd62',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '820df2fd-abe3-457c-82cf-24f154dfd19b',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: 'a7bde9c8-d6fb-412e-a29f-8c04d59a5526',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:33:52.126966+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:33:56.74078+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: 'a7856ef3-761c-4b1c-9cf6-3c34df9833b7',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: 'a7bde9c8-d6fb-412e-a29f-8c04d59a5526',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:32:54.61479+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:07:21.196602+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: 'b5795e46-c850-4bcb-a933-898c21727b1b',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: 'ab10282a-8c94-44dc-a563-7cbdaa1f2152',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:17:21.3218+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.853601+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '545c5e68-1353-4e95-b9e4-08f883b88a66',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '28411a74-2824-47ca-bc88-3546c706764b',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:15:42.259673+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:17:14.999004+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '9c6911c2-87ea-4956-8c97-3e822ef63307',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '0d57e52e-1b2d-47f6-9376-8f4a3ce89785',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:15:32.28332+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:45.57801+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '4e097013-42dd-4f82-b288-bf6aaf220fda',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '0d57e52e-1b2d-47f6-9376-8f4a3ce89785',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:14:43.97886+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.126511+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '2e43addf-b9f4-4627-83ec-77c15684569b',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: '97334bab-4520-4c46-8c5e-568c16476c7e',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:14:25.571174+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:45.992268+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: '4c443433-9f76-4ff7-8a7a-09b0c1a8250e',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: 'e5863667-c95a-40ff-9572-d05a921bea53',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:13:41.392807+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.415786+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: 'e424c186-10d1-4a49-93be-be7dfa9edb7e',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.400 15708 19060 I ReactNativeJS:      { ride_id: 'e5863667-c95a-40ff-9572-d05a921bea53',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:12:18.634114+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.631803+00:00',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   { id: 'c101ac4b-a09b-42b2-9ba8-aeecf8d1e085',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     type: 'booking_completed',
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     title: [TOO BIG formatValueCalls 201 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     message: [TOO BIG formatValueCalls 202 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     data: [TOO BIG formatValueCalls 203 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     status: [TOO BIG formatValueCalls 204 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     created_at: [TOO BIG formatValueCalls 205 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     updated_at: [TOO BIG formatValueCalls 206 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:     expires_at: [TOO BIG formatValueCalls 207 exceeded limit of 200] },
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 208 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 209 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 210 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 211 exceeded limit of 200],
10-18 09:48:36.400 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 212 exceeded limit of 200] ]
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Total notifications received:', 20
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Notification types:', [ 'booking_completed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'booking_completed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_cancelled',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   'ride_status_changed' ]
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] ride_completed count:', 0
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Unread ride_completed:', 0
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Already shown count:', 0
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Currently visible:', false
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Filtered completion notifications:', 1
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] First notification:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   status: 'unread',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   alreadyShown: false,
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   currentNotificationId: undefined }
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🎉 [TRIP_NOTIFICATION] Showing NEW trip completion:', { notificationId: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:36.401 15708 19060 I ReactNativeJS:   previousNotificationId: undefined }
10-18 09:48:36.401 15708 19060 I ReactNativeJS: '🔍 [TRIP_NOTIFICATION] Fetching fare breakdown for ID:', 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5'
10-18 09:48:36.403 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Component mounted, notifications count:', 20
10-18 09:48:36.403 15708 19060 I ReactNativeJS: '✅ [TRIP_NOTIFICATION] Rendering modal with notification:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   message: 'Your scheduled trip has been completed successfully.',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   data: 
10-18 09:48:36.403 15708 19060 I ReactNativeJS:    { booking_id: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:      booking_type: 'outstation' },
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   status: 'unread',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   updated_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.403 15708 19060 I ReactNativeJS:   expires_at: null }
10-18 09:48:36.417 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-18 09:48:36.418 15708 19060 I ReactNativeJS: ❌ [NOTIFICATIONS] No immediate trip completion notifications found
10-18 09:48:36.418 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Available notification types:', [ 'booking_completed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'booking_completed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_cancelled',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.418 15708 19060 I ReactNativeJS:   'ride_status_changed' ]
10-18 09:48:36.418 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-18 09:48:36.418 15708 19060 I ReactNativeJS: 🎯 [TRIP_NOTIFICATION] ===== useEffect TRIGGERED - CHECKING FOR COMPLETION NOTIFICATIONS =====
10-18 09:48:36.418 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Notifications array length:', 20
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Notifications array reference:', [ { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'booking_completed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Trip Completed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your scheduled trip has been completed successfully.',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { booking_id: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        booking_type: 'outstation' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '25c9b86c-1bcc-4c83-a52a-2bf9112a1805',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '25c9b86c-1bcc-4c83-a52a-2bf9112a1805',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '62a975b5-e38c-4d14-bdb9-2804cd5efd62',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: 'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '62a975b5-e38c-4d14-bdb9-2804cd5efd62',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'unread',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '820df2fd-abe3-457c-82cf-24f154dfd19b',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: 'a7bde9c8-d6fb-412e-a29f-8c04d59a5526',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:33:52.126966+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:33:56.74078+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: 'a7856ef3-761c-4b1c-9cf6-3c34df9833b7',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: 'a7bde9c8-d6fb-412e-a29f-8c04d59a5526',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:32:54.61479+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-18T00:07:21.196602+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: 'b5795e46-c850-4bcb-a933-898c21727b1b',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: 'ab10282a-8c94-44dc-a563-7cbdaa1f2152',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:17:21.3218+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.853601+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '545c5e68-1353-4e95-b9e4-08f883b88a66',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '28411a74-2824-47ca-bc88-3546c706764b',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:15:42.259673+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:17:14.999004+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '9c6911c2-87ea-4956-8c97-3e822ef63307',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '0d57e52e-1b2d-47f6-9376-8f4a3ce89785',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:15:32.28332+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:45.57801+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '4e097013-42dd-4f82-b288-bf6aaf220fda',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '0d57e52e-1b2d-47f6-9376-8f4a3ce89785',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:14:43.97886+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.126511+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '2e43addf-b9f4-4627-83ec-77c15684569b',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: '97334bab-4520-4c46-8c5e-568c16476c7e',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:14:25.571174+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:45.992268+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: '4c443433-9f76-4ff7-8a7a-09b0c1a8250e',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: 'e5863667-c95a-40ff-9572-d05a921bea53',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'no_drivers_available' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:13:41.392807+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.415786+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: 'e424c186-10d1-4a49-93be-be7dfa9edb7e',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: 'Ride Status Updated',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: 'Your ride status has been updated to: no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: 
10-18 09:48:36.422 15708 19060 I ReactNativeJS:      { ride_id: 'e5863667-c95a-40ff-9572-d05a921bea53',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        new_status: 'no_drivers_available',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:        old_status: 'requested' },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: 'read',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: '2025-10-17T23:12:18.634114+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: '2025-10-17T23:32:46.631803+00:00',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: null },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   { id: 'c101ac4b-a09b-42b2-9ba8-aeecf8d1e085',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     type: 'booking_completed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     title: [TOO BIG formatValueCalls 201 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     message: [TOO BIG formatValueCalls 202 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     data: [TOO BIG formatValueCalls 203 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     status: [TOO BIG formatValueCalls 204 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     created_at: [TOO BIG formatValueCalls 205 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     updated_at: [TOO BIG formatValueCalls 206 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:     expires_at: [TOO BIG formatValueCalls 207 exceeded limit of 200] },
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 208 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 209 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 210 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 211 exceeded limit of 200],
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   [TOO BIG formatValueCalls 212 exceeded limit of 200] ]
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Total notifications received:', 20
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Notification types:', [ 'booking_completed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'booking_completed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_cancelled',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.422 15708 19060 I ReactNativeJS:   'ride_status_changed' ]
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] ride_completed count:', 0
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Unread ride_completed:', 0
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Already shown count:', 1
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Currently visible:', true
10-18 09:48:36.422 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Filtered completion notifications:', 0
10-18 09:48:36.423 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Component mounted, notifications count:', 20
10-18 09:48:36.423 15708 19060 I ReactNativeJS: '✅ [TRIP_NOTIFICATION] Rendering modal with notification:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   message: 'Your scheduled trip has been completed successfully.',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   data: 
10-18 09:48:36.423 15708 19060 I ReactNativeJS:    { booking_id: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:      booking_type: 'outstation' },
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   status: 'unread',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   updated_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.423 15708 19060 I ReactNativeJS:   expires_at: null }
10-18 09:48:36.481  4758  4758 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-18 09:48:36.487  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:36.487  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:36.512 15708 15708 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:36.512 15708 15708 D BufferQueueConsumer: [](id:3d5c00000036,api:0,p:-1,c:15708) connect: controlledByApp=false
10-18 09:48:36.514 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#31](f:0,a:0) constructor()
10-18 09:48:36.514 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#31](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-18 09:48:36.523 15708 19040 D BLASTBufferQueue: [VRI[MainActivity]#31](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585507230145590(auto) mPendingTransactions.size=0 graphicBufferId=67465346285868 transform=0
10-18 09:48:36.547 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-18 09:48:36.548 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Query result:', { hasError: false,
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   errorMessage: undefined,
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   errorCode: undefined,
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   errorDetails: undefined,
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   dataCount: 20,
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   tripCompletedCount: 0,
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   unreadTripCompletedCount: 0,
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   allTypes: [ 'booking_completed', 'ride_status_changed', 'ride_cancelled' ],
10-18 09:48:36.548 15708 19060 I ReactNativeJS:   recentNotifications: 
10-18 09:48:36.548 15708 19060 I ReactNativeJS:    [ { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        type: 'booking_completed',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        title: 'Trip Completed',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        age_seconds: 14834 },
10-18 09:48:36.548 15708 19060 I ReactNativeJS:      { id: '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        age_seconds: 14994 },
10-18 09:48:36.548 15708 19060 I ReactNativeJS:      { id: '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        age_seconds: 15029 },
10-18 09:48:36.548 15708 19060 I ReactNativeJS:      { id: '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        age_seconds: 15037 },
10-18 09:48:36.548 15708 19060 I ReactNativeJS:      { id: 'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.548 15708 19060 I ReactNativeJS:        age_seconds: 15069 } ] }
10-18 09:48:36.548 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-18 09:48:36.549 15708 19060 I ReactNativeJS: '✅ [NOTIFICATIONS] Notifications to set:', { total: 20,
10-18 09:48:36.549 15708 19060 I ReactNativeJS:   tripCompleted: 0,
10-18 09:48:36.549 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0,
10-18 09:48:36.549 15708 19060 I ReactNativeJS:   allNotificationIds: 
10-18 09:48:36.549 15708 19060 I ReactNativeJS:    [ 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '820df2fd-abe3-457c-82cf-24f154dfd19b',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'a7856ef3-761c-4b1c-9cf6-3c34df9833b7',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'b5795e46-c850-4bcb-a933-898c21727b1b',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '545c5e68-1353-4e95-b9e4-08f883b88a66',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '9c6911c2-87ea-4956-8c97-3e822ef63307',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '4e097013-42dd-4f82-b288-bf6aaf220fda',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '2e43addf-b9f4-4627-83ec-77c15684569b',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '4c443433-9f76-4ff7-8a7a-09b0c1a8250e',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'e424c186-10d1-4a49-93be-be7dfa9edb7e',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'c101ac4b-a09b-42b2-9ba8-aeecf8d1e085',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '3b7c6b23-a18d-4ba7-be7e-9eb312125937',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'ea6218b2-280d-457c-b056-7a321067ab73',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'b65bfbea-d7a8-4219-8131-e12d12f00fe0',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      'f5f74a9c-3334-4a54-b3a9-d6b0efc5f9f1',
10-18 09:48:36.549 15708 19060 I ReactNativeJS:      '95e45585-7c89-456b-a5c7-4d840ee0707e' ],
10-18 09:48:36.549 15708 19060 I ReactNativeJS:   tripCompletedNotificationIds: [],
10-18 09:48:36.549 15708 19060 I ReactNativeJS:   unreadTripCompletedNotificationIds: [] }
10-18 09:48:36.550 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:36.550 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.550 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.550 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.552 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:36.552 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.552 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.552 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.554 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:36.554 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:36.554 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.554 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.555 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:36.555 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.555 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.555 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.557 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:36.557 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.557 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.557 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.558 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:36.558 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.558 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.558 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.574 15708 15708 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{c0e2514 V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-18 09:48:36.581  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:36.581  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:36.582  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:36.582  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:36.583 12016 12016 E SlowAppComponent: 0ms: FbnsInitBroadcastReceiver instantiating…
10-18 09:48:36.583 12016 12016 E SlowAppComponent: Main thread was blocked for 210ms in the background starting with FbnsInitBroadcastReceiver
10-18 09:48:36.584 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:36.584 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.584 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.584 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.589 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:36.589 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.589 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.589 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.591 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:36.591 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:36.591 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.591 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.592 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:36.592 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.592 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.592 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.593 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:36.593 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.593 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.593 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.594 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:36.594 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.594 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.594 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.611  5720 30312 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:36.613  5720 30312 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:36.613  5720 30312 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/lVTmbZAK8SBx-GCT4c+u4j4d7vCGMp7K2wH8MVFZW14=.chk.tmp' ))
10-18 09:48:36.616 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-18 09:48:36.616 15708 19060 I ReactNativeJS: ❌ [NOTIFICATIONS] No immediate trip completion notifications found
10-18 09:48:36.618 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Available notification types:', [ 'booking_completed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'booking_completed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_cancelled',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.618 15708 19060 I ReactNativeJS:   'ride_status_changed' ]
10-18 09:48:36.618 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-18 09:48:36.618 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:36.618 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:36.623 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback:', { fare: 381,
10-18 09:48:36.623 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.623 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.623 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.624 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for hatchback_ac:', { fare: 451,
10-18 09:48:36.624 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.624 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.624 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.626 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan:', { fare: 391,
10-18 09:48:36.626 15708 19060 I ReactNativeJS:   isSelected: true,
10-18 09:48:36.626 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.626 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.627 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for sedan_ac:', { fare: 461,
10-18 09:48:36.627 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.627 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.627 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.629 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.safetynet.service.START pkg=com.google.android.gms }
10-18 09:48:36.629 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.safetynet.service.START pkg=com.google.android.gms }
10-18 09:48:36.629 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv:', { fare: 762,
10-18 09:48:36.629 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.629 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.629 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.631 15708 19060 I ReactNativeJS: '💰 [UI] Displaying fare for suv_ac:', { fare: 1922,
10-18 09:48:36.631 15708 19060 I ReactNativeJS:   isSelected: false,
10-18 09:48:36.631 15708 19060 I ReactNativeJS:   showingCalculated: true,
10-18 09:48:36.631 15708 19060 I ReactNativeJS:   source: 'calculated' }
10-18 09:48:36.651 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-18 09:48:36.652 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Query result:', { hasError: false,
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   errorMessage: undefined,
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   errorCode: undefined,
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   errorDetails: undefined,
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   dataCount: 20,
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   tripCompletedCount: 0,
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   unreadTripCompletedCount: 0,
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   allTypes: [ 'booking_completed', 'ride_status_changed', 'ride_cancelled' ],
10-18 09:48:36.652 15708 19060 I ReactNativeJS:   recentNotifications: 
10-18 09:48:36.652 15708 19060 I ReactNativeJS:    [ { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        type: 'booking_completed',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        title: 'Trip Completed',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        age_seconds: 14834 },
10-18 09:48:36.652 15708 19060 I ReactNativeJS:      { id: '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        age_seconds: 14994 },
10-18 09:48:36.652 15708 19060 I ReactNativeJS:      { id: '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        age_seconds: 15029 },
10-18 09:48:36.652 15708 19060 I ReactNativeJS:      { id: '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        age_seconds: 15037 },
10-18 09:48:36.652 15708 19060 I ReactNativeJS:      { id: 'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.652 15708 19060 I ReactNativeJS:        age_seconds: 15069 } ] }
10-18 09:48:36.652 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-18 09:48:36.654 15708 19060 I ReactNativeJS: '✅ [NOTIFICATIONS] Notifications to set:', { total: 20,
10-18 09:48:36.654 15708 19060 I ReactNativeJS:   tripCompleted: 0,
10-18 09:48:36.654 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0,
10-18 09:48:36.654 15708 19060 I ReactNativeJS:   allNotificationIds: 
10-18 09:48:36.654 15708 19060 I ReactNativeJS:    [ 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '820df2fd-abe3-457c-82cf-24f154dfd19b',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'a7856ef3-761c-4b1c-9cf6-3c34df9833b7',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'b5795e46-c850-4bcb-a933-898c21727b1b',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '545c5e68-1353-4e95-b9e4-08f883b88a66',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '9c6911c2-87ea-4956-8c97-3e822ef63307',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '4e097013-42dd-4f82-b288-bf6aaf220fda',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '2e43addf-b9f4-4627-83ec-77c15684569b',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '4c443433-9f76-4ff7-8a7a-09b0c1a8250e',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'e424c186-10d1-4a49-93be-be7dfa9edb7e',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'c101ac4b-a09b-42b2-9ba8-aeecf8d1e085',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '3b7c6b23-a18d-4ba7-be7e-9eb312125937',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'ea6218b2-280d-457c-b056-7a321067ab73',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'b65bfbea-d7a8-4219-8131-e12d12f00fe0',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      'f5f74a9c-3334-4a54-b3a9-d6b0efc5f9f1',
10-18 09:48:36.654 15708 19060 I ReactNativeJS:      '95e45585-7c89-456b-a5c7-4d840ee0707e' ],
10-18 09:48:36.654 15708 19060 I ReactNativeJS:   tripCompletedNotificationIds: [],
10-18 09:48:36.654 15708 19060 I ReactNativeJS:   unreadTripCompletedNotificationIds: [] }
10-18 09:48:36.656 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-18 09:48:36.656 15708 19060 I ReactNativeJS: ❌ [NOTIFICATIONS] No immediate trip completion notifications found
10-18 09:48:36.656 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Available notification types:', [ 'booking_completed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'booking_completed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_cancelled',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.656 15708 19060 I ReactNativeJS:   'ride_status_changed' ]
10-18 09:48:36.656 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-18 09:48:36.658 15708 19060 I ReactNativeJS: 🔍 [NOTIFICATIONS] ===== DATABASE QUERY RESULT =====
10-18 09:48:36.659 15708 19060 I ReactNativeJS: '🔍 [NOTIFICATIONS] Query result:', { hasError: false,
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   errorMessage: undefined,
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   errorCode: undefined,
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   errorDetails: undefined,
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   dataCount: 20,
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   tripCompletedCount: 0,
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   unreadTripCompletedCount: 0,
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   allTypes: [ 'booking_completed', 'ride_status_changed', 'ride_cancelled' ],
10-18 09:48:36.659 15708 19060 I ReactNativeJS:   recentNotifications: 
10-18 09:48:36.659 15708 19060 I ReactNativeJS:    [ { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        type: 'booking_completed',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        title: 'Trip Completed',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        age_seconds: 14834 },
10-18 09:48:36.659 15708 19060 I ReactNativeJS:      { id: '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:42.70233+00:00',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        age_seconds: 14994 },
10-18 09:48:36.659 15708 19060 I ReactNativeJS:      { id: '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:08:07.724066+00:00',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        age_seconds: 15029 },
10-18 09:48:36.659 15708 19060 I ReactNativeJS:      { id: '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:59.987743+00:00',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        age_seconds: 15037 },
10-18 09:48:36.659 15708 19060 I ReactNativeJS:      { id: 'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        type: 'ride_status_changed',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        status: 'unread',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        title: 'Ride Status Updated',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        created_at: '2025-10-18T00:07:27.962746+00:00',
10-18 09:48:36.659 15708 19060 I ReactNativeJS:        age_seconds: 15069 } ] }
10-18 09:48:36.659 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== SETTING NOTIFICATIONS IN STATE =====
10-18 09:48:36.660 15708 19060 I ReactNativeJS: '✅ [NOTIFICATIONS] Notifications to set:', { total: 20,
10-18 09:48:36.660 15708 19060 I ReactNativeJS:   tripCompleted: 0,
10-18 09:48:36.660 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0,
10-18 09:48:36.660 15708 19060 I ReactNativeJS:   allNotificationIds: 
10-18 09:48:36.660 15708 19060 I ReactNativeJS:    [ 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '33de3d27-4c4d-4eba-86ad-eb2daec905c7',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '18198b2a-aaad-46e5-9acf-edd0f848d33f',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '48abd4e9-4389-4046-925e-c1e07ad84e47',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'd7a9b869-37bf-4c17-9176-8951196922bd',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '820df2fd-abe3-457c-82cf-24f154dfd19b',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'a7856ef3-761c-4b1c-9cf6-3c34df9833b7',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'b5795e46-c850-4bcb-a933-898c21727b1b',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '545c5e68-1353-4e95-b9e4-08f883b88a66',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '9c6911c2-87ea-4956-8c97-3e822ef63307',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '4e097013-42dd-4f82-b288-bf6aaf220fda',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '2e43addf-b9f4-4627-83ec-77c15684569b',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '4c443433-9f76-4ff7-8a7a-09b0c1a8250e',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'e424c186-10d1-4a49-93be-be7dfa9edb7e',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'c101ac4b-a09b-42b2-9ba8-aeecf8d1e085',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '3b7c6b23-a18d-4ba7-be7e-9eb312125937',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'ea6218b2-280d-457c-b056-7a321067ab73',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'b65bfbea-d7a8-4219-8131-e12d12f00fe0',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      'f5f74a9c-3334-4a54-b3a9-d6b0efc5f9f1',
10-18 09:48:36.660 15708 19060 I ReactNativeJS:      '95e45585-7c89-456b-a5c7-4d840ee0707e' ],
10-18 09:48:36.660 15708 19060 I ReactNativeJS:   tripCompletedNotificationIds: [],
10-18 09:48:36.660 15708 19060 I ReactNativeJS:   unreadTripCompletedNotificationIds: [] }
10-18 09:48:36.667 15708 19060 I ReactNativeJS: ✅ [NOTIFICATIONS] ===== CHECKING FOR IMMEDIATE TRIP COMPLETION =====
10-18 09:48:36.667 15708 19060 I ReactNativeJS: ❌ [NOTIFICATIONS] No immediate trip completion notifications found
10-18 09:48:36.667 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Available notification types:', [ 'booking_completed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'booking_completed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_cancelled',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed',
10-18 09:48:36.667 15708 19060 I ReactNativeJS:   'ride_status_changed' ]
10-18 09:48:36.667 15708 19060 I ReactNativeJS: '❌ [NOTIFICATIONS] Trip completed notifications (all statuses):', []
10-18 09:48:36.672 15708 19060 I ReactNativeJS: '🔍 [DEADHEAD-FALLBACK] Zones query result:', { hasError: false,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:   errorMessage: undefined,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:   errorCode: undefined,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:   zonesFound: 2,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:   zoneNames: [ 'Inner Ring', 'Outer Ring' ],
10-18 09:48:36.672 15708 19060 I ReactNativeJS:   allZoneData: 
10-18 09:48:36.672 15708 19060 I ReactNativeJS:    [ { id: '227fb7d8-2e9a-439b-b315-a28619795daa',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        name: 'Inner Ring',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        city: 'Hosur',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        state: 'Tamil Nadu',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        coordinates: 
10-18 09:48:36.672 15708 19060 I ReactNativeJS:         { type: 'circle',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:           center: { lat: 12.739137771576607, lng: 77.82861131744386 },
10-18 09:48:36.672 15708 19060 I ReactNativeJS:           radius: 7740.280633057722 },
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        center_latitude: 12.73913777,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        center_longitude: 77.82861132,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        radius_km: 7.74,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        base_fare: 50,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        per_km_rate: 12,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        surge_multiplier: 1,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        is_active: true,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        created_at: '2025-10-14T06:53:07.902747+00:00',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        updated_at: '2025-10-14T06:53:07.902747+00:00' },
10-18 09:48:36.672 15708 19060 I ReactNativeJS:      { id: '743ead3b-5e3c-4812-9bd7-d056934e7ad5',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        name: 'Outer Ring',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        city: 'Hosur',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        state: 'Tamil Nadu',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        coordinates: 
10-18 09:48:36.672 15708 19060 I ReactNativeJS:         { type: 'circle',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:           center: { lat: 12.738133154875067, lng: 77.82916921691896 },
10-18 09:48:36.672 15708 19060 I ReactNativeJS:           radius: 13156.583388351022 },
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        center_latitude: 12.73813315,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        center_longitude: 77.82916922,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        radius_km: 13.16,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        base_fare: 50,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        per_km_rate: 12,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        surge_multiplier: 1,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        is_active: true,
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        created_at: '2025-10-14T06:53:40.388587+00:00',
10-18 09:48:36.672 15708 19060 I ReactNativeJS:        updated_at: '2025-10-14T06:53:40.388587+00:00' } ] }
10-18 09:48:36.673 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Found zones:', { innerRing: { name: 'Inner Ring', radius: 7.74 },
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   outerRing: { name: 'Outer Ring', radius: 13.16 } }
10-18 09:48:36.673 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== DETAILED ZONE ANALYSIS =====
10-18 09:48:36.673 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Distance calculations:', { destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   distanceToInnerCenter: '10.9373km',
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   distanceToOuterCenter: '11.0188km',
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   innerRingRadius: '7.74km',
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   outerRingRadius: '13.16km' }
10-18 09:48:36.673 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Zone boundary checks:', { isOutsideInnerRing: true,
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   isOutsideInnerRingCheck: '10.9373km > 7.74km = true',
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   isInsideOuterRing: true,
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   isInsideOuterRingCheck: '11.0188km <= 13.16km = true',
10-18 09:48:36.673 15708 19060 I ReactNativeJS:   deadheadCondition: 'true && true = true' }
10-18 09:48:36.673 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Zone classification:', { zoneStatus: 'Between Inner and Outer Ring (DEADHEAD APPLIES)' }
10-18 09:48:36.673 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== DEADHEAD CHARGE APPLIES =====
10-18 09:48:36.673 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] Destination is between Inner and Outer Ring - calculating deadhead charge
10-18 09:48:36.673 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== DEADHEAD CALCULATION COMPLETE =====
10-18 09:48:36.674 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Deadhead calculation details:', { dropOffLocation: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   hosurBusStand: { latitude: 12.7402, longitude: 77.824 },
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   distanceToHosurBusStand: '11.0259km',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   perKmRate: '₹20/km',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   calculation: '(11.03km to Hosur Bus Stand / 2) × ₹20/km = ₹110.26',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   formula: 'Distance to Hosur Bus Stand ÷ 2 × Per KM Rate' }
10-18 09:48:36.674 15708 19060 I ReactNativeJS: '💰 [FARE-CALC] Fallback calculation with deadhead:', { baseFare: 150,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   distanceFare: 118.04973245494284,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   surgeFare: 0,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   deadheadCharge: 110.25914915977474,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   deadheadDistance: 11.025914915977474,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   subtotal: 268.04973245494284,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   totalFare: 378.30888161471756,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   formula: '₹150 + ₹118.04973245494284 + ₹0 + ₹110.25914915977474 = ₹378.30888161471756' }
10-18 09:48:36.674 15708 19060 I ReactNativeJS: 💰 [HOME] ===== FARE CALCULATION RESULT =====
10-18 09:48:36.674 15708 19060 I ReactNativeJS: '✅ [HOME] Fare breakdown received:', { baseFare: '₹150',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   distanceFare: '₹118',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   timeFare: '₹0',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   surgeFare: '₹0',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   platformFee: '₹0',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   totalFare: '₹378',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   distance: '9.9km',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   duration: '20min',
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   hasDeadheadCharge: true,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   isBagalurTrip: true,
10-18 09:48:36.674 15708 19060 I ReactNativeJS:   expectedDeadhead: 'YES' }
10-18 09:48:36.675 15708 19060 I ReactNativeJS: '🎯 [HOME] ✅ DEADHEAD CHARGE APPLIED:', { destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   reason: 'Destination is between Inner Ring and Outer Ring' }
10-18 09:48:36.675 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fares for all vehicle types based on', 'sedan', 'calculation'
10-18 09:48:36.675 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback (estimated): ₹368 (ratio-based from sedan)
10-18 09:48:36.675 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback_ac (estimated): ₹435 (ratio-based from sedan)
10-18 09:48:36.675 15708 19060 I ReactNativeJS: 💰 [HOME] sedan (selected): ₹378 (exact calculation)
10-18 09:48:36.675 15708 19060 I ReactNativeJS: 💰 [HOME] sedan_ac (estimated): ₹445 (ratio-based from sedan)
10-18 09:48:36.675 15708 19060 I ReactNativeJS: 💰 [HOME] suv (estimated): ₹742 (ratio-based from sedan)
10-18 09:48:36.675 15708 19060 I ReactNativeJS: 💰 [HOME] suv_ac (estimated): ₹1899 (ratio-based from sedan)
10-18 09:48:36.675 15708 19060 I ReactNativeJS: '💰 [HOME] All vehicle fares calculated:', { hatchback: 368,
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   hatchback_ac: 435,
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   sedan: 378,
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   sedan_ac: 445,
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   suv: 742,
10-18 09:48:36.675 15708 19060 I ReactNativeJS:   suv_ac: 1899 }
10-18 09:48:36.712 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:36.712 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:36.728 26036 26172 I fyyu    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-18 09:48:36.728 26036  1221 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:36.732  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:36.745 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:36.746 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:36.748  4649  4649 E fbservices-stub:FbnsServiceDelegateV2: onBind invalid signature: Intent { act=com.facebook.push.fbns.ipc.IFbnsAIDLService cmp=com.facebook.services/com.facebook.oxygen.services.fbns.PreloadedFbnsService (has extras) }
10-18 09:48:36.767 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultDoConnectWithAuthKeys(1491)=>[INFO] connection/connect/start/[host=z-p42-chat-e2ee-ig.facebook.com port=5222]/[2a03:2880:f20d:1e6:face:b00c:0:6e2e:5222]
10-18 09:48:36.772 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultLifecycleEventHandler(2059)=>[INFO] connection/xmpp/lifecycle_event/will-connect
10-18 09:48:36.778 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:36.778 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:36.779 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:36.779 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:36.779 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:36.779 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:36.779 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:36.779 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:36.786 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:36.787  4758  4758 I cr_CombinedPProvider: #linkNativeInternal() 1
10-18 09:48:36.789 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:36.789 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:36.794 15708 19060 I ReactNativeJS: '🔍 [DEADHEAD-FALLBACK] Zones query result:', { hasError: false,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   errorMessage: undefined,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   errorCode: undefined,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   zonesFound: 2,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   zoneNames: [ 'Inner Ring', 'Outer Ring' ],
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   allZoneData: 
10-18 09:48:36.794 15708 19060 I ReactNativeJS:    [ { id: '227fb7d8-2e9a-439b-b315-a28619795daa',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        name: 'Inner Ring',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        city: 'Hosur',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        state: 'Tamil Nadu',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        coordinates: 
10-18 09:48:36.794 15708 19060 I ReactNativeJS:         { type: 'circle',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:           center: { lat: 12.739137771576607, lng: 77.82861131744386 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:           radius: 7740.280633057722 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        center_latitude: 12.73913777,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        center_longitude: 77.82861132,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        radius_km: 7.74,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        base_fare: 50,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        per_km_rate: 12,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        surge_multiplier: 1,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        is_active: true,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        created_at: '2025-10-14T06:53:07.902747+00:00',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        updated_at: '2025-10-14T06:53:07.902747+00:00' },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:      { id: '743ead3b-5e3c-4812-9bd7-d056934e7ad5',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        name: 'Outer Ring',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        city: 'Hosur',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        state: 'Tamil Nadu',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        coordinates: 
10-18 09:48:36.794 15708 19060 I ReactNativeJS:         { type: 'circle',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:           center: { lat: 12.738133154875067, lng: 77.82916921691896 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:           radius: 13156.583388351022 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        center_latitude: 12.73813315,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        center_longitude: 77.82916922,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        radius_km: 13.16,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        base_fare: 50,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        per_km_rate: 12,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        surge_multiplier: 1,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        is_active: true,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        created_at: '2025-10-14T06:53:40.388587+00:00',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:        updated_at: '2025-10-14T06:53:40.388587+00:00' } ] }
10-18 09:48:36.794 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Found zones:', { innerRing: { name: 'Inner Ring', radius: 7.74 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   outerRing: { name: 'Outer Ring', radius: 13.16 } }
10-18 09:48:36.794 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== DETAILED ZONE ANALYSIS =====
10-18 09:48:36.794 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Distance calculations:', { destination: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   distanceToInnerCenter: '10.9373km',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   distanceToOuterCenter: '11.0188km',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   innerRingRadius: '7.74km',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   outerRingRadius: '13.16km' }
10-18 09:48:36.794 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Zone boundary checks:', { isOutsideInnerRing: true,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   isOutsideInnerRingCheck: '10.9373km > 7.74km = true',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   isInsideOuterRing: true,
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   isInsideOuterRingCheck: '11.0188km <= 13.16km = true',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   deadheadCondition: 'true && true = true' }
10-18 09:48:36.794 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Zone classification:', { zoneStatus: 'Between Inner and Outer Ring (DEADHEAD APPLIES)' }
10-18 09:48:36.794 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== DEADHEAD CHARGE APPLIES =====
10-18 09:48:36.794 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] Destination is between Inner and Outer Ring - calculating deadhead charge
10-18 09:48:36.794 15708 19060 I ReactNativeJS: 🎯 [DEADHEAD-FALLBACK] ===== DEADHEAD CALCULATION COMPLETE =====
10-18 09:48:36.794 15708 19060 I ReactNativeJS: '🎯 [DEADHEAD-FALLBACK] Deadhead calculation details:', { dropOffLocation: { latitude: 12.8303987, longitude: 77.86623689999999 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   hosurBusStand: { latitude: 12.7402, longitude: 77.824 },
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   distanceToHosurBusStand: '11.0259km',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   perKmRate: '₹20/km',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   calculation: '(11.03km to Hosur Bus Stand / 2) × ₹20/km = ₹110.26',
10-18 09:48:36.794 15708 19060 I ReactNativeJS:   formula: 'Distance to Hosur Bus Stand ÷ 2 × Per KM Rate' }
10-18 09:48:36.795 15708 19060 I ReactNativeJS: '💰 [FARE-CALC] Fallback calculation with deadhead:', { baseFare: 150,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   distanceFare: 118.04973245494284,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   surgeFare: 0,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   deadheadCharge: 110.25914915977474,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   deadheadDistance: 11.025914915977474,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   subtotal: 268.04973245494284,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   totalFare: 378.30888161471756,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   formula: '₹150 + ₹118.04973245494284 + ₹0 + ₹110.25914915977474 = ₹378.30888161471756' }
10-18 09:48:36.795 15708 19060 I ReactNativeJS: 💰 [HOME] ===== FARE CALCULATION RESULT =====
10-18 09:48:36.795 15708 19060 I ReactNativeJS: '✅ [HOME] Fare breakdown received:', { baseFare: '₹150',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   distanceFare: '₹118',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   timeFare: '₹0',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   surgeFare: '₹0',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   platformFee: '₹0',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   totalFare: '₹378',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   distance: '9.9km',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   duration: '20min',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   hasDeadheadCharge: true,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   isBagalurTrip: true,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   expectedDeadhead: 'YES' }
10-18 09:48:36.795 15708 19060 I ReactNativeJS: '🎯 [HOME] ✅ DEADHEAD CHARGE APPLIED:', { destination: 'Bagalur, Tamil Nadu, India',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   deadheadCharge: '₹110',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   deadheadDistance: '11.03km',
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   reason: 'Destination is between Inner Ring and Outer Ring' }
10-18 09:48:36.795 15708 19060 I ReactNativeJS: '💰 [HOME] Calculating fares for all vehicle types based on', 'sedan', 'calculation'
10-18 09:48:36.795 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback (estimated): ₹368 (ratio-based from sedan)
10-18 09:48:36.795 15708 19060 I ReactNativeJS: 💰 [HOME] hatchback_ac (estimated): ₹435 (ratio-based from sedan)
10-18 09:48:36.795 15708 19060 I ReactNativeJS: 💰 [HOME] sedan (selected): ₹378 (exact calculation)
10-18 09:48:36.795 15708 19060 I ReactNativeJS: 💰 [HOME] sedan_ac (estimated): ₹445 (ratio-based from sedan)
10-18 09:48:36.795 15708 19060 I ReactNativeJS: 💰 [HOME] suv (estimated): ₹742 (ratio-based from sedan)
10-18 09:48:36.795 15708 19060 I ReactNativeJS: 💰 [HOME] suv_ac (estimated): ₹1899 (ratio-based from sedan)
10-18 09:48:36.795 15708 19060 I ReactNativeJS: '💰 [HOME] All vehicle fares calculated:', { hatchback: 368,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   hatchback_ac: 435,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   sedan: 378,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   sedan_ac: 445,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   suv: 742,
10-18 09:48:36.795 15708 19060 I ReactNativeJS:   suv_ac: 1899 }
10-18 09:48:36.801 26036 26172 I fyyu    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-18 09:48:36.823  4758  4758 I cr_AppResProvider: #getApplicationRestrictionsFromUserManager() Bundle[EMPTY_PARCEL]
10-18 09:48:36.823  4758  4758 I cr_PolicyProvider: #notifySettingsAvailable() 0
10-18 09:48:36.823  4758  4758 I cr_CombinedPProvider: #onSettingsAvailable() 0
10-18 09:48:36.823  4758  4758 I cr_CombinedPProvider: #flushPolicies()
10-18 09:48:36.832 12016 12190 W LibevQuicAsyncUDPSocket.h: setTosOrTrafficClass not implemented in LibevQuicAsyncUDPSocket
10-18 09:48:36.841 15708 19060 I ReactNativeJS: '📍 [DRIVER-SERVICE] Found locations:', { total: 0, details: [] }
10-18 09:48:36.841 15708 19060 I ReactNativeJS: 🔍 [DRIVER-SERVICE] Step 3: Processing drivers with distance calculation...
10-18 09:48:36.841 15708 19060 I ReactNativeJS: '🔍 [DRIVER-SERVICE] Customer coordinates for distance calc:', { lat: 12.7486583,
10-18 09:48:36.841 15708 19060 I ReactNativeJS:   lng: 77.8299917,
10-18 09:48:36.841 15708 19060 I ReactNativeJS:   type: 'number',
10-18 09:48:36.841 15708 19060 I ReactNativeJS:   isValid: true }
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver c568b21d-0975-4388-a9fb-cc00013b6d4f (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver e1c0754c-46a6-4171-a3b3-c98dad57629f (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 6f55e87b-6558-48df-af8c-d69190918b32 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 7055c2f9-99fa-4d96-bc6c-079b5cda6f56 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 22480cc3-665c-407e-ad8a-8eafde67706b (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440001 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440002 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440003 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440004 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 770e8400-e29b-41d4-a716-446655440005 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 0330d75a-67b0-4b12-b9b7-22a241af9c57 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 489b94a7-777b-4e11-ba5c-17e0a3173737 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver bc4a3a31-4f18-4c90-9864-0f8f8a2ac90a (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 631f4ab4-c643-45a8-addd-541595b0fe86 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 707e2d38-7346-4a2e-bddb-e1157475f786 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 38ee94d8-ac2d-450e-8084-0bef654546d7 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver b4613ecf-44b5-49ba-8613-f8993b6db1d6 (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: ❌ [DRIVER-SERVICE] Driver 43d81d7d-e647-46cf-8599-11f63996b03e (undefined) skipped: no recent location
10-18 09:48:36.841 15708 19060 I ReactNativeJS: 📊 [DRIVER-SERVICE] ===== DIRECT DATABASE ACCESS RESULT =====
10-18 09:48:36.842 15708 19060 I ReactNativeJS: '📊 [DRIVER-SERVICE] Final summary:', { total_drivers_processed: 18,
10-18 09:48:36.842 15708 19060 I ReactNativeJS:   available_drivers_found: 0,
10-18 09:48:36.842 15708 19060 I ReactNativeJS:   customer_location: { lat: 12.7486583, lng: 77.8299917 },
10-18 09:48:36.842 15708 19060 I ReactNativeJS:   radius_km: 10,
10-18 09:48:36.842 15708 19060 I ReactNativeJS:   vehicle_type_filter: 'all (no filter applied)' }
10-18 09:48:36.842 15708 19060 I ReactNativeJS: '🔄 [DRIVER-SERVICE] Polling update:', 0, 'drivers'
10-18 09:48:36.842 15708 19060 I ReactNativeJS: '📍 [HOME] Received driver locations update:', 0, 'drivers'
10-18 09:48:36.874 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:36.884 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:36.884 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: mediaPreload.prefetchInternal : source: Type: DASH_VOD
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	Id: 696957756564714
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	Uri: https://scontent.fixm4-1.fna.fbcdn.net/o1/v/t2/f2/m69/AQMQ4LFIx4I1jqc3MRnJWgoyoTSM6J6xUaH7MKOJf9IfxpBa_L8bObord-ZdF2l31H7IPj64360JFGfRDTloYKE9.mp4?strext=1&_nc_cat=106&_nc_oc=Adm6TOvZCoEIsQNf4UC5mAEJLozPimdxMvLHWnRM9fprhNCD6GK_Bp2w1E_OjSfviZcWnLcNHDZk04T18Yk38J1Q&_nc_sid=8bf8fe&_nc_ht=scontent.fixm4-1.fna.fbcdn.net&_nc_ohc=wHpHCFCfUBYQ7kNvwH4sqKf&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6Mzk5OTk2NTMxMDIyODE5MSwidmlfdXNlY2FzZV9pZCI6MTA3OTksImR1cmF0aW9uX3MiOjE1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_zt=28&oh=00_AfcDGcu6t3iFiIITHdch4MNX5-y4Z0OZraz8baGMq8-alA&oe=68F903C0&bitrate=192570&tag=sve_sd&mve_delivery_dr_simulation=dr_test_1003%3Acontrol
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	Origin: FEED
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	PrefetchOrigin: FEED
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	DashMPD: 21029
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	liveLatency: -1
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	liveLatencyTolerance: -1
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	isSpherical: false
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	isSponsored: true
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	isAdBreak: false
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	isLiveTraceEnabled: false
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	renderMode: AUDIO_VIDEO
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	isBroadcast: false
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	contentType: GENERAL
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	isAudioDataListenerEnabled: false
10-18 09:48:36.896 31924 32563 W fb4a.HeroManager: 	liveViewerCount: -1, type: DASH_VOD
10-18 09:48:36.897 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:36.897 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:36.948 26036 26036 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.common.telemetry.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-18 09:48:36.965 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:36.965 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:36.965 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:36.965 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:36.965 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:36.965 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:36.965 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:36.966 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:36.966 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:36.966 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:36.966 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:36.966 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:36.966 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:36.966 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:36.966 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:36.968 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.000  3919  3919 I GH.CAR  : onCreate
10-18 09:48:37.040 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.041 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.041 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.041 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.041 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.042 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.048 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultLifecycleEventHandler(2067)=>[INFO] connection/xmpp/lifecycle_event/did-connect, [0.2760s]
10-18 09:48:37.068 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultLifecycleEventHandler(2067)=>[INFO] connection/xmpp/lifecycle_event/did-send-initial-payload, [0.0193s]
10-18 09:48:37.088 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.088 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.088 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.088 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.088 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.088 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.088 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.088 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.089 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.089 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.089 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.089 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.089 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.089 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.089 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.090 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.177  3919  3919 I GH.CAR  : GearheadCarStartupService.onBind
10-18 09:48:37.213 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.safebrowsing.SafeBrowsingService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:37.213 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.safebrowsing.SafeBrowsingService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:37.237 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.237 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.237 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.237 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.237 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.237 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.242  4758  4758 W chromium: [WARNING:android_webview/browser/network_service/net_helpers.cc:143] HTTP Cache size is: 20971520
10-18 09:48:37.331 15708 19060 I ReactNativeJS: '🔍 [RIDES] ✅ Found', 0, 'active regular rides'
10-18 09:48:37.331 15708 19060 I ReactNativeJS: 🔍 [RIDES] Step 2: Fetching active scheduled bookings via edge function...
10-18 09:48:37.333 15708 19060 I ReactNativeJS: '📋 [TRIP_NOTIFICATION] Booking type:', 'outstation'
10-18 09:48:37.333 15708 19060 I ReactNativeJS: 🔍 [TRIP_NOTIFICATION] Fetching from outstation_trip_completions
10-18 09:48:37.349 26036  2645 I NetworkScheduler: (REDACTED) Error inserting %s
10-18 09:48:37.351 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultLifecycleEventHandler(2067)=>[INFO] connection/xmpp/lifecycle_event/will-handshake, [0.2829s]
10-18 09:48:37.354 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultLifecycleEventHandler(2067)=>[INFO] connection/xmpp/lifecycle_event/did-handshake, [0.0031s]
10-18 09:48:37.361 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultReceiveHandler(2220)=>[INFO] connection/receive/login-success
10-18 09:48:37.363 12016 12303 E msys    : E[N WA]_WCCConnectionDefaultEmitStateChange(3041)=>[INFO] connection/new_state/connected [connection_id=339893456, wcc_source=1, wcc_reason=2]
10-18 09:48:37.202 31924  2663 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:37.397 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.397 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.397 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.397 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.397 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.397 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.424 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerStart(int markerId, int instanceKey) has not been implemented
10-18 09:48:37.425 31924  2665 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:37.460  3919  5024 I GH.CAR  : gearheadCarServiceBinder in mainHandler: true
10-18 09:48:37.475 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.475 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.475 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.475 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.475 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.475 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.480 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.ads.service.CACHE pkg=com.google.android.gms }
10-18 09:48:37.505 31924 32140 W fb4a.NoOpQuickPerformanceLogger: markerAnnotate(int markerId, int instanceKey, String annotationKey, @Nullable String annotationValue) has not been implemented
10-18 09:48:37.505 31924 32140 W fb4a.NoOpQuickPerformanceLogger: markerPoint(int markerId, int instanceKey, String name) has not been implemented
10-18 09:48:37.517 31924 32140 W fb4a.NoOpQuickPerformanceLogger: markerEnd(int markerId, int instanceKey, short action) has not been implemented
10-18 09:48:37.525  3919  5024 I GH.CAR  : Using GearheadCarServiceBinder in CarMessageService.
10-18 09:48:37.525  3919  5024 I GH.DelegateMngCarSvc: Retries remaining initialized to 20
10-18 09:48:37.525  3919  5024 I GH.CAR  : Using Gearhead for projection services. All aboard! 🚀
10-18 09:48:37.526  3919  5024 I GH.DelegateMngCarSvc: Skipping delegate acquisition on init().
10-18 09:48:37.526 14789  3002 W adservices: Skip logging because Cobalt logger is null
10-18 09:48:37.526  3919  5024 I GH.CarService: Setting delegate: gla@568c48a
10-18 09:48:37.526 14789  2140 W adservices: Skip logging because Cobalt is disabled.
10-18 09:48:37.528  3919  5024 I CAR.SERVICE: Setting CSB delegate, previous value null updated to hly@563b718
10-18 09:48:37.528  3919  5024 I GH.CAR  : Setting validator car info suppliers
10-18 09:48:37.532  3919  5024 I GH.CAR  : ICar delegate chain:
10-18 09:48:37.532  3919  5024 I GH.CAR  : 	hmt@1ce7571
10-18 09:48:37.532  3919  5024 I GH.CAR  : 	-> gla@568c48a
10-18 09:48:37.532  3919  5024 I GH.CAR  : 	-> hly@563b718
10-18 09:48:37.552  5720 23763 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:37.553  5720 23763 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:37.554  5720 23763 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014511))
10-18 09:48:37.557  5720 23763 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:37.557  5720 23763 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:37.591 12016 16859 E msys    : E[C mem.cat_network_fetching]_CATFetchCompletionHandler(135)=>[INFO] receive fetching CAT callback via http
10-18 09:48:37.603 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.604 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.604 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.604 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.604 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.604 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.614 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.614 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.614 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.614 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.614 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.614 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.614 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.614 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.615 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.615 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.615 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.615 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.615 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.615 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.615 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.615 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.630 26036  5154 I HeterodyneSyncScheduler: (REDACTED) Scheduling Phenotype for a %s(%d, %s) one off with window [%d, %d] in seconds
10-18 09:48:37.704 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.704 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.704 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.704 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.704 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.704 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.715  4758  5794 I CameraManagerGlobal: Connecting to camera service
10-18 09:48:37.753 15708 19060 I ReactNativeJS: 🔔 [BANNER_DEBUG] ===== NOTIFICATION BANNER EFFECT =====
10-18 09:48:37.753 15708 19060 I ReactNativeJS: '🔔 [BANNER_DEBUG] Banner summary:', { totalNotifications: 20,
10-18 09:48:37.753 15708 19060 I ReactNativeJS:   currentlyVisible: false,
10-18 09:48:37.753 15708 19060 I ReactNativeJS:   currentNotification: undefined,
10-18 09:48:37.753 15708 19060 I ReactNativeJS:   shownNotificationsCount: 0,
10-18 09:48:37.753 15708 19060 I ReactNativeJS:   tripCompletedNotifications: 0,
10-18 09:48:37.753 15708 19060 I ReactNativeJS:   unreadTripCompleted: 0 }
10-18 09:48:37.753 15708 19060 I ReactNativeJS: 🚫 [BANNER_DEBUG] ===== BLOCKING COMPLETION NOTIFICATION FROM BANNER =====
10-18 09:48:37.754 15708 19060 I ReactNativeJS: '🚫 [BANNER_DEBUG] Completion notification blocked from banner:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:37.754 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:37.754 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:37.754 15708 19060 I ReactNativeJS:   rideId: undefined,
10-18 09:48:37.754 15708 19060 I ReactNativeJS:   bookingId: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:37.754 15708 19060 I ReactNativeJS:   fareAmount: undefined,
10-18 09:48:37.754 15708 19060 I ReactNativeJS:   reason: 'Should show in full-screen modal only' }
10-18 09:48:37.754 15708 19060 I ReactNativeJS: 📱 [BANNER_DEBUG] ===== BANNER DISPLAY DECISION =====
10-18 09:48:37.767  4758  5736 W cr_media: BLUETOOTH_CONNECT permission is missing.
10-18 09:48:37.771  4758  5736 W cr_media: getBluetoothAdapter() requires BLUETOOTH permission
10-18 09:48:37.771  4758  5736 W cr_media: registerBluetoothIntentsIfNeeded: Requires BLUETOOTH permission
10-18 09:48:37.847 12016 12190 E msys    : E[N mns]_OnDiskCacheGetData(632)=>Start post callback cache refresh DNS resolution
10-18 09:48:37.849 12016 12190 W LibevQuicAsyncUDPSocket.h: setTosOrTrafficClass not implemented in LibevQuicAsyncUDPSocket
10-18 09:48:37.867 12016 12190 E msys    : E[N mns]_OnSystemDNSSuccessCallback(340)=>Cache refresh succeeded with system DNS resolver. IP count: 2
10-18 09:48:37.939 15708 19060 I ReactNativeJS: ⚠️ [TRIP_NOTIFICATION] No fare breakdown found, fetching booking estimate
10-18 09:48:37.953  5833  5833 I book.appmanager: Using CollectorTypeCC GC.
10-18 09:48:37.956  5833  5833 E book.appmanager: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:37.963  5833  5833 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:37.976  5833  5833 E book.appmanager: BBinder_init Processname  <pre-initialized>  
10-18 09:48:37.976  5833  5833 E book.appmanager: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:38.019  5833  5833 D nativeloader: Configuring clns-7 for other apk /data/app/~~EBR7IppCvkQ2XB6DY7H9wA==/com.facebook.appmanager-qQcj-aWKrZCMIHToYTU7xw==/base.apk. target_sdk_version=35, uses_libraries=, library_path=/data/app/~~EBR7IppCvkQ2XB6DY7H9wA==/com.facebook.appmanager-qQcj-aWKrZCMIHToYTU7xw==/lib/arm64:/data/app/~~EBR7IppCvkQ2XB6DY7H9wA==/com.facebook.appmanager-qQcj-aWKrZCMIHToYTU7xw==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.facebook.appmanager
10-18 09:48:38.024  5833  5833 D CompatChangeReporter: Compat change id reported: 202956589; UID 10178; state: ENABLED
10-18 09:48:38.052  5751  5557 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:38.052  5751  5557 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:38.062  5833  5833 V GraphicsEnvironment: Currently set values for:
10-18 09:48:38.062  5833  5833 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:38.062  5833  5833 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:38.062  5833  5833 V GraphicsEnvironment: com.facebook.appmanager is not listed in per-application setting
10-18 09:48:38.062  5833  5833 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:38.140  5833  5833 D d       : ExceptionHandlerManager not explicitly initialized, using default mode
10-18 09:48:38.140  5833  5833 D d       : initializing exception handler manager, prioritized=true
10-18 09:48:38.155  5833  5833 W SoLoader: Initializing SoLoader: 0
10-18 09:48:38.156  5833  5833 W SoLoader: context.getApplicationContext returned null, holding reference to original context.ApplicationSoSource fallbacks to: /data/app/~~EBR7IppCvkQ2XB6DY7H9wA==/com.facebook.appmanager-qQcj-aWKrZCMIHToYTU7xw==/lib/arm64
10-18 09:48:38.156  5833  5833 W SoLoader: Recording new base apk path: /data/app/~~EBR7IppCvkQ2XB6DY7H9wA==/com.facebook.appmanager-qQcj-aWKrZCMIHToYTU7xw==/base.apk
10-18 09:48:38.156  5833  5833 W SoLoader: Previously recorded 0 base apk paths.
10-18 09:48:38.156  5833  5833 D CompatChangeReporter: Compat change id reported: 312399441; UID 10178; state: ENABLED
10-18 09:48:38.157  5833  5833 I SoLoader: Preparing SO source: DirectorySoSource[root = /vendor/lib64 flags = 2]
10-18 09:48:38.158  5833  5833 I SoLoader: Preparing SO source: DirectorySoSource[root = /system/lib64 flags = 2]
10-18 09:48:38.158  5833  5833 I SoLoader: Preparing SO source: DirectApkSoSource[root = [/data/app/~~EBR7IppCvkQ2XB6DY7H9wA==/com.facebook.appmanager-qQcj-aWKrZCMIHToYTU7xw==/base.apk!/lib/arm64-v8a]]
10-18 09:48:38.160  5833  5833 I SoLoader: Preparing SO source: ApplicationSoSource[DirectorySoSource[root = /data/app/~~EBR7IppCvkQ2XB6DY7H9wA==/com.facebook.appmanager-qQcj-aWKrZCMIHToYTU7xw==/lib/arm64 flags = 1]]
10-18 09:48:38.160  5833  5833 I SoLoader: init finish: 4 SO sources prepared
10-18 09:48:38.160  5833  5833 W SoLoader: SoLoader initialized: 8
10-18 09:48:38.168 15708 19060 I ReactNativeJS: '🔍 [RIDES] ✅ Total active rides found:', { total: 0,
10-18 09:48:38.168 15708 19060 I ReactNativeJS:   regular_rides: 0,
10-18 09:48:38.168 15708 19060 I ReactNativeJS:   scheduled_bookings: 0,
10-18 09:48:38.168 15708 19060 I ReactNativeJS:   rides_summary: [] }
10-18 09:48:38.171 15708 19060 I ReactNativeJS: 🔍 [RIDES] ❌ No active rides or scheduled bookings found
10-18 09:48:38.171 15708 19060 I ReactNativeJS: 🧹 [RIDES] Cleaning up subscriptions
10-18 09:48:38.203 15708 19060 I ReactNativeJS: ✅ [TRIP_NOTIFICATION] Using booking estimate as fallback
10-18 09:48:38.203 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Component mounted, notifications count:', 20
10-18 09:48:38.204 15708 19060 I ReactNativeJS: '✅ [TRIP_NOTIFICATION] Rendering modal with notification:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   message: 'Your scheduled trip has been completed successfully.',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   data: 
10-18 09:48:38.204 15708 19060 I ReactNativeJS:    { booking_id: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:      booking_type: 'outstation' },
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   status: 'unread',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   updated_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:38.204 15708 19060 I ReactNativeJS:   expires_at: null }
10-18 09:48:38.214 15708 19060 I ReactNativeJS: '🎯 [TRIP_NOTIFICATION] Component mounted, notifications count:', 20
10-18 09:48:38.214 15708 19060 I ReactNativeJS: '✅ [TRIP_NOTIFICATION] Rendering modal with notification:', { id: 'a8d88c20-3581-4d54-8988-419ab915822a',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   user_id: 'e95a4f14-8958-49e9-8ede-d81b82a7ba12',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   type: 'booking_completed',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   title: 'Trip Completed',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   message: 'Your scheduled trip has been completed successfully.',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   data: 
10-18 09:48:38.214 15708 19060 I ReactNativeJS:    { booking_id: 'c9b827ab-a37b-49ac-8f34-7db6a5f8f7a5',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:      booking_type: 'outstation' },
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   status: 'unread',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   created_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   updated_at: '2025-10-18T00:11:22.993077+00:00',
10-18 09:48:38.214 15708 19060 I ReactNativeJS:   expires_at: null }
10-18 09:48:38.219  4758  5794 D nativeloader: Load libVivoJsonResourceManager_jni.so using system ns (caller=/system/framework/framework.jar!classes2.dex): ok
10-18 09:48:38.230  5833  5833 E SQLiteLog: (14) cannot open file at line 44183 of [d68fb8b5db]
10-18 09:48:38.230  5833  5833 E SQLiteLog: (14) os_unix.c:44183: (2) open(/data/data/com.facebook.appmanager/databases/androidx.work.workdb) - 
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: Failed to open database '/data/user/0/com.facebook.appmanager/databases/androidx.work.workdb'.
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: android.database.sqlite.SQLiteCantOpenDatabaseException: Cannot open database '/data/user/0/com.facebook.appmanager/databases/androidx.work.workdb' with flags 0x0: File /data/user/0/com.facebook.appmanager/databases/androidx.work.workdb doesn't exist
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteConnection.open(SQLiteConnection.java:289)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteConnection.open(SQLiteConnection.java:232)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteConnectionPool.openConnectionLocked(SQLiteConnectionPool.java:535)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteConnectionPool.open(SQLiteConnectionPool.java:222)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteConnectionPool.open(SQLiteConnectionPool.java:214)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteDatabase.openInner(SQLiteDatabase.java:1163)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteDatabase.open(SQLiteDatabase.java:1143)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteDatabase.openDatabase(SQLiteDatabase.java:1034)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteDatabase.openDatabase(SQLiteDatabase.java:981)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at com.facebook.oxygen.common.androidx.workmanager.initializer.b.a(WorkManagerDatabase.java:22)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at com.facebook.oxygen.appmanager.app.c.a(AppManagerApplicationImpl.java:21)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at com.facebook.oxygen.common.component.b.d.onCreate(OxpDelegatingApplication.java:84)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1386)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.app.ActivityThread.handleBindApplication(ActivityThread.java:8595)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.app.ActivityThread.-$$Nest$mhandleBindApplication(Unknown Source:0)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2885)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.os.Handler.dispatchMessage(Handler.java:109)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at java.lang.reflect.Method.invoke(Native Method)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: Caused by: android.database.sqlite.SQLiteCantOpenDatabaseException: unknown error (code 14 SQLITE_CANTOPEN): Could not open database
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteConnection.nativeOpen(Native Method)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	at android.database.sqlite.SQLiteConnection.open(SQLiteConnection.java:251)
10-18 09:48:38.235  5833  5833 E SQLiteDatabase: 	... 22 more
10-18 09:48:38.260  5833  5833 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-18 09:48:38.260  5833  5833 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-18 09:48:38.260  5833  5833 I M-ProMotion: M-ProMotion is disabled
10-18 09:48:38.281  4758  5799 E libEGL  : eglQueryStringImpl display is EGL_NO_DISPLAY
10-18 09:48:38.286 15708 19060 I ReactNativeJS: '✅ Ride created via edge function:', '8ddb9bb2-571b-4e13-94a0-afe448d23214'
10-18 09:48:38.286 15708 19060 I ReactNativeJS: 📢 Starting driver notification process for regular ride...
10-18 09:48:38.286 15708 19060 I ReactNativeJS: '📢 Notifying drivers via edge function for ride:', '8ddb9bb2-571b-4e13-94a0-afe448d23214'
10-18 09:48:38.286 15708 19060 I ReactNativeJS: '📡 Making request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/driver-api/notify-drivers'
10-18 09:48:38.349  5720 23763 D SQLiteQueryBuilder: UPDATE files SET inferred_date=?,bucket_display_name=?,parent=?,volume_name=?,date_expires=?,_modifier=?,_display_name=?,mime_type=?,_data=?,is_trashed=?,bucket_id=?,media_type=?,relative_path=?,generation_modified=(SELECT generation FROM local_metadata),_id=ifnull(_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/Media/.Statuses/278620f09e7a463291a183333118f552.jpg' ), _id) WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data =? ))
10-18 09:48:38.350  4758  5794 D com.makemytrip: JNI_OnLoad: get JNI environment,JNI_VERSION_1_6
10-18 09:48:38.362  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/lib/arm64'
10-18 09:48:38.365  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/base.apk!/lib/arm64-v8a'
10-18 09:48:38.368  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.arm64_v8a.apk!/lib/arm64-v8a'
10-18 09:48:38.374  5720 32663 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:38.374  5720 32663 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:38.376  5720 32663 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014512))
10-18 09:48:38.380  5720 32663 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:38.381  5720 32663 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:38.388  5720  5837 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((_id='1000014510') AND (volume_name IN ( 'external_primary' )))
10-18 09:48:38.390  4758  5794 D VivoJavaJsonManager: create() called
10-18 09:48:38.391  4758  5794 D VivoJsonResourceManager: Create
10-18 09:48:38.391  4758  5794 D VivoJsonResourceManager: Using Path:product/camera/jsons to parse Json Files!
10-18 09:48:38.392  4758  4758 I Choreographer: Skipped 30 frames!  The application may be doing too much work on its main thread.
10-18 09:48:38.395  4758  5794 D VivoJsonResourceManager: service is not null
10-18 09:48:38.395 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:38.397  5720  5837 V MediaProvider: Deleted backup of old file path: /storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/lVTmbZAK8SBx-GCT4c+u4j4d7vCGMp7K2wH8MVFZW14=.tmp
10-18 09:48:38.434  4758  5794 D VivoJsonResourceManager: GetJsonConfigInfoSize 679
10-18 09:48:38.434  4758  5794 I DMABUFHEAPS: Using DMA-BUF heap named: system
10-18 09:48:38.436  4758  5794 D VivoJsonResourceManager: Allocate: alloc buffer_fd:318 success
10-18 09:48:38.437  4758  5794 E VivoJsonResourceManager: mmap ok
10-18 09:48:38.437  4758  5794 D VivoJsonResourceManager: begin to read file product/camera/jsons/StaticProjectConfig.json!
10-18 09:48:38.438  4758  5794 D VivoJsonResourceManager: Using Path:product/camera/jsons to parse Json Files!
10-18 09:48:38.441  4758  5794 D VivoJsonResourceManager: GetJsonConfigInfoSize 16968
10-18 09:48:38.442  4758  5794 I DMABUFHEAPS: Using DMA-BUF heap named: system
10-18 09:48:38.443  4758  5794 D VivoJsonResourceManager: Allocate: alloc buffer_fd:318 success
10-18 09:48:38.443  4758  5794 E VivoJsonResourceManager: mmap ok
10-18 09:48:38.444  4758  5794 D VivoJsonResourceManager: begin to read file product/camera/jsons/StaticAppNameConfig.json!
10-18 09:48:38.449  4758  5794 D VivoJavaJsonManager: failed to find appName:com.makemytrip from config key:mProtakePackages
10-18 09:48:38.449  4758  5794 D VivoJavaJsonManager: failed to find appName:com.makemytrip from config key:mProtakePackages
10-18 09:48:38.449 26036  1251 I NearbyPresence: (REDACTED) %s verified [==] new request %s equals to the old request
10-18 09:48:38.468  4758  5173 D VivoJavaJsonManager: failed to find appName:com.makemytrip from config key:mProtakePackages
10-18 09:48:38.480  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.xxhdpi.apk!/lib/arm64-v8a'
10-18 09:48:38.481  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/lib/arm64'
10-18 09:48:38.485  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/base.apk!/lib/arm64-v8a'
10-18 09:48:38.489  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.arm64_v8a.apk!/lib/arm64-v8a'
10-18 09:48:38.490  4758  5799 D vulkan  : searching for layers in '/data/app/~~v5jx9H4i58uFQrmTpVMAlQ==/com.makemytrip-FL-Cg87u4yaxQvK-dUkgGA==/split_config.xxhdpi.apk!/lib/arm64-v8a'
10-18 09:48:38.600  4649  5944 D ProfileInstaller: Installing profile for com.facebook.services
10-18 09:48:38.728 26036 27730 I FontLog : (REDACTED) Received query %s, URI %s
10-18 09:48:38.729 26036 27730 I FontLog : (REDACTED) Query [%s] resolved to %s
10-18 09:48:38.732 26036 27730 I FontLog : (REDACTED) Font PFD returned from cache for %s
10-18 09:48:38.732 26036 27730 I FontLog : (REDACTED) Fetch %s end status %s
10-18 09:48:38.742 26036 27730 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-18 09:48:38.743 26036 26036 D WearableService: Creating wearable service asynchronously.
10-18 09:48:38.761 26036 26051 I FontLog : (REDACTED) Received query %s, URI %s
10-18 09:48:38.761 26036 26051 I FontLog : (REDACTED) Query [%s] resolved to %s
10-18 09:48:38.769 26036 26051 I FontLog : (REDACTED) Fetch %s end status %s
10-18 09:48:38.770 26036 26075 I Wear_Controller: Wearable module requires a companion app to be installed.
10-18 09:48:38.770 26036 26075 I WearableService: onCreate: Wearable Services not starting. Wear is not available on this device.
10-18 09:48:38.770  5720 32662 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:38.774  5720 32662 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:38.774  5720 32662 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/VQf9nGPRqQcdUnE11k5gY-53GZiaQ8Kt7+lkPQJaXLA=.tmp' ))
10-18 09:48:38.774 26036 26051 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-18 09:48:38.790 26036 26051 I FontLog : (REDACTED) Received query %s, URI %s
10-18 09:48:38.790 26036 26051 I FontLog : (REDACTED) Query [%s] resolved to %s
10-18 09:48:38.791 26036 26051 I FontLog : (REDACTED) Font PFD returned from cache for %s
10-18 09:48:38.791 26036 26051 I FontLog : (REDACTED) Fetch %s end status %s
10-18 09:48:38.801 26036 26051 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-18 09:48:38.825 26036 26051 I FontLog : (REDACTED) Received query %s, URI %s
10-18 09:48:38.826 26036 26051 I FontLog : (REDACTED) Query [%s] resolved to %s
10-18 09:48:38.827 26036 26051 I FontLog : (REDACTED) Font PFD returned from cache for %s
10-18 09:48:38.827 26036 26051 I FontLog : (REDACTED) Fetch %s end status %s
10-18 09:48:38.837 26036 27730 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-18 09:48:38.850  4758  5039 E BMP:CYFManager: AkamaiBMP SDK is not initialized
10-18 09:48:38.858 26036 26051 I FontLog : (REDACTED) Received query %s, URI %s
10-18 09:48:38.858 26036 26051 I FontLog : (REDACTED) Query [%s] resolved to %s
10-18 09:48:38.859 26036 26051 I FontLog : (REDACTED) Font PFD returned from cache for %s
10-18 09:48:38.859 26036 26051 I FontLog : (REDACTED) Fetch %s end status %s
10-18 09:48:38.881 26036 26104 I ActivityScheduler: nextTriggerTime: 1205293244, in 5000ms, detectorType: 39, FULL_TYPE alarmWindowMillis: 625
10-18 09:48:38.985 26036 27730 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-18 09:48:39.039 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.semanticlocationhistory.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:39.039 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.semanticlocationhistory.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:39.057  5984  5984 I ssioncontroller: Using CollectorTypeCC GC.
10-18 09:48:39.062  5984  5984 E ssioncontroller: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:39.066  5984  5984 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:39.077  5984  5984 E ssioncontroller: BBinder_init Processname  <pre-initialized>  
10-18 09:48:39.077  5984  5984 E ssioncontroller: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:39.107  5984  5984 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:39.107  5984  5984 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:39.107  5984  5984 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:39.115  5984  5984 D nativeloader: Configuring clns-shared-7 for other apk /apex/com.android.permission/priv-app/GooglePermissionController@360906160/GooglePermissionController.apk. target_sdk_version=36, uses_libraries=, library_path=/apex/com.android.permission/priv-app/GooglePermissionController@360906160/lib/arm64:/system/lib64:/system_ext/lib64, permitted_path=/data:/mnt/expand:/data/user_de/0/com.google.android.permissioncontroller:/apex/com.android.permission/priv-app/GooglePermissionController@360906160:/system/lib64:/system_ext/lib64
10-18 09:48:39.117  5984  5984 D nativeloader: InitApexLibraries:
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_adservices: libhpke_jni.so:libtflite_support_classifiers_native.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_appsearch: libappsearchservice.so:libicing_anywhere.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_art: libartservice.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_btservices: libbluetooth_jni.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_conscrypt: libjavacrypto.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_mediaprovider: libpdfclient.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_ondevicepersonalization: libfcp_cpp_dep_jni.so:libfcp_hpke_jni.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_os_statsd: libstats_jni.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_tethering: libandroid_net_connectivity_com_android_net_module_util_jni.so:libframework-connectivity-jni.so:libframework-connectivity-tiramisu-jni.so:libmainlinecronet.139.0.7205.3.so:libservice-connectivity.so:libservice-thread-jni.so:stable_cronet_libcrypto.so:stable_cronet_libssl.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_uwb: libuwb_uci_jni_rust.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_virt: libvirtualizationservice_jni.so:libvirtualmachine_jni.so
10-18 09:48:39.117  5984  5984 D nativeloader:   com_android_wifi: libservice-wifi-jni.so
10-18 09:48:39.123 26522 26769 I cn_CronetUrlRequestContext: destroyNativeStreamLocked android.net.connectivity.org.chromium.net.impl.CronetBidirectionalStream@3cfae55
10-18 09:48:39.204  5984  5984 V GraphicsEnvironment: Currently set values for:
10-18 09:48:39.204  5984  5984 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:39.204  5984  5984 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:39.204  5984  5984 V GraphicsEnvironment: com.google.android.permissioncontroller is not listed in per-application setting
10-18 09:48:39.229  5720 23763 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:39.232  5720 23763 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:39.232  5720 23763 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/F2EAWcvR86oyqwtU0cM7Ac4i65Y3ZlARvrzY08RLwMs=.enc.tmp' ))
10-18 09:48:39.255 26036 27730 W WearableService: onGetService: Wear is not available on this device.
10-18 09:48:39.268  5984  5984 E FeatureFlagsImplExport: android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package com.android.permission.flags cannot be found on the device
10-18 09:48:39.272  5984  5984 E FeatureFlagsImplExport: android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package android.permission.flags cannot be found on the device
10-18 09:48:39.273  5984  5984 E FeatureFlagsImplExport: android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package android.companion cannot be found on the device
10-18 09:48:39.273  5984  5984 E FeatureFlagsImplExport: android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package android.content.pm cannot be found on the device
10-18 09:48:39.278  5984  5984 E FeatureFlagsImplExport: android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package android.companion.virtualdevice.flags cannot be found on the device
10-18 09:48:39.299  5984  5984 E FeatureFlagsImplExport: android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package android.xr cannot be found on the device
10-18 09:48:39.313  5984  6089 I PermissionControllerServiceImpl: Updating user sensitive for uid 10307
10-18 09:48:39.373 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.constellation.service.START pkg=com.google.android.gms }
10-18 09:48:39.477 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:39.477 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:39.479 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:39.480 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:39.489 18428 19185 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-18 09:48:39.489 18428 19185 I ReactNativeJS:   heading: 0,
10-18 09:48:39.489 18428 19185 I ReactNativeJS:   altitudeAccuracy: 1.4451377391815186,
10-18 09:48:39.489 18428 19185 I ReactNativeJS:   latitude: 12.7488217,
10-18 09:48:39.489 18428 19185 I ReactNativeJS:   speed: 0.02985388971865177,
10-18 09:48:39.489 18428 19185 I ReactNativeJS:   longitude: 77.82997,
10-18 09:48:39.489 18428 19185 I ReactNativeJS:   accuracy: 4.449999809265137 }
10-18 09:48:39.490  4758  5016 I WM-WorkerWrapper: Worker result SUCCESS for Work [ id=5c4f6409-efe2-4511-9a21-63cef950bea6, tags={ com.mmt.notification.pushNotification.fcm.FCMWorker } ]
10-18 09:48:39.501  4758  5085 E BMP:CYFManager: AkamaiBMP SDK is not initialized
10-18 09:48:39.501 18428 18428 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:39.501 18428 18428 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:39.516 18428 18428 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:39.527 18428 19185 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760761119432,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:     mocked: false,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:     coords: 
10-18 09:48:39.527 18428 19185 I ReactNativeJS:      { altitude: 772.5999755859375,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:        heading: 0,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:        altitudeAccuracy: 1.4451377391815186,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:        latitude: 12.7488217,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:        speed: 0.02985388971865177,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:        longitude: 77.82997,
10-18 09:48:39.527 18428 19185 I ReactNativeJS:        accuracy: 4.449999809265137 } } ]
10-18 09:48:39.528  4758  5745 W MediaCodec-JNI: pid:4758,client name:com.makemytrip
10-18 09:48:39.532 18428 19185 I ReactNativeJS: 📤 Attempting to send background location...
10-18 09:48:39.532 18428 19185 E ReactNativeJS: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service
10-18 09:48:39.533 18428 19185 I ReactNativeJS: ⚠️ Skipping background location update - edge function not available
10-18 09:48:39.535 18428 19173 I TaskService: Finished task 'background-location-task' with eventId '31fb9974-aee9-477f-a404-2cb5a5fad59e'.
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: console.error: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service, js engine: hermes, stack:
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: _construct@1:117842
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: Wrapper@1:117496
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: _callSuper@1:115478
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: SyntheticError@1:116983
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: ?anon_0_@1:1972321
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: _next@1:573529
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: anonymous@1:136226
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: _callTimer@1:135225
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: anonymous@1:100174
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: __guard@1:100912
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: flushedQueue@1:100085
10-18 09:48:39.541 18428 19186 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-18 09:48:39.568 26036 27707 W WearableService: onGetService: Wear is not available on this device.
10-18 09:48:39.589  4758  5745 W AudioCapabilities: Unsupported mime audio/x-ms-wma
10-18 09:48:39.605 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:39.606  4758  5745 W AudioCapabilities: Unsupported mime audio/x-ms-wma
10-18 09:48:39.607  4758  5745 W AudioCapabilities: Unsupported mime audio/mpeg-L1
10-18 09:48:39.607  4758  5745 W AudioCapabilities: Unsupported mime audio/mpeg-L2
10-18 09:48:39.609  4758  5745 W AudioCapabilities: Unsupported mime audio/mpeg-L1
10-18 09:48:39.610  4758  5745 W AudioCapabilities: Unsupported mime audio/mpeg-L2
10-18 09:48:39.611  4758  5745 W AudioCapabilities: Unsupported mime audio/ra
10-18 09:48:39.611  4758  5745 W AudioCapabilities: Unsupported mime audio/ra
10-18 09:48:39.611  4758  5745 W AudioCapabilities: Unsupported mime audio/alac
10-18 09:48:39.613  4758  5745 W AudioCapabilities: Unsupported mime audio/alac
10-18 09:48:39.615  4758  5745 W AudioCapabilities: Unsupported mime audio/ape
10-18 09:48:39.615  4758  5745 W AudioCapabilities: Unsupported mime audio/x-ape
10-18 09:48:39.616  4758  5745 W AudioCapabilities: Unsupported mime audio/ape
10-18 09:48:39.616  4758  5745 W AudioCapabilities: Unsupported mime audio/x-ape
10-18 09:48:39.616  4758  5745 W AudioCapabilities: Unsupported mime audio/adpcm
10-18 09:48:39.617  4758  5745 W AudioCapabilities: Unsupported mime audio/x-ms-adpcm
10-18 09:48:39.617  4758  5745 W AudioCapabilities: Unsupported mime audio/pcm
10-18 09:48:39.617  4758  5745 W AudioCapabilities: Unsupported mime audio/pcm
10-18 09:48:39.617  4758  5745 W AudioCapabilities: Unsupported mime audio/dsd
10-18 09:48:39.618  4758  5745 W AudioCapabilities: Unsupported mime audio/dsd
10-18 09:48:39.619  4758  5745 W VideoCapabilities: Unsupported mime video/rv
10-18 09:48:39.619  4758  5745 W VideoCapabilities: Unsupported mime video/rv
10-18 09:48:39.619  4758  5745 W VideoCapabilities: Unsupported mime video/x-ms-wmv
10-18 09:48:39.620  4758  5745 W VideoCapabilities: Unsupported mime video/x-ms-wmv2
10-18 09:48:39.620  4758  5745 W VideoCapabilities: Unsupported mime video/x-ms-wmv
10-18 09:48:39.624  4758  5745 W VideoCapabilities: Unsupported mime video/x-ms-wmv2
10-18 09:48:39.627  4758  5745 W VideoCapabilities: Unsupported mime video/divx3
10-18 09:48:39.628  4758  5745 W VideoCapabilities: Unsupported mime video/divx3
10-18 09:48:39.628  4758  5745 W VideoCapabilities: Unsupported mime video/flv1
10-18 09:48:39.628  4758  5745 W VideoCapabilities: Unsupported mime video/x-flv
10-18 09:48:39.629  4758  5745 W VideoCapabilities: Unsupported mime video/flv1
10-18 09:48:39.629  4758  5745 W VideoCapabilities: Unsupported mime video/x-flv
10-18 09:48:39.629  4758  5745 W VideoCapabilities: Unsupported mime video/mjpeg
10-18 09:48:39.629  4758  5745 W VideoCapabilities: Unsupported mime video/x-motion-jpeg
10-18 09:48:39.629  4758  5745 W VideoCapabilities: Unsupported mime video/mjpeg
10-18 09:48:39.630  4758  5745 W VideoCapabilities: Unsupported mime video/x-motion-jpeg
10-18 09:48:39.630  4758  5745 W AudioCapabilities: Unsupported mime audio/x-adpcm-dvi-ima
10-18 09:48:39.630  4758  5745 W AudioCapabilities: Unsupported mime audio/x-adpcm-dvi-ima
10-18 09:48:39.630  4758  5745 W AudioCapabilities: Unsupported mime audio/x-adpcm-ms
10-18 09:48:39.630  4758  5745 W AudioCapabilities: Unsupported mime audio/x-adpcm-ms
10-18 09:48:39.631  4758  5745 W AudioCapabilities: Unsupported mime audio/alac
10-18 09:48:39.631  4758  5745 W AudioCapabilities: Unsupported mime audio/alac
10-18 09:48:39.648  4758  5745 W VideoCapabilities: Unsupported mime image/vnd.android.heic
10-18 09:48:39.648  4758  5745 W VideoCapabilities: Unsupported mime image/vnd.android.heic
10-18 09:48:39.649  4758  5745 W VideoCapabilities: Unsupported mime image/vnd.android.heic
10-18 09:48:39.649  4758  5745 W VideoCapabilities: Unsupported mime image/vnd.android.heic
10-18 09:48:39.712 26036  1251 I FusedLocation: (REDACTED) getLastLocation() noteOp denied for %s
10-18 09:48:39.713  4758  6125 D ProfileInstaller: Installing profile for com.makemytrip
10-18 09:48:39.732 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for a7bde9c8-d6fb-412e-a29f-8c04d59a5526:', 'SUBSCRIBED'
10-18 09:48:39.733 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 97334bab-4520-4c46-8c5e-568c16476c7e:', 'SUBSCRIBED'
10-18 09:48:39.734 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for ab10282a-8c94-44dc-a563-7cbdaa1f2152:', 'SUBSCRIBED'
10-18 09:48:39.735 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for e5863667-c95a-40ff-9572-d05a921bea53:', 'SUBSCRIBED'
10-18 09:48:39.736 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 62a975b5-e38c-4d14-bdb9-2804cd5efd62:', 'SUBSCRIBED'
10-18 09:48:39.743  5720 30312 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:39.746  5720 30312 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:39.746  5720 30312 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/VQf9nGPRqQcdUnE11k5gY-53GZiaQ8Kt7+lkPQJaXLA=.chk.tmp' ))
10-18 09:48:39.783 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 25c9b86c-1bcc-4c83-a52a-2bf9112a1805:', 'SUBSCRIBED'
10-18 09:48:39.790  5833  5905 D CompatChangeReporter: Compat change id reported: 311402873; UID 10178; state: ENABLED
10-18 09:48:39.790  5833  5905 D CompatChangeReporter: Compat change id reported: 323349338; UID 10178; state: ENABLED
10-18 09:48:39.791  5833  5905 W JobInfo : Job 'com.facebook.appmanager/com.facebook.oxygen.common.jobqueue.JobQueueService#5100' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:39.803 18428 19185 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-18 09:48:39.803 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:39.803 18428 19185 I ReactNativeJS: 'Location:', { latitude: 12.7488217,
10-18 09:48:39.803 18428 19185 I ReactNativeJS:   longitude: 77.82997,
10-18 09:48:39.803 18428 19185 I ReactNativeJS:   accuracy: 4.449999809265137 }
10-18 09:48:39.803 18428 19185 I ReactNativeJS: 📤 Updating location via RPC...
10-18 09:48:39.826  5720 23763 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:39.828  5720 23763 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:39.828  5720 23763 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/VQf9nGPRqQcdUnE11k5gY-53GZiaQ8Kt7+lkPQJaXLA=.tmp.chck' ))
10-18 09:48:39.876 26106 27420 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:39.891 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:40.034 18428 19185 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-18 09:48:40.079 26106 27420 I MdiSyncModule: (REDACTED) Receiving API connection from package '%s'...
10-18 09:48:40.081 26106 27420 I MdiSyncModule: API connection successful!
10-18 09:48:40.169 15708 19060 I ReactNativeJS: '📡 Response status:', 200
10-18 09:48:40.170 15708 19060 I ReactNativeJS: '✅ Notified 0 drivers successfully:', { success: true, message: 'No drivers available' }
10-18 09:48:40.170 15708 19060 I ReactNativeJS: ✅ Driver notifications sent successfully
10-18 09:48:40.170 15708 19060 I ReactNativeJS: '✅ Ride created successfully:', '8ddb9bb2-571b-4e13-94a0-afe448d23214'
10-18 09:48:40.170 15708 19060 I ReactNativeJS: '🚗 Navigating to driver search with params:', { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   pickupLocation: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   destinationLocation: 'Bagalur, Tamil Nadu, India',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   vehicleType: 'sedan',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   fareAmount: 391 }
10-18 09:48:40.170 15708 19060 I ReactNativeJS: 🚗 Attempting navigation to driver search...
10-18 09:48:40.170 15708 19060 I ReactNativeJS: '🚗 Navigation params prepared:', { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   pickupLocation: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   destinationLocation: 'Bagalur, Tamil Nadu, India',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   pickupLatitude: '12.7486583',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   pickupLongitude: '77.8299917',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   destinationLatitude: '12.8303987',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   destinationLongitude: '77.86623689999999',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   vehicleType: 'sedan',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   fareAmount: '391',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   distance: '10.56',
10-18 09:48:40.170 15708 19060 I ReactNativeJS:   duration: '16' }
10-18 09:48:40.186 15708 19060 I ReactNativeJS: 🚨 [DEBUG] DriverSearchScreen component function called
10-18 09:48:40.187 15708 19060 I ReactNativeJS: '🚨 [DEBUG] DriverSearchScreen hooks initialized:', { hasRouter: true,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   hasUser: true,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   paramsKeys: 
10-18 09:48:40.187 15708 19060 I ReactNativeJS:    [ 'rideId',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'pickupLocation',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'destinationLocation',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'pickupLatitude',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'pickupLongitude',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'destinationLatitude',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'destinationLongitude',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'vehicleType',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'fareAmount',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'distance',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      'duration' ],
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   paramsValues: 
10-18 09:48:40.187 15708 19060 I ReactNativeJS:    { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      pickupLocation: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      destinationLocation: 'Bagalur, Tamil Nadu, India',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      pickupLatitude: '12.7486583',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      pickupLongitude: '77.8299917',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      destinationLatitude: '12.8303987',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      destinationLongitude: '77.86623689999999',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      vehicleType: 'sedan',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      fareAmount: '391',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      distance: '10.56',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:      duration: '16' } }
10-18 09:48:40.187 15708 19060 I ReactNativeJS: 🚨 [DEBUG] DriverSearchScreen state initialized
10-18 09:48:40.187 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Parsing ride details from params...
10-18 09:48:40.187 15708 19060 I ReactNativeJS: '🚨 [DEBUG] Ride details parsed:', { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   bookingId: undefined,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   pickupLocation: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   destinationLocation: 'Bagalur, Tamil Nadu, India',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   vehicleType: 'sedan',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   bookingType: 'regular',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   fareAmount: '391',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   pickupLatitude: 12.7486583,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   pickupLongitude: 77.8299917,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   destinationLatitude: 12.8303987,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   destinationLongitude: 77.86623689999999 }
10-18 09:48:40.187 15708 19060 I ReactNativeJS: '🚨 [DEBUG] Driver search initialized with:', { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   bookingId: undefined,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   bookingType: 'regular',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   hasRideId: true,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   hasBookingId: false,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   platform: 'android',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:40.187Z' }
10-18 09:48:40.187 15708 19060 I ReactNativeJS: '🚨 [DEBUG] DriverSearchScreen RENDER with state:', { searchStatus: 'searching',
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   hasDriverData: false,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   showCelebration: false,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   initialCheckComplete: false,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   driverName: undefined,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   rideDetailsValid: true,
10-18 09:48:40.187 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:40.187Z' }
10-18 09:48:40.187 15708 19060 I ReactNativeJS: 🚨 [DEBUG] About to render main component UI
10-18 09:48:40.212 15708 19060 I ReactNativeJS: 🛑 [HOME] Stopping driver location polling
10-18 09:48:40.213 15708 19060 I ReactNativeJS: 🧹 [RIDES] Cleaning up subscriptions
10-18 09:48:40.214 15708 19060 I ReactNativeJS: '🗺️ [MAP] Props updated:', { showRoute: true,
10-18 09:48:40.214 15708 19060 I ReactNativeJS:   showDriverToPickupRoute: false,
10-18 09:48:40.214 15708 19060 I ReactNativeJS:   hasDriverLocation: false,
10-18 09:48:40.214 15708 19060 I ReactNativeJS:   hasPickupCoords: true,
10-18 09:48:40.214 15708 19060 I ReactNativeJS:   hasDestinationCoords: true,
10-18 09:48:40.214 15708 19060 I ReactNativeJS:   driverLocation: null,
10-18 09:48:40.214 15708 19060 I ReactNativeJS:   pickupCoords: { lat: 12.7486583, lng: 77.8299917 },
10-18 09:48:40.214 15708 19060 I ReactNativeJS:   destinationCoords: { lat: 12.8303987, lng: 77.86623689999999 } }
10-18 09:48:40.214 15708 19060 I ReactNativeJS: '🗺️ Calculating route between:', { latitude: 12.7486583, longitude: 77.8299917 }, 'and', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:40.214 15708 19060 I ReactNativeJS: '🗺️ [GOOGLE-MAPS] Getting directions from', { lat: 12.7486583, lng: 77.8299917 }, 'to', { lat: 12.8303987, lng: 77.86623689999999 }
10-18 09:48:40.215 15708 19060 I ReactNativeJS: '🌐 Making proxy request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/places-proxy/directions?origin=12.7486583%2C77.8299917&destination=12.8303987%2C77.86623689999999&mode=driving'
10-18 09:48:40.215 15708 19060 I ReactNativeJS: 🚨 [DEBUG] useEffect for ride monitoring triggered
10-18 09:48:40.215 15708 19060 I ReactNativeJS: 🔔 [DRIVER_SEARCH] ===== SETTING UP RIDE MONITORING =====
10-18 09:48:40.215 15708 19060 I ReactNativeJS: '🔔 [DRIVER_SEARCH] Platform:', 'android'
10-18 09:48:40.215 15708 19060 I ReactNativeJS: '🔔 [DRIVER_SEARCH] Available IDs:', { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.215 15708 19060 I ReactNativeJS:   bookingId: undefined }
10-18 09:48:40.219 15708 19060 I ReactNativeJS: 🚨 [DEBUG] DriverSearchScreen component function called
10-18 09:48:40.220 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.auth.api.phone.service.SmsRetrieverApiService.START pkg=com.google.android.gms }
10-18 09:48:40.220 15708 19060 I ReactNativeJS: '🚨 [DEBUG] DriverSearchScreen hooks initialized:', { hasRouter: true,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   hasUser: true,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   paramsKeys: 
10-18 09:48:40.220 15708 19060 I ReactNativeJS:    [ 'rideId',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'pickupLocation',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'destinationLocation',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'pickupLatitude',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'pickupLongitude',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'destinationLatitude',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'destinationLongitude',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'vehicleType',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'fareAmount',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'distance',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      'duration' ],
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   paramsValues: 
10-18 09:48:40.220 15708 19060 I ReactNativeJS:    { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      pickupLocation: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      destinationLocation: 'Bagalur, Tamil Nadu, India',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      pickupLatitude: '12.7486583',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      pickupLongitude: '77.8299917',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      destinationLatitude: '12.8303987',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      destinationLongitude: '77.86623689999999',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      vehicleType: 'sedan',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      fareAmount: '391',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      distance: '10.56',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:      duration: '16' } }
10-18 09:48:40.220 15708 19060 I ReactNativeJS: 🚨 [DEBUG] DriverSearchScreen state initialized
10-18 09:48:40.220 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Parsing ride details from params...
10-18 09:48:40.220 15708 19060 I ReactNativeJS: '🚨 [DEBUG] Ride details parsed:', { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   bookingId: undefined,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   pickupLocation: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   destinationLocation: 'Bagalur, Tamil Nadu, India',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   vehicleType: 'sedan',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   bookingType: 'regular',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   fareAmount: '391',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   pickupLatitude: 12.7486583,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   pickupLongitude: 77.8299917,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   destinationLatitude: 12.8303987,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   destinationLongitude: 77.86623689999999 }
10-18 09:48:40.220 15708 19060 I ReactNativeJS: '🚨 [DEBUG] Driver search initialized with:', { rideId: '8ddb9bb2-571b-4e13-94a0-afe448d23214',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   bookingId: undefined,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   bookingType: 'regular',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   hasRideId: true,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   hasBookingId: false,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   platform: 'android',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:40.220Z' }
10-18 09:48:40.220 15708 19060 I ReactNativeJS: '🚨 [DEBUG] DriverSearchScreen RENDER with state:', { searchStatus: 'searching',
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   hasDriverData: false,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   showCelebration: false,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   initialCheckComplete: false,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   driverName: undefined,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   rideDetailsValid: true,
10-18 09:48:40.220 15708 19060 I ReactNativeJS:   timestamp: '2025-10-18T04:18:40.220Z' }
10-18 09:48:40.221 15708 19060 I ReactNativeJS: 🚨 [DEBUG] About to render main component UI
10-18 09:48:40.230 15708 19060 I ReactNativeJS: 📱 [DRIVER_SEARCH] Mobile platform - setting up real-time subscription
10-18 09:48:40.230 15708 19060 I ReactNativeJS: '🚨 [DEBUG] setupRideSubscription called with rideId:', '8ddb9bb2-571b-4e13-94a0-afe448d23214'
10-18 09:48:40.230 15708 19060 I ReactNativeJS: '📱 [DRIVER_SEARCH] Setting up ride subscription for:', '8ddb9bb2-571b-4e13-94a0-afe448d23214'
10-18 09:48:40.230 15708 19060 I ReactNativeJS: 📡 [REALTIME] Setting up subscription for ride: 8ddb9bb2-571b-4e13-94a0-afe448d23214
10-18 09:48:40.230 15708 19060 I ReactNativeJS: ✅ Navigation completed successfully
10-18 09:48:40.231 15708 19060 I ReactNativeJS: '🗺️ [MAP] Props updated:', { showRoute: true,
10-18 09:48:40.231 15708 19060 I ReactNativeJS:   showDriverToPickupRoute: false,
10-18 09:48:40.231 15708 19060 I ReactNativeJS:   hasDriverLocation: false,
10-18 09:48:40.231 15708 19060 I ReactNativeJS:   hasPickupCoords: true,
10-18 09:48:40.231 15708 19060 I ReactNativeJS:   hasDestinationCoords: true,
10-18 09:48:40.231 15708 19060 I ReactNativeJS:   driverLocation: null,
10-18 09:48:40.231 15708 19060 I ReactNativeJS:   pickupCoords: { lat: 12.7486583, lng: 77.8299917 },
10-18 09:48:40.231 15708 19060 I ReactNativeJS:   destinationCoords: { lat: 12.8303987, lng: 77.86623689999999 } }
10-18 09:48:40.231 15708 19060 I ReactNativeJS: '🗺️ Calculating route between:', { latitude: 12.7486583, longitude: 77.8299917 }, 'and', { latitude: 12.8303987, longitude: 77.86623689999999 }
10-18 09:48:40.231 15708 19060 I ReactNativeJS: '🗺️ [GOOGLE-MAPS] Getting directions from', { lat: 12.7486583, lng: 77.8299917 }, 'to', { lat: 12.8303987, lng: 77.86623689999999 }
10-18 09:48:40.231 15708 19060 I ReactNativeJS: '🌐 Making proxy request to:', 'https://whubaypabojomdyfqxcf.supabase.co/functions/v1/places-proxy/directions?origin=12.7486583%2C77.8299917&destination=12.8303987%2C77.86623689999999&mode=driving'
10-18 09:48:40.232 15708 19060 I ReactNativeJS: '🔍 AuthNavigator - checking auth state:', { user: true,
10-18 09:48:40.232 15708 19060 I ReactNativeJS:   loading: false,
10-18 09:48:40.232 15708 19060 I ReactNativeJS:   segments: 'booking/driver-search',
10-18 09:48:40.232 15708 19060 I ReactNativeJS:   userEmail: '918608374935@a1taxi.app',
10-18 09:48:40.232 15708 19060 I ReactNativeJS:   userRole: 'customer' }
10-18 09:48:40.232 15708 19060 I ReactNativeJS: ✅ User authenticated and on correct screen
10-18 09:48:40.251 15708 15708 W [RNScreens]: topInsetEnabled prop is not available on Android
10-18 09:48:40.255 15708 15708 W [RNScreens]: topInsetEnabled prop is not available on Android
10-18 09:48:40.260 26036  3151 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205769623]
10-18 09:48:40.264 15708 15708 D Google Android Maps SDK: For capability in capabilities, log:
10-18 09:48:40.264 15708 15708 D Google Android Maps SDK: "AdvancedMarkers: false: Capabilities unavailable without a Map ID."Data-driven styling: false
10-18 09:48:40.270 15708  2180 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.271 15708  2180 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.311 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.314 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.315 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.315 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.316 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.316 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.318 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.318 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.319 15708 15708 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@30eb23f
10-18 09:48:40.323 15708 15708 D BLASTBufferQueue: [VRI[MainActivity]#31](f:0,a:4) destructor()
10-18 09:48:40.323 15708 15708 D BufferQueueConsumer: [VRI[MainActivity]#31(BLAST Consumer)31](id:3d5c00000036,api:0,p:-1,c:15708) disconnect
10-18 09:48:40.368 15708 15708 D MapsInitializer: preferredRenderer: null
10-18 09:48:40.368 15708 15708 D zzcc    : preferredRenderer: null
10-18 09:48:40.374 15708 15708 I Google Android Maps SDK: Google Play services package version: 253931035
10-18 09:48:40.377 15708 19060 I ReactNativeJS: '📡 [REALTIME] Ride subscription status for 8ddb9bb2-571b-4e13-94a0-afe448d23214:', 'SUBSCRIBED'
10-18 09:48:40.378 15708 15708 I Google Android Maps SDK: Google Play services maps renderer version(maps_core): 253425402
10-18 09:48:40.394 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.403 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.404 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.404 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.405 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.408 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.409 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.409 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.409 15708 15708 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.438 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.438 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.450  4758  4758 I Ads     : JS: The jsLoaded GMSG has been sent (https://googleads.g.doubleclick.net/mads/static/sdk/native/sdk-core-v40.html:997)
10-18 09:48:40.464 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.464 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.469 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.469 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.474 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.474 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.476 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.476 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.477 15708 15708 D BufferQueueConsumer: [](id:3d5c00000037,api:0,p:-1,c:15708) connect: controlledByApp=true
10-18 09:48:40.479 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.479 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.484 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.484 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.485 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.485 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.492 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.492 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.496 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.496 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.497 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.497 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.501 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.501 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.505 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.505 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.509 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.509 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.514 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.514 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.528 15708 19023 I .a1taxicustomer: Background young concurrent copying GC freed 22MB AllocSpace bytes, 5(136KB) LOS objects, 11% free, 75MB/85MB, paused 488us,197us total 107.994ms
10-18 09:48:40.540 15708 15708 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{59ad08d V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-18 09:48:40.547 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.547 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.551 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.551 15708  6155 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.552  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:40.553  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:40.554  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.a1taxicustomer, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:40.554 26036  5154 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.a1taxi.a1taxicustomer
10-18 09:48:40.555  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:40.558 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.577  1870  2278 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 970, arg2: 825, arg3: 15708, arg4: 5280, name: com.a1taxi.a1taxicustomer
10-18 09:48:40.590 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:40.598 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.603 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.603 15708  6156 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.605  5984  6089 I PermissionControllerServiceImpl: Updating user sensitive for uid 10307
10-18 09:48:40.676 15708 19060 I ReactNativeJS: '✅ Proxy response received:', 'OK'
10-18 09:48:40.676 15708 19060 I ReactNativeJS: '✅ [GOOGLE-MAPS] Directions retrieved:', { distance: '10.6 km',
10-18 09:48:40.676 15708 19060 I ReactNativeJS:   duration: '16 mins',
10-18 09:48:40.676 15708 19060 I ReactNativeJS:   distance_km: '10.56',
10-18 09:48:40.676 15708 19060 I ReactNativeJS:   duration_min: '15.5',
10-18 09:48:40.676 15708 19060 I ReactNativeJS:   source: 'Google Directions API' }
10-18 09:48:40.676 15708 19060 I ReactNativeJS: '✅ Got directions from Google API:', { distance: { text: '10.6 km', value: 10556 },
10-18 09:48:40.676 15708 19060 I ReactNativeJS:   duration: { text: '16 mins', value: 930 },
10-18 09:48:40.676 15708 19060 I ReactNativeJS:   polyline: { points: '}}xlA}d`zMn@NZ{@\\cAoAa@^iBHWAQAS?K@MHM`@I`@sEP_DgHJkDJoA?o@CM@GB]A}ASeEmA{Cy@yIkBgB]wBk@sBc@yAa@SIWQy@y@q@s@a@Uq@Yq@S}@OeAS{A]o@Wy@e@s@c@gAo@cC{A_CuAiDiB]O_CeAcCiAiAi@cBeAk@_@aCuAUM_Bm@mC}@mDcAeCy@}As@oBiAMQeAm@u@e@kEkCiAo@mGsCmCqAuBgAqBkAcDsBeCwAiDsBeB_AUCsDyAw@]SOyJyDeAk@}AaAqB_AmCeAwD{AgDyAsAq@kHiDaCmAoE{B_C_AsCeAsA_@s@MwEw@aCg@_C]kC[e@IyCw@{A[a@KgBYiDg@qBOoF{@WG}A[kAO{AEqFQcACwCSwAQwDs@_BQa@Ca@CqCYsAA}APmCn@e@BgBCk@F[CcAByAJuABiAIUEgBk@}Bw@yDoAiC}@oB{@}L_FaG_CmBm@{C{@[?uAa@gIaCuA[eASi@EyCc@cD[eDUgGS]KSCk@OqB{@wBkAq@c@_CwAq@k@a@s@c@iAOSSOk@UwAo@iA_@[Ew@AaCA' } }
10-18 09:48:40.680 26036 26051 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:40.704 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.704 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.704 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.704 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.704 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.704 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.705 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.706 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.706 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.706 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.706 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.706 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.706 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.706 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.707 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.707 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.707 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.707 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.707 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.707 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.707 15708  6163 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.709 15708 19060 I ReactNativeJS: '✅ Proxy response received:', 'OK'
10-18 09:48:40.709 15708 19060 I ReactNativeJS: '✅ [GOOGLE-MAPS] Directions retrieved:', { distance: '10.6 km',
10-18 09:48:40.709 15708 19060 I ReactNativeJS:   duration: '16 mins',
10-18 09:48:40.709 15708 19060 I ReactNativeJS:   distance_km: '10.56',
10-18 09:48:40.709 15708 19060 I ReactNativeJS:   duration_min: '15.5',
10-18 09:48:40.709 15708 19060 I ReactNativeJS:   source: 'Google Directions API' }
10-18 09:48:40.709 15708 19060 I ReactNativeJS: '✅ Got directions from Google API:', { distance: { text: '10.6 km', value: 10556 },
10-18 09:48:40.709 15708 19060 I ReactNativeJS:   duration: { text: '16 mins', value: 930 },
10-18 09:48:40.709 15708 19060 I ReactNativeJS:   polyline: { points: '}}xlA}d`zMn@NZ{@\\cAoAa@^iBHWAQAS?K@MHM`@I`@sEP_DgHJkDJoA?o@CM@GB]A}ASeEmA{Cy@yIkBgB]wBk@sBc@yAa@SIWQy@y@q@s@a@Uq@Yq@S}@OeAS{A]o@Wy@e@s@c@gAo@cC{A_CuAiDiB]O_CeAcCiAiAi@cBeAk@_@aCuAUM_Bm@mC}@mDcAeCy@}As@oBiAMQeAm@u@e@kEkCiAo@mGsCmCqAuBgAqBkAcDsBeCwAiDsBeB_AUCsDyAw@]SOyJyDeAk@}AaAqB_AmCeAwD{AgDyAsAq@kHiDaCmAoE{B_C_AsCeAsA_@s@MwEw@aCg@_C]kC[e@IyCw@{A[a@KgBYiDg@qBOoF{@WG}A[kAO{AEqFQcACwCSwAQwDs@_BQa@Ca@CqCYsAA}APmCn@e@BgBCk@F[CcAByAJuABiAIUEgBk@}Bw@yDoAiC}@oB{@}L_FaG_CmBm@{C{@[?uAa@gIaCuA[eASi@EyCc@cD[eDUgGS]KSCk@OqB{@wBkAq@c@_CwAq@k@a@s@c@iAOSSOk@UwAo@iA_@[Ew@AaCA' } }
10-18 09:48:40.737 15708 15708 D BufferQueueConsumer: [SurfaceTexture-0-15708-22](id:3d5c00000033,api:0,p:-1,c:15708) disconnect
10-18 09:48:40.745 15708  6161 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.749  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/base.apk' with 1 weak references
10-18 09:48:40.750  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.arm64_v8a.apk' with 1 weak references
10-18 09:48:40.750  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.bn.apk' with 1 weak references
10-18 09:48:40.751  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.en.apk' with 1 weak references
10-18 09:48:40.751  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.gu.apk' with 1 weak references
10-18 09:48:40.751  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.hi.apk' with 1 weak references
10-18 09:48:40.751  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.kn.apk' with 1 weak references
10-18 09:48:40.751  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.ml.apk' with 1 weak references
10-18 09:48:40.751  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.mr.apk' with 1 weak references
10-18 09:48:40.751  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.pa.apk' with 1 weak references
10-18 09:48:40.752  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.ta.apk' with 1 weak references
10-18 09:48:40.752  1870  2960 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 15708, arg4: 5021, name: com.a1taxi.a1taxicustomer
10-18 09:48:40.752  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.te.apk' with 1 weak references
10-18 09:48:40.752  3919  3941 W on.gearhead:car: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~IDaI5KlFNatiGruBiE7H2A==/com.google.android.apps.maps-74I08DO_1CSy7wM1RkCryg==/split_config.xxhdpi.apk' with 1 weak references
10-18 09:48:40.680 26036 26051 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:40.755 26106 26139 E IPCThreadState: Binder transaction failure. id: 428342539, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:40.755 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:40.757 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:40.757 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:40.757 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:40.757 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:40.772 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.772 15708  6158 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:40.785 26036 31675 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:40.883  5720 30312 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:40.885  5720 30312 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:40.885  5720 30312 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/RULnqkSCmMsn26sEUFQDUbUvG5izO5Y9P-aBjupzQd4=.tmp' ))
10-18 09:48:40.896  5720 10001 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:40.898  5720 10001 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:40.898  5720 10001 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/gWgTZnIqB0bcDmVGEx4CjYf1TPjleALDkATWsjIQMIg=.enc.tmp' ))
10-18 09:48:40.914 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:40.987 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205410345]
10-18 09:48:41.001 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.checkin.START pkg=com.google.android.gms }
10-18 09:48:41.003  1870  2896 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:41.004  1870  1997 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:41.015  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:41.016  5720 32663 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.017  1870  2896 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:41.017  5720 32663 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.019  5720 32663 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014518))
10-18 09:48:41.023  5720 32663 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:41.023  5720 32663 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:41.032  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:41.033  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:41.077 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205770440]
10-18 09:48:41.084  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:41.089  1870  2896 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:41.111  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:41.217 30764  4267 D nativeloader: Load /data/data/com.whatsapp/files/decompressed/libs.spo/libstatic-webp.so using class loader ns clns-7 (caller=/data/app/~~kNwR8g978LWTToEEPgO1Hw==/com.whatsapp-LOnt4c8iiB1IgXJY4E5YGQ==/base.apk): ok
10-18 09:48:41.301  5720 23763 I MediaProvider: Observed non-standard /storage/emulated/0/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Stickers/.nomedia
10-18 09:48:41.303  5720 23763 D SQLiteQueryBuilder: UPDATE files SET inferred_date=?,bucket_display_name=?,parent=?,volume_name=?,date_expires=?,_modifier=?,_display_name=?,mime_type=?,_data=?,is_trashed=?,bucket_id=?,media_type=?,relative_path=?,generation_modified=(SELECT generation FROM local_metadata),_id=ifnull(_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Stickers/STK-20251018-WA0003.webp' ), _id) WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data =? ))
10-18 09:48:41.312  5720  5837 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((_id='1000014517') AND (volume_name IN ( 'external_primary' )))
10-18 09:48:41.314  5720  5837 V MediaProvider: Deleted backup of old file path: /storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/RULnqkSCmMsn26sEUFQDUbUvG5izO5Y9P-aBjupzQd4=.tmp
10-18 09:48:41.331  5720 32660 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.333  5720 32660 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:41.334  5720 32660 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/nMNdGMc07asXv53lOD+nnbGCT8vB3qvoRnmeOEAfLa4=.tmp' ))
10-18 09:48:41.339 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:41.395  5720  6973 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.397  5720  6973 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:41.397  5720  6973 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/s-TlDqmhTr3Kp6PkH8Bb-CUihG+zcAf084TBxp-sMUY=.enc.tmp' ))
10-18 09:48:41.402 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:41.480 30764 32731 I com.whatsapp: Background concurrent copying GC freed 10MB AllocSpace bytes, 353(7644KB) LOS objects, 49% free, 12MB/24MB, paused 1.457ms,89us total 1.521s
10-18 09:48:41.540 26036 26081 I WifiScanner: onFullResults
10-18 09:48:41.540 26036 26228 I WifiScanner: onFullResults
10-18 09:48:41.545 26036 27730 I WifiScanner: onFullResults
10-18 09:48:41.552 26036 31675 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:41.577  6223  6223 I facebook.system: Using CollectorTypeCC GC.
10-18 09:48:41.582  6223  6223 E facebook.system: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:41.586  6223  6223 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:41.591 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.592 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.592 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.592 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.595 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.595 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.595 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.608 26036 26172 I fyyu    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-18 09:48:41.609  6223  6223 E facebook.system: BBinder_init Processname  <pre-initialized>  
10-18 09:48:41.609  6223  6223 E facebook.system: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:41.613  5720 32661 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.614  5720 32661 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:41.615  5720 32661 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/nMNdGMc07asXv53lOD+nnbGCT8vB3qvoRnmeOEAfLa4=.chk.tmp' ))
10-18 09:48:41.635  6223  6223 D nativeloader: Configuring clns-7 for other apk /data/app/~~OnPo0WR3d0Lc7aJXgQKn3w==/com.facebook.system-ffZPhDvxlIKBYqaqoMFusQ==/base.apk. target_sdk_version=35, uses_libraries=, library_path=/data/app/~~OnPo0WR3d0Lc7aJXgQKn3w==/com.facebook.system-ffZPhDvxlIKBYqaqoMFusQ==/lib/arm64, permitted_path=/data:/mnt/expand:/data/user/0/com.facebook.system
10-18 09:48:41.636  6223  6223 D CompatChangeReporter: Compat change id reported: 202956589; UID 10093; state: ENABLED
10-18 09:48:41.639  4758  4781 I BpBinder: onLastStrongRef automatically unlinking death recipients: 
10-18 09:48:41.646  6223  6223 V GraphicsEnvironment: Currently set values for:
10-18 09:48:41.646  6223  6223 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:41.646  6223  6223 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:41.646  6223  6223 V GraphicsEnvironment: com.facebook.system is not listed in per-application setting
10-18 09:48:41.647 26036 26070 I GoogleSignatureVerifier: package info is not set correctly
10-18 09:48:41.660  4758  4782 W com.makemytrip: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk' with 1 weak references
10-18 09:48:41.661 26036  1250 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:41.665  3919  5024 V ClearcutMetricXmitter: Transmission is done.
10-18 09:48:41.694  5720 30312 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.696  5720 30312 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:41.696  5720 30312 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/GxxTQD+NLDBtAkx32sHjtNPg6gzDvSVti9p2zUFSmwE=.tmp' ))
10-18 09:48:41.701 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:41.744  5720 32663 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.746  5720 32663 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:41.746  5720 32663 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/LxPVhe+Lw1lU7b5ZgFlkr8whnBecc+bzri8uWedys1s=.enc.tmp' ))
10-18 09:48:41.763  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:41.792 26036 27730 W ProviderHelper: Unknown dynamite feature providerinstaller.dynamite
10-18 09:48:41.821  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:41.822  5720 10001 D SQLiteQueryBuilder: SELECT instance_id, _user_id, compilation, disc_number, duration, album_artist, resolution, orientation, artist, author, inferred_date, format, height, is_drm, bucket_display_name, owner_package_name, parent, volume_name, date_modified, writer, date_expires, composer, _display_name, datetaken, mime_type, bitrate, cd_track_number, _id, xmp, year, oem_metadata, _data, _size, album, genre, title, width, is_favorite, is_trashed, group_id, document_id, generation_added, is_download, generation_modified, is_pending, date_added, capture_framerate, num_tracks, original_document_id, bucket_id, media_type, relative_path FROM files WHERE ((volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.827  5720 10001 W MediaProvider: isAppCloneUserPair for user 0: false
10-18 09:48:41.828  5720 10001 D SQLiteQueryBuilder: INSERT INTO files (_user_id,inferred_date,format,bucket_display_name,owner_package_name,parent,volume_name,date_expires,_modifier,_display_name,mime_type,_data,title,is_trashed,is_pending,date_added,bucket_id,media_type,relative_path,generation_added,generation_modified,_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT generation FROM local_metadata),(SELECT generation FROM local_metadata),_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/GxxTQD+NLDBtAkx32sHjtNPg6gzDvSVti9p2zUFSmwE=.chk.tmp' ))
10-18 09:48:41.833 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:41.850 26036 27730 W WearableService: onGetService: Wear is not available on this device.
10-18 09:48:41.895  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:41.910  5833  6167 E ActivityThread: Failed to find provider info for com.facebook.appmanager.nekodirect
10-18 09:48:41.995  5720 18797 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.996  5720 18797 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:41.996  5720 18797 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014523))
10-18 09:48:41.999  5720 18797 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:42.000  5720 18797 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:42.035  3458  6306 D androidtc: Initializing SystemTextClassifier, type = System
10-18 09:48:42.035 26036 26036 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.presencemanager.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-18 09:48:42.040 26036 26036 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.presencemanager.service.INTERNAL_IDENTITY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-18 09:48:42.056  5720 32660 D SQLiteQueryBuilder: UPDATE files SET inferred_date=?,bucket_display_name=?,parent=?,volume_name=?,date_expires=?,_modifier=?,_display_name=?,mime_type=?,_data=?,is_trashed=?,bucket_id=?,media_type=?,relative_path=?,generation_modified=(SELECT generation FROM local_metadata),_id=ifnull(_GET_ID( '/storage/emulated/0/Android/media/com.whatsapp/WhatsApp/Media/.Statuses/638e49c19c794854943610254b90269a.jpg' ), _id) WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data =? ))
10-18 09:48:42.061  5720 30312 D SQLiteQueryBuilder: SELECT media_type, _data, _id, is_download, mime_type FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:42.061  5720  5837 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((_id='1000014522') AND (volume_name IN ( 'external_primary' )))
10-18 09:48:42.061  5720 30312 D SQLiteQueryBuilder: SELECT rowid FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_data = ?))
10-18 09:48:42.062  5720 30312 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' ))) AND ((_id=1000014524))
10-18 09:48:42.062 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:42.064  5720  5837 V MediaProvider: Deleted backup of old file path: /storage/emulated/0/Android/media/com.whatsapp/WhatsApp/.Shared/GxxTQD+NLDBtAkx32sHjtNPg6gzDvSVti9p2zUFSmwE=.tmp
10-18 09:48:42.065  5720 30312 D SQLiteQueryBuilder: DELETE FROM files WHERE ((owner_package_name IN ( 'com.whatsapp' )) AND (volume_name IN ( 'external_primary' )) AND (_id NOT IN (SELECT parent FROM files WHERE parent IS NOT NULL))) AND ((_data = ?))
10-18 09:48:42.065  5720 30312 I MediaProvider: Deleted 1 0 0 0 0 0 0 items on external_primary due to com.whatsapp
10-18 09:48:42.069 26036 26099 I UriTaskContentObserver: (REDACTED) Throttling content uri change event for %s
10-18 09:48:42.101  5833  6167 W JobInfo : Job 'com.facebook.appmanager/com.facebook.oxygen.appmanager.update.core.UpdateService#5500' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:42.120  5720  5729 W FuseDaemon: Reducing the number of considered missed Gc histogram windows from 423 to 100
10-18 09:48:42.457 30764 32730 I com.whatsapp: Compiler allocated 14MB to compile X.8sV X.9Ex.BfH(X.8ZP)
10-18 09:48:42.620  1870  2278 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:42.621  1870  2278 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:42.631  5751  5557 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:42.631  5751  5557 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:42.678  1870  3647 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:42.678  1870  3647 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:42.696  1870  3647 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:42.707  5833  5941 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-18 09:48:42.716 12016  5621 E FbnsAIDLClientManager: Max Try reached for binding to FbnsAIDLService, threadId 48878
10-18 09:48:42.719 12016  5621 E FbnsAIDLClientManager: Fbns AIDL request got RemoteException
10-18 09:48:42.719 12016  5621 E FbnsAIDLClientManager: android.os.RemoteException: AIDLService is not bound
10-18 09:48:42.719 12016  5621 E FbnsAIDLClientManager: 	at X.HVM.call(:2479)
10-18 09:48:42.719 12016  5621 E FbnsAIDLClientManager: 	at java.util.concurrent.FutureTask.run(FutureTask.java:317)
10-18 09:48:42.719 12016  5621 E FbnsAIDLClientManager: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:42.719 12016  5621 E FbnsAIDLClientManager: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:42.719 12016  5621 E FbnsAIDLClientManager: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:42.724 12016  5615 E FbnsAIDLClientManager: Max Try reached for binding to FbnsAIDLService, threadId 48877
10-18 09:48:42.725 12016  5615 E FbnsAIDLClientManager: Fbns AIDL request got RemoteException
10-18 09:48:42.725 12016  5615 E FbnsAIDLClientManager: android.os.RemoteException: AIDLService is not bound
10-18 09:48:42.725 12016  5615 E FbnsAIDLClientManager: 	at X.HVM.call(:2479)
10-18 09:48:42.725 12016  5615 E FbnsAIDLClientManager: 	at java.util.concurrent.FutureTask.run(FutureTask.java:317)
10-18 09:48:42.725 12016  5615 E FbnsAIDLClientManager: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:42.725 12016  5615 E FbnsAIDLClientManager: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:42.725 12016  5615 E FbnsAIDLClientManager: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:42.728  4649  4649 W fbservices-stub:InitStatus: Not blocking Service (53264034)
10-18 09:48:42.849 15708 15708 I ScrollIdentify: on fling
10-18 09:48:43.052 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.mdd.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:43.057 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.mobstore.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:43.165  5984  6201 I PermissionControllerServiceImpl: Updating user sensitive for uid 10178
10-18 09:48:43.568 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.semanticlocationhistory.zeroparty.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:43.762  1870  2896 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:43.763  1870  2895 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:43.792  1870  2895 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-18 09:48:43.794  1870  3647 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-18 09:48:43.841  5833  6323 D ProfileInstaller: Installing profile for com.facebook.appmanager
10-18 09:48:44.007 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.007 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.007 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.008 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.008 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.008 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.008 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.009 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.009 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.010 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.010 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.011 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.012 31924 31936 W System  : A resource failed to call ZipFile.close. 
10-18 09:48:44.017 31924 31936 W fb4a.ZxO: AsyncDrawable with url https://lookaside.facebook.com/ras/v2/?id=AQAEK0GLr3HF wasn't hidden before it was GC'd. Please call setVisible(false, ___ ) in View.onDetachedFromWindow()
10-18 09:48:44.017 31924 31936 W fb4a.ZxO: AsyncDrawable with url https://lookaside.facebook.com/ras/v2/?id=AQAL4Sw8b3I2 wasn't hidden before it was GC'd. Please call setVisible(false, ___ ) in View.onDetachedFromWindow()
10-18 09:48:44.017 31924 31936 W fb4a.ZxO: AsyncDrawable with url https://lookaside.facebook.com/ras/v2/?id=AQABIxlS9QCp wasn't hidden before it was GC'd. Please call setVisible(false, ___ ) in View.onDetachedFromWindow()
10-18 09:48:44.017 31924 31936 W fb4a.ZxO: AsyncDrawable with url https://lookaside.facebook.com/ras/v2/?id=AQABv60ZiHcT wasn't hidden before it was GC'd. Please call setVisible(false, ___ ) in View.onDetachedFromWindow()
10-18 09:48:44.530 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:44.532 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:44.533 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:44.536 18428 19185 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-18 09:48:44.536 18428 19185 I ReactNativeJS:   heading: 36,
10-18 09:48:44.536 18428 19185 I ReactNativeJS:   altitudeAccuracy: 1.376991629600525,
10-18 09:48:44.536 18428 19185 I ReactNativeJS:   latitude: 12.748765,
10-18 09:48:44.536 18428 19185 I ReactNativeJS:   speed: 0.20691832900047302,
10-18 09:48:44.536 18428 19185 I ReactNativeJS:   longitude: 77.8299533,
10-18 09:48:44.536 18428 19185 I ReactNativeJS:   accuracy: 3.6500000953674316 }
10-18 09:48:44.541 26036  1210 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-18 09:48:44.543 18428 18428 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:44.544 18428 18428 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:44.550 18428 18428 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:44.553 18428 19185 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760761124444,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:     mocked: false,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:     coords: 
10-18 09:48:44.553 18428 19185 I ReactNativeJS:      { altitude: 772.5999755859375,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:        heading: 36,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:        altitudeAccuracy: 1.376991629600525,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:        latitude: 12.748765,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:        speed: 0.20691832900047302,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:        longitude: 77.8299533,
10-18 09:48:44.553 18428 19185 I ReactNativeJS:        accuracy: 3.6500000953674316 } } ]
10-18 09:48:44.558 18428 19185 I ReactNativeJS: 📤 Attempting to send background location...
10-18 09:48:44.558 18428 19185 E ReactNativeJS: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service
10-18 09:48:44.558 18428 19185 I ReactNativeJS: ⚠️ Skipping background location update - edge function not available
10-18 09:48:44.559 18428 19173 I TaskService: Finished task 'background-location-task' with eventId 'c493c390-187e-426c-be5a-18f47265b8fe'.
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: console.error: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service, js engine: hermes, stack:
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: _construct@1:117842
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: Wrapper@1:117496
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: _callSuper@1:115478
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: SyntheticError@1:116983
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: ?anon_0_@1:1972321
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: _next@1:573529
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: anonymous@1:136226
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: _callTimer@1:135225
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: anonymous@1:100174
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: __guard@1:100912
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: flushedQueue@1:100085
10-18 09:48:44.563 18428 19186 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-18 09:48:44.609 15708 19060 I ReactNativeJS: 🚨 [DEBUG] Driver location polling interval triggered
10-18 09:48:44.833 18428 19185 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-18 09:48:44.833 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:44.834 18428 19185 I ReactNativeJS: 'Location:', { latitude: 12.748765,
10-18 09:48:44.834 18428 19185 I ReactNativeJS:   longitude: 77.8299533,
10-18 09:48:44.834 18428 19185 I ReactNativeJS:   accuracy: 3.6500000953674316 }
10-18 09:48:44.834 18428 19185 I ReactNativeJS: 📤 Updating location via RPC...
10-18 09:48:45.069 18428 19185 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-18 09:48:45.245 30791 30842 E eezj    : (REDACTED) Trace %s timed out after %d ms. Complete trace: %s
10-18 09:48:45.245 30791 30842 E eezj    : efas: 
10-18 09:48:45.245 30791 30842 E eezj    : 	at tk_trace.OverlayBinder.setActivityState(Started After:0)
10-18 09:48:45.245 30791 30842 E eezj    : 	at tk_trace.Invoking OverlayBinder(Started After:0)
10-18 09:48:45.254 30791 30840 E eezj    : (REDACTED) Trace %s timed out after %d ms. Complete trace: %s
10-18 09:48:45.254 30791 30840 E eezj    : efas: 
10-18 09:48:45.254 30791 30840 E eezj    : 	at tk_trace.Update GoogleApp_AccountMenuDataStore(Started After:0)
10-18 09:48:45.254 30791 30840 E eezj    : 	at tk_trace.OverlayBinder.setActivityState(Started After:0)
10-18 09:48:45.254 30791 30840 E eezj    : 	at tk_trace.Invoking OverlayBinder(Started After:0)
10-18 09:48:45.256 30791 31001 E eezj    : (REDACTED) Trace %s timed out after %d ms. Complete trace: %s
10-18 09:48:45.256 30791 31001 E eezj    : efas: 
10-18 09:48:45.256 30791 31001 E eezj    : 	at tk_trace.Query: SELECT response_data, write_ms FROM cache_table WHERE request_data=?(Started After:0)
10-18 09:48:45.256 30791 31001 E eezj    : 	at tk_trace.Transaction(Started After:0)
10-18 09:48:45.256 30791 31001 E eezj    : 	at tk_trace.PersistentByteStoreInstaller.storeDidFault(Started After:0)
10-18 09:48:45.267 30791 31002 E eezj    : (REDACTED) Trace %s timed out after %d ms. Complete trace: %s
10-18 09:48:45.267 30791 31002 E eezj    : efas: 
10-18 09:48:45.267 30791 31002 E eezj    : 	at tk_trace.GIL:ClearcutTransmitter(Started After:1)
10-18 09:48:45.267 30791 31002 E eezj    : 	at tk_trace.GIL:NVLGraftHandler(Started After:1)
10-18 09:48:45.267 30791 31002 E eezj    : 	at tk_trace.GIL:AutoProcessBatch(Started After:1)
10-18 09:48:45.267 30791 31002 E eezj    : 	at tk_trace.SubscriptionCallbacks.onNewData(Started After:0)
10-18 09:48:45.267 30791 31002 E eezj    : 	at tk_trace.OverlayBinder.setActivityState(Started After:0)
10-18 09:48:45.267 30791 31002 E eezj    : 	at tk_trace.Invoking OverlayBinder(Started After:0)
10-18 09:48:45.267 30791 31002 E eezj    : 	Suppressed: efar: 
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.DISCOVER_ATF_RENDER_END(unfinished)(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.handleNewRenderableStream 119 ms(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.SubscriptionCallbacks.onNewData 119 ms(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.OverlayBinder.setActivityState 0 ms(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.Invoking OverlayBinder 0 ms(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 	Suppressed: efar: 
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.DISCOVER_ATF_RENDER_START(unfinished)(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.handleNewRenderableStream 119 ms(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.SubscriptionCallbacks.onNewData 119 ms(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.OverlayBinder.setActivityState 0 ms(Unknown Source:0)
10-18 09:48:45.267 30791 31002 E eezj    : 		at tk_trace.Invoking OverlayBinder 0 ms(Unknown Source:0)
10-18 09:48:45.479 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:45.700 32656 32687 I Finsky  : [42487] Stats for Executor: GrpcBackgroundExecutor ubw@3fc880e[Running, pool size = 1, active threads = 0, queued tasks = 0, completed tasks = 1]
10-18 09:48:45.762 26036 26081 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:45.762 26036 26081 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:45.764 26106 26139 E IPCThreadState: Binder transaction failure. id: 428353390, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:45.765 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:45.765 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:45.768 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:45.768 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:45.768 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:45.768 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:46.149 30791 30791 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-18 09:48:46.191 30791 30791 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:46.191 30791 30791 D BufferQueueConsumer: [](id:784700000007,api:0,p:-1,c:30791) connect: controlledByApp=false
10-18 09:48:46.192 30791 30791 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:0) constructor()
10-18 09:48:46.192 30791 30791 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-18 09:48:46.214 30791 31003 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585516921036590(auto) mPendingTransactions.size=0 graphicBufferId=132246338011190 transform=0
10-18 09:48:46.216 30791 30791 I bnew    : onStart
10-18 09:48:46.301 30791 30791 I bkwn    : (REDACTED) [%s] onStart()
10-18 09:48:46.305 30791 30791 I bkys    : Reloading theme data
10-18 09:48:46.353 30791 30791 I bnew    : onResume
10-18 09:48:46.453 26106 26106 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:46.567  5751  5557 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:46.567  5751  5557 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:46.626 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:46.655 26036  1210 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:46.680 26036 26228 I WifiScanner: onFullResults
10-18 09:48:46.686 26036 26228 I WifiScanner: onFullResults
10-18 09:48:46.688 26036 26228 I WifiScanner: onFullResults
10-18 09:48:46.702 24977 27989 W cr_ChildProcessConn: onServiceDisconnected (crash or killed by oom): pid=32431 bindings:W   
10-18 09:48:46.836 30791 30791 I bmyq    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-18 09:48:46.838 30791 30791 I bmyq    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-18 09:48:46.843  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:46.844  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:46.844  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:46.846  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:46.883  5751  5557 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:46.883  5751  5557 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:46.883  5751  5557 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:46.884  5751  5557 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:46.979 26036 31675 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:47.032 15708  6160 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:47.048 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:47.048 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:47.049 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:47.049 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:47.050 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:47.050 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:47.051 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:47.068 26036 26172 I fyyu    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-18 09:48:47.071  1870  3647 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 15708, arg4: 5280, name: com.a1taxi.a1taxicustomer
10-18 09:48:47.073 15708 15708 I Choreographer: Skipped 30 frames!  The application may be doing too much work on its main thread.
10-18 09:48:47.084 15708 19040 D BLASTBufferQueue: [VRI[MainActivity]#29](f:0,a:4) destructor()
10-18 09:48:47.085 15708 19040 D BufferQueueConsumer: [VRI[MainActivity]#29(BLAST Consumer)29](id:3d5c00000034,api:0,p:-1,c:15708) disconnect
10-18 09:48:47.101 15708 15708 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:47.116 15708 19060 I ReactNativeJNI: Memory warning (pressure level: TRIM_MEMORY_UI_HIDDEN) received by JS VM, ignoring because it's non-severe
10-18 09:48:47.336 24977 24977 I cr_TabWebContentsObs: primaryMainFrameRenderProcessGone() for tab id: 140, already needs reload: false, termination status: 0
10-18 09:48:48.002 30791 30791 I bmyq    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-18 09:48:48.002 30791 30791 I bmyq    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-18 09:48:48.025 18428 18428 I BackgroundFetchTaskConsumer: Stopping an alarm for task 'background-fetch-task'.
10-18 09:48:48.038 18428 19185 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-18 09:48:48.039 18428 19185 I ReactNativeJS: === LOADING RIDES ===
10-18 09:48:48.039 18428 19185 I ReactNativeJS: 'Driver ID:', 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6'
10-18 09:48:48.039 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:48.049 18428 18428 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:48.050 18428 18428 D BufferQueueConsumer: [](id:47fc0000000d,api:0,p:-1,c:18428) connect: controlledByApp=false
10-18 09:48:48.050 18428 18428 D BLASTBufferQueue: [VRI[MainActivity]#13](f:0,a:0) constructor()
10-18 09:48:48.050 18428 18428 D BLASTBufferQueue: [VRI[MainActivity]#13](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-18 09:48:48.081 30791 30791 I bnew    : onPause
10-18 09:48:48.115 18428 19160 D BLASTBufferQueue: [VRI[MainActivity]#13](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=585518822191052(auto) mPendingTransactions.size=0 graphicBufferId=79147657330781 transform=0
10-18 09:48:48.117 18428 19185 I ReactNativeJS: 🔍 Loading current ride...
10-18 09:48:48.134 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:48.134 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:48.135 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:48.135 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:48.135 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:48.135 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:48.135 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:48.135 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:48.139 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:48.137Z'
10-18 09:48:48.139 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:48.170 18428 18428 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-18 09:48:48.189  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-18 09:48:48.194 30791 30807 V ClearcutMetricXmitter: Transmission is done.
10-18 09:48:48.209  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-18 09:48:48.211  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-18 09:48:48.212  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-18 09:48:48.237  5751 26955 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:48.237  5751 26955 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:48.239  5751 26955 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:48.239  5751 26955 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:48.339 18428 19185 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-18 09:48:48.339 18428 19185 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-18 09:48:48.400 24977 24977 W chromium: [WARNING:content/browser/gpu/gpu_process_host.cc:992] Reinitialized the GPU process after a crash. The reported initialization time was 682 ms
10-18 09:48:48.457  5751 26955 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:48.457  5751 26955 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:48.508 30791 30791 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-18 09:48:48.544  5751 26955 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:48.544  5751 26955 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:48.561 30791 30791 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-18 09:48:48.562 30791 30791 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:3) destructor()
10-18 09:48:48.562 30791 30791 D BufferQueueConsumer: [VRI[Launcher]#7(BLAST Consumer)7](id:784700000007,api:0,p:-1,c:30791) disconnect
10-18 09:48:48.574 18428 19185 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-18 09:48:48.581 18428 19185 I ReactNativeJS: ✅ No pending ride notifications
10-18 09:48:48.581 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:48.581 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:48.582 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:48.582 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:48.582 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:48.582 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:48.582 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:48.583 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:48.583 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:48.583Z'
10-18 09:48:48.583 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:48.583 18428 19185 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-18 09:48:48.583 18428 19185 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-18 09:48:48.583 18428 19185 I ReactNativeJS: '  - Pending rides:', 0
10-18 09:48:48.583 18428 19185 I ReactNativeJS: '  - Modal already showing:', false
10-18 09:48:48.583 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:48.583 18428 19185 I ReactNativeJS: '  - Has current ride:', false
10-18 09:48:48.584 18428 19185 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-18 09:48:48.584 18428 19185 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-18 09:48:48.584 18428 19185 I ReactNativeJS:   modalAlreadyShowing: false,
10-18 09:48:48.584 18428 19185 I ReactNativeJS:   driverStatus: 'online',
10-18 09:48:48.584 18428 19185 I ReactNativeJS:   hasCurrentRide: false }
10-18 09:48:48.597 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:48.597 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:48.597 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:48.597 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:48.597 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:48.597 18428 19185 I ReactNativeJS: '  - Loading:', false
10-18 09:48:48.597 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:48.597 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:48.597 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:48.597Z'
10-18 09:48:48.597 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:48.607 30791 30791 I bnew    : onStop
10-18 09:48:48.761 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.auth.service.START pkg=com.google.android.gms }
10-18 09:48:48.855 12016 12190 E msys    : E[N mns]_OnDiskCacheGetData(632)=>Start post callback cache refresh DNS resolution
10-18 09:48:48.856 12016 12190 W LibevQuicAsyncUDPSocket.h: setTosOrTrafficClass not implemented in LibevQuicAsyncUDPSocket
10-18 09:48:48.883 12016 12190 E msys    : E[N mns]_OnSystemDNSSuccessCallback(340)=>Cache refresh succeeded with system DNS resolver. IP count: 2
10-18 09:48:49.005 12016 16857 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: 39195
10-18 09:48:49.055 12016 16857 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: -3007
10-18 09:48:49.072 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.fido.fido2.regular.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-18 09:48:49.085 12016 16447 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: 3931
10-18 09:48:49.088 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.ocr.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:49.134 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.chimera.container.moduleinstall.ModuleInstallService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:49.152 12016 16857 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: -29657
10-18 09:48:49.167 12016 16454 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: 14403
10-18 09:48:49.205 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.ocr.service.internal.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-18 09:48:49.221 12016 16857 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: 96
10-18 09:48:49.232 12016 16447 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: 12364
10-18 09:48:49.297 12016 16454 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: -37325
10-18 09:48:49.301 12016 16447 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: 43220
10-18 09:48:49.377 12016 16857 E IdleQueuePayloadBasedServiceLayer: Request empty, but still some servings left: -43220
10-18 09:48:49.454 18428 19185 I ReactNativeJS: === NAVIGATION CHECK ===
10-18 09:48:49.454 18428 19185 I ReactNativeJS: 'In auth group:', false
10-18 09:48:49.455 18428 19185 I ReactNativeJS: 'Has session:', false
10-18 09:48:49.455 18428 19185 I ReactNativeJS: 'Has driver:', true
10-18 09:48:49.455 18428 19185 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'profile' ]
10-18 09:48:49.455 18428 19185 I ReactNativeJS: 'Loading state:', false
10-18 09:48:49.455 18428 19185 I ReactNativeJS: 'Is authenticated:', { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   license_number: 'TN34NNH678',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   license_expiry: '2027-12-24',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   status: 'online',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   rating: 5,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   total_rides: 20,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   is_verified: true,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   vehicle_id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   vendor_id: null,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   phone_number: '9800980002',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   name: 'balaji',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   created_at: '2025-09-18T20:21:07.467583+00:00',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   updated_at: '2025-10-18T00:09:52.52831+00:00',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   vehicles: 
10-18 09:48:49.455 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      capacity: 4 },
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   user: 
10-18 09:48:49.455 18428 19185 I ReactNativeJS:    { id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      email: 'balaji@gmail.com',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      role: 'driver',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      full_name: 'balaji',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      phone_number: '9800980002',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      avatar_url: null,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      is_active: true,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      created_at: '2025-09-18T20:21:06.804973+00:00',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      updated_at: '2025-09-18T20:21:06.804973+00:00' },
10-18 09:48:49.455 18428 19185 I ReactNativeJS:   vehicle: 
10-18 09:48:49.455 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:49.455 18428 19185 I ReactNativeJS:      capacity: 4 } }
10-18 09:48:49.455 18428 19185 I ReactNativeJS: No navigation needed - staying in current route
10-18 09:48:49.469 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:49.472 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:49.472 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:49.481 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:49.481 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:49.481 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:49.695  5751 26955 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:49.696  5751 26955 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:49.738 26106 26106 I NearbySharing: SharingTileService destroyed
10-18 09:48:50.040 18428 19185 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-18 09:48:50.040 18428 19185 I ReactNativeJS: === LOADING RIDES ===
10-18 09:48:50.041 18428 19185 I ReactNativeJS: 'Driver ID:', 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6'
10-18 09:48:50.041 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:50.047 18428 19185 I ReactNativeJS: 🔍 Loading current ride...
10-18 09:48:50.049 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:50.049 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:50.049 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:50.049 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:50.049 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:50.049 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:50.049 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:50.049 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:50.049 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:50.049Z'
10-18 09:48:50.049 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:50.253 18428 19185 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-18 09:48:50.253 18428 19185 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-18 09:48:50.456 18428 19185 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-18 09:48:50.464 18428 19185 I ReactNativeJS: ✅ No pending ride notifications
10-18 09:48:50.465 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:50.465 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:50.465 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:50.465 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:50.465 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:50.465 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:50.465 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:50.465 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:50.465 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:50.465Z'
10-18 09:48:50.466 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:50.466 18428 19185 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-18 09:48:50.466 18428 19185 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-18 09:48:50.466 18428 19185 I ReactNativeJS: '  - Pending rides:', 0
10-18 09:48:50.467 18428 19185 I ReactNativeJS: '  - Modal already showing:', false
10-18 09:48:50.467 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:50.467 18428 19185 I ReactNativeJS: '  - Has current ride:', false
10-18 09:48:50.467 18428 19185 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-18 09:48:50.467 18428 19185 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-18 09:48:50.467 18428 19185 I ReactNativeJS:   modalAlreadyShowing: false,
10-18 09:48:50.467 18428 19185 I ReactNativeJS:   driverStatus: 'online',
10-18 09:48:50.467 18428 19185 I ReactNativeJS:   hasCurrentRide: false }
10-18 09:48:50.472 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:50.472 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:50.472 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:50.472 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:50.473 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:50.473 18428 19185 I ReactNativeJS: '  - Loading:', false
10-18 09:48:50.473 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:50.473 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:50.473 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:50.473Z'
10-18 09:48:50.473 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:50.509 18428 19185 I ReactNativeJS: === NAVIGATION CHECK ===
10-18 09:48:50.509 18428 19185 I ReactNativeJS: 'In auth group:', false
10-18 09:48:50.510 18428 19185 I ReactNativeJS: 'Has session:', false
10-18 09:48:50.510 18428 19185 I ReactNativeJS: 'Has driver:', true
10-18 09:48:50.510 18428 19185 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'rides' ]
10-18 09:48:50.510 18428 19185 I ReactNativeJS: 'Loading state:', false
10-18 09:48:50.511 18428 19185 I ReactNativeJS: 'Is authenticated:', { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   license_number: 'TN34NNH678',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   license_expiry: '2027-12-24',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   status: 'online',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   rating: 5,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   total_rides: 20,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   is_verified: true,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   vehicle_id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   vendor_id: null,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   phone_number: '9800980002',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   name: 'balaji',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   created_at: '2025-09-18T20:21:07.467583+00:00',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   updated_at: '2025-10-18T00:09:52.52831+00:00',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   vehicles: 
10-18 09:48:50.511 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      capacity: 4 },
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   user: 
10-18 09:48:50.511 18428 19185 I ReactNativeJS:    { id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      email: 'balaji@gmail.com',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      role: 'driver',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      full_name: 'balaji',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      phone_number: '9800980002',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      avatar_url: null,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      is_active: true,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      created_at: '2025-09-18T20:21:06.804973+00:00',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      updated_at: '2025-09-18T20:21:06.804973+00:00' },
10-18 09:48:50.511 18428 19185 I ReactNativeJS:   vehicle: 
10-18 09:48:50.511 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:50.511 18428 19185 I ReactNativeJS:      capacity: 4 } }
10-18 09:48:50.511 18428 19185 I ReactNativeJS: No navigation needed - staying in current route
10-18 09:48:50.596  5720  5733 D SQLiteQueryBuilder: SELECT sum(_size), count(_size) FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)) AND  ( (_id  IN  (1000014340,1000014502,1000014503,1000014504,1000014505,1000014506,1000014507,1000014508,1000014509,1000014510,1000014511,1000014512,1000014513,1000014514,1000014515,1000014516,1000014517,1000014518,1000014519,1000014520,1000014521,1000014522,1000014523,1000014524) )  AND  (_size  != 0) ) ) AND (((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)))))
10-18 09:48:50.614 32656 32703 E AbstractLogEventBuilder: The provided ProductIdOrigin 3 is not one of the process-level expected values: 1 or 2
10-18 09:48:50.642 26036  1250 W GetConfigSnapshotOp: Succeeded but not registered: com.google.android.gms.clearcut_client#com.android.vending [CONTEXT service_id=51 ]
10-18 09:48:50.774  5720  5733 D SQLiteQueryBuilder: SELECT _id FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id <= ?)) ORDER BY _id ASC
10-18 09:48:50.778 26036 26081 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:50.778 26036 26081 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:50.778 26106 26139 E IPCThreadState: Binder transaction failure. id: 428365440, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:50.779 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:48:50.779 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:50.779 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:50.779 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:50.779 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:50.779 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:50.830 28626 28661 I .apps.nbu.files: Background young concurrent copying GC freed 8933KB AllocSpace bytes, 3(76KB) LOS objects, 44% free, 9872KB/17MB, paused 1.423ms,100us total 103.164ms
10-18 09:48:50.830 28626 28661 W .apps.nbu.files: Reducing the number of considered missed Gc histogram windows from 125 to 100
10-18 09:48:51.039  5720  5733 D SQLiteQueryBuilder: SELECT sum(_size), count(_size) FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)) AND  ( (date_modified  > 1760745993)  OR  (_id  > 1000014501) ) ) AND (((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)))))
10-18 09:48:51.079 31924 31924 W fb4a.AppComponentFactory: Instantiating Service
10-18 09:48:51.135 31924 31924 E fb4a.SlowAppComponent: 0ms: LollipopConditionalWorkerService instantiating…
10-18 09:48:51.135 31924 31924 E fb4a.SlowAppComponent: Main thread was blocked for 58ms in the background starting with LollipopConditionalWorkerService
10-18 09:48:51.251 18428 19185 I ReactNativeJS: === NAVIGATION CHECK ===
10-18 09:48:51.251 18428 19185 I ReactNativeJS: 'In auth group:', false
10-18 09:48:51.251 18428 19185 I ReactNativeJS: 'Has session:', false
10-18 09:48:51.251 18428 19185 I ReactNativeJS: 'Has driver:', true
10-18 09:48:51.251 18428 19185 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'scheduled' ]
10-18 09:48:51.251 18428 19185 I ReactNativeJS: 'Loading state:', false
10-18 09:48:51.252 18428 19185 I ReactNativeJS: 'Is authenticated:', { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   license_number: 'TN34NNH678',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   license_expiry: '2027-12-24',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   status: 'online',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   rating: 5,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   total_rides: 20,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   is_verified: true,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   vehicle_id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   vendor_id: null,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   phone_number: '9800980002',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   name: 'balaji',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   created_at: '2025-09-18T20:21:07.467583+00:00',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   updated_at: '2025-10-18T00:09:52.52831+00:00',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   vehicles: 
10-18 09:48:51.252 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      capacity: 4 },
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   user: 
10-18 09:48:51.252 18428 19185 I ReactNativeJS:    { id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      email: 'balaji@gmail.com',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      role: 'driver',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      full_name: 'balaji',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      phone_number: '9800980002',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      avatar_url: null,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      is_active: true,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      created_at: '2025-09-18T20:21:06.804973+00:00',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      updated_at: '2025-09-18T20:21:06.804973+00:00' },
10-18 09:48:51.252 18428 19185 I ReactNativeJS:   vehicle: 
10-18 09:48:51.252 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:51.252 18428 19185 I ReactNativeJS:      capacity: 4 } }
10-18 09:48:51.252 18428 19185 I ReactNativeJS: No navigation needed - staying in current route
10-18 09:48:51.445 31924  6618 E fb4a.8tY: Failure decoding override info
10-18 09:48:51.445 31924  6618 E fb4a.8tY: X.8tb: org.json.JSONException: No value for new_locale
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at X.8ta.<init>(Unknown Source:115)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at X.8tY.DoR(Unknown Source:51)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at X.5HN.call(Unknown Source:108)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at java.util.concurrent.FutureTask.run(FutureTask.java:317)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at X.19n.run(Unknown Source:54)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at X.19r.run(Unknown Source:3)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at X.19t.run(Unknown Source:17)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: Caused by: org.json.JSONException: No value for new_locale
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at org.json.JSONObject.get(JSONObject.java:398)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at org.json.JSONObject.getString(JSONObject.java:559)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	at X.8ta.<init>(Unknown Source:11)
10-18 09:48:51.445 31924  6618 E fb4a.8tY: 	... 9 more
10-18 09:48:51.568 31924 32168 D nativeloader: Load /data/app/~~rr75JSmdsCIRmmkRSeDe4Q==/com.facebook.katana-u8imdvzuJ9-Ko04FhaaH5w==/lib/arm64/libsuperpack-jni.so using class loader ns clns-7 (caller=/data/app/~~rr75JSmdsCIRmmkRSeDe4Q==/com.facebook.katana-u8imdvzuJ9-Ko04FhaaH5w==/base.apk): ok
10-18 09:48:51.609 31924  6618 D nativeloader: Load /data/data/com.facebook.katana/lib-compressed/libloopermerged.so using class loader ns clns-7 (caller=/data/app/~~rr75JSmdsCIRmmkRSeDe4Q==/com.facebook.katana-u8imdvzuJ9-Ko04FhaaH5w==/base.apk): ok
10-18 09:48:51.673 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:51.678 26036  1221 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:52.040 18428 19185 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-18 09:48:52.040 18428 19185 I ReactNativeJS: === LOADING RIDES ===
10-18 09:48:52.040 18428 19185 I ReactNativeJS: 'Driver ID:', 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6'
10-18 09:48:52.040 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:52.045 18428 19185 I ReactNativeJS: 🔍 Loading current ride...
10-18 09:48:52.049 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:52.049 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:52.049 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:52.049 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:52.049 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:52.049 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:52.049 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:52.049 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:52.049 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:52.049Z'
10-18 09:48:52.049 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:52.222 18428 19185 I ReactNativeJS: === NAVIGATION CHECK ===
10-18 09:48:52.222 18428 19185 I ReactNativeJS: 'In auth group:', false
10-18 09:48:52.222 18428 19185 I ReactNativeJS: 'Has session:', false
10-18 09:48:52.222 18428 19185 I ReactNativeJS: 'Has driver:', true
10-18 09:48:52.222 18428 19185 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'rides' ]
10-18 09:48:52.222 18428 19185 I ReactNativeJS: 'Loading state:', false
10-18 09:48:52.223 18428 19185 I ReactNativeJS: 'Is authenticated:', { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   license_number: 'TN34NNH678',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   license_expiry: '2027-12-24',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   status: 'online',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   rating: 5,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   total_rides: 20,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   is_verified: true,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   vehicle_id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   vendor_id: null,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   phone_number: '9800980002',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   name: 'balaji',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   created_at: '2025-09-18T20:21:07.467583+00:00',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   updated_at: '2025-10-18T00:09:52.52831+00:00',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   vehicles: 
10-18 09:48:52.223 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      capacity: 4 },
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   user: 
10-18 09:48:52.223 18428 19185 I ReactNativeJS:    { id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      email: 'balaji@gmail.com',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      role: 'driver',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      full_name: 'balaji',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      phone_number: '9800980002',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      avatar_url: null,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      is_active: true,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      created_at: '2025-09-18T20:21:06.804973+00:00',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      updated_at: '2025-09-18T20:21:06.804973+00:00' },
10-18 09:48:52.223 18428 19185 I ReactNativeJS:   vehicle: 
10-18 09:48:52.223 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:52.223 18428 19185 I ReactNativeJS:      capacity: 4 } }
10-18 09:48:52.223 18428 19185 I ReactNativeJS: No navigation needed - staying in current route
10-18 09:48:52.249 18428 19185 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-18 09:48:52.249 18428 19185 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-18 09:48:52.417 26036 26513 I WifiScanner: onFullResults
10-18 09:48:52.418 26036 27707 I WifiScanner: onFullResults
10-18 09:48:52.418 26036 30374 I WifiScanner: onFullResults
10-18 09:48:52.427 26036  1221 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:52.441 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:52.442 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:52.442 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:52.443 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:52.444 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:52.444 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:52.444 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:52.452 18428 19185 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-18 09:48:52.453 26036 26172 I fyyu    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-18 09:48:52.455 18428 19185 I ReactNativeJS: ✅ No pending ride notifications
10-18 09:48:52.455 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:52.455 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:52.455 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:52.455 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:52.456Z'
10-18 09:48:52.456 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:52.456 18428 19185 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-18 09:48:52.456 18428 19185 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Pending rides:', 0
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Modal already showing:', false
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '  - Has current ride:', false
10-18 09:48:52.456 18428 19185 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-18 09:48:52.456 18428 19185 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-18 09:48:52.456 18428 19185 I ReactNativeJS:   modalAlreadyShowing: false,
10-18 09:48:52.456 18428 19185 I ReactNativeJS:   driverStatus: 'online',
10-18 09:48:52.456 18428 19185 I ReactNativeJS:   hasCurrentRide: false }
10-18 09:48:52.459 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:52.460 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:52.460 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:52.460 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:52.460 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:52.460 18428 19185 I ReactNativeJS: '  - Loading:', false
10-18 09:48:52.460 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:52.460 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:52.460 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:52.460Z'
10-18 09:48:52.460 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:52.797 26036 26036 D WearableService: Creating wearable service asynchronously.
10-18 09:48:52.800 26036 30374 D WearableService: onGetService: waiting for onCreate to be completed.
10-18 09:48:52.840 26036 26075 I Wear_Controller: Wearable module requires a companion app to be installed.
10-18 09:48:52.840 26036 26075 I WearableService: onCreate: Wearable Services not starting. Wear is not available on this device.
10-18 09:48:52.841 26036 30374 W WearableService: onGetService: Wear is not available on this device.
10-18 09:48:52.865  6669  6669 I viders.calendar: Using CollectorTypeCC GC.
10-18 09:48:52.869  6669  6669 E viders.calendar: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:52.872  6669  6669 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:52.885  6669  6669 E viders.calendar: BBinder_init Processname  <pre-initialized>  
10-18 09:48:52.885  6669  6669 E viders.calendar: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:52.910 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.auth.blockstore.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:52.910 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.auth.blockstore.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:52.910  6669  6669 D nativeloader: Configuring clns-shared-7 for other apk /system/priv-app/CalendarProvider/CalendarProvider.apk. target_sdk_version=35, uses_libraries=, library_path=/system/priv-app/CalendarProvider/lib/arm64:/system/lib64:/system_ext/lib64, permitted_path=/data:/mnt/expand:/data/user/0/com.android.providers.calendar:/system/priv-app/CalendarProvider:/system/lib64:/system_ext/lib64
10-18 09:48:52.911  6669  6669 D CompatChangeReporter: Compat change id reported: 202956589; UID 10071; state: ENABLED
10-18 09:48:52.923  6669  6669 V GraphicsEnvironment: Currently set values for:
10-18 09:48:52.923  6669  6669 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:52.923  6669  6669 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:52.923  6669  6669 V GraphicsEnvironment: com.android.providers.calendar is not listed in per-application setting
10-18 09:48:52.950  6669  6669 I CalendarProvider2: Created com.android.providers.calendar.CalendarAlarmManager@a78592(com.android.providers.calendar.CalendarProvider2@2f28b63)
10-18 09:48:52.976  6669  6684 D SQLiteQueryBuilder: SELECT key, value FROM CalendarCache
10-18 09:48:52.990  6669  6723 D SQLiteQueryBuilder: SELECT alarmTime FROM CalendarAlerts, view_events WHERE (view_events._id=CalendarAlerts.event_id) AND (state=0 AND alarmTime<? AND alarmTime>? AND end>=?) ORDER BY alarmTime ASC
10-18 09:48:52.995 18428 19185 I ReactNativeJS: === NAVIGATION CHECK ===
10-18 09:48:52.995 18428 19185 I ReactNativeJS: 'In auth group:', false
10-18 09:48:52.995 18428 19185 I ReactNativeJS: 'Has session:', false
10-18 09:48:52.995 18428 19185 I ReactNativeJS: 'Has driver:', true
10-18 09:48:52.996 18428 19185 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'profile' ]
10-18 09:48:52.996 18428 19185 I ReactNativeJS: 'Loading state:', false
10-18 09:48:52.996 18428 19185 I ReactNativeJS: 'Is authenticated:', { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   license_number: 'TN34NNH678',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   license_expiry: '2027-12-24',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   status: 'online',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   rating: 5,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   total_rides: 20,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   is_verified: true,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   vehicle_id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   vendor_id: null,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   phone_number: '9800980002',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   name: 'balaji',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   created_at: '2025-09-18T20:21:07.467583+00:00',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   updated_at: '2025-10-18T00:09:52.52831+00:00',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   vehicles: 
10-18 09:48:52.996 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      capacity: 4 },
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   user: 
10-18 09:48:52.996 18428 19185 I ReactNativeJS:    { id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      email: 'balaji@gmail.com',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      role: 'driver',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      full_name: 'balaji',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      phone_number: '9800980002',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      avatar_url: null,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      is_active: true,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      created_at: '2025-09-18T20:21:06.804973+00:00',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      updated_at: '2025-09-18T20:21:06.804973+00:00' },
10-18 09:48:52.996 18428 19185 I ReactNativeJS:   vehicle: 
10-18 09:48:52.996 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:52.996 18428 19185 I ReactNativeJS:      capacity: 4 } }
10-18 09:48:52.996 18428 19185 I ReactNativeJS: No navigation needed - staying in current route
10-18 09:48:53.029 26106 31753 I Blockstore: [BlockstoreImpl] Notification API called. Skipping updateAccessPerSnapshotIfEligible. [CONTEXT service_id=258 ]
10-18 09:48:53.153 12016 12028 W stagram.android: Reducing the number of considered missed Gc histogram windows from 125 to 100
10-18 09:48:53.228 26036 28451 W ProviderHelper: Unknown dynamite feature providerinstaller.dynamite
10-18 09:48:53.898  4649  4879 D CompatChangeReporter: Compat change id reported: 311402873; UID 10094; state: ENABLED
10-18 09:48:53.898  4649  4879 D CompatChangeReporter: Compat change id reported: 323349338; UID 10094; state: ENABLED
10-18 09:48:53.901   752  2801 W ogle.android.gm: Suspending all threads took: 5.694ms
10-18 09:48:53.916   752  4893 E GoogleApiManager: Failed to get service from broker. 
10-18 09:48:53.916   752  4893 E GoogleApiManager: java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3256)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Parcel.createException(Parcel.java:3240)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3223)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3165)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):36)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):143)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:53.916   752  4893 E GoogleApiManager: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:53.918   752  5701 D HttpFlagsLoader: Found application exporting HTTP flags: com.google.android.gms
10-18 09:48:53.919   752  5701 D HttpFlagsLoader: HTTP flags file path: /data/user_de/0/com.google.android.gms/app_httpflags/flags.binarypb
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: Successfully loaded HTTP flags: # android.net.connectivity.org.chromium.net.httpflags.Flags@3b2909b7
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "Cronet_ForceHttpEngineInFallback"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "137.0.7141.0"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "Cronet_override_network_thread_priority"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       int_value: 0
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "126.0.6465.0"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideConnectionOptions"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "Cronet_InitializeBuildInfoOnStartup"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: false
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "135.0.7011.0"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideClientConnectionOptions_PARAM_ForceOff"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "Cronet_OverrideNativeCronetWithHttpEngine"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.googlequicksearchbox"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.apps.maps"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gm"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.calendar"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "Cronet_UpdateNetworkStateOnlyOnceOnStartup"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "134.0.6948.0"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "Cronet_log_me"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       string_value: "Using live production flag values from Google"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "Cronet_OverrideWithHttpEngine"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gms"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.android.vending"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.googlequicksearchbox"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.apps.maps"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.gm"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     constrained_values {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       app_id: "com.google.android.calendar"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       bool_value: true
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:       min_version: "139.0.7205.3"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:     }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideConnectionOptions_PARAM_ForceOff"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideClientConnectionOptions"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "ChromiumBaseFeature_OverrideClientConnectionOptions_PARAM_ForceOn"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: flags {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   key: "ChromiumBaseFeature_kQuicRegisterConnectionClosePayload"
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   value {
10-18 09:48:53.945   752  5701 D HttpFlagsLoader:   }
10-18 09:48:53.945   752  5701 D HttpFlagsLoader: }
10-18 09:48:53.946   752  5701 I HttpFlagsLoader: HTTP flags log line (Impl): Using live production flag values from Google
10-18 09:48:53.961   752  4335 I cn_CronetLibraryLoader: Cronet version: 139.0.7205.3, arch: aarch64
10-18 09:48:54.041 18428 19185 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-18 09:48:54.041 18428 19185 I ReactNativeJS: === LOADING RIDES ===
10-18 09:48:54.041 18428 19185 I ReactNativeJS: 'Driver ID:', 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6'
10-18 09:48:54.041 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:54.049 18428 19185 I ReactNativeJS: 🔍 Loading current ride...
10-18 09:48:54.051 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:54.051 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:54.051 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:54.052 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:54.052 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:54.052 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:54.052 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:54.052 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:54.052 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:54.052Z'
10-18 09:48:54.052 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:54.094 18428 19185 I ReactNativeJS: === NAVIGATION CHECK ===
10-18 09:48:54.094 18428 19185 I ReactNativeJS: 'In auth group:', false
10-18 09:48:54.094 18428 19185 I ReactNativeJS: 'Has session:', false
10-18 09:48:54.094 18428 19185 I ReactNativeJS: 'Has driver:', true
10-18 09:48:54.095 18428 19185 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'rides' ]
10-18 09:48:54.095 18428 19185 I ReactNativeJS: 'Loading state:', false
10-18 09:48:54.095 18428 19185 I ReactNativeJS: 'Is authenticated:', { id: 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   user_id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   license_number: 'TN34NNH678',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   license_expiry: '2027-12-24',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   status: 'online',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   rating: 5,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   total_rides: 20,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   is_verified: true,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   vehicle_id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   vendor_id: null,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   phone_number: '9800980002',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   name: 'balaji',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   created_at: '2025-09-18T20:21:07.467583+00:00',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   updated_at: '2025-10-18T00:09:52.52831+00:00',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   vehicles: 
10-18 09:48:54.095 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      capacity: 4 },
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   user: 
10-18 09:48:54.095 18428 19185 I ReactNativeJS:    { id: 'cb735787-e96d-4d1d-9975-c112e75dfabd',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      email: 'balaji@gmail.com',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      role: 'driver',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      full_name: 'balaji',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      phone_number: '9800980002',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      avatar_url: null,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      is_active: true,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      created_at: '2025-09-18T20:21:06.804973+00:00',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      updated_at: '2025-09-18T20:21:06.804973+00:00' },
10-18 09:48:54.095 18428 19185 I ReactNativeJS:   vehicle: 
10-18 09:48:54.095 18428 19185 I ReactNativeJS:    { id: '749d9861-436b-469c-8e98-7ef8feef9590',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      registration_number: 'TN38ME1122',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      make: 'HYUNDAI',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      model: 'VERNA',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      year: 2024,
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      color: 'BLACK',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      vehicle_type: 'hatchback_ac',
10-18 09:48:54.095 18428 19185 I ReactNativeJS:      capacity: 4 } }
10-18 09:48:54.095 18428 19185 I ReactNativeJS: No navigation needed - staying in current route
10-18 09:48:54.190   752  2801 I ogle.android.gm: Background concurrent copying GC freed 1603KB AllocSpace bytes, 5(164KB) LOS objects, 51% free, 5704KB/11MB, paused 420us,184us total 263.835ms
10-18 09:48:54.283 18428 19185 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-18 09:48:54.283 18428 19185 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-18 09:48:54.490 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:54.493 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:54.493 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:54.495 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:54.495 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:54.495 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:54.505 18428 19185 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-18 09:48:54.515 18428 19185 I ReactNativeJS: ✅ No pending ride notifications
10-18 09:48:54.516 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:54.516 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:54.516 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:54.516 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:54.516 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:54.516 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:54.516 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:54.516 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:54.517 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:54.516Z'
10-18 09:48:54.517 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:54.517 18428 19185 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-18 09:48:54.517 18428 19185 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-18 09:48:54.517 18428 19185 I ReactNativeJS: '  - Pending rides:', 0
10-18 09:48:54.517 18428 19185 I ReactNativeJS: '  - Modal already showing:', false
10-18 09:48:54.517 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:54.517 18428 19185 I ReactNativeJS: '  - Has current ride:', false
10-18 09:48:54.517 18428 19185 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-18 09:48:54.517 18428 19185 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-18 09:48:54.517 18428 19185 I ReactNativeJS:   modalAlreadyShowing: false,
10-18 09:48:54.517 18428 19185 I ReactNativeJS:   driverStatus: 'online',
10-18 09:48:54.517 18428 19185 I ReactNativeJS:   hasCurrentRide: false }
10-18 09:48:54.524 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:54.524 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:54.524 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:54.524 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:54.524 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:54.524 18428 19185 I ReactNativeJS: '  - Loading:', false
10-18 09:48:54.524 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:54.524 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:54.524 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:54.524Z'
10-18 09:48:54.524 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:54.993 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.semanticlocationhistory.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:55.048 26036 26104 I ActivityScheduler: nextTriggerTime: 1205309411, in 5000ms, detectorType: 39, FULL_TYPE alarmWindowMillis: 625
10-18 09:48:55.128 26036  3122 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.204 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.215 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.318 26036  1209 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.330 26036  3122 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.397 26106 26106 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.notifications.registration.service.NotificationsRegistrationTaskBoundService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:55.403 26106 26106 I GmsCoreXrpcWrapper: (REDACTED) Returning a channel provider with trafficStatsTag=%d trafficStatsUid=%d
10-18 09:48:55.405 26036  1209 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.410 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.449 26106 31533 W ChimeraUtils: Module com.google.android.gms.notifications_registration missing resource null(0)
10-18 09:48:55.451 26106 31533 W ChimeraUtils: Module com.google.android.gms.notifications_registration missing resource null(0)
10-18 09:48:55.457 26106 31533 W ChimeraUtils: Module com.google.android.gms.notifications_registration missing resource null(0)
10-18 09:48:55.502 26106 31533 I NotificationsModuleTask: (REDACTED) Registered accounts to Chime successfully. registration reason = %s
10-18 09:48:55.503 26036  3109 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.505 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.notifications.registration.service.NotificationsRegistrationTaskBoundService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:55.507 26036  3109 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.573 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.578 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.617 26036  3109 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.625 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.648 26106 31753 I MS_ScheduledTaskService: Triggering checkRegistrationWithLighter: true
10-18 09:48:55.650 26106  6845 I MS_RegisterService: Tachyon host: www.google.com, Tachyon port: 443
10-18 09:48:55.676 26106  6845 I MS_RegUtils: checking registration with Lighter
10-18 09:48:55.688 26036  1209 W NetworkScheduler.ATC: Called cancelTask for already completed task com.google.android.gms/.matchstick.task.ScheduledTaskService{u=0 tag="gms:matchstick:checkRegistrationWithLighter" trigger=window{start=86400s,end=108000s,earliest=-10803s,latest=10796s} requirements=[NET_CONNECTED,PREFERRED_NET_UNMETERED,PREFERRED_CHARGING] attributes=[PERSISTED] scheduled=-97203s last_run=0s exec_window_multiplier=1.0000 jid=N/A status=ACTIVE retries=0 client_lib=GMS_TASK_SCHEDULER-253931000} :1 [CONTEXT service_id=218 ]
10-18 09:48:55.689 26106  6845 I GmsCoreXrpcWrapper: (REDACTED) Returning a channel provider with trafficStatsTag=%d trafficStatsUid=%d
10-18 09:48:55.696 26036  1209 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:55.700 26036  1209 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.705 26106  6845 D LT_LitBstrpCntrl: Initializing BootstrapController Instance
10-18 09:48:55.749 26106  6859 D LT_PhenotypeApiImplV12: Retrieve experiment configurations
10-18 09:48:55.769 26106 26106 I LT_PhenotypeApiImplV12: Phenotype registration succeeded
10-18 09:48:55.774 26106  6874 D LT_LitBstrpCntrl:  Saving latest message timestamp to kv store with value 0
10-18 09:48:55.774 26106  6874 D LT_LitBstrpCntrl: triggering bootstrap this should be only one 
10-18 09:48:55.781 26106  6897 D LT_LitBstrpCntrl: Latest timestamp already saved previously, continue to use the existing timestamp
10-18 09:48:55.781 26106  6897 D LT_LitBstrpCntrl: Got lastCheckBootstrapTimestamp 1759229765177
10-18 09:48:55.781 26106  6897 D LT_LitBstrpCntrl: Got latestMessageTimestamp Optional.of([B@4b3adf5)
10-18 09:48:55.781 26106  6897 D LT_LitBstrpCntrl: Got currentTimestampMills 1760761135781
10-18 09:48:55.781 26106  6897 D LT_LitBstrpCntrl: Got Bootstrap threshold  2592000000
10-18 09:48:55.782 26106  6897 D LT_LitBstrpCntrl: Local check bootstrap not necessary, finish checking deleting latest message timestamp from kv store.
10-18 09:48:55.784 26106  6899 D LT_LitBstrpCntrl:  Release bootstrap lock
10-18 09:48:55.786 26036 26513 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:48:55.786 26036 26513 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:48:55.787 26106 26139 E IPCThreadState: Binder transaction failure. id: 428372052, BR_*: 29201, error: -28 (No space left on device)
10-18 09:48:55.787 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:48:55.787 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:48:55.787 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:48:55.787 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:55.787 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:55.789 26106 26106 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.semanticlocationhistory.deidentifieddata.storevisits.StoreVisitsProcessingService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:55.790 26036  3151 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:55.897 26106 31533 E ieha    : *~*~*~ Previous channel {0} was garbage collected without being shut down! ~*~*~*
10-18 09:48:55.897 26106 31533 E ieha    :     Make sure to call shutdown()/shutdownNow()
10-18 09:48:55.897 26106 31533 E ieha    : java.lang.RuntimeException: ManagedChannel allocation site
10-18 09:48:55.897 26106 31533 E ieha    : 	at iegz.<init>(:com.google.android.gms@253931035@25.39.31 (260400-813878953):21)
10-18 09:48:55.897 26106 31533 E ieha    : 	at ieha.<init>(:com.google.android.gms@253931035@25.39.31 (260400-813878953):10)
10-18 09:48:55.897 26106 31533 E ieha    : 	at iegy.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):250)
10-18 09:48:55.897 26106 31533 E ieha    : 	at idrg.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:55.897 26106 31533 E ieha    : 	at cnny.h(:com.google.android.gms@253931035@25.39.31 (260400-813878953):150)
10-18 09:48:55.897 26106 31533 E ieha    : 	at gshn.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):158)
10-18 09:48:55.897 26106 31533 E ieha    : 	at ggnb.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:55.897 26106 31533 E ieha    : 	at gpab.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:55.897 26106 31533 E ieha    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:55.897 26106 31533 E ieha    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:55.897 26106 31533 E ieha    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:55.897 26106 31533 E ieha    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:55.897 26106 31533 E ieha    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:55.897 26106 31533 E ieha    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:55.897 26106 31533 E ieha    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:55.897 26106 31533 E ieha    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:56.010 26036 26036 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.common.telemetry.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-18 09:48:56.042 18428 19185 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-18 09:48:56.042 18428 19185 I ReactNativeJS: === LOADING RIDES ===
10-18 09:48:56.042 18428 19185 I ReactNativeJS: 'Driver ID:', 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6'
10-18 09:48:56.042 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:56.046 18428 19185 I ReactNativeJS: 🔍 Loading current ride...
10-18 09:48:56.047 26106 26686 W SQLiteLog: (28) double-quoted string literal: "1760588336047"
10-18 09:48:56.047 26106 26686 W SQLiteLog: (28) double-quoted string literal: "1"
10-18 09:48:56.048 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:56.049 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:56.049 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:56.049 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:56.049 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:56.049 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:56.049 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:56.049 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:56.049 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:56.049Z'
10-18 09:48:56.049 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:56.251 18428 19185 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-18 09:48:56.251 18428 19185 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-18 09:48:56.343  6962  6962 I com.truecaller: Using CollectorTypeCC GC.
10-18 09:48:56.346  6962  6962 E com.truecaller: Not starting debugger since process cannot load the jdwp agent.
10-18 09:48:56.350  6962  6962 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-18 09:48:56.363  6962  6962 E com.truecaller: BBinder_init Processname  <pre-initialized>  
10-18 09:48:56.363  6962  6962 E com.truecaller: BBinder_init hasGetProcessName  <pre-initialized>
10-18 09:48:56.378  6962  6962 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:56.378  6962  6962 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:56.378  6962  6962 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:56.425  6962  6962 W com.truecaller: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:56.426  6962  6962 W com.truecaller: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:56.428  6962  6962 W com.truecaller: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:56.429  6962  6962 D nativeloader: Configuring clns-7 for other apk /data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/base.apk:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_config.arm64_v8a.apk:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_config.xxhdpi.apk:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_insights_category_model.apk:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_insights_category_model.config.arm64_v8a.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/lib/arm64:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/base.apk!/lib/arm64-v8a:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_config.arm64_v8a.apk!/lib/arm64-v8a:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_config.xxhdpi.ap
10-18 09:48:56.467  6962  6962 V GraphicsEnvironment: Currently set values for:
10-18 09:48:56.467  6962  6962 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-18 09:48:56.467  6962  6962 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-18 09:48:56.467  6962  6962 V GraphicsEnvironment: com.truecaller is not listed in per-application setting
10-18 09:48:56.467  6962  6962 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-18 09:48:56.481 18428 19185 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-18 09:48:56.485 18428 19185 I ReactNativeJS: ✅ No pending ride notifications
10-18 09:48:56.485 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:56.485 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:56.485 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:56.485 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:56.485 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:56.485 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:56.485 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:56.485 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:56.486 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:56.485Z'
10-18 09:48:56.486 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:56.486 18428 19185 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-18 09:48:56.486 18428 19185 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-18 09:48:56.486 18428 19185 I ReactNativeJS: '  - Pending rides:', 0
10-18 09:48:56.486 18428 19185 I ReactNativeJS: '  - Modal already showing:', false
10-18 09:48:56.486 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:56.486 18428 19185 I ReactNativeJS: '  - Has current ride:', false
10-18 09:48:56.486 18428 19185 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-18 09:48:56.486 18428 19185 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-18 09:48:56.486 18428 19185 I ReactNativeJS:   modalAlreadyShowing: false,
10-18 09:48:56.486 18428 19185 I ReactNativeJS:   driverStatus: 'online',
10-18 09:48:56.486 18428 19185 I ReactNativeJS:   hasCurrentRide: false }
10-18 09:48:56.490 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:56.490 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:56.490 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:56.490 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:56.490 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:56.490 18428 19185 I ReactNativeJS: '  - Loading:', false
10-18 09:48:56.490 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:56.490 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:56.490 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:56.490Z'
10-18 09:48:56.490 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:56.577 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.potokens.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:56.577 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.potokens.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:56.590 26106 30062 I fjss    : (REDACTED) Setting isLegacySQLite mode to %s.
10-18 09:48:56.695 26106 30062 I fjss    : (REDACTED) Writing data for these Geller corpora: %s
10-18 09:48:56.699  6962  6992 W com.truecaller: ClassLoaderContext classpath size mismatch. expected=1, found=0 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[])
10-18 09:48:56.708  6962  6992 W System  : ClassLoader referenced unknown path: 
10-18 09:48:56.709  6962  6992 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:56.718 26106 30062 I fjss    : (REDACTED) Wrote %d elements for corpus %s
10-18 09:48:56.720 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:56.723  6962  6992 W com.truecaller: ClassLoaderContext classpath size mismatch. expected=1, found=2 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/base.apk*2788667707:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_insights_category_model.apk*1401524688]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:56.753 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:56.759 26106 30062 I fjss    : (REDACTED) Writing data for these Geller corpora: %s
10-18 09:48:56.763 26106 30062 I fjss    : (REDACTED) Wrote %d elements for corpus %s
10-18 09:48:56.764 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:56.770 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:56.773 26036  1250 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.truecaller
10-18 09:48:56.788  6962  7020 E com.truecaller: No package ID 6a found for resource ID 0x6a0b000f.
10-18 09:48:56.790  6962  7020 I FA      : App measurement initialized, version: 140000
10-18 09:48:56.790  6962  7020 I FA      : To enable debug logging run: adb shell setprop log.tag.FA VERBOSE
10-18 09:48:56.790  6962  7020 I FA      : To enable faster debug mode event logging run:
10-18 09:48:56.790  6962  7020 I FA      :   adb shell setprop debug.firebase.analytics.app com.truecaller
10-18 09:48:56.797  6962  7029 W com.truecaller: ClassLoaderContext classpath size mismatch. expected=1, found=2 (DLC[];PCL[base.apk*2536329430]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system/framework/com.android.media.remotedisplay.jar*2042759013]#PCL[/system/framework/com.android.location.provider.jar*3414091812]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]} | DLC[];PCL[/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/base.apk*2788667707:/data/app/~~wg7mWD3Ah7Ui0pUvoyiORA==/com.truecaller-0vJ_f03x-_GG0t3l7NX0Jg==/split_insights_category_model.apk*1401524688]{PCL[/system/framework/org.apache.http.legacy.jar*1230680128]#PCL[/system_ext/framework/androidx.window.extensions.jar*3686172054]#PCL[/system_ext/framework/androidx.window.sidecar.jar*3225371103]})
10-18 09:48:56.811 26106 30062 I fjss    : (REDACTED) Writing data for these Geller corpora: %s
10-18 09:48:56.855 26036 28451 W ProviderHelper: Unknown dynamite feature providerinstaller.dynamite
10-18 09:48:56.855 26106 30062 I fjss    : (REDACTED) Wrote %d elements for corpus %s
10-18 09:48:56.857 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:56.872  6962  7006 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-18 09:48:56.878 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:56.884  6962  7006 D nativeloader: Configuring clns-9 for other apk /system/framework/com.android.media.remotedisplay.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:56.884  6962  7006 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:56.894  6962  7006 D nativeloader: Configuring clns-10 for other apk /system/framework/com.android.location.provider.jar. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:56.894  6962  7006 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:56.894  6962  7006 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:56.895  6962  7006 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
10-18 09:48:56.920 26036  3122 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.onetimeinitializer
10-18 09:48:56.922 26106 30062 I fjss    : (REDACTED) Setting isLegacySQLite mode to %s.
10-18 09:48:56.936  6962  6962 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-18 09:48:56.937  6962  6962 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-18 09:48:56.937  6962  6962 I M-ProMotion: M-ProMotion is disabled
10-18 09:48:56.953  6962  7006 D nativeloader: Configuring clns-11 for other apk /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/lib/arm64:/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
10-18 09:48:57.002 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:57.003 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:57.003 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 1ms
10-18 09:48:57.018 26106 31533 I LocationHistory: [DataProvider] Opening SQLite [CONTEXT service_id=314 ]
10-18 09:48:57.072  6962  7083 E GoogleApiManager: Failed to get service from broker. 
10-18 09:48:57.072  6962  7083 E GoogleApiManager: java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3256)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Parcel.createException(Parcel.java:3240)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3223)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3165)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):36)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):143)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:57.072  6962  7083 E GoogleApiManager: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:57.081  6962  7006 D nativeloader: Load /data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk!/lib/arm64-v8a/libconscrypt_gmscore_jni.so using class loader ns clns-11 (caller=/data/app/~~Nj5x6oEjOfi5wD5H_znOGQ==/com.google.android.gms-is4C_Gk9dUPsxVnNnVBzPg==/base.apk): ok
10-18 09:48:57.081  6962  7006 V NativeCrypto: Registering com/google/android/gms/org/conscrypt/NativeCrypto's 319 native methods...
10-18 09:48:57.117  6962  7081 W FlagRegistrar: Failed to register com.google.android.gms.providerinstaller#com.truecaller
10-18 09:48:57.117  6962  7081 W FlagRegistrar: frum: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at fruo.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at govh.d(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at govj.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):130)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at goxq.execute(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at govr.f(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at govr.m(:com.google.android.gms@253931035@25.39.31 (260400-813878953):99)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at govr.r(:com.google.android.gms@253931035@25.39.31 (260400-813878953):17)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at fjzu.hy(:com.google.android.gms@253931035@25.39.31 (260400-813878953):35)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at exqb.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at goxq.execute(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at exqc.b(:com.google.android.gms@253931035@25.39.31 (260400-813878953):18)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at exqr.b(:com.google.android.gms@253931035@25.39.31 (260400-813878953):36)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at exqt.d(:com.google.android.gms@253931035@25.39.31 (260400-813878953):25)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at bami.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):9)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at baox.q(:com.google.android.gms@253931035@25.39.31 (260400-813878953):48)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at baox.d(:com.google.android.gms@253931035@25.39.31 (260400-813878953):10)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at baox.g(:com.google.android.gms@253931035@25.39.31 (260400-813878953):192)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at baox.onConnectionFailed(:com.google.android.gms@253931035@25.39.31 (260400-813878953):2)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):70)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: Caused by: bakp: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at bbhp.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):15)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at baml.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	at bami.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:57.117  6962  7081 W FlagRegistrar: 	... 12 more
10-18 09:48:57.128  6962  7006 I ProviderInstaller: Installed default security provider GmsCore_OpenSSL
10-18 09:48:57.193 26106 31533 I LocationHistory: [DataProvider] Opening SQLite [CONTEXT service_id=314 ]
10-18 09:48:57.207 31924 31924 W fb4a.AppComponentFactory: Instantiating Service
10-18 09:48:57.227 26106  1222 D AdvertisingIdClient: AdvertisingIdClient already created.
10-18 09:48:57.228 26106  1222 I AdvertisingIdClient: shouldSendLog 1203633048
10-18 09:48:57.228 26106  1222 I AdvertisingIdClient: GetInfoInternal elapse 1ms
10-18 09:48:57.240  6962  7042 D SQLiteQueryBuilder: SELECT _id, call_log_id, timestamp, normalized_number, action, filter_source, ringing_duration, type, subscription_id FROM history WHERE ((timestamp<? OR (timestamp=? AND call_log_id<?)) AND 
10-18 09:48:57.240  6962  7042 D SQLiteQueryBuilder: type IN (1,2,3)  AND 
10-18 09:48:57.240  6962  7042 D SQLiteQueryBuilder: (subscription_component_name!='com.whatsapp' OR subscription_component_name IS NULL) AND 
10-18 09:48:57.240  6962  7042 D SQLiteQueryBuilder: tc_flag!=2 AND 
10-18 09:48:57.240  6962  7042 D SQLiteQueryBuilder: (subscription_component_name NOT IN('com.truecaller.voip.manager.VOIP','com.truecaller.voip.manager.GROUP_VOIP') OR subscription_component_name IS NULL)) ORDER BY timestamp DESC, call_log_id DESC LIMIT 20
10-18 09:48:57.262  6962  7006 D SQLiteQueryBuilder: SELECT tc_id, contact_phonebook_id, contact_phonebook_hash FROM raw_contact WHERE (contact_phonebook_hash IS NOT NULL) ORDER BY contact_phonebook_id ASC
10-18 09:48:57.378 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.semanticlocationhistory.deidentifieddata.storevisits.StoreVisitsProcessingService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:57.382 26036  3151 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:57.415 26036 26104 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-18 09:48:57.424 26036  3151 W SystemServiceRegistry: No service published for: wifirtt
10-18 09:48:57.451 26036 28451 I WifiScanner: onFullResults
10-18 09:48:57.451 26036 26051 I WifiScanner: onFullResults
10-18 09:48:57.452 26036 26513 I WifiScanner: onFullResults
10-18 09:48:57.524 26036  3109 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder: SELECT _id FROM aggregated_contact WHERE (
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                 _id IN (
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                     SELECT a_with_update_ts._id
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                         FROM (
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                             SELECT a._id, a.aggregated_update_timestamp
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                             FROM aggregated_contact a
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                         ) a_with_update_ts
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                         LEFT JOIN (
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                                 SELECT aggregated_contact_id, contact_update_timestamp
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                                     FROM contact_sorting_index
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                         ) cs
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                             ON a_with_update_ts._id = cs.aggregated_contact_id
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                             AND a_with_update_ts.aggregated_update_timestamp = cs.contact_update_timestamp
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                         WHERE cs.aggregated_contact_id IS NULL
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                 )
10-18 09:48:57.537  6962  7101 D SQLiteQueryBuilder:                                 )
10-18 09:48:57.538 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:57.540 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:57.540 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:57.540 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:57.543 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:57.543 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-18 09:48:57.544 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:57.562 26036 26172 I fyyu    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-18 09:48:57.633 26106 26106 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.semanticlocationhistory.deidentifieddata.uploads.BatchDeidentifiedDataUploadService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:57.640 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:57.653  6962  7101 D SQLiteQueryBuilder: SELECT * FROM aggregated_contact_data WHERE (_id IN (3631))
10-18 09:48:57.927 32656 32679 I Finsky  : [42482] com.truecaller: Account determined from installer data - [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:57.941 32656 32679 I Finsky  : [42482] Billing preferred account via installer for com.truecaller: [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:57.942 30764   326 I WM-WorkerWrapper: Worker result SUCCESS for Work [ id=099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e, tags={ com.whatsapp.messaging.xmpp.XmppLifecycleWorker } ]
10-18 09:48:57.944  6962  7142 D SQLiteQueryBuilder: SELECT COUNT(*) as count FROM history WHERE (type IN (1,2,3)  AND timestamp<=? AND (subscription_component_name!='com.whatsapp' OR subscription_component_name IS NULL) AND tc_flag!=2 AND (subscription_component_name NOT IN('com.truecaller.voip.manager.VOIP','com.truecaller.voip.manager.GROUP_VOIP') OR subscription_component_name IS NULL))
10-18 09:48:57.953 30764 30764 D WM-Processor: H6e 099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e executed; reschedule = false
10-18 09:48:57.956 30764 30764 D WM-GreedyScheduler: Stopping tracking for WorkGenerationalId(workSpecId=099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e, generation=0)
10-18 09:48:57.963 30764 30764 D WM-SystemJobService: 099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e executed on JobScheduler
10-18 09:48:57.964 30764 30764 D WM-SystemJobService: onStopJob for WorkGenerationalId(workSpecId=099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e, generation=0)
10-18 09:48:57.967  5751 26955 I duzn    : (REDACTED) appOpsListener %s %s
10-18 09:48:57.967  5751 26955 I duzn    : (REDACTED) Ignoring irrelevant audio permission changes for package %s
10-18 09:48:57.968 32656 32679 I Finsky  : [42482] com.truecaller: Account determined from installer data - [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:57.968 32656 32679 I Finsky  : [42482] Billing preferred account via installer for com.truecaller: [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:57.970 30764   326 D WM-GreedyScheduler: Cancelling work ID 099d87f4-e0f0-4c4c-b1b5-5cc2fdf2391e
10-18 09:48:57.976 30764   359 D WM-NetworkStateTracker: Unregistering network callback
10-18 09:48:57.997 32656 32679 I Finsky  : [42482] com.truecaller: Account determined from installer data - [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:57.997 32656 32679 I Finsky  : [42482] Billing preferred account via installer for com.truecaller: [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:58.000 32656 32679 I Finsky  : [42482] User is not an active Play Pass subscriber
10-18 09:48:58.037  6962  7062 D SQLiteQueryBuilder: SELECT * FROM history_with_aggregated_contact WHERE ((call_log_id NOT NULL OR tc_flag=2) AND new=1 AND type=3 AND action NOT IN (5,1,3,4) AND timestamp<=?) ORDER BY timestamp DESC
10-18 09:48:58.042 18428 19185 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-18 09:48:58.043 18428 19185 I ReactNativeJS: === LOADING RIDES ===
10-18 09:48:58.043 18428 19185 I ReactNativeJS: 'Driver ID:', 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6'
10-18 09:48:58.043 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:48:58.049  6962  7062 D SQLiteQueryBuilder: SELECT count(_id) FROM history_with_aggregated_contact WHERE ((call_log_id NOT NULL OR tc_flag=2) AND is_read=0 AND type=3 AND action NOT IN (5,1,3,4))
10-18 09:48:58.049 18428 19185 I ReactNativeJS: 🔍 Loading current ride...
10-18 09:48:58.050 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:58.050 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:58.050 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:58.050 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:58.051 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:58.051 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:58.051 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:58.051 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:58.051 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:58.051Z'
10-18 09:48:58.051 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:58.073 26106 31753 W Conscrypt: Could not set socket write timeout: java.net.SocketException: Socket closed
10-18 09:48:58.073 26106 31753 W Conscrypt: 	at com.google.android.gms.org.conscrypt.Platform.setSocketWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):204)
10-18 09:48:58.073 26106 31753 W Conscrypt: 	at com.google.android.gms.org.conscrypt.ConscryptFileDescriptorSocket.setSoWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):4)
10-18 09:48:58.155 26106 31753 W Conscrypt: Could not set socket write timeout: java.net.SocketException: Socket closed
10-18 09:48:58.155 26106 31753 W Conscrypt: 	at com.google.android.gms.org.conscrypt.Platform.setSocketWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):204)
10-18 09:48:58.155 26106 31753 W Conscrypt: 	at com.google.android.gms.org.conscrypt.ConscryptFileDescriptorSocket.setSoWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):4)
10-18 09:48:58.215 26036 26051 I FontLog : (REDACTED) Received query %s, URI %s
10-18 09:48:58.217 26036 26051 I FontLog : (REDACTED) Query [%s] resolved to %s
10-18 09:48:58.230 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.mobstore.service.START pkg=com.google.android.gms }
10-18 09:48:58.230 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.mdisync.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:58.233 26036 26051 I FontLog : (REDACTED) Fetch %s end status %s
10-18 09:48:58.244 26036 26051 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-18 09:48:58.245 18428 19185 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-18 09:48:58.245 18428 19185 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-18 09:48:58.275 26036 26051 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-18 09:48:58.333  6962  7048 I WebViewFactory: Loading com.google.android.webview version 141.0.7390.43 (code 739004333)
10-18 09:48:58.344  6962  7048 W com.truecaller: Failed to find entry 'classes.dex': Entry not found
10-18 09:48:58.346  6962  7048 D nativeloader: Configuring clns-12 for other apk /data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-18 09:48:58.346  6962  7048 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:48:58.348  6962  7048 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-18 09:48:58.369  6962  7048 D nativeloader: Configuring clns-13 for other apk /data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-18 09:48:58.467 18428 19185 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-18 09:48:58.474  6962  7048 I cr_WVCFactoryProvider: version=141.0.7390.43 (739004333) minSdkVersion=29 multiprocess=true packageId=2 splits=config.arm64_v8a,config.xxhdpi,insights_category_model,insights_category_model.config.arm64_v8a
10-18 09:48:58.479 18428 19185 I ReactNativeJS: ✅ No pending ride notifications
10-18 09:48:58.479 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:58.479 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:58.480Z'
10-18 09:48:58.480 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:58.480 18428 19185 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-18 09:48:58.480 18428 19185 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Pending rides:', 0
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Modal already showing:', false
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '  - Has current ride:', false
10-18 09:48:58.480 18428 19185 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-18 09:48:58.480 18428 19185 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-18 09:48:58.480 18428 19185 I ReactNativeJS:   modalAlreadyShowing: false,
10-18 09:48:58.480 18428 19185 I ReactNativeJS:   driverStatus: 'online',
10-18 09:48:58.480 18428 19185 I ReactNativeJS:   hasCurrentRide: false }
10-18 09:48:58.481  6962  7048 D nativeloader: Load /data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a/libmonochrome_64.so using class loader ns clns-13 (caller=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk): ok
10-18 09:48:58.487 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:48:58.487 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:48:58.487 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:48:58.487 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:48:58.487 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:48:58.487 18428 19185 I ReactNativeJS: '  - Loading:', false
10-18 09:48:58.487 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:48:58.487 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:48:58.487 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:18:58.487Z'
10-18 09:48:58.487 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:48:58.489 32656 32679 I Finsky  : [42482] com.truecaller: Account determined from installer data - [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:58.490 32656 32679 I Finsky  : [42482] Billing preferred account via installer for com.truecaller: [n42ZzBeBnospS83NCmwL-mqKmT_TOet-gb5jSuzoclM]
10-18 09:48:58.492  6962  7048 D nativeloader: Load /system/lib64/libwebviewchromium_plat_support.so using class loader ns clns-13 (caller=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk): ok
10-18 09:48:58.508  6962  7173 I chromium: [1018/094858.505102:INFO:android_webview/browser/variations/variations_seed_loader.cc:67] Failed to open file for reading.: No such file or directory (2)
10-18 09:48:58.516  6962  6962 I cr_LibraryLoader: Successfully loaded native library
10-18 09:48:58.519  6962  6962 I cr_CachingUmaRecorder: Flushed 16 samples from 16 histograms, 0 samples were dropped.
10-18 09:48:58.526  6962  6962 I cr_CombinedPProvider: #registerProvider() provider:WV.ak@25fc78e isPolicyCacheEnabled:false policyProvidersSize:0
10-18 09:48:58.528  6962  6962 I cr_PolicyProvider: #setManagerAndSource() 0
10-18 09:48:58.563  6962  6962 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-18 09:48:58.613 26036  3151 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:48:58.613  6962  6962 I cr_CombinedPProvider: #linkNativeInternal() 1
10-18 09:48:58.615 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.semanticlocationhistory.deidentifieddata.uploads.BatchDeidentifiedDataUploadService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:58.622  6962  6962 I cr_AppResProvider: #getApplicationRestrictionsFromUserManager() Bundle[EMPTY_PARCEL]
10-18 09:48:58.623  6962  6962 I cr_PolicyProvider: #notifySettingsAvailable() 0
10-18 09:48:58.623  6962  6962 I cr_CombinedPProvider: #onSettingsAvailable() 0
10-18 09:48:58.623  6962  6962 I cr_CombinedPProvider: #flushPolicies()
10-18 09:48:58.677 26106 26106 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.semanticlocationhistory.federated.regionfetcher.RegionMddDownloadScheduleService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:58.679 26036  1209 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:48:58.707 26106 31533 I LocationHistory: [DataProvider] Opening SQLite [CONTEXT service_id=314 ]
10-18 09:48:58.737 26106 31753 W fmkw    : GddFileGroupPopulator: Account was not provided, skipping private sync for corpus: GDD_ODLH_FA_REGIONS, configuration: GddOdlhFaRegions
10-18 09:48:58.740 26106 31753 I fjpl    : (REDACTED) Starting batch sync for corpora: %s
10-18 09:48:58.750 26106 31532 I LocationHistory: [DataProvider] Opening SQLite [CONTEXT service_id=314 ]
10-18 09:48:58.755  6962  6962 W chromium: [WARNING:android_webview/browser/network_service/net_helpers.cc:143] HTTP Cache size is: 20971520
10-18 09:48:58.779 26106 30062 I fjss    : The GellerConfig is not present, returning null.
10-18 09:48:58.779 26106 30062 I fjss    : (REDACTED) The GellerConfig is not present, defaulting isUploadEnabled for corpus %s to true.
10-18 09:48:58.782 26106 31533 I fjpl    : (REDACTED) The syncToken for corpus %s is %s and the syncRequestReason is %s
10-18 09:48:58.848  6962  7217 I CameraManagerGlobal: Connecting to camera service
10-18 09:48:58.892 32656   935 I cn_CronetUrlRequestContext: destroyNativeStreamLocked org.chromium.net.impl.CronetBidirectionalStream@eb1f9c6
10-18 09:48:58.932 14789  2140 W adservices: Skip logging because Cobalt logger is null
10-18 09:48:58.932 14789  3002 W adservices: Skip logging because Cobalt is disabled.
10-18 09:48:58.938  6962  7217 D nativeloader: Load libVivoJsonResourceManager_jni.so using system ns (caller=/system/framework/framework.jar!classes2.dex): ok
10-18 09:48:58.938  6962  7217 D com.truecaller: JNI_OnLoad: get JNI environment,JNI_VERSION_1_6
10-18 09:48:58.938  6962  7217 D VivoJavaJsonManager: create() called
10-18 09:48:58.939  6962  7217 D VivoJsonResourceManager: Create
10-18 09:48:58.939  6962  7217 D VivoJsonResourceManager: Using Path:product/camera/jsons to parse Json Files!
10-18 09:48:58.939  6962  7217 D VivoJsonResourceManager: service is not null
10-18 09:48:58.941  6962  7217 D VivoJsonResourceManager: GetJsonConfigInfoSize 679
10-18 09:48:58.942  6962  7217 I DMABUFHEAPS: Using DMA-BUF heap named: system
10-18 09:48:58.942  6962  7217 D VivoJsonResourceManager: Allocate: alloc buffer_fd:305 success
10-18 09:48:58.943 32656 32702 D Volley  : [42501] axcv.e: Could not delete cache entry for key=[9BIZD3UudKqeIJghnaK2Rp5Jn57gR9r6_RgPRhGsZ_c], filename=CIfNcVb04RhRpPkTmNBnRDimO9Y
10-18 09:48:58.943  6962  7217 E VivoJsonResourceManager: mmap ok
10-18 09:48:58.943  6962  7217 D VivoJsonResourceManager: begin to read file product/camera/jsons/StaticProjectConfig.json!
10-18 09:48:58.943  6962  7217 D VivoJsonResourceManager: Using Path:product/camera/jsons to parse Json Files!
10-18 09:48:58.944  6962  7217 D VivoJsonResourceManager: GetJsonConfigInfoSize 16968
10-18 09:48:58.945  6962  7217 I DMABUFHEAPS: Using DMA-BUF heap named: system
10-18 09:48:58.945  6962  7217 D VivoJsonResourceManager: Allocate: alloc buffer_fd:305 success
10-18 09:48:58.947  6962  7217 E VivoJsonResourceManager: mmap ok
10-18 09:48:58.947  6962  7217 D VivoJsonResourceManager: begin to read file product/camera/jsons/StaticAppNameConfig.json!
10-18 09:48:58.952  6962  7217 D VivoJavaJsonManager: failed to find appName:com.truecaller from config key:mProtakePackages
10-18 09:48:58.952  6962  7217 D VivoJavaJsonManager: failed to find appName:com.truecaller from config key:mProtakePackages
10-18 09:48:58.955  6962  7203 D VivoJavaJsonManager: failed to find appName:com.truecaller from config key:mProtakePackages
10-18 09:48:59.185 26106 30062 E SQLiteLog: (1032) statement aborts at 9: [DELETE FROM geller_metadata_table WHERE data_type = ? AND key = ?] attempt to write a readonly database
10-18 09:48:59.187 26036  3122 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.devicelockcontroller
10-18 09:48:59.188 26106 30062 E fjss    : Delete metadata GDD_ODLH_FA_REGIONS : _sync_timestamp_micros failed
10-18 09:48:59.188 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.188 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.188 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.188 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.188 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.188 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.188 26106 30062 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.188 26106 30062 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.188 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.188 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.188 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.188 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.188 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.188 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.188 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.188 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.188 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.188 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.188 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.188 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.188 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.188 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.191 26106 30062 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.191 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.191 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.191 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.191 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.191 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.191 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.191 26106 30062 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.191 26106 30062 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.191 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.191 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.191 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.191 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.191 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.191 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.191 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.191 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.191 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.191 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.191 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.191 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.191 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.191 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.191 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:59.192 26106 30062 E SQLiteLog: (1032) statement aborts at 10: [INSERT INTO geller_metadata_table(metadata,data_type,key) VALUES (?,?,?)] attempt to write a readonly database
10-18 09:48:59.194 26106 30062 E fjss    : Failed to write metadata
10-18 09:48:59.194 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.194 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.194 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.194 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.194 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.194 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.194 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.194 26106 30062 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.194 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.194 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.194 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.194 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.194 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.194 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.194 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.194 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.194 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.194 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.194 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.194 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.194 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.194 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.195 26106 30062 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.195 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.195 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.195 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.195 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.195 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.195 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.195 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.195 26106 30062 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.195 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.195 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.195 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.195 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.195 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.195 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.195 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.195 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.195 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.195 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.195 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.195 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.195 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.195 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.196 26106 30062 E SQLiteLog: (1032) statement aborts at 9: [DELETE FROM geller_metadata_table WHERE data_type = ? AND key = ?] attempt to write a readonly database
10-18 09:48:59.197 26036  1209 I AlarmManager: setExactAndAllowWhileIdle [name: GCM_HB_ALARM type: 2 triggerAtMillis: 1205788560]
10-18 09:48:59.198 26106 30062 E fjss    : Delete metadata GDD_ODLH_FA_REGIONS : _sync_token failed
10-18 09:48:59.198 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.198 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.198 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.198 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.198 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.198 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.198 26106 30062 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.198 26106 30062 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.198 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.198 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.198 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.198 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.198 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.198 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.198 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.198 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.198 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.198 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.198 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.198 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.198 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.198 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.200 26106 30062 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.200 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.200 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.200 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.200 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.200 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.200 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.200 26106 30062 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.200 26106 30062 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.200 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.200 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.200 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.200 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.200 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.200 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.200 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.200 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.200 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.200 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.200 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.200 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.200 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.200 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.200 26106 30062 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:59.200 26106 30062 E SQLiteLog: (1032) statement aborts at 10: [INSERT INTO geller_metadata_table(metadata,data_type,key) VALUES (?,?,?)] attempt to write a readonly database
10-18 09:48:59.201 26106 30062 E fjss    : Failed to write metadata
10-18 09:48:59.201 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.201 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.201 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.201 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.201 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.201 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.201 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.201 26106 30062 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.201 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.201 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.201 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.201 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.201 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.201 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.201 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.201 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.201 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.201 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.201 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.201 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.201 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.201 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.202 26106 30062 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.202 26106 30062 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.202 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.202 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.202 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.202 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.202 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.202 26106 30062 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.202 26106 30062 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.202 26106 30062 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.202 26106 30062 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.202 26106 30062 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.202 26106 30062 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.202 26106 30062 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.202 26106 30062 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.202 26106 30062 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.202 26106 30062 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.202 26106 30062 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.202 26106 30062 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.202 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.202 26106 30062 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.202 26106 30062 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.202 26106 30062 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.219 26106  7247 I LocationHistory: [DataProvider] Opening SQLite [CONTEXT service_id=314 ]
10-18 09:48:59.229 26036  3109 I AlarmManager: setExactAndAllowWhileIdle [name: FcmRetry type: 2 triggerAtMillis: 1205428590]
10-18 09:48:59.234  6962  7240 I com.truecaller: Waiting for a blocking GC ClassLinker
10-18 09:48:59.249 26106 31533 W fmkw    : GddFileGroupPopulator: Account was not provided, skipping private sync for corpus: GDD_ODLH_FA_REGIONS, configuration: GddOdlhFaRegions
10-18 09:48:59.251 26106 31533 I fjpl    : (REDACTED) Starting batch sync for corpora: %s
10-18 09:48:59.258 26106 31753 I LocationHistory: [DataProvider] Opening SQLite [CONTEXT service_id=314 ]
10-18 09:48:59.271  6962  6972 I com.truecaller: Background concurrent copying GC freed 26MB AllocSpace bytes, 278(19MB) LOS objects, 48% free, 25MB/49MB, paused 388us,149us total 909.815ms
10-18 09:48:59.271  6962  7240 I com.truecaller: WaitForGcToComplete blocked ClassLinker on Background for 37.781ms
10-18 09:48:59.300 26106 31753 I fjss    : The GellerConfig is not present, returning null.
10-18 09:48:59.300 26106 31753 I fjss    : (REDACTED) The GellerConfig is not present, defaulting isUploadEnabled for corpus %s to true.
10-18 09:48:59.302 26106 31533 I fjpl    : (REDACTED) The syncToken for corpus %s is %s and the syncRequestReason is %s
10-18 09:48:59.439 32656 32703 D CompatChangeReporter: Compat change id reported: 270674727; UID 10201; state: ENABLED
10-18 09:48:59.454 32656 32710 W ServiceBindIntentUtils: Dynamic lookup for intent failed for action: com.google.android.gms.payse.service.BIND
10-18 09:48:59.459 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.payse.service.BIND pkg=com.google.android.gms }
10-18 09:48:59.459 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.payse.service.BIND pkg=com.google.android.gms }
10-18 09:48:59.459 26106 26106 I BndSvcConfigHelper: No bound-service is registered for action: com.google.android.gms.payse.service.BIND
10-18 09:48:59.459 26106 26106 I BoundBrokerSvc: Bound service not available for: Intent { act=com.google.android.gms.payse.service.BIND pkg=com.google.android.gms }
10-18 09:48:59.459 26106 26106 I GmsApiChimeraSvc: Handling missing api service for: com.google.android.gms.payse.service.BIND
10-18 09:48:59.464 26106 30097 D SQLiteQueryBuilder: SELECT value FROM partner WHERE ((name=?))
10-18 09:48:59.471 26106 26686 I GmsApiChimeraSvc: Using MissingApiServiceBroker for com.google.android.gms.payse.service.BIND due to missing BoundService implementation
10-18 09:48:59.472 26106 26106 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.ocr.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:59.486 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:59.487 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:59.487 26106 31328 I Camera-JNI: number_of_cameras:2
10-18 09:48:59.487 26106 31328 D VivoJavaJsonManager: failed to find appName:com.google.android.gms from config key:mProtakePackages
10-18 09:48:59.488 26036 26172 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-18 09:48:59.489 26106 31328 I Camera-JNI: number_of_cameras:2
10-18 09:48:59.489 26106 31328 D VivoJavaJsonManager: failed to find appName:com.google.android.gms from config key:mProtakePackages
10-18 09:48:59.493 18428 19185 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-18 09:48:59.493 18428 19185 I ReactNativeJS:   heading: 0,
10-18 09:48:59.493 18428 19185 I ReactNativeJS:   altitudeAccuracy: 1.2211401462554932,
10-18 09:48:59.493 18428 19185 I ReactNativeJS:   latitude: 12.74871,
10-18 09:48:59.493 18428 19185 I ReactNativeJS:   speed: 0,
10-18 09:48:59.493 18428 19185 I ReactNativeJS:   longitude: 77.829975,
10-18 09:48:59.493 18428 19185 I ReactNativeJS:   accuracy: 2.299999952316284 }
10-18 09:48:59.496 26106 26106 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.chimera.container.moduleinstall.ModuleInstallService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-18 09:48:59.498 18428 18428 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:59.499 18428 18428 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-18 09:48:59.504 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.ocr.service.internal.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-18 09:48:59.505 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.ocr.service.internal.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-18 09:48:59.507 18428 18428 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-18 09:48:59.510 18428 19185 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760761139431,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:     mocked: false,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:     coords: 
10-18 09:48:59.510 18428 19185 I ReactNativeJS:      { altitude: 772.5999755859375,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:        heading: 0,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:        altitudeAccuracy: 1.2211401462554932,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:        latitude: 12.74871,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:        speed: 0,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:        longitude: 77.829975,
10-18 09:48:59.510 18428 19185 I ReactNativeJS:        accuracy: 2.299999952316284 } } ]
10-18 09:48:59.515 18428 19185 I ReactNativeJS: 📤 Attempting to send background location...
10-18 09:48:59.515 18428 19185 E ReactNativeJS: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service
10-18 09:48:59.516 18428 19185 I ReactNativeJS: ⚠️ Skipping background location update - edge function not available
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: Could not get APN after (but including) LollipopMr1: 
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: java.lang.SecurityException: No permission to access APN settings
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3256)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.os.Parcel.createException(Parcel.java:3240)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.os.Parcel.readException(Parcel.java:3223)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:203)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:155)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.content.ContentProviderProxy.query(ContentProviderNative.java:498)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1250)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1182)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1138)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at berg.b(PG:113)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at berg.a(PG:137)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at bend.a(PG:560)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at benc.s(PG:52)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at benc.n(PG:329)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at prq.call(PG:433)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at bgxj.a(PG:3)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at bgwo.run(PG:19)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at bgxk.run(PG:5)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at rkp.run(PG:431)
10-18 09:48:59.518 32656 32703 E RequestContextBuilder: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.521 18428 19173 I TaskService: Finished task 'background-location-task' with eventId 'd6d8ee4b-2f1c-4b7f-adce-610b82d24fea'.
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: console.error: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly in background service, js engine: hermes, stack:
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: _construct@1:117842
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: Wrapper@1:117496
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: _callSuper@1:115478
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: SyntheticError@1:116983
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: ?anon_0_@1:1972321
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: _next@1:573529
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: anonymous@1:136226
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: _callTimer@1:135225
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: anonymous@1:100174
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: __guard@1:100912
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: flushedQueue@1:100085
10-18 09:48:59.522 18428 19186 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: Could not get APN after (but including) LollipopMr1: 
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: java.lang.SecurityException: No permission to access APN settings
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3256)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.os.Parcel.createException(Parcel.java:3240)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.os.Parcel.readException(Parcel.java:3223)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:203)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:155)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.content.ContentProviderProxy.query(ContentProviderNative.java:498)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1250)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1182)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at android.content.ContentResolver.query(ContentResolver.java:1138)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at berg.b(PG:113)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at berg.a(PG:137)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at bend.a(PG:560)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at benc.s(PG:52)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at benc.n(PG:329)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at prq.call(PG:433)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at bgxj.a(PG:3)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at bgwo.run(PG:19)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at bgxk.run(PG:5)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at rkp.run(PG:431)
10-18 09:48:59.530 32656 32703 E RequestContextBuilder: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.546 26036  3122 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.modulemetadata
10-18 09:48:59.564 32656 32703 D PaySecureElementClient: Felica app not found; returning isSecureElementAvailable = false!
10-18 09:48:59.606 26036  3109 I TFLite-in-PlayServices: Created interpreter.
10-18 09:48:59.638 26036  3109 I TFLite-in-PlayServices: Created interpreter.
10-18 09:48:59.670 26036  3109 I SemanticLocation: (REDACTED) [Inferrer] %s%s
10-18 09:48:59.766 26036  3122 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.gsf
10-18 09:48:59.771  8424  8450 I native  : I0000 00:00:1760761139.768368    8450 soda_async_impl.cc:1377] Current audio timestamp: 1760761139641841
10-18 09:48:59.788  8424  8459 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-18 09:48:59.828 26036 26036 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.play.integrity.api.service.IntegrityApiDisplayListenerApiService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiServiceNoInstantApps }
10-18 09:48:59.883 26036  5154 W PhBaseOp: Phenotype API error. Event: # hoxq@a11821bf, EventCode: GET_STORAGE_INFO [CONTEXT service_id=51 ]
10-18 09:48:59.883 26036  5154 W PhBaseOp: ekiz: 29514: Storage info not created for Play Store.
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at eknf.b(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1084)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at eklx.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at ekkt.h(:com.google.android.gms@253931035@25.39.31 (260400-813878953):35)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at ekkt.f(:com.google.android.gms@253931035@25.39.31 (260400-813878953):17)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at ckvk.fz(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at ckvo.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):128)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at ggng.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):21)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.883 26036  5154 W PhBaseOp: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.884 26036  5154 W AsyncOperation: operation=GetStorageInfoGmsOperation, opStatusCode=29514 [CONTEXT service_id=51 ]
10-18 09:48:59.884 26036  5154 W AsyncOperation: OperationException[Status{statusCode=Storage info not created for Play Store., resolution=null}]
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at ekkt.h(:com.google.android.gms@253931035@25.39.31 (260400-813878953):77)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at ekkt.f(:com.google.android.gms@253931035@25.39.31 (260400-813878953):17)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at ckvk.fz(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at ckvo.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):128)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at ggng.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):21)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.884 26036  5154 W AsyncOperation: 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.910 26106  7247 E SQLiteLog: (1032) statement aborts at 9: [DELETE FROM geller_metadata_table WHERE data_type = ? AND key = ?] attempt to write a readonly database
10-18 09:48:59.911 26106  7247 E fjss    : Delete metadata GDD_ODLH_FA_REGIONS : _sync_timestamp_micros failed
10-18 09:48:59.911 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.911 26106  7247 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.911 26106  7247 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.911 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.911 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.911 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.911 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.911 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.911 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.911 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.911 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.911 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.911 26106  7247 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.911 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.911 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.911 26106  7247 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.911 26106  7247 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.911 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.911 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.911 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.911 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.911 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.911 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.911 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.911 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.911 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.911 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.912 26106  7247 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:59.915 32656 32702 W Finsky  : [42501] PSR is not cached, using PackageManager instead.
10-18 09:48:59.929 26106  7247 E SQLiteLog: (1032) statement aborts at 10: [INSERT INTO geller_metadata_table(metadata,data_type,key) VALUES (?,?,?)] attempt to write a readonly database
10-18 09:48:59.930 26106  7247 E fjss    : Failed to write metadata
10-18 09:48:59.930 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.930 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.930 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.930 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.930 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.930 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.930 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.930 26106  7247 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.930 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.930 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.930 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.930 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.930 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.930 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.930 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.930 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.930 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.930 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.930 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.930 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.930 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.930 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.937 26106  7247 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.937 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.937 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.937 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.937 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.937 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.937 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.937 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.937 26106  7247 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.937 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.937 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.937 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.937 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.937 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.937 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.937 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.937 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.937 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.937 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.937 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.937 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.937 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.937 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.939 26106  7247 E SQLiteLog: (1032) statement aborts at 9: [DELETE FROM geller_metadata_table WHERE data_type = ? AND key = ?] attempt to write a readonly database
10-18 09:48:59.941 26106  7247 E fjss    : Delete metadata GDD_ODLH_FA_REGIONS : _sync_token failed
10-18 09:48:59.941 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.941 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.941 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.941 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.941 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.941 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.941 26106  7247 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.941 26106  7247 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.941 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.941 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.941 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.941 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.941 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.941 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.941 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.941 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.941 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.941 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.941 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.941 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.941 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.941 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.942 26106  7247 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.942 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.942 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForChangedRowCount(Native Method)
10-18 09:48:59.942 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForChangedRowCount(SQLiteConnection.java:967)
10-18 09:48:59.942 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForChangedRowCount(SQLiteSession.java:780)
10-18 09:48:59.942 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeUpdateDelete(SQLiteStatement.java:67)
10-18 09:48:59.942 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.delete(SQLiteDatabase.java:2011)
10-18 09:48:59.942 26106  7247 E fjss    : 	at fjss.i(:com.google.android.gms@253931035@25.39.31 (260400-813878953):12)
10-18 09:48:59.942 26106  7247 E fjss    : 	at fjss.deleteMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):7)
10-18 09:48:59.942 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.942 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.942 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.942 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.942 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.942 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.942 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.942 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.942 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.942 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.942 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.942 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.942 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.942 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.942 26106  7247 I fjss    : (REDACTED) Writing metadata key: %s, corpus: %s
10-18 09:48:59.942 26106  7247 E SQLiteLog: (1032) statement aborts at 10: [INSERT INTO geller_metadata_table(metadata,data_type,key) VALUES (?,?,?)] attempt to write a readonly database
10-18 09:48:59.943 26106  7247 E fjss    : Failed to write metadata
10-18 09:48:59.943 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.943 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.943 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.943 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.943 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.943 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.943 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.943 26106  7247 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.943 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.943 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.943 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.943 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.943 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.943 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.943 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.943 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.943 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.943 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.943 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.943 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.943 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.943 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.946 26106  7247 E fjss    : An error occurred. No action was taken because the error reason is unknown.
10-18 09:48:59.946 26106  7247 E fjss    : android.database.sqlite.SQLiteReadOnlyDatabaseException: attempt to write a readonly database (code 1032 SQLITE_READONLY_DBMOVED)
10-18 09:48:59.946 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
10-18 09:48:59.946 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:1024)
10-18 09:48:59.946 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:814)
10-18 09:48:59.946 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:89)
10-18 09:48:59.946 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1981)
10-18 09:48:59.946 26106  7247 E fjss    : 	at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1875)
10-18 09:48:59.946 26106  7247 E fjss    : 	at fjss.writeMetadata(:com.google.android.gms@253931035@25.39.31 (260400-813878953):52)
10-18 09:48:59.946 26106  7247 E fjss    : 	at com.google.android.libraries.geller.portable.Geller.nativeUpdateMetadata(Native Method)
10-18 09:48:59.946 26106  7247 E fjss    : 	at fjrh.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):23)
10-18 09:48:59.946 26106  7247 E fjss    : 	at ggnd.call(:com.google.android.gms@253931035@25.39.31 (260400-813878953):13)
10-18 09:48:59.946 26106  7247 E fjss    : 	at gpac.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.946 26106  7247 E fjss    : 	at gozc.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):19)
10-18 09:48:59.946 26106  7247 E fjss    : 	at gpad.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):5)
10-18 09:48:59.946 26106  7247 E fjss    : 	at gozs.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):3)
10-18 09:48:59.946 26106  7247 E fjss    : 	at gozt.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):64)
10-18 09:48:59.946 26106  7247 E fjss    : 	at bcdr.c(:com.google.android.gms@253931035@25.39.31 (260400-813878953):50)
10-18 09:48:59.946 26106  7247 E fjss    : 	at bcdr.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):73)
10-18 09:48:59.946 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-18 09:48:59.946 26106  7247 E fjss    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-18 09:48:59.946 26106  7247 E fjss    : 	at bcji.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):8)
10-18 09:48:59.946 26106  7247 E fjss    : 	at java.lang.Thread.run(Thread.java:1119)
10-18 09:48:59.961 26106 26106 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.semanticlocationhistory.federated.regionfetcher.RegionMddDownloadScheduleService.ACTION_TASK_READY dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-18 09:48:59.962 26036  3109 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:49:00.044 18428 19185 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-18 09:49:00.045 18428 19185 I ReactNativeJS: === LOADING RIDES ===
10-18 09:49:00.045 18428 19185 I ReactNativeJS: 'Driver ID:', 'd7b4a339-2ba5-45ed-a2ec-238548a8eab6'
10-18 09:49:00.045 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:49:00.049 18428 19185 I ReactNativeJS: 🔍 Loading current ride...
10-18 09:49:00.052 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:49:00.052 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:49:00.052 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:49:00.052 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:49:00.052 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:49:00.052 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:49:00.052 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:49:00.052 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:49:00.052 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:19:00.052Z'
10-18 09:49:00.052 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:49:00.092 32656 32673 I android.vending: Background young concurrent copying GC freed 3767KB AllocSpace bytes, 16(560KB) LOS objects, 14% free, 11MB/13MB, paused 3.263ms,345us total 140.621ms
10-18 09:49:00.230 26106  7247 I NearbySharing: SharingSyncChimeraService periodic task firing now.
10-18 09:49:00.254 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:49:00.262 32656 32673 I android.vending: Background concurrent copying GC freed 2887KB AllocSpace bytes, 1(36KB) LOS objects, 49% free, 11MB/22MB, paused 58us,208us total 122.816ms
10-18 09:49:00.267 18428 19185 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-18 09:49:00.267 18428 19185 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-18 09:49:00.280 26036  1251 D BluetoothAdapter: 81068006: getState(). Returning OFF
10-18 09:49:00.281 18428 19185 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-18 09:49:00.281 18428 19185 I ReactNativeJS: 'Driver User ID:', 'cb735787-e96d-4d1d-9975-c112e75dfabd'
10-18 09:49:00.282 18428 19185 I ReactNativeJS: 'Location:', { latitude: 12.74871,
10-18 09:49:00.282 18428 19185 I ReactNativeJS:   longitude: 77.829975,
10-18 09:49:00.282 18428 19185 I ReactNativeJS:   accuracy: 2.299999952316284 }
10-18 09:49:00.282 18428 19185 I ReactNativeJS: 📤 Updating location via RPC...
10-18 09:49:00.293 26036  1210 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:49:00.361 26036  5154 I NearbySharing: NearbySharing Internal event CertSync
10-18 09:49:00.363 26036  1210 I NearbySharing: Running certificates syncing task.
10-18 09:49:00.365 32656  7269 I Finsky  : [42574] Integrity key attestation record generated successfully.
10-18 09:49:00.370 26036  3109 I NearbySharing: Retrieved cached verified phone numbers.
10-18 09:49:00.370 26036  3109 I NearbySharing: ConstellationClient sync done.
10-18 09:49:00.396 26036 26070 I FacsCacheGmsModule: (REDACTED) Receiving API connection to FACS API from package '%s'...
10-18 09:49:00.397 26036 26070 I FacsCacheGmsModule: API connection successful!
10-18 09:49:00.402 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.facs.internal.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-18 09:49:00.402 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.facs.internal.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-18 09:49:00.403 26036 26070 I FacsCacheGmsModule: (REDACTED) Received 'getActivityControlsSettings' request from package '%s', instance id '%s', version '%d'...
10-18 09:49:00.411 26036 26070 I FacsCacheGmsModule: Operation 'getActivityControlsSettings' dispatched!
10-18 09:49:00.412 26036  5060 I FacsCacheGmsModule: (REDACTED) Executing operation '%s'...
10-18 09:49:00.412 26106 26157 I FacsCacheGmsModule: Receiving API connection to internal FACS API...
10-18 09:49:00.415 26106 26157 I FacsCacheGmsModule: API connection successful!
10-18 09:49:00.418 26036  5060 I FacsCacheGmsModule: (REDACTED) Operation '%s' successful!
10-18 09:49:00.419 26036 26070 I FacsCacheGmsModule: (REDACTED) Received 'getActivityControlsSettings' request from package '%s', instance id '%s', version '%d'...
10-18 09:49:00.419 26036 26070 I FacsCacheGmsModule: Operation 'getActivityControlsSettings' dispatched!
10-18 09:49:00.419 26036  5060 I FacsCacheGmsModule: (REDACTED) Executing operation '%s'...
10-18 09:49:00.421 26036  5060 I FacsCacheGmsModule: (REDACTED) Operation '%s' successful!
10-18 09:49:00.422 26036  1221 I NearbySharing: Consented to upload device contacts.
10-18 09:49:00.422 26036  1221 I NearbySharing: Syncing contacts - device contacts consent granted
10-18 09:49:00.422 26036  1221 I NearbySharing: Syncing contacts - source CONTACT_BOOK_SOURCE_LOCAL_ALL
10-18 09:49:00.475 26036  3151 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:49:00.480 26036  3151 W FontLog : New version from GServices 29 is less than or equal to current version 29 [CONTEXT service_id=132 ]
10-18 09:49:00.484 18428 19185 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-18 09:49:00.489 18428 19185 I ReactNativeJS: ✅ No pending ride notifications
10-18 09:49:00.489 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:49:00.489 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:49:00.489 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Loading:', true
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:19:00.490Z'
10-18 09:49:00.490 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:49:00.490 18428 19185 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-18 09:49:00.490 18428 19185 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Pending rides:', 0
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Modal already showing:', false
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '  - Has current ride:', false
10-18 09:49:00.490 18428 19185 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-18 09:49:00.490 18428 19185 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-18 09:49:00.490 18428 19185 I ReactNativeJS:   modalAlreadyShowing: false,
10-18 09:49:00.490 18428 19185 I ReactNativeJS:   driverStatus: 'online',
10-18 09:49:00.490 18428 19185 I ReactNativeJS:   hasCurrentRide: false }
10-18 09:49:00.492 26036  3151 I FontLog : (REDACTED) Did not start update
10-18 09:49:00.494 18428 19185 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-18 09:49:00.494 18428 19185 I ReactNativeJS: 🔄 Component state updated:
10-18 09:49:00.494 18428 19185 I ReactNativeJS: '  - Current ride:', 'null'
10-18 09:49:00.494 18428 19185 I ReactNativeJS: '  - Pending rides count:', 0
10-18 09:49:00.494 18428 19185 I ReactNativeJS: '  - Driver status:', 'online'
10-18 09:49:00.494 18428 19185 I ReactNativeJS: '  - Loading:', false
10-18 09:49:00.494 18428 19185 I ReactNativeJS: '  - Error:', null
10-18 09:49:00.494 18428 19185 I ReactNativeJS: '  - Show modal:', false
10-18 09:49:00.494 18428 19185 I ReactNativeJS: '  - Timestamp:', '2025-10-18T04:19:00.494Z'
10-18 09:49:00.494 18428 19185 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-18 09:49:00.496 26036  7382 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-18 09:49:00.513 18428 19185 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-18 09:49:00.556 26036  3122 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.feedback
10-18 09:49:00.585 26036  1210 I NearbySharing: (REDACTED) Incremented the RateLimitThrottler(%s) count to %d.
10-18 09:49:00.609 26036  7403 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-18 09:49:00.622 26036  1221 I NearbySharing: Loaded 456 third party contacts
10-18 09:49:00.730 26036  7403 W Conscrypt: Could not set socket write timeout: java.net.SocketException: Socket closed
10-18 09:49:00.730 26036  7403 W Conscrypt: 	at com.google.android.gms.org.conscrypt.Platform.setSocketWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):204)
10-18 09:49:00.730 26036  7403 W Conscrypt: 	at com.google.android.gms.org.conscrypt.ConscryptFileDescriptorSocket.setSoWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):4)
10-18 09:49:00.794 26036 27707 I NullBinder: NullBinder for com.google.android.gms.lockbox.service.START triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 10202, calling pid: 26106
10-18 09:49:00.795 26036 27707 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 46
10-18 09:49:00.795 26106 26139 E IPCThreadState: Binder transaction failure. id: 428385427, BR_*: 29201, error: -28 (No space left on device)
10-18 09:49:00.795 26106 26139 D ActivityThread: Too many transaction errors, throttling freezer binder callback.
10-18 09:49:00.795 26106 26139 E JavaBinder: !!! FAILED BINDER TRANSACTION !!!  (parcel size = 408)
10-18 09:49:00.795 26106 26139 W GmsClient: IGmsServiceBroker.getService failed
10-18 09:49:00.795 26106 26139 W GmsClient: android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-18 09:49:00.795 26106 26139 W GmsClient: 	at android.os.BinderProxy.transactNative(Native Method)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at android.os.BinderProxy.transact(BinderProxy.java:692)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at bbkc.a(:com.google.android.gms@253931035@25.39.31 (260400-813878953):33)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at bbid.z(:com.google.android.gms@253931035@25.39.31 (260400-813878953):160)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at baoz.run(:com.google.android.gms@253931035@25.39.31 (260400-813878953):42)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at cmjd.mC(:com.google.android.gms@253931035@25.39.31 (260400-813878953):1)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at cmjd.dispatchMessage(:com.google.android.gms@253931035@25.39.31 (260400-813878953):144)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at android.os.Looper.loopOnce(Looper.java:250)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at android.os.Looper.loop(Looper.java:340)
10-18 09:49:00.795 26106 26139 W GmsClient: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-18 09:49:00.803 26036  7403 W Conscrypt: Could not set socket write timeout: java.net.SocketException: Socket closed
10-18 09:49:00.804 26036  7403 W Conscrypt: 	at com.google.android.gms.org.conscrypt.Platform.setSocketWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):204)
10-18 09:49:00.804 26036  7403 W Conscrypt: 	at com.google.android.gms.org.conscrypt.ConscryptFileDescriptorSocket.setSoWriteTimeout(:com.google.android.gms@253931035@25.39.31 (260400-813878953):4)
10-18 09:49:00.956 26036  3109 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.onetimeinitializer
10-18 09:49:00.968 26036  1221 I NearbySharing: Loaded 3 sim contacts from content://icc/adn/subId/2
10-18 09:49:00.983 26036  1221 I NearbySharing: Loaded 0 sim contacts from content://icc/adn/subId/1
10-18 09:49:00.984 26036  3122 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.gms.supervision
10-18 09:49:01.013 26036  1221 I NearbySharing: The contact book was modified but all emails and phone numbers are unchanged.
10-18 09:49:01.014 26036  1221 I NearbySharing: Contact book update: NO_CONTACTS_CHANGED.
10-18 09:49:01.015 26036  1221 I NearbySharing: Updating all contacts reachability.
10-18 09:49:01.024 32656 32706 I IPCThreadState: oneway function results for code 2 on binder at 0xb4000077d00841f0 will be dropped but finished with status UNKNOWN_TRANSACTION
10-18 09:49:01.036 26106 26106 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.checkin.START pkg=com.google.android.gms }
10-18 09:49:01.036 26106 26106 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.checkin.START pkg=com.google.android.gms }
10-18 09:49:01.038 26106 30097 I Checkin : [CheckinApiChimeraService] onGetService
10-18 09:49:01.199 26036  3122 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.gms.location.history
10-18 09:49:01.200  5720 32662 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((owner_package_name IN ( 'com.google.android.gsf' , 'com.google.android.gms' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (is_pending=0 OR (is_pending=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.google.android.gsf' , 'com.google.android.gms' )))) AND (is_trashed=0 OR (is_trashed=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.google.android.gsf' , 'com.google.android.gms' )))) AND (volume_name IN ( 'external_primary' ))) AND ((relative_path =? and _user_id =? and mime_type not like 'null'))
10-18 09:49:01.300  5720 32661 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((owner_package_name IN ( 'com.google.android.gsf' , 'com.google.android.gms' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (is_pending=0 OR (is_pending=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.google.android.gsf' , 'com.google.android.gms' )))) AND (is_trashed=0 OR (is_trashed=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.google.android.gsf' , 'com.google.android.gms' )))) AND (volume_name IN ( 'external_primary' ))) AND ((relative_path =? and _user_id =? and mime_type not like 'null'))
10-18 09:49:01.388 26036  3109 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.devicelockcontroller
10-18 09:49:01.430 26036  1210 I NearbySharing: 'listPublicCertificates' succeeded for parent: users/me/devices/NFBS3RUL6Z with count 81.
10-18 09:49:01.432 26036  1221 I NearbySharing: (REDACTED) Incremented the RateLimitThrottler(%s) count to %d.
10-18 09:49:01.443 26036  1210 I NearbySharing: Saved public certificates to disk.
10-18 09:49:01.497 32656  7264 D nativeloader: Configuring clns-8 for other apk . target_sdk_version=35, uses_libraries=ALL, library_path=, permitted_path=/data:/mnt/expand
10-18 09:49:01.497 32656  7264 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-18 09:49:01.501 32656  7264 D nativeloader: Load /data/user/0/com.android.vending/app_dg_cache/11469011EAF999D9428D22C13B5C70E9515FB51F/the.apk!/libd6F0AEBB0A8CD.so using isolated ns clns-8 (caller=/data/user/0/com.android.vending/app_dg_cache/11469011EAF999D9428D22C13B5C70E9515FB51F/the.apk): ok
10-18 09:49:01.508 32656  7264 D DGInternalHandle: maybeAddInteractionEvents(): The EventCollector is not initialized. This means that the client hasn't intended to collect any interaction events so far.
10-18 09:49:01.529 26036  3109 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.modulemetadata
10-18 09:49:01.561  5720 32660 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((owner_package_name IN ( 'com.android.vending' )) AND (is_pending=0 OR (is_pending=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.android.vending' )))) AND (is_trashed=0 OR (is_trashed=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.android.vending' )))) AND (volume_name IN ( 'external_primary' ))) AND ((relative_path =? and _user_id =? and mime_type not like 'null'))
10-18 09:49:01.570  5720 32663 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((owner_package_name IN ( 'com.android.vending' )) AND (is_pending=0 OR (is_pending=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.android.vending' )))) AND (is_trashed=0 OR (is_trashed=1 AND (lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' OR owner_package_name IN ( 'com.android.vending' )))) AND (volume_name IN ( 'external_primary' ))) AND ((relative_path =? and _user_id =? and mime_type not like 'null'))
10-18 09:49:01.656 26036  3109 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.gsf
10-18 09:49:01.742 26036  3109 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.feedback
10-18 09:49:01.841 26036  3109 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.google.android.gms.supervision
