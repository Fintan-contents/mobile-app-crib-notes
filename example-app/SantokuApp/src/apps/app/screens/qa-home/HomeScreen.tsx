import {useFocusEffect} from '@react-navigation/core';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomePage} from 'features/qa-home/pages/HomePage';
import {useShowTermsAgreementOverlay} from 'features/terms/use-cases/useShowTermsAgreementOverlay';
import React, {useCallback} from 'react';

import {AuthenticatedStackParamList, HomeStackParamList} from '../../navigators/types';

export const HomeScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, 'Home'>,
    NativeStackScreenProps<AuthenticatedStackParamList, 'QuestionAndEventStackNav'>
  >
> = ({navigation}) => {
  // 利用規約に未同意の場合は、利用規約を表示します。
  const showTermsAgreementOverlay = useShowTermsAgreementOverlay();
  useFocusEffect(showTermsAgreementOverlay);

  const navigateToQuestionDetail = useCallback(
    (questionId: string) => navigation.navigate('QuestionDetail', {questionId}),
    [navigation],
  );

  const navigateToQuestionAndEventPost = useCallback(
    () => navigation.navigate('QuestionAndEventStackNav', {screen: 'QuestionAndEventPost'}),
    [navigation],
  );

  return (
    <HomePage
      navigateToQuestionAndEventPost={navigateToQuestionAndEventPost}
      navigateToQuestionDetail={navigateToQuestionDetail}
    />
  );
};
