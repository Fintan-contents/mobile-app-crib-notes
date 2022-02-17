package jp.fintan.mobile.santokuapp.presentation.restapi.signup;

import java.util.List;
import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.account.AccountRegistrationService;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.model.account.Nickname;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.presentation.restapi.account.MyAccountAction.AccountResponse;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.core.validation.ee.ValidatorUtil;
import nablarch.fw.jaxrs.EntityResponse;
import nablarch.fw.web.HttpRequest;

@SystemRepositoryComponent
@Path("/signup")
public class SignupAction {

  private final AccountRegistrationService accountRegistrationService;

  public SignupAction(AccountRegistrationService accountRegistrationService) {
    this.accountRegistrationService = accountRegistrationService;
  }

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public EntityResponse signup(SignupRequest requestBody, HttpRequest request) {
    ValidatorUtil.validate(requestBody);

    Account account =
        accountRegistrationService.registerAccount(requestBody.nickname, requestBody.password);
    EntityResponse response = new EntityResponse();
    response.setEntity(new AccountResponse(account, new AccountDeviceTokens(List.of())));
    response.setStatusCode(201);
    response.setLocation("/api/accounts/me");
    return response;
  }

  public static class SignupRequest {

    @NotNull public Nickname nickname;

    @NotNull public RawPassword password;
  }
}
