import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {TextInputProps, View, ViewProps} from 'react-native';

import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';
import {Item, SelectPicker} from './SelectPicker';
import {SelectPickerItemsProps} from './SelectPickerItems';

jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn().mockReturnValue({width: 400, height: 1000}),
  set: jest.fn(),
  addEventListener: jest.fn().mockReturnValue({remove: jest.fn()}),
}));

describe('SelectPicker only with required props', () => {
  it('renders successfully if invisible', () => {
    const items = [
      {value: '1', label: 'test1'},
      {value: '2', label: 'test2'},
    ];
    render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{pressableProps: {testID: 'pickerBackdrop'}}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );

    expect(screen).toMatchSnapshot('SelectPicker if invisible.');

    const pickerBackdrop = screen.queryByTestId('pickerBackdrop');
    const pickerContainer = screen.queryByTestId('pickerContainer');
    const pickerAccessory = screen.queryByTestId('pickerAccessory');
    const pickerItemsContainer = screen.queryByTestId('pickerItemsContainer');
    const textInput = screen.queryByTestId('textInput');
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
    render(
      <SelectPicker
        items={items}
        selectedItemKey="1"
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{pressableProps: {testID: 'pickerBackdrop'}}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );
    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(screen).toMatchSnapshot('SelectPicker if visible.');

    const pickerBackdrop = screen.queryByTestId('pickerBackdrop');
    const pickerContainer = screen.queryByTestId('pickerContainer');
    const pickerAccessory = screen.queryByTestId('pickerAccessory');
    const pickerItemsContainer = screen.queryByTestId('pickerItemsContainer');
    const textInput = screen.queryByTestId('textInput');
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
    render(
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
          modalProps: {testID: 'pickerBackdropModal'},
          pressableProps: {testID: 'pickerBackdropPressable', style: {backgroundColor: 'green', borderColor: 'red'}},
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
    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(screen).toMatchSnapshot('SelectPicker all properly with default xxx component.');

    // assert pickerContainer
    const pickerContainer = screen.getByTestId('pickerContainer');
    const pickerContainerProps = pickerContainer.props as PickerContainerProps;
    expect(pickerContainerProps.style).toEqual({
      backgroundColor: 'yellow',
      borderColor: 'black',
      transform: [{translateY: 1000}],
    });

    // assert pickerItemsContainer
    const pickerItemsContainer = screen.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert PickerItems
    const picker = screen.getByTestId('picker');
    const pickerProps = picker.props as SelectPickerItemsProps<string>;
    expect(pickerProps.numberOfLines).toBe(5);
    expect(pickerProps.items.length).toBe(2);

    // assert textInput
    const textInput = screen.getByTestId('textInput');
    const textInputProps = textInput.props as TextInputProps;
    expect(textInputProps.style).toEqual({color: 'red'});
    expect(keyExtractor).toHaveBeenNthCalledWith(1, {value: '1', label: 'test1'}, 0);
    expect(keyExtractor).toHaveBeenNthCalledWith(2, {value: '2', label: 'test2'}, 1);

    // assert pickerBackdropPressable
    const pickerBackdropPressable = screen.getByTestId('pickerBackdropPressable');
    const pickerBackdropModal = screen.getByTestId('pickerBackdropModal');
    const pickerBackdropProps = pickerBackdropPressable.props as PickerBackdropProps;
    fireEvent(pickerBackdropModal, 'onRequestClose');
    expect(pickerBackdropProps.style).toEqual({
      backgroundColor: 'green',
      borderColor: 'red',
      opacity: 0.4,
      bottom: 0,
      display: 'flex',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    });
    expect(onDismiss).toHaveBeenCalledTimes(1);

    fireEvent.press(pressableContainer);

    // assert pickerAccessory
    const pickerAccessory = screen.getByTestId('pickerAccessory');
    const pickerAccessoryProps = pickerAccessory.props as ViewProps;
    expect(pickerAccessoryProps.style).toEqual({
      backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingVertical: 8,
    });
    const deleteLink = screen.getByTestId('deleteLink');
    const deleteText = screen.queryByText('delete');
    expect(deleteText).not.toBeNull();
    fireEvent.press(deleteLink);
    expect(onDelete).toHaveBeenCalledTimes(1);
    fireEvent.press(pressableContainer);
    const cancelLink = screen.getByTestId('cancelLink');
    const cancelText = screen.queryByText('cancel');
    expect(cancelText).not.toBeNull();
    fireEvent.press(cancelLink);
    expect(onCancel).toHaveBeenCalledTimes(1);
    fireEvent.press(pressableContainer);
    const doneLink = screen.getByTestId('doneLink');
    const doneText = screen.queryByText('done');
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
    render(
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
          modalProps: {testID: 'pickerBackdropModal'},
          pressableProps: {testID: 'pickerBackdropPressable', style: {backgroundColor: 'green', borderColor: 'red'}},
        }}
        pickerContainerProps={{style: {backgroundColor: 'yellow', borderColor: 'black'}, testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'defaultPickerAccessory'}}}
        pickerAccessoryComponent={CustomPickerAccessory}
        pickerItemsComponent={CustomPicker}
        textInputComponent={CustomTextInput}
      />,
    );
    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(screen).toMatchSnapshot('SelectPicker all properly with custom xxx component.');

    // assert pickerBackdropPressable
    const pickerBackdropPressable = screen.getByTestId('pickerBackdropPressable');
    const pickerBackdropModal = screen.getByTestId('pickerBackdropModal');
    const pickerBackdropProps = pickerBackdropPressable.props as PickerBackdropProps;
    fireEvent(pickerBackdropModal, 'onRequestClose');
    expect(pickerBackdropProps.style).toEqual({
      backgroundColor: 'green',
      borderColor: 'red',
      opacity: 0.4,
      bottom: 0,
      display: 'flex',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    });
    expect(onDismiss).toHaveBeenCalledTimes(1);

    fireEvent.press(pressableContainer);

    // assert pickerContainer
    const pickerContainer = screen.getByTestId('pickerContainer');
    const pickerContainerProps = pickerContainer.props as PickerContainerProps;
    expect(pickerContainerProps.style).toEqual({
      backgroundColor: 'yellow',
      borderColor: 'black',
      transform: [{translateY: 1000}],
    });

    // assert pickerAccessory
    const defaultPickerAccessory = screen.queryByTestId('defaultPickerAccessory');
    const customPickerAccessory = screen.queryByTestId('customPickerAccessory');
    expect(defaultPickerAccessory).toBeNull();
    expect(customPickerAccessory).not.toBeNull();

    // assert pickerItemsContainer
    const pickerItemsContainer = screen.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert Picker
    const defaultPicker = screen.queryByTestId('defaultPicker');
    const customPicker = screen.queryByTestId('customPicker');
    expect(defaultPicker).toBeNull();
    expect(customPicker).not.toBeNull();

    // assert textInput
    const defaultTextInput = screen.queryByTestId('defaultTextInput');
    const customTextInput = screen.queryByTestId('customTextInput');
    expect(defaultTextInput).toBeNull();
    expect(customTextInput).not.toBeNull();
  });
});
