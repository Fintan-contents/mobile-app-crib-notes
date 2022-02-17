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

CREATE TABLE account_device_token
(
  account_id VARCHAR(255) NOT NULL,
  device_token   VARCHAR(255)  NOT NULL,
  created_at TIMESTAMP NOT NULL,
  PRIMARY KEY (account_id, device_token),
  FOREIGN KEY (account_id) REFERENCES account (account_id)
);
