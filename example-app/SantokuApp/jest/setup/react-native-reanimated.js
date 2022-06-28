// jest.advanceTimersByTimeを使用した際に、TypeError: Cannot read properties of undefined (reading 'now')が発生してしまう問題に対応
// https://github.com/software-mansion/react-native-reanimated/issues/3125
global.ReanimatedDataMock = {
  now: () => Date.now(),
};
// https://docs.swmansion.com/react-native-reanimated/docs/guide/testing/
require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
