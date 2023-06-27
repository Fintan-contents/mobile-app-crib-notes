import * as Crypto from 'expo-crypto';
import {CsrfTokenResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {passthrough} from '../../utils/passthrough';

export const getSystemCsrfToken = rest.get(`${backendUrl}/system/csrf-token`, async (req, res, ctx) => {
  let response: Response | undefined;
  try {
    // バックエンドのAPIを呼び出す
    response = await passthrough(req, ctx);
  } catch {
    // passthroughでエラーハンドリング（ログ出力）しているのでここでは何もしない
    // デバイストークン登録API以外は、バックエンドのAPI通信時にエラーが発生しても正常終了とする
  }
  // FetchAPIのjson()はany型で返却されるので、CsrfTokenResponseに型変換
  const json = (await response?.json()) as CsrfTokenResponse | undefined;
  return delayedResponse(
    ctx.json<CsrfTokenResponse>({
      // CSRFトークンはバックエンドのAPIから取得した値をクライアント側から送信する必要があるため、正常に終了した場合はバックエンドのAPIの返却値をそのまま返す
      csrfTokenValue: json ? json.csrfTokenValue : generateToken(32),
      csrfTokenHeaderName: 'X-CSRF-TOKEN',
      csrfTokenParameterName: 'csrf-token',
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
  const randomBytes = Crypto.getRandomBytes(byteCount);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
};
