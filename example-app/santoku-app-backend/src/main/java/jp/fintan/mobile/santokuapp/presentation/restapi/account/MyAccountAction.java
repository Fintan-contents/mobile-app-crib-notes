package jp.fintan.mobile.santokuapp.presentation.restapi.account;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.LoginAccountIdSupplier;
import jp.fintan.mobile.santokuapp.application.service.account.AccountSearchService;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
@Path("/accounts/me")
public class MyAccountAction {

  private final LoginAccountIdSupplier loginAccountIdSupplier;
  private final AccountSearchService accountSearchService;

  public MyAccountAction(
      LoginAccountIdSupplier loginAccountIdSupplier, AccountSearchService accountSearchService) {
    this.loginAccountIdSupplier = loginAccountIdSupplier;
    this.accountSearchService = accountSearchService;
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public AccountResponse get() {

    Account account = accountSearchService.findById(loginAccountIdSupplier.supply());

    return new AccountResponse(account);
  }

  public static class AccountResponse {

    public String accountId;
    public String nickname;

    public AccountResponse(Account account) {
      this.accountId = account.accountId().value();
      this.nickname = account.nickname().value();
    }
  }
}
