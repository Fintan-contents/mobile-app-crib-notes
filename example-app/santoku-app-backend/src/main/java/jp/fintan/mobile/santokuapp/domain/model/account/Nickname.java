package jp.fintan.mobile.santokuapp.domain.model.account;

import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class Nickname extends StringValue {

  private static final int MAX_LENGTH = 50;

  public Nickname(String value) {
    super(value);
    validateNotBlank(value);
    validateLessThanOrEqual(value, MAX_LENGTH);
  }
}
