import {randomAsync} from './randomAsync';

/**
 * パスワードを生成します。
 * @returns 16桁の半角英数と半角英字文字で構成されたランダム値
 */
export function generatePassword(): Promise<string> {
  return randomAsync(16);
}
