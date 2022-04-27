import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';

import {DefaultPickerAccessory} from './DefaultPickerAccessory';
import {PickerBackdrop} from './PickerBackdrop';
import {PickerContainer} from './PickerContainer';
import {SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';
import {useSelectPickerIOSUseCase} from './useSelectPickerIOSUseCase';

export type SelectPickerPropsIOS<ItemT> = SelectPickerProps<ItemT>;

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerPropsIOS<ItemT>) => {
  const {
    isVisible,
    inputValue,
    handleBackdropPress,
    pickerBackdropEntering,
    pickerBackdropExiting,
    pickerContainerEntering,
    pickerContainerExiting,
    onValueChange,
    open,
    handleDelete,
    handleCancel,
    handleDone,
  } = useSelectPickerIOSUseCase<ItemT>(props);
  const {
    items,
    selectedItemKey,
    placeholder,
    textInputProps,
    keyExtractor,
    pickerAccessoryComponent,
    pickerItemsComponent,
    textInputComponent,
    pickerItemsContainerProps: {style: pickerItemsContainerStyle, ...pickerItemsContainerProps} = {},
    pickerProps,
    pickerBackdropProps: {entering: backdropEntering, exiting: backdropExiting, ...pickerBackdropProps} = {},
    pickerContainerProps: {
      entering: containerEntering,
      exiting: containerExiting,
      style: pickerContainerStyle,
      ...pickerContainerProps
    } = {},
    pickerAccessoryProps,
  } = props;

  return (
    <>
      <PickerBackdrop
        isVisible={isVisible}
        onPress={handleBackdropPress}
        entering={pickerBackdropEntering}
        exiting={pickerBackdropExiting}
        {...pickerBackdropProps}>
        <PickerContainer
          isVisible={isVisible}
          entering={pickerContainerEntering}
          exiting={pickerContainerExiting}
          style={StyleSheet.flatten([styles.pickerContainer, pickerContainerStyle])}
          {...pickerContainerProps}>
          {pickerAccessoryComponent ? (
            pickerAccessoryComponent
          ) : (
            <DefaultPickerAccessory
              onDelete={handleDelete}
              onCancel={handleCancel}
              onDone={handleDone}
              {...pickerAccessoryProps}
            />
          )}
          <View {...pickerItemsContainerProps}>
            {pickerItemsComponent ? (
              pickerItemsComponent
            ) : (
              <SelectPickerItems
                selectedValue={selectedItemKey}
                items={items}
                onValueChange={onValueChange}
                keyExtractor={keyExtractor}
                {...pickerProps}
              />
            )}
          </View>
        </PickerContainer>
      </PickerBackdrop>
      <Pressable onPress={open} testID="pressableContainer">
        <View pointerEvents="box-only">
          {textInputComponent ? (
            textInputComponent
          ) : (
            // テキスト入力とスタイルを合わせるために、TextではなくTextInputを使用する
            <TextInput placeholder={placeholder} value={inputValue} editable={false} {...textInputProps} />
          )}
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: 'white',
  },
});
