import React, {useMemo} from 'react';
import {Pressable, PressableProps, StyleSheet, Text, TextProps} from 'react-native';

import {Item} from './SelectPicker';

export type SelectPickerItemType<ItemT extends unknown> = {
  item: Item<ItemT>;
  index: number;
  offset: number;
  itemHeight: number;
  activeColor?: string;
  inactiveColor?: string;
  pressableProps?: PressableProps;
  textProps?: TextProps;
};

const Component = <ItemT extends unknown>({
  item: {label, inputLabel, key, value, ...itemPropsStyle},
  itemHeight,
  pressableProps,
  textProps: {style: textStyle, ...textProps} = {},
}: SelectPickerItemType<ItemT>) => {
  const pressableHeightStyle = useMemo(() => ({height: itemHeight}), [itemHeight]);

  return (
    <Pressable style={StyleSheet.flatten([pressableHeightStyle, styles.pressable])} {...pressableProps}>
      {/* AnimatedStyleの場合はStyleSheet.flattenだとマージされないため、配列で指定 */}
      <Text style={StyleSheet.flatten([styles.text, textStyle, itemPropsStyle])} {...textProps}>
        {label}
      </Text>
    </Pressable>
  );
};

export const SelectPickerItem = React.memo(Component);

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
