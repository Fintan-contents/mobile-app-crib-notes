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

import {useCallback, useMemo, useState} from 'react';
import {Platform} from 'react-native';

import {ItemSelectionKey, SelectPickerProps} from './SelectPicker';

export const useSelectPicker = <ItemT>({
  items,
  selectedItemKey,
  onSelectedItemChange,
  onDismiss,
  onDelete,
  onCancel,
  onDone,
}: SelectPickerProps<ItemT>) => {
  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => setIsVisible(false), []);
  const getSelectedItem = useCallback(
    (key?: ItemSelectionKey | ItemT) => {
      return items.find(item => {
        if (Platform.OS === 'ios') {
          // @react-native-picker/pickerは、iOSではpickerに渡されたvalueを強制的に文字列化してしまいます。
          // そのため、onValueChangeに渡されてくる値は文字列となり、valueが文字列でなかった場合は直接比較しても一致しません。
          // ここでは、@react-native-picker/pickerの内部処理と同様に、双方を文字列化して比較することで、選択中の要素を取得します。
          return String(item.key) === String(key) || String(item.value) === String(key);
        }
        return item.key === key || item.value === key;
      });
    },
    [items],
  );
  const onValueChange = useCallback(
    (key: ItemSelectionKey | ItemT) => {
      const selectedItem = getSelectedItem(key);
      onSelectedItemChange?.(selectedItem);
    },
    [getSelectedItem, onSelectedItemChange],
  );

  const selectedItem = useMemo(() => getSelectedItem(selectedItemKey), [getSelectedItem, selectedItemKey]);
  const inputValue = useMemo(() => {
    if (!selectedItem) {
      return undefined;
    }
    if (!selectedItem.key && !selectedItem.value) {
      return undefined;
    }
    return selectedItem.inputLabel ? selectedItem.inputLabel : selectedItem.label;
  }, [selectedItem]);

  const open = useCallback(() => {
    if (selectedItem == null && items.length) {
      onSelectedItemChange?.(items[0]);
    }
    setIsVisible(true);
  }, [items, onSelectedItemChange, selectedItem]);
  const handleBackdropPress = useCallback(() => {
    onDismiss?.(selectedItem);
    close();
  }, [close, onDismiss, selectedItem]);
  const handleDelete = useCallback(() => {
    onDelete?.(selectedItem);
    close();
  }, [close, onDelete, selectedItem]);
  const handleCancel = useCallback(() => {
    onCancel?.(selectedItem);
    close();
  }, [close, onCancel, selectedItem]);
  const handleDone = useCallback(() => {
    onDone?.(selectedItem);
    close();
  }, [close, onDone, selectedItem]);

  return {
    isVisible,
    getSelectedItem,
    inputValue,
    handleBackdropPress,
    onValueChange,
    open,
    handleDelete,
    handleCancel,
    handleDone,
  };
};
