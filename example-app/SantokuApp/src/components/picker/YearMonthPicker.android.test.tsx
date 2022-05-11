import {render} from '@testing-library/react-native';
import React from 'react';
import {TextInputProps, ViewProps} from 'react-native';

import {ApplicationError} from '../../framework/error/ApplicationError';
import {SelectPickerItemsProps} from './SelectPickerItems';
import {YearMonthPicker} from './YearMonthPicker.android';
import {YearMonthUtil} from './YearMonthUtil';

describe('YearMonthPicker only with required props', () => {
  beforeAll(() => {
    const mockDate = new Date(2022, 3);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('renders successfully', () => {
    const now = YearMonthUtil.now();
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={now}
        minimumYearMonth={YearMonthUtil.addMonth(now, -60)}
        selectedValue={now}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );

    expect(sut).toMatchSnapshot('YearMonthPicker only with required props.');

    const pickerItemsContainer = sut.queryByTestId('pickerItemsContainer');
    const yearTextInput = sut.queryByTestId('yearTextInput');
    const monthTextInput = sut.queryByTestId('monthTextInput');
    expect(pickerItemsContainer).not.toBeNull();
    expect(yearTextInput).not.toBeNull();
    expect(monthTextInput).not.toBeNull();

    const yearTextInputProps = yearTextInput?.props as TextInputProps;
    expect(yearTextInputProps.value).toBe('2022');
    const monthTextInputProps = monthTextInput?.props as TextInputProps;
    expect(monthTextInputProps.value).toBe('4');
  });
});

describe('YearMonthPicker with various maximum and minimum yearMonth', () => {
  it('same yearMonth', () => {
    const yearMonth = {year: 2022, month: 4};
    const sut = render(
      <YearMonthPicker maximumYearMonth={yearMonth} minimumYearMonth={yearMonth} selectedValue={undefined} />,
    );

    const yearPicker = sut.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([{value: 2022, label: '2022'}]);
    const monthPicker = sut.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.items).toEqual([{value: 4, label: '4'}]);

    sut.update(
      <YearMonthPicker
        maximumYearMonth={yearMonth}
        minimumYearMonth={yearMonth}
        selectedValue={{year: yearMonth.year}}
      />,
    );

    const yearPicker2 = sut.getByTestId('yearPicker');
    const yearPickerProps2 = yearPicker2.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps2.items).toEqual([{value: 2022, label: '2022'}]);
    const monthPicker2 = sut.getByTestId('monthPicker');
    const monthPickerProps2 = monthPicker2.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps2.items).toEqual([{value: 4, label: '4'}]);
  });

  it('same year and different month', () => {
    const maximumYearMonth = {year: 2022, month: 4};
    const minimumYearMonth = {year: 2022, month: 1};
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={undefined}
      />,
    );

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

    sut.update(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={{year: maximumYearMonth.year}}
      />,
    );

    const yearPicker2 = sut.getByTestId('yearPicker');
    const yearPickerProps2 = yearPicker2.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps2.items).toEqual([{value: 2022, label: '2022'}]);
    const monthPicker2 = sut.getByTestId('monthPicker');
    const monthPickerProps2 = monthPicker2.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps2.items).toEqual([
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
        selectedValue={undefined}
      />,
    );

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

    // 最大年を選択
    sut.update(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={{year: maximumYearMonth.year}}
      />,
    );

    const yearPicker2 = sut.getByTestId('yearPicker');
    const yearPickerProps2 = yearPicker2.props as SelectPickerItemsProps<string>;

    expect(yearPickerProps2.items).toEqual([
      {value: 2021, label: '2021'},
      {value: 2022, label: '2022'},
    ]);

    const monthPicker2 = sut.getByTestId('monthPicker');
    const monthPickerProps2 = monthPicker2.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps2.items).toEqual([
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '4'},
    ]);

    // 最小年を選択
    sut.update(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={{year: minimumYearMonth.year}}
      />,
    );

    const yearPicker3 = sut.getByTestId('yearPicker');
    const yearPickerProps3 = yearPicker3.props as SelectPickerItemsProps<string>;

    expect(yearPickerProps3.items).toEqual([
      {value: 2021, label: '2021'},
      {value: 2022, label: '2022'},
    ]);

    const monthPicker3 = sut.getByTestId('monthPicker');
    const monthPickerProps3 = monthPicker3.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps3.items).toEqual([
      {value: 11, label: '11'},
      {value: 12, label: '12'},
    ]);
  });

  it('with unselectItem', () => {
    const maximumYearMonth = {year: 2022, month: 4};
    const minimumYearMonth = {year: 2022, month: 2};
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        selectedValue={maximumYearMonth}
        unselectItem={{value: undefined, label: 'please select...'}}
      />,
    );

    const yearPicker = sut.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.items).toEqual([
      {value: undefined, label: 'please select...'},
      {value: 2022, label: '2022'},
    ]);
    const monthPicker = sut.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.items).toEqual([
      {value: undefined, label: 'please select...'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '4'},
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
    const onDone = jest.fn();
    /**
     * onDoneは自動テストではイベント発火できませんでした
     */
    const sut = render(
      <YearMonthPicker
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={YearMonthUtil.addMonth(maximumYearMonth, -60)}
        unselectItem={{value: undefined, label: 'please select...'}}
        yearSuffixLabel="年"
        monthSuffixLabel="月"
        selectedValue={maximumYearMonth}
        onSelectedItemChange={onSelectedItemChange}
        placeholder="please select..."
        textInputProps={{style: {color: 'red'}}}
        pickerItemsContainerProps={{pointerEvents: 'none', testID: 'pickerItemsContainer'}}
        pickerProps={{numberOfLines: 5}}
        onDone={onDone}
        itemColor="yellow"
        itemFontFamily="Roboto"
        itemStyle={{backgroundColor: 'red'}}
      />,
    );

    expect(sut).toMatchSnapshot('YearMonthPicker all properly.');

    // assert pickerItemsContainer
    const pickerItemsContainer = sut.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert PickerItems
    const yearPicker = sut.getByTestId('yearPicker');
    const yearPickerProps = yearPicker.props as SelectPickerItemsProps<string>;
    expect(yearPickerProps.numberOfLines).toBe(5);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(yearPickerProps.items.length).toBe(7);
    const monthPicker = sut.getByTestId('monthPicker');
    const monthPickerProps = monthPicker.props as SelectPickerItemsProps<string>;
    expect(monthPickerProps.numberOfLines).toBe(5);
    // itemsは、Itemの各Propを検証できなかったため、件数のみ検証する
    expect(monthPickerProps.items.length).toBe(5);
    const yearSuffix = sut.queryByText('年');
    const monthSuffix = sut.queryByText('月');
    expect(yearSuffix).not.toBeNull();
    expect(monthSuffix).not.toBeNull();

    // assert textInput
    const yearTextInput = sut.getByTestId('yearTextInput');
    const monthTextInput = sut.getByTestId('monthTextInput');
    const yearTextInputProps = yearTextInput.props as TextInputProps;
    expect(yearTextInputProps.style).toEqual({color: 'red'});
    expect(yearTextInputProps.value).toBe('2022');
    const monthTextInputProps = monthTextInput.props as TextInputProps;
    expect(monthTextInputProps.style).toEqual({color: 'red'});
    expect(monthTextInputProps.value).toBe('4');
  });
});
