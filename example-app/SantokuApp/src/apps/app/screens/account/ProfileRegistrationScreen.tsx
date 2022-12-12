import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'apps/app/navigators/types';
import {ProfileRegistrationPage} from 'features/account/pages/ProfileRegistrationPage';
import React from 'react';

export const ProfileRegistrationScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'ProfileRegistration'>> = ({
  route,
}) => {
  return <ProfileRegistrationPage termsAgreementStatus={route.params} />;
};
