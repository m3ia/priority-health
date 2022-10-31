import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pgPromise from 'pg-promise';

dotenv.config();
const NUTRITIONAL_ANALYSIS_APP_ID = process.env.NUTRITIONAL_ANALYSIS_APP_ID;
const NUTRITIONAL_ANALYSIS_API_KEY = process.env.NUTRITIONAL_ANALYSIS_API_KEY;
console.log('TEST', 'API_KEY: ', NUTRITIONAL_ANALYSIS_API_KEY, 'APP_ID: ', NUTRITIONAL_ANALYSIS_APP_ID)

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
})

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