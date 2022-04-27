import {render} from '@testing-library/react-native';
import React from 'react';
import {TextInputProps, View} from 'react-native';

import {SelectPicker} from './SelectPicker.android';
import {SelectPickerItemsProps} from './SelectPickerItems';

describe('SelectPicker only with required props', () => {
  it('renders successfully', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const sut = render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        textInputProps={{testID: 'textInput'}}
        pickerProps={{testID: 'picker'}}
      />,
    );

    expect(sut).toMatchSnapshot('SelectPicker  only with required props.');

    const picker = sut.queryByTestId('picker');
    const textInput = sut.queryByTestId('textInput');
    expect(picker).not.toBeNull();
    expect(textInput).not.toBeNull();
  });
});

describe('SelectPicker with all props', () => {
  it('should be applied all properly with default xxx component', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const onSelectedItemChange = jest.fn();
    const onDone = jest.fn();
    const keyExtractor = jest.fn((value: string, index: number) => `${value}-${index}`);
    /**
     * onDoneは自動テストではイベント発火できませんでした
     */
    const sut = render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        onSelectedItemChange={onSelectedItemChange}
        placeholder="please select..."
        keyExtractor={keyExtractor}
        textInputProps={{style: {color: 'red'}, testID: 'textInput'}}
        pickerProps={{numberOfLines: 5, testID: 'picker'}}
        onDone={onDone}
      />,
    );
    expect(sut).toMatchSnapshot('SelectPicker all properly with default xxx component.');

    // assert PickerItems
    const picker = sut.getByTestId('picker');
    const pickerProps = picker.props as SelectPickerItemsProps<string>;
    expect(pickerProps.numberOfLines).toBe(5);
    expect(pickerProps.items.length).toBe(2);

    // assert textInput
    const textInput = sut.getByTestId('textInput');
    const textInputProps = textInput.props as TextInputProps;
    expect(textInputProps.style).toEqual({color: 'red'});
    expect(keyExtractor).toHaveBeenNthCalledWith(1, '1', 0);
    expect(keyExtractor).toHaveBeenNthCalledWith(2, '2', 1);
  });

  it('should be applied all properly with custom xxx component', () => {
    const CustomTextInput = <View testID="customTextInput" />;
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const onSelectedItemChange = jest.fn();
    const sut = render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        onSelectedItemChange={onSelectedItemChange}
        placeholder="please select..."
        textInputProps={{testID: 'defaultTextInput'}}
        pickerProps={{numberOfLines: 5, testID: 'picker'}}
        textInputComponent={CustomTextInput}
      />,
    );
    expect(sut).toMatchSnapshot('SelectPicker all properly with custom xxx component.');

    // assert PickerItems
    const picker = sut.getByTestId('picker');
    const pickerProps = picker.props as SelectPickerItemsProps<string>;
    expect(pickerProps.numberOfLines).toBe(5);
    expect(pickerProps.items.length).toBe(2);

    // assert textInput
    const defaultTextInput = sut.queryByTestId('defaultTextInput');
    const customTextInput = sut.queryByTestId('customTextInput');
    expect(defaultTextInput).toBeNull();
    expect(customTextInput).not.toBeNull();
  });
});
