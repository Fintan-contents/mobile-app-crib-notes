import {useGetTerms} from 'features/backend/apis/terms/terms';

// 30分間隔で利用規約情報を取得する
const termsRefetchInterval = 1000 * 60 * 30;

export const useTerms = () => {
  const {
    data: termsOfService,
    isFetched: isFetchedTerms,
    isLoadingError: isTermsLoadingError,
  } = useGetTerms({
    query: {refetchInterval: termsRefetchInterval},
  });
  return {termsOfService, isFetchedTerms: isFetchedTerms && !isTermsLoadingError};
};
