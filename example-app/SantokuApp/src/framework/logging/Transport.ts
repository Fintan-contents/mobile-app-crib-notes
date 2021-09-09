import {LogLevel} from './Logger';

interface Transport {
  log: TransportMethod;
  error: LeveledTransportMethod;
  warn: LeveledTransportMethod;
  info: LeveledTransportMethod;
  debug: LeveledTransportMethod;
  trace: LeveledTransportMethod;
}

interface TransportMethod {
  (level: LogLevel, message: string, errorCode: string): void;
}

interface LeveledTransportMethod {
  (message: string, errorCode: string): void;
}

export type {Transport};
