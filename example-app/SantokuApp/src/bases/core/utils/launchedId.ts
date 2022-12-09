/**
 * アプリの起動IDを生成します。
 * @returns 32桁の半角数字と半角英子文字で構成されたランダム値
 */
import {randomAsync} from './randomAsync';

export function launchedId(): Promise<string> {
  return randomAsync(32);
}
