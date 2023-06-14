import {m} from 'bases/message/Message';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import React, {useCallback, useRef} from 'react';
import {Input} from 'react-native-elements';
import {MapType} from 'react-native-maps';

type PickerMapType = Extract<MapType, 'standard' | 'satellite' | 'hybrid'>;

const pickerItems: Item<PickerMapType>[] = [
  {value: 'standard', label: 'standard', inputLabel: 'standard'},
  {value: 'satellite', label: 'satellite', inputLabel: 'satellite'},
  {value: 'hybrid', label: 'hybrid', inputLabel: 'hybrid'},
];

type MapTypePickerProps = {
  mapType: MapType;
  setMapType: (mapType: MapType) => void;
};

export const defaultMapTypeItem = pickerItems[0];
export const MapTypePicker: React.FC<MapTypePickerProps> = ({mapType, setMapType}) => {
  const selectedItem = pickerItems.find(item => item.value === mapType) ?? defaultMapTypeItem;
  const canceledKey = useRef<PickerMapType>();
  const onSelectedItemChange = useCallback(
    (selectedItem?: Item<PickerMapType>) => {
      setMapType((selectedItem ?? defaultMapTypeItem).value);
    },
    [setMapType],
  );
  const onCancel = useCallback(() => {
    setMapType((pickerItems.find(item => item.value === canceledKey.current) ?? defaultMapTypeItem).value);
  }, [setMapType]);
  const acceptCurrentSelection = useCallback((selectedItem?: Item<PickerMapType>) => {
    canceledKey.current = selectedItem?.value;
  }, []);

  return (
    <SelectPicker
      selectedItemKey={selectedItem.value}
      onSelectedItemChange={onSelectedItemChange}
      items={pickerItems}
      onDismiss={acceptCurrentSelection}
      onCancel={onCancel}
      onDone={acceptCurrentSelection}
      pickerAccessoryProps={{cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
      textInputComponent={<Input value={selectedItem.inputLabel} editable={false} />}
    />
  );
};
