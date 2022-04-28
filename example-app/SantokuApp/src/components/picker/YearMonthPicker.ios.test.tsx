import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {TextInputProps, ViewProps} from 'react-native';

import {ApplicationError} from '../../framework/error/ApplicationError';
import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';
import {SelectPickerItemsProps} from './SelectPickerItems';
import {YearMonthPicker} from './YearMonthPicker.ios';
import {YearMonthUtil} from './YearMonthUtil';

describe('YearMonthPicker only with required props', () => {
  it('renders successfully if invisible', () => {
    const now = YearMonthUtil.now();
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={now}
        minimumYearMonth={YearMonthUtil.addMonth(now, -60)}
        selectedValue={now}
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{testID: 'pickerBackdrop'}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );

    expect(sut).toMatchSnapshot('YearMonthPicker if invisible.');

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
    const now = YearMonthUtil.now();
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={now}
        minimumYearMonth={YearMonthUtil.addMonth(now, -60)}
        selectedValue={now}
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{testID: 'pickerBackdrop'}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('YearMonthPicker if visible.');

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

    const textInputProps = textInput?.props as TextInputProps;
    expect(textInputProps.value).toBe('20224');
  });
});

describe('YearMonthPicker with various maximum and minimum yearMonth', () => {
  it('same yearMonth', () => {
    const yearMonth = {year: 2022, month: 4};
    const sut = render(
      <YearMonthPicker maximumYearMonth={yearMonth} minimumYearMonth={yearMonth} selectedValue={yearMonth} />,
    );

    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    const yearPicker = sut.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([{value: 2022, label: '2022'}]);
    const monthPicker = sut.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.items).toEqual([{value: 4, label: '4'}]);
  });

  it('same year and different month', () => {
    const maximumYearMonth = {year: 2022, month: 4};
    const minimumYearMonth = {year: 2022, month: 1};
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={maximumYearMonth}
      />,
    );

    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    const yearPicker = sut.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([{value: 2022, label: '2022'}]);
    const monthPicker = sut.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.items).toEqual([
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '4'},
    ]);
  });

  it('different year', () => {
    const maximumYearMonth = {year: 2022, month: 4};
    const minimumYearMonth = {year: 2021, month: 11};
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={maximumYearMonth}
      />,
    );

    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    const yearPicker = sut.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([
      {value: 2021, label: '2021'},
      {value: 2022, label: '2022'},
    ]);
    const monthPicker = sut.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.items).toEqual([
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '4'},
      {value: 5, label: '5'},
      {value: 6, label: '6'},
      {value: 7, label: '7'},
      {value: 8, label: '8'},
      {value: 9, label: '9'},
      {value: 10, label: '10'},
      {value: 11, label: '11'},
      {value: 12, label: '12'},
    ]);
  });

  it('maximum < minimum', () => {
    // コンポーネントマウント時のエラーログが出力されないようにモック化しておく
    jest.spyOn(console, 'error').mockImplementation();
    const maximumYearMonth = {year: 2022, month: 4};
    const minimumYearMonth = {year: 2022, month: 5};
    expect(() =>
      render(
        <YearMonthPicker
          maximumYearMonth={maximumYearMonth}
          minimumYearMonth={minimumYearMonth}
          selectedValue={maximumYearMonth}
        />,
      ),
    ).toThrow(new ApplicationError('Maximum yearMonth must be greater than or equal to minimum yearMonth.'));
  });
});

describe('YearMonthPicker with all props', () => {
  it('should be applied all properly', () => {
    const maximumYearMonth = {year: 2022, month: 4};
    const onSelectedItemChange = jest.fn();
    const onDismiss = jest.fn();
    const onDelete = jest.fn();
    const onCancel = jest.fn();
    const onDone = jest.fn();
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={YearMonthUtil.addMonth(maximumYearMonth, -60)}
        yearSuffixLabel="年"
        monthSuffixLabel="月"
        selectedValue={maximumYearMonth}
        onSelectedItemChange={onSelectedItemChange}
        onDismiss={onDismiss}
        placeholder="please select..."
        textInputProps={{style: {color: 'red'}, testID: 'textInput'}}
        pickerItemsContainerProps={{pointerEvents: 'none', testID: 'pickerItemsContainer'}}
        pickerProps={{numberOfLines: 5}}
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
        itemColor="yellow"
        itemFontFamily="Roboto"
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('YearMonthPicker all properly.');

    // assert pickerContainer
    const pickerContainer = sut.getByTestId('pickerContainer');
    const pickerContainerProps = pickerContainer.props as PickerContainerProps;
    expect(pickerContainerProps.style).toEqual({backgroundColor: 'yellow', borderColor: 'black'});

    // assert pickerItemsContainer
    const pickerItemsContainer = sut.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert PickerItems
    const yearPicker = sut.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.numberOfLines).toBe(5);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(yearPickerProps.items.length).toBe(6);
    const monthPicker = sut.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.numberOfLines).toBe(5);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(monthPickerProps.items.length).toBe(12);
    const yearSuffix = sut.queryByText('年');
    const monthSuffix = sut.queryByText('月');
    expect(yearSuffix).not.toBeNull();
    expect(monthSuffix).not.toBeNull();

    // assert textInput
    const textInput = sut.getByTestId('textInput');
    const textInputProps = textInput.props as TextInputProps;
    expect(textInputProps.style).toEqual({color: 'red'});
    expect(textInputProps.value).toBe('2022年4月');

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
});
