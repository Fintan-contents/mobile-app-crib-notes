package jp.fintan.mobile.santokuapp.sandbox.application.service.todo;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;

public interface TodoIdProvider {

  TodoId generate();
}
