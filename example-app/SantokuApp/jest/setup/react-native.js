// https://reactnavigation.org/docs/testing#mocking-native-modules
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// !!! NOTICE !!!
// The React Navigation documentation says that `react-native-reanimated` and `react-native-gesture-handler`
// also need to be configured with mocks.
// But since React Navigation v6 does not already depend on those packages, mocking those packages is not necessary
// for React Navigation v6.
//
// If you want to use `react-native-reanimated` and `react-native-gesture-handler`, add mock according to the guide
// provided by each package.
// - `react-native-reanimated`: https://docs.swmansion.com/react-native-reanimated/docs/guide/testing/
// - `react-native-gesture-handler`: https://docs.swmansion.com/react-native-gesture-handler/docs/guides/testing
