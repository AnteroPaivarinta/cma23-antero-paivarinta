

CREATE TABLE Product (
  id varchar(255) PRIMARY KEY,
  price varchar(255),
  category varchar(255),
  name varchar(255)
);

CREATE TABLE Account (
  id varchar(255) PRIMARY KEY,
  firstname varchar(255),
  lastname varchar(255),
  email varchar(255),
  isadmin boolean,
  password varchar(255)
);

CREATE TABLE Orderclass (
  id varchar(255) PRIMARY KEY,
  product_id varchar(255),
  ORDER_TIME varchar(255),
  USER_ID varchar(255),
  FOREIGN KEY (USER_ID) REFERENCES account(id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);