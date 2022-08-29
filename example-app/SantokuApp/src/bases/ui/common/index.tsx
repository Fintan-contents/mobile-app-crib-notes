import {createBox, createText} from '@shopify/restyle';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  ScrollView,
  ScrollViewProps,
  SafeAreaView,
  TextInput,
  TextInputBase,
  TextInputProps,
} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

export const Box = createBox<RestyleTheme>();
export const Text = createText<RestyleTheme>();
export const StyledTouchableOpacity = createBox<RestyleTheme, TouchableOpacityProps>(TouchableOpacity);
export const StyledSafeAreaView = createBox<RestyleTheme, ViewProps>(SafeAreaView);
export const StyledScrollView = createBox<RestyleTheme, ScrollViewProps>(ScrollView);
export const StyledTextInputBase = createBox<RestyleTheme, TextInputProps>(TextInputBase);
export const StyledTextInput = createBox<RestyleTheme, TextInputProps>(TextInput);
