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

import {m} from 'bases/message/Message';
import {DateTimePicker} from 'bases/ui/picker/DateTimePicker';
import React, {useCallback, useRef, useState} from 'react';
import {Platform, StyleSheet} from 'react-native';

import {formatDate} from '../utils/formatDate';

export const DemoDateTimePicker2: React.FC = () => {
  // 再レンダリング時に毎回日時が変わらないようにRefで保持します。
  // Refで保持しているため、PickerScreenを開いている間は、maximumDate/minimumDateは変わりません。
  // 一旦前の画面に戻って、再度PickerScreenを開くと、maximumDate/minimumDateは更新されます。
  const maximumDate = useRef(new Date()).current;
  // maximumYearMonthの5年前をminimumYearMonthとする
  const minimumDate = useRef(
    new Date(maximumDate.getFullYear() - 5, maximumDate.getMonth(), maximumDate.getDate()),
  ).current;
  const [selectedDate, setSelectedDate] = useState<Date>();
  const onSelectedItemChange = useCallback((selectedValue?: Date) => {
    setSelectedDate(selectedValue);
  }, []);
  return (
    <DateTimePicker
      selectedValue={selectedDate}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      defaultValue={maximumDate}
      onSelectedItemChange={onSelectedItemChange}
      formatText={formatDate}
      mode="date"
      displayIOS="inline"
      displayAndroid="spinner"
      pickerAccessoryProps={{doneLabel: m('完了')}}
      // displayIOSを「inline」に設定すると、一部機種で曜日が潰れて表示されるため、少し大きめのheightを設定して潰れないようにしています。
      pickerItemsProps={{style: styles.dateTimePickerWithInline}}
      textInputProps={{style: styles.pickerTextInputStyle}}
      placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: inline' : 'display: spinner'}`}
    />
  );
};

const styles = StyleSheet.create({
  pickerTextInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    color: 'black',
  },
  dateTimePickerWithInline: {
    height: 400,
  },
});
