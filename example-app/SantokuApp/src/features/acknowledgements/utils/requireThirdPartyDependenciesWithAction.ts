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

export const requireThirdPartyDependenciesWithAction = (
  navigateToLicense: (dependency: ThirdPartyDependency) => void,
) => {
  /*
    eslint-disable-next-line @typescript-eslint/no-var-requires --
    依存パッケージの一覧は表示されるときに読み込むようにしたいので、importではなく必要に応じてrequireしています。
   */
  const thirdPartyDependencies = require('features/acknowledgements/constants/ThirdPartyDependencies')
    .ThirdPartyDependencies as ThirdPartyDependency[]; // eslint-disable-line @typescript-eslint/no-unsafe-member-access -- requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
  return thirdPartyDependencies.map(dependency => {
    return {...dependency, onPress: () => navigateToLicense(dependency)};
  });
};
