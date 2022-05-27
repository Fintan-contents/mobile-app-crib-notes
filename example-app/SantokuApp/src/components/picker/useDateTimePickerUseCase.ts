import {useCallback, useMemo, useState} from 'react';

import {DateTimePickerProps} from './DateTimePicker';
import {PICKER_BACKDROP_DEFAULT_ENTERING, PICKER_BACKDROP_DEFAULT_EXITING} from './PickerBackdrop';
import {PICKER_CONTAINER_DEFAULT_ENTERING, PICKER_CONTAINER_DEFAULT_EXITING} from './PickerContainer';

const DEFAULT_DURATION = 500;

export const useDateTimePickerUseCase = ({
  selectedValue,
  defaultValue = new Date(),
  onSelectedItemChange,
  onDismiss,
  onDelete,
  onCancel,
  onDone,
  formatText,
  pickerBackdropProps: {entering: backdropEntering, exiting: backdropExiting} = {},
  pickerContainerProps: {entering: containerEntering, exiting: containerExiting} = {},
}: DateTimePickerProps) => {
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
  const onValueChange = useCallback(
    (_, date?: Date) => {
      onSelectedItemChange?.(date);
    },
    [onSelectedItemChange],
  );
  const requiredSelectedValue = selectedValue ?? defaultValue;
  const inputValue = useMemo(() => {
    if (formatText) {
      return formatText(selectedValue);
    }
    if (!selectedValue) {
      return undefined;
    }
    return selectedValue.toString();
  }, [formatText, selectedValue]);

  const open = useCallback(() => {
    if (selectedValue == null) {
      onSelectedItemChange?.(defaultValue);
    }
    setIsVisible(true);
  }, [defaultValue, onSelectedItemChange, selectedValue]);
  const handleBackdropPress = useCallback(() => {
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
    isVisible,
    requiredSelectedValue,
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
