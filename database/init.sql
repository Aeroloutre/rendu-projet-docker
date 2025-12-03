CREATE TABLE IF NOT EXISTS items (
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Insertion de données de test
INSERT INTO items (name, description) VALUES
    ('Item 1', 'Ceci est le premier item'),
    ('Item 2', 'Voila le deuxieme item'),
    ('Item 3', 'Ici le troisième'),
    ('Item 4', 'ici le 4')