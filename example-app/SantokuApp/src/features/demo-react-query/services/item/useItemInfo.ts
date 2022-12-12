import {useCallback} from 'react';
import {useQuery} from 'react-query';

import {getItemInfo} from './getItemInfo';

export const useItemInfo = (id: number) => {
  const query = useQuery(['itemInfo'], () => getItemInfo(id));
  const reload = useCallback(() => {
    query.remove();
    query.refetch().catch(() => {});
  }, [query]);
  return {...query, reload};
};
