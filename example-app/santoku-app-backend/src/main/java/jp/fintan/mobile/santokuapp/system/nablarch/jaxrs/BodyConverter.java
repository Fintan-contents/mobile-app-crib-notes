package jp.fintan.mobile.santokuapp.system.nablarch.jaxrs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import java.io.IOException;
import java.io.Reader;
import jp.fintan.mobile.santokuapp.system.nablarch.web.RestApiErrorResponseBuilder;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.fw.web.HttpErrorResponse;
import nablarch.fw.web.HttpResponse;
import nablarch.integration.jaxrs.jackson.Jackson2BodyConverter;

public class BodyConverter extends Jackson2BodyConverter {

  private static final Logger LOGGER = LoggerManager.get(BodyConverter.class);

  @Override
  protected void configure(ObjectMapper objectMapper) {
    super.configure(objectMapper);

    // Date and Time APIをJacksonで変換するための設定
    objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    objectMapper.registerModule(new JavaTimeModule());
  }

  @Override
  protected Object readValue(Reader src, Class<?> valueType) {
    try {
      return super.readValue(src, valueType);
    } catch (IOException e) {
      LOGGER.logInfo("failed to read request. cause = [" + e.getMessage() + ']');
      throw new HttpErrorResponse(
          RestApiErrorResponseBuilder.build(HttpResponse.Status.BAD_REQUEST, "request"), e);
    }
  }
}
