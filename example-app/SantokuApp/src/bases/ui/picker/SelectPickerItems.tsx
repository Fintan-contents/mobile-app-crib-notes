import {PickerProps} from '@react-native-picker/picker';
import {log} from 'bases/logging';
import React from 'react';
import {Platform, StyleProp, TextStyle} from 'react-native';

import {Item} from './SelectPicker';

export type SelectPickerItemsProps<ItemT> = Omit<
  PickerProps<React.Key | ItemT>,
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

export const SelectPickerItems = <ItemT extends unknown>(props: SelectPickerItemsProps<ItemT>) => {
  React.useEffect(() => {
    log.warn(`SelectPickerItems is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
