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

const sortFileInfos = (fileInfos: FileSystem.FileInfo[]) => {
  const copiedArray = [...fileInfos];
  copiedArray.sort((a, b) => {
    if (a.isDirectory && !b.isDirectory) {
      return -1;
    } else if (!a.isDirectory && b.isDirectory) {
      return 1;
    } else if (a.uri < b.uri) {
      return -1;
    } else if (a.uri > b.uri) {
      return 1;
    }
    return 0;
  });
  return copiedArray;
};

export const readDirectoryItemsFileInfoAsync = async (fileUri: string) => {
  const info = await FileSystem.getInfoAsync(fileUri);
  if (info.isDirectory) {
    const paths = await FileSystem.readDirectoryAsync(fileUri);
    const infos = await Promise.all(
      paths.map(path => {
        const fullPath = fileUri.endsWith('/') ? `${fileUri}${path}` : `${fileUri}/${path}`;
        return FileSystem.getInfoAsync(fullPath);
      }),
    );
    return sortFileInfos(infos);
  } else {
    return [];
  }
};
