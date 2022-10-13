import '@testing-library/jest-native/extend-expect';
import {render, screen, cleanup, waitFor} from '@testing-library/react-native';
import {initialData} from 'fixtures/msw/datas';
import {initialDb} from 'fixtures/msw/db';
import {handlers} from 'fixtures/msw/handlers';
import {setupServer} from 'msw/node';
import React from 'react';

import {App} from './App';

jest.mock('react-native/Libraries/Utilities/DevSettings.js', () => {
  return {addMenuItem: jest.fn};
});

const server = setupServer(...handlers);
beforeAll(async () => {
  initialDb();
  await initialData();
  server.listen();
});
afterAll(() => {
  server.close();
  cleanup();
});

beforeEach(() => {
  // 画面遷移時のアニメーションが、コンポーネントのアンマウント後にステートを更新してしまうようで、
  // テストは成功するものの、エラーログが出力されてしまう。
  // タイマーを使わないようにして、アニメーションを動かさないことで回避しているつもり。
  jest.useFakeTimers();
});

jest.mock('expo-application', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('expo-application');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    nativeApplicationVersion: '0.1.0',
  };
});
jest.mock('expo-secure-store', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('expo-secure-store');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    getItemAsync: jest.fn(() => {
      return Promise.resolve('santoku');
    }),
  };
});
jest.mock('bases/date/formatDiffInDaysOrHours', () => {
  return {
    formatDiffInDaysOrHours: jest.fn(() => {
      return '1時間前';
    }),
  };
});

describe('App', () => {
  it('マウントされたときに正常にレンダリングされること', async () => {
    render(<App />);
    await waitFor(
      () => {
        screen.rerender(<App />);
        expect(screen.queryByTestId('HomePage')).not.toBeNull();
        expect(screen).toMatchSnapshot();
      },
      {timeout: 60000},
    );
  }, 60000);
});
