import {passthrough} from 'fixtures/msw/utils/passthrough';
import {rest} from 'msw';

import {setLoggedInAccountId} from './setLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const postLogout = rest.post(`${backendUrl}/logout`, async (req, res, ctx) => {
  try {
    // バックエンドのAPIを呼び出す
    // セッションCookieを削除して、ログアウト後に認証が必要なAPI通信をできないようにする
    await passthrough(req, ctx);
  } catch {
    // passthroughでエラーハンドリング（ログ出力）しているのでここでは何もしない
    // デバイストークン登録API以外は、バックエンドのAPI通信時にエラーが発生しても正常終了とする
  }
  try {
    setLoggedInAccountId('');

    return delayedResponse(ctx.status(204));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
