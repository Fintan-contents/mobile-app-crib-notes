package jp.fintan.mobile.santokuapp.domain.model.system;

public class AppSupportedVersion {

  private final AppType appType;
  private final AppVersion supportedVersion;

  public AppSupportedVersion(AppType appType, AppVersion supportedVersion) {
    this.appType = appType;
    this.supportedVersion = supportedVersion;
  }

  public AppType appType() {
    return appType;
  }

  public AppVersion supportedVersion() {
    return supportedVersion;
  }
}
