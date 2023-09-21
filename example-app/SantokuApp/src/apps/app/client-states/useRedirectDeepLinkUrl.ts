import {useClientState} from 'bases/react-query/useClientState';

export const useRedirectDeepLinkUrl = (deepLinkUrl?: string) => {
  return useClientState(['deep-link', 'url'], deepLinkUrl, {preserveAfterUnmount: true});
};
