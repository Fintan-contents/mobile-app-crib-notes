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
