import {DateTimePickerAndroid, DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {useCallback} from 'react';

import {DateTimePickerAndroidProps} from './DateTimePicker.android';
import {useDateTimePicker} from './useDateTimePicker';

export const useDateTimePickerAndroid = (props: DateTimePickerAndroidProps) => {
  const {requiredSelectedValue, ...rest} = useDateTimePicker(props);
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
    ...rest,
    onValueChange,
    open,
  };
};
