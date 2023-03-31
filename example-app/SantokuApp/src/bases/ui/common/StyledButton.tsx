import {
  BoxProps,
  boxRestyleFunctions,
  ColorProps,
  createRestyleComponent,
  createVariant,
  ResponsiveValue,
  TextShadowProps,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';
import React, {useMemo} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {StyledActivityIndicator} from './StyledActivityIndicator';
import {Box, Text} from './index';
import {RestyleTheme} from '../theme/restyleTheme';

const variant = createVariant<RestyleTheme, 'buttonVariants'>({themeKey: 'buttonVariants'});
type BaseButtonProps = VariantProps<RestyleTheme, 'buttonVariants'> & BoxProps<RestyleTheme> & TouchableOpacityProps;
const BaseButton = createRestyleComponent<BaseButtonProps, RestyleTheme>(
  [variant, ...boxRestyleFunctions],
  TouchableOpacity,
);
type TextVariantsProps = Exclude<keyof RestyleTheme['textVariants'], 'defaults'>;

export type ButtonProps = BaseButtonProps & {
  title?: string;
  isLoading?: boolean;
  textVariant?: TextVariantsProps;
  activityIndicatorColor?: ResponsiveValue<keyof RestyleTheme['colors'], RestyleTheme['breakpoints']>;
} & ColorProps<RestyleTheme> &
  TypographyProps<RestyleTheme> &
  TextShadowProps<RestyleTheme>;
export const StyledButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  title,
  isLoading,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textTransform,
  textShadowOffset,
  textShadowRadius,
  textVariant = 'button',
  activityIndicatorColor = 'activityIndicator',
  children,
  ...rest
}) => {
  const contentOpacity = useMemo(() => (isLoading ? 0 : 1), [isLoading]);
  return (
    <Box>
      <BaseButton {...rest}>
        {children ? (
          children
        ) : (
          <Box opacity={contentOpacity}>
            <Text
              color={color}
              fontFamily={fontFamily}
              fontSize={fontSize}
              fontStyle={fontStyle}
              fontWeight={fontWeight}
              letterSpacing={letterSpacing}
              lineHeight={lineHeight}
              textAlign={textAlign}
              textDecorationLine={textDecorationLine}
              textDecorationStyle={textDecorationStyle}
              textTransform={textTransform}
              textShadowOffset={textShadowOffset}
              textShadowRadius={textShadowRadius}
              variant={textVariant}>
              {title}
            </Text>
          </Box>
        )}
      </BaseButton>
      {isLoading && (
        <Box flex={1} position="absolute" top={0} bottom={0} left={0} right={0} justifyContent="center">
          <StyledActivityIndicator color={activityIndicatorColor} />
        </Box>
      )}
    </Box>
  );
};
