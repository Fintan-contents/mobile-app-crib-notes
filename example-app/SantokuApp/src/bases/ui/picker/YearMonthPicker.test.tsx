import {fireEvent, render, screen} from '@testing-library/react-native';
import {ApplicationError} from 'bases/core/errors/ApplicationError';
import React from 'react';
import {TextInputProps, ViewProps} from 'react-native';

import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';
import {SelectPickerItemsProps} from './SelectPickerItems';
import {YearMonthPicker} from './YearMonthPicker';
import {YearMonthUtil} from './YearMonthUtil';

jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn().mockReturnValue({width: 400, height: 1000}),
  set: jest.fn(),
  addEventListener: jest.fn().mockReturnValue({remove: jest.fn()}),
}));

describe('YearMonthPicker only with required props', () => {
  beforeAll(() => {
    const mockDate = new Date(2022, 3);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('renders successfully if invisible', () => {
    const now = YearMonthUtil.now();
    render(
      <YearMonthPicker
        maximumYearMonth={now}
        minimumYearMonth={YearMonthUtil.addMonth(now, -60)}
        selectedValue={now}
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{pressableProps: {testID: 'pickerBackdrop'}}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );

    expect(screen).toMatchSnapshot('YearMonthPicker if invisible.');

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
    const now = YearMonthUtil.now();
    render(
      <YearMonthPicker
        maximumYearMonth={now}
        minimumYearMonth={YearMonthUtil.addMonth(now, -60)}
        selectedValue={now}
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{pressableProps: {testID: 'pickerBackdrop'}}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );
    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(screen).toMatchSnapshot('YearMonthPicker if visible.');

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

    const textInputProps = textInput?.props as TextInputProps;
    expect(textInputProps.value).toBe('20224');
  });
});

describe('YearMonthPicker with various maximum and minimum yearMonth', () => {
  it('same yearMonth', () => {
    const yearMonth = {year: 2022, month: 4};
    render(<YearMonthPicker maximumYearMonth={yearMonth} minimumYearMonth={yearMonth} selectedValue={yearMonth} />);

    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    const yearPicker = screen.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([{value: 2022, label: '2022'}]);
    const monthPicker = screen.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.items).toEqual([{value: 4, label: '4'}]);
  });

  it('same year and different month', () => {
    const maximumYearMonth = {year: 2022, month: 4};
    const minimumYearMonth = {year: 2022, month: 1};
    render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={maximumYearMonth}
      />,
    );

    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    const yearPicker = screen.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([{value: 2022, label: '2022'}]);
    const monthPicker = screen.getByTestId('monthPicker');
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
    render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={maximumYearMonth}
      />,
    );

    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    const yearPicker = screen.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([
      {value: 2021, label: '2021'},
      {value: 2022, label: '2022'},
    ]);
    const monthPicker = screen.getByTestId('monthPicker');
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
    const screen = render(
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
        itemColor="yellow"
        itemFontFamily="Roboto"
      />,
    );
    const pressableContainer = screen.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(screen).toMatchSnapshot('YearMonthPicker all properly.');

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
    const yearPicker = screen.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.numberOfLines).toBe(5);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(yearPickerProps.items.length).toBe(6);
    const monthPicker = screen.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.numberOfLines).toBe(5);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(monthPickerProps.items.length).toBe(12);
    const yearSuffix = screen.queryByText('年');
    const monthSuffix = screen.queryByText('月');
    expect(yearSuffix).not.toBeNull();
    expect(monthSuffix).not.toBeNull();

    // assert textInput
    const textInput = screen.getByTestId('textInput');
    const textInputProps = textInput.props as TextInputProps;
    expect(textInputProps.style).toEqual({color: 'red'});
    expect(textInputProps.value).toBe('2022年4月');

    // assert pickerBackdrop
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
});
