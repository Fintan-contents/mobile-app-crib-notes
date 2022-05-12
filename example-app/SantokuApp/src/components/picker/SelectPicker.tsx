import {PickerProps} from '@react-native-picker/picker';
import {log} from 'framework/logging';
import React from 'react';
import {Platform, StyleProp, TextStyle, TextInputProps as RNETextInputProps, ViewProps} from 'react-native';

import {DefaultPickerAccessoryProps} from './DefaultPickerAccessory';
import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';

export type Item<T> = {
  label: string;
  value: T;
  inputLabel?: string;
  key?: React.Key;
  color?: string;
  fontFamily?: string;
  /**
   * アイテムに指定するスタイル
   * 以下のプロパティのみ使用できます。
   * - 'color'
   * - 'backgroundColor'
   * - 'fontSize'
   * - 'fontFamily'
   *
   * @platform android
   */
  style?: StyleProp<Pick<TextStyle, 'color' | 'backgroundColor' | 'fontSize' | 'fontFamily'>>;
};

type TextInputProps = Omit<RNETextInputProps, 'value' | 'editable'>;
export type SelectPickerProps<ItemT> = {
  /**
   * SelectPickerに表示するアイテム
   */
  items: Item<ItemT>[];
  /**
   * 選択されたアイテムのKey
   */
  selectedItemKey?: React.Key;
  /**
   * アイテムが選択された場合に呼び出される関数
   */
  onSelectedItemChange?: (selectedItem?: Item<ItemT>) => void;
  /**
   * PickerBackdropをタップして閉じた場合に呼び出される関数
   *
   * @platform ios
   */
  onDismiss?: (selectedItem?: Item<ItemT>) => void;
  /**
   * DeleteLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   *
   * @platform ios
   */
  onDelete?: (selectedItem?: Item<ItemT>) => void;
  /**
   * CancelLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   *
   * @platform ios
   */
  onCancel?: (selectedItem?: Item<ItemT>) => void;
  /**
   * [iOS]
   * DoneLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   *
   * [Android]
   * アイテムが選択された場合に呼び出される関数
   */
  onDone?: (selectedItem?: Item<ItemT>) => void;
  /**
   * プレースホルダ
   */
  placeholder?: string;
  /**
   * ヘッダコンポーネント
   * 指定しない場合は、PickerAccessoryがデフォルトで表示されます。
   *
   * @platform ios
   */
  pickerAccessoryComponent?: React.ReactNode;
  /**
   * Pickerコンポーネント
   * 指定しない場合は、SelectPickerItemsがデフォルトで表示されます。
   */
  pickerItemsComponent?: React.ReactNode;
  /**
   * 選択されたアイテムを表示するテキストコンポーネント
   */
  textInputComponent?: React.ReactNode;
  /**
   * Keyを作成する関数
   */
  keyExtractor?: ((item: ItemT, index: number) => React.Key) | undefined;
  /**
   * 選択されたアイテムを表示するテキストコンポーネントのProps
   * なお、textInputComponentを指定した場合は使用されません。
   */
  textInputProps?: TextInputProps;
  /**
   * Pickerコンポーネントを囲むContainerのProps
   *
   * @platform ios
   */
  pickerItemsContainerProps?: ViewProps;
  /**
   * PickerのProps
   * なお、pickerItemsComponentを指定した場合は使用されません。
   */
  pickerProps?: Omit<PickerProps<ItemT>, 'selectedValue' | 'onValueChange'>;
  /**
   * PickerBackdropのProps
   *
   * @platform ios
   */
  pickerBackdropProps?: Omit<PickerBackdropProps, 'isVisible' | 'onPress'>;
  /**
   * PickerContainerのProps
   *
   * @platform ios
   */
  pickerContainerProps?: Omit<PickerContainerProps, 'isVisible'>;
  /**
   * PickerAccessoryのProps
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   *
   * @platform ios
   */
  pickerAccessoryProps?: Omit<DefaultPickerAccessoryProps, 'onDelete' | 'onCancel' | 'onDone'>;
};

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerProps<ItemT>) => {
  React.useEffect(() => {
    log.warn(`SelectPicker is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
