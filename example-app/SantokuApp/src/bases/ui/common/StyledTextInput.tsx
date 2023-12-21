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

import {
  BoxProps,
  boxRestyleFunctions,
  createRestyleComponent,
  TextProps,
  textRestyleFunctions,
  useTheme,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {TextInput as RNTextInput, TextInputProps as RNTextInputProps} from 'react-native';

import {Box, Text} from './index';
import {RestyleTheme} from '../theme/restyleTheme';

type TextVariantsProps = Exclude<keyof RestyleTheme['textVariants'], 'defaults'>;
export type TextInputProps = TextProps<RestyleTheme> &
  BoxProps<RestyleTheme> &
  RNTextInputProps & {errorMessage?: string} & VariantProps<RestyleTheme, 'textVariants'> & {
    errorTextVariant?: TextVariantsProps;
  };
const RestyleTextInput = createRestyleComponent<TextInputProps, RestyleTheme>(
  [...textRestyleFunctions, ...boxRestyleFunctions],
  RNTextInput,
);
export const StyledTextInput: React.FC<TextInputProps> = ({
  errorMessage,
  errorTextVariant = 'inputErrorText',
  ...rest
}) => {
  const {colors} = useTheme<RestyleTheme>();
  return (
    <Box>
      <RestyleTextInput placeholderTextColor={colors.placeholder} {...rest} />
      {errorMessage && <Text variant={errorTextVariant}>{errorMessage}</Text>}
    </Box>
  );
};
