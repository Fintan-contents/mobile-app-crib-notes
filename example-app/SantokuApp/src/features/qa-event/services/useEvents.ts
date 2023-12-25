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

import {useGetEvents} from 'features/backend/apis/event/event';
import {GetEventsParams} from 'features/backend/apis/model';
import {useState} from 'react';

export const useEvents = (initialParams: GetEventsParams) => {
  const [listParams, setListParams] = useState(initialParams);
  const query = useGetEvents(listParams);
  return {...query, events: query.data?.data, listParams, setListParams};
};
