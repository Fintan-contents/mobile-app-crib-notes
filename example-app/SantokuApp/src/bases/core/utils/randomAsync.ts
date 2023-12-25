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

import * as Crypto from 'expo-crypto';

function toNumberAlphabet(n: number): string {
  return (n % 32).toString(32);
}

/**
 * 指定されたバイト数のランダム値を生成します。
 * @param byteCount 生成したいランダム値のバイト数
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
export async function randomAsync(byteCount: number): Promise<string> {
  const randomBytes = await Crypto.getRandomBytesAsync(byteCount);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
}
