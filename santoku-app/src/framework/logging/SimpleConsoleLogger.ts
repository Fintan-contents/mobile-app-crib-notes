import { Logger, LogLevel, LogLevelSet, LogMessageSupplier, StrictLoggerOptions } from './Logger';

function _log(message: string): void {
  console.log(message);
}

class SimpleConsoleLogger implements Logger {
  private level: number;

  constructor(options: StrictLoggerOptions) {
    this.level = LogLevelSet[options.level];
  }

  setLevel(level: LogLevel): Logger {
    this.level = LogLevelSet[level];
    return this;
  }

  log(level: LogLevel, message: string | LogMessageSupplier): Logger {
    if (this.level <= LogLevelSet[level]) {
      if (typeof message === 'string') {
        _log(message);
      } else {
        _log(message());
      }
    }
    return this;
  }

  debug(message: string | LogMessageSupplier): Logger {
    this.log('debug', message);
    return this;
  }

  info(message: string | LogMessageSupplier): Logger {
    this.log('info', message);
    return this;
  }

  warn(message: string | LogMessageSupplier): Logger {
    this.log('warn', message);
    return this;
  }

  error(message: string | LogMessageSupplier): Logger {
    this.log('error', message);
    return this;
  }
}

export { SimpleConsoleLogger };
