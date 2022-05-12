import React, {useCallback} from 'react';

import {SelectPickerProps} from './SelectPicker';
import {useSelectPickerUseCase} from './useSelectPickerUseCase';

export const useSelectPickerAndroidUseCase = <ItemT extends unknown>(props: SelectPickerProps<ItemT>) => {
  const {getSelectedItem, inputValue} = useSelectPickerUseCase<ItemT>(props);
  const {onSelectedItemChange, onDone} = props;
  const onValueChange = useCallback(
    (key: React.Key) => {
      const selectedItem = getSelectedItem(key);
      onSelectedItemChange?.(selectedItem);
      onDone?.(selectedItem);
    },
    [getSelectedItem, onDone, onSelectedItemChange],
  );

  return {
    inputValue,
    onValueChange,
  };
};
