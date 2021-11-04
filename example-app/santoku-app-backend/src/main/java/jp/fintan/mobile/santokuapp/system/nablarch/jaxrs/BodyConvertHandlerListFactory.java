package jp.fintan.mobile.santokuapp.system.nablarch.jaxrs;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import nablarch.fw.Handler;
import nablarch.fw.jaxrs.BodyConvertHandler;
import nablarch.fw.jaxrs.JaxRsHandlerListFactory;
import nablarch.fw.web.HttpRequest;

public class BodyConvertHandlerListFactory implements JaxRsHandlerListFactory {

  private final List<Handler<HttpRequest, ?>> handlers;

  private List<Handler<HttpRequest, ?>> preHandlers = Collections.emptyList();

  public BodyConvertHandlerListFactory() {
    BodyConvertHandler bodyConvertHandlers = new BodyConvertHandler();
    // Date and Time APIをJacksonで変換するためJackson2BodyConverterを拡張
    bodyConvertHandlers.addBodyConverter(new BodyConverter());
    // "multipart/form-data"に対応
    bodyConvertHandlers.addBodyConverter(new MultipartBodyConverter());

    handlers = List.of(bodyConvertHandlers);
  }

  @Override
  public List<Handler<HttpRequest, ?>> createObject() {
    return Stream.concat(preHandlers.stream(), handlers.stream())
        .collect(Collectors.toUnmodifiableList());
  }

  public void setPreHandlers(List<Handler<HttpRequest, ?>> preHandlers) {
    this.preHandlers = preHandlers;
  }
}
