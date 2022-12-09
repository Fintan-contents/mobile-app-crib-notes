import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps as RNETextInputProps,
  View,
  ViewProps,
} from 'react-native';

import {DefaultPickerAccessory, DefaultPickerAccessoryProps} from './DefaultPickerAccessory';
import {PickerBackdrop, PickerBackdropProps} from './PickerBackdrop';
import {PickerContainer, PickerContainerProps} from './PickerContainer';
import {SelectPickerItems, SelectPickerItemsProps} from './SelectPickerItems';
import {RequiredYearMonth, YearMonth} from './YearMonth';
import {useYearMonthPicker} from './useYearMonthPicker';

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
   * アイテムが選択された場合に呼び出される関数
   */
  onSelectedItemChange?: (yearMonth?: YearMonth) => void;
  /**
   * PickerBackdropをタップして閉じた場合に呼び出される関数
   */
  onDismiss?: (yearMonth?: YearMonth) => void;
  /**
   * DeleteLabelがタップされた場合に呼び出される関数
   * タップ後、YearMonthPickerは自動で閉じます。
   */
  onDelete?: (yearMonth?: YearMonth) => void;
  /**
   * CancelLabelがタップされた場合に呼び出される関数
   * タップ後、YearMonthPickerは自動で閉じます。
   */
  onCancel?: (yearMonth?: YearMonth) => void;
  /**
   * DoneLabelがタップされた場合に呼び出される関数
   * タップ後、YearMonthPickerは自動で閉じます。
   */
  onDone?: (yearMonth?: YearMonth) => void;
  /**
   * プレースホルダ
   */
  placeholder?: string;
  /**
   * 選択されたアイテムを表示するテキストコンポーネントのProps
   */
  textInputProps?: TextInputProps;
  /**
   * Pickerコンポーネントを囲むContainerのProps
   */
  pickerItemsContainerProps?: ViewProps;
  /**
   * PickerのProps
   */
  pickerProps?: Omit<SelectPickerItemsProps<YearMonth>, 'items' | 'selectedValue' | 'onValueChange' | 'keyExtractor'>;
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
};

const DEFAULT_DURATION = 300;

export const YearMonthPicker = (props: YearMonthPickerProps) => {
  const {
    isVisible,
    selectedYear,
    selectedMonth,
    yearItems,
    monthItems,
    onValueChangeYear,
    onValueChangeMonth,
    selectedLabel,
    open,
    handleBackdropPress,
    handleDelete,
    handleCancel,
    handleDone,
  } = useYearMonthPicker(props);
  const {
    yearSuffixLabel,
    monthSuffixLabel,
    placeholder,
    textInputProps,
    pickerItemsContainerProps: {style: pickerItemsContainerStyle, ...pickerItemsContainerProps} = {},
    pickerProps,
    pickerBackdropProps: {
      fadeInDuration = DEFAULT_DURATION,
      fadeOutDuration = DEFAULT_DURATION,
      ...pickerBackdropProps
    } = {},
    pickerContainerProps: {
      style: pickerContainerStyle,
      slideInDuration = DEFAULT_DURATION,
      slideOutDuration = DEFAULT_DURATION,
      ...pickerContainerProps
    } = {},
    pickerAccessoryProps,
  } = props;

  return (
    <>
      <PickerBackdrop
        isVisible={isVisible}
        onPress={handleBackdropPress}
        fadeInDuration={fadeInDuration}
        fadeOutDuration={fadeOutDuration}
        {...pickerBackdropProps}>
        <PickerContainer
          isVisible={isVisible}
          style={[styles.pickerContainer, pickerContainerStyle]}
          slideInDuration={slideInDuration}
          slideOutDuration={slideOutDuration}
          {...pickerContainerProps}>
          <DefaultPickerAccessory
            onDelete={handleDelete}
            onCancel={handleCancel}
            onDone={handleDone}
            {...pickerAccessoryProps}
          />
          <View
            style={StyleSheet.flatten([styles.pickerItemsContainer, pickerItemsContainerStyle])}
            {...pickerItemsContainerProps}>
            <View style={styles.flex}>
              <SelectPickerItems
                selectedValue={selectedYear}
                items={yearItems}
                onValueChange={onValueChangeYear}
                testID="yearPicker"
                {...pickerProps}
              />
            </View>
            <Text>{yearSuffixLabel}</Text>
            <View style={styles.flex}>
              <SelectPickerItems
                selectedValue={selectedMonth}
                items={monthItems}
                onValueChange={onValueChangeMonth}
                testID="monthPicker"
                {...pickerProps}
              />
            </View>
            <Text>{monthSuffixLabel}</Text>
          </View>
        </PickerContainer>
      </PickerBackdrop>
      <Pressable onPress={open} testID="pressableContainer">
        <View pointerEvents="box-only">
          <TextInput placeholder={placeholder} value={selectedLabel} editable={false} {...textInputProps} />
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  pickerContainer: {
    backgroundColor: 'white',
  },
  pickerItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
