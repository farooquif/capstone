import express from 'express'
import { query } from './db.js'

const app = express()
app.use(express.json())

// #1
// pass in username and password to login, return id
app.post('/api/login', async (req, res) => {

    const { username, password } = req.body

    try {
        const result = await query(
            'SELECT * FROM users WHERE username =$1 AND password =$2',
            [username, password]
        )

        if (result.rows.length > 0) {
            const userId = result.rows[0].id
            res.json({ message: 'Login succesful', userId })
        } else {
            res.status(401).send('Credentials not found')
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }

})

// #2
// search using a name, return a list of users that match(fuzzy) the given name
app.get('/api/employees', async (req, res) => {
    const { name } = req.query;

    console.log(name)
  
    if (!name) {
      return res.status(400).send('Name is required');
    }
  
    try {
      const result = await query(
        'SELECT id, name, username, phone_number, job_role, work_location FROM users WHERE name ILIKE $1',
        [`%${name}%`]
      );
  
      res.json(result.rows);
      
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

// #3
// get a specifc user based on their id
app.get('/api/profile', async (req, res) => {
  const { id, target_id } = req.query;

  try {
    const result = await query(
      `
     SELECT 
        u.id, 
        u.name, 
        u.username, 
        u.phone_number, 
        u.job_role, 
        u.work_location,
        CASE 
          WHEN u.id = $1
               OR u.manager_id = $1
               OR (
                 SELECT job_role FROM users WHERE id = $1
               ) IN ('HR Specialist', 'HR Director')
          THEN u.salary
          ELSE NULL
        END AS salary
      FROM users u
      WHERE u.id = $2
      `,
      [id, target_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('User not found');
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// #4
// if user has people that report to them return a list of those people
app.get('/api/reports', async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).send('"id" (manager ID) is required');
  }

  try {
    const result = await query(
      `
      SELECT id, name, username, phone_number, job_role, work_location, salary
      FROM users
      WHERE manager_id = $1
      `,
      [id]
    );

    res.json(result.rows); // returns an array of reports (could be empty)
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(3000, () => {
    console.log('Server running on port 3000')
})