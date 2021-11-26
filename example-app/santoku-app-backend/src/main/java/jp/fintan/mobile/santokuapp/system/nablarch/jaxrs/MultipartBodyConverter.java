package jp.fintan.mobile.santokuapp.system.nablarch.jaxrs;

import javax.ws.rs.core.MediaType;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.integration.jaxrs.jackson.Jackson2BodyConverter;

public class MultipartBodyConverter extends Jackson2BodyConverter {

  @Override
  public Object read(HttpRequest request, ExecutionContext executionContext) {
    // "multipart/form-data"ではリクエストボディにJSONデータが無いので、スキップするようにOverrideしておく
    return null;
  }

  @Override
  public boolean isConvertible(String mediaType) {
    return mediaType.startsWith(MediaType.MULTIPART_FORM_DATA);
  }
}
