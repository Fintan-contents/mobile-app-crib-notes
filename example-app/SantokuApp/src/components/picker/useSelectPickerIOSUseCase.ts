import {SelectPickerProps} from './SelectPicker';
import {useSelectPickerUseCase} from './useSelectPickerUseCase';

export const useSelectPickerIOSUseCase = <ItemT extends unknown>(props: SelectPickerProps<ItemT>) => {
  const {getSelectedItem, ...selectPickerUseCase} = useSelectPickerUseCase<ItemT>(props);
  return {...selectPickerUseCase};
};
