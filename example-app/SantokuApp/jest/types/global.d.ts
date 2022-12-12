import notifee from '@notifee/react-native';
import type {ParamListBase} from '@react-navigation/routers';
import crashlytics from '@react-native-firebase/crashlytics';
import SplashScreen from 'expo-splash-screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  import Mocked = jest.Mocked;
  const __mocks: {
    navigation: Mocked<NativeStackNavigationProp<ParamListBase>>;
    crashlytics: Mocked<ReturnType<typeof crashlytics>>;
    expoSplashScreen: Mocked<typeof SplashScreen>;
    notifee: Mocked<typeof notifee>;
  };
}
