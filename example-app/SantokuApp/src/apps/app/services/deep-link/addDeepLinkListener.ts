import * as Linking from 'expo-linking';

export const addDeepLinkListener = (callback: (url: string) => void) =>
  Linking.addEventListener('url', event => callback(event.url));
