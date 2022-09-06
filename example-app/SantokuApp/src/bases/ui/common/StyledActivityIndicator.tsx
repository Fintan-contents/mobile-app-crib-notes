import {BoxProps, ColorProps, createBox, useResponsiveProp, useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

export const RestyleActivityIndicator = createBox<RestyleTheme, ActivityIndicatorProps>(ActivityIndicator);
export type StyledActivityIndicatorProps = BoxProps<RestyleTheme> &
  ColorProps<RestyleTheme> &
  Omit<ActivityIndicatorProps, 'color'>;
export const StyledActivityIndicator: React.FC<StyledActivityIndicatorProps> = ({
  color = 'activityIndicator',
  ...rest
}) => {
  const theme = useTheme<RestyleTheme>();
  const responsiveColor = useResponsiveProp(color);
  const indicatorColor = responsiveColor ? theme.colors[responsiveColor] : undefined;
  return <RestyleActivityIndicator color={indicatorColor} {...rest} />;
};
