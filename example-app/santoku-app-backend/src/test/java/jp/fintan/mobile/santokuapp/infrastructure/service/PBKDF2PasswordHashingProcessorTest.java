package jp.fintan.mobile.santokuapp.infrastructure.service;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.UUID;
import jp.fintan.mobile.santokuapp.application.service.account.PasswordHashingProcessor;
import jp.fintan.mobile.santokuapp.domain.model.account.HashedPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import org.junit.jupiter.api.Test;

class PBKDF2PasswordHashingProcessorTest {

  @Test
  void hashAndMatches() {
    PasswordHashingProcessor sut = new PBKDF2PasswordHashingProcessor();
    RawPassword rawPassword = new RawPassword(UUID.randomUUID().toString());
    HashedPassword hashedPassword = sut.hash(rawPassword);
    boolean matched = sut.matches(hashedPassword, rawPassword);
    assertTrue(matched);
  }
}
