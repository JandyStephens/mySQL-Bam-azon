CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("wet willy","tangible",7, 3);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("noogie","tangible",13,9);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("flat tire","2",4,19);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("fart sandwich","intangible",5,13);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("wedgie","tangible",3,7);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("atomic wedgie","tangible",21,3);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("indian burn","tangible",4,2);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("spitball","tangible",6,6);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("shoe-lacing","tangible",11,1);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUE ("mooning","intangible",1,7);