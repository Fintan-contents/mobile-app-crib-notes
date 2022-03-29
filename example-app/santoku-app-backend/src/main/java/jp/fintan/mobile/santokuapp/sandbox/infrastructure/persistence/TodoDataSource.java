package jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageNumber;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageSize;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.TotalElements;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.TotalPages;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todo;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoDescription;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoTitle;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todos;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoLimit;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoListByCursor;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoListByPage;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoSort;
import jp.fintan.mobile.santokuapp.sandbox.domain.repository.TodoRepository;
import jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence.entity.TodoEntity;
import nablarch.common.dao.EntityList;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.Pagination;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class TodoDataSource implements TodoRepository {

  @Override
  public void add(Todo todo) {
    TodoEntity todoEntity = new TodoEntity();
    todoEntity.setId(todo.todoId().value());
    todoEntity.setTitle(todo.title().value());
    todoEntity.setDescription(todo.description().value());

    UniversalDao.insert(todoEntity);
  }

  @Override
  public Todo update(Todo todo) {
    TodoEntity todoEntity = new TodoEntity();
    todoEntity.setId(todo.todoId().value());
    todoEntity.setTitle(todo.title().value());
    todoEntity.setDescription(todo.description().value());

    UniversalDao.update(todoEntity);
    return findById(todo.todoId());
  }

  @Override
  public void remove(TodoId todoId) {
    TodoEntity todoEntity = new TodoEntity();
    todoEntity.setId(todoId.value());

    UniversalDao.delete(todoEntity);
  }

  @Override
  public TodoListByPage listByPage(PageNumber page, PageSize size, TodoSort sort) {
    EntityList<TodoEntity> todoEntities = UniversalDao
        .page(page.value())
        .per(size.value())
        .findAllBySqlFile(
            TodoEntity.class,
            "db.sql.sandbox.todo#find_all",
            Map.of("sortId", String.format("%s_%s", sort.key.value(), sort.order.value())));
    return toTodoListPage(todoEntities, page, size, sort);
  }

  @Override
  public TodoListByCursor listByCursor(TodoId cursor, TodoLimit limit) {
    var params = new HashMap<String, Object>();
    params.put("todoId", Objects.nonNull(cursor) ? cursor.value() : null);
    EntityList<TodoEntity> todoEntities = UniversalDao
        .page(1)
        .per(limit.value())
        .findAllBySqlFile(
            TodoEntity.class,
            "db.sql.sandbox.todo#find_all_from_cursor",
            params
      );
    return toTodoListCursor(todoEntities);
  }

  @Override
  public Todo findById(TodoId todoId) {
    try {
      TodoEntity todoEntity = UniversalDao.findById(TodoEntity.class, todoId.value());
      return toTodo(todoEntity);
    } catch (NoDataException e) {
      return null;
    }
  }

  @Override
  public boolean existsBy(TodoId todoId) {
    try {
      UniversalDao.findById(TodoEntity.class, todoId.value());
      return true;
    } catch (NoDataException e) {
      return false;
    }
  }

  private Todo toTodo(TodoEntity todoEntity) {
    TodoId id = new TodoId(todoEntity.getId());
    TodoTitle title = new TodoTitle(todoEntity.getTitle());
    TodoDescription description = new TodoDescription(todoEntity.getDescription());

    return new Todo(id, title, description);
  }

  private TodoListByPage toTodoListPage(EntityList<TodoEntity> entities, PageNumber page, PageSize size, TodoSort sort) {
    Pagination pagination = entities.getPagination();
    TotalElements totalElements = new TotalElements((long)pagination.getMaxResultCount());
    TotalPages totalPages = new TotalPages((long)pagination.getPageCount());
    Todos content = new Todos(entities.stream().map(this::toTodo).collect(Collectors.toList()));
    return new TodoListByPage(page, size, sort, totalElements, totalPages, content);
  }

  private TodoListByCursor toTodoListCursor(EntityList<TodoEntity> entities) {
    Todos content = new Todos(entities.stream().map(this::toTodo).collect(Collectors.toList()));
    TodoId nextCursor = null;
    if (!content.value().isEmpty()) {
      Todo lastTodo = content.value().get(content.value().size() - 1);
      nextCursor = new TodoId(lastTodo.todoId().value());
    }
    return new TodoListByCursor(nextCursor, content);
  }
}
