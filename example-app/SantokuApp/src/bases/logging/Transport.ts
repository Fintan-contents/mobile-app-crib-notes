import {LogLevel} from './Logger';

interface Transport {
  log: TransportMethod;
  error: ErroredTransportMethod;
  warn: LeveledTransportMethod;
  info: LeveledTransportMethod;
  debug: LeveledTransportMethod;
  trace: LeveledTransportMethod;
}

interface TransportMethod {
  (level: LogLevel, message: string | Error, errorCode?: string): void;
}

interface LeveledTransportMethod {
  (message: string): void;
}

interface ErroredTransportMethod {
  (error: Error, errorCode: string): void;
}

export type {Transport};
