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

import {ThirdPartyDependency} from '../types/ThirdPartyDependency';

const generateDummyDependency = (num: number) => {
  return [...Array(num)].map((_, index) => {
    return {
      type: 'npm',
      id: `dummy-dependency-${index}@${index}`,
      name: `dummy-dependency-${index}`,
      version: `${index}.0.0`,
      repository: `https://example.com/repository/dummy-dependency-${index}`,
      licenses: 'Apache-2.0',
      licenseContentModuleId: require('../../../assets/dummy/dummy.license.txt'),
      noticeContentModuleId: require('../../../assets/dummy/dummy.notice.txt'),
    };
  });
};

// `.script/generate-acknowledgements-file.js`の実行でこの定義は更新されることを想定しています。
export const ThirdPartyDependencies: ThirdPartyDependency[] = generateDummyDependency(400);
