import express from 'express'
import { query } from './db.js'

const app = express()
app.use(express.json())

app.post('/login', async (req, res) => {

    const { username, password } = req.body

    try {
        const result = await query(
            'SELECT * FROM users WHERE username =$1 AND password =$2',
            [username, password]
        )

        if (result.rows.length > 0) {
            res.send('Login successful')
        } else {
            res.status(401).send('Credentials not found')
        }
    } catch (error) {
        console.error(err)
        res.status(500).send('Internal server error')
    }

})

app.get('/users/search', async (req, res) => {
    const { name } = req.query;

    console.log(name)
  
    if (!name) {
      return res.status(400).send('Name query parameter is required');
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

app.listen(3000, () => {
    console.log('Server running on port 3000')
})