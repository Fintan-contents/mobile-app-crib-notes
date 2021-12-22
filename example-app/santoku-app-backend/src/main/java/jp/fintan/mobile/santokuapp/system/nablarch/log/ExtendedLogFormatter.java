package jp.fintan.mobile.santokuapp.system.nablarch.log;

import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.system.nablarch.threadcontext.HttpMethodAttribute;
import jp.fintan.mobile.santokuapp.system.nablarch.threadcontext.SessionIdAttribute;
import nablarch.core.ThreadContext;
import nablarch.core.log.LogItem;
import nablarch.core.log.basic.BasicLogFormatter;
import nablarch.core.log.basic.LogContext;
import nablarch.core.log.basic.ObjectSettings;

public class ExtendedLogFormatter extends BasicLogFormatter {

  @Override
  protected Map<String, LogItem<LogContext>> getLogItems(ObjectSettings settings) {
    Map<String, LogItem<LogContext>> logItems = super.getLogItems(settings);
    logItems.put("$httpMethod$", (c) -> fromThreadContext(HttpMethodAttribute.ATTRIBUTE_KEY));
    logItems.put("$sessionId$", (c) -> fromThreadContext(SessionIdAttribute.ATTRIBUTE_KEY));
    logItems.put("$threadName$", (c) -> Thread.currentThread().getName());

    return logItems.entrySet().stream()
        .collect(
            Collectors.toMap(Entry::getKey, e -> new NullToHyphenLogItemWrapper(e.getValue())));
  }

  private String fromThreadContext(String key) {
    Object obj = ThreadContext.getObject(key);
    return obj == null ? null : obj.toString();
  }

  private static class NullToHyphenLogItemWrapper implements LogItem<LogContext> {

    private final LogItem<LogContext> logItem;

    public NullToHyphenLogItemWrapper(LogItem<LogContext> logItem) {
      this.logItem = logItem;
    }

    @Override
    public String get(LogContext context) {
      String log = logItem.get(context);
      return log == null ? "-" : log;
    }
  }
}
