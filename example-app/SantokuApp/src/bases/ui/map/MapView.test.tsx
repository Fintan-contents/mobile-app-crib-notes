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

import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {createRef} from 'react';
import RNMMapView, {MapViewProps as RNMMapViewProps} from 'react-native-maps';

import {MapView, MapViewProps} from './MapView';

describe('MapView without props', () => {
  // 必須のPropsはないためPropsなしでレンダリングをテストする
  it('renders successfully without props', () => {
    render(<MapView testID="MapView" />);
    const mapView = screen.queryByTestId('MapView');
    expect(mapView).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});

describe('MapView with required props for display', () => {
  // 画面上に地図を表示できる最低限のPropsでレンダリングをテストする
  it('renders successfully with props for display', () => {
    render(<MapView style={{height: 300, width: 300}} testID="MapView" />);
    const mapView = screen.queryByTestId('MapView');
    expect(mapView).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});

describe('MapView with fixed props', () => {
  // 共通部品として値を指定したPropsを確認する
  it('should be fixed properly', () => {
    // PROVIDERがundefinedになっているか確認
    render(<MapView style={{height: 300, width: 300}} testID="MapView" />);
    const mapView = screen.getByTestId('MapView');
    const mapViewProps = mapView.props as RNMMapViewProps;
    expect(mapViewProps.provider).toBeUndefined();
    // showsUserLocationがfalseになっているか確認
    expect(mapViewProps.showsUserLocation).toEqual(false);
  });
});

describe('MapView with committed props', () => {
  // 共通部品作成でOmitしなかったPropsから型違いでピックアップし確認する
  it('should be applied properly', () => {
    render(
      <MapView
        region={{
          latitude: 34.7024898,
          longitude: 135.494,
          latitudeDelta: 0.005,
          longitudeDelta: 0.002,
        }}
        scrollEnabled={false}
        liteMode
        userInterfaceStyle="dark"
        style={{height: 300, width: 300}}
        customMapStyle={[
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f5f5',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd',
              },
            ],
          },
          {
            featureType: 'administrative.neighborhood',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'poi.business',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dadada',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            featureType: 'road.local',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5',
              },
            ],
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c9c9c9',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
        ]}
        testID="MapView"
      />,
    );
    const mapView = screen.getByTestId('MapView');
    const mapViewProps = mapView.props as MapViewProps;

    // Propsが指定できるか確認（オブジェクト）
    expect(mapViewProps.region).toEqual({
      latitude: 34.7024898,
      longitude: 135.494,
      latitudeDelta: 0.005,
      longitudeDelta: 0.002,
    });
    // Propsが指定できるか確認（プリミティブ型）
    expect(mapViewProps.scrollEnabled).toEqual(false);
    // Propsが指定できるか確認（配列）
    expect(mapViewProps.customMapStyle).toEqual([
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5',
          },
        ],
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161',
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f5f5',
          },
        ],
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd',
          },
        ],
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575',
          },
        ],
      },
      {
        featureType: 'poi.business',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dadada',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161',
          },
        ],
      },
      {
        featureType: 'road.local',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5',
          },
        ],
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#c9c9c9',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
    ]);

    // iOS限定のPropsが指定できているか確認
    expect(mapViewProps.userInterfaceStyle).toEqual('dark');
    // Android限定のPropsが指定できているか確認
    expect(mapViewProps.liteMode).toEqual(true);
  });
});

describe('MapView with ref', () => {
  // refが定義されているか確認する
  it('should be defined', () => {
    const mapViewRef = createRef<RNMMapView>();
    render(
      <MapView
        region={{
          latitude: 35,
          longitude: 134,
          latitudeDelta: 0.005,
          longitudeDelta: 0.002,
        }}
        ref={mapViewRef}
      />,
    );
    expect(mapViewRef.current).toBeDefined();
  });
});
