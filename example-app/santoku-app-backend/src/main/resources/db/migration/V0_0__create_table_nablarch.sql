CREATE TABLE user_session
(
  session_id          VARCHAR(255) NOT NULL,
  session_object      BYTEA,
  expiration_datetime TIMESTAMP
);
