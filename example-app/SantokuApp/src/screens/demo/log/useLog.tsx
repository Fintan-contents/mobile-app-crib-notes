import {log} from '../../../framework/logging';

const traceLog = () => log.trace('デモ用Traceログ');
const debugLog = () => log.debug('デモ用Debugログ');
const infoLog = () => log.info('デモ用Infoログ');
const warnLog = () => log.warn('デモ用Warnログ');
const errorLog = () => log.error('デモ用Errorログ', 'DemoErrorLog');

export const useLog = () => {
  return {
    traceLog,
    debugLog,
    infoLog,
    warnLog,
    errorLog,
  };
};
