import {FilledButton, OutlinedButton} from 'components/button';
import {PasswordTextInput, TextInput} from 'components/input';
import {Spacer} from 'components/spacer/Spacer';
import {useFormik} from 'formik';
import {m} from 'framework/message';
import {RootStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {loginFormInitialValues, loginFormValidationSchema} from './data-types';
import {useLoginUseCase} from './usecases';

const ScreenName = 'Login';

const Screen: React.FC = () => {
  const form = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginFormValidationSchema,
    validateOnChange: false,
    onSubmit: () => {},
  });

  const {clearAccountId, clearPassword, createAccount, login, isExecutingLogin, isFetchedTerms} = useLoginUseCase(form);

  return (
    <View style={styles.container} testID="Login">
      <TextInput
        label={m('アカウントID')}
        value={form.values.accountId}
        onChangeText={form.handleChange('accountId')}
        showClearButton={!!form.values.accountId}
        onClearButtonPress={clearAccountId}
        errorMessage={form.errors.accountId}
      />
      <Spacer heightRatio={0.03} />
      <PasswordTextInput
        label={m('パスワード')}
        value={form.values.password}
        onChangeText={form.handleChange('password')}
        showClearButton={!!form.values.password}
        onClearButtonPress={clearPassword}
        errorMessage={form.errors.password}
      />
      <Spacer heightRatio={0.05} />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <OutlinedButton title={m('新規登録')} onPress={createAccount} disabled={!isFetchedTerms} />
        <Spacer widthRatio={0.1} />
        <FilledButton title={m('ログイン')} onPress={login} loading={isExecutingLogin} disabled={!isFetchedTerms} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
});

export const LoginScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    title: m('ログイン'),
    animation: 'fade',
  },
};
