import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {useCallback} from 'react';

import {useAgreed} from '../client-states/useAgreed';
import {useIsExited} from '../client-states/useIsExited';

export const useExitingCallbackOnAgreed = (
  exitingCallbackOnAgreed?: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => unknown,
) => {
  const [isExited, setIsExited] = useIsExited();
  const [agreedStatus, setAgreedStatus] = useAgreed();
  const exitOnAgreed = useCallback(() => {
    if (isExited && agreedStatus) {
      try {
        exitingCallbackOnAgreed?.(agreedStatus);
      } finally {
        setIsExited(false);
        setAgreedStatus(undefined);
      }
    }
  }, [agreedStatus, exitingCallbackOnAgreed, isExited, setAgreedStatus, setIsExited]);
  return {exitOnAgreed};
};
