import 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import {enableScreens} from 'react-native-screens';

import {App} from './src/App';

// https://reactnavigation.org/docs/react-native-screens
// Enable screens support before rendering any of navigation stack
enableScreens();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
