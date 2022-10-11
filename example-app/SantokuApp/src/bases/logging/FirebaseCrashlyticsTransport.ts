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
   * @param messageOrError 出力するメッセージ、またはエラー
   * @param errorCode エラーコード
   * @see {@link https://rnfirebase.io/crashlytics/usage#usage}
   * @see {@link FirebaseCrashlyticsTypes.Module.recordError}
   */
  log(level: LogLevel, messageOrError: string | Error, errorCode?: string) {
    if (typeof messageOrError === 'string') {
      crashlytics().recordError(new Error(messageOrError), errorCode);
      return;
    }
    crashlytics().recordError(messageOrError, errorCode);
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
   * @param error エラー
   * @param errorCode エラーコード
   */
  error(error: Error, errorCode: string) {
    this.log('error', error, errorCode);
  }
}

export {FirebaseCrashlyticsTransport};
