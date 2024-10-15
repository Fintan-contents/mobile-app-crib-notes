/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';

import {Item, ItemSelectionKey} from './SelectPicker';
import {useListMiddleIndex} from './useListMiddleIndex';

type SelectPickerItemsTypes<ItemT> = {
  selectedValue?: ItemSelectionKey | ItemT;
  children?: React.JSX.Element | React.JSX.Element[];
  items: Item<ItemT>[];
  itemHeight: number;
  numberOfLines: number;
  onValueChange?: (itemValue: ItemT, itemIndex: number) => void;
};

export const useSelectPickerItems = <ItemT>({
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
      const {index, value} = getRowItemAtOffset(event.nativeEvent.contentOffset.y);
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
    (_data: unknown, index: number) => {
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
  };
};
