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
