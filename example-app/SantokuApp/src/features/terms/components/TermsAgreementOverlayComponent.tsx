import {m} from 'bases/message/Message';
import {Button} from 'bases/ui/button/Button';
import {OverlayBackdrop} from 'bases/ui/overlay/OverlayBackdrop';
import {OverlayContainer} from 'bases/ui/overlay/OverlayContainer';
import {WebView} from 'bases/ui/webview/WebView';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {TermsOfService} from 'features/backend/apis/model/termsOfService';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useButtonDisable} from '../client-states/useButtonDisable';
import {useIsWebViewError} from '../client-states/useIsWebViewError';
import {useComposedExitingCallback} from '../use-cases/useComposedExitingCallback';
import {useExitingCallbackOnAgreed} from '../use-cases/useExitingCallbackOnAgreed';
import {useOnAgree} from '../use-cases/useOnAgree';
import {useOnScrollEndOnce} from '../use-cases/useOnScrollEndOnce';
import {useOnWebViewError} from '../use-cases/useOnWebViewError';
import {useResetWebViewError} from '../use-cases/useResetWebViewError';
import {useWebViewSource} from '../use-cases/useWebViewSource';

export type TermsAgreementOverlayShowProps = {
  termsOfService: TermsOfService;
  /**
   * Overlayの背景をタップした時に閉じるかどうかの設定。
   * デフォルトはtrue（閉じる）です。
   */
  dismissible?: boolean;
  /**
   * iOSの場合、アニメーションが終わった後に呼び出されます。
   * Androidの場合、アニメーションが始まった時に呼び出されます。
   */
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  exitingCallbackOnAgreed?: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => unknown;
};

export type TermsAgreementOverlayProps = TermsAgreementOverlayShowProps & {
  visible: boolean;
  close: () => void;
  contentViewTestID?: string;
};

export const TermsAgreementOverlayComponent: React.FC<TermsAgreementOverlayProps> = ({
  visible,
  close,
  termsOfService,
  dismissible = true,
  enteringCallback,
  exitingCallback,
  exitingCallbackOnAgreed,
  contentViewTestID,
}) => {
  const [isWebViewError] = useIsWebViewError();
  const [buttonDisable] = useButtonDisable();
  const {webViewSource} = useWebViewSource(termsOfService);
  const {composedExitingCallback} = useComposedExitingCallback(exitingCallback);
  const {exitOnAgreed} = useExitingCallbackOnAgreed(exitingCallbackOnAgreed);
  const {resetWebViewError} = useResetWebViewError();
  const {onScrollEndOnce} = useOnScrollEndOnce();
  const {onWebViewError} = useOnWebViewError();
  const {onAgree, isLoading} = useOnAgree(close, termsOfService);

  useEffect(() => exitOnAgreed(), [exitOnAgreed]);

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
              onError={onWebViewError}
              onHttpError={onWebViewError}
            />
          )}
          <View style={styles.footer}>
            <Button title={m('同意')} onPress={onAgree} disabled={buttonDisable || isLoading} />
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
