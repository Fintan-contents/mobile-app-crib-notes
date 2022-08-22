import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {QuestionAndEventPostScreen} from '../screens/qa-post/QuestionAndEventPostScreen';
import {QuestionAndEventPostStackParamList} from './types';

const nav = createNativeStackNavigator<QuestionAndEventPostStackParamList>();

export const QuestionAndEventPostStackNav: React.VFC = () => {
  return (
    <nav.Navigator>
      <nav.Screen name="QuestionAndEventPost" component={QuestionAndEventPostScreen} options={{headerTitle: ''}} />
    </nav.Navigator>
  );
};
