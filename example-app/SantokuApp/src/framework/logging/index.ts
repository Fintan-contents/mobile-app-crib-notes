import {firebaseConfig} from '../firebase';
import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';
import {Logger, createLogger, LoggerOptions} from './Logger';

const log =
  __DEV__ || firebaseConfig.isDummy
    ? createLogger()
    : createLogger({level: 'warn', transport: new FirebaseCrashlyticsTransport()});

export type {Logger, LoggerOptions};
export {log, createLogger};
