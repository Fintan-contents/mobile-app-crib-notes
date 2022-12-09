import React, {useCallback, useMemo} from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import Reanimated from 'react-native-reanimated';

import {Fader, FaderPosition} from './Fader';
import {Item} from './SelectPicker';
import {SelectPickerItem} from './SelectPickerItem';
import {SelectPickerItemsProps} from './SelectPickerItems';
import {useSelectPickerItems} from './useSelectPickerItems';

const Separator: React.FC<{height: number; testID?: string}> = React.memo(({height, testID}) => {
  const separatorHeightStyle = useMemo(() => ({height}), [height]);
  return (
    <View pointerEvents="none" style={StyleSheet.flatten([styles.separators, separatorHeightStyle])} testID={testID} />
  );
});

const FaderTop = React.memo(({itemHeight}: {itemHeight: number}) => (
  <Fader visible position={FaderPosition.TOP} size={itemHeight * 2.5} />
));
const FaderBottom = React.memo(({itemHeight}: {itemHeight: number}) => (
  <Fader visible position={FaderPosition.BOTTOM} size={itemHeight * 2.5} />
));

const DECELERATION_RATE = 0.98;

const defaultKeyExtractor = <ItemT extends unknown>(item: Item<ItemT>, index: number) =>
  `${String(item.key ?? item.value)}.${index}`;

const AnimatedFlatList = Reanimated.createAnimatedComponent<FlatListProps<Item<any>>>(FlatList);

type SelectPickerItemsAndroid<ItemT> = Omit<SelectPickerItemsProps<ItemT>, 'style'>;

export const SelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  itemHeight = 44,
  numberOfLines = 5,
  itemStyle,
  accessibilityLabel,
  activeColor,
  inactiveColor,
  flatListTestID,
  separatorTestID,
  itemPressableTestIDPrefix,
  itemTextTestIDPrefix,
  ...rest
}: SelectPickerItemsAndroid<ItemT>) => {
  const {
    offset,
    height,
    handleValueChange,
    scrollToPassedIndex,
    selectedIndex,
    selectItem,
    getItemLayout,
    flatListRef,
    scrollHandler,
    onMomentumScrollBegin,
  } = useSelectPickerItems<ItemT>({
    selectedValue,
    items,
    itemHeight,
    numberOfLines,
    onValueChange,
  });

  const itemsHeightStyle = useMemo(() => ({height}), [height]);
  const contentContainerStyle = useMemo(() => ({paddingVertical: height / 2 - itemHeight / 2}), [height, itemHeight]);

  const renderItem = useCallback(
    (info: ListRenderItemInfo<Item<ItemT>>) => {
      const onPress = () => selectItem(info.index);
      return (
        <SelectPickerItem
          item={info.item}
          offset={offset.value}
          index={info.index}
          itemHeight={itemHeight}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          pressableProps={{
            onPress,
            accessibilityLabel,
            testID: itemPressableTestIDPrefix === undefined ? undefined : `${itemPressableTestIDPrefix}-${info.index}`,
          }}
          textProps={{style: itemStyle, testID: `${itemTextTestIDPrefix ?? ''}-${info.index}`}}
        />
      );
    },
    [
      accessibilityLabel,
      activeColor,
      inactiveColor,
      itemHeight,
      itemPressableTestIDPrefix,
      itemStyle,
      itemTextTestIDPrefix,
      offset,
      selectItem,
    ],
  );

  return (
    <View style={styles.container} pointerEvents="box-none" {...rest}>
      <AnimatedFlatList
        data={items}
        keyExtractor={keyExtractor ?? defaultKeyExtractor}
        style={StyleSheet.flatten([itemsHeightStyle, styles.items])}
        onScroll={scrollHandler}
        onMomentumScrollEnd={handleValueChange}
        onMomentumScrollBegin={onMomentumScrollBegin}
        showsVerticalScrollIndicator={false}
        onLayout={scrollToPassedIndex}
        ref={flatListRef}
        contentContainerStyle={contentContainerStyle}
        snapToInterval={itemHeight}
        renderItem={renderItem}
        decelerationRate={DECELERATION_RATE}
        getItemLayout={getItemLayout}
        initialScrollIndex={selectedIndex}
        centerContent
        testID={flatListTestID}
      />
      <FaderBottom itemHeight={itemHeight} />
      <FaderTop itemHeight={itemHeight} />
      <Separator height={itemHeight} testID={separatorTestID} />
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
