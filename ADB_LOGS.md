--------- beginning of main
10-19 14:57:14.128  5720 15135 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:16.236  5720 15135 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:18.209 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:57:18.220 21104 25262 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:57:18.330  5720 15135 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:19.815  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:19.816  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:19.816  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:19.816  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:20.300  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
--------- beginning of system
10-19 14:57:20.303  1870  3343 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 101968, name: com.google.android.inputmethod.latin
10-19 14:57:20.305  5589  5657 E BufferQueueProducer: [SurfaceView[InputMethod]#1921(BLAST Consumer)1921](id:15d500000781,api:0,p:-1,c:5589) disconnect: not connected (req=1)
10-19 14:57:20.306  5589  5657 W libEGL  : EGLNativeWindowType 0xb4000077e014f3f0 disconnect failed
10-19 14:57:20.308  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1921](f:0,a:1) destructor()
10-19 14:57:20.309  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#1921(BLAST Consumer)1921](id:15d500000781,api:0,p:-1,c:5589) disconnect
10-19 14:57:20.313  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:20.314  5589  5589 W LatinPrimeKeyboard: LatinPrimeKeyboard.consumeEvent():353 consumeEvent() : UPDATE_DYNAMIC_KEYS, no dynamic layout
10-19 14:57:20.326  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:20.326  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.326  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.327  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:20.336  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:20.357  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:20.357  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.357  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.357  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:20.380  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1920](f:0,a:0) destructor()
10-19 14:57:20.380  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#1920(BLAST Consumer)1920](id:15d500000780,api:0,p:-1,c:5589) disconnect
10-19 14:57:20.381  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 101975, name: com.google.android.inputmethod.latin
10-19 14:57:20.386  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:20.386  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.386  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.386  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:20.421  5720 15135 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:20.447 21104 21119 I WifiScanner: onFullResults
10-19 14:57:20.447 21104 21140 I WifiScanner: onFullResults
10-19 14:57:20.447 21104 21118 I WifiScanner: onFullResults
10-19 14:57:20.451  5589  5589 I KeyboardViewController: KeyboardViewController.showSelfAndAncestors():636 current view doesn't has the priority com.google.android.libraries.inputmethod.accesspoint.widget.AccessPointsBar{e2c0169 I.E...... .......D 0,0-810,121 #7f0b00a0 app:id/0_resource_name_obfuscated} to show itself, DEFAULT
10-19 14:57:20.455 21104 25262 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:57:20.478 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:20.479 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:20.488 21104 25262 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-19 14:57:20.496  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:20.515 21104 25262 I GmsCoreXrpcWrapper: (REDACTED) Returning a channel provider with trafficStatsTag=%d trafficStatsUid=%d
10-19 14:57:20.528 21163 21163 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.auth.service.START pkg=com.google.android.gms }
10-19 14:57:20.529 21163 21163 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.auth.service.START pkg=com.google.android.gms }
10-19 14:57:20.533  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:20.533  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.533  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.533  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:20.540  3458  3458 V InlineSuggestionRenderService: Releasing inline suggestion view host
10-19 14:57:20.548  3458  3458 D BLASTBufferQueue: [VRI[]#403](f:0,a:4) destructor()
10-19 14:57:20.548  3458  3458 D BufferQueueConsumer: [VRI[]#403(BLAST Consumer)403](id:d8200000193,api:0,p:-1,c:3458) disconnect
10-19 14:57:20.556  3458  3458 V InlineSuggestionRenderService: Removed the inline suggestion from the cache, current size=1
10-19 14:57:20.568 21104 25262 E ievv    : *~*~*~ Previous channel {0} was garbage collected without being shut down! ~*~*~*
10-19 14:57:20.568 21104 25262 E ievv    :     Make sure to call shutdown()/shutdownNow()
10-19 14:57:20.568 21104 25262 E ievv    : java.lang.RuntimeException: ManagedChannel allocation site
10-19 14:57:20.568 21104 25262 E ievv    : 	at ievu.<init>(:com.google.android.gms@254031035@25.40.31 (260400-816341114):21)
10-19 14:57:20.568 21104 25262 E ievv    : 	at ievv.<init>(:com.google.android.gms@254031035@25.40.31 (260400-816341114):10)
10-19 14:57:20.568 21104 25262 E ievv    : 	at ievt.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):250)
10-19 14:57:20.568 21104 25262 E ievv    : 	at iegb.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):5)
10-19 14:57:20.568 21104 25262 E ievv    : 	at cnxf.h(:com.google.android.gms@254031035@25.40.31 (260400-816341114):150)
10-19 14:57:20.568 21104 25262 E ievv    : 	at gsvy.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):154)
10-19 14:57:20.568 21104 25262 E ievv    : 	at ghbq.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):13)
10-19 14:57:20.568 21104 25262 E ievv    : 	at gpol.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-19 14:57:20.568 21104 25262 E ievv    : 	at gpnm.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):19)
10-19 14:57:20.568 21104 25262 E ievv    : 	at gpon.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):5)
10-19 14:57:20.568 21104 25262 E ievv    : 	at bckr.c(:com.google.android.gms@254031035@25.40.31 (260400-816341114):50)
10-19 14:57:20.568 21104 25262 E ievv    : 	at bckr.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):73)
10-19 14:57:20.568 21104 25262 E ievv    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-19 14:57:20.568 21104 25262 E ievv    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-19 14:57:20.568 21104 25262 E ievv    : 	at bcqi.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):8)
10-19 14:57:20.568 21104 25262 E ievv    : 	at java.lang.Thread.run(Thread.java:1119)
10-19 14:57:20.684  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:20.718  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:20.719  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.719  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:20.719  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:20.881 21104 22161 I cn_CronetUrlRequestContext: destroyNativeStreamLocked org.chromium.net.impl.CronetBidirectionalStream@7c3fc81
10-19 14:57:20.959  7096  7120 I native  : I0000 00:00:1760866040.959499    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760866040848432
10-19 14:57:20.978  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:21.185 23589 23589 I ImeTracker: com.a1taxi.driverpro:bcb04eb0: onRequestShow at ORIGIN_CLIENT reason SHOW_SOFT_INPUT fromUser false
10-19 14:57:21.189  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInputView():1571 onFinishInputView(true)
10-19 14:57:21.189  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onDeactivate():144 
10-19 14:57:21.189  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:21.190  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdown():131 shutdown()
10-19 14:57:21.190  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id spell_check_add_to_dictionary not found in tooltipManager.
10-19 14:57:21.191  5589  5589 I InputBundle: InputBundle.consumeEvent():1032 Skip consuming an event as keyboard status is INACTIVE
10-19 14:57:21.194  5589  5589 I AndroidIME: AbstractIme.onDeactivate():216 LatinIme.onDeactivate()
10-19 14:57:21.195 23589 23589 W RemoteInputConnectionImpl: requestCursorUpdates on inactive InputConnection
10-19 14:57:21.196  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:21.196  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:21.197  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=80081, inputTypeString=Password[NoSuggestion], enableLearning=false, autoCorrection=false, autoComplete=true, imeOptions=4000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=2867, fieldName=null, extras=Bundle[mParcelledData.dataSize=404], hintText=non-empty, hintLocales=[]}}, false)
10-19 14:57:21.198  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:21.198  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=0, callback=gds@2bf98c0, lastModifier=0, keyCodes=[57, 57], actions=[1, 0]}
10-19 14:57:21.198  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=0, callback=gds@268279f, lastModifier=0, keyCodes=[58, 58], actions=[1, 0]}
10-19 14:57:21.199  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInputView():1439 onStartInputView(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=80081, inputTypeString=Password[NoSuggestion], enableLearning=false, autoCorrection=false, autoComplete=true, imeOptions=4000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=2867, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=false, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}}, false)
10-19 14:57:21.199  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.getOemKeyboardHeightRatio():108 systemKeyboardHeightRatio:1.000000.
10-19 14:57:21.201  5589  6019 I OnDeviceWmrCalculator: OnDeviceWmrCalculator.calculateWmr():94 WMR: 0.0000 (0 / 1)
10-19 14:57:21.202  5589  5589 I AndroidIME: InputBundleManager.loadActiveInputBundleId():528 loadActiveInputBundleId: und-Latn-x-password, password
10-19 14:57:21.202  5589  5589 I AndroidIME: AbstractIme.onActivate():96 PasswordIme.onActivate() : EditorInfo = EditorInfo{packageName=com.a1taxi.driverpro, inputType=80081, inputTypeString=Password[NoSuggestion], enableLearning=false, autoCorrection=false, autoComplete=true, imeOptions=4000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=2867, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=false, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}, IncognitoMode = false, DeviceLocked = false
10-19 14:57:21.202  5589  5589 I KeyboardWrapper: KeyboardWrapper.activateKeyboard():581 activateKeyboard(): type=prime, status=INACTIVE, imeDef=mkk{stringId=password, language=und-Latn-x-password, languageTag=und-Latn-x-password, processedConditions={writing_helper_enable_by_word_revert=false, enable_access_points_in_password_number=true, variant=qwerty, true=true, language=en-US, enable_number_row=true, device=phone, enable_number_row_in_password=true, enable_pk_simulator=false}, className=com.google.android.libraries.inputmethod.ime.password.PasswordIme, label=2132019275, keyEventInterpreter=null, inlineComposing=true, autoCapital=true, announceAutoSelectedCandidate=true, statusIcon=0, indicatorIcon=0, indicatorLabel=null, displayAppCompletions=false, extraValues=mkd{}, processors=mmb@7d3d911, unacceptableMetaKeys=4098, languageSpecificSettings=0, asciiCapable=false, alwaysShowSuggestions=false, useAsciiPasswordKeyboard=false, keyboardGroupDef=mlk@8a8f7a7, phenotypeFlagId=0, localizationLanguageTag=null, supportsInlineSuggestion=false}
10-19 14:57:21.202  5589  5589 I KeyboardManager: KeyboardManager.requestKeyboard():248 Creating keyboard prime, imeId=password, cacheKey=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup
10-19 14:57:21.203  5589  5589 I KeyboardWrapper: KeyboardWrapper.onKeyboardReady():224 onKeyboardReady(): type=null(prime), kb=com.google.android.apps.inputmethod.latin.keyboard.LatinPasswordKeyboard@80d4795
10-19 14:57:21.203  5589  5589 I KeyboardWrapper: KeyboardWrapper.doActivateKeyboard():611 doActivateKeyboard(): prime
10-19 14:57:21.209  5589  5589 I KeyboardViewHelper: KeyboardViewHelper.getView():180 Get view with height ratio:1.000000
10-19 14:57:21.212  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.212  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-19 14:57:21.212  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.getKeyboardInitialStates():175 
10-19 14:57:21.212  5589  5589 W KeyboardDef: KeyboardDef.getKeyboardViewDef():739 KeyboardViewDef is not found: keyboardDef=mle{processedConditions={show_comma_key=true, enable_more_candidates_view_for_multilingual=false, layout_9key_split=false, enable_secondary_symbols=false, pref_enable_flick_symbols=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, show_suggestion_strip=true, expressions=normal, enable_access_points_in_password_number=true, enable_correction_settings_updates=true, enable_flick_symbols=true, variant=qwerty, show_period_key=true, enable_number_row=true, device=phone, keyboard_mode=normal, show_secondary_digits=false, enable_preemptive_decode=true, enable_pk_simulator=false, bottom_period_popup_slash=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinPasswordKeyboard, resourceIds=[#0x7f1705fb, #0x7f17088d, #0x7f1706bb], initialStates=0, keyboardViewDefs=[mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e029f, type=BODY, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e01f9, type=FLOATING_CANDIDATES, touchable=false, defaultShow=false}, mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=17592186044419}, type=WIDGET, id=2131427876
10-19 14:57:21.212  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={show_comma_key=true, enable_more_candidates_view_for_multilingual=false, layout_9key_split=false, enable_secondary_symbols=false, pref_enable_flick_symbols=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, show_suggestion_strip=true, expressions=normal, enable_access_points_in_password_number=true, enable_correction_settings_updates=true, enable_flick_symbols=true, variant=qwerty, show_period_key=true, enable_number_row=true, device=phone, keyboard_mode=normal, show_secondary_digits=false, enable_preemptive_decode=true, enable_pk_simulator=false, bottom_period_popup_slash=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinPasswordKeyboard, resourceIds=[#0x7f1705fb, #0x7f17088d, #0x7f1706bb], initialStates=0, keyboardViewDefs=[mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e029f, type=BODY, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e01f9, type=FLOATING_CANDIDATES, touchable=false, defaultShow=false}, mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=17592186044419}, type=WIDGET, helpersCreated=[lxm@a99d781, lxm@1f04026, lxm@a3b1467, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-19 14:57:21.213  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.215  5589  5589 I AndroidIME: InputBundleManager.startInput():358 startInput() with mlo[keyboardType=prime, payload=null]
10-19 14:57:21.215  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onActivate():120 
10-19 14:57:21.217  5589  5589 I LanguagePromoExtension: LanguagePromoExtension.checkDisplayPreconditions():174 Not show language promo: exceeds the max display times.
10-19 14:57:21.217  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension.onActivate():189 Not activated NewLanguagePromptExtension: not a normal text input box.
10-19 14:57:21.217  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@4d1cbc0, lastModifier=2, keyCodes=[56], actions=[0]}
10-19 14:57:21.217  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@dba369f, lastModifier=0, keyCodes=[317], actions=[0]}
10-19 14:57:21.217  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@a43262, lastModifier=2, keyCodes=[56], actions=[0]}
10-19 14:57:21.217  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@9712ae, lastModifier=0, keyCodes=[317], actions=[0]}
10-19 14:57:21.217  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.cancelShutdown():109 cancelShutdown()
10-19 14:57:21.217  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.syncLanguagePacks():121 syncLanguagePacks()
10-19 14:57:21.217  5589  5589 I VoiceInputManager: VoiceInputManager.onKeyboardActivated():1173 onKeyboardActivated() [UD]
10-19 14:57:21.217  5589  6558 I SpeechFactory: SpeechRecognitionFactory.maybeScheduleAutoPackDownloadForFallback():217 maybeScheduleAutoPackDownloadForFallback()
10-19 14:57:21.218  5589  5589 I PkModeUpdater: PkModeUpdater.onActivate():74 onActivate false true
10-19 14:57:21.218  5589  6558 I FallbackOnDeviceRecognitionProvider: FallbackOnDeviceRecognitionProvider.maybeScheduleAutoPackDownload():205 maybeScheduleAutoPackDownload() for language tag en-US
10-19 14:57:21.218  5589  5589 I AccessoryInputModeManager: AccessoryInputModeManager.onModeStarted():318 Accessory input mode started: null
10-19 14:57:21.218  5589  5589 W SupplementaryKeyboardsWrapper: SupplementaryKeyboardsWrapper.deactivateKeyboard():161 keyboard accessory_candidates_consumer is not activated before!
10-19 14:57:21.218  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:21.218  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.218  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.218  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:21.219  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.219  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.219  5589  5589 W ExtensionWrapper: ExtensionWrapper.setExtensionViewVisibility():811 interface mas is not activate
10-19 14:57:21.220  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:21.220  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020501, callback=cgp@6e8d4e4, lastModifier=2, keyCodes=[48], actions=[0]}
10-19 14:57:21.221  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020501, callback=cgp@4b52a61, lastModifier=2, keyCodes=[48], actions=[0]}
10-19 14:57:21.221  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020501, callback=cgp@adfaa4e, lastModifier=2, keyCodes=[48], actions=[0]}
10-19 14:57:21.221  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020501, callback=cgp@2c1f812, lastModifier=2, keyCodes=[48], actions=[0]}
10-19 14:57:21.221  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@5690081, lastModifier=2, keyCodes=[56], actions=[0]}
10-19 14:57:21.222  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@59d3f14, lastModifier=0, keyCodes=[317], actions=[0]}
10-19 14:57:21.222  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@4c0776a, lastModifier=2, keyCodes=[56], actions=[0]}
10-19 14:57:21.222  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@98c6dd1, lastModifier=0, keyCodes=[317], actions=[0]}
10-19 14:57:21.222  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020502, callback=cgp@9b142fe, lastModifier=2, keyCodes=[32], actions=[0]}
10-19 14:57:21.222  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020502, callback=cgp@e7489c2, lastModifier=2, keyCodes=[32], actions=[0]}
10-19 14:57:21.223  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020502, callback=cgp@e53f657, lastModifier=2, keyCodes=[32], actions=[0]}
10-19 14:57:21.223  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020502, callback=cgp@75922d4, lastModifier=2, keyCodes=[32], actions=[0]}
10-19 14:57:21.224  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 1
10-19 14:57:21.224  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 1
10-19 14:57:21.227 23589 23589 D InsetsController: show(ime(), fromIme=true)
10-19 14:57:21.227 23589 23589 I ImeTracker: com.a1taxi.driverpro:8f539147: onCancelled at PHASE_CLIENT_APPLY_ANIMATION
10-19 14:57:21.230 23589 23589 D InsetsController: show(ime(), fromIme=true)
10-19 14:57:21.230 23589 23589 I ImeTracker: com.a1taxi.driverpro:bcb04eb0: onCancelled at PHASE_CLIENT_APPLY_ANIMATION
10-19 14:57:21.234  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:21.234  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.234  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.234  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:21.234  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notifyWithWindow():166 
10-19 14:57:21.234  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notify():159 pfu[bounds=Rect(0, 105 - 1080, 2392), insets=Rect(0, 0 - 0, 116), densityDpi=440, smallestScreenWidthDp=393, displayWidth=1080, displayHeight=2392, xdpi=387.43, ydpi=387.43, isTrustable=true, displayId=0]; DisplayMetrics{density=2.75, width=1080, height=2392, scaledDensity=2.75, xdpi=387.43, ydpi=387.43}
10-19 14:57:21.244  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=HEADER keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{15e68d6 V.E...... ........ 0,0-1080,121}
10-19 14:57:21.245  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.245  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=BODY keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{cd04ee9 V.E...... ........ 0,0-1080,693}
10-19 14:57:21.245  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.245  5589  5589 I GlobeKeyExtension: GlobeKeyExtension$1.onKeyboardViewShown():72 maybeDisableLanguageSwitchKeyPref when the keyboard is shown
10-19 14:57:21.245  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.maybeDisableLanguageSwitchKeyPref():200 maybeDisableLanguageSwitchKeyPref hasGlobeKeyBeenDisabled: false, shouldDisableLanguageSwitchKey: false
10-19 14:57:21.245  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension$1.onKeyboardViewShown():88 Not show new language banner: not prime keyboard, or the extension not activated.
10-19 14:57:21.249  3458  3458 V InlinePresentationRendererServiceImpl: onRenderSuggestion: width=-2, height=-2
10-19 14:57:21.254  3458  3458 V InlineSuggestionRenderService: width=-2, height=-2, measuredSize=366x121
10-19 14:57:21.276  3458  3458 D ViewRootImpl: AppSizeAfterRelayout, size: Point(366, 121), rotation: ROTATION_0
10-19 14:57:21.276  3458  3458 D BufferQueueConsumer: [](id:d8200000194,api:0,p:-1,c:3458) connect: controlledByApp=false
10-19 14:57:21.277  3458  3458 D BLASTBufferQueue: [VRI[]#404](f:0,a:0) constructor()
10-19 14:57:21.277  3458  3458 D BLASTBufferQueue: [VRI[]#404](f:0,a:0) update width=366 height=121 format=-2 mTransformHint=0
10-19 14:57:21.281  1870  1976 D AutofillSession: onShown(): 2, 1
10-19 14:57:21.283  3458 31463 D BLASTBufferQueue: [VRI[]#404](f:0,a:1) acquireNextBufferLocked size=366x121 mFrameNumber=1 applyTransaction=true mTimestamp=629411833564207(auto) mPendingTransactions.size=0 graphicBufferId=14851996912396 transform=0
10-19 14:57:21.284  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$2.display():195 Requesting to show proactive suggestions: AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-19 14:57:21.287  5589  5589 D BufferQueueConsumer: [](id:15d500000782,api:0,p:-1,c:5589) connect: controlledByApp=false
10-19 14:57:21.287  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1922](f:0,a:0) constructor()
10-19 14:57:21.287  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1922](f:0,a:0) update width=770 height=121 format=-2 mTransformHint=0
10-19 14:57:21.289  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 101975, name: com.google.android.inputmethod.latin
10-19 14:57:21.290  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$Holder.setSuggestionsAndShow():898 succeed to show proactive suggestions AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-19 14:57:21.301  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:21.301  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.301  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:21.302  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:21.306  5589  5589 D BufferQueueConsumer: [](id:15d500000783,api:0,p:-1,c:5589) connect: controlledByApp=false
10-19 14:57:21.307  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1923](f:0,a:0) constructor()
10-19 14:57:21.307  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1923](f:0,a:0) update width=366 height=121 format=-2 mTransformHint=0
10-19 14:57:21.310  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 366, arg2: 121, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.314  5589  5657 D BLASTBufferQueue: [SurfaceView[InputMethod]#1923](f:0,a:1) acquireNextBufferLocked size=366x121 mFrameNumber=1 applyTransaction=true mTimestamp=629411865359591(auto) mPendingTransactions.size=0 graphicBufferId=24004572224091 transform=0
10-19 14:57:21.316  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 184, arg2: 13, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.316  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 101975, name: com.google.android.inputmethod.latin
10-19 14:57:21.322  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 220, arg2: 35, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.337  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 256, arg2: 55, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.353  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 286, arg2: 73, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.369  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 310, arg2: 87, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.387  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 330, arg2: 101, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.403  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 346, arg2: 109, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.422  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 358, arg2: 117, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.437  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 364, arg2: 121, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:21.455  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 366, arg2: 121, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:22.519  5720 15135 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:23.184  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:23.184  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.184  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.184  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:23.579  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:23.581  1870  1997 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 102036, name: com.google.android.inputmethod.latin
10-19 14:57:23.581  5589  5657 E BufferQueueProducer: [SurfaceView[InputMethod]#1923(BLAST Consumer)1923](id:15d500000783,api:0,p:-1,c:5589) disconnect: not connected (req=1)
10-19 14:57:23.582  5589  5657 W libEGL  : EGLNativeWindowType 0xb4000077e0268430 disconnect failed
10-19 14:57:23.582  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1923](f:0,a:1) destructor()
10-19 14:57:23.582  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#1923(BLAST Consumer)1923](id:15d500000783,api:0,p:-1,c:5589) disconnect
10-19 14:57:23.584  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:23.587  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:23.587  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.587  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.587  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:23.594  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:23.642  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 101975, name: com.google.android.inputmethod.latin
10-19 14:57:23.642  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#1922](f:0,a:0) destructor()
10-19 14:57:23.642  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#1922(BLAST Consumer)1922](id:15d500000782,api:0,p:-1,c:5589) disconnect
10-19 14:57:23.654  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:23.654  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.655  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.655  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:23.752  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:23.752  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.753  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:23.753  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:23.795  3458  3458 V InlineSuggestionRenderService: Releasing inline suggestion view host
10-19 14:57:23.798  3458  3458 D BLASTBufferQueue: [VRI[]#404](f:0,a:4) destructor()
10-19 14:57:23.799  3458  3458 D BufferQueueConsumer: [VRI[]#404(BLAST Consumer)404](id:d8200000194,api:0,p:-1,c:3458) disconnect
10-19 14:57:23.802  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:23.802  3458  3458 V InlineSuggestionRenderService: Removed the inline suggestion from the cache, current size=1
10-19 14:57:23.928  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:24.605  5720 15135 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:25.170  5589  5589 I KeyboardWrapper: KeyboardWrapper.switchToKeyboard():676 switchToKeyboard(): type=symbol, status=ACTIVE
10-19 14:57:25.170  5589  5589 I KeyboardManager: KeyboardManager.requestKeyboard():248 Creating keyboard symbol, imeId=password, cacheKey=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup
10-19 14:57:25.170  5589  5589 I KeyboardWrapper: KeyboardWrapper.onKeyboardReady():224 onKeyboardReady(): type=prime(symbol), kb=com.google.android.apps.inputmethod.latin.keyboard.LatinSymbolsKeyboard@6013964
10-19 14:57:25.171  5589  5589 I VoiceInputManager: VoiceInputManager.onKeyboardActivated():1173 onKeyboardActivated() [UD]
10-19 14:57:25.171  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020506, callback=cgp@6f5b0a, lastModifier=2, keyCodes=[47], actions=[0]}
10-19 14:57:25.171  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020506, callback=cgp@1db2b93, lastModifier=2, keyCodes=[47], actions=[0]}
10-19 14:57:25.171  5589  5589 I KeyboardWrapper: KeyboardWrapper.doActivateKeyboard():611 doActivateKeyboard(): symbol
10-19 14:57:25.241  5589  5589 I KeyboardViewHelper: KeyboardViewHelper.getView():180 Get view with height ratio:1.000000
10-19 14:57:25.284  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.284  5589  5589 I SoftKeyboardView: SoftKeyboardView.setMaxHeight():1102 Set max keyboard height:1783.
10-19 14:57:25.284  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-19 14:57:25.286  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:25.286  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.286  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.286  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:25.286  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.286  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.287  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.getKeyboardInitialStates():175 
10-19 14:57:25.287  5589  5589 W KeyboardDef: KeyboardDef.getKeyboardViewDef():739 KeyboardViewDef is not found: keyboardDef=mle{processedConditions={language=en-US, deprecate_long_press_space_for_ime_picker=false, keyboard_mode=normal, device=phone, expressions=normal, layout_9key_split=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinSymbolsKeyboard, resourceIds=[#0x7f17091d], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e04ea, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e04d1, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=#0x7f0e06ec, recentKeyPopupLayoutId=#0x7f0e05e4, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=FLOATING_CANDIDATES, id=2131427876
10-19 14:57:25.288  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={language=en-US, deprecate_long_press_space_for_ime_picker=false, keyboard_mode=normal, device=phone, expressions=normal, layout_9key_split=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinSymbolsKeyboard, resourceIds=[#0x7f17091d], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e04ea, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e04d1, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=#0x7f0e06ec, recentKeyPopupLayoutId=#0x7f0e05e4, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=FLOATING_CANDIDATES, helpersCreated=[lxm@91d4338, lxm@140df11, null, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-19 14:57:25.288  5589  5589 W KeyboardDef: KeyboardDef.getKeyboardViewDef():739 KeyboardViewDef is not found: keyboardDef=mle{processedConditions={language=en-US, deprecate_long_press_space_for_ime_picker=false, keyboard_mode=normal, device=phone, expressions=normal, layout_9key_split=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinSymbolsKeyboard, resourceIds=[#0x7f17091d], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e04ea, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e04d1, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=#0x7f0e06ec, recentKeyPopupLayoutId=#0x7f0e05e4, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=WIDGET, id=2131427876
10-19 14:57:25.288  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={language=en-US, deprecate_long_press_space_for_ime_picker=false, keyboard_mode=normal, device=phone, expressions=normal, layout_9key_split=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinSymbolsKeyboard, resourceIds=[#0x7f17091d], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e04ea, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e04d1, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=#0x7f0e06ec, recentKeyPopupLayoutId=#0x7f0e05e4, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=WIDGET, helpersCreated=[lxm@91d4338, lxm@140df11, null, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-19 14:57:25.289  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.306  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:25.307  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.307  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.307  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:25.307  5589  5589 W View    : requestLayout() improperly called by com.google.android.libraries.inputmethod.widgets.SoftKeyView{786fb7b VFE...C.. ......ID 6,0-122,121 #7f0b04d8 app:id/key_pos_header_access_points_menu} during layout: running second layout pass
10-19 14:57:25.307  5589  5589 W View    : requestLayout() improperly called by com.google.android.libraries.inputmethod.widgets.CopyImageSourceView{75739f1 V.ED..... ......ID 6,0-1048,121 #7f0b01e1 app:id/0_resource_name_obfuscated} during layout: running second layout pass
10-19 14:57:25.307  5589  5589 W View    : requestLayout() improperly called by android.widget.LinearLayout{53149d6 V.E...... ......ID 122,0-932,121 #7f0b0387 app:id/0_resource_name_obfuscated} during layout: running second layout pass
10-19 14:57:25.307  5589  5589 W View    : requestLayout() improperly called by com.google.android.libraries.inputmethod.widgets.SoftKeyView{92cdd74 VFE...C.. ......ID 932,0-1048,121 #7f0b04e0 app:id/key_pos_header_power_key} during layout: running second layout pass
10-19 14:57:25.307  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:25.307  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.307  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.307  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:25.328  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=symbol, keyboardViewType=HEADER keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{3bde82e V.E...... ........ 0,0-1080,121 #7f0b0385 app:id/0_resource_name_obfuscated}
10-19 14:57:25.328  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.330  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=symbol, keyboardViewType=BODY keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{5208189 V.E...... ........ 0,0-1080,693}
10-19 14:57:25.330  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.330  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension$1.onKeyboardViewShown():88 Not show new language banner: not prime keyboard, or the extension not activated.
10-19 14:57:25.336  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:25.336  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.336  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:25.337  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:25.859  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:26.261  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:26.572  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:26.617  5589  6128 I PhenotypeProcessReaper: Memory state is: 125
10-19 14:57:26.700  5720 15069 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:26.929  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:27.354  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:27.613  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:27.898  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:28.572 23589 23589 I ImeTracker: com.a1taxi.driverpro:25ca70e0: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT fromUser false
10-19 14:57:28.575  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInputView():1571 onFinishInputView(false)
10-19 14:57:28.575  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onDeactivate():144 
10-19 14:57:28.575  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-19 14:57:28.576  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdown():131 shutdown()
10-19 14:57:28.576  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id spell_check_add_to_dictionary not found in tooltipManager.
10-19 14:57:28.577  5589  5589 I KeyboardViewController: KeyboardViewController.clearSubViewControllerInternal():448 Clears keyboard sub view controller for keyboardType: symbol, viewType: HEADER, viewId: 2131432332(#0x7f0b138c),which has not been set.
10-19 14:57:28.577  5589  5589 I AndroidIME: AbstractIme.onDeactivate():216 PasswordIme.onDeactivate()
10-19 14:57:28.578  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-19 14:57:28.580 23589 23589 D InsetsController: hide(ime(), fromIme=true)
10-19 14:57:28.598  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-19 14:57:28.598  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:28.598  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-19 14:57:28.598  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-19 14:57:28.789 23589 23589 I ImeTracker: com.a1taxi.driverpro:b67659dc: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT_ON_ANIMATION_STATE_CHANGED fromUser false
10-19 14:57:28.791 23589 23589 I ImeTracker: com.a1taxi.driverpro:25ca70e0: onHidden
10-19 14:57:28.804  5720 15069 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:29.138 23589 24108 I ReactNativeJS: === LOGIN BUTTON PRESSED ===
10-19 14:57:29.138 23589 24108 I ReactNativeJS: 'Username entered:', 'Jai'
10-19 14:57:29.138 23589 24108 I ReactNativeJS: 'Password length:', 10
10-19 14:57:29.138 23589 24108 I ReactNativeJS: === DRIVER AUTHENTICATION ===
10-19 14:57:29.138 23589 24108 I ReactNativeJS: 'Username:', 'Jai'
10-19 14:57:29.138 23589 24108 I ReactNativeJS: 'Password length:', 10
10-19 14:57:29.138 23589 24108 I ReactNativeJS: 🔍 Authenticating driver credentials via RPC...
10-19 14:57:29.145 23589 24108 I ReactNativeJS: Auth still loading...
10-19 14:57:29.167 23589 23589 I ImeTracker: com.a1taxi.driverpro:53784de9: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT_CLOSE_CURRENT_SESSION fromUser false
10-19 14:57:29.305  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-19 14:57:29.329  5589  5589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2287), rotation: ROTATION_0
10-19 14:57:29.330  5589  5589 D BLASTBufferQueue: [VRI[InputMethod]#1919](f:0,a:4) destructor()
10-19 14:57:29.330  5589  5589 D BufferQueueConsumer: [VRI[InputMethod]#1919(BLAST Consumer)1919](id:15d50000077f,api:0,p:-1,c:5589) disconnect
10-19 14:57:29.413 23589 24108 I ReactNativeJS: 'Authentication result:', { success: true,
10-19 14:57:29.413 23589 24108 I ReactNativeJS:   user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-19 14:57:29.413 23589 24108 I ReactNativeJS:   message: 'Authentication successful' }
10-19 14:57:29.413 23589 24108 I ReactNativeJS: ✅ Authentication successful
10-19 14:57:29.414 23589 24108 I ReactNativeJS: 'User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:29.414 23589 24108 I ReactNativeJS: 📋 Loading user profile...
10-19 14:57:29.758 23589 24108 I ReactNativeJS: ✅ User verified as driver
10-19 14:57:29.758 23589 24108 I ReactNativeJS: 🚗 Loading driver profile via RPC...
10-19 14:57:30.119 23589 24108 I ReactNativeJS: === RETRIEVING CURRENT DRIVER STATUS ===
10-19 14:57:30.120 23589 24108 I ReactNativeJS: ✅ Driver profile loaded successfully
10-19 14:57:30.120 23589 24108 I ReactNativeJS: '📊 CURRENT status from database:', 'busy'
10-19 14:57:30.120 23589 24108 I ReactNativeJS: '📊 Status retrieved at:', '2025-10-19T09:27:30.120Z'
10-19 14:57:30.120 23589 24108 I ReactNativeJS: 📊 TESTING MODE: Setting status to ONLINE by default
10-19 14:57:30.120 23589 24108 I ReactNativeJS: 🧪 TESTING MODE ACTIVE - Ensuring driver is ONLINE and AVAILABLE
10-19 14:57:30.408 23589 24108 I ReactNativeJS: ✅ Driver status set to ONLINE and VERIFIED for testing
10-19 14:57:30.409 23589 24108 I ReactNativeJS: === FINAL STATUS CONFIRMATION ===
10-19 14:57:30.409 23589 24108 I ReactNativeJS: '📊 Driver logged in with TESTING status:', 'online'
10-19 14:57:30.410 23589 24108 I ReactNativeJS: 🧪 TESTING MODE: Driver defaulted to ONLINE
10-19 14:57:30.410 23589 24108 I ReactNativeJS: 📊 Status will remain ONLINE until manually changed
10-19 14:57:30.415 23589 24108 I ReactNativeJS: Auth still loading...
10-19 14:57:30.415 23589 24108 I ReactNativeJS: === RIDE CONTEXT INITIALIZED ===
10-19 14:57:30.416 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:30.416 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:30.416 23589 24108 I ReactNativeJS: 'Driver Status:', 'online'
10-19 14:57:30.416 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:30.416 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:30.417 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:30.417 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:30.418 23589 24108 I ReactNativeJS: === SETTING UP REAL-TIME SUBSCRIPTIONS ===
10-19 14:57:30.419 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:30.419 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:30.419 23589 24108 I ReactNativeJS: ✅ Real-time subscriptions established
10-19 14:57:30.419 23589 24108 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-19 14:57:30.419 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:30.419 23589 24108 I ReactNativeJS: 'Driver Status:', 'online'
10-19 14:57:30.419 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:30.420 23589 24108 I ReactNativeJS: 'Driver Verified:', true
10-19 14:57:30.420 23589 24108 I ReactNativeJS: ✅ Driver is active, ensuring location record exists and driver is available for customers...
10-19 14:57:30.420 23589 24108 I ReactNativeJS: === HANDLING ACTIVE DRIVER ===
10-19 14:57:30.420 23589 24108 I ReactNativeJS: 'Driver status:', 'online'
10-19 14:57:30.420 23589 24108 I ReactNativeJS: 'Driver verified:', true
10-19 14:57:30.420 23589 24108 I ReactNativeJS: === FORCE CREATING LOCATION RECORD ===
10-19 14:57:30.420 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:30.421 23589 24108 I ReactNativeJS: 'Driver Name:', 'jai'
10-19 14:57:30.421 23589 24108 E ReactNativeJS: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly
10-19 14:57:30.427 23589 24108 E ReactNativeJS: 'Current value:', undefined
10-19 14:57:30.429 23589 24108 I ReactNativeJS: ⚠️ Falling back to direct database insert without edge function
10-19 14:57:30.429 23589 24108 I ReactNativeJS: === FALLBACK: CREATING LOCATION RECORD VIA RPC ===
10-19 14:57:30.429 23589 24108 I ReactNativeJS: 📍 Attempting to get current GPS location...
10-19 14:57:30.431 23589 24108 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-19 14:57:30.431 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:30.431 23589 24108 I ReactNativeJS: 'Driver Status:', 'online'
10-19 14:57:30.431 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:30.431 23589 24108 I ReactNativeJS: 'Driver Verified:', true
10-19 14:57:30.433 23589 24108 I ReactNativeJS: ✅ Authentication completed - LocationContext will handle location setup
10-19 14:57:30.433 23589 24108 I ReactNativeJS: 📍 Location permission will be requested by LocationContext
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: console.error: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly, js engine: hermes, stack:
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: ?anon_0_@1:1954897
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: anonymous@1:573481
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: anonymous@1:573402
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: forceCreateLocationRecord@1:1955060
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: ?anon_0_@1:1953805
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: anonymous@1:573481
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: anonymous@1:573402
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: handleActiveDriver@1:1954029
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: anonymous@1:1952572
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitHookEffectListMount@1:393533
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitHookPassiveMountEffects@1:401261
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401706
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401559
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401661
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: flushPassiveEffects@1:409129
10-19 14:57:30.434 23589 24109 E unknown:ReactNative: anonymous@1:408952
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: console.error: Current value: undefined, js engine: hermes, stack:
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: ?anon_0_@1:1954917
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: anonymous@1:573481
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: anonymous@1:573402
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: forceCreateLocationRecord@1:1955060
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: ?anon_0_@1:1953805
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: anonymous@1:573481
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: anonymous@1:573402
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: handleActiveDriver@1:1954029
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: anonymous@1:1952572
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitHookEffectListMount@1:393533
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitHookPassiveMountEffects@1:401261
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401706
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401559
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401679
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401453
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401345
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: commitPassiveMountOnFiber@1:401661
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: flushPassiveEffects@1:409129
10-19 14:57:30.438 23589 24109 E unknown:ReactNative: anonymous@1:408952
10-19 14:57:30.441 21104 25658 I FusedLocation: stationary throttling disengaged [CONTEXT service_id=6 ]
10-19 14:57:30.447 23589 24108 I ReactNativeJS: ✅ Login successful, waiting for navigation...
10-19 14:57:30.449 23589 24108 I ReactNativeJS: === NAVIGATION CHECK ===
10-19 14:57:30.449 23589 24108 I ReactNativeJS: 'In auth group:', true
10-19 14:57:30.449 23589 24108 I ReactNativeJS: 'Has session:', false
10-19 14:57:30.449 23589 24108 I ReactNativeJS: 'Has driver:', true
10-19 14:57:30.449 23589 24108 I ReactNativeJS: 'Current segments:', [ '(auth)', 'login' ]
10-19 14:57:30.449 23589 24108 I ReactNativeJS: 'Loading state:', false
10-19 14:57:30.450 23589 24108 I ReactNativeJS: 'Is authenticated:', { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   license_number: '25845',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   license_expiry: '2025-09-28',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   status: 'online',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   rating: 5,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   total_rides: 17,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   is_verified: true,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   vehicle_id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   vendor_id: null,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   phone_number: '6985471230',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   name: 'jai',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   created_at: '2025-09-12T17:52:54.786298+00:00',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   updated_at: '2025-10-19T09:26:02.217037+00:00',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   vehicles: 
10-19 14:57:30.450 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      year: 2024,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      vehicle_type: 'sedan',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      capacity: 4 },
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   user: 
10-19 14:57:30.450 23589 24108 I ReactNativeJS:    { id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      email: 'jai@gmail.com',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      role: 'driver',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      full_name: 'jai',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      phone_number: '6985471230',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      avatar_url: null,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      is_active: true,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      created_at: '2025-09-12T17:52:54.109176+00:00',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      updated_at: '2025-09-12T17:52:54.109176+00:00' },
10-19 14:57:30.450 23589 24108 I ReactNativeJS:   vehicle: 
10-19 14:57:30.450 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      year: 2024,
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      vehicle_type: 'sedan',
10-19 14:57:30.450 23589 24108 I ReactNativeJS:      capacity: 4 } }
10-19 14:57:30.450 23589 24108 I ReactNativeJS: Redirecting to main app - authenticated
10-19 14:57:30.471 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:57:30.479 21104 25647 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:57:30.487 21104 25700 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-19 14:57:30.488 21104 21184 W inertial-anchor: Triggering reinit due to mag declination change
10-19 14:57:30.488 21104 21184 W Looper  : Looper already prepared for this thread with a different value for the LOOPER_PREPARE_ALLOW_NON_CALLBACKS option.
10-19 14:57:30.491 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-19 14:57:30.491 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-19 14:57:30.491 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-19 14:57:30.496 23589 24108 I ReactNativeJS: === NAVIGATION CHECK ===
10-19 14:57:30.496 23589 24108 I ReactNativeJS: 'In auth group:', false
10-19 14:57:30.496 23589 24108 I ReactNativeJS: 'Has session:', false
10-19 14:57:30.496 23589 24108 I ReactNativeJS: 'Has driver:', true
10-19 14:57:30.496 23589 24108 I ReactNativeJS: 'Current segments:', [ '(tabs)' ]
10-19 14:57:30.496 23589 24108 I ReactNativeJS: 'Loading state:', false
10-19 14:57:30.497 23589 24108 I ReactNativeJS: 'Is authenticated:', { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   license_number: '25845',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   license_expiry: '2025-09-28',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   status: 'online',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   rating: 5,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   total_rides: 17,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   is_verified: true,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   vehicle_id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   vendor_id: null,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   phone_number: '6985471230',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   name: 'jai',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   created_at: '2025-09-12T17:52:54.786298+00:00',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   updated_at: '2025-10-19T09:26:02.217037+00:00',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   vehicles: 
10-19 14:57:30.497 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      year: 2024,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      vehicle_type: 'sedan',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      capacity: 4 },
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   user: 
10-19 14:57:30.497 23589 24108 I ReactNativeJS:    { id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      email: 'jai@gmail.com',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      role: 'driver',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      full_name: 'jai',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      phone_number: '6985471230',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      avatar_url: null,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      is_active: true,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      created_at: '2025-09-12T17:52:54.109176+00:00',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      updated_at: '2025-09-12T17:52:54.109176+00:00' },
10-19 14:57:30.497 23589 24108 I ReactNativeJS:   vehicle: 
10-19 14:57:30.497 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      year: 2024,
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      vehicle_type: 'sedan',
10-19 14:57:30.497 23589 24108 I ReactNativeJS:      capacity: 4 } }
10-19 14:57:30.497 23589 24108 I ReactNativeJS: No navigation needed - staying in current route
10-19 14:57:30.503 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-19 14:57:30.504 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-19 14:57:30.505 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-19 14:57:30.505 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2983
10-19 14:57:30.506 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2983
10-19 14:57:30.524 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 3007
10-19 14:57:30.540 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2967
10-19 14:57:30.540 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2967
10-19 14:57:30.540 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2983
10-19 14:57:30.540 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2983
10-19 14:57:30.543 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2967
10-19 14:57:30.543 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2967
10-19 14:57:30.543 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2967
10-19 14:57:30.543 23589 24109 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 2983
10-19 14:57:30.543 23589 24109 W unknown:ReactNative: Tried to update size of non-existent tag: 3017
10-19 14:57:30.543 23589 24109 W unknown:ReactNative: Tried to update size of non-existent tag: 3033
10-19 14:57:30.557 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:30.557 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:30.557 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:30.557 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:30.557 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:30.557Z'
10-19 14:57:30.557 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:30.557 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:30.557 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:30.557 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:30.557 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:30.557 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:30.557 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:30.557 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:30.562 23589 24108 I ReactNativeJS: === NAVIGATION CHECK ===
10-19 14:57:30.562 23589 24108 I ReactNativeJS: 'In auth group:', false
10-19 14:57:30.562 23589 24108 I ReactNativeJS: 'Has session:', false
10-19 14:57:30.562 23589 24108 I ReactNativeJS: 'Has driver:', true
10-19 14:57:30.562 23589 24108 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'rides' ]
10-19 14:57:30.562 23589 24108 I ReactNativeJS: 'Loading state:', false
10-19 14:57:30.563 23589 24108 I ReactNativeJS: 'Is authenticated:', { id: '76b66a88-dff9-4965-9e36-8a92023f155d',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   user_id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   license_number: '25845',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   license_expiry: '2025-09-28',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   status: 'online',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   rating: 5,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   total_rides: 17,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   is_verified: true,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   vehicle_id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   vendor_id: null,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   phone_number: '6985471230',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   name: 'jai',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   created_at: '2025-09-12T17:52:54.786298+00:00',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   updated_at: '2025-10-19T09:26:02.217037+00:00',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   vehicles: 
10-19 14:57:30.563 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      year: 2024,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      vehicle_type: 'sedan',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      capacity: 4 },
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   user: 
10-19 14:57:30.563 23589 24108 I ReactNativeJS:    { id: 'ae53a792-6aed-4186-823d-61c34c6defe2',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      email: 'jai@gmail.com',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      role: 'driver',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      full_name: 'jai',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      phone_number: '6985471230',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      avatar_url: null,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      is_active: true,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      created_at: '2025-09-12T17:52:54.109176+00:00',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      updated_at: '2025-09-12T17:52:54.109176+00:00' },
10-19 14:57:30.563 23589 24108 I ReactNativeJS:   vehicle: 
10-19 14:57:30.563 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      year: 2024,
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      vehicle_type: 'sedan',
10-19 14:57:30.563 23589 24108 I ReactNativeJS:      capacity: 4 } }
10-19 14:57:30.563 23589 24108 I ReactNativeJS: No navigation needed - staying in current route
10-19 14:57:30.600 23589 23589 D MapsInitializer: preferredRenderer: LATEST
10-19 14:57:30.600 23589 23589 D AirMapRenderer: LATEST
10-19 14:57:30.600 23589 23589 D MapsInitializer: preferredRenderer: null
10-19 14:57:30.600 23589 23589 D zzcc    : preferredRenderer: null
10-19 14:57:30.601 23589 23589 I Google Android Maps SDK: Google Play services package version: 254031035
10-19 14:57:30.601 23589 23589 I Google Android Maps SDK: Google Play services maps renderer version(maps_core): 253425402
10-19 14:57:30.604 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.604 21104 25700 I PhenotypeResourceReader: unable to find any Phenotype resource metadata for com.a1taxi.driverpro
10-19 14:57:30.604 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.605 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.605 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.606 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.606 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.606 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.606 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.606 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.614 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.614 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.616 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.616 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.622 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.622 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.624 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.624 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.627 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.627 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.629 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.629 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.630 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.630 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.634 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.634 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.636 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.636 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.637 23589 23589 D BufferQueueConsumer: [](id:5c2500000014,api:0,p:-1,c:23589) connect: controlledByApp=true
10-19 14:57:30.637 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.637 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.641 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.641 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.642 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.642 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.644 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.644 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.648 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.648 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.651 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.651 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.667 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.667 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.669 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.669 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.677 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.677 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.681 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.681 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.682 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.682 23589 23589 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.708  1870  1997 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 882, arg2: 550, arg3: 23589, arg4: 1678, name: com.a1taxi.driverpro
10-19 14:57:30.750 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.750 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.774 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.774 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.776 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.776 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.779 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.779 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.782 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.782 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.797 21104 21119 I WifiScanner: onFullResults
10-19 14:57:30.797 21104 22224 I WifiScanner: onFullResults
10-19 14:57:30.797 21104 21118 I WifiScanner: onFullResults
10-19 14:57:30.806 21104 25647 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:30.821 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:30.821 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:30.821 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:30.821 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:30.821 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:30.821 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:30.821Z'
10-19 14:57:30.821 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:30.821 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:30.821 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:30.821 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:30.821 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:30.822 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:30.822 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:30.822 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:30.822 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:30.836 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:30.836 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:30.838 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:30.844 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:30.844 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:30.844 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:30.844 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:30.844 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:30.844 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:30.845Z'
10-19 14:57:30.845 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:30.845 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:30.845 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:30.845 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:30.845 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:30.845 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:30.845 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:30.845 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:30.859 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:30.859 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:30.860 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:30.860 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:30.860 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:30.860 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:30.860 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:30.860 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:30.860 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:30.860 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:30.860 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:30.860 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:30.860Z'
10-19 14:57:30.860 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:30.862 23589 24108 I ReactNativeJS: '✅ Got native location:', { accuracy: 21.56399917602539,
10-19 14:57:30.862 23589 24108 I ReactNativeJS:   longitude: 77.8298497,
10-19 14:57:30.862 23589 24108 I ReactNativeJS:   altitude: 772.5999755859375,
10-19 14:57:30.862 23589 24108 I ReactNativeJS:   heading: 244.5494842529297,
10-19 14:57:30.862 23589 24108 I ReactNativeJS:   latitude: 12.748618,
10-19 14:57:30.862 23589 24108 I ReactNativeJS:   altitudeAccuracy: 1.216892123222351,
10-19 14:57:30.862 23589 24108 I ReactNativeJS:   speed: 0.9197161793708801 }
10-19 14:57:30.866 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-19 14:57:30.885 23589 24059 E 1taxi.driverpro: [SurfaceTexture-0-23589-2] setSurfaceTextureListener: listener is nullptr
10-19 14:57:30.892 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.892 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.893 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.893 23589 25718 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:30.906  5720 15069 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:30.912 23589 25724 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:31.026 23589 25727 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:31.026 23589 25727 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:31.122 23589 24108 I ReactNativeJS: '✅ Location record', 'updated', 'successfully via RPC'
10-19 14:57:31.123 23589 24108 I ReactNativeJS: ✅ Location record confirmed, starting tracking...
10-19 14:57:31.123 23589 24108 I ReactNativeJS: ✅ Driver is now available for customer bookings
10-19 14:57:31.123 23589 24108 I ReactNativeJS: === STARTING LOCATION TRACKING ===
10-19 14:57:31.124 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:31.124 23589 24108 I ReactNativeJS: 'Status:', 'online'
10-19 14:57:31.124 23589 24108 I ReactNativeJS: 'Permission:', true
10-19 14:57:31.125 23589 24108 I ReactNativeJS: === UPDATING LOCATION WITH GOOGLE MAPS ===
10-19 14:57:31.125 23589 24108 I ReactNativeJS: 📱 Using native location...
10-19 14:57:31.126 23589 24108 I ReactNativeJS: === STARTING BACKGROUND LOCATION TRACKING ===
10-19 14:57:31.127 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:31.127 23589 24108 I ReactNativeJS: 'Status:', 'online'
10-19 14:57:31.127 23589 24108 I ReactNativeJS: === STARTING BACKGROUND LOCATION TRACKING ===
10-19 14:57:31.128 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:31.128 23589 24108 I ReactNativeJS: 'Platform:', 'android'
10-19 14:57:31.166 21104 25658 I FusedLocation: (REDACTED) stationary throttling engaged @%s
10-19 14:57:31.220 21104 25658 I FusedOrientationManager: Unregistering orientation client. [CONTEXT service_id=6 ]
10-19 14:57:31.300  1870  1976 I ActivityTaskManager: Displayed com.google.android.permissioncontroller/com.android.permissioncontroller.permission.ui.GrantPermissionsActivity for user 0: +152ms
10-19 14:57:31.337 23589 24108 I ReactNativeJS: ✅ Background location permission granted
10-19 14:57:31.341 23589 24086 I TaskService: Registered task with name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:31.342 23589 23589 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-19 14:57:31.346 23589 24086 I TaskService: Registered task with name 'background-fetch-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:31.347 23589 24108 I ReactNativeJS: ✅ Background location tracking started
10-19 14:57:31.347 23589 24108 I ReactNativeJS: ✅ Foreground service notification will be shown
10-19 14:57:31.347 23589 24108 I ReactNativeJS: ✅ Location will update every 5 seconds even when app is closed
10-19 14:57:31.349 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:31.349 23589 25721 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:31.353 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:31.353 23589 25717 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:31.377  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:31.378  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:31.378  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-19 14:57:31.378  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:31.378  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=0, callback=gds@60fce73, lastModifier=0, keyCodes=[57, 57], actions=[1, 0]}
10-19 14:57:31.379  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=0, callback=gds@9f4932e, lastModifier=0, keyCodes=[58, 58], actions=[1, 0]}
10-19 14:57:31.394 21104 25700 I FusedLocation: stationary throttling disengaged [CONTEXT service_id=6 ]
10-19 14:57:31.403 23589 24108 I ReactNativeJS: ✅ Background location tracking started successfully
10-19 14:57:31.403 23589 24108 I ReactNativeJS: ✅ Driver location will be sent every 5 seconds even when app is closed
10-19 14:57:31.404 23589 24108 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-19 14:57:31.404 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:31.404 23589 24108 I ReactNativeJS: 'Driver Status:', 'online'
10-19 14:57:31.404 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:31.404 23589 24108 I ReactNativeJS: 'Driver Verified:', true
10-19 14:57:31.406 21104 25700 I FusedLocation: (REDACTED) stationary throttling engaged @%s
10-19 14:57:31.413 23589 24108 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-19 14:57:31.413 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:31.413 23589 24108 I ReactNativeJS: 'Driver Status:', 'online'
10-19 14:57:31.413 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:31.413 23589 24108 I ReactNativeJS: 'Driver Verified:', true
10-19 14:57:31.432 21104 25700 I FusedLocation: stationary throttling disengaged [CONTEXT service_id=6 ]
10-19 14:57:31.440 23589 24108 I ReactNativeJS: '✅ Location obtained:', { accuracy: 21.56399917602539,
10-19 14:57:31.440 23589 24108 I ReactNativeJS:   longitude: 77.8298497,
10-19 14:57:31.440 23589 24108 I ReactNativeJS:   altitude: 772.5999755859375,
10-19 14:57:31.440 23589 24108 I ReactNativeJS:   heading: 244.5494842529297,
10-19 14:57:31.440 23589 24108 I ReactNativeJS:   latitude: 12.748618,
10-19 14:57:31.440 23589 24108 I ReactNativeJS:   altitudeAccuracy: 1.216892123222351,
10-19 14:57:31.440 23589 24108 I ReactNativeJS:   speed: 0.9197161793708801 }
10-19 14:57:31.448 21104 25714 I AlarmManager: set [name: SystemMemoryMap-flp type: 2 triggerAtMillis: 9223372036854775806 windowMillis: -1 intervalMillis: 0]
10-19 14:57:31.450 23589 24108 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-19 14:57:31.450 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:31.450 23589 24108 I ReactNativeJS: 'Location:', { latitude: 12.748618,
10-19 14:57:31.450 23589 24108 I ReactNativeJS:   longitude: 77.8298497,
10-19 14:57:31.450 23589 24108 I ReactNativeJS:   accuracy: 21.56399917602539 }
10-19 14:57:31.450 23589 24108 I ReactNativeJS: 📤 Updating location via RPC...
10-19 14:57:31.460 21104 25658 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-19 14:57:31.479 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:31.520 21104 25703 I FusedOrientationManager: Unregistering orientation client. [CONTEXT service_id=6 ]
10-19 14:57:31.536 21104 25703 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-19 14:57:31.540 21104 21184 W inertial-anchor: Triggering reinit due to mag declination change
10-19 14:57:31.540 21104 21184 W Looper  : Looper already prepared for this thread with a different value for the LOOPER_PREPARE_ALLOW_NON_CALLBACKS option.
10-19 14:57:31.567 21104 21184 W inertial-anchor: Triggering reinit due to mag declination change
10-19 14:57:31.567 21104 21184 W Looper  : Looper already prepared for this thread with a different value for the LOOPER_PREPARE_ALLOW_NON_CALLBACKS option.
10-19 14:57:31.718 23589 24108 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-19 14:57:31.718 23589 24108 I ReactNativeJS: 📱 Starting native location watching with 5s intervals
10-19 14:57:31.736 23589 24108 I ReactNativeJS: ✅ Location tracking started successfully
10-19 14:57:31.736 23589 24108 I ReactNativeJS: '✅ isTracking state set to:', true
10-19 14:57:31.736 23589 24108 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-19 14:57:31.736 23589 24108 I ReactNativeJS: 'Driver:', 'jai'
10-19 14:57:31.736 23589 24108 I ReactNativeJS: 'Driver Status:', 'online'
10-19 14:57:31.736 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:31.736 23589 24108 I ReactNativeJS: 'Driver Verified:', true
10-19 14:57:31.738 23589 24108 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-19 14:57:31.738 23589 24108 I ReactNativeJS:   heading: 244.5494842529297,
10-19 14:57:31.738 23589 24108 I ReactNativeJS:   altitudeAccuracy: 1.216892123222351,
10-19 14:57:31.738 23589 24108 I ReactNativeJS:   latitude: 12.748618,
10-19 14:57:31.738 23589 24108 I ReactNativeJS:   speed: 0.9197161793708801,
10-19 14:57:31.738 23589 24108 I ReactNativeJS:   longitude: 77.8298497,
10-19 14:57:31.738 23589 24108 I ReactNativeJS:   accuracy: 21.56399917602539 }
10-19 14:57:31.914 23589 23589 I ScrollIdentify: on fling
10-19 14:57:31.952 23589 24108 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-19 14:57:31.952 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:31.952 23589 24108 I ReactNativeJS: 'Location:', { latitude: 12.748618,
10-19 14:57:31.952 23589 24108 I ReactNativeJS:   longitude: 77.8298497,
10-19 14:57:31.952 23589 24108 I ReactNativeJS:   accuracy: 21.56399917602539 }
10-19 14:57:31.952 23589 24108 I ReactNativeJS: 📤 Updating location via RPC...
10-19 14:57:32.200 23589 24108 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-19 14:57:32.422 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:32.422 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:32.422 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:32.422 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:32.430 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:32.431 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:32.431 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:32.432 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:32.432 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:32.432 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:32.432 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:32.432 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:32.432 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:32.432 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:32.432 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:32.432 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:32.432 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:32.432Z'
10-19 14:57:32.432 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:32.632 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:32.634 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:32.634 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:32.635 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:32.636 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:32.637 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:32.686 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:32.686 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:32.686 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:32.686 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:32.686 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:32.686 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:32.686 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:32.686 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:32.686 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:32.686 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:32.687 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:32.687 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:32.687 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:32.687 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:32.687 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:32.687Z'
10-19 14:57:32.687 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:32.687 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:32.687 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:32.687 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:32.687 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:32.687 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:32.687 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:32.687 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:32.695 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:32.695 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:32.695 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:32.695 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:32.695 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:32.695Z'
10-19 14:57:32.695 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:32.695 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:32.695 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:32.695 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:32.695 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:32.695 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:32.695 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:32.695 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:32.703 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:32.703 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:32.703 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:32.703 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:32.703 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:32.703 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:32.703 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:32.703 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:32.703 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:32.703 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:32.703 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:32.703 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:32.703Z'
10-19 14:57:32.703 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:32.994  5720 14795 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:34.425 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:34.425 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:34.425 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:34.426 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:34.434 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:34.436 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:34.436 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:34.436 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:34.436 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:34.436 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:34.436 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:34.436 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:34.436 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:34.436 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:34.436 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:34.436 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:34.436 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:34.436Z'
10-19 14:57:34.436 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:34.722 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:34.722 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:34.722 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:34.722 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:34.722 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:34.722 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:34.722 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:34.722 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:34.722 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:34.722 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:34.723 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:34.723 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:34.723 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:34.723 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:34.723 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:34.723Z'
10-19 14:57:34.723 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:34.723 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:34.723 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:34.723 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:34.723 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:34.723 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:34.723 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:34.723 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:34.732 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:34.732 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:34.732 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:34.732 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:34.732 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:34.732 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:34.732 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:34.732 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:34.732 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:34.732 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:34.732 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:34.732 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:34.732Z'
10-19 14:57:34.732 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:34.732 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:34.732 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:34.733 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:34.733 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:34.733 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:34.733 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:34.733 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:34.733 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:34.733 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:34.733 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:34.733 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:34.740 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:34.740 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:34.740 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:34.740 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:34.740 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:34.740 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:34.740 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:34.740 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:34.740 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:34.740 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:34.740 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:34.740 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:34.740Z'
10-19 14:57:34.740 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:35.101  5720 14795 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:35.277 23589 24108 I ReactNativeJS: 🚨 COMPLETE RIDE BUTTON CLICKED!
10-19 14:57:35.277 23589 24108 I ReactNativeJS: '🚨 Current ride exists:', true
10-19 14:57:35.277 23589 24108 I ReactNativeJS: '🚨 Current ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:35.277 23589 24108 I ReactNativeJS: 🚨 About to call completeRide function...
10-19 14:57:35.277 23589 24108 I ReactNativeJS: '🚨 Calling completeRide with ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:35.277 23589 24108 I ReactNativeJS: 🚨 === COMPLETE RIDE FUNCTION CALLED ===
10-19 14:57:35.277 23589 24108 I ReactNativeJS: '🚨 Ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:35.278 23589 24108 I ReactNativeJS: '🚨 Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:35.278 23589 24108 I ReactNativeJS: '🚨 Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:35.547 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.auth.service.START pkg=com.google.android.gms }
10-19 14:57:35.798 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:57:35.807 21104 25680 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:57:35.824 23589 24108 I ReactNativeJS: '✅ Driver and vehicle details fetched:', { driverName: 'jai',
10-19 14:57:35.824 23589 24108 I ReactNativeJS:   driverRating: 5,
10-19 14:57:35.824 23589 24108 I ReactNativeJS:   vehicle: 
10-19 14:57:35.824 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:35.824 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:35.824 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:35.824 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:35.824 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896' } }
10-19 14:57:35.825 23589 24108 I ReactNativeJS: '✅ Ride details fetched for completion:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:35.825 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:35.825 23589 24108 I ReactNativeJS:   booking_type: 'regular',
10-19 14:57:35.825 23589 24108 I ReactNativeJS:   vehicle_type: 'sedan',
10-19 14:57:35.825 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:35.825 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:35.825 23589 24108 I ReactNativeJS: 📍 Stopping GPS tracking and calculating actual distance...
10-19 14:57:35.825 23589 24108 I ReactNativeJS: === STOPPING TRIP GPS TRACKING ===
10-19 14:57:35.825 23589 24108 I ReactNativeJS: 'Trip ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:35.825 23589 24108 I ReactNativeJS: ✅ Trip GPS tracking stopped. Total points recorded: 2
10-19 14:57:35.825 23589 24108 I ReactNativeJS: === CALCULATING TRIP DISTANCE FROM GPS (Google Maps API) ===
10-19 14:57:35.825 23589 24108 I ReactNativeJS: 'Trip ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:35.828 21104 22647 I WifiScanner: onFullResults
10-19 14:57:35.832 21104 21142 I WifiScanner: onFullResults
10-19 14:57:35.832 21104 22617 I WifiScanner: onFullResults
10-19 14:57:35.888 21104 25714 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:57:35.931 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:35.934 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:35.934 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:35.936 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:35.939 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-19 14:57:35.972 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:35.972 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:35.972 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:35.981 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:35.982 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:35.983 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:35.984 23589 24108 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-19 14:57:35.984 23589 24108 I ReactNativeJS:   heading: 0,
10-19 14:57:35.984 23589 24108 I ReactNativeJS:   altitudeAccuracy: 1.2060303688049316,
10-19 14:57:35.984 23589 24108 I ReactNativeJS:   latitude: 12.748648,
10-19 14:57:35.984 23589 24108 I ReactNativeJS:   speed: 0.030348438769578934,
10-19 14:57:35.984 23589 24108 I ReactNativeJS:   longitude: 77.8299236,
10-19 14:57:35.984 23589 24108 I ReactNativeJS:   accuracy: 6.054999828338623 }
10-19 14:57:35.988 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:35.989 23589 23589 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-19 14:57:35.997 23589 23589 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:36.003 23589 24108 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760866050789,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:     mocked: false,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:     coords: 
10-19 14:57:36.003 23589 24108 I ReactNativeJS:      { altitude: 772.5999755859375,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        heading: 244.5494842529297,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        altitudeAccuracy: 1.216892123222351,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        latitude: 12.748618,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        speed: 0.9197161793708801,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        longitude: 77.8298497,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        accuracy: 21.56399917602539 } },
10-19 14:57:36.003 23589 24108 I ReactNativeJS:   { timestamp: 1760866055935,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:     mocked: false,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:     coords: 
10-19 14:57:36.003 23589 24108 I ReactNativeJS:      { altitude: 772.5999755859375,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        heading: 0,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        altitudeAccuracy: 1.2060303688049316,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        latitude: 12.748648,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        speed: 0.030348438769578934,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        longitude: 77.8299236,
10-19 14:57:36.003 23589 24108 I ReactNativeJS:        accuracy: 6.054999828338623 } } ]
10-19 14:57:36.011 23589 24108 I ReactNativeJS: 📤 Background location update via RPC...
10-19 14:57:36.011 23589 24108 E ReactNativeJS: ❌ Supabase credentials not configured
10-19 14:57:36.013 23589 24086 I TaskService: Finished task 'background-location-task' with eventId '6bda3d20-f2b7-4da7-bebe-6baf24c127dc'.
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: ?anon_0_@1:1972213
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:36.016 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:36.021 21104 25714 I TFLite-in-PlayServices: Created interpreter.
10-19 14:57:36.047 21104 25714 I TFLite-in-PlayServices: Created interpreter.
10-19 14:57:36.065 21104 25714 I SemanticLocation: (REDACTED) [Inferrer] %s%s
10-19 14:57:36.103 23589 24108 W ReactNativeJS: ⚠️ Not enough GPS points for distance calculation
10-19 14:57:36.104 23589 24108 I ReactNativeJS: '📍 GPS distance result (raw):', { distanceKm: 0, pointsUsed: 0 }
10-19 14:57:36.104 23589 24108 W ReactNativeJS: ⚠️ GPS tracking insufficient (distance < 0.5km or < 3 points), using Google Maps API...
10-19 14:57:36.104 23589 24108 W ReactNativeJS: '⚠️ GPS distance calculation failed, using Google Maps API fallback:', [Error: Insufficient GPS data]
10-19 14:57:36.104 23589 24108 I ReactNativeJS: 📡 Calling Google Maps Directions API...
10-19 14:57:36.104 23589 24108 I ReactNativeJS: '📍 Origin:', { latitude: 12.7486171, longitude: 77.829857 }
10-19 14:57:36.105 23589 24108 I ReactNativeJS: '📍 Destination:', { latitude: 12.7112605, longitude: 77.7972197 }
10-19 14:57:36.266 23589 24108 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-19 14:57:36.267 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:36.268 23589 24108 I ReactNativeJS: 'Location:', { latitude: 12.748648,
10-19 14:57:36.268 23589 24108 I ReactNativeJS:   longitude: 77.8299236,
10-19 14:57:36.268 23589 24108 I ReactNativeJS:   accuracy: 6.054999828338623 }
10-19 14:57:36.268 23589 24108 I ReactNativeJS: 📤 Updating location via RPC...
10-19 14:57:36.426 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:36.426 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:36.427 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:36.427 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:36.461 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:36.463 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:36.463 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:36.463 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:36.463 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:36.463 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:36.463 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:36.463 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:36.463 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:36.463 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:36.463 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:36.463 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:36.463 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:36.463Z'
10-19 14:57:36.463 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:36.482 23589 24108 I ReactNativeJS: 📊 Found 3 route(s):
10-19 14:57:36.482 23589 24108 I ReactNativeJS:   Route 1: 10.70 km, 27 min
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   Route 2: 12.99 km, 32 min
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   Route 3: 10.48 km, 29 min
10-19 14:57:36.483 23589 24108 I ReactNativeJS: '✅ Google Maps Directions result (using Route 1):', { distance: '10.70 km',
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   duration: '27 min',
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   distanceMeters: 10697,
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   durationSeconds: 1624,
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   startAddress: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   endAddress: 'PQ6W+GV5, SBM Colony, Anthivadi, Hosur, Tamil Nadu 635109, India' }
10-19 14:57:36.483 23589 24108 I ReactNativeJS: '✅ Google Maps fallback distance:', { distanceKm: '10.70',
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   durationMinutes: 27,
10-19 14:57:36.483 23589 24108 I ReactNativeJS:   method: 'Google Maps Directions API' }
10-19 14:57:36.484 23589 24108 I ReactNativeJS: '🚨 Trip metrics (Real GPS-tracked distance):', { actualDistanceKm: '10.70',
10-19 14:57:36.484 23589 24108 I ReactNativeJS:   actualDurationMinutes: 27,
10-19 14:57:36.484 23589 24108 I ReactNativeJS:   gpsPointsUsed: 0,
10-19 14:57:36.484 23589 24108 I ReactNativeJS:   pickupLat: 12.7486171,
10-19 14:57:36.484 23589 24108 I ReactNativeJS:   pickupLng: 77.829857,
10-19 14:57:36.484 23589 24108 I ReactNativeJS:   dropLat: 12.7112605,
10-19 14:57:36.484 23589 24108 I ReactNativeJS:   dropLng: 77.7972197,
10-19 14:57:36.484 23589 24108 I ReactNativeJS:   method: 'GPS Breadcrumb Tracking' }
10-19 14:57:36.484 23589 24108 I ReactNativeJS: 🚨 About to call FareCalculationService.calculateAndStoreTripFare...
10-19 14:57:36.484 23589 24108 I ReactNativeJS: === CALCULATING TRIP FARE ===
10-19 14:57:36.484 23589 24108 I ReactNativeJS: 'Ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:36.484 23589 24108 I ReactNativeJS: 'Actual Distance:', 10.697, 'km'
10-19 14:57:36.484 23589 24108 I ReactNativeJS: 'Actual Duration:', 27, 'minutes'
10-19 14:57:36.559 23589 24108 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-19 14:57:36.789 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:36.789 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:36.789 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:36.789 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:36.789 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:36.789 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:36.789 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:36.789 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:36.789 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:36.789 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:36.789 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:36.789 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:36.790 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:36.790 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:36.790 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:36.790Z'
10-19 14:57:36.790 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:36.790 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:36.790 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:36.790 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:36.790 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:36.790 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:36.790 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:36.790 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:36.800 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:36.800 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:36.800 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:36.800 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:36.800 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:36.800Z'
10-19 14:57:36.800 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:36.800 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:36.800 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:36.800 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:36.800 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:36.800 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:36.800 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:36.800 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:36.807 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:36.808 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:36.808 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:36.808 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:36.808 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:36.808 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:36.808 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:36.808 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:36.808 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:36.808 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:36.808 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:36.808 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:36.808Z'
10-19 14:57:36.808 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:36.816 23589 24108 I ReactNativeJS: 'Ride details:', { booking_type: 'regular',
10-19 14:57:36.816 23589 24108 I ReactNativeJS:   vehicle_type: 'sedan',
10-19 14:57:36.816 23589 24108 I ReactNativeJS:   scheduled_time: null,
10-19 14:57:36.816 23589 24108 I ReactNativeJS:   trip_type: 'round_trip' }
10-19 14:57:36.816 23589 24108 I ReactNativeJS: 🔍 Fetching zones from database...
10-19 14:57:37.149 23589 24108 I ReactNativeJS: '✅ Zones fetched:', 2
10-19 14:57:37.149 23589 24108 I ReactNativeJS: Zone: Inner Ring - Center: 12.73913777, 77.82861132 - Radius: 7.74km
10-19 14:57:37.149 23589 24108 I ReactNativeJS: Zone: Outer Ring - Center: 12.73813315, 77.82916922 - Radius: 13.16km
10-19 14:57:37.149 23589 24108 I ReactNativeJS: === CALCULATING REGULAR FARE ===
10-19 14:57:37.150 23589 24108 I ReactNativeJS: 'Vehicle Type:', 'sedan'
10-19 14:57:37.150 23589 24108 I ReactNativeJS: 'Actual Distance:', 10.697, 'km'
10-19 14:57:37.150 23589 24108 I ReactNativeJS: 'Actual Duration:', 27, 'minutes'
10-19 14:57:37.152 23589 24108 I ReactNativeJS: 'Zones parameter received:', { isArray: true,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:   length: 2,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:   zones: 
10-19 14:57:37.152 23589 24108 I ReactNativeJS:    [ { id: '227fb7d8-2e9a-439b-b315-a28619795daa',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        name: 'Inner Ring',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        city: 'Hosur',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        state: 'Tamil Nadu',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        coordinates: 
10-19 14:57:37.152 23589 24108 I ReactNativeJS:         { type: 'circle',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:           center: { lat: 12.739137771576607, lng: 77.82861131744386 },
10-19 14:57:37.152 23589 24108 I ReactNativeJS:           radius: 7740.280633057722 },
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        center_latitude: 12.73913777,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        center_longitude: 77.82861132,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        radius_km: 7.74,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        base_fare: 50,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        per_km_rate: 12,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        surge_multiplier: 1,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        is_active: true,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        created_at: '2025-10-14T06:53:07.902747+00:00',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        updated_at: '2025-10-14T06:53:07.902747+00:00' },
10-19 14:57:37.152 23589 24108 I ReactNativeJS:      { id: '743ead3b-5e3c-4812-9bd7-d056934e7ad5',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        name: 'Outer Ring',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        city: 'Hosur',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        state: 'Tamil Nadu',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        coordinates: 
10-19 14:57:37.152 23589 24108 I ReactNativeJS:         { type: 'circle',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:           center: { lat: 12.738133154875067, lng: 77.82916921691896 },
10-19 14:57:37.152 23589 24108 I ReactNativeJS:           radius: 13156.583388351022 },
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        center_latitude: 12.73813315,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        center_longitude: 77.82916922,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        radius_km: 13.16,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        base_fare: 50,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        per_km_rate: 12,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        surge_multiplier: 1,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        is_active: true,
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        created_at: '2025-10-14T06:53:40.388587+00:00',
10-19 14:57:37.152 23589 24108 I ReactNativeJS:        updated_at: '2025-10-14T06:53:40.388587+00:00' } ] }
10-19 14:57:37.152 23589 24108 I ReactNativeJS: === FARE MATRIX QUERY DEBUG ===
10-19 14:57:37.152 23589 24108 I ReactNativeJS: Searching for fare matrix with:
10-19 14:57:37.152 23589 24108 I ReactNativeJS: '- booking_type:', 'regular'
10-19 14:57:37.153 23589 24108 I ReactNativeJS: '- vehicle_type:', 'sedan'
10-19 14:57:37.153 23589 24108 I ReactNativeJS: '- is_active:', true
10-19 14:57:37.153 23589 24108 I ReactNativeJS: 🔍 Fetching fare matrix for regular rides...
10-19 14:57:37.153 23589 24108 I ReactNativeJS: === DEBUGGING: FETCHING ALL FARE MATRIX RECORDS ===
10-19 14:57:37.191  5720 14795 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:37.454 23589 24108 I ReactNativeJS: 📊 ALL ACTIVE FARE MATRIX RECORDS:
10-19 14:57:37.455 23589 24108 I ReactNativeJS: Total records: 0
10-19 14:57:37.455 23589 24108 I ReactNativeJS: 🔍 Now fetching specific record for regular + hatchback...
10-19 14:57:37.743 23589 24108 I ReactNativeJS: === SPECIFIC QUERY RESULT ===
10-19 14:57:37.744 23589 24108 I ReactNativeJS: 'Query error:', null
10-19 14:57:37.744 23589 24108 I ReactNativeJS: 'Query result:', []
10-19 14:57:37.744 23589 24108 I ReactNativeJS: 'Number of records found:', 0
10-19 14:57:37.744 23589 24108 E ReactNativeJS: '❌ No fare matrix found for:', { booking_type: 'regular', vehicle_type: 'sedan' }
10-19 14:57:37.746 23589 24108 E ReactNativeJS: 'Exception calculating trip fare:', [Error: Fare configuration not found for this vehicle type]
10-19 14:57:37.748 23589 24108 I ReactNativeJS: '🚨 FareCalculationService result:', { success: false,
10-19 14:57:37.748 23589 24108 I ReactNativeJS:   error: 'Fare configuration not found for this vehicle type' }
10-19 14:57:37.748 23589 24108 E ReactNativeJS: '❌ Fare calculation failed:', 'Fare configuration not found for this vehicle type'
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: console.error: ❌ No fare matrix found for: {"booking_type":"regular","vehicle_type":"sedan"}, js engine: hermes, stack:
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: ?anon_0_@1:2019965
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:37.755 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: console.error: Exception calculating trip fare: Error: Fare configuration not found for this vehicle type, js engine: hermes, stack:
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: ?anon_0_@1:2010920
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: _throw@1:573576
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:37.757 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: console.error: ❌ Fare calculation failed: Fare configuration not found for this vehicle type, js engine: hermes, stack:
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: ?anon_0_@1:2002419
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:37.758 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:37.768 23589 24108 I ReactNativeJS: '🚨 CompleteRide function completed, result:', { success: false }
10-19 14:57:37.768 23589 24108 E ReactNativeJS: ❌ Failed to complete ride
10-19 14:57:37.769 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:37.769 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:37.769 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:37.769 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:37.769 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:37.769 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:37.769 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:37.769 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:37.769 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:37.769 23589 24108 I ReactNativeJS: '  - Error:', 'Failed to calculate fare: Fare configuration not found for this vehicle type'
10-19 14:57:37.769 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:37.769 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:37.769Z'
10-19 14:57:37.769 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: console.error: ❌ Failed to complete ride, js engine: hermes, stack:
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: ?anon_0_@1:1990325
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:37.769 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:37.770 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:37.770 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:37.777 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:37.777 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:37.778 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:37.778 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:37.778 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:37.778 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:37.778 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:37.778 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:37.778 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:37.778 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:37.778 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:37.778 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:37.778Z'
10-19 14:57:37.778 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:37.824 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 713), rotation: ROTATION_0
10-19 14:57:37.825 23589 23589 D BufferQueueConsumer: [](id:5c2500000015,api:0,p:-1,c:23589) connect: controlledByApp=false
10-19 14:57:37.828 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#17](f:0,a:0) constructor()
10-19 14:57:37.828 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#17](f:0,a:0) update width=1202 height=713 format=-3 mTransformHint=0
10-19 14:57:37.845 23589 24072 D BLASTBufferQueue: [VRI[MainActivity]#17](f:0,a:1) acquireNextBufferLocked size=1202x713 mFrameNumber=1 applyTransaction=true mTimestamp=629428395906900(auto) mPendingTransactions.size=0 graphicBufferId=101313983545475 transform=0
10-19 14:57:37.847 23589 23589 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@a824ad
10-19 14:57:37.875 23589 24061 D BLASTBufferQueue: [VRI[MainActivity]#17](f:0,a:1) destructor()
10-19 14:57:37.875 23589 24061 D BufferQueueConsumer: [VRI[MainActivity]#17(BLAST Consumer)17](id:5c2500000015,api:0,p:-1,c:23589) disconnect
10-19 14:57:37.878 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:37.878 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:37.932 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 744), rotation: ROTATION_0
10-19 14:57:37.932 23589 23589 D BufferQueueConsumer: [](id:5c2500000016,api:0,p:-1,c:23589) connect: controlledByApp=false
10-19 14:57:37.932 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#18](f:0,a:0) constructor()
10-19 14:57:37.932 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#18](f:0,a:0) update width=1202 height=744 format=-3 mTransformHint=0
10-19 14:57:37.944 23589 24072 D BLASTBufferQueue: [VRI[MainActivity]#18](f:0,a:1) acquireNextBufferLocked size=1202x744 mFrameNumber=1 applyTransaction=true mTimestamp=629428495289362(auto) mPendingTransactions.size=0 graphicBufferId=101313983545482 transform=0
10-19 14:57:37.952 23589 23589 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-19 14:57:37.966  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:37.967  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:37.968  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-19 14:57:37.969  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:38.427 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:38.427 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:38.428 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:38.428 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:38.441 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:38.443 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:38.443 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:38.443 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:38.443 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:38.443 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:38.443 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:38.443 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:38.443 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:38.443 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:38.443 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:38.443 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:38.443 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:38.443Z'
10-19 14:57:38.443 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:38.617  5589  6019 I ProtoXDBBufferWrapper: ProtoXDBBufferWrapper.flushToStorage():158 Flushed 6 data item(s) to storage.
10-19 14:57:38.753 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:38.753 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:38.753 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:38.753 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:38.753 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:38.753 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:38.753 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:38.753 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:38.753 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:38.753 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:38.753 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:38.753 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:38.754 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:38.754 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:38.754 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:38.754Z'
10-19 14:57:38.754 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:38.754 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:38.754 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:38.754 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:38.754 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:38.754 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:38.754 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:38.754 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:38.763 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:38.763 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:38.763 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:38.763 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:38.763 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:38.763 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:38.764Z'
10-19 14:57:38.764 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:38.764 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:38.764 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:38.764 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:38.764 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:38.764 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:38.764 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:38.764 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:38.771 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:38.771 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:38.771 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:38.771 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:38.771 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:38.771 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:38.771 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:38.771 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:38.771 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:38.771 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:38.771 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:38.771 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:38.771Z'
10-19 14:57:38.771 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:39.284  5720 14795 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:40.427 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:40.428 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:40.428 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:40.428 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:40.435 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:40.436 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:40.436 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:40.437 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:40.437 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:40.437 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:40.437 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:40.437 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:40.437 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:40.437 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:40.437 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:40.437 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:40.437 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:40.437Z'
10-19 14:57:40.437 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:40.734 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:40.734 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:40.734 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:40.734 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:40.734 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:40.734 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:40.734 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:40.734 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:40.734 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:40.734 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:40.735Z'
10-19 14:57:40.735 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:40.735 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:40.735 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:40.735 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:40.735 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:40.735 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:40.735 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:40.735 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:40.744 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:40.744 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:40.746 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:40.746 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:40.746 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:40.746Z'
10-19 14:57:40.746 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:40.746 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:40.746 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:40.746 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:40.746 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:40.746 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:40.746 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:40.746 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:40.753 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:40.754 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:40.754 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:40.754 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:40.754 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:40.754 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:40.754 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:40.754 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:40.754 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:40.754 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:40.754 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:40.754 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:40.754Z'
10-19 14:57:40.754 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:40.817 23589 23589 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@4e5ecd8
10-19 14:57:40.825 23589 24072 D HWUI    : endAllActiveAnimators on 0xb4000077800be9f0 (RippleDrawable) with handle 0xb4000077d009e830
10-19 14:57:40.832 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:57:40.838 21104 25680 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:57:40.846 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:40.846 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:40.847 23589 24061 D BLASTBufferQueue: [VRI[MainActivity]#18](f:0,a:4) destructor()
10-19 14:57:40.847 23589 24061 D BufferQueueConsumer: [VRI[MainActivity]#18(BLAST Consumer)18](id:5c2500000016,api:0,p:-1,c:23589) disconnect
10-19 14:57:40.883 23589 23589 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-19 14:57:40.887  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:40.888  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:40.888  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-19 14:57:40.889  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:40.944 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:41.168 21104 21142 I WifiScanner: onFullResults
10-19 14:57:41.169 21104 22617 I WifiScanner: onFullResults
10-19 14:57:41.170 21104 21118 I WifiScanner: onFullResults
10-19 14:57:41.184 21104 25714 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:57:41.219 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:41.220 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:41.220 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:41.221 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:41.221 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:41.223 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:41.224 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-19 14:57:41.224 23589 23589 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-19 14:57:41.229 23589 23589 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:41.230 23589 24108 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760866061160,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:     mocked: false,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:     coords: 
10-19 14:57:41.230 23589 24108 I ReactNativeJS:      { altitude: 772.5999755859375,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:        heading: 0,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:        altitudeAccuracy: 1.306030035018921,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:        latitude: 12.7486557,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:        speed: 0.05800492316484451,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:        longitude: 77.8299415,
10-19 14:57:41.230 23589 24108 I ReactNativeJS:        accuracy: 10.937000274658203 } } ]
10-19 14:57:41.232 23589 24108 I ReactNativeJS: 📤 Background location update via RPC...
10-19 14:57:41.232 23589 24108 E ReactNativeJS: ❌ Supabase credentials not configured
10-19 14:57:41.233 23589 24086 I TaskService: Finished task 'background-location-task' with eventId '95c20798-68af-4d17-b164-902eb4510ab7'.
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: ?anon_0_@1:1972213
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:41.236 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:41.386  5720 14795 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:41.486 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:41.487 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:41.487 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:41.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:41.495 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:41.496 23589 24108 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-19 14:57:41.496 23589 24108 I ReactNativeJS:   heading: 0,
10-19 14:57:41.496 23589 24108 I ReactNativeJS:   altitudeAccuracy: 1.3087915182113647,
10-19 14:57:41.496 23589 24108 I ReactNativeJS:   latitude: 12.7486777,
10-19 14:57:41.496 23589 24108 I ReactNativeJS:   speed: 0.011038081720471382,
10-19 14:57:41.496 23589 24108 I ReactNativeJS:   longitude: 77.8299781,
10-19 14:57:41.496 23589 24108 I ReactNativeJS:   accuracy: 6.76800012588501 }
10-19 14:57:41.497 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:41.504 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:41.851 23589 24108 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-19 14:57:41.851 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:41.851 23589 24108 I ReactNativeJS: 'Location:', { latitude: 12.7486777,
10-19 14:57:41.851 23589 24108 I ReactNativeJS:   longitude: 77.8299781,
10-19 14:57:41.851 23589 24108 I ReactNativeJS:   accuracy: 6.76800012588501 }
10-19 14:57:41.851 23589 24108 I ReactNativeJS: 📤 Updating location via RPC...
10-19 14:57:42.164 23589 24108 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-19 14:57:42.398 23589 24108 I ReactNativeJS: 🚨 COMPLETE RIDE BUTTON CLICKED!
10-19 14:57:42.399 23589 24108 I ReactNativeJS: '🚨 Current ride exists:', true
10-19 14:57:42.400 23589 24108 I ReactNativeJS: '🚨 Current ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:42.400 23589 24108 I ReactNativeJS: 🚨 About to call completeRide function...
10-19 14:57:42.400 23589 24108 I ReactNativeJS: '🚨 Calling completeRide with ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:42.400 23589 24108 I ReactNativeJS: 🚨 === COMPLETE RIDE FUNCTION CALLED ===
10-19 14:57:42.401 23589 24108 I ReactNativeJS: '🚨 Ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:42.401 23589 24108 I ReactNativeJS: '🚨 Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:42.402 23589 24108 I ReactNativeJS: '🚨 Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:42.429 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:42.429 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:42.429 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:42.429 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:42.455 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:42.456 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:42.457 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:42.457 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:42.457 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:42.457 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:42.457 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:42.457 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:42.457 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:42.457 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:42.457 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:42.457 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:42.457 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:42.457Z'
10-19 14:57:42.457 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:42.784 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:42.784 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:42.784 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:42.784 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:42.784 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:42.784 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:42.784Z'
10-19 14:57:42.784 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:42.784 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:42.784 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:42.784 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:42.785 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:42.785 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:42.785 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:42.785 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:42.785 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:42.785 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:42.785 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:42.794 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:42.794 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:42.794 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:42.794 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:42.794 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:42.794Z'
10-19 14:57:42.794 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:42.794 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:42.794 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:42.794 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:42.795 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:42.795 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:42.795 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:42.795 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:42.795 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:42.795 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:42.795 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:42.803 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:42.803 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:42.804 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:42.804 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:42.804 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:42.804 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:42.804 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:42.804 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:42.804 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:42.804 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:42.804 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:42.804 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:42.804Z'
10-19 14:57:42.804 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:42.985 23589 24108 I ReactNativeJS: '✅ Driver and vehicle details fetched:', { driverName: 'jai',
10-19 14:57:42.985 23589 24108 I ReactNativeJS:   driverRating: 5,
10-19 14:57:42.985 23589 24108 I ReactNativeJS:   vehicle: 
10-19 14:57:42.985 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:42.985 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:42.985 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:42.985 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:42.985 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896' } }
10-19 14:57:42.986 23589 24108 I ReactNativeJS: '✅ Ride details fetched for completion:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:42.986 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:42.986 23589 24108 I ReactNativeJS:   booking_type: 'regular',
10-19 14:57:42.986 23589 24108 I ReactNativeJS:   vehicle_type: 'sedan',
10-19 14:57:42.986 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:42.986 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:42.986 23589 24108 I ReactNativeJS: 📍 Stopping GPS tracking and calculating actual distance...
10-19 14:57:42.986 23589 24108 I ReactNativeJS: === STOPPING TRIP GPS TRACKING ===
10-19 14:57:42.986 23589 24108 I ReactNativeJS: 'Trip ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:42.986 23589 24108 I ReactNativeJS: ✅ Trip GPS tracking stopped. Total points recorded: 2
10-19 14:57:42.986 23589 24108 I ReactNativeJS: === CALCULATING TRIP DISTANCE FROM GPS (Google Maps API) ===
10-19 14:57:42.986 23589 24108 I ReactNativeJS: 'Trip ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:43.287 23589 24108 W ReactNativeJS: ⚠️ Not enough GPS points for distance calculation
10-19 14:57:43.288 23589 24108 I ReactNativeJS: '📍 GPS distance result (raw):', { distanceKm: 0, pointsUsed: 0 }
10-19 14:57:43.288 23589 24108 W ReactNativeJS: ⚠️ GPS tracking insufficient (distance < 0.5km or < 3 points), using Google Maps API...
10-19 14:57:43.289 23589 24108 W ReactNativeJS: '⚠️ GPS distance calculation failed, using Google Maps API fallback:', [Error: Insufficient GPS data]
10-19 14:57:43.289 23589 24108 I ReactNativeJS: 📡 Calling Google Maps Directions API...
10-19 14:57:43.289 23589 24108 I ReactNativeJS: '📍 Origin:', { latitude: 12.7486171, longitude: 77.829857 }
10-19 14:57:43.290 23589 24108 I ReactNativeJS: '📍 Destination:', { latitude: 12.7112605, longitude: 77.7972197 }
10-19 14:57:43.484  5720 14795 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:43.614 23589 24108 I ReactNativeJS: 📊 Found 3 route(s):
10-19 14:57:43.614 23589 24108 I ReactNativeJS:   Route 1: 10.70 km, 27 min
10-19 14:57:43.615 23589 24108 I ReactNativeJS:   Route 2: 12.99 km, 32 min
10-19 14:57:43.615 23589 24108 I ReactNativeJS:   Route 3: 10.48 km, 29 min
10-19 14:57:43.615 23589 24108 I ReactNativeJS: '✅ Google Maps Directions result (using Route 1):', { distance: '10.70 km',
10-19 14:57:43.615 23589 24108 I ReactNativeJS:   duration: '27 min',
10-19 14:57:43.615 23589 24108 I ReactNativeJS:   distanceMeters: 10697,
10-19 14:57:43.615 23589 24108 I ReactNativeJS:   durationSeconds: 1624,
10-19 14:57:43.615 23589 24108 I ReactNativeJS:   startAddress: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:43.615 23589 24108 I ReactNativeJS:   endAddress: 'PQ6W+GV5, SBM Colony, Anthivadi, Hosur, Tamil Nadu 635109, India' }
10-19 14:57:43.616 23589 24108 I ReactNativeJS: '✅ Google Maps fallback distance:', { distanceKm: '10.70',
10-19 14:57:43.616 23589 24108 I ReactNativeJS:   durationMinutes: 27,
10-19 14:57:43.616 23589 24108 I ReactNativeJS:   method: 'Google Maps Directions API' }
10-19 14:57:43.617 23589 24108 I ReactNativeJS: '🚨 Trip metrics (Real GPS-tracked distance):', { actualDistanceKm: '10.70',
10-19 14:57:43.617 23589 24108 I ReactNativeJS:   actualDurationMinutes: 27,
10-19 14:57:43.617 23589 24108 I ReactNativeJS:   gpsPointsUsed: 0,
10-19 14:57:43.617 23589 24108 I ReactNativeJS:   pickupLat: 12.7486171,
10-19 14:57:43.617 23589 24108 I ReactNativeJS:   pickupLng: 77.829857,
10-19 14:57:43.617 23589 24108 I ReactNativeJS:   dropLat: 12.7112605,
10-19 14:57:43.617 23589 24108 I ReactNativeJS:   dropLng: 77.7972197,
10-19 14:57:43.617 23589 24108 I ReactNativeJS:   method: 'GPS Breadcrumb Tracking' }
10-19 14:57:43.617 23589 24108 I ReactNativeJS: 🚨 About to call FareCalculationService.calculateAndStoreTripFare...
10-19 14:57:43.618 23589 24108 I ReactNativeJS: === CALCULATING TRIP FARE ===
10-19 14:57:43.618 23589 24108 I ReactNativeJS: 'Ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:43.618 23589 24108 I ReactNativeJS: 'Actual Distance:', 10.697, 'km'
10-19 14:57:43.618 23589 24108 I ReactNativeJS: 'Actual Duration:', 27, 'minutes'
10-19 14:57:43.924 23589 24108 I ReactNativeJS: 'Ride details:', { booking_type: 'regular',
10-19 14:57:43.924 23589 24108 I ReactNativeJS:   vehicle_type: 'sedan',
10-19 14:57:43.924 23589 24108 I ReactNativeJS:   scheduled_time: null,
10-19 14:57:43.924 23589 24108 I ReactNativeJS:   trip_type: 'round_trip' }
10-19 14:57:43.924 23589 24108 I ReactNativeJS: 🔍 Fetching zones from database...
10-19 14:57:44.399 23589 24108 I ReactNativeJS: '✅ Zones fetched:', 2
10-19 14:57:44.399 23589 24108 I ReactNativeJS: Zone: Inner Ring - Center: 12.73913777, 77.82861132 - Radius: 7.74km
10-19 14:57:44.399 23589 24108 I ReactNativeJS: Zone: Outer Ring - Center: 12.73813315, 77.82916922 - Radius: 13.16km
10-19 14:57:44.399 23589 24108 I ReactNativeJS: === CALCULATING REGULAR FARE ===
10-19 14:57:44.399 23589 24108 I ReactNativeJS: 'Vehicle Type:', 'sedan'
10-19 14:57:44.400 23589 24108 I ReactNativeJS: 'Actual Distance:', 10.697, 'km'
10-19 14:57:44.400 23589 24108 I ReactNativeJS: 'Actual Duration:', 27, 'minutes'
10-19 14:57:44.406 23589 24108 I ReactNativeJS: 'Zones parameter received:', { isArray: true,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:   length: 2,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:   zones: 
10-19 14:57:44.406 23589 24108 I ReactNativeJS:    [ { id: '227fb7d8-2e9a-439b-b315-a28619795daa',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        name: 'Inner Ring',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        city: 'Hosur',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        state: 'Tamil Nadu',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        coordinates: 
10-19 14:57:44.406 23589 24108 I ReactNativeJS:         { type: 'circle',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:           center: { lat: 12.739137771576607, lng: 77.82861131744386 },
10-19 14:57:44.406 23589 24108 I ReactNativeJS:           radius: 7740.280633057722 },
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        center_latitude: 12.73913777,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        center_longitude: 77.82861132,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        radius_km: 7.74,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        base_fare: 50,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        per_km_rate: 12,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        surge_multiplier: 1,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        is_active: true,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        created_at: '2025-10-14T06:53:07.902747+00:00',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        updated_at: '2025-10-14T06:53:07.902747+00:00' },
10-19 14:57:44.406 23589 24108 I ReactNativeJS:      { id: '743ead3b-5e3c-4812-9bd7-d056934e7ad5',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        name: 'Outer Ring',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        city: 'Hosur',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        state: 'Tamil Nadu',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        coordinates: 
10-19 14:57:44.406 23589 24108 I ReactNativeJS:         { type: 'circle',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:           center: { lat: 12.738133154875067, lng: 77.82916921691896 },
10-19 14:57:44.406 23589 24108 I ReactNativeJS:           radius: 13156.583388351022 },
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        center_latitude: 12.73813315,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        center_longitude: 77.82916922,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        radius_km: 13.16,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        base_fare: 50,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        per_km_rate: 12,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        surge_multiplier: 1,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        is_active: true,
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        created_at: '2025-10-14T06:53:40.388587+00:00',
10-19 14:57:44.406 23589 24108 I ReactNativeJS:        updated_at: '2025-10-14T06:53:40.388587+00:00' } ] }
10-19 14:57:44.406 23589 24108 I ReactNativeJS: === FARE MATRIX QUERY DEBUG ===
10-19 14:57:44.406 23589 24108 I ReactNativeJS: Searching for fare matrix with:
10-19 14:57:44.406 23589 24108 I ReactNativeJS: '- booking_type:', 'regular'
10-19 14:57:44.406 23589 24108 I ReactNativeJS: '- vehicle_type:', 'sedan'
10-19 14:57:44.406 23589 24108 I ReactNativeJS: '- is_active:', true
10-19 14:57:44.407 23589 24108 I ReactNativeJS: 🔍 Fetching fare matrix for regular rides...
10-19 14:57:44.407 23589 24108 I ReactNativeJS: === DEBUGGING: FETCHING ALL FARE MATRIX RECORDS ===
10-19 14:57:44.430 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:44.430 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:44.430 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:44.431 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:44.455 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:44.456 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:44.456 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:44.457 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:44.457 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:44.457 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:44.457 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:44.457 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:44.457 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.457 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:44.457 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:44.457 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:44.457 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:44.457Z'
10-19 14:57:44.457 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:44.691 23589 24108 I ReactNativeJS: 📊 ALL ACTIVE FARE MATRIX RECORDS:
10-19 14:57:44.692 23589 24108 I ReactNativeJS: Total records: 0
10-19 14:57:44.692 23589 24108 I ReactNativeJS: 🔍 Now fetching specific record for regular + hatchback...
10-19 14:57:44.795 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:44.795 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:44.795 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:44.795 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:44.795 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:44.795 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:44.795 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:44.795 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:44.795 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:44.795 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:44.795 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:44.795 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:44.796 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:44.796 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:44.796 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:44.796Z'
10-19 14:57:44.796 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:44.796 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:44.796 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:44.796 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:44.796 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:44.796 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:44.796 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:44.796 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:44.805 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:44.805 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:44.806 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:44.806 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:44.806 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:44.806Z'
10-19 14:57:44.806 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:44.806 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:44.806 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:44.806 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:44.806 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:44.806 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:44.806 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:44.806 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:44.813 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:44.813 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:44.813 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:44.813 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:44.813 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:44.813 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:44.813 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:44.813 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.813 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:44.813 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:44.813 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:44.813 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:44.813Z'
10-19 14:57:44.813 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:44.966 23589 24108 I ReactNativeJS: === SPECIFIC QUERY RESULT ===
10-19 14:57:44.967 23589 24108 I ReactNativeJS: 'Query error:', null
10-19 14:57:44.967 23589 24108 I ReactNativeJS: 'Query result:', []
10-19 14:57:44.967 23589 24108 I ReactNativeJS: 'Number of records found:', 0
10-19 14:57:44.967 23589 24108 E ReactNativeJS: '❌ No fare matrix found for:', { booking_type: 'regular', vehicle_type: 'sedan' }
10-19 14:57:44.968 23589 24108 E ReactNativeJS: 'Exception calculating trip fare:', [Error: Fare configuration not found for this vehicle type]
10-19 14:57:44.969 23589 24108 I ReactNativeJS: '🚨 FareCalculationService result:', { success: false,
10-19 14:57:44.969 23589 24108 I ReactNativeJS:   error: 'Fare configuration not found for this vehicle type' }
10-19 14:57:44.969 23589 24108 E ReactNativeJS: '❌ Fare calculation failed:', 'Fare configuration not found for this vehicle type'
10-19 14:57:44.989 23589 24108 I ReactNativeJS: '🚨 CompleteRide function completed, result:', { success: false }
10-19 14:57:44.989 23589 24108 E ReactNativeJS: ❌ Failed to complete ride
10-19 14:57:44.990 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:44.990 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:44.990 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:44.990 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:44.990 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:44.990 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:44.990 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:44.990 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.990 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:44.990 23589 24108 I ReactNativeJS: '  - Error:', 'Failed to calculate fare: Fare configuration not found for this vehicle type'
10-19 14:57:44.990 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:44.990 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:44.990Z'
10-19 14:57:44.990 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: console.error: ❌ No fare matrix found for: {"booking_type":"regular","vehicle_type":"sedan"}, js engine: hermes, stack:
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: ?anon_0_@1:2019965
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:44.996 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:44.998 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:44.998 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:44.998 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:44.998 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:44.998 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:44.998 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:44.998 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:44.998 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:44.998 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:44.999 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:44.999 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:44.999 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:44.999Z'
10-19 14:57:44.999 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: console.error: Exception calculating trip fare: Error: Fare configuration not found for this vehicle type, js engine: hermes, stack:
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: ?anon_0_@1:2010920
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: _throw@1:573576
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:45.001 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: console.error: ❌ Fare calculation failed: Fare configuration not found for this vehicle type, js engine: hermes, stack:
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: ?anon_0_@1:2002419
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:45.006 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: console.error: ❌ Failed to complete ride, js engine: hermes, stack:
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: ?anon_0_@1:1990325
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:45.009 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:45.012 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:45.012 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:45.153 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 713), rotation: ROTATION_0
10-19 14:57:45.154 23589 23589 D BufferQueueConsumer: [](id:5c2500000017,api:0,p:-1,c:23589) connect: controlledByApp=false
10-19 14:57:45.155 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#19](f:0,a:0) constructor()
10-19 14:57:45.155 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#19](f:0,a:0) update width=1202 height=713 format=-3 mTransformHint=0
10-19 14:57:45.172 23589 24072 D BLASTBufferQueue: [VRI[MainActivity]#19](f:0,a:1) acquireNextBufferLocked size=1202x713 mFrameNumber=1 applyTransaction=true mTimestamp=629435722820131(auto) mPendingTransactions.size=0 graphicBufferId=101313983545489 transform=0
10-19 14:57:45.190 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 744), rotation: ROTATION_0
10-19 14:57:45.190 23589 23589 D BufferQueueConsumer: [](id:5c2500000018,api:0,p:-1,c:23589) connect: controlledByApp=false
10-19 14:57:45.190 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#20](f:0,a:0) constructor()
10-19 14:57:45.190 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#20](f:0,a:0) update width=1202 height=744 format=-3 mTransformHint=0
10-19 14:57:45.198 23589 24072 D BLASTBufferQueue: [VRI[MainActivity]#20](f:0,a:1) acquireNextBufferLocked size=1202x744 mFrameNumber=1 applyTransaction=true mTimestamp=629435749620131(auto) mPendingTransactions.size=0 graphicBufferId=101313983545496 transform=0
10-19 14:57:45.338 23589 24108 I ReactNativeJS: 🚨 COMPLETE RIDE BUTTON CLICKED!
10-19 14:57:45.338 23589 24108 I ReactNativeJS: '🚨 Current ride exists:', true
10-19 14:57:45.338 23589 24108 I ReactNativeJS: '🚨 Current ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:45.338 23589 24108 I ReactNativeJS: 🚨 About to call completeRide function...
10-19 14:57:45.338 23589 24108 I ReactNativeJS: '🚨 Calling completeRide with ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:45.338 23589 24108 I ReactNativeJS: 🚨 === COMPLETE RIDE FUNCTION CALLED ===
10-19 14:57:45.338 23589 24108 I ReactNativeJS: '🚨 Ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:45.338 23589 24108 I ReactNativeJS: '🚨 Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:45.338 23589 24108 I ReactNativeJS: '🚨 Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:45.587  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:45.896 23589 24108 I ReactNativeJS: '✅ Driver and vehicle details fetched:', { driverName: 'jai',
10-19 14:57:45.896 23589 24108 I ReactNativeJS:   driverRating: 5,
10-19 14:57:45.896 23589 24108 I ReactNativeJS:   vehicle: 
10-19 14:57:45.896 23589 24108 I ReactNativeJS:    { id: '95c87077-b016-49de-a05b-dbfd5e383a1a',
10-19 14:57:45.896 23589 24108 I ReactNativeJS:      make: 'BMW',
10-19 14:57:45.896 23589 24108 I ReactNativeJS:      model: '450ld',
10-19 14:57:45.896 23589 24108 I ReactNativeJS:      color: 'black',
10-19 14:57:45.896 23589 24108 I ReactNativeJS:      registration_number: 'KA 01025896' } }
10-19 14:57:45.898 23589 24108 I ReactNativeJS: '✅ Ride details fetched for completion:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:45.898 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:45.898 23589 24108 I ReactNativeJS:   booking_type: 'regular',
10-19 14:57:45.898 23589 24108 I ReactNativeJS:   vehicle_type: 'sedan',
10-19 14:57:45.898 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:45.898 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:45.898 23589 24108 I ReactNativeJS: 📍 Stopping GPS tracking and calculating actual distance...
10-19 14:57:45.898 23589 24108 I ReactNativeJS: === STOPPING TRIP GPS TRACKING ===
10-19 14:57:45.898 23589 24108 I ReactNativeJS: 'Trip ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:45.899 23589 24108 I ReactNativeJS: ✅ Trip GPS tracking stopped. Total points recorded: 2
10-19 14:57:45.899 23589 24108 I ReactNativeJS: === CALCULATING TRIP DISTANCE FROM GPS (Google Maps API) ===
10-19 14:57:45.899 23589 24108 I ReactNativeJS: 'Trip ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:46.062 23589 23589 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@bfc5107
10-19 14:57:46.071 23589 24072 D HWUI    : endAllActiveAnimators on 0xb400007780195e00 (RippleDrawable) with handle 0xb4000077d00b9b30
10-19 14:57:46.088 23589 24062 D BLASTBufferQueue: [VRI[MainActivity]#20](f:0,a:4) destructor()
10-19 14:57:46.088 23589 24062 D BufferQueueConsumer: [VRI[MainActivity]#20(BLAST Consumer)20](id:5c2500000018,api:0,p:-1,c:23589) disconnect
10-19 14:57:46.094 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:46.094 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:46.168 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:57:46.175 21104 25714 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:57:46.197 23589 24108 W ReactNativeJS: ⚠️ Not enough GPS points for distance calculation
10-19 14:57:46.197 23589 24108 I ReactNativeJS: '📍 GPS distance result (raw):', { distanceKm: 0, pointsUsed: 0 }
10-19 14:57:46.197 23589 24108 W ReactNativeJS: ⚠️ GPS tracking insufficient (distance < 0.5km or < 3 points), using Google Maps API...
10-19 14:57:46.197 23589 24108 W ReactNativeJS: '⚠️ GPS distance calculation failed, using Google Maps API fallback:', [Error: Insufficient GPS data]
10-19 14:57:46.197 23589 24108 I ReactNativeJS: 📡 Calling Google Maps Directions API...
10-19 14:57:46.197 23589 24108 I ReactNativeJS: '📍 Origin:', { latitude: 12.7486171, longitude: 77.829857 }
10-19 14:57:46.198 23589 24108 I ReactNativeJS: '📍 Destination:', { latitude: 12.7112605, longitude: 77.7972197 }
10-19 14:57:46.202 21104 21199 I WifiScanner: onFullResults
10-19 14:57:46.203 21104 21142 I WifiScanner: onFullResults
10-19 14:57:46.203 21104 22617 I WifiScanner: onFullResults
10-19 14:57:46.239 21104 25647 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:57:46.263 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:46.265 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:46.265 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:46.266 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:46.267 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:46.268 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-19 14:57:46.431 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:46.431 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:46.431 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:46.431 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:46.458 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:46.460 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:46.460 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:46.460 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:46.460 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:46.460 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:46.460 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:46.460 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:46.461 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:46.461 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:46.461 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:46.461 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:46.461 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:46.461Z'
10-19 14:57:46.461 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:46.475 23589 24108 I ReactNativeJS: 📊 Found 3 route(s):
10-19 14:57:46.475 23589 24108 I ReactNativeJS:   Route 1: 10.70 km, 27 min
10-19 14:57:46.475 23589 24108 I ReactNativeJS:   Route 2: 12.99 km, 32 min
10-19 14:57:46.475 23589 24108 I ReactNativeJS:   Route 3: 10.48 km, 29 min
10-19 14:57:46.476 23589 24108 I ReactNativeJS: '✅ Google Maps Directions result (using Route 1):', { distance: '10.70 km',
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   duration: '27 min',
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   distanceMeters: 10697,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   durationSeconds: 1624,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   startAddress: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   endAddress: 'PQ6W+GV5, SBM Colony, Anthivadi, Hosur, Tamil Nadu 635109, India' }
10-19 14:57:46.476 23589 24108 I ReactNativeJS: '✅ Google Maps fallback distance:', { distanceKm: '10.70',
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   durationMinutes: 27,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   method: 'Google Maps Directions API' }
10-19 14:57:46.476 23589 24108 I ReactNativeJS: '🚨 Trip metrics (Real GPS-tracked distance):', { actualDistanceKm: '10.70',
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   actualDurationMinutes: 27,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   gpsPointsUsed: 0,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   pickupLat: 12.7486171,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   pickupLng: 77.829857,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   dropLat: 12.7112605,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   dropLng: 77.7972197,
10-19 14:57:46.476 23589 24108 I ReactNativeJS:   method: 'GPS Breadcrumb Tracking' }
10-19 14:57:46.476 23589 24108 I ReactNativeJS: 🚨 About to call FareCalculationService.calculateAndStoreTripFare...
10-19 14:57:46.476 23589 24108 I ReactNativeJS: === CALCULATING TRIP FARE ===
10-19 14:57:46.476 23589 24108 I ReactNativeJS: 'Ride ID:', '9af31e93-dea1-44d0-ba28-80396f18e004'
10-19 14:57:46.476 23589 24108 I ReactNativeJS: 'Actual Distance:', 10.697, 'km'
10-19 14:57:46.476 23589 24108 I ReactNativeJS: 'Actual Duration:', 27, 'minutes'
10-19 14:57:46.490 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:46.490 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:46.490 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:46.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:46.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:46.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:46.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:46.493 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:46.759 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:46.759 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:46.759 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:46.759 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:46.759 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:46.759 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:46.759 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:46.759 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:46.759 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:46.760 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:46.760 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:46.760 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:46.760 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:46.760 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:46.760 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:46.760Z'
10-19 14:57:46.760 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:46.760 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:46.760 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:46.760 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:46.761 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:46.761 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:46.761 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:46.761 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:46.761 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:46.761 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:46.761 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:46.761 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:46.770 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:46.770 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:46.770 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:46.770 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:46.770 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:46.770Z'
10-19 14:57:46.770 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:46.770 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:46.770 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:46.770 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:46.770 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:46.770 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:46.770 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:46.770 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:46.780 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:46.780 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:46.780 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:46.780 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:46.780 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:46.780 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:46.780 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:46.780 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:46.780 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:46.780 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:46.780 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:46.780 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:46.780Z'
10-19 14:57:46.780 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:46.823 23589 24108 I ReactNativeJS: 'Ride details:', { booking_type: 'regular',
10-19 14:57:46.823 23589 24108 I ReactNativeJS:   vehicle_type: 'sedan',
10-19 14:57:46.823 23589 24108 I ReactNativeJS:   scheduled_time: null,
10-19 14:57:46.823 23589 24108 I ReactNativeJS:   trip_type: 'round_trip' }
10-19 14:57:46.823 23589 24108 I ReactNativeJS: 🔍 Fetching zones from database...
10-19 14:57:46.913 23589 23589 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@776c9a5
10-19 14:57:46.919 23589 24072 D HWUI    : endAllActiveAnimators on 0xb400007780152480 (RippleDrawable) with handle 0xb4000077d00bdc70
10-19 14:57:46.928 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:46.928 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:46.932 23589 24061 D BLASTBufferQueue: [VRI[MainActivity]#19](f:0,a:4) destructor()
10-19 14:57:46.933 23589 24061 D BufferQueueConsumer: [VRI[MainActivity]#19(BLAST Consumer)19](id:5c2500000017,api:0,p:-1,c:23589) disconnect
10-19 14:57:46.963 23589 23589 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-19 14:57:46.967  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:46.968  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:46.970  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-19 14:57:46.971  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:47.221 23589 24108 I ReactNativeJS: '✅ Zones fetched:', 2
10-19 14:57:47.221 23589 24108 I ReactNativeJS: Zone: Inner Ring - Center: 12.73913777, 77.82861132 - Radius: 7.74km
10-19 14:57:47.221 23589 24108 I ReactNativeJS: Zone: Outer Ring - Center: 12.73813315, 77.82916922 - Radius: 13.16km
10-19 14:57:47.221 23589 24108 I ReactNativeJS: === CALCULATING REGULAR FARE ===
10-19 14:57:47.221 23589 24108 I ReactNativeJS: 'Vehicle Type:', 'sedan'
10-19 14:57:47.221 23589 24108 I ReactNativeJS: 'Actual Distance:', 10.697, 'km'
10-19 14:57:47.221 23589 24108 I ReactNativeJS: 'Actual Duration:', 27, 'minutes'
10-19 14:57:47.225 23589 24108 I ReactNativeJS: 'Zones parameter received:', { isArray: true,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:   length: 2,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:   zones: 
10-19 14:57:47.225 23589 24108 I ReactNativeJS:    [ { id: '227fb7d8-2e9a-439b-b315-a28619795daa',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        name: 'Inner Ring',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        city: 'Hosur',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        state: 'Tamil Nadu',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        coordinates: 
10-19 14:57:47.225 23589 24108 I ReactNativeJS:         { type: 'circle',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:           center: { lat: 12.739137771576607, lng: 77.82861131744386 },
10-19 14:57:47.225 23589 24108 I ReactNativeJS:           radius: 7740.280633057722 },
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        center_latitude: 12.73913777,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        center_longitude: 77.82861132,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        radius_km: 7.74,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        base_fare: 50,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        per_km_rate: 12,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        surge_multiplier: 1,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        is_active: true,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        created_at: '2025-10-14T06:53:07.902747+00:00',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        updated_at: '2025-10-14T06:53:07.902747+00:00' },
10-19 14:57:47.225 23589 24108 I ReactNativeJS:      { id: '743ead3b-5e3c-4812-9bd7-d056934e7ad5',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        name: 'Outer Ring',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        city: 'Hosur',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        state: 'Tamil Nadu',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        coordinates: 
10-19 14:57:47.225 23589 24108 I ReactNativeJS:         { type: 'circle',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:           center: { lat: 12.738133154875067, lng: 77.82916921691896 },
10-19 14:57:47.225 23589 24108 I ReactNativeJS:           radius: 13156.583388351022 },
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        center_latitude: 12.73813315,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        center_longitude: 77.82916922,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        radius_km: 13.16,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        base_fare: 50,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        per_km_rate: 12,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        surge_multiplier: 1,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        is_active: true,
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        created_at: '2025-10-14T06:53:40.388587+00:00',
10-19 14:57:47.225 23589 24108 I ReactNativeJS:        updated_at: '2025-10-14T06:53:40.388587+00:00' } ] }
10-19 14:57:47.225 23589 24108 I ReactNativeJS: === FARE MATRIX QUERY DEBUG ===
10-19 14:57:47.225 23589 24108 I ReactNativeJS: Searching for fare matrix with:
10-19 14:57:47.225 23589 24108 I ReactNativeJS: '- booking_type:', 'regular'
10-19 14:57:47.225 23589 24108 I ReactNativeJS: '- vehicle_type:', 'sedan'
10-19 14:57:47.225 23589 24108 I ReactNativeJS: '- is_active:', true
10-19 14:57:47.225 23589 24108 I ReactNativeJS: 🔍 Fetching fare matrix for regular rides...
10-19 14:57:47.225 23589 24108 I ReactNativeJS: === DEBUGGING: FETCHING ALL FARE MATRIX RECORDS ===
10-19 14:57:47.515 23589 24108 I ReactNativeJS: 📊 ALL ACTIVE FARE MATRIX RECORDS:
10-19 14:57:47.515 23589 24108 I ReactNativeJS: Total records: 0
10-19 14:57:47.515 23589 24108 I ReactNativeJS: 🔍 Now fetching specific record for regular + hatchback...
10-19 14:57:47.698  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:47.821 23589 24108 I ReactNativeJS: === SPECIFIC QUERY RESULT ===
10-19 14:57:47.821 23589 24108 I ReactNativeJS: 'Query error:', null
10-19 14:57:47.821 23589 24108 I ReactNativeJS: 'Query result:', []
10-19 14:57:47.822 23589 24108 I ReactNativeJS: 'Number of records found:', 0
10-19 14:57:47.822 23589 24108 E ReactNativeJS: '❌ No fare matrix found for:', { booking_type: 'regular', vehicle_type: 'sedan' }
10-19 14:57:47.824 23589 24108 E ReactNativeJS: 'Exception calculating trip fare:', [Error: Fare configuration not found for this vehicle type]
10-19 14:57:47.827 23589 24108 I ReactNativeJS: '🚨 FareCalculationService result:', { success: false,
10-19 14:57:47.827 23589 24108 I ReactNativeJS:   error: 'Fare configuration not found for this vehicle type' }
10-19 14:57:47.827 23589 24108 E ReactNativeJS: '❌ Fare calculation failed:', 'Fare configuration not found for this vehicle type'
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: console.error: ❌ No fare matrix found for: {"booking_type":"regular","vehicle_type":"sedan"}, js engine: hermes, stack:
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: ?anon_0_@1:2019965
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:47.834 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: console.error: Exception calculating trip fare: Error: Fare configuration not found for this vehicle type, js engine: hermes, stack:
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: ?anon_0_@1:2010920
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: _throw@1:573576
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:47.840 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:47.849 23589 24108 I ReactNativeJS: '🚨 CompleteRide function completed, result:', { success: false }
10-19 14:57:47.849 23589 24108 E ReactNativeJS: ❌ Failed to complete ride
10-19 14:57:47.850 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:47.850 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:47.850 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:47.850 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:47.850 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:47.850 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:47.850 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:47.850 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:47.850 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:47.851 23589 24108 I ReactNativeJS: '  - Error:', 'Failed to calculate fare: Fare configuration not found for this vehicle type'
10-19 14:57:47.851 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:47.851 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:47.851Z'
10-19 14:57:47.851 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: console.error: ❌ Fare calculation failed: Fare configuration not found for this vehicle type, js engine: hermes, stack:
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: ?anon_0_@1:2002419
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:47.853 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: console.error: ❌ Failed to complete ride, js engine: hermes, stack:
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: ?anon_0_@1:1990325
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:47.857 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:47.858 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:47.858 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:47.859 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:47.859 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:47.859 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:47.859 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:47.859 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:47.859 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:47.859 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:47.859 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:47.859 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:47.859 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:47.859 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:47.859 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:47.859Z'
10-19 14:57:47.859 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:47.946 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:47.946 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:48.018 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 744), rotation: ROTATION_0
10-19 14:57:48.018 23589 23589 D BufferQueueConsumer: [](id:5c2500000019,api:0,p:-1,c:23589) connect: controlledByApp=false
10-19 14:57:48.019 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#21](f:0,a:0) constructor()
10-19 14:57:48.019 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#21](f:0,a:0) update width=1202 height=744 format=-3 mTransformHint=0
10-19 14:57:48.035 23589 24072 D BLASTBufferQueue: [VRI[MainActivity]#21](f:0,a:1) acquireNextBufferLocked size=1202x744 mFrameNumber=1 applyTransaction=true mTimestamp=629438584659516(auto) mPendingTransactions.size=0 graphicBufferId=101313983545503 transform=0
10-19 14:57:48.108 14485 14485 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-19 14:57:48.123 23589 23589 I BackgroundFetchTaskConsumer: Starting an alarm for task 'background-fetch-task'.
10-19 14:57:48.136 14485 14485 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-19 14:57:48.140 14485 14485 D BufferQueueConsumer: [](id:389500000034,api:0,p:-1,c:14485) connect: controlledByApp=false
10-19 14:57:48.147 14485 14485 D BLASTBufferQueue: [VRI[Launcher]#52](f:0,a:0) constructor()
10-19 14:57:48.148 14485 14485 D BLASTBufferQueue: [VRI[Launcher]#52](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-19 14:57:48.176 14485 14785 D BLASTBufferQueue: [VRI[Launcher]#52](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=629438726883593(auto) mPendingTransactions.size=0 graphicBufferId=62212601282928 transform=0
10-19 14:57:48.178 14485 14485 I bnlz    : onStart
10-19 14:57:48.205 14485 14485 I bldh    : (REDACTED) [%s] onStart()
10-19 14:57:48.206 14485 14485 I blfn    : Reloading theme data
10-19 14:57:48.237 14485 14485 I bnlz    : onResume
10-19 14:57:48.271  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:48.273  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:48.273  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-19 14:57:48.274  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:48.576  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdownVoiceInternal():148 shutdownVoiceInternal()
10-19 14:57:48.576  5589  5589 W NotificationCenter: NotificationCenter.unregisterListener():480 Listener hxw@a3594cd was not registered for notification class nhu
10-19 14:57:48.885 23589 23589 D VRI[MainActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-19 14:57:48.886 23589 23589 D VRI[MainActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-19 14:57:48.901 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 744), rotation: ROTATION_0
10-19 14:57:48.901 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#21](f:0,a:4) destructor()
10-19 14:57:48.901 23589 23589 D BufferQueueConsumer: [VRI[MainActivity]#21(BLAST Consumer)21](id:5c2500000019,api:0,p:-1,c:23589) disconnect
10-19 14:57:48.915 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-19 14:57:48.915 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#10](f:0,a:4) destructor()
10-19 14:57:48.916 23589 23589 D BufferQueueConsumer: [VRI[MainActivity]#10(BLAST Consumer)10](id:5c250000000d,api:0,p:-1,c:23589) disconnect
10-19 14:57:48.923  1870  3779 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 23589, arg4: 1678, name: com.a1taxi.driverpro
10-19 14:57:49.795  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:50.958  7096  7120 I native  : I0000 00:00:1760866070.957982    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760866070848432
10-19 14:57:50.977  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-19 14:57:51.202 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:57:51.211 21104 25647 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:57:51.449 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:51.455 23589 23589 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-19 14:57:51.466 23589 23589 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:51.469 23589 24108 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760866061435,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:     mocked: false,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:     coords: 
10-19 14:57:51.469 23589 24108 I ReactNativeJS:      { altitude: 772.5999755859375,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        heading: 0,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        altitudeAccuracy: 1.3087915182113647,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        latitude: 12.7486777,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        speed: 0.011038081720471382,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        longitude: 77.8299781,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        accuracy: 6.76800012588501 } },
10-19 14:57:51.469 23589 24108 I ReactNativeJS:   { timestamp: 1760866066438,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:     mocked: false,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:     coords: 
10-19 14:57:51.469 23589 24108 I ReactNativeJS:      { altitude: 772.5999755859375,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        heading: 0,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        altitudeAccuracy: 1.2770657539367676,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        latitude: 12.7486775,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        speed: 0.001902183168567717,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        longitude: 77.8299848,
10-19 14:57:51.469 23589 24108 I ReactNativeJS:        accuracy: 6.068999767303467 } } ]
10-19 14:57:51.476 23589 24108 I ReactNativeJS: 📤 Background location update via RPC...
10-19 14:57:51.476 23589 24108 E ReactNativeJS: ❌ Supabase credentials not configured
10-19 14:57:51.480 23589 24086 I TaskService: Finished task 'background-location-task' with eventId '088dd6fc-a85b-4b7e-b794-33424b07d8e1'.
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: ?anon_0_@1:1972213
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:51.482 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:51.486 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:51.486 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:51.486 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:51.487 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:51.487 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:51.493 21104 25714 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-19 14:57:51.557 21104 21143 I WifiScanner: onFullResults
10-19 14:57:51.558 21104 23957 I WifiScanner: onFullResults
10-19 14:57:51.559 21104 21199 I WifiScanner: onFullResults
10-19 14:57:51.570 21104 25647 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:57:51.610 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:51.611 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:51.611 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:51.611 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:51.611 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:51.611 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:51.614 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:51.616 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-19 14:57:51.894 14485 14485 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-19 14:57:51.894 14485 14485 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-19 14:57:51.976  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:53.344  1870  2894 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 882, arg2: 550, arg3: 23589, arg4: 1678, name: com.a1taxi.driverpro
10-19 14:57:53.346 23589 23589 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-19 14:57:53.349 23589 23589 I BackgroundFetchTaskConsumer: Stopping an alarm for task 'background-fetch-task'.
10-19 14:57:53.357 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:53.357 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:53.357 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:53.357 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:53.374 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 744), rotation: ROTATION_0
10-19 14:57:53.375 23589 23589 D BufferQueueConsumer: [](id:5c250000001a,api:0,p:-1,c:23589) connect: controlledByApp=false
10-19 14:57:53.375 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#22](f:0,a:0) constructor()
10-19 14:57:53.375 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#22](f:0,a:0) update width=1202 height=744 format=-3 mTransformHint=0
10-19 14:57:53.375 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:53.378 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:53.378 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:53.378 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:53.378 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:53.378 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:53.378 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:53.378 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:53.379 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:53.379 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:53.379 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:53.379 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:53.379 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:53.379Z'
10-19 14:57:53.379 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:53.384 23589 24072 D BLASTBufferQueue: [VRI[MainActivity]#22](f:0,a:1) acquireNextBufferLocked size=1202x744 mFrameNumber=1 applyTransaction=true mTimestamp=629443934460824(auto) mPendingTransactions.size=0 graphicBufferId=101313983545511 transform=0
10-19 14:57:53.392 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-19 14:57:53.393 23589 23589 D BufferQueueConsumer: [](id:5c250000001b,api:0,p:-1,c:23589) connect: controlledByApp=false
10-19 14:57:53.393 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#23](f:0,a:0) constructor()
10-19 14:57:53.393 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#23](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-19 14:57:53.414 23589 24072 D BLASTBufferQueue: [VRI[MainActivity]#23](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=629443965560439(auto) mPendingTransactions.size=0 graphicBufferId=101313983545517 transform=0
10-19 14:57:53.427 23589 23589 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-19 14:57:53.428 23589 24108 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760866071436,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:     mocked: false,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:     coords: 
10-19 14:57:53.428 23589 24108 I ReactNativeJS:      { altitude: 772.5999755859375,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:        heading: 0,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:        altitudeAccuracy: 1.3270431756973267,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:        latitude: 12.7486719,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:        speed: 0.000055304924899246544,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:        longitude: 77.8299802,
10-19 14:57:53.428 23589 24108 I ReactNativeJS:        accuracy: 2.5 } } ]
10-19 14:57:53.432 23589 24108 I ReactNativeJS: 📤 Background location update via RPC...
10-19 14:57:53.432 23589 24108 E ReactNativeJS: ❌ Supabase credentials not configured
10-19 14:57:53.436 14485 14485 I bnlz    : onPause
10-19 14:57:53.438 23589 24086 I TaskService: Finished task 'background-location-task' with eventId '3f8dd5ca-04ba-47cf-bf31-73f2aaaabbb1'.
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: ?anon_0_@1:1972213
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:57:53.442 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:57:53.504 14485 14515 V ClearcutMetricXmitter: Transmission is done.
10-19 14:57:53.648 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:53.648 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:53.648 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:53.648 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:53.648 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:53.648 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:53.648 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:53.648 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:53.648 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:53.648 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:53.648 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:53.649 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:53.649 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:53.649 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:53.649 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:53.649Z'
10-19 14:57:53.649 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:53.649 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:53.649 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:53.649 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:53.649 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:53.649 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:53.649 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:53.649 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:53.660 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:53.660 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:53.660 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:53.660 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:53.660 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:53.660 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:53.660 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:53.661Z'
10-19 14:57:53.661 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:53.661 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:53.661 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:53.661 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:53.661 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:53.661 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:53.661 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:53.661 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:53.669 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:53.669 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:53.669 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:53.669 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:53.669 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:53.669 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:53.669 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:53.669 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:53.669 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:53.669 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:53.669 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:53.669 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:53.669Z'
10-19 14:57:53.669 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:53.892 14485 14485 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-19 14:57:53.920 14485 14485 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-19 14:57:53.921 14485 14485 D BLASTBufferQueue: [VRI[Launcher]#52](f:0,a:2) destructor()
10-19 14:57:53.921 14485 14485 D BufferQueueConsumer: [VRI[Launcher]#52(BLAST Consumer)52](id:389500000034,api:0,p:-1,c:14485) disconnect
10-19 14:57:53.923 14485 14485 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-19 14:57:53.924 14485 14485 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-19 14:57:53.927 14485 14485 I bnlz    : onStop
10-19 14:57:54.090  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:54.291 23589 23589 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@4d39c8b
10-19 14:57:54.296 23589 24072 D HWUI    : endAllActiveAnimators on 0xb4000077801e2520 (RippleDrawable) with handle 0xb4000077d0126e20
10-19 14:57:54.301 23589 23589 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-19 14:57:54.301 23589 23589 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-19 14:57:54.310 23589 24129 D BLASTBufferQueue: [VRI[MainActivity]#22](f:0,a:4) destructor()
10-19 14:57:54.310 23589 24129 D BufferQueueConsumer: [VRI[MainActivity]#22(BLAST Consumer)22](id:5c250000001a,api:0,p:-1,c:23589) disconnect
10-19 14:57:54.329 23589 23589 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-19 14:57:54.331  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:54.331  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:54.332  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-19 14:57:54.332  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:54.760 23589 23589 I ScrollIdentify: on fling
10-19 14:57:55.359 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:55.359 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:55.359 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:55.359 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:55.367 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:55.368 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:55.368 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:55.368 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:55.368 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:55.368 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:55.368 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:55.368 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:55.368 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:55.368 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:55.368 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:55.369 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:55.369 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:55.369Z'
10-19 14:57:55.369 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:55.614 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:55.614 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:55.614 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:55.614 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:55.614 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:55.614Z'
10-19 14:57:55.614 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:55.614 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:55.614 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:55.614 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:55.614 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:55.614 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:55.622 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:55.622 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:55.622 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:55.622 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:55.622 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:55.622 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:55.622 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:55.622 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:55.622 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:55.622 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:55.622 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:55.622 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:55.622Z'
10-19 14:57:55.622 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:55.622 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:55.622 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:55.623 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:55.623 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:55.623 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:55.623 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:55.623 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:55.623 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:55.623 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:55.623 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:55.623 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:55.630 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:55.630 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:55.630 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:55.630 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:55.630 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:55.630 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:55.630 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:55.630 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:55.630 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:55.630 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:55.630 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:55.630 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:55.630Z'
10-19 14:57:55.630 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:56.179  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:56.475 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:56.475 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:56.475 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:56.476 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:56.480 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:56.555 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:57:56.559 21104 25823 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:57:56.574 21104 21143 I WifiScanner: onFullResults
10-19 14:57:56.574 21104 21199 I WifiScanner: onFullResults
10-19 14:57:56.574 21104 23957 I WifiScanner: onFullResults
10-19 14:57:56.594 23589 23589 I ScrollIdentify: on fling
10-19 14:57:56.606 21104 25824 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:57:56.632 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:56.632 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:56.633 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:56.633 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:56.633 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:57:56.633 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:56.633 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:56.635 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:57:56.636 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-19 14:57:57.360 23589 24108 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-19 14:57:57.360 23589 24108 I ReactNativeJS: === LOADING RIDES ===
10-19 14:57:57.360 23589 24108 I ReactNativeJS: 'Driver ID:', '76b66a88-dff9-4965-9e36-8a92023f155d'
10-19 14:57:57.360 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:57:57.368 23589 24108 I ReactNativeJS: 🔍 Loading current ride...
10-19 14:57:57.369 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:57.369 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:57.370 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:57.370 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:57.370 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:57.370 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:57.370 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:57.370 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:57.370 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:57.370 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:57.370 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:57.370 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:57.370Z'
10-19 14:57:57.370 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '✅ Current ride loaded:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   customer: 
10-19 14:57:57.624 23589 24108 I ReactNativeJS:    { id: '10c9aa9e-6cb4-45e5-b9d3-682bc1a9bd11',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:      full_name: 'Jaishankar',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:      phone_number: null,
10-19 14:57:57.624 23589 24108 I ReactNativeJS:      email: '+919597230958@phone.a1taxi.local' } }
10-19 14:57:57.624 23589 24108 I ReactNativeJS: ⚠️ Driver has current ride - not loading pending ride requests
10-19 14:57:57.624 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:57.624 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:57.624Z'
10-19 14:57:57.624 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:57.624 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:57.624 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:57.624 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:57.624 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:57.624 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:57.632 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:57.632 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:57.633 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:57.633 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:57.633 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Loading:', true
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:57.633Z'
10-19 14:57:57.633 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:57.633 23589 24108 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-19 14:57:57.633 23589 24108 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Pending rides:', 0
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Modal already showing:', false
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '  - Has current ride:', true
10-19 14:57:57.633 23589 24108 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-19 14:57:57.633 23589 24108 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-19 14:57:57.633 23589 24108 I ReactNativeJS:   modalAlreadyShowing: false,
10-19 14:57:57.633 23589 24108 I ReactNativeJS:   driverStatus: 'online',
10-19 14:57:57.633 23589 24108 I ReactNativeJS:   hasCurrentRide: true }
10-19 14:57:57.640 23589 24108 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-19 14:57:57.640 23589 24108 I ReactNativeJS: 🔄 Component state updated:
10-19 14:57:57.641 23589 24108 I ReactNativeJS: '  - Current ride:', { id: '9af31e93-dea1-44d0-ba28-80396f18e004',
10-19 14:57:57.641 23589 24108 I ReactNativeJS:   status: 'in_progress',
10-19 14:57:57.641 23589 24108 I ReactNativeJS:   pickup: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-19 14:57:57.641 23589 24108 I ReactNativeJS:   destination: 'Anthivadi Stadium, SBM Colony, Anthivadi, Hosur, Tamil Nadu, India' }
10-19 14:57:57.641 23589 24108 I ReactNativeJS: '  - Pending rides count:', 0
10-19 14:57:57.641 23589 24108 I ReactNativeJS: '  - Driver status:', 'online'
10-19 14:57:57.641 23589 24108 I ReactNativeJS: '  - Loading:', false
10-19 14:57:57.641 23589 24108 I ReactNativeJS: '  - Error:', null
10-19 14:57:57.641 23589 24108 I ReactNativeJS: '  - Show modal:', false
10-19 14:57:57.641 23589 24108 I ReactNativeJS: '  - Timestamp:', '2025-10-19T09:27:57.641Z'
10-19 14:57:57.641 23589 24108 I ReactNativeJS: ✅ CURRENT RIDE EXISTS - should be visible in UI
10-19 14:57:58.266  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:57:58.906 14485 14485 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-19 14:57:58.911 23589 23589 I BackgroundFetchTaskConsumer: Starting an alarm for task 'background-fetch-task'.
10-19 14:57:58.928 14485 14485 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-19 14:57:58.929 14485 14485 D BufferQueueConsumer: [](id:389500000035,api:0,p:-1,c:14485) connect: controlledByApp=false
10-19 14:57:58.929 14485 14485 D BLASTBufferQueue: [VRI[Launcher]#53](f:0,a:0) constructor()
10-19 14:57:58.930 14485 14485 D BLASTBufferQueue: [VRI[Launcher]#53](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-19 14:57:58.941 14485 14785 D BLASTBufferQueue: [VRI[Launcher]#53](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=629449492493363(auto) mPendingTransactions.size=0 graphicBufferId=62212601282932 transform=0
10-19 14:57:58.942 14485 14485 I bnlz    : onStart
10-19 14:57:58.944 14485 14485 I bldh    : (REDACTED) [%s] onStart()
10-19 14:57:58.944 14485 14485 I blfn    : Reloading theme data
10-19 14:57:58.945 14485 14485 I bnlz    : onResume
10-19 14:57:59.025  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-19 14:57:59.026  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-19 14:57:59.027  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-19 14:57:59.028  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-19 14:57:59.644 23589 23589 D VRI[MainActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-19 14:57:59.674 23589 23589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-19 14:57:59.675 23589 23589 D BLASTBufferQueue: [VRI[MainActivity]#23](f:0,a:4) destructor()
10-19 14:57:59.675 23589 23589 D BufferQueueConsumer: [VRI[MainActivity]#23(BLAST Consumer)23](id:5c250000001b,api:0,p:-1,c:23589) disconnect
10-19 14:57:59.684  1870  3370 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 23589, arg4: 1678, name: com.a1taxi.driverpro
10-19 14:58:00.363  5720 14136 D SQLiteQueryBuilder: SELECT _id, _data, _size, date_modified, bucket_id, orientation, datetaken FROM images WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.gallery' , 'com.vivo.widget.gallery' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (( bucket_id IN ( -1212198981, -1695567127, -53910322, -2140495773, 606811175, 1251957395, 1115488879, 1092149518, 390907738, -1694063856, -803954635, -1690180765, -1816304744, 911081060, -1291404494, -1285319851, -651554454, 151630153, 543621159, -2002206485, 73761835, -1760112825, -71543827, -302991967, -1227671927, -156420408, -1516374533, 1829735780, -1450708494, -506316380, -1341114264, 1114833418, 1152093397, -1733679058, -2131021710, -680697881, 2084439217, -2024679488, -1447456465, 700805465, 991906690, 1345966226, 657155968, 1266435012, -1966306697, -1897284014, -1949680778, 434583847, 990381004, -1526850504, -1612742889, -1273942824, -1004938028, 331203438, 708879003, 255899559, -528275350, -602893060, -1055518229, 545491069, -1716401999, 668104411, -1118657469, 1040014575, 849662899, -174887798, -1292465169, 1101584562, -613830029, -1577375515, -1628155945, -1033534650, -328196774, -2071947861, 805181138, -1104308479, 181789691, 619245019, 616142335, -1829889111, -1578944343, -1809455754, 1690766750, -793566743, 272894235, -435605656, -1858432929, -792464988, -434569360, -1462931038, -879973635, 65759896, -924335728, -1809287853, 1755148769, -223571158, 2126348076, 48382832, 700217390, 630412299, 183872366, 1059985074, -1806957104, -1641691205, -571335571, 1519174419, 1036004452, -2031220924, -1537104433, 1829930144, -745596364, -8122821, 1366741172, 1548299660, 1674287630, -1535937100, 13148420, 1909659649, 264986155, -9482612, 13005089, -2089205090, -1022498075, -919133986, -884178250, -1422443828, -670014994, -2121027476, 2020100714, 489993, 448544941, -2101462868, -261299595, 1172023232, 1278178828, -607125002, -856420653, -1973993346, 1498690426, -1527464249, -1945110980, 395625896, 1909316592, 569711560, -1686988495, 1763470175, -1488038648, 2113906615, -550734493, 85651275, -1964037955, 428383196, -1949793892, 1136101865, 2018234913, -18391924, 1490911920, -884178653, -1170470833, -1215953411, 1077477957, -1198914825, 1461775709, -643464410, 1900774339, 1272506704, -485246563, 1960476238, -1291404897, -1950041765, 1664549270, 2070856141, 1220790880, 359301071, 278762032, 470519460, -924530092, -1382559966, 904275793, 1298630565, 1186223222, -519179321, 232691476, -1684913851, -750954006, 83641895, 1145800364, -2012790048, 1286776387, 397907126, 1330064451, -1804177550, -1809174739, 174397812, 2043613916, -675937132, 1736146008, -1702973091, -1184968074, 1502601919, 1574223589, 445258174, -1682700158, -351293385, 638217523, 2052700512, 949947357, -1318309340, 616722321, -1406249091, 656868479, -402361508, -1410236246, -1193446467, -1415689986, -1935708161, 1786892787, -2041971395, -1087402833, -1809045590, 658433208, 1208185747, 761624307, 250774884, 12344107, -1415495622, 35166595, -175675851, 912551383, -1432612566, 39258592, -131644514, -1950760957, -1022555983, -1656404229, -731336746, 1106324018, 1962141495, -643270046, 133162019, -2075879543, 945165185, -1572118126, 1746875333, -2129001792, -1739773001, -214169408, 1354535744, -1551292529, 581197485, 1732723533, 1456888538, -1448813142, 13311172, -1569520032, -1527994117, 348164313, 1631149349, -242606674, -1914187326, -1445556762, 211087524, -219150656, -1422672119, -1530754818, -1171388910, -2072752055, -1325148867, 361712075, -1730634595, -340891674, 1407102871, 53870456, -508660256, 2028258487, -815228101, -1694937425, -519178918, 1561178453, -1131671344, 1431320847, 2046578077, -781677303, 1291266200, 848578299, -1972390376, -978314959, -1319727662, 943502520, 1028125135, -175466238, 1195992005, 1920382715, 2108277051, 443703009, 675671268, 263662367, -347572232, 183545411, 1450478273, -1879659704, 1957916785, 1976953110, -1157253172, -1407948598, 
10-19 14:58:00.760 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:00.761 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:58:00.770 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:00.772 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:00.776 23589 24108 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-19 14:58:00.776 23589 24108 I ReactNativeJS:   heading: 90.0379409790039,
10-19 14:58:00.776 23589 24108 I ReactNativeJS:   altitudeAccuracy: 1.2958598136901855,
10-19 14:58:00.776 23589 24108 I ReactNativeJS:   latitude: 12.7486401,
10-19 14:58:00.776 23589 24108 I ReactNativeJS:   speed: 0.10934054106473923,
10-19 14:58:00.776 23589 24108 I ReactNativeJS:   longitude: 77.8299475,
10-19 14:58:00.776 23589 24108 I ReactNativeJS:   accuracy: 12.197999954223633 }
10-19 14:58:00.783 23589 23589 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-19 14:58:00.786 23589 23589 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-19 14:58:00.792 23589 23589 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-19 14:58:00.795 23589 24108 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760866080746,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:     mocked: false,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:     coords: 
10-19 14:58:00.795 23589 24108 I ReactNativeJS:      { altitude: 772.5999755859375,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:        heading: 90.0379409790039,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:        altitudeAccuracy: 1.2958598136901855,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:        latitude: 12.7486401,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:        speed: 0.10934054106473923,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:        longitude: 77.8299475,
10-19 14:58:00.795 23589 24108 I ReactNativeJS:        accuracy: 12.197999954223633 } } ]
10-19 14:58:00.805 23589 24108 I ReactNativeJS: 📤 Background location update via RPC...
10-19 14:58:00.806 23589 24108 E ReactNativeJS: ❌ Supabase credentials not configured
10-19 14:58:00.808 23589 24086 I TaskService: Finished task 'background-location-task' with eventId '8291c73e-0b65-4572-b020-97deaa3f078a'.
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: _construct@1:117842
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: Wrapper@1:117496
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: _callSuper@1:115478
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: SyntheticError@1:116983
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: ?anon_0_@1:1972213
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: asyncGeneratorStep@1:573272
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: _next@1:573529
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: anonymous@1:136226
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: _callTimer@1:135225
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: anonymous@1:100174
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: __guard@1:100912
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: flushedQueue@1:100085
10-19 14:58:00.811 23589 24109 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-19 14:58:01.326 23589 24108 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-19 14:58:01.326 23589 24108 I ReactNativeJS: 'Driver User ID:', 'ae53a792-6aed-4186-823d-61c34c6defe2'
10-19 14:58:01.327 23589 24108 I ReactNativeJS: 'Location:', { latitude: 12.7486401,
10-19 14:58:01.327 23589 24108 I ReactNativeJS:   longitude: 77.8299475,
10-19 14:58:01.327 23589 24108 I ReactNativeJS:   accuracy: 12.197999954223633 }
10-19 14:58:01.328 23589 24108 I ReactNativeJS: 📤 Updating location via RPC...
10-19 14:58:01.497 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.497 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:58:01.498 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.499 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.501 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.578 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-19 14:58:01.587 21104 25824 W SystemServiceRegistry: No service published for: wifirtt
10-19 14:58:01.702 23589 24108 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-19 14:58:01.912 21104 21199 I WifiScanner: onFullResults
10-19 14:58:01.912 21104 24145 I WifiScanner: onFullResults
10-19 14:58:01.912 21104 23957 I WifiScanner: onFullResults
10-19 14:58:01.940 21104 25823 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-19 14:58:01.959 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.959 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-19 14:58:01.959 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.960 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.960 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.960 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.961 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-19 14:58:01.962 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
