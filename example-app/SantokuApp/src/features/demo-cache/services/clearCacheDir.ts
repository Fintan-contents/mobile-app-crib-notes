/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
