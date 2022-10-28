import {FullWindowOverlay} from 'bases/ui/overlay/FullWindowOverlay';
import React, {useCallback, useMemo, useState} from 'react';

import {
  TermsAgreementOverlayComponent,
  TermsAgreementOverlayProps,
  TermsAgreementOverlayShowProps,
} from './TermsAgreementOverlayComponent';

type TermsAgreementOverlayType = {
  show: (props: TermsAgreementOverlayShowProps) => void;
  close: () => void;
  Component: typeof Component;
};

/**
 * 利用規約をOverlay表示するコンポーネント。
 */
const Component: React.FC = () => {
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

  TermsAgreementOverlay = useMemo(
    () => ({
      ...TermsAgreementOverlay,
      show,
      close,
    }),
    [close, show],
  );

  return (
    <FullWindowOverlay>
      {state.termsOfService && <TermsAgreementOverlayComponent {...state} termsOfService={state.termsOfService} />}
    </FullWindowOverlay>
  );
};

let TermsAgreementOverlay: TermsAgreementOverlayType = {
  show: (props: TermsAgreementOverlayShowProps) => {
    throw new Error('TermsAgreementOverlay.Component is required.');
  },
  close: () => {
    throw new Error('TermsAgreementOverlay.Component is required.');
  },
  Component,
};

export {TermsAgreementOverlay};
