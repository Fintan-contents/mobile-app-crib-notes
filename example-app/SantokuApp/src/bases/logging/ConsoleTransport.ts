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

import {LogLevel} from './Logger';
import {Transport} from './Transport';

/**
 * ログレベルに応じた{@link console}メソッドを定義です。
 */
const ConsoleMethod = Object.freeze({
  trace: () => console.trace,
  debug: () => console.debug,
  info: () => console.info,
  warn: () => console.warn,
  error: () => console.error,

  for(level: LogLevel) {
    return this[level]();
  },
});

/**
 * {@link console}に出力するトランスポートです。
 */
class ConsoleTransport implements Transport {
  /**
   * ログレベルに応じたconsoleメソッドを取得してログ出力します。
   * @param level ログレベル
   * @param messageOrError 出力するメッセージ、またはエラー
   */
  log(level: LogLevel, messageOrError: string | Error) {
    const log = ConsoleMethod.for(level);
    log(messageOrError);
  }

  /**
   * {@link console.trace}にログを出力します。
   * @param message 出力するメッセージ
   */
  trace(message: string) {
    this.log('trace', message);
  }

  /**
   * {@link console.debug}にログを出力します。
   * @param message 出力するメッセージ
   */
  debug(message: string) {
    this.log('debug', message);
  }

  /**
   * {@link console.info}にログを出力します。
   * @param message 出力するメッセージ
   */
  info(message: string) {
    this.log('info', message);
  }

  /**
   * {@link console.warn}にログを出力します。
   * @param message 出力するメッセージ
   */
  warn(message: string) {
    this.log('warn', message);
  }

  /**
   * {@link console.error}にログを出力します。
   * @param error エラー
   * @param errorCode エラーコード
   */
  error(error: Error, errorCode: string) {
    this.log('error', error);
  }
}

export {ConsoleTransport};
