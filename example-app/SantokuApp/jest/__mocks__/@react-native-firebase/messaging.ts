import messaging from '@react-native-firebase/messaging';

import mockedFirebase from './app';

const mock: Omit<
  ReturnType<typeof messaging>,
  // nativeとemitterはprivateなのでここでは除外しておく。
  'native' | 'emitter'
> = {
  app: mockedFirebase.app(),
  isAutoInitEnabled: true,
  setAutoInitEnabled: jest.fn(),
  getInitialNotification: jest.fn(),
  getToken: jest.fn(),
  getIsHeadless: jest.fn(),
  deleteToken: jest.fn(),
  onMessage: jest.fn(),
  onNotificationOpenedApp: jest.fn(),
  onTokenRefresh: jest.fn(),
  requestPermission: jest.fn(),
  registerDeviceForRemoteMessages: jest.fn(),
  isDeviceRegisteredForRemoteMessages: true,
  unregisterDeviceForRemoteMessages: jest.fn(),
  getAPNSToken: jest.fn(),
  hasPermission: jest.fn(),
  onDeletedMessages: jest.fn(),
  onMessageSent: jest.fn(),
  onSendError: jest.fn(),
  setBackgroundMessageHandler: jest.fn(),
  sendMessage: jest.fn(),
  subscribeToTopic: jest.fn(),
  unsubscribeFromTopic: jest.fn(),
};

Object.defineProperty(__mocks, 'messaging', {value: mock});

// テストケースごとにモックは初期化しておく。
beforeEach(() =>
  Object.values(mock).forEach(fn => {
    if (jest.isMockFunction(fn)) {
      fn.mockClear();
    }
  }),
);

export default () => mock;
