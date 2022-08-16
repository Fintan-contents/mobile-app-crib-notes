import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';

import {Item} from './SelectPicker';
import {SelectPickerItemsProps} from './SelectPickerItems';
import {SelectPickerItems} from './SelectPickerItems.ios';

describe('SelectPickerItems only with required props', () => {
  it('renders successfully with more than one item', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    render(<SelectPickerItems selectedValue="1" items={items} testID="SelectPickerItems" />);
    const selectPickerItems = screen.queryByTestId('SelectPickerItems');
    expect(screen).toMatchSnapshot('SelectPickerItems with more than one item.');
    expect(selectPickerItems).not.toBeNull();
  });

  it('renders successfully if item does not exit', () => {
    render(<SelectPickerItems selectedValue="1" items={[]} testID="SelectPickerItems" />);
    const selectPickerItems = screen.queryByTestId('SelectPickerItems');
    expect(screen).toMatchSnapshot('SelectPickerItems without item.');
    expect(selectPickerItems).not.toBeNull();
  });
});

describe('SelectPickerItems with all props', () => {
  it('should be applied properly', () => {
    const items = [
      {value: '1', label: 'test1', key: 'key1', color: 'red', fontFamily: 'Roboto'},
      {value: '2', label: 'test2', color: 'yellow', fontFamily: 'SFProText'},
    ];
    const onValueChange = jest.fn();
    const keyExtractor = jest.fn((item: Item<string>, index: number) => `${item.value}-${index}`);
    /**
     * 以下のPropは自動テストで検証できなかったため除外
     * - style
     * - itemStyle
     * - accessibilityLabel
     */
    render(
      <SelectPickerItems
        selectedValue="2"
        items={items}
        onValueChange={onValueChange}
        numberOfLines={5}
        keyExtractor={keyExtractor}
        testID="SelectPickerItems"
      />,
    );
    expect(screen).toMatchSnapshot('SelectPickerItems with all props.');
    const selectPickerItems = screen.getByTestId('SelectPickerItems');

    fireEvent(selectPickerItems, 'onValueChange');

    const selectPickerItemsProps = selectPickerItems.props as SelectPickerItemsProps<string>;
    const selectedIndex = selectPickerItems.props.selectedIndex as number;
    expect(selectedIndex).toBe(1);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(selectPickerItemsProps.items.length).toBe(2);
    expect(onValueChange).toHaveBeenCalled();
    expect(selectPickerItemsProps.numberOfLines).toBe(5);
    expect(keyExtractor).toHaveBeenNthCalledWith(
      1,
      {value: '1', label: 'test1', key: 'key1', color: 'red', fontFamily: 'Roboto'},
      0,
    );
    expect(keyExtractor).toHaveBeenNthCalledWith(
      2,
      {value: '2', label: 'test2', color: 'yellow', fontFamily: 'SFProText'},
      1,
    );
  });
});
