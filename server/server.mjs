import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pgPromise from 'pg-promise';

dotenv.config();

const NUTRITIONAL_ANALYSIS_APP_ID = process.env.NUTRITIONAL_ANALYSIS_APP_ID;
const NUTRITIONAL_ANALYSIS_API_KEY = process.env.NUTRITIONAL_ANALYSIS_API_KEY;

const app = express();
const PORT = 8080;
const pgp = pgPromise({});
const db = pgp('postgres://localhost:5432/priority_health');

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Hola this server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.json('Welcome to the API server!')
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await db.any('SELECT * from users');
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
})
// Check if user exists/add new user:
app.post('/api/me', cors(), async (req, res) => {
  const newUser = {
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    sub: req.body.sub
  }
  const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email]
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.length > 0) {
    console.log(`Thank you ${resultsEmail.first_name} for coming back`)
  } else {
  const query = 'INSERT INTO users(last_name, first_name, email) VALUES($1, $2, $3) RETURNING *'
  const values = [newUser.lastname, newUser.firstname, newUser.email]
  const result = await db.query(query, values);
  console.log('result', result);
  }
});

// First get with user auth:
// app.get('/api/me', (req, res) => {
//   console.log(req.oidc.isAuthenticated());
//   if (req.oidc.isAuthenticated()) {
//     console.log('oidc user from server', req.oidc.user);
//     res.json(req.oidc.user);
//   } else {
//     res.status(401).json({ error: 'Error in the auth0' });
//   }
// });

// Start all routes like so: app.get('/api/')
// Get for Nutritional Analysis
app.get(`/api/example/:food`, async (req, res) => {
  const food1 = '1 tbsp honey';
  const food = req.params.food;

  const url = `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITIONAL_ANALYSIS_APP_ID}&app_key=${NUTRITIONAL_ANALYSIS_API_KEY}&nutrition-type=cooking&ingr=${food1}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});