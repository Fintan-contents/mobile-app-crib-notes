import {createUseContextAndProvider} from 'framework/utilities';

import {TermsAgreementOverlayShowProps} from './WithTermsAgreementOverlay';

export type TermsAgreementOverlayContextType = {
  show: (props: TermsAgreementOverlayShowProps) => void;
  close: () => void;
};

/**
 * 利用規約の表示。
 *
 * @example
 * const termsAgreementOverlay = useTermsAgreementOverlay();
 * termsAgreementOverlay.show({termsOfService: {version: '1.0.0', url: AppConfig.termsUrl, ...}})
 */
export const [useTermsAgreementOverlay, TermsAgreementOverlayProvider] =
  createUseContextAndProvider<TermsAgreementOverlayContextType>();
