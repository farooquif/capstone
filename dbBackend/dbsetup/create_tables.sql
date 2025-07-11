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
    image_url VARCHAR(255),  
    CONSTRAINT check_manager_not_self CHECK (manager_id IS NULL OR manager_id <> id)
);

INSERT INTO users (name, username, password, phone_number, job_role, work_location, salary, manager_id, image_url) VALUES
('John Smith', 'jsmith', 'apple123', '860-555-1234', 'Software Engineer', 'Hartford', 95000, 3, 'https://randomuser.me/api/portraits/men/35.jpg'),
('Sarah Johnson', 'sjohnson', 'beach123', '860-555-2345', 'Product Manager', 'Hartford', 120000, 3, 'https://randomuser.me/api/portraits/women/21.jpg'),
('Michael Chen', 'mchen', 'cloud123', '415-555-3456', 'CEO', 'San Francisco', 250000, NULL, 'https://randomuser.me/api/portraits/men/12.jpg'),
('Emily Rodriguez', 'erodriguez', 'dance123', '860-555-4567', 'Software Engineer', 'Hartford', 92000, 1, 'https://randomuser.me/api/portraits/women/43.jpg'),
('David Kim', 'dkim', 'eagle123', '612-555-5678', 'Data Analyst', 'Minnesota', 88000, 6, 'https://randomuser.me/api/portraits/men/50.jpg'),
('Jennifer Lee', 'jlee', 'flame123', '415-555-6789', 'Product Manager', 'San Francisco', 125000, 3, 'https://randomuser.me/api/portraits/women/39.jpg'),
('Robert Taylor', 'rtaylor', 'grape123', '860-555-7890', 'HR Specialist', 'Hartford', 78000, 10, 'https://randomuser.me/api/portraits/men/9.jpg'),
('Lisa Wang', 'lwang', 'house123', '612-555-8901', 'Software Engineer', 'Minnesota', 94000, 5, 'https://randomuser.me/api/portraits/women/60.jpg'),
('James Wilson', 'jwilson', 'igloo123', '415-555-9012', 'Data Scientist', 'San Francisco', 135000, 6, 'https://randomuser.me/api/portraits/men/31.jpg'),
('Patricia Martinez', 'pmartinez', 'juice123', '860-555-0123', 'Office Manager', 'Hartford', 65000, 3, 'https://randomuser.me/api/portraits/women/6.jpg'),
('Thomas Brown', 'tbrown', 'kite123', '612-555-1234', 'Software Engineer', 'Minnesota', 96000, 5, 'https://randomuser.me/api/portraits/men/33.jpg'),
('Michelle Garcia', 'mgarcia', 'lemon123', '415-555-2345', 'Product Manager', 'San Francisco', 128000, 6, 'https://randomuser.me/api/portraits/women/40.jpg'),
('Daniel Jackson', 'djackson', 'music123', '860-555-3456', 'Data Engineer', 'Hartford', 105000, 2, 'https://randomuser.me/api/portraits/men/55.jpg'),
('Nancy Thompson', 'nthompson', 'night123', '612-555-4567', 'HR Specialist', 'Minnesota', 76000, 7, 'https://randomuser.me/api/portraits/women/9.jpg'),
('Christopher Lewis', 'clewis', 'ocean123', '415-555-5678', 'Software Engineer', 'San Francisco', 140000, 6, 'https://randomuser.me/api/portraits/men/23.jpg'),
('Karen Walker', 'kwalker', 'paper123', '860-555-6789', 'Software Engineer', 'Hartford', 93000, 1, 'https://randomuser.me/api/portraits/women/37.jpg'),
('Matthew Hall', 'mhall', 'queen123', '612-555-7890', 'Data Analyst', 'Minnesota', 87000, 5, 'https://randomuser.me/api/portraits/men/45.jpg'),
('Betty Young', 'byoung', 'river123', '415-555-8901', 'HR Director', 'San Francisco', 145000, 6, 'https://randomuser.me/api/portraits/women/34.jpg'),
('Donald Allen', 'dallen', 'stone123', '860-555-9012', 'Product Manager', 'Hartford', 118000, 2, 'https://randomuser.me/api/portraits/men/21.jpg'),
('Sandra King', 'sking', 'tiger123', '612-555-0123', 'Software Engineer', 'Minnesota', 95000, 5, 'https://randomuser.me/api/portraits/women/26.jpg'),
('Paul Wright', 'pwright', 'umbra123', '415-555-1234', 'Data Scientist', 'San Francisco', 138000, 6, 'https://randomuser.me/api/portraits/men/18.jpg'),
('Linda Scott', 'lscott', 'voice123', '860-555-2345', 'Software Engineer', 'Hartford', 97000, 1, 'https://randomuser.me/api/portraits/women/11.jpg'),
('Mark Green', 'mgreen', 'water123', '612-555-3456', 'IT Support', 'Minnesota', 72000, 5, 'https://randomuser.me/api/portraits/men/30.jpg'),
('Elizabeth Adams', 'eadams', 'xenon123', '415-555-4567', 'Product Manager', 'San Francisco', 130000, 6, 'https://randomuser.me/api/portraits/women/3.jpg'),
('Steven Baker', 'sbaker', 'yacht123', '860-555-5678', 'Data Engineer', 'Hartford', 108000, 2, 'https://randomuser.me/api/portraits/men/48.jpg'),
('Dorothy Nelson', 'dnelson', 'zebra123', '612-555-6789', 'Software Engineer', 'Minnesota', 93000, 5, 'https://randomuser.me/api/portraits/women/14.jpg'),
('George Carter', 'gcarter', 'acorn123', '415-555-7890', 'Software Engineer', 'San Francisco', 142000, 6, 'https://randomuser.me/api/portraits/men/10.jpg'),
('Jennifer Mitchell', 'jmitchell', 'bloom123', '860-555-8901', 'HR Specialist', 'Hartford', 79000, 10, 'https://randomuser.me/api/portraits/women/25.jpg'),
('Kenneth Perez', 'kperez', 'charm123', '612-555-9012', 'Data Analyst', 'Minnesota', 89000, 5, 'https://randomuser.me/api/portraits/men/38.jpg'),
('Margaret Roberts', 'mroberts', 'dream123', '415-555-0123', 'Software Engineer', 'San Francisco', 136000, 6, 'https://randomuser.me/api/portraits/women/53.jpg'),
('Edward Turner', 'eturner', 'earth123', '860-555-1234', 'Product Manager', 'Hartford', 122000, 2, 'https://randomuser.me/api/portraits/men/27.jpg'),
('Ruth Phillips', 'rphillips', 'frost123', '612-555-2345', 'Software Engineer', 'Minnesota', 92000, 5, 'https://randomuser.me/api/portraits/women/44.jpg'),
('Jason Campbell', 'jcampbell', 'glide123', '415-555-3456', 'Data Scientist', 'San Francisco', 139000, 6, 'https://randomuser.me/api/portraits/men/13.jpg'),
('Sharon Parker', 'sparker', 'heart123', '860-555-4567', 'Software Engineer', 'Hartford', 96000, 1, 'https://randomuser.me/api/portraits/women/8.jpg'),
('Jeffrey Evans', 'jevans', 'ivory123', '612-555-5678', 'HR Specialist', 'Minnesota', 77000, 7, 'https://randomuser.me/api/portraits/men/20.jpg'),
('Carol Edwards', 'cedwards', 'jolly123', '415-555-6789', 'Software Engineer', 'San Francisco', 138000, 6, 'https://randomuser.me/api/portraits/women/18.jpg'),
('Gary Collins', 'gcollins', 'knack123', '860-555-7890', 'Data Engineer', 'Hartford', 107000, 2, 'https://randomuser.me/api/portraits/men/60.jpg'),
('Amanda Stewart', 'astewart', 'lunar123', '612-555-8901', 'Product Manager', 'Minnesota', 127000, 5, 'https://randomuser.me/api/portraits/women/32.jpg'),
('Ronald Sanchez', 'rsanchez', 'mango123', '415-555-9012', 'IT Support', 'San Francisco', 85000, 6, 'https://randomuser.me/api/portraits/men/62.jpg'),
('Melissa Morris', 'mmorris', 'noble123', '860-555-0123', 'Product Manager', 'Hartford', 119000, 2, 'https://randomuser.me/api/portraits/women/61.jpg'),
('Anthony Rogers', 'arogers', 'olive123', '612-555-1234', 'Software Engineer', 'Minnesota', 91000, 5, 'https://randomuser.me/api/portraits/men/58.jpg'),
('Laura Reed', 'lreed', 'piano123', '415-555-2345', 'Data Scientist', 'San Francisco', 137000, 6, 'https://randomuser.me/api/portraits/women/10.jpg'),
('Kevin Cook', 'kcook', 'quilt123', '860-555-3456', 'Software Engineer', 'Hartford', 98000, 1, 'https://randomuser.me/api/portraits/men/59.jpg'),
('Deborah Morgan', 'dmorgan', 'radar123', '612-555-4567', 'HR Specialist', 'Minnesota', 75000, 7, 'https://randomuser.me/api/portraits/women/7.jpg'),
('Brian Cooper', 'bcooper', 'solar123', '415-555-5678', 'Software Engineer', 'San Francisco', 141000, 6, 'https://randomuser.me/api/portraits/men/40.jpg'),
('Kimberly Richardson', 'krichardson', 'tulip123', '860-555-6789', 'Data Engineer', 'Hartford', 106000, 2, 'https://randomuser.me/api/portraits/women/56.jpg'),
('Joseph Cox', 'jcox', 'unity123', '612-555-7890', 'Software Engineer', 'Minnesota', 95000, 5, 'https://randomuser.me/api/portraits/men/64.jpg'),
('Nicole Howard', 'nhoward', 'vivid123', '415-555-8901', 'Product Manager', 'San Francisco', 127000, 6, 'https://randomuser.me/api/portraits/women/27.jpg'),
('Stephen Ward', 'sward', 'whale123', '860-555-9012', 'Software Engineer', 'Hartford', 94000, 1, 'https://randomuser.me/api/portraits/men/28.jpg'),
('Rebecca Torres', 'rtorres', 'xylol123', '612-555-0123', 'Data Analyst', 'Minnesota', 86000, 5, 'https://randomuser.me/api/portraits/women/51.jpg'),
('Timothy Peterson', 'tpeterson', 'yield123', '415-555-1234', 'Software Engineer', 'San Francisco', 143000, 6, 'https://randomuser.me/api/portraits/men/11.jpg'),
('Stephanie Gray', 'sgray', 'zesty123', '860-555-2345', 'HR Specialist', 'Hartford', 78000, 10, 'https://randomuser.me/api/portraits/women/22.jpg'),
('Gregory Ramirez', 'gramirez', 'amber123', '612-555-3456', 'Software Engineer', 'Minnesota', 94000, 5, 'https://randomuser.me/api/portraits/men/25.jpg'),
('Cynthia James', 'cjames', 'bliss123', '415-555-4567', 'Data Scientist', 'San Francisco', 136000, 6, 'https://randomuser.me/api/portraits/women/30.jpg'),
('Kenneth Watson', 'kwatson', 'crisp123', '860-555-5678', 'Product Manager', 'Hartford', 121000, 2, 'https://randomuser.me/api/portraits/men/60.jpg'),
('Amy Brooks', 'abrooks', 'daisy123', '612-555-6789', 'Software Engineer', 'Minnesota', 93000, 5, 'https://randomuser.me/api/portraits/women/47.jpg'),
('Ryan Kelly', 'rkelly', 'ember123', '415-555-7890', 'IT Support', 'San Francisco', 84000, 6, 'https://randomuser.me/api/portraits/men/44.jpg'),
('Christine Sanders', 'csanders', 'fable123', '860-555-8901', 'Software Engineer', 'Hartford', 99000, 1, 'https://randomuser.me/api/portraits/women/2.jpg'),
('Larry Price', 'lprice', 'glade123', '612-555-9012', 'Data Analyst', 'Minnesota', 88000, 5, 'https://randomuser.me/api/portraits/men/63.jpg'),
('Maria Bennett', 'mbennett', 'haste123', '415-555-0123', 'Software Engineer', 'San Francisco', 139000, 6, 'https://randomuser.me/api/portraits/women/33.jpg'),
('Eric Wood', 'ewood', 'ideal123', '860-555-1234', 'Data Engineer', 'Hartford', 109000, 2, 'https://randomuser.me/api/portraits/men/49.jpg'),
('Carolyn Barnes', 'cbarnes', 'jazzy123', '612-555-2345', 'Software Engineer', 'Minnesota', 92000, 5, 'https://randomuser.me/api/portraits/women/16.jpg'),
('Jerry Ross', 'jross', 'kayak123', '415-555-3456', 'Product Manager', 'San Francisco', 129000, 6, 'https://randomuser.me/api/portraits/men/5.jpg'),
('Teresa Henderson', 'thenderson', 'lunar123', '860-555-4567', 'Software Engineer', 'Hartford', 95000, 1, 'https://randomuser.me/api/portraits/women/50.jpg'),
('Sean Coleman', 'scoleman', 'mirth123', '612-555-5678', 'HR Specialist', 'Minnesota', 76000, 7, 'https://randomuser.me/api/portraits/men/20.jpg'),
('Diane Jenkins', 'djenkins', 'nexus123', '415-555-6789', 'Software Engineer', 'San Francisco', 144000, 6, 'https://randomuser.me/api/portraits/women/45.jpg'),
('Alan Perry', 'aperry', 'oasis123', '860-555-7890', 'Data Engineer', 'Hartford', 107000, 2, 'https://randomuser.me/api/portraits/men/6.jpg'),
('Julie Powell', 'jpowell', 'plush123', '612-555-8901', 'Software Engineer', 'Minnesota', 96000, 5, 'https://randomuser.me/api/portraits/women/37.jpg'),
('Wayne Long', 'wlong', 'quick123', '415-555-9012', 'Data Scientist', 'San Francisco', 138000, 6, 'https://randomuser.me/api/portraits/men/51.jpg'),
('Kathleen Patterson', 'kpatterson', 'roast123', '860-555-0123', 'Product Manager', 'Hartford', 123000, 2, 'https://randomuser.me/api/portraits/women/40.jpg'),
('Roy Hughes', 'rhughes', 'spark123', '612-555-1234', 'Software Engineer', 'Minnesota', 91000, 5, 'https://randomuser.me/api/portraits/men/19.jpg'),
('Lori Flores', 'lflores', 'trust123', '415-555-2345', 'IT Support', 'San Francisco', 83000, 6, 'https://randomuser.me/api/portraits/women/48.jpg'),
('Eugene Washington', 'ewashington', 'ultra123', '860-555-3456', 'Software Engineer', 'Hartford', 98000, 1, 'https://randomuser.me/api/portraits/men/1.jpg'),
('Tina Butler', 'tbutler', 'valor123', '612-555-4567', 'Data Analyst', 'Minnesota', 87000, 5, 'https://randomuser.me/api/portraits/women/11.jpg'),
('Russell Simmons', 'rsimmons', 'wispy123', '415-555-5678', 'Software Engineer', 'San Francisco', 140000, 6, 'https://randomuser.me/api/portraits/men/8.jpg'),
('Janice Foster', 'jfoster', 'xerox123', '860-555-6789', 'HR Specialist', 'Hartford', 77000, 10, 'https://randomuser.me/api/portraits/women/19.jpg'),
('Bruce Gonzales', 'bgonzales', 'yummy123', '612-555-7890', 'Software Engineer', 'Minnesota', 94000, 5, 'https://randomuser.me/api/portraits/men/3.jpg'),
('Jean Bryant', 'jbryant', 'zonal123', '415-555-8901', 'Product Manager', 'San Francisco', 126000, 6, 'https://randomuser.me/api/portraits/women/9.jpg'),
('Louis Alexander', 'lalexander', 'aroma123', '860-555-9012', 'Software Engineer', 'Hartford', 97000, 1, 'https://randomuser.me/api/portraits/men/26.jpg'),
('Cheryl Russell', 'crussell', 'blaze123', '612-555-0123', 'Data Analyst', 'Minnesota', 89000, 5, 'https://randomuser.me/api/portraits/women/53.jpg'),
('Ralph Griffin', 'rgriffin', 'coast123', '415-555-1234', 'Data Scientist', 'San Francisco', 137000, 6, 'https://randomuser.me/api/portraits/men/35.jpg'),
('Martha Diaz', 'mdiaz', 'dwell123', '860-555-2345', 'Data Engineer', 'Hartford', 108000, 2, 'https://randomuser.me/api/portraits/women/41.jpg'),
('Harry Hayes', 'hhayes', 'elbow123', '612-555-3456', 'Software Engineer', 'Minnesota', 93000, 5, 'https://randomuser.me/api/portraits/men/36.jpg'),
('Marilyn Myers', 'mmyers', 'flare123', '415-555-4567', 'Product Manager', 'San Francisco', 124000, 6, 'https://randomuser.me/api/portraits/women/54.jpg'),
('Wayne Ford', 'wford', 'gloom123', '860-555-5678', 'Software Engineer', 'Hartford', 96000, 1, 'https://randomuser.me/api/portraits/men/33.jpg'),
('Denise Hamilton', 'dhamilton', 'happy123', '612-555-6789', 'HR Specialist', 'Minnesota', 75000, 7, 'https://randomuser.me/api/portraits/women/14.jpg'),
('Roger Graham', 'rgraham', 'inert123', '415-555-7890', 'Software Engineer', 'San Francisco', 141000, 6, 'https://randomuser.me/api/portraits/men/12.jpg'),
('Beverly Sullivan', 'bsullivan', 'jumbo123', '860-555-8901', 'Data Engineer', 'Hartford', 106000, 2, 'https://randomuser.me/api/portraits/women/25.jpg'),
('John Doe', 'johndoe', 'secure123', '860-555-3142', 'Sales Representative', 'Hartford', 58000, 3, 'https://randomuser.me/api/portraits/men/35.jpg'),
('Sarah Smith', 'ssmith', 'password123', '860-555-1234', 'Customer Support', 'Hartford', 52000, 3, 'https://randomuser.me/api/portraits/women/45.jpg'),
('Michael Johnson', 'mjohnson', 'cloud123', '415-555-2345', 'Marketing Specialist', 'San Francisco', 68000, 2, 'https://randomuser.me/api/portraits/men/56.jpg'),
('Emily Davis', 'edavis', 'beach123', '860-555-6789', 'Senior Software Engineer', 'Hartford', 125000, 6, 'https://randomuser.me/api/portraits/women/18.jpg'),
('Daniel Brown', 'dbrown', 'tree123', '415-555-8901', 'Project Manager', 'San Francisco', 95000, 1, 'https://randomuser.me/api/portraits/men/33.jpg'),
('Victoria Taylor', 'vtaylor', 'fish123', '860-555-2345', 'Finance Analyst', 'Hartford', 87000, 5, 'https://randomuser.me/api/portraits/women/21.jpg'),
('Kevin Lee', 'klee', 'stone123', '415-555-5678', 'UI Designer', 'San Francisco', 72000, 3, 'https://randomuser.me/api/portraits/men/27.jpg'),
('Charlotte Harris', 'charris', 'star123', '860-555-6789', 'UX Designer', 'Hartford', 75000, 2, 'https://randomuser.me/api/portraits/women/7.jpg'),
('Liam Walker', 'lwalker', 'moon123', '415-555-8901', 'Tech Lead', 'San Francisco', 105000, 6, 'https://randomuser.me/api/portraits/men/18.jpg'),
('Olivia Wilson', 'owilson', 'spark123', '860-555-3456', 'HR Manager', 'Hartford', 90000, 4, 'https://randomuser.me/api/portraits/women/12.jpg');