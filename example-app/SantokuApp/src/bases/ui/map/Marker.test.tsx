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
import beginnerMarkImageSource from 'assets/images/beginner-mark.png';

import {Marker, MarkerProps} from './Marker';

describe('Marker only with required props', () => {
  // 必須のPropsでレンダリングをテストする
  it('renders successfully only with required props', () => {
    render(<Marker coordinate={{latitude: 34.7024898, longitude: 135.494}} testID="Marker" />);
    const marker = screen.queryByTestId('Marker');
    expect(marker).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});

describe('Marker with committed props', () => {
  // 共通部品作成でOmitしなかったPropsから型違いでピックアップし確認する
  it('should be applied properly', () => {
    const img = beginnerMarkImageSource as number;
    render(
      <Marker
        coordinate={{latitude: 34.7024898, longitude: 135.494}}
        draggable
        stopPropagation
        image={img}
        testID="Marker"
      />,
    );
    const marker = screen.getByTestId('Marker');

    expect(marker).not.toBeNull();
    expect(screen).toMatchSnapshot();

    const markerProps = marker.props as MarkerProps;

    // Propsが指定できるか確認（オブジェクト）
    expect(markerProps.coordinate).toEqual({
      latitude: 34.7024898,
      longitude: 135.494,
    });
    // Propsが指定できるか確認（プリミティブ型）
    expect(markerProps.draggable).toEqual(true);
    // Propsが指定できるか確認（画像）
    expect(markerProps.image).toEqual(img);
    // 配列で指定するPropsはないためテストしない

    // iOS限定のPropsが指定できているか確認
    expect(markerProps.stopPropagation).toEqual(true);
    // Android限定のPropsは存在しないのでテストしない
  });
});
