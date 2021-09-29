import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';
import {Logger, createLogger, LoggerOptions} from './Logger';

const log = __DEV__ ? createLogger() : createLogger({level: 'warn', transport: new FirebaseCrashlyticsTransport()});

export type {Logger, LoggerOptions};
export {log, createLogger};
