import {AppStateEvent, AppStateStatus} from 'react-native';

export type StateChangedEventRecord = {
  event: AppStateEvent;
  state: AppStateStatus;
  timestamp: Date;
};
