package jp.fintan.mobile.santokuapp.sandbox.application.service.todo;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageNumber;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageSize;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todo;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoDescription;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoTitle;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoLimit;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoListByCursor;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoListByPage;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoSort;
import jp.fintan.mobile.santokuapp.sandbox.domain.repository.TodoRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class TodoService {

  private final TodoRepository todoRepository;
  private final TodoIdProvider idProvider;

  public TodoService(
      TodoRepository todoRepository,
      TodoIdProvider idProvider) {
    this.todoRepository = todoRepository;
    this.idProvider = idProvider;
  }

  public Todo createTodo(TodoTitle title, TodoDescription description) {
    TodoId id = idProvider.generate();
    Todo todo = new Todo(id, title, description);
    todoRepository.add(todo);
    return todo;
  }

  public Todo updateTodo(Todo todo) {
    return todoRepository.update(todo);
  }

  public void deleteTodo(TodoId todoId) {
    todoRepository.remove(todoId);
  }

  public TodoListByPage listByPage(PageNumber page, PageSize size, TodoSort sort) {
    return todoRepository.listByPage(page, size, sort);
  }

  public TodoListByCursor listByCursor(TodoId cursor, TodoLimit limit) {
    return todoRepository.listByCursor(cursor, limit);
  }

  public Todo findById(TodoId todoId) {
    return todoRepository.findById(todoId);
  }

  public boolean existsBy(TodoId todoId) {
    return todoRepository.existsBy(todoId);
  }
}
