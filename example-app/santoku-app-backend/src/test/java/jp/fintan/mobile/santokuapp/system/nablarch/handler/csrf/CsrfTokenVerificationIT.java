package jp.fintan.mobile.santokuapp.system.nablarch.handler.csrf;

import static org.junit.Assert.assertEquals;

import com.jayway.jsonassert.JsonAssert;
import java.util.Map;
import jp.fintan.mobile.santokuapp.presentation.restapi.RestIntegrationTestBase;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import org.junit.Test;

public class CsrfTokenVerificationIT extends RestIntegrationTestBase {

  @Test
  public void CSRFトークンのエラー情報が返却できる() {
    RestMockHttpRequest request =
        post("/api/login")
            .setContentType("application/json")
            .setBody(Map.of("mailAddress", "dummy", "password", "dummy"));
    HttpResponse response = sendRequest(request);

    assertEquals(400, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "csrf.invalid");
  }
}
