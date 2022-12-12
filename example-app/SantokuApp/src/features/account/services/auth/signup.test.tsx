import * as generatePassword from 'bases/core/utils/generatePassword';
import * as accountApi from 'features/backend/apis/account/account';

import * as login from './login';
import {signup} from './signup';

describe('signup', () => {
  test('サインアップAPIを呼び出して、パスワードを自動生成した後にログインを呼び出しているかの検証', async () => {
    jest.mock('./login');
    jest.mock('bases/core/utils/generatePassword');
    jest.mock('features/backend/apis/account/account');
    const spyGeneratePassword = jest.spyOn(generatePassword, 'generatePassword').mockResolvedValue('password123');
    const spySignupApi = jest.spyOn(accountApi, 'postSignup').mockResolvedValue({
      data: {
        accountId: '123456789',
        profile: {nickname: 'testNickName', type: ['partner'], points: 0, totalPoints: 0},
        deviceTokens: [],
      },
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {},
    });
    const spyLogin = jest.spyOn(login, 'login').mockResolvedValue({
      status: 'COMPLETE',
    });

    const res = await signup('testNickName');
    expect(res).toEqual({
      status: 'COMPLETE',
    });
    expect(spyGeneratePassword).toHaveBeenCalled();
    expect(spySignupApi).toHaveBeenCalledWith({nickname: 'testNickName', password: 'password123'});
    expect(spyLogin).toHaveBeenCalledWith('123456789', 'password123');
  });
});
