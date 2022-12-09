import {useGetEvents} from 'features/backend/apis/event/event';
import {GetEventsParams} from 'features/backend/apis/model';
import {useState} from 'react';

export const useEvents = (initialParams: GetEventsParams) => {
  const [listParams, setListParams] = useState(initialParams);
  const query = useGetEvents(listParams);
  return {...query, events: query.data?.data, listParams, setListParams};
};
