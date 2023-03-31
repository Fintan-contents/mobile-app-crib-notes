import Constants from 'expo-constants';
import {Platform} from 'react-native';

/**
 * 環境設定値を取得できます。
 *
 * ```ts
 * import {AppConfig} from 'bases';
 *
 * console.log(AppConfig.appNameHome);
 * ```
 *
 * {@link Constants.expoConfig.extra}.XXXで取得できる値が、型定義ではanyとなっています。
 * しかし、環境設定値はapp.config.xxx.jsに必ず適切な型で設定されている想定のため、type assertionしています。
 *
 * app.config.xxx.jsに環境設定値が設定されていない場合や、適切な型で設定されていない場合は、実行時にエラーとなります。
 */
export abstract class AppConfig {
  static get termsUrl(): string {
    return Constants.expoConfig?.extra?.termsUrl as string;
  }

  static get santokuAppBackendUrl(): string {
    const url = Constants.expoConfig?.extra?.santokuAppBackendUrl as string;
    return Platform.OS === 'android' ? url.replace('localhost', '10.0.2.2') : url;
  }

  static get requestTimeout(): number | undefined {
    const timeout = Constants.expoConfig?.extra?.requestTimeout as number;
    return isNaN(timeout) ? undefined : timeout;
  }

  static get storeUrl(): string | undefined {
    return Platform.select({
      ios: Constants.expoConfig?.extra?.appStoreAppUrl as string,
      android: Constants.expoConfig?.extra?.googlePlayAppUrl as string,
    });
  }

  static get mobileAppCribNotesWebsiteUrl(): string {
    return Constants.expoConfig?.extra?.mobileAppCribNotesWebsiteUrl as string;
  }

  static get mobileAppCribNotesRepositoryUrl(): string {
    return Constants.expoConfig?.extra?.mobileAppCribNotesRepositoryUrl as string;
  }

  static get mswEnabled(): boolean {
    return Constants.expoConfig?.extra?.mswEnabled as boolean;
  }
}
