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

import {AxiosHeaders} from 'axios';
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
      config: {headers: new AxiosHeaders()},
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
