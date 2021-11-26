package jp.fintan.mobile.santokuapp.application.service.account;

import jp.fintan.mobile.santokuapp.application.AuthenticationException;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.HashedPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.Nickname;
import jp.fintan.mobile.santokuapp.domain.repository.AccountPasswordRepository;
import jp.fintan.mobile.santokuapp.domain.repository.AccountRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AccountRegistrationService {

  private final AccountRepository accountRepository;

  private final AccountPasswordRepository passwordRepository;

  private final AccountIdProvider idProvider;

  private final PasswordHashingProcessor passwordHashingProcessor;

  public AccountRegistrationService(
      AccountRepository accountRepository,
      AccountPasswordRepository passwordRepository,
      AccountIdProvider idProvider,
      PasswordHashingProcessor passwordHashingProcessor) {
    this.accountRepository = accountRepository;
    this.passwordRepository = passwordRepository;
    this.idProvider = idProvider;
    this.passwordHashingProcessor = passwordHashingProcessor;
  }

  public Account registerAccount(Nickname nickname, RawPassword rawPassword) {
    HashedPassword password = passwordHashingProcessor.hash(rawPassword);
    AccountId id = idProvider.generate();
    Account account = new Account(id, nickname);

    accountRepository.add(account);

    AccountPassword accountPassword = new AccountPassword(id, password);
    passwordRepository.add(accountPassword);

    return account;
  }

  public void deleteAccount(AccountId accountId, RawPassword rawPassword) {
    AccountPassword accountPassword = passwordRepository.findById(accountId);
    if (!passwordHashingProcessor.matches(accountPassword.password(), rawPassword)) {
      throw new AuthenticationException();
    }

    passwordRepository.remove(accountId);
    accountRepository.remove(accountId);
  }
}
