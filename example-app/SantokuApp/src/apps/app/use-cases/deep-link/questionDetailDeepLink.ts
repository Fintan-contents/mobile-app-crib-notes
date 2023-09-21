import {StackActions} from '@react-navigation/core';
import {NavigationContainerRef} from '@react-navigation/native';
import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {yup} from 'bases/validator';
import type {ParsedURL} from 'expo-linking';

import type {DeepLink} from './deepLinks';
import {pathWithPrefix} from './pathWithPrefix';
import type {MainTabParamList, RootStackParamList} from '../../navigators/types';

const matchedPath = pathWithPrefix('questions/');
const matchUrl = (parsedUrl: ParsedURL) => parsedUrl.path?.startsWith(matchedPath);

const validationScheme = yup.object().shape({
  questionId: yup.number().required(),
});
const handle = (navigation: NavigationContainerRef<RootStackParamList>, parsedUrl: ParsedURL) => {
  const {path} = parsedUrl;
  // パスパラメータの取得
  const questionId = path?.split(matchedPath)[1];
  if (!validationScheme.isValidSync({questionId})) {
    throw new ApplicationError(`Invalid questionId. parsedUrl=${JSON.stringify(parsedUrl)}`);
  }
  /**
   * CurrentRootがAuthenticatedStackNavの場合は、AuthenticatedStackNav配下のナビゲーションスタックにPushします。
   * AuthenticatedStackNavからPushしてしまうと、例えば以下の順でディープリンクをタップした場合に、Home画面からQuestionDetail画面に戻る遷移できてしまいます。
   *
   * 1. Home画面に遷移するディープリンクをタップしてアプリをコールドスタート（AuthenticatedStackNavがルートスタックに追加される）
   * 2. QuestionDetail画面に遷移するディープリンクをタップしてアプリをホットスタート（AuthenticatedStackNavがルートスタックに追加される）
   * 3. Home画面に遷移するディープリンクをタップしてアプリをホットスタート（2で追加されたAuthenticatedStackNav内のスタックにHome画面が追加される）
   *
   * そのため、QuestionDetailのみをナビゲーションスタックにPushすることで、Home画面からQuestionDetail画面に戻る遷移を防ぎます。
   *
   * 1. Home画面に遷移するディープリンクをタップしてアプリをコールドスタート（AuthenticatedStackNavがルートスタックに追加される）
   * 2. QuestionDetail画面に遷移するディープリンクをタップしてアプリをホットスタート（1で追加されたAuthenticatedStackNav内のスタックにQuestionDetail画面追加される）
   * 3. Home画面に遷移するディープリンクをタップしてアプリをホットスタート（1で追加されたAuthenticatedStackNav内のHome画面まで戻る）
   *
   */
  const rootState = navigation.getRootState();
  if (rootState.routes[rootState.index].name === 'AuthenticatedStackNav') {
    navigation.dispatch(StackActions.push('QuestionDetail', {questionId}));
  } else {
    navigation.dispatch(StackActions.push('AuthenticatedStackNav', {screen: 'QuestionDetail', params: {questionId}}));
  }
};
const mainTabNavInitialRouteName: keyof MainTabParamList = 'HomeStackNav';
export const questionDetailDeepLink: DeepLink = {
  matchUrl,
  handle,
  mainTabNavInitialRouteName,
};
