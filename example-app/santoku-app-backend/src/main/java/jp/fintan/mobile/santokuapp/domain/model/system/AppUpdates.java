package jp.fintan.mobile.santokuapp.domain.model.system;

public class AppUpdates {

  private final AppSupportedVersion appSupportedVersion;

  private final AppVersion appVersion;

  public AppUpdates(AppSupportedVersion appSupportedVersion, AppVersion appVersion) {
    this.appSupportedVersion = appSupportedVersion;
    this.appVersion = appVersion;
  }

  public boolean needUpdates() {
    return appVersion.isLowerThan(appSupportedVersion.supportedVersion());
  }

  public AppVersion supportedVersion() {
    return appSupportedVersion.supportedVersion();
  };

  public UpdateMessage updateMessage() {
    if (needUpdates()) {
      return UpdateMessage.createUpdateRequestMessage(appVersion);
    } else {
      return UpdateMessage.createNotNeedMessage(appVersion);
    }
  }
}
