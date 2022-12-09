import * as Random from 'expo-random';
import {AccountRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {db} from '../../db';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const postSignup = rest.post(`${backendUrl}/signup`, async (req, res, ctx) => {
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
  const randomBytes = Random.getRandomBytes(byteCount);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
};
