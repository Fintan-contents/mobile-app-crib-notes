import React from 'react';
import {Pressable, TextInput, View} from 'react-native';

import {DateTimePickerProps} from './DateTimePicker';
import {DateTimePickerItems, DateTimePickerItemsAndroidProps, DateTimePickerItemsProps} from './DateTimePickerItems';
import {useDateTimePickerAndroidUseCase} from './useDateTimePickerAndroidUseCase';

type DateTimePickerAndroidProps = Omit<
  DateTimePickerProps,
  | 'onDismiss'
  | 'onDelete'
  | 'onCancel'
  | 'mode'
  | 'pickerAccessoryComponent'
  | 'pickerItemsComponent'
  | 'pickerItemsContainerProps'
  | 'pickerItemsProps'
  | 'pickerBackdropProps'
  | 'pickerContainerProps'
  | 'pickerAccessoryProps'
> & {
  pickerItemsProps: Omit<
    DateTimePickerItemsAndroidProps,
    'value' | 'onChange' | 'mode' | 'display' | 'maximumDate' | 'minimumDate'
  >;
  mode: Exclude<DateTimePickerItemsProps['mode'], 'countdown' | 'datetime'>;
};
export const DateTimePicker = (props: DateTimePickerAndroidProps) => {
  const {isVisible, requiredSelectedValue, inputValue, onValueChange, open} = useDateTimePickerAndroidUseCase(props);
  const {
    maximumDate,
    minimumDate,
    mode,
    displayAndroid,
    placeholder,
    textInputProps,
    textInputComponent,
    pickerItemsProps,
  } = props;

  return (
    <>
      <Pressable onPress={open} testID="pressableContainer">
        <View pointerEvents="box-only">
          {textInputComponent ? (
            textInputComponent
          ) : (
            // テキスト入力とスタイルを合わせるために、TextではなくTextInputを使用する
            <TextInput placeholder={placeholder} value={inputValue} editable={false} {...textInputProps} />
          )}
        </View>
      </Pressable>
      {isVisible && (
        <DateTimePickerItems
          value={requiredSelectedValue}
          onChange={onValueChange}
          mode={mode}
          display={displayAndroid}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          {...pickerItemsProps}
        />
      )}
    </>
  );
};
