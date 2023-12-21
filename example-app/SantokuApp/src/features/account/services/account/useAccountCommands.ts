/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    isLoadingAccountData: loadAccountDataMutation.isLoading,
    isAgreeingTerms: agreeTermsMutation.isLoading,
    isProcessing:
      loadAccountDataMutation.isLoading || updateDeviceTokenMutation.isLoading || agreeTermsMutation.isLoading,
  };
};
