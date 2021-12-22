package jp.fintan.mobile.santokuapp.presentation.restapi.account;

import static org.junit.Assert.assertEquals;

import com.jayway.jsonassert.JsonAssert;
import jp.fintan.mobile.santokuapp.presentation.restapi.RestIntegrationTestBase;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import org.junit.Test;

public class MyAccountActionIT extends RestIntegrationTestBase {

  @Test
  public void アカウント情報を取得できる() throws Exception {
    login("a2527b34-4c9a-4b81-8f60-4faa63372fbb", "pass123-");

    RestMockHttpRequest request = get("/api/accounts/me");
    HttpResponse response = sendRequest(request);
    assertEquals(200, response.getStatusCode());

    JsonAssert.with(response.getBodyString())
        .assertEquals("$.accountId", "a2527b34-4c9a-4b81-8f60-4faa63372fbb")
        .assertEquals("$.nickname", "user1");

    validateByOpenAPI("get-accounts-me", request, response);
  }

  @Test
  public void ログインしていない場合はアカウント情報を取得できない() {
    loadCsrfToken();
    RestMockHttpRequest request = get("/api/accounts/me");

    HttpResponse response = sendRequest(request);

    assertEquals(403, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "access.denied");
    validateByOpenAPI("get-accounts-me", request, response);
  }
}
