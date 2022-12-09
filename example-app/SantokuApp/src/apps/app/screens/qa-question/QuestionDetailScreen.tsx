import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {QuestionDetailPage} from 'features/qa-question/pages/QuestionDetailPage';
import React from 'react';

import {AuthenticatedStackParamList} from '../../navigators/types';

export const QuestionDetailScreen: React.FC<NativeStackScreenProps<AuthenticatedStackParamList, 'QuestionDetail'>> = ({
  route,
}) => {
  return <QuestionDetailPage questionId={route.params.questionId} />;
};
