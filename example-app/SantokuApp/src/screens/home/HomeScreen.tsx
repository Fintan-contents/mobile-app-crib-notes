import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {ThemeContext} from 'react-native-elements';

import {HomeTemplate} from './HomeTemplate';

const useNavigateToDemoStackScreen = (screen: string) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('DemoStackNav', {screen}), [navigation, screen]);
};

const ScreenName = 'Home';
const Screen: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const onGoToInstructionButtonPress = useNavigateToDemoStackScreen('Instructions');
  const onViewApplicationInformationButtonPress = useNavigateToDemoStackScreen('AppInfo');
  const onGoToDemoButtonPress = useNavigateToDemoStackScreen('Demo');

  return (
    <HomeTemplate
      testID="HomeScreen"
      theme={theme}
      onGoToInstructionButtonPress={onGoToInstructionButtonPress}
      onViewApplicationInformationButtonPress={onViewApplicationInformationButtonPress}
      onGoToDemoButtonPress={onGoToDemoButtonPress}
    />
  );
};

// Navigatorに登録する情報
export const HomeScreen = {
  component: Screen,
  name: ScreenName,
};
