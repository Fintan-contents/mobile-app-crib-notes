import React, {useCallback, useMemo, useState} from 'react';

import {SelectPickerProps} from './SelectPicker';

export const useSelectPicker = <ItemT extends unknown>({
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
    (key?: React.Key | ItemT) => {
      return items.find(item => item.key === key || item.value === key);
    },
    [items],
  );
  const onValueChange = useCallback(
    (key: React.Key | ItemT) => {
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
