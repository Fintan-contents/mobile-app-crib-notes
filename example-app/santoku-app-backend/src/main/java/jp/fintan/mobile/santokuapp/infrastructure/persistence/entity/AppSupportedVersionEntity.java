package jp.fintan.mobile.santokuapp.infrastructure.persistence.entity;

import javax.persistence.*;

@Entity
@Table(name = "app_supported_version")
@Access(AccessType.FIELD)
public class AppSupportedVersionEntity {

  @Id
  private String appType;

  private String supportedVersion;

  public String getAppType() {
    return appType;
  }

  public void setAppType(String appType) {
    this.appType = appType;
  }

  public String getSupportedVersion() {
    return supportedVersion;
  }

  public void setSupportedVersion(String supportedVersion) {
    this.supportedVersion = supportedVersion;
  }
}
