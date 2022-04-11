import {PressableStateCallbackType} from 'react-native';

import {composePressableStyles} from './composePressableStyles';

describe('composePressableStyles', () => {
  it('return argument itself if argument is style function or object', () => {
    const styleFunction = () => ({});
    expect(composePressableStyles(styleFunction)).toBe(styleFunction);

    const styleObject = {};
    expect(composePressableStyles(styleObject)).toBe(styleObject);
  });

  it('return style function which returns merged style', () => {
    const fn1 = (state: PressableStateCallbackType) => ({flex: 1, paddingTop: state.pressed ? 0 : 1});
    const fn2 = (state: PressableStateCallbackType) => ({flex: 2, paddingRight: state.pressed ? 0 : 1});
    const obj1 = {flex: 3, paddingBottom: 1};
    const obj2 = {flex: 4, paddingLeft: 1};

    const merged1 = composePressableStyles([fn1, fn2, obj1, obj2]);
    if (typeof merged1 !== 'function') {
      throw new Error('Returned PressableStyle must be function.');
    }
    expect(merged1({pressed: false})).toEqual([
      {flex: 1, paddingTop: 1},
      {flex: 2, paddingRight: 1},
      {flex: 3, paddingBottom: 1},
      {flex: 4, paddingLeft: 1},
    ]);

    const merged2 = composePressableStyles([obj2, obj1, fn2, fn1]);
    if (typeof merged2 !== 'function') {
      throw new Error('Returned PressableStyle must be function.');
    }
    expect(merged2({pressed: true})).toEqual([
      {flex: 4, paddingLeft: 1},
      {flex: 3, paddingBottom: 1},
      {flex: 2, paddingRight: 0},
      {flex: 1, paddingTop: 0},
    ]);
  });
});
