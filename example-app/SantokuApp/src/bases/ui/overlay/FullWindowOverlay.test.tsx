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

import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {FullWindowOverlay} from './FullWindowOverlay';

const ChildComponent = () => {
  return <Text testID="text">test</Text>;
};

describe('FullWindowOverlay', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  it('iOS環境で子要素を含めて正常にrenderできることを確認', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'ios',
    }));

    render(
      <FullWindowOverlay>
        <ChildComponent />
      </FullWindowOverlay>,
    );
    expect(screen.queryByTestId('FullWindowOverlay')).not.toBeNull();
    expect(screen.queryByTestId('text')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('Android環境で子要素を含めて正常にrenderできることを確認', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
    }));

    render(
      <FullWindowOverlay>
        <ChildComponent />
      </FullWindowOverlay>,
    );
    expect(screen.queryByTestId('FullWindowOverlay')).toBeNull();
    expect(screen.queryByTestId('text')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
