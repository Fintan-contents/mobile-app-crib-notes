package jp.fintan.mobile.santokuapp.presentation.restapi.account;

import static org.junit.Assert.assertEquals;

import com.jayway.jsonassert.JsonAssert;
import java.util.Map;
import jp.fintan.mobile.santokuapp.presentation.restapi.RestIntegrationTestBase;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import org.junit.Test;

public class MyAccountDeletionActionIT extends RestIntegrationTestBase {

  @Test
  public void アカウントを削除できる() throws Exception {
    String password = "pass123-";
    login("a2527b34-4c9a-4b81-8f60-4faa63372fbb", password);

    RestMockHttpRequest request =
        post("/api/accounts/me/delete")
            .setContentType("application/json")
            .setBody(Map.of("password", password));
    HttpResponse response = sendRequest(request);

    assertEquals(204, response.getStatusCode());
    validateByOpenAPI("delete-accounts-me-delete", request, response);
  }

  @Test
  public void パスワードが正しくない場合はアカウントを削除できない() throws Exception {
    String password = "pass123-";
    String mistakePassword = "mistake123-";
    login("20351248-e4c8-4947-91d8-682a3825e1b5", password);

    RestMockHttpRequest request =
        post("/api/accounts/me/delete")
            .setContentType("application/json")
            .setBody(Map.of("password", mistakePassword));
    HttpResponse response = sendRequest(request);

    assertEquals(401, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "authentication.failed");
    validateByOpenAPI("delete-accounts-me-delete", request, response);
  }

  @Test
  public void ログインしていない場合はアカウントを削除できない() {
    loadCsrfToken();

    RestMockHttpRequest request =
        post("/api/accounts/me/delete")
            .setContentType("application/json")
            .setBody(Map.of("password", "pass123-"));
    HttpResponse response = sendRequest(request);

    assertEquals(403, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "access.denied");
    validateByOpenAPI("delete-accounts-me-delete", request, response);
  }
}
