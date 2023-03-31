import {AndroidConfig} from '@expo/config-plugins';

export async function getMainActivityPath(projectRoot: string) {
  const mainActivity = await AndroidConfig.Paths.getMainActivityAsync(projectRoot);
  return mainActivity.path;
}
