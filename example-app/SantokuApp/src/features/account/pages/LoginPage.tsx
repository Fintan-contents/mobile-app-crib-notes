import {m} from 'bases/message/Message';
import {FilledButton} from 'bases/ui/button/FilledButton';
import {OutlinedButton} from 'bases/ui/button/OutlinedButton';
import {PasswordTextInput} from 'bases/ui/input/PasswordTextInput';
import {TextInput} from 'bases/ui/input/TextInput';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import {useTerms} from 'features/terms/services/useTerms';
import React, {useCallback} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {LoginFormValues, useLoginForm} from '../forms/useLoginForm';
import {useAuthCommands} from '../services/auth/useAuthCommands';

export type LoginPageProps = {
  navigateToCreateAccount: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => void;
};

export const LoginPage: React.FC<LoginPageProps> = ({navigateToCreateAccount}) => {
  const {login, isLoggingIn} = useAuthCommands();
  const onSubmit = useCallback(
    async (values: LoginFormValues) => {
      try {
        await login({accountId: values.accountId, password: values.password});
      } catch (e) {
        if (isUnauthorizedError(e)) {
          Alert.alert(m('ログイン失敗'), m('アカウントIDまたはパスワードに\n間違いがあります。'));
        }
      }
    },
    [login],
  );
  const {form, clearAccountId, clearPassword} = useLoginForm({
    onSubmit,
  });
  const {termsOfService, isFetchedTerms} = useTerms();

  const onCreateAccount = useCallback(() => {
    TermsAgreementOverlay.show({
      // 利用規約を取得できていない場合はボタンを非活性にしているので、ここでは必ず存在する想定
      termsOfService: termsOfService!.data,
      exitingCallbackOnAgreed: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
        navigateToCreateAccount(termsOfServiceAgreementStatus);
      },
      dismissible: true,
    });
  }, [navigateToCreateAccount, termsOfService]);

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
        <OutlinedButton title={m('新規登録')} onPress={onCreateAccount} disabled={!isFetchedTerms} />
        <Spacer widthRatio={0.1} />
        <FilledButton
          title={m('ログイン')}
          onPress={form.submitForm}
          loading={isLoggingIn}
          disabled={!isFetchedTerms}
        />
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
