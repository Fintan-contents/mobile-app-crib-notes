/**
 * 入力された値が最大値より大きい場合、整形(最大値の末尾に指定された文字列を付与)した文字列を返す。
 * 最大値より小さい場合、入力された値を文字列型で返す。
 * @param value 整形したい値
 * @param maxValue 最大値
 * @param abbreviation 末尾に付与する文字列。デフォルトは+。
 * @returns 整形後の文字列
 */

export function formatLargeNumber(value: number, maxValue: number, abbreviation: string = '+'): string {
  if (value <= maxValue) {
    return value.toString();
  }
  return maxValue.toString() + abbreviation;
}
