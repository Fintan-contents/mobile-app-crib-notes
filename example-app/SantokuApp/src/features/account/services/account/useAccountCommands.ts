import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AccountData} from 'features/account/types/AccountData';
import {postAccountsMeDeviceToken, postAccountsMeTerms} from 'features/backend/apis/account/account';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

import {getAccountData} from './getAccountData';

export const useAccountCommands = () => {
  const queryClient = useQueryClient();

  const loadAccountDataMutation = useMutation(() => getAccountData(), {
    onSuccess: accountData => {
      queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
    },
  });

  const updateDeviceTokenMutation = useMutation(postAccountsMeDeviceToken, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['account', 'accountData']);
    },
  });

  /**
   * サービス利用規約に同意します。
   */
  const agreeTermsMutation = useMutation(async (data: TermsOfServiceAgreementStatus) => {
    await postAccountsMeTerms(data);
    return loadAccountDataMutation.mutateAsync();
  });

  return {
    loadAccountData: loadAccountDataMutation.mutateAsync,
    updateDeviceToken: updateDeviceTokenMutation.mutateAsync,
    agreeTerms: agreeTermsMutation.mutateAsync,
    isLoadingAccountData: agreeTermsMutation.isLoading,
    isAgreeingTerms: agreeTermsMutation.isLoading,
    isProcessing: agreeTermsMutation.isLoading || agreeTermsMutation.isLoading,
  };
};
