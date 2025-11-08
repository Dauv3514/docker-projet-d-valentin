CREATE DATABASE IF NOT EXISTS musicdb;
USE musicdb;

CREATE TABLE adjectives (
  id INT AUTO_INCREMENT PRIMARY KEY,
  word VARCHAR(50) NOT NULL
);

CREATE TABLE nouns (
  id INT AUTO_INCREMENT PRIMARY KEY,
  word VARCHAR(50) NOT NULL
);

INSERT INTO adjectives (word) VALUES ('Midnight'), ('Last'), ('Electric'), ('Silent');
INSERT INTO nouns (word) VALUES ('Biscuits'), ('Llamas'), ('Dreamers'), ('Wolves');