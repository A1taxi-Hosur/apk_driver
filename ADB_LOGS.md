--------- beginning of main
10-29 03:19:06.266  7741 22442 I Authzen : [DeviceStateSyncManager] The server is in sync with current state. Nothing to do
10-29 03:19:32.787 19858 21575 I .gms.persistent: Explicit concurrent copying GC freed 2105KB AllocSpace bytes, 1(16KB) LOS objects, 50% free, 17MB/34MB, paused 442us,107us total 337.370ms
10-29 03:19:32.794 19858 19870 W .gms.persistent: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~4eOVbduh7Pp6HuLqnABQLg==/com.google.android.projection.gearhead-C1UtHxT1qnbkVO-G7PjmkQ==/base.apk' with 1 weak references
10-29 03:19:32.795 19858 19870 W .gms.persistent: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~4eOVbduh7Pp6HuLqnABQLg==/com.google.android.projection.gearhead-C1UtHxT1qnbkVO-G7PjmkQ==/split_config.arm64_v8a.apk' with 1 weak references
10-29 03:19:32.796 19858 19870 W .gms.persistent: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~4eOVbduh7Pp6HuLqnABQLg==/com.google.android.projection.gearhead-C1UtHxT1qnbkVO-G7PjmkQ==/split_config.en.apk' with 1 weak references
10-29 03:19:32.796 19858 19870 W .gms.persistent: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~4eOVbduh7Pp6HuLqnABQLg==/com.google.android.projection.gearhead-C1UtHxT1qnbkVO-G7PjmkQ==/split_config.xxhdpi.apk' with 1 weak references
10-29 03:19:44.029 23256 23256 I bnve    : onPause
10-29 03:19:44.215  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +319ms
10-29 03:19:44.223 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 03:19:44.224 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 03:19:44.224 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 03:19:44.226 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
--------- beginning of crash
10-29 03:19:44.481 21988 22539 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 03:19:44.481 21988 22539 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 21988
10-29 03:19:44.481 21988 22539 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 03:19:44.481 21988 22539 E AndroidRuntime: anonymous@1:2546050
10-29 03:19:44.481 21988 22539 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 03:19:44.481 21988 22539 E AndroidRuntime: guardedLoadModule@1:92318
10-29 03:19:44.481 21988 22539 E AndroidRuntime: metroRequire@1:91948
10-29 03:19:44.481 21988 22539 E AndroidRuntime: anonymous@1:2542358
10-29 03:19:44.481 21988 22539 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 03:19:44.481 21988 22539 E AndroidRuntime: guardedLoadModule@1:92275
10-29 03:19:44.481 21988 22539 E AndroidRuntime: metroRequire@1:91948
10-29 03:19:44.481 21988 22539 E AndroidRuntime: get@1:704383
10-29 03:19:44.481 21988 22539 E AndroidRuntime: metroContext@1:704088
10-29 03:19:44.481 21988 22539 E AndroidRuntime: loadRoute@1:933407
10-29 03:19:44.481 21988 22539 E AndroidRuntime: getLayoutNode@1:935475
10-29 03:19:44.481 21988 22539 E AndroidRuntime: _loop@1:933305
10-29 03:19:44.481 21988 22539 E AndroidRuntime: getDirectoryTree@1:932443
10-29 03:19:44.481 21988 22539 E AndroidRuntime: getRoutes@1:932152
10-29 03:19:44.481 21988 22539 E AndroidRuntime: getRoutes@1:931380
10-29 03:19:44.481 21988 22539 E AndroidRuntime: initialize@1:906463
10-29 03:19:44.481 21988 22539 E AndroidRuntime: anonymous@1:905068
10-29 03:19:44.481 21988 22539 E AndroidRuntime: useMemo@1:427180
10-29 03:19:44.481 21988 22539 E AndroidRuntime: anonymous@1:216470
10-29 03:19:44.481 21988 22539 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 03:19:44.481 21988 22539 E AndroidRuntime: ContextNavigator@1:948340
10-29 03:19:44.481 21988 22539 E AndroidRuntime: renderWithHooks@1:382872
10-29 03:19:44.481 21988 22539 E AndroidRuntime: beginWork@1:430869
10-29 03:19:44.481 21988 22539 E AndroidRuntime: performUnitOfWork@1:417168
10-29 03:19:44.481 21988 22539 E AndroidRuntime: workLoopSync@1:416298
10-29 03:19:44.481 21988 22539 E AndroidRuntime: renderRootSync@1:416129
10-29 03:19:44.481 21988 22539 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 03:19:44.481 21988 22539 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 03:19:44.481 21988 22539 E AndroidRuntime: updateContainer@1:422756
10-29 03:19:44.481 21988 22539 E AndroidRuntime: anonymous@1:431861
10-29 03:19:44.481 21988 22539 E AndroidRuntime: renderElement@1:250306
10-29 03:19:44.481 21988 22539 E AndroidRuntime: renderApplication@1:211665
10-29 03:19:44.481 21988 22539 E AndroidRuntime: anonymous@1:203533
10-29 03:19:44.481 21988 22539 E AndroidRuntime: runApplication@1:203958
10-29 03:19:44.481 21988 22539 E AndroidRuntime: __callFunction@1:111349
10-29 03:19:44.481 21988 22539 E AndroidRuntime: anonymous@1:109791
10-29 03:19:44.481 21988 22539 E AndroidRuntime: __guard@1:110731
10-29 03:19:44.481 21988 22539 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 03:19:44.481 21988 22539 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 03:19:44.501 23256 23256 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-29 03:19:44.517 23256 23256 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 03:19:44.517 23256 23256 D BLASTBufferQueue: [VRI[Launcher]#135](f:0,a:1) destructor()
10-29 03:19:44.517 23256 23256 D BufferQueueConsumer: [VRI[Launcher]#135(BLAST Consumer)135](id:5ad800000087,api:0,p:-1,c:23256) disconnect
10-29 03:19:44.540 23256 23256 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-29 03:19:44.571 23256 23256 D BufferQueueConsumer: [](id:5ad800000088,api:0,p:-1,c:23256) connect: controlledByApp=false
10-29 03:19:44.571 23256 23256 D BLASTBufferQueue: [VRI[Launcher]#136](f:0,a:0) constructor()
10-29 03:19:44.571 23256 23256 D BLASTBufferQueue: [VRI[Launcher]#136](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-29 03:19:44.596 23256 23385 D BLASTBufferQueue: [VRI[Launcher]#136](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1100877641459231(auto) mPendingTransactions.size=0 graphicBufferId=99883759436729 transform=0
10-29 03:19:44.610 23256 23256 I bnve    : onResume
10-29 03:19:44.635 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 03:19:44.636 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 03:19:44.637 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 03:19:44.638 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 03:19:46.807 23256 23256 I bnve    : onPause
10-29 03:19:47.023  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +327ms
10-29 03:19:47.037 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 03:19:47.037 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 03:19:47.037 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 03:19:47.039 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 03:19:47.243 23256 23256 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-29 03:19:47.267 23256 23256 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 03:19:47.268 23256 23256 D BLASTBufferQueue: [VRI[Launcher]#136](f:0,a:1) destructor()
10-29 03:19:47.268 23256 23256 D BufferQueueConsumer: [VRI[Launcher]#136(BLAST Consumer)136](id:5ad800000088,api:0,p:-1,c:23256) disconnect
10-29 03:19:47.275 21892 22610 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 03:19:47.275 21892 22610 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 21892
10-29 03:19:47.275 21892 22610 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 03:19:47.275 21892 22610 E AndroidRuntime: anonymous@1:2546050
10-29 03:19:47.275 21892 22610 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 03:19:47.275 21892 22610 E AndroidRuntime: guardedLoadModule@1:92318
10-29 03:19:47.275 21892 22610 E AndroidRuntime: metroRequire@1:91948
10-29 03:19:47.275 21892 22610 E AndroidRuntime: anonymous@1:2542358
10-29 03:19:47.275 21892 22610 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 03:19:47.275 21892 22610 E AndroidRuntime: guardedLoadModule@1:92275
10-29 03:19:47.275 21892 22610 E AndroidRuntime: metroRequire@1:91948
10-29 03:19:47.275 21892 22610 E AndroidRuntime: get@1:704383
10-29 03:19:47.275 21892 22610 E AndroidRuntime: metroContext@1:704088
10-29 03:19:47.275 21892 22610 E AndroidRuntime: loadRoute@1:933407
10-29 03:19:47.275 21892 22610 E AndroidRuntime: getLayoutNode@1:935475
10-29 03:19:47.275 21892 22610 E AndroidRuntime: _loop@1:933305
10-29 03:19:47.275 21892 22610 E AndroidRuntime: getDirectoryTree@1:932443
10-29 03:19:47.275 21892 22610 E AndroidRuntime: getRoutes@1:932152
10-29 03:19:47.275 21892 22610 E AndroidRuntime: getRoutes@1:931380
10-29 03:19:47.275 21892 22610 E AndroidRuntime: initialize@1:906463
10-29 03:19:47.275 21892 22610 E AndroidRuntime: anonymous@1:905068
10-29 03:19:47.275 21892 22610 E AndroidRuntime: useMemo@1:427180
10-29 03:19:47.275 21892 22610 E AndroidRuntime: anonymous@1:216470
10-29 03:19:47.275 21892 22610 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 03:19:47.275 21892 22610 E AndroidRuntime: ContextNavigator@1:948340
10-29 03:19:47.275 21892 22610 E AndroidRuntime: renderWithHooks@1:382872
10-29 03:19:47.275 21892 22610 E AndroidRuntime: beginWork@1:430869
10-29 03:19:47.275 21892 22610 E AndroidRuntime: performUnitOfWork@1:417168
10-29 03:19:47.275 21892 22610 E AndroidRuntime: workLoopSync@1:416298
10-29 03:19:47.275 21892 22610 E AndroidRuntime: renderRootSync@1:416129
10-29 03:19:47.275 21892 22610 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 03:19:47.275 21892 22610 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 03:19:47.275 21892 22610 E AndroidRuntime: updateContainer@1:422756
10-29 03:19:47.275 21892 22610 E AndroidRuntime: anonymous@1:431861
10-29 03:19:47.275 21892 22610 E AndroidRuntime: renderElement@1:250306
10-29 03:19:47.275 21892 22610 E AndroidRuntime: renderApplication@1:211665
10-29 03:19:47.275 21892 22610 E AndroidRuntime: anonymous@1:203533
10-29 03:19:47.275 21892 22610 E AndroidRuntime: runApplication@1:203958
10-29 03:19:47.275 21892 22610 E AndroidRuntime: __callFunction@1:111349
10-29 03:19:47.275 21892 22610 E AndroidRuntime: anonymous@1:109791
10-29 03:19:47.275 21892 22610 E AndroidRuntime: __guard@1:110731
10-29 03:19:47.275 21892 22610 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 03:19:47.275 21892 22610 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 03:19:47.293 23256 23256 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-29 03:19:47.333 23256 23256 D BufferQueueConsumer: [](id:5ad800000089,api:0,p:-1,c:23256) connect: controlledByApp=false
10-29 03:19:47.333 23256 23256 D BLASTBufferQueue: [VRI[Launcher]#137](f:0,a:0) constructor()
10-29 03:19:47.333 23256 23256 D BLASTBufferQueue: [VRI[Launcher]#137](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-29 03:19:47.350 23256 23385 D BLASTBufferQueue: [VRI[Launcher]#137](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1100880395025462(auto) mPendingTransactions.size=0 graphicBufferId=99883759436736 transform=0
10-29 03:19:47.352 23256 23256 I bnve    : onStop
10-29 03:19:47.358 23256 23256 I bnve    : onStart
10-29 03:19:47.361 23256 23256 I blly    : (REDACTED) [%s] onStart()
10-29 03:19:47.361 23256 23256 I bloe    : Reloading theme data
10-29 03:19:47.362 23256 23256 I bnve    : onResume
10-29 03:19:47.434 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 03:19:47.435 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 03:19:47.435 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 03:19:47.436 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 03:19:51.078 22575 22575 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-29 03:19:51.080 22575 22575 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-29 03:19:51.083 22575 22575 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-29 03:19:51.092 22575 22575 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-29 03:19:51.092 22575 22575 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-29 03:19:51.101 22575 22575 D CompatChangeReporter: Compat change id reported: 242716250; UID 10572; state: ENABLED
10-29 03:19:51.118 22575 22575 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-29 03:19:51.126 22575 22575 D nativeloader: Configuring clns-7 for other apk /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64:/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-29 03:19:51.146 22575 22575 V GraphicsEnvironment: Currently set values for:
10-29 03:19:51.146 22575 22575 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-29 03:19:51.146 22575 22575 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-29 03:19:51.146 22575 22575 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-29 03:19:51.146 22575 22575 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-29 03:19:51.216 22575 22575 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-29 03:19:51.216 22575 22575 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-29 03:19:51.218 22575 22575 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-29 03:19:51.229 22575 22575 V SoLoader: Init SoLoader delegate
10-29 03:19:51.249 22575 22575 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-29 03:19:51.297 22575 22575 V SoLoader: libhermes.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.300 22575 22575 V SoLoader: libjsi.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.301 22575 22575 V SoLoader: libfolly_runtime.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.302 22575 22575 V SoLoader: libglog.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.303 22575 22575 V SoLoader: libm.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.303 22575 22575 V SoLoader: libm.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.303 22575 22575 D SoLoader: libm.so found on /system/lib64
10-29 03:19:51.303 22575 22575 D SoLoader: libm.so loaded implicitly
10-29 03:19:51.303 22575 22575 V SoLoader: libc++_shared.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.304 23256 23256 I bnve    : onPause
10-29 03:19:51.304 22575 22575 V SoLoader: libc.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.304 22575 22575 V SoLoader: libc.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.304 22575 22575 D SoLoader: libc.so found on /system/lib64
10-29 03:19:51.304 22575 22575 D SoLoader: libc.so loaded implicitly
10-29 03:19:51.304 22575 22575 V SoLoader: libdl.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.304 22575 22575 V SoLoader: libdl.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.304 22575 22575 D SoLoader: libdl.so found on /system/lib64
10-29 03:19:51.304 22575 22575 D SoLoader: libdl.so loaded implicitly
10-29 03:19:51.307 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.307 22575 22575 D SoLoader: libc++_shared.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.309 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.309 22575 22575 D SoLoader: libglog.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.311 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.311 22575 22575 D SoLoader: libfolly_runtime.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.312 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.313 22575 22575 D SoLoader: libjsi.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.313 22575 22575 V SoLoader: libfbjni.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.314 22575 22575 V SoLoader: libandroid.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.314 22575 22575 V SoLoader: libandroid.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.314 22575 22575 D SoLoader: libandroid.so found on /system/lib64
10-29 03:19:51.314 22575 22575 D SoLoader: libandroid.so loaded implicitly
10-29 03:19:51.314 22575 22575 V SoLoader: liblog.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.314 22575 22575 V SoLoader: liblog.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.314 22575 22575 D SoLoader: liblog.so found on /system/lib64
10-29 03:19:51.314 22575 22575 D SoLoader: liblog.so loaded implicitly
10-29 03:19:51.316 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.316 22575 22575 D SoLoader: libfbjni.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.318 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.318 22575 22575 D SoLoader: libhermes.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.318 22575 22575 V SoLoader: libhermes_executor.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.322 22575 22575 V SoLoader: libreactnativejni.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.325 22575 22575 V SoLoader: libyoga.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.327 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.327 22575 22575 D SoLoader: libyoga.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.328 22575 22575 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.330 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.330 22575 22575 D SoLoader: libreactperfloggerjni.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.330 22575 22575 V SoLoader: libreact_render_core.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.333 22575 22575 V SoLoader: libreact_render_debug.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.335 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.336 22575 22575 D SoLoader: libreact_render_debug.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.336 22575 22575 V SoLoader: libreact_render_graphics.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.338 22575 22575 V SoLoader: libreact_utils.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.340 22575 22575 V SoLoader: libreact_debug.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.341 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.342 22575 22575 D SoLoader: libreact_debug.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.342 22575 22575 V SoLoader: libjsinspector.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.343 22575 22575 V SoLoader: libreact_featureflags.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.345 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.345 22575 22575 D SoLoader: libreact_featureflags.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.345 22575 22575 V SoLoader: libruntimeexecutor.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.347 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.347 22575 22575 D SoLoader: libruntimeexecutor.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.348 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.348 22575 22575 D SoLoader: libjsinspector.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.350 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.350 22575 22575 D SoLoader: libreact_utils.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.351 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.351 22575 22575 D SoLoader: libreact_render_graphics.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.351 22575 22575 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.353 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.354 22575 22575 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.355 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.355 22575 22575 D SoLoader: libreact_render_core.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.357 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.358 22575 22575 D SoLoader: libreactnativejni.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.359 22575 22575 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.359 22575 22575 D SoLoader: libhermes_executor.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.369 22575 22675 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.371 22575 22575 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-29 03:19:51.371 22575 22575 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 03:19:51.371 22575 22575 I M-ProMotion: M-ProMotion is disabled
10-29 03:19:51.372 22575 22677 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 03:19:51.376 22575 22575 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-29 03:19:51.379 22575 22575 W HWUI    : Unknown dataspace 0
10-29 03:19:51.397 22575 22575 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 03:19:51.397 22575 22575 D BufferQueueConsumer: [](id:582f00000000,api:0,p:-1,c:22575) connect: controlledByApp=false
10-29 03:19:51.398 22575 22575 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-29 03:19:51.398 22575 22575 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-29 03:19:51.404 22575 22675 I ExpoModulesCore: ✅ AppContext was initialized
10-29 03:19:51.407 22575 22664 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-29 03:19:51.440 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-29 03:19:51.443 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-29 03:19:51.444 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-29 03:19:51.445 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-29 03:19:51.446 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-29 03:19:51.447 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-29 03:19:51.447 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-29 03:19:51.448 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-29 03:19:51.449 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-29 03:19:51.450 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-29 03:19:51.451 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-29 03:19:51.451 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-29 03:19:51.451 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-29 03:19:51.452 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-29 03:19:51.453 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-29 03:19:51.453 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-29 03:19:51.453 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-29 03:19:51.454 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-29 03:19:51.455 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-29 03:19:51.455 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-29 03:19:51.455 22575 22664 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-29 03:19:51.456 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-29 03:19:51.456 22575 22664 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1100884501615540(auto) mPendingTransactions.size=0 graphicBufferId=96958886707200 transform=0
10-29 03:19:51.456 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-29 03:19:51.456 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-29 03:19:51.457 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-29 03:19:51.457 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-29 03:19:51.458 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-29 03:19:51.459 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-29 03:19:51.459 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-29 03:19:51.460 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-29 03:19:51.463 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-29 03:19:51.464 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-29 03:19:51.465 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-29 03:19:51.466 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-29 03:19:51.466 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-29 03:19:51.467 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-29 03:19:51.467 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-29 03:19:51.468 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-29 03:19:51.468 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-29 03:19:51.469 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-29 03:19:51.469 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-29 03:19:51.469 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-29 03:19:51.470 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-29 03:19:51.470 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-29 03:19:51.471 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-29 03:19:51.471 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-29 03:19:51.472 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-29 03:19:51.472 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-29 03:19:51.473 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-29 03:19:51.474 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-29 03:19:51.474 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-29 03:19:51.475  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +284ms
10-29 03:19:51.475 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-29 03:19:51.476 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-29 03:19:51.476 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-29 03:19:51.478 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-29 03:19:51.479 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-29 03:19:51.479 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-29 03:19:51.480 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-29 03:19:51.481 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-29 03:19:51.482 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-29 03:19:51.483 22575 22575 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{88218ae V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-29 03:19:51.484 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-29 03:19:51.485 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-29 03:19:51.485 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-29 03:19:51.486 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-29 03:19:51.487 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-29 03:19:51.488 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-29 03:19:51.488 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 03:19:51.489 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 03:19:51.489 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-29 03:19:51.489 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 03:19:51.490 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 03:19:51.490 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-29 03:19:51.491 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-29 03:19:51.491 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-29 03:19:51.492 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-29 03:19:51.493 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-29 03:19:51.493 22575 22690 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-29 03:19:51.528 22575 22689 V SoLoader: libexpo-modules-core.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.530 22575 22689 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.534 22575 22689 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.534 22575 22689 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.535 22575 22689 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.536 22575 22689 D SoLoader: libexpo-modules-core.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.537 22575 22689 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.542 22575 22689 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.542 22575 22689 D SoLoader: libturbomodulejsijni.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.546 22575 22689 I ExpoModulesCore: ✅ JSI interop was installed
10-29 03:19:51.547 22575 22689 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-29 03:19:51.553 22575 22689 I ExpoModulesCore: ✅ Constants were exported
10-29 03:19:51.576 22575 22689 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!classes3.dex): ok
10-29 03:19:51.580 22575 22689 I ReactNativeJS: Running "main
10-29 03:19:51.585 22575 22689 V SoLoader: libreactnativeblob.so not found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/lib/arm64
10-29 03:19:51.589 22575 22689 D nativeloader: Load /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk): ok
10-29 03:19:51.589 22575 22689 D SoLoader: libreactnativeblob.so found on /data/app/~~V1NgwEAL7VMyW6k07jBuLQ==/com.a1taxi.driverpro-yhuLrWPm6zNgBlk2sReVTA==/base.apk!/lib/arm64-v8a
10-29 03:19:51.593 22575 22689 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-29 03:19:51.593 22575 22689 I ReactNativeJS:   hasAnonKey: true,
10-29 03:19:51.593 22575 22689 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-29 03:19:51.704 22575 22689 I ReactNativeJS: ✅ TripLocationTracker: Background task registered
10-29 03:19:51.705 22575 22689 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 03:19:51.706 22575 22689 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 03:19:51.707 22575 22689 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 03:19:51.707 22575 22689 E ReactNativeJS: 
10-29 03:19:51.707 22575 22689 E ReactNativeJS: This error is located at:
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in ContextNavigator
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in ExpoRoot
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in App
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in RCTView
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in Unknown
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 03:19:51.707 22575 22689 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 03:19:51.707 22575 22689 E ReactNativeJS: 
10-29 03:19:51.707 22575 22689 E ReactNativeJS: This error is located at:
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in ContextNavigator
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in ExpoRoot
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in App
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in RCTView
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in Unknown
10-29 03:19:51.707 22575 22689 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 03:19:51.709 22575 22690 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 03:19:51.709 22575 22690 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 22575
10-29 03:19:51.709 22575 22690 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 03:19:51.709 22575 22690 E AndroidRuntime: anonymous@1:2546050
10-29 03:19:51.709 22575 22690 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 03:19:51.709 22575 22690 E AndroidRuntime: guardedLoadModule@1:92318
10-29 03:19:51.709 22575 22690 E AndroidRuntime: metroRequire@1:91948
10-29 03:19:51.709 22575 22690 E AndroidRuntime: anonymous@1:2542358
10-29 03:19:51.709 22575 22690 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 03:19:51.709 22575 22690 E AndroidRuntime: guardedLoadModule@1:92275
10-29 03:19:51.709 22575 22690 E AndroidRuntime: metroRequire@1:91948
10-29 03:19:51.709 22575 22690 E AndroidRuntime: get@1:704383
10-29 03:19:51.709 22575 22690 E AndroidRuntime: metroContext@1:704088
10-29 03:19:51.709 22575 22690 E AndroidRuntime: loadRoute@1:933407
10-29 03:19:51.709 22575 22690 E AndroidRuntime: getLayoutNode@1:935475
10-29 03:19:51.709 22575 22690 E AndroidRuntime: _loop@1:933305
10-29 03:19:51.709 22575 22690 E AndroidRuntime: getDirectoryTree@1:932443
10-29 03:19:51.709 22575 22690 E AndroidRuntime: getRoutes@1:932152
10-29 03:19:51.709 22575 22690 E AndroidRuntime: getRoutes@1:931380
10-29 03:19:51.709 22575 22690 E AndroidRuntime: initialize@1:906463
10-29 03:19:51.709 22575 22690 E AndroidRuntime: anonymous@1:905068
10-29 03:19:51.709 22575 22690 E AndroidRuntime: useMemo@1:427180
10-29 03:19:51.709 22575 22690 E AndroidRuntime: anonymous@1:216470
10-29 03:19:51.709 22575 22690 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 03:19:51.709 22575 22690 E AndroidRuntime: ContextNavigator@1:948340
10-29 03:19:51.709 22575 22690 E AndroidRuntime: renderWithHooks@1:382872
10-29 03:19:51.709 22575 22690 E AndroidRuntime: beginWork@1:430869
10-29 03:19:51.709 22575 22690 E AndroidRuntime: performUnitOfWork@1:417168
10-29 03:19:51.709 22575 22690 E AndroidRuntime: workLoopSync@1:416298
10-29 03:19:51.709 22575 22690 E AndroidRuntime: renderRootSync@1:416129
10-29 03:19:51.709 22575 22690 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 03:19:51.709 22575 22690 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 03:19:51.709 22575 22690 E AndroidRuntime: updateContainer@1:422756
10-29 03:19:51.709 22575 22690 E AndroidRuntime: anonymous@1:431861
10-29 03:19:51.709 22575 22690 E AndroidRuntime: renderElement@1:250306
10-29 03:19:51.709 22575 22690 E AndroidRuntime: renderApplication@1:211665
10-29 03:19:51.709 22575 22690 E AndroidRuntime: anonymous@1:203533
10-29 03:19:51.709 22575 22690 E AndroidRuntime: runApplication@1:203958
10-29 03:19:51.709 22575 22690 E AndroidRuntime: __callFunction@1:111349
10-29 03:19:51.709 22575 22690 E AndroidRuntime: anonymous@1:109791
10-29 03:19:51.709 22575 22690 E AndroidRuntime: __guard@1:110731
10-29 03:19:51.709 22575 22690 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 03:19:51.709 22575 22690 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 03:19:51.727 23256 23256 I bnve    : onResume
10-29 03:19:51.765 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 03:19:51.766 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 03:19:51.766 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 03:19:51.767 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
