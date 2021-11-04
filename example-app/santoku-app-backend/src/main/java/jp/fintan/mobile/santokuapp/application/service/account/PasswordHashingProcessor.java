package jp.fintan.mobile.santokuapp.application.service.account;

import jp.fintan.mobile.santokuapp.domain.model.account.HashedPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;

public interface PasswordHashingProcessor {

  HashedPassword hash(RawPassword rawPassword);

  boolean matches(HashedPassword hashedPassword, RawPassword rawPassword);
}
