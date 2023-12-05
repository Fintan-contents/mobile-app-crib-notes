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

import React from 'react';
import {GestureResponderEvent, StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {Input, InputProps, Text} from 'react-native-elements';

import {IconButton} from '../button/IconButton';

export type TextInputProps = InputProps & {
  iconSize?: number;
  iconColor?: string;
  onClearButtonPress?: (e: GestureResponderEvent) => void;
  showClearButton?: boolean;
  hintText?: string;
  hintTextStyle?: StyleProp<TextStyle>;
};

export const TextInput: React.FC<TextInputProps> = React.forwardRef(
  (
    {
      showClearButton,
      onClearButtonPress,
      iconSize,
      iconColor,
      containerStyle,
      errorMessage,
      errorStyle,
      hintText,
      hintTextStyle,
      style,
      leftIconContainerStyle,
      rightIconContainerStyle,
      ...props
    },
    ref,
  ) => {
    const flattenedStyle = StyleSheet.flatten([styles.style, style]);
    const flattenedInputContainerStyle = StyleSheet.flatten([styles.inputContainerStyle, style]);
    const flattenedContainerStyle = StyleSheet.flatten([styles.container, containerStyle]);
    const flattenedLeftIconContainerStyle = StyleSheet.flatten([styles.iconContainer, leftIconContainerStyle]);
    const flattenedRightIconContainerStyle = StyleSheet.flatten([styles.iconContainer, rightIconContainerStyle]);
    const flattenedHintTextStyle = StyleSheet.flatten([styles.hintText, hintTextStyle]);

    return (
      <View style={styles.wrapper}>
        <Input
          ref={ref}
          containerStyle={flattenedContainerStyle}
          inputContainerStyle={flattenedInputContainerStyle}
          renderErrorMessage={false}
          errorMessage={errorMessage}
          errorStyle={errorStyle}
          autoCapitalize="none"
          autoCorrect={false}
          rightIcon={
            showClearButton && (
              <View style={styles.iconWrapper}>
                <IconButton name="cancel" size={iconSize} color={iconColor} onPress={onClearButtonPress} />
              </View>
            )
          }
          leftIconContainerStyle={flattenedLeftIconContainerStyle}
          rightIconContainerStyle={flattenedRightIconContainerStyle}
          style={flattenedStyle}
          {...props}
        />
        {hintText && <Text style={flattenedHintTextStyle}>{hintText}</Text>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    paddingHorizontal: 0,
  },
  style: {
    lineHeight: 24,
    minHeight: 0,
    includeFontPadding: false,
  },
  inputContainerStyle: {
    paddingVertical: 8,
  },
  hintText: {
    paddingTop: 5,
  },
  iconWrapper: {
    flex: 1,
  },
  iconContainer: {
    marginVertical: 0,
    paddingVertical: 0,
    height: undefined,
  },
});
