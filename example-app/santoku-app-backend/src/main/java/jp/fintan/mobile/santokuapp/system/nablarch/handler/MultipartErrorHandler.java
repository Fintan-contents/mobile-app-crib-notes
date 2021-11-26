package jp.fintan.mobile.santokuapp.system.nablarch.handler;

import jp.fintan.mobile.santokuapp.system.nablarch.web.RestApiErrorResponseBuilder;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpRequestHandler;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.upload.MultipartHandler;

public class MultipartErrorHandler implements HttpRequestHandler {

  private MultipartHandler multipartHandler;

  @Override
  public HttpResponse handle(HttpRequest request, ExecutionContext context) {
    HttpResponse response = multipartHandler.handle(request, context);
    if (response.isSuccess() || !response.isBodyEmpty()) {
      return response;
    }
    HttpResponse.Status status = HttpResponse.Status.valueOfCode(response.getStatusCode());
    switch (status) {
      case BAD_REQUEST:
        return RestApiErrorResponseBuilder.build(status, "request");
      case REQUEST_ENTITY_TOO_LARGE:
        return RestApiErrorResponseBuilder.build(status, "request.large");
      default:
        return response;
    }
  }

  public void setMultipartHandler(MultipartHandler multipartHandler) {
    this.multipartHandler = multipartHandler;
  }
}
