DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    job_role VARCHAR(100),
    work_location VARCHAR(100),
    salary DECIMAL(10, 2),
    manager_id INTEGER REFERENCES users(id),
    CONSTRAINT check_manager_not_self CHECK (manager_id IS NULL OR manager_id <> id)
);

-- Insert managers first (manager_id is NULL)
INSERT INTO users (name, username, password, phone_number, job_role, work_location, salary, manager_id)
VALUES 
    ('Alice Morgan', 'amorgan', 'passAlice', '860-555-0001', 'Engineering Director', 'New Haven', 135000, NULL),
    ('Brian Chang', 'bchang', 'passBrian', '860-555-0002', 'Product Director', 'Hartford', 130000, NULL),
    ('Clara Knight', 'cknight', 'passClara', '860-555-0003', 'HR Manager', 'Stamford', 90000, NULL);

-- Insert employees who report to above managers
INSERT INTO users (name, username, password, phone_number, job_role, work_location, salary, manager_id)
VALUES 
    ('Derek Liu', 'dliu', 'passDerek', '860-555-0004', 'Software Engineer', 'New Haven', 95000,
        (SELECT id FROM users WHERE username = 'amorgan')),

    ('Elena Torres', 'etorres', 'passElena', '860-555-0005', 'Frontend Developer', 'New Haven', 90000,
        (SELECT id FROM users WHERE username = 'amorgan')),

    ('Felix Grant', 'fgrant', 'passFelix', '860-555-0006', 'Product Analyst', 'Hartford', 88000,
        (SELECT id FROM users WHERE username = 'bchang')),

    ('Gina Patel', 'gpatel', 'passGina', '860-555-0007', 'QA Engineer', 'Stamford', 87000,
        (SELECT id FROM users WHERE username = 'amorgan')),

    ('Henry Osei', 'hosei', 'passHenry', '860-555-0008', 'HR Assistant', 'Stamford', 75000,
        (SELECT id FROM users WHERE username = 'cknight')),

    ('Isabella Chen', 'ichen', 'passIsabella', '860-555-0009', 'DevOps Engineer', 'Hartford', 99000,
        (SELECT id FROM users WHERE username = 'amorgan')),

    ('Jack Romero', 'jromero', 'passJack', '860-555-0010', 'UI/UX Designer', 'New Haven', 93000,
        (SELECT id FROM users WHERE username = 'bchang'));