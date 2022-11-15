--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

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
-- Name: diet; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.diet (
    id integer NOT NULL,
    type text NOT NULL,
    user_id integer
);


ALTER TABLE public.diet OWNER TO melissanatividad;

--
-- Name: diet_id_seq; Type: SEQUENCE; Schema: public; Owner: melissanatividad
--

CREATE SEQUENCE public.diet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diet_id_seq OWNER TO melissanatividad;

--
-- Name: diet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: melissanatividad
--

ALTER SEQUENCE public.diet_id_seq OWNED BY public.diet.id;


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
-- Name: saved_recipes; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.saved_recipes (
    recipe integer,
    user_id integer
);


ALTER TABLE public.saved_recipes OWNER TO melissanatividad;

--
-- Name: users; Type: TABLE; Schema: public; Owner: melissanatividad
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL
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
-- Name: diet id; Type: DEFAULT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.diet ALTER COLUMN id SET DEFAULT nextval('public.diet_id_seq'::regclass);


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
\.


--
-- Data for Name: diet; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.diet (id, type, user_id) FROM stdin;
\.


--
-- Data for Name: foods; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.foods (id, food, user_id, status, notes) FROM stdin;
1	tomatoes	3	avoid	can have if no flare-ups in 2 weeks, but generally avoid
2	jasmine rice	3	ok	\N
3	onions	3	avoid	can have if no flare-ups in 2 weeks, but generally avoid
4	tomatoes	1	ok	\N
5	limes	3	mod	in moderation
6	popcorn	3	ok	homemade is always OK
7	nutritional yeast	3	ok	\N
8	water	3	ok	\N
9	alcohol	3	avoid	spirits are ok, wine/beer in mod
10	2% milk	3	mod	in moderation
11	grapeseed oil	3	avoid	never, but very little if you have to
13	chicken	3	\N	not sure yet
\.


--
-- Data for Name: recipe_collection_membership; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.recipe_collection_membership (id, collection_id, recipe_id) FROM stdin;
1	1	24
2	1	23
3	1	22
4	1	21
5	1	20
6	2	24
7	2	23
8	1	24
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.recipes (id, name, summary, ingredients, instructions, image, url, user_id, prep_time, cook_time, yield) FROM stdin;
23	Keto Eggplant Parmesan	This keto Eggplant Parmesan is truly incredible: coated in a crispy crust that’s magically gluten free. You’ll never make it another way!	1 medium large eggplant, about 1 pound (long and thin preferable) OR see casserole variation*\n2 eggs\n½ cup grated Parmesan cheese\n½ cup almond flour\n1 tablespoon Italian seasoning (or 1 teaspoon each dried basil, oregano and thyme)\n¾ teaspoon kosher salt\n2 cups jarred marinara sauce\n1 cup grated mozzarella cheese (we used a combination of fresh mozzarella and shredded)\nFresh basil, to serve	1. Preheat the oven to 425 degrees Fahrenheit. Line a baking sheet with parchment paper or spray with cooking spray. <br />\n2. Cut off the ends of the eggplant and cut it into 3/8-inch slices. <br />\n3. Beat the eggs in a shallow bowl and set it aside. <br />\n4. Combine the Parmesan cheese, almond flour, Italian seasoning, and kosher salt in another shallow bowl and set it aside. <br />\n5. Dip each eggplant slice into the egg and then the Parmesan cheese mixture. Transfer the coated eggplant slices to the prepared sheet pan in a single layer, about 1/2-inch apart.  Use two sheet pans if you do not have one large enough to fit all the slices. <br />\n6. Bake the eggplant for about 20 minutes, flipping them halfway through, until tender and golden brown. <br />\n7. Remove the eggplant from the oven (go to Casserole Variation* if desired). Add 2 tablespoons of the marinara sauce on top of each eggplant slice and add an equal amount of mozzarella cheese on top of the sauce. <br />\n8. Return the pan to the oven and continue to bake for 5 to 7 minutes, or until the cheese is melted and the crust is golden brown. Top with torn basil. Serve with pasta (gluten free or legume pasta) or a few side dishes, or the casserole variation makes for a more filling main dish.	https://www.acouplecooks.com/wp-content/uploads/2020/09/Baked-Eggplant-Parmesan-008.jpg	https://www.acouplecooks.com/keto-eggplant-parmesan/	3	15 minutes	25 minutes	4
24	Roasted Root Vegetable Panzanella	This is a cold-weather twist on the classic Italian summer salad. Parsnips, sweet potatoes, and beets are tossed in a delicious maple brown butter dressing. It's the ultimate make-ahead side for Thanksgiving.	For the salad\n\n8 ounces (1/2 loaf) sourdough or country-style bread\n5 tablespoons olive oil, divided, plus more as needed\n1 teaspoon plus 1/4 teaspoon kosher salt, divided, plus more as needed\n1/2 teaspoon freshly ground black pepper, divided, plus more as needed\n2 pounds root vegetables, such as carrots, parsnips, sweet potatoes, and beets, peeled and cut into 1-inch pieces\n1 small red onion, cut into 1-inch pieces\nFor the brown butter dressing\n\n4 tablespoons unsalted butter\n1 tablespoon chopped fresh rosemary\n3 tablespoons apple cider vinegar, plus more as needed\n2 teaspoons Dijon mustard\n2 teaspoons maple syrup\n1/4 teaspoon kosher salt\n1/4 teaspoon freshly ground black pepper\nFor assembling\n\n1 medium bunch (about 6 ounces) lacinato kale, destemmed and torn into bite-sized pieces\n4 ounces goat cheese	1. Preheat the oven to 425°F.\n<br />Arrange the oven rack to the center of the oven.\n\n<p>\n2. Tear the bread:\n<br />Tear or slice the bread into 1-inch cubes. You should have about 4 cups cubed bread.\n\n<p>\n3. Season and toast the bread:\n<br />Place the cubed bread on a rimmed baking sheet, drizzle with 2 tablespoons olive oil, season with 1/4 teaspoon salt and 1/4 teaspoon black pepper, and toss with your hands to coat. Spread it out into an even layer and bake, tossing halfway through, until dry and golden, 6 to 8 minutes. Set aside on the baking sheet to cool.\n\n4. Roast the vegetables:\n<br />Add the root vegetables and onion on a separate rimmed baking sheet. Drizzle with 3 tablespoons olive oil, and season with 1 teaspoon kosher salt and 1/4 teaspoon freshly ground black pepper. Toss with your hands to coat and spread out in an even layer.\n\n<p>Roast the vegetables, tossing halfway through, until tender and caramelized, 40 to 45 minutes.\n\n<p>5. Make brown butter dressing:\n<br />Meanwhile, cut the butter into a few pieces and place it in a small saucepan over medium heat. Cook, stirring occasionally, until the butter just begins to toast, get brown, and has a nutty aroma, about 4 minutes total.\n\n<p>Add the rosemary and stir until fragrant, about 10 seconds. Remove from the heat and carefully stir in the vinegar, mustard, maple syrup, salt, and black pepper.\n\n<p>6. Massage the kale:\n<br />Place the kale in a large bowl. Use your hands to massage the leaves until they feel less stiff, about 1 minute.\n\n<p>7. Assemble the salad:\n<br />Once the vegetables are roasted, transfer them to the bowl of kale. Add the toasted bread and pour the dressing all over. Toss well to coat everything. \n\n<p>Let the salad rest at room temperature for at least 10 minutes, tossing occasionally, to distribute the dressing. Crumble the goat cheese on top and toss gently to combine.\n\n<p>8. Serve:\n<br />Serve or cover and store at room temperature for up to 4 hours. Before serving, taste and season with a splash of vinegar, a drizzle of olive oil, and salt and black pepper.	https://www.simplyrecipes.com/thmb/yskXndR2ccbkI9aCAKGPIdD_PLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Root-Panzanella-LEAD-5-defab282522e4aa3aedd70706a485cf5.jpg	https://www.simplyrecipes.com/roasted-root-vegetable-panzanella-recipe-6823042	3	20 mins	50 mins	6
1	a	a	a	a	\N	a	3	a	a	1
2	2	2	2	2	\N	2	3	2	2	2
7	3	3	3	3	\N	3	3	3	3	3
9	4	4	4	4	\N	4	\N	4	4	1
10	5	5	5	5	\N	5	\N	5	5	5
11	6	6	6	6	\N	6	3	6	6	6
12	7	7	7	7	\N	7	3	7	7	5
13	7	7	7	7	\N	7	3	7	7	5
14	7	7	7	7	\N	7	3	7	7	5
15	8	8	8	8	\N	88	3	8	8	8
16	9	9	9	9	\N	9	3	9	9	5
17	10	10	10	10	\N	10	3	10	10	10
18	1	1	1	1	\N	1	3	1	1	1
20	y	y	y	y	\N	y	3	y	y	2
21	7	7	7	7	\N	7	3	7	7	7
19					\N		3			0
22	8	8	8	8	\N	8	3	8	8	8
\.


--
-- Data for Name: saved_recipes; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.saved_recipes (recipe, user_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: melissanatividad
--

COPY public.users (id, first_name, last_name, email) FROM stdin;
1	alpha	alphalast	alpha@gmail.com
2	betx	betalast	beta@gmail.com
3	Melissa	Natividad	meianatividad@gmail.com
4	Melissa	Nat	melissanat510@gmail.com
5	Melissa	Natividad	meiamayi@gmail.com
6	Melissa	Natividad	melissa.natividad510@gmail.com
7	mmm	nnn	mtestetestitestatest@gmail.com
14	mmm	nnn	mtestetestitestatest1@gmail.com
\.


--
-- Name: collections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.collections_id_seq', 14, true);


--
-- Name: diet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.diet_id_seq', 1, false);


--
-- Name: foods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.foods_id_seq', 13, true);


--
-- Name: recipe_collection_membership_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.recipe_collection_membership_id_seq', 8, true);


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: melissanatividad
--

SELECT pg_catalog.setval('public.recipes_id_seq', 26, true);


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
-- Name: diet diet_pkey; Type: CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.diet
    ADD CONSTRAINT diet_pkey PRIMARY KEY (id);


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
-- Name: diet diet_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.diet
    ADD CONSTRAINT diet_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


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
-- Name: saved_recipes saved_recipes_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.saved_recipes
    ADD CONSTRAINT saved_recipes_recipe_fkey FOREIGN KEY (recipe) REFERENCES public.recipes(id);


--
-- Name: saved_recipes saved_recipes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: melissanatividad
--

ALTER TABLE ONLY public.saved_recipes
    ADD CONSTRAINT saved_recipes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

