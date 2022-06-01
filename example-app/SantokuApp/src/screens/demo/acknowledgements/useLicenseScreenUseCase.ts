import {Asset} from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import {log, useIsMounted} from 'framework';
import type {ThirdPartyDependency} from 'generated/ThirdPartyDependencies';
import {useCallback, useEffect, useState} from 'react';
import {Linking} from 'react-native';

const loadAssetContent = async (moduleId: number | undefined, callback: (content: string) => unknown) => {
  if (moduleId == null) {
    return;
  }
  return Asset.loadAsync(moduleId).then(assets => {
    if (assets?.length && assets[0].localUri) {
      return FileSystem.readAsStringAsync(assets[0].localUri, {encoding: 'utf8'}).then(callback);
    }
  });
};

const useAssetContent = (moduleId?: number) => {
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    setIsLoading(true);
    loadAssetContent(moduleId, content => {
      if (isMounted()) {
        setContent(content);
      }
    }).finally(() => {
      if (isMounted()) {
        setIsLoading(false);
      }
    });
  }, [isMounted, moduleId]);

  return [content, isLoading] as const;
};

export const useLicenseScreenUseCase = (dependency: ThirdPartyDependency) => {
  const [licenseContentText, isLoadingLicenseContentText] = useAssetContent(dependency.licenseContentModuleId);
  const [noticeContentText, isLoadingNoticeContentText] = useAssetContent(dependency.noticeContentModuleId);

  const openRepositoryLink = useCallback(async () => {
    if (dependency.repository) {
      // FIXME: AndroidでLinking.canOpenURL('https://github.com/〜')がfalseを返してしまうため、
      //        canOpenURLはチェックせずに直接openURLを呼び出しています。
      await Linking.openURL(dependency.repository).catch(e => {
        log.trace(() => `Cannot open repository url (${dependency.repository ?? ''})`);
        log.trace(() => `Reason: ${JSON.stringify(e)}`);
      });
    }
  }, [dependency.repository]);

  return {
    licenseContentText,
    isLoadingLicenseContentText,
    noticeContentText,
    isLoadingNoticeContentText,
    openRepositoryLink,
  };
};
