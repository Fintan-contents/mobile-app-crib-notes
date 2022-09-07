import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {ErrorInUseEffectPage} from 'features/demo-error/pages/ErrorInUseEffectPage';
import React, {useCallback} from 'react';

export const ErrorInUseEffectScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'ErrorInUseEffect'>> = ({
  navigation,
}) => {
  const navigateToErrorInUseEffectSyncProcess = useCallback(
    () => navigation.navigate('ErrorInUseEffectSyncProcess'),
    [navigation],
  );
  const navigateToErrorInUseEffectAsyncProcessPage = useCallback(
    () => navigation.navigate('ErrorInUseEffectAsyncProcess'),
    [navigation],
  );
  return (
    <ErrorInUseEffectPage
      navigateToErrorInUseEffectSyncProcess={navigateToErrorInUseEffectSyncProcess}
      navigateToErrorInUseEffectAsyncProcessPage={navigateToErrorInUseEffectAsyncProcessPage}
    />
  );
};
