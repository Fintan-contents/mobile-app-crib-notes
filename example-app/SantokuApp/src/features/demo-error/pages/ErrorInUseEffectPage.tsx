import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

export type ErrorCasePageProps = {
  navigateToErrorInUseEffectSyncProcess: () => void;
  navigateToErrorInUseEffectAsyncProcessPage: () => void;
};

export const ErrorInUseEffectPage: React.FC<ErrorCasePageProps> = ({
  navigateToErrorInUseEffectSyncProcess,
  navigateToErrorInUseEffectAsyncProcessPage,
}) => {
  return (
    <View style={styles.container}>
      <Button onPress={navigateToErrorInUseEffectSyncProcess} title="useEffect内の同期処理でエラー" />
      <Button onPress={navigateToErrorInUseEffectAsyncProcessPage} title="useEffect内の非同期処理でエラー" />
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
