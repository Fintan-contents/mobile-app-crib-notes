import React, {useEffect} from 'react';

import {AppStateTemplate} from './AppStateTemplate';
import {useAppStateHistory} from './useAppStateHistory';

const ScreenName = 'AppState';
const Screen: React.FC = () => {
  const {appStateHistory, registerEventListeners, historyKeyExtractor} = useAppStateHistory();
  useEffect(() => registerEventListeners(), [registerEventListeners]);

  return <AppStateTemplate testID="AppStateScreen" history={appStateHistory} keyExtractor={historyKeyExtractor} />;
};

export const AppStateScreen = {
  name: ScreenName,
  component: Screen,
  options: {title: 'Track AppState'},
};
