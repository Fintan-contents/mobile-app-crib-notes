/**
 * Generated by orval v6.9.3 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import {useQuery} from 'react-query';
import type {UseQueryOptions, QueryFunction, UseQueryResult, QueryKey} from 'react-query';
import type {TermsOfService} from '.././model';
import {backendCustomInstance} from '../../utils/customInstance';
import type {ErrorType} from '../../utils/customInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * 有効な利用規約を取得します。このAPIの呼び出しには認証情報は不要です。

 * @summary 有効な利用規約の取得
 */
export const getTerms = (signal?: AbortSignal) => {
  return backendCustomInstance<TermsOfService>({url: `/terms`, method: 'get', signal});
};

export const getGetTermsQueryKey = () => [`/terms`];

export type GetTermsQueryResult = NonNullable<Awaited<ReturnType<typeof getTerms>>>;
export type GetTermsQueryError = ErrorType<unknown>;

export const useGetTerms = <TData = Awaited<ReturnType<typeof getTerms>>, TError = ErrorType<unknown>>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTerms>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetTermsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTerms>>> = ({signal}) => getTerms(signal);

  const query = useQuery<Awaited<ReturnType<typeof getTerms>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions,
  ) as UseQueryResult<TData, TError> & {queryKey: QueryKey};

  query.queryKey = queryKey;

  return query;
};