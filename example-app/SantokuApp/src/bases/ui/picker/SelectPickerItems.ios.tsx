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

export const SelectPickerItems = <ItemT,>({
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
          key={keyExtractor ? keyExtractor(item, index) : (item.key ?? item.label)}
          label={item.label}
          value={item.key ?? item.value}
          color={item.color}
          fontFamily={item.fontFamily}
        />
      ))}
    </Picker>
  );
};
