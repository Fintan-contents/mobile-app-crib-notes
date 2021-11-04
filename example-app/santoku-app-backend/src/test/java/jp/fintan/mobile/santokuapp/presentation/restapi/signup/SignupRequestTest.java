package jp.fintan.mobile.santokuapp.presentation.restapi.signup;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.lang.annotation.Annotation;
import java.util.Map;
import java.util.Set;
import javax.validation.constraints.NotNull;
import jp.fintan.mobile.santokuapp.ValidationExtension;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.Nickname;
import jp.fintan.mobile.santokuapp.presentation.restapi.signup.SignupAction.SignupRequest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;

public class SignupRequestTest {

  @RegisterExtension static ValidationExtension validation = new ValidationExtension();

  private final SignupRequest sut = new SignupRequest();

  @Test
  void valid() throws Exception {
    sut.nickname = new Nickname("testuser");
    sut.password = new RawPassword("pass123-");

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(0, validationResult.size());
  }

  @Test
  void invalid_nicknameがnull() throws Exception {
    sut.nickname = null;
    sut.password = new RawPassword("pass123-");

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(1, validationResult.size());
    assertEquals(Set.of(NotNull.class), validationResult.get("nickname"));
  }

  @Test
  void invalid_passwordがnull() throws Exception {
    sut.nickname = new Nickname("testuser");
    sut.password = null;

    Map<String, Set<Class<? extends Annotation>>> validationResult = validation.validate(sut);
    assertEquals(1, validationResult.size());
    assertEquals(Set.of(NotNull.class), validationResult.get("password"));
  }
}
