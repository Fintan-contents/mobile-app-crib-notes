package jp.fintan.mobile.santokuapp.domain.model.system;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AppUpdatesTest {

  @Test
  void needUpdates() {
    var appUpdates = createAppUpdates("ios", "1.0.0", "1.0.0-a");
    assertTrue(appUpdates.needUpdates());
    assertEquals(appUpdates.supportedVersion().value(), "1.0.0");
    assertEquals(appUpdates.updateMessage().value(), "現在のバージョン(1.0.0-a)ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。");
  }

  @Test
  void notNeedUpdates() {
    var appUpdates = createAppUpdates("ios", "1.0.0", "1.0.0");
    assertFalse(appUpdates.needUpdates());
    assertEquals(appUpdates.supportedVersion().value(), "1.0.0");
    assertEquals(appUpdates.updateMessage().value(), "現在のバージョン(1.0.0)でご利用頂けます。");
  }

  AppUpdates createAppUpdates(String appType, String supportedVersion, String appVersion) {
    var appUpdates = new AppSupportedVersion(AppType.fromString(appType).orElseThrow(), new AppVersion(supportedVersion));
    return new AppUpdates(appUpdates, new AppVersion(appVersion));
  }
}
