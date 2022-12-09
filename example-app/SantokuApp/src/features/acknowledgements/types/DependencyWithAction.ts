import {ThirdPartyDependency} from './ThirdPartyDependency';

export type DependencyWithAction = ThirdPartyDependency & {onPress: () => unknown};
