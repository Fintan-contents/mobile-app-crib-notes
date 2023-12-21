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

import {useCallback} from 'react';

type ItemType = {
  itemHeight: number;
  listSize: number;
};

const valueInRange = (value: number, min: number, max: number): number => {
  if (value < min || value === 0) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

export const useListMiddleIndex = ({itemHeight, listSize}: ItemType) => {
  return useCallback(
    (offset: number): number => {
      const calculatedIndex = Math.round(offset / itemHeight);
      return valueInRange(calculatedIndex, 0, listSize - 1);
    },
    [itemHeight, listSize],
  );
};
