import {createRestyleComponent, createVariant, spacing, SpacingProps, VariantProps} from '@shopify/restyle';
import {Svg, SvgProps} from 'react-native-svg';

import {RestyleTheme} from '../theme/restyleTheme';

const themeKey = 'sizeVariants';
const property = 'size';
const variants = createVariant<RestyleTheme, typeof themeKey, typeof property>({property, themeKey});
export type StyledSvgIconBaseProps = SpacingProps<RestyleTheme> &
  VariantProps<RestyleTheme, typeof themeKey, typeof property> &
  Omit<SvgProps, 'color' | 'width' | 'height'>;
export const StyledSvgIconBase = createRestyleComponent<StyledSvgIconBaseProps, RestyleTheme>([variants, spacing], Svg);
