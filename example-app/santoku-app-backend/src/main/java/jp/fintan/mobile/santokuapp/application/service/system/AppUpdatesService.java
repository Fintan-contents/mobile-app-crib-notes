package jp.fintan.mobile.santokuapp.application.service.system;

import jp.fintan.mobile.santokuapp.domain.model.system.AppType;
import jp.fintan.mobile.santokuapp.domain.model.system.AppUpdates;
import jp.fintan.mobile.santokuapp.domain.model.system.AppVersion;
import jp.fintan.mobile.santokuapp.domain.repository.AppSupportedVersionRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AppUpdatesService {

  private final AppSupportedVersionRepository appSupportedVersionRepository;

  public AppUpdatesService(AppSupportedVersionRepository appSupportedVersionRepository) {
    this.appSupportedVersionRepository = appSupportedVersionRepository;
  }

  public AppUpdates askAppUpdates(AppType appType, AppVersion appVersion) {
    var appSuppotedVersion = appSupportedVersionRepository.findBy(appType);
    return new AppUpdates(appSuppotedVersion, appVersion);
  }
}
