import {Picker} from '@react-native-picker/picker';
import React from 'react';

import {SelectPickerItemsProps} from './SelectPickerItems';

type SelectPickerItemsIOS<ItemT> = Omit<
  SelectPickerItemsProps<ItemT>,
  | 'itemHeight'
  | 'activeColor'
  | 'inactiveColor'
  | 'flatListTestID'
  | 'separatorTestID'
  | 'itemPressableTestIDPrefix'
  | 'itemTextTestIDPrefix'
>;

export const SelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  ...rest
}: SelectPickerItemsIOS<ItemT>) => {
  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange} {...rest}>
      {items.map((item, index) => (
        <Picker.Item
          key={keyExtractor ? keyExtractor(item, index) : item.key ?? item.label}
          label={item.label}
          value={item.key ?? item.value}
          color={item.color}
          fontFamily={item.fontFamily}
        />
      ))}
    </Picker>
  );
};
