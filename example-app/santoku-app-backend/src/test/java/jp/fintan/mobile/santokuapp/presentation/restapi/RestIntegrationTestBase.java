package jp.fintan.mobile.santokuapp.presentation.restapi;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.file.Path;
import java.util.Map;
import jp.fintan.mobile.santokuapp.openapi.OpenApiValidator;
import jp.fintan.mobile.santokuapp.system.nablarch.FlywayExecutor;
import nablarch.core.repository.SystemRepository;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import nablarch.test.core.http.SimpleRestTestSupport;
import org.junit.Before;
import org.openapi4j.core.validation.ValidationException;

public abstract class RestIntegrationTestBase extends SimpleRestTestSupport {

  private final OpenApiValidator openApiValidator =
      new OpenApiValidator(Path.of("../api-document/openapi.yaml"));

  private final ObjectMapper om = new ObjectMapper();

  @Before
  public void refreshDB() {
    FlywayExecutor flywayExecutor = SystemRepository.get("dbMigration");
    flywayExecutor.migrate(true);
  }

  public void loadCsrfToken() {
    RestMockHttpRequest request = get("/api/csrf_token");
    HttpResponse response = sendRequest(request);
    assertEquals(200, response.getStatusCode());
  }

  public void login(String accountId, String password) throws Exception {
    loadCsrfToken();

    RestMockHttpRequest request =
        post("/api/login")
            .setContentType("application/json")
            .setBody(Map.of("accountId", accountId, "password", password));
    HttpResponse response = sendRequest(request);
    assertEquals(200, response.getStatusCode());
    JsonNode root = om.readTree(response.getBodyString());
    assertEquals("COMPLETE", root.get("status").asText());

    loadCsrfToken();
  }

  public void logout() {
    RestMockHttpRequest request = post("/api/logout");
    HttpResponse response = sendRequest(request);
    assertEquals(204, response.getStatusCode());

    loadCsrfToken();
  }

  public void validateByOpenAPI(
      String operationId, RestMockHttpRequest request, HttpResponse response) {
    try {
      openApiValidator.validate(operationId, request, response);
    } catch (ValidationException e) {
      fail(e.toString());
    }
  }

  public void validateByOpenAPI(String operationId, HttpResponse response) {
    try {
      openApiValidator.validateResponse(operationId, response);
    } catch (ValidationException e) {
      fail(e.toString());
    }
  }
}
