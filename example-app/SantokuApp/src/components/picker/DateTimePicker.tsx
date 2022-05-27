import {log} from 'framework/logging';
import React from 'react';
import {Platform, TextInputProps as RNETextInputProps, ViewProps} from 'react-native';

import {DateTimePickerItemsProps} from './DateTimePickerItems';
import {DefaultPickerAccessoryProps} from './DefaultPickerAccessory';
import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';

type TextInputProps = Omit<RNETextInputProps, 'value' | 'editable'>;

export type DateTimePickerProps = {
  /**
   * 選択されたアイテムのKey
   */
  selectedValue?: Date;
  /**
   * 選択されたアイテムが存在しない場合のデフォルト値
   */
  defaultValue?: Date;
  /**
   * アイテムが選択された場合に呼び出される関数
   */
  onSelectedItemChange?: (date?: Date) => void;
  /**
   * PickerBackdropをタップして閉じた場合に呼び出される関数
   */
  onDismiss?: (date?: Date) => void;
  /**
   * DeleteLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  onDelete?: (date?: Date) => void;
  /**
   * CancelLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  onCancel?: (date?: Date) => void;
  /**
   * DoneLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  onDone?: (date?: Date) => void;
  /**
   * 選択した日時のフォーマッタ
   */
  formatText?: (date?: Date) => string | undefined;
  /**
   * 選択可能な最大日時
   * @see https://github.com/react-native-datetimepicker/datetimepicker#maximumdate-optional
   */
  maximumDate?: Date;
  /**
   * 選択可能な最小日時
   * @see https://github.com/react-native-datetimepicker/datetimepicker#minimumdate-optional
   */
  minimumDate?: Date;
  /**
   * 時刻の表示を24時間表記にするかどうか
   * @see https://github.com/react-native-datetimepicker/datetimepicker#is24hour-optional-windows-and-android-only
   */
  is24Hour?: boolean;
  /**
   * Pickerのモード
   * @see https://github.com/react-native-datetimepicker/datetimepicker#mode-optional
   */
  mode?: DateTimePickerItemsProps['mode'];
  /**
   * Pickerの表示方法
   * このコンポーネントでは、spinnerとinlineのみ使用できます。
   * @see https://github.com/react-native-datetimepicker/datetimepicker#display-optional
   * @platform ios
   */
  displayIOS?: Exclude<DateTimePickerItemsProps['display'], 'clock' | 'calendar' | 'compact' | 'default'>;
  /**
   * Pickerの表示方法
   * @see https://github.com/react-native-datetimepicker/datetimepicker#display-optional
   * @platform android
   */
  displayAndroid?: Exclude<DateTimePickerItemsProps['display'], 'compact' | 'inline'>;
  /**
   * プレースホルダ
   */
  placeholder?: string;
  /**
   * ヘッダコンポーネント
   * 指定しない場合は、{@link DefaultPickerAccessory}がデフォルトで表示されます。
   */
  pickerAccessoryComponent?: React.ReactNode;
  /**
   * Pickerコンポーネント
   * 指定しない場合は、{@link SelectPickerItems}がデフォルトで表示されます。
   */
  pickerItemsComponent?: React.ReactNode;
  /**
   * 選択されたアイテムを表示するテキストコンポーネント
   */
  textInputComponent?: React.ReactNode;
  /**
   * 選択されたアイテムを表示するテキストコンポーネントのProps
   * なお、textInputComponentを指定した場合は使用されません。
   */
  textInputProps?: TextInputProps;
  /**
   * Pickerコンポーネントを囲むContainerのProps
   */
  pickerItemsContainerProps?: ViewProps;
  /**
   * PickerのProps
   * なお、pickerItemsComponentを指定した場合は使用されません。
   * @see https://github.com/react-native-datetimepicker/datetimepicker#component-props--params-of-the-android-imperative-api
   */
  pickerItemsProps?: Omit<
    DateTimePickerItemsProps,
    'value' | 'onChange' | 'mode' | 'display' | 'maximumDate' | 'minimumDate'
  >;
  /**
   * PickerBackdropのProps
   */
  pickerBackdropProps?: Omit<PickerBackdropProps, 'isVisible' | 'onPress'>;
  /**
   * PickerContainerのProps
   */
  pickerContainerProps?: Omit<PickerContainerProps, 'isVisible'>;
  /**
   * PickerAccessoryのProps
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  pickerAccessoryProps?: Omit<DefaultPickerAccessoryProps, 'onDelete' | 'onCancel' | 'onDone'>;
};

export const DateTimePicker = (props: DateTimePickerProps) => {
  React.useEffect(() => {
    log.warn(`DateTimePicker is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
