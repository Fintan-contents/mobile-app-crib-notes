package jp.fintan.mobile.santokuapp.domain.model.account;

import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class RawPassword extends StringValue {

  private static final int MIN_LENGTH = 8;

  private static final int MAX_LENGTH = 50;

  public RawPassword(String value) {
    super(value);
    validateNotBlank(value);
    validateLessThanOrEqual(value, MAX_LENGTH);
    validateGreaterThanOrEqual(value, MIN_LENGTH);
  }
}
