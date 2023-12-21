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

import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';

import {IconButton} from './IconButton';

describe('IconButton', () => {
  it('IconButtonが正常にrenderできることを確認', () => {
    render(<IconButton name="close" />);
    expect(screen).toMatchSnapshot();
  });

  it('IconButtonのプレス時にコールバックが実行されることを確認', () => {
    const handlePress = jest.fn();
    render(<IconButton testID="IconButton" onPress={handlePress} name="close" />);
    fireEvent.press(screen.getByTestId('IconButtonTouchableOpacity'));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
