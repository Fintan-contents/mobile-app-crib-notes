import * as Random from 'expo-random';

function toNumberAlphabet(n: number): string {
  return (n % 36).toString(36);
}

/**
 * 指定されたバイト数のランダム値を生成します。
 * @param byteCount 生成したいランダム値のバイト数
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
async function randomAsync(byteCount: number): Promise<string> {
  const randomBytes = await Random.getRandomBytesAsync(byteCount);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
}

/**
 * アプリの起動IDを生成します。
 * @returns 32桁の半角数字と半角英子文字で構成されたランダム値
 */
function launchedId(): Promise<string> {
  return randomAsync(32);
}

export {launchedId};
