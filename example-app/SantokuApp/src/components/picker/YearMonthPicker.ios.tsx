import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import {DefaultPickerAccessory} from './DefaultPickerAccessory';
import {PickerBackdrop} from './PickerBackdrop';
import {PickerContainer} from './PickerContainer';
import {SelectPickerItems} from './SelectPickerItems';
import {YearMonthPickerProps} from './YearMonthPicker';
import {useYearMonthPickerIOSUseCase} from './useYearMonthPickerIOSUseCase';

export type YearMonthPickerPropsIOS = Omit<YearMonthPickerProps, 'unselectItem' | 'itemStyle'>;

export const YearMonthPicker = (props: YearMonthPickerPropsIOS) => {
  const {
    isVisible,
    selectedYear,
    selectedMonth,
    yearItems,
    monthItems,
    onValueChangeYear,
    onValueChangeMonth,
    selectedLabel,
    pickerBackdropEntering,
    pickerBackdropExiting,
    pickerContainerEntering,
    pickerContainerExiting,
    open,
    handleBackdropPress,
    handleDelete,
    handleCancel,
    handleDone,
  } = useYearMonthPickerIOSUseCase(props);
  const {
    yearSuffixLabel,
    monthSuffixLabel,
    placeholder,
    textInputProps,
    pickerItemsContainerProps: {style: pickerItemsContainerStyle, ...pickerItemsContainerProps} = {},
    pickerProps,
    pickerBackdropProps: {entering: backdropEntering, exiting: backdropExiting, ...pickerBackdropProps} = {},
    pickerContainerProps: {
      entering: containerEntering,
      exiting: containerExiting,
      style: pickerContainerStyle,
      ...pickerContainerProps
    } = {},
    pickerAccessoryProps,
  } = props;

  return (
    <>
      <PickerBackdrop
        isVisible={isVisible}
        onPress={handleBackdropPress}
        entering={pickerBackdropEntering}
        exiting={pickerBackdropExiting}
        {...pickerBackdropProps}>
        <PickerContainer
          isVisible={isVisible}
          entering={pickerContainerEntering}
          exiting={pickerContainerExiting}
          style={StyleSheet.flatten([styles.pickerContainer, pickerContainerStyle])}
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
