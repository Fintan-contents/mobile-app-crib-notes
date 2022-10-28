import {m} from 'bases/message/Message';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Input} from 'react-native-elements';

import {placeholder} from '../constants/placeholder';

type PickerItemType = {
  a: string;
};
const pickerItems: Item<PickerItemType>[] = [
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

export const DemoSelectPicker: React.FC = () => {
  const [itemsKey, setItemsKey] = useState<React.Key>();
  // キャンセルをタップした時に、Pickerを開く前の値に戻せるようにRefで保持しておきます。
  const canceledKey = useRef<React.Key>();
  const onSelectedItemChange = useCallback((selectedItem?: Item<PickerItemType>) => {
    setItemsKey(selectedItem?.key);
  }, []);
  const inputValue = useMemo(
    () => pickerItems.find(item => item.key === itemsKey)?.inputLabel ?? placeholder,
    [itemsKey],
  );
  const onDismiss = useCallback((selectedItem?: Item<PickerItemType>) => {
    canceledKey.current = selectedItem?.key;
  }, []);
  const onDelete = useCallback(() => {
    setItemsKey(undefined);
    canceledKey.current = undefined;
  }, []);
  const onCancel = useCallback(() => {
    setItemsKey(canceledKey.current);
  }, [canceledKey]);
  const onDone = useCallback((selectedItem?: Item<PickerItemType>) => {
    canceledKey.current = selectedItem?.key;
  }, []);

  return (
    <SelectPicker
      selectedItemKey={itemsKey}
      onSelectedItemChange={onSelectedItemChange}
      items={pickerItems}
      onDismiss={onDismiss}
      onDelete={onDelete}
      onCancel={onCancel}
      onDone={onDone}
      pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
      textInputComponent={<Input placeholder={placeholder} value={inputValue} editable={false} />}
    />
  );
};
