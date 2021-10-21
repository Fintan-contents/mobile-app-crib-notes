import * as Random from 'expo-random';

/**
 * 指定されたバイト数のランダム値を生成します。
 * @param byteCount 生成したいランダム値のバイト数
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
function random(byteCount: number): string {
  const randomBytes = Random.getRandomBytes(byteCount);
  return randomBytes.reduce((a, c) => a + (c % 36).toString(36), '');
}

/**
 * 指定されたバイト数のランダム値を生成します。
 * @param byteCount 生成したいランダム値のバイト数
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
async function randomAsync(byteCount: number): Promise<string> {
  const randomBytes = await Random.getRandomBytesAsync(byteCount);
  return randomBytes.reduce((a, c) => a + (c % 36).toString(36), '');
}

/**
 * アプリの起動IDを生成します。
 * @returns 32桁の半角数字と半角英子文字で構成されたランダム値
 */
async function launchedId(): Promise<string> {
  return await randomAsync(32);
}

export {random, randomAsync, launchedId};
