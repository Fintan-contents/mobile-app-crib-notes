package jp.fintan.mobile.santokuapp.presentation.restapi.account;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.LoginAccountIdSupplier;
import jp.fintan.mobile.santokuapp.application.service.account.AccountRegistrationService;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import nablarch.common.web.session.SessionUtil;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.core.validation.ee.ValidatorUtil;
import nablarch.fw.ExecutionContext;

@SystemRepositoryComponent
@Path("accounts/me/delete")
public class MyAccountDeletionAction {

  private final AccountRegistrationService accountRegistrationService;

  private final LoginAccountIdSupplier loginAccountIdSupplier;

  public MyAccountDeletionAction(
      AccountRegistrationService accountRegistrationService,
      LoginAccountIdSupplier loginAccountIdSupplier) {
    this.accountRegistrationService = accountRegistrationService;
    this.loginAccountIdSupplier = loginAccountIdSupplier;
  }

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  public void delete(ExecutionContext context, AccountDeleteRequest requestBody) {
    // URLをリソースと考えるとHTTPメソッドとしてはDELETEの方が適切には思うが、
    // DELETEではリクエストボディにデータを含めることに関して明確な仕様がなく、
    // アプリケーションサーバ等が要因で扱いづらくなることがあるため、POSTを利用する。
    ValidatorUtil.validate(requestBody);

    accountRegistrationService.deleteAccount(loginAccountIdSupplier.supply(), requestBody.password);

    SessionUtil.invalidate(context);
  }

  public static class AccountDeleteRequest {

    @NotNull public RawPassword password;
  }
}
