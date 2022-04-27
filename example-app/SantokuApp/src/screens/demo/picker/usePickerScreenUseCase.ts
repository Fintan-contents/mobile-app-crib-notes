import React, {useCallback, useMemo, useState} from 'react';

import {Item} from '../../../components/picker/SelectPicker';

type Item1Type = {
  a: string;
};
const items1: Item<Item1Type>[] = [
  {value: {a: '1'}, label: 'test1', key: '1', inputLabel: 'テスト1'},
  {value: {a: '2'}, label: 'test2', key: '2', inputLabel: 'テスト2'},
  {value: {a: '3'}, label: 'test3', key: '3', inputLabel: 'テスト3'},
];

const items2: Item<string>[] = [
  {value: '', label: 'please select...', color: 'grey'},
  {value: '1', label: 'test1', inputLabel: 'テスト1'},
  {value: '2', label: 'test2', inputLabel: 'テスト2'},
  {value: '3', label: 'test3', inputLabel: 'テスト3'},
];

const items3 = [
  {value: '1', label: 'test1', key: '1', inputLabel: 'テスト1'},
  {value: '2', label: 'test2', key: '2', inputLabel: 'テスト2'},
  {value: '3', label: 'test3', key: '3', inputLabel: 'テスト3'},
];

const placeholder = 'please select...';

export const usePickerScreenUseCase = () => {
  //////////////////////////////////////////////////////////////////////////////////
  // Items1
  //////////////////////////////////////////////////////////////////////////////////
  const [items1Key, setItems1Key] = useState<React.Key>();
  const [items1CanceledKey, setItems1CanceledKey] = useState<React.Key>();
  const onSelectedItemChangeForItem1 = useCallback((_, __, key?: React.Key) => {
    setItems1Key(key);
  }, []);
  const items1InputValue = useMemo(
    () => items1.find(item => item.key === items1Key)?.inputLabel ?? placeholder,
    [items1Key],
  );
  const onDismissForItem1 = useCallback((selectedItem: Item<Item1Type> | undefined) => {
    setItems1CanceledKey(selectedItem?.key);
  }, []);
  const onDeleteForItem1 = useCallback(() => {
    setItems1Key(undefined);
    setItems1CanceledKey(undefined);
  }, []);
  const onCancelForItem1 = useCallback(() => {
    setItems1Key(items1CanceledKey);
  }, [items1CanceledKey]);
  const onDoneForItem1 = useCallback((selectedItem: Item<Item1Type> | undefined) => {
    setItems1CanceledKey(selectedItem?.key);
  }, []);

  //////////////////////////////////////////////////////////////////////////////////
  // Items2
  //////////////////////////////////////////////////////////////////////////////////
  const [items2Value, setItems2Value] = useState<string>();
  const items2InputValue = useMemo(
    () => items2.find(item => item.value === items2Value)?.inputLabel ?? placeholder,
    [items2Value],
  );
  const onSelectedItemChangeForItem2 = useCallback((_, value?: string | undefined, __?) => {
    setItems2Value(value);
  }, []);

  //////////////////////////////////////////////////////////////////////////////////
  // Items3
  //////////////////////////////////////////////////////////////////////////////////
  const [items3Key, setItems3Key] = useState<React.Key | undefined>('1');
  const onSelectedItemChangeForItem3 = useCallback((_, __, key?: React.Key) => {
    setItems3Key(key);
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
    items2,
    items2Value,
    items2InputValue,
    onSelectedItemChangeForItem2,
    items3,
    items3Key,
    onSelectedItemChangeForItem3,
    placeholder,
  };
};
