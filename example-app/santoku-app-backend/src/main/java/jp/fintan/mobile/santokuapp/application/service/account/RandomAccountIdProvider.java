package jp.fintan.mobile.santokuapp.application.service.account;

import java.util.UUID;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class RandomAccountIdProvider implements AccountIdProvider {

  private final AccountSearchService accountSearchService;

  public RandomAccountIdProvider(AccountSearchService accountSearchService) {
    this.accountSearchService = accountSearchService;
  }

  @Override
  public AccountId generate() {
    AccountId candidate = new AccountId(UUID.randomUUID().toString());

    while (accountSearchService.existsBy(candidate)) {
      candidate = new AccountId(UUID.randomUUID().toString());
    }

    return candidate;
  }
}
