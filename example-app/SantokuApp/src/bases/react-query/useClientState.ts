import {useCallback, useMemo, useRef} from 'react';
import type {QueryKey} from 'react-query';
import {hashQueryKey, useQuery, useQueryClient} from 'react-query';
export type ClientStateKey = string | number | QueryKey;
export type InitialClientState<S> = S | (() => S);
export type SetClientStateFunction<S> = (prevState: S | undefined) => S;
export type SetClientState<S> = (value: S | SetClientStateFunction<S>) => void;
export type ClientStateAndSetClientState<S> = [S, SetClientState<S>];
export type ClientStateOptions = {
  preserveAfterUnmount?: boolean;
};
export function useClientState<S = undefined>(
  key: ClientStateKey,
  options?: ClientStateOptions,
): ClientStateAndSetClientState<S | undefined>;
export function useClientState<S>(
  key: ClientStateKey,
  initialState: InitialClientState<S>,
  options?: ClientStateOptions,
): ClientStateAndSetClientState<S>;
export function useClientState<S>(
  key: ClientStateKey,
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
export function useOnlySetClientState<S>(key: ClientStateKey) {
  const queryKey = useStableQueryKey(key);
  return useSetClientStateFunction<S>(queryKey);
}
function useStableQueryKey(key: ClientStateKey): unknown[] {
  const queryKeyRef = useRef(ensureArrayKey(key));
  const queryKeyHashRef = useRef(hashQueryKey(queryKeyRef.current));
  return useMemo(() => {
    const newQueryKey = ensureArrayKey(key);
    const newQueryKeyHash = hashQueryKey(newQueryKey);
    if (queryKeyHashRef.current === newQueryKeyHash) {
      return queryKeyRef.current;
    }
    queryKeyRef.current = newQueryKey;
    queryKeyHashRef.current = newQueryKeyHash;
    return newQueryKey;
  }, [key]);
}
function useSetClientStateFunction<S>(queryKey: QueryKey): SetClientState<S> {
  const queryClient = useQueryClient();
  return useCallback(
    (value: S | SetClientStateFunction<S>) => {
      const newValue = isSetClientStateFunction(value) ? value(queryClient.getQueryData(queryKey)) : value;
      queryClient.setQueryData<S | null>(queryKey, newValue === undefined ? null : newValue);
    },
    [queryClient, queryKey],
  );
}
function isSetClientStateFunction<S>(arg: S | SetClientStateFunction<S>): arg is SetClientStateFunction<S> {
  return typeof arg === 'function';
}
function ensureArrayKey(key: ClientStateKey): unknown[] {
  return Array.isArray(key) ? key : [key];
}
