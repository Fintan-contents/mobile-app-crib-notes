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
