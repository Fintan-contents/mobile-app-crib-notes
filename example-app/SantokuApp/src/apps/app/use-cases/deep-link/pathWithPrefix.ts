import {AppConfig} from 'bases/core/configs/AppConfig';

export const pathWithPrefix = (path: string) =>
  AppConfig.deepLinkPathPrefix ? `${AppConfig.deepLinkPathPrefix}/${path}` : path;
