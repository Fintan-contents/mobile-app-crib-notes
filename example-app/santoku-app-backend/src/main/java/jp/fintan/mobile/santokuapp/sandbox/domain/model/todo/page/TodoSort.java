package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page;

import java.util.Objects;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.SortOrder;

public class TodoSort {
  public static final TodoSortKey DEFAULT_KEY = TodoSortKey.ID;
  public static final SortOrder DEFAULT_ORDER = SortOrder.ASC;

  public final TodoSortKey key;
  public final SortOrder order;

  public TodoSort(String commaSeparatedKey) {
    if (Objects.isNull(commaSeparatedKey)) {
      this.key = DEFAULT_KEY;
      this.order = DEFAULT_ORDER;
      return;
    }
    String[] keyAndOrder = commaSeparatedKey.split(",");
    if (keyAndOrder.length == 1) {
      String requestKey = keyAndOrder[0];
      this.key = TodoSortKey.fromString(requestKey).orElse(DEFAULT_KEY);
      this.order = SortOrder.ASC;
    } else if (keyAndOrder.length == 2) {
      String requestKey = keyAndOrder[0];
      String requestOrder = keyAndOrder[1];
      this.key = TodoSortKey.fromString(requestKey).orElse(DEFAULT_KEY);
      this.order = SortOrder.fromString(requestOrder).orElse(DEFAULT_ORDER);
    } else {
      key = DEFAULT_KEY;
      order = DEFAULT_ORDER;
    }
  }

  public String value() {
    return String.format("%s,%s", key.value(), order.value());
  }
}
