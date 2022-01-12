import {createContext, useContext} from 'react';

export function createUseContextAndProvider<T>() {
  const context = createContext<T | undefined>(undefined);
  const useCtx = () => {
    const use = useContext(context);
    if (!use) throw new Error('Provider value is required.');
    return use;
  };

  return [useCtx, context.Provider] as const;
}
