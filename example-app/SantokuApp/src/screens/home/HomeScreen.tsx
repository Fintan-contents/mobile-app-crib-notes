import {useFocusEffect} from '@react-navigation/core';
import {useShowTermsAgreementOverlay} from 'context/useShowTermsAgreementOverlay';
import {m} from 'framework';
import {HomeStackParamList} from 'navigation/types';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useRequestPermissionAndRegisterToken} from '../useRequestPermissionAndRegisterToken';

const ScreenName = 'Home';
const Screen: React.FC = () => {
  // Push通知の許可ダイアログ表示とFCM登録トークンの登録・更新
  const {requestPermissionAndRegisterToken} = useRequestPermissionAndRegisterToken();
  useEffect(() => {
    requestPermissionAndRegisterToken().catch(() => {
      // requestPermissionAndRegisterTokenでエラーハンドリングを実施しているので、ここでは特に何もしない
    });
  }, [requestPermissionAndRegisterToken]);
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
export const HomeScreen: StackScreenConfig<HomeStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('ホーム'),
  }),
};
