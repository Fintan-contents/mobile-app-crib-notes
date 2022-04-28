import React, {useCallback, useMemo, useState} from 'react';

import {PICKER_BACKDROP_DEFAULT_ENTERING, PICKER_BACKDROP_DEFAULT_EXITING} from './PickerBackdrop';
import {PICKER_CONTAINER_DEFAULT_ENTERING, PICKER_CONTAINER_DEFAULT_EXITING} from './PickerContainer';
import {SelectPickerProps} from './SelectPicker';

const DEFAULT_DURATION = 500;

export const useSelectPickerUseCase = <ItemT extends unknown>({
  items,
  selectedItemKey,
  onSelectedItemChange,
  onDismiss,
  onDelete,
  onCancel,
  onDone,
  pickerBackdropProps: {entering: backdropEntering, exiting: backdropExiting} = {},
  pickerContainerProps: {entering: containerEntering, exiting: containerExiting} = {},
}: SelectPickerProps<ItemT>) => {
  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => setIsVisible(false), []);
  const pickerBackdropEntering = useMemo(
    () => backdropEntering ?? PICKER_BACKDROP_DEFAULT_ENTERING.duration(DEFAULT_DURATION),
    [backdropEntering],
  );
  const pickerBackdropExiting = useMemo(
    () => backdropExiting ?? PICKER_BACKDROP_DEFAULT_EXITING.duration(DEFAULT_DURATION),
    [backdropExiting],
  );
  const pickerContainerEntering = useMemo(
    () => containerEntering ?? PICKER_CONTAINER_DEFAULT_ENTERING.duration(DEFAULT_DURATION),
    [containerEntering],
  );
  const pickerContainerExiting = useMemo(
    () => containerExiting ?? PICKER_CONTAINER_DEFAULT_EXITING.duration(DEFAULT_DURATION),
    [containerExiting],
  );
  const getSelectedItem = useCallback(
    (key?: React.Key | ItemT) => {
      return items.find(item => item.key === key || item.value === key);
    },
    [items],
  );
  const onValueChange = useCallback(
    (key: React.Key | ItemT, index: number) => {
      const selectedItem = getSelectedItem(key);
      onSelectedItemChange?.(index, selectedItem?.value, selectedItem?.key);
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
    setIsVisible(true);
  }, []);
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
    pickerBackdropEntering,
    pickerBackdropExiting,
    pickerContainerEntering,
    pickerContainerExiting,
    onValueChange,
    open,
    handleDelete,
    handleCancel,
    handleDone,
  };
};
