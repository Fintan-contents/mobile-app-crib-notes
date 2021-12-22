package jp.fintan.mobile.santokuapp.system.nablarch.threadcontext;

import javax.servlet.http.HttpServletRequest;
import nablarch.common.handler.threadcontext.ThreadContextAttribute;
import nablarch.core.ThreadContext;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.servlet.ServletExecutionContext;

public class RequestIdAttribute implements ThreadContextAttribute<Object> {

  @Override
  public String getKey() {
    return ThreadContext.REQUEST_ID_KEY;
  }

  @Override
  public Object getValue(Object req, ExecutionContext ctx) {
    if (ctx instanceof ServletExecutionContext) {
      HttpServletRequest request = ((ServletExecutionContext) ctx).getServletRequest();
      String query = request.getQueryString();
      if (query != null) {
        return request.getRequestURI() + "?" + query;
      }
      return request.getRequestURI();
    }
    return null;
  }
}
