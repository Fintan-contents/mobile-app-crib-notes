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

import {AppUpdatesResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {db} from '../../db';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const getSystemAppUpdatesTypeVersion = rest.get(
  `${backendUrl}/system/app-updates/:type/:version`,
  (req, res, ctx) => {
    try {
      const type = String(req.params.type);
      const version = String(req.params.version);
      const appSupportedVersion = db.appSupportedVersion.findFirst({where: {type: {equals: type}}});
      const supportedVersion = appSupportedVersion ? appSupportedVersion.version : '1.0.0';
      const updateRequired = needsUpdate(version, supportedVersion);
      return delayedResponse(
        ctx.json<AppUpdatesResponse>({
          updateRequired,
          message: updateRequired
            ? `現在のバージョン(${version})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。`
            : `現在のバージョン(${version})でご利用頂けます。`,
          supportedVersion,
        }),
        ctx.delay(100),
      );
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);

// 簡易的に、Semantic Versionからピリオドを削除して数値比較しています。
const needsUpdate = (version?: string, appSupportedVersion?: string) => {
  const castedVersion = toNumber(version);
  const castedSupportedVersion = toNumber(appSupportedVersion);
  if (isNaN(castedSupportedVersion)) {
    return true;
  }
  return castedSupportedVersion > castedVersion;
};

const toNumber = (semver?: string) => {
  if (semver) {
    // Androidでは、string.replaceAllが使えないため、split/joinでピリオドを置換してます。
    return Number(semver.split('.').join(''));
  }
  return NaN;
};
