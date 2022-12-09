import React from 'react';
import {Pressable, TextInput, View} from 'react-native';

import {DateTimePickerProps} from './DateTimePicker';
import {DateTimePickerItemsAndroidProps, DateTimePickerItemsProps} from './DateTimePickerItems';
import {useDateTimePickerAndroid} from './useDateTimePickerAndroid';

export type DateTimePickerAndroidProps = Omit<
  DateTimePickerProps,
  | 'onDelete'
  | 'onCancel'
  | 'mode'
  | 'displayIOS'
  | 'pickerAccessoryComponent'
  | 'pickerItemsComponent'
  | 'pickerItemsContainerProps'
  | 'pickerItemsProps'
  | 'pickerBackdropProps'
  | 'pickerContainerProps'
  | 'pickerAccessoryProps'
> & {
  pickerItemsProps?: Omit<
    DateTimePickerItemsAndroidProps,
    'value' | 'onChange' | 'mode' | 'display' | 'maximumDate' | 'minimumDate'
  >;
  mode?: Exclude<DateTimePickerItemsProps['mode'], 'countdown' | 'datetime'>;
};
export const DateTimePicker = (props: DateTimePickerAndroidProps) => {
  const {inputValue, open} = useDateTimePickerAndroid(props);
  const {placeholder, textInputProps, textInputComponent} = props;
  return (
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
  );
};
