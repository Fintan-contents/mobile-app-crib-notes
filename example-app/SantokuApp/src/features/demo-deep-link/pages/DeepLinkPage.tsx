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

import {handleError} from 'bases/core/errors/handleError';
import * as Linking from 'expo-linking';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {SpecAndSourceCodeLink} from '../../demo-github-link/components/SpecAndSourceCodeLink';

const logText = (url: string, funcName: string) => `[${funcName}] ${new Date().toLocaleString()}\n${url}`;
export const DeepLinkPage: React.FC = () => {
  const [receivedLinkLogs, setReceivedLinkLogs] = useState<string[]>([]);

  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          setReceivedLinkLogs(prev => [logText(url, 'getInitialUrl'), ...prev]);
        }
      })
      .catch(e => handleError(e));
    const subscription = Linking.addEventListener('url', ({url}) =>
      setReceivedLinkLogs(prev => [logText(url, 'addEventListener'), ...prev]),
    );
    return () => subscription.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SpecAndSourceCodeLink feature="deep-link" />
        <View style={styles.contentsContainer}>
          <Text>【ディープリンク受信ログ】</Text>
          <Text>
            ・addEventListenerで受信したディープリンクのログは、この画面がマウントされた以降に受信したログです。
          </Text>
          <Text>・この画面がアンマウントされると、ログもクリアされます。</Text>
          {receivedLinkLogs.length ? (
            receivedLinkLogs.map((log, index) => (
              <View key={index} style={styles.logItemContainer}>
                <Text>{log}</Text>
              </View>
            ))
          ) : (
            <View style={styles.noLogContainer}>
              <Text style={styles.noLogText}>ディープリンクはまだ受信していません。</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  contentsContainer: {paddingHorizontal: 16, rowGap: 20},
  logItemContainer: {borderBottomWidth: 1, borderBottomColor: 'grey', paddingVertical: 5},
  noLogContainer: {alignItems: 'center'},
  noLogText: {color: 'grey'},
});
