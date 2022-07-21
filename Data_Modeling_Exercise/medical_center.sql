CREATE DATABASE medical;

\c medical;

CREATE TABLE medical_centers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    specialty TEXT NOT NULL,
    medical_center_id INTEGER REFERENCES medical_centers
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    birth_date DATE NOT NULL
);

CREATE TABLE diseases (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    symptom TEXT
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER REFERENCES doctors,
    patient_id INTEGER REFERENCES patients,
    disease_id INTEGER REFERENCES diseases
);

INSERT INTO medical_centers (name)
VALUES ('Austin');

INSERT INTO doctors (name, specialty, medical_center_id)
VALUES 
('John C.', 'mental', 1),
('Jessica A.', 'surgery', 1);

INSERT INTO patients (name, birth_date)
VALUES
('Kevin', '1950-07-19'),
('Joe', '1966-01-07');

INSERT INTO diseases (name, symptom)
VALUES
('Heart disease', 'Chest pain'),
('COVID-19', 'Fever or chills'),
('Flu', 'Cough');

INSERT INTO visits (doctor_id, patient_id, disease_id)
VALUES
(2, 1, 1),
(1, 2, 3);
