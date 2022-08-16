import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';

import {Item} from './SelectPicker';
import {useListMiddleIndex} from './useListMiddleIndex';

type SelectPickerItemsTypes<ItemT> = {
  selectedValue?: React.Key | ItemT;
  children?: JSX.Element | JSX.Element[];
  items: Item<ItemT>[];
  itemHeight: number;
  numberOfLines: number;
  onValueChange?: (itemValue: ItemT, itemIndex: number) => void;
};

export const useSelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  items,
  itemHeight,
  numberOfLines,
  onValueChange,
}: SelectPickerItemsTypes<ItemT>) => {
  const flatListRef = useAnimatedRef<FlatList>();
  const offset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    offset.value = e.contentOffset.y;
  });
  // // 1回のスクロールで、onMomentumScrollEndが複数回実行されてしまう事象に対応
  // https://github.com/facebook/react-native/issues/32696
  const canMomentum = useRef(false);
  const onMomentumScrollBegin = useCallback(() => (canMomentum.current = true), []);

  const middleIndex = useListMiddleIndex({itemHeight, listSize: items.length});

  const selectedIndex = useMemo(() => {
    return items.findIndex(item => item.key === selectedValue || item.value === selectedValue);
  }, [items, selectedValue]);

  const prevIndex = useRef(selectedIndex);
  const _onChange = useCallback(
    (value: ItemT, index: number) => {
      if (prevIndex.current !== index) {
        prevIndex.current = index;
        onValueChange?.(value, index);
      }
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
      if (canMomentum.current) {
        canMomentum.current = false;
        const {index, value} = getRowItemAtOffset(event.nativeEvent.contentOffset.y);
        _onChange(value, index);
      }
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
      if (prevIndex.current !== index) {
        _onChange(items?.[index]?.value, index);
      }
    },
    [_onChange, items],
  );

  const scrollToPassedIndex = useCallback(() => {
    scrollToIndex(selectedIndex, false);
  }, [selectedIndex, scrollToIndex]);

  const height = useMemo(() => itemHeight * numberOfLines, [itemHeight, numberOfLines]);

  const getItemLayout = useCallback(
    (_data: any, index: number) => {
      return {length: itemHeight, offset: itemHeight * index, index};
    },
    [itemHeight],
  );

  // ユーザがスクロールする以外に、プログラムによってselectedValueを変更した場合の対応
  // プログラムによってselectedValueを変更した場合は、選択した値が表示されるように自動でスクロールします。
  // 全てのレンダリングで実行しているのは、selectedValueが前回の値と同じ場合でも、スクロール位置を動かしたいためです。
  // 例えば、[a,b,c,d,e]というアイテムがあった場合に、ユーザ操作でc -> aに変更した時は、プログラムで強制的にcに戻すような仕様があったとします。
  // useEffectのdepsにselectedValueを設定してしまうと、selectedValueはc->cと変化がないため、スクロール位置を自動で動かすことができなくなってしまいます。
  // そのため、ここでは全てのレンダリングでスクロール位置を変更するようにしています。
  useEffect(() => {
    selectedValue !== undefined && scrollToIndex(selectedIndex, true);
  });

  return {
    offset,
    flatListRef,
    handleValueChange,
    scrollToPassedIndex,
    scrollHandler,
    selectedIndex,
    height,
    selectItem,
    getItemLayout,
    onMomentumScrollBegin,
  };
};
