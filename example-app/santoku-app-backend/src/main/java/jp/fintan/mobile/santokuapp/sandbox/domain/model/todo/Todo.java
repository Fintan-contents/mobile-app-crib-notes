package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo;

public class Todo {
  private final TodoId id;
  private final TodoTitle title;
  private final TodoDescription description;

  public Todo(TodoId id, TodoTitle title, TodoDescription description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  public TodoId todoId() {
    return id;
  }

  public TodoTitle title() {
    return title;
  }

  public TodoDescription description() {
    return description;
  }
}
