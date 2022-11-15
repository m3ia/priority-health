import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
import path from 'path';
import { fileURLToPath } from 'url';


dotenv.config();

const NUTRITIONAL_ANALYSIS_APP_ID = process.env.NUTRITIONAL_ANALYSIS_APP_ID;
const NUTRITIONAL_ANALYSIS_API_KEY = process.env.NUTRITIONAL_ANALYSIS_API_KEY;

// pgPromise
const pgp = pgPromise({});
const db = pgp(process.env.DATABASE_URL);

// 
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REACT_BUILD_DIR = path.join(__dirname, "..", 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Hola this server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
  // res.json('Welcome to the API server!')
  res.sendFile(path.join(REACT_BUILD_DIR, 'server.mjs'));
});

let userId = 0;

// NOTE: Start all routes like so: app.get('/api/')
//  ------- ------- ------- USERS ------- ------- -------
// GET for all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await db.any('SELECT * from users');
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

// GET for the signed in user
app.get('/api/me', cors(), async (req, res) => {

  try {
    const signedInUser = await db.query('SELECT * FROM users WHERE id = $1 ', [userId]);
    res.send(signedInUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
  
});

// POST Check if user exists/add new user:
app.post('/api/me', cors(), async (req, res) => {
  const newUser = {
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    sub: req.body.sub
  }
  const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email];
  const userInfo = await db.query(queryEmail, valuesEmail);
  if (userInfo.length > 0) {
    console.log(`Thank you ${userInfo[0].first_name} for coming back`);
    userId = userInfo[0].id;
    console.log('Returning user ID: ', userId);
    console.log('Returning user: ', userInfo);
    res.send(userInfo);
  } else {
    await db.query('INSERT INTO users(last_name, first_name, email) VALUES($1, $2, $3)', [newUser.lastname, newUser.firstname, newUser.email]);
    const response = await db.query('SELECT * FROM users WHERE email=$1 LIMIT 1', [newUser.email]);
    console.log('New User Created: ', response[0]);
    userId = response[0].id;
    console.log('New user ID: ', userId);
    res.send(response);
  }
});


//  ------- ------- ------- FOODS LIST ------- ------- -------

// GET Get all foods for 1 user:
app.get(`/api/myFoods`, cors(), async (req, res) => {
  try {
    const response = await db.any('SELECT * FROM foods WHERE user_id = $1', [userId]);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});

// Get for Nutritional Analysis
app.get(`/api/example/:food`, async (req, res) => {
  const food1 = '1 tbsp honey';
  const food = req.params.food;

  const url = `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITIONAL_ANALYSIS_APP_ID}&app_key=${NUTRITIONAL_ANALYSIS_API_KEY}&nutrition-type=cooking&ingr=1+serving+${food}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});

// GET all collections
app.get(`/api/collections`, cors(), async (req, res) => {
  try {
    const response = await db.any('SELECT * FROM collections WHERE user_id = $1', [userId]);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});