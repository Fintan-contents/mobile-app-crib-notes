import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'apps/app/navigators/types';
import {setStatusBarStyle} from 'expo-status-bar';
import {LoginPage} from 'features/account/pages/LoginPage';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import React, {useCallback, useEffect} from 'react';

export const LoginScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = ({
  navigation: reactNavigation,
}) => {
  const navigateToCreateAccount = useCallback(
    (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
      reactNavigation.navigate('ProfileRegistration', termsOfServiceAgreementStatus);
    },
    [reactNavigation],
  );
  useEffect(() => {
    return reactNavigation.addListener('focus', () => {
      setStatusBarStyle('dark');
    });
  }, [reactNavigation]);

  return <LoginPage navigateToCreateAccount={navigateToCreateAccount} />;
};
