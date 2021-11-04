package jp.fintan.mobile.santokuapp.presentation.restapi;

import nablarch.fw.web.HttpResponse;

public class RestApiException extends RuntimeException {

  private final HttpResponse.Status httpStatus;

  private final String errorCode;

  public RestApiException(HttpResponse.Status httpStatus, String errorCode) {
    super();
    this.httpStatus = httpStatus;
    this.errorCode = errorCode;
  }

  public RestApiException(HttpResponse.Status httpStatus, String errorCode, Throwable cause) {
    super(cause);
    this.httpStatus = httpStatus;
    this.errorCode = errorCode;
  }

  public HttpResponse.Status getHttpStatus() {
    return httpStatus;
  }

  public String getErrorCode() {
    return errorCode;
  }
}
