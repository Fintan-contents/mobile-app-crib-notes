import * as Application from 'expo-application';
import React, {useEffect} from 'react';

import {useAppUpdates} from '../services/useAppUpdates';
import {showUpdateRequiredDialog} from '../use-cases/showUpdateRequiredDialog';

const AppUpdatesChecker: React.FC<React.PropsWithChildren> = ({children}) => {
  const {appUpdates} = useAppUpdates();

  useEffect(() => {
    if (appUpdates?.updateRequired) {
      showUpdateRequiredDialog(Application.nativeApplicationVersion!);
    }
  }, [appUpdates]);
  if (appUpdates === undefined || appUpdates.updateRequired) {
    return null;
  }

  return <>{children}</>;
};

export {AppUpdatesChecker};
