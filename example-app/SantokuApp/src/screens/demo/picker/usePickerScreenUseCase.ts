import {Item, YearMonth, YearMonthUtil} from 'components/picker';
import React, {useCallback, useMemo, useRef, useState} from 'react';

type Item1Type = {
  a: string;
};
const items1: Item<Item1Type>[] = [
  {value: {a: '1'}, label: 'test1', key: '1', inputLabel: 'テスト1'},
  {value: {a: '2'}, label: 'test2', key: '2', inputLabel: 'テスト2'},
  {value: {a: '3'}, label: 'test3', key: '3', inputLabel: 'テスト3'},
  {value: {a: '4'}, label: 'test4', key: '4', inputLabel: 'テスト4'},
  {value: {a: '5'}, label: 'test5', key: '5', inputLabel: 'テスト5'},
  {value: {a: '6'}, label: 'test6', key: '6', inputLabel: 'テスト6'},
  {value: {a: '7'}, label: 'test7', key: '7', inputLabel: 'テスト7'},
  {value: {a: '8'}, label: 'test8', key: '8', inputLabel: 'テスト8'},
  {value: {a: '9'}, label: 'test9', key: '9', inputLabel: 'テスト9'},
  {value: {a: '10'}, label: 'test10', key: '10', inputLabel: 'テスト10'},
  {value: {a: '11'}, label: 'test11', key: '11', inputLabel: 'テスト11'},
];

const placeholder = 'please select...';

export const usePickerScreenUseCase = () => {
  //////////////////////////////////////////////////////////////////////////////////
  // Items1
  //////////////////////////////////////////////////////////////////////////////////
  const [items1Key, setItems1Key] = useState<React.Key>();
  // キャンセルをタップした時に、Pickerを開く前の値に戻せるようにRefで保持しておく
  const items1CanceledKey = useRef<React.Key>();
  const onSelectedItemChangeForItem1 = useCallback((selectedItem?: Item<Item1Type>) => {
    setItems1Key(selectedItem?.key);
  }, []);
  const items1InputValue = useMemo(
    () => items1.find(item => item.key === items1Key)?.inputLabel ?? placeholder,
    [items1Key],
  );
  const onDismissForItem1 = useCallback((selectedItem?: Item<Item1Type>) => {
    items1CanceledKey.current = selectedItem?.key;
  }, []);
  const onDeleteForItem1 = useCallback(() => {
    setItems1Key(undefined);
    items1CanceledKey.current = undefined;
  }, []);
  const onCancelForItem1 = useCallback(() => {
    setItems1Key(items1CanceledKey.current);
  }, [items1CanceledKey]);
  const onDoneForItem1 = useCallback((selectedItem?: Item<Item1Type>) => {
    items1CanceledKey.current = selectedItem?.key;
  }, []);

  //////////////////////////////////////////////////////////////////////////////////
  // YearMonthPicker
  //////////////////////////////////////////////////////////////////////////////////
  // 再レンダリング時に毎回YearMonthが変わらないようにRefで保持する
  // Refで保持しているため、PickerScreenを開いている間は、maximumYearMonth/minimumYearMonthは変わらない
  // 一旦前の画面に戻って、再度PickerScreenを開くと、maximumYearMonth/minimumYearMonthは更新される
  const maximumYearMonth = useRef(YearMonthUtil.now()).current;
  // maximumYearMonthの5年前をminimumYearMonthとする
  const minimumYearMonth = useRef(YearMonthUtil.addMonth(maximumYearMonth, -60)).current;
  const [yearMonth, setYearMonth] = useState<YearMonth>();
  const [yearMonthCanceledKey, setYearMonthCanceledKey] = useState<YearMonth>();
  const onSelectedItemChangeForYearMonth = useCallback((yearMonth?: YearMonth) => setYearMonth(yearMonth), []);
  const onDismissForYearMonthPicker = useCallback((yearMonth?: YearMonth) => {
    setYearMonthCanceledKey(yearMonth);
  }, []);
  const onDeleteForYearMonthPicker = useCallback(() => {
    setYearMonth(undefined);
    setYearMonthCanceledKey(undefined);
  }, []);
  const onCancelForYearMonthPicker = useCallback(() => {
    setYearMonth(yearMonthCanceledKey);
  }, [yearMonthCanceledKey]);
  const onDoneForYearMonthPicker = useCallback((yearMonth?: YearMonth) => {
    setYearMonthCanceledKey(yearMonth);
  }, []);

  return {
    items1,
    items1Key,
    items1InputValue,
    onSelectedItemChangeForItem1,
    onDismissForItem1,
    onDeleteForItem1,
    onCancelForItem1,
    onDoneForItem1,
    maximumYearMonth,
    minimumYearMonth,
    yearMonth,
    onSelectedItemChangeForYearMonth,
    onDismissForYearMonthPicker,
    onDeleteForYearMonthPicker,
    onCancelForYearMonthPicker,
    onDoneForYearMonthPicker,
    placeholder,
  };
};
