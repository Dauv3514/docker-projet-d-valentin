CREATE DATABASE IF NOT EXISTS bandnames;
USE bandnames;

CREATE TABLE adjectives (
  id INT AUTO_INCREMENT PRIMARY KEY,
  word VARCHAR(50) NOT NULL
);

CREATE TABLE nouns (
  id INT AUTO_INCREMENT PRIMARY KEY,
  word VARCHAR(50) NOT NULL
);

-- Insertion des adjectifs
INSERT INTO adjectives (word) VALUES
('Midnight'), 
('Last'), 
('Electric'), 
('Silent'), 
('Burning'), 
('Crazy'), 
('Golden'), 
('Lonely'), 
('Wild'), 
('Happy');

-- Insertion des noms
INSERT INTO nouns (word) VALUES
('Biscuits'), 
('Llamas'), 
('Dreamers'), 
('Wolves'), 
('Dragons'), 
('Tigers'), 
('Shadows'), 
('Rockets'), 
('Lions'), 
('Pirates');