import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosResponse} from 'axios';
import {
  getAccountsMe,
  useGetAccountsAccountId,
  useGetAccountsAccountIdAvatar,
  useGetAccountsMe,
  useGetAccountsMeAvatar,
  usePostAccountsMeDeviceToken,
  usePostLogin,
  usePostLogout,
  usePostSignup,
  usePutAccountsMeAvatar,
  useDeleteAccountsMeDelete,
  getGetAccountsMeQueryKey,
} from 'generated/backend/account/account';
import {useMutation, useQuery} from 'react-query';

import {TermsOfServiceAgreementStatus} from '../../generated/backend/model';

type TermsOfServiceAgreementStatusWithCreatedAt = TermsOfServiceAgreementStatus & {
  createdAt: string;
};

// TODO: APIが完成するまでの暫定処理
//       ローカルストレージに保存されているTermsOfServiceAgreementStatusを返却する。
//       ただし、利用規約に同意後3日経過した場合は未同意状態とする
const sleep = () => new Promise(resolve => setTimeout(resolve, 100));
const axiosGetOkResponse = {status: 200, statusText: 'OK', config: {}, request: {}, headers: {}};
const getAccountsMeTerms = async (): Promise<AxiosResponse<TermsOfServiceAgreementStatus>> => {
  await sleep();
  const storedTermsStatus = await AsyncStorage.getItem('TermsOfServiceAgreementStatus');
  if (storedTermsStatus) {
    const parsedTermsStatus = JSON.parse(storedTermsStatus) as TermsOfServiceAgreementStatusWithCreatedAt;
    const createdAt = new Date(parsedTermsStatus.createdAt);
    const date = new Date();
    date.setDate(date.getDate() - 3);
    if (date < createdAt) {
      return {data: parsedTermsStatus, ...axiosGetOkResponse};
    }
  }

  return {
    data: {
      hasAgreed: false,
      agreedVersion: '1.0.0',
    },
    ...axiosGetOkResponse,
  };
};

const useGetAccountsMeTerms = (options?: {query?: {enabled?: boolean}}) => {
  return useQuery(getGetAccountsMeQueryKey(), getAccountsMeTerms, {enabled: options?.query?.enabled});
};

// TODO: APIが完成するまでの暫定処理
//       利用規約の同意状態をローカルストレージに保存する。
const axiosPostOkResponse = {status: 201, statusText: 'Created', config: {}, request: {}, headers: {}};
const usePostAccountsMeTerms = () => {
  return useMutation('accountService#usePostAccountsMeTerms', async (data: TermsOfServiceAgreementStatus) => {
    await sleep();
    await AsyncStorage.setItem(
      'TermsOfServiceAgreementStatus',
      JSON.stringify({
        ...data,
        createdAt: new Date(),
      }),
    );
    return {
      data,
      ...axiosPostOkResponse,
    };
  });
};

export {
  getAccountsMe,
  getAccountsMeTerms,
  useGetAccountsAccountId,
  useGetAccountsAccountIdAvatar,
  useGetAccountsMe,
  useGetAccountsMeAvatar,
  useGetAccountsMeTerms,
  usePostAccountsMeDeviceToken,
  usePostAccountsMeTerms,
  usePostLogin,
  usePostLogout,
  usePostSignup,
  usePutAccountsMeAvatar,
  useDeleteAccountsMeDelete,
};
