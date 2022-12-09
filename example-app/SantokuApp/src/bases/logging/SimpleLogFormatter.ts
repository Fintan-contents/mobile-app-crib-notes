import {LogFormatter, LogLevel} from './Logger';

export class SimpleLogFormatter implements LogFormatter {
  format(level: LogLevel, message: string, errorCode?: string) {
    if (!errorCode) {
      return `[${level}] ${message}`;
    }
    return `[${level}] [${errorCode}] ${message}`;
  }
}
