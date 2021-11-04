import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useNavigateToAuthenticatedStackScreen} from 'screens/useNavigateToScreen';

const ScreenName = 'TermsOfServiceAgreement';
const Screen: React.FC = () => {
  const onGoToHomeScreen = useNavigateToAuthenticatedStackScreen('Home');

  return (
    <View style={styles.container} testID="TermsOfServiceAgreementScreen">
      <Text h1>利用規約</Text>
      <Button title="Go to Home" testID="goToHomeButton" onPress={onGoToHomeScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export const TermsOfServiceAgreementScreen = {
  component: Screen,
  name: ScreenName,
  option: {
    title: '利用規約',
    presentation: 'formSheet' as const,
  },
};
