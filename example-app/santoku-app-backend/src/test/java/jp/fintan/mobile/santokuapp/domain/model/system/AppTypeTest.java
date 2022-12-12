package jp.fintan.mobile.santokuapp.domain.model.system;

import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

class AppTypeTest {

  @Test
  void fromStringAndroid() {
    AppType sut = AppType.fromString("android").orElseThrow();
    assertNotNull(sut);
    assertEquals(sut.value(), "android");
  }

  @Test
  void fromStringIos() {
    AppType sut = AppType.fromString("ios").orElseThrow();
    assertNotNull(sut);
    assertEquals(sut.value(), "ios");
  }

  @Test
  void fromStringIllegalArgument() {
    assertThrows(NoSuchElementException.class, () -> AppType.fromString("web").orElseThrow());
  }
}
