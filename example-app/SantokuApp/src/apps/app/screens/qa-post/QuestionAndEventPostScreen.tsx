import {NativeStackNavigationOptions, NativeStackScreenProps} from '@react-navigation/native-stack';
import {setStatusBarStyle} from 'expo-status-bar';
import {QuestionAndEventPostPage} from 'features/qa-post/pages/QuestionAndEventPostPage';
import React, {useCallback, useEffect} from 'react';
import {Platform} from 'react-native';

import {QuestionAndEventPostStackParamList} from '../../navigators/types';

export const QuestionAndEventPostScreen: React.FC<
  NativeStackScreenProps<QuestionAndEventPostStackParamList, 'QuestionAndEventPost'>
> = ({navigation}) => {
  const setNavigationOptions = useCallback(
    (options: NativeStackNavigationOptions) => navigation.setOptions(options),
    [navigation],
  );
  useEffect(() => {
    return navigation.addListener('focus', () => {
      if (Platform.OS === 'android') {
        setStatusBarStyle('dark');
      }
    });
  }, [navigation]);
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return <QuestionAndEventPostPage setNavigationOptions={setNavigationOptions} goBack={goBack} />;
};
