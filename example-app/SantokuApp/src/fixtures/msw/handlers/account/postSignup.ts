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
import {AccountRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {db} from '../../db';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {passthrough} from '../../utils/passthrough';

export const postSignup = rest.post(`${backendUrl}/signup`, async (req, res, ctx) => {
  try {
    // バックエンドのAPIを呼び出す
    await passthrough(req, ctx);
  } catch {
    // passthroughでエラーハンドリング（ログ出力）しているのでここでは何もしない
    // デバイストークン登録API以外は、バックエンドのAPI通信時にエラーが発生しても正常終了とする
  }
  try {
    const {nickname} = await req.json<AccountRegistration>();

    const accountId = generateAccountId(8);
    const account = db.account.create({
      accountId,
      profile: {nickname, type: [], points: 0, totalPoints: 0},
      deviceTokens: [],
    });
    db.accountTerms.create({accountId, hasAgreed: true, agreedVersion: '0.1.0'});

    return delayedResponse(ctx.status(201), ctx.json(account));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});

const toNumberAlphabet = (n: number) => {
  return (n % 32).toString(32);
};

/**
 * 指定されたバイト数のランダム値を生成します。
 * @param byteCount 生成したいランダム値のバイト数
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
const generateAccountId = (byteCount: number) => {
  const randomBytes = Crypto.getRandomBytes(byteCount);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
};
