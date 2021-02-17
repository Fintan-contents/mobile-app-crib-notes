import React, {useState, useCallback, useRef, memo} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Header, Left, Title, Body, Right, Footer, Button, Icon, Text} from 'native-base';
import {WebView, WebViewProps} from 'react-native-webview';

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

const WebViewWrapper: React.FC<WebViewWrapperProps> = ({
  children,
  title,
  close,
  closeLabel = '完了',
  canGoBack,
  backHandler,
  canGoForward,
  forwardHandler,
}: WebViewWrapperProps) => {
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
};

type ExternalWebViewWrapperProps = {
  close: () => void;
  closeLabel?: string;
};

type Props = ExternalWebViewWrapperProps & WebViewProps;

const WebAppView: React.FC<Props> = ({close, closeLabel, ...webViewProps}) => {
  const [title, setTitle] = useState('');
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const wvRef = useRef<WebView>(null);

  const backHandler = useCallback(() => {
    wvRef.current?.goBack();
  }, []);

  const forwardHandler = useCallback(() => {
    wvRef.current?.goForward();
  }, []);

  const MemoActivityIndicator = memo(() => <ActivityIndicator color="#009688" size="large" style={styles.indicator} />);

  const renderLoading = useCallback(() => {
    return <MemoActivityIndicator />;
  }, []);

  const onNavigationStateChange = useCallback(({title: newTitle, canGoBack: newCanGoBack, canGoForward: newCanGoForward}) => {
    setTitle(newTitle);
    setCanGoBack(newCanGoBack);
    setCanGoForward(newCanGoForward);
  }, []);

  const mergedWebViewProps = {
    ref: wvRef,
    renderLoading,
    startInLoadingState: true,
    onNavigationStateChange,
    ...webViewProps,
  };

  return (
    <WebViewWrapper {...{close, closeLabel, title, canGoBack, backHandler, canGoForward, forwardHandler}}>
      <WebView {...mergedWebViewProps} />
    </WebViewWrapper>
  );
};

export default WebAppView;

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
