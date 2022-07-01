import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {FlatListProps, PressableProps, TextProps, ViewProps} from 'react-native';

import {Item} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems.android';

jest.useFakeTimers(); // jest.useFakeTimers('legacy') for jest >= 27
// call animation
jest.runAllTimers();

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
      {value: '3', label: 'test3'},
      {value: '4', label: 'test4'},
      {value: '5', label: 'test5'},
      {value: '6', label: 'test6'},
    ];
    const onValueChange = jest.fn();
    const keyExtractor = jest.fn((item: Item<string>, index: number) => `${item.value}-${index}`);
    const layoutMeasurement = {height: 300};
    const contentSize = {height: 300};
    /**
     * 以下のPropは自動テストで検証できなかったため除外
     * - style
     * - itemStyle
     * - accessibilityLabel
     */
    render(
      <SelectPickerItems
        selectedValue="1"
        items={items}
        onValueChange={onValueChange}
        numberOfLines={5}
        keyExtractor={keyExtractor}
        testID="SelectPickerItems"
        itemStyle={{fontSize: 24, fontFamily: 'test-font-Regular', color: 'yellow'}}
        accessibilityLabel="testAccessibilityLabel"
        activeColor="#424242"
        inactiveColor="#565656"
        itemHeight={60}
        flatListTestID="FlatList"
        separatorTestID="Separator"
        itemPressableTestIDPrefix="itemPressable"
        itemTextTestIDPrefix="itemText"
      />,
    );
    expect(screen).toMatchSnapshot('SelectPickerItems with all props.');

    // assert selectPickerItem
    const item1Pressable = screen.getByTestId('itemPressable-1');
    const item1PressableProps = item1Pressable.props as PressableProps;
    expect(item1PressableProps.accessibilityLabel).toBe('testAccessibilityLabel');
    expect(item1PressableProps.style).toEqual({height: 60, alignItems: 'center', justifyContent: 'center'});

    const item1Text = screen.getByTestId('itemText-0');
    const item1TextProps = item1Text.props as TextProps;
    expect(item1TextProps.style).toEqual({fontSize: 24, fontFamily: 'Roboto', color: 'red'});

    const item3Text = screen.getByTestId('itemText-2');
    const item3TextProps = item3Text.props as TextProps;
    expect(item3TextProps.style).toEqual({fontSize: 24, fontFamily: 'test-font-Regular', color: 'yellow'});

    // assert flatList
    const flatList = screen.getByTestId('FlatList');
    const flatListProps = flatList.props as FlatListProps<Item<string>>;
    expect(flatListProps.initialScrollIndex).toBe(0);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(flatListProps.data?.length).toBe(6);
    expect(flatListProps.data).toEqual([
      {value: '1', label: 'test1', key: 'key1', color: 'red', fontFamily: 'Roboto'},
      {value: '2', label: 'test2', color: 'yellow', fontFamily: 'SFProText'},
      {value: '3', label: 'test3'},
      {value: '4', label: 'test4'},
      {value: '5', label: 'test5'},
      {value: '6', label: 'test6'},
    ]);
    fireEvent(flatList, 'onMomentumScrollBegin');
    fireEvent(flatList, 'onMomentumScrollEnd', {
      nativeEvent: {contentOffset: {y: 180}, layoutMeasurement, contentSize},
    });
    expect(onValueChange).toHaveBeenCalled();
    expect(flatListProps.style).toEqual({height: 300, width: '100%'});
    expect(flatListProps.contentContainerStyle).toEqual({paddingVertical: 120});
    expect(flatListProps.snapToInterval).toBe(60);
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

    // assert separator
    const separator = screen.getByTestId('Separator');
    const separatorProps = separator.props as ViewProps;
    expect(separatorProps.style).toEqual({
      position: 'absolute',
      borderRadius: 8,
      backgroundColor: 'rgba(0,0,0,0.06)',
      width: '95%',
      borderColor: 'grey',
      height: 60,
    });
  });
});
