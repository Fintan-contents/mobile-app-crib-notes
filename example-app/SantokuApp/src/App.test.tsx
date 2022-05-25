import '@testing-library/jest-native/extend-expect';
import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {DevSettings} from 'react-native';

import {App} from './App';
import {BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION} from './framework/backend/customInstance';

jest.spyOn(DevSettings, 'addMenuItem').mockImplementation(() => {});
jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
  status: 200,
  data: {
    csrfTokenHeaderName: 'X-CSRF-TOKEN',
    csrfTokenValue: 'dummy',
  },
});
jest.mock('service/backend/systemService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('service/backend/systemService');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    getAppUpdates: jest.fn(() => {
      return Promise.resolve({
        status: 200,
        data: {
          updateRequired: false,
          supportedVersion: 'dummy',
          message: 'dummy',
        },
      });
    }),
  };
});

jest.mock('service/backend/accountService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('service/backend/accountService');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    getAccountsMe: jest.fn(() => {
      return Promise.resolve({
        status: 200,
        data: {
          accountId: '123456789',
          deviceTokens: [],
        },
      });
    }),
    getAccountsMeTerms: jest.fn(() => {
      return Promise.resolve({
        status: 200,
        data: {
          hasAgreed: true,
          agreedVersion: '1.0.0',
        },
      });
    }),
  };
});

jest.mock('service/backend/termService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('service/backend/termService');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    getTerms: jest.fn(),
  };
});

jest.mock('framework/authentication/AuthenticationService', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('framework/authentication/AuthenticationService');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    AuthenticationService: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...originalModule.AuthenticationService,
      autoLogin: jest.fn(() => {
        return Promise.resolve({
          status: 200,
          data: {
            status: 'COMPLETE',
          },
        });
      }),
    },
  };
});

beforeEach(() => {
  // 画面遷移時のアニメーションが、コンポーネントのアンマウント後にステートを更新してしまうようで、
  // テストは成功するものの、エラーログが出力されてしまう。
  // タイマーを使わないようにして、アニメーションを動かさないことで回避しているつもり。
  jest.useFakeTimers();
});

describe('App', () => {
  it('マウントされたときに正常にレンダリングされること', async () => {
    const app = render(<App />);
    await waitFor(
      () => {
        expect(app.queryByTestId('HomeScreen')).not.toBeNull();
        expect(app).toMatchSnapshot();
      },
      {timeout: 60000},
    );
  }, 60000);
});
