import React, {useCallback, useMemo, useRef} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {Item} from './SelectPicker';
import {useListMiddleIndex} from './useListMiddleIndex';

type SelectPickerItemsUseCaseTypes = {
  selectedValue?: React.Key;
  children?: JSX.Element | JSX.Element[];
  items: Item<React.Key>[];
  itemHeight: number;
  preferredNumVisibleRows: number;
  onValueChange?: (itemValue: React.Key, itemIndex: number) => void;
  flatListRef: React.RefObject<FlatList | undefined>;
};

export const useSelectPickerItemsUseCase = ({
  selectedValue,
  items,
  itemHeight,
  preferredNumVisibleRows,
  onValueChange,
  flatListRef,
}: SelectPickerItemsUseCaseTypes) => {
  const middleIndex = useListMiddleIndex({itemHeight, listSize: items.length});

  const currentIndex = useMemo(() => {
    return items.findIndex(item => item.key === selectedValue || item.value === selectedValue);
  }, [items, selectedValue]);

  const prevIndex = useRef(currentIndex);
  const _onChange = useCallback(
    (value: string | number, index: number) => {
      onValueChange?.(value, index);
    },
    [onValueChange],
  );

  const getRowItemAtOffset = useCallback(
    (offset: number) => {
      const index = middleIndex(offset);
      const value = items[index].value;
      return {index, value};
    },
    [items, middleIndex],
  );

  const handleValueChange = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {index, value} = getRowItemAtOffset(event.nativeEvent.contentOffset.y);
      // setTimeout(() => scrollToOffset(index, true), 100);
      _onChange(value, index);
    },
    [_onChange, getRowItemAtOffset],
  );

  const onMomentumScrollEndAndroid = useCallback(
    (index: number) => {
      // handle Android bug: ScrollView does not call 'onMomentumScrollEnd' when scrolled programmatically (https://github.com/facebook/react-native/issues/26661)
      if (prevIndex.current !== index) {
        prevIndex.current = index;
        _onChange(items?.[index]?.value, index);
      }
    },
    [_onChange, items],
  );

  const scrollToOffset = useCallback(
    (index: number, animated: boolean) => {
      flatListRef.current?.scrollToOffset({offset: index * itemHeight, animated});
    },
    [itemHeight, flatListRef],
  );

  const scrollToIndex = useCallback(
    (index: number, animated: boolean) => {
      onMomentumScrollEndAndroid(index);
      setTimeout(() => scrollToOffset(index, animated), 100);
    },
    [onMomentumScrollEndAndroid, scrollToOffset],
  );

  const selectItem = useCallback(
    (index: number) => {
      scrollToIndex(index, true);
    },
    [scrollToIndex],
  );

  const scrollToPassedIndex = useCallback(() => {
    scrollToIndex(currentIndex, false);
  }, [currentIndex, scrollToIndex]);

  const height = useMemo(() => itemHeight * preferredNumVisibleRows, [itemHeight, preferredNumVisibleRows]);

  const getItemLayout = useCallback(
    (_data: any, index: number) => {
      return {length: itemHeight, offset: itemHeight * index, index};
    },
    [itemHeight],
  );

  return {
    handleValueChange,
    scrollToPassedIndex,
    currentIndex,
    height,
    selectItem,
    getItemLayout,
  };
};
