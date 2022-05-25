import {FullWindowOverlay} from 'components/overlay/FullWindowOverlay';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import React, {useCallback, useMemo, useState} from 'react';

import {TermsAgreementOverlay, TermsAgreementOverlayProps} from '../screens/terms/TermsAgreementOverlay';
import {TermsAgreementOverlayContextType, TermsAgreementOverlayProvider} from './useTermsAgreementOverlay';

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

/**
 * 利用規約をOverlay表示するコンポーネント。
 */
const WithTermsAgreementOverlay: React.FC = ({children}) => {
  const [state, setState] = useState<
    Omit<TermsAgreementOverlayProps, 'termsOfService'> & Partial<Pick<TermsAgreementOverlayProps, 'termsOfService'>>
  >({
    visible: false,
    close: () => {},
  });
  const close = useCallback(() => setState(prevState => ({...prevState, visible: false})), []);
  const show = useCallback(
    (props: Omit<TermsAgreementOverlayProps, 'visible' | 'close'>) => {
      setState({
        ...props,
        visible: true,
        close,
      });
    },
    [close],
  );

  const termsOfServiceAgreementOverlayContext = useMemo<TermsAgreementOverlayContextType>(
    () => ({
      show,
      close,
    }),
    [close, show],
  );

  return (
    <TermsAgreementOverlayProvider value={termsOfServiceAgreementOverlayContext}>
      {children}
      <FullWindowOverlay>
        {state.termsOfService && <TermsAgreementOverlay {...state} termsOfService={state.termsOfService} />}
      </FullWindowOverlay>
    </TermsAgreementOverlayProvider>
  );
};

export {WithTermsAgreementOverlay};
