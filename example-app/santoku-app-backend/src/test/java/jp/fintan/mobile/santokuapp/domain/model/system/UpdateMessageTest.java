package jp.fintan.mobile.santokuapp.domain.model.system;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UpdateMessageTest {

  @Test
  void testCreateUpdateRequestMessage() {
    var sut = UpdateMessage.createUpdateRequestMessage(new AppVersion("1.0.0"));
    assertEquals(sut.value(), "現在のバージョン(1.0.0)ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。");
  }

  @Test
  void testCreateNotNeedMessage() {
    var sut = UpdateMessage.createNotNeedMessage(new AppVersion("1.0.0"));
    assertEquals(sut.value(), "現在のバージョン(1.0.0)でご利用頂けます。");
  }
}
