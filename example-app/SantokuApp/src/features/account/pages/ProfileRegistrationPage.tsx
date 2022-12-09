import {handleErrorWithAlert} from 'bases/core/errors/handleErrorWithAlert';
import {m} from 'bases/message/Message';
import {FilledButton} from 'bases/ui/button/FilledButton';
import {TextInput} from 'bases/ui/input/TextInput';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {TermsOfServiceAgreementStatus} from 'features//backend/apis/model';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {ProfileFormValues, useProfileRegistrationForm} from '../forms/useProfileRegistrationForm';
import {useAccountCommands} from '../services/account/useAccountCommands';
import {clientLogout} from '../services/auth/clientLogout';
import {useAuthCommands} from '../services/auth/useAuthCommands';

export type ProfileRegistrationPageProps = {
  termsAgreementStatus: TermsOfServiceAgreementStatus;
};
export const ProfileRegistrationPage: React.FC<ProfileRegistrationPageProps> = ({termsAgreementStatus}) => {
  const {signup, isSigningUp} = useAuthCommands();
  const {agreeTerms, isAgreeingTerms} = useAccountCommands();
  const onSubmit = useCallback(
    async (values: ProfileFormValues) => {
      try {
        await signup({nickname: values.nickname});
        await agreeTerms(termsAgreementStatus);
      } catch (e) {
        // ここではサインアップに成功したaccountId、passwordを使用してログインしているため、UnauthorizedErrorが発生しない想定です。
        // もし発生した場合は、クライアント側のログアウト処理を実施後、Firebase Crashlyticsにエラーログを送信します。
        if (isUnauthorizedError(e)) {
          await clientLogout();
          handleErrorWithAlert(e, m('app.account.サインアップエラータイトル'), m('app.account.サインアップエラー本文'));
        }
      }
    },
    [agreeTerms, signup, termsAgreementStatus],
  );
  const {form, clearNickname} = useProfileRegistrationForm({
    onSubmit,
  });

  return (
    <View style={styles.container} testID="ProfileRegistration">
      <TextInput
        label={m('ニックネーム')}
        value={form.values.nickname}
        onChangeText={form.handleChange('nickname')}
        showClearButton={!!form.values.nickname}
        onClearButtonPress={clearNickname}
        errorMessage={form.errors.nickname}
      />
      <Spacer heightRatio={0.05} />
      <FilledButton title={m('登録')} onPress={form.submitForm} loading={isSigningUp || isAgreeingTerms} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});
