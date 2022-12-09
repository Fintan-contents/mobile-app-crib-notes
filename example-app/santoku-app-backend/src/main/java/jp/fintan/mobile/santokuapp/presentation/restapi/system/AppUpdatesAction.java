package jp.fintan.mobile.santokuapp.presentation.restapi.system;

import jp.fintan.mobile.santokuapp.application.InvalidAppVersionException;
import jp.fintan.mobile.santokuapp.application.service.system.AppUpdatesService;
import jp.fintan.mobile.santokuapp.domain.model.system.AppType;
import jp.fintan.mobile.santokuapp.domain.model.system.AppVersion;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@SystemRepositoryComponent
@Path("/system/app-updates/{type:android|ios}/{version:.*}")
public class AppUpdatesAction {

  private final AppUpdatesService appUpdatesService;

  public AppUpdatesAction(AppUpdatesService appUpdatesService) {
    this.appUpdatesService = appUpdatesService;
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public AppUpdatesResponse get(HttpRequest request, ExecutionContext context) {
    AppType appType = AppType.fromString(request.getParam("type")[0])
        .orElseThrow(IllegalArgumentException::new);
    AppVersion appVersion;
    try {
      appVersion = new AppVersion(request.getParam("version")[0]);
    } catch (IllegalArgumentException ex) {
      // SemVer文字列として認識されないバージョン番号
      throw new InvalidAppVersionException();
    }

    var appUpdates = appUpdatesService.askAppUpdates(appType, appVersion);
    return new AppUpdatesResponse(
        appUpdates.needUpdates(),
        appUpdates.supportedVersion().value(),
        appUpdates.updateMessage().value());
  }

  public static class AppUpdatesResponse {

    public final boolean updateRequired;

    public final String supportedVersion;

    public final String message;

    public AppUpdatesResponse(
        boolean updateRequired, String supportedVersion, String message) {
      this.updateRequired = updateRequired;
      this.supportedVersion = supportedVersion;
      this.message = message;
    }
  }
}
