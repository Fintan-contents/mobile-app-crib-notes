import {ThirdPartyDependency} from '../types/ThirdPartyDependency';

export const requireThirdPartyDependenciesWithAction = (
  navigateToLicense: (dependency: ThirdPartyDependency) => void,
) => {
  /*
    eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-var-requires --
    依存パッケージの一覧は表示されるときに読み込むようにしたいので、importではなく必要に応じてrequireしています。
    requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
   */
  const thirdPartyDependencies = require('features/acknowledgements/constants/ThirdPartyDependencies')
    .ThirdPartyDependencies as ThirdPartyDependency[];
  return thirdPartyDependencies.map(dependency => {
    return {...dependency, onPress: () => navigateToLicense(dependency)};
  });
};
