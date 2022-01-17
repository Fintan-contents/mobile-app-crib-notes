package jp.fintan.mobile.santokuapp.domain.model.core;

public abstract class StringValue extends ValueObject<String> {
  protected StringValue(String value) {
    super(value);
  }

  protected void validateNotBlank(String value) {
    if (value.isBlank()) {
      throw new IllegalArgumentException(String.format("%s is blank.", getName()));
    }
  }

  protected void validateLessThanOrEqual(String value, int length) {
    if (value.codePointCount(0, value.length()) > length) {
      throw new IllegalArgumentException(
          String.format("%s length is too long. value=[%s]", getName(), value));
    }
  }

  protected void validateGreaterThanOrEqual(String value, int length) {
    if (value.codePointCount(0, value.length()) < length) {
      throw new IllegalArgumentException(
          String.format("%s length is not long enough. value=[%s]", getName(), value));
    }
  }

  private String getName() {
    return this.getClass().getSimpleName();
  }
}
