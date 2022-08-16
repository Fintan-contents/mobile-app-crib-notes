import {useQuery} from 'react-query';

import {getAccountData} from './getAccountData';

const queryKey = ['account', 'accountData'];

export const useAccountData = (args: {enabled?: boolean; meta?: {disableGlobalErrorHandler?: boolean}} = {}) => {
  const query = useQuery(queryKey, getAccountData, {enabled: args.enabled, meta: args.meta, staleTime: Infinity});
  return {...query, accountData: query.data};
};
