import {PressableProps, PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle} from 'react-native';

export const composePressableStyles = (style: PressableProps['style'] | PressableProps['style'][]) => {
  if (typeof style === 'function') return style;
  if (Array.isArray(style)) {
    if (style.some(s => typeof s === 'function')) {
      return (state: PressableStateCallbackType) => {
        return StyleSheet.flatten(
          style.map(sty => {
            return typeof sty === 'function' ? sty(state) : sty;
          }),
        );
      };
    } else {
      // 関数が含まれていないことは確認しているので、型アサートしても問題ない
      return StyleSheet.flatten(style as StyleProp<ViewStyle>);
    }
  }
  return style;
};
