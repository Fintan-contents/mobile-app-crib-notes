package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.NumberOfElements;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageNumber;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageSize;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.TotalElements;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.TotalPages;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todos;

public class TodoListByPage {
  public final PageNumber number;
  public final PageSize size;
  public final TodoSort sort;
  public final TotalElements totalElements;
  public final TotalPages totalPages;
  public final Todos content;
  public final NumberOfElements numberOfElements;

  public TodoListByPage(PageNumber number, PageSize size, TodoSort sort, TotalElements totalElements, TotalPages totalPages, Todos todos) {
    this.number = number;
    this.size = size;
    this.sort = sort;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
    this.content = todos;
    this.numberOfElements = new NumberOfElements((long)todos.value().size());
  }

  public PageNumber number() {
    return number;
  }

  public PageSize size() {
    return size;
  }

  public TodoSort sort() {
    return sort;
  }

  public TotalElements totalElements() {
    return totalElements;
  }

  public TotalPages totalPages() {
    return totalPages;
  }

  public Todos content() {
    return content;
  }

  public NumberOfElements numberOfElements() {
    return numberOfElements;
  }

  public Boolean empty() {
    return content.value().isEmpty();
  }

  public Boolean first() {
    return number.value() == 1;
  }

  public Boolean last() {
    return number.value() >= totalPages.value();
  }
}
