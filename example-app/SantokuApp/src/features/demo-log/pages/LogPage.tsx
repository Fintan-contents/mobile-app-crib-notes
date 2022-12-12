import {log} from 'bases/logging';
import React from 'react';

import {LogTemplate} from '../components/LogTemplate';
const traceLog = () => log.trace('デモ用Traceログ');
const debugLog = () => log.debug('デモ用Debugログ');
const infoLog = () => log.info('デモ用Infoログ');
const warnLog = () => log.warn('デモ用Warnログ');
const errorLog = () => log.error(new Error('デモ用Errorログ'), 'DemoErrorLog');

export const LogPage: React.FC = () => {
  return (
    <LogTemplate
      testID="LogScreen"
      traceLog={traceLog}
      debugLog={debugLog}
      infoLog={infoLog}
      warnLog={warnLog}
      errorLog={errorLog}
    />
  );
};
