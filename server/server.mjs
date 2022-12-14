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

// PATCH for updating user's diet info
app.patch('/api/me', cors(), async (req, res) => {
  console.log('reqbody: ', req.body);
  const dietInfo = {
    userId: req.body.userId,
    allergies: req.body.allergies,
    dietPref: req.body.dietPref,
    dietRest: req.body.dietRest
  }

  try {
    const result = await db.one('UPDATE users SET allergies = $1, diet_pref = $2, diet_restr = $3 WHERE id = $4 RETURNING *', [dietInfo.allergies, dietInfo.dietPref, dietInfo.dietRest, dietInfo.userId])
    res.send(result);
  } catch (e) {
    console.log('PATCH error from /api/me: ', e);
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

// GET -- all user diet log entries 
app.get('/api/logs/:id', cors(), async (req, res) => {
  const userId = req.params.id;
  try {
    const logs = await db.query('SELECT * FROM diet_logs WHERE user_id = $1 ORDER BY id DESC', [userId])
    res.send(logs);
  } catch (e) {
    console.log('GET error at /api/diet-logs/', e);
    res.status(400).json({ e });
  }
})
// POST - user adding a new diet log entry 
app.post('/api/new-log', cors(), async (req, res) => {
  const newLog = {
    userId: req.body.userId,
    feeling: req.body.feeling,
    meal: req.body.meal,
    notes: req.body.notes
  }

  try {
    await db.query('INSERT INTO diet_logs (user_id, feeling, meal, notes, date) values ($1, $2, $3, $4, NOW())', [newLog.userId, newLog.feeling, newLog.meal, newLog.notes]);
    res.send();
  } catch (e) {
    console.log('POST error for /api/new-log: ', e)
  }
});

// POST - for adding a new collection
app.post('/api/new-collection', cors(), async (req, res) => {
  const newCollection = {
    userId: req.body.userId,
    name: req.body.name,
    notes: req.body.notes
  }

  let testColl = await db.any('SELECT * FROM collections WHERE name = $1 AND user_id = $2', [newCollection.name, newCollection.userId]);

  try {
    if (testColl[0]) {
      console.log('User tried to enter a collection that already exists');
    res.send();
  } else {
    let res = await db.query('INSERT INTO collections (name, user_id, notes) VALUES ($1, $2, $3)', [newCollection.name, newCollection.userId, newCollection.notes]);

    console.log('New collection created: ', res[0]);
    res.send(res);
  }
  } catch (e) {
    console.log('Error for /api/new-collection', e);
    }
    
  })

//  ------- ------- ------- HOME ------- ------- -------
// GET All Recipes
app.get('/api/recent-recipes/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const response = await db.any('SELECT * FROM recipes WHERE user_id = $1 ORDER BY id DESC LIMIT 5', [userId]);
    res.send(response);
  } catch (e) {
    console.log('GET /api/recent-recipes error: ', e);
    res.status(400).send({ e });
  }
});

// DELETE log
app.delete('/api/log/:id', async (req, res) => {
  const logId = req.params.id;

  try {
    await db.none('DELETE FROM diet_logs WHERE id = $1', [logId]);
    res.send();
  } catch (e) {
    console.log('ERROR IN DELETE req handler for /api/log/:id: ', e);
    res.status(400).send({ e });
  }
})
//  ------- ------- ------- FOOD TOLERANCE LIST ------- ------- -------

// GET Get all foods for 1 user:
app.get(`/api/myFoods/:id`, cors(), async (req, res) => {
  const userId = req.params.id;
  try {
    const response = await db.any('SELECT * FROM foods WHERE user_id = $1', [userId]);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});

// POST - Add a new food
app.post('/api/new-food', cors(), async (req, res, next) => {
  // Updates recipes tables with new recipe
  const newFood = {
    userId: req.body.userId,
    food: req.body.food,
    status: req.body.status,
    notes: req.body.notes
  }

  let user = newFood.userId;
  
  console.log('newFood: ', newFood);
  try {
    console.log('POST for new food - userId: ', user, typeof user);

    const foodQuery = 'INSERT INTO foods (food, status, notes, user_id) VALUES ($1, $2, $3, $4) RETURNING id';

    const values = [
      newFood.food,
      newFood.status,
      newFood.notes,
      user
    ];

    const result = await db.one(foodQuery, values);
    const newFoodId = result.id
    
    console.log('New Food Item Added: ', newFoodId, 'user: ', user);
    res.status(201);
    res.send();
  } catch (e) {
    console.log('Food Post Req Handler Error: ', e);
    res.status(400).send({ e });
  }
});

// DELETE - For multiple foods on the Food List page
app.delete('/api/delete-foods', cors(), async (req, res) => {
  const foodsToDelete = {
    userId: req.body.userId,
    items: req.body.items
  }
  console.log('in the delete req handler');
  const user = foodsToDelete.userId;
  const itemsToDelete = foodsToDelete.items;
  try {
    for (let foodId of itemsToDelete) {
      await db.none('DELETE FROM foods WHERE id = $1 AND user_id = $2', [foodId, user]);
    }
    console.log('All food items deleted!');
    res.send();
  } catch (e) {
    console.log('ERROR in DELETE req handler for /api/delete-foods: ', e);
    res.status(400).send({ e });
  }
})

// Get for Nutritional Analysis
app.get(`/api/nutr/:food`, async (req, res) => {
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

// GET All Recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const response = await db.any('SELECT * FROM recipes WHERE user_id = $1 ORDER BY id DESC', [userId]);
    res.send(response);
  } catch (e) {
    console.log('GET /api/recipes error: ', e);
    res.status(400).send({ e });
  }
});

// GET recipes filtered by collections
app.get('/api/recipes-filtered/:id/:selectedCollection', async (req, res) => {
  // Example: http://localhost:8080/api/recipes-filtered/3/Asian%20Recipes
  // TODO: search by collection ID instead of name
  const userId = req.params.id;
  const selectedCollection = req.params.selectedCollection;
  try {
    const resp = await db.any(`
      SELECT
        collections.name as collection_name, 
        recipe_collection_membership.collection_id as collection_id,
        recipe_collection_membership.recipe_id as id, 
        recipes.name as name,
        recipes.cook_time as cook_time,
        recipes.image as image,
        recipes.ingredients as ingredients,
        recipes.instructions as instructions,
        recipes.prep_time as prep_time,
        recipes.summary as summary,
        recipes.url as url,
        recipes.yield as yield,
        collections.notes as notes,
        collections.user_id as user_id
      FROM recipe_collection_membership
      LEFT JOIN collections
      ON recipe_collection_membership.collection_id = collections.id
      LEFT JOIN recipes
      ON recipe_collection_membership.recipe_id = recipes.id
      WHERE collections.user_id = $1
      AND collections.name = $2`, [userId, selectedCollection]);
    res.send(resp);
  } catch (e) {
    console.log('GET /api/recipes-filtered error: ', e);
    res.status(400).send({ e });
  }
})

// POST - Add a new recipe
app.post('/api/new-recipe', cors(), async (req, res, next) => {
  // Updates recipes tables with new recipe
  const newRecipe = {
    userId: req.body.userId,
    name: req.body.name,
    summary: req.body.summary,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    image: req.body.image,
    url: req.body.url,
    // user_id:req.body.user_id,
    prep_time: req.body.prep_time,
    cook_time: req.body.cook_time,
    yield: req.body.yield,
    collections: req.body.collections
  }

  let user = newRecipe.userId;
  
  console.log('newRecipe: ', newRecipe);
  try {
    console.log('POST for new recipe - userId: ', user, typeof user);

    const recipeQuery = 'INSERT INTO recipes (name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id';

    const values = [
      newRecipe.name, 
      newRecipe.summary,
      newRecipe.ingredients,
      newRecipe.instructions,
      newRecipe.image,
      newRecipe.url,
      user,
      newRecipe.prep_time,
      newRecipe.cook_time,
      newRecipe.yield
    ];

    const result = await db.one(recipeQuery, values);
    const newRecipeId = result.id
    
    console.log('New Recipe Added: ', newRecipeId, 'user: ', user);
    
    // Updates recipe_collection_membership with new recipe-collection connections
    if (newRecipe.collections.length > 0) {
      console.log('in the loop');
      for (let item of newRecipe.collections) {
        // let newId = await db.one('INSERT INTO recipe_collection_membership (collection_id, recipe_id) SELECT id as collection_id, $1 as recipe_id FROM collections WHERE user_id = $2 AND name = $3', [newRecipeId, user, item]);
        await db.query('INSERT INTO recipe_collection_membership (collection_id, recipe_id) SELECT id as collection_id, $1 as recipe_id FROM collections WHERE user_id = $2 AND name = $3', [newRecipeId, user, item]);
      }
      console.log('Success! New Recipe has been added to collection(s).');
    }
    
    res.status(201);
    res.send();
  } catch (e) {
    console.log('Recipe Post Req Handler Error: ', e);
    res.status(400).send({ e });
  }
});

// GET A Single Recipe
app.get('/api/recipe/:id', async (req, res) => {
  const recipeId = req.params.id;
  try {
    const response = await db.any('SELECT * FROM recipes WHERE id = $1', [recipeId]);
    res.send(response);
  } catch (e) {
    console.log('GET /api/recipe/:id');
    res.status(400).send({ e });
  }
})

// GET all recipe-collections-memberships (For viewing recipe collections)
app.get(`/api/recipe-collections/:recipeId`, cors(), async (req, res) => {
  const currRecipeId = req.params.recipeId;

  try {
    const response = await db.any('SELECT * FROM recipe_collection_membership LEFT JOIN collections ON recipe_collection_membership.collection_id = collections.id WHERE recipe_collection_membership.recipe_id = $1 AND collections.user_id = $2;', [currRecipeId, userId]);
    console.log('/api/recipe-collections userId: ', userId);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});

// TODO: create a POST for recipe-collections-memberships
// TODO: create a DELETE for recipe-collections-memberships


