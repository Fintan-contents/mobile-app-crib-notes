/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {forwardRef} from 'react';
import RNMMapView, {MapViewProps as RNMMapViewProps, PROVIDER_DEFAULT} from 'react-native-maps';

// 現状の設定ではiOSでGoogle Mapsを使用できないため
// providerをデフォルト（AndroidはGoogle Maps、iOSはMapKit）に固定する。
const provider = PROVIDER_DEFAULT;

// Propsを削除する。
// providerとshowsUserLocationは固定したため削除する。
// paddingAdjustmentBehaviorとzoomTapEnabledは、iOSのGoogle Mapsでのみ指定するPropsのため削除する。
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
