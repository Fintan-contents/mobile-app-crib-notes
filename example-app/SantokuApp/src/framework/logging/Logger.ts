import {ConsoleTransport} from './ConsoleTransport';
import {SimpleLogFormatter} from './SimpleLogFormatter';
import {Transport} from './Transport';

/**
 * ロガーです。
 * ログレベルや、出力先をオプションで指定できます。
 */
class Logger {
  private level: number;
  private formatter: LogFormatter;
  private transports: Transport[];

  /**
   * ロガーのコンストラクタです。
   * @param options ロガーオプション
   */
  constructor(options?: LoggerOptions) {
    const mergedOptions = {...DEFAULT_LOGGER_OPTIONS, ...options};
    this.level = LogLevelSet[mergedOptions.level];
    this.formatter = mergedOptions.formatter;
    this.transports = mergedOptions.transports;
  }

  /**
   * 指定されたログレベルが、ログ出力適用対象かを判定します。
   * @param level ログレベル
   */
  private isLevelEnabled(level: LogLevel): boolean {
    return this.level <= LogLevelSet[level];
  }

  /**
   * ログレベルを設定します。
   * @param level ログレベル
   * @returns ロガーインスタンス
   */
  setLevel(level: LogLevel): Logger {
    this.level = LogLevelSet[level];
    return this;
  }

  /**
   * traceレベルのログを出力します。
   * @param message ログメッセージ
   * @returns ロガーインスタンス
   */
  trace(message: string | LogMessageSupplier): Logger {
    if (this.isLevelEnabled('trace')) {
      const formatted = this.formatMessage('trace', message);
      this.transports.forEach((t) => t.trace(formatted));
    }
    return this;
  }

  /**
   * debugレベルのログを出力します。
   * @param message ログメッセージ
   * @returns ロガーインスタンス
   */
  debug(message: string | LogMessageSupplier): Logger {
    if (this.isLevelEnabled('debug')) {
      const formatted = this.formatMessage('debug', message);
      this.transports.forEach((t) => t.debug(formatted));
    }
    return this;
  }

  /**
   * infoレベルのログを出力します。
   * @param message ログメッセージ
   * @returns ロガーインスタンス
   */
  info(message: string | LogMessageSupplier): Logger {
    if (this.isLevelEnabled('info')) {
      const formatted = this.formatMessage('info', message);
      this.transports.forEach((t) => t.info(formatted));
    }
    return this;
  }

  /**
   * warnレベルのログを出力します。
   * @param message ログメッセージ
   * @returns ロガーインスタンス
   */
  warn(message: string | LogMessageSupplier): Logger {
    if (this.isLevelEnabled('warn')) {
      const formatted = this.formatMessage('warn', message);
      this.transports.forEach((t) => t.warn(formatted));
    }
    return this;
  }

  /**
   * errorレベルのログを出力します。
   * @param message ログメッセージ
   * @param errorCode エラーコード
   * @returns ロガーインスタンス
   */
  error(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('error')) {
      const formatted = this.formatMessage('error', message, errorCode);
      this.transports.forEach((t) => t.error(formatted, errorCode));
    }
    return this;
  }

  /**
   * LogFormatterを使用してメッセージをフォーマットします。
   * @param level ログレベル
   * @param message ログメッセージ
   * @param errorCode エラーコード
   * @returns メッセージ
   */
  formatMessage(level: LogLevel, message: string | LogMessageSupplier, errorCode?: string) {
    if (typeof message === 'string') {
      return this.formatter.format(level, message, errorCode);
    }
    return this.formatter.format(level, message(), errorCode);
  }
}

/**
 * ログレベルのセットです。
 */
const LogLevelSet = {
  trace: -1,
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};
type LogLevel = keyof typeof LogLevelSet;

/**
 * ログに出力するメッセージを取得するためのインターフェースです。
 */
interface LogMessageSupplier {
  (): string;
}

/**
 * ログに出力するメッセージのフォーマッタです。
 */
interface LogFormatter {
  /**
   * メッセージをフォーマットします。
   * @param level ログレベル
   * @param message メッセージ
   * @param errorCode エラーコード
   * @returns フォーマット後のメッセージ
   */
  format(level: LogLevel, message: string, errorCode?: string): string;
}

/**
 * ロガーに設定できるオプションです。
 */
type LoggerOptions = {
  level?: LogLevel;
  formatter?: LogFormatter;
  transports?: Transport[];
};

/**
 * ロガーのデフォルトオプションです。
 */
const DEFAULT_LOGGER_OPTIONS: Required<LoggerOptions> = {
  level: 'info',
  formatter: new SimpleLogFormatter(),
  transports: [new ConsoleTransport()],
};

/**
 * ロガーを生成します。
 * @param options ロガーオプション
 */
function createLogger(options?: LoggerOptions): Logger {
  return new Logger(options);
}

export type {LogLevel, LoggerOptions, LogMessageSupplier, LogFormatter};
export {Logger, createLogger, LogLevelSet};
