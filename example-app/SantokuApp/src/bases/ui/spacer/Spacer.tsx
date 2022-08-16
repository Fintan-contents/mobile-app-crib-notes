import React, {useMemo} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {Rect, useSafeAreaFrame} from 'react-native-safe-area-context';

export type SpacerProps = {
  widthRatio?: number;
  heightRatio?: number;
} & ViewProps;

export const Spacer: React.FC<SpacerProps> = React.memo(({widthRatio = 0, heightRatio = 0, style, ...viewProps}) => {
  const rect = useSafeAreaFrame();
  const spacing = useMemo(() => spacingFactory(rect, widthRatio, heightRatio), [rect, heightRatio, widthRatio]);
  const composedStyle = StyleSheet.compose(spacing, style);

  return <View testID="Spacer" style={composedStyle} {...viewProps} />;
});

const spacingFactory = (rect: Rect, widthRatio: number, heightRatio: number): StyleProp<ViewStyle> => ({
  width: rect.width * widthRatio,
  height: rect.height * heightRatio,
});
