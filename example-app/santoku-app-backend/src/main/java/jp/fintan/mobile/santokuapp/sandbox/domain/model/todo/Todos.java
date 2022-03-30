package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo;

import java.util.List;

import jp.fintan.mobile.santokuapp.domain.model.core.ListValue;

public class Todos extends ListValue<Todo> {
  public Todos(List<Todo> value) {
    super(value);
  }
}
