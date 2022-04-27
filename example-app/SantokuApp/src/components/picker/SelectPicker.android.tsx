import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';
import {useSelectPickerAndroidUseCase} from './useSelectPickerAndroidUseCase';

type SelectPickerPropsAndroid<ItemT> = Omit<
  SelectPickerProps<ItemT>,
  | 'onDismiss'
  | 'onDelete'
  | 'onCancel'
  | 'pickerAccessoryComponent'
  | 'pickerItemsComponent'
  | 'pickerItemsContainerProps'
  | 'pickerBackdropProps'
  | 'pickerContainerProps'
  | 'pickerAccessoryProps'
>;

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerPropsAndroid<ItemT>) => {
  const {inputValue, onValueChange} = useSelectPickerAndroidUseCase<ItemT>(props);
  const {items, selectedItemKey, placeholder, textInputProps, keyExtractor, textInputComponent, pickerProps} = props;

  return (
    <View>
      {textInputComponent ? (
        textInputComponent
      ) : (
        // テキスト入力とスタイルを合わせるために、TextではなくTextInputを使用する
        <TextInput placeholder={placeholder} value={inputValue} editable={false} {...textInputProps} />
      )}
      <SelectPickerItems
        selectedValue={selectedItemKey}
        items={items}
        onValueChange={onValueChange}
        keyExtractor={keyExtractor}
        style={styles.headlessPicker}
        {...pickerProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headlessPicker: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'transparent',
    backgroundColor: 'transparent',
  },
});
