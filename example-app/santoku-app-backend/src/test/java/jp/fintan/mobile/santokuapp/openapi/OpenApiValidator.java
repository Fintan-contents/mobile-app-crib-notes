package jp.fintan.mobile.santokuapp.openapi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.ByteArrayOutputStream;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.nio.ByteBuffer;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Flow;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.RestMockHttpRequest;
import org.openapi4j.core.validation.ValidationException;
import org.openapi4j.operation.validator.model.Request;
import org.openapi4j.operation.validator.model.Response;
import org.openapi4j.operation.validator.model.impl.Body;
import org.openapi4j.operation.validator.model.impl.DefaultRequest;
import org.openapi4j.operation.validator.model.impl.DefaultResponse;
import org.openapi4j.operation.validator.validation.RequestValidator;
import org.openapi4j.parser.OpenApi3Parser;
import org.openapi4j.parser.model.v3.OpenApi3;
import org.openapi4j.parser.model.v3.Operation;
import org.openapi4j.parser.model.v3.Parameter;

public class OpenApiValidator {

  private final OpenApi3 spec;

  private final RequestValidator validator;

  private final ObjectMapper objectMapper = new ObjectMapper();

  public OpenApiValidator(Path specFilePath) {
    try {
      spec = new OpenApi3Parser().parse(specFilePath.toUri().toURL(), true);
      validator = new RequestValidator(spec);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  public void validate(String operationId, RestMockHttpRequest request, HttpResponse response)
      throws ValidationException {
    validateRequest(operationId, request);
    validateResponse(operationId, response);
  }

  public void validateRequest(String operationId, RestMockHttpRequest request)
      throws ValidationException {
    String requestUri = request.getRequestUri();
    Request.Method method = Request.Method.getMethod(request.getMethod());
    DefaultRequest.Builder requestBuilder =
        new DefaultRequest.Builder(requestUri, method)
            .headers(formatHeaderMap(request.getHeaderMap()));
    int queryIndex = requestUri.indexOf("?");
    if (queryIndex != -1) {
      requestBuilder.query(requestUri.substring(queryIndex + 1));
    }
    if (request.getBody() != null) {
      Object body = request.getBody();
      if (body instanceof String) {
        requestBuilder.body(Body.from((String) body));
      } else {
        requestBuilder.body(Body.from(body));
      }
    }
    validateRequest(operationId, requestBuilder.build());
  }

  public void validateResponse(String operationId, HttpResponse response)
      throws ValidationException {
    validateResponse(
        operationId,
        new DefaultResponse.Builder(response.getStatusCode())
            .headers(formatHeaderMap(getResponseHeaders(response)))
            .body(Body.from(response.getBodyString()))
            .build());
  }

  public void validate(
      String operationId, HttpRequest request, java.net.http.HttpResponse<?> response)
      throws ValidationException, JsonProcessingException {
    validateRequest(operationId, request);
    validateResponse(operationId, response);
  }

  public void validateRequest(String operationId, HttpRequest request) throws ValidationException {
    String requestUri = request.uri().toString();
    Request.Method method = Request.Method.getMethod(request.method());
    DefaultRequest.Builder requestBuilder =
        new DefaultRequest.Builder(requestUri, method).headers(convertType(request.headers()));
    int queryIndex = requestUri.indexOf("?");
    if (queryIndex != -1) {
      requestBuilder.query(requestUri.substring(queryIndex + 1));
    }
    request
        .bodyPublisher()
        .ifPresent(p -> p.subscribe(new StringSubscriber(v -> requestBuilder.body(Body.from(v)))));
    validateRequest(operationId, requestBuilder.build());
  }

  public void validateResponse(String operationId, java.net.http.HttpResponse<?> response)
      throws ValidationException, JsonProcessingException {
    DefaultResponse.Builder responseBuilder =
        new DefaultResponse.Builder(response.statusCode()).headers(convertType(response.headers()));
    if (response.body() != null) {
      if (response.body() instanceof String) {
        responseBuilder.body(Body.from(objectMapper.readTree((String) response.body())));
      } else {
        responseBuilder.body(Body.from(response.body()));
      }
    }
    validateResponse(operationId, responseBuilder.build());
  }

  public void validateRequest(String operationId, Request request) throws ValidationException {
    Operation operation = spec.getOperationById(operationId);

    if (request.getMethod() == Request.Method.GET) {
      String query = request.getQuery();
      if (query != null) {
        // OpenAPI4Jでは未知のクエリパラメータを許容しているが、定義漏れを防ぐために、ここでは未定義であれば失敗させる
        int queryIndex = query.indexOf("?");
        if (queryIndex != -1) {
          List<Parameter> parameters = operation.getParameters();

          String[] queryParameters = query.substring(queryIndex + 1).split("&");
          List<String> queryParameterNames =
              Arrays.stream(queryParameters)
                  .map(queryParameter -> queryParameter.split("=")[0])
                  .collect(Collectors.toList());
          for (String queryParameterName : queryParameterNames) {
            if (parameters.stream().noneMatch(p -> p.getName().equals(queryParameterName))) {
              throw new ValidationException(
                  "Query parameter is not definition. parameter=[" + queryParameterName + "]");
            }
          }
        }
      }
    }
    validator.validate(request);
  }

  public void validateResponse(String operationId, Response response) throws ValidationException {
    Operation operation = spec.getOperationById(operationId);

    // 該当のステータスコードが無い場合、空として扱われて検証失敗とならないため、事前に検証しておく
    int statusCode = response.getStatus();
    if (!operation.getResponses().containsKey(String.valueOf(statusCode))) {
      throw new ValidationException("Response status code not found. value=[" + statusCode + "]");
    }

    validator.validate(response, getPathItem(operationId), operation);
  }

  private org.openapi4j.parser.model.v3.Path getPathItem(String operationId) {
    org.openapi4j.parser.model.v3.Path path = spec.getPathItemByOperationId(operationId);
    if (path == null) {
      throw new RuntimeException("Operation ID not found. value=[" + operationId + "]");
    }
    return path;
  }

  private Map<String, Collection<String>> formatHeaderMap(Map<String, String> originHeaders) {
    // Nablarchの仕様として、Headerに同じ属性が複数無い想定であるため、OpenAPI4jとインタフェースがマッチしない。
    // OpenAPI4jに渡しやすいように、インターフェースの変換を行う。
    Map<String, Collection<String>> headers = new HashMap<>();
    for (Map.Entry<String, String> entry : originHeaders.entrySet()) {
      headers.put(entry.getKey(), List.of(entry.getValue()));
    }
    return headers;
  }

  private Map<String, String> getResponseHeaders(HttpResponse response) {
    // Nablarchの仕様として、getHeaderMapでヘッダー一覧を取得すると、Content-Typeが設定されていなければ更新されてしまう
    // 元々のContent-Typeが設定されていなければ、ヘッダー一覧を取得後に自動設定されたContent-Typeを削除しておく
    String contentType = response.getHeader("Content-Type");
    Map<String, String> headerMap = response.getHeaderMap();
    HashMap<String, String> result = new HashMap<>(headerMap);
    if (contentType == null) {
      result.remove("Content-Type");
    }
    return result;
  }

  private Map<String, Collection<String>> convertType(HttpHeaders headers) {
    Map<String, Collection<String>> result = new HashMap<>();
    for (Map.Entry<String, List<String>> entry : headers.map().entrySet()) {
      result.put(entry.getKey(), entry.getValue());
    }
    return result;
  }

  private static class StringSubscriber implements Flow.Subscriber<ByteBuffer> {

    private final Consumer<String> consumer;

    private final List<ByteBuffer> buffers = new ArrayList<>();

    public StringSubscriber(Consumer<String> consumer) {
      this.consumer = consumer;
    }

    @Override
    public void onSubscribe(Flow.Subscription subscription) {
      subscription.request(Long.MAX_VALUE);
    }

    @Override
    public void onNext(ByteBuffer item) {
      buffers.add(item);
    }

    @Override
    public void onError(Throwable throwable) {
      throw new RuntimeException();
    }

    @Override
    public void onComplete() {
      ByteArrayOutputStream byteStream = new ByteArrayOutputStream();
      for (ByteBuffer buffer : buffers) {
        byteStream.writeBytes(buffer.array());
      }
      String value = new String(byteStream.toByteArray());
      consumer.accept(value);
    }
  }
}
