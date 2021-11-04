package jp.fintan.mobile.santokuapp.presentation.restapi.authentication;

import static org.junit.Assert.assertEquals;

import com.jayway.jsonassert.JsonAssert;
import java.util.Arrays;
import java.util.Map;
import jp.fintan.mobile.santokuapp.presentation.restapi.RestIntegrationTestBase;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import org.junit.Test;

public class LoginActionIT extends RestIntegrationTestBase {

  @Test
  public void ログインができる() throws Exception {
    loadCsrfToken();

    String accountId = "a2527b34-4c9a-4b81-8f60-4faa63372fbb";
    String password = "pass123-";

    RestMockHttpRequest request =
        post("/api/login")
            .setContentType("application/json")
            .setBody(Map.of("accountId", accountId, "password", password));
    HttpResponse response = sendRequest(request);

    assertEquals(200, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.status", "COMPLETE");
    validateByOpenAPI("post-login", request, response);
  }

  @Test
  public void アカウントIDが登録されていなければ認証に失敗する() {
    loadCsrfToken();

    String accountId = "存在しないアカウントID";
    String password = "pass123-";

    RestMockHttpRequest request =
        post("/api/login")
            .setContentType("application/json")
            .setBody(Map.of("accountId", accountId, "password", password));
    HttpResponse response = sendRequest(request);

    assertEquals(401, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "authentication.failed");
    validateByOpenAPI("post-login", request, response);
  }

  @Test
  public void パスワードが一致しなければ認証に失敗する() throws Exception {
    loadCsrfToken();

    String accountId = "a2527b34-4c9a-4b81-8f60-4faa63372fbb";
    String password = "mistake123-";

    RestMockHttpRequest request =
        post("/api/login")
            .setContentType("application/json")
            .setBody(Map.of("accountId", accountId, "password", password));
    HttpResponse response = sendRequest(request);

    assertEquals(401, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "authentication.failed");
    validateByOpenAPI("post-login", request, response);
  }

  @Test
  public void アカウントIDが送信されなければ認証に失敗する() {
    loadCsrfToken();

    String password = "pass123-";
    RestMockHttpRequest request =
        post("/api/login").setContentType("application/json").setBody(Map.of("password", password));
    HttpResponse response = sendRequest(request);

    assertEquals(400, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "request");
    validateByOpenAPI("post-login", response);
  }

  @Test
  public void ログイン時のパスワードとして不正() {
    loadCsrfToken();

    String[] invalidPasswords = new String[] {"", "       ", "1234567"};
    String accountId = "a2527b34-4c9a-4b81-8f60-4faa63372fbb";

    Arrays.stream(invalidPasswords)
        .forEach(
            invalidPassword -> {
              RestMockHttpRequest request =
                  post("/api/login")
                      .setContentType("application/json")
                      .setBody(Map.of("accountId", accountId, "password", invalidPassword));
              HttpResponse response = sendRequest(request);

              assertEquals(400, response.getStatusCode());
              JsonAssert.with(response.getBodyString()).assertEquals("$.code", "request");
              validateByOpenAPI("post-login", request, response);
            });

    // 項目として送信しないケース
    RestMockHttpRequest request =
        post("/api/login")
            .setContentType("application/json")
            .setBody(Map.of("accountId", accountId));
    HttpResponse response = sendRequest(request);

    assertEquals(400, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "request");
    validateByOpenAPI("post-login", response);
  }

  @Test
  public void ログアウトできる() {
    loadCsrfToken();

    String accountId = "a2527b34-4c9a-4b81-8f60-4faa63372fbb";
    String password = "pass123-";

    RestMockHttpRequest loginRequest =
        post("/api/login")
            .setContentType("application/json")
            .setBody(Map.of("accountId", accountId, "password", password));
    HttpResponse loginResponse = sendRequest(loginRequest);
    assertEquals(200, loginResponse.getStatusCode());

    // ログインするとセッションがリフレッシュされるので再度取得する
    loadCsrfToken();

    RestMockHttpRequest request = post("/api/logout");
    HttpResponse response = sendRequest(request);
    assertEquals(204, response.getStatusCode());
    validateByOpenAPI("post-logout", request, response);
  }

  @Test
  public void ログインしていなければログアウトでエラーになる() {
    loadCsrfToken();

    RestMockHttpRequest request = post("/api/logout");
    HttpResponse response = sendRequest(request);

    assertEquals(403, response.getStatusCode());
    validateByOpenAPI("post-logout", response);
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "access.denied");
    validateByOpenAPI("post-logout", request, response);
  }
}
