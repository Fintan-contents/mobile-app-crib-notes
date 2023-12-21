/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const defaultOptions = {
  queries: {
    retry: false, // default: 3
    // Santokuでは、オフライン時のエラー処理をAxiosからエラーがthrowされるかで判定しており、onlineモードでQueryが発行されないとエラー処理が実施されないため
    // https://tanstack.com/query/v4/docs/react/guides/migrating-to-react-query-4#queries-and-mutations-per-default-need-network-connection-to-run
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
  mutations: {
    networkMode: 'offlineFirst' as const, // default: 'online'
  },
};

export {defaultOptions};
