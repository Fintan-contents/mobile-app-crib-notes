import React from 'react';
import {Pressable, StyleSheet, TextInput, TextInputProps as RNETextInputProps, View, ViewProps} from 'react-native';

import {DefaultPickerAccessory, DefaultPickerAccessoryProps} from './DefaultPickerAccessory';
import {PickerBackdrop, PickerBackdropProps} from './PickerBackdrop';
import {PickerContainer, PickerContainerProps} from './PickerContainer';
import {SelectPickerItems, SelectPickerItemsProps} from './SelectPickerItems';
import {useSelectPickerUseCase} from './useSelectPickerUseCase';

export type Item<T> = {
  label: string;
  value: T;
  inputLabel?: string;
  key?: React.Key;
  color?: string;
  fontFamily?: string;
};

type TextInputProps = Omit<RNETextInputProps, 'value' | 'editable'>;
export type SelectPickerProps<ItemT> = {
  /**
   * SelectPickerに表示するアイテム
   */
  items: Item<ItemT>[];
  /**
   * 選択されたアイテムのKey
   */
  selectedItemKey?: React.Key | ItemT;
  /**
   * アイテムが選択された場合に呼び出される関数
   */
  onSelectedItemChange?: (selectedItem?: Item<ItemT>) => void;
  /**
   * PickerBackdropをタップして閉じた場合に呼び出される関数
   */
  onDismiss?: (selectedItem?: Item<ItemT>) => void;
  /**
   * DeleteLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  onDelete?: (selectedItem?: Item<ItemT>) => void;
  /**
   * CancelLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  onCancel?: (selectedItem?: Item<ItemT>) => void;
  /**
   * DoneLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  onDone?: (selectedItem?: Item<ItemT>) => void;
  /**
   * プレースホルダ
   */
  placeholder?: string;
  /**
   * ヘッダコンポーネント
   * 指定しない場合は、{@link DefaultPickerAccessory}がデフォルトで表示されます。
   */
  pickerAccessoryComponent?: React.ReactNode;
  /**
   * Pickerコンポーネント
   * 指定しない場合は、{@link SelectPickerItems}がデフォルトで表示されます。
   */
  pickerItemsComponent?: React.ReactNode;
  /**
   * 選択されたアイテムを表示するテキストコンポーネント
   */
  textInputComponent?: React.ReactNode;
  /**
   * Keyを作成する関数
   */
  keyExtractor?: ((item: Item<ItemT>, index: number) => string) | undefined;
  /**
   * 選択されたアイテムを表示するテキストコンポーネントのProps
   * なお、textInputComponentを指定した場合は使用されません。
   */
  textInputProps?: TextInputProps;
  /**
   * Pickerコンポーネントを囲むContainerのProps
   */
  pickerItemsContainerProps?: ViewProps;
  /**
   * PickerのProps
   * なお、pickerItemsComponentを指定した場合は使用されません。
   */
  pickerProps?: Omit<SelectPickerItemsProps<ItemT>, 'items' | 'selectedValue' | 'onValueChange' | 'keyExtractor'>;
  /**
   * PickerBackdropのProps
   */
  pickerBackdropProps?: Omit<PickerBackdropProps, 'isVisible' | 'onPress'>;
  /**
   * PickerContainerのProps
   */
  pickerContainerProps?: Omit<PickerContainerProps, 'isVisible'>;
  /**
   * PickerAccessoryのProps
   * なお、pickerAccessoryComponentを指定した場合は使用されません。
   */
  pickerAccessoryProps?: Omit<DefaultPickerAccessoryProps, 'onDelete' | 'onCancel' | 'onDone'>;
};

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerProps<ItemT>) => {
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
  } = useSelectPickerUseCase<ItemT>(props);
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
