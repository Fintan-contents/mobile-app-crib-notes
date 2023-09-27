import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {handleError} from 'bases/core/errors/handleError';
import * as Linking from 'expo-linking';

export const parseDeepLinkUrl = (url: string) => {
  try {
    return Linking.parse(url);
  } catch (e) {
    handleError(new ApplicationError('Failed to parse deep-link url.', e));
  }
};
