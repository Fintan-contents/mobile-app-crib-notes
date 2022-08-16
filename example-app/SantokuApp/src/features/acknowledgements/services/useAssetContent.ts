import {Asset} from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import {useQuery} from 'react-query';

const loadAssetContent = async (moduleId: number | undefined) => {
  if (moduleId == null) {
    return;
  }
  return Asset.loadAsync(moduleId).then(assets => {
    if (assets?.length && assets[0].localUri) {
      return FileSystem.readAsStringAsync(assets[0].localUri, {encoding: 'utf8'});
    }
  });
};

export const useAssetContent = (moduleId?: number) => {
  return useQuery(['acknowledgements', 'assetContent'], () => loadAssetContent(moduleId));
};
