import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {TextInputProps, View, ViewProps} from 'react-native';

import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';
import {Item, SelectPicker} from './SelectPicker';
import {SelectPickerItemsProps} from './SelectPickerItems';

describe('SelectPicker only with required props', () => {
  it('renders successfully if invisible', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const sut = render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{testID: 'pickerBackdrop'}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );

    expect(sut).toMatchSnapshot('SelectPicker if invisible.');

    const pickerBackdrop = sut.queryByTestId('pickerBackdrop');
    const pickerContainer = sut.queryByTestId('pickerContainer');
    const pickerAccessory = sut.queryByTestId('pickerAccessory');
    const pickerItemsContainer = sut.queryByTestId('pickerItemsContainer');
    const textInput = sut.queryByTestId('textInput');
    expect(pickerBackdrop).toBeNull();
    expect(pickerContainer).toBeNull();
    expect(pickerAccessory).toBeNull();
    expect(pickerItemsContainer).toBeNull();
    expect(textInput).not.toBeNull();
  });

  it('renders successfully if visible', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const sut = render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{testID: 'pickerBackdrop'}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('SelectPicker if visible.');

    const pickerBackdrop = sut.queryByTestId('pickerBackdrop');
    const pickerContainer = sut.queryByTestId('pickerContainer');
    const pickerAccessory = sut.queryByTestId('pickerAccessory');
    const pickerItemsContainer = sut.queryByTestId('pickerItemsContainer');
    const textInput = sut.queryByTestId('textInput');
    expect(pickerBackdrop).not.toBeNull();
    expect(pickerContainer).not.toBeNull();
    expect(pickerAccessory).not.toBeNull();
    expect(pickerItemsContainer).not.toBeNull();
    expect(textInput).not.toBeNull();
  });
});

describe('SelectPicker with all props', () => {
  it('should be applied all properly with default xxx component', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const onSelectedItemChange = jest.fn();
    const onDismiss = jest.fn();
    const onDelete = jest.fn();
    const onCancel = jest.fn();
    const onDone = jest.fn();
    const keyExtractor = jest.fn((item: Item<string>, index: number) => `${String(item.key ?? item.value)}-${index}`);
    const sut = render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        onSelectedItemChange={onSelectedItemChange}
        onDismiss={onDismiss}
        placeholder="please select..."
        keyExtractor={keyExtractor}
        textInputProps={{style: {color: 'red'}, testID: 'textInput'}}
        pickerItemsContainerProps={{pointerEvents: 'none', testID: 'pickerItemsContainer'}}
        pickerProps={{numberOfLines: 5, testID: 'picker'}}
        pickerBackdropProps={{
          style: {backgroundColor: 'green', borderColor: 'red'},
          modalProps: {testID: 'modal'},
          testID: 'pickerBackdrop',
        }}
        pickerContainerProps={{style: {backgroundColor: 'yellow', borderColor: 'black'}, testID: 'pickerContainer'}}
        pickerAccessoryProps={{
          containerProps: {style: {backgroundColor: 'blue'}, testID: 'pickerAccessory'},
          deleteLabel: 'delete',
          cancelLabel: 'cancel',
          doneLabel: 'done',
          deleteTouchableContainerProps: {testID: 'deleteLink'},
          cancelTouchableContainerProps: {testID: 'cancelLink'},
          doneTouchableContainerProps: {testID: 'doneLink'},
        }}
        onDelete={onDelete}
        onCancel={onCancel}
        onDone={onDone}
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('SelectPicker all properly with default xxx component.');

    // assert pickerContainer
    const pickerContainer = sut.getByTestId('pickerContainer');
    const pickerContainerProps = pickerContainer.props as PickerContainerProps;
    expect(pickerContainerProps.style).toEqual({backgroundColor: 'yellow', borderColor: 'black'});

    // assert pickerItemsContainer
    const pickerItemsContainer = sut.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert PickerItems
    const picker = sut.getByTestId('picker');
    const pickerProps = picker.props as SelectPickerItemsProps<string>;
    expect(pickerProps.numberOfLines).toBe(5);
    expect(pickerProps.items.length).toBe(2);

    // assert textInput
    const textInput = sut.getByTestId('textInput');
    const textInputProps = textInput.props as TextInputProps;
    expect(textInputProps.style).toEqual({color: 'red'});
    expect(keyExtractor).toHaveBeenNthCalledWith(1, {value: '1', label: 'test1'}, 0);
    expect(keyExtractor).toHaveBeenNthCalledWith(2, {value: '2', label: 'test2'}, 1);

    // assert pickerBackdrop
    const pickerBackdrop = sut.getByTestId('pickerBackdrop');
    const modal = sut.getByTestId('modal');
    const pickerBackdropProps = pickerBackdrop.props as PickerBackdropProps;
    fireEvent(modal, 'onRequestClose');
    expect(pickerBackdropProps.style).toEqual({flex: 1, backgroundColor: 'green', borderColor: 'red'});
    expect(onDismiss).toHaveBeenCalledTimes(1);

    fireEvent.press(pressableContainer);

    // assert pickerAccessory
    const pickerAccessory = sut.getByTestId('pickerAccessory');
    const pickerAccessoryProps = pickerAccessory.props as ViewProps;
    expect(pickerAccessoryProps.style).toEqual({
      backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingVertical: 8,
    });
    const deleteLink = sut.getByTestId('deleteLink');
    const deleteText = sut.queryByText('delete');
    expect(deleteText).not.toBeNull();
    fireEvent.press(deleteLink);
    expect(onDelete).toHaveBeenCalledTimes(1);
    fireEvent.press(pressableContainer);
    const cancelLink = sut.getByTestId('cancelLink');
    const cancelText = sut.queryByText('cancel');
    expect(cancelText).not.toBeNull();
    fireEvent.press(cancelLink);
    expect(onCancel).toHaveBeenCalledTimes(1);
    fireEvent.press(pressableContainer);
    const doneLink = sut.getByTestId('doneLink');
    const doneText = sut.queryByText('done');
    expect(doneText).not.toBeNull();
    fireEvent.press(doneLink);
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it('should be applied all properly with custom xxx component', () => {
    const CustomPickerAccessory = <View testID="customPickerAccessory" />;
    const CustomPicker = <View testID="customPicker" />;
    const CustomTextInput = <View testID="customTextInput" />;
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    const onSelectedItemChange = jest.fn();
    const onDismiss = jest.fn();
    const sut = render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        onSelectedItemChange={onSelectedItemChange}
        onDismiss={onDismiss}
        placeholder="please select..."
        textInputProps={{testID: 'defaultTextInput'}}
        pickerItemsContainerProps={{pointerEvents: 'none', testID: 'pickerItemsContainer'}}
        pickerProps={{testID: 'defaultPicker'}}
        pickerBackdropProps={{
          style: {backgroundColor: 'green', borderColor: 'red'},
          modalProps: {testID: 'modal'},
          testID: 'pickerBackdrop',
        }}
        pickerContainerProps={{style: {backgroundColor: 'yellow', borderColor: 'black'}, testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'defaultPickerAccessory'}}}
        pickerAccessoryComponent={CustomPickerAccessory}
        pickerItemsComponent={CustomPicker}
        textInputComponent={CustomTextInput}
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('SelectPicker all properly with custom xxx component.');

    // assert pickerBackdrop
    const pickerBackdrop = sut.getByTestId('pickerBackdrop');
    const modal = sut.getByTestId('modal');
    const pickerBackdropProps = pickerBackdrop.props as PickerBackdropProps;
    fireEvent(modal, 'onRequestClose');
    expect(pickerBackdropProps.style).toEqual({flex: 1, backgroundColor: 'green', borderColor: 'red'});
    expect(onDismiss).toHaveBeenCalledTimes(1);

    fireEvent.press(pressableContainer);

    // assert pickerContainer
    const pickerContainer = sut.getByTestId('pickerContainer');
    const pickerContainerProps = pickerContainer.props as PickerContainerProps;
    expect(pickerContainerProps.style).toEqual({backgroundColor: 'yellow', borderColor: 'black'});

    // assert pickerAccessory
    const defaultPickerAccessory = sut.queryByTestId('defaultPickerAccessory');
    const customPickerAccessory = sut.queryByTestId('customPickerAccessory');
    expect(defaultPickerAccessory).toBeNull();
    expect(customPickerAccessory).not.toBeNull();

    // assert pickerItemsContainer
    const pickerItemsContainer = sut.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert Picker
    const defaultPicker = sut.queryByTestId('defaultPicker');
    const customPicker = sut.queryByTestId('customPicker');
    expect(defaultPicker).toBeNull();
    expect(customPicker).not.toBeNull();

    // assert textInput
    const defaultTextInput = sut.queryByTestId('defaultTextInput');
    const customTextInput = sut.queryByTestId('customTextInput');
    expect(defaultTextInput).toBeNull();
    expect(customTextInput).not.toBeNull();
  });
});
