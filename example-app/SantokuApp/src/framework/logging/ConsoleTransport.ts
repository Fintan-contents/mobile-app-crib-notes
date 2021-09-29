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
  log(level: LogLevel, message: string, errorCode: string) {
    const log = ConsoleMethod.for(level);
    log(`[${level}] [${errorCode}] ${message}`);
  }

  /**
   * {@link console.trace}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  trace(message: string, errorCode: string) {
    this.log('trace', message, errorCode);
  }

  /**
   * {@link console.debug}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  debug(message: string, errorCode: string) {
    this.log('debug', message, errorCode);
  }

  /**
   * {@link console.info}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  info(message: string, errorCode: string) {
    this.log('info', message, errorCode);
  }

  /**
   * {@link console.warn}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   */
  warn(message: string, errorCode: string) {
    this.log('warn', message, errorCode);
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
