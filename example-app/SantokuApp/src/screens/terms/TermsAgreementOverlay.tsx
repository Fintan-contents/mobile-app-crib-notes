import {Button} from 'components/button/Button';
import {OverlayBackdrop, OverlayContainer} from 'components/overlay';
import {WebView} from 'components/webview/WebView';
import {m} from 'framework';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {TermsAgreementOverlayShowProps} from '../../context/WithTermsAgreementOverlay';
import {useTermsAgreementOverlayUseCase} from './usecases';

export type TermsAgreementOverlayProps = TermsAgreementOverlayShowProps & {
  visible: boolean;
  close: () => void;
  contentViewTestID?: string;
};

export const TermsAgreementOverlay: React.FC<TermsAgreementOverlayProps> = ({
  visible,
  close,
  termsOfService,
  dismissible = true,
  enteringCallback,
  exitingCallback,
  exitingCallbackOnAgreed,
  contentViewTestID,
}) => {
  const {
    webViewSource,
    isWebViewError,
    onWebViewError,
    webViewRef,
    resetWebViewError,
    onScrollEndOnce,
    onAgree,
    composedExitingCallback,
    isDisabledAgreementButton,
  } = useTermsAgreementOverlayUseCase(close, termsOfService, exitingCallback, exitingCallbackOnAgreed);

  return (
    <OverlayBackdrop
      isVisible={visible}
      onPress={dismissible ? close : undefined}
      enteringCallback={enteringCallback}
      exitingCallback={composedExitingCallback}>
      <OverlayContainer isVisible={visible} style={styles.modalContainer}>
        <View style={styles.container} testID={contentViewTestID}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{m('利用規約')}</Text>
          </View>
          {isWebViewError ? (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{m('app.terms.有効な利用規約の取得エラー')}</Text>
              <Button title={m('リロード')} size="full" onPress={resetWebViewError} />
            </View>
          ) : (
            <WebView
              source={webViewSource}
              onScrollEndOnce={onScrollEndOnce}
              ref={webViewRef}
              onError={onWebViewError}
              onHttpError={onWebViewError}
            />
          )}
          <View style={styles.footer}>
            <Button title={m('同意')} onPress={onAgree} disabled={isDisabledAgreementButton} />
          </View>
        </View>
      </OverlayContainer>
    </OverlayBackdrop>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
  header: {
    alignSelf: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorView: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 14,
    marginBottom: 20,
  },
  footer: {
    flex: 0,
    flexDirection: 'row-reverse',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
});
