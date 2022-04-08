package jp.fintan.mobile.santokuapp.domain.model.system;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AppSupportedVersionTest {

  @Test
  void test() {
    AppType appType = AppType.fromString("ios").orElseThrow();
    AppVersion supportedVersion = new AppVersion("1.0.0");

    AppSupportedVersion sut = new AppSupportedVersion(appType, supportedVersion);
    assertEquals(sut.appType(), appType);
    assertEquals(sut.supportedVersion(), supportedVersion);
  }

}
