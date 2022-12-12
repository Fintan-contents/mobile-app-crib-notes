import {useMemo} from 'react';

import {DateTimePickerProps} from './DateTimePicker';

export const useDateTimePicker = ({selectedValue, defaultValue = new Date(), formatText}: DateTimePickerProps) => {
  const requiredSelectedValue = useMemo(() => selectedValue ?? defaultValue, [defaultValue, selectedValue]);
  const inputValue = useMemo(() => {
    if (formatText) {
      return formatText(selectedValue);
    }
    if (!selectedValue) {
      return undefined;
    }
    return selectedValue.toString();
  }, [formatText, selectedValue]);
  return {
    requiredSelectedValue,
    inputValue,
  };
};
