package jp.fintan.mobile.santokuapp.domain.repository;

import jp.fintan.mobile.santokuapp.domain.model.system.AppType;
import jp.fintan.mobile.santokuapp.domain.model.system.AppSupportedVersion;

public interface AppSupportedVersionRepository {

  AppSupportedVersion findBy(AppType appType);
}
