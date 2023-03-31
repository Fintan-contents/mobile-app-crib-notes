export type ThirdPartyDependency = {
  type: string;
  id: string;
  name?: string;
  version?: string;
  repository?: string;
  licenses?: string | string[];
  licenseContentModuleId?: number;
  noticeContentModuleId?: number;
};
