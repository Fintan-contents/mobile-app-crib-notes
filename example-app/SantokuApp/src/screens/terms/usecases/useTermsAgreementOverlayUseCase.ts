import {useAccountContext} from 'context/useAccountContext';
import {useAccountContextOperation} from 'context/useAccountContextOperation';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {usePostAccountsMeTerms} from 'service';

export const useTermsAgreementOverlayUseCase = (
  close: () => void,
  termsOfService: TermsOfService,
  exitingCallback?: (finished: boolean) => unknown,
  exitingCallbackOnAgreed?: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => unknown,
) => {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isWebViewError, setIsWebViewError] = useState(false);
  const webViewRef = useRef<RNWebView>(null);
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTerms();
  const accountContext = useAccountContext();
  const accountContextOperation = useAccountContextOperation();
  const [agreedStatus, setAgreedStatus] = useState<TermsOfServiceAgreementStatus>();
  const [isExited, setIsExited] = useState(false);

  const termUrl = termsOfService?.url;
  const webViewSource = useMemo(() => {
    return termUrl ? {uri: termUrl} : undefined;
  }, [termUrl]);

  const onWebViewError = useCallback(() => {
    setIsWebViewError(true);
  }, []);

  const resetWebViewError = useCallback(() => {
    setIsWebViewError(false);
  }, []);

  const onScrollEndOnce = useCallback(() => setButtonDisable(false), []);

  const onAgree = useCallback(async () => {
    try {
      const termsAgreementStatus = {
        hasAgreed: true,
        agreedVersion: termsOfService.version,
      };
      if (accountContext.isLoggedIn) {
        await callPostAccountsMeTerms(termsAgreementStatus);
        accountContextOperation.agreedToTerms(termsAgreementStatus.agreedVersion);
      }
      setAgreedStatus(termsAgreementStatus);
      close();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [accountContext.isLoggedIn, accountContextOperation, callPostAccountsMeTerms, close, termsOfService.version]);

  const composedExitingCallback = useCallback(
    (finished: boolean) => {
      try {
        exitingCallback?.(finished);
      } finally {
        setButtonDisable(true);
        setIsExited(true);
      }
    },
    [exitingCallback],
  );

  useEffect(() => {
    // 同意ボタンタップ後、利用規約のクローズエフェクトが完了したタイミングで「exitingCallbackOnAgreed」を呼び出す
    if (isExited && agreedStatus) {
      try {
        exitingCallbackOnAgreed?.(agreedStatus);
      } finally {
        setIsExited(false);
        setAgreedStatus(undefined);
      }
    }
  }, [exitingCallbackOnAgreed, agreedStatus, isExited]);

  return {
    webViewSource,
    isWebViewError,
    onWebViewError,
    webViewRef,
    resetWebViewError,
    onScrollEndOnce,
    onAgree,
    composedExitingCallback,
    isDisabledAgreementButton: buttonDisable || isLoading,
  };
};
