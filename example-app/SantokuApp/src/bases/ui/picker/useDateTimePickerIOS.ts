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

import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {useCallback, useState} from 'react';

import {DateTimePickerIOSProps} from './DateTimePicker.ios';
import {useDateTimePicker} from './useDateTimePicker';

export const useDateTimePickerIOS = (props: DateTimePickerIOSProps) => {
  const {selectedValue, defaultValue = new Date(), onSelectedItemChange, onDismiss, onDelete, onCancel, onDone} = props;

  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => {
    setIsVisible(false);
  }, []);
  const onValueChange = useCallback(
    (_: DateTimePickerEvent, date?: Date) => {
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
    ...useDateTimePicker(props),
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
