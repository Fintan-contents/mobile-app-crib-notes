import crashlytics from '@react-native-firebase/crashlytics';

import mockedFirebase from './app';

const mock: Omit<
  ReturnType<typeof crashlytics>,
  // nativeとemitterはprivateなのでここでは除外しておく。
  'native' | 'emitter'
> = {
  app: mockedFirebase.app(),
  checkForUnsentReports: jest.fn(),
  crash: jest.fn(),
  deleteUnsentReports: jest.fn(),
  didCrashOnPreviousExecution: jest.fn(),
  isCrashlyticsCollectionEnabled: true, // なぜか型定義上`true`しか許容されない、、、
  log: jest.fn(),
  sendUnsentReports: jest.fn(),
  setAttribute: jest.fn(),
  setAttributes: jest.fn(),
  setCrashlyticsCollectionEnabled: jest.fn(),
  setUserId: jest.fn(),
  recordError: jest.fn(),
};

Object.defineProperty(__mocks, 'crashlytics', {value: mock});

// テストケースごとにモックは初期化しておく。
beforeEach(() =>
  Object.values(mock).forEach(fn => {
    if (jest.isMockFunction(fn)) {
      fn.mockClear();
    }
  }),
);

export default () => mock;
