import {useLoadingOverlay} from 'bases/ui/loading/useLoadingOverlay';
import {canAutoLogin} from 'features/account/services/auth/canAutoLogin';
import {useAuthCommands} from 'features/account/services/auth/useAuthCommands';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {handleError} from '../utils/handleError';

export const AuthenticationPage = () => {
  const [accountId, setAccountId] = useState<string>();
  const [accountIdInput, setAccountIdInput] = useState('');
  const {signup, autoLogin, changeAccount, logout, isProcessing} = useAuthCommands();

  const onSignup = useCallback(async () => {
    try {
      const accountData = await signup({nickname: 'demoNickname'});
      const account = accountData.account;
      setAccountId(account.accountId);
      alert(`アカウントIDは${account.accountId}です`);
    } catch (e) {
      handleError(e);
    }
  }, [signup]);

  const onCanAutoLogin = useCallback(async () => {
    try {
      const res = await canAutoLogin();
      alert(res ? '自動ログイン可能です' : '自動ログインできません');
    } catch (e) {
      handleError(e);
    }
  }, []);

  const onAutoLogin = useCallback(async () => {
    try {
      const accountData = await autoLogin();
      if (accountData) {
        alert(`自動ログイン成功しました accountId=${accountData.account.accountId}`);
      }
    } catch (e) {
      handleError(e);
    }
  }, [autoLogin]);

  const onChangeAccount = useCallback(async () => {
    try {
      const accountData = await changeAccount({accountId: accountIdInput});
      alert(`ログイン成功しました accountId=${accountData.account.accountId}`);
    } catch (e) {
      handleError(e);
    }
  }, [changeAccount, accountIdInput]);

  const onLogout = useCallback(async () => {
    try {
      await logout(undefined);
      alert(`ログアウト成功しました`);
    } catch (e) {
      handleError(e);
    }
  }, [logout]);

  const onCopyAccountIdInput = useCallback(() => {
    if (accountId) {
      setAccountIdInput(accountId);
    }
  }, [accountId, setAccountIdInput]);

  useLoadingOverlay(isProcessing);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button containerStyle={styles.button} onPress={onSignup} title="匿名サインアップ" />
        <View>
          <Text>【AccountId】</Text>
          <Text selectable>{accountId ?? '匿名サインアップするとアカウントIDが表示されます'}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button containerStyle={styles.button} onPress={onCopyAccountIdInput} title="入力欄にコピー" />
          </View>
        </View>
        <View>
          <Input
            placeholder="アカウントIDを入力してください"
            value={accountIdInput}
            onChangeText={value => setAccountIdInput(value)}
          />
          <Button containerStyle={styles.button} onPress={onChangeAccount} title="アカウント切り替え" />
        </View>
        <View>
          <Button containerStyle={styles.button} onPress={onCanAutoLogin} title="自動ログイン可能かチェック" />
          <Button containerStyle={styles.button} onPress={onAutoLogin} title="自動ログイン" />
          <View>
            <Button
              containerStyle={styles.button}
              buttonStyle={{backgroundColor: 'red'}}
              onPress={onLogout}
              title="ログアウト"
            />
            <Text style={{color: 'red'}}>※匿名アカウントでログアウトすると再ログイン出来ません。</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 10,
  },
});
