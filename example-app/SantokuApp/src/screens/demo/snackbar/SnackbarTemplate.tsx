import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

type SnackbarTemplateProps = {
  testID?: string;
  showSnackbar: () => void;
  showSnackbarWithCloseButton: () => void;
};

export const SnackbarTemplate: React.FC<SnackbarTemplateProps> = ({
  showSnackbar,
  showSnackbarWithCloseButton,
  testID,
}) => {
  return (
    <View style={styles.container} testID={testID}>
      <Button onPress={() => showSnackbar()} title="スナックバーを表示" />
      <Button onPress={() => showSnackbarWithCloseButton()} title="閉じるボタン付きのスナックバーを表示" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
