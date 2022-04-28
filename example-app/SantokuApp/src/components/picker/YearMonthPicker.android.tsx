import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {SelectPickerItems} from './SelectPickerItems';
import {YearMonthPickerProps} from './YearMonthPicker';
import {useYearMonthPickerAndroidUseCase} from './useYearMonthPickerAndroidUseCase';

export type YearMonthPickerPropsAndroid = Omit<
  YearMonthPickerProps,
  'onDismiss' | 'onDelete' | 'onCancel' | 'pickerBackdropProps' | 'pickerContainerProps' | 'pickerAccessoryProps'
>;

export const YearMonthPicker = (props: YearMonthPickerPropsAndroid) => {
  const {
    selectedYear,
    selectedMonth,
    selectedYearLabel,
    selectedMonthLabel,
    yearItems,
    monthItems,
    onValueChangeYear,
    onValueChangeMonth,
  } = useYearMonthPickerAndroidUseCase(props);
  const {
    yearSuffixLabel,
    monthSuffixLabel,
    placeholder,
    textInputProps,
    pickerItemsContainerProps: {style: pickerItemsContainerStyle, ...pickerItemsContainerProps} = {},
    pickerProps,
  } = props;

  return (
    <View
      style={StyleSheet.flatten([styles.pickerItemsContainer, pickerItemsContainerStyle])}
      {...pickerItemsContainerProps}>
      <View style={styles.flex}>
        {/* テキスト入力とスタイルを合わせるために、TextではなくTextInputを使用する */}
        <TextInput
          placeholder={placeholder}
          value={selectedYearLabel}
          editable={false}
          testID="yearTextInput"
          {...textInputProps}
        />
        <SelectPickerItems
          selectedValue={selectedYear}
          items={yearItems}
          onValueChange={onValueChangeYear}
          style={styles.headlessPicker}
          testID="yearPicker"
          {...pickerProps}
        />
      </View>
      <Text>{yearSuffixLabel}</Text>
      <View style={styles.flex}>
        {/* テキスト入力とスタイルを合わせるために、TextではなくTextInputを使用する */}
        <TextInput
          placeholder={placeholder}
          value={selectedMonthLabel}
          editable={false}
          testID="monthTextInput"
          {...textInputProps}
        />
        <SelectPickerItems
          selectedValue={selectedMonth}
          items={monthItems}
          onValueChange={onValueChangeMonth}
          style={styles.headlessPicker}
          testID="monthPicker"
          {...pickerProps}
        />
      </View>
      <Text>{monthSuffixLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  pickerItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headlessPicker: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'transparent',
    backgroundColor: 'transparent',
  },
});
