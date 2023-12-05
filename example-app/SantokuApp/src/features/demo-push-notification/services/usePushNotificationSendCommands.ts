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

import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';

import {Data} from '../types/Data';

type PushNotificationParams = {
  notificationTitle?: string;
  notificationBody?: string;
  data?: Data[];
  badge?: string;
  collapseId?: string;
  contentAvailable?: boolean;
  priority?: string;
  interruptionLevel?: string;
  relevanceScore?: string;
  notificationCount?: string;
  collapseKey?: string;
  channelId?: string;
};

const putToSingle = ({token, params}: {token: string; params: PushNotificationParams}) =>
  axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/single/${token}`, params);

const putToAll = ({params}: {params: PushNotificationParams}) =>
  axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`, params);

export const usePushNotificationSendCommands = () => {
  const {mutateAsync: sendToMe, isLoading: isSendingToMe} = useMutation(putToSingle);

  const {mutateAsync: sendToAll, isLoading: isSendingToAll} = useMutation(putToAll);

  return {
    sendToMe,
    isSendingToMe,
    sendToAll,
    isSendingToAll,
  };
};
