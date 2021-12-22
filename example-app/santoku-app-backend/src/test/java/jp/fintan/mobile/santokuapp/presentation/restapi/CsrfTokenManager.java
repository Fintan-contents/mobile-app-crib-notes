package jp.fintan.mobile.santokuapp.presentation.restapi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import nablarch.test.core.http.RequestResponseProcessor;

public class CsrfTokenManager implements RequestResponseProcessor {

  private final ObjectMapper om = new ObjectMapper();
  private String csrfTokenHeaderName;
  private String csrfTokenValue;

  @Override
  public HttpRequest processRequest(HttpRequest request) {
    if (request instanceof RestMockHttpRequest) {
      RestMockHttpRequest restMockHttpRequest = (RestMockHttpRequest) request;
      if (csrfTokenHeaderName != null && csrfTokenValue != null) {
        restMockHttpRequest.setHeader(csrfTokenHeaderName, csrfTokenValue);
      }
    }
    return request;
  }

  @Override
  public HttpResponse processResponse(HttpRequest request, HttpResponse response) {
    if (request.getRequestPath().equals("/api/csrf_token")) {
      String body = response.getBodyString();
      try {
        JsonNode root = om.readTree(body);
        csrfTokenHeaderName = root.get("csrfTokenHeaderName").asText();
        csrfTokenValue = root.get("csrfTokenValue").asText();
      } catch (JsonProcessingException e) {
        throw new RuntimeException(e);
      }
    }
    return response;
  }

  @Override
  public void reset() {
    csrfTokenHeaderName = null;
    csrfTokenValue = null;
  }
}
