import {render} from '@testing-library/react-native';
import React from 'react';

import {DateTimePicker} from './DateTimePicker.android';

// DateTimePickerAndroidを使用した場合、自動テストではDateTimePickerAndroid.openを実行しても何もレンダリングされないため、
// 自動テストではopenする前の初期表示のみテスト対象とする
describe('DateTimePicker only with required props', () => {
  it('renders successfully if invisible', () => {
    const sut = render(
      <DateTimePicker textInputProps={{testID: 'textInput'}} pickerItemsProps={{testID: 'pickerItems'}} />,
    );

    expect(sut).toMatchSnapshot('DateTimePicker if invisible.');

    const textInput = sut.queryByTestId('textInput');
    const pickerItems = sut.queryByTestId('pickerItems');
    expect(textInput).not.toBeNull();
    expect(pickerItems).toBeNull();
  });
});
