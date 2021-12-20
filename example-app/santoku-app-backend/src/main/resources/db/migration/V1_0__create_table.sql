CREATE TABLE account
(
  account_id VARCHAR(255) NOT NULL,
  nickname  VARCHAR(50)  NOT NULL,
  PRIMARY KEY (account_id)
);

CREATE TABLE password
(
  account_id VARCHAR(255) NOT NULL,
  password   VARCHAR(50)  NOT NULL,
  PRIMARY KEY (account_id),
  FOREIGN KEY (account_id) REFERENCES account (account_id)
);
