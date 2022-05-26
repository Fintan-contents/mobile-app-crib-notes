import React, {useCallback, useMemo, useState} from 'react';

import {ApplicationError} from '../../framework/error/ApplicationError';
import {PICKER_BACKDROP_DEFAULT_ENTERING, PICKER_BACKDROP_DEFAULT_EXITING} from './PickerBackdrop';
import {PICKER_CONTAINER_DEFAULT_ENTERING, PICKER_CONTAINER_DEFAULT_EXITING} from './PickerContainer';
import {YearMonth} from './YearMonth';
import {YearMonthPickerProps} from './YearMonthPicker';
import {YearMonthUtil} from './YearMonthUtil';

const DEFAULT_DURATION = 500;

export const useYearMonthPickerUseCase = ({
  selectedValue,
  maximumYearMonth,
  minimumYearMonth,
  yearSuffixLabel,
  monthSuffixLabel,
  onSelectedItemChange,
  onDismiss,
  onDelete,
  onCancel,
  onDone,
  pickerBackdropProps: {entering: backdropEntering, exiting: backdropExiting} = {},
  pickerContainerProps: {entering: containerEntering, exiting: containerExiting} = {},
  itemColor,
  itemFontFamily,
}: YearMonthPickerProps) => {
  if (YearMonthUtil.isFuture(minimumYearMonth, maximumYearMonth)) {
    throw new ApplicationError('Maximum yearMonth must be greater than or equal to minimum yearMonth.');
  }
  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => setIsVisible(false), []);
  const pickerBackdropEntering = useMemo(
    () => backdropEntering ?? PICKER_BACKDROP_DEFAULT_ENTERING.duration(DEFAULT_DURATION),
    [backdropEntering],
  );
  const pickerBackdropExiting = useMemo(
    () => backdropExiting ?? PICKER_BACKDROP_DEFAULT_EXITING.duration(DEFAULT_DURATION),
    [backdropExiting],
  );
  const pickerContainerEntering = useMemo(
    () => containerEntering ?? PICKER_CONTAINER_DEFAULT_ENTERING.duration(DEFAULT_DURATION),
    [containerEntering],
  );
  const pickerContainerExiting = useMemo(
    () => containerExiting ?? PICKER_CONTAINER_DEFAULT_EXITING.duration(DEFAULT_DURATION),
    [containerExiting],
  );

  const yearItems = useMemo(() => {
    const maximumYear = maximumYearMonth.year;
    const minimumYear = minimumYearMonth.year;
    return [...Array<number>(maximumYear - minimumYear + 1)].map((_, index: number) => {
      const y = minimumYear + index;
      return {value: y, label: String(y), color: itemColor, fontFamily: itemFontFamily};
    });
  }, [itemColor, itemFontFamily, maximumYearMonth.year, minimumYearMonth.year]);

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

  const selectedYear = selectedValue?.year;
  const selectedMonth = selectedValue?.month;

  const getSelectedYearMonth = useCallback(
    (yearMonth: YearMonth) => {
      // 選択した日付が最大日付より未来日の場合は、選択月を最大日付の月に設定する
      if (YearMonthUtil.isFuture(yearMonth, maximumYearMonth)) {
        return {year: yearMonth.year, month: maximumYearMonth.month};
      }
      // 選択した日付が最小日付より過去日の場合は、選択月を最小日付の月に設定する
      if (YearMonthUtil.isPast(yearMonth, minimumYearMonth)) {
        return {year: yearMonth.year, month: minimumYearMonth.month};
      }
      return yearMonth;
    },
    [maximumYearMonth, minimumYearMonth],
  );

  const selectedLabel = useMemo(
    () =>
      selectedYear && selectedMonth
        ? `${selectedYear}${yearSuffixLabel ?? ''}${selectedMonth}${monthSuffixLabel ?? ''}`
        : undefined,
    [monthSuffixLabel, selectedMonth, selectedYear, yearSuffixLabel],
  );

  const onValueChangeYear = useCallback(
    (value: React.Key) => {
      const year = value as number;
      onSelectedItemChange?.(getSelectedYearMonth({year, month: selectedMonth}));
    },
    [getSelectedYearMonth, onSelectedItemChange, selectedMonth],
  );
  const onValueChangeMonth = useCallback(
    (value: React.Key) => {
      const month = value as number;
      onSelectedItemChange?.(getSelectedYearMonth({year: selectedYear, month}));
    },
    [getSelectedYearMonth, onSelectedItemChange, selectedYear],
  );

  const open = useCallback(() => {
    setIsVisible(true);
    if (!selectedValue) {
      onSelectedItemChange?.({year: minimumYearMonth.year, month: minimumYearMonth.month});
    }
  }, [minimumYearMonth, onSelectedItemChange, selectedValue]);
  const handleBackdropPress = useCallback(() => {
    onDismiss?.({year: selectedYear, month: selectedMonth});
    close();
  }, [close, onDismiss, selectedMonth, selectedYear]);
  const handleDelete = useCallback(() => {
    onDelete?.({year: selectedYear, month: selectedMonth});
    close();
  }, [close, onDelete, selectedMonth, selectedYear]);
  const handleCancel = useCallback(() => {
    onCancel?.({year: selectedYear, month: selectedMonth});
    close();
  }, [close, onCancel, selectedMonth, selectedYear]);
  const handleDone = useCallback(() => {
    onDone?.({year: selectedYear, month: selectedMonth});
    close();
  }, [close, onDone, selectedMonth, selectedYear]);

  return {
    isVisible,
    selectedYear,
    selectedMonth,
    selectedLabel,
    yearItems,
    monthItems,
    getSelectedYearMonth,
    onValueChangeYear,
    onValueChangeMonth,
    pickerBackdropEntering,
    pickerBackdropExiting,
    pickerContainerEntering,
    pickerContainerExiting,
    open,
    handleBackdropPress,
    handleDelete,
    handleCancel,
    handleDone,
  };
};
