import React from 'react';

import {AccountData} from './helpers';

export interface AccountDataProps {
  accountData: AccountData;
}
export type AccountDataDependingComponent<T = object> = React.ComponentType<T & AccountDataProps>;

export function withAccountData<T>(
  accountData: AccountData,
  Wrapped: AccountDataDependingComponent<T>,
): React.ComponentType<T> {
  return (props: T) => <Wrapped accountData={accountData} {...props} />;
}
