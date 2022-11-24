# priorityHealth (pH)
<div align="center"><img width="656" alt="image" src="https://user-images.githubusercontent.com/38749469/203641830-020e9367-b56e-4a11-90db-7c6b267527dd.png"></div>

<div align="center">
  
 </div>
 
 # Contents
  - [About](#about)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [DB Schema](#db-schema)
  - [Shoutouts](#shoutouts)
  - [Installation](#installation)
  - [Testing](#testing)

## About
[priorityHealth](https://server-vu8f.onrender.com/) (pH) is a health tracking app for folks with special dietary needs. Users can track and view nutritional info for foods categorized by their tolerance levels, log their wellness journeys, and add recipes to different collections.

[Check out the website!](https://server-vu8f.onrender.com/)

**Try it out yourself:**
<br />Test account: priorityhealth2022@gmail.com
<br />Password: [the name of the program I built this for! all lowercase][the current year]

## Features
### Food Tolerance List 
Users can track foods in color-coded cards according to what they can tolerate. This is especially useful for folks who are still learning about what foods they can or can't tolerate. This feature is also especially useful for looking up a food item card in a snap. Clicking on the single food item card will allow the user to view their notes about the food item, as well as display nutritional info.
<div align="center"><img width="600" alt="image" src="https://user-images.githubusercontent.com/38749469/203640724-a20998e6-eaa1-4571-8fab-df926646d4a4.png"></div>

### Recipe Collections
Once a users logs a new recipe, they can also add them to multiple collections.
<div align="center"><img width="600" alt="image" src="https://user-images.githubusercontent.com/38749469/203648672-ac495f78-929b-4bcf-a0b7-b618bd7745dd.png"></div>

### Meal Wellness Log
Every time the user signs in, they can track how their latest meal made them feel. This is especially useful for folks who are learning what foods are okay/not okay in the early stages of a flare-up or in understanding their restrictions.
<div align="center"><img width="457" alt="image" src="https://user-images.githubusercontent.com/38749469/203652705-8720dffc-3773-4986-815a-339ffb8b2c31.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/38749469/203652886-1bcd76fa-2a4a-4317-a5c2-150f65e9ba10.png"></div>

## Tech Stack
- **Postgres** - to manage the database
- **Express** - for building a RESTful API 
- **React** - to build out the user interface
- **Node** - for the runtime environment
- **auth0** - for user log-in, authentication, and authorization
- **Docker** - to create a containerized image of the project for simpler deployment
- [**Edamam's Nutrition Analysis API**](https://developer.edamam.com/edamam-docs-nutrition-api)
  -  Returns the nutrition data for the food tolerance cards
  -  Returns nutritional information from recipe content.
- [**Edamam's Food Database API**](https://developer.edamam.com/food-database-api) - Provides nutritional info for a list of recipe ingredients
- [**Interweave**](https://interweave.dev/) - a React library that allows users to add HTML styling to their instructions 

## DB Schema
<div align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/38749469/203233741-20f03ca7-5fe9-4136-9028-c5779276e7b3.png"></div>

## Shoutouts: 
- [Techtonica](https://techtonica.org/) for the opportunity, lessons, and resources to build my passion project
- [Techtonica's Fall 2022](https://medium.com/techtonica/techtonicas-2022-h2-cohort-is-ready-for-swe-placements-1a94f2898ad9) cohort for all the help, love, and support to build it
- [@jbriseno13](https://github.com/jbriseno13) for her great eye that helped me make this project pretty!

## Installation

1. Clone the repo:
`https://github.com/m3ia/priority-health`

2. Install all NPM packages using this in the root directory:
`npm install`

3. Database setup:
 - Copy the root example environment file
 - `cp .env.example .env`
 - You can choose to edit .env or just use as-is.
 - Run the following to setup the database with the seed file:
 - `npm run db:init`

## Testing
**This app uses Jest Testing**
 - To run tests on the terminal, switch to the client directory, run: `npm test`
   
