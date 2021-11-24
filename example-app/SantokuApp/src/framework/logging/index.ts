import {firebaseConfig} from '../firebase';
import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';
import {createLogger, Logger, LoggerOptions} from './Logger';

const log =
  __DEV__ || firebaseConfig.isDummy
    ? createLogger({level: 'trace'})
    : createLogger({level: 'error', transports: [new FirebaseCrashlyticsTransport()]});

export type {Logger, LoggerOptions};
export {log, createLogger};
