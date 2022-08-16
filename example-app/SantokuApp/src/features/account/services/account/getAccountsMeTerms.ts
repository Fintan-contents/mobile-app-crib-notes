// TODO: APIが完成するまでの暫定処理
//       ローカルストレージに保存されているTermsOfServiceAgreementStatusを返却する。
//       ただし、利用規約に同意後3日経過した場合は未同意状態とする
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosResponse} from 'axios';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

import {TermsOfServiceAgreementStatusWithCreatedAt} from '../../types/TermsOfServiceAgreementStatusWithCreatedAt';

const sleep = () => new Promise(resolve => setTimeout(resolve, 100));
const axiosGetOkResponse = {status: 200, statusText: 'OK', config: {}, request: {}, headers: {}};
export const getAccountsMeTerms = async (): Promise<AxiosResponse<TermsOfServiceAgreementStatus>> => {
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
