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
  log(level: LogLevel, message: string, errorCode: string) {
    crashlytics().recordError(new Error(`[${level}] [${errorCode}] ${message}`), errorCode);
  }

  /**
   * Firebase Crashlyticsにtraceログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  trace(message: string, errorCode: string) {
    this.log('trace', message, errorCode);
  }

  /**
   * Firebase Crashlyticsにdebugログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  debug(message: string, errorCode: string) {
    this.log('debug', message, errorCode);
  }

  /**
   * Firebase Crashlyticsにinfoログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  info(message: string, errorCode: string) {
    this.log('info', message, errorCode);
  }

  /**
   * Firebase Crashlyticsにwarnログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  warn(message: string, errorCode: string) {
    this.log('warn', message, errorCode);
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
