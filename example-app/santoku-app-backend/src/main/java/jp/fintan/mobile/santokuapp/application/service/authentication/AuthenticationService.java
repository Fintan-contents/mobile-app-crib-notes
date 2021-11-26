package jp.fintan.mobile.santokuapp.application.service.authentication;

import jp.fintan.mobile.santokuapp.application.AuthenticationException;
import jp.fintan.mobile.santokuapp.application.service.account.PasswordHashingProcessor;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.domain.model.authentication.AuthenticationStatus;
import jp.fintan.mobile.santokuapp.domain.repository.AccountPasswordRepository;
import jp.fintan.mobile.santokuapp.domain.repository.AccountRepository;
import jp.fintan.mobile.santokuapp.presentation.restapi.LoginContext;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AuthenticationService {

  private final AccountRepository accountRepository;

  private final AccountPasswordRepository passwordRepository;

  private final PasswordHashingProcessor passwordHashingProcessor;

  public AuthenticationService(
      AccountRepository accountRepository,
      AccountPasswordRepository passwordRepository,
      PasswordHashingProcessor passwordHashingProcessor) {
    this.accountRepository = accountRepository;
    this.passwordRepository = passwordRepository;
    this.passwordHashingProcessor = passwordHashingProcessor;
  }

  public AuthenticationStatus authenticate(
      LoginContext context, AccountId accountId, RawPassword password) {
    Account account = accountRepository.findById(accountId);
    if (account == null) {
      throw new AuthenticationException();
    }
    AccountPassword accountPassword = passwordRepository.findById(account.accountId());
    if (!passwordHashingProcessor.matches(accountPassword.password(), password)) {
      throw new AuthenticationException();
    }

    context.login(account.accountId());
    return AuthenticationStatus.COMPLETE;
  }
}
