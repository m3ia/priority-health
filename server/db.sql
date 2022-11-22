--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 14.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: collections; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.collections (
    id integer NOT NULL,
    name text NOT NULL,
    user_id integer,
    notes text
);


ALTER TABLE public.collections OWNER TO melissanatividad;

--
-- Name: collections_id_seq; Type: SEQUENCE; Schema: public; Owner: melissanatividad
--

CREATE SEQUENCE public.collections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.collections_id_seq OWNER TO melissanatividad;

--
-- Name: collections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: melissanatividad
--

ALTER SEQUENCE public.collections_id_seq OWNED BY public.collections.id;


--
-- Name: diet_logs; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.diet_logs (
    id integer NOT NULL,
    user_id integer,
    feeling text,
    notes text,
    date date DEFAULT now(),
    meal text
);


ALTER TABLE public.diet_logs OWNER TO melissanatividad;

--
-- Name: diet_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: melissanatividad
--

CREATE SEQUENCE public.diet_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diet_logs_id_seq OWNER TO melissanatividad;

--
-- Name: diet_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: melissanatividad
--

ALTER SEQUENCE public.diet_logs_id_seq OWNED BY public.diet_logs.id;


--
-- Name: foods; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.foods (
    id integer NOT NULL,
    food text NOT NULL,
    user_id integer,
    status text,
    notes text
);


ALTER TABLE public.foods OWNER TO melissanatividad;

--
-- Name: foods_id_seq; Type: SEQUENCE; Schema: public; Owner: melissanatividad
--

CREATE SEQUENCE public.foods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.foods_id_seq OWNER TO melissanatividad;

--
-- Name: foods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: melissanatividad
--

ALTER SEQUENCE public.foods_id_seq OWNED BY public.foods.id;


--
-- Name: recipe_collection_membership; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.recipe_collection_membership (
    id integer NOT NULL,
    collection_id integer,
    recipe_id integer
);


ALTER TABLE public.recipe_collection_membership OWNER TO melissanatividad;

--
-- Name: recipe_collection_membership_id_seq; Type: SEQUENCE; Schema: public; Owner: melissanatividad
--

CREATE SEQUENCE public.recipe_collection_membership_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipe_collection_membership_id_seq OWNER TO melissanatividad;

--
-- Name: recipe_collection_membership_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: melissanatividad
--

ALTER SEQUENCE public.recipe_collection_membership_id_seq OWNED BY public.recipe_collection_membership.id;


--
-- Name: recipes; Type: TABLE; Schema: public; Owner: melissanatividad
--

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


ALTER TABLE public.recipes OWNER TO melissanatividad;

--
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: melissanatividad
--

CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipes_id_seq OWNER TO melissanatividad;

--
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: melissanatividad
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    allergies text,
    diet_pref text,
    diet_restr text
);


ALTER TABLE public.users OWNER TO melissanatividad;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: melissanatividad
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO melissanatividad;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: melissanatividad
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: collections id; Type: DEFAULT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.collections ALTER COLUMN id SET DEFAULT nextval('public.collections_id_seq'::regclass);


--
-- Name: diet_logs id; Type: DEFAULT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.diet_logs ALTER COLUMN id SET DEFAULT nextval('public.diet_logs_id_seq'::regclass);


--
-- Name: foods id; Type: DEFAULT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.foods ALTER COLUMN id SET DEFAULT nextval('public.foods_id_seq'::regclass);


--
-- Name: recipe_collection_membership id; Type: DEFAULT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.recipe_collection_membership ALTER COLUMN id SET DEFAULT nextval('public.recipe_collection_membership_id_seq'::regclass);


--
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: collections; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.collections (id, name, user_id, notes) FROM stdin;
1	Autumn Recipes	3	Lots of squash, pomegranates, and Japanese cuisine.
2	Low Acid Recipes	3	Mostly basic foods that include white rice, bread, and low-fat meals.
3	Asian Recipes	3	Mainly Filipino, Indian, and Japanese dishes.
4	Test REcipes	1	Nothing
5	African	3	notes
6	American	3	notes
7	Appetizer	3	notes
8	BBQ	3	notes
9	Brunch	3	notes
10	Gluten Free	3	notes
11	Hypoglycemic	3	notes
12	Thanksgiving	3	notes
13	Smoothies	3	notes
14	Umami	3	notes
15	Filipino	3	\N
17	Vietnamese	3	\N
18	Paleo	3	\N
19	Vegan	3	\N
20	Indian	3	\N
21	Salads	3	\N
22	Desserts	3	\N
23	Seafood	3	\N
\.


--
-- Data for Name: diet_logs; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.diet_logs (id, user_id, feeling, notes, date, meal) FROM stdin;
1	3	good	notes notes notes	2022-11-17	\N
3	3	ok	notes notes notes	2022-11-15	\N
4	3	bad	notes notes notes	2022-11-12	\N
2	3	good	notes notes notes	2022-11-16	\N
6	3	good	hi	2022-11-18	breakfast
8	3	good	test2	2022-11-18	test 2
9	3	ok	asdfasf	2022-11-18	adf
10	3	good	asdf	2022-11-18	asdf
11	3	bad	sdf	2022-11-18	asdf
12	3	bad	asdf	2022-11-18	asdf
13	3	bad	asdf	2022-11-18	asdf
14	3	good	real good bread	2022-11-18	bread
15	3	bad	asdfasdf	2022-11-18	ANOTHER MEAL
16	3	good	goood	2022-11-20	dinner
18	3	ok		2022-11-20	sd
19	3	good	alskdjf	2022-11-20	6:43
20	3	bad	asdfasdf\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n	2022-11-20	asdf
21	3	good	kjh	2022-11-21	jlk
\.


--
-- Data for Name: foods; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.foods (id, food, user_id, status, notes) FROM stdin;
2	jasmine rice	3	ok	\N
4	tomatoes	1	ok	\N
5	limes	3	mod	in moderation
6	popcorn	3	ok	homemade is always OK
7	nutritional yeast	3	ok	\N
8	water	3	ok	\N
13	chicken	3	\N	not sure yet
23	banana	3	ok	f
41	sashimi	3	ok	
42	sushi	3	ok	
43	apple	3	ok	
44	plain oats	3	ok	
45	honey	3	ok	
46	raspberries	3	mod	
48	earl grey tea	3	mod	
49	green tea	3	mod	
50	sorbet	3	mod	
51	cashew ice cream	3	mod	
55	beer	3		
56	cauliflower	3		
57	strawberries	3		
58	pumpkin seeds	3		
59	salami	3		
60	garlic	3	avoid	
61	onions	3	avoid	
62	fried food	3	avoid	
63	butter	3	avoid	
64	pizza	3	avoid	
65	sunflower oil	3	avoid	
\.


--
-- Data for Name: recipe_collection_membership; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.recipe_collection_membership (id, collection_id, recipe_id) FROM stdin;
1	1	24
2	1	23
6	2	24
7	2	23
8	1	24
9	1	24
34	1	43
35	2	43
36	3	43
37	2	45
38	1	45
39	3	45
41	17	45
40	15	43
42	18	47
43	19	47
10	20	48
44	19	48
45	3	50
46	3	50
47	3	49
48	1	51
49	1	52
50	1	53
51	2	53
52	6	53
53	1	54
54	2	54
55	7	54
56	15	55
57	15	56
58	6	57
59	2	57
60	2	58
61	1	24
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) FROM stdin;
23	Keto Eggplant Parmesan	This keto Eggplant Parmesan is truly incredible: coated in a crispy crust that’s magically gluten free. You’ll never make it another way!	1 medium large eggplant, about 1 pound (long and thin preferable) OR see casserole variation*\n2 eggs\n½ cup grated Parmesan cheese\n½ cup almond flour\n1 tablespoon Italian seasoning (or 1 teaspoon each dried basil, oregano and thyme)\n¾ teaspoon kosher salt\n2 cups jarred marinara sauce\n1 cup grated mozzarella cheese (we used a combination of fresh mozzarella and shredded)\nFresh basil, to serve	1. Preheat the oven to 425 degrees Fahrenheit. Line a baking sheet with parchment paper or spray with cooking spray. <br />\n2. Cut off the ends of the eggplant and cut it into 3/8-inch slices. <br />\n3. Beat the eggs in a shallow bowl and set it aside. <br />\n4. Combine the Parmesan cheese, almond flour, Italian seasoning, and kosher salt in another shallow bowl and set it aside. <br />\n5. Dip each eggplant slice into the egg and then the Parmesan cheese mixture. Transfer the coated eggplant slices to the prepared sheet pan in a single layer, about 1/2-inch apart.  Use two sheet pans if you do not have one large enough to fit all the slices. <br />\n6. Bake the eggplant for about 20 minutes, flipping them halfway through, until tender and golden brown. <br />\n7. Remove the eggplant from the oven (go to Casserole Variation* if desired). Add 2 tablespoons of the marinara sauce on top of each eggplant slice and add an equal amount of mozzarella cheese on top of the sauce. <br />\n8. Return the pan to the oven and continue to bake for 5 to 7 minutes, or until the cheese is melted and the crust is golden brown. Top with torn basil. Serve with pasta (gluten free or legume pasta) or a few side dishes, or the casserole variation makes for a more filling main dish.	https://www.acouplecooks.com/wp-content/uploads/2020/09/Baked-Eggplant-Parmesan-008.jpg	https://www.acouplecooks.com/keto-eggplant-parmesan/	3	15 minutes	25 minutes	4
24	Roasted Root Vegetable Panzanella	This is a cold-weather twist on the classic Italian summer salad. Parsnips, sweet potatoes, and beets are tossed in a delicious maple brown butter dressing. It's the ultimate make-ahead side for Thanksgiving.	For the salad\n\n8 ounces (1/2 loaf) sourdough or country-style bread\n5 tablespoons olive oil, divided, plus more as needed\n1 teaspoon plus 1/4 teaspoon kosher salt, divided, plus more as needed\n1/2 teaspoon freshly ground black pepper, divided, plus more as needed\n2 pounds root vegetables, such as carrots, parsnips, sweet potatoes, and beets, peeled and cut into 1-inch pieces\n1 small red onion, cut into 1-inch pieces\nFor the brown butter dressing\n\n4 tablespoons unsalted butter\n1 tablespoon chopped fresh rosemary\n3 tablespoons apple cider vinegar, plus more as needed\n2 teaspoons Dijon mustard\n2 teaspoons maple syrup\n1/4 teaspoon kosher salt\n1/4 teaspoon freshly ground black pepper\nFor assembling\n\n1 medium bunch (about 6 ounces) lacinato kale, destemmed and torn into bite-sized pieces\n4 ounces goat cheese	1. Preheat the oven to 425°F.\n<br />Arrange the oven rack to the center of the oven.\n\n<p>\n2. Tear the bread:\n<br />Tear or slice the bread into 1-inch cubes. You should have about 4 cups cubed bread.\n\n<p>\n3. Season and toast the bread:\n<br />Place the cubed bread on a rimmed baking sheet, drizzle with 2 tablespoons olive oil, season with 1/4 teaspoon salt and 1/4 teaspoon black pepper, and toss with your hands to coat. Spread it out into an even layer and bake, tossing halfway through, until dry and golden, 6 to 8 minutes. Set aside on the baking sheet to cool.\n\n4. Roast the vegetables:\n<br />Add the root vegetables and onion on a separate rimmed baking sheet. Drizzle with 3 tablespoons olive oil, and season with 1 teaspoon kosher salt and 1/4 teaspoon freshly ground black pepper. Toss with your hands to coat and spread out in an even layer.\n\n<p>Roast the vegetables, tossing halfway through, until tender and caramelized, 40 to 45 minutes.\n\n<p>5. Make brown butter dressing:\n<br />Meanwhile, cut the butter into a few pieces and place it in a small saucepan over medium heat. Cook, stirring occasionally, until the butter just begins to toast, get brown, and has a nutty aroma, about 4 minutes total.\n\n<p>Add the rosemary and stir until fragrant, about 10 seconds. Remove from the heat and carefully stir in the vinegar, mustard, maple syrup, salt, and black pepper.\n\n<p>6. Massage the kale:\n<br />Place the kale in a large bowl. Use your hands to massage the leaves until they feel less stiff, about 1 minute.\n\n<p>7. Assemble the salad:\n<br />Once the vegetables are roasted, transfer them to the bowl of kale. Add the toasted bread and pour the dressing all over. Toss well to coat everything. \n\n<p>Let the salad rest at room temperature for at least 10 minutes, tossing occasionally, to distribute the dressing. Crumble the goat cheese on top and toss gently to combine.\n\n<p>8. Serve:\n<br />Serve or cover and store at room temperature for up to 4 hours. Before serving, taste and season with a splash of vinegar, a drizzle of olive oil, and salt and black pepper.	https://www.simplyrecipes.com/thmb/yskXndR2ccbkI9aCAKGPIdD_PLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Root-Panzanella-LEAD-5-defab282522e4aa3aedd70706a485cf5.jpg	https://www.simplyrecipes.com/roasted-root-vegetable-panzanella-recipe-6823042	3	20 mins	50 mins	6
43	Chicken Tinola	Tinola is an easy, one-pot soup from the Philippines. Chicken, chayote squash (or papaya!), bok choy, and spinach are simmered with fresh ginger in a savory broth that's often served with white rice.\n\n	1 tablespoon cooking oil\n\n1 medium onion, chopped\n\n2 cloves garlic, minced\n\n1 (1 1/2 inch) piece fresh ginger, peeled and thinly sliced\n\n1 tablespoon fish sauce\n\n3 pounds chicken legs and thighs, rinsed and patted dry\n\n2 (14 ounce) cans chicken broth\n\n1 chayote squash, peeled and cut into bite-sized pieces\n\nsalt and ground black pepper to taste\n\n1 head bok choy, chopped\n\n1 (8 ounce) package fresh spinach, chopped	1. Heat oil in a large pot over medium heat. Add onion and garlic; cook and stir until fragrant, about 2 minutes. Add ginger and fish sauce; cook and stir for 1 to 2 minutes. Stir in chicken and cook for 5 minutes.\n<p>\n2. Pour in chicken broth and cook for 5 minutes. Add squash and simmer until chicken is no longer pink in the center, about 10 minutes. Season with salt and pepper.\n<p>\n3. Add bok choy and spinach; cook until spinach is just wilted, 1 to 2 minutes. Serve hot.\n<p>\n<img src= "https://www.allrecipes.com/thmb/UCNWB7baVKrgFdF8uaYXX6iTTVU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8964634-a36d900ff8b54c5ba68208540872ff53.jpg">	https://www.allrecipes.com/thmb/46ue8L5rZjSI8STgt-QVzgowdAk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/212929-chicken-tinola-4x3-1-167b1eadea9a448d8e00dac30c501d66.jpg	https://www.allrecipes.com/recipe/212929/chicken-tinola/	3	20 mins	30 mins	4
45	Vietnamese Air-Fried Wings	These Vietnamese Air-Fried Wings are so easy to make! They’re so crispy and full of flavor, and you’ll never believe they were air-fried.\n\nFor this recipe, I recommend marinating overnight (or at least 4 hours) and using the double-fry method. I cook them at a lower temperature first, pull them out to rest, then air-fry them at a higher temperature. This is to ensure the inside doesn’t get overcooked and stays moist. If you only care about crispy skin, then you don’t need to let it rest. 🙂 You can serve them alone or dip them in nuoc mam.\n\nThe air-fryer I use is the Ninja 10 qt Dual-Basket, and I absolutely love having two baskets!! If you don’t live near an Asian store, you can order ingredients online from Saywee and get $20 off your first order when using my link.	1.75 pounds wings (mine had the tips, so cooking time will vary depending on what you use)\nMarinade\n2 tablespoons fish sauce\n1 teaspoon chicken bouillon powder\n1 teaspoon garlic powder\n2 teaspoons white sugar\nCoating\n2 tablespoon all-purpose flour\n1 tablespoon corn starch\n1 teaspoon salt\n1/2 teaspoon garlic powder\n1/2 teaspoon black pepper\n1/4 teaspoon chicken bouillon powder\nTo serve:\nlime\ncrushed peanuts\nfried garlic (I love Jus Garlic but you can also make your own)\ncilantro	1. Mix together all ingredients for the marinade. Toss in chicken and marinate in the fridge for 4+ hours in a bag. If using a bowl, be sure to give it a mix after a few hours to evenly distribute.\n<br />\n2. Mix together ingredients for coating.\nPlace wings in one layer to dry with a paper towel. Moisture prevents wings from getting crispy.\n<br />\n3. Coat wings with oil, and then combine with flour mixture. Let the wings sit for at least 15 minutes. This will help the wings get crispier.\n<br />\n4. Place wings in the Ninja Foodi Air Fryer basket in one layer. Insert basket in the unit, turn the dial to select AIR FRY, set temp to 350, and set time to 10 minutes. If your wings look smaller or don’t have the tip attached, go with 8. This will be the first fry of the double-fry method. (Do not overcrowd. Cook in batches to ensure crispness.)\n<br />\n5. Open the basket of wings and let it cool for 5 minutes, so the chicken doesn’t overcook when cooking for the second time. Insert basket, set temp to 400, and set the timer for 15-16 minutes. (check around 10 minutes since the size of wings will cause the cooking time to vary)\n<br />\n6. Plate wings, top with lime juice, crushed peanuts, and cilantro	http://theasiantestkitchen.com/wp-content/uploads/2022/01/Vietnamese-wings-2-768x500.jpg	http://theasiantestkitchen.com/vietnamese-air-fried-wings/	3	10 min	30 min	2
47	Paleo Maple Pecan Apple Crisp {Vegan}	A healthy version of a classic fall dessert, this Paleo Maple Pecan Apple Crisp is the perfect warm and sweet comfort food on cozy nights.  It’s grain free, gluten free, paleo, vegan, and soy free with simple whole ingredients and the fall flavors you crave.\n\n	crisp topping:\n1/3 cup organic coconut oil refined, solid, or vegan butter\n1 cup pecan halves\n3/4 cup blanched almond flour\n2 tablespoons pure maple syrup\n2/3 cup coconut flakes unsweetened\n1 teaspoon pure vanilla extract\n2 teaspoons ground cinnamon *\n1/2 teaspoon ground nutmeg\n1/4 teaspoon ground ginger\n1/4 teaspoon ground allspice or cloves\n1/4 teaspoon sea salt\napple filling:\n7 medium apples peeled, and sliced to 1/4 inch thickness. (Pink lady and Honeycrisp are great!)\n1 1/2 teaspoons cinnamon *\n1/4 teaspoon nutmeg\n1/4 teaspoon ginger\n3 tablespoons maple sugar or coconut sugar\n1 teaspoon pure vanilla extract\n1 tablespoon tapioca flour or arrowroot	Preheat your oven to 350° F.\n\nBegin with the crisp topping. Place all the ingredients in a food processor and pulse until the nuts break down and a crumbly, pasty mixture forms. Chill in the refrigerator while you prepare the filling.\n\nIn a large bowl, toss the sliced apples with the spices, tapioca, maple sugar and vanilla, then transfer to a 9 or 10 inch pie dish or baking dish, set aside.\n\nDrop/dollop the topping all over the apples to fully cover (or as fully as possible) and bake in the preheated oven for 40-45 minutes or until the apples are bubbling and the topping is brown and crisp. Check around 25-30 minutes and if the topping is browning too much, cover with aluminum foil for the last 15 minutes.\n\nLet sit for at least 30 minutes to cool down before serving warm.  Serve with coconut vanilla ice cream if desired.  \n\nIf you're lucky enough to have leftovers, you can store leftovers in the fridge for up to 3 days (without the ice cream!) and reheat before serving.  Enjoy!	https://www.paleorunningmomma.com/wp-content/uploads/2014/09/apple-crisp_-9.jpg	https://www.paleorunningmomma.com/paleo-maple-pecan-apple-crisp/	3	20 minutes	50 minutes	8
48	Gluten Free Naan (Vegan Flatbread)	This vegan, gluten-free naan bread uses just 6 base ingredients, no yeast, and around 20 minutes. Easy to make Indian flatbread recipe!	1 cup gluten-free flour\n1/3 cup dairy-free yogurt\n1/4 scant cup warm water\n1 tsp baking powder\n1 tbsp olive oil (or any other oil)\n1/4 tsp salt\n2 tsp Aquafaba (liquid in canned chickpeas\nMinced garlic, oil, and fresh herbs (to garnish)	1. Pour in warm water, yogurt, olive oil, and Aquafaba. \n<br />\n2. Stir with a spoon, then use your hands to knead the dough. It should be a soft and pliable dough, not too dry but not sticky either\n<br />\n3. Pour in warm water, yogurt, olive oil, and Aquafaba. Stir with a spoon, then use your hands to knead the dough. It should be a soft and pliable dough, not too dry but not sticky either\n<br />\n4. Divide the dough into 4 portions and sprinkle your working surface with some tapioca flour\n<br />\n5. Divide the dough into 4 portions and sprinkle your working surface with some tapioca flour.\n<br />\n6. Preheat a skillet on the stove over high heat. Meanwhile, roll out each dough ball with a rolling pin (or a glass), adding more tapioca flour if needed, to avoid sticking.\n<br />\n8. Once the skillet is hot, add the flatbread and cook it with a lid over medium-high heat for a few minutes. I saw bubbles forming after less than 3 minutes. Flip the flatbread and let it cook for a further few minutes. Do this with the remaining dough. Cover the finished flat breads with a tea towel until serving.\n<br />\n9. Once the skillet is hot, add the flatbread and cook it with a lid over medium-high heat for a few minutes. I saw bubbles forming after less than 3 minutes. Flip the flatbread and let it cook for a further few minutes. Do this with the remaining dough. Cover the finished flat breads with a tea towel until serving.\n<br />\n10. Serve warm, drizzle with some oil or vegan butter, add minced fresh garlic (and/or garlic powder), salt, and fresh herbs. Enjoy!\n<br />\n11. Serve warm, drizzle with some oil or vegan butter, add minced fresh garlic (and/or garlic powder), salt, and fresh herbs. Enjoy!	https://elavegan.com/wp-content/uploads/2020/10/gluten-free-naan-bread-on-a-plate-with-hand-pinching-one.jpg	https://elavegan.com/vegan-gluten-free-naan/	3			1
49	Burmese Pumpkin Chicken Stew	This recipe serves six and can be served over rice or lentils.	1 small Hokkaido pumpkin, 6 inches in diameter\n\n3 boneless, skinless chicken breasts\n\n1 large white onion\n\n1 head garlic\n\n1 piece of fresh ginger root, 2 inches long\n\n1 teaspoon paprika\n\n½ teaspoon black pepper\n\n1 tablespoon salt\n\n1 tablespoon powdered or granulated chicken stock\n\n½ cup vegetable oil\n\n1 bunch fresh cilantro	1. Dice pumpkin into chunks 1- to 2-inches long. You can peel the pumpkin, or leave the rind on. Set aside.\n<br />\n2. Dice chicken into cubes 1-inch thick. Set aside.\n<br />\n3. Dice onion, garlic and ginger into a fine mince. Set aside.\n<br />\n4. Saute onion, garlic and ginger in vegetable oil in soup pot over moderate heat until vegetables begin to brown.\n<br />\n5. Add chicken and saute until meat begins to brown.\n<br />\n6. Add pumpkin, salt, paprika, black pepper and chicken stock.\n<br />\n7. Simmer until pumpkin is tender and chicken is cooked, about 30 minutes.\n<br />\n8. Serve sprinkled with freshly chopped cilantro leaves.	https://www.kaveyeats.com/wp-content/uploads/2019/10/golden_pumpkin_curry_sized.jpg	https://www.courier-journal.com/story/life/food/c-j-recipes/2015/10/20/recipe-burmese-pumpkin-chicken-stew/74026038/	3	10 minutes	25 minutes	4
46	Healthy Starbucks Cranberry Bliss Bars (Gluten Free, Vegan Option)	The Starbucks Cranberry Bliss Bars are essentially an orange zest-kissed blondie studded with cranberries & white chocolate, then topped with cream cheese frosting and MORE berries and chocolate.\n\nThis was my most requested remake EVER.⁣ I’d never actually tried these before (I know, I know), but so many of you requested them that I got my butt to a Starbucks, and I get it: they’re dang good. This got me thinking, how do I make this into something that feels as good as it looks?	1/2 cup unsalted creamy almond butter⁣\n1/4 cup maple syrup ⁣\n1 pasture-raised egg (can sub a flax egg) ⁣\n1 teaspoon vanilla extract ⁣\n1 cup almond flour ⁣\n1/4 teaspoon fine grain sea salt ⁣\n1/2 teaspoon baking soda⁣\nZest of one orange ⁣\n2/3 cup each dried cranberries and white chocolate chips, divided ⁣\nSimple cream cheese frosting (recipe in notes) ⁣	1. Preheat the oven to 325 degrees Fahrenheit.\n<br />\n2. In a large bowl, stir together the almond butter, maple syrup, egg, vanilla, almond flour, salt, baking soda, and orange zest until smooth. ⁣\n<br />\n3. Stir in 1/3 cup each of dried cranberries and white chocolate chips.\n<br />\n4. Plop (it’ll be thick!) into a parchment-lined 8×8” pan and press until it’s even and spreads to the edges. \n<br />\n5. Bake 20 min or until edges are just brown, then let cool in pan.⁣\n<br />\n6. Remove blondies from pan, then spread with cream cheese frosting if using.\n<br />\n7. Cut in half, then turn and cut in half again to make 4 big squares, then cut on each diagonal to make 8 scone-shaped triangles.\n<br />\n8. Sprinkle with remaining 1/3 cup cranberries.\n<br />\n9. Melt remaining 1/3 cup white chocolate in 15 second intervals in the microwave and drizzle on top.\n<br />\n10. Store in fridge and enjoy!	https://www.skinnytaste.com/wp-content/uploads/2013/12/Cranberry-Bliss-Bars-550x795.jpg	https://www.lizmoody.com/healthy-starbucks-cranberry-bliss-bars/	3			0
50	30-Minute Chicken Stir Fry Easy Dinner Recipe		8 - 10 oz. rice noodles or thin spagetthi\n3 tablespoon + 1 teaspoon olive oil\n1/2 cup store bought or homemade chicken broth\n1/4 cup soy sauce\n1 tablespoon sherry cooking wine or rice wine\n1 teaspoon corn starch\n4 0 z. green onion cut into 1 in length\n4 oz. snow peas\n1 red bell pepper sliced\n1 teaspoon grated fresh ginger\n6 skinless boneless chicken thighs cut into bite size pieces\nsplash of sesame oil	1. Bring a large pot of salted water to a boil. Add the noodles and cook according to instructions on the package. Drain and stir in 1 teaspoon of olive oil. Set aside.\n<br />\n2 .In a small mixing bowl combine chicken broth, soy sauce, sherry wine and corn starch. Mix and set aside.\n<br />\n3. In a large skillet over medium/high heat, heat 1 tablespoon of olive oil. Add green onion, sliced red bell pepper, snow peas and grated ginger. Stir-fry until tender, about 3-5 minutes. Transfer to a plate.\n<br />\n4. Add 2 tablespoons of olive oil to the skillet and heat on the medium/high heat. Divide chicken in two batches, stir-fry each batch of chicken until chicken is cooked thru about 5 minutes.\n<br />\n5. Add vegetables, noodles and broth mixture and stir-fry for 2 minutes or until noodles are heated thru. \n<br />\n6. Serve warm with a splash of sesame seed oil and soy sauce for seasoning. Grab a fork and enjoy!	https://www.eatwell101.com/wp-content/uploads/2018/03/Chicken-Pasta-and-Broccoli-Skillet.jpg	https://www.munchkintime.com/30-minute-chicken-stir-fry-easy-dinner-recipe/	3	15 mins	15 mins	4
51	PARMESAN ORZO WITH MUSHROOMS AND SPINACH	I always have pasta in my pantry. Typically also a jar of marinara sauce, some chicken sausage in my freezer, and a bunch of veggies in my fridge. Pasta is the great equalizer because everyone loves it (except my three year old currently), it’s so easy to use up extra vegetables in it, and it’s generally a pretty quick meal. That’s why you see so many pasta recipes here on my blog! And while I almost always have some sort of meat on hand to add to pasta, like our favorite chicken sausage from Costco, pasta is one of the easiest meals to make meatless. I love this parmesan orzo with spinach and mushrooms because it’s so flavorful, the orzo cooks quicker than other pastas, and it’s a great way to incorporate more spinach into your diet.\n\n	1 lb. orzo pasta\n3 tbsp. olive oil\n12 oz. mushrooms, chopped\n10 oz. fresh spinach\n1 tsp. garlic powder\n1 tsp. onion powder\n1 tsp. salt\n½ tsp. freshly ground black pepper\n2 tsp. oregano\n1 cup parmesan cheese\n4 tbsp. milk, cream, or half-and-half	1. Bring a large pot of salted water to a boil and cook orzo according to pasta directions. Drain and set aside.\n<br />\n2. Heat olive oil in the same pot. Add mushrooms and cook until tender, then add spinach and cook until wilted.\n<br />\n3. Return orzo to pot and stir to combine. Add garlic powder, onion powder, salt, pepper, oregano, and parmesan cheese and stir to combine.\n<br />\n4. Add milk, cream, or half-and-half and stir to combine. If you want more or less liquid in the pasta you can adjust to your taste! I find that the liquid combines with the cheese for a bit of a creamier pasta.\n<br />\n5. Taste and adjust seasonings if needed!\n<br />\n6. Enjoy!	https://i0.wp.com/fortheloveofgourmet.com/wp-content/uploads/2020/02/IMG_1796.jpg	https://fortheloveofgourmet.com/parmesan-orzo-with-mushrooms-and-spinach/	3	10 min	20 min	5
52	ROASTED VEGETABLE LASAGNA	This recipe uses a lot of different vegetables: broccoli, mushrooms, onion, bell pepper, and zucchini are the frontrunners here, tucked in between lasagna noodles with plenty of cheese and an herby béchamel sauce. Don’t let the fancy name fool you; béchamel sauce is easy to make with a simple base of butter, flour, and milk. Fresh herbs, garlic, and a touch of nutmeg bring it to the next level.\n\n	12-15 lasagna noodles\nRoasted Vegetables\n2 large broccoli crowns, broken into florets\n8 oz. sliced mushrooms\n1 red bell pepper, chopped\n1 onion, chopped\n1 zucchini, chopped\nOlive oil\nSalt\nPepper\nBechamel Sauce\n5 tbsp. butter\n¼ cup flour\n4 cups milk\n2 tsp. salt\n¼ tsp. nutmeg\n2 tbsp. fresh herbs (I used thyme and oregano)\n½ tsp. garlic powder\nCheese\n24 oz. cottage cheese or ricotta cheese\n½ cup finely grated Parmesan cheese\n½ tsp. salt\n¼ tsp. ground black pepper\n½ tsp. garlic powder\n1 tsp. dried oregano\n1 tsp. dried basil\n16 oz. shredded mozzarella cheese	1. Bring a large pot of salted water to a boil and prepare lasagna noodles according to package directions for al dente pasta. Drain and set aside. Drizzle with olive oil to prevent sticking.\n<br />\n2. Preheat oven to 400 degrees Fahrenheit. Spread vegetables over two sheet pans and drizzle with olive oil. Sprinkle with salt and pepper and use your hands to toss to coat. Bake for 25-30 minutes until tender and remove from oven to cool.\n<br />\n3. Meanwhile, make your béchamel sauce. Melt butter in a large saucepan. Whisk in flour and stir until full incorporated. Whisk in milk, salt, nutmeg, thyme, and garlic powder. Bring to a simmer over low heat and cook until thickened, whisking frequently to avoid clumps. This will take about 10 minutes.\n<br />\n4. Transfer broccoli to a cutting board and chop until it is the same size as the other vegetables. If the florets are too large you will have trouble keeping your lasagna together. Place all roasted vegetables in a large bowl.\n<br />\n5. In a medium bowl, combine cottage cheese or ritocotta cheese, parmesan cheese, salt, pepper, garlic powder, oregano, and basil. Stir to combine.\n<br />\n6. Reduce oven temperature to 350 degrees and prepare your lasagna. Spray a 13 x 9 pan with nonstick cooking spray.\n<br />\n7. Spread about ½ cup of bechamel sauce on the bottom of the pan and place 3 lasagna noodles. Top with roasted vegetables, cheese mixture, a few handfuls of mozzarella cheese, and bechamel sauce. Continue with remaining layers until complete. I like my final layer to be just bechemel sauce and the remaining mozzarella cheese.\n<br />\n8. Bake for 45-50 minutes until bubbling. Allow to cool at least 45 minutes before slicing and serving.\n<br /> \n9. Enjoy!	https://i2.wp.com/fortheloveofgourmet.com/wp-content/uploads/2018/07/DSC_0364.jpg	http://fortheloveofgourmet.com/roasted-vegetable-lasagna/	3	45 minutes	50 minutes	6
53	AUTUMN KALE SALAD WITH SWEET POTATOES, BROCCOLI AND BROWN RICE	This Autumn Kale Salad with Sweet Potatoes, Broccoli and Brown Rice recipe is nice and hearty, it’s naturally vegan and gluten-free, and all of those sweet and savory autumn flavors are SO delicious together!	SALAD INGREDIENTS:\n2 medium sweet potatoes, peeled and diced\n2 cups roughly-chopped broccoli florets (about 1 small head of broccoli)\n2 tablespoons olive oil\nsalt and pepper\n4 cups chopped kale leaves\n2 cups cooked brown rice or farro\n2/3 cup dried cranberries or cherries\n2/3 cup chopped toasted pecans\n(optional: 1/2 cup crumbled feta or goat cheese)\nVINAIGRETTE INGREDIENTS:\n3 tablespoons olive oil\n2 tablespoons red wine vinegar (or apple cider vinegar)\npinch of salt and black pepper and garlic powder, to taste	1. Heat oven to 425°F.\n<br />\n2. In a large mixing bowl, toss the diced sweet potatoes with 1 tablespoon olive oil, and toss until combined\nSpread the sweet potatoes out in an even layer on a large baking sheet.  Bake for 15 minutes, then remove from the oven and toss the sweet potatoes for even cooking.\n<br />\n3. Meanwhile, as the sweet potatoes are cooking, add the broccoli to that same large mixing bowl, along with the remaining 1 tablespoon olive oil, and toss to combine.  Once the sweet potatoes have been tossed, gently push them to one side of the baking sheet, and spread the broccoli out on the second half in an even layer.  Bake for an additional 15 minutes, or until the sweet potatoes are soft and cooked through, and the broccoli is roasted.  Remove from the oven, and transfer the sweet potatoes and broccoli to a large mixing bowl.\n<br />\n4. Add the kale*, brown rice, cranberries, pecans, and vinaigrette (see below), and toss to combine.\nServe warm, sprinkled with cheese if you’d like.  Or refrigerate in a sealed container for up to 3 days.\n<br />\n<br />TO MAKE THE VINAIGRETTE:\n<br />\n5. Whisk all ingredients together until combined.\n	https://www.gimmesomeoven.com/wp-content/uploads/2016/10/Autumn-Kale-Brown-Rice-Salad-Sweet-Potato-Broccoli-Bowls-Recipe-3-2.jpg	https://www.gimmesomeoven.com/autumn-kale-brown-rice-salad/	3	15 MINUTES	30 MINUTES	4
57	Low Fat Rice Krispy Treats	These low fat Rice Krispy treats will satisfy your sweet tooth, and your kids will enjoy them too! I replaced the butter with Smart Balance Light and used half of the required amount. I’m not a big fan of making sticky things, and I’m not sure if it gets stickier than melting marshmallows and combining them with puffed rice, but it’s so worth the getting your fingers sticky for this low fat, low point dessert. No baking required!	2 tbsp light butter spread, I used Smart Balance Light\n4 cups or 10 oz mini marshmallows\n6 cups Rice Krispies\ncooking spray	1. Spray a 9x12-inch pan with cooking spray and set aside.\n<br />\n2. Heat a large saucepan on low heat.\n<br />\n3. Melt butter spread being sure to coat the bottom of the pot to prevent sticking.\n<br />\n4. Add marshmallows and melt on low flame.\n<br />\n5. Stir until completely melted, then remove from heat.\n<br />\n6. Add Rice Krispies to the melted marshmallows, and stir until completely combined (this is the hardest part, do this quick before the marshmallows cool).\n<br />\n7. Press into the buttered pan with wax paper and cut them into 16 pieces.	https://lh4.ggpht.com/_BizpeaUzxq8/TIpsHsvH-LI/AAAAAAAACSE/uuyGIwIfKpU/s800/Low-fat-rice-krispy-treats.jpg	https://www.skinnytaste.com/low-fat-rice-krispy-treats/	3			0
54	FALL HARVEST SALAD WITH HOMEMADE CANDIED WALNUTS	Fall Harvest Salad with Homemade Candied Walnuts - Quick and easy green salad recipe with all the flavors of autumn, including 5 minute homemade candied walnuts!\n\n	FOR THE SALAD\n6 cups baby greens (arugula, spinach, romaine, kale)\n1 green or red apple, thinly sliced*\n4 ounces black mission figs, quartered\n¼ cup pomegranate seeds\n¼ cup dried black currants\n¼ cup dried cranberries\n½ cup bleu cheese crumbles\nFOR THE WALNUTS\n1 cup raw walnuts\n3 tablespoons white sugar\n1 tablespoon unsalted butter, melted\n½ teaspoon cinnamon\nPinch of nutmeg\nFOR THE VINAIGRETTE\n⅓ cup extra-virgin olive oil\n2 tablespoons apple cider vinegar\n½ tablespoon white sugar\n½ teaspoon salt\nDab of dijon mustard (⅛ of a teaspoon) - this helps keep the oil and vinegar emulsion together (if you don't like mustard, go ahead and skip this ingredient)	CANDY THE WALNUTS\n<br />\n1. Heat a skillet over medium heat. Add butter and let melt completely.\n<br />\n2. Reduce heat to medium low. Whisk in sugar, cinnamon, and nutmeg.\n<br />\n3. Add walnuts and stir to coat. Cook for 4 to 5 minutes until they are a toasted deep brown, stirring frequently to avoid the walnuts sticking together. <br />\n4. Remove them to piece of parchment paper and let cool.\n<br />\nASSEMBLE THE SALAD\n<br />\n5. In a large bowl, toss the ingredients for the salad together.\n6. In a small bowl, whisk together the ingredients for the vinaigrette. Drizzle over the salad and top with cooled candied walnuts.\n	https://www.aberdeenskitchen.com/wp-content/uploads/2021/10/Fall-Harvest-Salad-with-Homemade-Candied-Walnuts-1.jpg	https://www.aberdeenskitchen.com/2021/10/fall-harvest-salad-with-homemade-candied-walnuts/	3	5 minutes	5 minutes	4
55	Chicken Pancit Recipe	Pancit is a type of Filipino noodle dish. The noodles may vary depending on the kind of pancit recipe being prepared. For example, this recipe makes use of rice noodles called bihon. Flour sticks or noodle is also used to make pancit canton, pancit habhab, and pancit bato.\n\nThe chicken meat that I used from this pancit recipe was from the leg quarters. I use chicken leg quarters most of the time for dishes such as this because it is cheaper and tasty too. I started by boiling the chicken in water. This process totally cooked the chicken and made it tender. As a bonus, chicken stock was produced in the process. This means that we saved more money because we do not need to buy chicken stock to make our pancit.\n\n	1 1/2 lbs. chicken with bones and skin on\n1/2 lb. bihon noodles rice sticks\n1/2 lb. sotanghon noodles green bean thread\n1/2 piece cabbage chopped\n2 piece carrots julienne\n1 tablespoon garlic minced\n1/2 cup flat leaf parsley chopped\n1 piece onion sliced\n3 stalk celery or celery heart, chopped\n6 cups water\n1/2 cup soy sauce\n1/2 teaspoon ground black pepper\n2 tablespoons cooking oil	1. Pour 6 cups of water in a cooking pot. Let boil. Put-in the chicken and boil for 30 minutes.\n<br />\n2. Remove the boiled chicken from the cooking pot. Let it cool down. Shred the meat and discard the bones. <br />\n3. Set aside. Note: do not throw the water yet, we will use it later as chicken stock.\n<br />\n4. Meanwhile, soak the sotanghon and bihon noodles in water for 10 minutes. Set aside. Note: do this by using a large mixing bowl and fill it with tap water.\n<br />\n5. Heat a large pan. Pour-in 2 tablespoons cooking oil.\nLet the oil get hot then stir-fry the cabbage and carrots for 3 to 5 minutes. Remove from the pan and set aside.\n<br />\n6. On the same pan, heat the remaining cooking oil. <br />\n7. Once the oil becomes smoking hot, saute the onion, celery, and garlic.\n<br />\n8. Add the ground black pepper and shredded chicken. Cook for 3 to 5 minutes.\n<br />\n9. Pour-in soy sauce and 1 cup of chicken stock (this is the water that was used to boil the chicken). Stir and let boil. Cook for 2 minutes more.\n<br />\n10. Add the soaked noodles. Toss the noodles until all the ingredients are well blended. If the noodles is somewhat dry, add a cup of chicken stock and continue to toss until the liquid is absorbed.\n<br />\n11. Put-in the stir-fried cabbage and carrots. Toss.\n<br />\n12. Transfer to a serving plate. Serve with lemon or calamansi.\n<br /> \n13. Share and enjoy!	https://panlasangpinoy.com/wp-content/uploads/2019/03/Pancit.jpg	https://panlasangpinoy.com/chicken-pancit-medley/	3	15 minutes	40 minutes	6
56	Lumpia in the Air Fryer		1 pound Italian hot sausage links\n\n½ cup finely sliced green onions\n\n½ cup finely chopped carrots\n\n½ cup finely chopped water chestnuts\n\n¼ cup diced onions\n\n2 cloves garlic, minced\n\n2 tablespoons soy sauce\n\n½ teaspoon salt\n\n¼ teaspoon ground ginger\n\n16 spring roll wrappers\n\navocado oil cooking spray	1. Remove casing from sausage and cook in a skillet over medium heat until slightly browned, 4 to 5 minutes. Add green onions, carrots, water chestnuts, and onion. Cook and stir until onions are soft and translucent, 5 to 7 minutes. Add garlic and cook for 1 to 2 minutes. Season with soy sauce, salt, and ginger. Stir until filling is well combined; remove from heat.\n<br />\n<br />\n2. Lay a spring roll wrapper at an angle. Place a scant 1/4 cup filling in the center of the wrapper. Fold bottom corner over filling and tuck in the sides to form a roll. Use your finger to lightly moisten edges with water. Repeat with remaining wrappers and filling. Mist each roll with avocado oil cooking spray.\n<br />\n<br />\n3. Preheat an air fryer to 390 degrees F (198 degrees C).\n<br />\n<br />\n4. Place lumpia rolls in the air fryer basket, making sure they are not touching; cook in batches if necessary. Fry for 4 minutes; flip and cook until skins are crispy, about 4 minutes more.	https://www.allrecipes.com/thmb/NvBQdeb1C2xMxG3b_Etg-YONIWM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6384892-Lumpia-in-the-Air-Fryer-Yoly-4x3-1-628f08fd32b644aba1c9db89e60b0125.jpg	https://www.allrecipes.com/recipe/270708/lumpia-in-the-air-fryer/	3	15 minutes	30 minutes	16
58	Panko-Crusted Salmon	The panko adds a crunchy topping to the moist salmon for wonderful texture!  But do you even notice sometimes your breading isn’t brown when your fish is done due to the short cooking time?  We have got your fix!\n\n	2/3 cup panko (Japanese dried bread flakes)\n\n2 tablespoons minced fresh parsley\n\n1 teaspoon grated lemon zest\n\nKosher salt and freshly ground black pepper\n\n2 tablespoons good olive oil\n\nFour 6- to 8-ounce salmon fillets, skin on\n\n2 tablespoons Dijon mustard\n\n2 tablespoons vegetable oil\n\nLemon wedges, for serving	1. Preheat the oven to 425 degrees. \n<br />\n2. In a small bowl, mix together the panko, parsley, lemon zest, 1/2 teaspoon salt, and 1/2 teaspoon pepper. Drizzle with the olive oil and stir until the crumbs are evenly coated. Set aside. \n<br />\n3. Place the salmon fillets, skin side down, on a board. Generously brush the top of the fillets with mustard and then sprinkle generously with salt and pepper. Press the panko mixture thickly on top of the mustard on each salmon fillet. The mustard will help the panko adhere. \n<br />\n4. Heat the vegetable oil over medium-high heat in a 12-inch cast-iron skillet or large heavy, ovenproof pan. <br />\n5. When the oil is very hot, add the salmon fillets, skin side down, and sear for 3 to 4 minutes, without turning, to brown the skin. \n<br />\n6. Transfer the pan to the hot oven for 5 to 7 minutes until the salmon is almost cooked and the panko is browned. Remove from the oven, cover with aluminum foil, and allow to rest for 5 to 10 minutes. Serve the salmon hot or at room temperature with lemon wedges.	https://laughingspatula.com/wp-content/uploads/2014/06/Panko-Crusted-Salmon2.jpg	https://www.foodnetwork.com/recipes/ina-garten/panko-crusted-salmon-recipe-2107225	3	15 min	10 min	4
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.users (id, first_name, last_name, email, allergies, diet_pref, diet_restr) FROM stdin;
1	alpha	alphalast	alpha@gmail.com	1	1	1
2	betx	betalast	beta@gmail.com	1	1	1
4	Melissa	Nat	melissanat510@gmail.com	1	1	1
5	Melissa	Natividad	meiamayi@gmail.com	1	1	1
6	Melissa	Natividad	melissa.natividad510@gmail.com	1	1	1
7	mmm	nnn	mtestetestitestatest@gmail.com	1	1	1
14	mmm	nnn	mtestetestitestatest1@gmail.com	1	1	1
3	Melissa	Natividad	meianatividad@gmail.com	none	not fish	fish
\.


--
-- Name: collections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.collections_id_seq', 28, true);


--
-- Name: diet_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.diet_logs_id_seq', 21, true);


--
-- Name: foods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.foods_id_seq', 65, true);


--
-- Name: recipe_collection_membership_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.recipe_collection_membership_id_seq', 61, true);


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.recipes_id_seq', 60, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.users_id_seq', 14, true);


--
-- Name: collections collections_pkey; Type: CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.collections
    ADD CONSTRAINT collections_pkey PRIMARY KEY (id);


--
-- Name: diet_logs diet_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.diet_logs
    ADD CONSTRAINT diet_logs_pkey PRIMARY KEY (id);


--
-- Name: foods foods_pkey; Type: CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.foods
    ADD CONSTRAINT foods_pkey PRIMARY KEY (id);


--
-- Name: recipe_collection_membership recipe_collection_membership_pkey; Type: CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.recipe_collection_membership
    ADD CONSTRAINT recipe_collection_membership_pkey PRIMARY KEY (id);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: collections collections_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.collections
    ADD CONSTRAINT collections_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: diet_logs diet_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.diet_logs
    ADD CONSTRAINT diet_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: foods foods_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.foods
    ADD CONSTRAINT foods_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: recipe_collection_membership recipe_collection_membership_collection_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.recipe_collection_membership
    ADD CONSTRAINT recipe_collection_membership_collection_id_fkey FOREIGN KEY (collection_id) REFERENCES public.collections(id);


--
-- Name: recipe_collection_membership recipe_collection_membership_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.recipe_collection_membership
    ADD CONSTRAINT recipe_collection_membership_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipes(id);


--
-- Name: recipes recipes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

