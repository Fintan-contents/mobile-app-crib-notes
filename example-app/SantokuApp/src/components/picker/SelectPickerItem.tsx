import React, {useMemo} from 'react';
import {Pressable, PressableProps, StyleSheet, Text, TextProps} from 'react-native';
import Animated, {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {Item} from './SelectPicker';

export type SelectPickerItemType<ItemT extends unknown> = {
  item: Item<ItemT>;
  index: number;
  offset: Animated.SharedValue<number>;
  itemHeight: number;
  activeColor?: string;
  inactiveColor?: string;
  pressableProps?: PressableProps;
  textProps?: TextProps;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedText = Animated.createAnimatedComponent(Text);

export const SelectPickerItem = <ItemT extends unknown>({
  item: {label, inputLabel, key, value, ...itemPropsStyle},
  index,
  offset,
  activeColor = '#000000',
  inactiveColor = '#999999',
  itemHeight,
  pressableProps,
  textProps: {style: textStyle, ...textProps} = {},
}: SelectPickerItemType<ItemT>) => {
  const itemOffset = index * itemHeight;
  const animatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      offset.value,
      [itemOffset - itemHeight, itemOffset, itemOffset + itemHeight],
      [inactiveColor, activeColor, inactiveColor],
    );
    return {color};
  }, [itemHeight]);

  const pressableHeightStyle = useMemo(() => ({height: itemHeight}), [itemHeight]);

  return (
    <AnimatedPressable style={StyleSheet.flatten([pressableHeightStyle, styles.pressable])} {...pressableProps}>
      {/* AnimatedStyleの場合はStyleSheet.flattenだとマージされないため、配列で指定 */}
      <AnimatedText style={[animatedTextStyle, styles.text, textStyle, itemPropsStyle]} {...textProps}>
        {label}
      </AnimatedText>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
