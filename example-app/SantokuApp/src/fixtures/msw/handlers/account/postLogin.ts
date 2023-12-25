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

import {AccountLogin, AccountLoginResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {setLoggedInAccountId} from './setLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {passthrough} from '../../utils/passthrough';

export const postLogin = rest.post(`${backendUrl}/login`, async (req, res, ctx) => {
  try {
    // バックエンドのAPIを呼び出す
    await passthrough(req, ctx);
  } catch {
    // passthroughでエラーハンドリング（ログ出力）しているのでここでは何もしない
    // デバイストークン登録API以外は、バックエンドのAPI通信時にエラーが発生しても正常終了とする
  }
  try {
    const {accountId} = await req.json<AccountLogin>();
    const db = getDb(accountId);
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401), ctx.delay(100));
    }

    setLoggedInAccountId(accountId);

    return delayedResponse(ctx.json<AccountLoginResponse>({status: 'COMPLETE'}), ctx.delay(100));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
