import 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import * as SplashScreen from 'expo-splash-screen';

import {App} from './src/App';

// Manually hide splash screen
SplashScreen.preventAutoHideAsync().catch(() => {
  console.info('Failed to prevent auto hide splash screen.');
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
