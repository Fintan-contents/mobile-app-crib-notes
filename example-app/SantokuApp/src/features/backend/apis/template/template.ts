/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import {useQuery} from '@tanstack/react-query';
import type {UseQueryOptions, QueryFunction, UseQueryResult, QueryKey} from '@tanstack/react-query';
import type {Template} from '.././model';
import {backendCustomInstance} from '../../utils/customInstance';
import type {ErrorType} from '../../utils/customInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * 入力のテンプレート一覧を取得します。
 * @summary テンプレート一覧取得
 */
export const getTemplates = (signal?: AbortSignal) => {
  return backendCustomInstance<Template[]>({url: `/templates`, method: 'get', signal});
};

export const getGetTemplatesQueryKey = () => [`/templates`] as const;

export const getGetTemplatesQueryOptions = <
  TData = Awaited<ReturnType<typeof getTemplates>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTemplates>>, TError, TData>;
}): UseQueryOptions<Awaited<ReturnType<typeof getTemplates>>, TError, TData> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetTemplatesQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTemplates>>> = ({signal}) => getTemplates(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getTemplates>>>;
export type GetTemplatesQueryError = ErrorType<unknown>;

/**
 * @summary テンプレート一覧取得
 */
export const useGetTemplates = <
  TData = Awaited<ReturnType<typeof getTemplates>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTemplates>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = getGetTemplatesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {queryKey: QueryKey};

  query.queryKey = queryOptions.queryKey;

  return query;
};
