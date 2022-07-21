CREATE DATABASE soccer;

\c soccer;

CREATE TABLE leagues (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    league_id INTEGER REFERENCES leagues
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    team_id INTEGER REFERENCES teams
);

CREATE TABLE seasons (
    id SERIAL PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    league_id INTEGER REFERENCES leagues
);

CREATE TABLE referees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    season_id INTEGER REFERENCES seasons,
    referee1_id INTEGER REFERENCES referees,
    referee2_id INTEGER REFERENCES referees,
    team1_id INTEGER REFERENCES teams,
    team2_id INTEGER REFERENCES teams
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games,
    player_id INTEGER REFERENCES players
);

CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    result TEXT NOT NULL,
    team_id INTEGER REFERENCES teams,
    game_id INTEGER REFERENCES games
);


INSERT INTO leagues (name)
VALUES 
('League Europe'),
('League USA');

INSERT INTO teams (name, league_id)
VALUES 
('Team A', 2),
('Team B', 1),
('Team C', 2),
('Team D', 1);

INSERT INTO players (name, team_id)
VALUES 
('Player A', 3),
('Player B', 4),
('Player C', 1),
('Player D', 2);

INSERT INTO seasons (start_date, end_date, league_id)
VALUES 
('1990-7-01', '1990-10-30', 1),
('1994-7-01', '1994-10-30', 2),
('2000-7-01', '2000-10-30', 1),
('2020-7-01', '2020-10-30', 2);

INSERT INTO referees (name)
VALUES 
('John D.'),
('Chris R.'),
('David S.');

INSERT INTO games (date, season_id, referee1_id, referee2_id, team1_id, team2_id)
VALUES
('1990-7-21', 3, 1, 2, 1, 3),
('1990-8-01', 2, 2, 3, 2, 4),
('1990-9-15', 4, 3, 1, 1, 4);

INSERT INTO goals (game_id, player_id)
VALUES 
(1, 3),
(2, 4),
(3, 2),
(1, 1);

INSERT INTO results (result, team_id, game_id)
VALUES 
('DRAW', 1, 1),
('WIN', 2, 2),
('DRAW', 3, 1),
('LOSE', 4, 3);