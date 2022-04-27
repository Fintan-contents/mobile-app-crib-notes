import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {SelectPickerItems, SelectPickerItemsProps} from './SelectPickerItems';

describe('SelectPickerItems only with required props', () => {
  it('renders successfully with more than one item', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const sut = render(<SelectPickerItems selectedValue="1" items={items} testID="SelectPickerItems" />);
    const selectPickerItems = sut.queryByTestId('SelectPickerItems');
    expect(sut).toMatchSnapshot('SelectPickerItems with more than one item.');
    expect(selectPickerItems).not.toBeNull();
  });

  it('renders successfully if item does not exit', () => {
    const sut = render(<SelectPickerItems selectedValue="1" items={[]} testID="SelectPickerItems" />);
    const selectPickerItems = sut.queryByTestId('SelectPickerItems');
    expect(sut).toMatchSnapshot('SelectPickerItems without item.');
    expect(selectPickerItems).not.toBeNull();
  });
});

describe('SelectPickerItems with all props', () => {
  it('should be applied properly', () => {
    const items = [
      {value: '1', label: 'test1', key: 'key1', color: 'red', fontFamily: 'Roboto', style: {fontSize: 12}},
      {value: '2', label: 'test2', color: 'yellow', fontFamily: 'SFProText', style: {fontSize: 14}},
    ];
    const onValueChange = jest.fn();
    const keyExtractor = jest.fn((value: string, index: number) => `${value}-${index}`);
    /**
     * 以下のPropは自動テストで検証できなかったため除外
     * - style
     */
    const sut = render(
      <SelectPickerItems
        selectedValue="2"
        items={items}
        onValueChange={onValueChange}
        numberOfLines={5}
        keyExtractor={keyExtractor}
        testID="SelectPickerItems"
      />,
    );
    expect(sut).toMatchSnapshot('SelectPickerItems with all props.');
    const selectPickerItems = sut.getByTestId('SelectPickerItems');

    fireEvent(selectPickerItems, 'onValueChange');

    const selectPickerItemsProps = selectPickerItems.props as SelectPickerItemsProps<string>;
    const selectedIndex = selectPickerItems.props.selectedIndex as number;
    expect(selectedIndex).toBe(1);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(selectPickerItemsProps.items.length).toBe(2);
    expect(onValueChange).toHaveBeenCalled();
    expect(selectPickerItemsProps.numberOfLines).toBe(5);
    expect(keyExtractor).toHaveBeenNthCalledWith(1, '1', 0);
    expect(keyExtractor).toHaveBeenNthCalledWith(2, '2', 1);
  });
});
