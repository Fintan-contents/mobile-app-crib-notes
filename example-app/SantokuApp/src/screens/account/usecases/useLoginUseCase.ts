import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useAccountContextOperation} from 'context/useAccountContextOperation';
import {useTermsAgreementOverlay} from 'context/useTermsAgreementOverlay';
import {FormikProps} from 'formik';
import {useIsMounted} from 'framework';
import {AuthenticationService, isUnauthorizedError, SecureStorageAdapter} from 'framework/authentication';
import {m} from 'framework/message';
import {isValidForm} from 'framework/validator';
import {TermsOfServiceAgreementStatus} from 'generated/backend/model';
import {RootStackParamList} from 'navigation/types';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useGetAccountsMe, useGetAccountsMeTerms, useGetTerms} from 'service';

import {LoginForm} from '../data-types';

// 30分間隔で利用規約情報を取得する
const termsRefetchInterval = 1000 * 60 * 30;

export const useLoginUseCase = (form: FormikProps<LoginForm>) => {
  const isMounted = useIsMounted();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const accountContextOperation = useAccountContextOperation();
  const termsAgreementOverlay = useTermsAgreementOverlay();
  // ログイン処理中状態
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const {refetch: callGetAccountMe} = useGetAccountsMe({query: {enabled: false}});
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {refetch: callGetAccountsMeTerms} = useGetAccountsMeTerms({query: {enabled: false}});
  const {
    data: termsOfService,
    isFetched: isFetchedTerms,
    isLoadingError: isTermsLoadingError,
  } = useGetTerms({
    query: {refetchInterval: termsRefetchInterval},
  });

  const clearAccountId = useCallback(() => form.setFieldValue('accountId', ''), [form]);
  const clearPassword = useCallback(() => form.setFieldValue('password', ''), [form]);

  const createAccount = useCallback(() => {
    termsAgreementOverlay.show({
      // 利用規約を取得できていない場合はボタンを非活性にしているので、ここでは必ず存在する想定
      termsOfService: termsOfService!.data,
      exitingCallbackOnAgreed: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
        navigation.navigate('ProfileRegistration', termsOfServiceAgreementStatus);
      },
      dismissible: true,
    });
  }, [termsAgreementOverlay, termsOfService, navigation]);
  const login = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingLogin(true);
        const accountId = form.values.accountId;
        const password = form.values.password;
        await callLogin({accountId, password});
        await SecureStorageAdapter.savePassword(accountId, password);
        // callGetAccountMe.dataは必ず存在する想定
        const account = (await callGetAccountMe({throwOnError: true})).data!.data;
        const termsAgreementStatus = (await callGetAccountsMeTerms({throwOnError: true})).data?.data;
        // 利用規約を取得できていない場合はボタンを非活性にしているので、termsOfServiceは必ず存在する想定
        accountContextOperation.login(account, {termsAgreementStatus, termsOfService: termsOfService!.data});
      } catch (e) {
        if (isUnauthorizedError(e)) {
          Alert.alert(m('ログイン失敗'), m('アカウントIDまたはパスワードに\n間違いがあります。'));
        }
      } finally {
        if (isMounted()) {
          setIsExecutingLogin(false);
        }
      }
    }
  }, [form, callLogin, callGetAccountMe, callGetAccountsMeTerms, accountContextOperation, termsOfService, isMounted]);

  return {
    clearAccountId,
    clearPassword,
    createAccount,
    login,
    isExecutingLogin,
    isFetchedTerms: isFetchedTerms && !isTermsLoadingError,
  };
};
