export type PbxProject = {[key: string]: unknown} & {hash: PbxProjectHash; generateUuid: () => string};
export type PbxProjectHash = {[key: string]: unknown} & {project: PbxProjectProject};
export type PbxProjectProject = {[key: string]: unknown} & {objects: PbxProjectObjects};
export type PbxProjectObjects = {[key: string]: unknown} & {XCBuildConfiguration: PbxProjectXCBuildConfigurationId};
export type PbxProjectXCBuildConfigurationId = {[key: string]: PbxProjectXCBuildConfiguration};
export type PbxProjectXCBuildConfiguration = {[key: string]: unknown} & {
  buildSettings: PbxProjectXCBuildConfigurationBuildSettings;
};
export type PbxProjectXCBuildConfigurationBuildSettings = {[key: string]: unknown} & {
  PRODUCT_BUNDLE_IDENTIFIER?: string;
  DEVELOPMENT_TEAM?: string;
  CODE_SIGN_STYLE?: string;
};
