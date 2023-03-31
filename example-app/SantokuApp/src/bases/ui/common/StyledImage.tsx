import {
  BoxProps,
  boxRestyleFunctions,
  createRestyleComponent,
  createRestyleFunction,
  ResponsiveValue,
} from '@shopify/restyle';
import {Image, ImageProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

const tintColor = createRestyleFunction({
  property: 'tintColor',
  styleProperty: 'tintColor',
  themeKey: 'colors',
});
export type StyledImageProps = BoxProps<RestyleTheme> &
  Omit<
    ImageProps,
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
  > & {tintColor?: ResponsiveValue<keyof RestyleTheme['colors'], RestyleTheme['breakpoints']>};
export const StyledImage = createRestyleComponent<StyledImageProps, RestyleTheme>(
  [...boxRestyleFunctions, tintColor],
  Image,
);
