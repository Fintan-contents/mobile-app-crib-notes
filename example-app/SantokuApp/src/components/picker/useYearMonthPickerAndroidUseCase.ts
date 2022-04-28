import React, {useCallback, useMemo} from 'react';

import {Item} from './SelectPicker';
import {YearMonthPickerProps} from './YearMonthPicker';
import {useYearMonthPickerUseCase} from './useYearMonthPickerUseCase';

export const useYearMonthPickerAndroidUseCase = (props: YearMonthPickerProps) => {
  const {selectedYear, selectedMonth, getSelectedYearMonth, ...useCase} = useYearMonthPickerUseCase(props);
  const {
    maximumYearMonth,
    minimumYearMonth,
    unselectItem,
    onDone,
    onSelectedItemChange,
    itemColor,
    itemFontFamily,
    itemStyle,
  } = props;

  const withUnselectItem = useCallback(
    (items: Item<number>[]) => (unselectItem ? [unselectItem].concat(items) : items),
    [unselectItem],
  );

  const monthItems = useMemo(() => {
    const maximumYear = maximumYearMonth.year;
    const minimumYear = minimumYearMonth.year;
    const maximumMonth = maximumYearMonth.month;
    const minimumMonth = minimumYearMonth.month;

    const itemProps = {color: itemColor, fontFamily: itemFontFamily, style: itemStyle};
    if (maximumYear === minimumYear) {
      const items = [...Array<number>(maximumMonth - minimumMonth + 1)].map((_, index: number) => {
        const m = minimumMonth + index;
        return {value: m, label: String(m), ...itemProps};
      });
      return withUnselectItem(items);
    }

    if (selectedYear === maximumYear) {
      const items = [...Array<number>(maximumMonth)].map((_, index: number) => {
        const m = index + 1;
        return {value: m, label: String(m), ...itemProps};
      });
      return withUnselectItem(items);
    }

    if (selectedYear === minimumYear) {
      const items = [...Array<number>(12 - minimumMonth + 1)].map((_, index: number) => {
        const m = minimumMonth + index;
        return {value: m, label: String(m), ...itemProps};
      });
      return withUnselectItem(items);
    }

    const items = [...Array<number>(12)].map((_, index: number) => {
      const m = index + 1;
      return {value: m, label: String(m), ...itemProps};
    });
    return withUnselectItem(items);
  }, [
    itemColor,
    itemFontFamily,
    itemStyle,
    maximumYearMonth.month,
    maximumYearMonth.year,
    minimumYearMonth.month,
    minimumYearMonth.year,
    selectedYear,
    withUnselectItem,
  ]);

  const selectedYearLabel = useMemo(() => (selectedYear ? String(selectedYear) : undefined), [selectedYear]);
  const selectedMonthLabel = useMemo(() => (selectedMonth ? String(selectedMonth) : undefined), [selectedMonth]);
  const onValueChangeYear = useCallback(
    (value: React.Key) => {
      const year = value as number;
      const selectedYearMonth = getSelectedYearMonth({year, month: selectedMonth});
      onSelectedItemChange?.(selectedYearMonth);
      onDone?.(selectedYearMonth);
    },
    [getSelectedYearMonth, onDone, onSelectedItemChange, selectedMonth],
  );
  const onValueChangeMonth = useCallback(
    (value: React.Key) => {
      const month = value as number;
      const selectedYearMonth = getSelectedYearMonth({year: selectedYear, month});
      onSelectedItemChange?.(getSelectedYearMonth(selectedYearMonth));
      onDone?.(selectedYearMonth);
    },
    [getSelectedYearMonth, onDone, onSelectedItemChange, selectedYear],
  );

  return {
    ...useCase,
    selectedYear,
    selectedMonth,
    selectedYearLabel,
    selectedMonthLabel,
    monthItems,
    onValueChangeYear,
    onValueChangeMonth,
  };
};
