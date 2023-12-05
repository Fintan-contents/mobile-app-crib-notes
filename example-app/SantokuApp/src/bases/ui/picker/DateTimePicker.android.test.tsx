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

import {DateTimePicker} from './DateTimePicker.android';

// DateTimePickerAndroidを使用した場合、自動テストではDateTimePickerAndroid.openを実行しても何もレンダリングされないため、
// 自動テストではopenする前の初期表示のみテスト対象とする
describe('DateTimePicker only with required props', () => {
  it('renders successfully if invisible', () => {
    render(<DateTimePicker textInputProps={{testID: 'textInput'}} pickerItemsProps={{testID: 'pickerItems'}} />);

    expect(screen).toMatchSnapshot('DateTimePicker if invisible.');

    const textInput = screen.queryByTestId('textInput');
    const pickerItems = screen.queryByTestId('pickerItems');
    expect(textInput).not.toBeNull();
    expect(pickerItems).toBeNull();
  });
});
