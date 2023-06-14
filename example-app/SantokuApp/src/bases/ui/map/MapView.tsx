import React, {forwardRef} from 'react';
import RNMMapView, {MapViewProps as RNMMapViewProps, PROVIDER_DEFAULT} from 'react-native-maps';

// 現状の設定ではiOSでGoogleマップを使用できないため
// providerをデフォルト（AndroidはGoogleマップ、iOSはMapKit）に固定する。
const provider = PROVIDER_DEFAULT;

// Propsを削除する。
// providerとshowsUserLocationは固定したため削除する。
// paddingAdjustmentBehaviorとzoomTapEnabledは、iOSのGoogle Mapでのみ指定するPropsのため削除する。
// userLocationに関わるPropsは、showsUserLocationがtrueのときに反映されるので削除する。
export type MapViewProps = Omit<
  RNMMapViewProps,
  | 'provider'
  | 'showsUserLocation'
  | 'paddingAdjustmentBehavior'
  | 'zoomTapEnabled'
  | 'followsUserLocation'
  | 'userLocationPriority'
  | 'userLocationUpdateInterval'
  | 'userLocationFastestInterval'
  | 'userLocationAnnotationTitle'
  | 'userLocationCalloutEnabled'
  | 'showsMyLocationButton'
>;

export interface MapViewRef extends RNMMapView {}

export const MapView = forwardRef<RNMMapView, MapViewProps>(function MapView(props, ref) {
  return <RNMMapView provider={provider} showsUserLocation={false} {...props} ref={ref} />;
});
