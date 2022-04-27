import {Picker, PickerProps} from '@react-native-picker/picker';
import React from 'react';

import {Item} from './SelectPicker';

export type SelectPickerItemsProps<ItemT> = PickerProps<React.Key> & {
  items: Item<ItemT>[];
  keyExtractor?: ((item: ItemT, index: number) => React.Key) | undefined;
};

export const SelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  ...rest
}: SelectPickerItemsProps<ItemT>) => {
  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange} {...rest}>
      {items.map((item, index) => (
        <Picker.Item
          key={keyExtractor ? keyExtractor(item.value, index) : item.key ?? item.label}
          label={item.label}
          value={item.key ?? item.value}
          color={item.color}
          fontFamily={item.fontFamily}
          style={item.style}
        />
      ))}
    </Picker>
  );
};
