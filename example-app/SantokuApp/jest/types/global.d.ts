import {useNavigation} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';

declare global {
  import Mocked = jest.Mocked;
  const __mocks: {
    navigation: Mocked<ReturnType<typeof useNavigation>>;
    crashlytics: Mocked<ReturnType<typeof crashlytics>>;
  };
}
