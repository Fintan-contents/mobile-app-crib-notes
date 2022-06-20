import {useCallback, useMemo, useState} from 'react';

import {DateTimePickerIOSProps} from './DateTimePicker.ios';
import {PICKER_BACKDROP_DEFAULT_ENTERING, PICKER_BACKDROP_DEFAULT_EXITING} from './PickerBackdrop';
import {PICKER_CONTAINER_DEFAULT_ENTERING, PICKER_CONTAINER_DEFAULT_EXITING} from './PickerContainer';
import {useDateTimePickerUseCase} from './useDateTimePickerUseCase';

const DEFAULT_DURATION = 500;

export const useDateTimePickerIOSUseCase = (props: DateTimePickerIOSProps) => {
  const useCase = useDateTimePickerUseCase(props);
  const {
    selectedValue,
    defaultValue = new Date(),
    onSelectedItemChange,
    onDismiss,
    onDelete,
    onCancel,
    onDone,
    pickerBackdropProps: {entering: backdropEntering, exiting: backdropExiting} = {},
    pickerContainerProps: {entering: containerEntering, exiting: containerExiting} = {},
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => {
    setIsVisible(false);
  }, []);
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
    pickerBackdropEntering,
    pickerBackdropExiting,
    pickerContainerEntering,
    pickerContainerExiting,
    onValueChange,
    open,
    close,
    handleDismiss,
    handleDelete,
    handleCancel,
    handleDone,
  };
};
