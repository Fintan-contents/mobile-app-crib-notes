import * as Application from 'expo-application';
import {AppConfig} from 'framework/config';
import {ApplicationError} from 'framework/error/ApplicationError';
import {log} from 'framework/logging';
import {Alert, Linking, Platform} from 'react-native';
import {getAppUpdates} from 'service';

import {m} from '../../message';
import {InitialDataError, isInitialDataError} from './initialDataError';

export const openStoreLink = () => {
  const link = AppConfig.storeUrl;
  if (!link) {
    log.debug(`Invalid link. link=[${String(link)}]`);
    return;
  }
  return Linking.canOpenURL(link)
    .then(() => {
      Linking.openURL(link).catch(err => {
        log.debug(`Store open error. err=[${String(err)}]`);
      });
    })
    .catch(err => {
      log.debug(`Can not store open. err=[${String(err)}]`);
    });
};

const requestAppUpdates = (type: typeof Platform.OS, version: typeof Application.nativeApplicationVersion) => {
  if (type !== 'ios' && type !== 'android') {
    throw new InitialDataError(`Not supported type. type=[${type}]`);
  }
  if (!version) {
    throw new InitialDataError(`Invalid version. version=[${String(version)}]`);
  }

  return getAppUpdates(type, version);
};

export async function checkAppUpdates(type: typeof Platform.OS, version: typeof Application.nativeApplicationVersion) {
  try {
    return (await requestAppUpdates(type, version)).data;
  } catch (e) {
    if (isInitialDataError(e)) {
      throw e;
    }
    throw new InitialDataError('Failed to verify if the app needs to be updated.', e);
  }
}

export function showUpdateRequiredDialog(supportedVersion: string) {
  Alert.alert(
    m('アプリアップデート'),
    m(
      '現在のバージョン({0})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
      supportedVersion,
    ),
    [
      {
        text: m('OK'),
        onPress: () => {
          openStoreLink()?.catch(() => {
            // 中でハンドリングされているので、ここでは特に何もしない。
          });
        },
      },
    ],
  );
}

export class UpdateRequiredError extends ApplicationError {
  public supportedVersion: string;
  constructor(message = 'The app needs to be updated', supportedVersion: string) {
    super(message);
    this.supportedVersion = supportedVersion;
  }
}

export function isUpdateRequiredError(error: unknown): error is UpdateRequiredError {
  return error instanceof UpdateRequiredError;
}
