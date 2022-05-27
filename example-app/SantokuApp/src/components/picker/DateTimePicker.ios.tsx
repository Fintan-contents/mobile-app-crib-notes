import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';

import {DateTimePickerProps} from './DateTimePicker';
import {DateTimePickerItems, DateTimePickerItemsIOSProps} from './DateTimePickerItems';
import {DefaultPickerAccessory} from './DefaultPickerAccessory';
import {PickerBackdrop} from './PickerBackdrop';
import {PickerContainer} from './PickerContainer';
import {useDateTimePickerUseCase} from './useDateTimePickerUseCase';

type DateTimePickerIOSProps = Omit<DateTimePickerProps, 'pickerItemsProps'> & {
  pickerItemsProps: Omit<
    DateTimePickerItemsIOSProps,
    'value' | 'onChange' | 'mode' | 'display' | 'maximumDate' | 'minimumDate'
  >;
};
export const DateTimePicker = (props: DateTimePickerIOSProps) => {
  const {
    isVisible,
    requiredSelectedValue,
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
  } = useDateTimePickerUseCase(props);
  const {
    maximumDate,
    minimumDate,
    mode,
    displayIOS,
    placeholder,
    textInputProps,
    pickerAccessoryComponent,
    pickerItemsComponent,
    textInputComponent,
    pickerItemsContainerProps: {style: pickerItemsContainerStyle, ...pickerItemsContainerProps} = {},
    pickerItemsProps,
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
              <DateTimePickerItems
                value={requiredSelectedValue}
                onChange={onValueChange}
                mode={mode}
                display={displayIOS}
                maximumDate={maximumDate}
                minimumDate={minimumDate}
                {...pickerItemsProps}
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
