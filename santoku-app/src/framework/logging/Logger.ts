interface Logger {
  log: LogMethod;
  error: LeveledLogMethod;
  warn: LeveledLogMethod;
  info: LeveledLogMethod;
  debug: LeveledLogMethod;
  setLevel: (level: LogLevel) => Logger;
}

interface LogMethod {
  (level: LogLevel, message: string): Logger;

  (level: LogLevel, message: LogMessageSupplier): Logger;
}

interface LeveledLogMethod {
  (message: string): Logger;

  (message: LogMessageSupplier): Logger;
}

const LogLevelSet = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};
type LogLevel = keyof typeof LogLevelSet;

interface LogMessageSupplier {
  (): string;
}

type LoggerOptions = {
  level?: LogLevel;
};

type StrictLoggerOptions = {
  level: LogLevel;
};

const DEFAULT_LOGGER_OPTIONS: StrictLoggerOptions = {
  level: 'info',
};

export type { Logger, LogLevel, LoggerOptions, StrictLoggerOptions, LogMessageSupplier };
export { LogLevelSet, DEFAULT_LOGGER_OPTIONS };
