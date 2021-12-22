package jp.fintan.mobile.santokuapp.presentation.restapi.authentication;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.authentication.AuthenticationService;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.domain.model.authentication.AuthenticationStatus;
import jp.fintan.mobile.santokuapp.presentation.restapi.LoginContext;
import nablarch.common.web.session.SessionUtil;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.core.validation.ee.ValidatorUtil;
import nablarch.fw.ExecutionContext;

@SystemRepositoryComponent
@Path("/")
public class LoginAction {

  private final AuthenticationService authenticationService;

  public LoginAction(AuthenticationService authenticationService) {
    this.authenticationService = authenticationService;
  }

  @Path("/login")
  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public LoginResponse login(ExecutionContext context, LoginRequest requestBody) {
    ValidatorUtil.validate(requestBody);

    LoginContext loginContext = new LoginContext(context);
    AuthenticationStatus status =
        authenticationService.authenticate(
            loginContext, requestBody.accountId, requestBody.password);
    LoginResponse response = new LoginResponse();
    response.status = status.name();

    return response;
  }

  @Path("/logout")
  @POST
  public void logout(ExecutionContext context) {
    SessionUtil.invalidate(context);
  }

  static class LoginRequest {

    @NotNull public AccountId accountId;

    @NotNull public RawPassword password;
  }

  static class LoginResponse {

    public String status;
  }
}
