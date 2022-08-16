import {TermsOfService} from 'features/backend/apis/model';
import {useMemo} from 'react';

export const useWebViewSource = (termsOfService: TermsOfService) => {
  const termUrl = termsOfService?.url;
  const webViewSource = useMemo(() => {
    return termUrl ? {uri: termUrl} : undefined;
  }, [termUrl]);
  return {webViewSource};
};
