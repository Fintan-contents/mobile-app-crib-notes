package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page;

import java.util.Optional;
import java.util.stream.Stream;

public enum TodoSortKey {
  ID("id"),
  TITLE("title");

  private final String value;

  TodoSortKey(String value) {
    this.value = value;
  }

  public String value() {
    return value;
  }

  public static Optional<TodoSortKey> fromString(String str) {
    return Stream.of(TodoSortKey.values())
        .filter(e -> str.equalsIgnoreCase(e.value()))
        .findFirst();
  }
}
