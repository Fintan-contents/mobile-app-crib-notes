package jp.fintan.mobile.santokuapp.application.service.account;

import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.repository.AccountRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AccountSearchService {

  private final AccountRepository accountRepository;

  public AccountSearchService(AccountRepository accountRepository) {
    this.accountRepository = accountRepository;
  }

  public Account findById(AccountId accountId) {
    return accountRepository.findById(accountId);
  }

  public boolean existsBy(AccountId accountId) {
    return accountRepository.existsBy(accountId);
  }
}
