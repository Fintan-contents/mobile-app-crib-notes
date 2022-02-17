package jp.fintan.mobile.santokuapp.domain.model.core;

import java.util.Objects;

public abstract class ValueObject<RAW> {

  private final RAW value;

  protected ValueObject(RAW value) {
    this.value = value;
    Objects.requireNonNull(value);
  }

  public RAW value() {
    return value;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    ValueObject<?> that = (ValueObject<?>) o;
    return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value);
  }
}
