package jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence.entity;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sandbox_todo")
@Access(AccessType.FIELD)
public class TodoEntity {

  @Id private Long id;

  private String title;

  private String description;

  public Long getId() {
    return id;
  }

  public void setId(Long todoId) {
    this.id = todoId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
