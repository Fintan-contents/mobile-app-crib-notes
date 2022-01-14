import React from 'react';

import {AppInitialData} from './types';

export interface InitialDataProps {
  initialData: AppInitialData;
}
export type InitialDataDependingComponent<T = object> = React.ComponentType<T & InitialDataProps>;

export function withInitialData<T>(
  initialData: AppInitialData,
  Wrapped: InitialDataDependingComponent<T>,
): React.ComponentType<T> {
  return (props: T) => <Wrapped initialData={initialData} {...props} />;
}
