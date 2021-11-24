import {AppConfig} from 'framework';

const info = [
  {
    name: 'APP_ID_FLAVOR_SUFFIX',
    value: AppConfig.appIdFlavorSuffix,
  },
  {
    name: 'APP_NAME_HOME',
    value: AppConfig.appNameHome,
  },
  {
    name: 'PROVISIONING_PROFILE_FLAVOR',
    value: AppConfig.provisioningProfileFlavor,
  },
];

const infoKeyExtractor = (_: unknown, index: number) => index.toString();

export const useConfig = () => {
  return {info, infoKeyExtractor};
};
