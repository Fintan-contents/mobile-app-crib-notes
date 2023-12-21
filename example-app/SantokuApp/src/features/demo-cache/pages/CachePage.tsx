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

import {log} from 'bases/logging';
import {Button} from 'bases/ui/button/Button';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import * as FileSystem from 'expo-file-system';
import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {FileInfo} from '../components/FileInfo';
import {clearCacheDir} from '../services/clearCacheDir';
import {reloadCacheDirectoryItemsAsync} from '../services/reloadCacheDirectoryItemsAsync';

export const CachePage: React.FC = () => {
  const [topLevelFileInfos, setTopLevelFileInfos] = useState<FileSystem.FileInfo[]>([]);

  const clear = useCallback(async () => {
    try {
      await clearCacheDir();
      Snackbar.showWithCloseButton(`ファイルの削除に成功しました。`);
    } catch (e) {
      log.trace(String(e));
      Snackbar.showWithCloseButton(`ファイルの削除に失敗しました。`);
    }
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const topLevelFileInfos = await reloadCacheDirectoryItemsAsync();
      setTopLevelFileInfos(topLevelFileInfos);
    } catch (e) {
      log.debug(String(e));
    } finally {
      setRefreshing(false);
    }
  }, [setTopLevelFileInfos]);

  useEffect(() => {
    refresh().catch(() => {
      // refresh内でエラーをハンドリングしているのでここでは何もしない
    });
  }, [refresh]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>キャッシュディレクトリ内</Text>
      <ScrollView
        style={styles.directoryView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}>
        {topLevelFileInfos.map((info, index) => {
          return <FileInfo key={index} fileInfo={info} currentDepth={1} />;
        })}
      </ScrollView>
      <Button size="full" title="キャッシュディレクトリ内のファイルを削除" onPress={clear} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  directoryView: {
    flex: 1,
  },
});
