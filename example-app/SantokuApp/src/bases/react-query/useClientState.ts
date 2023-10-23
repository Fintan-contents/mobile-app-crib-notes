import type {QueryKey} from '@tanstack/react-query';
import {hashQueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useMemo, useRef} from 'react';
export type InitialClientState<S> = S | (() => S);
export type SetClientStateFunction<S> = (prevState: S | undefined) => S;
export type SetClientState<S> = (value: S | SetClientStateFunction<S>) => void;
export type ClientStateAndSetClientState<S> = [S, SetClientState<S>];
export type ClientStateOptions = {
  preserveAfterUnmount?: boolean;
};
export function useClientState<S = undefined>(
  key: QueryKey,
  options?: ClientStateOptions,
): ClientStateAndSetClientState<S | undefined>;
export function useClientState<S>(
  key: QueryKey,
  initialState: InitialClientState<S>,
  options?: ClientStateOptions,
): ClientStateAndSetClientState<S>;
export function useClientState<S>(
  key: QueryKey,
  initialState?: InitialClientState<S | undefined>,
  // preserveAfterUnmount: boolean = false,
  options: ClientStateOptions = {preserveAfterUnmount: false},
): ClientStateAndSetClientState<S | undefined> {
  const queryKey = useStableQueryKey(key);
  const data = useQuery<S | null>(queryKey, {
    enabled: false,
    initialData: initialState,
    cacheTime: options.preserveAfterUnmount ? Number.POSITIVE_INFINITY : undefined,
  }).data;
  const state = data === null ? undefined : data;
  const setState = useSetClientStateFunction<S | undefined>(queryKey);
  return [state, setState];
}
export function useOnlySetClientState<S>(key: QueryKey) {
  const queryKey = useStableQueryKey(key);
  return useSetClientStateFunction<S>(queryKey);
}
function useStableQueryKey(key: QueryKey): QueryKey {
  const queryKeyRef = useRef(key);
  const queryKeyHashRef = useRef(hashQueryKey(queryKeyRef.current));
  return useMemo(() => {
    const keyHash = hashQueryKey(key);
    if (queryKeyHashRef.current === keyHash) {
      return queryKeyRef.current;
    }
    queryKeyRef.current = key;
    queryKeyHashRef.current = keyHash;
    return key;
  }, [key]);
}
function useSetClientStateFunction<S>(queryKey: QueryKey): SetClientState<S> {
  const queryClient = useQueryClient();
  return useCallback(
    (value: S | SetClientStateFunction<S>) => {
      const newValue = isSetClientStateFunction(value) ? value(queryClient.getQueryData(queryKey)) : value;
      queryClient.setQueryData<S | null>(queryKey, newValue ?? null);
    },
    [queryClient, queryKey],
  );
}
function isSetClientStateFunction<S>(arg: S | SetClientStateFunction<S>): arg is SetClientStateFunction<S> {
  return typeof arg === 'function';
}
