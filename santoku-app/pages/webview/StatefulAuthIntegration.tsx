import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
// @ts-ignore
import { WEB_APP_URI } from '@env';
import WebAppView from '../../src/components/parts/web-app-view';

export default function StatefulAuthIntegration() {
  const [showWebView, setShowWebView] = useState(false);

  const open = useCallback(() => {
    setShowWebView(true);
  }, []);

  const close = useCallback(() => {
    setShowWebView(false);
  }, []);

  if (showWebView) {
    return <WebAppView close={close} closeLabel="閉じる" source={{ uri: WEB_APP_URI }} />;
  }

  return (
    <Container>
      <View style={styles.view}>
        <Button onPress={open}>
          <Text>WebViewを開く</Text>
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});
