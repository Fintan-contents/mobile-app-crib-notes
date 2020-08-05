// https://reactnavigation.org/docs/testing#mocking-native-modules
// > To be able to test React Navigation components, we need to mock the following dependencies including native code:
// >   * react-native-reanimated
// >   * react-native-gesture-handler

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// ref https://github.com/joeferraro/react-native-cookies/issues/16#issuecomment-348448319
jest.mock('@react-native-community/cookies', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  };
});
