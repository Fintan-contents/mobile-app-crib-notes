import {useSnackbar} from 'components/snackbar';
import * as FileSystem from 'expo-file-system';
import {useCallback, useState} from 'react';

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

const readDirectoryItemsFileInfoAsync = async (fileUri: string) => {
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

const useCacheDirectory = () => {
  const [topLevelFileInfos, setTopLevelFileInfos] = useState<FileSystem.FileInfo[]>([]);
  const snackbar = useSnackbar();

  const reloadCacheDirectoryItemsAsync = useCallback(async () => {
    if (FileSystem.cacheDirectory) {
      const fileInfos = await readDirectoryItemsFileInfoAsync(FileSystem.cacheDirectory);
      setTopLevelFileInfos(fileInfos);
    }
  }, []);

  const clearCacheDir = useCallback(async () => {
    if (FileSystem.cacheDirectory) {
      try {
        const fileInfos = await readDirectoryItemsFileInfoAsync(FileSystem.cacheDirectory);
        await Promise.all(
          fileInfos.map(info => {
            // http-cacheなどのトップレベルのディレクトリは削除できないので、その中のファイルだけを削除対象とする
            return deleteChildItemsAsync(info);
          }),
        );
        await reloadCacheDirectoryItemsAsync();
        snackbar.showWithCloseButton(`ファイルの削除に成功しました。`);
      } catch (e) {
        console.log(e);
        snackbar.showWithCloseButton(`ファイルの削除に失敗しました。`);
      }
    }
  }, [snackbar, reloadCacheDirectoryItemsAsync]);

  return {
    topLevelFileInfos,
    reloadCacheDirectoryItemsAsync,
    clearCacheDir,
  };
};

export {useCacheDirectory, readDirectoryItemsFileInfoAsync};
