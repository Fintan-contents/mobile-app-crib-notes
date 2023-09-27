import {NavigationContainerRef} from '@react-navigation/native';
import {ParsedURL} from 'expo-linking';

import {demoAppInfoDeepLink} from './demoAppInfoDeepLink';
import {homeDeepLink} from './homeDeepLink';
import {questionDetailDeepLink} from './questionDetailDeepLink';
import {MainTabParamList, RootStackParamList} from '../../navigators/types';

export type DeepLink = {
  matchUrl: (parsedUrl: ParsedURL) => boolean | undefined;
  handle: (navigation: NavigationContainerRef<RootStackParamList>, parsedUrl: ParsedURL) => void;
  mainTabNavInitialRouteName: keyof MainTabParamList;
};
export const deepLinks = [homeDeepLink, questionDetailDeepLink, demoAppInfoDeepLink];
