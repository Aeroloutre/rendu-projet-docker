CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    size INT,
);

INSERT INTO items (name, size) VALUES
('mon premier item', 60),
('mon deuxieme item', 154),
('mon troisieme item', 987);
