-- Critique: 
-- 1. Remove the galaxy column because the information is the same for all rows. 
-- 2. Split multiple values in one cell of the moons column to saperate rows.
-- 3. Make the moons column and theorbits_around column to a saperate table because of too many same values.

-- from the terminal run:
-- psql < outer_space_Schema_Critique.sql

DROP DATABASE IF EXISTS outer_space_critique;

CREATE DATABASE outer_space_critique;

\c outer_space_critique

CREATE TABLE moons
(
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE orbits_around
(
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE Milky_Way_planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around_id INTEGER REFERENCES orbits_around,
  moon_id INTEGER REFERENCES moons
);

INSERT INTO orbits_around
  (name)
VALUES
  ('The Sun'),
  ('Proxima Centauri'),
  ('Gliese 876');

INSERT INTO moons
  (name)
VALUES
  (''),
  ('The Moon'),
  ('Phobos'),
  ('Deimos'),
  ('Naiad'),
  ('Thalassa'),
  ('Despina'),
  ('Galatea'),
  ('Larissa'),
  ('S/2004 N 1'),
  ('Proteus'),
  ('Triton'),
  ('Nereid'),
  ('Halimede'),
  ('Sao'),
  ('Laomedeia'),
  ('Psamathe'),
  ('Neso');

INSERT INTO Milky_Way_planets
  (name, orbital_period_in_years, orbits_around_id, moon_id)
VALUES
  ('Earth', 1.00, 1, 2),
  ('Mars', 1.88, 1, 3),
  ('Mars', 1.88, 1, 4),
  ('Venus', 0.62, 1, 1),
  ('Neptune', 164.8, 1, 5),
  ('Neptune', 164.8, 1, 6),
  ('Neptune', 164.8, 1, 7),
  ('Neptune', 164.8, 1, 8),
  ('Neptune', 164.8, 1, 9),
  ('Neptune', 164.8, 1, 10),
  ('Neptune', 164.8, 1, 11),
  ('Neptune', 164.8, 1, 12),
  ('Neptune', 164.8, 1, 13),
  ('Neptune', 164.8, 1, 14),
  ('Neptune', 164.8, 1, 15),
  ('Neptune', 164.8, 1, 16),
  ('Neptune', 164.8, 1, 17),
  ('Neptune', 164.8, 1, 18),
  ('Proxima Centauri b', 0.03, 2, 1),
  ('Gliese 876 b', 0.23, 3, 1);

