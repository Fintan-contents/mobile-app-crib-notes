package jp.fintan.mobile.santokuapp.system.nablarch.handler;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import jp.fintan.mobile.santokuapp.application.*;
import jp.fintan.mobile.santokuapp.application.service.authentication.AuthorizationException;
import jp.fintan.mobile.santokuapp.application.service.authentication.CredentialNotFoundException;
import jp.fintan.mobile.santokuapp.presentation.restapi.RestApiException;
import jp.fintan.mobile.santokuapp.sandbox.application.TodoNotFoundException;
import jp.fintan.mobile.santokuapp.system.nablarch.web.RestApiErrorResponseBuilder;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.message.ApplicationException;
import nablarch.fw.ExecutionContext;
import nablarch.fw.Handler;
import nablarch.fw.web.HttpErrorResponse;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.HttpResponse.Status;

public class RestApiErrorResponseHandler implements Handler<Object, Object> {

  private static final Logger LOGGER = LoggerManager.get(RestApiErrorResponseHandler.class);

  private final Map<Class<? extends SantokuAppException>, Response> map = new LinkedHashMap<>();

  public RestApiErrorResponseHandler() {
    map.put(
        AuthenticationException.class,
        new Response(HttpResponse.Status.UNAUTHORIZED, "authentication.failed"));
    map.put(
        AuthorizationException.class, new Response(HttpResponse.Status.FORBIDDEN, "access.denied"));
    map.put(
        CredentialNotFoundException.class,
        new Response(HttpResponse.Status.FORBIDDEN, "credential.notfound"));
    map.put(
        InvalidTokenException.class, new Response(HttpResponse.Status.NOT_FOUND, "token.invalid"));
    map.put(AccountNotFoundException.class, new Response(Status.BAD_REQUEST, "request"));
    map.put(TodoNotFoundException.class, new Response(Status.NOT_FOUND, "sandbox.todo.notfound"));
  }

  @Override
  public Object handle(Object data, ExecutionContext context) {
    try {
      return context.handleNext(data);

    } catch (RestApiException e) {
      throw new HttpErrorResponse(
          RestApiErrorResponseBuilder.build(e.getHttpStatus(), e.getErrorCode()), e);

    } catch (ApplicationException e) {
      // ValidatorUtilによる入力値検証でエラーがあった場合を想定して400エラーにする
      throw new HttpErrorResponse(
          RestApiErrorResponseBuilder.build(Status.BAD_REQUEST, "request"), e);

    } catch (SantokuAppException e) {
      for (Entry<Class<? extends SantokuAppException>, Response> entry : map.entrySet()) {
        if (entry.getKey().isInstance(e)) {
          LOGGER.logInfo(e.getClass().getName() + " is thrown");
          throw new HttpErrorResponse(
              RestApiErrorResponseBuilder.build(
                  entry.getValue().httpStatus, entry.getValue().errorCode),
              e);
        }
      }
      if (LOGGER.isWarnEnabled()) {
        LOGGER.logWarn(e.getClass().getName() + " is not mapped to HTTP status code");
      }
      throw e;
    }
  }

  private static class Response {

    private final HttpResponse.Status httpStatus;

    private final String errorCode;

    public Response(Status httpStatus, String errorCode) {
      this.httpStatus = httpStatus;
      this.errorCode = errorCode;
    }
  }
}
