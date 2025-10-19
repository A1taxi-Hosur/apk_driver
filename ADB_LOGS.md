--------- beginning of main
10-20 00:38:24.880  5720  5865 D SQLiteQueryBuilder: SELECT sum(_size), count(_size) FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)) AND  ( (_id  IN  (1000014720) )  AND  (_size  != 0) ) ) AND (((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)))))
10-20 00:38:24.893  5720  5865 D SQLiteQueryBuilder: SELECT _id, title, date_modified, date_added, _size, mime_type, duration, media_type, bucket_display_name, _display_name, is_drm, _data, date_expires, album, artist FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)) AND  ( (_id  IN  (1000014720) )  AND  (_size  != 0) ) ) AND (((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1))))) ORDER BY _display_name COLLATE UNICODE  ASC LIMIT 200
10-20 00:38:25.098  5720  5865 D SQLiteQueryBuilder: SELECT _id FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_id <= ?)) ORDER BY _id ASC
10-20 00:38:25.265  5720  5865 D SQLiteQueryBuilder: SELECT sum(_size), count(_size) FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)) AND  ( (date_modified  > 1760900091)  OR  (_id  > 1000014719) ) ) AND (((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)))))
10-20 00:38:25.273  5720  5865 D SQLiteQueryBuilder: SELECT _id, title, date_modified, date_added, _size, mime_type, duration, media_type, bucket_display_name, _display_name, is_drm, _data, date_expires, album, artist FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.nbu.files' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1)) AND  ( (date_modified  > 1760900091)  OR  (_id  > 1000014719) ) ) AND (((format IS NULL OR format != 12289) AND (_size IS NOT NULL) AND (_data IS NOT NULL) AND (LENGTH(_data) > 1))))) ORDER BY date_modified ASC LIMIT 50
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder: SELECT _data, date_added, datetaken, date_modified, media_type, mime_type, _id, generation_modified, is_pending FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND ((
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder:       ((media_type = 1 OR media_type = 3)
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder:           AND (bucket_id IS NOT NULL OR _data IS NOT NULL))
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder:         AND (generation_modified > ?)
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder:         AND (generation_modified < ?
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder:           OR (generation_modified = ? AND _id < ?))
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder:         AND (is_pending = 0)
10-20 00:38:25.425  5720  5865 D SQLiteQueryBuilder:     )) ORDER BY generation_modified DESC, _id DESC LIMIT 75
10-20 00:38:25.476  5720  5865 D SQLiteQueryBuilder: SELECT _data, date_added, datetaken, date_modified, media_type, mime_type, _id, generation_modified, is_pending FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND ((((media_type = 1 OR media_type = 3) AND (bucket_id IS NOT NULL OR _data IS NOT NULL)) AND (generation_modified < ? OR generation_modified = ? AND _id < ?) AND is_pending = 0)) ORDER BY generation_modified DESC, _id DESC LIMIT 75
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder: SELECT _data, orientation, owner_package_name, title, duration, _size, bucket_id, date_added, datetaken, date_modified, media_type, mime_type, is_trashed, width, date_expires, _id, generation_modified, is_pending, bucket_display_name, height FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND ((
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder:       ((media_type = 1 OR media_type = 3)
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder:           AND (bucket_id IS NOT NULL OR _data IS NOT NULL))
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder:         AND (generation_modified > ?)
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder:         AND (generation_modified < ?
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder:           OR (generation_modified = ? AND _id < ?))
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder:         AND (is_pending = 0)
10-20 00:38:25.516  5720  5865 D SQLiteQueryBuilder:     )) ORDER BY generation_modified DESC, _id DESC LIMIT 75
10-20 00:38:25.558  5720  5865 D SQLiteQueryBuilder: SELECT _data, orientation, owner_package_name, title, duration, _size, bucket_id, date_added, datetaken, date_modified, media_type, mime_type, is_trashed, width, date_expires, _id, generation_modified, is_pending, bucket_display_name, height FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND ((((media_type = 1 OR media_type = 3) AND (bucket_id IS NOT NULL OR _data IS NOT NULL)) AND (generation_modified < ? OR generation_modified = ? AND _id < ?) AND is_pending = 0)) ORDER BY generation_modified DESC, _id DESC LIMIT 75
10-20 00:38:25.608  5720  5865 D SQLiteQueryBuilder: SELECT _data, orientation, owner_package_name, title, duration, _size, bucket_id, date_added, datetaken, date_modified, media_type, mime_type, is_trashed, width, date_expires, _id, generation_modified, is_pending, bucket_display_name, height FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id IN(?,?,?,?,?)))
10-20 00:38:25.629  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.646  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.664  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.682  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.702  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.720  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.738  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.759  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.783  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.802  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.820  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.837  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.865  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.884  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.901  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.917  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.945  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.965  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:25.994  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.011  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.032  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.053  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.068  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.089  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.111  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.130  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.149  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.180  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.202  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.225  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.246  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.264  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.278  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.294  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.322  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.346  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.367  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.387  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.419  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.443  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.466  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.486  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id < ?)) ORDER BY _id DESC LIMIT 200
10-20 00:38:26.566  5720  5865 D SQLiteQueryBuilder: SELECT _id, media_type, mime_type, date_modified, _data, datetaken, date_added, generation_modified FROM files WHERE ((owner_package_name IN ( 'com.google.android.apps.photos' ) OR media_type=2 OR media_type=4 OR media_type=5 OR media_type=3 OR media_type=5 OR media_type=1) AND (((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.google.android.apps.photos' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND (((media_type = 1 OR media_type = 3) AND _id IN(?,?,?,?,?)))
10-20 00:38:26.879 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:38:26.885 21104 19162 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:38:28.456 21104 19070 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:38:28.457 21104 19070 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:38:28.701  7096  7120 I native  : I0000 00:00:1760900908.701081    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760900908590380
10-20 00:38:28.720  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:38:29.148 21104 21118 I WifiScanner: onFullResults
10-20 00:38:29.149 21104 22617 I WifiScanner: onFullResults
10-20 00:38:29.149 21104 22003 I WifiScanner: onFullResults
10-20 00:38:29.158 21104 19162 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:38:29.198 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:38:29.199 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:38:29.200 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:38:29.291 21104 19162 I TFLite-in-PlayServices: Created interpreter.
10-20 00:38:29.318 21104 19162 I TFLite-in-PlayServices: Created interpreter.
10-20 00:38:29.342 21104 19162 I SemanticLocation: (REDACTED) [Inferrer] %s%s
--------- beginning of system
10-20 00:38:32.063  1870  2671 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:38:32.064  1870  2895 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:38:32.072  1870  2718 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:38:32.072  1870  3607 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:38:32.099  1870  2671 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:38:32.141  1870  2671 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:38:32.142  1870  2718 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:38:33.577 12475 12475 I cr_OfflineDetector: Running updateState mConnectivityDetectorInitialized: true, mTimeWhenLastForegrounded: 1345082940, getElapsedTime: 1345082940, mTimeWhenLastOfflineNotificationReceived: 0, mTimeWhenLastOnline: 1344222002, mTimeWhenAirplaneModeToggledOff: 0 mApplicationState: 1, mIsOfflineLastReportedByConnectivityDetector: false, mInAirplaneMode: false mIsEffectivelyOffline: false
10-20 00:38:33.577 12475 12475 I cr_OfflineDetector: updateState(): timeSinceLastForeground: 0, timeSinceOfflineNotificationReceived: 1345082940, timeSinceLastOnline: 860938, timeNeededForForeground: 2000, timeNeededForOffline: -1345080940 timeSinceAirplaneModeToggledOff: 1345082940 timeNeededAfterConnectionChangeFromOnlineToOffline: -850938 timeNeededAfterConnectionChangeFromAirplaneToOffline: 0
10-20 00:38:33.605  5720  5865 D SQLiteQueryBuilder: SELECT _data, owner_package_name, is_pending FROM downloads WHERE ((_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:33.610  5720  5865 D SQLiteQueryBuilder: SELECT rowid FROM downloads WHERE ((owner_package_name IN ( 'com.android.chrome' )) AND (_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:33.611  5720  5865 D MediaProvider: Open with FUSE. FilePath: /storage/emulated/0/Download/application-6087377e-ae53-44bc-87ca-9b3adf312d99.apk. Uid: 10208. Media Capabilities Uid: 0. ShouldRedact: false. ShouldTranscode: false
10-20 00:38:33.612  5720 14147 D SQLiteQueryBuilder: SELECT _id FROM files WHERE ((owner_package_name IN ( 'com.android.intentresolver' )) AND (_id='1000014720') AND (is_download=1) AND (volume_name IN ( 'external_primary' )))
10-20 00:38:33.616  5720  5865 D SQLiteQueryBuilder: SELECT _id FROM files WHERE ((owner_package_name IN ( 'com.android.chrome' )) AND (_id='1000014720') AND (is_download=1) AND (volume_name IN ( 'external_primary' )))
10-20 00:38:33.883  1870  1976 I ActivityTaskManager: Displayed com.android.intentresolver/.ResolverActivity for user 0: +258ms
10-20 00:38:33.892 21104 21104 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.common.telemetry.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-20 00:38:33.909  1870  2896 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:38:33.915  1870  3346 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:38:33.915  1870  2896 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:38:33.947  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:38:33.948  1870  2610 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:38:33.962  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:38:33.964  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:38:33.964  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.intentresolver, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:38:33.966  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:38:34.619  5720  5865 D SQLiteQueryBuilder: SELECT _id FROM files WHERE ((owner_package_name IN ( 'com.google.android.packageinstaller' )) AND (_id='1000014720') AND (is_download=1) AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.622  5720 14147 D SQLiteQueryBuilder: SELECT _id FROM files WHERE ((owner_package_name IN ( 'com.android.chrome' )) AND (_id='1000014720') AND (is_download=1) AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.681  5720 14147 D SQLiteQueryBuilder: SELECT _id FROM downloads WHERE ((_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.685  5720 14147 D SQLiteQueryBuilder: SELECT _id FROM downloads WHERE ((_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.756  5720 14147 D SQLiteQueryBuilder: SELECT _data, owner_package_name, is_pending FROM downloads WHERE ((_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.761  5720 14147 D MediaProvider: Open with FUSE. FilePath: /storage/emulated/0/Download/application-6087377e-ae53-44bc-87ca-9b3adf312d99.apk. Uid: 10080. Media Capabilities Uid: 0. ShouldRedact: false. ShouldTranscode: false
10-20 00:38:34.782  5720 14147 D SQLiteQueryBuilder: SELECT _data, owner_package_name, is_pending FROM downloads WHERE ((_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.783  5720 14147 D MediaProvider: Open with FUSE. FilePath: /storage/emulated/0/Download/application-6087377e-ae53-44bc-87ca-9b3adf312d99.apk. Uid: 10080. Media Capabilities Uid: 0. ShouldRedact: false. ShouldTranscode: false
10-20 00:38:34.793  5720 14147 D SQLiteQueryBuilder: SELECT _data, owner_package_name, is_pending FROM downloads WHERE ((_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.795  5720 14147 D MediaProvider: Open with FUSE. FilePath: /storage/emulated/0/Download/application-6087377e-ae53-44bc-87ca-9b3adf312d99.apk. Uid: 10080. Media Capabilities Uid: 0. ShouldRedact: false. ShouldTranscode: false
10-20 00:38:34.801  5720 14147 D SQLiteQueryBuilder: SELECT _data, owner_package_name, is_pending FROM downloads WHERE ((_id='1000014720') AND (volume_name IN ( 'external_primary' )))
10-20 00:38:34.803  5720 14147 D MediaProvider: Open with FUSE. FilePath: /storage/emulated/0/Download/application-6087377e-ae53-44bc-87ca-9b3adf312d99.apk. Uid: 10080. Media Capabilities Uid: 0. ShouldRedact: false. ShouldTranscode: false
10-20 00:38:34.804 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:34.805 28490 28490 D BufferQueueConsumer: [](id:6f4a0000001e,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:34.805 28490 28490 D BLASTBufferQueue: [VRI[InstallStaging]#30](f:0,a:0) constructor()
10-20 00:38:34.805 28490 28490 D BLASTBufferQueue: [VRI[InstallStaging]#30](f:0,a:0) update width=1202 height=720 format=-3 mTransformHint=0
10-20 00:38:34.819 28490 29142 D BLASTBufferQueue: [VRI[InstallStaging]#30](f:0,a:1) acquireNextBufferLocked size=1202x720 mFrameNumber=1 applyTransaction=true mTimestamp=661836694963293(auto) mPendingTransactions.size=0 graphicBufferId=122363618263251 transform=0
10-20 00:38:34.827 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:34.827 28490 28490 D BufferQueueConsumer: [](id:6f4a0000001f,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:34.827 28490 28490 D BLASTBufferQueue: [VRI[InstallStaging]#31](f:0,a:0) constructor()
10-20 00:38:34.827 28490 28490 D BLASTBufferQueue: [VRI[InstallStaging]#31](f:0,a:0) update width=1202 height=264 format=-3 mTransformHint=0
10-20 00:38:34.833 28490 29142 D BLASTBufferQueue: [VRI[InstallStaging]#31](f:0,a:1) acquireNextBufferLocked size=1202x264 mFrameNumber=1 applyTransaction=true mTimestamp=661836709379601(auto) mPendingTransactions.size=0 graphicBufferId=122363618263257 transform=0
10-20 00:38:34.868  1870  1976 I ActivityTaskManager: Displayed com.google.android.packageinstaller/com.android.packageinstaller.InstallStaging for user 0: +225ms
10-20 00:38:35.301 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:35.301 28490 28490 D BufferQueueConsumer: [](id:6f4a00000020,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:35.301 28490 28490 D BLASTBufferQueue: [VRI[DeleteStagedFileOnResult]#32](f:0,a:0) constructor()
10-20 00:38:35.301 28490 28490 D BLASTBufferQueue: [VRI[DeleteStagedFileOnResult]#32](f:0,a:0) update width=1202 height=264 format=-3 mTransformHint=0
10-20 00:38:35.304 28490 29142 D BLASTBufferQueue: [VRI[DeleteStagedFileOnResult]#32](f:0,a:1) acquireNextBufferLocked size=1202x264 mFrameNumber=1 applyTransaction=true mTimestamp=661837180641524(auto) mPendingTransactions.size=0 graphicBufferId=122363618263264 transform=0
10-20 00:38:35.370 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:35.371 28490 28490 D BufferQueueConsumer: [](id:6f4a00000021,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:35.371 28490 28490 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#33](f:0,a:0) constructor()
10-20 00:38:35.371 28490 28490 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#33](f:0,a:0) update width=1202 height=720 format=-3 mTransformHint=0
10-20 00:38:35.377 28490 29142 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#33](f:0,a:1) acquireNextBufferLocked size=1202x720 mFrameNumber=1 applyTransaction=true mTimestamp=661837253714063(auto) mPendingTransactions.size=0 graphicBufferId=122363618263271 transform=0
10-20 00:38:35.383 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:35.383 28490 28490 D BufferQueueConsumer: [](id:6f4a00000022,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:35.383 28490 28490 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#34](f:0,a:0) constructor()
10-20 00:38:35.383 28490 28490 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#34](f:0,a:0) update width=1202 height=264 format=-3 mTransformHint=0
10-20 00:38:35.388 28490 29142 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#34](f:0,a:1) acquireNextBufferLocked size=1202x264 mFrameNumber=1 applyTransaction=true mTimestamp=661837264488832(auto) mPendingTransactions.size=0 graphicBufferId=122363618263278 transform=0
10-20 00:38:35.401  1870  1976 I ActivityTaskManager: Displayed com.google.android.packageinstaller/com.android.packageinstaller.PackageInstallerActivity for user 0: +138ms
10-20 00:38:35.414 28490 28490 D VRI[InstallStaging]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:35.424 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:35.425 28490 28490 D VRI[InstallStaging]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:35.436 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:35.436 28490 29133 D BLASTBufferQueue: [VRI[InstallStaging]#30](f:0,a:4) destructor()
10-20 00:38:35.436 28490 29133 D BufferQueueConsumer: [VRI[InstallStaging]#30(BLAST Consumer)30](id:6f4a0000001e,api:0,p:-1,c:28490) disconnect
10-20 00:38:35.436 28490 28490 D BLASTBufferQueue: [VRI[InstallStaging]#31](f:0,a:2) destructor()
10-20 00:38:35.436 28490 28490 D BufferQueueConsumer: [VRI[InstallStaging]#31(BLAST Consumer)31](id:6f4a0000001f,api:0,p:-1,c:28490) disconnect
10-20 00:38:35.440 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@530a961
10-20 00:38:35.446 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@bb2ba3f
10-20 00:38:36.098 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@3bed7c1
10-20 00:38:36.101 28490 29142 D HWUI    : endAllActiveAnimators on 0xb4000077800d7f80 (RippleDrawable) with handle 0xb4000077d008a070
10-20 00:38:36.114 28490 29265 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#33](f:0,a:4) destructor()
10-20 00:38:36.114 28490 29265 D BufferQueueConsumer: [VRI[PackageInstallerActivity]#33(BLAST Consumer)33](id:6f4a00000021,api:0,p:-1,c:28490) disconnect
10-20 00:38:36.139 28490 28490 D InstallInstalling: Staged session is valid, proceeding with the install
10-20 00:38:36.157 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:36.157 28490 28490 D BufferQueueConsumer: [](id:6f4a00000023,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:36.157 28490 28490 D BLASTBufferQueue: [VRI[InstallInstalling]#35](f:0,a:0) constructor()
10-20 00:38:36.157 28490 28490 D BLASTBufferQueue: [VRI[InstallInstalling]#35](f:0,a:0) update width=1202 height=720 format=-3 mTransformHint=0
10-20 00:38:36.163 28490 29142 D BLASTBufferQueue: [VRI[InstallInstalling]#35](f:0,a:1) acquireNextBufferLocked size=1202x720 mFrameNumber=1 applyTransaction=true mTimestamp=661838039643678(auto) mPendingTransactions.size=0 graphicBufferId=122363618263285 transform=0
10-20 00:38:36.169 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:36.169 28490 28490 D BufferQueueConsumer: [](id:6f4a00000024,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:36.169 28490 28490 D BLASTBufferQueue: [VRI[InstallInstalling]#36](f:0,a:0) constructor()
10-20 00:38:36.169 28490 28490 D BLASTBufferQueue: [VRI[InstallInstalling]#36](f:0,a:0) update width=1202 height=264 format=-3 mTransformHint=0
10-20 00:38:36.176 28490 29142 D BLASTBufferQueue: [VRI[InstallInstalling]#36](f:0,a:1) acquireNextBufferLocked size=1202x264 mFrameNumber=1 applyTransaction=true mTimestamp=661838052429447(auto) mPendingTransactions.size=0 graphicBufferId=122363618263291 transform=0
10-20 00:38:36.186  1870  1976 I ActivityTaskManager: Displayed com.google.android.packageinstaller/com.android.packageinstaller.InstallInstalling for user 0: +93ms
10-20 00:38:36.194 28490 28490 D VRI[PackageInstallerActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:36.208 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:36.208 28490 28490 D BLASTBufferQueue: [VRI[PackageInstallerActivity]#34](f:0,a:2) destructor()
10-20 00:38:36.208 28490 28490 D BufferQueueConsumer: [VRI[PackageInstallerActivity]#34(BLAST Consumer)34](id:6f4a00000022,api:0,p:-1,c:28490) disconnect
10-20 00:38:36.211 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@29f13e
10-20 00:38:36.400 18831 18831 I Finsky  : [2] VerifyApps: Install-time verification requested for package com.a1taxi.driverpro, PackageManager id = 178, Verifier id = 3edb019a-f733-4642-9964-ef56447b4ccf
10-20 00:38:36.411 18831 18859 I Finsky  : [45984] RECEIVER_PACKAGE_VERIFICATION#logWorkEndAndFinishGoAsync: SUCCESS
10-20 00:38:36.532 18831 18564 I Finsky  : [47323] VerifyApps: Anti-malware verification task started for package=com.a1taxi.driverpro
10-20 00:38:36.539 18831 18564 E AbstractLogEventBuilder: The provided ProductIdOrigin 3 is not one of the process-level expected values: 1 or 2
10-20 00:38:36.540 18831 18564 I Finsky  : [47323] Single user settings service is not running, bind it now
10-20 00:38:36.547 18831 18831 I Finsky  : [2] Single user settings service is connected
10-20 00:38:36.553 18831 18564 W Settings: Setting install_non_market_apps has moved from android.provider.Settings.Global to android.provider.Settings.Secure, returning read-only value.
10-20 00:38:36.636 18831 18564 I Finsky  : [47323] VerifyApps: Originating app: com.android.chrome
10-20 00:38:36.641 18831 18564 I Finsky  : [47323] VerifyApps: Installer app: com.google.android.packageinstaller
10-20 00:38:36.773 18831 18874 E AbstractLogEventBuilder: The provided ProductIdOrigin 3 is not one of the process-level expected values: 1 or 2
10-20 00:38:36.780 18831 18564 I Finsky  : [47323] Task 7 requested foreground
10-20 00:38:36.783 18831 18564 I Finsky  : [47323] Not entering foreground
10-20 00:38:36.791 18831 18873 I Finsky  : [45996] VerifyApps: Starting APK Analysis scan for com.a1taxi.driverpro.
10-20 00:38:36.792 18831 18873 I Finsky  : [45996] Scanning package com.a1taxi.driverpro contents with client side protections. File: [qT9VfagFT_x0io4zAEOgHYZCZxicDPKOPRS9FEiifcM]
10-20 00:38:36.793 18831 18873 I Finsky  : [45996] VerifyApps: APK Analysis scan finished for com.a1taxi.driverpro. Verdict: SAFE
10-20 00:38:36.794 18831 18558 I Finsky  : [47322] Apk Analysis scan verification duration=PT0.005S 
10-20 00:38:37.514 18831 18831 E AbstractLogEventBuilder: The provided ProductIdOrigin 3 is not one of the process-level expected values: 1 or 2
10-20 00:38:37.515 18831 18558 I Finsky  : [47322] VerifyApps: Verification package=com.a1taxi.driverpro, id=178, response=9, upload_requested=false, enable_ecm=true
10-20 00:38:37.527 18831 18564 I Finsky  : [47323] VerifyApps: Preparing for JIT scan
10-20 00:38:37.527 18831 18564 I Finsky  : [47323] VerifyApps: JIT scan not prepared successfully. Skipping scan.
10-20 00:38:37.530 18831 18831 E AbstractLogEventBuilder: The provided ProductIdOrigin 3 is not one of the process-level expected values: 1 or 2
10-20 00:38:37.531 18831 18831 I Finsky  : [2] Just-in-Time Protection verdict logged: 0. Scan result: SCAN_SKIPPED
10-20 00:38:37.531 18831 18831 E AbstractLogEventBuilder: The provided ProductIdOrigin 3 is not one of the process-level expected values: 1 or 2
10-20 00:38:37.534 18831 18564 I Finsky  : [47323] VerifyApps AdvancedProtection: Verify AP install started
10-20 00:38:37.535 18831 18564 I Finsky  : [47323] VerifyApps AdvancedProtection: Allowing install because there are no Advanced Protection users
10-20 00:38:37.536 18831 18874 I Finsky  : [45997] VerifyApps: waiting for app installation for com.a1taxi.driverpro
10-20 00:38:37.544 18831 18831 I Finsky  : [2] VerifyApps AdvancedProtection: Reported Advanced Protection verification result: ALLOW
10-20 00:38:37.547 18831 18564 I Finsky  : [47323] Skipping logging for attempted installation. The source is a system package.
10-20 00:38:37.548 18831 18564 I Finsky  : [47323] VerifyApps: Returning package verification result id=178, result=ALLOW
10-20 00:38:37.554 18831 18831 I Finsky  : [2] VerifyApps: Install-time verification complete: id=178, package_name=com.a1taxi.driverpro
10-20 00:38:37.555 18831 18564 E AbstractLogEventBuilder: The provided ProductIdOrigin 3 is not one of the process-level expected values: 1 or 2
10-20 00:38:37.689  5720 14222 D SQLiteQueryBuilder: DELETE FROM media_grants WHERE ((media_grants.owner_package_name IN (?)) AND (media_grants.package_user_id = ? ))
10-20 00:38:37.690  5720 14222 D MediaGrants: Removed 0 media_grants for 0 user for [com.a1taxi.driverpro]. Reason: Mode changed: android:read_external_storage
10-20 00:38:38.460 21104 19170 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:38:38.460 21104 19170 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:38:38.719 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.potokens.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-20 00:38:38.919 21104 21104 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.common.telemetry.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
10-20 00:38:39.337  1870  2146 V BackupManagerService: [UserID:0] restoreAtInstall pkg=com.a1taxi.driverpro token=b8 restoreSet=3dda7888eadaa218
10-20 00:38:39.411 21163 21212 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:39.416  1870  2146 V BackupManagerService: [UserID:0] Acquired wakelock:*backup*-0-5735
10-20 00:38:39.429 21163 21212 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:39.430 21163 22741 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:39.430 21163 22741 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:39.435 21163 25568 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:39.447 21163 25568 I Backup  : [GmsBackupTransport] New restore session, 2 apps
10-20 00:38:39.459 21163 25568 I Backup  : [DenylistedInfoRequestProcessor] Attaching GetAppKeyDenylistInfo request to restore request.
10-20 00:38:39.757 21163 11947 W Conscrypt: Could not set socket write timeout: java.net.SocketException: Socket closed
10-20 00:38:39.760 21163 11947 W Conscrypt: 	at com.google.android.gms.org.conscrypt.Platform.setSocketWriteTimeout(:com.google.android.gms@254031035@25.40.31 (260400-816341114):204)
10-20 00:38:39.761 21163 11947 W Conscrypt: 	at com.google.android.gms.org.conscrypt.ConscryptFileDescriptorSocket.setSoWriteTimeout(:com.google.android.gms@254031035@25.40.31 (260400-816341114):4)
10-20 00:38:39.833 21163 11947 W Conscrypt: Could not set socket write timeout: java.net.SocketException: Socket closed
10-20 00:38:39.834 21163 11947 W Conscrypt: 	at com.google.android.gms.org.conscrypt.Platform.setSocketWriteTimeout(:com.google.android.gms@254031035@25.40.31 (260400-816341114):204)
10-20 00:38:39.834 21163 11947 W Conscrypt: 	at com.google.android.gms.org.conscrypt.ConscryptFileDescriptorSocket.setSoWriteTimeout(:com.google.android.gms@254031035@25.40.31 (260400-816341114):4)
10-20 00:38:40.340 21163 25568 I Backup  : [GmsBackupTransport] Got kv restore package: @pm@
10-20 00:38:40.342 21163 25568 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:40.382 21163 25568 I Backup  : [GmsBackupTransport] Encrypted kv restore of @pm@
10-20 00:38:42.642 21163 25568 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:42.761 21163 25568 I Backup  : [GmsBackupTransport] Got full restore package: com.a1taxi.driverpro
10-20 00:38:42.765 21163 25568 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:42.794 21163 25568 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:42.796 21163 25568 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:42.806 21163 21203 I Backup  : [FullRestoreDataProcessorFac] Performing encrypted restore for com.a1taxi.driverpro
10-20 00:38:44.003 21163 21203 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:44.020 21163 21203 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:44.133  5720  6325 I MediaProvider: Begin Intent { act=android.intent.action.PACKAGE_DATA_CLEARED dat=package: flg=0x5000010 cmp=com.google.android.providers.media.module/com.android.providers.media.MediaService (has extras) }
10-20 00:38:44.136 19375 19375 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-20 00:38:44.140 19375 19375 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-20 00:38:44.149  5720  6325 D MediaProvider: Deleted 0 Android/media items belonging to com.a1taxi.driverpro on /data/user/0/com.google.android.providers.media.module/databases/external.db
10-20 00:38:44.151 19375 19375 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-20 00:38:44.156 21163 19396 I Blockstore: [PackageIntentOperation] Checking IS_RESTORE extra. [CONTEXT service_id=258 ]
10-20 00:38:44.156 21163 19396 I Blockstore: (REDACTED) [PackageIntentOperation] Package data cleared as part of restore. Skip clearing Blockstore data for %s
10-20 00:38:44.158  5720  6325 I FuseDaemon: Successfully deleted rows in leveldb for owner_id:  and ownerPackageIdentifier: com.a1taxi.driverpro::0
10-20 00:38:44.158  5720  6325 D SQLiteQueryBuilder: DELETE FROM media_grants WHERE ((media_grants.owner_package_name IN (?,?)) AND (media_grants.package_user_id = ? ))
10-20 00:38:44.158  5720  6325 D MediaGrants: Removed 0 media_grants for 0 user for [com.a1taxi.driverpro, com.a1taxi.driverpro]. Reason: Package orphaned
10-20 00:38:44.159  5720  6325 I MediaProvider: End Intent { act=android.intent.action.PACKAGE_DATA_CLEARED dat=package: flg=0x5000010 cmp=com.google.android.providers.media.module/com.android.providers.media.MediaService (has extras) }
10-20 00:38:44.163 21163 19382 I NearbyDiscovery: (REDACTED) processGrantSlicePermission: %s
10-20 00:38:44.169 21163 21163 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.backup.GMS_MODULE_RESTORE dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-20 00:38:44.169 21163 21163 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.backup.GMS_MODULE_RESTORE dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-20 00:38:44.177 19375 19375 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-20 00:38:44.177 19375 19375 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-20 00:38:44.184 21163 11948 I Icing   : doRemovePackageData com.a1taxi.driverpro
10-20 00:38:44.191 19375 19375 D CompatChangeReporter: Compat change id reported: 242716250; UID 10408; state: ENABLED
10-20 00:38:44.199 21104 19386 I Fitness : (REDACTED) FitCleanupIntentOperation received Intent %s
10-20 00:38:44.205 19375 19375 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-20 00:38:44.208 19375 19375 D nativeloader: Configuring clns-7 for other apk /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64:/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-20 00:38:44.220 19375 19375 V GraphicsEnvironment: Currently set values for:
10-20 00:38:44.220 19375 19375 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-20 00:38:44.220 19375 19375 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-20 00:38:44.220 19375 19375 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-20 00:38:44.220 19375 19375 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-20 00:38:44.238 28149 28149 D PersistedStoragePackageUninstalledReceiver: Received android.intent.action.PACKAGE_DATA_CLEARED for com.a1taxi.driverpro for u0
10-20 00:38:44.280 21163 25568 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:44.282  1870  5735 D BackupManagerService: Restore complete, killing host process of com.a1taxi.driverpro
10-20 00:38:44.283 21163 22741 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:44.284 21163 25568 W Backup  : [GmsBackupTransport] Error logging monitor event
10-20 00:38:44.284 19375 19375 I Process : Sending signal. PID: 19375 SIG: 9
10-20 00:38:44.286 21163 22741 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:44.287 21163 22741 I Backup  : [GmsBackupTransport] restore finished
10-20 00:38:44.288 21163 22741 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:44.289  1870  5735 I BackupManagerService: Restore complete.
10-20 00:38:44.290 21163 22741 I AndroidBackupEventsLogg: (REDACTED) Logging without sampling %s
10-20 00:38:44.293  1870  5735 V BackupManagerService: [UserID:0] Released wakelock:*backup*-0-5735
10-20 00:38:44.324 18831 18831 I Finsky  : [2] afvf - Received: android.intent.action.PACKAGE_ADDED, [RJhPvoB96hwwFKmVHhI9-Qa5dVJcP2sdr6v_A5ng5M0]
10-20 00:38:44.366 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@941d58
10-20 00:38:44.395 28490 29265 D BLASTBufferQueue: [VRI[InstallInstalling]#35](f:0,a:4) destructor()
10-20 00:38:44.395 28490 29265 D BufferQueueConsumer: [VRI[InstallInstalling]#35(BLAST Consumer)35](id:6f4a00000023,api:0,p:-1,c:28490) disconnect
10-20 00:38:44.555 19438 19438 I ager:releasable: Using CollectorTypeCC GC.
10-20 00:38:44.562 19438 19438 E ager:releasable: Not starting debugger since process cannot load the jdwp agent.
10-20 00:38:44.565 28149 28149 I SafetyLabelChangedBroadcastReceiver: received broadcast packageName: com.a1taxi.driverpro, current user: UserHandle{0}, packageChangeEvent: NEW_INSTALL, intent user: UserHandle{0}
10-20 00:38:44.585 19438 19438 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-20 00:38:44.602 18831 19464 I Finsky  : [47332] SCH: Received scheduling request: Id: 12-1, Constraints: [{ L: 15000, D: 86400000, C: CHARGING_NONE, I: IDLE_NONE, N: NET_ANY, B: BATTERY_ANY }]
10-20 00:38:44.608 21163 19400 I Auth    : (REDACTED) [SupervisedAccountIntentOperationV2] onHandleIntent: %s
10-20 00:38:44.613 21104 19386 I ProximityAuth: [RecentAppsMediator] Package added: (user=UserHandle{0}) com.a1taxi.driverpro
10-20 00:38:44.615 21104 19384 W GCM     : Unexpected forwarded intent: Intent { act=android.intent.action.PACKAGE_ADDED dat=package: flg=0x4000010 pkg=com.google.android.gms cmp=com.google.android.gms/.chimera.PersistentIntentOperationService (has extras) }
10-20 00:38:44.623 28149 28170 I PermissionControllerServiceImpl: Updating user sensitive for uid 10408
10-20 00:38:44.624 21104 19384 W NetworkScheduler: Unexpected forwarded intent: Intent { act=android.intent.action.PACKAGE_ADDED dat=package: flg=0x4000010 pkg=com.google.android.gms cmp=com.google.android.gms/.chimera.PersistentIntentOperationService (has extras) }
10-20 00:38:44.636 21163 19399 I Dck     : (REDACTED) disableDckSupport: %s
10-20 00:38:44.637 21163 19399 W Dck     : [WirelessCapabilitiesFeatures] wccSysProp: 0 [CONTEXT service_id=289 ]
10-20 00:38:44.638 21163 19399 I Dck     : [WirelessCapabilitiesFeatures] wccMendel: 3 [CONTEXT service_id=289 ]
10-20 00:38:44.638 21163 19399 I Dck     : [WirelessCapabilitiesFeatures] deviceWccOverride: false [CONTEXT service_id=289 ]
10-20 00:38:44.638 21163 19399 I Dck     : [WirelessCapabilitiesFeatures] replaceSupportedWccWithWccOverride: true [CONTEXT service_id=289 ]
10-20 00:38:44.638 21163 19399 I Dck     : [WirelessCapabilitiesFeatures] wccOverride: not set [CONTEXT service_id=289 ]
10-20 00:38:44.639 21163 19399 I Dck     : (REDACTED) [WirelessCapabilitiesFeatures] wcc: %s
10-20 00:38:44.639 21163 19399 I Dck     : Dck module condition - hasWccSupport: false [CONTEXT service_id=289 ]
10-20 00:38:44.640 21163 19399 I Dck     : Dck module condition - downloadAllowed: false [CONTEXT service_id=289 ]
10-20 00:38:44.640 21163 19399 W Dck     : Dck module not eligible for asynchronous downloading [CONTEXT service_id=289 ]
10-20 00:38:44.671 28149 28170 I PermissionControllerServiceImpl: Updating user sensitive for uid 10408
10-20 00:38:44.715 21163 19381 I NearbyDiscovery: (REDACTED) processGrantSlicePermission: %s
10-20 00:38:44.737 21163 19477 D SQLiteQueryBuilder: SELECT external_game_id FROM game_instances JOIN games ON instance_game_id=games._id WHERE (package_name=?)
10-20 00:38:44.802 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:44.802 28490 28490 D BufferQueueConsumer: [](id:6f4a00000025,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:44.802 28490 28490 D BLASTBufferQueue: [VRI[InstallSuccess]#37](f:0,a:0) constructor()
10-20 00:38:44.802 28490 28490 D BLASTBufferQueue: [VRI[InstallSuccess]#37](f:0,a:0) update width=1202 height=720 format=-3 mTransformHint=0
10-20 00:38:44.818 18831 18843 I android.vending: Background young concurrent copying GC freed 15MB AllocSpace bytes, 13(496KB) LOS objects, 47% free, 17MB/33MB, paused 190.553ms,53us total 426.020ms
10-20 00:38:44.843 28490 29142 D BLASTBufferQueue: [VRI[InstallSuccess]#37](f:0,a:1) acquireNextBufferLocked size=1202x720 mFrameNumber=1 applyTransaction=true mTimestamp=661846719413525(auto) mPendingTransactions.size=0 graphicBufferId=122363618263299 transform=0
10-20 00:38:44.865 21104 19384 I Fitness : (REDACTED) OnPackageChangedOperation got intent: %s
10-20 00:38:44.867 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:44.868 28490 28490 D BufferQueueConsumer: [](id:6f4a00000026,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:44.868 28490 28490 D BLASTBufferQueue: [VRI[InstallSuccess]#38](f:0,a:0) constructor()
10-20 00:38:44.869 28490 28490 D BLASTBufferQueue: [VRI[InstallSuccess]#38](f:0,a:0) update width=1202 height=720 format=-3 mTransformHint=0
10-20 00:38:44.884 28490 29142 D BLASTBufferQueue: [VRI[InstallSuccess]#38](f:0,a:1) acquireNextBufferLocked size=1202x720 mFrameNumber=1 applyTransaction=true mTimestamp=661846759733217(auto) mPendingTransactions.size=0 graphicBufferId=122363618263306 transform=0
10-20 00:38:44.916 21163 19477 D SQLiteQueryBuilder: SELECT external_game_id FROM game_instances JOIN games ON instance_game_id=games._id WHERE (package_name=?)
10-20 00:38:44.957 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:44.958 28490 28490 D BufferQueueConsumer: [](id:6f4a00000027,api:0,p:-1,c:28490) connect: controlledByApp=false
10-20 00:38:44.958 28490 28490 D BLASTBufferQueue: [VRI[InstallSuccess]#39](f:0,a:0) constructor()
10-20 00:38:44.958 28490 28490 D BLASTBufferQueue: [VRI[InstallSuccess]#39](f:0,a:0) update width=1202 height=264 format=-3 mTransformHint=0
10-20 00:38:44.967 28490 29142 D BLASTBufferQueue: [VRI[InstallSuccess]#39](f:0,a:1) acquireNextBufferLocked size=1202x264 mFrameNumber=1 applyTransaction=true mTimestamp=661846842985140(auto) mPendingTransactions.size=0 graphicBufferId=122363618263313 transform=0
10-20 00:38:45.073 28490 28490 I Choreographer: Skipped 34 frames!  The application may be doing too much work on its main thread.
10-20 00:38:45.215 21104 19383 I Fitness : (REDACTED) FitCleanupIntentOperation received Intent %s
10-20 00:38:45.239 21104 19383 I Fitness : (REDACTED) OnPackageChangedOperation got intent: %s
10-20 00:38:45.245 18831 18831 I Finsky  : [2] Do not start WearSupportService due to Wear service optimization
10-20 00:38:45.269  5720 14148 D SQLiteQueryBuilder: SELECT _data FROM files WHERE ((((is_pending=0 AND NOT _modifier=4) OR (is_pending=1 AND lower(_data) NOT REGEXP '.*/\.pending-(\d+)-([^/]+)$' AND owner_package_name IN ( 'com.vivo.appstore' )))) AND (is_trashed=0) AND (volume_name IN ( 'external_primary' ))) AND ((_data like ? ))
10-20 00:38:45.281 19438 19438 E ager:releasable: BBinder_init Processname  <pre-initialized>  
10-20 00:38:45.281 19438 19438 E ager:releasable: BBinder_init hasGetProcessName  <pre-initialized>
10-20 00:38:45.294 21163 25506 I Icing   : IndexChimeraService.getServiceInterface callingPackage=com.google.android.gms componentName=AppsCorpus serviceId=36
10-20 00:38:45.356 18831 18831 I Finsky  : [2] DTU: Received onPackageAdded, replacing: false
10-20 00:38:45.362 18831 18831 I Finsky  : [2] Clearing split related stale data.
10-20 00:38:45.364 18831 18831 I Finsky  : [2] AIM: AppInfoCacheUpdater -> invalidating apps: [com.a1taxi.driverpro]
10-20 00:38:45.364 18831 18831 I Finsky  : [2] AIM: AppInfoManager-Perf > getApps > called for 1 apps
10-20 00:38:45.382 19438 19438 D CompatChangeReporter: Compat change id reported: 242716250; UID 10063; state: ENABLED
10-20 00:38:45.411 18831 18831 I Finsky  : [2] VerifyApps: app installation complete for com.a1taxi.driverpro
10-20 00:38:45.414 18831 18874 I Finsky  : [45997] AIM: AppInfoManager-Perf > OnDeviceAppInfo > cacheHitCount=0, cacheMissCount=1. Missed  in cache (limit 10) : [com.a1taxi.driverpro]
10-20 00:38:45.415 18831 18860 I Finsky  : [45985] SCH: Received scheduling request: Id: 37-261, Constraints: [{ L: 0, D: 0, C: CHARGING_NONE, I: IDLE_NONE, N: NET_NONE, B: BATTERY_ANY }]
10-20 00:38:45.416 18831 18831 I Finsky  : [2] afvf - Received: android.intent.action.PACKAGE_CHANGED, [RJhPvoB96hwwFKmVHhI9-Qa5dVJcP2sdr6v_A5ng5M0]
10-20 00:38:45.423 12475 12475 D VRI[ChromeTabbedActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:45.423 28490 28490 D VRI[DeleteStagedFileOnResult]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:45.429 19438 19438 D nativeloader: Configuring clns-shared-7 for other apk /system/dyn/app/IqooSecure/IqooSecure.apk. target_sdk_version=34, uses_libraries=, library_path=/system/dyn/app/IqooSecure/lib/arm64:/system/dyn/app/IqooSecure/IqooSecure.apk!/lib/arm64-v8a:/system/lib64:/system_ext/lib64, permitted_path=/data:/mnt/expand:/data/user/0/com.vivo.imanager:/system/dyn/app/IqooSecure:/system/lib64:/system_ext/lib64
10-20 00:38:45.431 21104 19383 I Fitness : (REDACTED) FitCleanupIntentOperation received Intent %s
10-20 00:38:45.436 12475 12475 E cr_CompositorSurfaceMgr: surfaceDestroyed format : -3
10-20 00:38:45.471 18831 18869 I Finsky  : [45993] AIM: Got app ownership map. App counts: . Unique apps: 0
10-20 00:38:45.471 18831 18869 E Finsky  : [45993] [Counters] attempted to use a non-positive increment for: 4752
10-20 00:38:45.471 18831 18869 I Finsky  : [45993] AIM: AppInfoManager-Perf > OnDeviceAppInfo > cacheHitCount=0, cacheMissCount=1. Missed  in cache (limit 10) : [com.a1taxi.driverpro]
10-20 00:38:45.473  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:38:45.475  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:38:45.475  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.vivo.appstore, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:38:45.477  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:38:45.490  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 12475, arg4: 14, name: com.android.chrome
10-20 00:38:45.517 12475 12475 D BLASTBufferQueue: [SurfaceView[com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity]#6](f:0,a:0) destructor()
10-20 00:38:45.517 12475 12475 D BufferQueueConsumer: [SurfaceView[com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity]#6(BLAST Consumer)6](id:30bb00000006,api:0,p:-1,c:12475) disconnect
10-20 00:38:45.538 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:45.540 28490 28490 D BLASTBufferQueue: [VRI[DeleteStagedFileOnResult]#32](f:0,a:1) destructor()
10-20 00:38:45.540 28490 28490 D BufferQueueConsumer: [VRI[DeleteStagedFileOnResult]#32(BLAST Consumer)32](id:6f4a00000020,api:0,p:-1,c:28490) disconnect
10-20 00:38:45.541 18831 18874 E Finsky  : [45997] [Counters] attempted to use a non-positive increment for: 4753
10-20 00:38:45.546 28490 28490 D VRI[InstallInstalling]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:45.549 12475 12475 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:38:45.549 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@1764a0
10-20 00:38:45.550 12475 12475 D BLASTBufferQueue: [VRI[ChromeTabbedActivity]#5](f:0,a:4) destructor()
10-20 00:38:45.550 12475 12475 D BufferQueueConsumer: [VRI[ChromeTabbedActivity]#5(BLAST Consumer)5](id:30bb00000005,api:0,p:-1,c:12475) disconnect
10-20 00:38:45.553 28490 29142 D BLASTBufferQueue: [VRI[InstallInstalling]#36](f:0,a:2) destructor()
10-20 00:38:45.554 28490 29142 D BufferQueueConsumer: [VRI[InstallInstalling]#36(BLAST Consumer)36](id:6f4a00000024,api:0,p:-1,c:28490) disconnect
10-20 00:38:45.566 12475 15901 I cr_BindingManager: onTrimMemory: level=20, size=3
10-20 00:38:45.574 12475 12475 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=xuf@ec5c4e
10-20 00:38:45.595 18831 18875 I Finsky  : [45998] AIM: Got app ownership map. App counts: . Unique apps: 0
10-20 00:38:45.595 18831 18875 E Finsky  : [45998] [Counters] attempted to use a non-positive increment for: 4752
10-20 00:38:45.598 18831 18831 I Finsky  : [2] AIM: AppInfoCacheUpdater -> invalidating apps: [com.a1taxi.driverpro]
10-20 00:38:45.598 18831 18831 I Finsky  : [2] AIM: AppInfoManager-Perf > getApps > called for 1 apps
10-20 00:38:45.605 19438 19438 V GraphicsEnvironment: Currently set values for:
10-20 00:38:45.605 19438 19438 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-20 00:38:45.605 19438 19438 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-20 00:38:45.605 19438 19438 V GraphicsEnvironment: com.vivo.imanager is not listed in per-application setting
10-20 00:38:45.614 28490 29142 D BLASTBufferQueue: [VRI[InstallSuccess]#39](f:0,a:1) destructor()
10-20 00:38:45.615 28490 29142 D BufferQueueConsumer: [VRI[InstallSuccess]#39(BLAST Consumer)39](id:6f4a00000027,api:0,p:-1,c:28490) disconnect
10-20 00:38:45.620 18831 18859 I Finsky  : [45984] RECEIVER_PACKAGE_MONITOR#logWorkEndAndFinishGoAsync: SUCCESS
10-20 00:38:45.628 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 264), rotation: ROTATION_0
10-20 00:38:45.631 18831 18870 I Finsky  : [45994] WM::SCH: Logging work initialize for 12-1
10-20 00:38:45.632 28490 28490 D VRI[InstallSuccess]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:45.678 28490 29142 D BLASTBufferQueue: [VRI[InstallSuccess]#37](f:0,a:3) destructor()
10-20 00:38:45.678 28490 29142 D BufferQueueConsumer: [VRI[InstallSuccess]#37(BLAST Consumer)37](id:6f4a00000025,api:0,p:-1,c:28490) disconnect
10-20 00:38:45.681 18831 18863 I Finsky  : [45988] WM::SCH: Logging work initialize for 37-261
10-20 00:38:45.693 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:45.694 28490 28490 D VRI[InstallSuccess]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:38:45.716 28490 29142 D BLASTBufferQueue: [VRI[InstallSuccess]#38](f:0,a:3) destructor()
10-20 00:38:45.717 28490 29142 D BufferQueueConsumer: [VRI[InstallSuccess]#38(BLAST Consumer)38](id:6f4a00000026,api:0,p:-1,c:28490) disconnect
10-20 00:38:45.726 28490 28490 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 720), rotation: ROTATION_0
10-20 00:38:45.853 21163 30822 I Icing   : IndexChimeraService.getServiceInterface callingPackage=com.google.android.gms componentName=null serviceId=30
10-20 00:38:45.867 18831 18873 I Finsky  : [45996] VerifyApps: running post install verification task for package: com.a1taxi.driverpro, install ID: 3edb019a-f733-4642-9964-ef56447b4ccf
10-20 00:38:45.872 19438 19543 D CompatChangeReporter: Compat change id reported: 263076149; UID 10063; state: ENABLED
10-20 00:38:45.879 18831 18873 I Finsky  : [45996] VerifyApps: Putting package com.a1taxi.driverpro in ECM mode succeeded
10-20 00:38:45.880 18831 18873 E Finsky  : [45996] [Counters] attempted to use a non-positive increment for: 4753
10-20 00:38:45.880 18831 18873 I Finsky  : [45996] AIM: AppInfoManager-Perf > OnDeviceAppInfo > cacheHitCount=0, cacheMissCount=1. Missed  in cache (limit 10) : [com.a1taxi.driverpro]
10-20 00:38:45.894 18831 18873 I Finsky  : [45996] SCH: Scheduling phonesky job Id: 12-1, CT: 1760900924602, Constraints: [{ L: 15000, D: 86400000, C: CHARGING_NONE, I: IDLE_NONE, N: NET_ANY, B: BATTERY_ANY }]
10-20 00:38:45.895 19438 19543 D avast-partner-updates: scheduleNextUpdateRun JobScheduler
10-20 00:38:45.895 19438 19543 D avast-partner-updates: Initialization of Antivirus Engine
10-20 00:38:45.898 19438 19543 D avast-partner-updates: Latest dir: 25101900_1760886983593
10-20 00:38:45.898 19438 19543 D avast-partner-updates: Returning update directory: /data/user/0/com.vivo.imanager/app_upd_data/25101900_1760886983593
10-20 00:38:45.926 19438 19550 V avast-partner-burgerEv*: HeartBeatWorker: Threshold filter - ignoring event:
10-20 00:38:45.926 19438 19550 V avast-partner-burgerEv*: { "burgerEvent": {"type": "666.0.6","time": "1760900925","customParams": ["configVersion:null:0","first_install_time:null:1751299249630"]}}
10-20 00:38:45.929 12475 12484 W .android.chrome: Cleared Reference was only reachable from finalizer (only reported once)
10-20 00:38:45.941 19438 19550 V avast-partner-burger: sRJ: 43200000, HEARTBEAT
10-20 00:38:45.962 18831 18873 I Finsky  : [45996] AIM: Got app ownership map. App counts: . Unique apps: 0
10-20 00:38:45.962 18831 18873 E Finsky  : [45996] [Counters] attempted to use a non-positive increment for: 4752
10-20 00:38:45.968 18831 18873 I Finsky  : [45996] AIM: AppInfoManager-Perf > OnDeviceAppInfo > cacheHitCount=0, cacheMissCount=1. Missed  in cache (limit 10) : [com.a1taxi.driverpro]
10-20 00:38:45.969 12475 12486 W System  : A resource failed to call close. 
10-20 00:38:45.974 19438 19537 D CompatChangeReporter: Compat change id reported: 247079863; UID 10063; state: ENABLED
10-20 00:38:45.975 12475 12486 W System  : A resource failed to call close. 
10-20 00:38:45.987 12475 12486 W System  : A resource failed to call close. 
10-20 00:38:45.988 18831 18873 E Finsky  : [45996] [Counters] attempted to use a non-positive increment for: 4753
10-20 00:38:45.988 18831 18873 I Finsky  : [45996] AIM: Got app ownership map. App counts: . Unique apps: 0
10-20 00:38:45.988 18831 18873 E Finsky  : [45996] [Counters] attempted to use a non-positive increment for: 4752
10-20 00:38:45.993 18831 18873 I Finsky  : [45996] SCH: Scheduling 1 system job(s)
10-20 00:38:45.993 18831 18873 I Finsky  : [45996] SCH: Scheduling system job Id: 9164, L: 13609, D: 56644741, C: false, I: false, N: 1
10-20 00:38:45.997 19438 19550 V avast-partner-burger: sIJ: DEVICE_INFO
10-20 00:38:45.999 18831 18873 E Finsky  : [45996] [Counters] attempted to use a non-positive increment for: 4753
10-20 00:38:46.036 18831 18863 I Finsky  : [45988] [ContentSync] finished, scheduled=true
10-20 00:38:46.068 18831 18873 I Finsky  : [45996] AIM: AppInfoManager-Perf > ItemModel > CacheSize=70, cacheHitCount=0, cacheMissCount=0, total appsWithNoServerDataCount=1. Missed  in cache (limit 10) : []
10-20 00:38:46.068 18831 18873 I Finsky  : [45996] SCH: Scheduling phonesky job Id: 37-261, CT: 1760900925415, Constraints: [{ L: 0, D: 0, C: CHARGING_NONE, I: IDLE_NONE, N: NET_NONE, B: BATTERY_ANY }, { L: 0, D: 0, C: CHARGING_NONE, I: IDLE_NONE, N: NET_NONE, B: BATTERY_ANY }]
10-20 00:38:46.096 18831 18873 I Finsky  : [45996] AIM: AppInfoManager-Perf > ItemModel > CacheSize=70, cacheHitCount=0, cacheMissCount=0, total appsWithNoServerDataCount=1. Missed  in cache (limit 10) : []
10-20 00:38:46.144 18831 18873 I Finsky  : [45996] AIM: AppInfoManager-Perf > ItemModel > CacheSize=70, cacheHitCount=0, cacheMissCount=0, total appsWithNoServerDataCount=1. Missed  in cache (limit 10) : []
10-20 00:38:46.145 18831 18873 I Finsky  : [45996] SCH: Scheduling 1 system job(s)
10-20 00:38:46.148 18831 18873 I Finsky  : [45996] SCH: Scheduling expedited system job 9163
10-20 00:38:46.153 19438 19562 D CompatChangeReporter: Compat change id reported: 253665015; UID 10063; state: ENABLED
10-20 00:38:46.162 18831 18869 I Finsky  : [45993] AIM: AppInfoManager-Perf > getApps > data collection finished
10-20 00:38:46.162 18831 18869 I Finsky  : [45993] AIM: AppInfoManager-Perf > maybeDestroyAppInfoManager is called. actives = 2
10-20 00:38:46.168 19438 19562 I WM-GreedyScheduler: Ignoring schedule request in a secondary process
10-20 00:38:46.169 18831 18831 I Finsky  : [2] SCH: job service start with id 9163.
10-20 00:38:46.171 18831 18869 I Finsky  : [45993] AIM: AppInfoManager-Perf > ItemModel > CacheSize=70, cacheHitCount=0, cacheMissCount=0, total appsWithNoServerDataCount=1. Missed  in cache (limit 10) : []
10-20 00:38:46.187 18831 18875 I Finsky  : [45998] AIM: AppInfoManager-Perf > getApps > data collection finished
10-20 00:38:46.187 18831 18875 I Finsky  : [45998] AIM: AppInfoManager-Perf > maybeDestroyAppInfoManager is called. actives = 1
10-20 00:38:46.189 18831 19464 I Finsky  : [47332] SCH: Satisfied jobs for 9163 are: 37-261
10-20 00:38:46.192 18831 19564 I Finsky  : [47339] SCH: Job 37-261 starting
10-20 00:38:46.193 18831 18831 I Finsky  : [2] WM::SCH: Logging work start for 37-261
10-20 00:38:46.196 18831 18831 I Finsky  : [2] Received an install/uninstall event for package com.a1taxi.driverpro
10-20 00:38:46.198 18831 18831 I Finsky  : [2] SCH: jobFinished: 37-261. TimeElapsed: 5ms.
10-20 00:38:46.198 18831 18831 I Finsky  : [2] WM::SCH: Logging work end for 37-261
10-20 00:38:46.206 18831 18875 I Finsky  : [45998] Not an active Cubes user. Ignoring package install/uninstall event.
10-20 00:38:46.217 18831 18873 I Finsky  : [45996] SCH: Scheduling phonesky job Id: 26-1414141414, CT: 1760899685967, Constraints: [{ L: 43199999, D: 44099999, C: CHARGING_NONE, I: IDLE_NONE, N: NET_NONE, B: BATTERY_ANY }]
10-20 00:38:46.224 19438 19543 I avast-partner-antiviru*: Library instantiation.
10-20 00:38:46.225 19438 19543 I avast-partner-antiviru*: Trying to open properties file from diff update directory
10-20 00:38:46.225 19438 19543 V avast-partner-antiviru*: Initialization from properties input stream
10-20 00:38:46.226 18831 18873 I Finsky  : [45996] SCH: Scheduling 1 system job(s)
10-20 00:38:46.226 18831 18873 W JobInfo : Job 'com.android.vending/com.google.android.finsky.scheduler.process.mainimpl.PhoneskyJobServiceMain#9171' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:38:46.226 18831 18873 I Finsky  : [45996] SCH: Scheduling system job Id: 9171, L: 41959740, D: 42859740, C: false, I: false, N: 0
10-20 00:38:46.226 19438 19543 I avast-partner-antiviru*: Properties initialized.
10-20 00:38:46.226 19438 19543 D avast-partner-antiviru*: Going to initialise the global state of the context
10-20 00:38:46.227 19438 19543 I avast-partner-antiviru*: Getting file from update directory: assets/db_dex.nmp
10-20 00:38:46.227 19438 19543 I avast-partner-antiviru*: Getting file from update directory: assets/db_dex.map
10-20 00:38:46.227 19438 19543 I avast-partner-antiviru*: Getting file from update directory: assets/db_elfa.nmp
10-20 00:38:46.227 19438 19543 I avast-partner-antiviru*: Getting file from update directory: assets/db_elfa.map
10-20 00:38:46.228 19438 19543 I avast-partner-antiviru*: Getting file from update directory: assets/db_evoapk.dat
10-20 00:38:46.228 19438 19543 I avast-partner-antiviru*: Getting file from update directory: assets/db_crt.dat
10-20 00:38:46.228 19438 19543 I avast-partner-antiviru*: Getting file from update directory: assets/vps.prop
10-20 00:38:46.228 19438 19543 I avast-partner-antiviru*: Trying to init engine: 251019-00
10-20 00:38:46.232 21163  9698 I Icing   : Usage reports ok 5, Failed Usage reports 0, indexed 0, rejected 0
10-20 00:38:46.242 18831 19564 I Finsky  : [47339] SCH: job service finished with id 9163.
10-20 00:38:46.295 21163  9698 I Icing   : Usage reports ok 0, Failed Usage reports 0, indexed 0, rejected 0
10-20 00:38:46.381 19438 19541 I ager:releasable: Starting a blocking GC Alloc
10-20 00:38:46.385 19438 19543 I ager:releasable: Waiting for a blocking GC Alloc
10-20 00:38:46.396 21163  9698 I Icing   : Indexing com.google.android.gms-apps from com.google.android.gms
10-20 00:38:46.467 21163  9698 I Icing   : Indexing done com.google.android.gms-apps
10-20 00:38:46.468 21163  9698 I Icing   : Indexing com.google.android.gms-apps from com.google.android.gms
10-20 00:38:46.470 21163  9698 I Icing   : Indexing done com.google.android.gms-apps
10-20 00:38:46.524 19438 19541 I ager:releasable: Alloc concurrent copying GC freed 15MB AllocSpace bytes, 3043(221MB) LOS objects, 49% free, 18MB/36MB, paused 131us,46us total 141.935ms
10-20 00:38:46.526 19438 19453 I ager:releasable: WaitForGcToComplete blocked Background on Alloc for 142.252ms
10-20 00:38:46.526 19438 19543 I ager:releasable: WaitForGcToComplete blocked Alloc on Alloc for 141.423ms
10-20 00:38:46.736 19438 19543 I avast-partner-antiviru*: Global state initialised
10-20 00:38:46.739 19438 19543 V avast-partner-antiviru*: Registering new cache for hashes
10-20 00:38:46.749 19438 19543 D avast-partner-antiviru*: Cloud hash cache initialised
10-20 00:38:46.753 19438 19543 D avast-partner-antiviru*: Returning, library instantiated
10-20 00:38:46.754 19438 19543 W avast-partner-updates: register: one-time registration: RESULT_OK
10-20 00:38:46.755 19438 19543 D avast-partner-updates: scheduleNextUpdateRun JobScheduler
10-20 00:38:46.759 19438 19543 V avast-partner-URLInfoS*: init: success
10-20 00:38:46.805 19438 19568 D avast-partner-sdk: acquireContext: 0
10-20 00:38:46.807 19438 19568 D avast-partner-antiviru*: Scanning context: 0: sdk key=86122fad1424217a17a1c6e19fefb319016322fd
10-20 00:38:46.807 19438 19568 D avast-partner-antiviru*: Scan flags 0x221
10-20 00:38:46.807 19438 19568 D avast-partner-antiviru*: got path=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk for scan
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.adaptiveauth.enable_adaptive_auth = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.adaptiveauth.report_biometric_auth_attempts = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.allow_querying_profile_type = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.allow_screen_brightness_control_on_cope = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.always_persist_do = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.assist_content_user_restriction_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.backup_connected_apps_settings = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.backup_service_security_log_event_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.coexistence_migration_for_non_emm_management_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.copy_account_with_retry_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.cross_user_suspension_enabled_ro = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.dedicated_device_control_api_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.dedicated_device_control_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.default_sms_personal_app_suspension_fix_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.delete_private_space_under_restriction = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.device_policy_size_tracking_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.device_policy_size_tracking_internal_bug_fix_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.device_policy_size_tracking_internal_enabled = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.device_theft_api_enabled = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.device_theft_impl_enabled = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.disallow_user_control_bg_usage_fix = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.disallow_user_control_stopped_state_fix = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.dmrh_set_app_restrictions = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.dumpsys_policy_engine_migration_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.esim_management_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.esim_management_ux_enabled = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.headless_device_owner_delegate_security_logging_bug_fix = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.headless_device_owner_provisioning_fix_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.headless_device_owner_single_user_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.headless_single_min_target_sdk = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.headless_single_user_bad_device_admin_state_fix = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.headless_single_user_compatibility_fix = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.headless_single_user_fixes = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.hsum_unlock_notification_fix = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.is_mte_policy_enforced = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.is_recursive_required_app_merging_enabled = false
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.onboarding_bugreport_storage_bug_fix = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.onboarding_bugreport_v2_enabled = true
10-20 00:38:46.849 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.onboarding_consentless_bugreports = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.permission_migration_for_zero_trust_api_enabled = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.permission_migration_for_zero_trust_impl_enabled = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.policy_engine_migration_v2_enabled = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.power_exemption_bg_usage_fix = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.quiet_mode_credential_bug_fix = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.security_log_v2_enabled = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.admin.flags.unmanaged_mode_migration = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.api_rich_ongoing = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.api_tvextender = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.app_restrictions_api = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.app_start_info = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.app_start_info_timestamps = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.bic_client = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.category_voicemail = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.check_autogroup_before_post = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.clean_up_spans_and_new_lines = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.clear_dns_cache_on_network_rules_update = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.compact_heads_up_notification = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.compact_heads_up_notification_reply = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.contextualsearch.flags.enable_service = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.contextualsearch.flags.enable_token_refresh = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.enable_fgs_timeout_crash_behavior = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.enable_night_mode_binder_cache = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.enable_pip_ui_state_callback_on_entering = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.evenly_divided_call_style_action_layout = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.gate_fgs_timeout_anr_behavior = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.get_binding_uid_importance = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.introduce_new_service_ontimeout_callback = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.job.backup_jobs_exemption = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.job.enforce_minimum_time_windows = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.job.job_debug_info_apis = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.keyguard_private_notifications = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.lifetime_extension_refactor = false
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.modes_api = true
10-20 00:38:46.850 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.modes_ui = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.notification_channel_vibration_effect_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.notification_expansion_optional = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.notifications_use_app_icon = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.notifications_use_app_icon_in_row = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.notifications_use_monochrome_app_icon = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.ondeviceintelligence.flags.enable_on_device_intelligence = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.pinner_service_client_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.redact_sensitive_content_notifications_on_lockscreen = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.remove_remote_views = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.restrict_audio_attributes_alarm = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.restrict_audio_attributes_call = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.restrict_audio_attributes_media = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.secure_allowlist_token = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.skip_bg_mem_trim_on_fg_app = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.smartspace.flags.access_smartspace = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.smartspace.flags.remote_views = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.sort_section_by_time = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.system_terms_of_address_enabled = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.uid_importance_listener_for_uids = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.update_ranking_time = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.usage.disable_idle_check = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.usage.filter_based_event_query_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.usage.get_app_bytes_by_data_type_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.usage.report_usage_stats_permission = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.usage.use_dedicated_handler_thread = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.usage.use_parceled_list = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.usage.user_interaction_type_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.visit_person_uri = false
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.wearable.enable_data_request_observer_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.wearable.enable_hotword_wearable_sensing_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.wearable.enable_provide_wearable_connection_api = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.wearable.enable_restart_wss_process = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.app.wearable.enable_unsupported_operation_status_code = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.appwidget.flags.draw_data_parcel = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.appwidget.flags.generated_previews = true
10-20 00:38:46.851 19438 19568 V AconfigFlags: Read Aconfig default flag value android.appwidget.flags.remote_adapter_conversion = false
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.appwidget.flags.remove_app_widget_service_io_from_critical_path = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.appwidget.flags.support_resume_restore_after_reboot = false
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.appwidget.flags.throttle_widget_updates = false
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.android_vic_vehicle_properties = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.area_id_config_access = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.batched_subscriptions = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_app_card = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_audio_dynamic_devices = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_audio_fade_manager_configuration = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_audio_min_max_activation_volume = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_audio_mute_ambiguity = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_dump_to_proto = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_evs_query_service_status = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_evs_stream_management = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_night_global_setting = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_power_cancel_shell_command = false
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_power_policy_refactoring = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_property_detailed_error_codes = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_property_value_property_status = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.car_watchdog_memory_profiling = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.cluster_health_monitoring = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.display_compatibility = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.per_display_max_brightness = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.persist_ap_settings = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.projection_query_bt_profile_inhibit = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.serverless_remote_access = true
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.stop_process_before_suspend_to_disk = false
10-20 00:38:46.852 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.subscription_with_resolution = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.switch_user_ignoring_uxr = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.car.feature.variable_update_rate = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.abort_if_no_context_hub_found = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.bug_fix_reduce_lock_holding_period = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.context_hub_callback_uuid_enabled = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.flag_log_nanoapp_load_metrics = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.metrics_reporter_in_the_daemon = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.reconnect_host_endpoints_after_hal_restart = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.reduce_lock_holding_period = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.reliable_message = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.reliable_message_duplicate_detection_service = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.reliable_message_implementation = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.reliable_message_retry_support_service = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.reliable_message_test_mode_behavior = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.remove_ap_wakeup_metric_report_limit = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.chre.flags.wait_for_preloaded_nanoapp_start = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.association_tag = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.companion_transport_apis = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.device_presence = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.new_association_builder = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.ongoing_perm_sync = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.perm_sync_user_consent = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.unpair_associated_device = false
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.consistent_display_flags = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.cross_device_clipboard = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.dynamic_policy = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.enable_native_vdm = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.express_metrics = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.impulse_velocity_strategy_for_touch_navigation = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.interactive_screen_mirror = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.intercept_intents_before_applying_policy = true
10-20 00:38:46.853 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.persistent_device_id_api = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.stream_camera = false
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.stream_permissions = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.vdm_custom_home = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.vdm_custom_ime = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.vdm_public_apis = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.virtual_camera = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtual.flags.virtual_stylus = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtualdevice.flags.camera_device_awareness = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtualdevice.flags.device_aware_drm = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtualdevice.flags.device_aware_record_audio_permission = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtualdevice.flags.intent_interception_action_matching_fix = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtualdevice.flags.metrics_collection = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtualdevice.flags.virtual_camera_service_discovery = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.companion.virtualdevice.flags.virtual_display_multi_window_mode_support = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.flags.enable_bind_package_isolated_process = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.allow_sdk_sandbox_query_intent_activities = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.archiving = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.asl_in_apk_app_metadata_source = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.component_state_changed_metrics = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.disallow_sdk_libs_to_be_apps = false
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.emergency_install_permission = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.encode_app_intent = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.fix_duplicated_flags = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.fix_system_apps_first_install_time = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.force_multi_arch_native_libs_match = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.get_package_info = true
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.get_package_info_with_fd = false
10-20 00:38:46.854 19438 19568 V AconfigFlags: Read Aconfig default flag value android.content.pm.get_package_storage_stats = true
10-20 00:38:47.176 19438 19453 W ratelimit: Single process limit 250/s drop 2266 lines.
10-20 00:38:47.176 19438 19453 I ager:releasable: Background concurrent copying GC freed 99KB AllocSpace bytes, 410(94MB) LOS objects, 27% free, 62MB/86MB, paused 166us,629us total 101.198ms
10-20 00:38:47.241 19438 19568 V avast-partner-antiviru*: Cert: FF976F2C411661485A4093C1345D47D64ACA9A9C
10-20 00:38:47.411 19438 19453 I ager:releasable: Background concurrent copying GC freed 455KB AllocSpace bytes, 374(74MB) LOS objects, 31% free, 51MB/75MB, paused 451us,253us total 109.736ms
10-20 00:38:48.462 21104 19070 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:38:48.462 21104 19070 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:38:48.878 18831 18874 I Finsky  : [45997] Installer package name of package com.android.contacts is 
10-20 00:38:48.878 18831 18874 I Finsky  : [45997] Installer package name of package com.android.deskclock is 
10-20 00:38:48.878 18831 18874 I Finsky  : [45997] Installer package name of package com.android.dialer is 
10-20 00:38:48.878 18831 18874 I Finsky  : [45997] Installer package name of package com.android.settings is 
10-20 00:38:48.879 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.gallery is 
10-20 00:38:48.879 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.soundrecorder is 
10-20 00:38:48.879 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.vhome is 
10-20 00:38:48.879 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.website is com.vivo.website
10-20 00:38:48.880 18831 18874 I Finsky  : [45997] Installer package name of package com.google.android.apps.docs.editors.docs is 
10-20 00:38:48.880 18831 18874 I Finsky  : [45997] Installer package name of package com.google.android.apps.docs.editors.slides is 
10-20 00:38:48.880 18831 18874 I Finsky  : [45997] Installer package name of package com.grofers.customerapp is com.vivo.easyshare
10-20 00:38:48.880 18831 18874 I Finsky  : [45997] Installer package name of package com.spotify.music is 
10-20 00:38:48.880 18831 18874 I Finsky  : [45997] Installer package name of package com.android.VideoPlayer is 
10-20 00:38:48.880 18831 18874 I Finsky  : [45997] Installer package name of package com.android.bbk.lockscreen3 is 
10-20 00:38:48.881 18831 18874 I Finsky  : [45997] Installer package name of package com.android.bbkmusic is 
10-20 00:38:48.881 18831 18874 I Finsky  : [45997] Installer package name of package com.android.camera is 
10-20 00:38:48.881 18831 18874 I Finsky  : [45997] Installer package name of package com.android.stk is 
10-20 00:38:48.881 18831 18874 I Finsky  : [45997] Installer package name of package com.bbk.cloud is 
10-20 00:38:48.881 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.Tips is 
10-20 00:38:48.881 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.appstore is com.vivo.appstore
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.browser is 
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.calculator is 
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.compass is 
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.easyshare is 
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.feedback is 
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.game is com.vivo.appstore
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.imanager is 
10-20 00:38:48.882 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.notes is 
10-20 00:38:48.883 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.simplelauncher is 
10-20 00:38:48.883 18831 18874 I Finsky  : [45997] Installer package name of package com.vivo.weather is 
10-20 00:38:48.883 18831 18874 I Finsky  : [45997] Installer package name of package com.a1taxi.a1taxicustomer is com.google.android.packageinstaller
10-20 00:38:48.883 18831 18874 I Finsky  : [45997] Installer package name of package com.a1taxi.driverpro is com.google.android.packageinstaller
10-20 00:38:48.883 18831 18874 I Finsky  : [45997] Installer package name of package com.airbnb.android is com.vivo.easyshare
10-20 00:38:48.883 18831 18874 I Finsky  : [45997] Installer package name of package com.atomczak.notepat is com.vivo.easyshare
10-20 00:38:48.884 18831 18874 I Finsky  : [45997] Installer package name of package com.blockchainvault is com.vivo.easyshare
10-20 00:38:48.884 18831 18874 I Finsky  : [45997] Installer package name of package com.facebook.katana is com.facebook.system
10-20 00:38:48.884 18831 18874 I Finsky  : [45997] Installer package name of package com.instagram.android is com.facebook.system
10-20 00:38:48.884 18831 18874 I Finsky  : [45997] Installer package name of package com.mediocre.smashhit is com.vivo.appstore
10-20 00:38:48.884 18831 18874 I Finsky  : [45997] Installer package name of package com.meesho.supply is com.vivo.appstore
10-20 00:38:48.884 18831 18874 I Finsky  : [45997] Installer package name of package com.microsoft.office.excel is com.vivo.easyshare
10-20 00:38:48.885 18831 18874 I Finsky  : [45997] Installer package name of package net.skyscanner.android.main is com.vivo.easyshare
10-20 00:38:49.142 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:38:49.150 21104 18141 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:38:49.260 18831 18831 E Finsky  : [2] Failed to load an Item com.android.vending, no data available.
10-20 00:38:49.261 18831 18831 E Finsky  : [2] Required items [com.android.vending]
10-20 00:38:49.261 18831 18831 E Finsky  : [2] Requested items [[com.android.vending]]
10-20 00:38:49.261 18831 18831 E Finsky  : [2] Retrieved items []
10-20 00:38:50.590 19438 19568 V avast-partner-antiviru*: Skipping detection verification in cloud
10-20 00:38:50.596 19438 19568 D avast-partner-sdk: releaseContext: 0
10-20 00:38:51.472 21104 21119 I WifiScanner: onFullResults
10-20 00:38:51.472 21104 22647 I WifiScanner: onFullResults
10-20 00:38:51.474 21104 21143 I WifiScanner: onFullResults
10-20 00:38:51.496 21104 18141 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:38:51.567 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:38:51.569 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:38:51.578 21104 18141 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-20 00:38:51.581 21104 21734 W PersonalSafety: Reject: No sufficient displacement. [CONTEXT service_id=310 ]
10-20 00:38:51.585 21104 21734 W PersonalSafety: Ble scanner not running, ignore location update [CONTEXT service_id=310 ]
10-20 00:38:54.945 21104 19486 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-20 00:38:54.963 21163  9698 I PlayGamesServices[GamesSyncAdapter]: Starting sync for 2cfab88c
10-20 00:38:54.973 21163  9698 I PlayGamesServices[GamesSyncAdapter]: Sync duration for 2cfab88c: 3
10-20 00:38:54.988 21163  9698 D SQLiteQueryBuilder: SELECT _id FROM players WHERE ((external_player_id=?))
10-20 00:38:54.993 21163  9698 D SQLiteQueryBuilder: SELECT current_level, profile_icon_image_id, is_profile_visible, current_xp_total, 0 AS is_muted, (SELECT url FROM images innerimage WHERE innerimage._id=players.banner_image_portrait_id LIMIT 1) AS banner_image_portrait_url, has_debug_access, has_all_public_acls, profile_name, play_together_nickname, is_in_circles, next_level, player_title, (SELECT url FROM images innerimage WHERE innerimage._id=players.profile_icon_image_id LIMIT 1) AS profile_icon_image_url, external_player_id, 'content://com.google.android.gms.games.background/images/2cfab88c/'||profile_icon_image_id AS profile_icon_image_uri, always_auto_sign_in, next_level_max_xp, 0 AS gamer_friend_status, last_updated, last_level_up_timestamp, 0 AS gamer_friend_update_timestamp, 'content://com.google.android.gms.games.background/images/2cfab88c/'||most_recent_game_hi_res_id AS most_recent_game_hi_res_uri, friends_list_visibility, most_recent_game_hi_res_id, most_recent_game_icon_id, banner_image_portrait_id, 'content://com.google.android.gms.games.background/images/2cfab88c/'||banner_image_portrait_id AS banner_image_portrait_uri, gamer_tag, 'content://com.google.android.gms.games.background/images/2cfab88c/'||banner_image_landscape_id AS banner_image_landscape_uri, _id, (SELECT url FROM images innerimage WHERE innerimage._id=players.banner_image_landscape_id LIMIT 1) AS banner_image_landscape_url, most_recent_external_game_id, banner_image_landscape_id, profile_creation_timestamp, 'content://com.google.android.gms.games.background/images/2cfab88c/'||most_recent_game_featured_id AS most_recent_game_featured_uri, most_recent_game_name, most_recent_game_featured_id, real_name, current_level_max_xp, current_level_min_xp, play_together_invitation_nickname, nickname_abuse_report_token, play_together_friend_status, (SELECT url FROM images innerimage WHERE innerimage._id=players.profile_hi_res_image_id LIMIT 1) AS profile_hi_res_image_url, total_unlocked_achievements, 'content://com.google.android.gms.games.background/images/2cfab88c/'||profile_hi_res_image_id AS profile_hi_res_image_uri, 'content://com.google.android.gms.games.background/images/2cfab88c/'||most_recent_game_icon_id AS most_recent_game_icon_uri, most_recent_activity_timestamp, profile_hi_res_image_id FROM players WHERE ((external_player_id=?))
10-20 00:38:55.013 21104 18141 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-20 00:38:55.025 21163 22696 W PlayGamesServices[UiUtils]: AppVersion: Cannot find the installed destination app.
10-20 00:38:55.025 21163 22696 I GetServiceValidatorImpl: (REDACTED) onGetService() from Client SDK version [%s], Module version [%s], PGA version [%s], Account [%s], Calling package [%s], Game package [%s]
10-20 00:38:55.027 21163 22696 W GetGamesServiceReqFacto: Parsing request with ignored arguments. signInOptionsBundle [Bundle[{com.google.android.gms.signin.internal.serverClientId=null, com.google.android.gms.signin.internal.usePromptModeForAuthCode=true, com.google.android.gms.signin.internal.logSessionId=null, com.google.android.gms.signin.internal.hostedDomain=null, com.google.android.gms.signin.internal.offlineAccessRequested=false, com.google.android.gms.signin.internal.waitForAccessTokenRefresh=false, com.google.android.gms.signin.internal.clientRequestedAccount=Account {name=<<default account>>, type=com.google}, com.google.android.gms.signin.internal.idTokenRequested=false, com.google.android.gms.signin.internal.forceCodeForRefreshToken=false}]], isRetryingSignIn [false], skipWelcomePopup [false], requireGooglePlus [false]
10-20 00:38:55.028 21163 22696 I GetGamesServiceReqFacto: Replacing request for `games` scope with `games_lite`
10-20 00:38:55.040 21163 19597 I SignInPerformer-30: (REDACTED) Handling request [%s], isFirstPartyCaller [%s]
10-20 00:38:55.041 21163 19597 I SignInPerformer-30: Successfully brokered first-party unauthenticated GamesService [CONTEXT service_id=1 ]
10-20 00:38:55.042 21163 19597 I GetGamesServiceV2Op: (REDACTED) Successfully brokered GamesService for request %s
10-20 00:38:55.044 21163 22696 W PlayGamesServices[UiUtils]: AppVersion: Cannot find the installed destination app.
10-20 00:38:55.045 21163 22696 W PlayGamesServices[UiUtils]: AppVersionName: Cannot find the installed destination app.
10-20 00:38:55.082 21104 19596 I NetworkScheduler.Stats: (REDACTED) Task %s/%s started execution. cause:%s exec_start_elapsed_seconds: %s
10-20 00:38:55.115 21104 19596 I NetworkScheduler.Stats: (REDACTED) Task %s/%s finished executing. cause:%s result: %s elapsed_millis: %s uptime_millis: %s exec_start_elapsed_seconds: %s
10-20 00:38:55.628 12475 15901 I cr_BindingManager: Release visible connections: 3
10-20 00:38:58.464 21104 19070 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:38:58.464 21104 19070 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:38:58.701  7096  7120 I native  : I0000 00:00:1760900938.701050    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760900938590380
10-20 00:38:58.724  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:38:59.213 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.backup.GMS_MODULE_RESTORE dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalBoundBrokerService }
10-20 00:39:00.615 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.safebrowsing.SafeBrowsingService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsBoundBrokerService }
10-20 00:39:00.622 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.chromesync.service.firstparty.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-20 00:39:01.494 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~cbG-YjOP44jOlX9mg9SGEg==/com.a1taxi.a1taxicustomer-61J6uCEzulrUn2jS9vZfNA==/base.apk' with 1 weak references
10-20 00:39:01.500 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk' with 1 weak references
10-20 00:39:01.501 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~O6rl15dJb50drM-hNT-o5A==/host.exp.exponent-VV2RWFguikxSwJOsrbvgyA==/base.apk' with 1 weak references
10-20 00:39:01.502 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~O6rl15dJb50drM-hNT-o5A==/host.exp.exponent-VV2RWFguikxSwJOsrbvgyA==/split_config.arm64_v8a.apk' with 1 weak references
10-20 00:39:01.502 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~O6rl15dJb50drM-hNT-o5A==/host.exp.exponent-VV2RWFguikxSwJOsrbvgyA==/split_config.en.apk' with 1 weak references
10-20 00:39:01.503 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~O6rl15dJb50drM-hNT-o5A==/host.exp.exponent-VV2RWFguikxSwJOsrbvgyA==/split_config.xxhdpi.apk' with 1 weak references
10-20 00:39:01.503 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~JmuPTYBTj-jaJNIstZq-9w==/com.android.chrome-bNbZsDOoFREdLvLbMoksJw==/base.apk' with 1 weak references
10-20 00:39:01.504 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~JmuPTYBTj-jaJNIstZq-9w==/com.android.chrome-bNbZsDOoFREdLvLbMoksJw==/split_chrome.apk' with 1 weak references
10-20 00:39:01.504 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~JmuPTYBTj-jaJNIstZq-9w==/com.android.chrome-bNbZsDOoFREdLvLbMoksJw==/split_config.en.apk' with 1 weak references
10-20 00:39:01.504 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~JmuPTYBTj-jaJNIstZq-9w==/com.android.chrome-bNbZsDOoFREdLvLbMoksJw==/split_dev_ui.apk' with 1 weak references
10-20 00:39:01.504 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~JmuPTYBTj-jaJNIstZq-9w==/com.android.chrome-bNbZsDOoFREdLvLbMoksJw==/split_on_demand.apk' with 1 weak references
10-20 00:39:01.504 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~JmuPTYBTj-jaJNIstZq-9w==/com.android.chrome-bNbZsDOoFREdLvLbMoksJw==/split_stack_unwinder.apk' with 1 weak references
10-20 00:39:01.505 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~JmuPTYBTj-jaJNIstZq-9w==/com.android.chrome-bNbZsDOoFREdLvLbMoksJw==/split_test_dummy.apk' with 1 weak references
10-20 00:39:01.505 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~y8c-7G8746PBceSb85X2WQ==/com.google.android.trichromelibrary_739011133-eYqA66OgqxH0rGEpyXHuGg==/base.apk' with 1 weak references
10-20 00:39:01.505 21163 21175 W gle.android.gms: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~_0FdKpcvWfW-KZlgXOUC5w==/com.vivo.appstore-5USa7T1qGISffp-EA1DvdA==/base.apk' with 1 weak references
10-20 00:39:02.700 18831 18857 I Finsky  : [45982] Stats for Executor: LightweightExecutor ubw@691a097[Running, pool size = 4, active threads = 0, queued tasks = 0, completed tasks = 9067]
10-20 00:39:02.701 18831 18857 I Finsky  : [45982] Stats for Executor: BlockingExecutor ubw@6b99284[Running, pool size = 2, active threads = 0, queued tasks = 0, completed tasks = 995]
10-20 00:39:02.702 18831 18857 I Finsky  : [45982] Stats for Executor: bgExecutor ubw@dbfca6d[Running, pool size = 4, active threads = 0, queued tasks = 0, completed tasks = 19693]
10-20 00:39:05.877 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-20 00:39:05.907 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:05.908 10567 10567 D BufferQueueConsumer: [](id:294700000007,api:0,p:-1,c:10567) connect: controlledByApp=false
10-20 00:39:05.908 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:0) constructor()
10-20 00:39:05.908 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-20 00:39:05.936 10567 10622 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661867811970987(auto) mPendingTransactions.size=0 graphicBufferId=45384919416884 transform=0
10-20 00:39:05.940 10567 10567 I bnlz    : onStart
10-20 00:39:05.951 18831 18831 I Finsky  : [2] SCH: job service start with id 9164.
10-20 00:39:05.966 18831 19464 I Finsky  : [47332] SCH: Satisfied jobs for 9164 are: 12-1
10-20 00:39:05.968 18831 19564 I Finsky  : [47339] SCH: Job 12-1 starting
10-20 00:39:05.990 18831 18831 I Finsky  : [2] WM::SCH: Logging work start for 12-1
10-20 00:39:05.991 18831 18831 I Finsky  : [2] [ContentSync] job started
10-20 00:39:06.005 10567 10567 I bldh    : (REDACTED) [%s] onStart()
10-20 00:39:06.006 10567 10567 I blfn    : Reloading theme data
10-20 00:39:06.023 21163 21163 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-20 00:39:06.035  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:06.036  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:06.036  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:06.039  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:06.047 10567 10567 I bnlz    : onResume
10-20 00:39:06.809 28490 29125 W ackageinstaller: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/vmdl1657579144.tmp/PackageInstaller' with 1 weak references
10-20 00:39:06.946 18831 18843 I android.vending: Background young concurrent copying GC freed 12MB AllocSpace bytes, 7(288KB) LOS objects, 37% free, 20MB/33MB, paused 535us,126us total 153.500ms
10-20 00:39:07.070 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.mainline.primary.libs' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:07.111 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.widevine.nonupdatable' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:07.211 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.devicelock' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:07.362 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.apex.cts.shim' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:07.583 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.appsearch' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:07.697 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.art' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:07.989 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.mediaprovider' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.016 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.virt' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.018 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.btservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.077 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.resolv' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.150 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.configinfrastructure' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.151 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.media' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.275 18831 18954 I PlayCommon: [46008] Preparing logs for uploading
10-20 00:39:08.285 18831 18954 I PlayCommon: [46008] Connecting to server: https://play.googleapis.com/play/log?format=raw&proto_v2=true
10-20 00:39:08.406 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.vndk.v31' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.410 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.vndk.v33' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.429 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.vndk.v34' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.466 21104 19602 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:39:08.467 21104 19602 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:39:08.537 18831 18954 I PlayCommon: [46008] Successfully uploaded logs.
10-20 00:39:08.581 15711 15711 I 1taxi.driverpro: Using CollectorTypeCC GC.
10-20 00:39:08.584 15711 15711 E 1taxi.driverpro: Not starting debugger since process cannot load the jdwp agent.
10-20 00:39:08.587 15711 15711 D nativeloader: Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller /apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
10-20 00:39:08.596 15711 15711 E 1taxi.driverpro: BBinder_init Processname  <pre-initialized>  
10-20 00:39:08.596 15711 15711 E 1taxi.driverpro: BBinder_init hasGetProcessName  <pre-initialized>
10-20 00:39:08.605 15711 15711 D CompatChangeReporter: Compat change id reported: 242716250; UID 10408; state: ENABLED
10-20 00:39:08.618 15711 15711 D ApplicationLoaders: Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
10-20 00:39:08.628 15711 15711 D nativeloader: Configuring clns-7 for other apk /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk. target_sdk_version=34, uses_libraries=, library_path=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64:/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.a1taxi.driverpro
10-20 00:39:08.644 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.sdkext' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.649 15711 15711 V GraphicsEnvironment: Currently set values for:
10-20 00:39:08.649 15711 15711 V GraphicsEnvironment:   angle_gl_driver_selection_pkgs=[com.android.angle, com.linecorp.b612.android, com.campmobile.snow, com.google.android.apps.tachyon]
10-20 00:39:08.649 15711 15711 V GraphicsEnvironment:   angle_gl_driver_selection_values=[angle, native, native, native]
10-20 00:39:08.649 15711 15711 V GraphicsEnvironment: com.a1taxi.driverpro is not listed in per-application setting
10-20 00:39:08.649 15711 15711 V GraphicsEnvironment: App is not on the allowlist for updatable production driver.
10-20 00:39:08.809 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.adservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.811 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.tethering' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:08.819 10567 10567 I bnlz    : onPause
10-20 00:39:08.825 15711 15711 W FirebaseApp: Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.
10-20 00:39:08.825 15711 15711 I FirebaseInitProvider: FirebaseApp initialization unsuccessful
10-20 00:39:08.829 15711 15711 D WM-WrkMgrInitializer: Initializing WorkManager with default configuration.
10-20 00:39:08.851 15711 15711 V SoLoader: Init SoLoader delegate
10-20 00:39:08.867 15711 15711 D AppCompatDelegate: Checking for metadata for AppLocalesMetadataHolderService : Service not found
10-20 00:39:08.912 15711 15711 V SoLoader: libhermes.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.914 15711 15711 V SoLoader: libjsi.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.915 15711 15711 V SoLoader: libfolly_runtime.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.915 15711 15711 V SoLoader: libglog.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.916 15711 15711 V SoLoader: libm.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.916 15711 15711 V SoLoader: libm.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.916 15711 15711 D SoLoader: libm.so found on /system/lib64
10-20 00:39:08.916 15711 15711 D SoLoader: libm.so loaded implicitly
10-20 00:39:08.916 15711 15711 V SoLoader: libc++_shared.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.917 15711 15711 V SoLoader: libc.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.917 15711 15711 V SoLoader: libc.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.917 15711 15711 D SoLoader: libc.so found on /system/lib64
10-20 00:39:08.917 15711 15711 D SoLoader: libc.so loaded implicitly
10-20 00:39:08.917 15711 15711 V SoLoader: libdl.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.917 15711 15711 V SoLoader: libdl.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.917 15711 15711 D SoLoader: libdl.so found on /system/lib64
10-20 00:39:08.917 15711 15711 D SoLoader: libdl.so loaded implicitly
10-20 00:39:08.919 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libc++_shared.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.919 15711 15711 D SoLoader: libc++_shared.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.920 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libglog.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.920 15711 15711 D SoLoader: libglog.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.921 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libfolly_runtime.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.922 15711 15711 D SoLoader: libfolly_runtime.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.922 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libjsi.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.923 15711 15711 D SoLoader: libjsi.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.923 15711 15711 V SoLoader: libfbjni.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.924 15711 15711 V SoLoader: libandroid.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.924 15711 15711 V SoLoader: libandroid.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.924 15711 15711 D SoLoader: libandroid.so found on /system/lib64
10-20 00:39:08.924 15711 15711 D SoLoader: libandroid.so loaded implicitly
10-20 00:39:08.924 15711 15711 V SoLoader: liblog.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.924 15711 15711 V SoLoader: liblog.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.924 15711 15711 D SoLoader: liblog.so found on /system/lib64
10-20 00:39:08.924 15711 15711 D SoLoader: liblog.so loaded implicitly
10-20 00:39:08.925 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libfbjni.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.925 15711 15711 D SoLoader: libfbjni.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.927 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libhermes.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.927 15711 15711 D SoLoader: libhermes.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.927 15711 15711 V SoLoader: libhermes_executor.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.930 15711 15711 V SoLoader: libreactnativejni.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.932 15711 15711 V SoLoader: libyoga.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.934 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libyoga.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.934 15711 15711 D SoLoader: libyoga.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.935 15711 15711 V SoLoader: libreactperfloggerjni.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.937 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreactperfloggerjni.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.937 15711 15711 D SoLoader: libreactperfloggerjni.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.937 15711 15711 V SoLoader: libreact_render_core.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.939 15711 15711 V SoLoader: libreact_render_debug.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.941 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_render_debug.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.941 15711 15711 D SoLoader: libreact_render_debug.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.941 15711 15711 V SoLoader: libreact_render_graphics.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.943 15711 15711 V SoLoader: libreact_utils.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.945 15711 15711 V SoLoader: libreact_debug.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.946 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_debug.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.946 15711 15711 D SoLoader: libreact_debug.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.947 15711 15711 V SoLoader: libjsinspector.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.948 15711 15711 V SoLoader: libreact_featureflags.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.949 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_featureflags.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.949 15711 15711 D SoLoader: libreact_featureflags.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.950 15711 15711 V SoLoader: libruntimeexecutor.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.952 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libruntimeexecutor.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.952 15711 15711 D SoLoader: libruntimeexecutor.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.953 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libjsinspector.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.953 15711 15711 D SoLoader: libjsinspector.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.954 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_utils.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.954 15711 15711 D SoLoader: libreact_utils.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.956 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_render_graphics.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.956 15711 15711 D SoLoader: libreact_render_graphics.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.956 15711 15711 V SoLoader: libreact_render_mapbuffer.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:08.958 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_render_mapbuffer.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.958 15711 15711 D SoLoader: libreact_render_mapbuffer.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.959 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_render_core.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.960 15711 15711 D SoLoader: libreact_render_core.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.961 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreactnativejni.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.962 15711 15711 D SoLoader: libreactnativejni.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.963 15711 15711 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libhermes_executor.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.963 15711 15711 D SoLoader: libhermes_executor.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:08.978 15711 15711 D nativeloader: Load libpowerhalwrap_jni.so using system ns (caller=/system_ext/framework/mediatek-framework.jar): ok
10-20 00:39:08.978 15711 15711 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-20 00:39:08.978 15711 15711 I M-ProMotion: M-ProMotion is disabled
10-20 00:39:08.979 15711 19673 I PowerHalWrapper: PowerHalWrapper.getInstance 
10-20 00:39:08.981 15711 19671 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libexpo-av.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:08.986 15711 15711 W libc    : Access denied finding property "persist.vivo.ltw.enabled"
10-20 00:39:08.991 15711 15711 W HWUI    : Unknown dataspace 0
10-20 00:39:09.008 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:09.009 15711 15711 D BufferQueueConsumer: [](id:3d5f00000000,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:39:09.010 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) constructor()
10-20 00:39:09.010 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-20 00:39:09.021 15711 19661 D MAGT_SYNC_FRAME: MAGT Sync: MAGT is not supported. Disabling Sync.
10-20 00:39:09.034 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.runtime' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:09.045 15711 19671 I ExpoModulesCore: ✅ AppContext was initialized
10-20 00:39:09.090 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-20 00:39:09.092 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-20 00:39:09.093 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-20 00:39:09.094 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-20 00:39:09.095 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-20 00:39:09.096 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ProgressBarShadowNode
10-20 00:39:09.097 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-20 00:39:09.098 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-20 00:39:09.099 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager$ReactSwitchShadowNode
10-20 00:39:09.099 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-20 00:39:09.100 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager
10-20 00:39:09.101 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageShadowNode
10-20 00:39:09.101 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-20 00:39:09.102 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-20 00:39:09.103 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ModalHostShadowNode
10-20 00:39:09.103 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextManager
10-20 00:39:09.104 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactRawTextShadowNode
10-20 00:39:09.104 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-20 00:39:09.106 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputShadowNode
10-20 00:39:09.106 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-20 00:39:09.107 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextShadowNode
10-20 00:39:09.107 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-20 00:39:09.107 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextViewManager
10-20 00:39:09.108 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactVirtualTextShadowNode
10-20 00:39:09.108 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-20 00:39:09.108 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-20 00:39:09.109 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-20 00:39:09.109 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-20 00:39:09.110 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapManager
10-20 00:39:09.111 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapMarkerManager
10-20 00:39:09.112 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCalloutManager
10-20 00:39:09.112 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolylineManager
10-20 00:39:09.113 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapGradientPolylineManager
10-20 00:39:09.113 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapPolygonManager
10-20 00:39:09.114 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapCircleManager
10-20 00:39:09.114 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapUrlTileManager
10-20 00:39:09.115 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapWMSTileManager
10-20 00:39:09.115 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapLocalTileManager
10-20 00:39:09.116 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapOverlayManager
10-20 00:39:09.116 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.rnmaps.maps.MapHeatmapManager
10-20 00:39:09.117 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-20 00:39:09.117 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-20 00:39:09.118 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-20 00:39:09.118 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-20 00:39:09.119 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-20 00:39:09.120 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-20 00:39:09.120 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-20 00:39:09.120 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-20 00:39:09.121 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-20 00:39:09.121 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-20 00:39:09.122 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$DefsViewManager
10-20 00:39:09.122 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.VirtualViewManager$RenderableShadowNode
10-20 00:39:09.123 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MarkerManager
10-20 00:39:09.124 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ForeignObjectManager
10-20 00:39:09.124 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$EllipseViewManager
10-20 00:39:09.125 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LineViewManager
10-20 00:39:09.126 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$LinearGradientManager
10-20 00:39:09.126 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$GroupViewManager
10-20 00:39:09.127 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextViewManager
10-20 00:39:09.128 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ImageViewManager
10-20 00:39:09.129 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$ClipPathViewManager
10-20 00:39:09.129 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RadialGradientManager
10-20 00:39:09.130 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$MaskManager
10-20 00:39:09.130 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$SymbolManager
10-20 00:39:09.131 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PatternManager
10-20 00:39:09.132 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$RectViewManager
10-20 00:39:09.133 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TextPathViewManager
10-20 00:39:09.135 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.SvgViewManager
10-20 00:39:09.136 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$PathViewManager
10-20 00:39:09.137 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$UseViewManager
10-20 00:39:09.138 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$CircleViewManager
10-20 00:39:09.139 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.horcrux.svg.RenderableViewManager$TSpanViewManager
10-20 00:39:09.139 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.cellbroadcast' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:09.171 15711 19661 I GrallocExtra: gralloc_extra_query:is_SW3D 0
10-20 00:39:09.171 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661871047422988(auto) mPendingTransactions.size=0 graphicBufferId=67478231187456 transform=0
10-20 00:39:09.184 15711 19686 V SoLoader: libexpo-modules-core.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:09.189 15711 19686 V SoLoader: libreact_nativemodule_core.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:09.193 15711 19686 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_nativemodule_core.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:09.194 15711 19686 D SoLoader: libreact_nativemodule_core.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:09.196  1870  1976 I ActivityTaskManager: Displayed com.a1taxi.driverpro/.MainActivity for user 0: +493ms
10-20 00:39:09.196 15711 19686 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libexpo-modules-core.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:09.197 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-20 00:39:09.199 15711 19686 D SoLoader: libexpo-modules-core.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:09.200 15711 19686 V SoLoader: libturbomodulejsijni.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:09.207  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:09.207  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:09.207  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:09.208 15711 19686 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libturbomodulejsijni.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:09.208 15711 19686 D SoLoader: libturbomodulejsijni.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:09.209  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:09.212 15711 19686 I ExpoModulesCore: ✅ JSI interop was installed
10-20 00:39:09.213 15711 19686 W ExpoModulesCore: ⚠️ JSI interop was already installed
10-20 00:39:09.228 15711 19686 I ExpoModulesCore: ✅ Constants were exported
10-20 00:39:09.253 15711 19686 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/librnscreens.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!classes3.dex): ok
10-20 00:39:09.256 15711 19686 I ReactNativeJS: Running "main
10-20 00:39:09.262 15711 19686 V SoLoader: libreactnativeblob.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:09.267 15711 19686 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreactnativeblob.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:09.268 15711 19686 D SoLoader: libreactnativeblob.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:09.274 15711 19686 I ReactNativeJS: 'Supabase Config:', { hasUrl: true,
10-20 00:39:09.274 15711 19686 I ReactNativeJS:   hasAnonKey: true,
10-20 00:39:09.274 15711 19686 I ReactNativeJS:   url: 'https://whubaypabojomdyfqxcf.supabase.co' }
10-20 00:39:09.275 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:39:09.290 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:09.291 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#7](f:0,a:1) destructor()
10-20 00:39:09.291 10567 10567 D BufferQueueConsumer: [VRI[Launcher]#7(BLAST Consumer)7](id:294700000007,api:0,p:-1,c:10567) disconnect
10-20 00:39:09.328 10567 10567 I bnlz    : onStop
10-20 00:39:09.422 15711 19687 D CompatChangeReporter: Compat change id reported: 289878283; UID 10408; state: ENABLED
10-20 00:39:09.457 15711 19686 I ReactNativeJS: Auth still loading...
10-20 00:39:09.457 15711 19686 I ReactNativeJS: === LOCATION PROVIDER INITIALIZATION ===
10-20 00:39:09.457 15711 19686 I ReactNativeJS: === REQUESTING LOCATION PERMISSION ON STARTUP ===
10-20 00:39:09.457 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:09.457 15711 19686 I ReactNativeJS: 'Driver:', undefined
10-20 00:39:09.457 15711 19686 I ReactNativeJS: 'Driver Status:', undefined
10-20 00:39:09.457 15711 19686 I ReactNativeJS: 'Driver User ID:', undefined
10-20 00:39:09.457 15711 19686 I ReactNativeJS: 'Driver Verified:', undefined
10-20 00:39:09.457 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:09.457 15711 19686 I ReactNativeJS: '  - driver exists:', false
10-20 00:39:09.457 15711 19686 I ReactNativeJS: '  - status is online/busy:', false
10-20 00:39:09.457 15711 19686 I ReactNativeJS: '  - locationPermission:', false
10-20 00:39:09.457 15711 19686 I ReactNativeJS: '  - NOT isTracking:', true
10-20 00:39:09.457 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', true
10-20 00:39:09.457 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', true
10-20 00:39:09.457 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:39:09.457 15711 19686 I ReactNativeJS: === INITIALIZING AUTHENTICATION ===
10-20 00:39:09.457 15711 19686 I ReactNativeJS: 🔍 Checking Supabase client session...
10-20 00:39:09.462 15711 19686 I ReactNativeJS: No existing session found
10-20 00:39:09.470 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:39:09.470 15711 19686 I ReactNativeJS: 'In auth group:', false
10-20 00:39:09.470 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:39:09.470 15711 19686 I ReactNativeJS: 'Has driver:', false
10-20 00:39:09.470 15711 19686 I ReactNativeJS: 'Current segments:', [ '(tabs)' ]
10-20 00:39:09.470 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:39:09.470 15711 19686 I ReactNativeJS: 'Is authenticated:', null
10-20 00:39:09.470 15711 19686 I ReactNativeJS: Redirecting to login - not authenticated
10-20 00:39:09.470 15711 19687 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreensShadowNode
10-20 00:39:09.488 21104 22617 I FontLog : (REDACTED) Received query %s, URI %s
10-20 00:39:09.490 21104 22617 I FontLog : (REDACTED) Query [%s] resolved to %s
10-20 00:39:09.503 21104 22617 I FontLog : (REDACTED) Fetch %s end status %s
10-20 00:39:09.509 21104 21249 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-20 00:39:09.515 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:39:09.515 15711 19686 I ReactNativeJS: 'In auth group:', true
10-20 00:39:09.515 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:39:09.515 15711 19686 I ReactNativeJS: 'Has driver:', false
10-20 00:39:09.515 15711 19686 I ReactNativeJS: 'Current segments:', [ '(auth)', 'login' ]
10-20 00:39:09.515 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:39:09.516 15711 19686 I ReactNativeJS: 'Is authenticated:', null
10-20 00:39:09.516 15711 19686 I ReactNativeJS: No navigation needed - staying in current route
10-20 00:39:09.524 21104 21249 I FontLog : (REDACTED) Pulling font file for id = %d, cache size = %d
10-20 00:39:09.536 15711 19687 V SoLoader: libreact_featureflagsjni.so not found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/lib/arm64
10-20 00:39:09.537 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.compos' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:09.538 15711 19686 I ReactNativeJS: 'Current location permission status:', 'denied'
10-20 00:39:09.538 15711 19686 I ReactNativeJS: 📱 Requesting location permission from user...
10-20 00:39:09.541 15711 19687 D nativeloader: Load /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a/libreact_featureflagsjni.so using class loader ns clns-7 (caller=/data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk): ok
10-20 00:39:09.541 15711 19687 D SoLoader: libreact_featureflagsjni.so found on /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk!/lib/arm64-v8a
10-20 00:39:09.552 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:09.552 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:09.552 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:09.564 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:09.564 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:09.564 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:09.564 15711 19687 W unknown:ReactNative: Tried to update size of non-existent tag: 23
10-20 00:39:09.612 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.tzdata6' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:09.633 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.permission' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:09.711 28149 28149 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 177), rotation: ROTATION_0
10-20 00:39:09.711 28149 28149 D BufferQueueConsumer: [](id:6df500000013,api:0,p:-1,c:28149) connect: controlledByApp=false
10-20 00:39:09.712 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#19](f:0,a:0) constructor()
10-20 00:39:09.712 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#19](f:0,a:0) update width=1202 height=177 format=-2 mTransformHint=0
10-20 00:39:09.739  1870  1976 I ActivityTaskManager: Displayed com.google.android.permissioncontroller/com.android.permissioncontroller.permission.ui.GrantPermissionsActivity for user 0: +179ms
10-20 00:39:09.754 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@431e2fb
10-20 00:39:09.757 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.wifi' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:09.768 28149 28149 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 1637), rotation: ROTATION_0
10-20 00:39:09.768 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#19](f:0,a:0) update width=1202 height=1637 format=-2 mTransformHint=0
10-20 00:39:09.780 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@a873b87
10-20 00:39:09.784 28149 28149 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{cd5913a V.E...... R....... 0,0-1026,1461}[GrantPermissionsActivity] softInputMode=STATE_ALWAYS_HIDDEN|ADJUST_NOTHING|IS_FORWARD_NAVIGATION
10-20 00:39:09.787  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:09.787  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:09.787  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.google.android.permissioncontroller, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:09.789  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:09.803 28490 28490 E WindowManager: android.view.WindowLeaked: Activity com.android.packageinstaller.InstallSuccess has leaked window com.android.internal.policy.DecorView{8bb8f8d V.E...... R.....ID 0,0-1026,544}[InstallSuccess] that was originally added here
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.view.ViewRootImpl.<init>(ViewRootImpl.java:1460)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.view.ViewRootImpl.<init>(ViewRootImpl.java:1446)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.view.WindowManagerGlobal.addView(WindowManagerGlobal.java:469)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.view.WindowManagerImpl.addView(WindowManagerImpl.java:169)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.Dialog.show(Dialog.java:425)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at com.android.packageinstaller.InstallSuccess.bindUi(InstallSuccess.java:109)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at com.android.packageinstaller.InstallSuccess.onCreate(InstallSuccess.java:75)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.Activity.performCreate(Activity.java:9498)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.Activity.performCreate(Activity.java:9439)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1526)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:4650)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:4882)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:112)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.servertransaction.TransactionExecutor.executeNonLifecycleItem(TransactionExecutor.java:220)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.servertransaction.TransactionExecutor.executeTransactionItems(TransactionExecutor.java:148)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:120)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.ActivityThread$H.handleMessage(ActivityThread.java:3108)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.os.Handler.dispatchMessage(Handler.java:109)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.os.Looper.loopOnce(Looper.java:250)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.os.Looper.loop(Looper.java:340)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at java.lang.reflect.Method.invoke(Native Method)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-20 00:39:09.803 28490 28490 E WindowManager: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-20 00:39:09.806 28490 28490 E WindowManager: android.view.WindowLeaked: Activity com.android.packageinstaller.InstallSuccess has leaked window com.android.internal.policy.DecorView{9bdb7ec V.E...... R.....ID 0,0-1026,544}[InstallSuccess] that was originally added here
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.view.ViewRootImpl.<init>(ViewRootImpl.java:1460)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.view.ViewRootImpl.<init>(ViewRootImpl.java:1446)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.view.WindowManagerGlobal.addView(WindowManagerGlobal.java:469)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.view.WindowManagerImpl.addView(WindowManagerImpl.java:169)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.Dialog.show(Dialog.java:425)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at com.android.packageinstaller.InstallSuccess.bindUi(InstallSuccess.java:109)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at com.android.packageinstaller.InstallSuccess.onResume(InstallSuccess.java:82)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.Instrumentation.callActivityOnResume(Instrumentation.java:1722)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.Activity.performResume(Activity.java:9661)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.ActivityThread.performResumeActivity(ActivityThread.java:6004)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.ActivityThread.handleResumeActivity(ActivityThread.java:6054)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.servertransaction.ResumeActivityItem.execute(ResumeActivityItem.java:70)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.servertransaction.ActivityTransactionItem.execute(ActivityTransactionItem.java:60)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.servertransaction.TransactionExecutor.executeLifecycleItem(TransactionExecutor.java:271)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.servertransaction.TransactionExecutor.executeTransactionItems(TransactionExecutor.java:146)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:120)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.ActivityThread$H.handleMessage(ActivityThread.java:3108)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.os.Handler.dispatchMessage(Handler.java:109)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.os.Looper.loopOnce(Looper.java:250)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.os.Looper.loop(Looper.java:340)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at android.app.ActivityThread.main(ActivityThread.java:9928)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at java.lang.reflect.Method.invoke(Native Method)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:625)
10-20 00:39:09.806 28490 28490 E WindowManager: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
10-20 00:39:09.809 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@c3bd86d
10-20 00:39:09.822 28490 28490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@94f41c
10-20 00:39:09.828 28149 29675 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#19](f:0,a:1) producer disconnected before acquireNextBufferLocked
10-20 00:39:09.829 28149 29675 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#19](f:0,a:1) acquireNextBufferLocked size=1202x1637 mFrameNumber=1 applyTransaction=true mTimestamp=661871705099295(auto) mPendingTransactions.size=0 graphicBufferId=120899034415269 transform=0
10-20 00:39:09.909 28149 28170 I PermissionControllerServiceImpl: Updating user sensitive for uid 10408
10-20 00:39:10.366 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.media.swcodec' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:10.402 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.profiling' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:10.481 28149 28149 I GrantPermissionsViewModel: Logged buttons presented and clicked permissionGroupName=android.permission-group.LOCATION uid=10408 selectedPrecision=3 package=com.a1taxi.driverpro presentedButtons=44 clickedButton=4 isPermissionRationaleShown=false sessionId=4908636948780994571 targetSdk=34
10-20 00:39:10.518 15711 19686 I ReactNativeJS: 'New permission status after request:', 'granted'
10-20 00:39:10.518 15711 19686 I ReactNativeJS: ✅ Location permission granted by user
10-20 00:39:10.519 15711 19686 I ReactNativeJS: 🔧 Initializing location services...
10-20 00:39:10.519 15711 19686 I ReactNativeJS: ✅ Location services initialized
10-20 00:39:10.520 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:10.520 15711 19686 I ReactNativeJS: 'Driver:', undefined
10-20 00:39:10.520 15711 19686 I ReactNativeJS: 'Driver Status:', undefined
10-20 00:39:10.520 15711 19686 I ReactNativeJS: 'Driver User ID:', undefined
10-20 00:39:10.520 15711 19686 I ReactNativeJS: 'Driver Verified:', undefined
10-20 00:39:10.520 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:10.520 15711 19686 I ReactNativeJS: '  - driver exists:', false
10-20 00:39:10.520 15711 19686 I ReactNativeJS: '  - status is online/busy:', false
10-20 00:39:10.520 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:39:10.520 15711 19686 I ReactNativeJS: '  - NOT isTracking:', true
10-20 00:39:10.520 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', true
10-20 00:39:10.520 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', true
10-20 00:39:10.520 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:39:10.543 28149 28149 D VRI[GrantPermissionsActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:39:10.551 28149 28149 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@f9febdb
10-20 00:39:10.554 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-20 00:39:10.561  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:10.561  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:10.562  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:10.562  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:10.570 28149 28170 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#19](f:0,a:4) destructor()
10-20 00:39:10.570 28149 28170 D BufferQueueConsumer: [VRI[GrantPermissionsActivity]#19(BLAST Consumer)19](id:6df500000013,api:0,p:-1,c:28149) disconnect
10-20 00:39:10.769 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.adbd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:10.805 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.i18n' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:10.831 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.conscrypt' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:10.968 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.neuralnetworks' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:10.986 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.ipsec' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.199 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.ondevicepersonalization' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.215 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.healthfitness' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.316 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.uwb' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.317 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.extservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.435 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:39:11.441 21104 18140 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:39:11.461  1870  3370 V AutofillSession: Primary service component name: ComponentInfo{com.google.android.gms/com.google.android.gms.autofill.service.AutofillService}, secondary service component name: ComponentInfo{com.android.credentialmanager/com.android.credentialmanager.autofill.CredentialAutofillService}
10-20 00:39:11.468  1870 28096 D AutofillSession: clearPendingIntentLocked
10-20 00:39:11.469 15711 15711 I ImeTracker: com.a1taxi.driverpro:f0e3f23a: onRequestShow at ORIGIN_CLIENT reason SHOW_SOFT_INPUT fromUser false
10-20 00:39:11.469  3458  3458 W ratelimit: Single process limit 250/s drop 6 lines.
10-20 00:39:11.469  3458  3458 V InlineSuggestionRenderService: handleDestroySuggestionViews called for 0:1210273442
10-20 00:39:11.476  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:11.477  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:11.482  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:11.485 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.os.statsd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.493 15711 15711 I AssistStructure: Flattened final assist data: 1704 bytes, containing 1 windows, 10 views
10-20 00:39:11.494  1870  3779 D AutofillSession: createPendingIntent for request 2552
10-20 00:39:11.502  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=80001, inputTypeString=Normal[NoSuggestion], enableLearning=true, autoCorrection=true, autoComplete=true, imeOptions=8000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=69, fieldName=null, extras=Bundle[mParcelledData.dataSize=404], hintText=non-empty, hintLocales=[]}}, false)
10-20 00:39:11.503  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:11.506  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 1
10-20 00:39:11.510  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInputView():1439 onStartInputView(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=80001, inputTypeString=Normal[NoSuggestion], enableLearning=true, autoCorrection=true, autoComplete=true, imeOptions=8000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=69, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=true, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}}, false)
10-20 00:39:11.514 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.android.rkpd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.516  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.getOemKeyboardHeightRatio():108 systemKeyboardHeightRatio:1.000000.
10-20 00:39:11.518  5589  5589 I AndroidIME: InputBundleManager.loadActiveInputBundleId():528 loadActiveInputBundleId: en-US, ime_english_united_states
10-20 00:39:11.523  5589  5589 I AndroidIME: AbstractIme.onActivate():96 LatinIme.onActivate() : EditorInfo = EditorInfo{packageName=com.a1taxi.driverpro, inputType=80001, inputTypeString=Normal[NoSuggestion], enableLearning=true, autoCorrection=true, autoComplete=true, imeOptions=8000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=69, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=true, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}, IncognitoMode = false, DeviceLocked = false
10-20 00:39:11.526  5589  5589 I InputBundle: InputBundle.consumeEvent():1032 Skip consuming an event as keyboard status is INACTIVE
10-20 00:39:11.527 18831 18831 W Finsky  : [2] STU: Failed to get storage stats for package 'com.google.android.scheduling' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
10-20 00:39:11.532  5589  5589 I Delight5Facilitator: Delight5Facilitator.initializeForIme():740 initializeForIme() : Locale = [en_US], layout = qwerty
10-20 00:39:11.551  5589  5589 I LatinIme: LatinIme.updateEnableInlineSuggestionsOnDecoderSideFlags():1247 inline flag updated to:false
10-20 00:39:11.559  5589  5589 I LatinIme: LatinIme.updateEnableInlineSuggestionsOnDecoderSideFlags():1247 inline flag updated to:false
10-20 00:39:11.577 21163 21163 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-20 00:39:11.577 21163 21163 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-20 00:39:11.593 21104 19697 W anqe    : Failed to retrieve prediction data. [CONTEXT service_id=177 ]
10-20 00:39:11.593 21104 19697 W anqe    : java.util.concurrent.ExecutionException: fnpd: No active MDD filegroup android-autofill-infinitedata found for the table autofill-domain-predictions-prod-spanner.
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.j(:com.google.android.gms@254031035@25.40.31 (260400-816341114):21)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkk.v(:com.google.android.gms@254031035@25.40.31 (260400-816341114):107)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.get(:com.google.android.gms@254031035@25.40.31 (260400-816341114):2)
10-20 00:39:11.593 21104 19697 W anqe    : 	at anqe.e(:com.google.android.gms@254031035@25.40.31 (260400-816341114):81)
10-20 00:39:11.593 21104 19697 W anqe    : 	at anqe.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):124)
10-20 00:39:11.593 21104 19697 W anqe    : 	at anno.call(:com.google.android.gms@254031035@25.40.31 (260400-816341114):5)
10-20 00:39:11.593 21104 19697 W anqe    : 	at java.util.concurrent.FutureTask.run(FutureTask.java:317)
10-20 00:39:11.593 21104 19697 W anqe    : 	at bckr.c(:com.google.android.gms@254031035@25.40.31 (260400-816341114):50)
10-20 00:39:11.593 21104 19697 W anqe    : 	at bckr.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):73)
10-20 00:39:11.593 21104 19697 W anqe    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-20 00:39:11.593 21104 19697 W anqe    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-20 00:39:11.593 21104 19697 W anqe    : 	at bcqi.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):8)
10-20 00:39:11.593 21104 19697 W anqe    : 	at java.lang.Thread.run(Thread.java:1119)
10-20 00:39:11.593 21104 19697 W anqe    : Caused by: fnpd: No active MDD filegroup android-autofill-infinitedata found for the table autofill-domain-predictions-prod-spanner.
10-20 00:39:11.593 21104 19697 W anqe    : 	at fnpr.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):13)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpjr.d(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpjt.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):130)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.r(:com.google.android.gms@254031035@25.40.31 (260400-816341114):17)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):77)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.t(:com.google.android.gms@254031035@25.40.31 (260400-816341114):26)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpjr.e(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpjt.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):138)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.r(:com.google.android.gms@254031035@25.40.31 (260400-816341114):17)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):77)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.t(:com.google.android.gms@254031035@25.40.31 (260400-816341114):26)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpmx.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):5)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkb.t(:com.google.android.gms@254031035@25.40.31 (260400-816341114):26)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkm.e(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):44)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpod.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):64)
10-20 00:39:11.593 21104 19697 W anqe    : 	... 6 more
10-20 00:39:11.593 21104 19697 W anqe    : Caused by: flxc: Requested group not found.
10-20 00:39:11.593 21104 19697 W anqe    : 	at flxa.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):30)
10-20 00:39:11.593 21104 19697 W anqe    : 	at fmce.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):19)
10-20 00:39:11.593 21104 19697 W anqe    : 	at ghbr.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):13)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpkm.d(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:11.593 21104 19697 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):38)
10-20 00:39:11.593 21104 19697 W anqe    : 	... 7 more
10-20 00:39:11.595  5589  5589 I InputBundle: InputBundle.consumeEvent():1032 Skip consuming an event as keyboard status is INACTIVE
10-20 00:39:11.595  5589  5589 I LatinIme: LatinIme.resetInputContext():2251 resetInputContext(): reason=1, externalEditsInfo=ExternalEditsInfo{action=0, offset=-1, text=null, originalText=null, edits=null}
10-20 00:39:11.595  5589  5589 I InputBundle: InputBundle.consumeEvent():1032 Skip consuming an event as keyboard status is INACTIVE
10-20 00:39:11.599  5589  5589 I KeyboardWrapper: KeyboardWrapper.activateKeyboard():581 activateKeyboard(): type=prime, status=INACTIVE, imeDef=mkk{stringId=ime_english_united_states, language=en-US, languageTag=en-US, processedConditions={writing_helper_enable_by_word_revert=false, true=true, enable_number_row=true, device=phone, enable_pk_simulator=false}, className=com.google.android.apps.inputmethod.libs.latin5.LatinIme, label=0, keyEventInterpreter=null, inlineComposing=true, autoCapital=true, announceAutoSelectedCandidate=true, statusIcon=0, indicatorIcon=0, indicatorLabel=US, displayAppCompletions=true, extraValues=mkd{#0x7f0b02e0=TypedValue{t=0x3/d=0x0 "com.google.android.apps.inputmethod.libs.latin5.LatinIme"}}, processors=mmb@7d3d911, unacceptableMetaKeys=4098, languageSpecificSettings=0, asciiCapable=true, alwaysShowSuggestions=false, useAsciiPasswordKeyboard=false, keyboardGroupDef=mlk@9ed8bf6, phenotypeFlagId=0, localizationLanguageTag=null, supportsInlineSuggestion=true}
10-20 00:39:11.599  5589  5589 I KeyboardManager: KeyboardManager.requestKeyboard():248 Creating keyboard prime, imeId=ime_english_united_states, cacheKey=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup
10-20 00:39:11.601  5589  5589 I KeyboardWrapper: KeyboardWrapper.onKeyboardReady():224 onKeyboardReady(): type=prime(prime), kb=com.google.android.apps.inputmethod.latin.keyboard.LatinPrimeKeyboard@7d7f8c5
10-20 00:39:11.601  5589  5589 I KeyboardWrapper: KeyboardWrapper.doActivateKeyboard():611 doActivateKeyboard(): prime
10-20 00:39:11.610 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:11.619 21104 19729 I PasswordSaveInfoFactory: Form has a username and is not a password only form. [CONTEXT service_id=177 ]
10-20 00:39:11.619  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.619  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.getKeyboardInitialStates():175 
10-20 00:39:11.620 21104 19729 I PasswordSaveInfoFactory: Form is not a password only form. [CONTEXT service_id=177 ]
10-20 00:39:11.620 21104 19729 I UsernameSaveInfoFactory: Form has a password and is not a username only form. [CONTEXT service_id=177 ]
10-20 00:39:11.621  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={show_comma_key=true, enable_more_candidates_view_for_multilingual=false, layout_9key_split=false, enable_secondary_symbols=false, pref_enable_flick_symbols=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, expressions=normal, enable_flick_symbols=true, variant=qwerty, show_period_key=true, enable_number_row=true, device=phone, keyboard_mode=normal, show_secondary_digits=false, enable_preemptive_decode=true, enable_pk_simulator=false, bottom_period_popup_slash=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinPrimeKeyboard, resourceIds=[#0x7f1705fb, #0x7f17088d], initialStates=0, keyboardViewDefs=[mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e029f, type=BODY, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e01f9, type=FLOATING_CANDIDATES, touchable=false, defaultShow=false}, mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=17592186044419}, type=WIDGET, helpersCreated=[lxm@e9095e4, lxm@3937a4d, lxm@99cb902, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-20 00:39:11.622  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.632 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:11.633 18831 18831 I Finsky  : [2] App states replicator found 49 unowned apps
10-20 00:39:11.639 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:11.639  5589  5589 I AndroidIME: InputBundleManager.startInput():358 startInput() with mlo[keyboardType=prime, payload=null]
10-20 00:39:11.639 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:11.640  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onActivate():120 
10-20 00:39:11.641 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:11.644 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:11.645  5589  5589 I LanguagePromoExtension: LanguagePromoExtension.checkDisplayPreconditions():174 Not show language promo: exceeds the max display times.
10-20 00:39:11.645 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:11.646 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:11.647  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.cancelShutdown():109 cancelShutdown()
10-20 00:39:11.647  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.syncLanguagePacks():121 syncLanguagePacks()
10-20 00:39:11.648  5589  5589 I VoiceInputManager: VoiceInputManager.onKeyboardActivated():1173 onKeyboardActivated() [UD]
10-20 00:39:11.648  5589  5589 I PkModeUpdater: PkModeUpdater.onActivate():74 onActivate false true
10-20 00:39:11.648  5589  5589 I AccessoryInputModeManager: AccessoryInputModeManager.onModeStarted():318 Accessory input mode started: null
10-20 00:39:11.648  5589  5589 W SupplementaryKeyboardsWrapper: SupplementaryKeyboardsWrapper.deactivateKeyboard():161 keyboard accessory_candidates_consumer is not activated before!
10-20 00:39:11.648  5589  6558 I SpeechFactory: SpeechRecognitionFactory.maybeScheduleAutoPackDownloadForFallback():217 maybeScheduleAutoPackDownloadForFallback()
10-20 00:39:11.648  5589  6558 I FallbackOnDeviceRecognitionProvider: FallbackOnDeviceRecognitionProvider.maybeScheduleAutoPackDownload():205 maybeScheduleAutoPackDownload() for language tag en-US
10-20 00:39:11.649 18831 18873 I Finsky  : [45996] Completed 0 account content syncs with 0 successful.
10-20 00:39:11.649  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:11.649  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.649  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.649  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:11.649 18831 18831 I Finsky  : [2] [ContentSync] Installation state replication succeeded.
10-20 00:39:11.649  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.649 18831 18831 I Finsky  : [2] SCH: jobFinished: 12-1. TimeElapsed: 5661ms.
10-20 00:39:11.649  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.649  5589  5589 W ExtensionWrapper: ExtensionWrapper.setExtensionViewVisibility():811 interface mas is not activate
10-20 00:39:11.649 18831 18831 I Finsky  : [2] WM::SCH: Logging work end for 12-1
10-20 00:39:11.652  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:11.653  5589  5589 I VoiceImeExtension: VoiceImeExtension.shouldStartVoiceInputAutomaticallyInCurrentInputBox():378 No private IME option set to start voice input.
10-20 00:39:11.664 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:11.667 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:11.673  5589  5589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2287), rotation: ROTATION_0
10-20 00:39:11.673  5589  5589 D BufferQueueConsumer: [](id:15d5000009b5,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:11.673  5589  5589 D BLASTBufferQueue: [VRI[InputMethod]#2485](f:0,a:0) constructor()
10-20 00:39:11.673  5589  5589 D BLASTBufferQueue: [VRI[InputMethod]#2485](f:0,a:0) update width=1080 height=2287 format=-2 mTransformHint=0
10-20 00:39:11.676  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:11.676  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.676  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.676  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:11.676  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notifyWithWindow():166 
10-20 00:39:11.676  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notify():159 pfu[bounds=Rect(0, 105 - 1080, 2392), insets=Rect(0, 0 - 0, 116), densityDpi=440, smallestScreenWidthDp=393, displayWidth=1080, displayHeight=2392, xdpi=387.43, ydpi=387.43, isTrustable=true, displayId=0]; DisplayMetrics{density=2.75, width=1080, height=2392, scaledDensity=2.75, xdpi=387.43, ydpi=387.43}
10-20 00:39:11.677 18831 18873 I Finsky  : [45996] SCH: Scheduling phonesky job Id: 1-1337, CT: 1760871186395, Constraints: [{ L: 43184339, D: 86384339, C: CHARGING_NONE, I: IDLE_NONE, N: NET_ANY, B: BATTERY_ANY }]
10-20 00:39:11.678 18831 18873 I Finsky  : [45996] SCH: Scheduling phonesky job Id: 34-125, CT: 1760871188183, Constraints: [{ L: 604800000, D: 2492106515, C: CHARGING_NONE, I: IDLE_NONE, N: NET_ANY, B: BATTERY_ANY }]
10-20 00:39:11.678 18831 18873 I Finsky  : [45996] SCH: Scheduling phonesky job Id: 34-130, CT: 1760871188183, Constraints: [{ L: 604800000, D: 2575750049, C: CHARGING_NONE, I: IDLE_NONE, N: NET_ANY, B: BATTERY_ANY }]
10-20 00:39:11.678 18831 18873 I Finsky  : [45996] SCH: Scheduling phonesky job Id: 34-132, CT: 1760871188183, Constraints: [{ L: 62949017, D: 1358949017, C: CHARGING_NONE, I: IDLE_NONE, N: NET_ANY, B: BATTERY_ANY }]
10-20 00:39:11.683 18831 18874 I Finsky  : [45997] SCH: Scheduling 1 system job(s)
10-20 00:39:11.684 18831 18874 I Finsky  : [45997] SCH: Scheduling system job Id: 9172, L: 13419050, D: 56619050, C: false, I: false, N: 1
10-20 00:39:11.695 18831 19564 I Finsky  : [47339] SCH: job service finished with id 9164.
10-20 00:39:11.700 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:11.704 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:11.715  1870  1870 D AutofillSession: Service did not request to wait for delayed fill response.
10-20 00:39:11.720  5589  5657 D BLASTBufferQueue: [VRI[InputMethod]#2485](f:0,a:1) acquireNextBufferLocked size=1080x2287 mFrameNumber=1 applyTransaction=true mTimestamp=661873595828526(auto) mPendingTransactions.size=0 graphicBufferId=24004572225303 transform=0
10-20 00:39:11.723  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=HEADER keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{46fe30f V.E...... ........ 0,0-1080,121}
10-20 00:39:11.723  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.723  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=BODY keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{4af1206 V.E...... ........ 0,0-1080,693}
10-20 00:39:11.723  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.723  5589  5589 I GlobeKeyExtension: GlobeKeyExtension$1.onKeyboardViewShown():72 maybeDisableLanguageSwitchKeyPref when the keyboard is shown
10-20 00:39:11.723  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.maybeDisableLanguageSwitchKeyPref():200 maybeDisableLanguageSwitchKeyPref hasGlobeKeyBeenDisabled: false, shouldDisableLanguageSwitchKey: false
10-20 00:39:11.723  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension$1.onKeyboardViewShown():98 Not show new language banner: no change in enabled input method entries
10-20 00:39:11.724  5589  5589 I DynamicLayoutHandler: DynamicLayoutHandler.loadDynamicKeys():83 This isn't a dynamic layout.
10-20 00:39:11.724  5589  6030 I Delight5Decoder: Delight5DecoderWrapper.setKeyboardLayout():536 setKeyboardLayout()
10-20 00:39:11.724 15711 15711 D InsetsController: show(ime(), fromIme=true)
10-20 00:39:11.746  3458  3458 V InlinePresentationRendererServiceImpl: onRenderSuggestion: width=-2, height=-2
10-20 00:39:11.749 15711 19741 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=com.a1taxi.driverpro
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: Build configuration failed!
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: java.lang.IllegalArgumentException: Must pass in a valid surface control if only instrument surface; 
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at com.android.internal.jank.InteractionJankMonitor$Configuration.validate(InteractionJankMonitor.java:833)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at com.android.internal.jank.InteractionJankMonitor$Configuration.<init>(InteractionJankMonitor.java:774)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at com.android.internal.jank.InteractionJankMonitor$Configuration.<init>(Unknown Source:0)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at com.android.internal.jank.InteractionJankMonitor$Configuration$Builder.build(InteractionJankMonitor.java:753)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at com.android.internal.jank.InteractionJankMonitor.begin(InteractionJankMonitor.java:333)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.view.inputmethod.ImeTracker$ImeJankTracker.onRequestAnimation(ImeTracker.java:852)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.view.InsetsController$InternalAnimationControlListener$1.onAnimationStart(InsetsController.java:541)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.Animator$AnimatorListener.onAnimationStart(Animator.java:717)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.Animator$AnimatorCaller$$ExternalSyntheticLambda0.call(D8$$SyntheticClass:0)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.Animator.callOnList(Animator.java:691)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.Animator.notifyListeners(Animator.java:624)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.Animator.notifyStartListeners(Animator.java:641)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.ValueAnimator.startAnimation(ValueAnimator.java:1343)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.ValueAnimator.start(ValueAnimator.java:1158)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.animation.ValueAnimator.start(ValueAnimator.java:1182)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.view.InsetsController$InternalAnimationControlListener.onReady(InsetsController.java:570)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.view.InsetsAnimationThreadControlRunner.lambda$new$0(InsetsAnimationThreadControlRunner.java:129)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.view.InsetsAnimationThreadControlRunner.$r8$lambda$DLuG7Ht_vy5T5uYr29Rzhu2CZeY(Unknown Source:0)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.view.InsetsAnimationThreadControlRunner$$ExternalSyntheticLambda2.run(D8$$SyntheticClass:0)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.os.Handler.handleCallback(Handler.java:1014)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.os.Handler.dispatchMessage(Handler.java:102)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.os.Looper.loopOnce(Looper.java:250)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.os.Looper.loop(Looper.java:340)
10-20 00:39:11.749 15711 19741 D InteractionJankMonitor: 	at android.os.HandlerThread.run(HandlerThread.java:107)
10-20 00:39:11.800  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id spell_check_add_to_dictionary not found in tooltipManager.
10-20 00:39:11.811  3458  3458 V InlineSuggestionRenderService: width=-2, height=-2, measuredSize=366x121
10-20 00:39:11.825  3458  3458 D ViewRootImpl: AppSizeAfterRelayout, size: Point(366, 121), rotation: ROTATION_0
10-20 00:39:11.826  3458  3458 D BufferQueueConsumer: [](id:d8200000275,api:0,p:-1,c:3458) connect: controlledByApp=false
10-20 00:39:11.826  3458  3458 D BLASTBufferQueue: [VRI[]#629](f:0,a:0) constructor()
10-20 00:39:11.826  3458  3458 D BLASTBufferQueue: [VRI[]#629](f:0,a:0) update width=366 height=121 format=-2 mTransformHint=0
10-20 00:39:11.846  1870  1976 D AutofillSession: onShown(): 2, 1
10-20 00:39:11.852  3458 31463 D BLASTBufferQueue: [VRI[]#629](f:0,a:1) acquireNextBufferLocked size=366x121 mFrameNumber=1 applyTransaction=true mTimestamp=661873727900834(auto) mPendingTransactions.size=0 graphicBufferId=14851996913971 transform=0
10-20 00:39:11.854  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$2.display():195 Requesting to show proactive suggestions: AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:11.863  5589  5589 D BufferQueueConsumer: [](id:15d5000009b6,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:11.864  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2486](f:0,a:0) constructor()
10-20 00:39:11.864  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2486](f:0,a:0) update width=770 height=121 format=-2 mTransformHint=0
10-20 00:39:11.867  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112722, name: com.google.android.inputmethod.latin
10-20 00:39:11.871  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$Holder.setSuggestionsAndShow():898 succeed to show proactive suggestions AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:11.874  5589  5589 W NotificationCenter: NotificationCenter$NotificationQueue.notifyPendingNotificationsOnExecutor():877 Heavy notify work detected on UI thread: [ncb->jtu] takes 22ms
10-20 00:39:11.875  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:11.876  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.876  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:11.876  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:11.878  5589  5589 D BufferQueueConsumer: [](id:15d5000009b7,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:11.879  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2487](f:0,a:0) constructor()
10-20 00:39:11.879  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2487](f:0,a:0) update width=366 height=121 format=-2 mTransformHint=0
10-20 00:39:11.881  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 366, arg2: 121, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.883  5589  5657 D BLASTBufferQueue: [SurfaceView[InputMethod]#2487](f:0,a:1) acquireNextBufferLocked size=366x121 mFrameNumber=1 applyTransaction=true mTimestamp=661873759795680(auto) mPendingTransactions.size=0 graphicBufferId=24004572225304 transform=0
10-20 00:39:11.885  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 184, arg2: 13, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.885  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112722, name: com.google.android.inputmethod.latin
10-20 00:39:11.892  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 220, arg2: 35, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.900 27617 25236 I .android.gms.ui: Explicit concurrent copying GC freed 441KB AllocSpace bytes, 0(0B) LOS objects, 57% free, 4513KB/10MB, paused 317us,62us total 274.251ms
10-20 00:39:11.900 27617 25236 W .android.gms.ui: Reducing the number of considered missed Gc histogram windows from 162 to 100
10-20 00:39:11.905  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 256, arg2: 55, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.921  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 286, arg2: 73, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.940  1870  3779 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 310, arg2: 87, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.956  1870  3779 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 330, arg2: 101, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.972  1870  3779 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 346, arg2: 109, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:11.976 15711 15711 I ImeTracker: com.a1taxi.driverpro:f0e3f23a: onShown
10-20 00:39:11.989  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 358, arg2: 117, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:12.006  1870  3779 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 364, arg2: 121, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:12.024  1870  3779 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 366, arg2: 121, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:12.495 18831 18857 I Finsky  : [45982] Stats for Executor: GrpcBackgroundExecutor ubw@6657fa[Running, pool size = 4, active threads = 0, queued tasks = 0, completed tasks = 28]
10-20 00:39:13.696 21104 24145 I WifiScanner: onFullResults
10-20 00:39:13.697 21104 22617 I WifiScanner: onFullResults
10-20 00:39:13.697 21104 21140 I WifiScanner: onFullResults
10-20 00:39:13.725 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:39:13.788 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:13.788 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:13.789 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:13.797 21104 18140 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-20 00:39:16.732 21104 22617 I IPCThreadState: oneway function results for code 1 on binder at 0xb4000077d00d2310 will be dropped but finished with status UNKNOWN_TRANSACTION and reply parcel size 80
10-20 00:39:18.469 21104 19720 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:39:18.469 21104 19720 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:39:18.834 15711 19643 W 1taxi.driverpro: Cleared Reference was only reachable from finalizer (only reported once)
10-20 00:39:20.144 28149 28164 W ssioncontroller: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk' with 1 weak references
10-20 00:39:24.397 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-20 00:39:24.691 25644 25679 I DGW     : I[sendRequest:90] StreamGroupConnectivityAwareNetworkLayer[notifgateway] processing request with connection state: 1
10-20 00:39:24.693 25644 25679 I DGW     : I[sendRequest:98] StreamGroupMNSNetworkLayer[notifgateway] DGW Connecting to https://z-m-gateway.facebook.com/notifgateway
10-20 00:39:25.047 25644 25703 W DGW     : W[onSuccessfulResponse:848] StreamGroupTransport[notifgateway] on successful response. DGW is now connected.
10-20 00:39:26.625 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-20 00:39:27.164 15711 15711 I ImeTracker: com.a1taxi.driverpro:68afdbac: onRequestShow at ORIGIN_CLIENT reason SHOW_SOFT_INPUT fromUser true
10-20 00:39:27.168  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 1
10-20 00:39:27.323 15711 15711 D VTouchLiveTextManager: Current displayId = $displayId
10-20 00:39:27.323 15711 15711 D VTouchLiveTextManager: getScreenRotation:0
10-20 00:39:27.323 15711 15711 D VTouchLiveTextManager: Current displayId = $displayId
10-20 00:39:27.323 15711 15711 D VTouchLiveTextManager: getScreenRotation:0
10-20 00:39:27.325 15711 15711 I VTouchLiveTextManager: isSupportLiveTextInput.metaDataInput = 1
10-20 00:39:27.326 15711 15711 W libc    : Access denied finding property "persist.vendor.subsidylock"
10-20 00:39:27.400 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(449, 286), rotation: ROTATION_0
10-20 00:39:27.401 15711 15711 D BufferQueueConsumer: [](id:3d5f00000001,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:39:27.401 15711 15711 D BLASTBufferQueue: [VRI[PopupWindow:ee018d2]#1](f:0,a:0) constructor()
10-20 00:39:27.401 15711 15711 D BLASTBufferQueue: [VRI[PopupWindow:ee018d2]#1](f:0,a:0) update width=449 height=286 format=-2 mTransformHint=0
10-20 00:39:27.415 15711 19661 D BLASTBufferQueue: [VRI[PopupWindow:ee018d2]#1](f:0,a:1) acquireNextBufferLocked size=449x286 mFrameNumber=1 applyTransaction=true mTimestamp=661889291344296(auto) mPendingTransactions.size=0 graphicBufferId=67478231187469 transform=0
10-20 00:39:27.418 15711 15711 D InsetsController: show(ime(), fromIme=true)
10-20 00:39:27.418 15711 15711 I ImeTracker: com.a1taxi.driverpro:68afdbac: onCancelled at PHASE_CLIENT_APPLY_ANIMATION
10-20 00:39:27.430 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(77, 74), rotation: ROTATION_0
10-20 00:39:27.430 15711 15711 D BufferQueueConsumer: [](id:3d5f00000002,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:39:27.431 15711 15711 D BLASTBufferQueue: [VRI[PopupWindow:8e9f02a]#2](f:0,a:0) constructor()
10-20 00:39:27.431 15711 15711 D BLASTBufferQueue: [VRI[PopupWindow:8e9f02a]#2](f:0,a:0) update width=77 height=74 format=-3 mTransformHint=0
10-20 00:39:27.437 15711 19661 D BLASTBufferQueue: [VRI[PopupWindow:8e9f02a]#2](f:0,a:1) acquireNextBufferLocked size=77x74 mFrameNumber=1 applyTransaction=true mTimestamp=661889313756604(auto) mPendingTransactions.size=0 graphicBufferId=67478231187470 transform=0
10-20 00:39:28.172  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:28.178  1870  3370 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 113309, name: com.google.android.inputmethod.latin
10-20 00:39:28.179  5589  5657 E BufferQueueProducer: [SurfaceView[InputMethod]#2487(BLAST Consumer)2487](id:15d5000009b7,api:0,p:-1,c:5589) disconnect: not connected (req=1)
10-20 00:39:28.180  5589  5657 W libEGL  : EGLNativeWindowType 0xb4000077e00ef720 disconnect failed
10-20 00:39:28.182  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2487](f:0,a:1) destructor()
10-20 00:39:28.182  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2487(BLAST Consumer)2487](id:15d5000009b7,api:0,p:-1,c:5589) disconnect
10-20 00:39:28.186  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:28.194  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:28.194  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.195  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.195  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:28.217 15711 15711 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@b9877a6
10-20 00:39:28.220 15711 15711 D BLASTBufferQueue: [VRI[PopupWindow:8e9f02a]#2](f:0,a:2) destructor()
10-20 00:39:28.220 15711 15711 D BufferQueueConsumer: [VRI[PopupWindow:8e9f02a]#2(BLAST Consumer)2](id:3d5f00000002,api:0,p:-1,c:15711) disconnect
10-20 00:39:28.231  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:28.248  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 112722, name: com.google.android.inputmethod.latin
10-20 00:39:28.248  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2486](f:0,a:0) destructor()
10-20 00:39:28.248  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2486(BLAST Consumer)2486](id:15d5000009b6,api:0,p:-1,c:5589) disconnect
10-20 00:39:28.264  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:28.265  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.265  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.265  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:28.333  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:28.333  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.334  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.334  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:28.367  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:28.368  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.368  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.368  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:28.410  3458  3458 V InlineSuggestionRenderService: Releasing inline suggestion view host
10-20 00:39:28.425  3458  3458 D BLASTBufferQueue: [VRI[]#629](f:0,a:4) destructor()
10-20 00:39:28.425  3458  3458 D BufferQueueConsumer: [VRI[]#629(BLAST Consumer)629](id:d8200000275,api:0,p:-1,c:3458) disconnect
10-20 00:39:28.438  3458  3458 V InlineSuggestionRenderService: Removed the inline suggestion from the cache, current size=0
10-20 00:39:28.471 21104 19720 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:39:28.472 21104 19720 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:39:28.482 15711 15711 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@5bc5a82
10-20 00:39:28.490 15711 15711 D BLASTBufferQueue: [VRI[PopupWindow:ee018d2]#1](f:0,a:4) destructor()
10-20 00:39:28.491 15711 15711 D BufferQueueConsumer: [VRI[PopupWindow:ee018d2]#1(BLAST Consumer)1](id:3d5f00000001,api:0,p:-1,c:15711) disconnect
10-20 00:39:28.699  7096  7120 I native  : I0000 00:00:1760900968.699816    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760900968590380
10-20 00:39:28.722  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:28.738  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:39:28.747  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:28.747  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.748  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.748  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:28.885  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:28.914  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:28.914  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.914  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:28.915  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:29.179  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:29.214  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:29.214  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.214  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.214  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:29.423  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:29.464  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:29.464  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.465  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.465  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:29.634  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:29.664  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:29.665  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.665  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.665  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:29.788  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:29.814  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:29.814  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.814  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:29.814  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:30.333 15711 15711 I ImeTracker: com.a1taxi.driverpro:4e004f71: onRequestShow at ORIGIN_CLIENT reason SHOW_SOFT_INPUT fromUser false
10-20 00:39:30.338  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInputView():1571 onFinishInputView(true)
10-20 00:39:30.338  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onDeactivate():144 
10-20 00:39:30.338  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:30.339  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdown():131 shutdown()
10-20 00:39:30.339  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id spell_check_add_to_dictionary not found in tooltipManager.
10-20 00:39:30.340  5589  5589 I InputBundle: InputBundle.consumeEvent():1032 Skip consuming an event as keyboard status is INACTIVE
10-20 00:39:30.343 15711 15711 W RemoteInputConnectionImpl: requestCursorUpdates on inactive InputConnection
10-20 00:39:30.343  5589  5589 I AndroidIME: AbstractIme.onDeactivate():216 LatinIme.onDeactivate()
10-20 00:39:30.346  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:30.346  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:30.347  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=80081, inputTypeString=Password[NoSuggestion], enableLearning=false, autoCorrection=false, autoComplete=true, imeOptions=4000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=85, fieldName=null, extras=Bundle[mParcelledData.dataSize=404], hintText=non-empty, hintLocales=[]}}, false)
10-20 00:39:30.348  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:30.348  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=0, callback=gds@8b9327c, lastModifier=0, keyCodes=[57, 57], actions=[1, 0]}
10-20 00:39:30.349  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=0, callback=gds@993e98b, lastModifier=0, keyCodes=[58, 58], actions=[1, 0]}
10-20 00:39:30.350  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInputView():1439 onStartInputView(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=80081, inputTypeString=Password[NoSuggestion], enableLearning=false, autoCorrection=false, autoComplete=true, imeOptions=4000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=85, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=false, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}}, false)
10-20 00:39:30.350  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.getOemKeyboardHeightRatio():108 systemKeyboardHeightRatio:1.000000.
10-20 00:39:30.352  5589  5589 I AndroidIME: InputBundleManager.loadActiveInputBundleId():528 loadActiveInputBundleId: und-Latn-x-password, password
10-20 00:39:30.352  5589  5589 I AndroidIME: AbstractIme.onActivate():96 PasswordIme.onActivate() : EditorInfo = EditorInfo{packageName=com.a1taxi.driverpro, inputType=80081, inputTypeString=Password[NoSuggestion], enableLearning=false, autoCorrection=false, autoComplete=true, imeOptions=4000006, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=0, label=null, fieldId=85, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=false, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}, IncognitoMode = false, DeviceLocked = false
10-20 00:39:30.352  5589  5589 I KeyboardWrapper: KeyboardWrapper.activateKeyboard():581 activateKeyboard(): type=prime, status=INACTIVE, imeDef=mkk{stringId=password, language=und-Latn-x-password, languageTag=und-Latn-x-password, processedConditions={writing_helper_enable_by_word_revert=false, enable_access_points_in_password_number=true, variant=qwerty, true=true, language=en-US, enable_number_row=true, device=phone, enable_number_row_in_password=true, enable_pk_simulator=false}, className=com.google.android.libraries.inputmethod.ime.password.PasswordIme, label=2132019275, keyEventInterpreter=null, inlineComposing=true, autoCapital=true, announceAutoSelectedCandidate=true, statusIcon=0, indicatorIcon=0, indicatorLabel=null, displayAppCompletions=false, extraValues=mkd{}, processors=mmb@7d3d911, unacceptableMetaKeys=4098, languageSpecificSettings=0, asciiCapable=false, alwaysShowSuggestions=false, useAsciiPasswordKeyboard=false, keyboardGroupDef=mlk@8a8f7a7, phenotypeFlagId=0, localizationLanguageTag=null, supportsInlineSuggestion=false}
10-20 00:39:30.353  5589  5589 I KeyboardManager: KeyboardManager.requestKeyboard():248 Creating keyboard prime, imeId=password, cacheKey=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup
10-20 00:39:30.353  5589  5589 I KeyboardWrapper: KeyboardWrapper.onKeyboardReady():224 onKeyboardReady(): type=prime(prime), kb=com.google.android.apps.inputmethod.latin.keyboard.LatinPasswordKeyboard@8b185f8
10-20 00:39:30.353  5589  5589 I KeyboardWrapper: KeyboardWrapper.doActivateKeyboard():611 doActivateKeyboard(): prime
10-20 00:39:30.354  5589  6019 I OnDeviceWmrCalculator: OnDeviceWmrCalculator.calculateWmr():94 WMR: 0.0000 (0 / 1)
10-20 00:39:30.364  5589  5589 I KeyboardViewHelper: KeyboardViewHelper.getView():180 Get view with height ratio:1.000000
10-20 00:39:30.369  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.370  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-20 00:39:30.370  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.getKeyboardInitialStates():175 
10-20 00:39:30.370  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={show_comma_key=true, enable_more_candidates_view_for_multilingual=false, layout_9key_split=false, enable_secondary_symbols=false, pref_enable_flick_symbols=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, show_suggestion_strip=true, expressions=normal, enable_access_points_in_password_number=true, enable_correction_settings_updates=true, enable_flick_symbols=true, variant=qwerty, show_period_key=true, enable_number_row=true, device=phone, keyboard_mode=normal, show_secondary_digits=false, enable_preemptive_decode=true, enable_pk_simulator=false, bottom_period_popup_slash=false}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinPasswordKeyboard, resourceIds=[#0x7f1705fb, #0x7f17088d, #0x7f1706bb], initialStates=0, keyboardViewDefs=[mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e029f, type=BODY, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e01f9, type=FLOATING_CANDIDATES, touchable=false, defaultShow=false}, mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=17592186044419}, type=WIDGET, helpersCreated=[lxm@9d6527, lxm@b0023d4, lxm@3f2097d, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-20 00:39:30.371  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.371  5589  5589 I AndroidIME: InputBundleManager.startInput():358 startInput() with mlo[keyboardType=prime, payload=null]
10-20 00:39:30.371  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onActivate():120 
10-20 00:39:30.382  5589  5589 I LanguagePromoExtension: LanguagePromoExtension.checkDisplayPreconditions():174 Not show language promo: exceeds the max display times.
10-20 00:39:30.382  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension.onActivate():189 Not activated NewLanguagePromptExtension: not a normal text input box.
10-20 00:39:30.383  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@c9c02a3, lastModifier=2, keyCodes=[56], actions=[0]}
10-20 00:39:30.383  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@cd8b91e, lastModifier=0, keyCodes=[317], actions=[0]}
10-20 00:39:30.383  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@45d0816, lastModifier=2, keyCodes=[56], actions=[0]}
10-20 00:39:30.383  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@179076d, lastModifier=0, keyCodes=[317], actions=[0]}
10-20 00:39:30.383  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.cancelShutdown():109 cancelShutdown()
10-20 00:39:30.383  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.syncLanguagePacks():121 syncLanguagePacks()
10-20 00:39:30.383  5589  5589 I VoiceInputManager: VoiceInputManager.onKeyboardActivated():1173 onKeyboardActivated() [UD]
10-20 00:39:30.384  5589  5589 I PkModeUpdater: PkModeUpdater.onActivate():74 onActivate false true
10-20 00:39:30.384  5589  6558 I SpeechFactory: SpeechRecognitionFactory.maybeScheduleAutoPackDownloadForFallback():217 maybeScheduleAutoPackDownloadForFallback()
10-20 00:39:30.384  5589  6558 I FallbackOnDeviceRecognitionProvider: FallbackOnDeviceRecognitionProvider.maybeScheduleAutoPackDownload():205 maybeScheduleAutoPackDownload() for language tag en-US
10-20 00:39:30.384  5589  5589 I AccessoryInputModeManager: AccessoryInputModeManager.onModeStarted():318 Accessory input mode started: null
10-20 00:39:30.384  5589  5589 W SupplementaryKeyboardsWrapper: SupplementaryKeyboardsWrapper.deactivateKeyboard():161 keyboard accessory_candidates_consumer is not activated before!
10-20 00:39:30.385  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:30.385  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.385  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.385  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:30.385  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.385  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.386  5589  5589 W ExtensionWrapper: ExtensionWrapper.setExtensionViewVisibility():811 interface mas is not activate
10-20 00:39:30.387  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:30.387  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020501, callback=cgp@48a787c, lastModifier=2, keyCodes=[48], actions=[0]}
10-20 00:39:30.388  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020501, callback=cgp@748b725, lastModifier=2, keyCodes=[48], actions=[0]}
10-20 00:39:30.388  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020501, callback=cgp@9100620, lastModifier=2, keyCodes=[48], actions=[0]}
10-20 00:39:30.388  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020501, callback=cgp@2c5a2c6, lastModifier=2, keyCodes=[48], actions=[0]}
10-20 00:39:30.392  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@b07e8eb, lastModifier=2, keyCodes=[56], actions=[0]}
10-20 00:39:30.392  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020497, callback=cgp@d676a06, lastModifier=0, keyCodes=[317], actions=[0]}
10-20 00:39:30.392  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@7498b7f, lastModifier=2, keyCodes=[56], actions=[0]}
10-20 00:39:30.392  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020497, callback=cgp@d780caa, lastModifier=0, keyCodes=[317], actions=[0]}
10-20 00:39:30.393  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020502, callback=cgp@4e68a63, lastModifier=2, keyCodes=[32], actions=[0]}
10-20 00:39:30.393  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020502, callback=cgp@bbf6b77, lastModifier=2, keyCodes=[32], actions=[0]}
10-20 00:39:30.397  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=2132020502, callback=cgp@2d98178, lastModifier=2, keyCodes=[32], actions=[0]}
10-20 00:39:30.397  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=2132020502, callback=cgp@fd67368, lastModifier=2, keyCodes=[32], actions=[0]}
10-20 00:39:30.398  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 1
10-20 00:39:30.399  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 1
10-20 00:39:30.401 15711 15711 D InsetsController: show(ime(), fromIme=true)
10-20 00:39:30.401 15711 15711 I ImeTracker: com.a1taxi.driverpro:6d7f8b5e: onCancelled at PHASE_CLIENT_APPLY_ANIMATION
10-20 00:39:30.404 15711 15711 D InsetsController: show(ime(), fromIme=true)
10-20 00:39:30.404 15711 15711 I ImeTracker: com.a1taxi.driverpro:4e004f71: onCancelled at PHASE_CLIENT_APPLY_ANIMATION
10-20 00:39:30.410  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:30.410  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.410  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.410  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:30.410  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notifyWithWindow():166 
10-20 00:39:30.410  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notify():159 pfu[bounds=Rect(0, 105 - 1080, 2392), insets=Rect(0, 0 - 0, 116), densityDpi=440, smallestScreenWidthDp=393, displayWidth=1080, displayHeight=2392, xdpi=387.43, ydpi=387.43, isTrustable=true, displayId=0]; DisplayMetrics{density=2.75, width=1080, height=2392, scaledDensity=2.75, xdpi=387.43, ydpi=387.43}
10-20 00:39:30.422  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=HEADER keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{46fe30f V.E...... ........ 0,0-1080,121}
10-20 00:39:30.422  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.423  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=BODY keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{4af1206 V.E...... ........ 0,0-1080,693}
10-20 00:39:30.423  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.423  5589  5589 I GlobeKeyExtension: GlobeKeyExtension$1.onKeyboardViewShown():72 maybeDisableLanguageSwitchKeyPref when the keyboard is shown
10-20 00:39:30.423  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.maybeDisableLanguageSwitchKeyPref():200 maybeDisableLanguageSwitchKeyPref hasGlobeKeyBeenDisabled: false, shouldDisableLanguageSwitchKey: false
10-20 00:39:30.423  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension$1.onKeyboardViewShown():88 Not show new language banner: not prime keyboard, or the extension not activated.
10-20 00:39:30.425  3458  3458 V InlinePresentationRendererServiceImpl: onRenderSuggestion: width=-2, height=-2
10-20 00:39:30.436  3458  3458 V InlineSuggestionRenderService: width=-2, height=-2, measuredSize=366x121
10-20 00:39:30.450  3458  3458 D ViewRootImpl: AppSizeAfterRelayout, size: Point(366, 121), rotation: ROTATION_0
10-20 00:39:30.451  3458  3458 D BufferQueueConsumer: [](id:d8200000276,api:0,p:-1,c:3458) connect: controlledByApp=false
10-20 00:39:30.451  3458  3458 D BLASTBufferQueue: [VRI[]#630](f:0,a:0) constructor()
10-20 00:39:30.451  3458  3458 D BLASTBufferQueue: [VRI[]#630](f:0,a:0) update width=366 height=121 format=-2 mTransformHint=0
10-20 00:39:30.456  1870  1976 D AutofillSession: onShown(): 2, 1
10-20 00:39:30.458  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$2.display():195 Requesting to show proactive suggestions: AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:30.460  3458 31463 D BLASTBufferQueue: [VRI[]#630](f:0,a:1) acquireNextBufferLocked size=366x121 mFrameNumber=1 applyTransaction=true mTimestamp=661892335151681(auto) mPendingTransactions.size=0 graphicBufferId=14851996913978 transform=0
10-20 00:39:30.461  5589  5589 D BufferQueueConsumer: [](id:15d5000009b8,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:30.461  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2488](f:0,a:0) constructor()
10-20 00:39:30.461  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2488](f:0,a:0) update width=770 height=121 format=-2 mTransformHint=0
10-20 00:39:30.463  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112722, name: com.google.android.inputmethod.latin
10-20 00:39:30.464  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$Holder.setSuggestionsAndShow():898 succeed to show proactive suggestions AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:30.466  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:30.466  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.466  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:30.466  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:30.469  5589  5589 D BufferQueueConsumer: [](id:15d5000009b9,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:30.469  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2489](f:0,a:0) constructor()
10-20 00:39:30.469  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2489](f:0,a:0) update width=366 height=121 format=-2 mTransformHint=0
10-20 00:39:30.471  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 366, arg2: 121, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.475  5589  5657 D BLASTBufferQueue: [SurfaceView[InputMethod]#2489](f:0,a:1) acquireNextBufferLocked size=366x121 mFrameNumber=1 applyTransaction=true mTimestamp=661892351768220(auto) mPendingTransactions.size=0 graphicBufferId=24004572225311 transform=0
10-20 00:39:30.476  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 184, arg2: 13, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.476  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112722, name: com.google.android.inputmethod.latin
10-20 00:39:30.482  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 224, arg2: 37, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.498  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 258, arg2: 57, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.517  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 286, arg2: 73, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.540  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 310, arg2: 89, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.555  1870  3386 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 332, arg2: 101, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.565  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 346, arg2: 109, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.584  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 358, arg2: 117, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.602  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 364, arg2: 121, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:30.620  1870  3606 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 366, arg2: 121, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:32.023  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:32.025  1870  3607 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 113329, name: com.google.android.inputmethod.latin
10-20 00:39:32.025  5589  5657 E BufferQueueProducer: [SurfaceView[InputMethod]#2489(BLAST Consumer)2489](id:15d5000009b9,api:0,p:-1,c:5589) disconnect: not connected (req=1)
10-20 00:39:32.026  5589  5657 W libEGL  : EGLNativeWindowType 0xb4000077e027fae0 disconnect failed
10-20 00:39:32.026  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2489](f:0,a:1) destructor()
10-20 00:39:32.026  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2489(BLAST Consumer)2489](id:15d5000009b9,api:0,p:-1,c:5589) disconnect
10-20 00:39:32.028  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:32.031  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:32.032  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:32.032  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:32.032  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:32.037  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:32.086  1870  2278 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 112722, name: com.google.android.inputmethod.latin
10-20 00:39:32.086  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2488](f:0,a:0) destructor()
10-20 00:39:32.086  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2488(BLAST Consumer)2488](id:15d5000009b8,api:0,p:-1,c:5589) disconnect
10-20 00:39:32.100  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:32.100  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:32.100  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:32.101  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:32.185  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:32.185  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:32.186  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:32.186  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:32.238  3458  3458 V InlineSuggestionRenderService: Releasing inline suggestion view host
10-20 00:39:32.243  3458  3458 D BLASTBufferQueue: [VRI[]#630](f:0,a:4) destructor()
10-20 00:39:32.243  3458  3458 D BufferQueueConsumer: [VRI[]#630(BLAST Consumer)630](id:d8200000276,api:0,p:-1,c:3458) disconnect
10-20 00:39:32.247  3458  3458 V InlineSuggestionRenderService: Removed the inline suggestion from the cache, current size=0
10-20 00:39:32.277  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:32.468  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:32.652  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:32.905  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:33.141  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:33.350  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:33.625  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:33.692 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:39:33.700 21104 18141 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:39:33.876  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:34.136  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:35.268 15711 15711 I ImeTracker: com.a1taxi.driverpro:73ffbe82: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT fromUser false
10-20 00:39:35.271  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInputView():1571 onFinishInputView(false)
10-20 00:39:35.271  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onDeactivate():144 
10-20 00:39:35.271  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:35.272  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdown():131 shutdown()
10-20 00:39:35.273  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id spell_check_add_to_dictionary not found in tooltipManager.
10-20 00:39:35.273  5589  5589 I AndroidIME: AbstractIme.onDeactivate():216 PasswordIme.onDeactivate()
10-20 00:39:35.274  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-20 00:39:35.281 15711 15711 D InsetsController: hide(ime(), fromIme=true)
10-20 00:39:35.293  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:35.293  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:35.293  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:35.293  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:35.506 15711 15711 I ImeTracker: com.a1taxi.driverpro:c752ad5d: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT_ON_ANIMATION_STATE_CHANGED fromUser false
10-20 00:39:35.509 15711 15711 I ImeTracker: com.a1taxi.driverpro:73ffbe82: onHidden
10-20 00:39:35.867 15711 19686 I ReactNativeJS: === LOGIN BUTTON PRESSED ===
10-20 00:39:35.868 15711 19686 I ReactNativeJS: 'Username entered:', 'moorthy'
10-20 00:39:35.868 15711 19686 I ReactNativeJS: 'Password length:', 10
10-20 00:39:35.868 15711 19686 I ReactNativeJS: === DRIVER AUTHENTICATION ===
10-20 00:39:35.868 15711 19686 I ReactNativeJS: 'Username:', 'moorthy'
10-20 00:39:35.868 15711 19686 I ReactNativeJS: 'Password length:', 10
10-20 00:39:35.868 15711 19686 I ReactNativeJS: 🔍 Authenticating driver credentials via RPC...
10-20 00:39:35.878 15711 19686 I ReactNativeJS: Auth still loading...
10-20 00:39:35.897 15711 19766 I WebViewFactory: Loading com.google.android.webview version 141.0.7390.43 (code 739004333)
10-20 00:39:35.910 15711 19766 W 1taxi.driverpro: Failed to find entry 'classes.dex': Entry not found
10-20 00:39:35.911 15711 19766 D nativeloader: Configuring clns-8 for other apk /data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk. target_sdk_version=36, uses_libraries=ALL, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-20 00:39:35.911 15711 19766 D nativeloader: Extending system_exposed_libraries: libapuwareapusys.mtk.so:libapuwareapusys_v2.mtk.so:libapuwarexrp.mtk.so:libapuwarexrp_v2.mtk.so:libapuwareutils.mtk.so:libapuwareutils_v2.mtk.so:libapuwarehmp.mtk.so:libneuron_graph_delegate.mtk.so:libneuronusdk_adapter.mtk.so:libtflite_mtk.mtk.so:libarmnn_ndk.mtk.so:libcmdl_ndk.mtk.so:libnir_neon_driver_ndk.mtk.so:libmvpu_runtime.mtk.so:libmvpu_runtime_pub.mtk.so:libmvpu_engine_pub.mtk.so:libmvpu_pattern_pub.mtk.so:libmvpuop_mtk_cv.mtk.so:libmvpuop_mtk_nn.mtk.so:libmvpu_runtime_25.mtk.so:libmvpu_runtime_25_pub.mtk.so:libmvpu_engine_25_pub.mtk.so:libmvpu_pattern_25_pub.mtk.so:libmvpuop25_mtk_cv.mtk.so:libmvpuop25_mtk_nn.mtk.so:libmvpu_config.mtk.so:libteeservice_client.trustonic.so:librealm-jni.vivo.so
10-20 00:39:35.913 15711 19766 D ApplicationLoaders: Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
10-20 00:39:35.914 15711 15711 I ImeTracker: com.a1taxi.driverpro:4fd54997: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT_CLOSE_CURRENT_SESSION fromUser false
10-20 00:39:35.917 15711 19766 D nativeloader: Configuring clns-9 for other apk /data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/lib/arm64:/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk!/lib/arm64-v8a:/data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand
10-20 00:39:35.954 15711 19766 I cr_WVCFactoryProvider: version=141.0.7390.43 (739004333) minSdkVersion=29 multiprocess=true packageId=2 splits=<none>
10-20 00:39:35.957 15711 19766 D nativeloader: Load /data/app/~~_E4p1LJR5JF7COZmMiDVoA==/com.google.android.trichromelibrary_739004333-IYHcrypmKBkTpfxt3UyU4A==/base.apk!/lib/arm64-v8a/libmonochrome_64.so using class loader ns clns-9 (caller=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk): ok
10-20 00:39:35.967 15711 19766 D nativeloader: Load /system/lib64/libwebviewchromium_plat_support.so using class loader ns clns-9 (caller=/data/app/~~0k-bhKJKWMvMm9CSFH5Hzg==/com.google.android.webview-mLV-HzOd8sNTJLZpa_7utA==/base.apk): ok
10-20 00:39:35.981 21104 22617 I WifiScanner: onFullResults
10-20 00:39:35.982 21104 21140 I WifiScanner: onFullResults
10-20 00:39:35.983 21104 22617 I WifiScanner: onFullResults
10-20 00:39:35.994 21104 18141 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:39:36.011 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:36.012 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:36.012 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:36.013 15711 19766 I cr_LibraryLoader: Successfully loaded native library
10-20 00:39:36.016  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-20 00:39:36.019 15711 19766 I cr_CachingUmaRecorder: Flushed 19 samples from 19 histograms, 0 samples were dropped.
10-20 00:39:36.026  5589  5589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2287), rotation: ROTATION_0
10-20 00:39:36.027  5589  5589 D BLASTBufferQueue: [VRI[InputMethod]#2485](f:0,a:4) destructor()
10-20 00:39:36.027  5589  5589 D BufferQueueConsumer: [VRI[InputMethod]#2485(BLAST Consumer)2485](id:15d5000009b5,api:0,p:-1,c:5589) disconnect
10-20 00:39:36.121 21104 19764 I TFLite-in-PlayServices: Created interpreter.
10-20 00:39:36.152 21104 19764 I TFLite-in-PlayServices: Created interpreter.
10-20 00:39:36.177 21104 19764 I SemanticLocation: (REDACTED) [Inferrer] %s%s
10-20 00:39:36.586 15711 19686 I ReactNativeJS: 'Authentication result:', { success: true,
10-20 00:39:36.586 15711 19686 I ReactNativeJS:   user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:36.586 15711 19686 I ReactNativeJS:   message: 'Authentication successful' }
10-20 00:39:36.586 15711 19686 I ReactNativeJS: ✅ Authentication successful
10-20 00:39:36.586 15711 19686 I ReactNativeJS: 'User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:36.586 15711 19686 I ReactNativeJS: 📋 Loading user profile...
10-20 00:39:36.820 15711 19686 I ReactNativeJS: ✅ User verified as driver
10-20 00:39:36.820 15711 19686 I ReactNativeJS: 🚗 Loading driver profile via RPC...
10-20 00:39:37.067 15711 19686 I ReactNativeJS: === RETRIEVING CURRENT DRIVER STATUS ===
10-20 00:39:37.067 15711 19686 I ReactNativeJS: ✅ Driver profile loaded successfully
10-20 00:39:37.067 15711 19686 I ReactNativeJS: '📊 CURRENT status from database:', 'busy'
10-20 00:39:37.068 15711 19686 I ReactNativeJS: '📊 Status retrieved at:', '2025-10-19T19:09:37.068Z'
10-20 00:39:37.068 15711 19686 I ReactNativeJS: 📊 TESTING MODE: Setting status to ONLINE by default
10-20 00:39:37.068 15711 19686 I ReactNativeJS: 🧪 TESTING MODE ACTIVE - Ensuring driver is ONLINE and AVAILABLE
10-20 00:39:37.300 15711 19686 I ReactNativeJS: ✅ Driver status set to ONLINE and VERIFIED for testing
10-20 00:39:37.300 15711 19686 I ReactNativeJS: === FINAL STATUS CONFIRMATION ===
10-20 00:39:37.301 15711 19686 I ReactNativeJS: '📊 Driver logged in with TESTING status:', 'online'
10-20 00:39:37.301 15711 19686 I ReactNativeJS: 🧪 TESTING MODE: Driver defaulted to ONLINE
10-20 00:39:37.301 15711 19686 I ReactNativeJS: 📊 Status will remain ONLINE until manually changed
10-20 00:39:37.306 15711 19686 I ReactNativeJS: Auth still loading...
10-20 00:39:37.306 15711 19686 I ReactNativeJS: === RIDE CONTEXT INITIALIZED ===
10-20 00:39:37.306 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:37.307 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:37.307 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:39:37.308 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:37.308 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:37.308 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:37.308 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:37.309 15711 19676 D AudioManager: setMode(0)
10-20 00:39:37.310 15711 19686 I ReactNativeJS: === SETTING UP REAL-TIME SUBSCRIPTIONS ===
10-20 00:39:37.310 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:37.310 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:37.319 15711 19686 I ReactNativeJS: ✅ Real-time subscriptions established
10-20 00:39:37.319 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:37.319 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:37.319 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:39:37.320 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:37.320 15711 19686 I ReactNativeJS: 'Driver Verified:', true
10-20 00:39:37.320 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:37.320 15711 19686 I ReactNativeJS: '  - driver exists:', true
10-20 00:39:37.320 15711 19686 I ReactNativeJS: '  - status is online/busy:', true
10-20 00:39:37.320 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:39:37.320 15711 19686 I ReactNativeJS: '  - NOT isTracking:', true
10-20 00:39:37.320 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', true
10-20 00:39:37.320 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', true
10-20 00:39:37.320 15711 19686 I ReactNativeJS: ✅✅✅ ALL CONDITIONS MET - Starting location services...
10-20 00:39:37.320 15711 19686 I ReactNativeJS: === HANDLING ACTIVE DRIVER ===
10-20 00:39:37.320 15711 19686 I ReactNativeJS: 'Driver status:', 'online'
10-20 00:39:37.321 15711 19686 I ReactNativeJS: 'Driver verified:', true
10-20 00:39:37.321 15711 19686 I ReactNativeJS: === FORCE CREATING LOCATION RECORD ===
10-20 00:39:37.321 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:37.321 15711 19686 I ReactNativeJS: 'Driver Name:', 'Moorthy'
10-20 00:39:37.321 15711 19686 E ReactNativeJS: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly
10-20 00:39:37.324 15711 19686 E ReactNativeJS: 'Current value:', undefined
10-20 00:39:37.325 15711 19686 I ReactNativeJS: ⚠️ Falling back to direct database insert without edge function
10-20 00:39:37.325 15711 19686 I ReactNativeJS: === FALLBACK: CREATING LOCATION RECORD VIA RPC ===
10-20 00:39:37.325 15711 19686 I ReactNativeJS: 📍 Attempting to get current GPS location...
10-20 00:39:37.327 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:37.327 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:37.327 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:39:37.327 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:37.327 15711 19686 I ReactNativeJS: 'Driver Verified:', true
10-20 00:39:37.327 15711 19676 D AudioManager: setSpeakerphoneOn(true)
10-20 00:39:37.327 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:37.327 15711 19686 I ReactNativeJS: '  - driver exists:', true
10-20 00:39:37.327 15711 19686 I ReactNativeJS: '  - status is online/busy:', true
10-20 00:39:37.327 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:39:37.327 15711 19686 I ReactNativeJS: '  - NOT isTracking:', true
10-20 00:39:37.327 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', true
10-20 00:39:37.327 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', false
10-20 00:39:37.327 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:39:37.329 15711 19686 I ReactNativeJS: ✅ Authentication completed - LocationContext will handle location setup
10-20 00:39:37.329 15711 19686 I ReactNativeJS: 📍 Location permission will be requested by LocationContext
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: console.error: ❌ EXPO_PUBLIC_SUPABASE_URL is not configured properly, js engine: hermes, stack:
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: ?anon_0_@1:1955167
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: anonymous@1:573465
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: anonymous@1:573386
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: forceCreateLocationRecord@1:1955330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: ?anon_0_@1:1954048
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: anonymous@1:573465
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: anonymous@1:573386
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: handleActiveDriver@1:1954299
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: anonymous@1:1952792
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitHookEffectListMount@1:393518
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitHookPassiveMountEffects@1:401246
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401691
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401544
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401646
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: flushPassiveEffects@1:409114
10-20 00:39:37.330 15711 19687 E unknown:ReactNative: anonymous@1:408937
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: console.error: Current value: undefined, js engine: hermes, stack:
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: ?anon_0_@1:1955187
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: anonymous@1:573465
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: anonymous@1:573386
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: forceCreateLocationRecord@1:1955330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: ?anon_0_@1:1954048
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: anonymous@1:573465
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: anonymous@1:573386
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: handleActiveDriver@1:1954299
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: anonymous@1:1952792
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitHookEffectListMount@1:393518
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitHookPassiveMountEffects@1:401246
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401691
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401544
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401664
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401438
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: recursivelyTraversePassiveMountEffects@1:401330
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: commitPassiveMountOnFiber@1:401646
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: flushPassiveEffects@1:409114
10-20 00:39:37.332 15711 19687 E unknown:ReactNative: anonymous@1:408937
10-20 00:39:37.338 15711 19686 I ReactNativeJS: ✅ Login successful, waiting for navigation...
10-20 00:39:37.340 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:39:37.340 15711 19686 I ReactNativeJS: 'In auth group:', true
10-20 00:39:37.340 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:39:37.340 15711 19686 I ReactNativeJS: 'Has driver:', true
10-20 00:39:37.340 15711 19686 I ReactNativeJS: 'Current segments:', [ '(auth)', 'login' ]
10-20 00:39:37.340 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:39:37.340 15711 19686 I ReactNativeJS: 'Is authenticated:', { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   license_number: 'TN78BB1468',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   license_expiry: '2026-01-31',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   status: 'online',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   rating: 5,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   total_rides: 0,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   is_verified: true,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   vehicle_id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   vendor_id: null,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   phone_number: '9898989898',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   name: 'Moorthy',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   created_at: '2025-10-07T12:35:55.781671+00:00',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   updated_at: '2025-10-19T19:09:05.493798+00:00',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   vehicles: 
10-20 00:39:37.340 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      capacity: 4 },
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   user: 
10-20 00:39:37.340 15711 19686 I ReactNativeJS:    { id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      email: 'moorthy@gmail.com',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      role: 'driver',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      full_name: 'Moorthy',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      phone_number: '9898989898',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      avatar_url: null,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      is_active: true,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      created_at: '2025-10-07T12:35:55.310024+00:00',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      updated_at: '2025-10-07T12:35:55.310024+00:00' },
10-20 00:39:37.340 15711 19686 I ReactNativeJS:   vehicle: 
10-20 00:39:37.340 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:37.340 15711 19686 I ReactNativeJS:      capacity: 4 } }
10-20 00:39:37.341 15711 19686 I ReactNativeJS: Redirecting to main app - authenticated
10-20 00:39:37.361 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:37.361 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:37.361 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:37.365 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:37.365 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:37.365 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:37.375 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:39:37.375 15711 19686 I ReactNativeJS: 'In auth group:', false
10-20 00:39:37.375 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:39:37.375 15711 19686 I ReactNativeJS: 'Has driver:', true
10-20 00:39:37.376 15711 19686 I ReactNativeJS: 'Current segments:', [ '(tabs)' ]
10-20 00:39:37.376 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:39:37.377 15711 19686 I ReactNativeJS: 'Is authenticated:', { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   license_number: 'TN78BB1468',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   license_expiry: '2026-01-31',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   status: 'online',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   rating: 5,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   total_rides: 0,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   is_verified: true,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   vehicle_id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   vendor_id: null,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   phone_number: '9898989898',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   name: 'Moorthy',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   created_at: '2025-10-07T12:35:55.781671+00:00',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   updated_at: '2025-10-19T19:09:05.493798+00:00',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   vehicles: 
10-20 00:39:37.377 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      capacity: 4 },
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   user: 
10-20 00:39:37.377 15711 19686 I ReactNativeJS:    { id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      email: 'moorthy@gmail.com',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      role: 'driver',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      full_name: 'Moorthy',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      phone_number: '9898989898',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      avatar_url: null,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      is_active: true,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      created_at: '2025-10-07T12:35:55.310024+00:00',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      updated_at: '2025-10-07T12:35:55.310024+00:00' },
10-20 00:39:37.377 15711 19686 I ReactNativeJS:   vehicle: 
10-20 00:39:37.377 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:37.377 15711 19686 I ReactNativeJS:      capacity: 4 } }
10-20 00:39:37.377 15711 19686 I ReactNativeJS: No navigation needed - staying in current route
10-20 00:39:37.390 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:37.390 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:37.390 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:37.391 21104 19783 I FusedLocation: stationary throttling disengaged [CONTEXT service_id=6 ]
10-20 00:39:37.399 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:37.399 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:37.399Z'
10-20 00:39:37.399 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:37.399 15711 19686 I ReactNativeJS: === COMPLETION MODAL STATE DEBUG ===
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '📊 visible:', false
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '📊 data exists:', false
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '📊 data:', 'null'
10-20 00:39:37.399 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:37.399 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:37.399 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:37.399 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:37.400 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:37.400 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:37.400 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:37.400 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:37.403 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:39:37.403 15711 19686 I ReactNativeJS: 'In auth group:', false
10-20 00:39:37.403 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:39:37.403 15711 19686 I ReactNativeJS: 'Has driver:', true
10-20 00:39:37.403 15711 19686 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'rides' ]
10-20 00:39:37.403 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:39:37.404 15711 19686 I ReactNativeJS: 'Is authenticated:', { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   license_number: 'TN78BB1468',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   license_expiry: '2026-01-31',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   status: 'online',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   rating: 5,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   total_rides: 0,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   is_verified: true,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   vehicle_id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   vendor_id: null,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   phone_number: '9898989898',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   name: 'Moorthy',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   created_at: '2025-10-07T12:35:55.781671+00:00',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   updated_at: '2025-10-19T19:09:05.493798+00:00',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   vehicles: 
10-20 00:39:37.404 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      capacity: 4 },
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   user: 
10-20 00:39:37.404 15711 19686 I ReactNativeJS:    { id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      email: 'moorthy@gmail.com',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      role: 'driver',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      full_name: 'Moorthy',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      phone_number: '9898989898',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      avatar_url: null,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      is_active: true,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      created_at: '2025-10-07T12:35:55.310024+00:00',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      updated_at: '2025-10-07T12:35:55.310024+00:00' },
10-20 00:39:37.404 15711 19686 I ReactNativeJS:   vehicle: 
10-20 00:39:37.404 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:37.404 15711 19686 I ReactNativeJS:      capacity: 4 } }
10-20 00:39:37.404 15711 19686 I ReactNativeJS: No navigation needed - staying in current route
10-20 00:39:37.404 15711 19686 I ReactNativeJS: ✅ Notification sound service initialized
10-20 00:39:37.427 21104 19783 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-20 00:39:37.444 21104 21184 W inertial-anchor: Triggering reinit due to mag declination change
10-20 00:39:37.444 21104 21184 W Looper  : Looper already prepared for this thread with a different value for the LOOPER_PREPARE_ALLOW_NON_CALLBACKS option.
10-20 00:39:37.878 15711 15711 W SafeAreaView: Timed out waiting for layout.
10-20 00:39:37.885 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 225
10-20 00:39:37.892 15711 15711 I Choreographer: Skipped 30 frames!  The application may be doing too much work on its main thread.
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 185
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 185
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 199
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 199
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 185
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 185
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 185
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: 199
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Tried to update size of non-existent tag: 235
10-20 00:39:37.913 15711 19687 W unknown:ReactNative: Tried to update size of non-existent tag: 249
10-20 00:39:37.914 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:37.914 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:38.147 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:38.157 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:38.158 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:38.158 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:38.160 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:38.160 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:38.160 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:38.160Z'
10-20 00:39:38.160 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:38.160 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:38.160 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:38.160 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:38.161 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:38.161 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:38.161 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:38.161 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:38.161 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:38.161 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:38.161 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:38.165 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:38.166 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:38.166 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:38.167 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:38.167 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:38.167 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:38.167 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:38.167 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:38.167 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:38.167 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:38.167 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:38.167 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:38.167Z'
10-20 00:39:38.167 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:38.474 21104 19782 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:39:38.474 21104 19782 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:39:39.337 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:39.337 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:39.338 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:39.338 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:39.360 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:39.361 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:39.361 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:39.364 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:39.368 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:39.368 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:39.368 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:39.368 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:39.368 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:39.368 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:39.369 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:39.369 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:39.369 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:39.369Z'
10-20 00:39:39.369 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:39.779 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:39.780 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:40.026 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:40.036 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:40.036 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:40.036 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:40.039 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:40.039 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:40.039 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:40.039 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:40.040Z'
10-20 00:39:40.040 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:40.040 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:40.040 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:40.040 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:40.040 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:40.041 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:40.041 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:40.041 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:40.041 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:40.046 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:40.046 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:40.046 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:40.048 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:40.048 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:40.048 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:40.048 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:40.048 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:40.048 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:40.048 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:40.048 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:40.048 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:40.048Z'
10-20 00:39:40.048 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:40.577 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:40.580 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:40.581 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:40.588 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:40.592 21104 19782 I FusedLocation: (REDACTED) stationary throttling engaged @%s
10-20 00:39:40.594 21104 19822 I FusedOrientationManager: Unregistering orientation client. [CONTEXT service_id=6 ]
10-20 00:39:40.621 15711 19686 I ReactNativeJS: '✅ Got native location:', { accuracy: 12.201000213623047,
10-20 00:39:40.621 15711 19686 I ReactNativeJS:   longitude: 77.8299525,
10-20 00:39:40.621 15711 19686 I ReactNativeJS:   altitude: 772.5999755859375,
10-20 00:39:40.621 15711 19686 I ReactNativeJS:   heading: 0,
10-20 00:39:40.621 15711 19686 I ReactNativeJS:   latitude: 12.7486217,
10-20 00:39:40.621 15711 19686 I ReactNativeJS:   altitudeAccuracy: 1.228967547416687,
10-20 00:39:40.621 15711 19686 I ReactNativeJS:   speed: 0.0012858101399615407 }
10-20 00:39:40.842 15711 19686 I ReactNativeJS: '✅ Location record', 'updated', 'successfully via RPC'
10-20 00:39:40.842 15711 19686 I ReactNativeJS: ✅ Location record confirmed, starting tracking...
10-20 00:39:40.842 15711 19686 I ReactNativeJS: ✅ Driver is now available for customer bookings
10-20 00:39:40.842 15711 19686 I ReactNativeJS: === STARTING LOCATION TRACKING ===
10-20 00:39:40.843 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:40.843 15711 19686 I ReactNativeJS: 'Status:', 'online'
10-20 00:39:40.843 15711 19686 I ReactNativeJS: 'Permission:', true
10-20 00:39:40.850 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:40.851 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:40.851 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:40.853 15711 19686 I ReactNativeJS: ✅ isTracking state set to TRUE at start
10-20 00:39:40.853 15711 19686 I ReactNativeJS: === UPDATING LOCATION WITH GOOGLE MAPS ===
10-20 00:39:40.853 15711 19686 I ReactNativeJS: 📱 Using native location...
10-20 00:39:40.854 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:40.854 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:40.854 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:39:40.854 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:40.854 15711 19686 I ReactNativeJS: 'Driver Verified:', true
10-20 00:39:40.854 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:40.854 15711 19686 I ReactNativeJS: '  - driver exists:', true
10-20 00:39:40.855 15711 19686 I ReactNativeJS: '  - status is online/busy:', true
10-20 00:39:40.855 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:39:40.855 15711 19686 I ReactNativeJS: '  - NOT isTracking:', false
10-20 00:39:40.855 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', true
10-20 00:39:40.855 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', false
10-20 00:39:40.855 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:39:40.870 21104 19782 I FusedLocation: stationary throttling disengaged [CONTEXT service_id=6 ]
10-20 00:39:40.880 21104 19822 I FusedLocation: (REDACTED) stationary throttling engaged @%s
10-20 00:39:40.894 21104 19822 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-20 00:39:40.903 21104 19782 I FusedOrientationManager: Unregistering orientation client. [CONTEXT service_id=6 ]
10-20 00:39:40.904 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:39:40.909 21104 21184 W inertial-anchor: Triggering reinit due to mag declination change
10-20 00:39:40.909 21104 21184 W Looper  : Looper already prepared for this thread with a different value for the LOOPER_PREPARE_ALLOW_NON_CALLBACKS option.
10-20 00:39:40.915 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:39:41.259 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:41.259 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:41.260 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:41.262 15711 19686 I ReactNativeJS: '✅ Location obtained:', { accuracy: 12.201000213623047,
10-20 00:39:41.262 15711 19686 I ReactNativeJS:   longitude: 77.8299525,
10-20 00:39:41.262 15711 19686 I ReactNativeJS:   altitude: 772.5999755859375,
10-20 00:39:41.262 15711 19686 I ReactNativeJS:   heading: 0,
10-20 00:39:41.262 15711 19686 I ReactNativeJS:   latitude: 12.7486217,
10-20 00:39:41.262 15711 19686 I ReactNativeJS:   altitudeAccuracy: 1.228967547416687,
10-20 00:39:41.262 15711 19686 I ReactNativeJS:   speed: 0.0012858101399615407 }
10-20 00:39:41.269 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:41.270 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:41.270 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:41.271 15711 19686 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-20 00:39:41.271 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:41.271 15711 19686 I ReactNativeJS: 'Location:', { latitude: 12.7486217,
10-20 00:39:41.271 15711 19686 I ReactNativeJS:   longitude: 77.8299525,
10-20 00:39:41.271 15711 19686 I ReactNativeJS:   accuracy: 12.201000213623047 }
10-20 00:39:41.271 15711 19686 I ReactNativeJS: 📤 Updating location via RPC...
10-20 00:39:41.337 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:41.338 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:41.338 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:41.338 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:41.343 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:41.343 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:41.344 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:41.345 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:41.347 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:41.347 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:41.347 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:41.347 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:41.347 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:41.347 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:41.347 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:41.347 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:41.347 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:41.347Z'
10-20 00:39:41.347 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:41.529 15711 19686 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-20 00:39:41.529 15711 19686 I ReactNativeJS: 📱 Starting native location watching with 5s intervals
10-20 00:39:41.548 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:41.549 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:41.549 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:41.551 15711 19686 I ReactNativeJS: ✅ Location tracking started successfully
10-20 00:39:41.552 15711 19686 I ReactNativeJS: === STARTING BACKGROUND LOCATION TRACKING ===
10-20 00:39:41.552 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:41.552 15711 19686 I ReactNativeJS: 'Status:', 'online'
10-20 00:39:41.552 15711 19686 I ReactNativeJS: === STARTING BACKGROUND LOCATION TRACKING ===
10-20 00:39:41.552 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:41.552 15711 19686 I ReactNativeJS: 'Platform:', 'android'
10-20 00:39:41.553 21104 19782 I FusedLocation: stationary throttling disengaged [CONTEXT service_id=6 ]
10-20 00:39:41.557 15711 19686 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-20 00:39:41.557 15711 19686 I ReactNativeJS:   heading: 0,
10-20 00:39:41.557 15711 19686 I ReactNativeJS:   altitudeAccuracy: 1.228967547416687,
10-20 00:39:41.557 15711 19686 I ReactNativeJS:   latitude: 12.7486217,
10-20 00:39:41.557 15711 19686 I ReactNativeJS:   speed: 0.0012858101399615407,
10-20 00:39:41.557 15711 19686 I ReactNativeJS:   longitude: 77.8299525,
10-20 00:39:41.557 15711 19686 I ReactNativeJS:   accuracy: 12.201000213623047 }
10-20 00:39:41.563 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:41.563 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:41.563 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:41.584 21104 19782 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-20 00:39:41.609 21104 21184 W inertial-anchor: Triggering reinit due to mag declination change
10-20 00:39:41.609 21104 21184 W Looper  : Looper already prepared for this thread with a different value for the LOOPER_PREPARE_ALLOW_NON_CALLBACKS option.
10-20 00:39:41.646 28149 28149 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 177), rotation: ROTATION_0
10-20 00:39:41.646 28149 28149 D BufferQueueConsumer: [](id:6df500000014,api:0,p:-1,c:28149) connect: controlledByApp=false
10-20 00:39:41.646 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#20](f:0,a:0) constructor()
10-20 00:39:41.646 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#20](f:0,a:0) update width=1202 height=177 format=-2 mTransformHint=0
10-20 00:39:41.661  1870  1976 I ActivityTaskManager: Displayed com.google.android.permissioncontroller/com.android.permissioncontroller.permission.ui.GrantPermissionsActivity for user 0: +94ms
10-20 00:39:41.679 28149 28149 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{c45a331 V.E...... R.....ID 0,0-1026,0}[GrantPermissionsActivity] softInputMode=STATE_ALWAYS_HIDDEN|ADJUST_NOTHING|IS_FORWARD_NAVIGATION
10-20 00:39:41.707  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:41.707  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:41.707  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.google.android.permissioncontroller, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:41.708  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:41.709  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=0, callback=gds@7738b1a, lastModifier=0, keyCodes=[57, 57], actions=[1, 0]}
10-20 00:39:41.709  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=0, callback=gds@18e9941, lastModifier=0, keyCodes=[58, 58], actions=[1, 0]}
10-20 00:39:41.731 28149 28149 D CTBdelegate: onCreateView: from NonAppCompatActivity.
10-20 00:39:41.775 28149 28149 I AppPermissionViewModel: AppPermission fragment viewed with sessionId=-508936230929088843 uid=10408 packageName=com.a1taxi.driverpro permGroupName=android.permission-group.LOCATION permissionRationaleShown=false
10-20 00:39:41.800 28149 28149 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:41.800 28149 28149 D BufferQueueConsumer: [](id:6df500000015,api:0,p:-1,c:28149) connect: controlledByApp=false
10-20 00:39:41.800 28149 28149 D BLASTBufferQueue: [VRI[ManagePermissionsActivity]#21](f:0,a:0) constructor()
10-20 00:39:41.800 28149 28149 D BLASTBufferQueue: [VRI[ManagePermissionsActivity]#21](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-20 00:39:41.817 28149 29675 D BLASTBufferQueue: [VRI[ManagePermissionsActivity]#21](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661903693854374(auto) mPendingTransactions.size=0 graphicBufferId=120899034415284 transform=0
10-20 00:39:41.826  1870  1976 I ActivityTaskManager: Displayed com.google.android.permissioncontroller/com.android.permissioncontroller.permission.ui.ManagePermissionsActivity for user 0: +152ms
10-20 00:39:41.843 28149 28149 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{c36828a V.E...... R......D 0,0-1080,2392}[ManagePermissionsActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-20 00:39:41.846  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:41.846  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:41.846  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.google.android.permissioncontroller, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:41.847  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:41.982 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:41.982 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:42.141 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:42.142 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:42.143 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:42.143 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:42.143 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:42.143 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:42.189 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:42.190 15711 15711 D VRI[MainActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:39:42.192 28149 28149 D VRI[GrantPermissionsActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:39:42.202 28149 28149 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 177), rotation: ROTATION_0
10-20 00:39:42.202 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#20](f:0,a:0) destructor()
10-20 00:39:42.202 28149 28149 D BufferQueueConsumer: [VRI[GrantPermissionsActivity]#20(BLAST Consumer)20](id:6df500000014,api:0,p:-1,c:28149) disconnect
10-20 00:39:42.212 21104 19782 I FusedLocation: (REDACTED) stationary throttling engaged @%s
10-20 00:39:42.217 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:42.217 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#0](f:0,a:4) destructor()
10-20 00:39:42.217 15711 15711 D BufferQueueConsumer: [VRI[MainActivity]#0(BLAST Consumer)0](id:3d5f00000000,api:0,p:-1,c:15711) disconnect
10-20 00:39:42.220 21104 19782 I FusedOrientationManager: Unregistering orientation client. [CONTEXT service_id=6 ]
10-20 00:39:42.227 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:42.229 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:42.229 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:42.233 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:42.234 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:42.234 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:42.234 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:42.234 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:42.235 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:42.235 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:42.235 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:42.235 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:42.235 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:42.235Z'
10-20 00:39:42.235 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:42.235 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:42.235 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:42.235 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:42.236 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:42.236 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:42.236 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:42.236 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:42.236 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:42.236 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:42.236 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:42.236 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:42.248 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:42.248 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:42.248 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:42.252 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:42.252 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:42.252 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:42.252 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:42.253 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:42.253 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:42.253 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:42.253 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:42.254 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:42.253Z'
10-20 00:39:42.254 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:42.257 15711 19686 I ReactNativeJNI: Memory warning (pressure level: TRIM_MEMORY_UI_HIDDEN) received by JS VM, ignoring because it's non-severe
10-20 00:39:42.271 15711 19686 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-20 00:39:42.272 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:42.273 15711 19686 I ReactNativeJS: 'Location:', { latitude: 12.7486217,
10-20 00:39:42.273 15711 19686 I ReactNativeJS:   longitude: 77.8299525,
10-20 00:39:42.273 15711 19686 I ReactNativeJS:   accuracy: 12.201000213623047 }
10-20 00:39:42.274 15711 19686 I ReactNativeJS: 📤 Updating location via RPC...
10-20 00:39:42.511 15711 19686 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-20 00:39:43.449 28149 28149 I AppPermissionViewModel: Permission changed via UI with sessionId=-508936230929088843 changeId=-5840319933626024062 uid=10408 packageName=com.a1taxi.driverpro permission=android.permission.ACCESS_BACKGROUND_LOCATION isGranted=true permissionFlags=2817 buttonPressed=4
10-20 00:39:44.364  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 0
10-20 00:39:44.449 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:44.450 15711 15711 D BufferQueueConsumer: [](id:3d5f00000003,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:39:44.450 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#3](f:0,a:0) constructor()
10-20 00:39:44.450 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#3](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-20 00:39:44.453 21104 19782 I FusedLocation: stationary throttling disengaged [CONTEXT service_id=6 ]
10-20 00:39:44.456 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#3](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661906332485528(auto) mPendingTransactions.size=0 graphicBufferId=67478231187477 transform=0
10-20 00:39:44.457 28149 28149 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 177), rotation: ROTATION_0
10-20 00:39:44.458 28149 28149 D BufferQueueConsumer: [](id:6df500000016,api:0,p:-1,c:28149) connect: controlledByApp=false
10-20 00:39:44.458 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#22](f:0,a:0) constructor()
10-20 00:39:44.458 28149 28149 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#22](f:0,a:0) update width=1202 height=177 format=-2 mTransformHint=0
10-20 00:39:44.481  9946 15722 D Camera2PresenceSrc: System onCameraAccessPrioritiesChanged.
10-20 00:39:44.485 15711 19686 I ReactNativeJS: ✅ Background location permission granted
10-20 00:39:44.487  9946 15719 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:44.487  9946 15719 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:44.488  9946 15719 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:44.488  9946 15719 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:44.496  9946 15719 D Camera2PresenceSrc: [FetchData] Refreshed camera list: CameraIdentifier{cameraIds=0}, CameraIdentifier{cameraIds=1}
10-20 00:39:44.505 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:44.505 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:44.505 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:44.505 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:44.508 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R......D 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-20 00:39:44.510 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:44.510 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:44.510 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:44.512 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:44.515 15711 19676 I TaskService: Registered task with name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:39:44.515  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:44.516  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:44.517  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:44.524 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:44.525 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:44.525 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:44.525 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:44.525 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:44.525 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:44.525 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:44.525 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:44.525 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:44.525Z'
10-20 00:39:44.525 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:44.531  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:44.537 15711 19676 I TaskService: Registered task with name 'background-fetch-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:39:44.537 15711 19686 I ReactNativeJS: ✅ Background location tracking started
10-20 00:39:44.537 15711 19686 I ReactNativeJS: ✅ Foreground service notification will be shown
10-20 00:39:44.537 15711 19686 I ReactNativeJS: ✅ Location will update every 5 seconds even when app is closed
10-20 00:39:44.542 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:44.542 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:44.542 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:44.547 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:44.547 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:44.547 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:44.548 15711 19686 I ReactNativeJS: ✅ Background location tracking started successfully
10-20 00:39:44.548 15711 19686 I ReactNativeJS: ✅ Driver location will be sent every 5 seconds even when app is closed
10-20 00:39:44.548 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:44.548 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:44.548 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:39:44.548 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:44.548 15711 19686 I ReactNativeJS: 'Driver Verified:', true
10-20 00:39:44.548 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:44.548 15711 19686 I ReactNativeJS: '  - driver exists:', true
10-20 00:39:44.548 15711 19686 I ReactNativeJS: '  - status is online/busy:', true
10-20 00:39:44.548 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:39:44.548 15711 19686 I ReactNativeJS: '  - NOT isTracking:', false
10-20 00:39:44.548 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', false
10-20 00:39:44.548 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', false
10-20 00:39:44.548 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:39:44.555 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:44.555 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:44.555 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:44.560 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:44.560 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:44.560 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:39:44.560 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:44.560 15711 19686 I ReactNativeJS: 'Driver Verified:', true
10-20 00:39:44.560 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:44.560 15711 19686 I ReactNativeJS: '  - driver exists:', true
10-20 00:39:44.560 15711 19686 I ReactNativeJS: '  - status is online/busy:', true
10-20 00:39:44.560 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:39:44.560 15711 19686 I ReactNativeJS: '  - NOT isTracking:', false
10-20 00:39:44.560 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', false
10-20 00:39:44.560 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', true
10-20 00:39:44.561 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:39:44.572 21104 19782 I FusedOrientationManager: Registering orientation client. [CONTEXT service_id=6 ]
10-20 00:39:44.584 21104 21184 W inertial-anchor: Triggering reinit due to mag declination change
10-20 00:39:44.584 21104 21184 W Looper  : Looper already prepared for this thread with a different value for the LOOPER_PREPARE_ALLOW_NON_CALLBACKS option.
10-20 00:39:44.616 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:39:44.616 21104 19764 I AlarmManager: set [name: SystemMemoryMap-flp type: 2 triggerAtMillis: 9223372036854775806 windowMillis: -1 intervalMillis: 0]
10-20 00:39:44.639  9946 15550 I TRuntime.CctTransportBackend: Making request to: https://firebaselogging.googleapis.com/v0cc/log/batch?format=json_proto3
10-20 00:39:44.640 28149 28164 W ssioncontroller: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~5-EtbKhINSN2xUSXFAKqOA==/com.a1taxi.driverpro-Esb-bMEGDnyrmLPRDdzhdQ==/base.apk' with 1 weak references
10-20 00:39:44.766 28149 28149 D VRI[ManagePermissionsActivity]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:39:44.786 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:44.786 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:44.795 28149 28149 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:44.796 28149 28149 D BLASTBufferQueue: [VRI[ManagePermissionsActivity]#21](f:0,a:4) destructor()
10-20 00:39:44.796 28149 28149 D BufferQueueConsumer: [VRI[ManagePermissionsActivity]#21(BLAST Consumer)21](id:6df500000015,api:0,p:-1,c:28149) disconnect
10-20 00:39:44.835 28149 28149 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@d0bd4cf
10-20 00:39:44.847 28149 28149 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@d4baa1
10-20 00:39:44.854 28149 29675 D BLASTBufferQueue: [VRI[GrantPermissionsActivity]#22](f:0,a:0) destructor()
10-20 00:39:44.855 28149 29675 D BufferQueueConsumer: [VRI[GrantPermissionsActivity]#22(BLAST Consumer)22](id:6df500000016,api:0,p:-1,c:28149) disconnect
10-20 00:39:44.973  9946 15550 I TRuntime.CctTransportBackend: Status Code: 200
10-20 00:39:44.998 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:44.998  9946 15722 D Camera2PresenceSrc: System onCameraAccessPrioritiesChanged.
10-20 00:39:45.000  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.000  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.000  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.000  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.000  9946 15722 D Camera2PresenceSrc: [FetchData] Refreshed camera list: CameraIdentifier{cameraIds=0}, CameraIdentifier{cameraIds=1}
10-20 00:39:45.006 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:45.006  9946 15719 D Camera2PresenceSrc: System onCameraAccessPrioritiesChanged.
10-20 00:39:45.007 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:45.007 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:45.008 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:45.008 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:45.008 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:45.008 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:45.008 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:45.009Z'
10-20 00:39:45.009 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:45.009 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:45.009 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:45.009 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:45.009 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:45.009 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:45.009 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:45.009 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:45.011  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.011  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.011  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.011  9946 15722 D VivoJavaJsonManager: failed to find appName:host.exp.exponent from config key:mProtakePackages
10-20 00:39:45.011  9946 15722 D Camera2PresenceSrc: [FetchData] Refreshed camera list: CameraIdentifier{cameraIds=0}, CameraIdentifier{cameraIds=1}
10-20 00:39:45.013 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:45.014 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:45.014 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:45.015 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:45.015 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:45.015 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:45.015 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:45.015 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:45.015 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:45.015 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:45.015 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:45.015 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:45.015Z'
10-20 00:39:45.015 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:45.326  5589  6019 I ProtoXDBBufferWrapper: ProtoXDBBufferWrapper.flushToStorage():158 Flushed 6 data item(s) to storage.
10-20 00:39:45.495 15711 19686 I ReactNativeJS: === LOADING SCHEDULED BOOKINGS ===
10-20 00:39:45.496 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:45.499 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:39:45.499 15711 19686 I ReactNativeJS: 'In auth group:', false
10-20 00:39:45.499 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:39:45.499 15711 19686 I ReactNativeJS: 'Has driver:', true
10-20 00:39:45.499 15711 19686 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'scheduled' ]
10-20 00:39:45.499 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:39:45.500 15711 19686 I ReactNativeJS: 'Is authenticated:', { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   license_number: 'TN78BB1468',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   license_expiry: '2026-01-31',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   status: 'online',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   rating: 5,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   total_rides: 0,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   is_verified: true,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   vehicle_id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   vendor_id: null,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   phone_number: '9898989898',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   name: 'Moorthy',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   created_at: '2025-10-07T12:35:55.781671+00:00',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   updated_at: '2025-10-19T19:09:05.493798+00:00',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   vehicles: 
10-20 00:39:45.500 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      capacity: 4 },
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   user: 
10-20 00:39:45.500 15711 19686 I ReactNativeJS:    { id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      email: 'moorthy@gmail.com',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      role: 'driver',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      full_name: 'Moorthy',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      phone_number: '9898989898',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      avatar_url: null,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      is_active: true,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      created_at: '2025-10-07T12:35:55.310024+00:00',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      updated_at: '2025-10-07T12:35:55.310024+00:00' },
10-20 00:39:45.500 15711 19686 I ReactNativeJS:   vehicle: 
10-20 00:39:45.500 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:45.500 15711 19686 I ReactNativeJS:      capacity: 4 } }
10-20 00:39:45.500 15711 19686 I ReactNativeJS: No navigation needed - staying in current route
10-20 00:39:45.624 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:45.624 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:45.624 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:45.624 15711 19686 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-20 00:39:45.624 15711 19686 I ReactNativeJS:   heading: 0,
10-20 00:39:45.624 15711 19686 I ReactNativeJS:   altitudeAccuracy: 1.2795547246932983,
10-20 00:39:45.624 15711 19686 I ReactNativeJS:   latitude: 12.7486543,
10-20 00:39:45.624 15711 19686 I ReactNativeJS:   speed: 0.018146967515349388,
10-20 00:39:45.624 15711 19686 I ReactNativeJS:   longitude: 77.8300075,
10-20 00:39:45.624 15711 19686 I ReactNativeJS:   accuracy: 7.75 }
10-20 00:39:45.626 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:45.627 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:45.629 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:45.629 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:45.629 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:45.743 15711 19686 I ReactNativeJS: 'Current booking:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:45.808 15711 19686 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-20 00:39:45.808 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:45.809 15711 19686 I ReactNativeJS: 'Location:', { latitude: 12.7486543, longitude: 77.8300075, accuracy: 7.75 }
10-20 00:39:45.809 15711 19686 I ReactNativeJS: 📤 Updating location via RPC...
10-20 00:39:45.912 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:39:45.921 21104 18140 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:39:45.965 15711 19686 I ReactNativeJS: 'Available bookings:', 0
10-20 00:39:46.149 15711 19686 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-20 00:39:46.506 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:46.506 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:46.507 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:46.507 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:46.514 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:46.515 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:46.515 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:46.517 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:46.520 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:46.520 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:46.520 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:46.520 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:46.520 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:46.520 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:46.520 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:46.520 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:46.521 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:46.521Z'
10-20 00:39:46.521 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:46.680 21104 21143 I WifiScanner: onFullResults
10-20 00:39:46.680 21104 22647 I WifiScanner: onFullResults
10-20 00:39:46.681 21104 21143 I WifiScanner: onFullResults
10-20 00:39:46.694 21104 19755 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:39:46.712 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:46.713 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:46.713 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:46.713 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:46.717 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:46.717 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:46.722 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:39:46.724 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:46.724 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:46.726 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:39:46.942 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:46.952 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:46.953 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:46.953 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:46.955 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:46.955 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:46.955 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:46.955 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:46.955 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:46.955 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:46.955 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:46.956Z'
10-20 00:39:46.956 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:46.956 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:46.956 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:46.956 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:46.956 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:46.956 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:46.956 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:46.956 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:46.962 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:46.962 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:46.962 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:46.963 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:46.963 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:46.963 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:46.963 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:46.963 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:46.963 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:46.963 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:46.963 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:46.964 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:46.963Z'
10-20 00:39:46.964 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:47.080 15711 19686 I ReactNativeJS: === LOADING SCHEDULED BOOKINGS ===
10-20 00:39:47.080 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:47.327 15711 19686 I ReactNativeJS: 'Current booking:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:47.563 15711 19686 I ReactNativeJS: 'Available bookings:', 0
10-20 00:39:48.323 15711 15711 E unknown:ReactModalHost: Creating new dialog from context: com.a1taxi.driverpro.MainActivity@6a5961c@111515164
10-20 00:39:48.366 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:48.366 15711 15711 D BufferQueueConsumer: [](id:3d5f00000004,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:39:48.367 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#4](f:0,a:0) constructor()
10-20 00:39:48.367 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#4](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-20 00:39:48.400 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#4](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661910276895990(auto) mPendingTransactions.size=0 graphicBufferId=67478231187484 transform=0
10-20 00:39:48.403 15711 15711 E unknown:ReactModalHost: Updating existing dialog with context: com.a1taxi.driverpro.MainActivity@6a5961c@111515164
10-20 00:39:48.444 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{f8b9c4c V.E...... R....... 0,0-1080,2392}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-20 00:39:48.449  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:48.452  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:48.452  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:48.456  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:48.476 21104 19822 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:39:48.478 21104 19822 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:39:48.505 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:48.505 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:48.505 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:48.505 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:48.511 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:48.511 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:48.511 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:48.512 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:48.514 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:48.514 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:48.514 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:48.514 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:48.514 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:48.514 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:48.514 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:48.514 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:48.514 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:48.514Z'
10-20 00:39:48.514 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:48.611 21104 19982 I .gms.persistent: Explicit concurrent copying GC freed 19MB AllocSpace bytes, 3(192KB) LOS objects, 49% free, 21MB/42MB, paused 422us,107us total 397.845ms
10-20 00:39:48.735 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:48.735 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:48.950 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:48.964 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:48.964 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:48.964 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:48.966 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:48.967 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:48.967 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:48.967 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:48.967 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:48.967 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:48.967 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:48.967 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:48.967 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:48.968 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:48.967Z'
10-20 00:39:48.968 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:48.968 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:48.968 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:48.968 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:48.968 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:48.968 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:48.968 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:48.968 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:48.968 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:48.968 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:48.968 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:48.968 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:48.974 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:48.975 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:48.975 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:48.976 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:48.976 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:48.976 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:48.976 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:48.976 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:48.976 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:48.976 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:48.976 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:48.976 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:48.976Z'
10-20 00:39:48.976 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:49.007 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:49.012 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:49.012 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:49.013 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:49.014 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:49.015 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:49.015 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:49.555 15711 15711 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@e16e7bd
10-20 00:39:49.560 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#4](f:0,a:4) destructor()
10-20 00:39:49.560 15711 15711 D BufferQueueConsumer: [VRI[MainActivity]#4(BLAST Consumer)4](id:3d5f00000004,api:0,p:-1,c:15711) disconnect
10-20 00:39:49.601 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R....... 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-20 00:39:49.606  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:49.608  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:49.609  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:49.611  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:50.475 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:50.475 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:50.475 15711 19687 W unknown:ReactNative: Attempt to set local data for view with unknown tag: -1
10-20 00:39:50.477 15711 15711 E unknown:ReactModalHost: Creating new dialog from context: com.a1taxi.driverpro.MainActivity@6a5961c@111515164
10-20 00:39:50.498 15711 15711 I ImeTracker: com.a1taxi.driverpro:93b9358f: onRequestShow at ORIGIN_CLIENT reason SHOW_SOFT_INPUT fromUser false
10-20 00:39:50.498 15711 15711 I ImeTracker: com.a1taxi.driverpro:93b9358f: onFailed at PHASE_CLIENT_VIEW_SERVED
10-20 00:39:50.498 15711 15711 W InputMethodManager: Ignoring showSoftInput() as view=com.facebook.react.views.textinput.ReactEditText{f7dff59 VFED..CL. .F....ID 279,460-691,801 #403 aid=1073741991} is not served.
10-20 00:39:50.516 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:39:50.517 15711 15711 D BufferQueueConsumer: [](id:3d5f00000005,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:39:50.517 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#5](f:0,a:0) constructor()
10-20 00:39:50.518 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#5](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-20 00:39:50.545 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#5](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661912421125836(auto) mPendingTransactions.size=0 graphicBufferId=67478231187492 transform=0
10-20 00:39:50.548 15711 15711 E unknown:ReactModalHost: Updating existing dialog with context: com.a1taxi.driverpro.MainActivity@6a5961c@111515164
10-20 00:39:50.558 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:50.558 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:50.558 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:50.559 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:50.562 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:50.563 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:50.563 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:50.563 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:50.565 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:50.565 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:50.565 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:50.565 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:50.565 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:50.565 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:50.565 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:50.565 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:50.565 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:50.565Z'
10-20 00:39:50.565 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:50.577 15711 15711 I AssistStructure: Flattened final assist data: 3984 bytes, containing 2 windows, 29 views
10-20 00:39:50.578  1870  6015 D AutofillSession: createPendingIntent for request 2554
10-20 00:39:50.579 15711 15711 V ImeFocusController: onWindowFocus: com.facebook.react.views.textinput.ReactEditText{f7dff59 VFED..CL. .F...... 279,460-691,647 #403 aid=1073741991} softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-20 00:39:50.585  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:50.586  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:50.586  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:50.588  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=7002, inputTypeString=Number, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=6, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=3000, label=null, fieldId=1027, fieldName=null, extras=Bundle[mParcelledData.dataSize=404], hintText=non-empty, hintLocales=[]}}, false)
10-20 00:39:50.590  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:50.590  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=0, callback=gds@7738b1a, lastModifier=0, keyCodes=[57, 57], actions=[1, 0]}
10-20 00:39:50.590  5589  5589 I HardKeyTracker: HardKeyTracker.unregisterKeySequence():221 Unregister key sequence nfz{labelResId=0, callback=gds@18e9941, lastModifier=0, keyCodes=[58, 58], actions=[1, 0]}
10-20 00:39:50.605  7096  7120 I native  : I0000 00:00:1760900990.605199    7120 soda_impl.cc:1885] Adding hotword timeout event
10-20 00:39:50.625  7096  7139 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:39:50.626  7096  7139 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:39:50.634 21163 21163 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-20 00:39:50.634 21163 21163 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-20 00:39:50.635 21104 19821 W anqe    : Failed to retrieve prediction data. [CONTEXT service_id=177 ]
10-20 00:39:50.635 21104 19821 W anqe    : java.util.concurrent.ExecutionException: fnpd: No active MDD filegroup android-autofill-infinitedata found for the table autofill-domain-predictions-prod-spanner.
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.j(:com.google.android.gms@254031035@25.40.31 (260400-816341114):21)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkk.v(:com.google.android.gms@254031035@25.40.31 (260400-816341114):31)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.get(:com.google.android.gms@254031035@25.40.31 (260400-816341114):2)
10-20 00:39:50.635 21104 19821 W anqe    : 	at anqe.e(:com.google.android.gms@254031035@25.40.31 (260400-816341114):81)
10-20 00:39:50.635 21104 19821 W anqe    : 	at anqe.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):124)
10-20 00:39:50.635 21104 19821 W anqe    : 	at anno.call(:com.google.android.gms@254031035@25.40.31 (260400-816341114):5)
10-20 00:39:50.635 21104 19821 W anqe    : 	at java.util.concurrent.FutureTask.run(FutureTask.java:317)
10-20 00:39:50.635 21104 19821 W anqe    : 	at bckr.c(:com.google.android.gms@254031035@25.40.31 (260400-816341114):50)
10-20 00:39:50.635 21104 19821 W anqe    : 	at bckr.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):73)
10-20 00:39:50.635 21104 19821 W anqe    : 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1156)
10-20 00:39:50.635 21104 19821 W anqe    : 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:651)
10-20 00:39:50.635 21104 19821 W anqe    : 	at bcqi.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):8)
10-20 00:39:50.635 21104 19821 W anqe    : 	at java.lang.Thread.run(Thread.java:1119)
10-20 00:39:50.635 21104 19821 W anqe    : Caused by: fnpd: No active MDD filegroup android-autofill-infinitedata found for the table autofill-domain-predictions-prod-spanner.
10-20 00:39:50.635 21104 19821 W anqe    : 	at fnpr.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):13)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpjr.d(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpjt.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):130)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.r(:com.google.android.gms@254031035@25.40.31 (260400-816341114):17)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):77)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.t(:com.google.android.gms@254031035@25.40.31 (260400-816341114):26)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpjr.e(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpjt.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):138)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.r(:com.google.android.gms@254031035@25.40.31 (260400-816341114):17)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):77)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.t(:com.google.android.gms@254031035@25.40.31 (260400-816341114):26)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpmx.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):5)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpma.execute(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.f(:com.google.android.gms@254031035@25.40.31 (260400-816341114):1)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.m(:com.google.android.gms@254031035@25.40.31 (260400-816341114):99)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkb.t(:com.google.android.gms@254031035@25.40.31 (260400-816341114):26)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkm.e(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):44)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpod.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):64)
10-20 00:39:50.635 21104 19821 W anqe    : 	... 6 more
10-20 00:39:50.635 21104 19821 W anqe    : Caused by: flxc: Requested group not found.
10-20 00:39:50.635 21104 19821 W anqe    : 	at flxa.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):30)
10-20 00:39:50.635 21104 19821 W anqe    : 	at fmce.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):19)
10-20 00:39:50.635 21104 19821 W anqe    : 	at ghbr.a(:com.google.android.gms@254031035@25.40.31 (260400-816341114):13)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpkm.d(:com.google.android.gms@254031035@25.40.31 (260400-816341114):3)
10-20 00:39:50.635 21104 19821 W anqe    : 	at gpko.run(:com.google.android.gms@254031035@25.40.31 (260400-816341114):38)
10-20 00:39:50.635 21104 19821 W anqe    : 	... 7 more
10-20 00:39:50.636  7096  7139 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:39:50.641 21104 19999 I PasswordSaveInfoFactory: Form is missing passwords. [CONTEXT service_id=177 ]
10-20 00:39:50.649 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:50.656 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:50.658 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:50.661 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:50.662 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:50.665 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:50.666 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s%s)
10-20 00:39:50.669 21163 30822 I SyncManager: (REDACTED) Executing sync(type=%s) finished in %s
10-20 00:39:50.691 21163 23279 I AutofillPreferences: The stored preference is not current autofill service. Clean permission. [CONTEXT service_id=177 ]
10-20 00:39:50.691 21163 23279 I AutofillPreferences: cleanPermission [CONTEXT service_id=177 ]
10-20 00:39:50.694 21163 21163 D BoundBrokerSvc: onBind: Intent { act=com.google.android.gms.auth.api.phone.service.InternalService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-20 00:39:50.694 21163 21163 D BoundBrokerSvc: Loading bound service for intent: Intent { act=com.google.android.gms.auth.api.phone.service.InternalService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-20 00:39:50.732 21163 23279 I AutofillPreferences: The stored preference is not current autofill service. Clean permission. [CONTEXT service_id=177 ]
10-20 00:39:50.733 21163 23279 I AutofillPreferences: cleanPermission [CONTEXT service_id=177 ]
10-20 00:39:50.845 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:50.845 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:51.036  1870  1870 D AutofillSession: Service did not request to wait for delayed fill response.
10-20 00:39:51.069 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:51.082 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:51.082 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:51.083 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:51.085 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:51.085 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:51.085 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:51.085 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:51.085 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:51.085 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:51.085 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:51.085 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:51.085 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:51.085 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:51.085Z'
10-20 00:39:51.085 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:51.086 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:51.086 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:51.086 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:51.086 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:51.086 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:51.086 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:51.086 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:51.086 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:51.086 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:51.086 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:51.086 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:51.091 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:51.092 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:51.092 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:51.093 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:51.093 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:51.093 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:51.093 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:51.093 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:51.093 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:51.093 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:51.093 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:51.093 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:51.093Z'
10-20 00:39:51.093 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:51.680 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:39:51.687 21104 18140 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:39:51.698 21104 21143 I WifiScanner: onFullResults
10-20 00:39:51.698 21104 22617 I WifiScanner: onFullResults
10-20 00:39:51.698 21104 21143 I WifiScanner: onFullResults
10-20 00:39:51.704 21104 19764 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:39:51.727 15711 19686 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-20 00:39:51.727 15711 19686 I ReactNativeJS:   heading: 0,
10-20 00:39:51.727 15711 19686 I ReactNativeJS:   altitudeAccuracy: 1.1491962671279907,
10-20 00:39:51.727 15711 19686 I ReactNativeJS:   latitude: 12.7487578,
10-20 00:39:51.727 15711 19686 I ReactNativeJS:   speed: 0.08401737362146378,
10-20 00:39:51.727 15711 19686 I ReactNativeJS:   longitude: 77.8300183,
10-20 00:39:51.727 15711 19686 I ReactNativeJS:   accuracy: 3.799999952316284 }
10-20 00:39:51.728 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:51.728 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:51.729 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:51.730 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:51.731 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:51.731 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:51.733 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:39:51.737 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:39:51.739 15711 15711 D CompatChangeReporter: Compat change id reported: 253665015; UID 10408; state: ENABLED
10-20 00:39:51.739 15711 15711 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:39:51.742 21104 18140 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-20 00:39:51.749 15711 15711 I ImeTracker: com.a1taxi.driverpro:8c9a5ad5: onRequestShow at ORIGIN_CLIENT reason SHOW_SOFT_INPUT fromUser true
10-20 00:39:51.757  5589  5589 I StylusModule: StylusModule.onUpdateToolType():800 Update tool type = 1
10-20 00:39:51.759  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInputView():1439 onStartInputView(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=7002, inputTypeString=Number, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=6, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=3000, label=null, fieldId=1027, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=true, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}}, false)
10-20 00:39:51.760  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.getOemKeyboardHeightRatio():108 systemKeyboardHeightRatio:1.000000.
10-20 00:39:51.762 15711 15711 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:39:51.763  5589  5589 I AndroidIME: InputBundleManager.loadActiveInputBundleId():528 loadActiveInputBundleId: und-Latn-x-number, number
10-20 00:39:51.763  5589  5589 I KeyboardWrapper: KeyboardWrapper.activateKeyboard():581 activateKeyboard(): type=prime, status=INACTIVE, imeDef=mkk{stringId=number, language=und-Latn-x-number, languageTag=und-Latn-x-number, processedConditions={}, className=com.google.android.libraries.inputmethod.ime.DummyIme, label=2132019216, keyEventInterpreter=null, inlineComposing=true, autoCapital=false, announceAutoSelectedCandidate=false, statusIcon=0, indicatorIcon=0, indicatorLabel=null, displayAppCompletions=false, extraValues=mkd{}, processors=mmb@7d3d911, unacceptableMetaKeys=4098, languageSpecificSettings=0, asciiCapable=false, alwaysShowSuggestions=false, useAsciiPasswordKeyboard=false, keyboardGroupDef=mlk@821ce4, phenotypeFlagId=0, localizationLanguageTag=null, supportsInlineSuggestion=false}
10-20 00:39:51.763  5589  5589 I KeyboardManager: KeyboardManager.requestKeyboard():248 Creating keyboard prime, imeId=number, cacheKey=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup
10-20 00:39:51.764  5589  5589 I KeyboardWrapper: KeyboardWrapper.onKeyboardReady():224 onKeyboardReady(): type=prime(prime), kb=com.google.android.apps.inputmethod.latin.keyboard.LatinNumberKeyboard@24d99a
10-20 00:39:51.764  5589  5589 I KeyboardWrapper: KeyboardWrapper.doActivateKeyboard():611 doActivateKeyboard(): prime
10-20 00:39:51.764 15711 19686 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760900982099,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:     coords: 
10-20 00:39:51.764 15711 19686 I ReactNativeJS:      { altitude: 772.5999755859375,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        heading: 0,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        altitudeAccuracy: 1.2450028657913208,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        latitude: 12.7486217,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        speed: 0.00018281082157045603,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        longitude: 77.8299609,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        accuracy: 7.650000095367432 } },
10-20 00:39:51.764 15711 19686 I ReactNativeJS:   { timestamp: 1760900986668,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:     coords: 
10-20 00:39:51.764 15711 19686 I ReactNativeJS:      { altitude: 772.5999755859375,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        heading: 0,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        altitudeAccuracy: 1.2104990482330322,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        latitude: 12.7486562,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        speed: 0.004534258507192135,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        longitude: 77.8300119,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        accuracy: 7.632999897003174 } },
10-20 00:39:51.764 15711 19686 I ReactNativeJS:   { timestamp: 1760900991695,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:     coords: 
10-20 00:39:51.764 15711 19686 I ReactNativeJS:      { altitude: 772.5999755859375,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        heading: 0,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        altitudeAccuracy: 1.1491962671279907,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        latitude: 12.7487578,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        speed: 0.08401737362146378,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        longitude: 77.8300183,
10-20 00:39:51.764 15711 19686 I ReactNativeJS:        accuracy: 3.799999952316284 } } ]
10-20 00:39:51.768 15711 19686 I ReactNativeJS: 📤 Background location update via RPC...
10-20 00:39:51.769 15711 19686 E ReactNativeJS: ❌ Supabase credentials not configured
10-20 00:39:51.771 15711 19676 I TaskService: Finished task 'background-location-task' with eventId '216256b6-2395-4f38-978f-03a089dc175b'.
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: ?anon_0_@1:1972482
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:39:51.774 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:39:51.798  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.798  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-20 00:39:51.799  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:51.799  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.799  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.799  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:51.800  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.800  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.800  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:51.800  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.800  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.800  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:51.800  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.800  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.801  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.getKeyboardInitialStates():175 
10-20 00:39:51.801  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={enable_access_points_in_password_number=true, enable_correction_settings_updates=true, layout_9key_split=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, show_suggestion_strip=true, device=phone, expressions=normal}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinNumberKeyboard, resourceIds=[#0x7f17086b], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e0556, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=FLOATING_CANDIDATES, helpersCreated=[lxm@6c6f06c, lxm@f7d7635, null, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-20 00:39:51.801  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={enable_access_points_in_password_number=true, enable_correction_settings_updates=true, layout_9key_split=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, show_suggestion_strip=true, device=phone, expressions=normal}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinNumberKeyboard, resourceIds=[#0x7f17086b], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e0556, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=WIDGET, helpersCreated=[lxm@6c6f06c, lxm@f7d7635, null, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-20 00:39:51.801  5589  5589 I AndroidIME: InputBundleManager.startInput():358 startInput() with mlo[keyboardType=prime, payload=null]
10-20 00:39:51.801  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onActivate():120 
10-20 00:39:51.803  5589  5589 I LanguagePromoExtension: LanguagePromoExtension.checkDisplayPreconditions():174 Not show language promo: exceeds the max display times.
10-20 00:39:51.803  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension.onActivate():189 Not activated NewLanguagePromptExtension: not a normal text input box.
10-20 00:39:51.803  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.cancelShutdown():109 cancelShutdown()
10-20 00:39:51.803  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.syncLanguagePacks():121 syncLanguagePacks()
10-20 00:39:51.804  5589  5589 I VoiceInputManager: VoiceInputManager.onKeyboardActivated():1173 onKeyboardActivated() [UD]
10-20 00:39:51.804  5589  6558 I SpeechFactory: SpeechRecognitionFactory.maybeScheduleAutoPackDownloadForFallback():217 maybeScheduleAutoPackDownloadForFallback()
10-20 00:39:51.804  5589  5589 I PkModeUpdater: PkModeUpdater.onActivate():74 onActivate false true
10-20 00:39:51.804  5589  5589 I AccessoryInputModeManager: AccessoryInputModeManager.onModeStarted():318 Accessory input mode started: null
10-20 00:39:51.804  5589  6558 I FallbackOnDeviceRecognitionProvider: FallbackOnDeviceRecognitionProvider.maybeScheduleAutoPackDownload():205 maybeScheduleAutoPackDownload() for language tag en-US
10-20 00:39:51.804  5589  5589 W SupplementaryKeyboardsWrapper: SupplementaryKeyboardsWrapper.deactivateKeyboard():161 keyboard accessory_candidates_consumer is not activated before!
10-20 00:39:51.804  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:51.804  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.804  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.804  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:51.805  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.805  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.805  5589  5589 W ExtensionWrapper: ExtensionWrapper.setExtensionViewVisibility():811 interface mas is not activate
10-20 00:39:51.806  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:51.810  3458  3458 V InlinePresentationRendererServiceImpl: onRenderSuggestion: width=-2, height=-2
10-20 00:39:51.820  3458  3458 V InlineSuggestionRenderService: width=-2, height=-2, measuredSize=660x121
10-20 00:39:51.820  5589  5589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2287), rotation: ROTATION_0
10-20 00:39:51.821  5589  5589 D BufferQueueConsumer: [](id:15d5000009ba,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:51.821  5589  5589 D BLASTBufferQueue: [VRI[InputMethod]#2490](f:0,a:0) constructor()
10-20 00:39:51.821  5589  5589 D BLASTBufferQueue: [VRI[InputMethod]#2490](f:0,a:0) update width=1080 height=2287 format=-2 mTransformHint=0
10-20 00:39:51.822  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:51.822  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.822  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.822  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:51.822  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notifyWithWindow():166 
10-20 00:39:51.823  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notify():159 pfu[bounds=Rect(0, 105 - 1080, 2392), insets=Rect(0, 0 - 0, 116), densityDpi=440, smallestScreenWidthDp=393, displayWidth=1080, displayHeight=2392, xdpi=387.43, ydpi=387.43, isTrustable=true, displayId=0]; DisplayMetrics{density=2.75, width=1080, height=2392, scaledDensity=2.75, xdpi=387.43, ydpi=387.43}
10-20 00:39:51.832  1870  1976 D AutofillSession: onShown(): 2, 1
10-20 00:39:51.841  3458  3458 D ViewRootImpl: AppSizeAfterRelayout, size: Point(660, 121), rotation: ROTATION_0
10-20 00:39:51.841  3458  3458 D BufferQueueConsumer: [](id:d8200000277,api:0,p:-1,c:3458) connect: controlledByApp=false
10-20 00:39:51.842  3458  3458 D BLASTBufferQueue: [VRI[]#631](f:0,a:0) constructor()
10-20 00:39:51.842  3458  3458 D BLASTBufferQueue: [VRI[]#631](f:0,a:0) update width=660 height=121 format=-2 mTransformHint=0
10-20 00:39:51.842  5589  5657 D BLASTBufferQueue: [VRI[InputMethod]#2490](f:0,a:1) acquireNextBufferLocked size=1080x2287 mFrameNumber=1 applyTransaction=true mTimestamp=661913718405529(auto) mPendingTransactions.size=0 graphicBufferId=24004572225312 transform=0
10-20 00:39:51.844  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=HEADER keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{ed882ab V.E...... ........ 0,0-1080,121}
10-20 00:39:51.844  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.845  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=BODY keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{8f3d729 V.E...... ........ 0,0-1080,580}
10-20 00:39:51.845  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.845  5589  5589 I GlobeKeyExtension: GlobeKeyExtension$1.onKeyboardViewShown():72 maybeDisableLanguageSwitchKeyPref when the keyboard is shown
10-20 00:39:51.845  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.maybeDisableLanguageSwitchKeyPref():200 maybeDisableLanguageSwitchKeyPref hasGlobeKeyBeenDisabled: false, shouldDisableLanguageSwitchKey: false
10-20 00:39:51.845  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension$1.onKeyboardViewShown():88 Not show new language banner: not prime keyboard, or the extension not activated.
10-20 00:39:51.846 15711 15711 D InsetsController: show(ime(), fromIme=true)
10-20 00:39:51.846  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:51.846  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.846  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.846  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:51.850  3458 31463 D BLASTBufferQueue: [VRI[]#631](f:0,a:1) acquireNextBufferLocked size=660x121 mFrameNumber=1 applyTransaction=true mTimestamp=661913726440529(auto) mPendingTransactions.size=0 graphicBufferId=14851996913985 transform=0
10-20 00:39:51.850  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$2.display():195 Requesting to show proactive suggestions: AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:51.857  5589  5589 D BufferQueueConsumer: [](id:15d5000009bb,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:51.857  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2491](f:0,a:0) constructor()
10-20 00:39:51.858  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2491](f:0,a:0) update width=770 height=121 format=-2 mTransformHint=0
10-20 00:39:51.859  1870  3779 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112395, name: com.google.android.inputmethod.latin
10-20 00:39:51.864  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$Holder.setSuggestionsAndShow():898 succeed to show proactive suggestions AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:51.866  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:51.866  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.866  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:51.866  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:51.870  5589  5589 D BufferQueueConsumer: [](id:15d5000009bc,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:51.870  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2492](f:0,a:0) constructor()
10-20 00:39:51.870  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2492](f:0,a:0) update width=660 height=121 format=-2 mTransformHint=0
10-20 00:39:51.872  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 660, arg2: 121, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.875  5589  5657 D BLASTBufferQueue: [SurfaceView[InputMethod]#2492](f:0,a:1) acquireNextBufferLocked size=660x121 mFrameNumber=1 applyTransaction=true mTimestamp=661913751111298(auto) mPendingTransactions.size=0 graphicBufferId=24004572225314 transform=0
10-20 00:39:51.880  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 330, arg2: 13, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.880  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112395, name: com.google.android.inputmethod.latin
10-20 00:39:51.889  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 402, arg2: 37, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.892  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 460, arg2: 55, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.909  1870  2711 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 514, arg2: 73, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.926  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 560, arg2: 89, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.940  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 596, arg2: 101, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.949 15711 19686 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-20 00:39:51.949 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:51.949 15711 19686 I ReactNativeJS: 'Location:', { latitude: 12.7487578,
10-20 00:39:51.949 15711 19686 I ReactNativeJS:   longitude: 77.8300183,
10-20 00:39:51.949 15711 19686 I ReactNativeJS:   accuracy: 3.799999952316284 }
10-20 00:39:51.950 15711 19686 I ReactNativeJS: 📤 Updating location via RPC...
10-20 00:39:51.958  1870  2711 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 624, arg2: 109, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.977  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 646, arg2: 117, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:51.994  1870  2711 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 656, arg2: 121, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:52.010  1870  2711 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 660, arg2: 121, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:52.062 15711 15711 I ImeTracker: com.a1taxi.driverpro:8c9a5ad5: onShown
10-20 00:39:52.177 15711 19686 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-20 00:39:52.541 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:52.542 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:52.542 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:52.542 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:52.556 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:52.557 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:52.557 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:52.560 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:52.563 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:52.563 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:52.564 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:52.564 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:52.564 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:52.564 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:52.564 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:52.564 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:52.564 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:52.564Z'
10-20 00:39:52.564 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:52.738  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:52.740  1870  2711 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 113385, name: com.google.android.inputmethod.latin
10-20 00:39:52.741  5589  5657 E BufferQueueProducer: [SurfaceView[InputMethod]#2492(BLAST Consumer)2492](id:15d5000009bc,api:0,p:-1,c:5589) disconnect: not connected (req=1)
10-20 00:39:52.741  5589  5657 W libEGL  : EGLNativeWindowType 0xb4000077e0115c40 disconnect failed
10-20 00:39:52.741  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2492](f:0,a:1) destructor()
10-20 00:39:52.741  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2492(BLAST Consumer)2492](id:15d5000009bc,api:0,p:-1,c:5589) disconnect
10-20 00:39:52.743  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:52.752  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:52.757  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:52.757  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:52.757  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:52.758  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:52.799 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:52.799 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:52.813  1870  2711 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 112395, name: com.google.android.inputmethod.latin
10-20 00:39:52.813  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2491](f:0,a:0) destructor()
10-20 00:39:52.814  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2491(BLAST Consumer)2491](id:15d5000009bb,api:0,p:-1,c:5589) disconnect
10-20 00:39:52.826  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:52.827  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:52.828  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:52.828  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:52.909  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:52.909  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:52.909  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:52.909  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:52.964  3458  3458 V InlineSuggestionRenderService: Releasing inline suggestion view host
10-20 00:39:52.970  3458  3458 D BLASTBufferQueue: [VRI[]#631](f:0,a:4) destructor()
10-20 00:39:52.970  3458  3458 D BufferQueueConsumer: [VRI[]#631(BLAST Consumer)631](id:d8200000277,api:0,p:-1,c:3458) disconnect
10-20 00:39:52.973  3458  3458 V InlineSuggestionRenderService: Removed the inline suggestion from the cache, current size=0
10-20 00:39:52.983  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:53.013 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:53.017 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:53.017 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:53.017 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:53.019 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:53.019 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:53.019 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:53.019Z'
10-20 00:39:53.019 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:53.019 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:53.019 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:53.019 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:53.019 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:53.020 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:53.020 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:53.020 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:53.020 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:53.023 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:53.023 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:53.023 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:53.025 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:53.025 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:53.025 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:53.025 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:53.025 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:53.025 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:53.025 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:53.025 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:53.025 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:53.025Z'
10-20 00:39:53.025 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:53.177  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:53.738  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:54.398  3458  3458 V InlinePresentationRendererServiceImpl: onRenderSuggestion: width=-2, height=-2
10-20 00:39:54.400  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:54.401  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=7002, inputTypeString=Number, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=6, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=3000, label=null, fieldId=1027, fieldName=null, extras=Bundle[mParcelledData.dataSize=404], hintText=non-empty, hintLocales=[]}}, true)
10-20 00:39:54.401  5589  5589 W SessionManager: SessionManager.beginSession():53 Try to begin an already begun session [INPUT_SESSION], end it first
10-20 00:39:54.401  5589  5589 W SessionManager: SessionManager.endSession():96 Child session [INPUT_VIEW_SESSION] is not ended while ending session [{INPUT_SESSION=1760900990588, INPUT_VIEW_SESSION=1760900991759, IME_SESSION=1760900991763}], ending it now.
10-20 00:39:54.401  5589  5589 W SessionManager: SessionManager.endSession():96 Child session [IME_SESSION] is not ended while ending session [{INPUT_SESSION=1760900990588, INPUT_VIEW_SESSION=1760900991759, IME_SESSION=1760900991763}], ending it now.
10-20 00:39:54.404  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:54.405  3458  3458 V InlineSuggestionRenderService: width=-2, height=-2, measuredSize=660x121
10-20 00:39:54.406  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInputView():1439 onStartInputView(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=7002, inputTypeString=Number, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=6, privateImeOptions=null, actionName=DONE, actionLabel=null, initialSelStart=0, initialSelEnd=0, initialCapsMode=3000, label=null, fieldId=1027, fieldName=null, extras=Bundle[{android.support.text.emoji.emojiCompat_metadataVersion=11, androidx.core.view.inputmethod.EditorInfoCompat.STYLUS_HANDWRITING_ENABLED=true, android.support.text.emoji.emojiCompat_replaceAll=false}], hintText=non-empty, hintLocales=[]}}, true)
10-20 00:39:54.407  5589  5589 W SessionManager: SessionManager.endSession():88 Try to end a not begun session [IME_SESSION].
10-20 00:39:54.408  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.getOemKeyboardHeightRatio():108 systemKeyboardHeightRatio:1.000000.
10-20 00:39:54.413  5589  5589 I AndroidIME: InputBundleManager.loadActiveInputBundleId():528 loadActiveInputBundleId: und-Latn-x-number, number
10-20 00:39:54.413  5589  5589 I KeyboardWrapper: KeyboardWrapper.activateKeyboard():581 activateKeyboard(): type=prime, status=INACTIVE, imeDef=mkk{stringId=number, language=und-Latn-x-number, languageTag=und-Latn-x-number, processedConditions={}, className=com.google.android.libraries.inputmethod.ime.DummyIme, label=2132019216, keyEventInterpreter=null, inlineComposing=true, autoCapital=false, announceAutoSelectedCandidate=false, statusIcon=0, indicatorIcon=0, indicatorLabel=null, displayAppCompletions=false, extraValues=mkd{}, processors=mmb@7d3d911, unacceptableMetaKeys=4098, languageSpecificSettings=0, asciiCapable=false, alwaysShowSuggestions=false, useAsciiPasswordKeyboard=false, keyboardGroupDef=mlk@821ce4, phenotypeFlagId=0, localizationLanguageTag=null, supportsInlineSuggestion=false}
10-20 00:39:54.413  5589  5589 I KeyboardManager: KeyboardManager.requestKeyboard():248 Creating keyboard prime, imeId=number, cacheKey=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup
10-20 00:39:54.414  5589  5589 I KeyboardWrapper: KeyboardWrapper.onKeyboardReady():224 onKeyboardReady(): type=prime(prime), kb=com.google.android.apps.inputmethod.latin.keyboard.LatinNumberKeyboard@24d99a
10-20 00:39:54.414  5589  5589 I KeyboardWrapper: KeyboardWrapper.doActivateKeyboard():611 doActivateKeyboard(): prime
10-20 00:39:54.421  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.421  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-20 00:39:54.422  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.getKeyboardInitialStates():175 
10-20 00:39:54.422  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={enable_access_points_in_password_number=true, enable_correction_settings_updates=true, layout_9key_split=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, show_suggestion_strip=true, device=phone, expressions=normal}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinNumberKeyboard, resourceIds=[#0x7f17086b], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e0556, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=FLOATING_CANDIDATES, helpersCreated=[lxm@6c6f06c, lxm@f7d7635, null, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-20 00:39:54.422  5589  5589 W Keyboard: Keyboard.getKeyboardViewHelper():609 null helper is returned: keyboardDef=mle{processedConditions={enable_access_points_in_password_number=true, enable_correction_settings_updates=true, layout_9key_split=false, language=en-US, deprecate_long_press_space_for_ime_picker=false, show_suggestion_strip=true, device=phone, expressions=normal}, globalConditions={global_theme_key=theme,!gsf,!pgsans,!pgsf,!use_system_font,BORDER,FLAVOR_DPI=XXHDPI,GOOGLE_ICONS,KEYBOARD_WIDTH_CATEGORY=NORMAL,KEY_BORDER_SHAPE=1,LIGHT_THEME=false,PHYSICAL_DIAGONAL=5.748144,POPUP,SCREEN_SHORTEST_WIDTH=393,SCREEN_SHORTEST_WIDTH_NO_SCALE=393,XXHDPI,bottom4dp,enable_emoji_kitchen_browse_color_v2=true,enable_google_fonts_icons=true,enable_popup_on_keypress=true,keyboard_redesign_google_sans=true,non_linear_scale,noshadow,overlay_builtin_dynamic_color_dark_base.binarypb:gm3-dark-ff131313-ffffffff-4d9204e36e3ccb6a165e3e3dbe763ce0,roundedchip,silkpopup, global_locale=en_US, global_density_dpi=440, global_orientation=1}, className=.latin.keyboard.LatinNumberKeyboard, resourceIds=[#0x7f17086b], initialStates=0, keyboardViewDefs=[mls{direction=LOCALE, id=#0x7f0b0224, isScalable=false, layoutId=#0x7f0e0500, type=HEADER, touchable=true, defaultShow=true}, mls{direction=null, id=#0x7f0b0224, isScalable=true, layoutId=#0x7f0e0556, type=BODY, touchable=true, defaultShow=true}], persistentStates=0, persistentStatesPrefKey=null, popupBubbleLayoutId=#0x7f0e05f1, recentKeyLayoutId=0, recentKeyPopupLayoutId=0, recentKeyType=null, rememberRecentKey=NONE, sessionStates=0}, type=WIDGET, helpersCreated=[lxm@6c6f06c, lxm@f7d7635, null, null], context.getResources().getConfiguration(): {1.0 405mcc869mnc [en_US] ldltr sw393dp w393dp h790dp 440dpi nrml long port night finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 1080, 2392) mAppBounds=Rect(0, 103 - 1080, 2276) mMaxBounds=Rect(0, 0 - 1080, 2392) mDisplayRotation=ROTATION_0 mWindowingMode=fullscreen mActivityType=undefined mAlwaysOnTop=undefined mRotation=ROTATION_0 isEmbedding:false} s.5420 fontWeightAdjustment=0 themeId=2 themeParameter=0 nightModeLevel = -1 typefaceChanged=0.0 ?spacesystem eaMode=1}
10-20 00:39:54.423  5589  5589 I AndroidIME: InputBundleManager.startInput():358 startInput() with mlo[keyboardType=prime, payload=null]
10-20 00:39:54.423  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onDeactivate():144 
10-20 00:39:54.423  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:54.424  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdown():131 shutdown()
10-20 00:39:54.425  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onActivate():120 
10-20 00:39:54.428  5589  5589 I LanguagePromoExtension: LanguagePromoExtension.checkDisplayPreconditions():174 Not show language promo: exceeds the max display times.
10-20 00:39:54.428  3458  3458 D ViewRootImpl: AppSizeAfterRelayout, size: Point(660, 121), rotation: ROTATION_0
10-20 00:39:54.428  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension.onActivate():189 Not activated NewLanguagePromptExtension: not a normal text input box.
10-20 00:39:54.428  3458  3458 D BufferQueueConsumer: [](id:d8200000278,api:0,p:-1,c:3458) connect: controlledByApp=false
10-20 00:39:54.428  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.cancelShutdown():109 cancelShutdown()
10-20 00:39:54.428  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.syncLanguagePacks():121 syncLanguagePacks()
10-20 00:39:54.428  5589  5589 I VoiceInputManager: VoiceInputManager.onKeyboardActivated():1173 onKeyboardActivated() [UD]
10-20 00:39:54.428  5589  5589 I PkModeUpdater: PkModeUpdater.onActivate():74 onActivate false true
10-20 00:39:54.429  5589  6558 I SpeechFactory: SpeechRecognitionFactory.maybeScheduleAutoPackDownloadForFallback():217 maybeScheduleAutoPackDownloadForFallback()
10-20 00:39:54.428  3458  3458 D BLASTBufferQueue: [VRI[]#632](f:0,a:0) constructor()
10-20 00:39:54.429  5589  5589 I AccessoryInputModeManager: AccessoryInputModeManager.onModeStarted():318 Accessory input mode started: null
10-20 00:39:54.429  3458  3458 D BLASTBufferQueue: [VRI[]#632](f:0,a:0) update width=660 height=121 format=-2 mTransformHint=0
10-20 00:39:54.429  5589  6558 I FallbackOnDeviceRecognitionProvider: FallbackOnDeviceRecognitionProvider.maybeScheduleAutoPackDownload():205 maybeScheduleAutoPackDownload() for language tag en-US
10-20 00:39:54.429  5589  5589 W SupplementaryKeyboardsWrapper: SupplementaryKeyboardsWrapper.deactivateKeyboard():161 keyboard accessory_candidates_consumer is not activated before!
10-20 00:39:54.431  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:54.431  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.432  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.432  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:54.432  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.432  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.432  5589  5589 W ExtensionWrapper: ExtensionWrapper.setExtensionViewVisibility():811 interface mas is not activate
10-20 00:39:54.433  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:54.436  3458 31463 D BLASTBufferQueue: [VRI[]#632](f:0,a:1) acquireNextBufferLocked size=660x121 mFrameNumber=1 applyTransaction=true mTimestamp=661916311994990(auto) mPendingTransactions.size=0 graphicBufferId=14851996913992 transform=0
10-20 00:39:54.436  3458  4816 D InlineSuggestionRenderService: getSurfacePackage
10-20 00:39:54.439  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:54.439  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.439  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.440  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:54.440  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notifyWithWindow():166 
10-20 00:39:54.440  5589  5589 I WindowMetricsNotification: WindowMetricsNotification.notify():159 pfu[bounds=Rect(0, 105 - 1080, 2392), insets=Rect(0, 0 - 0, 116), densityDpi=440, smallestScreenWidthDp=393, displayWidth=1080, displayHeight=2392, xdpi=387.43, ydpi=387.43, isTrustable=true, displayId=0]; DisplayMetrics{density=2.75, width=1080, height=2392, scaledDensity=2.75, xdpi=387.43, ydpi=387.43}
10-20 00:39:54.444  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=HEADER keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{ed882ab V.E...... ........ 0,0-1080,121}
10-20 00:39:54.444  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.444  5589  5589 I GoogleInputMethodService: GoogleInputMethodService$1.onKeyboardViewShown():325 onKeyboardViewShown: keyboardType=prime, keyboardViewType=BODY keyboardView=com.google.android.libraries.inputmethod.widgets.SoftKeyboardView{8f3d729 V.E...... ........ 0,0-1080,580}
10-20 00:39:54.445  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.445  5589  5589 I GlobeKeyExtension: GlobeKeyExtension$1.onKeyboardViewShown():72 maybeDisableLanguageSwitchKeyPref when the keyboard is shown
10-20 00:39:54.445  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.maybeDisableLanguageSwitchKeyPref():200 maybeDisableLanguageSwitchKeyPref hasGlobeKeyBeenDisabled: false, shouldDisableLanguageSwitchKey: false
10-20 00:39:54.445  5589  5589 I NewLanguagePromptExtension: NewLanguagePromptExtension$1.onKeyboardViewShown():88 Not show new language banner: not prime keyboard, or the extension not activated.
10-20 00:39:54.449  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$2.display():195 Requesting to show proactive suggestions: AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:54.453  5589  5589 D BufferQueueConsumer: [](id:15d5000009bd,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:54.453  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2493](f:0,a:0) constructor()
10-20 00:39:54.453  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2493](f:0,a:0) update width=770 height=121 format=-2 mTransformHint=0
10-20 00:39:54.454  1870  6192 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112395, name: com.google.android.inputmethod.latin
10-20 00:39:54.455  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$Holder.setSuggestionsAndShow():898 succeed to show proactive suggestions AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:54.458  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$2.display():195 Requesting to show proactive suggestions: AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:54.458  5589  5602 I BpBinder: onLastStrongRef automatically unlinking death recipients: 
10-20 00:39:54.458  5589  5589 I ProactiveSuggestionsHolderManager: ProactiveSuggestionsHolderManager$Holder.setSuggestionsAndShow():898 succeed to show proactive suggestions AUTO_FILL PREEMPTIVE_WITH_SUPPRESSION
10-20 00:39:54.459  5589  5602 I BpBinder: onLastStrongRef automatically unlinking death recipients: 
10-20 00:39:54.459  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:54.460  5589  5602 I BpBinder: onLastStrongRef automatically unlinking death recipients: 
10-20 00:39:54.460  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:54.460  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.460  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:54.460  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:54.462  5589  5589 D BufferQueueConsumer: [](id:15d5000009be,api:0,p:-1,c:5589) connect: controlledByApp=false
10-20 00:39:54.463  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2494](f:0,a:0) constructor()
10-20 00:39:54.463  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2494](f:0,a:0) update width=660 height=121 format=-2 mTransformHint=0
10-20 00:39:54.464  1870  2278 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 660, arg2: 121, arg3: 5589, arg4: 113391, name: com.google.android.inputmethod.latin
10-20 00:39:54.466  5589  5657 D BLASTBufferQueue: [SurfaceView[InputMethod]#2494](f:0,a:1) acquireNextBufferLocked size=660x121 mFrameNumber=1 applyTransaction=true mTimestamp=661916342903990(auto) mPendingTransactions.size=0 graphicBufferId=24004572225320 transform=0
10-20 00:39:54.467  1870  2278 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 660, arg2: 121, arg3: 5589, arg4: 113391, name: com.google.android.inputmethod.latin
10-20 00:39:54.468  1870  2278 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 770, arg2: 121, arg3: 5589, arg4: 112395, name: com.google.android.inputmethod.latin
10-20 00:39:54.479 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:54.481 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:54.481 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:54.481 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:54.482 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:54.482 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:54.482 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:54.542 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:54.543 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:54.543 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:54.544 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:54.550 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:54.550 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:54.550 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:54.552 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:54.555 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:54.555 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:54.556 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:54.556 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:54.556 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:54.556 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:54.556 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:54.556 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:54.556 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:54.556Z'
10-20 00:39:54.556 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:54.773 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:54.773 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:54.937 15711 19686 I ReactNativeJS: === MANUAL CHANGE ===
10-20 00:39:54.937 15711 19686 I ReactNativeJS: '🔄 Updating driver status from:', 'online', 'to:', 'busy'
10-20 00:39:54.937 15711 19686 I ReactNativeJS: '📊 Change type:', 'MANUAL CHANGE'
10-20 00:39:54.938 15711 19686 I ReactNativeJS: 📊 Database will be updated with new status
10-20 00:39:54.938 15711 19686 I ReactNativeJS: '📊 Timestamp:', '2025-10-19T19:09:54.938Z'
10-20 00:39:54.938 15711 19686 I ReactNativeJS: 📊 This change is PERMANENT and will persist across app sessions
10-20 00:39:54.938 15711 19686 I ReactNativeJS: '📊 Status will remain', 'busy', 'until explicitly changed again by user or ride lifecycle'
10-20 00:39:54.939 15711 19686 I ReactNativeJS: 📊 WRITING TO DATABASE - This is the authoritative source of truth
10-20 00:39:54.997 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:55.013 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:55.013 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:55.013 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:55.016 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:55.016 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:55.016 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:55.016 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:55.016 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:55.016 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:55.016 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:55.016 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:55.017 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:55.017 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:55.017Z'
10-20 00:39:55.017 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:55.017 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:55.017 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:55.017 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:55.017 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:55.017 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:55.017 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:55.017 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:55.017 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:55.017 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:55.017 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:39:55.017 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:55.023 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:55.023 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:55.023 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:55.025 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:55.025 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:55.025 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:55.025 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:55.025 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:39:55.025 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:55.025 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:55.025 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:55.025 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:55.025Z'
10-20 00:39:55.025 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:55.188 15711 19686 I ReactNativeJS: ✅ Database updated successfully
10-20 00:39:55.189 15711 19686 I ReactNativeJS: '✅ Updated driver data:', null
10-20 00:39:55.189 15711 19686 I ReactNativeJS: '✅ Status is now PERMANENTLY set to:', 'busy'
10-20 00:39:55.189 15711 19686 I ReactNativeJS: ✅ No automatic processes will change this status
10-20 00:39:55.189 15711 19686 I ReactNativeJS: '✅ Driver status changed from', 'online', 'to', 'busy'
10-20 00:39:55.189 15711 19686 I ReactNativeJS: ✅ This change will persist across app sessions
10-20 00:39:55.189 15711 19686 I ReactNativeJS: '✅ Status will remain', 'busy', 'indefinitely until next manual change'
10-20 00:39:55.189 15711 19686 I ReactNativeJS: '✅ Status will remain', 'busy', 'until manually changed again'
10-20 00:39:55.204 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:55.205 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:55.205 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:55.235 15711 19686 I ReactNativeJS: ✅ Local state updated - UI will reflect new status
10-20 00:39:55.236 15711 19686 I ReactNativeJS: 🛑 Cleaning up auto-refresh interval
10-20 00:39:55.236 15711 19686 I ReactNativeJS: ✅ Notification sound service cleaned up
10-20 00:39:55.236 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:55.236 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:55.236Z'
10-20 00:39:55.236 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:55.236 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:55.236 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:55.236 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:55.236 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:55.237 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:55.237 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:55.237 15711 19686 I ReactNativeJS:   driverStatus: 'busy',
10-20 00:39:55.237 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:55.237 15711 19686 I ReactNativeJS: === LOADING SCHEDULED BOOKINGS ===
10-20 00:39:55.237 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:55.237 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:39:55.237 15711 19686 I ReactNativeJS: 'In auth group:', false
10-20 00:39:55.237 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:39:55.237 15711 19686 I ReactNativeJS: 'Has driver:', true
10-20 00:39:55.237 15711 19686 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'scheduled' ]
10-20 00:39:55.237 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:39:55.238 15711 19686 I ReactNativeJS: 'Is authenticated:', { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   license_number: 'TN78BB1468',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   license_expiry: '2026-01-31',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   status: 'busy',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   rating: 5,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   total_rides: 0,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   is_verified: true,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   vehicle_id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   vendor_id: null,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   phone_number: '9898989898',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   name: 'Moorthy',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   created_at: '2025-10-07T12:35:55.781671+00:00',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   updated_at: '2025-10-19T19:09:05.493798+00:00',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   vehicles: 
10-20 00:39:55.238 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      capacity: 4 },
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   user: 
10-20 00:39:55.238 15711 19686 I ReactNativeJS:    { id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      email: 'moorthy@gmail.com',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      role: 'driver',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      full_name: 'Moorthy',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      phone_number: '9898989898',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      avatar_url: null,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      is_active: true,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      created_at: '2025-10-07T12:35:55.310024+00:00',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      updated_at: '2025-10-07T12:35:55.310024+00:00' },
10-20 00:39:55.238 15711 19686 I ReactNativeJS:   vehicle: 
10-20 00:39:55.238 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:39:55.238 15711 19686 I ReactNativeJS:      capacity: 4 } }
10-20 00:39:55.238 15711 19686 I ReactNativeJS: No navigation needed - staying in current route
10-20 00:39:55.238 15711 19686 I ReactNativeJS: === RIDE CONTEXT INITIALIZED ===
10-20 00:39:55.238 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:55.238 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:55.238 15711 19686 I ReactNativeJS: 'Driver Status:', 'busy'
10-20 00:39:55.238 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:55.238 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:55.238 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:55.238 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:55.239 15711 19686 I ReactNativeJS: === SETTING UP REAL-TIME SUBSCRIPTIONS ===
10-20 00:39:55.239 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:55.239 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:55.239 15711 19686 I ReactNativeJS: ✅ Real-time subscriptions established
10-20 00:39:55.239 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:39:55.239 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:39:55.239 15711 19686 I ReactNativeJS: 'Driver Status:', 'busy'
10-20 00:39:55.239 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:55.239 15711 19686 I ReactNativeJS: 'Driver Verified:', true
10-20 00:39:55.239 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:39:55.239 15711 19686 I ReactNativeJS: '  - driver exists:', true
10-20 00:39:55.239 15711 19686 I ReactNativeJS: '  - status is online/busy:', true
10-20 00:39:55.239 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:39:55.239 15711 19686 I ReactNativeJS: '  - NOT isTracking:', false
10-20 00:39:55.239 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', false
10-20 00:39:55.239 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', true
10-20 00:39:55.239 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:39:55.241 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:55.241 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:55.241 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:55.242 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:55.242 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:55.242 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:55.242 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:55.242 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:55.242 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:55.242 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:55.242 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:55.242 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:55.242Z'
10-20 00:39:55.242 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:55.268 15711 19686 I ReactNativeJS: ✅ Stored session updated with new status
10-20 00:39:55.268 15711 19686 I ReactNativeJS: ✅ Status will persist even after app restart
10-20 00:39:55.268 15711 19686 I ReactNativeJS: ✅ Driver status set to busy
10-20 00:39:55.268 15711 19686 I ReactNativeJS: === LOADING SCHEDULED BOOKINGS ===
10-20 00:39:55.268 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:55.477 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:55.477 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:55.536 15711 19686 I ReactNativeJS: 'Current booking:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:55.556 15711 19686 I ReactNativeJS: 'Current booking:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:55.692 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:55.697 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:55.697 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:55.697 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:55.698 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:55.698 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:55.698 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:55.698 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:55.698 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:55.699Z'
10-20 00:39:55.699 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:55.699 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:55.699 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:55.699 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:55.699 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:55.699 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:55.699 15711 19686 I ReactNativeJS:   driverStatus: 'busy',
10-20 00:39:55.699 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:55.703 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:55.703 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:55.703 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:55.704 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:55.704 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:55.705 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:55.705 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:55.705 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:55.705 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:55.705 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:55.705 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:55.705 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:55.705Z'
10-20 00:39:55.705 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:55.835 15711 19686 I ReactNativeJS: 'Available bookings:', 0
10-20 00:39:55.841 15711 19686 I ReactNativeJS: 🚀 Starting GPS tracking for scheduled trip...
10-20 00:39:55.841 15711 19686 I ReactNativeJS: === STARTING TRIP GPS TRACKING ===
10-20 00:39:55.841 15711 19686 I ReactNativeJS: 'Trip ID:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:55.841 15711 19686 I ReactNativeJS: 'Trip Type:', 'scheduled'
10-20 00:39:55.841 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:55.857 15711 19686 I ReactNativeJS: 'Available bookings:', 0
10-20 00:39:56.047 21104 22225 I IPCThreadState: oneway function results for code 1 on binder at 0xb4000077d006d030 will be dropped but finished with status UNKNOWN_TRANSACTION and reply parcel size 80
10-20 00:39:56.512 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:56.518 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:56.518 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:56.520 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:56.521 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:56.524 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:56.703 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:39:56.713 21104 18140 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:39:56.765 15711 19686 E ReactNativeJS: '❌ Error storing location point:', { code: '42501',
10-20 00:39:56.765 15711 19686 E ReactNativeJS:   details: null,
10-20 00:39:56.765 15711 19686 E ReactNativeJS:   hint: null,
10-20 00:39:56.765 15711 19686 E ReactNativeJS:   message: 'new row violates row-level security policy for table "trip_location_history"' }
10-20 00:39:56.765 15711 19686 I ReactNativeJS: ✅ Trip GPS tracking started (5-second intervals)
10-20 00:39:56.766 15711 19686 I ReactNativeJS: ✅ GPS tracking started for scheduled trip
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: console.error: ❌ Error storing location point: {"code":"42501","details":null,"hint":null,"message":"new row violates row-level security policy for table \"trip_location_history\""}, js engine: hermes, stack:
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: ?anon_0_@1:2031703
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:39:56.794 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:39:56.811 15711 15711 I ImeTracker: com.a1taxi.driverpro:2f1d079a: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT fromUser false
10-20 00:39:56.816  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInputView():1571 onFinishInputView(false)
10-20 00:39:56.816  5589  5589 I GlobeKeyExtension: GlobeKeyExtension.onDeactivate():144 
10-20 00:39:56.816  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:56.819 15711 15711 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@b1070c9
10-20 00:39:56.820  1870  2894 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 113391, name: com.google.android.inputmethod.latin
10-20 00:39:56.820  5589  5657 E BufferQueueProducer: [SurfaceView[InputMethod]#2494(BLAST Consumer)2494](id:15d5000009be,api:0,p:-1,c:5589) disconnect: not connected (req=1)
10-20 00:39:56.820  5589  5657 W libEGL  : EGLNativeWindowType 0xb4000077e0115c40 disconnect failed
10-20 00:39:56.821  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2494](f:0,a:1) destructor()
10-20 00:39:56.821  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2494(BLAST Consumer)2494](id:15d5000009be,api:0,p:-1,c:5589) disconnect
10-20 00:39:56.823  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:56.823  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdown():131 shutdown()
10-20 00:39:56.824  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id spell_check_add_to_dictionary not found in tooltipManager.
10-20 00:39:56.826 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#5](f:0,a:4) destructor()
10-20 00:39:56.826 15711 15711 D BufferQueueConsumer: [VRI[MainActivity]#5(BLAST Consumer)5](id:3d5f00000005,api:0,p:-1,c:15711) disconnect
10-20 00:39:56.826  5589  5589 D BLASTBufferQueue: [SurfaceView[InputMethod]#2493](f:0,a:0) destructor()
10-20 00:39:56.826  1870  2896 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -1, arg2: -1, arg3: 5589, arg4: 112395, name: com.google.android.inputmethod.latin
10-20 00:39:56.826  5589  5589 D BufferQueueConsumer: [SurfaceView[InputMethod]#2493(BLAST Consumer)2493](id:15d5000009bd,api:0,p:-1,c:5589) disconnect
10-20 00:39:56.827  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-20 00:39:56.851 15711 15711 D InsetsController: hide(ime(), fromIme=true)
10-20 00:39:56.851 15711 15711 I ImeTracker: com.a1taxi.driverpro:2f1d079a: onCancelled at PHASE_CLIENT_APPLY_ANIMATION
10-20 00:39:56.852 15711 15711 W RemoteInputConnectionImpl: requestCursorUpdates on inactive InputConnection
10-20 00:39:56.853  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:56.854  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:56.854  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:56.854  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:56.899 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R....... 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-20 00:39:56.903  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:39:56.904  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:39:56.904  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id SUGGESTION_VIEW_EDU_MINI_DIALOG not found in tooltipManager.
10-20 00:39:56.905  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:39:56.905  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:39:56.905  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=0, callback=gds@5fda713, lastModifier=0, keyCodes=[57, 57], actions=[1, 0]}
10-20 00:39:56.906  5589  5589 I HardKeyTracker: HardKeyTracker.registerKeySequence():170 Register key sequence nfz{labelResId=0, callback=gds@e543c4e, lastModifier=0, keyCodes=[58, 58], actions=[1, 0]}
10-20 00:39:56.909  5589  5589 I KeyboardModeUtils: KeyboardModeUtils.getKeyboardBottomOffset():435 inch: 0.000000 ydpi: 387.429993 adjustKeyboardBottomByDisplaySize: false currentDensityDpi: 440 defaultDensityDpi: 440 keyboardBottomToScreenPx: 0 keyboardBottomToNavBarPx: -116 navBarHeight: 116
10-20 00:39:56.910  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:56.910  5589  5589 I KeyboardHeightUtil: KeyboardHeightUtil.calculateMaxKeyboardBodyHeight():50 leave 267 height for app when ime window height:2171, header height:121 and isFullscreenMode:false, so the max keyboard body height is:1783
10-20 00:39:56.910  5589  5589 I AndroidIME: KeyboardViewManager.updateKeyboardBodyViewHolderPaddingBottom():472 Set finalPaddingBottom = 5 while holderPaddingBottom = 5; navigationHeight = 116
10-20 00:39:57.063  3458  3458 V InlineSuggestionRenderService: Releasing inline suggestion view host
10-20 00:39:57.072  3458  3458 D BLASTBufferQueue: [VRI[]#632](f:0,a:4) destructor()
10-20 00:39:57.073  3458  3458 D BufferQueueConsumer: [VRI[]#632(BLAST Consumer)632](id:d8200000278,api:0,p:-1,c:3458) disconnect
10-20 00:39:57.082  3458  3458 V InlineSuggestionRenderService: Removed the inline suggestion from the cache, current size=0
10-20 00:39:57.245 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:57.245 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:57.246 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:57.246 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:57.250 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:57.250 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:57.250 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:57.251 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:57.252 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:57.252 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:57.252 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:57.252 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:57.252 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:57.252 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:57.252 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:57.252 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:57.252 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:57.252Z'
10-20 00:39:57.252 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:57.442  5589  5589 W TooltipLifecycleManager: TooltipLifecycleManager.dismissTooltips():153 Tooltip with id undo_access_point_promotion_banner not found in tooltipManager.
10-20 00:39:57.469  5589  5589 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2287), rotation: ROTATION_0
10-20 00:39:57.471  5589  5589 D BLASTBufferQueue: [VRI[InputMethod]#2490](f:0,a:4) destructor()
10-20 00:39:57.471  5589  5589 D BufferQueueConsumer: [VRI[InputMethod]#2490(BLAST Consumer)2490](id:15d5000009ba,api:0,p:-1,c:5589) disconnect
10-20 00:39:57.485 21104 22225 I WifiScanner: onFullResults
10-20 00:39:57.485 21104 22224 I WifiScanner: onFullResults
10-20 00:39:57.486 21104 22617 I WifiScanner: onFullResults
10-20 00:39:57.488 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:57.490 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:39:57.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:57.492 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:57.492 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.492 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.499 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:57.499 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:57.508 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:57.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:57.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:39:57.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:39:57.511 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:39:57.709 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:57.719 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:57.720 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:57.720 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:57.722 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:57.722 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:57.722 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:57.722 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:57.722 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:57.722 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:57.722 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:57.722 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:57.722 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:57.722 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:57.722Z'
10-20 00:39:57.722 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:57.722 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:57.723 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:57.723 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:57.723 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:57.723 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:57.723 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:57.723 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:57.723 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:57.723 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:57.723 15711 19686 I ReactNativeJS:   driverStatus: 'busy',
10-20 00:39:57.723 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:57.728 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:57.728 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:57.728 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:57.730 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:57.730 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:57.730 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:57.730 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:57.730 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:57.730 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:57.730 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:57.730 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:57.730 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:57.730Z'
10-20 00:39:57.730 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:58.227 15711 19686 I ReactNativeJS: 🚨 COMPLETING SCHEDULED TRIP
10-20 00:39:58.227 15711 19686 I ReactNativeJS: 'Booking ID:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:58.227 15711 19686 I ReactNativeJS: 'Booking type:', 'airport'
10-20 00:39:58.227 15711 19686 I ReactNativeJS: 📍 Stopping GPS tracking and calculating actual distance...
10-20 00:39:58.227 15711 19686 I ReactNativeJS: === STOPPING TRIP GPS TRACKING ===
10-20 00:39:58.227 15711 19686 I ReactNativeJS: 'Trip ID:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:58.227 15711 19686 I ReactNativeJS: ✅ Trip GPS tracking stopped. Total points recorded: 1
10-20 00:39:58.227 15711 19686 I ReactNativeJS: === CALCULATING TRIP DISTANCE FROM GPS (Google Maps API) ===
10-20 00:39:58.227 15711 19686 I ReactNativeJS: 'Trip ID:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:58.463 15711 19686 W ReactNativeJS: ⚠️ Not enough GPS points for distance calculation
10-20 00:39:58.463 15711 19686 I ReactNativeJS: '📍 GPS distance result (raw):', { distanceKm: 0, pointsUsed: 0 }
10-20 00:39:58.463 15711 19686 W ReactNativeJS: ⚠️ GPS tracking insufficient (distance < 1km or < 3 points), using Google Maps API...
10-20 00:39:58.463 15711 19686 W ReactNativeJS: '⚠️ GPS distance calculation failed, using Google Maps API fallback:', [Error: Insufficient GPS data]
10-20 00:39:58.468 15711 19686 I ReactNativeJS: 📡 Calling Google Maps Directions API...
10-20 00:39:58.468 15711 19686 I ReactNativeJS: '📍 Origin:', { latitude: 12.7486475, longitude: 77.8300356 }
10-20 00:39:58.468 15711 19686 I ReactNativeJS: '📍 Destination:', { latitude: 13.1986, longitude: 77.7066 }
10-20 00:39:58.481 21104 19720 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:39:58.481 21104 19720 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:39:58.704  7096  7120 I native  : I0000 00:00:1760900998.704778    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760900998590380
10-20 00:39:58.740  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:39:58.970 15711 19686 I ReactNativeJS: 📊 Found 3 route(s):
10-20 00:39:58.970 15711 19686 I ReactNativeJS:   Route 1: 87.86 km, 133 min
10-20 00:39:58.970 15711 19686 I ReactNativeJS:   Route 2: 77.22 km, 135 min
10-20 00:39:58.970 15711 19686 I ReactNativeJS:   Route 3: 71.16 km, 137 min
10-20 00:39:58.971 15711 19686 I ReactNativeJS: '✅ Google Maps Directions result (using Route 1):', { distance: '87.86 km',
10-20 00:39:58.971 15711 19686 I ReactNativeJS:   duration: '133 min',
10-20 00:39:58.971 15711 19686 I ReactNativeJS:   distanceMeters: 87859,
10-20 00:39:58.971 15711 19686 I ReactNativeJS:   durationSeconds: 7958,
10-20 00:39:58.971 15711 19686 I ReactNativeJS:   startAddress: 'PRXJ+F32, Brindavan Nagar, Plot 87, NGGO\'s Colony, Anand Nagar, Hosur, Tamil Nadu 635109, India',
10-20 00:39:58.971 15711 19686 I ReactNativeJS:   endAddress: 'Kempegowda International Airport devanahalli Bengaluru International Airport Bangalore terminal 1 BL staff room, Devanahalli, Gangamuthanahalli, Karnataka 560300, India' }
10-20 00:39:58.972 15711 19686 I ReactNativeJS: '✅ Using Google Maps distance (rental):', { distanceKm: '87.86', note: 'Distance not doubled (rental)' }
10-20 00:39:58.972 15711 19686 I ReactNativeJS: === CALCULATING TRIP DURATION FROM GPS ===
10-20 00:39:58.972 15711 19686 I ReactNativeJS: 'Trip ID:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:59.205 15711 19686 W ReactNativeJS: ⚠️ Not enough GPS points to calculate duration
10-20 00:39:59.205 15711 19686 I ReactNativeJS: '⚠️ Using time-based duration (fallback):', 1
10-20 00:39:59.206 15711 19686 I ReactNativeJS: '📊 Final trip metrics:', { actualDistanceKm: '87.86',
10-20 00:39:59.206 15711 19686 I ReactNativeJS:   actualDurationMinutes: 1,
10-20 00:39:59.206 15711 19686 I ReactNativeJS:   gpsPointsUsed: 0,
10-20 00:39:59.206 15711 19686 I ReactNativeJS:   bookingType: 'airport',
10-20 00:39:59.206 15711 19686 I ReactNativeJS:   pickupLat: 12.7486475,
10-20 00:39:59.206 15711 19686 I ReactNativeJS:   pickupLng: 77.8300356,
10-20 00:39:59.206 15711 19686 I ReactNativeJS:   dropLat: 13.1986,
10-20 00:39:59.206 15711 19686 I ReactNativeJS:   dropLng: 77.7066 }
10-20 00:39:59.227 15711 19686 I ReactNativeJS: 🔄 Auto-refreshing rides (2-second interval)...
10-20 00:39:59.227 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:39:59.227 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:39:59.228 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:39:59.238 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:59.239 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:59.239 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:59.241 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:39:59.244 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:59.244 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:59.245 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:59.245 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:59.245 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:59.245 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:59.245 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:59.245 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:59.245 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:59.245Z'
10-20 00:39:59.245 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:59.535 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:39:59.535 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:39:59.644 15711 19686 I ReactNativeJS: '✅ Fare calculated:', 1913.6
10-20 00:39:59.645 15711 19686 I ReactNativeJS: '📊 Complete fare breakdown:', '{\n  "booking_type": "airport",\n  "vehicle_type": "sedan",\n  "base_fare": 1800,\n  "distance_fare": 0,\n  "time_fare": 0,\n  "surge_charges": 0,\n  "deadhead_charges": 0,\n  "platform_fee": 20,\n  "gst_on_charges": 90,\n  "gst_on_platform_fee": 3.5999999999999996,\n  "extra_km_charges": 0,\n  "driver_allowance": 0,\n  "total_fare": 1913.6,\n  "details": {\n    "actual_distance_km": 51.78933765786751,\n    "actual_duration_minutes": 0,\n    "per_km_rate": 0,\n    "direction": "Hosur to Airport",\n    "package_fare": 1800,\n    "gst_on_package": 90,\n    "platform_fee": 20,\n    "gst_on_platform_fee": 3.5999999999999996\n  }\n}'
10-20 00:39:59.752 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:39:59.760 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:59.761 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:59.761 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:59.763 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:39:59.763 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:59.763 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:59.763 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:59.764Z'
10-20 00:39:59.764 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:59.764 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:39:59.764 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:39:59.764 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:39:59.764 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:39:59.764 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:39:59.764 15711 19686 I ReactNativeJS:   driverStatus: 'busy',
10-20 00:39:59.764 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:39:59.769 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:39:59.770 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:39:59.770 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:39:59.771 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:39:59.771 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:39:59.771 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:39:59.771 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:39:59.771 15711 19686 I ReactNativeJS: '  - Driver status:', 'busy'
10-20 00:39:59.771 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:39:59.771 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:39:59.771 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:39:59.772 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:09:59.771Z'
10-20 00:39:59.772 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:39:59.868 15711 19686 I ReactNativeJS: 💾 Storing pre-calculated fare breakdown...
10-20 00:39:59.868 15711 19686 I ReactNativeJS: === STORING PRE-CALCULATED FARE BREAKDOWN ===
10-20 00:39:59.868 15711 19686 I ReactNativeJS: 'Booking ID:', '585509f3-8cdd-421a-9ebe-6a7df1a20c07'
10-20 00:39:59.868 15711 19686 I ReactNativeJS: 'Fare breakdown received:', '{\n  "booking_type": "airport",\n  "vehicle_type": "sedan",\n  "base_fare": 1800,\n  "distance_fare": 0,\n  "time_fare": 0,\n  "surge_charges": 0,\n  "deadhead_charges": 0,\n  "platform_fee": 20,\n  "gst_on_charges": 90,\n  "gst_on_platform_fee": 3.5999999999999996,\n  "extra_km_charges": 0,\n  "driver_allowance": 0,\n  "total_fare": 1913.6,\n  "details": {\n    "actual_distance_km": 51.78933765786751,\n    "actual_duration_minutes": 0,\n    "per_km_rate": 0,\n    "direction": "Hosur to Airport",\n    "package_fare": 1800,\n    "gst_on_package": 90,\n    "platform_fee": 20,\n    "gst_on_platform_fee": 3.5999999999999996\n  }\n}'
10-20 00:40:00.074 15711 19686 E ReactNativeJS: 'Error fetching booking:', { code: 'PGRST116',
10-20 00:40:00.074 15711 19686 E ReactNativeJS:   details: 'The result contains 0 rows',
10-20 00:40:00.074 15711 19686 E ReactNativeJS:   hint: null,
10-20 00:40:00.074 15711 19686 E ReactNativeJS:   message: 'Cannot coerce the result to a single JSON object' }
10-20 00:40:00.076 15711 19686 E ReactNativeJS: '❌ Failed to store trip completion:', 'Booking not found'
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: console.error: Error fetching booking: {"code":"PGRST116","details":"The result contains 0 rows","hint":null,"message":"Cannot coerce the result to a single JSON object"}, js engine: hermes, stack:
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: ?anon_0_@1:2017437
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:00.085 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: console.error: ❌ Failed to store trip completion: Booking not found, js engine: hermes, stack:
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: ?anon_0_@1:2129556
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:00.088 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:00.311 15711 19686 I ReactNativeJS: ✅ Scheduled booking completed successfully
10-20 00:40:00.312 15711 19686 I ReactNativeJS: ✅ Setting driver status to online...
10-20 00:40:00.312 15711 19686 I ReactNativeJS: === MANUAL CHANGE ===
10-20 00:40:00.312 15711 19686 I ReactNativeJS: '🔄 Updating driver status from:', 'busy', 'to:', 'online'
10-20 00:40:00.312 15711 19686 I ReactNativeJS: '📊 Change type:', 'MANUAL CHANGE'
10-20 00:40:00.312 15711 19686 I ReactNativeJS: 📊 Database will be updated with new status
10-20 00:40:00.312 15711 19686 I ReactNativeJS: '📊 Timestamp:', '2025-10-19T19:10:00.312Z'
10-20 00:40:00.312 15711 19686 I ReactNativeJS: 📊 This change is PERMANENT and will persist across app sessions
10-20 00:40:00.313 15711 19686 I ReactNativeJS: '📊 Status will remain', 'online', 'until explicitly changed again by user or ride lifecycle'
10-20 00:40:00.313 15711 19686 I ReactNativeJS: 📊 WRITING TO DATABASE - This is the authoritative source of truth
10-20 00:40:00.313 15711 19686 I ReactNativeJS: 🟢 Driver going ONLINE - ensuring availability for customers
10-20 00:40:00.536 15711 19686 I ReactNativeJS: ✅ Database updated successfully
10-20 00:40:00.537 15711 19686 I ReactNativeJS: '✅ Updated driver data:', null
10-20 00:40:00.537 15711 19686 I ReactNativeJS: '✅ Status is now PERMANENTLY set to:', 'online'
10-20 00:40:00.537 15711 19686 I ReactNativeJS: ✅ No automatic processes will change this status
10-20 00:40:00.537 15711 19686 I ReactNativeJS: ✅ Driver is now VERIFIED and AVAILABLE for customer bookings
10-20 00:40:00.537 15711 19686 I ReactNativeJS: '✅ Driver status changed from', 'busy', 'to', 'online'
10-20 00:40:00.537 15711 19686 I ReactNativeJS: ✅ This change will persist across app sessions
10-20 00:40:00.537 15711 19686 I ReactNativeJS: '✅ Status will remain', 'online', 'indefinitely until next manual change'
10-20 00:40:00.537 15711 19686 I ReactNativeJS: '✅ Status will remain', 'online', 'until manually changed again'
10-20 00:40:00.558 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:40:00.559 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:40:00.559 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:40:00.585 15711 19686 I ReactNativeJS: ✅ Local state updated - UI will reflect new status
10-20 00:40:00.585 15711 19686 I ReactNativeJS: 🔄 Driver went online - forcing notification refresh
10-20 00:40:00.585 15711 19686 I ReactNativeJS: 🛑 Cleaning up auto-refresh interval
10-20 00:40:00.585 15711 19686 I ReactNativeJS: ✅ Notification sound service cleaned up
10-20 00:40:00.586 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:40:00.586 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:10:00.586Z'
10-20 00:40:00.586 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:40:00.586 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:40:00.586 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:40:00.586 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:40:00.586 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:40:00.586 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:40:00.586 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:40:00.586 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:40:00.586 15711 19686 I ReactNativeJS: === LOADING SCHEDULED BOOKINGS ===
10-20 00:40:00.586 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:40:00.587 15711 19686 I ReactNativeJS: === NAVIGATION CHECK ===
10-20 00:40:00.587 15711 19686 I ReactNativeJS: 'In auth group:', false
10-20 00:40:00.587 15711 19686 I ReactNativeJS: 'Has session:', false
10-20 00:40:00.587 15711 19686 I ReactNativeJS: 'Has driver:', true
10-20 00:40:00.587 15711 19686 I ReactNativeJS: 'Current segments:', [ '(tabs)', 'scheduled' ]
10-20 00:40:00.587 15711 19686 I ReactNativeJS: 'Loading state:', false
10-20 00:40:00.587 15711 19686 I ReactNativeJS: 'Is authenticated:', { id: '43d81d7d-e647-46cf-8599-11f63996b03e',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   user_id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   license_number: 'TN78BB1468',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   license_expiry: '2026-01-31',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   status: 'online',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   rating: 5,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   total_rides: 0,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   is_verified: true,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   vehicle_id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   vendor_id: null,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   phone_number: '9898989898',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   name: 'Moorthy',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   created_at: '2025-10-07T12:35:55.781671+00:00',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   updated_at: '2025-10-19T19:09:05.493798+00:00',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   vehicles: 
10-20 00:40:00.587 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      capacity: 4 },
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   user: 
10-20 00:40:00.587 15711 19686 I ReactNativeJS:    { id: '6c03a657-c3e4-466e-b49c-324c2d051ce9',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      email: 'moorthy@gmail.com',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      role: 'driver',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      full_name: 'Moorthy',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      phone_number: '9898989898',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      avatar_url: null,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      is_active: true,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      created_at: '2025-10-07T12:35:55.310024+00:00',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      updated_at: '2025-10-07T12:35:55.310024+00:00' },
10-20 00:40:00.587 15711 19686 I ReactNativeJS:   vehicle: 
10-20 00:40:00.587 15711 19686 I ReactNativeJS:    { id: '5be07165-04d0-4d23-affa-95b66e11804a',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      registration_number: 'KA01NC2100',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      make: 'Maruthi',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      model: 'Swift',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      year: 2021,
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      color: 'White',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      vehicle_type: 'sedan_ac',
10-20 00:40:00.587 15711 19686 I ReactNativeJS:      capacity: 4 } }
10-20 00:40:00.587 15711 19686 I ReactNativeJS: No navigation needed - staying in current route
10-20 00:40:00.587 15711 19686 I ReactNativeJS: === RIDE CONTEXT INITIALIZED ===
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: === LOADING RIDES ===
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 🔍 Loading current ride...
10-20 00:40:00.588 15711 19686 I ReactNativeJS: === SETTING UP REAL-TIME SUBSCRIPTIONS ===
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: ✅ Real-time subscriptions established
10-20 00:40:00.588 15711 19686 I ReactNativeJS: === DRIVER STATUS CHANGE DETECTED ===
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver:', 'Moorthy'
10-20 00:40:00.588 15711 19686 I ReactNativeJS: 'Driver Status:', 'online'
10-20 00:40:00.589 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:40:00.589 15711 19686 I ReactNativeJS: 'Driver Verified:', true
10-20 00:40:00.589 15711 19686 I ReactNativeJS: 🔍 Checking conditions:
10-20 00:40:00.589 15711 19686 I ReactNativeJS: '  - driver exists:', true
10-20 00:40:00.589 15711 19686 I ReactNativeJS: '  - status is online/busy:', true
10-20 00:40:00.589 15711 19686 I ReactNativeJS: '  - locationPermission:', true
10-20 00:40:00.589 15711 19686 I ReactNativeJS: '  - NOT isTracking:', false
10-20 00:40:00.589 15711 19686 I ReactNativeJS: '  - NOT isBackgroundTrackingActive:', false
10-20 00:40:00.589 15711 19686 I ReactNativeJS: '  - NOT isHandlingActiveDriver:', true
10-20 00:40:00.589 15711 19686 I ReactNativeJS: ❌ Conditions not met for starting location tracking
10-20 00:40:00.591 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:40:00.592 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:40:00.592 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:40:00.592 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:40:00.592 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:40:00.593 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:40:00.593 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:40:00.593 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:40:00.593 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:40:00.593 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:40:00.593 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:40:00.593 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:10:00.593Z'
10-20 00:40:00.593 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:40:00.606 15711 19686 I ReactNativeJS: ✅ Stored session updated with new status
10-20 00:40:00.606 15711 19686 I ReactNativeJS: ✅ Status will persist even after app restart
10-20 00:40:00.607 15711 19686 I ReactNativeJS: ✅ Driver status updated to online
10-20 00:40:00.813 15711 19686 I ReactNativeJS: '✅ Current ride loaded:', 'none'
10-20 00:40:00.813 15711 19686 I ReactNativeJS: 🔍 Loading pending ride notifications...
10-20 00:40:00.850 15711 19686 I ReactNativeJS: 'Current booking:', undefined
10-20 00:40:00.869 15711 19686 I ReactNativeJS: '✅ Verified driver status in DB:', undefined
10-20 00:40:01.024 15711 19686 I ReactNativeJS: 📋 Found 0 unread ride notifications
10-20 00:40:01.036 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:40:01.036 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:40:01.036 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:40:01.038 15711 19686 I ReactNativeJS: ✅ No pending ride notifications
10-20 00:40:01.039 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:40:01.039 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Loading:', true
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:10:01.039Z'
10-20 00:40:01.039 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:40:01.039 15711 19686 I ReactNativeJS: === RIDE REQUEST MODAL LOGIC DEBUG ===
10-20 00:40:01.039 15711 19686 I ReactNativeJS: 🔄 Checking if should show ride request modal:
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Pending rides:', 0
10-20 00:40:01.039 15711 19686 I ReactNativeJS: '  - Modal already showing:', false
10-20 00:40:01.040 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:40:01.040 15711 19686 I ReactNativeJS: '  - Has current ride:', false
10-20 00:40:01.040 15711 19686 I ReactNativeJS: ❌ NOT SHOWING MODAL - reasons:
10-20 00:40:01.040 15711 19686 I ReactNativeJS: '🚗 Analysis:', { pendingRidesCount: 0,
10-20 00:40:01.040 15711 19686 I ReactNativeJS:   modalAlreadyShowing: false,
10-20 00:40:01.040 15711 19686 I ReactNativeJS:   driverStatus: 'online',
10-20 00:40:01.040 15711 19686 I ReactNativeJS:   hasCurrentRide: false }
10-20 00:40:01.045 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:40:01.046 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 0,\n  "duration": 0,\n  "fareBreakdown": {\n    "booking_type": "regular",\n    "vehicle_type": "sedan",\n    "base_fare": 0,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 0,\n    "gst_on_charges": 0,\n    "gst_on_platform_fee": 0,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 0,\n    "details": {\n      "actual_distance_km": 0,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0\n    }\n  },\n  "pickup_address": "",\n  "destination_address": "",\n  "booking_type": "regular",\n  "rental_hours": null\n}'
10-20 00:40:01.046 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:40:01.047 15711 19686 I ReactNativeJS: === RIDES SCREEN STATE DEBUG ===
10-20 00:40:01.047 15711 19686 I ReactNativeJS: 🔄 Component state updated:
10-20 00:40:01.047 15711 19686 I ReactNativeJS: '  - Current ride:', 'null'
10-20 00:40:01.047 15711 19686 I ReactNativeJS: '  - Pending rides count:', 0
10-20 00:40:01.047 15711 19686 I ReactNativeJS: '  - Driver status:', 'online'
10-20 00:40:01.047 15711 19686 I ReactNativeJS: '  - Loading:', false
10-20 00:40:01.047 15711 19686 I ReactNativeJS: '  - Error:', null
10-20 00:40:01.047 15711 19686 I ReactNativeJS: '  - Show modal:', false
10-20 00:40:01.048 15711 19686 I ReactNativeJS: '  - Timestamp:', '2025-10-19T19:10:01.047Z'
10-20 00:40:01.048 15711 19686 I ReactNativeJS: ❌ NO CURRENT RIDE - showing empty state
10-20 00:40:01.164 15711 19686 I ReactNativeJS: 'Available bookings:', 0
10-20 00:40:01.378 15711 19686 I ReactNativeJS: ✅ Current booking cleared
10-20 00:40:01.378 15711 19686 I ReactNativeJS: 🔄 Reloading available scheduled bookings...
10-20 00:40:01.378 15711 19686 I ReactNativeJS: === LOADING SCHEDULED BOOKINGS ===
10-20 00:40:01.378 15711 19686 I ReactNativeJS: 'Driver ID:', '43d81d7d-e647-46cf-8599-11f63996b03e'
10-20 00:40:01.595 15711 19686 I ReactNativeJS: 'Current booking:', undefined
10-20 00:40:01.832 15711 19686 I ReactNativeJS: 'Available bookings:', 0
10-20 00:40:01.833 15711 19686 I ReactNativeJS: ✅ Scheduled bookings reloaded
10-20 00:40:01.836 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', false
10-20 00:40:01.837 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 87.859,\n  "duration": 1,\n  "fareBreakdown": {\n    "booking_type": "airport",\n    "vehicle_type": "sedan",\n    "base_fare": 1800,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 20,\n    "gst_on_charges": 90,\n    "gst_on_platform_fee": 3.5999999999999996,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 1913.6,\n    "details": {\n      "actual_distance_km": 51.78933765786751,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0,\n      "direction": "Hosur to Airport",\n      "package_fare": 1800,\n      "gst_on_package": 90,\n      "platform_fee": 20,\n      "gst_on_platform_fee": 3.5999999999999996\n    }\n  },\n  "pickup_address": "Anand Nagar, Hosur, Tamil Nadu",\n  "destination_address": "Kempegowda International Airport, Bangalore",\n  "booking_type": "airport",\n  "rental_hours": null\n}'
10-20 00:40:01.837 15711 19686 I ReactNativeJS: ❌ Not visible - returning null
10-20 00:40:01.840 15711 19686 I ReactNativeJS: '🎯🎯🎯 TripCompletionModal RENDER - visible:', true
10-20 00:40:01.841 15711 19686 I ReactNativeJS: '🎯🎯🎯 tripData:', '{\n  "distance": 87.859,\n  "duration": 1,\n  "fareBreakdown": {\n    "booking_type": "airport",\n    "vehicle_type": "sedan",\n    "base_fare": 1800,\n    "distance_fare": 0,\n    "time_fare": 0,\n    "surge_charges": 0,\n    "deadhead_charges": 0,\n    "platform_fee": 20,\n    "gst_on_charges": 90,\n    "gst_on_platform_fee": 3.5999999999999996,\n    "extra_km_charges": 0,\n    "driver_allowance": 0,\n    "total_fare": 1913.6,\n    "details": {\n      "actual_distance_km": 51.78933765786751,\n      "actual_duration_minutes": 0,\n      "per_km_rate": 0,\n      "direction": "Hosur to Airport",\n      "package_fare": 1800,\n      "gst_on_package": 90,\n      "platform_fee": 20,\n      "gst_on_platform_fee": 3.5999999999999996\n    }\n  },\n  "pickup_address": "Anand Nagar, Hosur, Tamil Nadu",\n  "destination_address": "Kempegowda International Airport, Bangalore",\n  "booking_type": "airport",\n  "rental_hours": null\n}'
10-20 00:40:01.841 15711 19686 I ReactNativeJS: ✅✅✅ RENDERING TRIP COMPLETION SCREEN - THIS SHOULD DEFINITELY SHOW!
10-20 00:40:01.850 15711 19686 E ReactNativeJS: Error: Text strings must be rendered within a <Text> component.
10-20 00:40:01.850 15711 19686 E ReactNativeJS: 
10-20 00:40:01.850 15711 19686 E ReactNativeJS: This error is located at:
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTScrollView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ScrollView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ScrollView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in TripCompletionModal
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RNCSafeAreaView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ScheduledScreen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspense
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Route
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in StaticContainer
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in EnsureSingleNavigator
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in SceneView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Background
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Screen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RNSScreen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspender
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspense
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Freeze
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in DelayedFreeze
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in InnerScreen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Screen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in MaybeScreen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RNSScreenContainer
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ScreenContainer
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in MaybeScreenContainer
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in SafeAreaProviderCompat
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in BottomTabView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in PreventRemoveProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in NavigationContent
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in BottomTabNavigator
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in TabLayout
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspense
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Route
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in StaticContainer
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in EnsureSingleNavigator
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in SceneView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in DebugContainer
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in MaybeNestedStack
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RNSScreen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspender
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspense
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Freeze
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in DelayedFreeze
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in InnerScreen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Screen
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in SceneView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspender
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspense
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Freeze
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in DelayedFreeze
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RNSScreenStack
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ScreenStack
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in NativeStackViewInner
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in SafeAreaProviderCompat
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in NativeStackView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in PreventRemoveProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in NavigationContent
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in NativeStackNavigator
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RootLayoutNav
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RideProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in LocationProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in AuthProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RootLayout
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Suspense
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Route
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RNCSafeAreaProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in SafeAreaProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in wrapper
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in EnsureSingleNavigator
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in BaseNavigationContainer
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ThemeProvider
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in NavigationContainerInner
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ContextNavigator
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in ExpoRoot
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in App
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in RCTView
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in Unknown
10-20 00:40:01.850 15711 19686 E ReactNativeJS:     in AppContainer, js engine: hermes
10-20 00:40:01.850 15711 19686 I ReactNativeJS: 🛑 Cleaning up auto-refresh interval
10-20 00:40:01.851 15711 19686 I ReactNativeJS: ✅ Notification sound service cleaned up
10-20 00:40:01.852 15711 19686 E ReactNativeJS: '❌ Exception completing scheduled trip:', { [Error: Text strings must be rendered within a <Text> component.]
10-20 00:40:01.852 15711 19686 E ReactNativeJS:   componentStack: '\n    in RCTView\n    in Unknown\n    in RCTView\n    in Unknown\n    in RCTScrollView\n    in ScrollView\n    in ScrollView\n    in RCTView\n    in Unknown\n    in RCTView\n    in Unknown\n    in TripCompletionModal\n    in RNCSafeAreaView\n    in Unknown\n    in ScheduledScreen\n    in Unknown\n    in Suspense\n    in Route\n    in Unknown\n    in StaticContainer\n    in EnsureSingleNavigator\n    in SceneView\n    in RCTView\n    in Unknown\n    in RCTView\n    in Unknown\n    in Background\n    in Screen\n    in RNSScreen\n    in Unknown\n    in Suspender\n    in Suspense\n    in Freeze\n    in DelayedFreeze\n    in InnerScreen\n    in Screen\n    in MaybeScreen\n    in RNSScreenContainer\n    in ScreenContainer\n    in MaybeScreenContainer\n    in RCTView\n    in Unknown\n    in SafeAreaProviderCompat\n    in BottomTabView\n    in PreventRemoveProvider\n    in NavigationContent\n    in Unknown\n    in BottomTabNavigator\n    in Unknown\n    in TabLayout\n    in Unknown\n    in Suspense\n    in Route\n    in Unknown\n    in StaticContainer\n    in EnsureSingleNavigator\n    in SceneView\n    in RCTView\n    in Unknown\n    in DebugContainer\n    in MaybeNestedStack\n    in RCTView\n    in Unknown\n    in RNSScreen\n    in Unknown\n    in Suspender\n    in Suspense\n    in Freeze\n    in DelayedFreeze\n    in InnerScreen\n    in Screen\n    in SceneView\n    in Suspender\n    in Suspense\n    in Freeze\n    in DelayedFreeze\n    in RNSScreenStack\n    in ScreenStack\n    in NativeStackViewInner\n    in RCTView\n    in Unknown\n    in SafeAreaProviderCompat\n    in NativeStackView\n    in PreventRemoveProvider\n    in NavigationContent\n    in Unknown\n    in NativeStackNavigator\n    in Unknown\n    in RootLayoutNav\n    in RideProvider\n    in LocationProvider\n    in AuthProvider\n    in RootLayout\n    in Unknown\n    in Suspense\n    in Route\n    in Unknown\n    in RNCSafeAreaProvider\n    in SafeAreaProvider\n    in wrapper\n    in EnsureSingleNavigator\n    in BaseNavigationContainer\n    in ThemeProvider\n    in NavigationContainerInner\n    in ContextNavigator\n    in ExpoRoot\n    in App\n    in RCTView\n    in Unknown\n    in AppContainer',
10-20 00:40:01.852 15711 19686 E ReactNativeJS:   isComponentError: true }
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: Error: Text strings must be rendered within a <Text> component.
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: 
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: This error is located at:
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTScrollView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ScrollView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ScrollView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in TripCompletionModal
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RNCSafeAreaView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ScheduledScreen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspense
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Route
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in StaticContainer
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in EnsureSingleNavigator
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in SceneView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Background
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Screen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RNSScreen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspender
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspense
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Freeze
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in DelayedFreeze
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in InnerScreen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Screen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in MaybeScreen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RNSScreenContainer
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ScreenContainer
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in MaybeScreenContainer
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in SafeAreaProviderCompat
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in BottomTabView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in PreventRemoveProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in NavigationContent
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in BottomTabNavigator
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in TabLayout
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspense
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Route
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in StaticContainer
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in EnsureSingleNavigator
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in SceneView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in DebugContainer
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in MaybeNestedStack
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RNSScreen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspender
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspense
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Freeze
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in DelayedFreeze
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in InnerScreen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Screen
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in SceneView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspender
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspense
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Freeze
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in DelayedFreeze
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RNSScreenStack
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ScreenStack
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in NativeStackViewInner
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in SafeAreaProviderCompat
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in NativeStackView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in PreventRemoveProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in NavigationContent
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in NativeStackNavigator
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RootLayoutNav
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RideProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in LocationProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in AuthProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RootLayout
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Suspense
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Route
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RNCSafeAreaProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in SafeAreaProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in wrapper
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in EnsureSingleNavigator
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in BaseNavigationContainer
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ThemeProvider
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in NavigationContainerInner
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ContextNavigator
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in ExpoRoot
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in App
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in RCTView
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in Unknown
10-20 00:40:01.867 15711 19687 E unknown:ReactNative:     in AppContainer, js engine: hermes, stack:
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: completeWork@1:390813
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: completeUnitOfWork@1:408026
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: performUnitOfWork@1:407294
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: workLoopSync@1:406389
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: renderRootSync@1:406220
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: flushSyncWorkAcrossRoots_impl@1:362692
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: scheduleUpdateOnFiber@1:403726
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: dispatchSetState@1:377405
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: ?anon_0_@1:2130132
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:01.867 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: console.error: ❌ Exception completing scheduled trip: Error: Text strings must be rendered within a <Text> component., js engine: hermes, stack:
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: ?anon_0_@1:2130244
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137300
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:01.869 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:01.870 15711 15711 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-20 00:40:01.870 15711 15711 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-20 00:40:01.939 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1202, 713), rotation: ROTATION_0
10-20 00:40:01.939 15711 15711 D BufferQueueConsumer: [](id:3d5f00000006,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:40:01.939 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#6](f:0,a:0) constructor()
10-20 00:40:01.939 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#6](f:0,a:0) update width=1202 height=713 format=-3 mTransformHint=0
10-20 00:40:01.948 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#6](f:0,a:1) acquireNextBufferLocked size=1202x713 mFrameNumber=1 applyTransaction=true mTimestamp=661923824318375(auto) mPendingTransactions.size=0 graphicBufferId=67478231187498 transform=0
10-20 00:40:02.481 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:02.484 21104 18140 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:02.487 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:02.488 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:02.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.491 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:02.492 15711 15711 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:40:02.492 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:02.493 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.494 21104 22617 I WifiScanner: onFullResults
10-20 00:40:02.494 21104 22224 I WifiScanner: onFullResults
10-20 00:40:02.494 21104 21143 I WifiScanner: onFullResults
10-20 00:40:02.497 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:02.499 15711 15711 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:02.500 15711 19686 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760901002434,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:     coords: 
10-20 00:40:02.500 15711 19686 I ReactNativeJS:      { altitude: 772.5999755859375,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:        heading: 0,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:        altitudeAccuracy: 1.3351715803146362,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:        latitude: 12.7487331,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:        speed: 0.000035472516174195334,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:        longitude: 77.8300232,
10-20 00:40:02.500 15711 19686 I ReactNativeJS:        accuracy: 2.200000047683716 } } ]
10-20 00:40:02.502 15711 19686 I ReactNativeJS: 📤 Background location update via RPC...
10-20 00:40:02.502 15711 19686 E ReactNativeJS: ❌ Supabase credentials not configured
10-20 00:40:02.503 15711 19676 I TaskService: Finished task 'background-location-task' with eventId '3a1d1c57-9ec2-4c41-be24-35168adee77b'.
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: ?anon_0_@1:1972482
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:02.504 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:02.505 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:02.517 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:02.519 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.519 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.520 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:02.520 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.520 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:02.520 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.520 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:02.521 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:02.595 15711 19686 I ReactNativeJS: 🔄 Triggering manual ride check after status change
10-20 00:40:05.661 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.wallet.service.BIND pkg=com.google.android.gms }
10-20 00:40:05.751 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.auth.api.phone.service.InternalService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsInternalApiService }
10-20 00:40:07.502 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:07.503 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:07.505 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:07.505 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:07.505 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:07.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:07.507 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:07.510 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:07.512 15711 15711 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:40:07.517 21104 20020 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:07.522 15711 15711 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:07.523 15711 19686 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760901007440,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:     coords: 
10-20 00:40:07.523 15711 19686 I ReactNativeJS:      { altitude: 772.5999755859375,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:        heading: 0,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:        altitudeAccuracy: 1.2661538124084473,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:        latitude: 12.7487174,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:        speed: 0.000050947721319971606,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:        longitude: 77.8300233,
10-20 00:40:07.523 15711 19686 I ReactNativeJS:        accuracy: 2.1500000953674316 } } ]
10-20 00:40:07.526 15711 19686 I ReactNativeJS: 📤 Background location update via RPC...
10-20 00:40:07.526 15711 19686 E ReactNativeJS: ❌ Supabase credentials not configured
10-20 00:40:07.528 15711 19676 I TaskService: Finished task 'background-location-task' with eventId '3100fb2d-dffa-4bbc-983f-fb37259fe321'.
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: ?anon_0_@1:1972482
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:07.529 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:07.567 21104 20009 I TFLite-in-PlayServices: Created interpreter.
10-20 00:40:07.592 21104 20009 I TFLite-in-PlayServices: Created interpreter.
10-20 00:40:07.620 21104 20009 I SemanticLocation: (REDACTED) [Inferrer] %s%s
10-20 00:40:08.003 21104 22225 I WifiScanner: onFullResults
10-20 00:40:08.004 21104 22224 I WifiScanner: onFullResults
10-20 00:40:08.004 21104 21140 I WifiScanner: onFullResults
10-20 00:40:08.012 21104 20020 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:08.038 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:08.040 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:08.040 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:08.040 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:08.040 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:08.040 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:08.040 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:08.041 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:08.041 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:08.483 21104 20021 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:40:08.483 21104 20021 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:40:09.104 15711 15711 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@f888383
10-20 00:40:09.118 15711 19661 D HWUI    : endAllActiveAnimators on 0xb4000077801476b0 (RippleDrawable) with handle 0xb4000077d0068650
10-20 00:40:09.138 15711 19681 D BLASTBufferQueue: [VRI[MainActivity]#6](f:0,a:4) destructor()
10-20 00:40:09.139 15711 19681 D BufferQueueConsumer: [VRI[MainActivity]#6(BLAST Consumer)6](id:3d5f00000006,api:0,p:-1,c:15711) disconnect
10-20 00:40:09.145 15711 15711 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-20 00:40:09.145 15711 15711 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-20 00:40:09.177 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R....... 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE
10-20 00:40:09.185  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:40:09.187  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:09.188  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:40:09.190  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:40:12.516 15711 19686 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-20 00:40:12.516 15711 19686 I ReactNativeJS:   heading: 196.02139282226562,
10-20 00:40:12.516 15711 19686 I ReactNativeJS:   altitudeAccuracy: 1.3161604404449463,
10-20 00:40:12.516 15711 19686 I ReactNativeJS:   latitude: 12.7487102,
10-20 00:40:12.516 15711 19686 I ReactNativeJS:   speed: 0.10024014860391617,
10-20 00:40:12.516 15711 19686 I ReactNativeJS:   longitude: 77.8300185,
10-20 00:40:12.516 15711 19686 I ReactNativeJS:   accuracy: 2.296999931335449 }
10-20 00:40:12.522 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:12.526 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:12.529 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:12.529 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:12.529 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:12.531 15711 15711 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:40:12.532 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:12.538 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:12.538 15711 15711 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:12.540 15711 19686 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760901012441,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:     coords: 
10-20 00:40:12.540 15711 19686 I ReactNativeJS:      { altitude: 772.5999755859375,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:        heading: 196.02139282226562,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:        altitudeAccuracy: 1.3161604404449463,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:        latitude: 12.7487102,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:        speed: 0.10024014860391617,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:        longitude: 77.8300185,
10-20 00:40:12.540 15711 19686 I ReactNativeJS:        accuracy: 2.296999931335449 } } ]
10-20 00:40:12.542 15711 19686 I ReactNativeJS: 📤 Background location update via RPC...
10-20 00:40:12.542 15711 19686 E ReactNativeJS: ❌ Supabase credentials not configured
10-20 00:40:12.545 15711 19676 I TaskService: Finished task 'background-location-task' with eventId '635004c2-8bdc-4a5f-aee1-adc808e85fc4'.
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: ?anon_0_@1:1972482
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:12.546 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:12.764 15711 19686 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-20 00:40:12.765 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:40:12.765 15711 19686 I ReactNativeJS: 'Location:', { latitude: 12.7487102,
10-20 00:40:12.765 15711 19686 I ReactNativeJS:   longitude: 77.8300185,
10-20 00:40:12.765 15711 19686 I ReactNativeJS:   accuracy: 2.296999931335449 }
10-20 00:40:12.765 15711 19686 I ReactNativeJS: 📤 Updating location via RPC...
10-20 00:40:12.991 15711 19686 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-20 00:40:13.003 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:13.011 21104 20009 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:13.025 21104 22224 I WifiScanner: onFullResults
10-20 00:40:13.026 21104 22225 I WifiScanner: onFullResults
10-20 00:40:13.027 21104 21140 I WifiScanner: onFullResults
10-20 00:40:13.040 21104 20009 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:13.068 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:13.069 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:13.070 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:13.070 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:13.070 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:13.070 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:13.070 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:13.070 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:13.073 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:16.826  5589  5589 I VoiceInputManagerWrapper: VoiceInputManagerWrapper.shutdownVoiceInternal():148 shutdownVoiceInternal()
10-20 00:40:16.827  5589  5589 W NotificationCenter: NotificationCenter.unregisterListener():480 Listener hxw@a3594cd was not registered for notification class nhu
10-20 00:40:17.507 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:17.511 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:17.511 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:17.512 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:17.513 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:17.515 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:18.032 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:18.040 21104 20009 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:18.487 21104 20018 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:40:18.487 21104 20018 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:40:18.557 21104 21140 I WifiScanner: onFullResults
10-20 00:40:18.558 21104 22224 I WifiScanner: onFullResults
10-20 00:40:18.558 21104 22225 I WifiScanner: onFullResults
10-20 00:40:18.573 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:18.611 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:18.612 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:18.613 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:18.613 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:18.613 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:18.613 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:18.613 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:18.613 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:18.614 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:22.463 10567 10567 I bnlz    : onStart
10-20 00:40:22.464 10567 10567 I bldh    : (REDACTED) [%s] onStart()
10-20 00:40:22.464 10567 10567 I blfn    : Reloading theme data
10-20 00:40:22.467 10567 10567 I bnlz    : onResume
10-20 00:40:22.475 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-20 00:40:22.483 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:22.485 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:22.485 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:22.485 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:22.486 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:22.495 21163 21163 D BoundBrokerSvc: onRebind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-20 00:40:22.504 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:22.507 10567 10567 D BufferQueueConsumer: [](id:294700000008,api:0,p:-1,c:10567) connect: controlledByApp=false
10-20 00:40:22.507 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#8](f:0,a:0) constructor()
10-20 00:40:22.507 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#8](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-20 00:40:22.520 10567 10622 D BLASTBufferQueue: [VRI[Launcher]#8](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661944394928223(auto) mPendingTransactions.size=0 graphicBufferId=45384919416889 transform=0
10-20 00:40:22.596 21104 20009 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-20 00:40:23.046 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:23.047 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:23.059  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:40:23.060  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:23.060  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:40:23.061  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:40:23.065 15711 15711 I BackgroundFetchTaskConsumer: Starting an alarm for task 'background-fetch-task'.
10-20 00:40:23.078 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#3](f:0,a:4) destructor()
10-20 00:40:23.079 15711 19661 D BufferQueueConsumer: [VRI[MainActivity]#3(BLAST Consumer)3](id:3d5f00000003,api:0,p:-1,c:15711) disconnect
10-20 00:40:23.092 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:23.554 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:23.565 21104 19982 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:23.584 21104 21143 I WifiScanner: onFullResults
10-20 00:40:23.586 21104 24145 I WifiScanner: onFullResults
10-20 00:40:23.586 21104 21143 I WifiScanner: onFullResults
10-20 00:40:23.593 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:23.610 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:23.612 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:23.612 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:23.612 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:23.612 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:23.612 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:23.612 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:23.613 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:23.774 15711 15711 I BackgroundFetchTaskConsumer: Stopping an alarm for task 'background-fetch-task'.
10-20 00:40:23.788 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:23.788 15711 15711 D BufferQueueConsumer: [](id:3d5f00000007,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:40:23.788 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#7](f:0,a:0) constructor()
10-20 00:40:23.788 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#7](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-20 00:40:23.810 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#7](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661945686401223(auto) mPendingTransactions.size=0 graphicBufferId=67478231187505 transform=0
10-20 00:40:23.813 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:23.813 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:23.844 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R....... 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-20 00:40:23.846  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:40:23.847  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:23.847  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:40:23.848  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:40:23.887 10567 10567 I bnlz    : onPause
10-20 00:40:23.928 10567 10713 V ClearcutMetricXmitter: Transmission is done.
10-20 00:40:24.302 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:40:24.325 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:24.326 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#8](f:0,a:3) destructor()
10-20 00:40:24.326 10567 10567 D BufferQueueConsumer: [VRI[Launcher]#8(BLAST Consumer)8](id:294700000008,api:0,p:-1,c:10567) disconnect
10-20 00:40:24.336 10567 10567 I bnlz    : onStop
10-20 00:40:24.783 10567 10567 I bnlz    : onStart
10-20 00:40:24.784 10567 10567 I bldh    : (REDACTED) [%s] onStart()
10-20 00:40:24.784 10567 10567 I blfn    : Reloading theme data
10-20 00:40:24.789 10567 10567 I bnlz    : onResume
10-20 00:40:24.796 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-20 00:40:24.818 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:24.818 10567 10567 D BufferQueueConsumer: [](id:294700000009,api:0,p:-1,c:10567) connect: controlledByApp=false
10-20 00:40:24.819 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#9](f:0,a:0) constructor()
10-20 00:40:24.819 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#9](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-20 00:40:24.830 10567 10622 D BLASTBufferQueue: [VRI[Launcher]#9](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661946706744608(auto) mPendingTransactions.size=0 graphicBufferId=45384919416896 transform=0
10-20 00:40:25.287 15711 15711 I BackgroundFetchTaskConsumer: Starting an alarm for task 'background-fetch-task'.
10-20 00:40:25.296 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:25.296 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:25.311 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#7](f:0,a:1) destructor()
10-20 00:40:25.311 15711 19661 D BufferQueueConsumer: [VRI[MainActivity]#7(BLAST Consumer)7](id:3d5f00000007,api:0,p:-1,c:15711) disconnect
10-20 00:40:25.317 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:25.318  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:40:25.319  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:25.319  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:40:25.320  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:40:25.983 15711 15711 I BackgroundFetchTaskConsumer: Stopping an alarm for task 'background-fetch-task'.
10-20 00:40:26.017 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:26.017 15711 15711 D BufferQueueConsumer: [](id:3d5f00000008,api:0,p:-1,c:15711) connect: controlledByApp=false
10-20 00:40:26.018 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#8](f:0,a:0) constructor()
10-20 00:40:26.018 15711 15711 D BLASTBufferQueue: [VRI[MainActivity]#8](f:0,a:0) update width=1080 height=2392 format=-1 mTransformHint=0
10-20 00:40:26.028 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:26.029 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:26.030 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#8](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661947906187685(auto) mPendingTransactions.size=0 graphicBufferId=67478231187512 transform=0
10-20 00:40:26.053 15711 15711 V ImeFocusController: onWindowFocus: com.android.internal.policy.DecorView{e311d29 V.E...... R....... 0,0-1080,2392 aid=0}[MainActivity] softInputMode=STATE_UNSPECIFIED|ADJUST_RESIZE|IS_FORWARD_NAVIGATION
10-20 00:40:26.056  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:40:26.057  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:26.057  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.a1taxi.driverpro, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:40:26.059  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:40:26.083 10567 10567 I bnlz    : onPause
10-20 00:40:26.093 10567 17269 V ClearcutMetricXmitter: Transmission is done.
10-20 00:40:26.401  1870  2718 D AutofillSession: handling death of Token{8d71e3e ActivityRecord{cf7dffd u0 com.a1taxi.a1taxicustomer/.MainActivity t2370 d0 f}}} when saving=false
10-20 00:40:26.550 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:40:26.576 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:26.580 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#9](f:0,a:3) destructor()
10-20 00:40:26.580 10567 10567 D BufferQueueConsumer: [VRI[Launcher]#9(BLAST Consumer)9](id:294700000009,api:0,p:-1,c:10567) disconnect
10-20 00:40:26.582 10567 10567 I bnlz    : onStop
10-20 00:40:26.815 10567 10583 W chbox:googleapp: Reducing the number of considered missed Gc histogram windows from 135 to 100
10-20 00:40:26.831 10567 17269 V ClearcutMetricXmitter: Transmission is done.
10-20 00:40:26.876 10567 10567 I bnlz    : onStart
10-20 00:40:26.877 10567 10567 I bldh    : (REDACTED) [%s] onStart()
10-20 00:40:26.877 10567 10567 I blfn    : Reloading theme data
10-20 00:40:26.884 10567 10567 I bnlz    : onResume
10-20 00:40:26.887 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=false newVisibility=true
10-20 00:40:26.912 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:26.913 10567 10567 D BufferQueueConsumer: [](id:29470000000a,api:0,p:-1,c:10567) connect: controlledByApp=false
10-20 00:40:26.913 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#10](f:0,a:0) constructor()
10-20 00:40:26.913 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#10](f:0,a:0) update width=1080 height=2392 format=-2 mTransformHint=0
10-20 00:40:26.944 10567 10622 D BLASTBufferQueue: [VRI[Launcher]#10](f:0,a:1) acquireNextBufferLocked size=1080x2392 mFrameNumber=1 applyTransaction=true mTimestamp=661948820916300(auto) mPendingTransactions.size=0 graphicBufferId=45384919416903 transform=0
10-20 00:40:27.385  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:40:27.386  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:27.386  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onStartInput():1346 onStartInput(EditorInfo{EditorInfo{packageName=com.android.launcher3, inputType=0, inputTypeString=NULL, enableLearning=false, autoCorrection=false, autoComplete=false, imeOptions=0, privateImeOptions=null, actionName=UNSPECIFIED, actionLabel=null, initialSelStart=-1, initialSelEnd=-1, initialCapsMode=0, label=null, fieldId=0, fieldName=null, extras=null, hintText=null, hintLocales=[]}}, false)
10-20 00:40:27.386 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:27.386 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:27.387  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 1, locked = false
10-20 00:40:27.398 15711 15711 I BackgroundFetchTaskConsumer: Starting an alarm for task 'background-fetch-task'.
10-20 00:40:27.412 15711 19661 D BLASTBufferQueue: [VRI[MainActivity]#8](f:0,a:1) destructor()
10-20 00:40:27.412 15711 19661 D BufferQueueConsumer: [VRI[MainActivity]#8(BLAST Consumer)8](id:3d5f00000008,api:0,p:-1,c:15711) disconnect
10-20 00:40:27.417 15711 15711 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:27.490 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:27.494 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:27.495 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:27.495 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:27.499 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:27.501 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:27.681  1870  2896 D AutofillSession: clearPendingIntentLocked
10-20 00:40:27.686  3458  3458 V InlineSuggestionRenderService: handleDestroySuggestionViews called for 0:1672439206
10-20 00:40:27.690 15711 15711 E unknown:ReactNative: Tried to remove non-existent frame callback
10-20 00:40:27.690 15711 15711 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda11@77db64f
10-20 00:40:27.693 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:27.694 10567 10567 I bnft    : (REDACTED) onApplyWindowInsets: systemWindowInsets=%s
10-20 00:40:28.348 21104 16127 D BluetoothAdapter: 155044146: getState(). Returning ON
10-20 00:40:28.351 21104 16127 I NearbyDiscovery: FastPair: isDestroyable: Scanner is alive. [CONTEXT service_id=265 ]
10-20 00:40:28.353 21104 16127 I NearbyDiscovery: DiscoveryService: Skip stopSelf(), fast pair controller is not destroyable. [CONTEXT service_id=265 ]
10-20 00:40:28.489 21104 19821 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:40:28.489 21104 19821 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:40:28.582 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:28.585 21104 19755 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:28.693 15711 19686 I ReactNativeJNI: Memory warning (pressure level: TRIM_MEMORY_BACKGROUND) received by JS VM, running a GC
10-20 00:40:28.700  7096  7120 I native  : I0000 00:00:1760901028.700489    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760901028590380
10-20 00:40:28.759  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:29.069 21104 22225 I WifiScanner: onFullResults
10-20 00:40:29.071 21104 24145 I WifiScanner: onFullResults
10-20 00:40:29.071 21104 22617 I WifiScanner: onFullResults
10-20 00:40:29.082 21104 19755 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:29.108 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:29.112 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:29.112 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:29.112 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:29.113 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:29.113 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:29.113 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:29.124 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:32.498 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:32.502 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:32.502 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:32.503 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:32.505 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:32.507 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:34.068 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:34.078 21104 20009 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:34.097 21104 21332 I WifiScanner: onFullResults
10-20 00:40:34.098 21104 22617 I WifiScanner: onFullResults
10-20 00:40:34.098 21104 22225 I WifiScanner: onFullResults
10-20 00:40:34.112 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:34.144 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:34.148 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:34.148 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:34.148 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:34.149 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:34.149 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:34.149 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:34.151 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:36.863 10567 10649 E efor    : (REDACTED) Trace %s timed out after %d ms. Complete trace: %s
10-20 00:40:36.863 10567 10649 E efor    : efqa: 
10-20 00:40:36.863 10567 10649 E efor    : 	at tk_trace.Query: SELECT response_data, write_ms FROM cache_table WHERE request_data=?(Started After:0)
10-20 00:40:36.863 10567 10649 E efor    : 	at tk_trace.Transaction(Started After:0)
10-20 00:40:36.863 10567 10649 E efor    : 	at tk_trace.PersistentByteStoreInstaller.storeDidFault(Started After:0)
10-20 00:40:36.864 10567 10647 E efor    : (REDACTED) Trace %s timed out after %d ms. Complete trace: %s
10-20 00:40:36.864 10567 10647 E efor    : efqa: 
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.LocationUpdateRequester#isEnabled(Started After:30)
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.LocationUpdateRequester#requestOrRemoveLocationUpdates(Started After:30)
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.LocationUpdateRequestScheduler#scheduleLocationUpdateRequest(Started After:30)
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.LocationUpdateApplicationStartupListener#onApplicationStartup(Started After:0)
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.LocationUpdateApplicationStartupListener(Started After:0)
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.Startup Listeners(Started After:0)
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.Application.onCreate(Started After:0)
10-20 00:40:36.864 10567 10647 E efor    : 	at tk_trace.Application creation(Started After:0)
10-20 00:40:36.877 10567 10610 E efor    : (REDACTED) Trace %s timed out after %d ms. Complete trace: %s
10-20 00:40:36.877 10567 10610 E efor    : efqa: 
10-20 00:40:36.877 10567 10610 E efor    : 	at tk_trace.LocalSubscription onLoaded()(Started After:0)
10-20 00:40:36.877 10567 10610 E efor    : 	at tk_trace.LocalSubscription newLoad(Started After:0)
10-20 00:40:36.877 10567 10610 E efor    : 	at tk_trace.onAccountReady(Started After:0)
10-20 00:40:36.877 10567 10610 E efor    : 	at tk_trace.onSuccess FuturesMixin(Started After:0)
10-20 00:40:36.877 10567 10610 E efor    : 	at tk_trace.OverlayBinder.setActivityState(Started After:0)
10-20 00:40:36.877 10567 10610 E efor    : 	at tk_trace.Invoking OverlayBinder(Started After:0)
10-20 00:40:36.877 10567 10610 E efor    : 	Suppressed: efpz: 
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.DISCOVER_ATF_RENDER_END(unfinished)(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.handleNewRenderableStream 25 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.SubscriptionCallbacks.onNewData 26 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.onAccountReady 256 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.onSuccess FuturesMixin 260 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.OverlayBinder.setActivityState 0 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.Invoking OverlayBinder 0 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 	Suppressed: efpz: 
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.DISCOVER_ATF_RENDER_START(unfinished)(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.handleNewRenderableStream 25 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.SubscriptionCallbacks.onNewData 26 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.onAccountReady 256 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.onSuccess FuturesMixin 260 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.OverlayBinder.setActivityState 0 ms(Unknown Source:0)
10-20 00:40:36.877 10567 10610 E efor    : 		at tk_trace.Invoking OverlayBinder 0 ms(Unknown Source:0)
10-20 00:40:37.486 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:37.489 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:37.490 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:37.490 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:37.490 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:37.544 21104 20009 I TFLite-in-PlayServices: Created interpreter.
10-20 00:40:37.568 21104 20009 I TFLite-in-PlayServices: Created interpreter.
10-20 00:40:37.593 21104 20009 I SemanticLocation: (REDACTED) [Inferrer] %s%s
10-20 00:40:38.491 21104 19720 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:40:38.492 21104 19720 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:40:39.098 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:39.105 21104 19982 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:39.612 21104 22617 I WifiScanner: onFullResults
10-20 00:40:39.613 21104 22617 I WifiScanner: onFullResults
10-20 00:40:39.616 21104 21332 I WifiScanner: onFullResults
10-20 00:40:39.627 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:39.669 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:39.675 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:39.675 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:39.675 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:39.675 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:39.675 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:39.679 21104 21734 W PersonalSafety: Ble scanner not running, ignore location update [CONTEXT service_id=310 ]
10-20 00:40:39.683 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:42.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:42.516 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:42.519 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:42.520 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:42.521 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:42.523 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:44.609 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:44.615 21104 18140 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:44.635 21104 21332 I WifiScanner: onFullResults
10-20 00:40:44.635 21104 22617 I WifiScanner: onFullResults
10-20 00:40:44.636 21104 24145 I WifiScanner: onFullResults
10-20 00:40:44.642 21104 18140 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:44.679 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:44.682 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:44.682 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:44.682 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:44.683 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:44.683 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:44.683 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:44.684 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:47.497 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:47.507 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:47.507 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:47.507 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:47.509 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:47.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:48.493 21104 20091 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:40:48.494 21104 20091 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:40:49.637 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:49.644 21104 19982 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:50.156 21104 22617 I WifiScanner: onFullResults
10-20 00:40:50.157 21104 24145 I WifiScanner: onFullResults
10-20 00:40:50.157 21104 22617 I WifiScanner: onFullResults
10-20 00:40:50.174 21104 20009 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:50.212 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:50.217 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:50.217 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:50.217 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:50.218 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:50.218 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:50.219 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:50.235 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:50.767 19438 19438 I Process : Sending signal. PID: 19438 SIG: 9
10-20 00:40:52.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:52.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:52.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:52.513 15711 19686 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 772.5999755859375,
10-20 00:40:52.513 15711 19686 I ReactNativeJS:   heading: 0,
10-20 00:40:52.513 15711 19686 I ReactNativeJS:   altitudeAccuracy: 1.2113075256347656,
10-20 00:40:52.513 15711 19686 I ReactNativeJS:   latitude: 12.7486169,
10-20 00:40:52.513 15711 19686 I ReactNativeJS:   speed: 0.0641661062836647,
10-20 00:40:52.513 15711 19686 I ReactNativeJS:   longitude: 77.8299873,
10-20 00:40:52.513 15711 19686 I ReactNativeJS:   accuracy: 4.034999847412109 }
10-20 00:40:52.520 21104 19755 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-20 00:40:52.523 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:52.527 15711 15711 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:40:52.534 15711 15711 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:40:52.536 15711 19686 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760901052438,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:     coords: 
10-20 00:40:52.536 15711 19686 I ReactNativeJS:      { altitude: 772.5999755859375,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:        heading: 0,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:        altitudeAccuracy: 1.2113075256347656,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:        latitude: 12.7486169,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:        speed: 0.0641661062836647,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:        longitude: 77.8299873,
10-20 00:40:52.536 15711 19686 I ReactNativeJS:        accuracy: 4.034999847412109 } } ]
10-20 00:40:52.546 15711 19686 I ReactNativeJS: 📤 Background location update via RPC...
10-20 00:40:52.546 15711 19686 E ReactNativeJS: ❌ Supabase credentials not configured
10-20 00:40:52.549 15711 19676 I TaskService: Finished task 'background-location-task' with eventId 'a8f4d9a5-504b-49a9-ae24-491eb926c2e2'.
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: ?anon_0_@1:1972482
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:40:52.552 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:40:52.576 11044 11147 E MvfstCallbacks.cpp: readError: streamid=3; error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.577 11044 11147 E MvfstCallbacks.cpp: readError: streamid=7; error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.577 11044 11147 E MvfstCallbacks.cpp: readError: streamid=11; error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.578 11044 11147 E MvfstCallbacks.cpp: onConnectionError: error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.580 11044 11147 E MvfstCallbacks.cpp: readError: streamid=3; error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.580 11044 11147 E MvfstCallbacks.cpp: readError: streamid=7; error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.580 11044 11147 E MvfstCallbacks.cpp: readError: streamid=11; error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.580 11044 11147 E MvfstCallbacks.cpp: onConnectionError: error=LocalError: Idle timeout, Idle timeout: 60 seconds
10-20 00:40:52.580 11044 11235 E MvfstCallbacks.cpp: readError: streamid=0; error=LocalError: Idle timeout, Idle timeout: 35 seconds
10-20 00:40:52.580 11044 11235 E MvfstCallbacks.cpp: readError: streamid=3; error=LocalError: Idle timeout, Idle timeout: 35 seconds
10-20 00:40:52.580 11044 11235 E MvfstCallbacks.cpp: readError: streamid=7; error=LocalError: Idle timeout, Idle timeout: 35 seconds
10-20 00:40:52.586 11044 11235 E MvfstCallbacks.cpp: readError: streamid=11; error=LocalError: Idle timeout, Idle timeout: 35 seconds
10-20 00:40:52.587 11044 11235 E MvfstCallbacks.cpp: onConnectionError: error=LocalError: Idle timeout, Idle timeout: 35 seconds
10-20 00:40:52.588 11044 11170 W RealtimeClientManager: Channel state: MqttChannelState{mConnectionState=DISCONNECTED, mDisconnectionReason=null, mLastConnectionMs=1345021259, mLastDisconnectMs=1345221950}
10-20 00:40:52.590 11044 11235 E MvfstCallbacks.cpp: writeChain error: Connection closed
10-20 00:40:52.595 11044 11113 E MQTTBypassDGWStreamGroupCallbacks.cpp: onStreamGroupError TransientError domain: MNSQUICConnection code: 1 detail: Idle timeout: 35 seconds
10-20 00:40:52.596 11044 11113 W MQTTBypassDGWStreamGroupConnection.cpp: Restarting due to reason: StreamError
10-20 00:40:52.599 11044 11170 W RealtimeClientManager: Channel state: MqttChannelState{mConnectionState=CONNECTING, mDisconnectionReason=null, mLastConnectionMs=1345021259, mLastDisconnectMs=1345221950}
10-20 00:40:52.619 11044 11147 W LibevQuicAsyncUDPSocket.h: setTosOrTrafficClass not implemented in LibevQuicAsyncUDPSocket
10-20 00:40:52.662 11044 11170 W RealtimeClientManager: Channel state: MqttChannelState{mConnectionState=CONNECTED, mDisconnectionReason=null, mLastConnectionMs=1345021259, mLastDisconnectMs=1345221950}
10-20 00:40:52.716 15711 19686 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-20 00:40:52.716 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:40:52.716 15711 19686 I ReactNativeJS: 'Location:', { latitude: 12.7486169,
10-20 00:40:52.716 15711 19686 I ReactNativeJS:   longitude: 77.8299873,
10-20 00:40:52.716 15711 19686 I ReactNativeJS:   accuracy: 4.034999847412109 }
10-20 00:40:52.716 15711 19686 I ReactNativeJS: 📤 Updating location via RPC...
10-20 00:40:52.989 11044 11170 W RealtimeClientManager: Channel state: MqttChannelState{mConnectionState=CONNECTED_AND_ACKED, mDisconnectionReason=null, mLastConnectionMs=1345222352, mLastDisconnectMs=1345221950}
10-20 00:40:53.006 15711 19686 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
10-20 00:40:53.624 11044 11235 W LibevQuicAsyncUDPSocket.h: setTosOrTrafficClass not implemented in LibevQuicAsyncUDPSocket
10-20 00:40:53.926 11044 11053 I stagram.android: CollectorTransition concurrent copying GC freed 5867KB AllocSpace bytes, 12(560KB) LOS objects, 62% free, 14MB/38MB, paused 267us,114us total 313.719ms
10-20 00:40:53.927 11044 11053 W stagram.android: Reducing the number of considered missed Gc histogram windows from 180 to 100
10-20 00:40:54.443 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.common.BIND_SHARED_PREFS pkg=com.google.android.gms }
10-20 00:40:55.154 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:40:55.162 21104 19755 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:40:55.185 21104 22617 I WifiScanner: onFullResults
10-20 00:40:55.189 21104 23957 I WifiScanner: onFullResults
10-20 00:40:55.189 21104 22003 I WifiScanner: onFullResults
10-20 00:40:55.198 21104 19982 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:40:55.228 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:55.231 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:55.231 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:55.231 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:55.232 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:55.233 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:55.233 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:55.235 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:40:57.495 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:57.501 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:57.502 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:57.502 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:57.504 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:40:57.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:40:58.337  5589  5589 I GoogleInputMethodService: GoogleInputMethodService.onFinishInput():2085 
10-20 00:40:58.339  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:58.444 10567 10567 D VRI[Launcher]: visibilityChanged oldVisibility=true newVisibility=false
10-20 00:40:58.477 10567 10567 D ViewRootImpl: AppSizeAfterRelayout, size: Point(1080, 2392), rotation: ROTATION_0
10-20 00:40:58.478 10567 10567 D BLASTBufferQueue: [VRI[Launcher]#10](f:0,a:3) destructor()
10-20 00:40:58.478 10567 10567 D BufferQueueConsumer: [VRI[Launcher]#10(BLAST Consumer)10](id:29470000000a,api:0,p:-1,c:10567) disconnect
10-20 00:40:58.492  1870  3647 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:40:58.494  1870  3647 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:40:58.496  5589  5589 I PkDeviceHelper: PkDeviceHelper.refreshDevices():93 refreshing devices
10-20 00:40:58.497  5589  5589 I PkDeviceHelper: PkDeviceHelper.refreshDevices():93 refreshing devices
10-20 00:40:58.502  5589  5589 I PkDeviceHelper: PkDeviceHelper.refreshDevices():93 refreshing devices
10-20 00:40:58.547 10567 10567 I bnlz    : onPause
10-20 00:40:58.564 21104 20014 I NearbyMediums: No BLE Fast/GATT advertisements found in the latest cycle.
10-20 00:40:58.565 21104 20014 I NearbyMediums: Current Tracked Scanning Clients are : {NearbyConnections.EnvironmentMonitor, NearbySharing}
10-20 00:40:58.575  1870  3607 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:40:58.578  1870  3607 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:40:58.592 21104 21104 I NearbyDiscovery: (REDACTED) FastPairDisplayObserver: %s -> %s
10-20 00:40:58.614  1870  2859 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:40:58.661 21104 20014 I NearbySharing: Screen is locked
10-20 00:40:58.662 21104 20014 I NearbySharing: Stopping scanning because the screen is locked.
10-20 00:40:58.664 21104 20014 I NearbySharing: [NS_PROVIDER_API]: stopDiscovery called.
10-20 00:40:58.667 21104 20014 I NearbySharing: NearbySharing Internal event SendManagerEnd
10-20 00:40:58.667 21104 20014 I NearbySharing: Scanning has stopped.
10-20 00:40:58.689 10567 10567 I bnlz    : onStop
10-20 00:40:58.713 10567 11808 V ClearcutMetricXmitter: Transmission is done.
10-20 00:40:58.733  7096  7120 I native  : I0000 00:00:1760901058.733612    7120 soda_async_impl.cc:1383] Current audio timestamp: 1760901058590380
10-20 00:40:58.755 21104 20127 I NearbySharing: [NS_DEBUG] DiscoveryController stopped.
10-20 00:40:58.760 21104 21127 I NearbyConnections: Client 212363826 requested discovery to stop.
10-20 00:40:58.764 21104 20132 I NearbyMediums: In ScanningCancellationFlag, service-id=NearbySharing is the last scanner to stop scanning. The flag has been cancelled.
10-20 00:40:58.766 21104 20127 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:58.781 21104 20014 I NearbySharing: Stopping Fast Init advertisement because we're not scanning in the foreground.
10-20 00:40:58.783 21104 16127 I NearbyDiscovery: (REDACTED) OffloadFastPairScanner: eventType=%s, isInternalReq=%s, isOffloadScanning=%s, isOffloadScanningAllowed=%s
10-20 00:40:58.785 21104 16127 I NearbyDiscovery: (REDACTED) FastPairScanner: isScreenOn=%s, isLocationEnabled=%s, disableLocationRequirement=%s, isDiscoveryScanningEnabled=%s, during24GhzWifiWarmingUpPeriod=%s
10-20 00:40:58.786 21104 16127 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:58.786 21104 16127 I NearbyDiscovery: (REDACTED) FastPairScanner: eventType=%s, intReq=%s, scanning=%s, scanAllowed=%s, bleEnabled=%s, lockScanRate=%s, startScanningByLowPowerMode=%s
10-20 00:40:58.788 21104 16127 I NearbyDiscovery: (REDACTED) FastPairScanner: Stopping scan, %s
10-20 00:40:58.788 21104 16127 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:58.794 21104 20132 I NearbyMediums: Stopped BLE scanning, service-id=NearbySharing
10-20 00:40:58.796 21104 20132 I NearbyMediums: Can't stop WiFi Aware subscribing because it was never started.
10-20 00:40:58.796 21104 20132 I NearbyMediums: Can't stop NFC discovery because it was never started.
10-20 00:40:58.798 21104 20132 I NearbyConnections: No longer listening to visibility changes for client 212363826
10-20 00:40:58.799 21104 20014 I NearbySharing: NearbySharing Internal event ReceiveVisibilityChange(visibility=4)
10-20 00:40:58.804 21104 20014 I NearbySharing: Start advertising with mode SCREEN_OFF certificate visibility SELF_SHARE data usage preference ONLINE, and bt advertising false with vendorId 0
10-20 00:40:58.807 21104 20014 I NearbySharing: Uwb feature is off.
10-20 00:40:58.807 21104 20014 I NearbySharing: Updating advertising options: dhlm@909a74f
10-20 00:40:58.807 21104 20014 I NearbySharing: [RECEIVE_PROVIDER] update called.
10-20 00:40:58.821  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:58.826 21104 20014 I NearbySharing: Advertising has started with mode SCREEN_OFF, Bt enabled : false
10-20 00:40:58.826 21104 20014 I NearbySharing: Stopping FastInitiation scanning because the screen is locked.
10-20 00:40:58.826 21104 20014 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:58.835 21104 20014 I NearbySharing: Stopped scanning for FastInitiation
10-20 00:40:58.836 21104 20014 I NearbySharing: Fast Initiation Scanning has stopped
10-20 00:40:58.836 21104 20014 I NearbySharing: Dismissing HUN as there's no device nearby.
10-20 00:40:58.842  1870  1928 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 766, arg2: 604, arg3: 3218, arg4: 8659, name: com.vivo.fingerprintui
10-20 00:40:58.851  1870  2859 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 766, arg2: 604, arg3: 3218, arg4: 8659, name: com.vivo.fingerprintui
10-20 00:40:58.875 21104 19720 I NearbySharing: Loading certificates with visibility SELF_SHARE
10-20 00:40:58.876 21104 19720 I NearbySharing: Saving the private certificate to file nearby_sharing_private_certificate_file_for_self.
10-20 00:40:58.916  1870  1928 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:40:58.916  1870  1928 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: -2, arg2: -1, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:40:59.022  5589 20142 I DeviceStatusMonitor: DeviceStatusMonitor.handleBroadcast():123 onReceive() : Action = android.intent.action.SCREEN_OFF
10-20 00:40:59.022  5589 20142 I DeviceStatusMonitor: DeviceStatusMonitor.updateCountryInfo():139 updateCountryInfo(), notifyAnyway = false
10-20 00:40:59.023  5589  5589 I Module  : DeviceLockedStatusModuleProvider$Module.updateDeviceLockedStatus():100 repeatCheckTimes = 0, locked = false
10-20 00:40:59.023  5589  5589 I InputBundle: InputBundle.consumeEvent():1028 Skip consuming an event as imeStatus is INACTIVE
10-20 00:40:59.028 21104 19720 I NearbySharing: Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, isWifiConnected=true)
10-20 00:40:59.029 21104 19720 I NearbySharing: Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, isWifiConnected=true)
10-20 00:40:59.031 21104 21127 I NearbyConnections: ClientProxy(0p:com.google.android.gms.nearby.sharing) allow WebRtc to use mobile data.
10-20 00:40:59.033 21104 21127 I NearbyConnections: Client 212363826 requested to update advertising options.
10-20 00:40:59.036 21104 20128 I Nearby  : (REDACTED) Note nearby client %s for operation %s
10-20 00:40:59.048 21104 20128 I NearbyConnections: [PcpManager] In updateAdvertisingOptions() advertisingMediums:[BLE] upgradeMediums:[USB, WIFI_LAN, WIFI_DIRECT, WIFI_AWARE, WIFI_HOTSPOT, WEB_RTC, BLE_L2CAP, BLUETOOTH, BLE, NFC] requireRegisterWifiStatusChangedCallback:true
10-20 00:40:59.060 21104 20128 I NearbyConnections: Instant Connection Security key rotated.
10-20 00:40:59.061 21104 20128 I NearbyConnections: Scheduled invalidation of the HPKE key alarm (delayMillis:8000) for client 212363826
10-20 00:40:59.061 21104 20128 I NearbyConnections: Get local endpoint id from random generation NJK4 (last:X98S) for client 212363826
10-20 00:40:59.061 21104 20128 I NearbyConnections: generateRxInstantConnectionAdvBytes() returns null due to not supporting extended advertisements
10-20 00:40:59.093 21104 20128 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:59.093 21104 20128 D BluetoothLeAdvertiser: TxPower == ADVERTISE_TX_POWER_MEDIUM
10-20 00:40:59.093 21104 20128 E AdvertisingSetParameters: vendorInterval invalid: 0
10-20 00:40:59.093 21104 20128 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:59.107 11594 11594 I epse    : (REDACTED) Created gRPC endpoint for service %s
10-20 00:40:59.119  7096  7122 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.120  7096  7120 I native  : I0000 00:00:1760901059.120238    7120 soda_async_impl.cc:1016] SODA stopped processing audio, mics audio processed in millis: 210320, loopback audio processed in millis: 0
10-20 00:40:59.120  7096  7120 I native  : I0000 00:00:1760901059.120848    7120 soda_async_impl.cc:1028] Audio readers are stopped.
10-20 00:40:59.122 21104 21104 I NearbyMediums: [InstantOnLostManager] Start instant onLost legacy advertising, hashes = [ 0x55 0x76 0x73 0x80 ].
10-20 00:40:59.122 21104 20128 I NearbyMediums: Successfully stopped BLE advertising for service NearbySharing
10-20 00:40:59.123  7096  7120 I native  : I0000 00:00:1760901059.123142    7120 soda_async_impl.cc:1091] SODA session stopped due to: STOP_CALLED
10-20 00:40:59.124  7096  7121 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.125  7096  7122 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.126  7096  7130 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.126  7096  7130 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.126  7096  7122 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.126  7096  7122 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.126  7096  7122 D AudioRecord: stop(25699): 0xb40000778002a8f0, mActive: 1
10-20 00:40:59.129 21104 20128 I Nearby  : (REDACTED) NsdManagerCompat released multicast lock %d.
10-20 00:40:59.130  7096  7122 E VivoAudioPolicyProxyNative: VivoAudioPolicyProxy getInstanceInter: binding to vivoaudiopolicy service failed, service up?
10-20 00:40:59.133 21104 20128 I NearbyMediums: Stopped Wifi LAN advertising.
10-20 00:40:59.133  7096  7122 D AudioTrackShared: this(0xb400007750073e30), mCblk(0x7abab1b000), front(3366720), mIsOut 0, interrupt() FUTEX_WAKE
10-20 00:40:59.137 21104 20128 I NearbyMediums: Stopped listening for incoming Wifi Lan connections.
10-20 00:40:59.138 21104 18218 E NearbyMediums: MEDIUM_ERROR [SYSTEM][WIFI_LAN][START_LISTENING_INCOMING_CONNECTION][ACCEPT_CONNECTION_FAILED][SOCKET_CLOSED], service-id=NearbySharing
10-20 00:40:59.138 21104 20128 D BluetoothAdapter: 152527198: getState(). Returning ON
10-20 00:40:59.138 21104 18218 E NearbyMediums: Extra Sensitive/PII message : Socket closed
10-20 00:40:59.142 21104 16127 I NearbyDiscovery: (REDACTED) FastPairHandler: Received action %s
10-20 00:40:59.144 21104 16127 I NearbyDiscovery: (REDACTED) OffloadFastPairScanner: eventType=%s, isInternalReq=%s, isOffloadScanning=%s, isOffloadScanningAllowed=%s
10-20 00:40:59.144 21104 20128 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:59.144 21104 16127 I NearbyDiscovery: (REDACTED) FastPairScanner: isScreenOn=%s, isLocationEnabled=%s, disableLocationRequirement=%s, isDiscoveryScanningEnabled=%s, during24GhzWifiWarmingUpPeriod=%s
10-20 00:40:59.144 21104 21104 I BatchScanningManager: (REDACTED) Starting batch scanner in %d seconds.
10-20 00:40:59.145 21104 16127 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:40:59.146 21104 16127 I NearbyDiscovery: (REDACTED) FastPairScanner: eventType=%s, intReq=%s, scanning=%s, scanAllowed=%s, bleEnabled=%s, lockScanRate=%s, startScanningByLowPowerMode=%s
10-20 00:40:59.146 21104 16127 I NearbyDiscovery: FastPairController: onSystemStateChanged: skip due to flag disabled [CONTEXT service_id=265 ]
10-20 00:40:59.164 21104 20128 I NearbyMediums: Started BLE Legacy advertising. Regular Header Advertised : false, Fast Advertised : true, AdvertisingSettings : BleAdvertisingSetting{powerLevel= LOW_POWER, isConnectable= false, isPrivateGatt= true}, isAcceptingConnection : false
10-20 00:40:59.164 21104 20128 I NearbyMediums: Successfully started BLE advertising of size 23 for service NearbySharing, deviceToken : [ 0x23 0xbe ].
10-20 00:40:59.165 21104 20128 I NearbyMediums: [WifiNetworkV2] WifiStatusChangedCallback unregistered for NearbySharing (wifiStatusChangedCallbacks.size:0)
10-20 00:40:59.165 21104 20128 I NearbySharing: [broadcast provider] advertising options updated (BroadcastProviderOptions(powerLevel=1, flowId=3468937300534740742, uwbSenderInfo=[], deviceType=1, advertisingMediums=[4], upgradeMediums=[11, 5, 8, 6, 3, 9, 10, 2, 4, 7], useStableIdentifiers=false, allowBluetoothRadioToggling=false, allowWifiRadioToggling=false, enableBleL2capListening=false, allowGattConnections=false, enableFastAdvertisement=true)).
10-20 00:40:59.165 21104 20128 I NearbySharing: NearbySharing Internal event ReceiveManagerUpdate(mode=1, isEveryoneMode=false, dataUsage=2, useQrCode=false, success=true)
10-20 00:40:59.165 21104 19720 I NearbySharing: [ClearcutLog] ADVERTISE_DEVICE_PRESENCE_START sessionId=0 flowId=3468937300534740742 sessionStatus: 1, visibility: 5
10-20 00:40:59.167 21104 19720 I NearbySharing: Stopping scanning because the screen is locked.
10-20 00:40:59.168 21104 19720 I NearbySharing: Stopping Fast Init advertisement because we're not scanning in the foreground.
10-20 00:40:59.170 21104 19720 I NearbySharing: Failed to advertise because we're already advertising with mode SCREEN_OFF, certificate visibility SELF_SHARE data usage preference ONLINE, and bt advertising false with vendorId 0
10-20 00:40:59.170 21104 19720 I NearbySharing: Stopping FastInitiation scanning because the screen is locked.
10-20 00:40:59.171 21104 19720 I NearbySharing: Fast Initiation Scanning has stopped
10-20 00:40:59.171 21104 19720 I NearbySharing: Dismissing HUN as there's no device nearby.
10-20 00:40:59.356  7096  7122 D AudioRecord: stop(25699) done
10-20 00:40:59.357  7096  7122 D AudioRecord: stop(25699): 0xb40000778002a8f0, mActive: 0
10-20 00:40:59.357  7096  7122 D AudioRecord: ~AudioRecord(25699): mStatus 0
10-20 00:40:59.357  7096  7122 D AudioRecord: stop(25699): 0xb40000778002a8f0, mActive: 0
10-20 00:40:59.357  7096  7122 D AudioTrackShared: this(0xb400007750073e30), mCblk(0x7abab1b000), front(3366720), mIsOut 0, interrupt() FUTEX_WAKE
10-20 00:40:59.359  7096  7122 W mediametrics::Item: selfrecord: failed to record: {audiorecord, (01-01 05:30:00.000), (, -1, -1), (android.media.audiorecord.attributes={ Content type: AUDIO_CONTENT_TYPE_UNKNOWN Usage: AUDIO_USAGE_UNKNOWN Source: AUDIO_SOURCE_HOTWORD Flags: 0x800 Tags:  }, android.media.audiorecord.channelMask=16, android.media.audiorecord.channels=1, android.media.audiorecord.durationMs=2.107575e+05, android.media.audiorecord.encoding=AUDIO_FORMAT_PCM_16_BIT, android.media.audiorecord.frameCount=128000, android.media.audiorecord.latency=8000, android.media.audiorecord.logSessionId=, android.media.audiorecord.portId=25699, android.media.audiorecord.samplerate=16000, android.media.audiorecord.source=AUDIO_SOURCE_HOTWORD, android.media.audiorecord.startCount=1)}
10-20 00:40:59.360  7096  7122 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.361  7096  7126 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
10-20 00:40:59.476 21104 21104 I NearbyDiscovery: (REDACTED) FastPairDisplayObserver: %s -> %s
10-20 00:41:00.188 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:41:00.196 21104 20009 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:41:00.714 21104 22225 I WifiScanner: onFullResults
10-20 00:41:00.715 21104 23957 I WifiScanner: onFullResults
10-20 00:41:00.716 21104 21119 I WifiScanner: onFullResults
10-20 00:41:00.727 21104 20147 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:41:00.765 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:00.770 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:00.770 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:00.770 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:00.772 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:00.772 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:00.773 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:00.787 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:41:01.189 21104 21104 I NearbyDiscovery: (REDACTED) FastPairDisplayObserver: %s -> %s
10-20 00:41:02.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:02.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:02.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:02.511 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:02.512 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:02.514 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:03.408 21104 21104 I NearbyDiscovery: (REDACTED) FastPairDisplayObserver: %s -> %s
10-20 00:41:03.452  1870  1928 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 230, name: com.android.systemui
10-20 00:41:03.453  1870  1928 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 236, name: com.android.systemui
10-20 00:41:03.516  1870  3777 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 394, name: com.vivo.systemuiplugin
10-20 00:41:03.522  1870  3777 D BatteryStatsService: noteVideoSurfaceChanged  noteWhich: 49,arg1: 1080, arg2: 2392, arg3: 2704, arg4: 394, name: com.vivo.systemuiplugin
10-20 00:41:03.885 21104 21104 I NearbyDiscovery: (REDACTED) FastPairDisplayObserver: %s -> %s
10-20 00:41:03.971 21104 21104 I NearbyDiscovery: (REDACTED) FastPairDisplayObserver: %s -> %s
10-20 00:41:04.318 21104 21104 I NearbyDiscovery: (REDACTED) FastPairDisplayObserver: %s -> %s
10-20 00:41:04.322 21104 16127 I NearbyDiscovery: (REDACTED) OffloadFastPairScanner: eventType=%s, isInternalReq=%s, isOffloadScanning=%s, isOffloadScanningAllowed=%s
10-20 00:41:04.323 21104 16127 I NearbyDiscovery: (REDACTED) FastPairScanner: isScreenOn=%s, isLocationEnabled=%s, disableLocationRequirement=%s, isDiscoveryScanningEnabled=%s, during24GhzWifiWarmingUpPeriod=%s
10-20 00:41:04.323 21104 16127 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:41:04.324 21104 16127 I NearbyDiscovery: (REDACTED) FastPairScanner: eventType=%s, intReq=%s, scanning=%s, scanAllowed=%s, bleEnabled=%s, lockScanRate=%s, startScanningByLowPowerMode=%s
10-20 00:41:05.712 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:41:05.721 21104 19755 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:41:05.741 21104 21119 I WifiScanner: onFullResults
10-20 00:41:05.742 21104 21142 I WifiScanner: onFullResults
10-20 00:41:05.743 21104 21143 I WifiScanner: onFullResults
10-20 00:41:05.751 21104 20009 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:41:05.785 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:05.788 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:05.788 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:05.788 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:05.789 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:05.789 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:05.790 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:05.791 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:41:07.063 21104 19720 I NearbyConnections: Invalidate cached hpkeKey for client 212363826
10-20 00:41:07.497 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:07.500 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:07.501 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:07.501 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:07.502 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:07.515 21104 19755 I SemanticLocation: [InfMgr] No location reports after filtering [CONTEXT service_id=173 ]
10-20 00:41:09.139 21104 18218 I NearbyPresence: (REDACTED) %s verified [==] new request %s equals to the old request
10-20 00:41:09.139 21104 18218 I NearbyPresence: (REDACTED) %s verified [!=] new request %s does not equal to the old request %s
10-20 00:41:09.139 21104 18218 I NearbyPresence: (REDACTED) BleAdvertiseProviderController: request.isRequested() %s
10-20 00:41:09.140 21104 18218 I NearbyPresence: (REDACTED) %s: stopping existing advertisement(s) %s,
10-20 00:41:09.355 21104 18218 I NearbyPresence: (REDACTED) %s: successfully stopped advertising
10-20 00:41:09.362 21104 20128 I NearbyPresence: (REDACTED) %s: Nearby Presence stops mac rotation scheduler.
10-20 00:41:09.390 21104 18218 W NearbyPresence: IdentityManager: there is no valid broadcast credential for Identity[type=contacts group, provider name =]. [CONTEXT service_id=317 ]
10-20 00:41:09.390 21104 18218 W NearbyPresence: IdentityManager: Returned empty metadata key. Due to missing broadcast credential. [CONTEXT service_id=317 ]
10-20 00:41:09.394 21104 18218 I fpp     : device=V2439, txOffset=0
10-20 00:41:09.395 21104 18218 I NearbyPresence: (REDACTED) %s: Creating Java V0 advertisement
10-20 00:41:09.403 21104 18218 I NearbyPresence: (REDACTED) %s: Broadcast with parameter %s
10-20 00:41:09.404 21104 18218 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:41:09.415 21104 18218 I NearbyPresence: (REDACTED) %s successfully started advertising %s
10-20 00:41:09.437 21104 18218 I fpp     : device=V2439, txOffset=0
10-20 00:41:09.438 21104 18218 I NearbyPresence: (REDACTED) %s: Creating Java V0 advertisement
10-20 00:41:09.439 21104 18218 I NearbyPresence: (REDACTED) %s: Broadcast with parameter %s
10-20 00:41:09.440 21104 18218 D BluetoothAdapter: isLeEnabled(): ON
10-20 00:41:09.451 21104 18218 I NearbyPresence: (REDACTED) %s successfully started advertising %s
10-20 00:41:09.459 21104 20128 I AlarmManager: setExactAndAllowWhileIdle [name: NearbyBleWakeup type: 0 triggerAtMillis: 1760901720459]
10-20 00:41:10.745 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:41:10.754 21104 20009 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:41:11.279 21104 22617 I WifiScanner: onFullResults
10-20 00:41:11.280 21104 21142 I WifiScanner: onFullResults
10-20 00:41:11.281 21104 22617 I WifiScanner: onFullResults
10-20 00:41:11.292 21104 19755 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:41:11.327 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:11.331 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:11.332 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:11.332 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:11.333 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:11.333 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:11.333 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:11.342 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:41:12.496 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:12.503 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:12.504 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:12.504 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:12.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:12.508 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:13.715 21163 21163 D BoundBrokerSvc: onUnbind: Intent { act=com.google.android.gms.inappreach.service.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
10-20 00:41:16.274 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:41:16.282 21104 19982 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:41:16.294 21104 22617 I WifiScanner: onFullResults
10-20 00:41:16.294 21104 21119 I WifiScanner: onFullResults
10-20 00:41:16.295 21104 21142 I WifiScanner: onFullResults
10-20 00:41:16.303 21104 20009 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:41:16.328 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:16.330 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:16.331 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:16.331 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:16.331 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:16.332 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:16.332 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:16.333 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:41:17.423 15711 15711 I TaskService: Handling intent with task name 'background-fetch-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:41:17.426 15711 15711 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:41:17.450 15711 15711 I TaskService: Handling job with task name 'background-fetch-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:41:17.454 15711 19686 I ReactNativeJS: 📍 Background fetch triggered for location update
10-20 00:41:17.522 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:17.530 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:17.530 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:17.531 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:17.532 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:17.533 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:17.540 15711 19686 I ReactNativeJS: 📤 Background location update via RPC...
10-20 00:41:17.540 15711 19686 E ReactNativeJS: ❌ Supabase credentials not configured
10-20 00:41:17.544 15711 19686 I ReactNativeJS: ✅ Background location update successful
10-20 00:41:17.547 15711 19676 I TaskService: Finished task 'background-fetch-task' with eventId '9b4b6305-a97b-4cd0-98a2-5a4f7cce0ada'.
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: ?anon_0_@1:1972482
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:41:17.556 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:41:18.506 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:18.510 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:18.511 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:18.511 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:18.512 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:18.513 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:18.513 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:21.297 21104 21188 W Settings: Setting airplane_mode_on has moved from android.provider.Settings.System to android.provider.Settings.Global, returning read-only value.
10-20 00:41:21.305 21104 19982 W SystemServiceRegistry: No service published for: wifirtt
10-20 00:41:21.817 21104 21332 I WifiScanner: onFullResults
10-20 00:41:21.818 21104 21142 I WifiScanner: onFullResults
10-20 00:41:21.819 21104 23957 I WifiScanner: onFullResults
10-20 00:41:21.828 21104 20009 I FrewleTileCacheManagerV: (REDACTED) Fetched %d AP models from cache
10-20 00:41:21.861 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:21.866 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:21.866 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:21.867 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:21.869 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:21.869 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:21.878 21104 21184 I fznc    : Received empty WiFi-RTT scan. [CONTEXT service_id=6 ]
10-20 00:41:21.941 21104 19982 I TFLite-in-PlayServices: Created interpreter.
10-20 00:41:21.970 21104 19982 I TFLite-in-PlayServices: Created interpreter.
10-20 00:41:22.001 21104 19982 I SemanticLocation: (REDACTED) [Inferrer] %s%s
10-20 00:41:23.514 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:23.514 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:23.515 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too close
10-20 00:41:23.521 21104 21184 I FusedLocation: (REDACTED) location delivery to %s blocked - too fast
10-20 00:41:23.529 15711 19686 I ReactNativeJS: '📍 5-second location watch update:', { altitude: 776.2000122070312,
10-20 00:41:23.529 15711 19686 I ReactNativeJS:   heading: 0,
10-20 00:41:23.529 15711 19686 I ReactNativeJS:   altitudeAccuracy: 61.20166778564453,
10-20 00:41:23.529 15711 19686 I ReactNativeJS:   latitude: 12.7485637,
10-20 00:41:23.529 15711 19686 I ReactNativeJS:   speed: 0.01922168955206871,
10-20 00:41:23.529 15711 19686 I ReactNativeJS:   longitude: 77.8299486,
10-20 00:41:23.529 15711 19686 I ReactNativeJS:   accuracy: 3.562999963760376 }
10-20 00:41:23.530 15711 15711 I TaskService: Handling intent with task name 'background-location-task' and app scoping identifier 'com.a1taxi.driverpro'.
10-20 00:41:23.531 15711 15711 W JobInfo : Job 'com.a1taxi.driverpro/expo.modules.taskManager.TaskJobService#0' has a deadline with no functional constraints. The deadline won't improve job execution latency. Consider removing the deadline.
10-20 00:41:23.551 15711 15711 I TaskService: Handling job with task name 'background-location-task' for app with scoping identifier 'com.a1taxi.driverpro'.
10-20 00:41:23.557 15711 19686 I ReactNativeJS: '📍 Background location update:', [ { timestamp: 1760901083436,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:     mocked: false,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:     coords: 
10-20 00:41:23.557 15711 19686 I ReactNativeJS:      { altitude: 776.2000122070312,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:        heading: 0,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:        altitudeAccuracy: 61.20166778564453,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:        latitude: 12.7485637,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:        speed: 0.01922168955206871,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:        longitude: 77.8299486,
10-20 00:41:23.557 15711 19686 I ReactNativeJS:        accuracy: 3.562999963760376 } } ]
10-20 00:41:23.567 15711 19686 I ReactNativeJS: 📤 Background location update via RPC...
10-20 00:41:23.567 15711 19686 E ReactNativeJS: ❌ Supabase credentials not configured
10-20 00:41:23.570 15711 19676 I TaskService: Finished task 'background-location-task' with eventId '17b3960c-41a9-4a37-9a1d-11738c5c56a0'.
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: console.error: ❌ Supabase credentials not configured, js engine: hermes, stack:
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: _construct@1:117842
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: Wrapper@1:117496
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: _callSuper@1:115478
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: SyntheticError@1:116983
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: reactConsoleErrorHandler@1:116629
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: ?anon_0_@1:1972482
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: asyncGeneratorStep@1:573256
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: _next@1:573513
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: anonymous@1:136226
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: _callTimer@1:135225
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: _callReactNativeMicrotasksPass@1:135369
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: callReactNativeMicrotasks@1:137289
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: __callReactNativeMicrotasks@1:101038
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: anonymous@1:100174
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: __guard@1:100912
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: flushedQueue@1:100085
10-20 00:41:23.574 15711 19687 E unknown:ReactNative: invokeCallbackAndReturnFlushedQueue@1:100028
10-20 00:41:24.046 15711 19686 I ReactNativeJS: === SENDING LOCATION TO EDGE FUNCTION ===
10-20 00:41:24.047 15711 19686 I ReactNativeJS: 'Driver User ID:', '6c03a657-c3e4-466e-b49c-324c2d051ce9'
10-20 00:41:24.048 15711 19686 I ReactNativeJS: 'Location:', { latitude: 12.7485637,
10-20 00:41:24.048 15711 19686 I ReactNativeJS:   longitude: 77.8299486,
10-20 00:41:24.048 15711 19686 I ReactNativeJS:   accuracy: 3.562999963760376 }
10-20 00:41:24.049 15711 19686 I ReactNativeJS: 📤 Updating location via RPC...
10-20 00:41:24.648 15711 19686 I ReactNativeJS: '✅ Location', 'updated', 'successfully via RPC'
