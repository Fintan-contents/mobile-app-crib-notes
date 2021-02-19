import {Logger, LogLevel, LogLevelSet, LogMessageSupplier, StrictLoggerOptions} from './Logger';

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

class SimpleConsoleLogger implements Logger {
  private level: number;

  constructor(options: StrictLoggerOptions) {
    this.level = LogLevelSet[options.level];
  }

  private isLevelEnabled(level: LogLevel): boolean {
    return this.level <= LogLevelSet[level];
  }

  setLevel(level: LogLevel): Logger {
    this.level = LogLevelSet[level];
    return this;
  }

  log(level: LogLevel, message: string | LogMessageSupplier, ...params: any[]): Logger {
    const log = ConsoleMethod.for(level);
    if (this.isLevelEnabled(level)) {
      if (typeof message === 'string') {
        log(message, params);
      } else {
        log(message(), params);
      }
    }
    return this;
  }

  trace(message: string | LogMessageSupplier, ...params: any[]): Logger {
    this.log('trace', message, params);
    return this;
  }

  debug(message: string | LogMessageSupplier, ...params: any[]): Logger {
    this.log('debug', message, params);
    return this;
  }

  info(message: string | LogMessageSupplier, ...params: any[]): Logger {
    this.log('info', message, params);
    return this;
  }

  warn(message: string | LogMessageSupplier, ...params: any[]): Logger {
    this.log('warn', message, params);
    return this;
  }

  error(message: string | LogMessageSupplier, ...params: any[]): Logger {
    this.log('error', message, params);
    return this;
  }
}

export {SimpleConsoleLogger};
