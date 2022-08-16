import {log} from 'bases/logging';
import * as FileSystem from 'expo-file-system';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {readDirectoryItemsFileInfoAsync} from '../services/readDirectoryItemsFileInfoAsync';

type FileInfoProps = {
  fileInfo: FileSystem.FileInfo;
  currentDepth: number;
};

const getFileNameFromUri = (uri: string) => {
  return uri.endsWith('/') ? uri.split('/').slice(-2)[0] : uri.split('/').slice(-1)[0];
};

const maxDepth = 10;

const FileInfo: React.FC<FileInfoProps> = ({fileInfo, currentDepth}) => {
  const [childFileInfos, setChildFileInfos] = useState<FileSystem.FileInfo[]>([]);

  const isViewChildren = useMemo(() => {
    return fileInfo.isDirectory && currentDepth <= maxDepth;
  }, [fileInfo, currentDepth]);

  const readChildDirectory = useCallback(async () => {
    if (isViewChildren) {
      try {
        const fileInfos = await readDirectoryItemsFileInfoAsync(fileInfo.uri);
        setChildFileInfos(fileInfos);
      } catch (e) {
        log.debug(String(e));
      }
    }
  }, [fileInfo.uri, isViewChildren, setChildFileInfos]);

  useEffect(() => {
    readChildDirectory().catch(() => {
      // ユースケースでエラーをハンドリングしているのでここでは何もしない
    });
  }, [fileInfo, readChildDirectory]);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Icon name={fileInfo.isDirectory ? 'file-directory' : 'file'} type="octicon" size={18} />
        <Text style={styles.title}>{getFileNameFromUri(fileInfo.uri)}</Text>
      </View>
      {isViewChildren && (
        <View style={styles.childContainer}>
          {childFileInfos.map((info, index) => {
            return <FileInfo key={index} fileInfo={info} currentDepth={currentDepth + 1} />;
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    marginLeft: 8,
    marginBottom: 4,
  },
  childContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
});

export {FileInfo};
