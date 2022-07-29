-- Critique:  
-- 1. Make the information of name, airline, destination to saperate tables.

-- from the terminal run:
-- psql < air_traffic_Schema_Critique.sql

DROP DATABASE IF EXISTS air_traffic_critique;

CREATE DATABASE air_traffic_critique;

\c air_traffic_critique

CREATE TABLE names
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE airlines
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE destinations
(
  id SERIAL PRIMARY KEY,
  city_name TEXT NOT NULL,
  country_name TEXT NOT NULL
);

CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  name_id INTEGER REFERENCES names,
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline_id INTEGER REFERENCES airlines,
  from_destination_id INTEGER REFERENCES destinations,
  to_destination_id INTEGER REFERENCES destinations
);

INSERT INTO names
  (name)
VALUES
  ('Jennifer Finch'),
  ('Thadeus Gathercoal'),
  ('Sonja Pauley'),
  ('Waneta Skeleton'),
  ('Berkie Wycliff'),
  ('Alvin Leathes'),
  ('Cory Squibbes');

  INSERT INTO airlines
  (name)
VALUES
  ('United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ('Air China'),
  ('American Airlines'),
  ('Avianca Brasil');

  INSERT INTO destinations
  (city_name, country_name)
VALUES
  ('Washington DC', 'United States'),
  ('Tokyo', 'Japan'),
  ('Los Angeles', 'United States'),
  ('Seattle', 'United States'),
  ('Paris', 'France'),
  ('Dubai', 'UAE'),
  ('New York', 'United States'),
  ('Cedar Rapids', 'United States'),
  ('Charlotte', 'United States'),
  ('Sao Paolo', 'Brazil'),
  ('London', 'United Kingdom'),
  ('Las Vegas', 'United States'),
  ('Mexico City', 'Mexico'),
  ('Casablanca', 'Morocco'),
  ('Beijing', 'China'),
  ('Chicago', 'United States'),
  ('New Orleans', 'United States'),
  ('Santiago', 'Chile');

INSERT INTO tickets
  (name_id, seat, departure, arrival, airline_id, from_destination_id, to_destination_id)
VALUES
  (1, '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 1, 1, 4),
  (2, '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 2, 2, 11),
  (3, '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 3, 3, 12),
  (1, '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 3, 4, 13),
  (4, '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 4, 5, 14),
  (2, '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 5, 6, 15),
  (5, '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 1, 7, 9),
  (6, '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 6, 8, 16),
  (5, '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 6, 9, 17),
  (7, '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 7, 10, 18);