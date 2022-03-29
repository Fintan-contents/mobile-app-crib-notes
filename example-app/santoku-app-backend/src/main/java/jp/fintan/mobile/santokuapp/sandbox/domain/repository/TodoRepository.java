package jp.fintan.mobile.santokuapp.sandbox.domain.repository;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageNumber;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageSize;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todo;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoLimit;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoListByCursor;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoListByPage;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoSort;

public interface TodoRepository {

  void add(Todo todo);

  Todo update(Todo todo);

  void remove(TodoId todoId);

  TodoListByPage listByPage(PageNumber page, PageSize size, TodoSort sort);

  TodoListByCursor listByCursor(TodoId cursor, TodoLimit limit);

  Todo findById(TodoId todoId);

  boolean existsBy(TodoId todoId);
}
