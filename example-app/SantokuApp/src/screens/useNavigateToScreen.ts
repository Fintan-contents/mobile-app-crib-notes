import {NavigationProp, useNavigation} from '@react-navigation/native';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import {useCallback} from 'react';

const useNavigateToRootStackScreen = (screen: keyof RootStackParamList) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return useCallback(() => navigation.navigate(screen), [navigation, screen]);
};

const useNavigateToDemoStackScreen = (screen: keyof DemoStackParamList) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return useCallback(() => navigation.navigate('DemoStackNav', {screen}), [navigation, screen]);
};

export {useNavigateToRootStackScreen, useNavigateToDemoStackScreen};
