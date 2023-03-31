import {AndroidConfig} from '@expo/config-plugins';
import path from 'path';

export async function getMainActivityDir(projectRoot: string) {
  const mainActivity = await AndroidConfig.Paths.getMainActivityAsync(projectRoot);
  return path.dirname(mainActivity.path);
}
