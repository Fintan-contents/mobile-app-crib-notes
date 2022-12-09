package jp.fintan.mobile.santokuapp.domain.model.system;

import java.util.Optional;
import java.util.stream.Stream;

public enum AppType {
  ANDROID("android"),
  IOS("ios");

  private final String value;

  AppType(String value) {
    this.value = value;
  }

  public String value() {
    return value;
  }

  public static Optional<AppType> fromString(String str) {
    return Stream.of(AppType.values())
        .filter(e -> str.equals(e.value()))
        .findFirst();
  }
}
