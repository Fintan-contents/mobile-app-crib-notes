package jp.fintan.mobile.santokuapp.sandbox.domain.model.paging;

import java.util.Optional;
import java.util.stream.Stream;

public enum SortOrder {
  ASC("asc"),
  DESC("desc");

  private final String value;

  SortOrder(String value) {
    this.value = value;
  }

  public String value() {
    return value;
  }

  public static Optional<SortOrder> fromString(String str) {
    return Stream.of(SortOrder.values())
        .filter(e -> str.equalsIgnoreCase(e.value()))
        .findFirst();
  }
}
