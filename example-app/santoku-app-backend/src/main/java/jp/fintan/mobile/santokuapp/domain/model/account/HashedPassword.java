package jp.fintan.mobile.santokuapp.domain.model.account;

import java.util.Objects;

public class HashedPassword {

  private final String value;

  public HashedPassword(String value) {
    this.value = Objects.requireNonNull(value);
  }

  public String value() {
    return value;
  }

  public boolean matches(HashedPassword other) {
    return value.equals(other.value);
  }
}
