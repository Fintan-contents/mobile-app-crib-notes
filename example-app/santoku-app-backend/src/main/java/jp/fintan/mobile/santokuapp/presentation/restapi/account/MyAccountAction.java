package jp.fintan.mobile.santokuapp.presentation.restapi.account;

import java.util.List;
import java.util.stream.Collectors;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.LoginAccountIdSupplier;
import jp.fintan.mobile.santokuapp.application.service.account.AccountSearchService;
import jp.fintan.mobile.santokuapp.application.service.account.AccountDeviceTokenService;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceTokens;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
@Path("/accounts/me")
public class MyAccountAction {

  private final LoginAccountIdSupplier loginAccountIdSupplier;
  private final AccountSearchService accountSearchService;
  private final AccountDeviceTokenService accountDeviceTokenService;

  public MyAccountAction(
      LoginAccountIdSupplier loginAccountIdSupplier, AccountSearchService accountSearchService,
      AccountDeviceTokenService accountDeviceTokenService) {
    this.loginAccountIdSupplier = loginAccountIdSupplier;
    this.accountSearchService = accountSearchService;
    this.accountDeviceTokenService = accountDeviceTokenService;
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public AccountResponse get() {

    AccountId accountId = loginAccountIdSupplier.supply();
    Account account = accountSearchService.findById(accountId);
    AccountDeviceTokens accountDeviceTokens = accountDeviceTokenService.findByAccountId(accountId);

    return new AccountResponse(account, accountDeviceTokens);
  }

  public static class AccountResponse {

    public String accountId;
    public String nickname;
    public List<String> deviceTokens;

    public AccountResponse(Account account, AccountDeviceTokens accountDeviceTokens) {
      this.accountId = account.accountId().value();
      this.nickname = account.nickname().value();
      final AccountDeviceTokens accountDeviceTokensWithoutOverdueRenewals = accountDeviceTokens.excludeOverdueRenewals();
      this.deviceTokens =
          accountDeviceTokensWithoutOverdueRenewals.value().stream()
              .map(device -> device.deviceToken().value())
              .collect(Collectors.toList());
    }
  }
}
