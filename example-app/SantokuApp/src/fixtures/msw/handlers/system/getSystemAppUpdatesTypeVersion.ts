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
