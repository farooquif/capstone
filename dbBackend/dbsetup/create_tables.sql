CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    job_role VARCHAR(100),
    work_location VARCHAR(100),
    salary DECIMAL(10, 2)
);

INSERT INTO users (name, username, password, phone_number, job_role, work_location, salary)
VALUES 
    ('John Smith', 'jsmith', 'apple123', '860-555-1234', 'DevOps Manager', 'Hartford', 95000),
    ('Sarah Johnson', 'sjohnson', 'orange456', '860-555-2345', 'Human Relations Rep', 'New Haven', 85000),
    ('Michael Brown', 'mbrown', 'banana789', '860-555-3456', 'Project Manager', 'Hartford', 110000),
    ('Emily Davis', 'edavis', 'grape321', '860-555-4567', 'SE Manager', 'Stamford', 92000),
    ('Robert Wilson', 'rwilson', 'cherry654', '860-555-5678', 'Software Engineer', 'Hartford', 98000),
    ('Jennifer Lee', 'jlee', 'peach987', '860-555-6789', 'Business Analyst', 'New Haven', 88000),
    ('David Martinez', 'dmartinez', 'kiwi246', '860-555-7890', 'DevOps Engineer', 'Stamford', 105000),
    ('Lisa Thompson', 'lthompson', 'mango135', '860-555-8901', 'QA Engineer', 'Hartford', 90000),
    ('James Anderson', 'janderson', 'lemon579', '860-555-9012', 'Product Manager', 'New Haven', 115000),
    ('Patricia Garcia', 'pgarcia', 'berry864', '860-555-0123', 'Software Engineer', 'Hartford', 97000);