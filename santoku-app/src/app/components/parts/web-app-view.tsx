import React, { useState, useCallback, useRef, useEffect, memo } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Header, Left, Title, Body, Right, Footer, Button, Icon, Text } from 'native-base';
import { WebView, WebViewProps } from 'react-native-webview';

type WebViewWrapperProps = {
  children: React.ReactNode;
  title: string;
  close: () => void;
  closeLabel?: string;
  canGoBack: boolean;
  backHandler: () => void;
  canGoForward: boolean;
  forwardHandler: () => void;
};

function WebViewWrapper({ children, title, close, closeLabel = '完了', canGoBack, backHandler, canGoForward, forwardHandler }: WebViewWrapperProps) {
  return (
    <>
      <Header>
        <Left style={styles.flexBasis}>
          <Button transparent hasText onPress={close} accessibilityLabel="Close">
            <Text style={styles.headerButtonText}>{closeLabel}</Text>
          </Button>
        </Left>
        <Body style={styles.flexBasis}>
          <Title>{title}</Title>
        </Body>
        <Right style={styles.flexBasis} />
      </Header>
      {children}
      <Footer>
        <Left style={styles.footerLeft}>
          <Button transparent disabled={!canGoBack} onPress={backHandler} accessibilityLabel="Go back">
            <Icon name="left" type="AntDesign" />
          </Button>
          <Button transparent disabled={!canGoForward} onPress={forwardHandler} accessibilityLabel="Go forward">
            <Icon name="right" type="AntDesign" />
          </Button>
        </Left>
      </Footer>
    </>
  );
}

type ExternalWebViewWrapperProps = {
  close: () => void;
  closeLabel?: string;
};
type WebAppViewProps = ExternalWebViewWrapperProps & WebViewProps;

function WebAppView({ close, closeLabel, ...webViewProps }: WebAppViewProps) {
  const [title, setTitle] = useState('');
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const wvRef = useRef<WebView>(null);

  const backHandler = useCallback(() => {
    wvRef.current?.goBack();
  }, []);

  const forwardHandler = useCallback(() => {
    wvRef.current?.goForward();
  }, []);

  useEffect(() => {
    // TODO ログアウト時にSessionId破棄
    console.log(`URL changed to ${currentUrl}.`);
  }, [currentUrl]);

  const MemoActivityIndicator = memo(() => <ActivityIndicator color="#009688" size="large" style={styles.indicator} />);

  const renderLoading = useCallback(() => {
    return <MemoActivityIndicator />;
  }, []);

  const onNavigationStateChange = useCallback(({ newTitle, newCanGoBack, newCanGoForward, newUrl }) => {
    setTitle(newTitle);
    setCanGoBack(newCanGoBack);
    setCanGoForward(newCanGoForward);
    setCurrentUrl(newUrl);
  }, []);

  const mergedWebViewProps = {
    ref: wvRef,
    renderLoading,
    startInLoadingState: true,
    onNavigationStateChange,
    ...webViewProps,
  };

  return (
    <WebViewWrapper {...{ close, closeLabel, title, canGoBack, backHandler, canGoForward, forwardHandler }}>
      <WebView {...mergedWebViewProps} />
    </WebViewWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  headerButtonText: {
    // Native Base、Androidの場合、
    // Headerの左ボタンはデフォルトでfontSizeが0に指定されていて見えなくなっているので
    // 明示的にフォントサイズを指定する
    fontSize: 14,
  },
  flexBasis: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  footerLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default WebAppView;
