import {m} from 'bases/message/Message';
import {YearMonth} from 'bases/ui/picker/YearMonth';
import {YearMonthPicker} from 'bases/ui/picker/YearMonthPicker';
import {YearMonthUtil} from 'bases/ui/picker/YearMonthUtil';
import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';

import {placeholder} from '../constants/placeholder';

export const DemoYearMonthPicker: React.FC = () => {
  // 再レンダリング時に毎回YearMonthが変わらないようにRefで保持します。
  // Refで保持しているため、PickerScreenを開いている間は、maximumYearMonth/minimumYearMonthは変わりません。
  // 一旦前の画面に戻って、再度PickerScreenを開くと、maximumYearMonth/minimumYearMonthは更新されます。
  const maximumYearMonth = useRef(YearMonthUtil.now()).current;
  // maximumYearMonthの5年前をminimumYearMonthとする
  const minimumYearMonth = useRef(YearMonthUtil.addMonth(maximumYearMonth, -60)).current;
  const [yearMonth, setYearMonth] = useState<YearMonth>();
  const [yearMonthCanceledKey, setYearMonthCanceledKey] = useState<YearMonth>();
  const onSelectedItemChange = useCallback((yearMonth?: YearMonth) => setYearMonth(yearMonth), []);
  const onDismiss = useCallback((yearMonth?: YearMonth) => {
    setYearMonthCanceledKey(yearMonth);
  }, []);
  const onDelete = useCallback(() => {
    setYearMonth(undefined);
    setYearMonthCanceledKey(undefined);
  }, []);
  const onCancel = useCallback(() => {
    setYearMonth(yearMonthCanceledKey);
  }, [yearMonthCanceledKey]);
  const onDone = useCallback((yearMonth?: YearMonth) => {
    setYearMonthCanceledKey(yearMonth);
  }, []);
  return (
    <YearMonthPicker
      selectedValue={yearMonth}
      maximumYearMonth={maximumYearMonth}
      minimumYearMonth={minimumYearMonth}
      yearSuffixLabel={m('年')}
      monthSuffixLabel={m('月')}
      placeholder={placeholder}
      onSelectedItemChange={onSelectedItemChange}
      onDismiss={onDismiss}
      onDelete={onDelete}
      onCancel={onCancel}
      onDone={onDone}
      pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
      textInputProps={{style: styles.pickerTextInputStyle}}
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
