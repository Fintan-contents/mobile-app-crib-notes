/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {PressableStateCallbackType} from 'react-native';

import {composePressableStyles} from './composePressableStyles';

describe('composePressableStyles', () => {
  it('return argument itself if argument is style function or object', () => {
    const styleFunction = () => ({});
    expect(composePressableStyles(styleFunction)).toBe(styleFunction);

    const styleObject = {};
    expect(composePressableStyles(styleObject)).toBe(styleObject);
  });

  it('return merged style object if all arguments is style object', () => {
    const obj1 = {flex: 1, paddingBottom: 1};
    const obj2 = {flex: 2, paddingLeft: 1};
    expect(composePressableStyles([obj1, obj2])).toEqual({flex: 2, paddingBottom: 1, paddingLeft: 1});
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
    expect(merged1({pressed: false})).toEqual({
      flex: 4,
      paddingTop: 1,
      paddingRight: 1,
      paddingBottom: 1,
      paddingLeft: 1,
    });

    const merged2 = composePressableStyles([obj2, obj1, fn2, fn1]);
    if (typeof merged2 !== 'function') {
      throw new Error('Returned PressableStyle must be function.');
    }
    expect(merged2({pressed: true})).toEqual({
      flex: 1,
      paddingLeft: 1,
      paddingBottom: 1,
      paddingRight: 0,
      paddingTop: 0,
    });
  });
});
