import ExpoConstants from 'expo-constants';

export const Constants: typeof ExpoConstants = {
  ...ExpoConstants,
  expoConfig: {
    name: 'SantokuApp',
    slug: 'santokuApp',
    extra: {
      termsUrl: 'https://www.tis.co.jp/termsofuse/',
      santokuAppBackendUrl: 'http://localhost:9080',
      requestTimeout: undefined,
      appStoreAppUrl: 'itms-apps://itunes.apple.com/jp/app/{appleAppId}',
      googlePlayAppUrl: 'https://play.google.com/store/apps/details?id={applicationId}',
      mobileAppCribNotesWebsiteUrl: 'https://fintan-contents.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/Fintan-contents/mobile-app-crib-notes',
      mswEnabled: false,
    },
  },
};

export default Constants;
