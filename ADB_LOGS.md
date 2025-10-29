--------- beginning of main
10-29 14:44:51.353  5720 14147 D SQLiteQueryBuilder: SELECT _id, _data FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id>1000016595 AND (width > 0 AND height > 0))) LIMIT 5000 OFFSET 0
10-29 14:44:51.365  5720 14147 D SQLiteQueryBuilder: SELECT _id, _data FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id>1000016420 AND (width > 0 AND height > 0))) LIMIT 5000 OFFSET 0
10-29 14:44:51.417  5720 14147 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:44:51.436  5720 14147 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:44:51.798  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:44:51.864  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:44:52.093  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:44:57.461  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id>1000016595 AND (width > 0 AND height > 0))) LIMIT 5000 OFFSET 0
10-29 14:44:57.471  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id>1000016420 AND (width > 0 AND height > 0))) LIMIT 5000 OFFSET 0
10-29 14:44:57.510  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:44:57.538  5720 14093 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:44:57.861  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:44:57.924  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:44:58.162  5720 14093 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:00.339 18285 18285 I PkDeviceHelper: PkDeviceHelper.refreshDevices():93 refreshing devices
10-29 14:45:00.339 18285 18285 I PkDeviceHelper: PkDeviceHelper.refreshDevices():93 refreshing devices
10-29 14:45:00.340 18285 18285 I PkDeviceHelper: PkDeviceHelper.refreshDevices():93 refreshing devices
10-29 14:45:00.539 18285 16158 I DeviceStatusMonitor: DeviceStatusMonitor.handleBroadcast():123 onReceive() : Action = android.intent.action.SCREEN_ON
10-29 14:45:00.539 18285 16158 I DeviceStatusMonitor: DeviceStatusMonitor.updateCountryInfo():139 updateCountryInfo(), notifyAnyway = false
10-29 14:45:00.669 10830 16031 W DatabaseProcessor: processLocalDevices: failed to get the network info with non-null networkId.
10-29 14:45:00.680 10830 10830 I CastMediaRouteProvider: Published 0 routes
10-29 14:45:00.707 10830 15980 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-29 14:45:00.707 10830 15980 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-29 14:45:00.720 10830 15980 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-29 14:45:00.721 10830 15980 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-29 14:45:00.728 10830 10884 I NullBinder: NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl, calling uid: 1000, calling pid: 0
10-29 14:45:00.728 10830 10884 W .gms.persistent: Large reply transaction of 1056768 bytes, interface descriptor , code 1
10-29 14:45:00.838 10830 10860 I MdnsServiceBrowser: (REDACTED) registering %s
10-29 14:45:01.210 10830 16030 I NearbySharing: Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, isWifiConnected=true)
10-29 14:45:02.632 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~7a5k4itB3Z_szCXdEaZA9Q==/cards.uni.app.credit-86UrRGbHWWZK9N4-pOaU1g==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:02.789 10830 16002 I NearbySharing: Screen is unlocked
10-29 14:45:02.789 10830 16002 I NearbySharing: Uwb feature is off.
10-29 14:45:02.789 10830 16002 I NearbySharing: Uwb feature is off.
10-29 14:45:02.789 10830 16002 I NearbySharing: Stopping scanning because Bluetooth is disabled.
10-29 14:45:02.790 10830 16002 I NearbySharing: Stopping Fast Init advertisement because Bluetooth is off.
10-29 14:45:02.790 10830 16002 I NearbySharing: Stopping advertising because Bluetooth is disabled.
10-29 14:45:02.805 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:02.807 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:02.836 10830 16002 I NearbySharing: Starting scanning for Fast Initiation.
10-29 14:45:02.838 10830 16002 I NearbySharing: Failed to scan for FastInitiation. Scanning is not supported on this device.
10-29 14:45:02.839 10830 16002 I NearbySharing: Dismissing HUN as there's no device nearby.
10-29 14:45:02.871  9313 16312 I PersonalSafety: ConnectivityProtectionLockingIntentOperation: cancelled task [CONTEXT service_id=310 ]
10-29 14:45:02.876 10830 16319 I NearbyMediums: ModuleInitializer handles incoming intent android.intent.action.USER_PRESENT
10-29 14:45:02.880 10830 16002 I Nearby  : (REDACTED) Beginning attempt #%d out of %d for %s...
10-29 14:45:02.884 10830 16002 I NearbyMediums: BluetoothAdapter's name was not set by Nearby Connections, ignoring call to restore default scan mode.
10-29 14:45:02.885 10830 16002 I NearbyMediums: BluetoothAdapter's name was not set by Nearby Connections, ignoring call to restore device name
10-29 14:45:02.892 10830 10830 I RCNIntentOperation: RCN is disabled on this network.
10-29 14:45:03.059 10830 16002 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for cards.uni.app.credit
10-29 14:45:03.158  9313 16358 I AdvertisingIdClient: shouldSendLog 2173234459
10-29 14:45:03.158  9313 16358 I AdvertisingIdClient: GetInfoInternal elapse 4ms
10-29 14:45:04.125 27267 27336 I Finsky  : [87131] AIM: AppInfoManager-Perf > Destroying AppInfoManager ...
10-29 14:45:04.275  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:04.288  5720  5734 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:45:04.561  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:04.601  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:45:04.787  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:05.053 27267 27349 I Finsky  : [87140] AIM: AppInfoManager-Perf > Destroying AppInfoManager ...
10-29 14:45:07.293 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:07.634  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +370ms
10-29 14:45:07.642 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:07.642 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:07.642 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:07.643 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:07.692  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:07.728  5720  5734 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
--------- beginning of crash
10-29 14:45:07.927 15671 16430 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:07.927 15671 16430 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 15671
10-29 14:45:07.927 15671 16430 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:07.927 15671 16430 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:07.927 15671 16430 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:07.927 15671 16430 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:07.927 15671 16430 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:07.927 15671 16430 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:07.927 15671 16430 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:07.927 15671 16430 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:07.927 15671 16430 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:07.927 15671 16430 E AndroidRuntime: get@1:704383
10-29 14:45:07.927 15671 16430 E AndroidRuntime: metroContext@1:704088
10-29 14:45:07.927 15671 16430 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:07.927 15671 16430 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:07.927 15671 16430 E AndroidRuntime: _loop@1:933305
10-29 14:45:07.927 15671 16430 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:07.927 15671 16430 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:07.927 15671 16430 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:07.927 15671 16430 E AndroidRuntime: initialize@1:906463
10-29 14:45:07.927 15671 16430 E AndroidRuntime: anonymous@1:905068
10-29 14:45:07.927 15671 16430 E AndroidRuntime: useMemo@1:427180
10-29 14:45:07.927 15671 16430 E AndroidRuntime: anonymous@1:216470
10-29 14:45:07.927 15671 16430 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:07.927 15671 16430 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:07.927 15671 16430 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:07.927 15671 16430 E AndroidRuntime: beginWork@1:430869
10-29 14:45:07.927 15671 16430 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:07.927 15671 16430 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:07.927 15671 16430 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:07.927 15671 16430 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:07.927 15671 16430 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:07.927 15671 16430 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:07.927 15671 16430 E AndroidRuntime: anonymous@1:431861
10-29 14:45:07.927 15671 16430 E AndroidRuntime: renderElement@1:250306
10-29 14:45:07.927 15671 16430 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:07.927 15671 16430 E AndroidRuntime: anonymous@1:203533
10-29 14:45:07.927 15671 16430 E AndroidRuntime: runApplication@1:203958
10-29 14:45:07.927 15671 16430 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:07.927 15671 16430 E AndroidRuntime: anonymous@1:109791
10-29 14:45:07.927 15671 16430 E AndroidRuntime: __guard@1:110731
10-29 14:45:07.927 15671 16430 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:07.927 15671 16430 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:08.052 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:08.052 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:08.053 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:08.054 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:08.614  5720  5865 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:08.651  5720  5865 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:45:08.818  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:10.315 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:10.319 15764 15764 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-29 14:45:10.322 15764 15764 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-29 14:45:10.324 15764 15764 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-29 14:45:10.332 15764 15764 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-29 14:45:10.332 15764 15764 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-29 14:45:10.341 15764 15764 D CompatChangeReporter: Compat change id reported: 242716250; UID 10578; state: ENABLED
10-29 14:45:10.359 15764 15764 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-29 14:45:10.368 15764 15764 D nativeloader: Configuring clns-7 for other apk /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64:/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-29 14:45:10.388 15764 15764 V GraphicsEnvironment: Currently set values for:
10-29 14:45:10.388 15764 15764 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-29 14:45:10.388 15764 15764 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-29 14:45:10.388 15764 15764 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-29 14:45:10.389 15764 15764 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-29 14:45:10.455 15764 15764 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-29 14:45:10.455 15764 15764 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-29 14:45:10.457 15764 15764 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-29 14:45:10.467 15764 15764 V SoLoader: Init SoLoader delegate
10-29 14:45:10.494 15764 15764 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-29 14:45:10.543 15764 15764 V SoLoader: libhermes.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.546 15764 15764 V SoLoader: libjsi.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.547 15764 15764 V SoLoader: libfolly_runtime.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.548 15764 15764 V SoLoader: libglog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.548 15764 15764 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.548 15764 15764 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.549 15764 15764 D SoLoader: libm.so found on /system/lib64
10-29 14:45:10.549 15764 15764 D SoLoader: libm.so loaded implicitly
10-29 14:45:10.549 15764 15764 V SoLoader: libc++_shared.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.550 15764 15764 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.550 15764 15764 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.550 15764 15764 D SoLoader: libc.so found on /system/lib64
10-29 14:45:10.550 15764 15764 D SoLoader: libc.so loaded implicitly
10-29 14:45:10.550 15764 15764 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.550 15764 15764 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.550 15764 15764 D SoLoader: libdl.so found on /system/lib64
10-29 14:45:10.550 15764 15764 D SoLoader: libdl.so loaded implicitly
10-29 14:45:10.551 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.552 15764 15764 D SoLoader: libc++_shared.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.553 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.553 15764 15764 D SoLoader: libglog.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.554 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.554 15764 15764 D SoLoader: libfolly_runtime.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.556 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.556 15764 15764 D SoLoader: libjsi.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.556 15764 15764 V SoLoader: libfbjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.557 15764 15764 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.557 15764 15764 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.557 15764 15764 D SoLoader: libandroid.so found on /system/lib64
10-29 14:45:10.557 15764 15764 D SoLoader: libandroid.so loaded implicitly
10-29 14:45:10.557 15764 15764 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.557 15764 15764 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.557 15764 15764 D SoLoader: liblog.so found on /system/lib64
10-29 14:45:10.557 15764 15764 D SoLoader: liblog.so loaded implicitly
10-29 14:45:10.558 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.558 15764 15764 D SoLoader: libfbjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.559 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.560 15764 15764 D SoLoader: libhermes.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.560 15764 15764 V SoLoader: libhermes_executor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.563 15764 15764 V SoLoader: libreactnativejni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.565 15764 15764 V SoLoader: libyoga.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.567 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.567 15764 15764 D SoLoader: libyoga.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.568 15764 15764 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.569 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.569 15764 15764 D SoLoader: libreactperfloggerjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.570 15764 15764 V SoLoader: libreact_render_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.572 15764 15764 V SoLoader: libreact_render_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.573 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.573 15764 15764 D SoLoader: libreact_render_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.574 15764 15764 V SoLoader: libreact_render_graphics.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.575 15764 15764 V SoLoader: libreact_utils.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.576 15764 15764 V SoLoader: libreact_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.578 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.578 15764 15764 D SoLoader: libreact_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.578 15764 15764 V SoLoader: libjsinspector.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.580 15764 15764 V SoLoader: libreact_featureflags.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.581 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.581 15764 15764 D SoLoader: libreact_featureflags.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.582 15764 15764 V SoLoader: libruntimeexecutor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.583 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.583 15764 15764 D SoLoader: libruntimeexecutor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.584 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.584 15764 15764 D SoLoader: libjsinspector.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.585 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.585 15764 15764 D SoLoader: libreact_utils.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.586 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.586 15764 15764 D SoLoader: libreact_render_graphics.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.586 15764 15764 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.588 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.588 15764 15764 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.589 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.589 15764 15764 D SoLoader: libreact_render_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.591 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.592 15764 15764 D SoLoader: libreactnativejni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.593 15764 15764 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.593 15764 15764 D SoLoader: libhermes_executor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.602 15764 16503 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.604 15764 15764 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-29 14:45:10.605 15764 15764 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:10.605 15764 15764 I M-ProMotion: M-ProMotion is disabled
10-29 14:45:10.605 15764 16505 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:10.610 15764 15764 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-29 14:45:10.612 15764 15764 W HWUI    : Unknown dataspace 0
10-29 14:45:10.629 15764 15764 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 14:45:10.629 15764 15764 D BufferQueueConsumer: [](id:3d9400000000,api:0,p:-1,c:15764) connect: controlledByApp=false
10-29 14:45:10.630 15764 15764 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-29 14:45:10.630 15764 15764 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-29 14:45:10.641 15764 16503 I ExpoModulesCore: ✅ AppContext was initialized
10-29 14:45:10.642 15764 16493 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-29 14:45:10.657 10830 16002 I NearbyPresence: (REDACTED) %s verified [==] new request %s equals to the old request
10-29 14:45:10.686 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-29 14:45:10.688 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-29 14:45:10.689 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-29 14:45:10.691 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-29 14:45:10.692 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-29 14:45:10.693 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-29 14:45:10.694 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-29 14:45:10.696 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-29 14:45:10.697 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-29 14:45:10.697 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-29 14:45:10.698 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-29 14:45:10.698 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-29 14:45:10.699 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-29 14:45:10.700 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-29 14:45:10.700 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-29 14:45:10.700 15764 16493 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-29 14:45:10.701 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-29 14:45:10.701 15764 16493 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1114871366964527(auto) mPendingTransactions.size=0 graphicBufferId=67705864454144 transform=0
10-29 14:45:10.701 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-29 14:45:10.702 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-29 14:45:10.705 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-29 14:45:10.706 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-29 14:45:10.707 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-29 14:45:10.708 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-29 14:45:10.712 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-29 14:45:10.713 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-29 14:45:10.713 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-29 14:45:10.714 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-29 14:45:10.715 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-29 14:45:10.716 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-29 14:45:10.717 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-29 14:45:10.719 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-29 14:45:10.720 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-29 14:45:10.721 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-29 14:45:10.721 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-29 14:45:10.722 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-29 14:45:10.723 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-29 14:45:10.723 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-29 14:45:10.724 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-29 14:45:10.725 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-29 14:45:10.725 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-29 14:45:10.726 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-29 14:45:10.726 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-29 14:45:10.727 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-29 14:45:10.727 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-29 14:45:10.727  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +292ms
10-29 14:45:10.727 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-29 14:45:10.728 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-29 14:45:10.729 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-29 14:45:10.729 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-29 14:45:10.729 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-29 14:45:10.730 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-29 14:45:10.731 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-29 14:45:10.731 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-29 14:45:10.732 15764 15764 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-29 14:45:10.732 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-29 14:45:10.733 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-29 14:45:10.734 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-29 14:45:10.736 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-29 14:45:10.737 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-29 14:45:10.738 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-29 14:45:10.739 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-29 14:45:10.739 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:10.739 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-29 14:45:10.740 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:10.740 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:10.740 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-29 14:45:10.741 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-29 14:45:10.741 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:10.741 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-29 14:45:10.742 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-29 14:45:10.743 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-29 14:45:10.743 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-29 14:45:10.744 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-29 14:45:10.745 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-29 14:45:10.747 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-29 14:45:10.749 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-29 14:45:10.750 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-29 14:45:10.751 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-29 14:45:10.751 15764 16523 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-29 14:45:10.789 15764 16522 V SoLoader: libexpo-modules-core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.791 15764 16522 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.796 15764 16522 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.796 15764 16522 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.798 15764 16522 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.799 15764 16522 D SoLoader: libexpo-modules-core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.799 15764 16522 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.805 15764 16522 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.805 15764 16522 D SoLoader: libturbomodulejsijni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.809 15764 16522 I ExpoModulesCore: ✅ JSI interop was installed
10-29 14:45:10.809 15764 16522 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-29 14:45:10.815 15764 16522 I ExpoModulesCore: ✅ Constants were exported
10-29 14:45:10.840 15764 16522 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!classes3.dex): ok
10-29 14:45:10.843 15764 16522 I ReactNativeJS: Running "main
10-29 14:45:10.849 15764 16522 V SoLoader: libreactnativeblob.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:10.853 15764 16522 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:10.853 15764 16522 D SoLoader: libreactnativeblob.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:10.857 15764 16522 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-29 14:45:10.857 15764 16522 I ReactNativeJS:   hasAnonKey: true,
10-29 14:45:10.857 15764 16522 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-29 14:45:10.976 15764 16522 I ReactNativeJS: ✅ TripLocationTracker: Background task registered
10-29 14:45:10.979 15764 16522 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:10.985 15764 16522 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:10.986 15764 16523 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:10.986 15764 16523 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 15764
10-29 14:45:10.986 15764 16523 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:10.986 15764 16523 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:10.986 15764 16523 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:10.986 15764 16523 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:10.986 15764 16523 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:10.986 15764 16523 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:10.986 15764 16523 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:10.986 15764 16523 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:10.986 15764 16523 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:10.986 15764 16523 E AndroidRuntime: get@1:704383
10-29 14:45:10.986 15764 16523 E AndroidRuntime: metroContext@1:704088
10-29 14:45:10.986 15764 16523 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:10.986 15764 16523 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:10.986 15764 16523 E AndroidRuntime: _loop@1:933305
10-29 14:45:10.986 15764 16523 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:10.986 15764 16523 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:10.986 15764 16523 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:10.986 15764 16523 E AndroidRuntime: initialize@1:906463
10-29 14:45:10.986 15764 16523 E AndroidRuntime: anonymous@1:905068
10-29 14:45:10.986 15764 16523 E AndroidRuntime: useMemo@1:427180
10-29 14:45:10.986 15764 16523 E AndroidRuntime: anonymous@1:216470
10-29 14:45:10.986 15764 16523 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:10.986 15764 16523 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:10.986 15764 16523 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:10.986 15764 16523 E AndroidRuntime: beginWork@1:430869
10-29 14:45:10.986 15764 16523 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:10.986 15764 16523 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:10.986 15764 16523 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:10.986 15764 16523 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:10.986 15764 16523 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:10.986 15764 16523 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:10.986 15764 16523 E AndroidRuntime: anonymous@1:431861
10-29 14:45:10.986 15764 16523 E AndroidRuntime: renderElement@1:250306
10-29 14:45:10.986 15764 16523 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:10.986 15764 16523 E AndroidRuntime: anonymous@1:203533
10-29 14:45:10.986 15764 16523 E AndroidRuntime: runApplication@1:203958
10-29 14:45:10.986 15764 16523 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:10.986 15764 16523 E AndroidRuntime: anonymous@1:109791
10-29 14:45:10.986 15764 16523 E AndroidRuntime: __guard@1:110731
10-29 14:45:10.986 15764 16523 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:10.986 15764 16523 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:10.987 15764 16522 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:10.987 15764 16522 E ReactNativeJS: 
10-29 14:45:10.987 15764 16522 E ReactNativeJS: This error is located at:
10-29 14:45:10.987 15764 16522 E ReactNativeJS:     in ContextNavigator
10-29 14:45:10.987 15764 16522 E ReactNativeJS:     in ExpoRoot
10-29 14:45:10.987 15764 16522 E ReactNativeJS:     in App
10-29 14:45:10.987 15764 16522 E ReactNativeJS:     in RCTView
10-29 14:45:10.987 15764 16522 E ReactNativeJS:     in Unknown
10-29 14:45:10.987 15764 16522 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:10.990 15764 16522 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:10.990 15764 16522 E ReactNativeJS: 
10-29 14:45:10.990 15764 16522 E ReactNativeJS: This error is located at:
10-29 14:45:10.990 15764 16522 E ReactNativeJS:     in ContextNavigator
10-29 14:45:10.990 15764 16522 E ReactNativeJS:     in ExpoRoot
10-29 14:45:10.990 15764 16522 E ReactNativeJS:     in App
10-29 14:45:10.990 15764 16522 E ReactNativeJS:     in RCTView
10-29 14:45:10.990 15764 16522 E ReactNativeJS:     in Unknown
10-29 14:45:10.990 15764 16522 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:11.108 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:11.109 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:11.109 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:11.110 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:11.454  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:11.461  5720  5734 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:45:11.709  5720  5865 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:11.740  5720  5865 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:45:11.910  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:12.870 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:12.875 16471 16471 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-29 14:45:12.879 16471 16471 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-29 14:45:12.882 16471 16471 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-29 14:45:12.894 16471 16471 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-29 14:45:12.894 16471 16471 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-29 14:45:12.924 16471 16471 D CompatChangeReporter: Compat change id reported: 242716250; UID 10578; state: ENABLED
10-29 14:45:12.932 16471 16471 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-29 14:45:12.936 16471 16471 D nativeloader: Configuring clns-7 for other apk /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64:/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-29 14:45:12.947 16471 16471 V GraphicsEnvironment: Currently set values for:
10-29 14:45:12.947 16471 16471 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-29 14:45:12.947 16471 16471 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-29 14:45:12.947 16471 16471 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-29 14:45:12.947 16471 16471 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-29 14:45:12.962 16471 16471 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-29 14:45:12.962 16471 16471 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-29 14:45:12.965 16471 16471 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-29 14:45:12.974 16471 16471 V SoLoader: Init SoLoader delegate
10-29 14:45:12.992 16471 16471 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-29 14:45:13.022 16471 16471 V SoLoader: libhermes.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.025 16471 16471 V SoLoader: libjsi.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.026 16471 16471 V SoLoader: libfolly_runtime.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.027 16471 16471 V SoLoader: libglog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.027 16471 16471 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.027 16471 16471 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.028 16471 16471 D SoLoader: libm.so found on /system/lib64
10-29 14:45:13.028 16471 16471 D SoLoader: libm.so loaded implicitly
10-29 14:45:13.028 16471 16471 V SoLoader: libc++_shared.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.028 16471 16471 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.028 16471 16471 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.028 16471 16471 D SoLoader: libc.so found on /system/lib64
10-29 14:45:13.028 16471 16471 D SoLoader: libc.so loaded implicitly
10-29 14:45:13.029 16471 16471 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.029 16471 16471 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.029 16471 16471 D SoLoader: libdl.so found on /system/lib64
10-29 14:45:13.029 16471 16471 D SoLoader: libdl.so loaded implicitly
10-29 14:45:13.030 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.030 16471 16471 D SoLoader: libc++_shared.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.031 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.031 16471 16471 D SoLoader: libglog.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.032 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.032 16471 16471 D SoLoader: libfolly_runtime.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.033 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.033 16471 16471 D SoLoader: libjsi.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.033 16471 16471 V SoLoader: libfbjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.034 16471 16471 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.034 16471 16471 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.034 16471 16471 D SoLoader: libandroid.so found on /system/lib64
10-29 14:45:13.034 16471 16471 D SoLoader: libandroid.so loaded implicitly
10-29 14:45:13.035 16471 16471 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.035 16471 16471 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.035 16471 16471 D SoLoader: liblog.so found on /system/lib64
10-29 14:45:13.035 16471 16471 D SoLoader: liblog.so loaded implicitly
10-29 14:45:13.036 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.036 16471 16471 D SoLoader: libfbjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.037 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.037 16471 16471 D SoLoader: libhermes.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.037 16471 16471 V SoLoader: libhermes_executor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.040 16471 16471 V SoLoader: libreactnativejni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.043 16471 16471 V SoLoader: libyoga.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.044 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.045 16471 16471 D SoLoader: libyoga.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.045 16471 16471 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.047 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.047 16471 16471 D SoLoader: libreactperfloggerjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.047 16471 16471 V SoLoader: libreact_render_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.049 16471 16471 V SoLoader: libreact_render_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.051 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.051 16471 16471 D SoLoader: libreact_render_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.051 16471 16471 V SoLoader: libreact_render_graphics.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.052 16471 16471 V SoLoader: libreact_utils.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.054 16471 16471 V SoLoader: libreact_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.055 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.056 16471 16471 D SoLoader: libreact_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.056 16471 16471 V SoLoader: libjsinspector.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.057 16471 16471 V SoLoader: libreact_featureflags.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.058 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.058 16471 16471 D SoLoader: libreact_featureflags.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.059 16471 16471 V SoLoader: libruntimeexecutor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.060 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.060 16471 16471 D SoLoader: libruntimeexecutor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.061 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.061 16471 16471 D SoLoader: libjsinspector.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.062 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.062 16471 16471 D SoLoader: libreact_utils.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.063 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.063 16471 16471 D SoLoader: libreact_render_graphics.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.063 16471 16471 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.065 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.065 16471 16471 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.066 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.066 16471 16471 D SoLoader: libreact_render_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.068 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.068 16471 16471 D SoLoader: libreactnativejni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.070 16471 16471 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.070 16471 16471 D SoLoader: libhermes_executor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.078 16471 16586 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.081 16471 16471 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-29 14:45:13.081 16471 16471 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:13.081 16471 16471 I M-ProMotion: M-ProMotion is disabled
10-29 14:45:13.081 16471 16588 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:13.085 16471 16471 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-29 14:45:13.088 16471 16471 W HWUI    : Unknown dataspace 0
10-29 14:45:13.106 16471 16471 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 14:45:13.106 16471 16471 D BufferQueueConsumer: [](id:405700000000,api:0,p:-1,c:16471) connect: controlledByApp=false
10-29 14:45:13.107 16471 16471 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-29 14:45:13.107 16471 16471 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-29 14:45:13.112 16471 16586 I ExpoModulesCore: ✅ AppContext was initialized
10-29 14:45:13.114 16471 16578 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-29 14:45:13.155 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-29 14:45:13.158 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-29 14:45:13.159 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-29 14:45:13.161 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-29 14:45:13.162 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-29 14:45:13.163 16471 16578 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-29 14:45:13.163 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-29 14:45:13.163 16471 16578 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1114873829096143(auto) mPendingTransactions.size=0 graphicBufferId=70742406332416 transform=0
10-29 14:45:13.164 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-29 14:45:13.165 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-29 14:45:13.167 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-29 14:45:13.167 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-29 14:45:13.176 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-29 14:45:13.180 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-29 14:45:13.181 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-29 14:45:13.183 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-29 14:45:13.184 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-29 14:45:13.185 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-29 14:45:13.186 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-29 14:45:13.188 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-29 14:45:13.190 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-29 14:45:13.192 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-29 14:45:13.193  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +344ms
10-29 14:45:13.194 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-29 14:45:13.195 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-29 14:45:13.196 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-29 14:45:13.197 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-29 14:45:13.197 16471 16471 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{88218ae V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-29 14:45:13.197 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-29 14:45:13.198 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-29 14:45:13.198 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-29 14:45:13.199 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-29 14:45:13.200 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-29 14:45:13.201 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-29 14:45:13.202 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-29 14:45:13.203 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-29 14:45:13.203 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-29 14:45:13.203 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:13.204 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-29 14:45:13.204 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:13.205 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:13.205 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:13.205 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-29 14:45:13.206 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-29 14:45:13.207 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-29 14:45:13.208 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-29 14:45:13.208 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-29 14:45:13.209 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-29 14:45:13.209 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-29 14:45:13.210 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-29 14:45:13.211 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-29 14:45:13.211 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-29 14:45:13.212 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-29 14:45:13.213 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-29 14:45:13.213 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-29 14:45:13.213 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-29 14:45:13.214 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-29 14:45:13.214 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-29 14:45:13.215 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-29 14:45:13.216 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-29 14:45:13.216 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-29 14:45:13.217 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-29 14:45:13.218 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-29 14:45:13.219 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-29 14:45:13.219 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-29 14:45:13.220 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-29 14:45:13.221 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-29 14:45:13.222 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-29 14:45:13.222 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-29 14:45:13.223 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-29 14:45:13.223 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-29 14:45:13.224 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-29 14:45:13.224 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-29 14:45:13.225 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-29 14:45:13.226 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-29 14:45:13.227 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-29 14:45:13.228 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-29 14:45:13.228 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-29 14:45:13.229 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-29 14:45:13.229 16471 16600 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-29 14:45:13.261 16471 16599 V SoLoader: libexpo-modules-core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.263 16471 16599 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.267 16471 16599 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.268 16471 16599 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.269 16471 16599 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.270 16471 16599 D SoLoader: libexpo-modules-core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.271 16471 16599 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.275 16471 16599 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.276 16471 16599 D SoLoader: libturbomodulejsijni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.280 16471 16599 I ExpoModulesCore: ✅ JSI interop was installed
10-29 14:45:13.280 16471 16599 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-29 14:45:13.286 16471 16599 I ExpoModulesCore: ✅ Constants were exported
10-29 14:45:13.310 16471 16599 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!classes3.dex): ok
10-29 14:45:13.313 16471 16599 I ReactNativeJS: Running "main
10-29 14:45:13.318 16471 16599 V SoLoader: libreactnativeblob.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:13.322 16471 16599 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:13.322 16471 16599 D SoLoader: libreactnativeblob.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:13.326 16471 16599 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-29 14:45:13.326 16471 16599 I ReactNativeJS:   hasAnonKey: true,
10-29 14:45:13.326 16471 16599 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-29 14:45:13.465 16471 16599 I ReactNativeJS: ✅ TripLocationTracker: Background task registered
10-29 14:45:13.466 16471 16599 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:13.467 16471 16599 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:13.468 16471 16599 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:13.468 16471 16599 E ReactNativeJS: 
10-29 14:45:13.468 16471 16599 E ReactNativeJS: This error is located at:
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in ContextNavigator
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in ExpoRoot
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in App
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in RCTView
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in Unknown
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:13.468 16471 16599 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:13.468 16471 16599 E ReactNativeJS: 
10-29 14:45:13.468 16471 16599 E ReactNativeJS: This error is located at:
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in ContextNavigator
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in ExpoRoot
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in App
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in RCTView
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in Unknown
10-29 14:45:13.468 16471 16599 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:13.469 16471 16600 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:13.469 16471 16600 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 16471
10-29 14:45:13.469 16471 16600 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:13.469 16471 16600 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:13.469 16471 16600 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:13.469 16471 16600 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:13.469 16471 16600 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:13.469 16471 16600 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:13.469 16471 16600 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:13.469 16471 16600 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:13.469 16471 16600 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:13.469 16471 16600 E AndroidRuntime: get@1:704383
10-29 14:45:13.469 16471 16600 E AndroidRuntime: metroContext@1:704088
10-29 14:45:13.469 16471 16600 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:13.469 16471 16600 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:13.469 16471 16600 E AndroidRuntime: _loop@1:933305
10-29 14:45:13.469 16471 16600 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:13.469 16471 16600 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:13.469 16471 16600 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:13.469 16471 16600 E AndroidRuntime: initialize@1:906463
10-29 14:45:13.469 16471 16600 E AndroidRuntime: anonymous@1:905068
10-29 14:45:13.469 16471 16600 E AndroidRuntime: useMemo@1:427180
10-29 14:45:13.469 16471 16600 E AndroidRuntime: anonymous@1:216470
10-29 14:45:13.469 16471 16600 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:13.469 16471 16600 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:13.469 16471 16600 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:13.469 16471 16600 E AndroidRuntime: beginWork@1:430869
10-29 14:45:13.469 16471 16600 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:13.469 16471 16600 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:13.469 16471 16600 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:13.469 16471 16600 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:13.469 16471 16600 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:13.469 16471 16600 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:13.469 16471 16600 E AndroidRuntime: anonymous@1:431861
10-29 14:45:13.469 16471 16600 E AndroidRuntime: renderElement@1:250306
10-29 14:45:13.469 16471 16600 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:13.469 16471 16600 E AndroidRuntime: anonymous@1:203533
10-29 14:45:13.469 16471 16600 E AndroidRuntime: runApplication@1:203958
10-29 14:45:13.469 16471 16600 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:13.469 16471 16600 E AndroidRuntime: anonymous@1:109791
10-29 14:45:13.469 16471 16600 E AndroidRuntime: __guard@1:110731
10-29 14:45:13.469 16471 16600 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:13.469 16471 16600 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:13.482 16471 16600 I Process : Sending signal. PID: 16471 SIG: 9
10-29 14:45:13.628 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:13.628 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:13.628 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:13.629 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:14.569  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:14.577  5720 14698 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:45:14.837  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:14.891  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:45:15.084  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:15.161 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:15.168 16568 16568 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-29 14:45:15.171 16568 16568 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-29 14:45:15.173 16568 16568 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-29 14:45:15.182 16568 16568 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-29 14:45:15.183 16568 16568 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-29 14:45:15.191 16568 16568 D CompatChangeReporter: Compat change id reported: 242716250; UID 10578; state: ENABLED
10-29 14:45:15.204 16568 16568 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-29 14:45:15.213 16568 16568 D nativeloader: Configuring clns-7 for other apk /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64:/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-29 14:45:15.234 16568 16568 V GraphicsEnvironment: Currently set values for:
10-29 14:45:15.234 16568 16568 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-29 14:45:15.234 16568 16568 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-29 14:45:15.234 16568 16568 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-29 14:45:15.234 16568 16568 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-29 14:45:15.309 16568 16568 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-29 14:45:15.309 16568 16568 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-29 14:45:15.312 16568 16568 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-29 14:45:15.323 16568 16568 V SoLoader: Init SoLoader delegate
10-29 14:45:15.334 16568 16568 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-29 14:45:15.381 16568 16568 V SoLoader: libhermes.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.384 16568 16568 V SoLoader: libjsi.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.385 16568 16568 V SoLoader: libfolly_runtime.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.385 16568 16568 V SoLoader: libglog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.386 16568 16568 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.386 16568 16568 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.386 16568 16568 D SoLoader: libm.so found on /system/lib64
10-29 14:45:15.386 16568 16568 D SoLoader: libm.so loaded implicitly
10-29 14:45:15.387 16568 16568 V SoLoader: libc++_shared.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.387 16568 16568 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.387 16568 16568 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.387 16568 16568 D SoLoader: libc.so found on /system/lib64
10-29 14:45:15.387 16568 16568 D SoLoader: libc.so loaded implicitly
10-29 14:45:15.388 16568 16568 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.388 16568 16568 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.388 16568 16568 D SoLoader: libdl.so found on /system/lib64
10-29 14:45:15.388 16568 16568 D SoLoader: libdl.so loaded implicitly
10-29 14:45:15.389 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.390 16568 16568 D SoLoader: libc++_shared.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.391 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.391 16568 16568 D SoLoader: libglog.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.393 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.393 16568 16568 D SoLoader: libfolly_runtime.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.394 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.394 16568 16568 D SoLoader: libjsi.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.395 16568 16568 V SoLoader: libfbjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.396 16568 16568 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.396 16568 16568 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.396 16568 16568 D SoLoader: libandroid.so found on /system/lib64
10-29 14:45:15.396 16568 16568 D SoLoader: libandroid.so loaded implicitly
10-29 14:45:15.396 16568 16568 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.396 16568 16568 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.396 16568 16568 D SoLoader: liblog.so found on /system/lib64
10-29 14:45:15.396 16568 16568 D SoLoader: liblog.so loaded implicitly
10-29 14:45:15.397 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.399 16568 16568 D SoLoader: libfbjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.401 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.401 16568 16568 D SoLoader: libhermes.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.401 16568 16568 V SoLoader: libhermes_executor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.405 16568 16568 V SoLoader: libreactnativejni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.407 16568 16568 V SoLoader: libyoga.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.409 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.409 16568 16568 D SoLoader: libyoga.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.410 16568 16568 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.411 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.411 16568 16568 D SoLoader: libreactperfloggerjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.412 16568 16568 V SoLoader: libreact_render_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.414 16568 16568 V SoLoader: libreact_render_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.415 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.415 16568 16568 D SoLoader: libreact_render_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.416 16568 16568 V SoLoader: libreact_render_graphics.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.417 16568 16568 V SoLoader: libreact_utils.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.419 16568 16568 V SoLoader: libreact_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.421 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.421 16568 16568 D SoLoader: libreact_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.421 16568 16568 V SoLoader: libjsinspector.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.422 16568 16568 V SoLoader: libreact_featureflags.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.424 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.424 16568 16568 D SoLoader: libreact_featureflags.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.424 16568 16568 V SoLoader: libruntimeexecutor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.426 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.426 16568 16568 D SoLoader: libruntimeexecutor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.427 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.427 16568 16568 D SoLoader: libjsinspector.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.428 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.429 16568 16568 D SoLoader: libreact_utils.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.430 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.430 16568 16568 D SoLoader: libreact_render_graphics.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.430 16568 16568 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.432 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.432 16568 16568 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.433 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.433 16568 16568 D SoLoader: libreact_render_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.435 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.435 16568 16568 D SoLoader: libreactnativejni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.437 16568 16568 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.437 16568 16568 D SoLoader: libhermes_executor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.445 16568 16673 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.448 16568 16568 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-29 14:45:15.448 16568 16568 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:15.448 16568 16568 I M-ProMotion: M-ProMotion is disabled
10-29 14:45:15.448 16568 16675 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:15.452 16568 16568 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-29 14:45:15.457 16568 16568 W HWUI    : Unknown dataspace 0
10-29 14:45:15.474 16568 16568 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 14:45:15.474 16568 16568 D BufferQueueConsumer: [](id:40b800000000,api:0,p:-1,c:16568) connect: controlledByApp=false
10-29 14:45:15.475 16568 16568 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-29 14:45:15.475 16568 16568 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-29 14:45:15.485 16568 16663 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-29 14:45:15.487 16568 16673 I ExpoModulesCore: ✅ AppContext was initialized
10-29 14:45:15.531 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-29 14:45:15.534 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-29 14:45:15.534 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-29 14:45:15.534 16568 16663 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-29 14:45:15.535 16568 16663 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1114876200952143(auto) mPendingTransactions.size=0 graphicBufferId=71159018160128 transform=0
10-29 14:45:15.536 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-29 14:45:15.537 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-29 14:45:15.538 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-29 14:45:15.539 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-29 14:45:15.540 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-29 14:45:15.541 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-29 14:45:15.542 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-29 14:45:15.543 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-29 14:45:15.543 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-29 14:45:15.544 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-29 14:45:15.545 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-29 14:45:15.545 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-29 14:45:15.546 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-29 14:45:15.546 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-29 14:45:15.547 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-29 14:45:15.549 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-29 14:45:15.551 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-29 14:45:15.552 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-29 14:45:15.552 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-29 14:45:15.553 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-29 14:45:15.553 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-29 14:45:15.553 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-29 14:45:15.554 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-29 14:45:15.554 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-29 14:45:15.555 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-29 14:45:15.556 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-29 14:45:15.557 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-29 14:45:15.558 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-29 14:45:15.558 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-29 14:45:15.559 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-29 14:45:15.560 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-29 14:45:15.561 16568 16568 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{88218ae V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-29 14:45:15.561  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +272ms
10-29 14:45:15.561 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-29 14:45:15.562 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-29 14:45:15.563 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-29 14:45:15.563 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-29 14:45:15.564 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-29 14:45:15.565 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-29 14:45:15.565 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-29 14:45:15.566 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-29 14:45:15.566 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-29 14:45:15.567 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-29 14:45:15.567 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-29 14:45:15.568 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-29 14:45:15.569 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-29 14:45:15.569 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-29 14:45:15.570 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:15.570 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-29 14:45:15.570 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:15.570 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-29 14:45:15.571 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-29 14:45:15.571 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:15.572 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-29 14:45:15.572 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:15.572 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-29 14:45:15.574 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-29 14:45:15.575 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-29 14:45:15.576 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-29 14:45:15.576 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-29 14:45:15.578 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-29 14:45:15.578 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-29 14:45:15.579 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-29 14:45:15.580 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-29 14:45:15.581 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-29 14:45:15.582 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-29 14:45:15.583 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-29 14:45:15.584 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-29 14:45:15.585 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-29 14:45:15.586 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-29 14:45:15.586 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-29 14:45:15.587 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-29 14:45:15.588 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-29 14:45:15.589 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-29 14:45:15.589 16568 16687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-29 14:45:15.623 16568 16686 V SoLoader: libexpo-modules-core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.625 16568 16686 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.629 16568 16686 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.629 16568 16686 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.631 16568 16686 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.632 16568 16686 D SoLoader: libexpo-modules-core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.633 16568 16686 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.638 16568 16686 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.638 16568 16686 D SoLoader: libturbomodulejsijni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.642 16568 16686 I ExpoModulesCore: ✅ JSI interop was installed
10-29 14:45:15.642 16568 16686 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-29 14:45:15.648 16568 16686 I ExpoModulesCore: ✅ Constants were exported
10-29 14:45:15.672 16568 16686 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!classes3.dex): ok
10-29 14:45:15.677 16568 16686 I ReactNativeJS: Running "main
10-29 14:45:15.682 16568 16686 V SoLoader: libreactnativeblob.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:15.687 16568 16686 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:15.687 16568 16686 D SoLoader: libreactnativeblob.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:15.690 16568 16686 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-29 14:45:15.690 16568 16686 I ReactNativeJS:   hasAnonKey: true,
10-29 14:45:15.690 16568 16686 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-29 14:45:15.808 16568 16686 I ReactNativeJS: ✅ TripLocationTracker: Background task registered
10-29 14:45:15.809 16568 16686 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:15.811 16568 16686 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:15.811 16568 16686 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:15.811 16568 16686 E ReactNativeJS: 
10-29 14:45:15.811 16568 16686 E ReactNativeJS: This error is located at:
10-29 14:45:15.811 16568 16686 E ReactNativeJS:     in ContextNavigator
10-29 14:45:15.811 16568 16686 E ReactNativeJS:     in ExpoRoot
10-29 14:45:15.811 16568 16686 E ReactNativeJS:     in App
10-29 14:45:15.811 16568 16686 E ReactNativeJS:     in RCTView
10-29 14:45:15.811 16568 16686 E ReactNativeJS:     in Unknown
10-29 14:45:15.811 16568 16686 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:15.812 16568 16686 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:15.812 16568 16686 E ReactNativeJS: 
10-29 14:45:15.812 16568 16686 E ReactNativeJS: This error is located at:
10-29 14:45:15.812 16568 16686 E ReactNativeJS:     in ContextNavigator
10-29 14:45:15.812 16568 16686 E ReactNativeJS:     in ExpoRoot
10-29 14:45:15.812 16568 16686 E ReactNativeJS:     in App
10-29 14:45:15.812 16568 16686 E ReactNativeJS:     in RCTView
10-29 14:45:15.812 16568 16686 E ReactNativeJS:     in Unknown
10-29 14:45:15.812 16568 16686 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:15.813 16568 16687 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:15.813 16568 16687 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 16568
10-29 14:45:15.813 16568 16687 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:15.813 16568 16687 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:15.813 16568 16687 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:15.813 16568 16687 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:15.813 16568 16687 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:15.813 16568 16687 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:15.813 16568 16687 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:15.813 16568 16687 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:15.813 16568 16687 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:15.813 16568 16687 E AndroidRuntime: get@1:704383
10-29 14:45:15.813 16568 16687 E AndroidRuntime: metroContext@1:704088
10-29 14:45:15.813 16568 16687 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:15.813 16568 16687 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:15.813 16568 16687 E AndroidRuntime: _loop@1:933305
10-29 14:45:15.813 16568 16687 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:15.813 16568 16687 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:15.813 16568 16687 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:15.813 16568 16687 E AndroidRuntime: initialize@1:906463
10-29 14:45:15.813 16568 16687 E AndroidRuntime: anonymous@1:905068
10-29 14:45:15.813 16568 16687 E AndroidRuntime: useMemo@1:427180
10-29 14:45:15.813 16568 16687 E AndroidRuntime: anonymous@1:216470
10-29 14:45:15.813 16568 16687 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:15.813 16568 16687 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:15.813 16568 16687 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:15.813 16568 16687 E AndroidRuntime: beginWork@1:430869
10-29 14:45:15.813 16568 16687 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:15.813 16568 16687 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:15.813 16568 16687 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:15.813 16568 16687 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:15.813 16568 16687 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:15.813 16568 16687 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:15.813 16568 16687 E AndroidRuntime: anonymous@1:431861
10-29 14:45:15.813 16568 16687 E AndroidRuntime: renderElement@1:250306
10-29 14:45:15.813 16568 16687 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:15.813 16568 16687 E AndroidRuntime: anonymous@1:203533
10-29 14:45:15.813 16568 16687 E AndroidRuntime: runApplication@1:203958
10-29 14:45:15.813 16568 16687 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:15.813 16568 16687 E AndroidRuntime: anonymous@1:109791
10-29 14:45:15.813 16568 16687 E AndroidRuntime: __guard@1:110731
10-29 14:45:15.813 16568 16687 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:15.813 16568 16687 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:15.843 16568 16568 D VRI[MainActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-29 14:45:15.852 16568 16568 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1, 1), rotation: ROTATION_0
10-29 14:45:15.852 16568 16568 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) destructor()
10-29 14:45:15.852 16568 16568 D BufferQueueConsumer: [VRI[MainActivity]#0(BLAST Consumer)0](id:40b800000000,api:0,p:-1,c:16568) disconnect
10-29 14:45:15.874 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:15.874 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:15.875 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:15.875 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:17.064 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:17.077 16641 16641 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-29 14:45:17.082 16641 16641 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-29 14:45:17.084 16641 16641 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-29 14:45:17.096 16641 16641 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-29 14:45:17.096 16641 16641 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-29 14:45:17.106 16641 16641 D CompatChangeReporter: Compat change id reported: 242716250; UID 10578; state: ENABLED
10-29 14:45:17.113 16641 16641 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-29 14:45:17.117 16641 16641 D nativeloader: Configuring clns-7 for other apk /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64:/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-29 14:45:17.127 16641 16641 V GraphicsEnvironment: Currently set values for:
10-29 14:45:17.127 16641 16641 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-29 14:45:17.127 16641 16641 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-29 14:45:17.127 16641 16641 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-29 14:45:17.127 16641 16641 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-29 14:45:17.143 16641 16641 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-29 14:45:17.143 16641 16641 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-29 14:45:17.144 16641 16641 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-29 14:45:17.154 16641 16641 V SoLoader: Init SoLoader delegate
10-29 14:45:17.174 16641 16641 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-29 14:45:17.204 16641 16641 V SoLoader: libhermes.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.206 16641 16641 V SoLoader: libjsi.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.207 16641 16641 V SoLoader: libfolly_runtime.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.208 16641 16641 V SoLoader: libglog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.209 16641 16641 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.209 16641 16641 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.209 16641 16641 D SoLoader: libm.so found on /system/lib64
10-29 14:45:17.209 16641 16641 D SoLoader: libm.so loaded implicitly
10-29 14:45:17.209 16641 16641 V SoLoader: libc++_shared.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.209 16641 16641 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.209 16641 16641 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.209 16641 16641 D SoLoader: libc.so found on /system/lib64
10-29 14:45:17.209 16641 16641 D SoLoader: libc.so loaded implicitly
10-29 14:45:17.210 16641 16641 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.210 16641 16641 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.210 16641 16641 D SoLoader: libdl.so found on /system/lib64
10-29 14:45:17.210 16641 16641 D SoLoader: libdl.so loaded implicitly
10-29 14:45:17.211 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.211 16641 16641 D SoLoader: libc++_shared.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.212 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.212 16641 16641 D SoLoader: libglog.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.213 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.213 16641 16641 D SoLoader: libfolly_runtime.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.214 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.214 16641 16641 D SoLoader: libjsi.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.214 16641 16641 V SoLoader: libfbjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.215 16641 16641 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.215 16641 16641 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.215 16641 16641 D SoLoader: libandroid.so found on /system/lib64
10-29 14:45:17.215 16641 16641 D SoLoader: libandroid.so loaded implicitly
10-29 14:45:17.215 16641 16641 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.215 16641 16641 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.215 16641 16641 D SoLoader: liblog.so found on /system/lib64
10-29 14:45:17.215 16641 16641 D SoLoader: liblog.so loaded implicitly
10-29 14:45:17.216 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.217 16641 16641 D SoLoader: libfbjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.218 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.218 16641 16641 D SoLoader: libhermes.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.218 16641 16641 V SoLoader: libhermes_executor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.221 16641 16641 V SoLoader: libreactnativejni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.223 16641 16641 V SoLoader: libyoga.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.225 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.225 16641 16641 D SoLoader: libyoga.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.226 16641 16641 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.227 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.227 16641 16641 D SoLoader: libreactperfloggerjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.227 16641 16641 V SoLoader: libreact_render_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.229 16641 16641 V SoLoader: libreact_render_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.231 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.231 16641 16641 D SoLoader: libreact_render_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.231 16641 16641 V SoLoader: libreact_render_graphics.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.233 16641 16641 V SoLoader: libreact_utils.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.234 16641 16641 V SoLoader: libreact_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.235 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.236 16641 16641 D SoLoader: libreact_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.236 16641 16641 V SoLoader: libjsinspector.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.237 16641 16641 V SoLoader: libreact_featureflags.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.238 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.238 16641 16641 D SoLoader: libreact_featureflags.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.239 16641 16641 V SoLoader: libruntimeexecutor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.240 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.240 16641 16641 D SoLoader: libruntimeexecutor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.241 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.241 16641 16641 D SoLoader: libjsinspector.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.242 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.242 16641 16641 D SoLoader: libreact_utils.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.243 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.243 16641 16641 D SoLoader: libreact_render_graphics.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.243 16641 16641 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.245 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.245 16641 16641 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.246 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.246 16641 16641 D SoLoader: libreact_render_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.248 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.248 16641 16641 D SoLoader: libreactnativejni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.250 16641 16641 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.250 16641 16641 D SoLoader: libhermes_executor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.259 16641 16762 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.261 16641 16641 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-29 14:45:17.261 16641 16641 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:17.261 16641 16641 I M-ProMotion: M-ProMotion is disabled
10-29 14:45:17.262 16641 16768 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:17.265 16641 16641 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-29 14:45:17.268 16641 16641 W HWUI    : Unknown dataspace 0
10-29 14:45:17.283 16641 16641 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 14:45:17.284 16641 16641 D BufferQueueConsumer: [](id:410100000000,api:0,p:-1,c:16641) connect: controlledByApp=false
10-29 14:45:17.285 16641 16641 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-29 14:45:17.285 16641 16641 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-29 14:45:17.292 16641 16743 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-29 14:45:17.294 16641 16762 I ExpoModulesCore: ✅ AppContext was initialized
10-29 14:45:17.333 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-29 14:45:17.335 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-29 14:45:17.336 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-29 14:45:17.337 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-29 14:45:17.339 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-29 14:45:17.339 16641 16743 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-29 14:45:17.339 16641 16743 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1114878005249758(auto) mPendingTransactions.size=0 graphicBufferId=71472550772736 transform=0
10-29 14:45:17.340 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-29 14:45:17.340 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-29 14:45:17.342 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-29 14:45:17.343 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-29 14:45:17.343 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-29 14:45:17.344 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-29 14:45:17.344 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-29 14:45:17.346 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-29 14:45:17.348 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-29 14:45:17.350 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-29 14:45:17.351 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-29 14:45:17.351 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-29 14:45:17.352 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-29 14:45:17.354 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-29 14:45:17.355 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-29 14:45:17.356 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-29 14:45:17.356 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-29 14:45:17.357 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-29 14:45:17.357 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-29 14:45:17.357 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-29 14:45:17.358 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-29 14:45:17.359 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-29 14:45:17.359 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-29 14:45:17.360 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-29 14:45:17.361 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-29 14:45:17.361  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +350ms
10-29 14:45:17.364 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-29 14:45:17.366 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-29 14:45:17.367 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-29 14:45:17.367 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-29 14:45:17.368 16641 16641 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{88218ae V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-29 14:45:17.368 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-29 14:45:17.368 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-29 14:45:17.369 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-29 14:45:17.370 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-29 14:45:17.371 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-29 14:45:17.372 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-29 14:45:17.372 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-29 14:45:17.373 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-29 14:45:17.374 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-29 14:45:17.374 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-29 14:45:17.374 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:17.374 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-29 14:45:17.375 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:17.375 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:17.375 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-29 14:45:17.375 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-29 14:45:17.376 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:17.376 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-29 14:45:17.376 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-29 14:45:17.377 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-29 14:45:17.377 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-29 14:45:17.379 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-29 14:45:17.380 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-29 14:45:17.381 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-29 14:45:17.382 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-29 14:45:17.383 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-29 14:45:17.383 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-29 14:45:17.384 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-29 14:45:17.384 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-29 14:45:17.385 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-29 14:45:17.385 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-29 14:45:17.386 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-29 14:45:17.386 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-29 14:45:17.387 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-29 14:45:17.387 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-29 14:45:17.388 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-29 14:45:17.389 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-29 14:45:17.390 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-29 14:45:17.391 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-29 14:45:17.391 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-29 14:45:17.392 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-29 14:45:17.392 16641 16779 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-29 14:45:17.425 16641 16778 V SoLoader: libexpo-modules-core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.427 16641 16778 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.431 16641 16778 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.431 16641 16778 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.433 16641 16778 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.434 16641 16778 D SoLoader: libexpo-modules-core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.434 16641 16778 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.439 16641 16778 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.439 16641 16778 D SoLoader: libturbomodulejsijni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.444 16641 16778 I ExpoModulesCore: ✅ JSI interop was installed
10-29 14:45:17.444 16641 16778 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-29 14:45:17.451 16641 16778 I ExpoModulesCore: ✅ Constants were exported
10-29 14:45:17.475 16641 16778 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!classes3.dex): ok
10-29 14:45:17.478 16641 16778 I ReactNativeJS: Running "main
10-29 14:45:17.483 16641 16778 V SoLoader: libreactnativeblob.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:17.488 16641 16778 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:17.488 16641 16778 D SoLoader: libreactnativeblob.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:17.491 16641 16778 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-29 14:45:17.491 16641 16778 I ReactNativeJS:   hasAnonKey: true,
10-29 14:45:17.491 16641 16778 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-29 14:45:17.611 16641 16778 I ReactNativeJS: ✅ TripLocationTracker: Background task registered
10-29 14:45:17.613 16641 16778 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:17.615 16641 16778 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:17.615 16641 16778 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:17.615 16641 16778 E ReactNativeJS: 
10-29 14:45:17.615 16641 16778 E ReactNativeJS: This error is located at:
10-29 14:45:17.615 16641 16778 E ReactNativeJS:     in ContextNavigator
10-29 14:45:17.615 16641 16778 E ReactNativeJS:     in ExpoRoot
10-29 14:45:17.615 16641 16778 E ReactNativeJS:     in App
10-29 14:45:17.615 16641 16778 E ReactNativeJS:     in RCTView
10-29 14:45:17.615 16641 16778 E ReactNativeJS:     in Unknown
10-29 14:45:17.615 16641 16778 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:17.616 16641 16778 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:17.616 16641 16778 E ReactNativeJS: 
10-29 14:45:17.616 16641 16778 E ReactNativeJS: This error is located at:
10-29 14:45:17.616 16641 16778 E ReactNativeJS:     in ContextNavigator
10-29 14:45:17.616 16641 16778 E ReactNativeJS:     in ExpoRoot
10-29 14:45:17.616 16641 16778 E ReactNativeJS:     in App
10-29 14:45:17.616 16641 16778 E ReactNativeJS:     in RCTView
10-29 14:45:17.616 16641 16778 E ReactNativeJS:     in Unknown
10-29 14:45:17.616 16641 16778 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:17.618 16641 16779 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:17.618 16641 16779 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 16641
10-29 14:45:17.618 16641 16779 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:17.618 16641 16779 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:17.618 16641 16779 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:17.618 16641 16779 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:17.618 16641 16779 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:17.618 16641 16779 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:17.618 16641 16779 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:17.618 16641 16779 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:17.618 16641 16779 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:17.618 16641 16779 E AndroidRuntime: get@1:704383
10-29 14:45:17.618 16641 16779 E AndroidRuntime: metroContext@1:704088
10-29 14:45:17.618 16641 16779 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:17.618 16641 16779 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:17.618 16641 16779 E AndroidRuntime: _loop@1:933305
10-29 14:45:17.618 16641 16779 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:17.618 16641 16779 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:17.618 16641 16779 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:17.618 16641 16779 E AndroidRuntime: initialize@1:906463
10-29 14:45:17.618 16641 16779 E AndroidRuntime: anonymous@1:905068
10-29 14:45:17.618 16641 16779 E AndroidRuntime: useMemo@1:427180
10-29 14:45:17.618 16641 16779 E AndroidRuntime: anonymous@1:216470
10-29 14:45:17.618 16641 16779 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:17.618 16641 16779 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:17.618 16641 16779 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:17.618 16641 16779 E AndroidRuntime: beginWork@1:430869
10-29 14:45:17.618 16641 16779 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:17.618 16641 16779 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:17.618 16641 16779 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:17.618 16641 16779 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:17.618 16641 16779 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:17.618 16641 16779 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:17.618 16641 16779 E AndroidRuntime: anonymous@1:431861
10-29 14:45:17.618 16641 16779 E AndroidRuntime: renderElement@1:250306
10-29 14:45:17.618 16641 16779 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:17.618 16641 16779 E AndroidRuntime: anonymous@1:203533
10-29 14:45:17.618 16641 16779 E AndroidRuntime: runApplication@1:203958
10-29 14:45:17.618 16641 16779 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:17.618 16641 16779 E AndroidRuntime: anonymous@1:109791
10-29 14:45:17.618 16641 16779 E AndroidRuntime: __guard@1:110731
10-29 14:45:17.618 16641 16779 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:17.618 16641 16779 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:17.641 16641 16779 I Process : Sending signal. PID: 16641 SIG: 9
10-29 14:45:17.765 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:17.766 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:17.766 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:17.767 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:19.830 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:20.226  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +278ms
10-29 14:45:20.244 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:20.245 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:20.245 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:20.246 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:20.472 16721 16859 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:20.472 16721 16859 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 16721
10-29 14:45:20.472 16721 16859 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:20.472 16721 16859 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:20.472 16721 16859 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:20.472 16721 16859 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:20.472 16721 16859 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:20.472 16721 16859 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:20.472 16721 16859 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:20.472 16721 16859 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:20.472 16721 16859 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:20.472 16721 16859 E AndroidRuntime: get@1:704383
10-29 14:45:20.472 16721 16859 E AndroidRuntime: metroContext@1:704088
10-29 14:45:20.472 16721 16859 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:20.472 16721 16859 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:20.472 16721 16859 E AndroidRuntime: _loop@1:933305
10-29 14:45:20.472 16721 16859 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:20.472 16721 16859 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:20.472 16721 16859 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:20.472 16721 16859 E AndroidRuntime: initialize@1:906463
10-29 14:45:20.472 16721 16859 E AndroidRuntime: anonymous@1:905068
10-29 14:45:20.472 16721 16859 E AndroidRuntime: useMemo@1:427180
10-29 14:45:20.472 16721 16859 E AndroidRuntime: anonymous@1:216470
10-29 14:45:20.472 16721 16859 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:20.472 16721 16859 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:20.472 16721 16859 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:20.472 16721 16859 E AndroidRuntime: beginWork@1:430869
10-29 14:45:20.472 16721 16859 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:20.472 16721 16859 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:20.472 16721 16859 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:20.472 16721 16859 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:20.472 16721 16859 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:20.472 16721 16859 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:20.472 16721 16859 E AndroidRuntime: anonymous@1:431861
10-29 14:45:20.472 16721 16859 E AndroidRuntime: renderElement@1:250306
10-29 14:45:20.472 16721 16859 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:20.472 16721 16859 E AndroidRuntime: anonymous@1:203533
10-29 14:45:20.472 16721 16859 E AndroidRuntime: runApplication@1:203958
10-29 14:45:20.472 16721 16859 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:20.472 16721 16859 E AndroidRuntime: anonymous@1:109791
10-29 14:45:20.472 16721 16859 E AndroidRuntime: __guard@1:110731
10-29 14:45:20.472 16721 16859 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:20.472 16721 16859 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:20.519 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:20.520 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:20.520 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:20.521 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:21.139  5720  5865 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:21.147  5720  5865 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:45:21.406  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:21.437  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:45:21.650 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:21.656 16812 16812 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-29 14:45:21.662 16812 16812 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-29 14:45:21.664 16812 16812 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-29 14:45:21.676 16812 16812 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-29 14:45:21.676 16812 16812 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-29 14:45:21.691 16812 16812 D CompatChangeReporter: Compat change id reported: 242716250; UID 10578; state: ENABLED
10-29 14:45:21.699 16812 16812 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-29 14:45:21.703 16812 16812 D nativeloader: Configuring clns-7 for other apk /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64:/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-29 14:45:21.715 16812 16812 V GraphicsEnvironment: Currently set values for:
10-29 14:45:21.716 16812 16812 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-29 14:45:21.716 16812 16812 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-29 14:45:21.716 16812 16812 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-29 14:45:21.716 16812 16812 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-29 14:45:21.733 16812 16812 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-29 14:45:21.733 16812 16812 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-29 14:45:21.735 16812 16812 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-29 14:45:21.744 16812 16812 V SoLoader: Init SoLoader delegate
10-29 14:45:21.763 16812 16812 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-29 14:45:21.796 16812 16812 V SoLoader: libhermes.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.798 16812 16812 V SoLoader: libjsi.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.799 16812 16812 V SoLoader: libfolly_runtime.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.800 16812 16812 V SoLoader: libglog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.801 16812 16812 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.801 16812 16812 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.801 16812 16812 D SoLoader: libm.so found on /system/lib64
10-29 14:45:21.801 16812 16812 D SoLoader: libm.so loaded implicitly
10-29 14:45:21.801 16812 16812 V SoLoader: libc++_shared.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.802 16812 16812 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.802 16812 16812 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.802 16812 16812 D SoLoader: libc.so found on /system/lib64
10-29 14:45:21.802 16812 16812 D SoLoader: libc.so loaded implicitly
10-29 14:45:21.802 16812 16812 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.802 16812 16812 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.802 16812 16812 D SoLoader: libdl.so found on /system/lib64
10-29 14:45:21.802 16812 16812 D SoLoader: libdl.so loaded implicitly
10-29 14:45:21.804 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.804 16812 16812 D SoLoader: libc++_shared.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.805 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.805 16812 16812 D SoLoader: libglog.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.806 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.806 16812 16812 D SoLoader: libfolly_runtime.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.807 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.807 16812 16812 D SoLoader: libjsi.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.808 16812 16812 V SoLoader: libfbjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.809 16812 16812 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.809 16812 16812 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.809 16812 16812 D SoLoader: libandroid.so found on /system/lib64
10-29 14:45:21.809 16812 16812 D SoLoader: libandroid.so loaded implicitly
10-29 14:45:21.809 16812 16812 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.809 16812 16812 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.809 16812 16812 D SoLoader: liblog.so found on /system/lib64
10-29 14:45:21.809 16812 16812 D SoLoader: liblog.so loaded implicitly
10-29 14:45:21.810 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.811 16812 16812 D SoLoader: libfbjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.812 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.812 16812 16812 D SoLoader: libhermes.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.812 16812 16812 V SoLoader: libhermes_executor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.816 16812 16812 V SoLoader: libreactnativejni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.818 16812 16812 V SoLoader: libyoga.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.820 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.820 16812 16812 D SoLoader: libyoga.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.820 16812 16812 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.822 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.822 16812 16812 D SoLoader: libreactperfloggerjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.822 16812 16812 V SoLoader: libreact_render_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.824 16812 16812 V SoLoader: libreact_render_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.826 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.826 16812 16812 D SoLoader: libreact_render_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.826 16812 16812 V SoLoader: libreact_render_graphics.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.828 16812 16812 V SoLoader: libreact_utils.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.829 16812 16812 V SoLoader: libreact_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.831 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.831 16812 16812 D SoLoader: libreact_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.831 16812 16812 V SoLoader: libjsinspector.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.832 16812 16812 V SoLoader: libreact_featureflags.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.834 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.834 16812 16812 D SoLoader: libreact_featureflags.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.834 16812 16812 V SoLoader: libruntimeexecutor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.836 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.836 16812 16812 D SoLoader: libruntimeexecutor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.837 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.837 16812 16812 D SoLoader: libjsinspector.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.838 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.838 16812 16812 D SoLoader: libreact_utils.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.839 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.839 16812 16812 D SoLoader: libreact_render_graphics.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.839 16812 16812 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:21.841 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.841 16812 16812 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.842 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.843 16812 16812 D SoLoader: libreact_render_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.845 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.845 16812 16812 D SoLoader: libreactnativejni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.847 16812 16812 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.847 16812 16812 D SoLoader: libhermes_executor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:21.857 16812 16919 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:21.862 16812 16812 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-29 14:45:21.862 16812 16812 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:21.862 16812 16812 I M-ProMotion: M-ProMotion is disabled
10-29 14:45:21.863 16812 16921 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:21.866 16812 16812 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-29 14:45:21.870 16812 16812 W HWUI    : Unknown dataspace 0
10-29 14:45:21.888 16812 16812 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 14:45:21.889 16812 16812 D BufferQueueConsumer: [](id:41ac00000000,api:0,p:-1,c:16812) connect: controlledByApp=false
10-29 14:45:21.890 16812 16812 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-29 14:45:21.890 16812 16812 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-29 14:45:21.893 16812 16919 I ExpoModulesCore: ✅ AppContext was initialized
10-29 14:45:21.898 16812 16910 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-29 14:45:21.938 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-29 14:45:21.941 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-29 14:45:21.942 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-29 14:45:21.944 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-29 14:45:21.945 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-29 14:45:21.945 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-29 14:45:21.945 16812 16910 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-29 14:45:21.945 16812 16910 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1114882611719528(auto) mPendingTransactions.size=0 graphicBufferId=72206990180352 transform=0
10-29 14:45:21.946 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-29 14:45:21.947 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-29 14:45:21.949 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-29 14:45:21.949 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-29 14:45:21.951 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-29 14:45:21.951 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-29 14:45:21.952 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-29 14:45:21.953 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-29 14:45:21.955 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-29 14:45:21.955 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-29 14:45:21.956 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-29 14:45:21.956 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-29 14:45:21.958 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-29 14:45:21.959 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-29 14:45:21.959 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-29 14:45:21.959 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-29 14:45:21.960 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-29 14:45:21.960 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-29 14:45:21.961 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-29 14:45:21.962 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-29 14:45:21.962 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-29 14:45:21.963 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-29 14:45:21.964 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-29 14:45:21.966  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +357ms
10-29 14:45:21.968 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-29 14:45:21.971 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-29 14:45:21.971 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-29 14:45:21.974 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-29 14:45:21.976 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-29 14:45:21.977 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-29 14:45:21.978 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-29 14:45:21.979 16812 16812 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{88218ae V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-29 14:45:21.979 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-29 14:45:21.980 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-29 14:45:21.980 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-29 14:45:21.981 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-29 14:45:21.981 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-29 14:45:21.982 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-29 14:45:21.982 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-29 14:45:21.983 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-29 14:45:21.984 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-29 14:45:21.985 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-29 14:45:21.985 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-29 14:45:21.986 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-29 14:45:21.986 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-29 14:45:21.987 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-29 14:45:21.987 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-29 14:45:21.988 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:21.988 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-29 14:45:21.988 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-29 14:45:21.989 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:21.989 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:21.991 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-29 14:45:21.991 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:21.991 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-29 14:45:21.992 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-29 14:45:21.993 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-29 14:45:21.994 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-29 14:45:21.994 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-29 14:45:21.996 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-29 14:45:21.997 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-29 14:45:21.998 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-29 14:45:21.999 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-29 14:45:22.000 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-29 14:45:22.000 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-29 14:45:22.001 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-29 14:45:22.002 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-29 14:45:22.003 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-29 14:45:22.003 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-29 14:45:22.004 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-29 14:45:22.004 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-29 14:45:22.005 16812 16930 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-29 14:45:22.035 16812 16929 V SoLoader: libexpo-modules-core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:22.038 16812 16929 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:22.042 16812 16929 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:22.042 16812 16929 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:22.044 16812 16929 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:22.045 16812 16929 D SoLoader: libexpo-modules-core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:22.045 16812 16929 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:22.051 16812 16929 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:22.051 16812 16929 D SoLoader: libturbomodulejsijni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:22.055 16812 16929 I ExpoModulesCore: ✅ JSI interop was installed
10-29 14:45:22.055 16812 16929 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-29 14:45:22.060 16812 16929 I ExpoModulesCore: ✅ Constants were exported
10-29 14:45:22.083 16812 16929 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!classes3.dex): ok
10-29 14:45:22.087 16812 16929 I ReactNativeJS: Running "main
10-29 14:45:22.091 16812 16929 V SoLoader: libreactnativeblob.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:22.096 16812 16929 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:22.096 16812 16929 D SoLoader: libreactnativeblob.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:22.100 16812 16929 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-29 14:45:22.100 16812 16929 I ReactNativeJS:   hasAnonKey: true,
10-29 14:45:22.100 16812 16929 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-29 14:45:22.224  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:22.242 16812 16929 I ReactNativeJS: ✅ TripLocationTracker: Background task registered
10-29 14:45:22.243 16812 16929 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:22.244 16812 16929 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:22.245 16812 16929 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:22.245 16812 16929 E ReactNativeJS: 
10-29 14:45:22.245 16812 16929 E ReactNativeJS: This error is located at:
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in ContextNavigator
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in ExpoRoot
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in App
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in RCTView
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in Unknown
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:22.245 16812 16929 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:22.245 16812 16929 E ReactNativeJS: 
10-29 14:45:22.245 16812 16929 E ReactNativeJS: This error is located at:
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in ContextNavigator
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in ExpoRoot
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in App
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in RCTView
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in Unknown
10-29 14:45:22.245 16812 16929 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:22.252 16812 16930 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:22.252 16812 16930 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 16812
10-29 14:45:22.252 16812 16930 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:22.252 16812 16930 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:22.252 16812 16930 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:22.252 16812 16930 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:22.252 16812 16930 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:22.252 16812 16930 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:22.252 16812 16930 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:22.252 16812 16930 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:22.252 16812 16930 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:22.252 16812 16930 E AndroidRuntime: get@1:704383
10-29 14:45:22.252 16812 16930 E AndroidRuntime: metroContext@1:704088
10-29 14:45:22.252 16812 16930 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:22.252 16812 16930 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:22.252 16812 16930 E AndroidRuntime: _loop@1:933305
10-29 14:45:22.252 16812 16930 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:22.252 16812 16930 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:22.252 16812 16930 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:22.252 16812 16930 E AndroidRuntime: initialize@1:906463
10-29 14:45:22.252 16812 16930 E AndroidRuntime: anonymous@1:905068
10-29 14:45:22.252 16812 16930 E AndroidRuntime: useMemo@1:427180
10-29 14:45:22.252 16812 16930 E AndroidRuntime: anonymous@1:216470
10-29 14:45:22.252 16812 16930 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:22.252 16812 16930 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:22.252 16812 16930 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:22.252 16812 16930 E AndroidRuntime: beginWork@1:430869
10-29 14:45:22.252 16812 16930 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:22.252 16812 16930 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:22.252 16812 16930 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:22.252 16812 16930 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:22.252 16812 16930 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:22.252 16812 16930 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:22.252 16812 16930 E AndroidRuntime: anonymous@1:431861
10-29 14:45:22.252 16812 16930 E AndroidRuntime: renderElement@1:250306
10-29 14:45:22.252 16812 16930 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:22.252 16812 16930 E AndroidRuntime: anonymous@1:203533
10-29 14:45:22.252 16812 16930 E AndroidRuntime: runApplication@1:203958
10-29 14:45:22.252 16812 16930 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:22.252 16812 16930 E AndroidRuntime: anonymous@1:109791
10-29 14:45:22.252 16812 16930 E AndroidRuntime: __guard@1:110731
10-29 14:45:22.252 16812 16930 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:22.252 16812 16930 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:22.280 16812 16930 I Process : Sending signal. PID: 16812 SIG: 9
10-29 14:45:22.386 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:22.387 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:22.387 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:22.387 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:23.399 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:23.808  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +294ms
10-29 14:45:23.809 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:23.810 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:23.811 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:23.811 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:24.036 16899 17027 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:24.036 16899 17027 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 16899
10-29 14:45:24.036 16899 17027 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:24.036 16899 17027 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:24.036 16899 17027 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:24.036 16899 17027 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:24.036 16899 17027 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:24.036 16899 17027 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:24.036 16899 17027 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:24.036 16899 17027 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:24.036 16899 17027 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:24.036 16899 17027 E AndroidRuntime: get@1:704383
10-29 14:45:24.036 16899 17027 E AndroidRuntime: metroContext@1:704088
10-29 14:45:24.036 16899 17027 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:24.036 16899 17027 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:24.036 16899 17027 E AndroidRuntime: _loop@1:933305
10-29 14:45:24.036 16899 17027 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:24.036 16899 17027 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:24.036 16899 17027 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:24.036 16899 17027 E AndroidRuntime: initialize@1:906463
10-29 14:45:24.036 16899 17027 E AndroidRuntime: anonymous@1:905068
10-29 14:45:24.036 16899 17027 E AndroidRuntime: useMemo@1:427180
10-29 14:45:24.036 16899 17027 E AndroidRuntime: anonymous@1:216470
10-29 14:45:24.036 16899 17027 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:24.036 16899 17027 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:24.036 16899 17027 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:24.036 16899 17027 E AndroidRuntime: beginWork@1:430869
10-29 14:45:24.036 16899 17027 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:24.036 16899 17027 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:24.036 16899 17027 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:24.036 16899 17027 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:24.036 16899 17027 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:24.036 16899 17027 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:24.036 16899 17027 E AndroidRuntime: anonymous@1:431861
10-29 14:45:24.036 16899 17027 E AndroidRuntime: renderElement@1:250306
10-29 14:45:24.036 16899 17027 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:24.036 16899 17027 E AndroidRuntime: anonymous@1:203533
10-29 14:45:24.036 16899 17027 E AndroidRuntime: runApplication@1:203958
10-29 14:45:24.036 16899 17027 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:24.036 16899 17027 E AndroidRuntime: anonymous@1:109791
10-29 14:45:24.036 16899 17027 E AndroidRuntime: __guard@1:110731
10-29 14:45:24.036 16899 17027 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:24.036 16899 17027 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:24.090 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:24.091 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:24.092 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:24.094 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:25.139 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:25.143 16970 16970 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-29 14:45:25.151 16970 16970 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-29 14:45:25.153 16970 16970 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-29 14:45:25.167 16970 16970 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-29 14:45:25.167 16970 16970 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-29 14:45:25.192 16970 16970 D CompatChangeReporter: Compat change id reported: 242716250; UID 10578; state: ENABLED
10-29 14:45:25.201 16970 16970 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-29 14:45:25.205 16970 16970 D nativeloader: Configuring clns-7 for other apk /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64:/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-29 14:45:25.217 16970 16970 V GraphicsEnvironment: Currently set values for:
10-29 14:45:25.217 16970 16970 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-29 14:45:25.217 16970 16970 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-29 14:45:25.217 16970 16970 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-29 14:45:25.217 16970 16970 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-29 14:45:25.233 16970 16970 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-29 14:45:25.233 16970 16970 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-29 14:45:25.235 16970 16970 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-29 14:45:25.245 16970 16970 V SoLoader: Init SoLoader delegate
10-29 14:45:25.260 16970 16970 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-29 14:45:25.308 16970 16970 V SoLoader: libhermes.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.311 16970 16970 V SoLoader: libjsi.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.312 16970 16970 V SoLoader: libfolly_runtime.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.312 16970 16970 V SoLoader: libglog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.313 16970 16970 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.313 16970 16970 V SoLoader: libm.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.313 16970 16970 D SoLoader: libm.so found on /system/lib64
10-29 14:45:25.313 16970 16970 D SoLoader: libm.so loaded implicitly
10-29 14:45:25.313 16970 16970 V SoLoader: libc++_shared.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.314 16970 16970 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.314 16970 16970 V SoLoader: libc.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.314 16970 16970 D SoLoader: libc.so found on /system/lib64
10-29 14:45:25.314 16970 16970 D SoLoader: libc.so loaded implicitly
10-29 14:45:25.314 16970 16970 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.314 16970 16970 V SoLoader: libdl.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.314 16970 16970 D SoLoader: libdl.so found on /system/lib64
10-29 14:45:25.314 16970 16970 D SoLoader: libdl.so loaded implicitly
10-29 14:45:25.316 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.316 16970 16970 D SoLoader: libc++_shared.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.317 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.317 16970 16970 D SoLoader: libglog.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.318 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.318 16970 16970 D SoLoader: libfolly_runtime.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.319 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.319 16970 16970 D SoLoader: libjsi.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.319 16970 16970 V SoLoader: libfbjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.320 16970 16970 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.320 16970 16970 V SoLoader: libandroid.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.320 16970 16970 D SoLoader: libandroid.so found on /system/lib64
10-29 14:45:25.320 16970 16970 D SoLoader: libandroid.so loaded implicitly
10-29 14:45:25.320 16970 16970 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.320 16970 16970 V SoLoader: liblog.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.320 16970 16970 D SoLoader: liblog.so found on /system/lib64
10-29 14:45:25.320 16970 16970 D SoLoader: liblog.so loaded implicitly
10-29 14:45:25.321 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.321 16970 16970 D SoLoader: libfbjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.322 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.323 16970 16970 D SoLoader: libhermes.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.323 16970 16970 V SoLoader: libhermes_executor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.326 16970 16970 V SoLoader: libreactnativejni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.328 16970 16970 V SoLoader: libyoga.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.330 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.330 16970 16970 D SoLoader: libyoga.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.330 16970 16970 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.332 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.332 16970 16970 D SoLoader: libreactperfloggerjni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.332 16970 16970 V SoLoader: libreact_render_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.334 16970 16970 V SoLoader: libreact_render_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.335 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.335 16970 16970 D SoLoader: libreact_render_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.336 16970 16970 V SoLoader: libreact_render_graphics.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.338 16970 16970 V SoLoader: libreact_utils.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.339 16970 16970 V SoLoader: libreact_debug.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.341 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.341 16970 16970 D SoLoader: libreact_debug.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.341 16970 16970 V SoLoader: libjsinspector.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.342 16970 16970 V SoLoader: libreact_featureflags.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.344 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.344 16970 16970 D SoLoader: libreact_featureflags.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.344 16970 16970 V SoLoader: libruntimeexecutor.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.346 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.346 16970 16970 D SoLoader: libruntimeexecutor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.347 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.347 16970 16970 D SoLoader: libjsinspector.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.348 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.348 16970 16970 D SoLoader: libreact_utils.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.349 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.349 16970 16970 D SoLoader: libreact_render_graphics.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.349 16970 16970 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.351 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.351 16970 16970 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.351 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.352 16970 16970 D SoLoader: libreact_render_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.353 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.354 16970 16970 D SoLoader: libreactnativejni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.355 16970 16970 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.355 16970 16970 D SoLoader: libhermes_executor.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.363 16970 17083 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.366 16970 16970 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-29 14:45:25.366 16970 16970 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:25.366 16970 16970 I M-ProMotion: M-ProMotion is disabled
10-29 14:45:25.367 16970 17089 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-29 14:45:25.371 16970 16970 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-29 14:45:25.374 16970 16970 W HWUI    : Unknown dataspace 0
10-29 14:45:25.389 16970 16970 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-29 14:45:25.390 16970 16970 D BufferQueueConsumer: [](id:424a00000000,api:0,p:-1,c:16970) connect: controlledByApp=false
10-29 14:45:25.391 16970 16970 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-29 14:45:25.391 16970 16970 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-29 14:45:25.396 16970 17083 I ExpoModulesCore: ✅ AppContext was initialized
10-29 14:45:25.399 16970 17074 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-29 14:45:25.434 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-29 14:45:25.437 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-29 14:45:25.439 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-29 14:45:25.441 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-29 14:45:25.442 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-29 14:45:25.442 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-29 14:45:25.443 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-29 14:45:25.444 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-29 14:45:25.444 16970 17074 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-29 14:45:25.445 16970 17074 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=1114886110628528(auto) mPendingTransactions.size=0 graphicBufferId=72885595013120 transform=0
10-29 14:45:25.445 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-29 14:45:25.445 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-29 14:45:25.447 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-29 14:45:25.447 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-29 14:45:25.448 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-29 14:45:25.449 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-29 14:45:25.450 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-29 14:45:25.450 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-29 14:45:25.451 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-29 14:45:25.451 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-29 14:45:25.453 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-29 14:45:25.454 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-29 14:45:25.454 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-29 14:45:25.454 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-29 14:45:25.455 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-29 14:45:25.456 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-29 14:45:25.456 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-29 14:45:25.457 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-29 14:45:25.457 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-29 14:45:25.458 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-29 14:45:25.459 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-29 14:45:25.462 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-29 14:45:25.463 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-29 14:45:25.464 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-29 14:45:25.464 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-29 14:45:25.465 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-29 14:45:25.465  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +360ms
10-29 14:45:25.465 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-29 14:45:25.466 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-29 14:45:25.466 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-29 14:45:25.467 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-29 14:45:25.467 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-29 14:45:25.467 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-29 14:45:25.468 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-29 14:45:25.468 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-29 14:45:25.469 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-29 14:45:25.469 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-29 14:45:25.470 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-29 14:45:25.470 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-29 14:45:25.470 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-29 14:45:25.471 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-29 14:45:25.471 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-29 14:45:25.472 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-29 14:45:25.472 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-29 14:45:25.473 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-29 14:45:25.473 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-29 14:45:25.475 16970 16970 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{88218ae V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-29 14:45:25.475 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-29 14:45:25.476 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-29 14:45:25.476 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-29 14:45:25.477 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-29 14:45:25.478 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-29 14:45:25.479 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-29 14:45:25.479 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:25.479 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:25.480 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:25.480 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:25.481 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-29 14:45:25.482 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-29 14:45:25.482 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-29 14:45:25.483 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-29 14:45:25.484 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-29 14:45:25.484 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-29 14:45:25.485 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-29 14:45:25.485 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-29 14:45:25.486 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-29 14:45:25.487 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-29 14:45:25.487 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-29 14:45:25.488 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-29 14:45:25.489 16970 17101 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-29 14:45:25.519 16970 17100 V SoLoader: libexpo-modules-core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.521 16970 17100 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.525 16970 17100 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.525 16970 17100 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.527 16970 17100 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.528 16970 17100 D SoLoader: libexpo-modules-core.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.528 16970 17100 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.533 16970 17100 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.534 16970 17100 D SoLoader: libturbomodulejsijni.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.538 16970 17100 I ExpoModulesCore: ✅ JSI interop was installed
10-29 14:45:25.538 16970 17100 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-29 14:45:25.544 16970 17100 I ExpoModulesCore: ✅ Constants were exported
10-29 14:45:25.565 16970 17100 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!classes3.dex): ok
10-29 14:45:25.568 16970 17100 I ReactNativeJS: Running "main
10-29 14:45:25.573 16970 17100 V SoLoader: libreactnativeblob.so not found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/lib/arm64
10-29 14:45:25.577 16970 17100 D nativeloader: Load /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk): ok
10-29 14:45:25.577 16970 17100 D SoLoader: libreactnativeblob.so found on /data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/base.apk!/lib/arm64-v8a
10-29 14:45:25.581 16970 17100 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-29 14:45:25.581 16970 17100 I ReactNativeJS:   hasAnonKey: true,
10-29 14:45:25.581 16970 17100 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-29 14:45:25.721 16970 17100 I ReactNativeJS: ✅ TripLocationTracker: Background task registered
10-29 14:45:25.722 16970 17100 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:25.723 16970 17100 E ReactNativeJS: TypeError: undefined is not a function, js engine: hermes
10-29 14:45:25.724 16970 17100 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:25.724 16970 17100 E ReactNativeJS: 
10-29 14:45:25.724 16970 17100 E ReactNativeJS: This error is located at:
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in ContextNavigator
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in ExpoRoot
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in App
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in RCTView
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in Unknown
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:25.724 16970 17100 E ReactNativeJS: TypeError: Cannot read property 'ErrorBoundary' of undefined
10-29 14:45:25.724 16970 17100 E ReactNativeJS: 
10-29 14:45:25.724 16970 17100 E ReactNativeJS: This error is located at:
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in ContextNavigator
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in ExpoRoot
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in App
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in RCTView
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in Unknown
10-29 14:45:25.724 16970 17100 E ReactNativeJS:     in AppContainer, js engine: hermes
10-29 14:45:25.726 16970 17101 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:25.726 16970 17101 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 16970
10-29 14:45:25.726 16970 17101 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:25.726 16970 17101 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:25.726 16970 17101 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:25.726 16970 17101 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:25.726 16970 17101 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:25.726 16970 17101 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:25.726 16970 17101 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:25.726 16970 17101 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:25.726 16970 17101 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:25.726 16970 17101 E AndroidRuntime: get@1:704383
10-29 14:45:25.726 16970 17101 E AndroidRuntime: metroContext@1:704088
10-29 14:45:25.726 16970 17101 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:25.726 16970 17101 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:25.726 16970 17101 E AndroidRuntime: _loop@1:933305
10-29 14:45:25.726 16970 17101 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:25.726 16970 17101 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:25.726 16970 17101 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:25.726 16970 17101 E AndroidRuntime: initialize@1:906463
10-29 14:45:25.726 16970 17101 E AndroidRuntime: anonymous@1:905068
10-29 14:45:25.726 16970 17101 E AndroidRuntime: useMemo@1:427180
10-29 14:45:25.726 16970 17101 E AndroidRuntime: anonymous@1:216470
10-29 14:45:25.726 16970 17101 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:25.726 16970 17101 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:25.726 16970 17101 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:25.726 16970 17101 E AndroidRuntime: beginWork@1:430869
10-29 14:45:25.726 16970 17101 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:25.726 16970 17101 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:25.726 16970 17101 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:25.726 16970 17101 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:25.726 16970 17101 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:25.726 16970 17101 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:25.726 16970 17101 E AndroidRuntime: anonymous@1:431861
10-29 14:45:25.726 16970 17101 E AndroidRuntime: renderElement@1:250306
10-29 14:45:25.726 16970 17101 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:25.726 16970 17101 E AndroidRuntime: anonymous@1:203533
10-29 14:45:25.726 16970 17101 E AndroidRuntime: runApplication@1:203958
10-29 14:45:25.726 16970 17101 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:25.726 16970 17101 E AndroidRuntime: anonymous@1:109791
10-29 14:45:25.726 16970 17101 E AndroidRuntime: __guard@1:110731
10-29 14:45:25.726 16970 17101 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:25.726 16970 17101 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:25.739 16970 17101 I Process : Sending signal. PID: 16970 SIG: 9
10-29 14:45:25.841  5720  5734 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:25.863  5720  5734 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:45:25.876 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:25.877 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:25.877 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:25.878 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:26.594  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:26.625  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:45:26.672 15129 15129 I artd    : GetBestInfo: odex next to the dex file (/data/app/~~OauX-ikmsjEHwQiPHd4xew==/com.a1taxi.driverpro-yOTM-ubtCbmput9a5K_nQA==/oat/arm64/base.odex) is kOatUpToDate with filter 'speed-profile' executable 'false'
10-29 14:45:27.023  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +287ms
10-29 14:45:27.030 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:27.031 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:27.032 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:27.032 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:27.267 17064 17184 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
10-29 14:45:27.267 17064 17184 E AndroidRuntime: Process: com.a1taxi.driverpro, PID: 17064
10-29 14:45:27.267 17064 17184 E AndroidRuntime: com.facebook.react.common.JavascriptException: TypeError: undefined is not a function, js engine: hermes, stack:
10-29 14:45:27.267 17064 17184 E AndroidRuntime: anonymous@1:2548679
10-29 14:45:27.267 17064 17184 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:27.267 17064 17184 E AndroidRuntime: guardedLoadModule@1:92318
10-29 14:45:27.267 17064 17184 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:27.267 17064 17184 E AndroidRuntime: anonymous@1:2544987
10-29 14:45:27.267 17064 17184 E AndroidRuntime: loadModuleImplementation@1:92788
10-29 14:45:27.267 17064 17184 E AndroidRuntime: guardedLoadModule@1:92275
10-29 14:45:27.267 17064 17184 E AndroidRuntime: metroRequire@1:91948
10-29 14:45:27.267 17064 17184 E AndroidRuntime: get@1:704383
10-29 14:45:27.267 17064 17184 E AndroidRuntime: metroContext@1:704088
10-29 14:45:27.267 17064 17184 E AndroidRuntime: loadRoute@1:933407
10-29 14:45:27.267 17064 17184 E AndroidRuntime: getLayoutNode@1:935475
10-29 14:45:27.267 17064 17184 E AndroidRuntime: _loop@1:933305
10-29 14:45:27.267 17064 17184 E AndroidRuntime: getDirectoryTree@1:932443
10-29 14:45:27.267 17064 17184 E AndroidRuntime: getRoutes@1:932152
10-29 14:45:27.267 17064 17184 E AndroidRuntime: getRoutes@1:931380
10-29 14:45:27.267 17064 17184 E AndroidRuntime: initialize@1:906463
10-29 14:45:27.267 17064 17184 E AndroidRuntime: anonymous@1:905068
10-29 14:45:27.267 17064 17184 E AndroidRuntime: useMemo@1:427180
10-29 14:45:27.267 17064 17184 E AndroidRuntime: anonymous@1:216470
10-29 14:45:27.267 17064 17184 E AndroidRuntime: useInitializeExpoRouter@1:905008
10-29 14:45:27.267 17064 17184 E AndroidRuntime: ContextNavigator@1:948340
10-29 14:45:27.267 17064 17184 E AndroidRuntime: renderWithHooks@1:382872
10-29 14:45:27.267 17064 17184 E AndroidRuntime: beginWork@1:430869
10-29 14:45:27.267 17064 17184 E AndroidRuntime: performUnitOfWork@1:417168
10-29 14:45:27.267 17064 17184 E AndroidRuntime: workLoopSync@1:416298
10-29 14:45:27.267 17064 17184 E AndroidRuntime: renderRootSync@1:416129
10-29 14:45:27.267 17064 17184 E AndroidRuntime: flushSyncWorkAcrossRoots_impl@1:372563
10-29 14:45:27.267 17064 17184 E AndroidRuntime: scheduleUpdateOnFiber@1:413634
10-29 14:45:27.267 17064 17184 E AndroidRuntime: updateContainer@1:422756
10-29 14:45:27.267 17064 17184 E AndroidRuntime: anonymous@1:431861
10-29 14:45:27.267 17064 17184 E AndroidRuntime: renderElement@1:250306
10-29 14:45:27.267 17064 17184 E AndroidRuntime: renderApplication@1:211665
10-29 14:45:27.267 17064 17184 E AndroidRuntime: anonymous@1:203533
10-29 14:45:27.267 17064 17184 E AndroidRuntime: runApplication@1:203958
10-29 14:45:27.267 17064 17184 E AndroidRuntime: __callFunction@1:111349
10-29 14:45:27.267 17064 17184 E AndroidRuntime: anonymous@1:109791
10-29 14:45:27.267 17064 17184 E AndroidRuntime: __guard@1:110731
10-29 14:45:27.267 17064 17184 E AndroidRuntime: callFunctionReturnFlushedQueue@1:109749
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:65)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:146)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at com.facebook.jni.NativeRunnable.run(Native Method)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:250)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:340)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:233)
10-29 14:45:27.267 17064 17184 E AndroidRuntime: 	at java.lang.Thread.run(Thread.java:1119)
10-29 14:45:27.305 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2086 
10-29 14:45:27.306 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 0, locked = false
10-29 14:45:27.306 18285 18285 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1347 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-29 14:45:27.307 18285 18285 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():103 repeatCheckTimes = 1, locked = false
10-29 14:45:27.346  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:29.146  9313 17240 I Authzen : [DeviceStateSyncManager] The server is in sync with current state. Nothing to do
10-29 14:45:32.633  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:32.653  5720 14698 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:45:32.940  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:32.993  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
10-29 14:45:33.184  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id IN () AND (width > 0 AND height > 0))) ORDER BY datetaken DESC, _id DESC
10-29 14:45:35.924  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-29 14:45:35.941  5720 14698 D SQLiteQueryBuilder: SELECT _id FROM video WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((width > 0 AND height > 0))) ORDER BY _id asc
10-29 14:45:36.229  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 0
10-29 14:45:36.281  5720 14698 D SQLiteQueryBuilder: SELECT _id, _data, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((group_id = 0 OR group_id is null OR _id IN (1000011337, 1000011549)) AND (width > 0 AND height > 0))) ORDER BY _id DESC  LIMIT 5000 OFFSET 5000
