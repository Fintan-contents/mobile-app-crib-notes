package jp.fintan.mobile.santokuapp.presentation.restapi.system;

import static org.junit.Assert.assertEquals;

import com.jayway.jsonassert.JsonAssert;
import nablarch.common.web.WebConfigFinder;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import nablarch.test.core.http.SimpleRestTestSupport;
import org.junit.Test;

public class CsrfTokenActionIT extends SimpleRestTestSupport {

  @Test
  public void CSRFトークンを取得できる() throws Exception {
    ExecutionContext context = new ExecutionContext();
    context.setSessionStoredVar(
        WebConfigFinder.getWebConfig().getCsrfTokenSessionStoredVarName(), "123");
    RestMockHttpRequest request = get("/api/csrf_token");

    HttpResponse response = sendRequestWithContext(request, context);

    assertEquals(200, response.getStatusCode());
    JsonAssert.with(response.getBodyString())
        .assertNotNull("$.csrfTokenValue")
        .assertEquals(
            "$.csrfTokenHeaderName", WebConfigFinder.getWebConfig().getCsrfTokenHeaderName())
        .assertEquals(
            "$.csrfTokenParameterName", WebConfigFinder.getWebConfig().getCsrfTokenParameterName());
  }
}
