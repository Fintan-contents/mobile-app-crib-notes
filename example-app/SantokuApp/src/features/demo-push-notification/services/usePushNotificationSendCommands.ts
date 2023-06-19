import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {useMutation} from 'react-query';

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
