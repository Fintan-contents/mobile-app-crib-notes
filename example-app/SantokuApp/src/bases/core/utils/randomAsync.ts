import * as Random from 'expo-random';

function toNumberAlphabet(n: number): string {
  return (n % 32).toString(32);
}

/**
 * 指定されたバイト数のランダム値を生成します。
 * @param byteCount 生成したいランダム値のバイト数
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
export async function randomAsync(byteCount: number): Promise<string> {
  const randomBytes = await Random.getRandomBytesAsync(byteCount);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
}
