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

import {loginPasswordValidator} from './loginPasswordValidator';

describe('loginPasswordValidator', () => {
  // 正常
  it('既存正常', () => {
    expect(loginPasswordValidator('ABCabc12!%')).toBe(true);
  });
  it('英大文字なしはNG-1', () => {
    expect(loginPasswordValidator('abcabcab')).toBe(false);
  });
  it('英大文字なしはNG-2', () => {
    expect(loginPasswordValidator('abcabc12')).toBe(false);
  });
  it('英小文字なしはNG-1', () => {
    expect(loginPasswordValidator('ABCABCAB')).toBe(false);
  });
  it('英小文字なしはNG-2', () => {
    expect(loginPasswordValidator('ABCABC12')).toBe(false);
  });
  it('数字なしはNG-1', () => {
    expect(loginPasswordValidator('abcabcab')).toBe(false);
  });
  it('数字なしはNG-2', () => {
    expect(loginPasswordValidator('abcabcAB')).toBe(false);
  });
});
