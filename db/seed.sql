use employee_db;

INSERT INTO department
    (name)
VALUES
    ('Caseflow'),
    ('Palletflow'),
    ('Administration'),
    ('Production');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Managers', 100000, 1),
    ('Operations', 80000, 1),
    ('Team Leads', 150000, 2),
    ('Administration', 120000, 2),
    ('Drivers', 160000, 3),
    ('Shippers', 125000, 3),
    ('Associates', 250000, 4),
    ('Maintenance', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Donald', 'Crump', 2, 1),
    ('Michelle', 'Rodriguez', 3, NULL),
    ('Shakur', 'Tupak', 4, 3),
    ('lyly', 'Singh', 5, NULL),
    ('James', 'Brown', 6, 5),
    ('Sarah', 'Parker', 7, NULL),
    ('Tom', 'Sellek', 8, 7);