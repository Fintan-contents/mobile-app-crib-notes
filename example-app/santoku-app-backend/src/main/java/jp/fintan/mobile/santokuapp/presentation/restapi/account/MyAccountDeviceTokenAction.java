package jp.fintan.mobile.santokuapp.presentation.restapi.account;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.LoginAccountIdSupplier;
import jp.fintan.mobile.santokuapp.application.service.account.AccountDeviceTokenService;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;

@SystemRepositoryComponent
@Path("accounts/me/device-token")
public class MyAccountDeviceTokenAction {

  private final AccountDeviceTokenService accountDeviceTokenService;

  private final LoginAccountIdSupplier loginAccountIdSupplier;

  public MyAccountDeviceTokenAction(
      AccountDeviceTokenService accountDeviceTokenService, LoginAccountIdSupplier loginAccountIdSupplier) {
    this.accountDeviceTokenService = accountDeviceTokenService;
    this.loginAccountIdSupplier = loginAccountIdSupplier;
  }

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  public void update(ExecutionContext context, DeviceTokenRequest requestBody) {

    AccountId accountId = loginAccountIdSupplier.supply();

    if (requestBody.oldDeviceToken != null) {
      accountDeviceTokenService.deleteDevice(accountId, new DeviceToken(requestBody.oldDeviceToken));
    }

    if (requestBody.newDeviceToken != null) {
      accountDeviceTokenService.registerDevice(accountId, new DeviceToken(requestBody.newDeviceToken));
    }
  }

  @POST
  @Path("/add")
  @Consumes(MediaType.APPLICATION_JSON)
  public void add(ExecutionContext context, UpdateDeviceTokenRequest requestBody) {
    AccountId accountId = loginAccountIdSupplier.supply();

    if (requestBody.deviceToken != null) {
      accountDeviceTokenService.deleteDevice(accountId, new DeviceToken(requestBody.deviceToken));
      accountDeviceTokenService.registerDevice(accountId, new DeviceToken(requestBody.deviceToken));
    }
  }

  @POST
  @Path("/remove")
  @Consumes(MediaType.APPLICATION_JSON)
  public void remove(ExecutionContext context, DeleteDeviceTokenRequest requestBody) {
    AccountId accountId = loginAccountIdSupplier.supply();

    if (requestBody.deviceToken != null) {
      accountDeviceTokenService.deleteDevice(accountId, new DeviceToken(requestBody.deviceToken));
    }
  }

  public static class DeviceTokenRequest {

    public String newDeviceToken;

    public String oldDeviceToken;
  }

  public static class UpdateDeviceTokenRequest {
    public String deviceToken;
  }

  public static class DeleteDeviceTokenRequest {
    public String deviceToken;
  }
}
