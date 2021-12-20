package jp.fintan.mobile.santokuapp.system.nablarch.jaxrs;

import jp.fintan.mobile.santokuapp.system.nablarch.web.RestApiErrorResponseBuilder;
import nablarch.fw.ExecutionContext;
import nablarch.fw.jaxrs.ErrorResponseBuilder;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;

public class JaxRsUnknownErrorResponseBuilder extends ErrorResponseBuilder {

  @Override
  public HttpResponse build(HttpRequest request, ExecutionContext context, Throwable throwable) {
    // クライアント起因のエラーは他でハンドリングしているため、ここではサーバ起因の想定外エラーにのみ対応する
    return RestApiErrorResponseBuilder.build(HttpResponse.Status.INTERNAL_SERVER_ERROR, "server");
  }
}
