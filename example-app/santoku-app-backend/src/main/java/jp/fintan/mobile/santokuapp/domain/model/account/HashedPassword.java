package jp.fintan.mobile.santokuapp.domain.model.account;

import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class HashedPassword extends StringValue {

  public HashedPassword(String value) {
    super(value);
  }

  public boolean matches(HashedPassword other) {
    return value().equals(other.value());
  }
}
