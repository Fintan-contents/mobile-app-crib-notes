import {NavigationProp} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/routers';
import crashlytics from '@react-native-firebase/crashlytics';

declare global {
  import Mocked = jest.Mocked;
  const __mocks: {
    navigation: Mocked<NavigationProp<ParamListBase>>;
    crashlytics: Mocked<ReturnType<typeof crashlytics>>;
  };
}
