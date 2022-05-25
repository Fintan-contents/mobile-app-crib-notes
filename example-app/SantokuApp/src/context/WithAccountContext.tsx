import {AccountDataDependingComponent} from 'framework/initialize/withAccountData';
import React from 'react';

import {AccountContextProvider} from './useAccountContext';
import {
  AccountContextOperationProvider,
  accountContextReducer,
  useAccountOperation,
} from './useAccountContextOperation';

const WithAccountContext: AccountDataDependingComponent = ({accountData, children}) => {
  const account = accountData.account;
  const terms = accountData.terms;
  const initialAccountContext = account ? {account, terms, isLoggedIn: true} : {isLoggedIn: false};

  const [state, dispatch] = React.useReducer(accountContextReducer, initialAccountContext);
  const operations = useAccountOperation(initialAccountContext, dispatch);

  return (
    <AccountContextProvider value={state}>
      <AccountContextOperationProvider value={operations}>{children}</AccountContextOperationProvider>
    </AccountContextProvider>
  );
};

export {WithAccountContext};
