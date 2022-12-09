import * as FileSystem from 'expo-file-system';

import {readDirectoryItemsFileInfoAsync} from './readDirectoryItemsFileInfoAsync';

export const reloadCacheDirectoryItemsAsync = async () => {
  if (FileSystem.cacheDirectory) {
    return await readDirectoryItemsFileInfoAsync(FileSystem.cacheDirectory);
  }
  return [];
};
