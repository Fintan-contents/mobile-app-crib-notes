interface Logger {
  log: LogMethod;
  error: LeveledLogMethod;
  warn: LeveledLogMethod;
  info: LeveledLogMethod;
  debug: LeveledLogMethod;
  trace: LeveledLogMethod;
  setLevel: (level: LogLevel) => Logger;
}

interface LogMethod {
  (level: LogLevel, message: string, ...params: any[]): Logger;

  (level: LogLevel, message: LogMessageSupplier, ...params: any[]): Logger;
}

interface LeveledLogMethod {
  (message: string, ...params: any[]): Logger;

  (message: LogMessageSupplier, ...params: any[]): Logger;
}

const LogLevelSet = {
  trace: -1,
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

export type {Logger, LogLevel, LoggerOptions, StrictLoggerOptions, LogMessageSupplier};
export {LogLevelSet, DEFAULT_LOGGER_OPTIONS};
