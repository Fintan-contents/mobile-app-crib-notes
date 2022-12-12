import {useGetTemplates} from 'features/backend/apis/template/template';

export const useTemplates = () => {
  const query = useGetTemplates();
  return {...query, data: query.data?.data};
};
