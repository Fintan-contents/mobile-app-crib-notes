import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

import {useAuthentication} from './useAuthentication';

const ScreenName = 'Authn';
const Screen = () => {
  const {accountId, accountIdInput, setAccountIdInput, signup, changeAccount, canAutoLogin, autoLogin, logout} =
    useAuthentication();

  return (
    <View style={styles.container}>
      <Button onPress={signup} title="サインアップ" />
      <View>
        <Text>【AccountId】</Text>
        <Text selectable>{accountId ?? 'サインアップするとアカウントIDが表示されます'}</Text>
      </View>
      <View>
        <Input
          placeholder="アカウントIDを入力してください"
          value={accountIdInput}
          onChangeText={value => setAccountIdInput(value)}
        />
        <Button onPress={changeAccount} title="アカウント切り替え" />
      </View>
      <Button onPress={canAutoLogin} title="自動ログイン可能かチェック" />
      <Button onPress={autoLogin} title="自動ログイン" />
      <Button onPress={logout} title="ログアウト" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export const AuthenticationScreen = {
  name: ScreenName,
  component: Screen,
};
