CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100), 
    devoured BOOLEAN DEFAULT false,
    burger_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);