import {DateTimePickerAndroid, DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {useCallback} from 'react';

import {DateTimePickerAndroidProps} from './DateTimePicker.android';
import {useDateTimePickerUseCase} from './useDateTimePickerUseCase';

export const useDateTimePickerAndroidUseCase = (props: DateTimePickerAndroidProps) => {
  const {requiredSelectedValue, ...useCase} = useDateTimePickerUseCase(props);
  const {
    mode,
    displayAndroid,
    maximumDate,
    minimumDate,
    pickerItemsProps,
    onDismiss,
    onDone,
    onNeutralButtonPressed,
    onSelectedItemChange,
  } = props;

  const onValueChange = useCallback(
    (event: DateTimePickerEvent, date?: Date) => {
      onSelectedItemChange?.(date);
      switch (event.type) {
        case 'dismissed':
          onDismiss?.(date);
          break;
        case 'set':
          onDone?.(date);
          break;
        case 'neutralButtonPressed':
          onNeutralButtonPressed?.(date);
          break;
      }
    },
    [onDismiss, onDone, onNeutralButtonPressed, onSelectedItemChange],
  );

  const open = useCallback(() => {
    DateTimePickerAndroid.open({
      value: requiredSelectedValue,
      onChange: onValueChange,
      mode,
      display: displayAndroid,
      maximumDate,
      minimumDate,
      ...pickerItemsProps,
    });
  }, [displayAndroid, maximumDate, minimumDate, mode, onValueChange, pickerItemsProps, requiredSelectedValue]);

  return {
    ...useCase,
    onValueChange,
    open,
  };
};
