/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
