import {m} from 'bases/message/Message';
import {DateTimePicker} from 'bases/ui/picker/DateTimePicker';
import React, {useCallback, useRef, useState} from 'react';
import {Platform, StyleSheet} from 'react-native';

import {formatDate} from '../utils/formatDate';

export const DemoDateTimePicker1: React.FC = () => {
  // 再レンダリング時に毎回日時が変わらないようにRefで保持します。
  // Refで保持しているため、PickerScreenを開いている間は、maximumDate/minimumDateは変わりません。
  // 一旦前の画面に戻って、再度PickerScreenを開くと、maximumDate/minimumDateは更新されます。
  const maximumDate = useRef(new Date()).current;
  // maximumYearMonthの5年前をminimumYearMonthとする
  const minimumDate = useRef(
    new Date(maximumDate.getFullYear() - 5, maximumDate.getMonth(), maximumDate.getDate()),
  ).current;
  const [selectedDate, setSelectedDate] = useState<Date>();
  // キャンセルをタップした時に、Pickerを開く前の値に戻せるようにRefで保持しておきます。
  const canceledDate = useRef<Date>();
  const onSelectedItemChange = useCallback((selectedValue?: Date) => {
    setSelectedDate(selectedValue);
  }, []);
  const onDismiss = useCallback((selectedValue?: Date) => {
    if (Platform.OS === 'android') {
      // Androidの場合は、「キャンセル」ボタンタップ、またはBackdrop領域をタップした場合に、前回選択した値を設定します。
      setSelectedDate(canceledDate.current);
    } else if (Platform.OS === 'ios') {
      canceledDate.current = selectedValue;
    }
  }, []);
  const onDelete = useCallback(() => {
    setSelectedDate(undefined);
    canceledDate.current = undefined;
  }, []);
  const onCancel = useCallback(() => {
    setSelectedDate(canceledDate.current);
  }, []);
  const onDone = useCallback((selectedValue?: Date) => {
    canceledDate.current = selectedValue;
  }, []);
  // Neutralボタンをタップすると、選択された値をクリアします。
  const onNeutralButtonPressed = useCallback(() => {
    setSelectedDate(undefined);
    canceledDate.current = undefined;
  }, []);
  return (
    <DateTimePicker
      selectedValue={selectedDate}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      defaultValue={maximumDate}
      onSelectedItemChange={onSelectedItemChange}
      onDismiss={onDismiss}
      onDelete={onDelete}
      onCancel={onCancel}
      onDone={onDone}
      onNeutralButtonPressed={onNeutralButtonPressed}
      formatText={formatDate}
      mode="date"
      displayIOS="spinner"
      displayAndroid="calendar"
      pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
      pickerItemsProps={{neutralButtonLabel: m('消去')}}
      textInputProps={{style: styles.pickerTextInputStyle}}
      placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: spinner' : 'display: calendar'}`}
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
});
