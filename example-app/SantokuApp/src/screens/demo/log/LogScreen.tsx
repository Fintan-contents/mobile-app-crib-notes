import React from 'react';

import {LogTemplate} from './LogTemplate';
import {useLog} from './useLog';

const ScreenName = 'Log';
const Screen: React.FC = () => {
  const {traceLog, debugLog, infoLog, warnLog, errorLog} = useLog();
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

export const LogScreen = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Log',
  },
};
