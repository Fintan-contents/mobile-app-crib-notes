import React, {useCallback, useMemo} from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import Reanimated, {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';

import {Fader, FaderPosition} from './Fader';
import {Item} from './SelectPicker';
import {SelectPickerItem} from './SelectPickerItem';
import {SelectPickerItemsProps} from './SelectPickerItems';
import {useSelectPickerItemsUseCase} from './useSelectPickerItemsUseCase';

const AnimatedFlatList = Reanimated.createAnimatedComponent<FlatListProps<Item<React.Key>>>(FlatList);

const Separator: React.FC<{height: number}> = React.memo(({height}) => {
  const separatorHeightStyle = useMemo(() => ({height}), [height]);
  return <View pointerEvents="none" style={StyleSheet.flatten([styles.separators, separatorHeightStyle])} />;
});

const defaultKeyExtractor = (item: Item<React.Key>, index: number) => `${String(item.key ?? item.value)}.${index}`;

const FADER_SIZE = 60;
const FaderTop: React.FC = () => <Fader visible position={FaderPosition.TOP} size={FADER_SIZE} />;
const FaderBottom: React.FC = () => <Fader visible position={FaderPosition.BOTTOM} size={FADER_SIZE} />;

const DECELERATION_RATE = 0.98;

export const SelectPickerItems = ({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  itemHeight = 44,
  preferredNumVisibleRows = 5,
  ...rest
}: SelectPickerItemsProps) => {
  const flatListRef = useAnimatedRef<FlatList>();
  const offset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    offset.value = e.contentOffset.y;
  });

  const {height, handleValueChange, scrollToPassedIndex, currentIndex, selectItem, getItemLayout} =
    useSelectPickerItemsUseCase({
      selectedValue,
      items,
      itemHeight,
      preferredNumVisibleRows,
      onValueChange,
      flatListRef,
    });

  const itemsHeightStyle = useMemo(() => ({height}), [height]);

  const contentContainerStyle = useMemo(() => {
    return [
      {
        paddingVertical: height / 2 - itemHeight / 2,
      },
    ];
  }, [height, itemHeight]);

  const renderItem = useCallback(
    (info: ListRenderItemInfo<Item<React.Key>>) => {
      return (
        <SelectPickerItem
          value={info.item.label}
          offset={offset}
          index={info.index}
          itemHeight={itemHeight}
          selectItem={selectItem}
        />
      );
    },
    [itemHeight, offset, selectItem],
  );

  return (
    <View style={styles.container} pointerEvents="box-none">
      <AnimatedFlatList
        data={items}
        keyExtractor={keyExtractor ?? defaultKeyExtractor}
        style={StyleSheet.flatten([itemsHeightStyle, styles.items])}
        onScroll={scrollHandler}
        onMomentumScrollEnd={handleValueChange}
        showsVerticalScrollIndicator={false}
        onLayout={scrollToPassedIndex}
        ref={flatListRef}
        contentContainerStyle={contentContainerStyle}
        snapToInterval={itemHeight}
        renderItem={renderItem}
        decelerationRate={DECELERATION_RATE}
        getItemLayout={getItemLayout}
        initialScrollIndex={currentIndex}
        centerContent
      />
      <FaderBottom />
      <FaderTop />
      <Separator height={itemHeight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    width: '100%',
  },
  separators: {
    position: 'absolute',
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    width: '95%',
    borderColor: 'grey',
  },
});
