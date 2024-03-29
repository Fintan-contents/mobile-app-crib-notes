/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import {useQuery} from '@tanstack/react-query';
import type {UseQueryOptions, QueryFunction, UseQueryResult, QueryKey} from '@tanstack/react-query';
import type {Tag} from '.././model';
import {backendCustomInstance} from '../../utils/customInstance';
import type {ErrorType} from '../../utils/customInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * タグの一覧を取得します。
 * @summary タグ一覧取得
 */
export const getListTags = (signal?: AbortSignal) => {
  return backendCustomInstance<Tag[]>({url: `/tags`, method: 'get', signal});
};

export const getGetListTagsQueryKey = () => [`/tags`] as const;

export const getGetListTagsQueryOptions = <
  TData = Awaited<ReturnType<typeof getListTags>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getListTags>>, TError, TData>;
}): UseQueryOptions<Awaited<ReturnType<typeof getListTags>>, TError, TData> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetListTagsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getListTags>>> = ({signal}) => getListTags(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetListTagsQueryResult = NonNullable<Awaited<ReturnType<typeof getListTags>>>;
export type GetListTagsQueryError = ErrorType<unknown>;

/**
 * @summary タグ一覧取得
 */
export const useGetListTags = <TData = Awaited<ReturnType<typeof getListTags>>, TError = ErrorType<unknown>>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getListTags>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = getGetListTagsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {queryKey: QueryKey};

  query.queryKey = queryOptions.queryKey;

  return query;
};
