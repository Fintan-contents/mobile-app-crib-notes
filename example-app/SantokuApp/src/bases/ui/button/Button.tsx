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
import {StyleSheet} from 'react-native';
import {Button as RNEButton, ButtonProps as RNEButtonProps} from 'react-native-elements';

const buttonWidthSizes = {
  small: 90,
  middle: 160,
  large: 260,
  full: '100%',
} as const;

type ButtonSizeType = keyof typeof buttonWidthSizes;

export type ButtonProps = RNEButtonProps & {
  /**
   * Button width size.
   */
  size?: ButtonSizeType;
};

export const Button: React.FC<ButtonProps> = props => {
  const {size, ...buttonProps} = props;
  const widthStyle = {width: buttonWidthSizes[size ?? 'small']};
  const buttonStyle = StyleSheet.flatten([styles.button, widthStyle, buttonProps.buttonStyle]);
  const containerStyle = StyleSheet.flatten([styles.container, widthStyle, buttonProps.containerStyle]);

  return <RNEButton {...buttonProps} buttonStyle={buttonStyle} containerStyle={containerStyle} />;
};

Button.defaultProps = {
  raised: true,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 50,
  },
  container: {
    borderRadius: 8,
  },
});
