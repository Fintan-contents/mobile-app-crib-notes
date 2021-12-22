package jp.fintan.mobile.santokuapp.presentation.restapi.account;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.lang.annotation.Annotation;
import java.util.Map;
import java.util.Set;
import javax.validation.constraints.NotNull;
import jp.fintan.mobile.santokuapp.ValidationExtension;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.presentation.restapi.account.MyAccountDeletionAction.AccountDeleteRequest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;

public class AccountDeleteRequestTest {

  @RegisterExtension static ValidationExtension validation = new ValidationExtension();

  private final AccountDeleteRequest sut = new AccountDeleteRequest();

  @Test
  void valid() throws Exception {
    sut.password = new RawPassword("pass123-");

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(0, validationResult.size());
  }

  @Test
  void invalid_passwordがnull() throws Exception {
    sut.password = null;

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(1, validationResult.size());
    assertEquals(Set.of(NotNull.class), validationResult.get("password"));
  }
}
