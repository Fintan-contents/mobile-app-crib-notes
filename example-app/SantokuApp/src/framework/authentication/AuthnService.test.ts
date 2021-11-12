import {generatePassword} from 'framework/utilities/id';
import {AuthnService} from '.';

describe('Message message', () => {
  test('サインアップ -> ログイン -> ログアウト', async () => {
    try{
      //@ts-ignore レスポンスはAny型のため 
      const ret = await AuthnService.getCsrfToken();
      //@ts-ignore レスポンスはAny型のため 
      console.log(ret.data);
      const password = await generatePassword();
      //@ts-ignore レスポンスはAny型のため 
      let res = await AuthnService.signup('nicknameAaaaaa', password);
      //@ts-ignore レスポンスはAny型のため 
      console.log(res);
      const accountId = res.data.accountId;
      //@ts-ignore レスポンスはAny型のため 
      res = await AuthnService.login(accountId, password);
      //@ts-ignore レスポンスはAny型のため 
      console.log(res);
      //@ts-ignore レスポンスはAny型のため 
      res = await AuthnService.logout();
      //@ts-ignore レスポンスはAny型のため 
      console.log(res);
    } catch(err) {
      console.error(err);
    }
  })
});
