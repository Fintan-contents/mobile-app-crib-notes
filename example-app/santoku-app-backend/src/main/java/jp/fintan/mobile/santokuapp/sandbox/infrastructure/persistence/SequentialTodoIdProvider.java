package jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence;

import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import jp.fintan.mobile.santokuapp.sandbox.application.service.todo.TodoIdProvider;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence.entity.TodoIdSequence;
import nablarch.common.dao.UniversalDao;

@SystemRepositoryComponent
public class SequentialTodoIdProvider implements TodoIdProvider {

  @Override
  public TodoId generate() {
    TodoIdSequence todoIdSequence = UniversalDao.findBySqlFile(
      TodoIdSequence.class,
      "db.sql.sandbox.todoIdSequence#NEXT_TODO_ID",
      new Object[0]
    );
    return new TodoId(todoIdSequence.getTodoId());
  }
}
