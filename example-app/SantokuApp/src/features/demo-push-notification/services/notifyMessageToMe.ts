import axios from 'axios';
import {AppConfig} from 'bases/core/config/AppConfig';

export const notifyMessageToMe = (token: string) =>
  axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/single/${token}`);
