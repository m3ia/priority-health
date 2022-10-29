import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pgPromise from 'pg-promise';

dotenv.config();
const API_KEY = process.env.API_KEY;
const APP_ID = process.env.APP_ID;
console.log('TEST', 'API_KEY: ', API_KEY, 'APP_ID: ', APP_ID)

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