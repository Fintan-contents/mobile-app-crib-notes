import {UpdateDeviceToken} from 'features/backend/apis/model';
import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {passthrough} from '../../utils/passthrough';

export const postAccountsMeDeviceToken = rest.post(`${backendUrl}/accounts/me/device-token`, async (req, res, ctx) => {
  try {
    // バックエンドのAPIを呼び出す
    await passthrough(req, ctx);
  } catch {
    /**
     デバイストークンの登録に関しては、バックエンドにデバイストークンが登録されない可能性がある。
     例えば、以下のようなケースが考えられる。
     1. ログイン時にMSWの認証は成功したけど、バックエンドの認証に失敗（MSWの認証はパスワードをなんでも良しとしているので普通にあり得る）
     2. ログイン後のホーム画面でデバイストークンを登録するが、MSWにしか登録されない
     3. バックエンドにデバイストークンが登録されていないので、デモ画面のPush通知一斉送信は実行されない
     4. 一旦ログアウトして、MSWとバックエンドの両方の認証が通る入力値でログインしても、MSWにはデバイストークンが登録されているので、クライアントからデバイストークン登録APIが呼ばれず、バックエンドには永遠にデバイストークンが登録されない

     上記問題を回避するため、バックエンドでエラーが発生した場合は、MSWにもデバイストークンを登録しない。
     こうすることで、上記ケースの4では、MSWにデバイストークンが登録されていないので、クライアントからデバイストークン登録APIが呼ばれるようになる。
     */
    return delayedResponse(ctx.status(204));
  }
  try {
    const {oldDeviceToken, newDeviceToken} = await req.json<UpdateDeviceToken>();
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);

    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    const savedDeviceTokens = account!.deviceTokens;
    const deviceTokens = savedDeviceTokens.filter(d => d === oldDeviceToken);
    const existed = deviceTokens.some(d => d === newDeviceToken);
    if (!existed) {
      deviceTokens.push(newDeviceToken);
    }
    db.account.update({where: {accountId: {equals: accountId}}, data: {deviceTokens}});

    return delayedResponse(ctx.status(204));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
