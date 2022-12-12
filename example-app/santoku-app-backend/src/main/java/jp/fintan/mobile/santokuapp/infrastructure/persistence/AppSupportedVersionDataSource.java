package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import jp.fintan.mobile.santokuapp.domain.model.system.AppType;
import jp.fintan.mobile.santokuapp.domain.model.system.AppSupportedVersion;
import jp.fintan.mobile.santokuapp.domain.model.system.AppVersion;
import jp.fintan.mobile.santokuapp.domain.repository.AppSupportedVersionRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.AppSupportedVersionEntity;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AppSupportedVersionDataSource implements AppSupportedVersionRepository {

  @Override
  public AppSupportedVersion findBy(AppType appType) {
    try {
      AppSupportedVersionEntity appSupportedVersionEntity = UniversalDao.findById(AppSupportedVersionEntity.class, appType.value());
      return toAppUpdates(appSupportedVersionEntity);
    } catch (NoDataException e) {
      return null;
    }
  }

  private AppSupportedVersion toAppUpdates(AppSupportedVersionEntity appSupportedVersionEntity) {
    AppType appType = AppType.fromString(appSupportedVersionEntity.getAppType()).get();
    AppVersion supportedVersion = new AppVersion(appSupportedVersionEntity.getSupportedVersion());

    return new AppSupportedVersion(appType, supportedVersion);
  }
}
