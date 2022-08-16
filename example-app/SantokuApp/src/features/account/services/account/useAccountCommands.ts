import {useMutation, useQueryClient} from 'react-query';

import {postAccountsMeTerms} from './postAccountsMeTerms';

export const useAccountCommands = () => {
  const queryClient = useQueryClient();

  /**
   * サービス利用規約に同意します。
   */
  const agreeTermsMutation = useMutation(postAccountsMeTerms, {
    onSuccess: () => {
      queryClient.resetQueries(['account', 'accountData']).catch(() => {});
    },
  });

  return {
    agreeTerms: agreeTermsMutation.mutateAsync,
    isaAgreeingTerms: agreeTermsMutation.isLoading,
    isProcessing: agreeTermsMutation.isLoading,
  };
};
