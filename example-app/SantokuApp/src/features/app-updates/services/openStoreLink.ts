import {AppConfig} from 'bases/core/configs/AppConfig';
import {log} from 'bases/logging';
import {Linking} from 'react-native';

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
