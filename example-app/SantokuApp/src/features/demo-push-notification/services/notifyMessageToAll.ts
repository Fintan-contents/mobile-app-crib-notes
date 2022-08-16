import axios from 'axios';
import {AppConfig} from 'bases/core/config/AppConfig';

export const notifyMessageToAll = () =>
  axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`);
