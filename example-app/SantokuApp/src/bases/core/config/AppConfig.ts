import {Platform} from 'react-native';
import {Config} from 'react-native-config';

/**
 * 環境設定値を取得できます。
 *
 * ```ts
 * import {AppConfig} from 'bases';
 *
 * console.log(AppConfig.appNameHome);
 * ```
 */
export abstract class AppConfig {
  static get appIdFlavorSuffix(): string {
    return Config.APP_ID_FLAVOR_SUFFIX;
  }

  static get appNameHome(): string {
    return Config.APP_NAME_HOME;
  }

  static get provisioningProfileFlavor(): string {
    return Config.PROVISIONING_PROFILE_FLAVOR;
  }

  static get termsUrl(): string {
    return Config.TERMS_URL;
  }

  static get santokuAppBackendUrl(): string {
    return Config.SANTOKU_APP_BACKEND_URL;
  }

  static get requestTimeout(): number | undefined {
    const timeout = Number(Config.REQUEST_TIMEOUT);
    return isNaN(timeout) ? undefined : timeout;
  }

  static get storeUrl(): string | undefined {
    return Platform.select({
      ios: Config.APP_STORE_APP_URL,
      android: Config.GOOGLE_PLAY_APP_URL,
    });
  }

  static get mswEnabled(): boolean {
    return Config.MSW_ENABLED === 'true';
  }
}
