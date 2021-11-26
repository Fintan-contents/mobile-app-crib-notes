import SplashScreen from 'expo-splash-screen';

export const preventAutoHideAsync = jest.fn(() => Promise.resolve(true));
export const hideAsync = jest.fn(() => Promise.resolve(true));
export const hide = jest.fn();
export const preventAutoHide = jest.fn();

const mock: jest.Mocked<typeof SplashScreen> = {
  preventAutoHideAsync,
  hideAsync,
  hide,
  preventAutoHide,
};

Object.defineProperty(__mocks, 'expoSplashScreen', {value: mock});

// テストケースごとにモックは初期化しておく。
beforeEach(() =>
  Object.values(mock).forEach((fn) => {
    if (jest.isMockFunction(fn)) {
      fn.mockClear();
    }
  }),
);

export default mock;
