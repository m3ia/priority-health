# priorityHealth (pH)
<img width="338" alt="image" src="https://user-images.githubusercontent.com/38749469/203217654-598a38e0-d7bf-4120-90a1-6c825ef5a907.png">

<div align="center">
  
 </div>
 
 # Contents
  - [About](#about)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [DB Schema](#db-schema)
  - [Shoutouts!](#shoutouts)

## About
[priorityHealth](https://server-vu8f.onrender.com/) (pH) is a health tracking app for folks with special dietary needs. Users can track and view nutritional info for foods categorized by their tolerance levels, log their wellness journeys, and add recipes to different collections.

[Check out the website!](https://server-vu8f.onrender.com/)

## Features
### Food Tolerance List 
Users can track foods in color-coded cards according to what they can tolerate. This is especially useful for folks who are still learning about what foods they can or can't tolerate. This feature is also especially useful for looking up a food item card in a snap. Clicking on the single food item card will allow the user to view their notes about the food item, as well as display nutritional info.

### Recipe Collections
When users log new recipes, they can also add them to multiple collections.

### Meal Wellness Log
Every time the user signs in, they can track how their latest meal made them feel. This is especially useful for folks who are learning what foods are okay vs. not okay in the early stages of a flare-up, or understanding their restrictions.

## Tech Stack
- **Postgres** - to manage the database
- **Express** - for building a RESTful API 
- **React** - to build out the user interface
- **Node** - for the runtime environment
- **auth0** - for user log-in, authentication, and authorization
- **Docker** - to create a containerized image of the project for simpler deployment
- [**Edamam**](https://developer.edamam.com/edamam-docs-nutrition-api)'s Nutrition Analysis API
  -  Returns the nutrition data for the food tolerance cards
  -  Returns nutritional information from recipe content. Can be used to show nutritional data after a user adds a new recipe
- [**Edamam**](https://developer.edamam.com/edamam-docs-nutrition-api)'s Food Database API - Provides nutritional info for a list of recipe ingredients
- [**Interweave**](https://interweave.dev/) - a React library that allows users to add HTML styling to their instructions 

## DB Schema
![image](https://user-images.githubusercontent.com/38749469/203233741-20f03ca7-5fe9-4136-9028-c5779276e7b3.png)

## Shoutouts: 
- [Techtonica](https://techtonica.org/) for the opportunity, lessons, and resources to build my passion project
- [Techtonica's Fall 2022](https://techtonicaorg.medium.com/) cohort for all the help, love, and support to build it
- [@jbriseno13](https://github.com/jbriseno13) for her great eye that helped me make this project pretty!
