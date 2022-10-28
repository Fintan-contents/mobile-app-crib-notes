import {NativeStackNavigationOptions, NativeStackScreenProps} from '@react-navigation/native-stack';
import {QuestionAndEventPostPage} from 'features/qa-post/pages/QuestionAndEventPostPage';
import React, {useCallback} from 'react';

import {QuestionAndEventPostStackParamList} from '../../navigators/types';

export const QuestionAndEventPostScreen: React.FC<
  NativeStackScreenProps<QuestionAndEventPostStackParamList, 'QuestionAndEventPost'>
> = ({navigation}) => {
  const setNavigationOptions = useCallback(
    (options: NativeStackNavigationOptions) => navigation.setOptions(options),
    [navigation],
  );
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return <QuestionAndEventPostPage setNavigationOptions={setNavigationOptions} goBack={goBack} />;
};
