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

import {diffInYears} from './diffInYears';

describe('diffInYears', () => {
  describe.each([
    //month of dateRight < month of dateLeft
    ['2023/4/12 12:12:00', '2021/3/12 12:12:00', 2],
    // month of dateRight = month of dateLeft
    // day of dateRight < day of dateLeft
    ['2023/4/12 12:12:00', '2021/4/11 12:12:00', 2],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight < hours of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 11:12:00', 2],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight = hours of dateLeft
    // minutes of dateRight < minutes of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 12:11:00', 2],
  ])(
    '異なる二つのDateオブジェクトの年の差 = Dateオブジェクトの年部分の差 となるケース',
    (dateLeft, dateRight, expected) => {
      test(`diffInYearsの検証`, () => {
        const diff = diffInYears(new Date(dateLeft), new Date(dateRight));
        expect(diff).toEqual(expected);
      });
    },
  );

  describe.each([
    // month of dateRight > month of dateLeft
    ['2023/4/12 12:12:00', '2021/5/12 12:12:00', 1],
    // month of dateRight = month of dateLeft
    // day of dateRight > day of dateLeft
    ['2023/4/12 12:12:00', '2021/4/13 12:12:00', 1],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight > hours of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 13:12:00', 1],
    // month of dateRight = month of dateLeft
    // day of dateRight = day of dateLeft
    // hours of dateRight = hours of dateLeft
    // minutes of dateRight > minutes of dateLeft
    ['2023/4/12 12:12:00', '2021/4/12 12:13:00', 1],
  ])(
    '異なる二つのDateオブジェクトの年の差 = Dateオブジェクトの年部分の差-1 となるケース',
    (dateLeft, dateRight, expected) => {
      test(`diffInYearsの検証`, () => {
        const diff = diffInYears(new Date(dateLeft), new Date(dateRight));
        expect(diff).toEqual(expected);
      });
    },
  );
});
