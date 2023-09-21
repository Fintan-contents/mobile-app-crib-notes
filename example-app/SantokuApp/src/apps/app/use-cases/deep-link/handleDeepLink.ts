import {NavigationContainerRef} from '@react-navigation/native';
import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';

import {deepLinks} from './deepLinks';
import {RootStackParamList} from '../../navigators/types';
import {parseDeepLinkUrl} from '../../services/deep-link/parseDeepLinkUrl';

export const handleDeepLink = (url: string, navigationRef: NavigationContainerRef<RootStackParamList>) => {
  const parsedURL = parseDeepLinkUrl(url);
  if (!parsedURL) {
    return;
  }
  deepLinks
    .filter(deepLink => deepLink.matchUrl(parsedURL))
    .forEach(deepLink => {
      try {
        deepLink.handle(navigationRef, parsedURL);
      } catch (e) {
        // ログを出力して何もしない
        const error = new ApplicationError('Failed to handle deep link.', e);
        log.warn(`${error.message} cause=${String(error.stack)}`);
      }
    });
};
