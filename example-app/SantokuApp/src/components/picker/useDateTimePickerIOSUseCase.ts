import {useCallback, useState} from 'react';

import {DateTimePickerIOSProps} from './DateTimePicker.ios';
import {useDateTimePickerUseCase} from './useDateTimePickerUseCase';

export const useDateTimePickerIOSUseCase = (props: DateTimePickerIOSProps) => {
  const useCase = useDateTimePickerUseCase(props);
  const {selectedValue, defaultValue = new Date(), onSelectedItemChange, onDismiss, onDelete, onCancel, onDone} = props;

  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => {
    setIsVisible(false);
  }, []);
  const onValueChange = useCallback(
    (_, date?: Date) => {
      onSelectedItemChange?.(date);
    },
    [onSelectedItemChange],
  );
  const open = useCallback(() => {
    if (selectedValue == null) {
      onSelectedItemChange?.(defaultValue);
    }
    setIsVisible(true);
  }, [defaultValue, onSelectedItemChange, selectedValue]);
  const handleDismiss = useCallback(() => {
    onDismiss?.(selectedValue);
    close();
  }, [close, onDismiss, selectedValue]);
  const handleDelete = useCallback(() => {
    onDelete?.(selectedValue);
    close();
  }, [close, onDelete, selectedValue]);
  const handleCancel = useCallback(() => {
    onCancel?.(selectedValue);
    close();
  }, [close, onCancel, selectedValue]);
  const handleDone = useCallback(() => {
    onDone?.(selectedValue);
    close();
  }, [close, onDone, selectedValue]);

  return {
    ...useCase,
    isVisible,
    setIsVisible,
    onValueChange,
    open,
    close,
    handleDismiss,
    handleDelete,
    handleCancel,
    handleDone,
  };
};
