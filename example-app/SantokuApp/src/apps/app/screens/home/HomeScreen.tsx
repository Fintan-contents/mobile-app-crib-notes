import {useFocusEffect} from '@react-navigation/core';
import {HomePage} from 'features/home/pages/HomePage';
import {useShowTermsAgreementOverlay} from 'features/terms/use-cases/useShowTermsAgreementOverlay';
import React from 'react';

export const HomeScreen: React.FC = () => {
  // 利用規約に未同意の場合は、利用規約を表示します。
  const showTermsAgreementOverlay = useShowTermsAgreementOverlay();
  useFocusEffect(showTermsAgreementOverlay);

  return <HomePage />;
};
