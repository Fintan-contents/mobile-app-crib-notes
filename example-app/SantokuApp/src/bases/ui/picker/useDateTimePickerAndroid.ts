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
