package jp.fintan.mobile.santokuapp.infrastructure.service;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import jp.fintan.mobile.santokuapp.application.service.account.PasswordHashingProcessor;
import jp.fintan.mobile.santokuapp.domain.model.account.HashedPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class PBKDF2PasswordHashingProcessor implements PasswordHashingProcessor {

  private static final Logger LOGGER = LoggerManager.get(PBKDF2PasswordHashingProcessor.class);
  private static final int SALT_SIZE = 16;
  private static final int STRETCHING_SIZE = 10000;
  private static final SecureRandom SALT_GENERATOR = new SecureRandom();

  @Override
  public HashedPassword hash(RawPassword rawPassword) {
    byte[] salt = new byte[SALT_SIZE];
    SALT_GENERATOR.nextBytes(salt);
    return hash(rawPassword, salt);
  }

  @Override
  public boolean matches(HashedPassword hashedPassword, RawPassword rawPassword) {
    byte[] bs = Base64.getDecoder().decode(hashedPassword.value());
    byte[] salt = new byte[SALT_SIZE];
    System.arraycopy(bs, 0, salt, 0, SALT_SIZE);
    return hash(rawPassword, salt).matches(hashedPassword);
  }

  /**
   * PBKDF2WithHmacSHA256でパスワードをハッシュする。
   *
   * @param rawPassword パスワード(平文)
   * @param salt ソルト(16バイト)
   * @return ソルトとハッシュされたパスワードを繋げてBase64でエンコードしたもの
   */
  private static HashedPassword hash(RawPassword rawPassword, byte[] salt) {
    if (salt.length != SALT_SIZE) {
      throw new IllegalArgumentException("Salt size must be " + SALT_SIZE + " bytes");
    }
    try {
      SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
      KeySpec keySpec =
          new PBEKeySpec(rawPassword.value().toCharArray(), salt, STRETCHING_SIZE, 128);
      SecretKey key = factory.generateSecret(keySpec);
      byte[] hashedPassword = key.getEncoded();

      byte[] bs = new byte[SALT_SIZE + hashedPassword.length];
      System.arraycopy(salt, 0, bs, 0, salt.length);
      System.arraycopy(hashedPassword, 0, bs, salt.length, hashedPassword.length);

      return new HashedPassword(Base64.getEncoder().encodeToString(bs));
    } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
      if (LOGGER.isErrorEnabled()) {
        LOGGER.logError("Failed to hash password", e);
      }
      throw new RuntimeException(e);
    }
  }
}
