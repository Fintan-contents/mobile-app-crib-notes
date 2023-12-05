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
