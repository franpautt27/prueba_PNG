CREATE DATABASE moviesdb

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    movieName VARCHAR(255) UNIQUE,
    movieLanguage VARCHAR(255),
    synopsis VARCHAR(255)
);