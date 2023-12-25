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

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

type LogTemplateProps = {
  traceLog: () => void;
  debugLog: () => void;
  infoLog: () => void;
  warnLog: () => void;
  errorLog: () => void;
  testID?: string;
};

export const LogTemplate: React.FC<LogTemplateProps> = ({traceLog, debugLog, infoLog, warnLog, errorLog, testID}) => {
  return (
    <View style={styles.container} testID={testID}>
      <Button onPress={() => traceLog()} title="Traceログを出力" />
      <Button onPress={() => debugLog()} title="Debugログを出力" />
      <Button onPress={() => infoLog()} title="Infoログを出力" />
      <Button onPress={() => warnLog()} title="Warnログを出力" />
      <Button onPress={() => errorLog()} title="Errorログを出力" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
