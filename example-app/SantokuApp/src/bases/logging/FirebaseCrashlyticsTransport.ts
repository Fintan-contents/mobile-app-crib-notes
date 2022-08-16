import crashlytics from '@react-native-firebase/crashlytics';

import {LogLevel} from './Logger';
import {Transport} from './Transport';

/**
 * Firebase Crashlyticsに出力するトランスポートです。
 */
class FirebaseCrashlyticsTransport implements Transport {
  /**
   * Firebase Crashlyticsにログ出力します。
   * @param level ログレベル
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @see {@link https://rnfirebase.io/crashlytics/usage#usage}
   * @see {@link FirebaseCrashlyticsTypes.Module.recordError}
   */
  log(level: LogLevel, message: string, errorCode?: string) {
    // FirebaseCrashlyticsTransportはエラーレベルのログしか出力しないため、errorCodeは必ず存在している想定
    crashlytics().recordError(new Error(message), errorCode);
  }

  /**
   * traceログは、Firebase Crashlyticsに出力しません。
   * @param message 出力するメッセージ
   */
  trace(message: string) {
    // nop
  }

  /**
   * debugログは、Firebase Crashlyticsに出力しません。
   * @param message 出力するメッセージ
   */
  debug(message: string) {
    // nop
  }

  /**
   * infoログは、Firebase Crashlyticsに出力しません。
   * @param message 出力するメッセージ
   */
  info(message: string) {
    // nop
  }

  /**
   * warnログは、Firebase Crashlyticsに出力しません。
   * @param message 出力するメッセージ
   */
  warn(message: string) {
    // nop
  }

  /**
   * Firebase Crashlyticsにerrorログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  error(message: string, errorCode: string) {
    this.log('error', message, errorCode);
  }
}

export {FirebaseCrashlyticsTransport};
