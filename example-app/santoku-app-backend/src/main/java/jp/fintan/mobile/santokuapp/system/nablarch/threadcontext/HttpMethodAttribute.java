package jp.fintan.mobile.santokuapp.system.nablarch.threadcontext;

import nablarch.common.handler.threadcontext.ThreadContextAttribute;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

public class HttpMethodAttribute implements ThreadContextAttribute<HttpRequest> {

  public static final String ATTRIBUTE_KEY = HttpMethodAttribute.class.getName();

  @Override
  public String getKey() {
    return ATTRIBUTE_KEY;
  }

  @Override
  public Object getValue(HttpRequest req, ExecutionContext ctx) {
    return req.getMethod();
  }
}
