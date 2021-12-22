package jp.fintan.mobile.santokuapp.infrastructure.service;

import jp.fintan.mobile.santokuapp.application.service.LoginAccountIdSupplier;
import jp.fintan.mobile.santokuapp.application.service.authentication.CredentialNotFoundException;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import nablarch.core.ThreadContext;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class ThreadContextLoginAccountIdSupplier implements LoginAccountIdSupplier {

  @Override
  public AccountId supply() {
    String userId = ThreadContext.getUserId();
    if (userId == null) {
      throw new CredentialNotFoundException("Must be authenticated.");
    }
    return new AccountId(userId);
  }
}
