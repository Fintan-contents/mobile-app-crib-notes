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

import {formatDiffInDateTime} from './formatDiffInDateTime';
describe.each([
  ['2023/4/01 12:00:00', '2022/4/01 12:00:00', '1年前'],
  ['2023/4/01 12:00:00', '2023/3/31 12:00:00', '1日前'],
  ['2023/4/01 12:00:00', '2023/4/01 11:00:00', '1時間前'],
  ['2023/4/01 12:00:00', '2023/4/01 11:59:00', '1分前'],
])('formatDiffInDateTime', (dateLeft, dateRight, expected) => {
  test(`formatDiffInDateTimeの検証`, () => {
    const options = {
      daysSuffix: '日前',
      hoursSuffix: '時間前',
      minutesSuffix: '分前',
      yearsSuffix: '年前',
    };
    const diff = formatDiffInDateTime(new Date(dateLeft), new Date(dateRight), options);
    expect(diff).toEqual(expected);
  });
});
