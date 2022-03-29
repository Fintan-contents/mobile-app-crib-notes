package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor;

import java.util.Objects;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todos;

public class TodoListByCursor {
  public final TodoId nextCursor;
  public final Todos content;

  public TodoListByCursor(TodoId nextCursor, Todos content) {
    this.nextCursor = nextCursor;
    this.content = content;
  }

  public TodoId nextCursor() {
    return nextCursor;
  }

  public Todos content() {
    return content;
  }

  public Boolean hasNext() {
    return Objects.nonNull(nextCursor);
  }
}
