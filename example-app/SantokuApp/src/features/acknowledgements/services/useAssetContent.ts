import {useQuery} from '@tanstack/react-query';
import {Asset} from 'expo-asset';
import * as FileSystem from 'expo-file-system';

const loadAssetContent = async (moduleId: number | undefined) => {
  if (moduleId == null) {
    // useQueryのqueryFnからundefinedを返却するとエラーがthrowされてしまうため、nullを返却する
    return null;
  }
  return Asset.loadAsync(moduleId).then(assets => {
    if (assets?.length && assets[0].localUri) {
      return FileSystem.readAsStringAsync(assets[0].localUri, {encoding: 'utf8'});
    }
    // useQueryのqueryFnからundefinedを返却するとエラーがthrowされてしまうため、nullを返却する
    return null;
  });
};

export const useAssetContent = (moduleId?: number) => {
  return useQuery(['acknowledgements', 'assetContent', moduleId], () => loadAssetContent(moduleId));
};
