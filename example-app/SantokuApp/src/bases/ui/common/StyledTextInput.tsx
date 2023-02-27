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
