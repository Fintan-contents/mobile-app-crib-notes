import {createUseContextAndProvider, useIsMounted} from 'framework/utilities';
import {Account, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import React, {Reducer, useMemo} from 'react';

import {AccountContext, Terms} from './useAccountContext';

export const [useAccountContextOperation, AccountContextOperationProvider] =
  createUseContextAndProvider<ReturnType<typeof useAccountOperation>>();

export type AccountAction =
  | {type: 'login'; payload: {account: Account; terms: Terms}}
  | {type: 'logout'}
  | {type: 'agreedTerms'; payload: {termsAgreementStatus: TermsOfServiceAgreementStatus}};
export type AccountDispatch = React.Dispatch<AccountAction>;

export const accountContextReducer: Reducer<AccountContext, AccountAction> = (prevState, action) => {
  switch (action.type) {
    case 'login':
      return {account: action.payload.account, terms: action.payload.terms, isLoggedIn: true};
    case 'logout':
      return {isLoggedIn: false};
    case 'agreedTerms':
      return {
        ...prevState,
        terms: {termsAgreementStatus: action.payload.termsAgreementStatus},
      };
  }
};

const createLoginAction = (dispatch: AccountDispatch, isMounted: () => boolean) => (account: Account, terms: Terms) => {
  if (isMounted()) {
    dispatch({
      type: 'login',
      payload: {
        account,
        terms,
      },
    });
  }
};

const createLogoutAction = (dispatch: AccountDispatch, isMounted: () => boolean) => () => {
  if (isMounted()) {
    dispatch({type: 'logout'});
  }
};

const createAgreedTermsAction =
  (dispatch: AccountDispatch, isMounted: () => boolean) => (termsAgreementStatus: TermsOfServiceAgreementStatus) => {
    if (isMounted()) {
      dispatch({type: 'agreedTerms', payload: {termsAgreementStatus}});
    }
  };

export const useAccountOperation = (initialAccountContext: AccountContext, dispatch: AccountDispatch) => {
  const isMounted = useIsMounted();
  return useMemo(
    () => ({
      login: createLoginAction(dispatch, isMounted),
      logout: createLogoutAction(dispatch, isMounted),
      agreedTerms: createAgreedTermsAction(dispatch, isMounted),
    }),
    [dispatch, isMounted],
  );
};
