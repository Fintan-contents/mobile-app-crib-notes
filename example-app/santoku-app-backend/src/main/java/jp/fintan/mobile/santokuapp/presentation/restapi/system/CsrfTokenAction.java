package jp.fintan.mobile.santokuapp.presentation.restapi.system;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import nablarch.common.web.csrf.CsrfTokenUtil;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;

@SystemRepositoryComponent
@Path("/csrf_token")
public class CsrfTokenAction {

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public CsrfTokenResponse get(ExecutionContext context) {
    String csrfToken = CsrfTokenUtil.getCsrfToken(context);
    String headerName = CsrfTokenUtil.getHeaderName();
    String parameterName = CsrfTokenUtil.getParameterName();
    return new CsrfTokenResponse(csrfToken, headerName, parameterName);
  }

  public static class CsrfTokenResponse {

    public final String csrfTokenValue;

    public final String csrfTokenHeaderName;

    public final String csrfTokenParameterName;

    public CsrfTokenResponse(
        String csrfTokenValue, String csrfTokenHeaderName, String csrfTokenParameterName) {
      this.csrfTokenValue = csrfTokenValue;
      this.csrfTokenHeaderName = csrfTokenHeaderName;
      this.csrfTokenParameterName = csrfTokenParameterName;
    }
  }
}
