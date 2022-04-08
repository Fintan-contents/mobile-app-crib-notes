package jp.fintan.mobile.santokuapp.domain.model.system;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AppVersionTest {

  @Test
  void testEquals() {
    AppVersion version = new AppVersion("1.0.0");
    AppVersion sut = new AppVersion("1.0.0");

    assertEquals(sut, version);
  }

  @Test
  void testIsLowerThan() {
    AppVersion sut = new AppVersion("1.0.0");

    assertFalse(sut.isLowerThan(new AppVersion("0.9.9")));
    assertFalse(sut.isLowerThan(new AppVersion("1.0.0")));
    assertFalse(sut.isLowerThan(new AppVersion("1.0.0-a")));
    assertTrue(sut.isLowerThan(new AppVersion("1.0.1")));
    assertTrue(sut.isLowerThan(new AppVersion("1.0.1-a")));
  }

  @Test
  void testIllegalArgument() {
    assertThrows(IllegalArgumentException.class, () -> new AppVersion("1.0.a"));
  }
}
