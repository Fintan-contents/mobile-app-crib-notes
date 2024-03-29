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

import {RequiredYearMonth, YearMonth} from './YearMonth';

/**
 * YearMonthに関するユーティリティです。
 */
export class YearMonthUtil {
  /**
   * 現在日付を取得します。
   */
  static now() {
    return this.fromDate(new Date());
  }

  /**
   * Date型からYearMonth型に変換します。
   */
  static fromDate(date: Date) {
    return {year: date.getFullYear(), month: date.getMonth() + 1};
  }

  /**
   * YearMonth型からDate型に変換します。
   */
  static toDate(ym: YearMonth) {
    if (ym.year === undefined) {
      return undefined;
    } else if (ym.month === undefined) {
      return new Date(ym.year);
    }
    return new Date(ym.year, ym.month - 1);
  }

  /**
   * YearMonthを比較して、未来かどうかを判定します。
   * @return ym1がym2より未来日の場合はtrue、それ以外はfalseを返却します。
   */
  static isFuture(ym1: YearMonth, ym2: YearMonth) {
    if (!ym1.year || !ym1.month || !ym2.year || !ym2.month) {
      return false;
    }
    return new Date(ym1.year, ym1.month) > new Date(ym2.year, ym2.month);
  }

  /**
   * YearMonthを比較して、過去かどうかを判定します。
   * @return ym1がym2より過去日の場合はtrue、それ以外はfalseを返却します。
   */
  static isPast(ym1: YearMonth, ym2: YearMonth) {
    if (!ym1.year || !ym1.month || !ym2.year || !ym2.month) {
      return false;
    }
    return new Date(ym1.year, ym1.month) < new Date(ym2.year, ym2.month);
  }

  /**
   * 指定された月を加算したYearMonthオブジェクトを返却します。
   */
  static addMonth(ym: RequiredYearMonth, add: number) {
    const newMonth = ((((ym.month - 1 + add) % 12) + 12) % 12) + 1;
    const addYear = Math.floor((ym.month - 1 + add) / 12);
    return {year: ym.year + addYear, month: newMonth};
  }
}
