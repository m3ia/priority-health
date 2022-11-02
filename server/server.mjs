import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
import { auth } from 'express-openid-connect';

dotenv.config();

// auth0 - TODO - check these
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};

console.log('auth0 config', config);
const NUTRITIONAL_ANALYSIS_APP_ID = process.env.NUTRITIONAL_ANALYSIS_APP_ID;
const NUTRITIONAL_ANALYSIS_API_KEY = process.env.NUTRITIONAL_ANALYSIS_API_KEY;
console.log('TEST', 'API_KEY: ', NUTRITIONAL_ANALYSIS_API_KEY, 'APP_ID: ', NUTRITIONAL_ANALYSIS_APP_ID)

const app = express();
const PORT = 8080;
const pgp = pgPromise({});
const db = pgp('postgres://localhost:5432/priority_health');

app.use(cors());
app.use(bodyParser.json());
app.use(auth(config));

app.listen(PORT, () => {
  console.log(`Hola this server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.json('Welcome to the API server!')
})

// First get with user auth:
app.get('/api/me', (req, res) => {
  console.log(req.oidc.isAuthenticated());
  if (req.oidc.isAuthenticated()) {
    console.log('oidc user from server', req.oidc.user);
    res.json(req.oidc.user);
  } else {
    res.status(401).json({ error: 'Error in the auth0' });
  }
});

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