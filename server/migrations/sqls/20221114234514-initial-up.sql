/* Replace with your SQL commands */

CREATE TABLE public.collections (
    id integer NOT NULL,
    name text NOT NULL,
    user_id integer,
    notes text
);

CREATE TABLE public.diet (
    id integer NOT NULL,
    type text NOT NULL,
    user_id integer
);

CREATE TABLE public.foods (
    id integer NOT NULL,
    food text NOT NULL,
    user_id integer,
    status text,
    notes text
);

CREATE TABLE public.recipe_collection_membership (
    id integer NOT NULL,
    collection_id integer,
    recipe_id integer
);

CREATE TABLE public.recipes (
    id integer NOT NULL,
    name text NOT NULL,
    summary text,
    ingredients text NOT NULL,
    instructions text NOT NULL,
    image text,
    url text,
    user_id integer,
    prep_time text,
    cook_time text,
    yield integer
);

CREATE TABLE public.saved_recipes (
    recipe integer,
    user_id integer
);

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL
);

SELECT pg_catalog.setval('public.users_id_seq', 5, true);

-- INSERTS:
INSERT INTO public.collections (id, name, user_id, notes) VALUES (1, 'Autumn Recipes', 3, 'Lots of squash, pomegranates, and Japanese cuisine.');
INSERT INTO public.collections (id, name, user_id, notes) VALUES (2, 'Low Acid Recipes', 3, 'Mostly basic foods that include white rice, bread, and low-fat meals.');
INSERT INTO public.collections (id, name, user_id, notes) VALUES (3, 'Asian Recipes', 3, 'Mainly Filipino, Indian, and Japanese dishes.');


INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (1, 'tomatoes', 3, 'avoid', 'can have if no flare-ups in 2 weeks, but generally avoid');
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (2, 'jasmine rice', 3, 'ok', NULL);
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (3, 'onions', 3, 'avoid', 'can have if no flare-ups in 2 weeks, but generally avoid');
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (4, 'tomatoes', 1, 'ok', NULL);
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (5, 'limes', 3, 'mod', 'in moderation');
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (6, 'popcorn', 3, 'ok', 'homemade is always OK');
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (7, 'nutritional yeast', 3, 'ok', NULL);
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (8, 'water', 3, 'ok', NULL);
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (9, 'alcohol', 3, 'avoid', 'spirits are ok, wine/beer in mod');
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (10, '2% milk', 3, 'mod', 'in moderation');
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (11, 'grapeseed oil', 3, 'avoid', 'never, but very little if you have to');
INSERT INTO public.foods (id, food, user_id, status, notes) VALUES (13, 'chicken', 3, NULL, 'not sure yet');

INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (1, 1, 24);
INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (2, 1, 23);
INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (3, 1, 22);
INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (4, 1, 21);
INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (5, 1, 20);
INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (6, 2, 24);
INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (7, 2, 23);
INSERT INTO public.recipe_collection_membership (id, collection_id, recipe_id) VALUES (8, 1, 24);

INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (1, 'a', 'a', 'a', 'a', 'a', 'a', 3, 'a', 'a', 1);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (2, '2', '2', '2', '2', '2', '2', 3, '2', '2', 2);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (7, '3', '3', '3', '3', '3', '3', 3, '3', '3', 3);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (9, '4', '4', '4', '4', '4', '4', NULL, '4', '4', 1);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (10, '5', '5', '5', '5', '5', '5', NULL, '5', '5', 5);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (11, '6', '6', '6', '6', '6', '6', 3, '6', '6', 6);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (12, '7', '7', '7', '7', '7', '7', 3, '7', '7', 5);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (13, '7', '7', '7', '7', '7', '7', 3, '7', '7', 5);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (14, '7', '7', '7', '7', '7', '7', 3, '7', '7', 5);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (15, '8', '8', '8', '8', '8', '88', 3, '8', '8', 8);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (16, '9', '9', '9', '9', '9', '9', 3, '9', '9', 5);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (17, '10', '10', '10', '10', '10', '10', 3, '10', '10', 10);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (18, '1', '1', '1', '1', '1', '1', 3, '1', '1', 1);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (20, 'y', 'y', 'y', 'y', 'y', 'y', 3, 'y', 'y', 2);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (21, '7', '7', '7', '7', '7', '7', 3, '7', '7', 7);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (19, '', '', '', '', '7', '', 3, '', '', 0);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (22, '8', '8', '8', '8', '8', '8', 3, '8', '8', 8);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (23, 'Keto Eggplant Parmesan', 'This keto Eggplant Parmesan is truly incredible: coated in a crispy crust that’s magically gluten free. You’ll never make it another way!', '1 medium large eggplant, about 1 pound (long and thin preferable) OR see casserole variation*
2 eggs
½ cup grated Parmesan cheese
½ cup almond flour
1 tablespoon Italian seasoning (or 1 teaspoon each dried basil, oregano and thyme)
¾ teaspoon kosher salt
2 cups jarred marinara sauce
1 cup grated mozzarella cheese (we used a combination of fresh mozzarella and shredded)
Fresh basil, to serve', '1. Preheat the oven to 425 degrees Fahrenheit. Line a baking sheet with parchment paper or spray with cooking spray. <br />
2. Cut off the ends of the eggplant and cut it into 3/8-inch slices. <br />
3. Beat the eggs in a shallow bowl and set it aside. <br />
4. Combine the Parmesan cheese, almond flour, Italian seasoning, and kosher salt in another shallow bowl and set it aside. <br />
5. Dip each eggplant slice into the egg and then the Parmesan cheese mixture. Transfer the coated eggplant slices to the prepared sheet pan in a single layer, about 1/2-inch apart.  Use two sheet pans if you do not have one large enough to fit all the slices. <br />
6. Bake the eggplant for about 20 minutes, flipping them halfway through, until tender and golden brown. <br />
7. Remove the eggplant from the oven (go to Casserole Variation* if desired). Add 2 tablespoons of the marinara sauce on top of each eggplant slice and add an equal amount of mozzarella cheese on top of the sauce. <br />
8. Return the pan to the oven and continue to bake for 5 to 7 minutes, or until the cheese is melted and the crust is golden brown. Top with torn basil. Serve with pasta (gluten free or legume pasta) or a few side dishes, or the casserole variation makes for a more filling main dish.', 'https://www.acouplecooks.com/wp-content/uploads/2020/09/Baked-Eggplant-Parmesan-008.jpg', 'https://www.acouplecooks.com/keto-eggplant-parmesan/', 3, '15 minutes', '25 minutes', 4);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (24, 'Roasted Root Vegetable Panzanella', 'This is a cold-weather twist on the classic Italian summer salad. Parsnips, sweet potatoes, and beets are tossed in a delicious maple brown butter dressing. It''s the ultimate make-ahead side for Thanksgiving.', 'For the salad

8 ounces (1/2 loaf) sourdough or country-style bread
5 tablespoons olive oil, divided, plus more as needed
1 teaspoon plus 1/4 teaspoon kosher salt, divided, plus more as needed
1/2 teaspoon freshly ground black pepper, divided, plus more as needed
2 pounds root vegetables, such as carrots, parsnips, sweet potatoes, and beets, peeled and cut into 1-inch pieces
1 small red onion, cut into 1-inch pieces
For the brown butter dressing

4 tablespoons unsalted butter
1 tablespoon chopped fresh rosemary
3 tablespoons apple cider vinegar, plus more as needed
2 teaspoons Dijon mustard
2 teaspoons maple syrup
1/4 teaspoon kosher salt
1/4 teaspoon freshly ground black pepper
For assembling

1 medium bunch (about 6 ounces) lacinato kale, destemmed and torn into bite-sized pieces
4 ounces goat cheese', '1. Preheat the oven to 425°F.
<br />Arrange the oven rack to the center of the oven.

<p>
2. Tear the bread:
<br />Tear or slice the bread into 1-inch cubes. You should have about 4 cups cubed bread.

<p>
3. Season and toast the bread:
<br />Place the cubed bread on a rimmed baking sheet, drizzle with 2 tablespoons olive oil, season with 1/4 teaspoon salt and 1/4 teaspoon black pepper, and toss with your hands to coat. Spread it out into an even layer and bake, tossing halfway through, until dry and golden, 6 to 8 minutes. Set aside on the baking sheet to cool.

4. Roast the vegetables:
<br />Add the root vegetables and onion on a separate rimmed baking sheet. Drizzle with 3 tablespoons olive oil, and season with 1 teaspoon kosher salt and 1/4 teaspoon freshly ground black pepper. Toss with your hands to coat and spread out in an even layer.

<p>Roast the vegetables, tossing halfway through, until tender and caramelized, 40 to 45 minutes.

<p>5. Make brown butter dressing:
<br />Meanwhile, cut the butter into a few pieces and place it in a small saucepan over medium heat. Cook, stirring occasionally, until the butter just begins to toast, get brown, and has a nutty aroma, about 4 minutes total.

<p>Add the rosemary and stir until fragrant, about 10 seconds. Remove from the heat and carefully stir in the vinegar, mustard, maple syrup, salt, and black pepper.

<p>6. Massage the kale:
<br />Place the kale in a large bowl. Use your hands to massage the leaves until they feel less stiff, about 1 minute.

<p>7. Assemble the salad:
<br />Once the vegetables are roasted, transfer them to the bowl of kale. Add the toasted bread and pour the dressing all over. Toss well to coat everything. 

<p>Let the salad rest at room temperature for at least 10 minutes, tossing occasionally, to distribute the dressing. Crumble the goat cheese on top and toss gently to combine.

<p>8. Serve:
<br />Serve or cover and store at room temperature for up to 4 hours. Before serving, taste and season with a splash of vinegar, a drizzle of olive oil, and salt and black pepper.', 'https://www.simplyrecipes.com/thmb/yskXndR2ccbkI9aCAKGPIdD_PLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Root-Panzanella-LEAD-5-defab282522e4aa3aedd70706a485cf5.jpg', 'https://www.simplyrecipes.com/roasted-root-vegetable-panzanella-recipe-6823042', 3, '20 mins', '50 mins', 6);
INSERT INTO public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) VALUES (25, '', '', '', '', '', '', NULL, '', '', 0);

INSERT INTO public.users (id, first_name, last_name, email) VALUES (1, 'alpha', 'alphalast', 'alpha@gmail.com');
INSERT INTO public.users (id, first_name, last_name, email) VALUES (2, 'betx', 'betalast', 'beta@gmail.com');
INSERT INTO public.users (id, first_name, last_name, email) VALUES (3, 'Melissa', 'Natividad', 'meianatividad@gmail.com');
INSERT INTO public.users (id, first_name, last_name, email) VALUES (4, 'Melissa', 'Nat', 'melissanat510@gmail.com');
INSERT INTO public.users (id, first_name, last_name, email) VALUES (5, 'Melissa', 'Natividad', 'meiamayi@gmail.com');

SELECT pg_catalog.setval('public.collections_id_seq', 3, true);

SELECT pg_catalog.setval('public.diet_id_seq', 1, false);

SELECT pg_catalog.setval('public.foods_id_seq', 13, true);

SELECT pg_catalog.setval('public.recipe_collection_membership_id_seq', 8, true);

SELECT pg_catalog.setval('public.recipes_id_seq', 25, true);

SELECT pg_catalog.setval('public.users_id_seq', 5, true);
