import * as FileSystem from 'expo-file-system';

import {readDirectoryItemsFileInfoAsync} from './readDirectoryItemsFileInfoAsync';
import {reloadCacheDirectoryItemsAsync} from './reloadCacheDirectoryItemsAsync';
import {CacheClearError} from '../errors/CacheClearError';

const deleteChildItemsAsync = async (fileInfo: FileSystem.FileInfo) => {
  if (fileInfo.exists) {
    if (fileInfo.isDirectory) {
      const childItemInfos = await readDirectoryItemsFileInfoAsync(fileInfo.uri);
      await Promise.all(
        childItemInfos.map(info => {
          return FileSystem.deleteAsync(info.uri);
        }),
      );
    } else {
      await FileSystem.deleteAsync(fileInfo.uri);
    }
  }
};

export const clearCacheDir = async () => {
  if (FileSystem.cacheDirectory) {
    try {
      const fileInfos = await readDirectoryItemsFileInfoAsync(FileSystem.cacheDirectory);
      await Promise.all(
        fileInfos.map(info => {
          // http-cacheなどのトップレベルのディレクトリは削除できないので、その中のファイルだけを削除対象とする
          return deleteChildItemsAsync(info);
        }),
      );
      return await reloadCacheDirectoryItemsAsync();
    } catch (e) {
      throw new CacheClearError('Failed to clear cache directory.', e);
    }
  }
};
