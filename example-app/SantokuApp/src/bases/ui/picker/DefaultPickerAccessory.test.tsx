import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {ViewProps} from 'react-native';
import {Text, TextProps} from 'react-native-elements';

import {DefaultPickerAccessory} from './DefaultPickerAccessory';

describe('PickerAccessory with `xxxLabel`', () => {
  it('renders successfully only with delete link', () => {
    const onDelete = jest.fn();
    render(
      <DefaultPickerAccessory
        deleteLabel="delete"
        onDelete={onDelete}
        deleteTouchableContainerProps={{testID: 'deleteLink'}}
      />,
    );
    const deleteLink = screen.getByTestId('deleteLink');
    const cancelLink = screen.queryByTestId('cancelLink');
    const doneLink = screen.queryByTestId('doneLink');
    const deleteText = screen.queryByText('delete');
    fireEvent.press(deleteLink);
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(deleteText).not.toBeNull();
    expect(cancelLink).toBeNull();
    expect(doneLink).toBeNull();
  });

  it('renders successfully only with cancel link', () => {
    const onCancel = jest.fn();
    render(
      <DefaultPickerAccessory
        cancelLabel="cancel"
        onCancel={onCancel}
        cancelTouchableContainerProps={{testID: 'cancelLink'}}
      />,
    );
    const deleteLink = screen.queryByTestId('deleteLink');
    const cancelLink = screen.getByTestId('cancelLink');
    const doneLink = screen.queryByTestId('doneLink');
    const cancelText = screen.queryByText('cancel');
    fireEvent.press(cancelLink);
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(cancelText).not.toBeNull();
    expect(deleteLink).toBeNull();
    expect(doneLink).toBeNull();
  });

  it('renders successfully only with done link', () => {
    const onDone = jest.fn();
    render(
      <DefaultPickerAccessory doneLabel="done" onDone={onDone} doneTouchableContainerProps={{testID: 'doneLink'}} />,
    );
    const deleteLink = screen.queryByTestId('deleteLink');
    const cancelLink = screen.queryByTestId('cancelLink');
    const doneLink = screen.getByTestId('doneLink');
    const doneText = screen.queryByText('done');
    fireEvent.press(doneLink);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(doneText).not.toBeNull();
    expect(deleteLink).toBeNull();
    expect(cancelLink).toBeNull();
  });
});

describe('PickerAccessory with all props', () => {
  it('should be applied properly with default text component', () => {
    const onDelete = jest.fn();
    const onCancel = jest.fn();
    const onDone = jest.fn();
    render(
      <DefaultPickerAccessory
        containerProps={{style: {backgroundColor: 'red'}, testID: 'PickerAccessory'}}
        onDelete={onDelete}
        onCancel={onCancel}
        onDone={onDone}
        deleteLabel="delete"
        cancelLabel="cancel"
        doneLabel="done"
        deleteTextProps={{style: {color: 'yellow'}, testID: 'deleteText'}}
        cancelTextProps={{style: {color: 'green'}, testID: 'cancelText'}}
        doneTextProps={{style: {color: 'aqua'}, testID: 'doneText'}}
        deleteTouchableContainerProps={{testID: 'deleteLink'}}
        cancelTouchableContainerProps={{testID: 'cancelLink'}}
        doneTouchableContainerProps={{testID: 'doneLink'}}
      />,
    );
    expect(screen).toMatchSnapshot('PickerAccessory with all props(default text component ).');
    const pickerAccessory = screen.getByTestId('PickerAccessory');
    const deleteLink = screen.getByTestId('deleteLink');
    const cancelLink = screen.getByTestId('cancelLink');
    const doneLink = screen.getByTestId('doneLink');
    const deleteTextComponent = screen.getByTestId('deleteText');
    const cancelTextComponent = screen.getByTestId('cancelText');
    const doneTextComponent = screen.getByTestId('doneText');
    const deleteText = screen.queryByText('delete');
    const cancelText = screen.queryByText('cancel');
    const doneText = screen.queryByText('done');

    fireEvent.press(deleteLink);
    fireEvent.press(cancelLink);
    fireEvent.press(doneLink);

    const pickerAccessoryProps = pickerAccessory.props as ViewProps;
    const deleteTextProps = deleteTextComponent.props as TextProps;
    const cancelTextProps = cancelTextComponent.props as TextProps;
    const doneTextProps = doneTextComponent.props as TextProps;
    expect(pickerAccessoryProps.style).toEqual({
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: 'red',
    });
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(deleteTextProps.style).toEqual({color: 'yellow', fontWeight: 'bold', paddingHorizontal: 10});
    expect(cancelTextProps.style).toEqual({color: 'green', fontWeight: 'bold', paddingHorizontal: 10});
    expect(doneTextProps.style).toEqual({color: 'aqua', fontWeight: 'bold', paddingHorizontal: 10});
    expect(deleteText).not.toBeNull();
    expect(cancelText).not.toBeNull();
    expect(doneText).not.toBeNull();
  });

  it('should be applied properly with custom text component', () => {
    const onDelete = jest.fn();
    const onCancel = jest.fn();
    const onDone = jest.fn();
    const DeleteTextComponent = (
      <Text style={{color: 'grey', backgroundColor: 'yellow'}} testID="deleteText">
        deleteWithRNEText
      </Text>
    );
    const CancelTextComponent = (
      <Text style={{color: 'black', backgroundColor: 'green'}} testID="cancelText">
        cancelWithRNEText
      </Text>
    );
    const DoneTextComponent = (
      <Text style={{color: 'blue', backgroundColor: 'aqua'}} testID="doneText">
        doneWithRNEText
      </Text>
    );
    render(
      <DefaultPickerAccessory
        containerProps={{style: {backgroundColor: 'red'}, testID: 'PickerAccessory'}}
        onDelete={onDelete}
        onCancel={onCancel}
        onDone={onDone}
        deleteLabel="delete"
        cancelLabel="cancel"
        doneLabel="done"
        deleteTextProps={{style: {color: 'yellow'}, testID: 'deleteText'}}
        cancelTextProps={{style: {color: 'green'}, testID: 'cancelText'}}
        doneTextProps={{style: {color: 'aqua'}, testID: 'doneText'}}
        deleteTouchableContainerProps={{testID: 'deleteLink'}}
        cancelTouchableContainerProps={{testID: 'cancelLink'}}
        doneTouchableContainerProps={{testID: 'doneLink'}}
        deleteTextComponent={DeleteTextComponent}
        cancelTextComponent={CancelTextComponent}
        doneTextComponent={DoneTextComponent}
      />,
    );
    expect(screen).toMatchSnapshot('PickerAccessory with all props(custom text component ).');
    const pickerAccessory = screen.getByTestId('PickerAccessory');
    const deleteLink = screen.getByTestId('deleteLink');
    const cancelLink = screen.getByTestId('cancelLink');
    const doneLink = screen.getByTestId('doneLink');
    const deleteTextComponent = screen.getByTestId('deleteText');
    const cancelTextComponent = screen.getByTestId('cancelText');
    const doneTextComponent = screen.getByTestId('doneText');
    const deleteText = screen.queryByText('deleteWithRNEText');
    const cancelText = screen.queryByText('cancelWithRNEText');
    const doneText = screen.queryByText('doneWithRNEText');

    fireEvent.press(deleteLink);
    fireEvent.press(cancelLink);
    fireEvent.press(doneLink);

    const pickerAccessoryProps = pickerAccessory.props as ViewProps;
    const deleteTextProps = deleteTextComponent.props as TextProps;
    const cancelTextProps = cancelTextComponent.props as TextProps;
    const doneTextProps = doneTextComponent.props as TextProps;
    expect(pickerAccessoryProps.style).toEqual({
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: 'red',
    });
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(deleteTextProps.style).toEqual({color: 'grey', backgroundColor: 'yellow'});
    expect(cancelTextProps.style).toEqual({color: 'black', backgroundColor: 'green'});
    expect(doneTextProps.style).toEqual({color: 'blue', backgroundColor: 'aqua'});
    expect(deleteText).not.toBeNull();
    expect(cancelText).not.toBeNull();
    expect(doneText).not.toBeNull();
  });
});
