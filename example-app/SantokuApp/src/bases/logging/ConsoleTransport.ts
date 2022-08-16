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
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  log(level: LogLevel, message: string, errorCode?: string) {
    const log = ConsoleMethod.for(level);
    log(message);
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
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  error(message: string, errorCode: string) {
    this.log('error', message, errorCode);
  }
}

export {ConsoleTransport};
