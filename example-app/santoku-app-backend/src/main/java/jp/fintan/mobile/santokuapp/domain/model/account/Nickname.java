package jp.fintan.mobile.santokuapp.domain.model.account;

import java.util.Objects;

public class Nickname {

  private final String value;

  private static final int MAX_LENGTH = 50;

  public Nickname(String value) {
    Objects.requireNonNull(value);
    validateNotBlank(value);
    validateLength(value);

    this.value = value;
  }

  public String value() {
    return value;
  }

  private static void validateNotBlank(String value) {
    if (value.isBlank()) {
      throw new IllegalArgumentException("Value is blank.");
    }
  }

  private static void validateLength(String value) {
    if (value.codePointCount(0, value.length()) > MAX_LENGTH) {
      throw new IllegalArgumentException(
          String.format("Nickname length is too long. value=[%s]", value));
    }
  }
}
