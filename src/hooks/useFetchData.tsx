import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { apiRequest, APIRequestConfig } from "../lib";

export const useFetchData = <TData, TQuery = unknown, TError = unknown>(
  config: APIRequestConfig<undefined, TQuery>,
  options?: UseQueryOptions<TData, TError>
): UseQueryResult<TData, TError> => {
  return useQuery<TData, TError>({
    queryKey: [config.url, config.params],
    queryFn: () => apiRequest<TData, undefined, TQuery>(config),
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
    gcTime: 60 * 500,
    retry: 0,
    ...options,
  });
};

export const useMutateData = <
  TData,
  TBody = unknown,
  TQuery = unknown,
  TError = unknown
>(
  config: APIRequestConfig<TBody, TQuery>,
  options?: UseMutationOptions<TData, TError, TBody>
) => {
  return useMutation<TData, TError, TBody>({
    mutationFn: (data: TBody) =>
      apiRequest<TData, TBody, TQuery>({
        method: config.method,
        url: config.url,
        data,
        params: config.params,
      }),
    ...options,
  });
};
