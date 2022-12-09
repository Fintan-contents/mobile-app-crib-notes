import {useGetListTags} from 'features/backend/apis/tag/tag';

export const useTags = () => {
  const query = useGetListTags();
  return {...query, data: query.data?.data};
};
