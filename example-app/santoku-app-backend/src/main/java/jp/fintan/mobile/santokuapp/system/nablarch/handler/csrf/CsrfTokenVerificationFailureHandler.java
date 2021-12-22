package jp.fintan.mobile.santokuapp.system.nablarch.handler.csrf;

import jp.fintan.mobile.santokuapp.system.nablarch.web.RestApiErrorResponseBuilder;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.handler.csrf.VerificationFailureHandler;

public class CsrfTokenVerificationFailureHandler implements VerificationFailureHandler {

  private static final Logger LOGGER = LoggerManager.get(CsrfTokenVerificationFailureHandler.class);

  @Override
  public HttpResponse handle(
      HttpRequest request,
      ExecutionContext context,
      String userSentToken,
      String sessionAssociatedToken) {
    if (LOGGER.isInfoEnabled()) {
      LOGGER.logInfo(
          String.format(
              "CSRF token verification failed. userSentToken=[%s] sessionAssociatedToken=[%s]",
              userSentToken, sessionAssociatedToken));
    }
    return RestApiErrorResponseBuilder.build(HttpResponse.Status.BAD_REQUEST, "csrf.invalid");
  }
}
