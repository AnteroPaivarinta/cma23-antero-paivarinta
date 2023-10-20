CREATE TABLE "PRODUCT" (
  id varchar(255) PRIMARY KEY,
  price varchar(255),
  category varchar(255),
  name varchar(255)
);


CREATE TABLE USER (
  id varchar(255) PRIMARY KEY,
  firstName varchar(255),
  lastName varchar(255),
  email varchar(255),
  isAdmin boolean,
  password varchar(255)
),

CREATE TABLE "ORDER" (
  id varchar(255) PRIMARY KEY,
  product_id varchar(255),
  ORDER_TIME varchar(255),
  USER_ID varchar(255),
  FOREIGN KEY (USER_ID) REFERENCES "USER"(id),
  FOREIGN KEY (product_id) REFERENCES "PRODUCT"(id)
);