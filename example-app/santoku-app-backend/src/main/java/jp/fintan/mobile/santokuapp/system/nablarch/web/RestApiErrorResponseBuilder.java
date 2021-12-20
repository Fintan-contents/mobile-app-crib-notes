package jp.fintan.mobile.santokuapp.system.nablarch.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import java.util.Map;
import nablarch.core.message.Message;
import nablarch.core.message.MessageLevel;
import nablarch.core.message.MessageUtil;
import nablarch.fw.web.HttpResponse;

public class RestApiErrorResponseBuilder {

  public static HttpResponse build(HttpResponse.Status httpStatus, String errorCode) {
    HttpResponse response = new HttpResponse(httpStatus.getStatusCode());

    response.setContentType("application/json");

    Map<String, String> value = new HashMap<>();
    value.put("code", errorCode);
    value.put("message", resolveErrorMessage(errorCode));
    try {
      byte[] json = new ObjectMapper().writeValueAsBytes(value);
      response.write(json);
      return response;
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
  }

  private static String resolveErrorMessage(String errorCode) {
    Message message = MessageUtil.createMessage(MessageLevel.ERROR, buildMessageId(errorCode));
    return message.formatMessage();
  }

  private static String buildMessageId(String errorCode) {
    return "backend.errors." + errorCode;
  }
}
