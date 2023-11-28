import {useQuery} from '@tanstack/react-query';
import {useCallback} from 'react';

import {getItemInfo} from './getItemInfo';

export const useItemInfo = (id: number) => {
  const query = useQuery(['itemInfo', 'getItemInfo'], () => getItemInfo(id));
  const reload = useCallback(() => {
    query.remove();
    query.refetch().catch(() => {});
  }, [query]);
  return {...query, reload, isIdle: query.fetchStatus === 'idle'};
};
