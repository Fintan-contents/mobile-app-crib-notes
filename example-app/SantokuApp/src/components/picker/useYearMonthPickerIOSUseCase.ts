import {useMemo} from 'react';

import {YearMonthPickerProps} from './YearMonthPicker';
import {useYearMonthPickerUseCase} from './useYearMonthPickerUseCase';

export const useYearMonthPickerIOSUseCase = (props: YearMonthPickerProps) => {
  const {unselectItem, ...yearMonthPickerProps} = props;
  const {selectedYear, selectedMonth, ...useCase} = useYearMonthPickerUseCase(yearMonthPickerProps);
  const {maximumYearMonth, minimumYearMonth, yearSuffixLabel, monthSuffixLabel, itemColor, itemFontFamily} =
    yearMonthPickerProps;

  const monthItems = useMemo(() => {
    const maximumYear = maximumYearMonth.year;
    const minimumYear = minimumYearMonth.year;
    const maximumMonth = maximumYearMonth.month;
    const minimumMonth = minimumYearMonth.month;
    if (maximumYear === minimumYear) {
      return [...Array<number>(maximumMonth - minimumMonth + 1)].map((_, index: number) => {
        const m = minimumMonth + index;
        return {value: m, label: String(m), color: itemColor, fontFamily: itemFontFamily};
      });
    }
    return [...Array<number>(12)].map((_, index: number) => {
      const m = index + 1;
      return {value: m, label: String(m), color: itemColor, fontFamily: itemFontFamily};
    });
  }, [
    itemColor,
    itemFontFamily,
    maximumYearMonth.month,
    maximumYearMonth.year,
    minimumYearMonth.month,
    minimumYearMonth.year,
  ]);

  const selectedLabel = useMemo(
    () =>
      selectedYear && selectedMonth
        ? `${selectedYear}${yearSuffixLabel ?? ''}${selectedMonth}${monthSuffixLabel ?? ''}`
        : undefined,
    [monthSuffixLabel, selectedMonth, selectedYear, yearSuffixLabel],
  );

  return {...useCase, selectedYear, selectedMonth, selectedLabel, monthItems};
};
