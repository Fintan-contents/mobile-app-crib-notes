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

import React, {useMemo} from 'react';
import {Pressable, PressableProps, StyleSheet, Text, TextProps} from 'react-native';

import {Item} from './SelectPicker';

export type SelectPickerItemType = {
  item: Item<any>; // eslint-disable-line @typescript-eslint/no-explicit-any -- anyを利用しないと、keyが必須となりエラーとなる。
  index: number;
  offset: number;
  itemHeight: number;
  activeColor?: string;
  inactiveColor?: string;
  pressableProps?: PressableProps;
  textProps?: TextProps;
};

const Component = ({
  item: {label, color, fontFamily},
  itemHeight,
  pressableProps,
  textProps: {style: textStyle, ...textProps} = {},
}: SelectPickerItemType) => {
  const pressableHeightStyle = useMemo(() => ({height: itemHeight}), [itemHeight]);
  const textFontStyle = useMemo(() => {
    return {...(color && {color}), ...(fontFamily && {fontFamily})};
  }, [color, fontFamily]);

  return (
    <Pressable style={StyleSheet.flatten([pressableHeightStyle, styles.pressable])} {...pressableProps}>
      <Text style={StyleSheet.flatten([styles.text, textStyle, textFontStyle])} {...textProps}>
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
