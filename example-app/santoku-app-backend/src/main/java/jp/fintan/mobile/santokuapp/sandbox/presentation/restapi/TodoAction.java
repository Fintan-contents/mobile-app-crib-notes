package jp.fintan.mobile.santokuapp.sandbox.presentation.restapi;

import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import jp.fintan.mobile.santokuapp.sandbox.application.TodoNotFoundException;
import jp.fintan.mobile.santokuapp.sandbox.application.service.todo.TodoService;
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

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@SystemRepositoryComponent
@Path("/sandbox/todos")
public class TodoAction {
  private final TodoService todoService;

  public TodoAction(TodoService todoService) {
    this.todoService = todoService;
  }

  @GET
  @Path("/")
  @Produces(MediaType.APPLICATION_JSON)
  public ListTodoByPageResponse list(HttpRequest request, ExecutionContext context) {
    PageNumber page = new PageNumber(getLongParamFromRequest(request, "page"));
    PageSize size = new PageSize(getLongParamFromRequest(request, "size"));
    TodoSort sort = new TodoSort(getStringParamFromRequest(request, "sort"));
    TodoListByPage todoListPage = todoService.listByPage(page, size, sort);
    return new ListTodoByPageResponse(todoListPage);
  }

  @GET
  @Path("/infinite")
  @Produces(MediaType.APPLICATION_JSON)
  public ListTodoByCursorResponse listByCursor(HttpRequest request, ExecutionContext context) {
    Long cursor = getLongParamFromRequest(request, "cursor");
    TodoId todoId = Objects.nonNull(cursor) ? new TodoId(cursor) : null;
    TodoLimit limit = new TodoLimit(getLongParamFromRequest(request, "limit"));
    TodoListByCursor todoListCursor = todoService.listByCursor(todoId, limit);
    return new ListTodoByCursorResponse(todoListCursor);
  }

  @POST
  @Path("/")
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public TodoResponse post(HttpRequest request, ExecutionContext context, PostTodoRequest requestBody) {
    TodoTitle title = new TodoTitle(requestBody.title);
    TodoDescription description = new TodoDescription(requestBody.description);
    Todo todo = todoService.createTodo(title, description);
    return new TodoResponse(todo);
  }

  @GET
  @Path("/{id:\\d+}")
  @Produces(MediaType.APPLICATION_JSON)
  public TodoResponse get(HttpRequest request, ExecutionContext context) {
    Long id = getLongParamFromRequest(request, "id");
    TodoId todoId = new TodoId(id);
    Todo todo = todoService.findById(todoId);
    if (todo == null) {
      throw new TodoNotFoundException();
    } else {
      return new TodoResponse(todo);
    }
  }

  @PUT
  @Path("/{id:\\d+}")
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public TodoResponse put(HttpRequest request, ExecutionContext context, PutTodoRequest requestBody) {
    Long id = getLongParamFromRequest(request, "id");
    TodoId todoId = new TodoId(id);
    Todo todo = todoService.findById(todoId);
    Todo newTodo = new Todo(
      todo.todoId(),
      requestBody.title != null ? new TodoTitle(requestBody.title) : todo.title(),
      requestBody.description != null ? new TodoDescription(requestBody.description) : todo.description()
    );
    Todo updatedTodo = todoService.updateTodo(newTodo);
    return new TodoResponse(updatedTodo);
  }

  @DELETE
  @Path("/{id:\\d+}")
  public void delete(HttpRequest request, ExecutionContext context) {
    Long id = getLongParamFromRequest(request, "id");
    TodoId todoId = new TodoId(id);
    todoService.deleteTodo(todoId);
    return;
  }

  private static String getStringParamFromRequest(HttpRequest request, String key) {
    var param = request.getParam(key);
    return param != null && param.length > 0 ? param[0] : null;
  }

  private static Long getLongParamFromRequest(HttpRequest request, String key) {
    try {
      String param = getStringParamFromRequest(request, key);
      if (param != null) {
        return Long.parseLong(param);
      } else {
        return null;
      }
    } catch (NumberFormatException e) {
      return null;
    }
  }

  public static class PostTodoRequest {
    @NotNull
    public String title;

    @NotNull
    public String description;
  }

  public static class PutTodoRequest {
    public String title;

    public String description;
  }

  public static class TodoResponse {
    public final Long id;
    public final String title;
    public final String description;

    public TodoResponse(Todo todo) {
      this.id = todo.todoId().value();
      this.title = todo.title().value();
      this.description = todo.description().value();
    }
  }

  public static class ListTodoByPageResponse {
    public final Long number;
    public final Long size;
    public final String sort;
    public final Long totalElements;
    public final Long totalPages;
    public final List<TodoResponse> content;
    public final Long numberOfElements;
    public final Boolean empty;
    public final Boolean first;
    public final Boolean last;

    public ListTodoByPageResponse(TodoListByPage page) {
      this.number = page.number.value();
      this.size = page.size.value();
      this.sort = page.sort.value();
      this.totalElements = page.totalElements.value();
      this.totalPages = page.totalPages.value();
      this.content = page.content.value().stream().map(TodoResponse::new).collect(Collectors.toList());
      this.numberOfElements = page.numberOfElements.value();
      this.empty = page.empty();
      this.first = page.first();
      this.last = page.last();
    }
  }

  public static class ListTodoByCursorResponse {
    public final Boolean hasNext;
    public final Long nextCursor;
    public final List<TodoResponse> content;

    public ListTodoByCursorResponse(TodoListByCursor cursor) {
      this.hasNext = cursor.hasNext();
      this.nextCursor = Objects.nonNull(cursor.nextCursor) ? cursor.nextCursor.value() : null;
      this.content = cursor.content.value().stream().map(TodoResponse::new).collect(Collectors.toList());
    }
  }
}
