import * as Crypto from 'expo-crypto';

/**
 * SHA256でハッシュ化します。
 * @param value ハッシュ化したい値
 * @returns ハッシュ化した値
 */
function sha256(value: string): Promise<string> {
  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, value);
}

export {sha256};
