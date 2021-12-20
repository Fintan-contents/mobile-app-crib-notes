package jp.fintan.mobile.santokuapp.presentation.restapi.authentication;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.lang.annotation.Annotation;
import java.util.Map;
import java.util.Set;
import javax.validation.constraints.NotNull;
import jp.fintan.mobile.santokuapp.ValidationExtension;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.presentation.restapi.authentication.LoginAction.LoginRequest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;

public class LoginRequestTest {

  @RegisterExtension static ValidationExtension validation = new ValidationExtension();

  private final LoginRequest sut = new LoginRequest();

  @Test
  void valid() throws Exception {
    sut.accountId = new AccountId("8645981d-d426-4f4f-ae24-bdedb9505e14");
    sut.password = new RawPassword("pass123-");

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(0, validationResult.size());
  }

  @Test
  void invalid_accountIdがnull() throws Exception {
    sut.accountId = null;
    sut.password = new RawPassword("pass123-");

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(1, validationResult.size());
    assertEquals(Set.of(NotNull.class), validationResult.get("accountId"));
  }

  @Test
  void invalid_passwordがnull() throws Exception {
    sut.accountId = new AccountId("7ae1d6bc-5ee1-4328-bc79-ddf4e9be5ba0");
    sut.password = null;

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(1, validationResult.size());
    assertEquals(Set.of(NotNull.class), validationResult.get("password"));
  }
}
