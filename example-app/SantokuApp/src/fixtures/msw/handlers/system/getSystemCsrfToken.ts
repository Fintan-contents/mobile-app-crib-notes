import * as Random from 'expo-random';
import {CsrfTokenResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';

export const getSystemCsrfToken = rest.get(`${backendUrl}/system/csrf-token`, (req, res, ctx) => {
  return delayedResponse(
    ctx.json<CsrfTokenResponse>({
      csrfTokenValue: generateToken(32),
      csrfTokenParameterName: 'X-CSRF-TOKEN',
      csrfTokenHeaderName: 'csrf-token',
    }),
    ctx.delay(100),
  );
});

const toNumberAlphabet = (n: number) => {
  return (n % 32).toString(32);
};

/**
 * 指定されたバイト数のランダム値を生成します。
 * @param byteCount 生成したいランダム値のバイト数
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
const generateToken = (byteCount: number) => {
  const randomBytes = Random.getRandomBytes(byteCount);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
};
