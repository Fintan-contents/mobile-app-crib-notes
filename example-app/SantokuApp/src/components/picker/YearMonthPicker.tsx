import {PickerProps} from '@react-native-picker/picker';
import {log} from 'framework/logging';
import React from 'react';
import {Platform, StyleProp, TextInputProps as RNETextInputProps, TextStyle, ViewProps} from 'react-native';

import {DefaultPickerAccessoryProps} from './DefaultPickerAccessory';
import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';
import {Item} from './SelectPicker';
import {RequiredYearMonth, YearMonth} from './YearMonth';

type TextInputProps = Omit<RNETextInputProps, 'value' | 'editable'>;
export type YearMonthPickerProps = {
  /**
   * 選択された年月
   */
  selectedValue: YearMonth | undefined;
  /**
   * 選択可能な最大日付
   */
  maximumYearMonth: RequiredYearMonth;
  /**
   * 選択可能な最小日付
   */
  minimumYearMonth: RequiredYearMonth;
  /**
   * 年のサフィックス
   */
  yearSuffixLabel?: string;
  /**
   * 月のサフィックス
   */
  monthSuffixLabel?: string;
  /**
   * 未選択を表すアイテムのラベル
   * @platform android
   */
  unselectItem?: Item<number | undefined>;
  /**
   * アイテムが選択された場合に呼び出される関数
   */
  onSelectedItemChange?: (yearMonth?: YearMonth) => void;
  /**
   * PickerBackdropをタップして閉じた場合に呼び出される関数
   *
   * @platform ios
   */
  onDismiss?: (yearMonth?: YearMonth) => void;
  /**
   * DeleteLabelがタップされた場合に呼び出される関数
   * タップ後、YearMonthPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   *
   * @platform ios
   */
  onDelete?: (yearMonth?: YearMonth) => void;
  /**
   * CancelLabelがタップされた場合に呼び出される関数
   * タップ後、YearMonthPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   *
   * @platform ios
   */
  onCancel?: (yearMonth?: YearMonth) => void;
  /**
   * [iOS]
   * DoneLabelがタップされた場合に呼び出される関数
   * タップ後、YearMonthPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   *
   * [Android]
   * アイテムが選択された場合に呼び出される関数
   */
  onDone?: (yearMonth?: YearMonth) => void;
  /**
   * プレースホルダ
   */
  placeholder?: string;
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
   */
  pickerProps?: Omit<PickerProps<Date>, 'selectedValue' | 'onValueChange'>;
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
  /**
   * アイテムのFontColor
   */
  itemColor?: string;
  /**
   * アイテムのFontFamily
   */
  itemFontFamily?: string;
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
  itemStyle?: StyleProp<Pick<TextStyle, 'color' | 'backgroundColor' | 'fontSize' | 'fontFamily'>>;
};

export const YearMonthPicker = (props: YearMonthPickerProps) => {
  React.useEffect(() => {
    log.warn(`YearMonthPicker is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
