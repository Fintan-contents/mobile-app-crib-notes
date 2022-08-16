// TODO: APIが完成するまでの暫定処理
import {AppConfig} from 'bases/core/config/AppConfig';

const sleep = () => new Promise(resolve => setTimeout(resolve, 100));
const axiosGetOkResponse = {status: 200, statusText: 'OK', config: {}, request: {}, headers: {}};
export const getTerms = async () => {
  await sleep();
  return {data: {version: '1.0.0', url: AppConfig.termsUrl}, ...axiosGetOkResponse};
};
