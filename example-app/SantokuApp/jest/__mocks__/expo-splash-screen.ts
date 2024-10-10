import SplashScreen from 'expo-splash-screen';

export const preventAutoHideAsync = jest.fn(() => Promise.resolve(true));
export const hideAsync = jest.fn(() => Promise.resolve(true));

const mock: jest.Mocked<typeof SplashScreen> = {
  preventAutoHideAsync,
  hideAsync,
};

Object.defineProperty(__mocks, 'expoSplashScreen', {value: mock});

export default mock;
