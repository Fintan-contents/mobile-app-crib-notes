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

import {SimpleLogFormatter} from './SimpleLogFormatter';

describe('SimpleLogFormatter format', () => {
  const formatter = new SimpleLogFormatter();
  test('エラーコードが指定された場合の検証', () => {
    const formatted = formatter.format('error', 'message', 'err0001');
    expect(formatted).toEqual('[error] [err0001] message');
  });
  test('エラーコードが指定されなかった場合の検証', () => {
    const formatted = formatter.format('error', 'message');
    expect(formatted).toEqual('[error] message');
  });
});
