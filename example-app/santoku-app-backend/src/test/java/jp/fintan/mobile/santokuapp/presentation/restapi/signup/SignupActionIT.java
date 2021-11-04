package jp.fintan.mobile.santokuapp.presentation.restapi.signup;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import com.jayway.jsonassert.JsonAssert;
import com.jayway.jsonpath.JsonPath;
import java.util.Arrays;
import java.util.Map;
import jp.fintan.mobile.santokuapp.presentation.restapi.RestIntegrationTestBase;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import org.junit.Test;

public class SignupActionIT extends RestIntegrationTestBase {

  @Test
  public void アカウントを登録できる() throws Exception {
    loadCsrfToken();

    String nickname = "testUser1";
    String password = "password";

    RestMockHttpRequest request =
        post("/api/signup")
            .setContentType("application/json")
            .setBody(Map.of("nickname", nickname, "password", password));
    HttpResponse response = sendRequest(request);

    assertEquals(201, response.getStatusCode());
    validateByOpenAPI("post-signup", request, response);

    // 登録したアカウントでログインできること
    String accountId = JsonPath.parse(response.getBodyString()).read("$.accountId");
    login(accountId, password);

    // 同じユーザー名で新しくサインアップできること
    HttpResponse otherSignupResponse = sendRequest(request);

    assertEquals(201, otherSignupResponse.getStatusCode());
    validateByOpenAPI("post-signup", request, otherSignupResponse);
    String otherAccountId = JsonPath.parse(otherSignupResponse.getBodyString()).read("$.accountId");
    login(otherAccountId, password);

    assertNotEquals(accountId, otherAccountId);
  }

  @Test
  public void アカウント登録のユーザー名として不正() {
    loadCsrfToken();

    // 形式が不正
    String[] invalidNicknames = new String[] {"", " "};
    String password = "pass123-";

    Arrays.stream(invalidNicknames)
        .forEach(
            invalidNickname -> {
              RestMockHttpRequest request =
                  post("/api/signup")
                      .setContentType("application/json")
                      .setBody(Map.of("nickname", invalidNickname, "password", password));
              HttpResponse response = sendRequest(request);

              assertEquals(400, response.getStatusCode());
              JsonAssert.with(response.getBodyString()).assertEquals("$.code", "request");
              validateByOpenAPI("post-signup", request, response);
            });

    // 項目として送信しないケース
    RestMockHttpRequest request =
        post("/api/signup")
            .setContentType("application/json")
            .setBody(Map.of("password", password));
    HttpResponse response = sendRequest(request);

    assertEquals(400, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "request");
    validateByOpenAPI("post-signup", response);
  }

  @Test
  public void アカウント登録のパスワードとして不正() {
    loadCsrfToken();

    String nickname = "testUser1";
    String[] invalidPasswords = new String[] {"", "       ", "1234567"};

    Arrays.stream(invalidPasswords)
        .forEach(
            invalidPassword -> {
              RestMockHttpRequest request =
                  post("/api/signup")
                      .setContentType("application/json")
                      .setBody(Map.of("nickname", nickname, "password", invalidPassword));
              HttpResponse response = sendRequest(request);

              assertEquals(400, response.getStatusCode());
              JsonAssert.with(response.getBodyString()).assertEquals("$.code", "request");
              validateByOpenAPI("post-signup", request, response);
            });

    // 項目として送信しないケース
    RestMockHttpRequest request =
        post("/api/signup")
            .setContentType("application/json")
            .setBody(Map.of("nickname", nickname));
    HttpResponse response = sendRequest(request);

    assertEquals(400, response.getStatusCode());
    JsonAssert.with(response.getBodyString()).assertEquals("$.code", "request");
    validateByOpenAPI("post-signup", response);
  }
}
