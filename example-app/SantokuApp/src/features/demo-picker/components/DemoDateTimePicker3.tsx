import {m} from 'bases/message/Message';
import {DateTimePicker} from 'bases/ui/picker/DateTimePicker';
import React, {useCallback, useRef, useState} from 'react';
import {Platform, StyleSheet} from 'react-native';

export const DemoDateTimePicker3: React.FC = () => {
  // 再レンダリング時に毎回日時が変わらないようにRefで保持します。
  // Refで保持しているため、PickerScreenを開いている間は、maximumDate/minimumDateは変わりません。
  // 一旦前の画面に戻って、再度PickerScreenを開くと、maximumDate/minimumDateは更新されます。
  const maximumDate = useRef(new Date()).current;
  const [selectedDate, setSelectedDate] = useState<Date>();
  const onSelectedItemChange = useCallback((selectedValue?: Date) => {
    setSelectedDate(selectedValue);
  }, []);
  return (
    <DateTimePicker
      selectedValue={selectedDate}
      defaultValue={maximumDate}
      onSelectedItemChange={onSelectedItemChange}
      mode="time"
      displayIOS="spinner"
      displayAndroid="clock"
      pickerAccessoryProps={{doneLabel: m('完了')}}
      textInputProps={{style: styles.pickerTextInputStyle}}
      placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: spinner' : 'display: clock'}`}
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
