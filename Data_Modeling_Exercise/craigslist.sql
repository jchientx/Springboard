CREATE DATABASE craigslist;

\c craigslist;

CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    region_id INTEGER REFERENCES regions
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    location TEXT NOT NULL,
    region_id INTEGER REFERENCES regions,
    user_id INTEGER REFERENCES users,
    category_id INTEGER REFERENCES categories
);

INSERT INTO regions (name)
VALUES 
('Seattle'),
('Austin');

INSERT INTO users (username, password, region_id)
VALUES 
('asadfe', 'dfgbbb', 2),
('rfvtgb47', 'lkjh321', 1);

INSERT INTO categories (name)
VALUES
('Travel'),
('Joke'),
('Stock');

INSERT INTO posts (title, text, location, region_id, user_id, category_id)
VALUES
('Heart disease', 'Chest pain', 'SA', 1, 2, 3),
('COVID-19', 'Fever or chills','NC', 2, 1, 1),
('Flu', 'Cough', 'WC', 1, 2, 2);