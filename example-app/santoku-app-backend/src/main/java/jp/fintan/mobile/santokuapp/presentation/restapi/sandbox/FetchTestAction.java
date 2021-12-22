package jp.fintan.mobile.santokuapp.presentation.restapi.sandbox;

import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;
import nablarch.fw.jaxrs.EntityResponse;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.servlet.ServletExecutionContext;

import javax.servlet.http.Cookie;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.UUID;

@SystemRepositoryComponent
@Path("/sandbox/fetch_test")
public class FetchTestAction {

  private static final Logger LOGGER = LoggerManager.get(FetchTestAction.class);

  @GET
  @Path("/redirect")
  @Produces(MediaType.APPLICATION_JSON)
  public EntityResponse redirect(ExecutionContext context) {

    EntityResponse response = new EntityResponse();
    response.setEntity(new FetchTestResponse("ok"));
    response.setStatusCode(HttpResponse.Status.FOUND.getStatusCode());
    response.setHeader("Location", "/api/sandbox/fetch_test/ok");

    // Note::
    // JaxRsResponseHandlerがCookieに対応していないのか下記コードが動作しない。
    // 仕方ないので、Servlet APIにてCookieを設定する

//    var cookie1 = new HttpCookie();
//    cookie1.put("key1", UUID.randomUUID().toString());
//    var cookie2 = new HttpCookie();
//    cookie2.put("key2", UUID.randomUUID().toString());
//    response.addCookie(cookie1);
//    response.addCookie(cookie2);

    ServletExecutionContext servletExecutionContext = (ServletExecutionContext) context;

    var servletResponse = servletExecutionContext.getServletResponse();
    servletResponse.addCookie(new Cookie("key1", UUID.randomUUID().toString()));
    servletResponse.addCookie(new Cookie("key2", UUID.randomUUID().toString()));

    return response;
  }

  @GET
  @Path("/ok")
  @Produces(MediaType.APPLICATION_JSON)
  public EntityResponse ok(ExecutionContext context, HttpRequest request) {

    LOGGER.logInfo("accept request");
    request.getCookie().getDelegateMap().forEach((name, value) -> {
      LOGGER.logInfo(name + ":" + value);
    });

    EntityResponse response = new EntityResponse();
    response.setEntity(new FetchTestResponse("ok"));
    response.setStatusCode(HttpResponse.Status.OK.getStatusCode());
    return response;
  }

  public static class FetchTestResponse {

    public final String message;

    public FetchTestResponse(String message) {
      this.message = message;
    }
  }
}
