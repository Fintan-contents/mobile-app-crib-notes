import {useFocusEffect} from '@react-navigation/core';
import {m} from 'framework';
import {HomeStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useShowTermsAgreementOverlay} from '../../context/useShowTermsAgreementOverlay';

const ScreenName = 'Home';
const Screen: React.FC = () => {
  // 利用規約に未同意の場合は、利用規約を表示します。
  const showTermsAgreementOverlay = useShowTermsAgreementOverlay();
  useFocusEffect(showTermsAgreementOverlay);

  return (
    <View style={styles.container} testID="HomeScreen">
      <Text h2>開発中</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Navigatorに登録する情報
export const HomeScreen: NativeStackScreenConfig<HomeStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('ホーム'),
  }),
};
