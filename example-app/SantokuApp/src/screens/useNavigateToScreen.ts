import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

const useNavigateToAuthenticatedStackScreen = (screen: string) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('AuthenticatedStackNav', {screen}), [navigation, screen]);
};

const useNavigateToDemoStackScreen = (screen: string) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('DemoStackNav', {screen}), [navigation, screen]);
};

export {useNavigateToAuthenticatedStackScreen, useNavigateToDemoStackScreen};
