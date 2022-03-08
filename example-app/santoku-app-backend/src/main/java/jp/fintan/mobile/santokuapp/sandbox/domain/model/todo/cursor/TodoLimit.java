package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor;

import java.util.Objects;

import jp.fintan.mobile.santokuapp.domain.model.core.LongValue;

public class TodoLimit extends LongValue {
  private static final Long DEFAULT_LIMIT = 20L;

  public TodoLimit(Long value) {
    super(Objects.nonNull(value) ? value : DEFAULT_LIMIT);
  }
}
