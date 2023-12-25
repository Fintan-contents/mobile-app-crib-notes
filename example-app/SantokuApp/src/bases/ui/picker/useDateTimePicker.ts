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
