import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {AuthnService} from '../../../framework/authentication';
import {generatePassword} from '../../../framework/utilities/id';

export default class AuthnTestScreen extends React.Component {
  testCsrfToken = async () => {
    //@ts-ignore レスポンスはany型のため
    const res = await AuthnService.getCsrfToken();
    //@ts-ignore レスポンスはany型のため
    alert(JSON.stringify(res));
  };

  testSignup = async () => {
    const password = await generatePassword();
    //@ts-ignore レスポンスはany型のため
    const res = await AuthnService.signup('demoNickname', password);
    //@ts-ignore レスポンスはany型のため
    alert(JSON.stringify(res));
  };

  testLogin = async () => {
    const accountId = AuthnService.context.accountId;
    const password = "storeInSomewhere";
    //@ts-ignore レスポンスはany型のため
    const res = await AuthnService.login(accountId, password);
    //@ts-ignore レスポンスはany型のため
    alert(JSON.stringify(res));
  };

  testLogout = async () => {
    //@ts-ignore レスポンスはany型のため
    const res = await AuthnService.logout();
    //@ts-ignore レスポンスはany型のため
    alert(JSON.stringify(res));
  };

  showContext = () => {
    alert(JSON.stringify(AuthnService.context));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.testCsrfToken} title="CSRF Token取得" />
        <Button onPress={this.testSignup} title="サインアップのテスト" />
        <Button onPress={this.testLogin} title="ログインのテスト" />
        <Button onPress={this.testLogout} title="ログアウトのテスト" />
        <Button onPress={this.showContext} title="認証コンテキストの表示" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
