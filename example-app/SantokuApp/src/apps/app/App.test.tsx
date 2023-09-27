import '@testing-library/jest-native/extend-expect';
import {render, screen, cleanup, waitFor} from '@testing-library/react-native';
import ExpoApplication from 'expo-application';
import ExpoSecureStore from 'expo-secure-store';
import {initialData} from 'fixtures/msw/datas';
import {initialDb} from 'fixtures/msw/db';
import {handlers} from 'fixtures/msw/handlers';
import {setupServer} from 'msw/node';
import React from 'react';

import {App} from './App';

jest.mock('expo-dev-menu', () => {
  return {registerDevMenuItems: () => Promise.resolve()};
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
  // テスト時は2023/6/1で日付を固定する
  jest.setSystemTime(new Date(2023, 5, 1, 0, 0, 0, 0));
});

jest.mock('expo-application', () => {
  const originalModule = jest.requireActual<typeof ExpoApplication>('expo-application');
  return {
    ...originalModule,
    nativeApplicationVersion: '0.1.0',
  };
});
jest.mock('expo-secure-store', () => {
  const originalModule = jest.requireActual<typeof ExpoSecureStore>('expo-secure-store');
  return {
    ...originalModule,
    getItemAsync: jest.fn(() => {
      return Promise.resolve('santoku');
    }),
  };
});
jest.mock('bases/date/formatDiffInDateTime', () => {
  return {
    formatDiffInDateTime: jest.fn(() => {
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
