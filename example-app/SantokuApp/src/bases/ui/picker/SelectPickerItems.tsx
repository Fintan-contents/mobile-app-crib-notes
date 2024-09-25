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

import {PickerProps} from '@react-native-picker/picker';
import {log} from 'bases/logging';
import React from 'react';
import {Platform, StyleProp, TextStyle} from 'react-native';

import {Item, ItemSelectionKey} from './SelectPicker';

export type SelectPickerItemsProps<ItemT> = Omit<
  PickerProps<ItemSelectionKey | ItemT>,
  'enabled' | 'mode' | 'prompt' | 'dropdownIconColor' | 'dropdownIconRippleColor' | 'onFocus' | 'onBlur' | 'style'
> & {
  items: Item<ItemT>[];
  keyExtractor?: ((item: Item<ItemT>, index: number) => string) | undefined;
  /**
   * Pickerのスタイル
   * @platform ios
   */
  style?: StyleProp<TextStyle>;
  /**
   * アイテムの高さ
   * @platform android
   */
  itemHeight?: number;
  /**
   * 選択状態のアイテムのテキストカラー
   * @platform android
   */
  activeColor?: string;
  /**
   * 未選択状態のアイテムのテキストカラー
   * @platform android
   */
  inactiveColor?: string;
  /**
   * FlatListのtestID
   * @platform android
   */
  flatListTestID?: string;
  /**
   * SeparatorのtestID
   * @platform android
   */
  separatorTestID?: string;
  /**
   * SelectPickerItemのPressableのtestIDプレフィックス
   * @platform android
   */
  itemPressableTestIDPrefix?: string;
  /**
   * SelectPickerItemのTextのtestIDプレフィックス
   * @platform android
   */
  itemTextTestIDPrefix?: string;
};

export const SelectPickerItems = <ItemT,>(props: SelectPickerItemsProps<ItemT>) => {
  React.useEffect(() => {
    log.warn(`SelectPickerItems is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
