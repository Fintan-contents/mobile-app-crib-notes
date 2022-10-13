import {createBox, createText} from '@shopify/restyle';
import {
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

export const Box = createBox<RestyleTheme>();
export const Text = createText<RestyleTheme>();
export const StyledTouchableOpacity = createBox<RestyleTheme, TouchableOpacityProps>(TouchableOpacity);
export const StyledSafeAreaView = createBox<RestyleTheme, ViewProps>(SafeAreaView);
export const StyledScrollView = createBox<RestyleTheme, ScrollViewProps>(ScrollView);
