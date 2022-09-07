import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {ErrorCasePage} from 'features/demo-error/pages/ErrorCasePage';
import React, {useCallback} from 'react';

export const ErrorCaseScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'ErrorCase'>> = ({navigation}) => {
  const navigateToErrorInEventHandler = useCallback(() => navigation.navigate('ErrorInEventHandler'), [navigation]);
  const navigateToErrorInUseEffect = useCallback(() => navigation.navigate('ErrorInUseEffect'), [navigation]);
  const navigateToErrorInReactComponent = useCallback(() => navigation.navigate('ErrorInReactComponent'), [navigation]);
  const navigateToErrorInNativeModule = useCallback(() => navigation.navigate('ErrorInNativeModule'), [navigation]);
  return (
    <ErrorCasePage
      navigateToErrorInEventHandler={navigateToErrorInEventHandler}
      navigateToErrorInUseEffect={navigateToErrorInUseEffect}
      navigateToErrorInReactComponent={navigateToErrorInReactComponent}
      navigateToErrorInNativeModule={navigateToErrorInNativeModule}
    />
  );
};
