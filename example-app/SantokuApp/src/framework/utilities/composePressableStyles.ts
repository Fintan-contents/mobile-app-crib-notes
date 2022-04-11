import {PressableProps, PressableStateCallbackType} from 'react-native';

export const composePressableStyles = (style: PressableProps['style'] | PressableProps['style'][]) => {
  if (typeof style === 'function') return style;
  if (Array.isArray(style)) {
    return (state: PressableStateCallbackType) => {
      return style.map(sty => {
        return typeof sty === 'function' ? sty(state) : sty;
      });
    };
  }
  return style;
};
